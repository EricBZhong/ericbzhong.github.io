import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

interface TimelineEntry {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  isEducation?: boolean;
}

const timeline: TimelineEntry[] = [
  {
    company: "Colby",
    role: "Co-Founder & CTO",
    dates: "Jun 2025 – Present",
    bullets: [
      "Built everything from scratch — the AI agents, Chrome extension, cloud infra, auth, security, all of it",
      "Got into Berkeley SkyDeck Pad-13 and started demoing to firms managing $30T+ AUM, which was a wild experience",
      "Kicking off implementation trials with $1T+ AUM firms in May 2026",
    ],
  },
  {
    company: "Stealth Startup",
    role: "Software Engineer",
    dates: "Sep 2024 – Jun 2025",
    bullets: [
      "Full-stack eng at an early-stage startup. Can't say much — NDA",
    ],
  },
  {
    company: "Arta Finance",
    role: "Software Engineer, Risk + Research",
    dates: "May 2023 – Aug 2024",
    bullets: [
      "Joined a digital wealth management platform backed by Eric Schmidt and Sundar Pichai ($90M Series A). Learned a lot about operating in regulated finance",
      "Built an admin console on Firebase + Spanner + Angular that let non-engineers track trade volume and fix financial issues — saved the eng team a ton of hours",
      "Wrote tax-lot optimization algorithms and added LLM-powered search so people could query across codebases in plain English",
    ],
  },
  {
    company: "Caltech",
    role: "AI & ML Post-Graduate Bootcamp",
    dates: "Jun 2022 – May 2023",
    bullets: [],
    isEducation: true,
  },
  {
    company: "Coinbase",
    role: "Software Engineer, Web3 Team",
    dates: "Mar 2022 – Jun 2022",
    bullets: [
      "Added Redis caching to the Wallet API — dropped p99 latency from 3s to 100ms, which was a 30x improvement",
      "Built Golang integrations for cross-chain bridge and trade quoting APIs",
      "Set up Datadog dashboards that actually helped us catch production issues before users did",
    ],
  },
  {
    company: "Ainume",
    role: "Software Development Intern",
    dates: "Jul 2020 – Mar 2022",
    bullets: [
      "Built a telehealth mobile app in React/Ionic and a Django website with SageMaker NLP — my first real engineering job",
    ],
  },
  {
    company: "UC Berkeley",
    role: "B.S. Engineering Physics",
    dates: "2017 – 2021",
    bullets: ["Minors in EECS and Environmental Economics & Policy"],
    isEducation: true,
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Experience</SectionHeading>

        <div className="mt-12 space-y-0">
          {timeline.map((entry, i) => (
            <FadeIn key={entry.company + entry.dates} delay={i * 0.05}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`mt-1.5 h-3 w-3 rounded-full ${
                      entry.isEducation ? "border-2 border-border bg-white" : "bg-accent"
                    }`}
                  />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {entry.company}
                    </h3>
                    <span className="text-sm text-muted">{entry.role}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted">{entry.dates}</p>

                  {entry.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-border" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
