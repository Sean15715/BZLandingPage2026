"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const safetyItems = ["1-week paid trial", "Hourly billing", "Compliance handled"];

export default function FinalCTA({ onGetCandidate }: { onGetCandidate: () => void }) {
  return (
    <section id="cta" className="relative py-32 md:py-40 px-6 lg:px-10 border-t border-border overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.07] rounded-full blur-[130px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-5">
          Clear the backlog.
          <br />
          Keep shipping.
        </h2>
        <p className="text-text-secondary text-lg mb-10">
          Get a remote backend engineer started in 7–14 days.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {safetyItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-[15px] text-text-muted">
              <Check size={14} className="text-green" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onGetCandidate}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-white text-base font-semibold rounded-lg hover:bg-text-primary/85 hover:shadow-lg transition-all"
        >
          Get a candidate packet
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
