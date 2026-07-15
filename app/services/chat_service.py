from langchain_community.vectorstores import FAISS
from langchain_groq import ChatGroq

from app.models import ChatTurn
from app.rag.prompt import build_system_prompt


class ChatService:
    """Answers questions about Nishanth using retrieval-augmented generation.

    Depends only on an already-loaded vector store and LLM client, so it can
    be constructed once at startup and reused across requests, and swapped
    out for fakes in tests without touching FastAPI wiring.
    """

    def __init__(self, vector_store: FAISS, llm: ChatGroq, retrieval_k: int, history_turns: int):
        self._vector_store = vector_store
        self._llm = llm
        self._retrieval_k = retrieval_k
        self._history_turns = history_turns

    def ask(self, question: str, history: list[ChatTurn]) -> str:
        context = self._retrieve_context(question)
        messages = self._build_messages(question, history, context)
        response = self._llm.invoke(messages)
        return response.content

    def _retrieve_context(self, question: str) -> str:
        docs = self._vector_store.similarity_search(question, k=self._retrieval_k)
        return "\n".join(doc.page_content for doc in docs)

    def _build_messages(self, question: str, history: list[ChatTurn], context: str):
        messages = [("system", build_system_prompt(context))]
        for turn in history[-self._history_turns:]:
            messages.append(("human", turn.user))
            messages.append(("assistant", turn.bot))
        messages.append(("human", question))
        return messages
