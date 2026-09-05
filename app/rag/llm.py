from functools import lru_cache

from langchain_groq import ChatGroq


@lru_cache
def get_llm(model_name: str, temperature: float, api_key: str) -> ChatGroq:
    """Return a cached Groq chat model instance for the given configuration."""
    return ChatGroq(model_name=model_name, temperature=temperature, groq_api_key=api_key)
