from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api.routes import router
from app.config import get_settings
from app.rag.domains import DOMAINS
from app.rag.embeddings import get_embeddings
from app.rag.llm import get_llm
from app.rag.vector_store import load_vector_store
from app.services.chat_service import ChatService


@asynccontextmanager
async def lifespan(app: FastAPI):
    settings = get_settings()

    embeddings = get_embeddings(settings.embedding_model_name)
    vector_stores = {
        domain: load_vector_store(settings.faiss_index_dir / domain, embeddings)
        for domain in DOMAINS
    }
    llm = get_llm(settings.llm_model_name, settings.llm_temperature, settings.groq_api_key)

    app.state.settings = settings
    app.state.chat_service = ChatService(
        vector_stores=vector_stores,
        llm=llm,
        retrieval_k=settings.retrieval_k,
        history_turns=settings.history_turns,
    )
    yield


def create_app() -> FastAPI:
    settings = get_settings()
    app = FastAPI(lifespan=lifespan)

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_allow_origins,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.mount("/static", StaticFiles(directory=str(settings.static_dir)), name="static")
    app.include_router(router)

    return app
