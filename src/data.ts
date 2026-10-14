// Text fields marked "rich" support **bold** for emphasizing metrics.

export const SITE = {
  name: "Kyle Wong",
  url: "https://kyle-wong-portfolio.vercel.app",
  email: "kylewxng06@gmail.com",
  linkedin: "https://linkedin.com/in/kylewxng",
  github: "https://github.com/kylewxng",
  location: "Los Angeles, CA",
};

export interface Experience {
  id: string;
  role: string;
  company: string;
  /** Optional second line, e.g. the program a role came through */
  context?: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  /** rich */
  bullets: string[];
  stack: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  org: string;
  year: string;
  award?: string;
  summary: string;
  /** rich */
  highlights: string[];
  stack: string[];
  image: string;
  /** "phone" screenshots are letterboxed instead of cropped */
  imageKind?: "screen" | "phone";
  links?: { label: string; href: string }[];
}

export interface SideProject {
  id: string;
  title: string;
  /** rich */
  summary: string;
  stack: string[];
  year: string;
  award?: string;
  image: string;
  href?: string;
}

export interface Metric {
  prefix?: string;
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  source: string;
}

export const METRICS: Metric[] = [
  { prefix: "~", value: 80, suffix: "%", label: "less manual fraud case review", source: "Pacific Life" },
  { value: 1.6, decimals: 1, suffix: "M", label: "policies queryable in plain English", source: "Pacific Life" },
  { value: 35.5, decimals: 1, suffix: "K", label: "NBA plays indexed for semantic search", source: "Courtex" },
  { prefix: "1st / ", value: 40, label: "teams at CitrusHack 2025", source: "Scenetic" },
];

/** Words cycled through in the hero headline. */
export const HERO_WORDS = ["LLM agents", "ML models", "data pipelines", "products people use"];

export const PROFILE: { label: string; value: string }[] = [
  { label: "Focus", value: "Data Science · ML / AI · Product" },
  { label: "Education", value: "UCLA, B.S. Statistics & Data Science ’27" },
  { label: "Most recent", value: "Data Science Intern, Pacific Life" },
  { label: "Works in", value: "Python · SQL · Snowflake · dbt · LangGraph · Next.js" },
  { label: "Based in", value: "Los Angeles, CA" },
  { label: "Off hours", value: "Playing & watching basketball · cooking · touring open houses" },
];

export const PILLARS = [
  {
    title: "Data Science & analytics",
    body: "SQL and dbt pipelines, experiments, and dashboards that answer the real question.",
  },
  {
    title: "ML & AI",
    body: "LLM agents, RAG, text-to-SQL, and anomaly detection, tested against real work.",
  },
  {
    title: "Product",
    body: "PRDs, scoping with stakeholders, leading teams, and shipping the interface.",
  },
];

export const EDUCATION = {
  school: "University of California, Los Angeles",
  degree: "B.S. Statistics & Data Science",
  minor: "Minor in Data Science Engineering",
  period: "2025 – 2027",
  coursework: [
    "Machine Learning Foundations (Cornell Tech)",
    "Mathematical Statistics",
    "Probability Theory",
    "Regression Analysis",
    "Design of Experiments",
    "Data Structures & Algorithms",
  ],
};

