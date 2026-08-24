import logging
from pathlib import Path

from langchain_community.vectorstores import FAISS
from langchain_core.documents import Document
from langchain_text_splitters import CharacterTextSplitter

from app.config import Settings, get_settings
from app.rag.domains import DOMAIN_SOURCES
from app.rag.embeddings import get_embeddings

logger = logging.getLogger(__name__)

# data/ingest/<file>.md uses a small header block (KEY: value lines, one per
# line, terminated by the first blank line) before the markdown body -- see
# any file under data/ingest/ for examples. SOURCE_PRIORITY maps to this
# numeric authority score for downstream traceability/debugging.
AUTHORITY_BY_SOURCE_PRIORITY = {"canonical": 100, "supporting": 70}
DEFAULT_AUTHORITY = 50


def _parse_entity_file(path: Path) -> tuple[dict[str, str], str]:
    lines = path.read_text(encoding="utf-8").splitlines()
    header: dict[str, str] = {}
    body_start = len(lines)
    for i, line in enumerate(lines):
        if not line.strip():
            body_start = i + 1
            break
        key, sep, value = line.partition(":")
        if not sep:
            body_start = i
            break
        header[key.strip()] = value.strip()
    body = "\n".join(lines[body_start:]).strip()
    return header, body


def _resolve_source_files(ingest_dir: Path, source: str) -> list[Path]:
    path = ingest_dir / source
    if path.is_dir():
        return sorted(path.glob("*.md"))
    if path.is_file():
        return [path]
    raise FileNotFoundError(f"Ingestion source not found: {path}")


def _build_domain_documents(settings: Settings, ingest_dir: Path, domain: str, source: str) -> list[Document]:
    splitter = CharacterTextSplitter(chunk_size=settings.chunk_size, chunk_overlap=settings.chunk_overlap)
    documents: list[Document] = []

    for path in _resolve_source_files(ingest_dir, source):
        header, body = _parse_entity_file(path)
        if not body:
            continue

        metadata = {
            "source": str(path.relative_to(ingest_dir).as_posix()),
            "doc_type": domain,
            "entity_type": header.get("ENTITY_TYPE", ""),
            "entity_name": header.get("ENTITY_NAME", path.stem),
            "authority": AUTHORITY_BY_SOURCE_PRIORITY.get(header.get("SOURCE_PRIORITY", ""), DEFAULT_AUTHORITY),
        }
        if "CAPABILITY_TAGS" in header:
            metadata["capability_tags"] = header["CAPABILITY_TAGS"]
        if "EXCLUDED_CAPABILITY_TAGS" in header:
            metadata["excluded_capability_tags"] = header["EXCLUDED_CAPABILITY_TAGS"]

        doc = Document(page_content=body, metadata=metadata)
        # A file can exceed the embedding model's context window (e.g.
        # all-MiniLM-L6-v2 truncates at 256 tokens); split it further rather
        # than silently losing its tail, but every resulting sub-chunk still
        # carries this file's entity_name -- it never gets mixed with
        # another entity's content, since each file is already one entity.
        if len(doc.page_content) > settings.chunk_size:
            documents.extend(splitter.split_documents([doc]))
        else:
            documents.append(doc)

    return documents


def build_vector_index(settings: Settings) -> None:
    """Build one FAISS index per knowledge domain from data/ingest/."""
    ingest_dir = settings.data_dir / "ingest"
    embeddings = get_embeddings(settings.embedding_model_name)

    for domain, source in DOMAIN_SOURCES.items():
        documents = _build_domain_documents(settings, ingest_dir, domain, source)
        if not documents:
            raise ValueError(f"No entities found for domain '{domain}' under {ingest_dir / source}")

        vector_store = FAISS.from_documents(documents, embeddings)
        domain_dir = settings.faiss_index_dir / domain
        vector_store.save_local(str(domain_dir))

        logger.info("Built '%s' index at %s (%d chunks from %s)", domain, domain_dir, len(documents), source)


def main() -> None:
    logging.basicConfig(level=logging.INFO, format="%(message)s")
    build_vector_index(get_settings())


if __name__ == "__main__":
    main()
