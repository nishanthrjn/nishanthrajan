from functools import lru_cache

from langchain_huggingface import HuggingFaceEmbeddings


@lru_cache
def get_embeddings(model_name: str) -> HuggingFaceEmbeddings:
    """Return a cached embeddings model instance for the given model name."""
    return HuggingFaceEmbeddings(model_name=model_name)
