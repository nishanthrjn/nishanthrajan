import logging

from langchain_community.vectorstores import FAISS
from langchain_core.documents import Document
from langchain_groq import ChatGroq

from app.models import ChatTurn
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

    Depends only on already-loaded vector stores and an LLM client, so it
    can be constructed once at startup and reused across requests, and
    swapped out for fakes in tests without touching FastAPI wiring.
    """

    def __init__(self, vector_stores: dict[str, FAISS], llm: ChatGroq, retrieval_k: int, history_turns: int):
        self._vector_stores = vector_stores
        self._llm = llm
        self._retrieval_k = retrieval_k
        self._history_turns = history_turns

    def ask(self, question: str, history: list[ChatTurn]) -> str:
        domain = classify_query(question)
        docs = self._retrieve(domain, question)
        logger.debug(
            "domain=%s question=%r retrieved=%s",
            domain, question,
            [(d.metadata.get("entity_name"), d.metadata.get("source")) for d in docs],
        )
        context = self._format_context(docs)
        messages = self._build_messages(question, history, context)
        response = self._llm.invoke(messages)
        return response.content

    def _retrieve(self, domain: str, question: str) -> list[Document]:
        store = self._vector_stores.get(domain)
        if store is None:
            return []
        return store.similarity_search(question, k=self._retrieval_k)

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
