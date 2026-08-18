export const CONTACT = {
  email: 'nishanthrajandev@gmail.com',
  phone: '+49 163 833 2675',
  phoneHref: 'tel:+491638332675',
  location: 'Hannover, Germany',
  locationDetail: 'Hannover, Germany · EU Blue Card',
  linkedinUrl: 'https://linkedin.com/in/nishanthrajan',
  linkedinHandle: 'linkedin.com/in/nishanthrajan',
  githubUrl: 'https://github.com/nishanthrjn',
  githubHandle: 'github.com/nishanthrjn',
  cvUrl: '/static/Nishanth_Rajan_CV.pdf',
};

export const PROFILE = {
  name: 'Nishanth Rajan',
  role: 'Software Engineer | Applied AI | Agentic Systems · Hannover',
  photo: '/static/photo.jpeg',

  heroStatus: 'AVAILABLE · EU BLUE CARD · HANNOVER, DE',
  heroHeadline: 'Engineering software for an AI-native future',
  heroSub: 'Focus: Python, C#, LLM architectures, RAG pipelines, agentic systems, document intelligence.<br>Over a Decade of experience building backend, desktop, and SQL workflow solutions — now engineering AI-first systems.',
  heroPills: [
    { text: 'LLM ORCHESTRATION' },
    { text: 'RAG PIPELINES' },
    { text: 'AGENTIC SYSTEMS' },
    { text: 'C# / .NET', variant: 'y' },
    { text: 'PYTHON', variant: 'y' },
    { text: 'ANAC 2026 · 4th PLACE', variant: 'g' },
  ],
  techNodes: [
    { icon: 'i-python', label: 'Python<br>AI/ML' },
    { icon: 'i-dotnet', label: 'C# / .NET<br>Primary Stack' },
    { icon: 'i-llm', label: 'LLM<br>Groq' },
    { icon: 'i-vector', label: 'pgvector<br>FAISS' },
    { icon: 'i-agent', label: 'RAG' },
    { icon: 'i-docker', label: 'Docker / DevOps<br>AWS exposure' },
    { icon: 'i-trophy', label: 'Agents<br>NegMAS' },
    { icon: 'i-llm', label: 'Deep Learning<br>Neural Networks' },
  ],

  aboutBio: "Over a decade of engineering precision spanning backend systems, desktop applications, and enterprise SQL workflows — now focused full-time on agentic and document-intelligence systems: LLM architectures, RAG pipelines, and multi-agent orchestration. Competed solo as an MSc student at ANAC 2026 (IJCAI), placing 4th against multi-person research teams with a Bayesian opponent-modeling negotiation agent.",
  education: { icon: 'i-grad', name: 'Leibniz Universität Hannover', sub: 'MSc Computer Science (ongoing)' },
  languages: [
    { code: 'EN', name: 'English', level: 'C1 — Advanced', bg: 'rgba(37,99,235,0.14)', color: '#60a5fa' },
    { code: 'DE', name: 'German', level: 'B1 — Intermediate', bg: 'rgba(251,191,36,0.14)', color: 'var(--yellow)' },
  ],
  philosophy: "Each project is built to demonstrate a distinct engineering capability — retrieval-augmented generation, document intelligence with verifiable citations, multi-agent coordination, and competitive autonomous negotiation. The throughline is production-grade AI systems, not demos.",

  footerCopyright: '© 2026 Nishanth Rajan · Software Engineer | Applied AI | Agentic System · Hannover, Germany',
};

export const TIMELINE = [
  { company: 'iSET', role: 'Trainee', desc: 'CIM System including a 3D Modelling CAD Software development — C/C++, OpenGL, Qt.' },
  { company: 'Visionics', role: 'Software Engineer', desc: 'EDA/CAD/CAE desktop suite — C++ / C# interop, TCP/IP license manager, 30%+ performance gains.' },
  { company: 'Seven Seas', role: 'Team Lead', desc: 'ERP / CRM / POS / hospitality suite — 5-developer team, Crystal Reports financial reporting.' },
  { company: 'IDSi', role: 'Sr. Engineer → Associate PM', desc: 'AutoCAD API permit-automation platform; migrated legacy VBA macros to C# / .NET.' },
  { company: 'Smartdale', role: 'Technical Project Manager', desc: 'Multi-tenant SaaS — C#/.NET Core, Blazor, PostgreSQL, Docker + Jenkins + AWS CI/CD.' },
  { company: 'Greenway Health', role: 'Principal Engineer', desc: 'EHR platform for the US healthcare market — SAFe-Scrum, C#/.NET, Angular, Blazor.' },
  { company: 'Kauschke', role: 'Engineering — SOLIDWORKS Add-in', desc: 'C#/.NET SOLIDWORKS add-in with WPF client, reconnect-safe COM interop.' },
];

