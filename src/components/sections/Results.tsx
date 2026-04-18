"use client";

import { motion, Variants } from "framer-motion";
import { Zap, ShieldCheck, Smartphone, Search, Layers, Code2 } from "lucide-react";
import SectionContainer from "../SectionContainer";

const features = [
  { name: "100% Responsive", icon: Smartphone },
  { name: "Fast Load Times", icon: Zap },
  { name: "SEO Optimized", icon: Search },
  { name: "Scalable Architecture", icon: Layers },
  { name: "Clean Code", icon: Code2 },
  { name: "Secure Systems", icon: ShieldCheck },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 }
  },
};

export default function Results() {
  return (
    <SectionContainer id="features" bg="slate">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
          Built for Performance
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Every project is built with these core principles to ensure maximum quality and ROI.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all group"
          >
            <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-50 transition-colors">
              <feature.icon className="h-6 w-6 text-slate-700 group-hover:text-green-600 transition-colors" />
            </div>
            <h3 className="font-medium text-slate-900 text-center">{feature.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
