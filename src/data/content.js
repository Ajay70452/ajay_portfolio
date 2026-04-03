export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  name: 'Ajay Raval',
  title: ['AI', 'Engineer &', 'Builder'],
  tagline: "I'm an AI engineer specializing in generative AI and intelligent systems. I enjoy building products that solve real-world problems.",
  sub: "Previously a startup founder, I've spent the last few years turning ideas into working software. When I'm not building, you'll probably find me playing basketball, exploring nature, or eating pizza.",
}

export const about = {
  heading: 'Hello, I am Ajay Raval',
  sub: 'I build software products powered by AI.',
  body: [
    "My background is in computer engineering, but over time I realized I enjoy building products far more than just writing code. Today I focus on creating practical AI systems and tools that solve real problems for businesses and startups.",
    "I've worked across the full stack of modern AI development — from designing system architecture and backend infrastructure to integrating large language models, building RAG pipelines, and deploying scalable applications in the cloud.",
    "Along the way I also founded my own startup, which taught me the realities of building products from scratch: validating ideas, shipping fast, iterating with users, and sometimes breaking things in the process.",
    "Currently I spend most of my time building AI-powered tools, automation systems, and intelligent applications that help companies move faster.",
  ],
}

export const experience = [
  {
    company: 'MethodPro',
    role: 'Full-Stack AI Engineer',
    period: 'Mar 2025 — Present',
    desc: "Currently working at MethodPro where I build AI-powered SaaS products and internal automation systems for businesses in the healthcare industry. My work mainly focuses on designing practical AI tools that automate workflows and reduce manual operational work.",
    bullets: [
      "Built Practice Brain, a multi-tenant AI SaaS platform with multiple specialized agents handling appointment scheduling, compliance tasks, and operational workflows.",
      "Designed and deployed a RAG-based conversational AI system using LangChain, Pinecone, and OpenAI that processes hundreds of client queries each week.",
      "Developed a voice AI agent for dental clinics that manages inbound appointment calls and automates scheduling workflows.",
    ],
  },
  {
    company: '10FS',
    role: 'Backend Engineer',
    period: 'Feb 2024 — Feb 2025',
    desc: "Worked on data systems and automation tools used to analyze marketing campaigns and operational data. My role focused on building Python tools that helped teams access insights faster and make better decisions from large datasets.",
    bullets: [
      "Built forecasting models to analyze campaign performance and market trends.",
      "Developed a document search system that reduced information retrieval time from minutes to seconds.",
      "Created internal automation tools that improved the team's ability to access and analyze campaign data.",
    ],
  },
  {
    company: 'Room Reveal',
    role: 'Founder',
    period: 'Mar 2023 — Jan 2024',
    desc: "Room Reveal was a startup I founded focused on using AI to simplify interior visualization workflows. I led a small team of developers and managed the entire product from early idea to launching and onboarding our first enterprise clients.",
    bullets: [
      "Led and coordinated a team of three developers while building the platform.",
      "Built and optimized the core image-processing pipeline that powered the product.",
      "Acquired and onboarded the first enterprise customers, helping validate the product in the market.",
    ],
  },
]

export const projects = [
  {
    name: 'Google Ads AI Automation System (Ongoing)',
    tagline: 'MCP-Based Multi-Agent Campaign Engine',
    stack: ['FastAPI', 'Python', 'PostgreSQL', 'Claude API', 'MCP Architecture', 'Google Ads API', 'AWS ECS', 'Docker'],
    description: "An agentic system that autonomously manages Google Ads campaigns across multiple client accounts using an MCP server architecture with Claude as the reasoning engine. Handles bid adjustments, budget pacing, keyword optimization, and performance reporting — replacing 15+ hours of manual weekly work with zero human intervention.",
    live: null,
    github: null,
  },
  {
    name: 'Obsessive.AI',
    tagline: 'Agentic Email Outreach Platform',
    stack: ['FastAPI', 'Python', 'LangGraph', 'PostgreSQL', 'OpenAI API', 'Gmail API', 'Chrome Extension', 'AWS'],
    description: "An autonomous outreach agent that researches leads, crafts hyper-personalized cold emails, and handles back-and-forth communication — end to end. Feed it a lead list, it does the rest. Built for founders and sales teams who are done with generic email blasts and want conversations that actually convert.",
    status: 'In Development',
    live: null,
    github: null,
  },
  {
    name: 'AI Inbox Manager',
    tagline: 'AI Email Automation Platform',
    stack: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'Next.js', 'React', 'Chrome Extension', 'OpenAI API', 'AWS'],
    description: "An AI-powered email automation system for Gmail and Outlook that analyzes incoming emails, generates summaries, detects priorities, extracts tasks, and drafts replies. Built a Chrome extension that surfaces AI insights directly inside the Gmail interface, reducing the time teams spend processing email.",
    images: ['/imgs/inbox-manager1.png', '/imgs/inbox-manager2.png'],
    live: null,
    github: null,
  },
  {
    name: 'Reelr',
    tagline: 'AI Video Generation Platform',
    stack: ['Next.js', 'FastAPI', 'Multimodal AI Models', 'Image Generation', 'Video Generation', 'AWS'],
    description: "A platform that converts written scripts into short-form videos using an automated multimodal pipeline. Combines language models with image and video generation to produce structured visual content with consistent style and minimal manual editing.",
    live: null,
    github: null,
  },
  {
    name: 'Local RAG Agent',
    tagline: 'Offline AI Knowledge Assistant',
    stack: ['Ollama', 'Llama Models', 'LangChain', 'ChromaDB', 'Python'],
    description: "A local retrieval-augmented AI assistant that runs entirely on your own machine using open-source LLMs. Documents are embedded into a vector database and retrieved during queries, allowing the model to generate context-aware responses without external APIs.",
    live: null,
    github: null,
  },
]

export const skills = {
  Languages: ['Python', 'JavaScript'],
  Frameworks: ['Next.js', 'FastAPI'],
  Databases: ['SQL', 'PostgreSQL', 'ChromaDB', 'Pinecone'],
  'AI / LLM': ['LangChain', 'LangGraph', 'CrewAI', 'LlamaIndex', 'OpenAI', 'Anthropic', 'Gemini', 'Ollama', 'Llama'],
  'AI Techniques': ['RAG', 'Multi-Agent Systems', 'Prompt Engineering', 'Embeddings', 'Semantic Search', 'Vector Search', 'Reranking'],
  'AI System Design': ['LLM Evaluation', 'Model Routing', 'LLM Caching', 'Streaming APIs', 'WebSockets', 'Async Processing'],
  Infrastructure: ['AWS', 'Docker', 'Git', 'GitHub'],
}
