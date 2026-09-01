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
  heroSub: 'Focus: C#/.NET, Python, backend systems, RAG , LLM Orchestration, agentic workflows, and document intelligence.<br>More than a decade of professional software-development experience across backend, desktop, engineering, integration, and SQL-backed applications.',
  heroPills: [
    { text: 'LLM ORCHESTRATION' },
    { text: 'RAG PIPELINES' },
    { text: 'AGENTIC SYSTEMS' },
    { text: 'C# / .NET', variant: 'y' },
    { text: 'PYTHON', variant: 'y' },
    { text: 'ANAC 2026 · 4th PLACE', variant: 'g' },
  ],
  techNodes: [
    { icon: 'i-python', label: 'Python<br>Applied AI' },
    { icon: 'i-dotnet', label: 'C# / .NET<br>Established Stack' },
    { icon: 'i-llm', label: 'LLM<br>Integration' },
    { icon: 'i-vector', label: 'pgvector<br>FAISS' },
    { icon: 'i-agent', label: 'RAG' },
    { icon: 'i-docker', label: 'Docker / CI/CD<br>AWS exposure' },
    { icon: 'i-trophy', label: 'Agents<br>NegMAS' },
    { icon: 'i-llm', label: 'AI / ML<br>Foundations' },
  ],

  aboutBio: "Software engineer with more than a decade of professional experience across backend systems, desktop applications, CAD-integrated engineering software, SQL-backed workflows, application integration, modernization, debugging, and production support. Most of my commercial experience is in C#/.NET and SQL. More recently, I have been extending this foundation into Python and applied AI through structured study, personal projects, and competition work involving FastAPI, RAG, LLM integration, vector retrieval, Microsoft Semantic Kernel, LangChain, and agentic systems. Agent-Nexus, my Python/NegMAS automated-negotiation project, placed 4th in the ANAC 2026 competition.",
  education: [
    { icon: 'i-grad', name: 'Leibniz Universität Hannover', sub: 'MSc Studies in Geodesy & Geoinformatics · without degree' },
    { icon: 'i-grad', name: 'Mahatma Gandhi University, Kerala, India', sub: 'B.Tech in Electronics & Communication Engineering · 2003–2007' },
  ],
  languages: [
    { code: 'EN', name: 'English', level: 'C1 — Advanced', bg: 'rgba(37,99,235,0.14)', color: '#60a5fa' },
    { code: 'DE', name: 'German', level: 'B1 — actively improving', bg: 'rgba(251,191,36,0.14)', color: 'var(--yellow)' },
  ],
  philosophy: "I approach new technologies through evidence: learn them systematically, build with them, test them, and evaluate where they add practical value. My current AI work extends an established software-engineering foundation rather than replacing it.",

  footerCopyright: '© 2026 Nishanth Rajan · Software Engineer | Applied AI | Agentic System · Hannover, Germany',
};

