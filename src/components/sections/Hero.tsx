"use client";

import { motion } from "framer-motion";
import { Button } from "../Button";
import Link from "next/link";
import SectionContainer from "../SectionContainer";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <SectionContainer id="home" className="relative flex flex-col items-center justify-center min-h-[95vh] pt-32 pb-16" bg="transparent">
      {/* Subtle background blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-200/30 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-800 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
            We build websites that <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="relative z-10 text-green-600">grow your business</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 md:h-4 text-green-300/60 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M2.00031 6.84039C56.667 2.17373 158.8 -3.15961 198 6.84039" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I&apos;m Tamil Selvan, a full-stack developer turning complex problems into elegant, high-performing digital solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10 gap-2 h-14 px-8 text-lg">
                <Sparkles className="w-5 h-5 text-yellow-300" />
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
          className="mt-20 pt-10 border-t border-slate-200/60 w-full overflow-hidden flex flex-col items-center"
        >
          <p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-wider">My Tech Stack</p>
          
          <div className="w-full relative flex overflow-hidden mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
            
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex whitespace-nowrap gap-8 md:gap-16 items-center opacity-70"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 md:gap-16 items-center">
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">React</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">Next.js</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">Node.js</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">Express</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">MongoDB</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">Firebase</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">Tailwind</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">GSAP</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">SQL</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">Git</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">Vercel</span>
                  {/* Additional separator at the end of the array to connect perfectly with the next iteration */}
                  <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">•</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
