export const PROJECTS = [
  {
    id: 'talentbot', enabled: true, featured: true, historical: false, category: 'ai',
    numLabel: 'AI · RAG',
    featDesc: 'Python/FastAPI RAG chatbot combining LLM orchestration with FAISS vector retrieval.',
    cardDesc: 'Personal RAG chatbot project for recruiter-facing, context-aware question answering.',
    tags: [
      { text: 'Python', variant: 'b' },
      { text: 'FastAPI', variant: 'b' },
      { text: 'LangChain', variant: 'b' },
      { text: 'FAISS' },
      { text: 'Groq/Llama 3' }
    ],
    icon: 'i-agent',
    color: '#60a5fa',
    bg: 'rgba(59,130,246,0.14)',
    title: 'TalentBot',
    sub: 'Applied AI · RAG · Python / FastAPI',
    badge: '<span class="pm-badge">FEATURED</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          TalentBot is a personal RAG chatbot project combining LLM orchestration,
          vector retrieval, and a FastAPI backend for context-aware question answering.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Architecture</div>
        <div class="pm-flow">
          <div class="pm-box">Knowledge Files</div>
          <div class="pm-arr">→</div>
          <div class="pm-box">Chunking</div>
          <div class="pm-arr">→</div>
          <div class="pm-box">FAISS</div>
          <div class="pm-arr">→</div>
          <div class="pm-box">Retrieval</div>
          <div class="pm-arr">→</div>
          <div class="pm-box">LLM</div>
          <div class="pm-arr">→</div>
          <div class="pm-box">Grounded Response</div>
        </div>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">What it demonstrates</div>
        <ul class="pm-list">
          <li>Python backend development with FastAPI</li>
          <li>Retrieval-Augmented Generation</li>
          <li>LangChain-based LLM orchestration</li>
          <li>FAISS vector retrieval</li>
          <li>Groq/Llama 3 integration</li>
          <li>Context-aware question answering</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Tech Stack</div>
        <div class="pm-stack">
          <span class="pm-tag">Python</span>
          <span class="pm-tag">FastAPI</span>
          <span class="pm-tag">LangChain</span>
          <span class="pm-tag">FAISS</span>
          <span class="pm-tag">Groq/Llama 3</span>
        </div>
      </div>
    `,
  },

  {
    id: 'documind', enabled: true, featured: true, historical: false, category: 'ai',
    numLabel: 'AI · DOCUMENT INTELLIGENCE',
    featDesc: 'C#/.NET 10 document-intelligence and RAG project using Semantic Kernel and pgvector.',
    cardDesc: 'Document ingestion, vector retrieval, LLM integration, and grounded question answering in .NET.',
    tags: [
      { text: 'C# .NET 10', variant: 'b' },
      { text: 'Semantic Kernel', variant: 'b' },
      { text: 'pgvector' },
      { text: 'Llama 3.2' }
    ],
    icon: 'i-doc',
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.14)',
    title: 'DocuMind',
    sub: 'Applied AI · Document Intelligence · C# / .NET 10',
    badge: '<span class="pm-badge">FEATURED</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          DocuMind is a personal document-intelligence and RAG project exploring
          document ingestion, vector retrieval, LLM integration, and grounded
          question answering inside a modern C#/.NET application architecture.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">RAG Flow</div>
        <div class="pm-flow">
          <div class="pm-box">Documents</div>
          <div class="pm-arr">→</div>
          <div class="pm-box">Ingestion</div>
          <div class="pm-arr">→</div>
          <div class="pm-box">Vector Retrieval</div>
          <div class="pm-arr">→</div>
          <div class="pm-box">pgvector</div>
          <div class="pm-arr">→</div>
          <div class="pm-box">LLM Integration</div>
          <div class="pm-arr">→</div>
          <div class="pm-box">Grounded Answer</div>
        </div>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">What it demonstrates</div>
        <ul class="pm-list">
          <li>C#/.NET 10 AI application development</li>
          <li>Microsoft Semantic Kernel project experience</li>
          <li>PostgreSQL/pgvector vector retrieval</li>
          <li>Local Llama 3.2 integration</li>
          <li>Document ingestion and grounded question answering</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Tech Stack</div>
        <div class="pm-stack">
          <span class="pm-tag">C# / .NET 10</span>
          <span class="pm-tag">Semantic Kernel</span>
          <span class="pm-tag">pgvector</span>
          <span class="pm-tag">PostgreSQL</span>
          <span class="pm-tag">Llama 3.2</span>
        </div>
      </div>
    `,
  },

  {
    id: 'nexusai',
    enabled: false,
    featured: false,
    historical: false,
    category: 'ai',
    numLabel: 'PENDING VERIFICATION',
    featDesc: 'Project details withheld until repository verification.',
    cardDesc: 'Not currently displayed in the public portfolio.',
    tags: [],
    icon: 'i-llm',
    color: '#c084fc',
    bg: 'rgba(192,132,252,0.14)',
    title: 'NexusAI',
    sub: 'Pending verification',
    badge: '',
    body: ``,
  },

  {
    id: 'agentnexus', enabled: true, featured: true, historical: false, category: 'ai',
    numLabel: 'AGENTIC · AUTOMATED NEGOTIATION',
    featDesc: 'Python/NegMAS automated-negotiation project that placed 4th in ANAC 2026.',
    cardDesc: 'Automated negotiation agent and strategy project built in Python using NegMAS.',
    tags: [
      { text: 'Python', variant: 'b' },
      { text: 'NegMAS', variant: 'b' },
      { text: 'Automated Negotiation' },
      { text: 'Multi-Agent Systems' }
    ],
    icon: 'i-trophy',
    color: 'var(--yellow)',
    bg: 'rgba(251,191,36,0.14)',
    title: 'Agent-Nexus',
    sub: 'Agentic Systems · Automated Negotiation · Python / NegMAS',
    badge: '<span class="pm-badge y">4th PLACE · ANAC 2026</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          Agent-Nexus is an automated-negotiation agent and negotiation-strategy
          project developed in Python using NegMAS for the ANAC 2026 competition.
          Agent-Nexus placed 4th in the competition.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">What it demonstrates</div>
        <ul class="pm-list">
          <li>Python project development</li>
          <li>NegMAS framework usage</li>
          <li>Automated negotiation</li>
          <li>Negotiation strategy and agent interaction</li>
          <li>Multi-agent systems and competition evaluation</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Important distinction</div>
        <p class="pm-desc">
          Agent-Nexus is not a RAG project and is not presented as using LangChain,
          FastAPI, Microsoft Semantic Kernel, pgvector, or FAISS.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Tech Stack</div>
        <div class="pm-stack">
          <span class="pm-tag">Python</span>
          <span class="pm-tag">NegMAS</span>
        </div>
      </div>
    `,
  },

  {
    id: 'autoflow',
    enabled: false,
    featured: false,
    historical: false,
    category: 'ai',
    numLabel: 'PENDING VERIFICATION',
    featDesc: 'Project details withheld until repository verification.',
    cardDesc: 'Not currently displayed in the public portfolio.',
    tags: [],
    icon: 'i-bolt',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.14)',
    title: 'AutoFlow',
    sub: 'Pending verification',
    badge: '',
    body: ``,
  },

  {
    id: 'jobradar',
    enabled: false,
    featured: false,
    historical: false,
    category: 'ai',
    numLabel: 'PENDING VERIFICATION',
    featDesc: 'Project details withheld until repository verification.',
    cardDesc: 'Not currently displayed in the public portfolio.',
    tags: [],
    icon: 'i-target',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.14)',
    title: 'JobRadar',
    sub: 'Pending verification',
    badge: '',
    body: ``,
  },

  {
    id: 'greenway', enabled: true, featured: false, historical: false, category: 'net',
    numLabel: 'ENTERPRISE · HEALTHCARE',
    featDesc: 'Hands-on backend/full-stack contribution to a US-market EHR product in a SAFe Scrum team.',
    cardDesc: 'C#/.NET and SQL Server product development with Angular/TypeScript UI contribution.',
    tags: [
      { text: 'C# .NET', variant: 'b' },
      { text: 'SQL Server' },
      { text: 'Angular' },
      { text: 'TypeScript' }
    ],
    icon: 'i-hospital',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.14)',
    title: 'Greenway Health — EHR Application',
    sub: 'Enterprise · Healthcare · US Market',
    badge: '<span class="pm-badge g">PRINCIPAL SOFTWARE ENGINEER</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          Worked as Principal Software Engineer in a SAFe Scrum team, contributing
          hands-on to backend and full-stack development for the Greenway Health EHR
          product serving the US market.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Contributions</div>
        <ul class="pm-list">
          <li>Technical lead responsibilities within a SAFe Scrum team</li>
          <li>C#/.NET and Microsoft SQL Server data-driven product features</li>
          <li>Angular and TypeScript UI contribution</li>
          <li>Blazor, JavaScript, HTML and CSS contribution/exposure</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Tech Context</div>
        <div class="pm-stack">
          <span class="pm-tag">C# / .NET</span>
          <span class="pm-tag">SQL Server</span>
          <span class="pm-tag">Angular</span>
          <span class="pm-tag">TypeScript</span>
          <span class="pm-tag">Blazor</span>
          <span class="pm-tag">SAFe Scrum</span>
        </div>
      </div>
    `,
  },

  {
    id: 'smartdale', enabled: true, featured: false, historical: false, category: 'net',
    numLabel: 'SAAS · MULTI-TENANT',
    featDesc: 'Grandcivitas multi-tenant SaaS development with C#/.NET Core, PostgreSQL, Blazor and containerized delivery.',
    cardDesc: 'Hands-on architecture and delivery contribution while leading a small agile team.',
    tags: [
      { text: 'C# .NET Core', variant: 'b' },
      { text: 'ASP.NET Core' },
      { text: 'PostgreSQL' },
      { text: 'Blazor' },
      { text: 'Docker' }
    ],
    icon: 'i-cloud',
    color: '#93c5fd',
    bg: 'rgba(147,197,253,0.14)',
    title: 'Grandcivitas — Smartdale',
    sub: 'Enterprise · Multi-Tenant SaaS · C# / .NET Core',
    badge: '<span class="pm-badge">TECHNICAL PROJECT MANAGER</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          Worked hands-on on Grandcivitas, a multi-tenant SaaS platform, with
          architecture and delivery ownership while leading a small agile team.
          The platform was not released during my involvement.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Contributions</div>
        <ul class="pm-list">
          <li>C#/.NET Core and ASP.NET Core application development</li>
          <li>PostgreSQL data persistence</li>
          <li>Blazor and Vue.js project exposure</li>
          <li>Docker, Jenkins and Git for CI/CD and containerized delivery</li>
          <li>AWS/Linux hosted-delivery environment exposure</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Tech Context</div>
        <div class="pm-stack">
          <span class="pm-tag">C# .NET Core</span>
          <span class="pm-tag">ASP.NET Core</span>
          <span class="pm-tag">PostgreSQL</span>
          <span class="pm-tag">Blazor</span>
          <span class="pm-tag">Docker</span>
          <span class="pm-tag">Jenkins</span>
          <span class="pm-tag">Git</span>
          <span class="pm-tag">AWS exposure</span>
        </div>
      </div>
    `,
  },

  {
    id: 'fournxt', enabled: true, featured: false, historical: false, category: 'net',
    numLabel: 'AUTOMATION · RPA / UAE',
    featDesc: 'UAE-market RPA delivery with hands-on Python/C# automation support and technical project coordination.',
    cardDesc: 'RPA delivery for UAE client engagements, including Emaar and DAMAC, using Python/C# support with UiPath, Blue Prism, and Automation Anywhere.',
    tags: [
      { text: 'Python', variant: 'b' },
      { text: 'C#', variant: 'b' },
      { text: 'UiPath' },
      { text: 'Blue Prism' },
      { text: 'Automation Anywhere' }
    ],
    icon: 'i-bolt',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.14)',
    title: 'FourNxt — UAE RPA Delivery',
    sub: 'Automation · RPA · UAE Market',
    badge: '<span class="pm-badge">PROJECT MANAGER, RPA</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          Worked in a technically oriented RPA project-management role supporting
          UAE-market automation delivery while remaining hands-on with Python and
          C# automation utilities and supporting components.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Contributions</div>
        <ul class="pm-list">
          <li>Supported agile RPA project delivery</li>
          <li>Provided hands-on Python and C# programming support for automation utilities and supporting components</li>
          <li>Worked in delivery contexts involving UiPath, Blue Prism, and Automation Anywhere</li>
          <li>Major UAE client engagements included Emaar and DAMAC</li>
          <li>Coordinated with solution-design, technical, product, delivery, and business stakeholders</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Important Context</div>
        <p class="pm-desc">
          Emaar and DAMAC were client engagements through FourNxt Technologies,
          not employers. This role should not be presented as advanced
          RPA-bot-specialist or certified-RPA expertise.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Tech Context</div>
        <div class="pm-stack">
          <span class="pm-tag">Python</span>
          <span class="pm-tag">C#</span>
          <span class="pm-tag">UiPath</span>
          <span class="pm-tag">Blue Prism</span>
          <span class="pm-tag">Automation Anywhere</span>
        </div>
      </div>
    `,
  },

  {
    id: 'sevenseas', enabled: true, featured: false, historical: true, historicalOrder: 3, historicalName: 'Seven Seas', category: 'net',
    numLabel: 'ENTERPRISE · BUSINESS APPLICATIONS',
    featDesc: 'Enterprise applications across ERP, hospitality, HRMS, finance, POS and CRM.',
    cardDesc: 'Hands-on C#/ASP.NET/WinForms/SQL development plus technical coordination and production support.',
    tags: [
      { text: 'C# ASP.NET', variant: 'b' },
      { text: 'WinForms' },
      { text: 'SQL' }
    ],
    icon: 'i-hotel',
    color: 'var(--orange)',
    bg: 'rgba(251,146,60,0.14)',
    title: 'Seven Seas Enterprise Applications',
    sub: 'Enterprise · ERP / POS / Finance · C# / ASP.NET',
    badge: '<span class="pm-badge">PROJECT TEAM LEAD</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          Developed and stabilized enterprise/custom applications while handling
          product development and technical coordination of a small team.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Application Areas</div>
        <ul class="pm-list">
          <li>ERP</li>
          <li>Hospitality</li>
          <li>HRMS</li>
          <li>Children's-park operations</li>
          <li>Financial accounting</li>
          <li>POS</li>
          <li>CRM</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Contribution</div>
        <ul class="pm-list">
          <li>C#, ASP.NET, WinForms and SQL development</li>
          <li>Debugging and testing</li>
          <li>Release stabilization and production support</li>
          <li>Technical coordination while remaining hands-on</li>
        </ul>
      </div>
    `,
  },

  {
    id: 'kauschke', enabled: true, featured: false, historical: true, historicalOrder: 4, historicalName: 'Kauschke', category: 'cad',
    numLabel: 'CAD · SOLIDWORKS ADD-IN',
    featDesc: 'C#/.NET SOLIDWORKS add-in with WPF companion client and reconnect/reliability workflows.',
    cardDesc: 'Engineering-software integration using SOLIDWORKS API, WPF, thread locking, and explicit resource cleanup.',
    tags: [
      { text: 'C# .NET', variant: 'b' },
      { text: 'WPF' },
      { text: 'SOLIDWORKS API' }
    ],
    icon: 'i-cube',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.14)',
    title: 'Kauschke SOLIDWORKS Add-in',
    sub: 'CAD · Desktop Engineering · C# / .NET',
    badge: '<span class="pm-badge">SOFTWARE ENGINEER</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          Developed a C#/.NET SOLIDWORKS add-in and initiated a WPF companion
          client for engineering workflows.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Contributions</div>
        <ul class="pm-list">
          <li>SOLIDWORKS instance/version binding</li>
          <li>WPF companion client</li>
          <li>Reconnect workflows and active-assembly context handover</li>
          <li>Component actions</li>
          <li>Thread locking</li>
          <li>Explicit resource cleanup</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Tech Stack</div>
        <div class="pm-stack">
          <span class="pm-tag">C# / .NET</span>
          <span class="pm-tag">WPF</span>
          <span class="pm-tag">SOLIDWORKS API</span>
        </div>
      </div>
    `,
  },

  {
    id: 'idsi', enabled: true, featured: false, historical: true, historicalOrder: 1, historicalName: 'IDSi', category: 'cad',
    numLabel: 'CAD · PERMIT WORKFLOWS',
    featDesc: 'AutoPlan, PlanPermit and AgniPermit — CAD scrutiny, geometry validation, rule-based processing and permit workflows.',
    cardDesc: 'C#/.NET engineering applications using AutoCAD API, WPF/WinForms, REST integration and SQL.',
    tags: [
      { text: 'C# .NET', variant: 'b' },
      { text: 'AutoCAD API' },
      { text: 'WPF / WinForms' },
      { text: 'SQL' }
    ],
    icon: 'i-cad',
    color: 'var(--orange)',
    bg: 'rgba(251,146,60,0.14)',
    title: 'IDSi — AutoPlan / PlanPermit / AgniPermit',
    sub: 'CAD · Permit Workflows · C# / AutoCAD API',
    badge: '<span class="pm-badge">SOFTWARE ENGINEER L3 → ASSOC. TECHNICAL PM</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          Worked on CAD-scrutiny and permit-processing products including AutoPlan,
          PlanPermit, and AgniPermit using C#/.NET, AutoCAD API, WPF/WinForms,
          REST integration, and SQL.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Contributions</div>
        <ul class="pm-list">
          <li>CAD drawing scrutiny and geometry computation/validation</li>
          <li>Regulatory/domain-rule validation</li>
          <li>Rule-based configuration and inference logic</li>
          <li>SQL-backed workflow/state processing</li>
          <li>Application integration for permit and fire-approval workflows</li>
          <li>Debugging, release support and long-term maintenance</li>
          <li>Modernization of C++/VB6 components into .NET environments</li>
          <li>Developed an ArcGIS prototype for a land-management / geospatial-workflow concept</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Tech Stack</div>
        <div class="pm-stack">
          <span class="pm-tag">C# / .NET Framework</span>
          <span class="pm-tag">AutoCAD API</span>
          <span class="pm-tag">WPF</span>
          <span class="pm-tag">WinForms</span>
          <span class="pm-tag">SQL</span>
          <span class="pm-tag">REST</span>
        </div>
      </div>
    `,
  },

  {
    id: 'visionics', enabled: true, featured: false, historical: true, historicalOrder: 2, historicalName: 'Visionics', category: 'cad',
    numLabel: 'EDA · DESKTOP ENGINEERING',
    featDesc: 'EDWinXP EDA/CAD/CAE desktop suite with C++/.NET development and TCP/IP licence-management integration.',
    cardDesc: 'Engineering-software development, debugging, performance improvement, testing, release support and partial .NET migration.',
    tags: [
      { text: 'C++ / C#', variant: 'b' },
      { text: 'VB.NET' },
      { text: 'WinForms' },
      { text: 'TCP/IP' }
    ],
    icon: 'i-microscope',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.14)',
    title: 'Visionics — EDWinXP',
    sub: 'Desktop Engineering · EDA/CAD/CAE · C++ / C#',
    badge: '<span class="pm-badge">SOFTWARE ENGINEER</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          Enhanced and maintained EDWinXP, an EDA/CAD/CAE desktop software suite,
          using C++, C#/.NET, VB.NET, WinForms, TCP/IP, and related
          engineering-software technologies.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Contributions</div>
        <ul class="pm-list">
          <li>TCP/IP client-server integration for licence-management components</li>
          <li>Desktop engineering-software feature development and maintenance</li>
          <li>Debugging and performance improvement</li>
          <li>Testing and release support</li>
          <li>Partial migration toward .NET</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Tech Context</div>
        <div class="pm-stack">
          <span class="pm-tag">C++</span>
          <span class="pm-tag">C# / .NET</span>
          <span class="pm-tag">VB.NET</span>
          <span class="pm-tag">WinForms</span>
          <span class="pm-tag">TCP/IP</span>
        </div>
      </div>
    `,
  },

  {
    id: 'iset', enabled: true, featured: false, historical: true, historicalOrder: 5, historicalName: 'iSET', category: 'cad',
    numLabel: 'CAD/CAM · CIM · CROSS-PLATFORM',
    featDesc: 'Early-career R&D work on CADXpert, a cross-platform 3D CAD/CAM tool, and a computer-integrated manufacturing system.',
    cardDesc: 'C/C++, Qt, OpenGL, and Linux development for cross-platform engineering software.',
    tags: [
      { text: 'C / C++', variant: 'b' },
      { text: 'Qt' },
      { text: 'OpenGL' },
      { text: 'Linux' }
    ],
    icon: 'i-cube',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.14)',
    title: 'iSET — CADXpert / CIM Systems',
    sub: 'Engineering Software · CAD/CAM · C/C++ / Qt / OpenGL',
    badge: '<span class="pm-badge">TRAINEE, R&D</span>',
    body: `
      <div class="pm-section">
        <div class="pm-section-title">Overview</div>
        <p class="pm-desc">
          Contributed to CADXpert, a cross-platform 3D CAD/CAM tool, and to a
          computer-integrated manufacturing system during early-career R&D work at iSET.
        </p>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Contributions</div>
        <ul class="pm-list">
          <li>Cross-platform engineering-software development</li>
          <li>3D CAD/CAM application work</li>
          <li>Computer-integrated manufacturing software work</li>
          <li>Development, debugging, and testing using C, C++, Qt, OpenGL, and Linux</li>
        </ul>
      </div>

      <div class="pm-section">
        <div class="pm-section-title">Tech Context</div>
        <div class="pm-stack">
          <span class="pm-tag">C</span>
          <span class="pm-tag">C++</span>
          <span class="pm-tag">Qt</span>
          <span class="pm-tag">OpenGL</span>
          <span class="pm-tag">Linux</span>
        </div>
      </div>
    `,
  },
];

export function findProject(id) {
  return PROJECTS.find(p => p.id === id);
}