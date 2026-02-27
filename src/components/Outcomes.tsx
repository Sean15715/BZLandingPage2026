"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const outcomes = [
  { number: "01", text: "Keep seniors on the roadmap" },
  { number: "02", text: "Burn down backend backlog faster" },
  { number: "03", text: "Add 25 hrs/week without hiring" },
];

export default function Outcomes() {
  return (
    <section className="py-28 md:py-36 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-accent tracking-wider uppercase mb-4">
          The outcome
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-16">
          Protect your core team. Unblock progress.
        </h2>

        <div className="space-y-4">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="relative flex items-center gap-5 p-6 md:p-7 rounded-xl bg-bg-card border border-border overflow-hidden hover:border-border-hover transition-colors"
            >
              {/* Watermark */}
              <span className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 font-mono text-[7rem] md:text-[8rem] font-bold text-text-primary/[0.04] leading-none select-none pointer-events-none">
                {item.number}
              </span>

              <div className="relative w-8 h-8 rounded-full bg-green-soft flex items-center justify-center shrink-0">
                <Check size={15} className="text-green" />
              </div>
              <p className="relative text-lg md:text-xl font-medium text-text-primary">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
