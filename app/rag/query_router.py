"""Keyword-based routing of a question to one knowledge domain.

Deliberately simple: a portfolio chatbot with a handful of small domains
doesn't need a reranker, embeddings-based router, or hybrid retrieval. Get
this basic routing reliable first.
"""

_PROJECT_KEYWORDS = (
    "project", "built", "portfolio", "github", "rag project", "ai project",
    # Named entities from data/ingest/projects/: a query naming one of these
    # ("tell me about DocuMind") won't contain a generic word like "project"
    # at all, so entity names need to be routing keywords too. Add a
    # project's name here when a new one is added under data/ingest/projects/.
    "talentbot", "documind", "agent-nexus", "agentnexus", "kauschke",
    "grandcivitas", "autoplan", "planpermit", "agnipermit", "arcgis",
    "edwinxp", "cadxpert", "backupworkbench", "careerforge", "codearena",
    "smartops", "studynexus", "scrapvision",
)
_EXPERIENCE_KEYWORDS = (
    "experience", "worked", "company", "employer", "career", "job",
    # Employer names from data/ingest/experience/ -- same rationale as above.
    "greenway", "fournxt", "smartdale", "idsi", "seven seas", "visionics", "iset",
)
_SKILL_KEYWORDS = ("skill", "technology", "stack", "know", "framework")
_EDUCATION_KEYWORDS = ("education", "degree", "study", "university", "course")
_FAQ_KEYWORDS = ("salary", "compensation", "available", "availability", "relocat")


def classify_query(question: str) -> str:
    q = question.lower()
    if any(keyword in q for keyword in _PROJECT_KEYWORDS):
        return "project"
    if any(keyword in q for keyword in _EXPERIENCE_KEYWORDS):
        return "experience"
    if any(keyword in q for keyword in _SKILL_KEYWORDS):
        return "skill"
    if any(keyword in q for keyword in _EDUCATION_KEYWORDS):
        return "education"
    if any(keyword in q for keyword in _FAQ_KEYWORDS):
        return "faq"
    return "profile"
