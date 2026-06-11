export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  role: string;
  org: string;
  highlight: string;
  year: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  status: "upcoming" | "current" | "past";
  logo?: string;
}

export interface TechItem {
  name: string;
  logo: string;
}

export const PROJECTS: Project[] = [
  {
    id: "courtex",
    title: "Courtex",
    subtitle: "RAG-Powered NBA Play Analysis",
    tags: ["Python", "RAG", "Semantic Search", "OpenAI", "NBA Play-by-Play"],
    description:
      "A retrieval-augmented system for exploring NBA play-by-play data through natural language. Ask a question like \"where does Doncic shoot\" and Courtex semantically retrieves the most relevant plays, then generates a written, scouting-style analysis of shot locations, tendencies, and efficiency.",
    role: "Creator & Developer",
    org: "Personal Project",
    highlight: "RAG Pipeline · Sports Analytics",
    year: "2026",
    image: "/projects/courtex.png",
  },
  {
    id: "tappedin",
    title: "TappedIn",
    subtitle: "Vibe-Based Event Discovery",
    tags: ["React", "Vite", "TypeScript", "FastAPI", "Supabase", "Pinecone", "OpenAI"],
    description:
      "An event discovery platform that turns a natural-language \"vibe\" into tailored recommendations. Users describe what they're in the mood for and TappedIn surfaces matching local events using semantic search over OpenAI embeddings and a Pinecone vector index, plus a personalized \"For You\" agent. Built on a React + Vite frontend and a FastAPI backend with Supabase and JWT auth.",
    role: "Software Developer",
    org: "Creative Labs",
    highlight: "Full-Stack · Semantic Search",
    year: "2026",
    image: "/projects/tappedin.png",
  },
  {
    id: "realy",
    title: "Realy",
    subtitle: "Multi-Table Data Agent",
    tags: ["React", "TypeScript", "FastAPI", "LangGraph", "Supabase", "AWS", "Vercel"],
    description:
      "Sole frontend engineer building an agentic chatbot for the UCLA Trustworthy AI Lab. Realy lets researchers query, join, and analyze multiple datasets through natural language, powered by a LangGraph agent backend with a React chat interface.",
    role: "Lead Frontend Engineer",
    org: "UCLA Trustworthy AI Lab",
    highlight: "Research Tool · In Production",
    year: "2026",
    image: "/projects/realy-v2.png",
  },
  {
    id: "hoops",
    title: "HoopsPredictor",
    subtitle: "NBA Prop Prediction Engine",
    tags: ["Python", "XGBoost", "scikit-learn", "Streamlit", "NumPy", "Pandas"],
    description:
      "Engineered a machine learning app that predicts NBA player points, rebounds, and assists using XGBoost ensemble modeling built on 16+ engineered features including rolling stat averages, matchup history, rest days, and previous game stats.",
    role: "Creator & ML Engineer",
    org: "Personal Project",
    highlight: "ML Pipeline · SaaS Exploration",
    year: "2026",
    image: "/projects/hoops.png",
  },
  {
    id: "transfermate",
    title: "TransferMate",
    subtitle: "UC Transfer Navigator",
    tags: ["React.js", "Tailwind", "Firebase", "Vercel", "Figma"],
    description:
      "Founded TransferMate, a web app that consolidates UC transfer requirements to help California community college students navigate transferring to all 9 UC campuses. Actively pitching to institutional partners for ASSIST.org API sponsorship to scale to 100+ users.",
    role: "Founder & Developer",
    org: "Personal Project",
    highlight: "Startup · Actively Pitching",
    year: "2025",
    image: "/projects/transfermate.png",
  },
  {
    id: "scenetic",
    title: "Scenetic",
    subtitle: "Drone Computer Vision Mobile App",
    tags: ["Python", "Google Gemini", "YOLOcv8", "React Native", "Expo", "Firebase", "Raspberry Pi"],
    description:
      "Scenetic, helps filmmakers and creative people find their perfect movie scene by taking user-written descriptions and finding the best portrait match using live drone footage. Scenetic uses Gemini API to extract key descriptive words to recommend the best filming environment for their cinema.",
    role: "Lead Developer",
    org: "Citrus Hack · UC Riverside",
    highlight: "\u{1F3C6} 1st Place Winner",  
    year: "2025",
    image: "/projects/scenetic.png",
  },
  {
    id: "plantpulse",
    title: "PlantPulse",
    subtitle: "AI Plant Health Tracker",
    tags: ["Python Flask", "JavaScript", "Gemini API", "Firebase", "Figma", "HTML"],
    description:
      "Built a plant health tracking service leveraging Google's Gemini AI API. Users upload photos of their plants and receive AI-powered health scores, condition analysis, and actionable feedback. Tracks overall garden health over time.",
    role: "Developer",
    org: "HackMerced X · UC Merced",
    highlight: "\u{1F949} 3rd Place AgTech",
    year: "2025",
    image: "/projects/plantpulse.png",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Data Analyst Intern",
    company: "Pacific Life",
    period: "Summer 2026",
    status: "current",
    logo: "/logos/pacificlife.png",
  },
  {
    role: "Undergraduate Researcher",
    company: "UCLA Trustworthy AI Lab",
    period: "2026 – Present",
    status: "current",
    logo: "/logos/ucla.png",
  },
  {
    role: "Software Developer",
    company: "Creative Labs",
    period: "2026",
    status: "past",
    logo: "/logos/creativelabs.png",
  },
  {
    role: "ML Fellow — AI Studio",
    company: "Skinterest Tech",
    period: "2025",
    status: "past",
    logo: "/logos/skinterest.png",
  },
  {
    role: "Cornell Tech Fellow",
    company: "Break Through Tech AI",
    period: "2025",
    status: "past",
    logo: "/logos/breakthroughtech.png",
  },
];

export const TECH_LOGOS: Record<string, TechItem[]> = {
  Languages: [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "R",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  ],
  "Tools & Platforms": [
    {
      name: "Vercel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
      name: "Supabase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    },
    {
      name: "Power BI",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect x='22' y='8' width='10' height='32' rx='2' fill='%23F2C811'/%3E%3Crect x='10' y='16' width='10' height='24' rx='2' fill='%23EF8B2E'/%3E%3Crect x='34' y='4' width='10' height='36' rx='2' fill='%23E25B2A'/%3E%3C/svg%3E",
    },
    {
      name: "Tableau",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M24 4v8h-8v4h8v8h4v-8h8v-4h-8V4h-4z' fill='%23E97627'/%3E%3Cpath d='M12 18v6H6v3h6v6h3v-6h6v-3h-6v-6h-3z' fill='%234E79A7'/%3E%3Cpath d='M33 18v6h-6v3h6v6h3v-6h6v-3h-6v-6h-3z' fill='%234E79A7'/%3E%3Cpath d='M24 30v6h-6v3h6v6h3v-6h6v-3h-6v-6h-3z' fill='%236BAA75'/%3E%3C/svg%3E",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "FastAPI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
  ],
};

export const SECTIONS = ["hero", "projects", "experience", "skills", "contact"];
