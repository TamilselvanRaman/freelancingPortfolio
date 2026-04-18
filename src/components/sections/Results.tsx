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
    <SectionContainer id="results" bg="white">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4 mb-6 sm:mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
        >
          Results.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden sm:block w-px h-10 bg-slate-300 mx-2 mb-2"
        />
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-xl md:text-2xl text-slate-500 mb-1"
        >
          Websites built for real business impact.
        </motion.p>
      </div>

      <hr className="border-slate-200 mb-8 sm:mb-12" />

      {/* Chart Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 mb-10 sm:mb-16 border border-slate-200 flex items-center justify-center relative overflow-hidden h-[250px] sm:h-[320px] md:h-[400px]"
      >
        <div className="absolute inset-0 bg-grid-slate-200/[0.4] bg-[size:20px_20px] sm:bg-[size:30px_30px]" />

        <div className="relative w-full h-full max-w-4xl flex items-end justify-between px-2 sm:px-4">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200"></div>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-slate-200"></div>

          <svg className="absolute inset-0 h-full w-full overflow-visible drop-shadow-xl" preserveAspectRatio="none" viewBox="0 0 100 100">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M0,80 Q20,70 40,50 T70,30 T100,10"
              fill="none"
              stroke="#16a34a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <motion.path
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
              d="M0,80 Q20,70 40,50 T70,30 T100,10 L100,100 L0,100 Z"
              fill="#16a34a"
            />
            <circle cx="0" cy="80" r="2" fill="#16a34a" />
            <circle cx="40" cy="50" r="2" fill="#16a34a" />
            <circle cx="70" cy="30" r="2" fill="#16a34a" />
            <circle cx="100" cy="10" r="3" fill="#16a34a" className="animate-pulse" />
          </svg>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="absolute top-3 sm:top-4 right-4 sm:right-10 md:right-20 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-slate-100"
          >
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Conversion Rate</p>
            <p className="text-2xl sm:text-3xl font-bold text-green-600">+148%</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-5xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-5 sm:p-8 bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-green-200 transition-all group"
          >
            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-white shadow-sm rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-green-50 transition-colors group-hover:scale-110 duration-300">
              <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 group-hover:text-green-600 transition-colors" />
            </div>
            <h3 className="font-semibold text-sm sm:text-lg text-slate-900 text-center">{feature.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
