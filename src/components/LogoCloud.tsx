"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/logos/a16z.svg", alt: "Andreessen Horowitz", width: 90, height: 32 },
  { src: "/logos/bessemer.svg", alt: "Bessemer Venture Partners", width: 130, height: 32 },
  { src: "/logos/wndrco.svg", alt: "WndrCo", width: 100, height: 32 },
  { src: "/logos/tq-ventures.svg", alt: "TQ Ventures", width: 120, height: 32 },
  { src: "/logos/spc.png", alt: "South Park Commons", width: 130, height: 32 },
];

export default function LogoCloud() {
  return (
    <section className="py-16 px-6 lg:px-10 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mb-10">
          Clients backed by
        </p>

        <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="opacity-35 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-7 w-auto object-contain"
                style={{ filter: "brightness(0)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
