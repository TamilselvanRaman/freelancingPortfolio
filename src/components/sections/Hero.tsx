"use client";

import { motion } from "framer-motion";
import { Button } from "../Button";
import Link from "next/link";
import SectionContainer from "../SectionContainer";

export default function Hero() {
  return (
    <SectionContainer id="home" className="relative overflow-hidden flex items-center min-h-[90vh]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100/40 via-slate-50 to-white" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] opacity-30 bg-green-200 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] opacity-20 bg-blue-200 rounded-full blur-3xl" />

      <div className="relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-6 shadow-sm border border-green-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            Available for new projects
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            I build high-performance websites that <span className="text-green-600">grow your business</span> 🚀
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Full-stack developer specializing in modern, fast, and scalable web applications. Turning complex problems into elegant digital solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link href="#portfolio" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">Start Project</Button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Book a Call</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
