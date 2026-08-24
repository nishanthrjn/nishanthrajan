# TalentBot 🤖 | AI-Powered Professional Portfolio

**TalentBot** is a Retrieval-Augmented Generation (RAG) application that acts as an interactive AI surrogate for my professional background. Instead of reading a static PDF, recruiters and collaborators can have a real-time conversation with an AI grounded in more than a decade of professional software-development experience.

---

## 🚀 Live Demo

> 🔗 **Coming Soon** — Deployment on Render in progress.

---

## 📸 Screenshot

![TalentBot UI](./static/Screenshot.png)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| LLM Orchestration | [LangChain](https://www.langchain.com/) |
| Inference Engine | [Groq LPU](https://groq.com/) — Llama 3.3-70b |
| Vector Database | [FAISS](https://github.com/facebookresearch/faiss) |
| Embeddings | HuggingFace `all-MiniLM-L6-v2` |
| Backend | [FastAPI](https://fastapi.tiangolo.com/) (Python 3.11+) |
| Frontend | HTML5 / Tailwind CSS / JavaScript |

---

## 🧠 How It Works (Domain-Routed RAG)

```
User Question
     │
     ▼
┌─────────────────────┐
│   Query Router       │  ← keyword classifier: project / experience /
│  (classify_query)    │     skill / education / profile
└────────┬─────────────┘
         │  routes to ONE domain
         ▼
┌─────────────────────┐
│  Domain FAISS Index  │  ← e.g. faiss_index/project/ only —
│  (Retrieve Top-K)    │     never searches unrelated domains
└────────┬─────────────┘
         │
         ▼
┌─────────────────────┐
│  Context Injection   │  ← Retrieved chunks (each tagged with its
└────────┬─────────────┘     entity_name + source) → System Prompt
         │
         ▼
┌─────────────────────┐
│   Groq / Llama 3      │  ← Generates a grounded, factual response
└────────┬─────────────┘
         │
         ▼
    Final Answer
```

1. **Ingestion** — Five canonical markdown files (`data/*.md`) are split heading-aware: each `##` section (one project, one role, one topic) becomes exactly one chunk, tagged with `source`/`doc_type`/`entity_name`/`category` metadata. A section is only split further if it exceeds the embedding model's context window — and every resulting sub-chunk still belongs to a single entity, never a blend of two.
2. **Vectorization** — Each of the five domains is embedded and saved to its own FAISS index under `faiss_index/<domain>/`.
3. **Routing** — A question is classified into exactly one domain before any retrieval happens, so a projects question never competes against skills-list chunks for the same top-K slots.
4. **Retrieval** — The classified domain's index is searched via similarity search.
5. **Augmentation** — Retrieved chunks are injected into the system prompt, each labeled with its source entity so the model can attribute facts correctly.
6. **Generation** — Llama 3 (via Groq LPU) generates a response grounded strictly in the retrieved context, under an explicit rule not to name a project/employer/technology absent from that context.

This exists because the earlier single-index design let a generic technology mention in one project's chunk get semantically confused with another project — see `data/README.md` for the specifics.

---

## 🏗️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/nishanthrjn/TalentBot.git
cd TalentBot
```

### 2. Set up environment variables

Create a `.env` file in the root directory:

```env
GROQ_API_KEY=your_gsk_key_here
```

> Get your free API key at [console.groq.com](https://console.groq.com)

### 3. Install dependencies

```bash
python -m venv venv
source venv/bin/activate       # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
```

### 4. Ingest the canonical knowledge files

```bash
python ingest.py
```

This reads `data/ingest/` — one markdown file per entity (one project, one employer, plus profile/education/skills/FAQ files), each with a small `KEY: value` header (`ENTITY_TYPE`, `ENTITY_NAME`, and for projects `CAPABILITY_TAGS`/`EXCLUDED_CAPABILITY_TAGS`) — and builds one FAISS index per domain under `faiss_index/`. To grow the knowledge base, add a new file under the right `data/ingest/` folder (or add a new domain in `app/rag/domains.py` for a genuinely new knowledge type), then re-run this. `data/reference/` (old flat files) and top-level `reference/` (`MasterCV.md`, `resume.txt`) are for humans and CV generation, not ingestion — see `data/README.md` and `data/manifest.json` for the full picture.

### 5. Run the application

```bash
python main.py
```

Visit `http://127.0.0.1:8000` in your browser.

---

## 📁 Project Structure

```
TalentBot/
├── main.py                  # FastAPI app entry point (thin, delegates to app/)
├── ingest.py                # CLI entry point for the ingestion pipeline
├── app/
│   ├── config.py             # Settings (env-driven)
│   ├── models.py              # Pydantic request/response models
│   ├── rag/
│   │   ├── domains.py          # THE domain↔canonical-file mapping (single source of truth)
│   │   ├── query_router.py     # classify_query(): routes a question to one domain
│   │   ├── embeddings.py, llm.py, vector_store.py, prompt.py
│   ├── services/
│   │   └── chat_service.py    # Domain-routed retrieval + grounded generation
│   ├── api/
│   │   └── routes.py          # FastAPI routes ("/", "/chat")
│   └── ingestion/
│       └── build_index.py        # Parses data/ingest/ headers, builds one FAISS index per domain
├── data/
│   ├── ingest/                 # THE indexed knowledge base — one file per entity
│   │   ├── 00-profile.md, 30-education.md, 40-skills.md, 50-faq.md
│   │   ├── experience/          # one file per role
│   │   └── projects/            # one file per featured project
│   ├── reference/              # old flat files, kept for history — NOT indexed
│   ├── config/prompt.py        # source the live system prompt was merged from
│   ├── manifest.json           # ingestion ground truth (do-not-index list, attribution)
│   └── README.md               # explains all of the above
├── reference/                 # MasterCV.md, resume.txt — human/CV-generation use, NOT indexed
├── faiss_index/                # Generated per-domain indexes (auto-created): project/, experience/, ...
├── templates/
│   └── portfolio.html       # Portfolio page (markup only)
├── static/
│   ├── css/portfolio.css     # Extracted styles
│   ├── js/
│   │   ├── data/              # content.js (profile/contact/skills), projects.js
│   │   │                      # (project catalog, per-project enabled/featured flags)
│   │   ├── modules/            # renderProfile.js, renderProjects.js, chat, modal, ...
│   │   └── main.js
│   ├── photo.jpeg
│   ├── Screenshot.png
│   └── Nishanth_Rajan_CV.pdf
├── .env                     # API keys (never committed)
├── .gitignore
├── requirements.txt
└── README.md
```

---

## 📈 Key Features

- **Contextual Accuracy** — The bot is strictly grounded in my professional history, minimising hallucinations via RAG.
- **Low Latency** — Groq's LPU hardware delivers near-instant response times even for large models.
- **Fallback Logic** — Custom professional fallback for out-of-scope queries (e.g. "I can only answer questions about Nishanth's background").
- **Recruiter-Friendly UI** — Clean chat interface with suggested starter questions.

---

## 💬 Example Questions to Ask

- *"What is Nishanth's primary tech stack?"*
- *"Tell me about the AutoPlan project."*
- *"What is CareerForge?"*
- *"Does Nishanth have experience with Docker and CI/CD?"*
- *"What is his German language level?"*
- *"Is he available to start immediately?"*

---

## 🤝 Contact

**Nishanth Rajan** — Software Engineer | EU Blue Card Holder

📍 Hannover, Germany
📧 [nishanthrajandev@gmail.com](mailto:nishanthrajandev@gmail.com)
🔗 [linkedin.com/in/nishanthrajan](https://linkedin.com/in/nishanthrajan)
🐙 [github.com/nishanthrjn](https://github.com/nishanthrjn)

---

## 📄 License

MIT License — feel free to fork and adapt for your own portfolio chatbot.