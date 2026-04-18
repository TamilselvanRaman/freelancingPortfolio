"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    index: "01",
    title: "Vasandham Herbals",
    subtitle: "E-Commerce Website",
    description:
      "An e-commerce platform for selling herbal products, built with a responsive React frontend and powered by Firebase. Designed for performance, scalability, and seamless user experience.",
    url: "https://vasandhamherbals.com",
    hasViewLiveBtn: true,
    accent: "from-green-400 to-emerald-500",
    cardBg: "bg-green-50",
    labelColor: "text-green-600",
    tag: "Live Project",
  },
  {
    index: "02",
    title: "UNI_BRAINS",
    subtitle: "Medical Consultation Platform",
    description:
      "A responsive medical consultation website designed to guide users through safe medical abortion information, featuring smooth animations and structured sections.",
    hasViewLiveBtn: false,
    status: "Currently Live and Running",
    accent: "from-blue-400 to-indigo-500",
    cardBg: "bg-blue-50",
    labelColor: "text-blue-600",
    tag: "Live Project",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-slate-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Image Side */}
      <motion.div
        style={{ y }}
        className={`relative ${project.cardBg} min-h-[200px] sm:min-h-[280px] flex items-center justify-center overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10`} />

        {/* Decorative grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />

        {/* Project number watermark */}
        <span className="absolute bottom-4 right-6 text-[80px] sm:text-[120px] font-black text-black/5 select-none leading-none">
          {project.index}
        </span>

        {/* Status badge */}
        {project.status && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute top-4 left-4 z-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur shadow-sm rounded-full text-xs font-semibold text-green-600 border border-green-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {project.status}
            </span>
          </motion.div>
        )}

        {/* Center label */}
        <div className="relative z-10 text-center px-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-white shadow-sm`}>
            <span className={`text-xs font-bold uppercase tracking-widest ${project.labelColor}`}>{project.subtitle}</span>
          </div>
        </div>
      </motion.div>

      {/* Content Side */}
      <div className={`flex flex-col justify-center p-7 sm:p-10 md:p-14 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 block"
        >
          Project {project.index}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          {project.hasViewLiveBtn ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-colors duration-300"
            >
              View Live
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-green-600">Live & Running</span>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 bg-slate-50 border-y border-slate-100">
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
            Portfolio.
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
            Selected work and real-world projects.
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-slate-200 mb-10 sm:mb-14"
        />

        {/* Projects */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