export const EXPERIENCE: Experience[] = [
  {
    id: "pacific-life",
    role: "Data Science Intern",
    company: "Pacific Life",
    location: "Newport Beach, CA",
    start: "Jun 2026",
    end: "Sep 2026",
    summary: "Built AI investigation tooling for the fraud analytics team.",
    bullets: [
      "Built a **Snowflake Cortex text-to-SQL agent** that lets fraud analysts self-serve queries across **1.6M policies**",
      "Launched a **multi-agent** Snowflake CoWork workflow over **4M+ call transcripts**, routing cases to web-activity and transcript subagents and cutting manual case review time by **~80%**",
      "Benchmarked **4** fraud detection approaches and recommended a rules + Isolation Forest ensemble that flags the **top 1%** of synthetic accounts for review",
      "Extended production **dbt Cloud** models with **5** new fields, and added dbt tests that check agent SQL against analyst-written queries",
    ],
    stack: ["Snowflake Cortex", "dbt Cloud", "SQL", "Python", "Isolation Forest", "LLM agents"],
    logo: "/logos/pacificlife.png",
  },
  {
    id: "trustworthy-ai",
    role: "Undergraduate Researcher",
    company: "UCLA Trustworthy AI Lab",
    location: "Los Angeles, CA",
    start: "Feb 2026",
    end: "Jul 2026",
    summary: "Frontend lead on Realy, a LangGraph agent that answers questions across linked tables.",
    bullets: [
      "Wrote the **PRD** with PhD researchers, defining requirements and scope for the agent’s client",
      "Built the **Next.js + TypeScript** client from scratch, shipping **10+ features in 8 weeks** with streaming, multi-step agent state",
      "Diagnosed generated-SQL failure modes across linked-table schemas and prioritized multi-table join fixes with the research team",
      "Shipped a **cost-tracking dashboard** and schema visualizer for per-query visibility into retrieval and token spend",
    ],
    stack: ["Next.js", "TypeScript", "LangGraph", "RAG", "Supabase"],
    logo: "/logos/ucla.png",
  },
  {
    id: "creative-labs",
    role: "Project Lead",
    company: "Creative Labs",
    location: "Los Angeles, CA",
    start: "Mar 2026",
    end: "Jul 2026",
    summary: "Led TappedIn, an LLM-powered event recommender for LA.",
    bullets: [
      "Led an **11-person team** building TappedIn, which lets people search LA pop-ups in plain English by interest, budget, timing, and mood",
      "Surfaced **200+** Instagram and Eventbrite events through a Supabase-backed LLM recommendation pipeline",
    ],
    stack: ["React", "TypeScript", "Supabase", "OpenAI", "LangChain"],
    logo: "/logos/creativelabs.png",
  },
  {
    id: "skinterest",
    role: "Machine Learning Engineer Intern",
    company: "Skinterest Tech",
    context: "Through Break Through Tech AI @ Cornell Tech",
    location: "Remote",
    start: "Apr 2025",
    end: "Dec 2025",
    summary: "Four-month client engagement with a NYC dermatology-tech startup, turning customer reviews into product decisions.",
    bullets: [
      "Segmented **1,000+** Sephora reviews across **300+** products with an NLP pipeline (TF-IDF, K-means) and sentiment scoring",
      "Turned clusters into customer personas and **Tableau** dashboards the founders used to prioritize product coverage",
      "Presented findings to the founders with a **5-person** team, helping lift engagement by **~20–30%**",
    ],
    stack: ["Python", "scikit-learn", "NLTK", "Tableau", "NLP"],
    logo: "/logos/skinterest.png",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "courtex",
    title: "Courtex",
    tagline: "Natural-language search for NBA plays",
    org: "Personal project",
    year: "2026",
    summary:
      "Ask “where does Doncic shoot?” and Courtex retrieves the most relevant plays, then writes a scouting-style breakdown of locations, tendencies, and efficiency.",
    highlights: [
      "Indexed **35,499** plays as 384-dim sentence-transformer embeddings in **pgvector**",
      "**FastAPI + Llama-3.3-70B** RAG pipeline returning structured analysis in **~5s**",
      "Containerized with Docker and deployed on **AWS Lambda + ECR**",
    ],
    stack: ["Python", "FastAPI", "pgvector", "Llama 3.3", "Docker", "AWS Lambda", "React"],
    image: "/projects/courtex.png",
    links: [{ label: "Live demo", href: "https://courtex.vercel.app" }],
  },
  {
    id: "realy",
    title: "Realy",
    tagline: "Analyze your spreadsheets through conversation",
    org: "UCLA Trustworthy AI Lab",
    year: "2026",
    summary:
      "A multi-table reasoning agent: upload CSVs, ask a question, and watch it plan, join, and query step by step, with every step traceable.",
    highlights: [
      "Led the frontend and wrote the **PRD** with PhD researchers",
      "Streams **multi-step agent state** from a LangGraph backend",
      "Cost dashboard exposing **per-query token spend**",
    ],
    stack: ["Next.js", "TypeScript", "LangGraph", "Supabase", "Tailwind"],
    image: "/projects/realy-v2.png",
    links: [{ label: "Live demo", href: "https://table-reasoning.vercel.app/" }],
  },
  {
    id: "tappedin",
    title: "TappedIn",
    tagline: "Find LA events that match your vibe",
    org: "Creative Labs",
    year: "2026",
    summary:
      "Describe what you’re in the mood for and TappedIn ranks local events that fit, using semantic search over embeddings plus a personalized “For You” agent.",
    highlights: [
      "Project Lead for an **11-person** team",
      "Ranks **200+** scraped events by interest, budget, timing, and mood",
    ],
    stack: ["React", "TypeScript", "FastAPI", "Supabase", "Pinecone", "OpenAI"],
    image: "/projects/tappedin.png",
  },
  {
    id: "scenetic",
    title: "Scenetic",
    tagline: "Drone computer vision for film location scouting",
    org: "CitrusHack · UC Riverside",
    year: "2025",
    award: "1st place overall",
    summary:
      "Filmmakers describe a scene; a Raspberry Pi drone streams live footage, YOLOv8 tags what it sees, and Gemini picks the location that best matches.",
    highlights: [
      "Won **1st of 40** teams on a 3-person team",
      "**~85%** accuracy matching descriptions to YOLOv8 detections",
      "Built the Gemini matching and the **Expo React Native** app",
    ],
    stack: ["Python", "YOLOv8", "Gemini", "Flask", "React Native", "Raspberry Pi"],
    image: "/projects/scenetic.png",
    imageKind: "phone",
  },
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    id: "hoops",
    title: "HoopsPredictor",
    summary:
      "Predicts NBA player points, rebounds, and assists with XGBoost on **16+** engineered features: rolling averages, matchup history, and rest days.",
    stack: ["Python", "XGBoost", "scikit-learn", "Streamlit"],
    year: "2026",
    image: "/projects/hoops.png",
    href: "https://hoopspredictor.streamlit.app/",
  },
  {
    id: "transfermate",
    title: "TransferMate",
    summary:
      "Helps California community college students plan transfers to all **9** UCs, backed by a Firestore schema of course articulations.",
    stack: ["React", "Tailwind", "Firebase", "Figma"],
    year: "2025",
    image: "/projects/transfermate.png",
    href: "https://transfer-mate.vercel.app/",
  },
  {
    id: "plantpulse",
    title: "PlantPulse",
    summary:
      "Upload a photo of a plant and get a Gemini-generated health score, diagnosis, and care feedback, tracked over time.",
    stack: ["Flask", "JavaScript", "Gemini", "Firebase"],
    year: "2025",
    award: "3rd place AgTech · HackMerced X",
    image: "/projects/plantpulse.png",
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "SQL", "R", "TypeScript", "JavaScript"],
  },
  {
    group: "AI & ML",
    items: [
      "LLM agents",
      "LangGraph",
      "Snowflake Cortex",
      "RAG",
      "Text-to-SQL",
      "sentence-transformers",
      "pgvector",
      "scikit-learn",
      "XGBoost",
      "PyTorch",
      "Anomaly detection",
      "NLP",
    ],
  },
  {
    group: "Data Science & analytics",
    items: [
      "Snowflake",
      "dbt Cloud",
      "Postgres",
      "pandas",
      "Tableau",
      "Power BI",
      "A/B testing & DoE",
      "Regression modeling",
    ],
  },
  {
    group: "Engineering",
    items: [
      "FastAPI",
      "Next.js",
      "React",
      "React Native",
      "Docker",
      "AWS (Lambda, ECR)",
      "Supabase",
      "Firebase",
      "Git",
    ],
  },
  {
    group: "Product",
    items: ["PRD writing", "Requirements scoping", "Team leadership", "Stakeholder demos", "Figma", "Claude Code", "Cursor"],
  },
];

export const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
