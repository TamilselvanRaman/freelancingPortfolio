"use client";

import { motion } from "framer-motion";
import { Laptop, Target, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionContainer from "../SectionContainer";

const stats = [
  { label: "OnPage SEO", desc: "Ready to be found on Google." },
  { label: "Tracking & Analytics", desc: "Track user statistics, marketing cookies and more." },
  { label: "100% Responsive", desc: "Optimized for desktop, tablet, mobile and everything in between." },
  { label: "ROI-First", desc: "So you get the most out of your ad budget." },
];

const tags = [
  { text: "Copy", top: "10%", left: "5%", rotate: -8 },
  { text: "Development", top: "5%", left: "45%", rotate: 5 },
  { text: "Google", top: "40%", left: "15%", rotate: 3 },
  { text: "Hosting", top: "35%", left: "55%", rotate: -4 },
  { text: "Support", top: "70%", left: "10%", rotate: -2 },
  { text: "Strategy", top: "65%", left: "50%", rotate: 6 },
  { text: "SEO", top: "85%", left: "35%", rotate: -10 },
];

export default function Results() {
  return (
    <SectionContainer id="results" bg="white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-12 sm:mb-16">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight">
          Results.
        </h2>
        <p className="text-lg sm:text-xl text-slate-400 font-medium tracking-tight">
          Websites optimized for real results.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        
        {/* Growth Trajectory Card - Spans 8 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 bg-slate-50 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-500"
        >
          {/* Decorative dots in corners */}
          <div className="absolute top-10 left-10 flex gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-200" />
          </div>
          <div className="absolute top-16 left-10 w-2.5 h-2.5 rounded-full bg-green-500" />

          {/* Graph Placeholder / SVG */}
          <div className="mt-16 relative h-48 sm:h-72">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
              {/* Dotted lines background */}
              <line x1="0" y1="50" x2="400" y2="50" stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="0" y1="150" x2="400" y2="150" stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" />
              
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M0,180 L40,170 L80,175 L120,130 L160,150 L200,120 L240,140 L280,110 L320,115 L360,90 L400,75"
                fill="none"
                stroke="#22c55e"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeLinecap="round"
                className="drop-shadow-[0_4px_12px_rgba(34,197,94,0.3)]"
              />
              
              {/* Dots on points */}
              {[
                [40, 170], [120, 130], [200, 120], [280, 110], [400, 75]
              ].map(([x, y], i) => (
                <motion.circle 
                  key={i} 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1 }}
                  cx={x} cy={y} r="5" fill="white" stroke="#22c55e" strokeWidth="2.5" 
                />
              ))}
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-green-50/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* List Card - Spans 4 cols */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 bg-white p-4 sm:p-6 flex flex-col justify-center"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10 leading-[1.1] tracking-tight">
            Websites built for real business results
          </h3>
          <div className="space-y-8">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-green-600 transition-colors">{stat.label}</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Full-Service Card - Spans 7 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-7 bg-slate-50 rounded-[2.5rem] p-8 sm:p-12 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-12 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500"
        >
          <div className="max-w-[260px] relative z-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-3 italic tracking-tight">Full-Service A to Z</h3>
            <p className="text-slate-500 leading-relaxed">
              Benefit from top-notch service and comfort from start to finish.
            </p>
          </div>
          
          {/* Tags cloud graphic - Exactly as in image */}
          <div className="relative w-full h-[200px] sm:w-[300px] shrink-0">
            {tags.map((tag, i) => (
              <motion.div
                key={tag.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ y: -5, scale: 1.05, zIndex: 50 }}
                className="absolute px-5 py-2.5 bg-slate-800 text-white text-sm font-bold rounded-2xl shadow-xl cursor-default border border-slate-700 whitespace-nowrap"
                style={{
                  top: tag.top,
                  left: tag.left,
                  transform: `rotate(${tag.rotate}deg)`,
                }}
              >
                {tag.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Card - Spans 5 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-5 bg-slate-50 rounded-[2.5rem] p-8 sm:p-12 border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-500"
        >
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3 italic tracking-tight">Lightning-Fast Load Times</h3>
            <p className="text-slate-500 leading-relaxed">
              Because nobody likes waiting.
            </p>
          </div>
          
          {/* Performance circles */}
          <div className="mt-12 flex items-center justify-end relative h-32">
            <div className="absolute right-0 w-32 h-32 rounded-full border-[8px] border-green-500 flex items-center justify-center text-4xl font-black text-slate-900 bg-white shadow-2xl z-20">
              100
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-slate-100 flex items-center justify-center text-[11px] font-black text-slate-400 shadow-md">97</div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-slate-100 flex items-center justify-center text-[11px] font-black text-slate-400 shadow-md">94</div>
              
              {/* Outer pulsing ring */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-[-12px] border-2 border-green-200 rounded-full"
              />
            </div>
            <div className="mr-16 w-24 h-24 rounded-full border-8 border-slate-200 opacity-20" />
          </div>
        </motion.div>

        {/* Bottom Small Cards */}
        {[
          { icon: Laptop, label: "Perfectly Integrated", color: "text-blue-500" },
          { icon: Target, label: "Built to Scale", color: "text-cyan-500" },
          { label: "Easy to Edit", pill: "Mon - Fri: 10 -", pillColor: "text-green-600 bg-green-50 border-green-100" },
          { label: "Secure & Compliant", pill: "GDPR", sub: "Compliant", hasCheck: true, pillColor: "text-green-600 bg-green-50 border-green-100" }
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (i * 0.1) }}
            className="md:col-span-3 bg-white border border-slate-100 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group hover:border-green-200 transition-all duration-300 cursor-default shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            {card.icon && (
              <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <card.icon className={`w-8 h-8 ${card.color}`} strokeWidth={1.5} />
              </div>
            )}
            
            {card.pill && (
              <div className="mb-6 flex items-center gap-2">
                <div className={`px-5 py-2 rounded-full border ${card.pillColor} text-[11px] font-black tracking-widest uppercase flex items-center gap-2 shadow-sm`}>
                  {card.pill} {card.hasCheck && <CheckCircle2 className="w-4 h-4 fill-green-500 text-white" />}
                </div>
              </div>
            )}

            <p className="font-black text-slate-900 text-sm tracking-tight uppercase">{card.label}</p>
            {card.sub && <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{card.sub}</p>}
          </motion.div>
        ))}

      </div>
    </SectionContainer>
  );
}
