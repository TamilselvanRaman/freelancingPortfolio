"use client";

import React, { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  useEffect(() => {
    // Force the page to start at the top on reload
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

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
      <Process />
      <Results />
      <Pricing onContactClick={scrollToContact} />
      <Testimonials />
      <CTA />
    </>
  );
}
