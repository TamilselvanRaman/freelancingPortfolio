"use client";

import { motion } from "framer-motion";
import SectionContainer from "../SectionContainer";
import { Button } from "../Button";
import Link from "next/link";

export default function About() {
  return (
    <SectionContainer id="about" bg="white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Simple avatar placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl"
          >
            <div className="text-slate-300 text-6xl">👨‍💻</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
              Hi, I&apos;m Tamil Selvan
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                I&apos;m a full-stack developer focused on building real-world solutions. I deliver fast, scalable, and high-quality applications without unnecessary delays.
              </p>
              <p>
                With expertise in React, Next.js, Node.js, and modern UI/UX design, I bridge the gap between aesthetics and performance. When you work with me, you get a reliable partner dedicated to the success of your project.
              </p>
            </div>
            
            <Link href="#contact">
              <Button size="lg">Let&apos;s talk about your project</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
