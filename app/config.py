from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR = Path(__file__).resolve().parent.parent


class Settings(BaseSettings):
    """Central application configuration, loaded from environment / .env."""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    groq_api_key: str = ""
    llm_model_name: str = "openai/gpt-oss-20b"
    llm_temperature: float = 0.1
    embedding_model_name: str = "all-MiniLM-L6-v2"

    resume_path: Path = BASE_DIR / "data" / "resume.txt"
    faiss_index_dir: Path = BASE_DIR / "faiss_index"
    static_dir: Path = BASE_DIR / "static"
    templates_dir: Path = BASE_DIR / "templates"

    chunk_size: int = 500
    chunk_overlap: int = 50
    retrieval_k: int = 4
    history_turns: int = 4

    cors_allow_origins: list[str] = ["*"]


@lru_cache
def get_settings() -> Settings:
    return Settings()
