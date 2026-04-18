"use client";

import { motion } from "framer-motion";
import SectionContainer from "../SectionContainer";
import { Button } from "../Button";
import Link from "next/link";

export default function About() {
  return (
    <SectionContainer id="about" bg="white">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
        >
          About.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden md:block w-px h-10 bg-slate-300 mx-2 mb-2"
        />
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-500 mb-1"
        >
          The developer behind the code.
        </motion.p>
      </div>
      
      <hr className="border-slate-200 mb-12" />

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Simple avatar placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-[2rem] bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50"
          >
            <div className="text-slate-300 text-6xl">👨‍💻</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Hi, I&apos;m Tamil Selvan
            </h3>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                I&apos;m a full-stack developer focused on building real-world solutions. I deliver fast, scalable, and high-quality applications without unnecessary delays.
              </p>
              <p>
                With expertise in React, Next.js, Node.js, and modern UI/UX design, I bridge the gap between aesthetics and performance. When you work with me, you get a reliable partner dedicated to the success of your project.
              </p>
            </div>
            
            <Link href="#contact">
              <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8">Let&apos;s talk about your project</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
