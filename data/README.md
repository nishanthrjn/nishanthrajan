# TalentBot Knowledge Pack v3

This pack separates recruiter-facing RAG knowledge from comprehensive reference material.

## IMPORTANT

Index ONLY the `ingest/` folder.

Do NOT index:
- `reference/`
- this README
- old CVs
- tailored CVs
- cover letters
- job descriptions
- previous FAISS indexes
- old `resume.txt` files
- audit files

The `reference/` folder is for humans and application-generation workflows only.

## Why this structure

The previous knowledge pack repeated the same facts across `resume.txt`, `MasterCV.md`,
`projects.md`, `skills.md`, and profile files. That creates duplicate retrieval candidates
and makes it easier for an LLM to attach one project's technologies to another project.

The v3 ingestion set uses one entity per document wherever possible.

Examples:
- TalentBot is one project document.
- DocuMind is one project document.
- Agent-Nexus is one project document.
- Each employer/period is a separate experience document.

This preserves entity boundaries even when a text splitter creates smaller chunks.

## Required rebuild procedure

1. Stop the TalentBot application.
2. Delete the existing FAISS index AND its metadata/docstore files.
3. Remove old knowledge files from the application's ingestion data directory.
4. Copy only the contents of `ingest/` into the ingestion source directory.
5. Rebuild the index from zero.
6. Restart the application.
7. Verify the corrected system prompt is actually loaded.
8. Run retrieval diagnostics before judging the final LLM answer.

## Recommended loader metadata

For each loaded file store at least:
- `source`
- `entity_type`
- `entity_name`

The files themselves also contain ENTITY_TYPE and ENTITY_NAME fields so they remain
understandable even if your current loader does not parse custom metadata.

## Retrieval test

Question:
`What projects show your RAG experience?`

Expected facts:
- TalentBot demonstrates RAG.
- DocuMind demonstrates RAG.
- Agent-Nexus does NOT demonstrate RAG. It is a Python/NegMAS automated-negotiation project.

If Agent-Nexus is returned as a RAG project after rebuilding, inspect the retrieved chunks.
Do not tune the LLM first; fix retrieval or stale data first.
