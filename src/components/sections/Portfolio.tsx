"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { 
  ReactLogo, 
  NextJsLogo, 
  FirebaseLogo, 
  TailwindLogo, 
  StripeLogo, 
  NodeJsLogo, 
  MongoDBLogo, 
  TypeScriptLogo,
  FigmaLogo
} from "../Icons";

const techIcons: { [key: string]: React.ReactNode } = {
  "Next.js": <NextJsLogo className="w-4 h-4" />,
  "React": <ReactLogo className="w-4 h-4" />,
  "Firebase": <FirebaseLogo className="w-4 h-4" />,
  "Tailwind": <TailwindLogo className="w-4 h-4" />,
  "Tailwind CSS": <TailwindLogo className="w-4 h-4" />,
  "Stripe": <StripeLogo className="w-4 h-4" />,
  "Node.js": <NodeJsLogo className="w-4 h-4" />,
  "MongoDB": <MongoDBLogo className="w-4 h-4" />,
  "TypeScript": <TypeScriptLogo className="w-4 h-4" />,
  "Figma": <FigmaLogo className="w-4 h-4" />,
};

const projects = [
  {
    index: "01",
    title: "Vasandham Herbals",
    subtitle: "E-Commerce Transformation",
    role: "Lead Full-Stack Developer",
    tech: ["Next.js", "Firebase", "Stripe", "Tailwind"],
    description:
      "A complete digital transformation for a traditional herbal brand. We engineered a high-conversion e-commerce ecosystem that streamlined inventory management and expanded their market reach globally.",
    outcome: "45% increase in online sales within the first quarter.",
    url: "https://vasandhamherbals.com",
    image: "/projectImages/vasandhamherbels.png",
    hasViewLiveBtn: true,
    accent: "bg-emerald-500",
    labelColor: "text-emerald-600",
    labelBg: "bg-emerald-50 border-emerald-100",
  },
  {
    index: "02",
    title: "UNI_BRAINS",
    subtitle: "Healthcare Access Platform",
    role: "Product Architect",
    tech: ["React", "Framer Motion", "Node.js", "MongoDB"],
    description:
      "A critical healthcare initiative focused on providing safe, accessible information. The platform prioritizes privacy, user security, and intuitive navigation for sensitive medical consultation.",
    outcome: "Successfully serving 10k+ monthly active users with 99.9% uptime.",
    image: "/projectImages/UNI_BRAINS.png",
    hasViewLiveBtn: false,
    status: "Active Production",
    accent: "bg-blue-600",
    labelColor: "text-blue-600",
    labelBg: "bg-blue-50 border-blue-100",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-slate-200 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700 max-w-4xl mx-auto"
    >
      {/* Image side - spanning 7 columns on large screens */}
      <div className={`relative min-h-[200px] sm:min-h-[280px] lg:col-span-7 overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </motion.div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700" />

        {/* Floating Badges */}
        <div className="absolute top-5 left-5 sm:top-6 sm:left-6 flex flex-col gap-2 z-10">
          {project.status && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-md shadow-lg rounded-full text-[10px] font-bold text-slate-900 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {project.status}
            </span>
          )}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border shadow-lg ${project.labelBg}`}>
            <span className={`text-[9px] font-black uppercase tracking-[0.15em] ${project.labelColor}`}>
              {project.subtitle}
            </span>
          </div>
        </div>

        {/* Project Number Watermark */}
        <div className="absolute bottom-4 right-6 sm:bottom-6 sm:right-8 z-10">
          <span className="text-6xl sm:text-8xl font-black text-white/20 select-none leading-none tracking-tighter">
            {project.index}
          </span>
        </div>
      </div>

      {/* Content side - spanning 5 columns on large screens */}
      <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 lg:col-span-5 bg-white relative z-20 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div className={`absolute top-0 inset-x-0 h-1 ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="mb-5">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-2 block">
            {project.role}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight leading-tight group-hover:text-green-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
            {project.description}
          </p>
        </div>

        <div className="space-y-6">
          {/* Outcome highlight */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-all duration-300">
             <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Key Outcome</span>
             <p className="text-[11px] font-bold text-slate-800 leading-snug">{project.outcome}</p>
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[9px] font-bold rounded-lg uppercase tracking-wider group-hover:border-slate-300 transition-all">
                {techIcons[t] || null}
                {t}
              </span>
            ))}
          </div>


          {/* CTA */}
          <div className="pt-1">
            {project.hasViewLiveBtn ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white text-[11px] font-bold rounded-xl hover:bg-green-600 shadow-lg shadow-slate-200 hover:shadow-green-200/50 transition-all duration-300"
              >
                Launch Project
                <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-green-50 border border-green-100 rounded-xl">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">Under NDA</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-[-12deg] translate-x-1/4 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Selected Projects</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1] mb-8"
          >
            Portfolio.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl"
          >
            A collection of high-impact digital solutions designed for performance, 
            scalability, and seamless user experience.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
