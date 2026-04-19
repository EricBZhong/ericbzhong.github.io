import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

interface Project {
  title: string;
  role: string;
  description: string;
  bullets: string[];
  tech: string[];
  link?: { label: string; href: string };
}

const projects: Project[] = [
  {
    title: "Colby AI",
    role: "Co-Founder & CTO",
    description:
      "AI-powered sales assistant for asset management distribution teams. Voice-first Chrome Extension that automates Salesforce data entry, generates reports, preps for meetings, and surfaces research.",
    bullets: [
      "3-tier AI agent system (Google ADK, Gemini 3.1 Pro) with 7 specialist sub-agents orchestrating CRM CRUD, financial research, and SQL analytics",
      "Real-time SSE streaming between Chrome Extension (React 19, TypeScript) and FastAPI backend",
      "Enterprise security: Salesforce OAuth 2.0, AES-256-GCM encryption, SOC 2 audit readiness",
      "Berkeley SkyDeck Pad-13; demoed to firms managing $30T+ in combined AUM",
    ],
    tech: [
      "Python",
      "FastAPI",
      "TypeScript",
      "React",
      "Google ADK",
      "DuckDB",
      "GCP Cloud Run",
      "Terraform",
    ],
    link: { label: "getcolby.com", href: "https://getcolby.com" },
  },
  {
    title: "Personal CTO Dashboard",
    role: "Solo Project",
    description:
      "AI-powered engineering orchestrator that turns natural language instructions into production-ready pull requests. Type a task, CTO agent gathers context, spawns parallel engineer agents, each writes code, runs tests, opens PR.",
    bullets: [
      "10+ concurrent AI agents with process isolation, real-time WebSocket orchestration, and autonomous decision-making",
      "15-page dashboard with Kanban board, live engineer terminals, PR review, SOC 2 compliance, analytics",
      "Multi-channel access: web dashboard, Slack, SMS/voice (Twilio)",
      "Token budgets, failure safeguards, config versioning with rollback, 12 chaos monkey test scenarios",
    ],
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Node.js",
      "Zustand",
      "Firestore",
      "Claude CLI",
      "Docker",
    ],
  },
  {
    title: "Eric Chatbot",
    role: "Solo Project",
    description:
      'iMessage relationship analyzer — "I was down bad for a girl and built an entire AI-powered analytics platform to figure out if she liked me back."',
    bullets: [
      "Imports iMessage conversations, analyzes 10K+ messages using chunked AI analysis, generates relationship intelligence dashboards",
      "Relationship scoring (0-100), RPG-style character sheets, green/red flag extraction, attachment style detection",
      'Real-time coaching ("WHAT\'S MY MOVE?"), game plan generator, clone chat, journal',
      "Cyberpunk dark theme with neon accents — built with zero frameworks (vanilla JS, no React)",
    ],
    tech: [
      "Python",
      "FastAPI",
      "SQLite",
      "Claude CLI",
      "Chart.js",
      "Jinja2",
      "Vanilla JS",
    ],
    link: {
      label: "GitHub",
      href: "https://github.com/EricBZhong/eric-chatbot",
    },
  },
];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>What I&apos;ve Built</SectionHeading>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="mt-1 inline-block rounded-full bg-card px-2.5 py-0.5 text-xs font-medium text-muted">
                      {project.role}
                    </span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-accent"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ArrowIcon />
                    </a>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-card px-2 py-0.5 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                    >
                      {project.link.label}
                      <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
