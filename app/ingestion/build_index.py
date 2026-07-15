import logging

from langchain_community.document_loaders import TextLoader
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import CharacterTextSplitter

from app.config import Settings, get_settings
from app.rag.embeddings import get_embeddings

logger = logging.getLogger(__name__)


def build_vector_index(settings: Settings) -> None:
    """Chunk the resume, embed it, and persist a FAISS index to disk."""
    if not settings.resume_path.exists():
        raise FileNotFoundError(f"Resume not found at {settings.resume_path}")

    documents = TextLoader(str(settings.resume_path)).load()

    splitter = CharacterTextSplitter(
        chunk_size=settings.chunk_size,
        chunk_overlap=settings.chunk_overlap,
    )
    chunks = splitter.split_documents(documents)

    embeddings = get_embeddings(settings.embedding_model_name)
    vector_store = FAISS.from_documents(chunks, embeddings)
    vector_store.save_local(str(settings.faiss_index_dir))

    logger.info("Vector index built at %s (%d chunks)", settings.faiss_index_dir, len(chunks))


def main() -> None:
    logging.basicConfig(level=logging.INFO, format="%(message)s")
    build_vector_index(get_settings())


if __name__ == "__main__":
    main()
