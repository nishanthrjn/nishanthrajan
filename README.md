# Nishanth Rajan — Software Engineering Portfolio & TalentBot AI Assistant

This repository contains my personal software engineering portfolio with an integrated **TalentBot** AI recruiter assistant.

TalentBot is a **Retrieval-Augmented Generation (RAG)** application designed to answer recruiter-facing questions about my professional experience, projects, technical skills, education, availability, and engineering background using a curated knowledge base.

The portfolio combines a responsive frontend with a Python/FastAPI backend, LangChain-based LLM orchestration, FAISS vector retrieval, and Groq-hosted Llama-family models.

> TalentBot is not a model trained on my CV or portfolio. It retrieves relevant professional context at query time and uses that context to generate grounded responses.

---

## 🚀 Live Demo

> 🔗 **Coming Soon** — public deployment is in progress.

The repository contains both the portfolio frontend and the TalentBot backend. The static frontend can be hosted independently, while the FastAPI/RAG backend requires a Python-capable deployment environment.

---

## 📸 Screenshot

![Portfolio and TalentBot UI](./static/Screenshot.png)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | [FastAPI](https://fastapi.tiangolo.com/) / Python |
| LLM Orchestration | [LangChain](https://www.langchain.com/) |
| LLM Provider | [Groq](https://groq.com/) / Llama-family model |
| Vector Retrieval | [FAISS](https://github.com/facebookresearch/faiss) |
| Embeddings | Hugging Face sentence-transformer embeddings |
| Frontend | HTML5 / CSS / JavaScript |
| Knowledge Base | Curated Markdown files with entity metadata |

---

## 🧠 How TalentBot Works

TalentBot uses a domain-routed RAG pipeline so questions about projects, experience, skills, education, or profile information are retrieved from the most relevant knowledge domain.

```text
User Question
     │
     ▼
┌─────────────────────┐
│    Query Router     │
│  classify_query()   │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│ Domain FAISS Index │
│   Retrieve Top-K    │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│ Retrieved Context  │
│ + Entity Metadata  │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  System Prompt +   │
│   Groq / Llama     │
└─────────┬───────────┘
          │
          ▼
     Grounded Answer
```

### Retrieval pipeline

1. **Entity-scoped ingestion** — Canonical Markdown files under `data/ingest/` are organized by professional entity or topic, such as one project, one employer/role, profile, education, skills, or FAQ content.
2. **Metadata tagging** — Ingested documents carry metadata such as entity type, entity name, source, and category so retrieved facts remain attributable to the correct project or role.
3. **Vectorization** — Documents are embedded and stored in domain-specific FAISS indexes.
4. **Query routing** — Each question is classified into the most relevant knowledge domain before retrieval.
5. **Retrieval** — Similarity search retrieves the most relevant chunks from that domain.
6. **Context injection** — Retrieved chunks and their metadata are supplied to the system prompt.
7. **Generation** — A Groq-hosted Llama-family model generates an answer using the retrieved professional context and grounding rules.

This design helps reduce cross-project and cross-employer fact attribution errors that can occur when unrelated information is retrieved from a single undifferentiated knowledge index.

---

## 🏗️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/nishanthrjn/nishanthrjn.github.io.git
cd nishanthrjn.github.io
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it:

**Windows**

```powershell
.\venv\Scripts\activate
```

**macOS / Linux**

```bash
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure environment variables

Create a `.env` file in the repository root:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Do not commit the real `.env` file or API keys.

### 5. Build the knowledge indexes

```bash
python ingest.py
```

The ingestion pipeline reads the canonical files under `data/ingest/` and builds domain-specific FAISS indexes under `faiss_index/`.

Files under `data/reference/` and top-level `reference/` are retained for human reference or CV/application workflows and should not be treated as TalentBot's canonical indexed knowledge source.

### 6. Run the application

```bash
python main.py
```

Then open:

```text
http://127.0.0.1:8000
```

---

## 📁 Project Structure

```text
nishanthrjn.github.io/
├── main.py                     # FastAPI application entry point
├── ingest.py                   # Knowledge-ingestion CLI
│
├── app/
│   ├── config.py               # Environment-driven settings
│   ├── models.py               # Pydantic request/response models
│   │
│   ├── rag/
│   │   ├── domains.py          # Knowledge-domain configuration
│   │   ├── query_router.py     # Query classification / routing
│   │   ├── embeddings.py       # Embedding configuration
│   │   ├── llm.py              # LLM integration
│   │   ├── vector_store.py     # FAISS retrieval
│   │   └── prompt.py           # Grounding and attribution rules
│   │
│   ├── services/
│   │   └── chat_service.py     # Retrieval + response-generation workflow
│   │
│   ├── api/
│   │   └── routes.py           # FastAPI routes
│   │
│   └── ingestion/
│       └── build_index.py      # Builds domain-specific FAISS indexes
│
├── data/
│   ├── ingest/                 # Canonical TalentBot knowledge base
│   │   ├── 00-profile.md
│   │   ├── 30-education.md
│   │   ├── 40-skills.md
│   │   ├── 50-faq.md
│   │   ├── experience/         # One file per professional role/entity
│   │   └── projects/           # One file per indexed project
│   │
│   ├── reference/              # Historical/reference material — not indexed
│   ├── config/
│   │   └── prompt.py
│   ├── manifest.json
│   └── README.md
│
├── reference/                  # Human/CV-generation reference material
├── faiss_index/                # Generated domain indexes
│
├── templates/
│   └── portfolio.html          # Portfolio markup
│
├── static/
│   ├── css/
│   │   └── portfolio.css
│   ├── js/
│   │   ├── data/
│   │   │   ├── content.js
│   │   │   └── projects.js
│   │   ├── modules/
│   │   └── main.js
│   ├── photo.jpeg
│   ├── Screenshot.png
│   └── Nishanth_Rajan_CV.pdf
│
├── .env                        # Local secrets — never commit
├── .gitignore
├── requirements.txt
├── LICENSE
└── README.md
```

---

## ✨ Key Features

- **Integrated Portfolio + AI Assistant** — TalentBot is embedded directly into the portfolio rather than being a separate external chatbot.
- **RAG-based Professional Q&A** — Answers are generated from retrieved professional context instead of relying only on the LLM's general knowledge.
- **Domain-Routed Retrieval** — Questions are routed to relevant knowledge domains before vector search.
- **Entity-Aware Knowledge Design** — Projects, employers, skills, education, and profile information are kept separately attributable.
- **FAISS Vector Retrieval** — Semantic retrieval over the curated knowledge base.
- **FastAPI Backend** — Python API layer for chat and retrieval workflows.
- **Groq / Llama Integration** — Llama-family inference through Groq.
- **Recruiter-Focused Interface** — Suggested questions and concise professional responses.
- **Grounding Rules** — Prompt and metadata rules are used to reduce unsupported project/employer/technology attribution.
- **Professional Fallback Behaviour** — Out-of-scope questions can be handled without inventing personal or professional facts.

---

## 💬 Example Questions

- *"What is Nishanth's primary technical background?"*
- *"Which projects demonstrate RAG experience?"*
- *"Tell me about DocuMind."*
- *"What did Nishanth build with Agent-Nexus?"*
- *"Tell me about the AutoPlan project."*
- *"Does Nishanth have professional experience with Docker and CI/CD?"*
- *"What is Nishanth's German language level?"*
- *"Is Nishanth available to start immediately?"*

---

## 🔐 Security

The repository should never contain live API credentials.

Keep secrets in environment variables and exclude local secret files through `.gitignore`.

Example:

```gitignore
.env
.env.*
!.env.example

venv/
.venv/
__pycache__/
*.pyc
```

If FAISS indexes are generated during deployment rather than version-controlled, exclude the generated index directory as well.

---

## 🤝 Contact

**Nishanth Rajan**  
Software Engineer | Backend & Applied AI

📍 Hannover, Germany · EU Blue Card  
📧 [nishanthrajandev@gmail.com](mailto:nishanthrajandev@gmail.com)  
🔗 [linkedin.com/in/nishanthrajan](https://linkedin.com/in/nishanthrajan)  
🐙 [github.com/nishanthrjn](https://github.com/nishanthrjn)

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.
