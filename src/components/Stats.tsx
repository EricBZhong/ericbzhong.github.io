"use client";

import { motion } from "motion/react";

const stats = [
  { value: "5", label: "Products Built" },
  { value: "7", label: "AI Agents in Prod" },
  { value: "310+", label: "Tests Written" },
  { value: "30x", label: "Faster API Latency" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function Stats() {
  return (
    <section className="px-6 py-16">
      <motion.div
        className="mx-auto grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={item}
            className="flex flex-col items-center text-center"
          >
            <span className="gradient-text font-heading text-3xl font-bold sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 text-sm text-muted">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
