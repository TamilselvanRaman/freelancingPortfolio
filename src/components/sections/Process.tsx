"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Compass, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    number: "01",
    title: "Discovery & Audit",
    description:
      "I analyze your business needs, target audience, and competition to build a solid foundation.",
    icon: Compass,
  },
  {
    step: "Step 2",
    number: "02",
    title: "Design & Concept",
    description:
      "Creating wireframes and visual designs that reflect your brand identity.",
    icon: Palette,
  },
  {
    step: "Step 3",
    number: "03",
    title: "Development",
    description:
      "Writing clean, maintainable code using the latest technologies.",
    icon: Code2,
  },
  {
    step: "Step 4",
    number: "04",
    title: "Launch & Support",
    description:
      "Deploying your project and providing training/support for updates.",
    icon: Rocket,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of the timeline steps container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  // Smooth physics spring for corporate scroll line fill animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="process" className="scroll-mt-28 pt-28 sm:pt-36 pb-20 sm:pb-28 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white relative z-10 overflow-hidden transition-colors duration-300">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/3 left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-10%] w-[40%] h-[40%] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header matching portfolio theme */}
        <div className="mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-[0.2em]">Execution Strategy</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none"
          >
            How I Work.
          </motion.h2>
        </div>

        {/* Timeline List Container */}
        <div ref={containerRef} className="relative pl-10 sm:pl-14 space-y-10 sm:space-y-14">
          
          {/* Static Background Track Line starting at dot center and ending at Step 4 dot center */}
          <div className="absolute left-3 sm:left-4 -translate-x-1/2 top-[18px] bottom-[64px] w-[2px] bg-slate-200 dark:bg-slate-800 rounded-full" />

          {/* Animated Scroll Progress Fill Line starting at dot center and ending at Step 4 dot center */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-3 sm:left-4 -translate-x-1/2 top-[18px] bottom-[64px] w-[2px] bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-600 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)] z-10"
          />

          {steps.map((s, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group z-20"
              >
                {/* Node dot centered on the vertical line axis with zero text pill overlap */}
                <div className="absolute -left-7 sm:-left-[40px] -translate-x-1/2 top-2.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 group-hover:bg-emerald-500 group-hover:shadow-[0_0_14px_rgba(16,185,129,0.7)] transition-all duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-white transition-colors" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start pb-8 border-b border-slate-200/80 dark:border-slate-800/80 last:border-b-0 last:pb-0">
                  
                  {/* Left Column: Step Label */}
                  <div className="sm:col-span-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase shadow-sm">
                      <span>{s.step}</span>
                    </div>
                  </div>

                  {/* Right Column: Title & Description */}
                  <div className="sm:col-span-9 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 tracking-tight">
                        {s.title}
                      </h3>
                      <span className="text-3xl font-mono font-black text-slate-300 dark:text-slate-700 select-none group-hover:text-emerald-500/40 transition-colors">
                        {s.number}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                      {s.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
