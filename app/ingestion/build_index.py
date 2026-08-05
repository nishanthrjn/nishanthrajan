import logging
from pathlib import Path

from langchain_community.document_loaders import TextLoader
from langchain_community.vectorstores import FAISS
from langchain_core.documents import Document
from langchain_text_splitters import CharacterTextSplitter

from app.config import Settings, get_settings
from app.rag.embeddings import get_embeddings

logger = logging.getLogger(__name__)


def _find_source_files(settings: Settings) -> list[Path]:
    paths: set[Path] = set()
    for pattern in settings.data_glob_patterns:
        paths.update(settings.data_dir.rglob(pattern))
    return sorted(paths)


def _load_documents(settings: Settings, paths: list[Path]) -> list[Document]:
    documents: list[Document] = []
    for path in paths:
        loaded = TextLoader(str(path), encoding="utf-8").load()
        for doc in loaded:
            doc.metadata["source"] = str(path.relative_to(settings.data_dir).as_posix())
        documents.extend(loaded)
    return documents


def build_vector_index(settings: Settings) -> None:
    """Chunk every source document under data_dir, embed them, and persist a FAISS index."""
    source_files = _find_source_files(settings)
    if not source_files:
        patterns = ", ".join(settings.data_glob_patterns)
        raise FileNotFoundError(f"No files matching {patterns} found under {settings.data_dir}")

    documents = _load_documents(settings, source_files)

    splitter = CharacterTextSplitter(
        chunk_size=settings.chunk_size,
        chunk_overlap=settings.chunk_overlap,
    )
    chunks = splitter.split_documents(documents)

    embeddings = get_embeddings(settings.embedding_model_name)
    vector_store = FAISS.from_documents(chunks, embeddings)
    vector_store.save_local(str(settings.faiss_index_dir))

    filenames = ", ".join(str(p.relative_to(settings.data_dir).as_posix()) for p in source_files)
    logger.info(
        "Vector index built at %s (%d chunks from %d files: %s)",
        settings.faiss_index_dir,
        len(chunks),
        len(source_files),
        filenames,
    )


def main() -> None:
    logging.basicConfig(level=logging.INFO, format="%(message)s")
    build_vector_index(get_settings())


if __name__ == "__main__":
    main()
