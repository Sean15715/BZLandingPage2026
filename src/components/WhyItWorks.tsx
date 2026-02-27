"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, ShieldCheck, FileText, SearchCode, Check, ChevronRight } from "lucide-react";

const values = [
  {
    icon: Timer,
    title: "Hiring decision in minutes, not weeks",
    outcome: "No pipeline management. No resume spam.",
    featureLabel: "Candidate Packet in 7–14 days",
    bullets: [
      "1–3 vetted candidates",
      "Resume + repo evaluation + our verdict",
      'Quick "proceed / don\u2019t proceed"',
    ],
  },
  {
    icon: ShieldCheck,
    title: "De-risk the hire completely",
    outcome: "You don\u2019t get stuck with a bad fit.",
    featureLabel: "1-week paid trial + replacement guarantee",
    bullets: [
      "Trial-first engagement (cancel anytime)",
      "Continue only if they ship",
      "Free replacement within 60 days",
    ],
  },
  {
    icon: FileText,
    title: "Zero HR/compliance hassle",
    outcome: "Engineering output without cross-border admin.",
    featureLabel: "Invoice-only compliance",
    bullets: [
      "Bi-weekly vendor invoice",
      "We handle EOR/contractor agreements + payouts",
      "You keep control via your normal RBAC",
    ],
  },
  {
    icon: SearchCode,
    title: "Vetting that matches your stack",
    outcome: "Candidates who can actually ship your work.",
    featureLabel: "JD-specific repo-based vetting",
    bullets: [
      "Repo test built from your JD + ticket types",
      "Scored evaluation + live interview in English",
      "You meet candidates only after they pass",
    ],
  },
];

function ValueRow({ value, index }: { value: (typeof values)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
      >
        <div className="flex items-center gap-5 py-6">
          {/* Icon */}
          <div className="w-11 h-11 rounded-xl bg-bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-border-hover transition-colors">
            <value.icon size={20} className="text-text-muted group-hover:text-accent transition-colors" />
          </div>

          {/* Title + outcome */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[17px] font-semibold text-text-primary leading-snug group-hover:text-accent transition-colors">
              {value.title}
            </h3>
            <p className="text-sm text-text-muted mt-0.5">{value.outcome}</p>
          </div>

          {/* Expand indicator */}
          <ChevronRight
            size={18}
            className={`shrink-0 text-text-muted transition-transform duration-200 ${
              open ? "rotate-90" : ""
            }`}
          />
        </div>
      </button>

      {/* Expandable mechanism detail */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-16">
              <div className="rounded-xl border border-border bg-bg-card p-5">
                <p className="font-mono text-[11px] text-accent tracking-wider uppercase mb-3">
                  {value.featureLabel}
                </p>
                <ul className="space-y-2">
                  {value.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                      <Check size={14} className="text-green shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function WhyItWorks() {
  return (
    <section className="py-28 md:py-36 px-6 lg:px-10 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <p className="font-mono text-xs text-accent tracking-wider uppercase mb-4">
            Why CTOs use BravoZoom
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Get the backlog cleared — without a hiring process.
          </h2>
        </div>
        <p className="text-center text-text-secondary mb-14">
          Each outcome is backed by a specific mechanism in our workflow.
        </p>

        {/* Value rows with expand */}
        <div className="divide-y divide-border border-t border-border">
          {values.map((v, i) => (
            <ValueRow key={v.title} value={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
