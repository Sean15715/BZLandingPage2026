"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const candidates = [
  {
    initials: "MK",
    name: "Marcus K.",
    role: "Senior Backend Engineer",
    experience: "6 yrs",
    stack: ["Node.js", "PostgreSQL", "AWS"],
    color: "bg-indigo-500",
    status: "Available next week",
  },
  {
    initials: "SR",
    name: "Sofia R.",
    role: "Senior Backend Engineer",
    experience: "8 yrs",
    stack: ["Python", "Django", "GCP"],
    color: "bg-emerald-500",
    status: "Available now",
  },
  {
    initials: "AJ",
    name: "Arjun J.",
    role: "Backend Engineer",
    experience: "5 yrs",
    stack: ["Go", "Kubernetes", "Redis"],
    color: "bg-amber-500",
    status: "Available next week",
  },
];

function CandidateCard({
  candidate,
  index,
}: {
  candidate: (typeof candidates)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: index === 0 ? -1 : index === 2 ? 1 : 0 }}
      animate={{ opacity: 1, y: 0, rotate: index === 0 ? -1.5 : index === 2 ? 1.5 : 0 }}
      transition={{ duration: 0.7, delay: 0.3 + index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="w-full rounded-xl bg-bg-card border border-border p-5 backdrop-blur-sm hover:border-border-hover transition-colors cursor-default"
      style={{
        marginTop: index > 0 ? "-1.5rem" : 0,
        zIndex: candidates.length - index,
        position: "relative",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full ${candidate.color} flex items-center justify-center text-xs font-bold text-white`}
          >
            {candidate.initials}
          </div>
          <div>
            <p className="text-[15px] font-semibold text-text-primary">{candidate.name}</p>
            <p className="text-[13px] text-text-muted">
              {candidate.role} · {candidate.experience}
            </p>
          </div>
        </div>
        {/* Status badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-soft border border-green/20">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
          <span className="text-[11px] font-medium text-green whitespace-nowrap">
            {candidate.status}
          </span>
        </div>
      </div>
      {/* Stack pills */}
      <div className="flex flex-wrap gap-1.5">
        {candidate.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md bg-text-primary/[0.04] border border-border text-xs font-mono text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero({ onGetCandidate }: { onGetCandidate: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[-10%] right-[5%] w-[600px] h-[600px] bg-accent/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-20 items-center">
          {/* LEFT — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border font-mono text-xs text-text-muted mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-green" />
              For Seed – Series A technical teams
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-text-primary tracking-tight leading-[1.08] mb-6">
              Remote Backend
              <br />
              Backlog Engineer
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-lg mb-10">
              We place vetted, part-time backend engineers directly into your
              Jira to clear bugs, integrations, and tech debt. Start with a
              1-week paid trial.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={onGetCandidate}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-text-primary text-white text-[15px] font-semibold rounded-lg hover:bg-text-primary/85 transition-all"
              >
                Get a candidate in 1–2 weeks
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
              <a
                href="#process"
                className="inline-flex items-center px-7 py-3.5 border border-border text-[15px] font-medium text-text-secondary rounded-lg hover:bg-bg-card hover:border-border-hover transition-all"
              >
                See our vetting
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-text-muted tracking-wide">
              <span>✓ Starts in 7–14 days</span>
              <span>✓ Invoice-only billing</span>
              <span>✓ 60-day replacement guarantee</span>
            </div>
          </motion.div>

          {/* RIGHT — Candidate Cards */}
          <div className="hidden lg:block">
            <div className="relative pl-4">
              {/* Faint label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-mono text-xs text-text-muted mb-4 tracking-wide"
              >
                Vetted candidates ready for your stack
              </motion.p>

              <div className="flex flex-col">
                {candidates.map((c, i) => (
                  <CandidateCard key={c.initials} candidate={c} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
