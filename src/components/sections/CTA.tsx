"use client";

import { motion } from "framer-motion";
import { Button } from "../Button";
import Link from "next/link";
import SectionContainer from "../SectionContainer";

export default function CTA() {
  return (
    <SectionContainer id="contact" className="relative overflow-hidden">
      {/* Dark background layer */}
      <div className="absolute inset-0 bg-slate-900 rounded-3xl mx-4 sm:mx-6 md:mx-8 shadow-2xl overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] opacity-20 bg-green-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] opacity-20 bg-blue-500 rounded-full blur-[100px]" />
        
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center py-20 px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to build something powerful?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Let&apos;s make it happen. Get in touch today to discuss your project requirements and receive a free quote.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="mailto:hello@example.com">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-none shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] text-lg px-10 h-14">
                Start Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
