"use client";

import { motion } from "framer-motion";
import { Button } from "../Button";
import Link from "next/link";
import SectionContainer from "../SectionContainer";
import { Sparkles } from "lucide-react";

const techStack = [
  "React", "Next.js", "Node.js", "Express",
  "MongoDB", "Firebase", "Tailwind", "GSAP", "SQL", "Git", "Vercel",
];

export default function Hero() {
  return (
    <SectionContainer id="home" className="relative flex flex-col items-center justify-center min-h-[90vh] sm:min-h-[95vh] pt-24 sm:pt-32 pb-12 sm:pb-16" bg="transparent">
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tighter text-slate-900 leading-[1.1] mb-4 sm:mb-6 px-2">
            We build websites that{" "}
            <br className="hidden sm:block" />
            <span className="relative inline-block">
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
            <Link href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10 gap-2 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                Book a call
              </Button>
            </Link>
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
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex whitespace-nowrap gap-6 sm:gap-10 md:gap-16 items-center opacity-70"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-6 sm:gap-10 md:gap-16 items-center">
                  {techStack.map((tech, j) => (
                    <>
                      <span key={`${i}-${j}`} className="text-base sm:text-xl md:text-2xl font-bold font-sans text-slate-800">{tech}</span>
                      <span key={`dot-${i}-${j}`} className="text-base sm:text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                    </>
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
