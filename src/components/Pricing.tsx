"use client";

import { motion } from "framer-motion";
import { DollarSign, Shield, Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-36 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-accent tracking-wider uppercase mb-4">
            Terms
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Simple billing. Clear terms.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-2xl bg-bg-card border border-border hover:border-border-hover transition-colors"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-lg bg-text-primary/[0.04] flex items-center justify-center">
                <DollarSign size={17} className="text-text-muted" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">Pricing</h3>
            </div>
            <ul className="space-y-3.5">
              <Li>Hourly rate from <strong className="text-text-primary">$X/hr</strong> · ~25 hrs/week</Li>
              <Li>Bi-weekly invoices for hours logged</Li>
              <Li>Trial is paid — cancel anytime</Li>
              <Li>60-day replacement guarantee</Li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-8 rounded-2xl bg-bg-card border border-border hover:border-border-hover transition-colors"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-lg bg-text-primary/[0.04] flex items-center justify-center">
                <Shield size={17} className="text-text-muted" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">Compliance</h3>
            </div>
            <ul className="space-y-3.5">
              <Li>B2B invoice only — standard vendor process</Li>
              <Li>IC agreements handled under our contracts</Li>
              <Li>We pay engineers; you skip cross-border hassle</Li>
              <Li>You control access via GitHub / VPN / RBAC</Li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] text-text-secondary leading-relaxed">
      <Check size={14} className="text-green shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}
