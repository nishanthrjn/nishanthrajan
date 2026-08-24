"""Knowledge domains shared by ingestion and retrieval.

Each domain maps to one file or one directory of files under
data/ingest/. A domain whose source is a directory indexes every .md file
in it as a separate entity (one project, one employer). Adding a new
knowledge domain means adding one entry here and adding the corresponding
file(s) under data/ingest/ -- nothing else needs to change.
"""

DOMAIN_SOURCES: dict[str, str] = {
    "profile": "00-profile.md",
    "education": "30-education.md",
    "skill": "40-skills.md",
    "faq": "50-faq.md",
    "experience": "experience",
    "project": "projects",
}

DOMAINS: tuple[str, ...] = tuple(DOMAIN_SOURCES)
