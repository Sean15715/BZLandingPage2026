"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import PainSection from "@/components/PainSection";
import WhyItWorks from "@/components/WhyItWorks";
import CaseStudy from "@/components/CaseStudy";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Navbar onGetCandidate={openModal} />
      <main>
        <Hero onGetCandidate={openModal} />
        <LogoCloud />
        <PainSection />
        <WhyItWorks />
        <CaseStudy />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA onGetCandidate={openModal} />
      </main>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
