"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import Image from "next/image";

export default function CaseStudy() {
  return (
    <section className="py-28 md:py-36 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-accent tracking-wider uppercase mb-4">
            Our results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Don&apos;t take our word for it.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto rounded-2xl bg-bg-card border border-border p-10 md:p-16 overflow-hidden"
        >
          {/* Subtle glow behind card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-accent/[0.06] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber text-amber" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-[1.7rem] text-text-primary leading-relaxed font-medium mb-10">
              &ldquo;BravoZoom has been a game-changer for our engineering bandwidth.
              They dropped a vetted backend engineer directly into our Jira who
              immediately took over our legacy maintenance and internal tooling,
              allowing our core team to focus 100% on shipping our new AI
              platform.&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-accent/15 flex items-center justify-center">
                  <Image
                    src="/avatars/DT.png"
                    alt="Daniel Tian"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-text-primary">Daniel Tian</p>
                    <BadgeCheck size={15} className="text-accent" />
                  </div>
                  <p className="text-sm text-text-muted">CTO, Zingage</p>
                </div>
              </div>

              {/* Verified placement badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-text-primary/[0.03] border border-border">
                <div className="w-1.5 h-1.5 rounded-full bg-green" />
                <span className="font-mono text-[11px] text-text-muted tracking-wide">
                  VERIFIED PLACEMENT
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
