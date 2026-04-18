"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import SectionContainer from "../SectionContainer";

const projects = [
  {
    title: "Vasandham Herbals",
    subtitle: "E-Commerce Website",
    description: "An e-commerce platform for selling herbal products, built with a responsive React frontend (Vite) and powered by Firebase for backend services. Designed for performance, scalability, and seamless user experience.",
    tech: ["React (Vite)", "Firebase", "Tailwind CSS"],
    imageColor: "bg-green-100",
    url: "https://vasandhamherbals.com",
    hasViewLiveBtn: true,
  },
  {
    title: "UNI_BRAINS",
    subtitle: "Medical Consultation Platform",
    description: "A responsive medical consultation website designed to guide users through safe medical abortion information. Built with React, Tailwind CSS, and GSAP, featuring smooth animations and structured sections like Hero, Services, FAQs, Experts, and Contact.",
    tech: ["React", "Tailwind CSS", "GSAP"],
    imageColor: "bg-blue-100",
    status: "Currently Live and Running",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

export default function Portfolio() {
  return (
    <SectionContainer id="portfolio" bg="slate">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4 mb-6 sm:mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-xl md:text-2xl text-slate-500 mb-1"
        >
          Selected work and real-world projects.
        </motion.p>
      </div>

      <hr className="border-slate-200 mb-8 sm:mb-12" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Container */}
            <div className={`relative w-full h-44 sm:h-56 md:h-64 lg:h-72 overflow-hidden ${project.imageColor} flex items-center justify-center p-4 sm:p-6`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="w-full h-full bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 z-0">
                <span className="text-slate-500 font-medium tracking-widest uppercase text-xs sm:text-sm text-center px-2">{project.title} Preview</span>
              </div>

              {project.status && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-[10px] sm:text-xs font-semibold text-green-600 border border-green-100">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
                    {project.status}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">{project.subtitle}</p>
              </div>

              <p className="text-slate-600 leading-relaxed mb-5 sm:mb-8 flex-1 text-xs sm:text-sm md:text-base">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 sm:px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] sm:text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="mt-auto border-t border-slate-100 pt-4 sm:pt-6">
                {project.hasViewLiveBtn ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-colors duration-300 gap-2 group/btn"
                  >
                    View Live
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 text-green-600 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Live Project</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
