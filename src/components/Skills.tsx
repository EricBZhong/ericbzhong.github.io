import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const languages = [
  "Python",
  "TypeScript",
  "JavaScript",
  "Golang",
  "SQL",
  "C++",
  "Java",
  "HTML/CSS",
  "Swift",
  "R",
  "MATLAB",
];

interface SkillCategory {
  title: string;
  items: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Architecture & System Design",
    items: [
      "Multi-tier AI agent systems",
      "Real-time protocols (SSE, WebSocket)",
      "Session hierarchy management",
      "Event-driven architectures",
      "Multi-service orchestration",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React 19, Next.js 15, Angular",
      "Chrome Extensions (Manifest V3)",
      "Zustand, Chart.js, Tailwind CSS",
      "Ionic mobile, Android Studio",
      "Vanilla JS, Jinja2, IndexedDB",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python / FastAPI, Django",
      "Golang, Node.js / Express",
      "SSE streaming, WebSocket servers",
      "REST API design, async patterns",
      "Thread-safe locking, connection pooling",
    ],
  },
  {
    title: "AI & Agentic Systems",
    items: [
      "Multi-agent orchestration (Google ADK)",
      "Gemini 3.1 Pro, Claude, voice AI",
      "LLM tool-use & function calling",
      "RAG, prompt engineering",
      "LLM-as-judge eval (2,000+ scenarios)",
    ],
  },
  {
    title: "Data & Databases",
    items: [
      "DuckDB, Google Spanner, Firestore",
      "SQLite, Redis (30x latency reduction)",
      "Dynamic schema discovery",
      "SQL optimization, query caching",
      "Thread-safe access patterns",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    items: [
      "GCP Cloud Run, VPC, Secret Manager",
      "Terraform, Docker, GitHub Actions",
      "Bazel, multi-stage builds",
      "Auto-scaling (0 to 50 instances)",
      "Health checks, auto-rollback",
    ],
  },
  {
    title: "Security & Compliance",
    items: [
      "OAuth 2.0, JWT, Firebase Auth",
      "AES-256-GCM, ECDH P-256, CMEK",
      "SOC 2 Type II audit readiness",
      "VPC segregation, firewall policies",
      "SBOM, dependency auditing",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "310+ unit & integration tests",
      "LLM-as-judge eval framework",
      "12 chaos monkey scenarios",
      "Puppeteer browser automation",
      "Datadog monitoring dashboards",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Skills &amp; Expertise</SectionHeading>

        {/* Language pills */}
        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-border bg-white px-3 py-1 text-sm font-medium text-foreground"
              >
                {lang}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Category grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={0.05 * i}>
              <div className="rounded-xl border border-border bg-white p-5">
                <h3 className="text-sm font-semibold text-foreground">
                  {cat.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
