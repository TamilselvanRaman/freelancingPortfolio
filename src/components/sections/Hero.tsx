"use client";

import { motion } from "framer-motion";
import { Button } from "../Button";
import Link from "next/link";
import SectionContainer from "../SectionContainer";
import { PremiumSparkle, ReactLogo, NextJsLogo, NodeJsLogo, FirebaseLogo, TailwindLogo, MongoDBLogo, DockerLogo, TypeScriptLogo } from "../Icons";
import { ArrowRight } from "lucide-react";

const techStack = [
  { name: "React", icon: ReactLogo },
  { name: "Next.js", icon: NextJsLogo },
  { name: "TypeScript", icon: TypeScriptLogo },
  { name: "Node.js", icon: NodeJsLogo },
  { name: "Firebase", icon: FirebaseLogo },
  { name: "Tailwind", icon: TailwindLogo },
  { name: "MongoDB", icon: MongoDBLogo },
  { name: "Docker", icon: DockerLogo },
];

interface HeroProps {
  onContactClick?: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <SectionContainer id="home" className="relative flex flex-col items-center justify-center min-h-[90vh] sm:min-h-[95vh] pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden" bg="transparent">
      {/* Subtle background blurs */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-green-200/20 rounded-full blur-[80px] sm:blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-slate-200/30 rounded-full blur-[80px] sm:blur-[100px] -z-10" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tighter text-slate-900 leading-[1.1] mb-4 sm:mb-6 px-2 mt-20">
            We build websites that{" "}
            <br className="hidden sm:block" />
            <span className="relative inline-block whitespace-nowrap sm:whitespace-normal">
              <span className="relative z-10 text-green-600">grow your business</span>
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 md:h-4 text-green-300/60 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M2.00031 6.84039C56.667 2.17373 158.8 -3.15961 198 6.84039" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
          >
            I&apos;m Tamil Selvan, a full-stack developer turning complex problems into elegant, high-performing digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
          >
              <Button 
              variant="premium"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              size="lg" 
              className="w-full sm:w-auto rounded-[2rem] gap-2 sm:gap-3 h-auto min-h-[3.5rem] py-3 sm:py-0 sm:h-16 px-6 sm:px-12 text-sm sm:text-xl transition-all group whitespace-normal text-center"
            >
              <PremiumSparkle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 shrink-0 group-hover:rotate-12 transition-transform" />
              <span className="font-black tracking-tight uppercase leading-tight">Let's Create Something Amazing</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 hidden sm:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200/60 w-full overflow-hidden flex flex-col items-center"
        >
          <p className="text-xs sm:text-sm font-medium text-slate-400 mb-6 sm:mb-8 uppercase tracking-wider">My Tech Stack</p>

          <div className="w-full relative flex overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 md:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-20 md:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex whitespace-nowrap gap-12 sm:gap-20 md:gap-32 items-center"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-12 sm:gap-20 md:gap-32 items-center">
                  {techStack.map((tech, j) => (
                    <div key={`${i}-${j}`} className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <tech.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      <span className="text-sm sm:text-base md:text-lg font-bold font-sans text-slate-800 tracking-tight">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
