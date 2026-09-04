import logging

from langchain_community.vectorstores import FAISS
from langchain_core.documents import Document
from langchain_groq import ChatGroq

from app.models import ChatTurn
from app.rag.formatting import strip_markdown
from app.rag.prompt import build_system_prompt
from app.rag.query_router import classify_query

logger = logging.getLogger(__name__)


class ChatService:
    """Answers questions about Nishanth using retrieval-augmented generation.

    Retrieval is domain-routed: a question is classified into one knowledge
    domain (project / experience / skill / education / profile) and only
    that domain's index is searched, rather than one index covering
    everything -- this keeps e.g. a projects question from pulling in
    unrelated skills-list chunks that happen to score similarly.

    Once routed, the entire domain is retrieved rather than a similarity-
    limited top-k: each domain is small by design (a handful of employer or
    project documents), and a fixed k below the domain's chunk count silently
    drops entries for any question that touches the whole domain (e.g. "how
    many years of C# experience" needs every employer, not just the ones
    whose chunks score closest to the literal words "C#"/"experience").

    classify_query's "profile" result doubles as "no domain keyword/year
    matched" (profile has no keyword list of its own -- it's the catch-all),
    so a bare follow-up like "exactly how many" that carries no topic of its
    own falls back to the previous turn's domain instead of resetting to
    profile. This is a heuristic, not real topic tracking: an abrupt subject
    change right after a keyword-bearing question (e.g. "where does he
    live?" right after an IDSi question) will incorrectly stick to the prior
    domain too. Acceptable for a small portfolio chatbot; a real fix would
    rewrite the follow-up into a standalone question via an extra LLM call.

    Depends only on already-loaded vector stores and an LLM client, so it
    can be constructed once at startup and reused across requests, and
    swapped out for fakes in tests without touching FastAPI wiring.
    """

    def __init__(self, vector_stores: dict[str, FAISS], llm: ChatGroq, history_turns: int):
        self._vector_stores = vector_stores
        self._llm = llm
        self._history_turns = history_turns

    def ask(self, question: str, history: list[ChatTurn]) -> str:
        domain = classify_query(question)
        if domain == "profile" and history:
            domain = classify_query(history[-1].user)
        docs = self._retrieve(domain, question)
        docs = self._sort_most_recent_first(docs)
        logger.debug(
            "domain=%s question=%r retrieved=%s",
            domain, question,
            [(d.metadata.get("entity_name"), d.metadata.get("source")) for d in docs],
        )
        context = self._format_context(docs)
        messages = self._build_messages(question, history, context)
        response = self._llm.invoke(messages)
        return strip_markdown(response.content)

    def _retrieve(self, domain: str, question: str) -> list[Document]:
        store = self._vector_stores.get(domain)
        if store is None:
            return []
        return store.similarity_search(question, k=store.index.ntotal)

    def _sort_most_recent_first(self, docs: list[Document]) -> list[Document]:
        """Order retrieved chunks most-recent-first by their entity's period_end.

        Asking the LLM to reorder a list of employers chronologically has the
        same reliability problem as asking it to sum their durations -- it
        gets scrambled. period_end (set at ingestion time from each entity's
        "Period: ... - ..." line) makes this a stable sort instead of a task
        left to the model. Entities with no period_end (e.g. the precomputed
        C# total, or profile/skill/faq/project documents) sort first and keep
        their relative retrieval order (Python's sort is stable).
        """
        return sorted(docs, key=lambda d: d.metadata.get("period_end", float("inf")), reverse=True)

    def _format_context(self, docs: list[Document]) -> str:
        blocks = []
        for doc in docs:
            entity = doc.metadata.get("entity_name", "")
            source = doc.metadata.get("source", "")
            header = f"[{entity} — {source}]" if entity else f"[{source}]"
            blocks.append(f"{header}\n{doc.page_content}")
        return "\n\n".join(blocks)

    def _build_messages(self, question: str, history: list[ChatTurn], context: str):
        messages = [("system", build_system_prompt(context))]
        for turn in history[-self._history_turns:]:
            messages.append(("human", turn.user))
            messages.append(("assistant", turn.bot))
        messages.append(("human", question))
        return messages