// Most recent first, matching standard CV/resume convention.
export const TIMELINE = [
  { company: 'Current',  period: '12/2024 – Present',  role: 'Continuing Education in Python & Applied AI',  desc: 'Structured upskilling in Python, AI/ML, LLM/RAG, and agentic AI through personal software projects and technical study, while continuing hands-on development with C#/.NET, PostgreSQL, Docker, REST APIs, Git, and n8n. Also provided limited intermittent maintenance support for existing software modules.'},
  { company: 'Professional Development',  period: '12/2023 – 11/2024',  role: 'Continuing Studies, German Language & Software Development',  desc: 'Continued technical studies and software development while completing German language training from A1 to B1. Maintained and expanded skills in C#/.NET, Python, AI/ML, databases, Docker, and Git through coursework, personal projects, and limited intermittent software maintenance support.'},
  { company: 'Kauschke', period: '09/2023 – 11/2023', role: 'Software Engineer', desc: 'C#/.NET SOLIDWORKS add-in and WPF companion client with reconnect workflows, thread locking and explicit resource cleanup.' },
  { company: 'Relocation & MSc Studies', period: '05/2022 – 08/2023', role: 'Study / Professional Development', desc: 'Relocated to Germany; coursework in geodetic data analysis, 3D image processing, Web GIS and related technical subjects.' },
  { company: 'Greenway Health', period: '11/2021 – 04/2022', role: 'Principal Software Engineer', desc: 'EHR product for the US market — SAFe Scrum, C#/.NET, SQL Server, Angular/TypeScript, Blazor exposure.' },
  { company: 'FourNxt', period: '05/2021 – 11/2021', role: 'Project Manager, RPA', desc: 'UAE-market RPA delivery with hands-on Python/C# automation support using UiPath, Blue Prism and Automation Anywhere.' },
  { company: 'Smartdale', period: '03/2020 – 05/2021', role: 'Technical Project Manager, Backend / Full-stack', desc: 'Grandcivitas multi-tenant SaaS — C#/.NET Core, ASP.NET Core, PostgreSQL, Blazor, Docker, Jenkins, Git, AWS/Linux delivery environment.' },
  { company: 'IDSi', period: '02/2015 – 03/2020', role: 'Software Engineer L3 → Associate Technical Project Manager', desc: 'AutoPlan, PlanPermit and AgniPermit — C#/.NET, AutoCAD API, WPF/WinForms, REST, SQL, rule-based validation and legacy modernization.' },
  { company: 'Personal Development', period: '08/2014 – 01/2015', role: 'Upskilling', desc: '.NET skill refresh and a small self-learning .NET game project.' },
  { company: 'Seven Seas', period: '08/2011 – 07/2014', role: 'Project Team Lead (Software Engineer)', desc: 'Enterprise applications across ERP, hospitality, HRMS, finance, POS and CRM — C#, ASP.NET, WinForms, SQL.' },
  { company: 'Visionics', period: '11/2008 – 08/2011', role: 'Software Engineer', desc: 'EDWinXP EDA/CAD/CAE desktop suite — C++, .NET, VB.NET, TCP/IP integration, debugging and modernization.' },
  { company: 'iSET', period: '08/2007 – 11/2008', role: 'Trainee, R&D', desc: 'CIM and cross-platform 3D CAD/CAM development — C/C++, Qt, OpenGL, Linux.' },
];

