import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Results from "@/components/sections/Results";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Results />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
}
