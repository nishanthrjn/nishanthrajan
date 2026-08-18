# TalentBot Portfolio Knowledge Pack v2

Use these files as the factual knowledge base for TalentBot and the portfolio website.

Recommended ingestion order:

1. `resume.txt` — recruiter-friendly consolidated knowledge + FAQ
2. `MasterCV.md` — comprehensive source of truth
3. `career-history.md` — chronology and official titles
4. `projects.md` — project descriptions and claim boundaries
5. `skills.md` — skills separated by evidence level
6. `education-and-upskilling.md` — education, coursework, continuing development
7. `profile-statements.md` — reusable positioning and career-transition language

`resume-audit.md` is for maintenance/review and does not need to be exposed publicly. It records why some Claude-generated claims were corrected or excluded.

RAG guidance:

- Chunk by Markdown heading/section rather than arbitrary fixed character counts where possible.
- Preserve section titles in chunk metadata.
- Store source filename and heading in metadata for traceability.
- Prefer canonical files over generated CVs when facts conflict.
- Do not let TalentBot infer unsupported duration, proficiency level, production status, competition details, or work authorization.
