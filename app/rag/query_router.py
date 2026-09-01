"""Keyword-based routing of a question to one knowledge domain.

Deliberately simple: a portfolio chatbot with a handful of small domains
doesn't need a reranker, embeddings-based router, or hybrid retrieval. Get
this basic routing reliable first.
"""

import difflib
import re

_YEAR_RE = re.compile(r"\b(19|20)\d{2}\b")
_WORD_RE = re.compile(r"[a-z0-9]+")

# Tolerates single-word typos ("experinec" -> "experience") via fuzzy word
# matching. Keywords shorter than _FUZZY_MIN_LEN and multi-word keywords are
# exact-match only -- fuzzy-matching short words causes false positives
# (e.g. "still" ~ "skill" at ratio 0.80).
_FUZZY_MIN_LEN = 5
_FUZZY_CUTOFF = 0.82


def _keyword_in(q: str, words: list[str], keyword: str) -> bool:
    if keyword in q:
        return True
    if " " in keyword or len(keyword) < _FUZZY_MIN_LEN:
        return False
    return bool(difflib.get_close_matches(keyword, words, n=1, cutoff=_FUZZY_CUTOFF))


def _matches(question_lower: str, words: list[str], keywords: tuple[str, ...]) -> bool:
    return any(_keyword_in(question_lower, words, keyword) for keyword in keywords)


_PROJECT_KEYWORDS = (
    "project", "built", "portfolio", "github", "rag project", "ai project",
    # Named entities from data/ingest/projects/: a query naming one of these
    # ("tell me about DocuMind") won't contain a generic word like "project"
    # at all, so entity names need to be routing keywords too. Add a
    # project's name here when a new one is added under data/ingest/projects/.
    # NOTE: only entities that actually live under data/ingest/projects/ belong
    # here -- a product built *during* a job (e.g. AutoPlan, Grandcivitas)
    # lives in that employer's data/ingest/experience/ file, not here.
    "talentbot", "documind", "agent-nexus", "agentnexus",
    "backupworkbench", "careerforge", "codearena", "smartops", "studynexus",
    "scrapvision", "web-gis", "webgis", "mnist", "rsna", "knee abnormality",
)
_EXPERIENCE_KEYWORDS = (
    "experience", "worked", "company", "employer", "career", "job",
    # Employer names from data/ingest/experience/ -- same rationale as above.
    "greenway", "fournxt", "smartdale", "idsi", "seven seas", "visionics", "iset",
    "kauschke",
    # Products/systems built *during* employment, documented inside the
    # relevant employer's experience file rather than under projects/.
    "grandcivitas", "autoplan", "planpermit", "agnipermit", "arcgis",
    "edwinxp", "cadxpert",
)
_SKILL_KEYWORDS = ("skill", "technology", "stack", "know", "framework")
_EDUCATION_KEYWORDS = ("education", "degree", "study", "university", "course")
_FAQ_KEYWORDS = ("salary", "compensation", "available", "availability", "relocat")


def classify_query(question: str) -> str:
    q = question.lower()
    words = _WORD_RE.findall(q)
    if _matches(q, words, _PROJECT_KEYWORDS):
        return "project"
    if _matches(q, words, _EXPERIENCE_KEYWORDS):
        return "experience"
    if _matches(q, words, _SKILL_KEYWORDS):
        return "skill"
    if _matches(q, words, _EDUCATION_KEYWORDS):
        return "education"
    if _matches(q, words, _FAQ_KEYWORDS):
        return "faq"
    # A bare year/year-range ("what did he do in 2022-2023") names no domain
    # keyword but is almost always asking about a dated employment, study, or
    # relocation period -- all of which live under data/ingest/experience/.
    if _YEAR_RE.search(q):
        return "experience"
    return "profile"
