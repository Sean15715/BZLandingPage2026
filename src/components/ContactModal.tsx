"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

// Replace with your Formspree form ID: https://formspree.io/forms
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

type ModalState = "form" | "submitting" | "success" | "error";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [state, setState] = useState<ModalState>("form");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      setState("form");
      setFirstName("");
      setLastName("");
      setCompany("");
      setMessage("");
    }
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          company,
          message,
          _subject: `New candidate request from ${firstName} ${lastName} @ ${company}`,
        }),
      });

      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const canSubmit = firstName.trim() && lastName.trim() && company.trim() && message.trim();

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-text-primary/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-bg rounded-2xl border border-border shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 pt-7 pb-0">
              <div>
                <h2 className="text-xl font-bold text-text-primary">Get a candidate packet</h2>
                <p className="text-sm text-text-muted mt-1">
                  We&apos;ll send 1–3 vetted candidates within 1–2 weeks.
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-secondary hover:bg-bg-card transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="px-7 pt-6 pb-7">
              {state === "success" ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-green-soft flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={24} className="text-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Request sent</h3>
                  <p className="text-sm text-text-secondary mb-6">
                    We&apos;ll review your role and get back to you within 1–2 business days.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-text-primary text-white text-sm font-medium rounded-lg hover:bg-text-primary/85 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      label="First name"
                      value={firstName}
                      onChange={setFirstName}
                      placeholder="Jane"
                      required
                    />
                    <Field
                      label="Last name"
                      value={lastName}
                      onChange={setLastName}
                      placeholder="Doe"
                      required
                    />
                  </div>

                  <Field
                    label="Company name"
                    value={company}
                    onChange={setCompany}
                    placeholder="Acme Inc."
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Describe the role you want to hire
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Senior backend engineer familiar with Node.js and PostgreSQL to clear our integration backlog..."
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-bg-card text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
                    />
                  </div>

                  {state === "error" && (
                    <p className="text-sm text-red">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={!canSubmit || state === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-text-primary text-white text-sm font-semibold rounded-lg hover:bg-text-primary/85 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {state === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send request
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-text-muted text-center">
                    No commitment. We&apos;ll reach out within 1–2 business days.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-primary mb-1.5">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-card text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
      />
    </div>
  );
}
