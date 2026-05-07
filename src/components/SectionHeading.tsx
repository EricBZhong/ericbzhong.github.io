"use client";

import { motion } from "motion/react";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="gradient-text font-heading text-2xl font-bold tracking-tight sm:text-3xl"
    >
      {children}
    </motion.h2>
  );
}
