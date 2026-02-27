"use client";

import { motion } from "framer-motion";
import { ClipboardList, Terminal, UserCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Backlog sync",
    detail: "JD + 5–10 sample tickets from your board.",
  },
  {
    icon: Terminal,
    title: "Custom vet",
    detail: "Repo test built from your real ticket types.",
  },
  {
    icon: UserCheck,
    title: "Candidate packet",
    detail: "Review 1–3 vetted engineers. No interviews.",
  },
  {
    icon: Rocket,
    title: "Paid trial",
    detail: "They ship code for 7 days. Continue if they deliver.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-28 md:py-36 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-accent tracking-wider uppercase mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            From backlog to shipping in 7–14 days.
          </h2>
        </div>

        {/* Horizontal pipeline on desktop, vertical on mobile */}
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="relative p-6 rounded-xl bg-bg-card border border-border hover:border-border-hover transition-colors"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-text-primary/[0.04] flex items-center justify-center">
                  <step.icon size={17} className="text-text-muted" />
                </div>
                <span className="font-mono text-xs text-text-muted tracking-wide">
                  STEP {i + 1}
                </span>
              </div>

              {/* Connector arrow — desktop only */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-bg-card border border-border items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M2 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted" />
                  </svg>
                </div>
              )}

              <h3 className="text-base font-semibold text-text-primary mb-1">
                {step.title}
              </h3>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
