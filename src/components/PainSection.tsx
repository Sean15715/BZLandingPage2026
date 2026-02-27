"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const pains = [
  "Bugs and small requests pile up",
  "Senior engineers get pulled into maintenance",
  "Local hiring takes months",
  "Agencies add overhead",
];

export default function PainSection() {
  return (
    <section className="py-28 md:py-36 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — sticky headline */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs text-accent tracking-wider uppercase mb-4">
              The problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight leading-tight mb-5">
              Your ticket queue is
              <br />
              stealing roadmap time.
            </h2>
            <p className="text-lg text-text-secondary">
              You don&apos;t need more meetings.{" "}
              <span className="text-text-primary font-semibold">You need bandwidth.</span>
            </p>
          </div>

          {/* Right — pain cards */}
          <div className="space-y-3">
            {pains.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-bg-card border border-border hover:border-border-hover transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-red-soft flex items-center justify-center shrink-0">
                  <AlertCircle size={16} className="text-red" />
                </div>
                <p className="text-base text-text-secondary">{pain}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
