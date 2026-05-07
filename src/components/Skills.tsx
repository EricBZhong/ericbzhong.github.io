"use client";

import { motion } from "motion/react";
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

/* Small inline SVG icons for each skill category */
function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="m12 2 10 6-10 6L2 8z" /><path d="m2 12 10 6 10-6" /><path d="m2 16 10 6 10-6" />
    </svg>
  );
}
function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" fill="currentColor" /><circle cx="6" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 2a6 6 0 0 1 6 6c0 2-1 3.5-2 4.5V15a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C7 11.5 6 10 6 8a6 6 0 0 1 6-6Z" /><path d="M10 19v2M14 19v2M9 9h6" />
    </svg>
  );
}
function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}
function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M18 10a4 4 0 0 0-7.46-2A6 6 0 1 0 6 20h12a4 4 0 0 0 0-8Z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 2s8 4 8 10-8 10-8 10-8-4-8-10S12 2 12 2Z" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
  thoughts: string;
}

const categories: SkillCategory[] = [
  {
    title: "Architecture & System Design",
    icon: <LayersIcon />,
    items: [
      "Multi-tier AI agent systems",
      "Real-time protocols (SSE, WebSocket)",
      "Session hierarchy management",
      "Event-driven architectures",
      "Multi-service orchestration",
    ],
    thoughts:
      "First version of Colby was one giant agent doing everything. Worked great in demos, completely fell apart on anything real — hallucinated tool calls, mixed up contexts, forgot what it was doing mid-task. I remember being at my co-founder's apartment at like 2am, both of us staring at the same Salesforce error, and I just said 'this thing needs to be split up.' Spent that whole weekend sketching what became the 3-tier system on a whiteboard. Each agent only has to be good at one thing. The tricky part was the routing — you need the root agent to know enough to delegate, but not so much that it tries to do the work itself. Took a few tries.",
  },
  {
    title: "Frontend",
    icon: <MonitorIcon />,
    items: [
      "React 19, Next.js 15, Angular",
      "Chrome Extensions (Manifest V3)",
      "Zustand, Chart.js, Tailwind CSS",
      "Ionic mobile, Android Studio",
      "Vanilla JS, Jinja2, IndexedDB",
    ],
    thoughts:
      "Manifest V3 Chrome Extensions nearly broke me. V2 had persistent background pages and V3 just... doesn't. So I had to figure out how state survives service worker restarts, and half the answers online were outdated V2 patterns that don't apply anymore. Eventually built a message bus between the sidepanel, background script, and content scripts that reconnects on its own. Also learned the hard way you can't use eval() in extensions — CSP kills it — had to rewrite a whole templating approach. The Eric Chatbot was the opposite vibe. Built most of it in one sitting at a friend's housewarming party. Everyone's in the kitchen doing shots and I'm on the couch with my laptop writing vanilla JS. No frameworks, no build step. Honestly refreshing.",
  },
  {
    title: "Backend",
    icon: <ServerIcon />,
    items: [
      "Python / FastAPI, Django",
      "Golang, Node.js / Express",
      "SSE streaming, WebSocket servers",
      "REST API design, async patterns",
      "Thread-safe locking, connection pooling",
    ],
    thoughts:
      "Went with FastAPI for Colby because I needed async and the auto-generated docs saved me a ton of time early on. The hard part was SSE. Server-Sent Events sound simple until you need the agent to send a tool request to the browser, have the browser hit Salesforce, and POST the result back — all while keeping the stream alive. Had a bug for two weeks where connections silently dropped after 30 seconds on Cloud Run. I was losing it — stayed at the office past midnight three nights straight just adding logging everywhere. Turned out the load balancer was killing idle connections. Added heartbeat pings and it was fixed in 20 minutes. Two weeks for a 20-minute fix. Classic.",
  },
  {
    title: "AI & Agentic Systems",
    icon: <BrainIcon />,
    items: [
      "Multi-agent orchestration (Google ADK)",
      "Gemini 3.1 Pro, Claude, voice AI",
      "LLM tool-use & function calling",
      "RAG, prompt engineering",
      "LLM-as-judge eval (2,000+ scenarios)",
    ],
    thoughts:
      "Nobody tells you this but the hard part of multi-agent systems isn't the AI — it's the plumbing. Making sure tool IDs match between request and response. Handling it when one sub-agent errors mid-conversation. Stopping the root agent from re-delegating to the same broken specialist in a loop. I built the eval framework after a demo where the agent confidently told a prospect the wrong AUM for their firm. Sat in the car after that meeting just staring at the steering wheel. Now we run 2,000+ scenarios before any model swap goes out. You can't hand-review that many outputs, so I built evaluator agents to judge other agents. It's agents all the way down.",
  },
  {
    title: "Data & Databases",
    icon: <DatabaseIcon />,
    items: [
      "DuckDB, Google Spanner, Firestore",
      "SQLite, Redis (30x latency reduction)",
      "Dynamic schema discovery",
      "SQL optimization, query caching",
      "Thread-safe access patterns",
    ],
    thoughts:
      "DuckDB was a bet. I needed per-session analytical queries on Salesforce data and didn't want to spin up a full Postgres instance for every user. My co-founder thought I was crazy — 'just use Postgres' — but DuckDB runs in-process, handles aggregations well, and each session gets its own file. No cross-contamination. The annoying part was schema discovery. Every Salesforce org has different custom fields, so I had to build something that introspects whatever data gets loaded and flattens nested objects on the fly. At Coinbase the Redis thing was simpler — the Wallet API kept hitting the same endpoints and nobody had cached them. Added Redis, p99 went from 3s to 100ms. Sometimes the best fix is the one nobody bothered to try.",
  },
  {
    title: "Infrastructure & DevOps",
    icon: <CloudIcon />,
    items: [
      "GCP Cloud Run, VPC, Secret Manager",
      "Terraform, Docker, GitHub Actions",
      "Bazel, multi-stage builds",
      "Auto-scaling (0 to 50 instances)",
      "Health checks, auto-rollback",
    ],
    thoughts:
      "Didn't touch Terraform until SOC 2 forced me to set up separate VPCs for dev and prod. Before that I was clicking around the GCP console like an animal. Once I wrote the Terraform modules I actually understood how VPCs, Cloud NAT, and firewall rules fit together — and spinning up a new environment went from a 45-minute checklist to one command. Auto-scaling on Cloud Run was mostly painless except cold starts. DuckDB files need to load from disk on boot, so I just keep one instance warm in prod and eat the cost. Not elegant but it works.",
  },
  {
    title: "Security & Compliance",
    icon: <ShieldIcon />,
    items: [
      "OAuth 2.0, JWT, Firebase Auth",
      "AES-256-GCM, ECDH P-256, CMEK",
      "SOC 2 Type II audit readiness",
      "VPC segregation, firewall policies",
      "SBOM, dependency auditing",
    ],
    thoughts:
      "Security got real fast once we started talking to asset management firms. These companies manage trillions — they're not handing you their Salesforce credentials unless you can prove you won't leak them. So I built AES-256-GCM encryption for data at rest and ECDH key exchange so keys never touch the server in plaintext. The Salesforce OAuth flow was a multi-week saga. I read their docs front to back probably four times. Redirect URI mismatches, wrong grant types, token exchange edge cases I didn't even know existed. SOC 2 prep was tedious but honestly it rewired how I build things. I just default to audit logs and secret rotation now instead of adding them later.",
  },
  {
    title: "Testing & Quality",
    icon: <CheckCircleIcon />,
    items: [
      "310+ unit & integration tests",
      "LLM-as-judge eval framework",
      "12 chaos monkey scenarios",
      "Puppeteer browser automation",
      "Datadog monitoring dashboards",
    ],
    thoughts:
      "I used to be the 'tests slow me down' guy. Then I pushed a Salesforce update that silently broke record creation for one object type and nobody caught it for three days. Found out Sunday morning checking Slack in bed. That'll convert you. Wrote 310+ tests after that and built a chaos monkey suite that throws Unicode floods, rapid-fire requests, and XSS payloads at the system to see what breaks. The Puppeteer harness was born out of frustration — you can't unit test a sidepanel that talks to a background script that talks to a content script that talks to Salesforce. At some point you just need a robot clicking buttons.",
  },
];

const pillStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const pillItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Skills &amp; Expertise</SectionHeading>

        {/* Language pills */}
        <FadeIn delay={0.1}>
          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            variants={pillStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {languages.map((lang) => (
              <motion.span
                key={lang}
                variants={pillItem}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-foreground transition-all hover:border-blue-500/30 hover:bg-blue-500/10 hover:glow-sm"
              >
                {lang}
              </motion.span>
            ))}
          </motion.div>
        </FadeIn>

        {/* Category grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={0.05 * i}>
              <div className="glass-card flex h-full flex-col p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {cat.title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-4 border-l-2 border-blue-500/30 pl-4 pt-4">
                  <p className="text-xs font-medium text-foreground/70">
                    Eric&apos;s thoughts:
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted italic">
                    &ldquo;{cat.thoughts}&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
