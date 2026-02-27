"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ onGetCandidate }: { onGetCandidate: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white text-xs font-bold">BZ</span>
          </div>
          <span className="font-semibold text-text-primary text-[15px] tracking-tight">BravoZoom</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#process" className="text-[13px] text-text-muted hover:text-text-secondary transition-colors">Process</a>
          <a href="#pricing" className="text-[13px] text-text-muted hover:text-text-secondary transition-colors">Pricing</a>
          <a href="#faq" className="text-[13px] text-text-muted hover:text-text-secondary transition-colors">FAQ</a>
          <button
            onClick={onGetCandidate}
            className="text-[13px] font-medium bg-text-primary text-white px-4 py-2 rounded-lg hover:bg-text-primary/85 transition-colors"
          >
            Get a candidate
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-text-muted" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border px-6 pb-5 pt-2 space-y-3">
          <a href="#process" onClick={() => setOpen(false)} className="block text-sm text-text-muted">Process</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="block text-sm text-text-muted">Pricing</a>
          <a href="#faq" onClick={() => setOpen(false)} className="block text-sm text-text-muted">FAQ</a>
          <button onClick={() => { setOpen(false); onGetCandidate(); }} className="text-sm font-medium bg-text-primary text-white px-4 py-2 rounded-lg">Get a candidate</button>
        </div>
      )}
    </nav>
  );
}
