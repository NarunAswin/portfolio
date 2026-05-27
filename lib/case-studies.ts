export type ProjectStatus = "Production" | "Live" | "Enterprise";

const PROJECT_ORDER = [
  "istana-erp",
  "legal-ai",
  "sustainability-platform",
  "hussmaan",
] as const;

export type CaseStudySlug = (typeof PROJECT_ORDER)[number];

export interface CaseStudyData {
  slug: CaseStudySlug;
  title: string;
  accent: string;
  glow: string;
  status: ProjectStatus;
  description: string;
  stack: string[];
  liveDemo?: string;
  github?: string;
  whatIsIt: string;
  contribution: string[];
}

const caseStudies: Record<CaseStudySlug, CaseStudyData> = {
  "istana-erp": {
    slug: "istana-erp",
    title: "Istana ERP",
    accent: "#6366f1",
    glow: "rgba(99, 102, 241, 0.25)",
    status: "Enterprise",
    description:
      "A complete factory ERP with Production, Finance, and HRMS modules for end-to-end manufacturing operations.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "shadcn/ui", "Cursor"],
    whatIsIt:
      "Istana ERP is an enterprise resource planning system built for a factory environment. It unifies production tracking, financial management, and human resources into one platform so teams can manage inventory, payroll, ledgers, and operations without switching between disconnected tools.",
    contribution: [
      "Designed and built responsive dashboard UI with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
      "Modeled the database schema and queries using Prisma with PostgreSQL for production, finance, and HRMS data.",
      "Developed reusable component libraries to keep the UI consistent across all ERP modules.",
      "Integrated REST APIs for real-time sync between frontend modules and backend services.",
      "Implemented role-based access so different factory teams see only what they need.",
      "Supported deployment on VPS with Nginx and CI/CD for stable production releases.",
    ],
  },

  "legal-ai": {
    slug: "legal-ai",
    title: "Legal-AI",
    accent: "#0ea5e9",
    glow: "rgba(14, 165, 233, 0.25)",
    status: "Production",
    description:
      "An AI-powered platform for legal document analysis, case research, and faster drafting workflows.",
    stack: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    whatIsIt:
      "Legal-AI is a web application that helps legal teams analyze documents, search case law semantically, and generate insights faster. It combines a modern Next.js interface with a Python/FastAPI backend to process documents and return AI-driven results in real time.",
    contribution: [
      "Built the frontend experience with Next.js and Tailwind CSS for document upload, review, and results display.",
      "Connected the UI to FastAPI endpoints for AI analysis and legal data processing.",
      "Worked with PostgreSQL to store and retrieve document metadata and application data.",
      "Implemented streaming responses so users see AI output progressively instead of waiting on long requests.",
      "Focused on a clean, professional interface suited for document-heavy legal workflows.",
    ],
  },

  "sustainability-platform": {
    slug: "sustainability-platform",
    title: "Sustainability Platform",
    accent: "#22c55e",
    glow: "rgba(34, 197, 94, 0.25)",
    status: "Live",
    description:
      "A marketing website with an AI-powered ESG navigator for sustainability guidance and lead engagement.",
    stack: ["Next.js", "Sanity.io"],
    whatIsIt:
      "This project is a sustainability-focused website made up of static marketing pages for brand presence and lead generation. It includes an AI response flow that helps visitors calculate and navigate ESG-related guidance through an interactive navigator experience.",
    contribution: [
      "Developed the marketing pages with Next.js for a fast, polished, and responsive layout.",
      "Integrated Sanity.io as the headless CMS for content and CRM-related page management.",
      "Built the ESG navigator interaction so users receive AI-guided responses on sustainability topics.",
      "Structured reusable page sections so marketing content can be updated without heavy code changes.",
      "Optimized the site for clarity, readability, and a smooth visitor journey from landing to navigator.",
    ],
  },

  hussmaan: {
    slug: "hussmaan",
    title: "Hussmaan",
    accent: "#ffb783",
    glow: "rgba(255, 183, 131, 0.25)",
    status: "Production",
    description:
      "A quoting platform for a door manufacturing company with 3D door configuration and visualization.",
    stack: ["TypeScript", "React Three Fiber", "Material UI", "Vercel"],
    whatIsIt:
      "Hussmaan is a digital quoting system built for a door manufacturing company. Sales teams and customers can configure door options, preview them in 3D, and generate accurate quotes—replacing slow manual processes with a visual, product-led experience.",
    contribution: [
      "Built the 3D door configurator using React Three Fiber so users can preview products before quoting.",
      "Designed the quoting flow UI with Material UI for a consistent and professional sales experience.",
      "Integrated APIs to connect configuration choices with quote generation logic.",
      "Improved frontend performance for smooth 3D interactions and page transitions.",
      "Deployed the application on Vercel for reliable hosting and fast delivery.",
    ],
  },
};

export function getCaseStudy(slug: CaseStudySlug): CaseStudyData {
  return caseStudies[slug];
}

export function getCaseStudyNav(slug: CaseStudySlug) {
  const index = PROJECT_ORDER.indexOf(slug);
  const prev = index > 0 ? caseStudies[PROJECT_ORDER[index - 1]] : null;
  const next =
    index < PROJECT_ORDER.length - 1 ? caseStudies[PROJECT_ORDER[index + 1]] : null;

  return {
    prev: prev ? { title: prev.title, href: `/projects/${prev.slug}` } : null,
    next: next ? { title: next.title, href: `/projects/${next.slug}` } : null,
  };
}
