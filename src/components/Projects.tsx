"use client";

import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

interface Project {
  title: string;
  role: string;
  description: string;
  bullets: string[];
  tech: string[];
  href?: string;
  linkLabel?: string;
  icon: React.ReactNode;
  gradient: string;
}

/* Inline SVG icons — one per project */
function AgentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
      <path d="M9 17h6" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m6 9 4 3-4 3" />
      <path d="M14 15h4" />
    </svg>
  );
}

function MessageHeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M12 8c-1-1-3-1-3.5.5S9 11 12 13c3-2 3.5-3 3-4.5S13 7 12 8Z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M3 3v18h18" />
      <path d="m7 16 4-8 4 5 5-9" />
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 10h1.5a1.5 1.5 0 0 1 0 3H9v3" />
      <circle cx="9" cy="7" r="0.5" fill="currentColor" />
    </svg>
  );
}

const projects: Project[] = [
  {
    title: "Colby AI",
    role: "Co-Founder & CTO",
    icon: <AgentIcon />,
    gradient: "from-blue-500/20 to-cyan-500/10",
    description:
      "Salespeople at asset management firms spend half their day typing into Salesforce instead of actually selling. We built a Chrome Extension that does it for them — data entry, reports, meeting prep, research — all through voice and chat.",
    bullets: [
      "Designed a 3-tier agent architecture with 7 specialist sub-agents. Each one handles a different slice (CRM ops, financial research, SQL analytics) so the system doesn't trip over itself",
      "SSE streaming with bidirectional tool execution — the agent can reach into Salesforce through the browser in real time, which was way harder than it sounds",
      "Full security stack because these firms manage trillions and won't touch you without it: OAuth 2.0, AES-256-GCM encryption, SOC 2 readiness",
      "Got into Berkeley SkyDeck Pad-13. Demoed to firms managing $30T+ combined AUM. Still kind of surreal",
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
    href: "https://getcolby.com",
    linkLabel: "getcolby.com",
  },
  {
    title: "Personal CTO Dashboard",
    role: "Solo Project",
    icon: <TerminalIcon />,
    gradient: "from-blue-500/15 to-indigo-500/10",
    description:
      "I wanted to see what happens if you give AI agents real autonomy over a codebase. You type a task in plain English, a CTO agent figures out what needs to happen, spins up engineer agents in parallel, and they each clone the repo, write code, run tests, and open a PR.",
    bullets: [
      "10+ agents running concurrently with process isolation — they can't step on each other's work, and if one fails it doesn't take down the rest",
      "Built a 15-page dashboard to watch it all happen: Kanban board, live terminals for each engineer, PR diffs, compliance checks",
      "You can also trigger tasks from Slack or even a phone call (Twilio). Felt overkill but it's honestly useful",
      "Added 12 chaos monkey scenarios because I kept finding weird edge cases — Unicode floods, rapid-fire inputs, that kind of thing",
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
    href: "https://github.com/GetColby/Personal-CTO-v1",
    linkLabel: "GitHub",
  },
  {
    title: "Eric Chatbot",
    role: "Solo Project",
    icon: <MessageHeartIcon />,
    gradient: "from-pink-500/15 to-blue-500/10",
    description:
      "I was down bad for a girl and built an entire AI-powered analytics platform to figure out if she liked me back. It imports your iMessage history and tells you what's really going on.",
    bullets: [
      "Pulls in iMessage conversations, chunks them up, and runs AI analysis across 10K+ messages to build relationship dashboards",
      "Gives you a relationship score (0-100), RPG-style character sheets for each person, green/red flag breakdowns, attachment style detection",
      'Has a "WHAT\'S MY MOVE?" button that gives you real-time coaching, plus a game plan generator and a clone chat mode',
      "Cyberpunk dark theme with neon accents. Built the whole thing in vanilla JS — no React, no frameworks, just raw DOM manipulation",
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
    href: "https://github.com/EricBZhong/eric-chatbot",
    linkLabel: "GitHub",
  },
  {
    title: "SPY Options Trader",
    role: "Solo Project",
    icon: <ChartIcon />,
    gradient: "from-emerald-500/15 to-cyan-500/10",
    description:
      "Algorithmic trading system for 0-3 DTE SPY options. Backtests four strategies — Iron Condor, Opening Range Breakout, Mean Reversion, and Gamma Scalp — with walk-forward validation, then paper trades them live through Alpaca.",
    bullets: [
      "Event-driven backtest engine running at minute-level resolution with realistic fill modeling and configurable walk-forward windows that track Sharpe degradation",
      "Full Greeks pipeline: Black-Scholes pricing, Brent's method IV solving, plus GEX and IV rank/percentile calculations — both scalar and vectorized NumPy implementations",
      "ML regime detection (rule-based + Random Forest) that switches strategies based on market conditions. Risk management with daily loss limits, circuit breakers, and Kelly/volatility-scaled sizing",
      "Rewrote critical paths in Rust (13-crate workspace) with PyO3 bindings for Python interop. Arrow/Parquet for zero-copy data, Tokio for async live trading",
    ],
    tech: [
      "Python",
      "Rust",
      "Polars",
      "DuckDB",
      "NumPy",
      "SciPy",
      "Streamlit",
      "PyO3",
      "Alpaca API",
    ],
    href: "https://github.com/EricBZhong/optionsTrader",
    linkLabel: "GitHub",
  },
  {
    title: "LoveTogether",
    role: "Solo Project · In Progress",
    icon: <SyncIcon />,
    gradient: "from-violet-500/15 to-blue-500/10",
    description:
      "Mobile app that syncs a single master profile across multiple dating platforms. Mostly an excuse to build a clean adapter architecture and a local-first sync system on React Native.",
    bullets: [
      "Platform adapter pattern — each app (Tinder, Bumble, Hinge) has its own constraints (character limits, prompt counts, photo rules). One interface, swap the adapter, no rewrites",
      "Bidirectional sync with field-level diffing: export to platforms, import back, and merge changes selectively before writing to the master profile",
      "Local-first SQLite database with Drizzle ORM (9 tables), Zustand for state. No server, everything on-device",
      "User-defined templates let you add any platform beyond the built-in three with custom field types and constraints",
    ],
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "Drizzle ORM",
      "SQLite",
    ],
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

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>What I&apos;ve Built</SectionHeading>

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => {
            const cardClass =
              "glass-card gradient-border group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:glow-sm";

            const content = (
              <>
                {/* Visual header */}
                <div className={`flex items-center justify-center bg-gradient-to-br ${project.gradient} px-6 py-6 text-blue-300/60`}>
                  {project.icon}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="mt-1 inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-xs font-medium text-blue-300">
                        {project.role}
                      </span>
                    </div>
                    {project.href && (
                      <span className="text-muted transition-colors group-hover:text-accent">
                        <ArrowIcon />
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-xs text-blue-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.href ? (
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
                        {project.linkLabel}
                        <ArrowIcon />
                      </span>
                    ) : (
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-muted">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </>
            );

            return (
              <motion.div key={project.title} variants={staggerItem}>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} cursor-pointer`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={cardClass}>{content}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
