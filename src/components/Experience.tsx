"use client";

import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

/* ── Company logo SVGs ─────────────────────────────────── */

// Colby — minimal "C" in a rounded square, matching their modern SaaS branding
function ColbyLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#1a1a2e" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <text x="16" y="21" textAnchor="middle" fill="#e4e4e7" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">C</text>
    </svg>
  );
}

// Stealth — lock icon (NDA)
function StealthLogo() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="7" y="14" width="18" height="13" rx="2" fill="rgba(255,255,255,0.06)" />
      <path d="M11 14v-3a5 5 0 0 1 10 0v3" />
      <circle cx="16" cy="21" r="1.5" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

// Arta Finance — stylized "A" in a premium style
function ArtaLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#1a1a2e" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <path d="M16 8 L22 24 L20 24 L18.5 20 L13.5 20 L12 24 L10 24 Z M14.2 18.5 L17.8 18.5 L16 12.5 Z" fill="#c8f2fd" />
    </svg>
  );
}

// Caltech — "CIT" in Caltech Orange
function CaltechLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#1a1a2e" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <text x="16" y="21" textAnchor="middle" fill="#FF6C0C" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">CIT</text>
    </svg>
  );
}

// Coinbase — blue circle with negative-space "C" (square cutout opening to the right)
function CoinbaseLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5">
      <circle cx="16" cy="16" r="13" fill="#1652F0" />
      <rect x="13" y="12" width="9" height="8" rx="1" fill="#1a1a2e" />
    </svg>
  );
}

// Ainume — medical cross (telehealth)
function AinumeLogo() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#1a1a2e" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="14" y="9" width="4" height="14" rx="1" fill="rgba(255,255,255,0.5)" />
      <rect x="9" y="14" width="14" height="4" rx="1" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}

// UC Berkeley — script "Cal" in Berkeley Blue on gold
function BerkeleyLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#003262" />
      <text x="16" y="21.5" textAnchor="middle" fill="#FDB515" fontSize="12" fontWeight="700" fontStyle="italic" fontFamily="Georgia, serif">Cal</text>
    </svg>
  );
}

/* ── Data ───────────────────────────────────────────────── */

interface TimelineEntry {
  company: string;
  logo: React.ReactNode;
  role: string;
  dates: string;
  bullets: string[];
  isEducation?: boolean;
}

const timeline: TimelineEntry[] = [
  {
    company: "Colby",
    logo: <ColbyLogo />,
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
    logo: <StealthLogo />,
    role: "Software Engineer",
    dates: "Sep 2024 – Jun 2025",
    bullets: [
      "Full-stack eng at an early-stage startup. Can't say much — NDA",
    ],
  },
  {
    company: "Arta Finance",
    logo: <ArtaLogo />,
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
    logo: <CaltechLogo />,
    role: "AI & ML Post-Graduate Bootcamp",
    dates: "Jun 2022 – May 2023",
    bullets: [],
    isEducation: true,
  },
  {
    company: "Coinbase",
    logo: <CoinbaseLogo />,
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
    logo: <AinumeLogo />,
    role: "Software Development Intern",
    dates: "Jul 2020 – Mar 2022",
    bullets: [
      "Built a telehealth mobile app in React/Ionic and a Django website with SageMaker NLP — my first real engineering job",
    ],
  },
  {
    company: "UC Berkeley",
    logo: <BerkeleyLogo />,
    role: "B.S. Engineering Physics",
    dates: "2017 – 2021",
    bullets: ["Minors in EECS and Environmental Economics & Policy"],
    isEducation: true,
  },
];

/* ── Component ─────────────────────────────────────────── */

export function Experience() {
  return (
    <section id="experience" className="bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Experience</SectionHeading>

        <div className="mt-12 space-y-0">
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.company + entry.dates}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="relative flex gap-5 pb-10 last:pb-0">
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center">
                  <div
                    className={`mt-1.5 h-3 w-3 rounded-full ${
                      entry.isEducation
                        ? "border-2 border-white/20 bg-transparent"
                        : i === 0
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse-glow"
                        : "bg-gradient-to-r from-blue-500 to-blue-600"
                    }`}
                  />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-blue-500/40 to-transparent" />
                  )}
                </div>

                {/* Company logo */}
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center">
                  {entry.logo}
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
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-white/20" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