export const SKILLS = {
  spectrum: [
    { icon: 'i-python', label: 'Python', bg: 'rgba(59,130,246,0.12)', color: '#3b82f6' },
    { icon: 'i-dotnet', label: 'C# / .NET', bg: 'rgba(167,139,250,0.12)', color: '#a78bfa' },
    { icon: 'i-llm', label: 'LLM', bg: 'rgba(96,165,250,0.12)', color: '#60a5fa' },
    { icon: 'i-agent', label: 'Agentic AI', bg: 'rgba(192,132,252,0.12)', color: '#c084fc' },
    { icon: 'i-doc', label: 'Document Intelligence', bg: 'rgba(56,189,248,0.12)', color: '#38bdf8' },
    { icon: 'i-vector', label: 'Vector DBs', bg: 'rgba(52,211,153,0.12)', color: '#34d399' },
    { icon: 'i-cloud', label: 'Cloud', bg: 'rgba(147,197,253,0.12)', color: '#93c5fd' },
    { icon: 'i-cad', label: 'CAD Add-ins', bg: 'rgba(251,146,60,0.12)', color: 'var(--orange)' },
  ],
  cards: [
    { title: 'Python & Applied AI', wide: true, kind: 'list', items: [
      'PyTorch, LangChain, Transformers', 'FastAPI, Hugging Face',
      'RAG pipeline design & tuning', 'Semantic chunking strategies',
      'Groq Llama 3, Ollama local inference', 'Prompt engineering & fine-tuning',
      'Semantic Kernel integration', 'Structured output pipelines',
      'Multi-agent orchestration (NegMAS)', 'Bayesian opponent modeling',
    ] },
    { title: 'C# / .NET Stack', kind: 'tags', tags: [
      { text: 'ASP.NET Core', variant: 'b' }, { text: '.NET 10', variant: 'b' }, { text: 'Blazor', variant: 'b' },
      { text: 'EF Core 9' }, { text: 'Multi-tenant' }, { text: 'WPF' }, { text: 'WinForms' },
    ] },
    { title: 'Data & Databases', kind: 'icons', items: [
      { icon: 'i-vector', bg: 'rgba(96,165,250,0.14)', color: '#60a5fa', label: 'PostgreSQL' },
      { icon: 'i-vector', bg: 'rgba(248,113,113,0.14)', color: '#f87171', label: 'SQL Server' },
      { icon: 'i-vector', bg: 'rgba(52,211,153,0.14)', color: '#34d399', label: 'pgvector' },
      { icon: 'i-search', bg: 'rgba(192,132,252,0.14)', color: '#c084fc', label: 'FAISS' },
    ] },
    { title: 'DevOps & Tooling', kind: 'icons', items: [
      { icon: 'i-git', bg: 'rgba(251,146,60,0.14)', color: 'var(--orange)', label: 'Git' },
      { icon: 'i-docker', bg: 'rgba(96,165,250,0.14)', color: '#60a5fa', label: 'Docker' },
      { icon: 'i-jenkins', bg: 'rgba(248,113,113,0.14)', color: '#f87171', label: 'Jenkins' },
      { icon: 'i-aws', bg: 'rgba(251,191,36,0.14)', color: 'var(--yellow)', label: 'AWS' },
    ] },
    { title: 'Engineering Software', kind: 'icons', cols: 2, items: [
      { icon: 'i-pencil', bg: 'rgba(248,113,113,0.14)', color: '#f87171', label: 'AutoCAD API' },
      { icon: 'i-cube', bg: 'rgba(248,113,113,0.14)', color: '#f87171', label: 'SOLIDWORKS API' },
    ] },
    { title: 'General SE', wide: true, kind: 'tags', tags: [
      { text: 'SOLID' }, { text: 'Design patterns' }, { text: 'Legacy modernization' }, { text: 'SAFe-Scrum delivery' },
    ] },
  ],
  radar: {
    labels: ['LLM/RAG', 'C#/.NET', 'Agentic', 'Vector DBs', 'Python', 'DevOps', 'Architecture', 'Delivery'],
    sets: [
      { values: [88, 55, 82, 85, 85, 65, 88, 75], lineColor: 'rgba(96,165,250,0.9)', fill: 'rgba(37,99,235,0.12)' },
      { values: [50, 98, 55, 65, 70, 72, 92, 88], lineColor: 'rgba(251,191,36,0.9)', fill: 'rgba(251,191,36,0.08)' },
      { values: [75, 48, 95, 78, 80, 55, 80, 60], lineColor: 'rgba(196,150,255,0.9)', fill: 'rgba(126,34,206,0.1)' },
    ],
    legend: [
      { label: 'AI / ML / RAG', color: '#2563EB' },
      { label: 'C# / .NET', color: '#FBBF24' },
      { label: 'Agentic Systems', color: '#7E22CE' },
      { label: 'Vector / Data', color: '#00FF88' },
      { label: 'DevOps / Cloud', color: '#f97316' },
      { label: 'Architecture', color: '#a78bfa' },
    ],
  },
};
