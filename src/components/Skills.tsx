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
  thoughts: string;
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
    thoughts:
      "When I started building Colby, the first version was just one giant agent that did everything. It worked for demos but fell apart the second you gave it anything complex — the model would hallucinate tool calls, mix up contexts, lose track of what it was doing. I spent a weekend sketching out what became the 3-tier architecture on a whiteboard, splitting responsibilities so each agent only had to be good at one thing. The hardest part was getting the routing right — the root agent needs to know enough to delegate but not so much that it tries to do the work itself. Took a few iterations to find that balance.",
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
    thoughts:
      "Chrome Extensions with Manifest V3 nearly broke me. The migration from V2 killed background persistence, so I had to rethink how state survives service worker restarts. The docs were sparse and half the Stack Overflow answers were outdated V2 patterns. I ended up building a message bus between the sidepanel, background script, and content scripts that reconnects gracefully. Also learned the hard way that you can't use eval() in extensions — had to rewrite a whole templating approach because of CSP. The Eric Chatbot was the opposite experience — zero frameworks, just vanilla JS, and honestly it was refreshing. Sometimes you don't need React.",
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
    thoughts:
      "I chose FastAPI for Colby because I needed async support and the auto-generated OpenAPI docs saved me hours during early prototyping. The tricky part was SSE — Server-Sent Events sound simple until you need bidirectional tool execution through them. The agent sends a tool request, the browser executes it against Salesforce, and sends the result back via a separate POST, all while keeping the SSE stream alive. I had a bug for two weeks where connections would silently drop after 30 seconds on Cloud Run. Turned out the load balancer was killing idle connections. Added heartbeat pings and that fixed it overnight.",
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
    thoughts:
      "The thing nobody tells you about multi-agent systems is that the hard part isn't the AI — it's the plumbing. Getting tool IDs to match between request and response, handling partial failures when one sub-agent errors mid-conversation, making sure the root agent doesn't re-delegate to the same failing specialist in a loop. I built the eval framework after a demo where the agent confidently told a prospect the wrong AUM for their firm. That was a bad day. Now we run 2,000+ scenarios before any model change ships. The LLM-as-judge approach was born out of necessity — you can't manually review that many outputs.",
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
    thoughts:
      "DuckDB was a bet that paid off. I needed per-session analytical queries on Salesforce data without standing up a full Postgres instance for every user. DuckDB runs in-process, handles complex aggregations fast, and each session gets its own file so there's zero cross-contamination. The challenge was schema discovery — every Salesforce org has different custom fields, so I built a system that introspects the loaded data and flattens nested objects on the fly. At Coinbase, the Redis win was more straightforward but equally satisfying — the Wallet API was hitting the same endpoints repeatedly and caching dropped p99 latency from 3 seconds to 100ms. Sometimes the best optimization is the obvious one.",
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
    thoughts:
      "I didn't touch Terraform until I had to set up separate VPCs for dev and prod for SOC 2. Before that, I was clicking through the GCP console like an animal. Writing the Terraform modules forced me to actually understand how VPCs, Cloud NAT, and firewall rules fit together — and once it was codified, spinning up the dev environment was a single `terraform apply` instead of a 45-minute checklist. The auto-scaling setup on Cloud Run was mostly smooth, except for the cold start problem. DuckDB files need to load from disk, so I ended up keeping a minimum of 1 instance warm in prod and eating the cost.",
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
    thoughts:
      "Security became real the moment we started talking to asset management firms. These are companies managing trillions of dollars — they don't hand you their Salesforce credentials without seeing your security posture. I implemented AES-256-GCM encryption for data at rest and ECDH key exchange so the keys never touch the server in plaintext. The OAuth 2.0 flow with Salesforce's External Client Apps was a multi-week saga of redirect URI mismatches and grant type confusion. SOC 2 prep was tedious but it changed how I think about building — now I default to audit logs, least-privilege access, and secret rotation from day one instead of bolting them on later.",
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
    thoughts:
      "I'll be honest — I used to be the \"tests slow me down\" guy. That changed when I pushed a Salesforce CRUD update that silently broke record creation for one specific object type. Nobody caught it for three days. After that, I wrote 310+ tests and built the chaos monkey suite, which throws Unicode floods, rapid-fire requests, and XSS payloads at the system to make sure it degrades gracefully. The Puppeteer harness was for testing the Chrome Extension end-to-end — you can't unit test a sidepanel that talks to a background script that talks to a content script that talks to Salesforce. Sometimes you just need a robot clicking buttons.",
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={0.05 * i}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-white p-5">
                <h3 className="text-sm font-semibold text-foreground">
                  {cat.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-border pt-4">
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
