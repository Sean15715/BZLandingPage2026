"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this a dev agency?",
    a: "No. One embedded engineer working your tickets directly in Jira. No PM layer.",
  },
  {
    q: "How do you vet?",
    a: "Repo test built from your ticket types + live technical interview in English.",
  },
  {
    q: "Timezone overlap?",
    a: "~3 hours/day overlap with your team + async communication.",
  },
  {
    q: "How does the trial work?",
    a: "They ship for a week. Cancel anytime. You only pay hours worked.",
  },
  {
    q: "What if it doesn't work after trial?",
    a: "60-day replacement guarantee. We swap them out at no cost.",
  },
  {
    q: "Security / access?",
    a: "They use your VPN, GitHub, and email. You control permissions via your normal RBAC.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 md:py-36 px-6 lg:px-10 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono text-xs text-accent tracking-wider uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Common questions
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="text-base font-medium text-text-primary group-hover:text-text-secondary transition-colors">
                    {faq.q}
                  </span>
                  <Plus
                    size={16}
                    className={`shrink-0 text-text-muted transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[15px] text-text-secondary leading-relaxed pb-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
