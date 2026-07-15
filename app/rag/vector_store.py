from pathlib import Path

from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings


def load_vector_store(index_dir: Path, embeddings: HuggingFaceEmbeddings) -> FAISS:
    """Load a previously built FAISS index from disk."""
    return FAISS.load_local(str(index_dir), embeddings, allow_dangerous_deserialization=True)
