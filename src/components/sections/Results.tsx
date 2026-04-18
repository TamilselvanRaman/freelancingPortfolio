"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Smartphone, Zap, Search, Layers, Code2, ShieldCheck } from "lucide-react";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "x", label: "Avg. Performance Boost" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

const pillars = [
  { icon: Smartphone, label: "100% Responsive" },
  { icon: Zap,        label: "Fast Load Times" },
  { icon: Search,     label: "SEO Optimized" },
  { icon: Layers,     label: "Scalable Architecture" },
  { icon: Code2,      label: "Clean Code" },
  { icon: ShieldCheck,label: "Secure Systems" },
];

/* Animated counter */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCount(target);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Results() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineProgress = useSpring(useTransform(scrollYProgress, [0.05, 0.5], [0, 1]), { stiffness: 80, damping: 20 });

  return (
    <section ref={sectionRef} id="results" className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4 mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-xl md:text-2xl text-slate-500 mb-1"
          >
            Websites built for real business impact.
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-slate-200 mb-12 sm:mb-16"
        />

        {/* ── STATS ROW ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden group hover:border-green-300 transition-colors duration-300"
            >
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-1 tabular-nums">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* ── CHART PANEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden mb-14 sm:mb-20 border border-slate-800"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent" />

          <div className="relative z-10 p-6 sm:p-10">
            {/* Chart header */}
            <div className="flex items-start justify-between mb-6 sm:mb-8">
              <div>
                <p className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-widest mb-1">Growth Trajectory</p>
                <p className="text-white text-xl sm:text-2xl font-bold">Business Impact Over Time</p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-2 text-right"
              >
                <p className="text-green-400 text-xs font-medium">Conversion Rate</p>
                <p className="text-green-300 text-2xl font-black">+148%</p>
              </motion.div>
            </div>

            {/* SVG Chart */}
            <div className="relative h-[180px] sm:h-[220px]">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between pr-3">
                {["100%", "75%", "50%", "25%", "0%"].map((l) => (
                  <span key={l} className="text-slate-600 text-[10px] sm:text-xs leading-none">{l}</span>
                ))}
              </div>

              <div className="absolute left-8 right-0 top-0 bottom-5">
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((pct) => (
                  <div key={pct} className="absolute w-full border-t border-slate-700/50" style={{ top: `${100 - pct}%` }} />
                ))}

                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Area fill */}
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                    d="M0,90 C15,80 25,70 40,55 S65,30 80,20 S95,12 100,8 L100,100 L0,100 Z"
                    fill="url(#areaGrad)"
                  />
                  {/* Main line */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                    d="M0,90 C15,80 25,70 40,55 S65,30 80,20 S95,12 100,8"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Glowing dot at end */}
                  <motion.circle
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2 }}
                    cx="100" cy="8" r="3" fill="#22c55e"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-8 right-0 flex justify-between">
                {["Q1", "Q2", "Q3", "Q4"].map((q) => (
                  <span key={q} className="text-slate-500 text-[10px] sm:text-xs">{q}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── PILLARS GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl hover:border-green-300 hover:bg-green-50/50 transition-all duration-300"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-xl border border-slate-200 group-hover:border-green-200 flex items-center justify-center shrink-0 shadow-sm transition-colors">
                <pillar.icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:text-green-600 transition-colors" strokeWidth={1.8} />
              </div>
              <span className="text-sm sm:text-base font-semibold text-slate-800">{pillar.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
