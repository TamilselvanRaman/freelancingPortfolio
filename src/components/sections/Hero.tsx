"use client";

import { motion } from "framer-motion";
import { Button } from "../Button";
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
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[90vh] sm:min-h-[95vh] pt-24 sm:pt-32 pb-12 sm:pb-16 w-full" style={{ overflow: 'hidden', maxWidth: '100vw' }}
    >
      {/* Subtle background blurs - constrained so they never cause horizontal scroll */}
      <div className="absolute top-1/4 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-green-200/20 rounded-full blur-[80px] sm:blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 md:w-[400px] h-64 sm:h-96 md:h-[400px] bg-slate-200/30 rounded-full blur-[80px] sm:blur-[100px] -z-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col items-center justify-center text-center"
        >
          {/* Hero heading - fully wraps on mobile */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tighter text-slate-900 leading-[1.15] mb-6 mt-12 sm:mt-20 w-full break-words">
            We build websites that{" "}
            <br className="block sm:hidden" />
            <span className="relative inline-block mt-2 sm:mt-0">
              <span className="relative z-10 text-green-600">grow your business</span>
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 md:h-4 text-green-300/60 -z-10"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path d="M2.00031 6.84039C56.667 2.17373 158.8 -3.15961 198 6.84039" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed break-words"
          >
            I&apos;m Tamil Selvan, a full-stack developer turning complex problems into elegant, high-performing digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
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
              className="w-full sm:w-auto rounded-[2rem] gap-2 sm:gap-3 h-auto min-h-[4rem] py-3 sm:py-0 sm:h-16 px-6 sm:px-12 text-sm sm:text-xl transition-all group !whitespace-normal text-center"
            >
              <PremiumSparkle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 shrink-0 group-hover:rotate-12 transition-transform" />
              <span className="font-black tracking-tight uppercase leading-tight">Let&apos;s Create Something Amazing</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 hidden sm:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Tech Stack Marquee - overflow-hidden is critical here */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200/60 w-full flex flex-col items-center"
        >
          <p className="text-xs sm:text-sm font-medium text-slate-400 mb-6 sm:mb-8 uppercase tracking-wider">My Tech Stack</p>

          {/* Marquee wrapper — clip-path ensures no overflow escapes regardless of browser */}
          <div
            className="relative"
            style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}
          >
            <div className="absolute inset-y-0 left-0 w-10 sm:w-16 md:w-24 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-10 sm:w-16 md:w-24 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />

            <div style={{ overflow: 'hidden', width: '100%' }}>
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                className="flex items-center py-2"
                style={{ width: 'max-content', gap: '3rem', whiteSpace: 'nowrap' }}
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center" style={{ gap: '3rem' }}>
                    {techStack.map((tech, j) => (
                      <div key={`${i}-${j}`} className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <tech.icon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                        <span className="text-sm font-bold font-sans text-slate-800 tracking-tight">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
