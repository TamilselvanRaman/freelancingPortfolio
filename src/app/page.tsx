"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Results from "@/components/sections/Results";
import CTA from "@/components/sections/CTA";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Hero onContactClick={scrollToContact} />
      <Services />
      <Portfolio />
      <Results />
      <Pricing onContactClick={scrollToContact} />
      <Testimonials />
      <CTA />
      
      {/* Keeping modal for other potential triggers or secondary use */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