export const SKILLS = {
  spectrum: [
    { icon: 'i-python', label: 'Python', bg: 'rgba(59,130,246,0.12)', color: '#3b82f6' },
    { icon: 'i-dotnet', label: 'C# / .NET', bg: 'rgba(167,139,250,0.12)', color: '#a78bfa' },
    { icon: 'i-llm', label: 'LLM Integration', bg: 'rgba(96,165,250,0.12)', color: '#60a5fa' },
    { icon: 'i-agent', label: 'Agentic Workflows', bg: 'rgba(192,132,252,0.12)', color: '#c084fc' },
    { icon: 'i-doc', label: 'Document Intelligence', bg: 'rgba(56,189,248,0.12)', color: '#38bdf8' },
    { icon: 'i-vector', label: 'Vector Search', bg: 'rgba(52,211,153,0.12)', color: '#34d399' },
    { icon: 'i-cloud', label: 'DevOps / AWS Exposure', bg: 'rgba(147,197,253,0.12)', color: '#93c5fd' },
    { icon: 'i-cad', label: 'CAD / Engineering', bg: 'rgba(251,146,60,0.12)', color: 'var(--orange)' },
  ],
  cards: [
    {
      title: 'Python & Applied AI',
      wide: true,
      kind: 'icons',
      cols: 4,
      items: [
        { icon: 'i-python', bg: 'rgba(59,130,246,0.14)', color: '#60a5fa', label: 'Python' },
        { icon: 'i-bolt', bg: 'rgba(56,189,248,0.14)', color: '#38bdf8', label: 'FastAPI' },
        { icon: 'i-llm', bg: 'rgba(192,132,252,0.14)', color: '#c084fc', label: 'LangChain' },
        { icon: 'i-dotnet', bg: 'rgba(167,139,250,0.14)', color: '#a78bfa', label: 'Semantic Kernel' },

        { icon: 'i-agent', bg: 'rgba(52,211,153,0.14)', color: '#34d399', label: 'RAG' },
        { icon: 'i-vector', bg: 'rgba(52,211,153,0.14)', color: '#34d399', label: 'Vector Retrieval' },
        { icon: 'i-llm', bg: 'rgba(96,165,250,0.14)', color: '#60a5fa', label: 'Groq / Llama' },
        { icon: 'i-pencil', bg: 'rgba(251,146,60,0.14)', color: 'var(--orange)', label: 'Prompt Engineering' },

        { icon: 'i-trophy', bg: 'rgba(251,191,36,0.14)', color: 'var(--yellow)', label: 'NegMAS' },
        { icon: 'i-llm', bg: 'rgba(248,113,113,0.14)', color: '#f87171', label: 'PyTorch / DL' },
      ]
    },

    {
      title: 'C# / .NET Stack',
      wide: true,
      kind: 'icons',
      cols: 4,
      items: [
        { icon: 'i-dotnet', bg: 'rgba(96,165,250,0.14)', color: '#60a5fa', label: 'C# / .NET' },
        { icon: 'i-dotnet', bg: 'rgba(167,139,250,0.14)', color: '#a78bfa', label: 'ASP.NET Core' },
        { icon: 'i-dotnet', bg: 'rgba(192,132,252,0.14)', color: '#c084fc', label: '.NET Core / Framework' },
        { icon: 'i-arrow-right', bg: 'rgba(52,211,153,0.14)', color: '#34d399', label: 'REST APIs' },

        { icon: 'i-grid', bg: 'rgba(56,189,248,0.14)', color: '#38bdf8', label: 'Blazor' },
        { icon: 'i-grid', bg: 'rgba(251,146,60,0.14)', color: 'var(--orange)', label: 'WPF' },
        { icon: 'i-grid', bg: 'rgba(248,113,113,0.14)', color: '#f87171', label: 'WinForms' },
        { icon: 'i-llm', bg: 'rgba(251,191,36,0.14)', color: 'var(--yellow)', label: 'Application Integration' },
      ]
    },
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
      { icon: 'i-aws', bg: 'rgba(251,191,36,0.14)', color: 'var(--yellow)', label: 'AWS exposure' },
    ] },
    { title: 'Engineering Software', kind: 'icons', cols: 2, items: [
      { icon: 'i-pencil', bg: 'rgba(248,113,113,0.14)', color: '#f87171', label: 'AutoCAD API' },
      { icon: 'i-cube', bg: 'rgba(248,113,113,0.14)', color: '#f87171', label: 'SOLIDWORKS API' },
    ] },
    { title: 'Software Engineering', wide: true, kind: 'tags', tags: [
      { text: 'Software Architecture' }, { text: 'SOLID' }, { text: 'Design Patterns' },
      { text: 'Debugging / Testing' }, { text: 'Legacy Modernization' }, { text: 'Agile / SAFe Scrum' },
    ] },
  ],

  // These values are an illustrative portfolio-focus visualization, not validated proficiency scores.
  radar: {
    labels: ['LLM/RAG', 'C#/.NET', 'Agentic', 'Vector Search', 'Python', 'DevOps', 'Architecture', 'Delivery'],
    sets: [
      { values: [80, 55, 65, 75, 70, 55, 70, 60], lineColor: 'rgba(96,165,250,0.9)', fill: 'rgba(37,99,235,0.12)' },
      { values: [35, 90, 35, 45, 45, 65, 85, 80], lineColor: 'rgba(251,191,36,0.9)', fill: 'rgba(251,191,36,0.08)' },
      { values: [55, 45, 75, 60, 65, 45, 65, 50], lineColor: 'rgba(196,150,255,0.9)', fill: 'rgba(126,34,206,0.1)' },
    ],
    legend: [
      { label: 'Current Applied AI Focus', color: '#2563EB' },
      { label: 'Established Software Engineering', color: '#FBBF24' },
      { label: 'Agentic / Experimental Work', color: '#7E22CE' },
      { label: 'C# / .NET', color: '#00FF88' },
      { label: 'Agentic Systems', color: '#f97316' },    ],
  },
};
