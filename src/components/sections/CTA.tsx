"use client";

import { motion } from "framer-motion";
import { Button } from "../Button";
import Link from "next/link";
import SectionContainer from "../SectionContainer";

export default function CTA() {
  return (
    <SectionContainer id="contact" bg="transparent">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
        >
          Contact.
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
          Let's build something powerful together.
        </motion.p>
      </div>
      
      <hr className="border-slate-200 mb-12" />

      {/* Dark CTA Box */}
      <div className="relative bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-800">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] opacity-20 bg-green-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] opacity-20 bg-blue-500 rounded-full blur-[100px]" />
        
        <div className="relative z-10 w-full flex flex-col items-center justify-center py-24 px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to start?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Get in touch today to discuss your project requirements and receive a free quote.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="mailto:hello@example.com">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full text-lg px-10 h-14 font-semibold border-none">
                Start Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
