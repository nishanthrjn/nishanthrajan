"""Hugging Face Space entrypoint: a Gradio chat UI over the same ChatService
used by the FastAPI app (app/api/routes.py). Builds the FAISS indexes on
first run since the Space image only ships the committed data/ingest/
sources, not the generated (gitignored) faiss_index/ directory.
"""

import gradio as gr

from app.config import get_settings
from app.ingestion.build_index import build_vector_index
from app.models import ChatTurn
from app.rag.domains import DOMAINS
from app.rag.embeddings import get_embeddings
from app.rag.llm import get_llm
from app.rag.vector_store import load_vector_store
from app.services.chat_service import ChatService

settings = get_settings()

if not settings.faiss_index_dir.exists():
    build_vector_index(settings)

embeddings = get_embeddings(settings.embedding_model_name)
vector_stores = {
    domain: load_vector_store(settings.faiss_index_dir / domain, embeddings)
    for domain in DOMAINS
}
llm = get_llm(settings.llm_model_name, settings.llm_temperature, settings.groq_api_key)
chat_service = ChatService(vector_stores=vector_stores, llm=llm, history_turns=settings.history_turns)


def _to_turns(history: list[dict]) -> list[ChatTurn]:
    turns = []
    pending_user = None
    for message in history:
        if message["role"] == "user":
            pending_user = message["content"]
        elif message["role"] == "assistant" and pending_user is not None:
            turns.append(ChatTurn(user=pending_user, bot=message["content"]))
            pending_user = None
    return turns


def respond(message: str, history: list[dict]) -> str:
    return chat_service.ask(message, _to_turns(history))


demo = gr.ChatInterface(
    respond,
    title="TalentBot",
    description=(
        "Ask about Nishanth Rajan's professional experience, projects, skills, "
        "and education. Answers are grounded in his actual background via RAG "
        "— not general model knowledge."
    ),
    examples=[
        "What is Nishanth's primary tech stack?",
        "Tell me about the AutoPlan project.",
        "Does he have experience with Docker and CI/CD?",
        "Is he available to start immediately?",
    ],
)

if __name__ == "__main__":
    demo.launch()
