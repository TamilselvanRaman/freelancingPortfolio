"use client";

import { motion, Variants } from "framer-motion";
import SectionContainer from "../SectionContainer";
import Image from "next/link"; // Next.js image placeholder structure for now

const projects = [
  {
    title: "AI-based Stock Management System",
    description: "An intelligent inventory platform leveraging AI to predict stock demands and automate reordering processes. Features real-time dashboards and analytics.",
    tech: ["Next.js", "Python", "TensorFlow", "MongoDB", "Tailwind CSS"],
    imageColor: "bg-blue-100", // Placeholder for actual image
  },
  {
    title: "Expense Tracker Web App",
    description: "A comprehensive financial management tool for individuals and small businesses to track spending, generate reports, and set budgets.",
    tech: ["React.js", "Node.js", "Express", "PostgreSQL"],
    imageColor: "bg-emerald-100",
  },
  {
    title: "Cargo Management System",
    description: "End-to-end logistics platform for tracking shipments, managing fleets, and optimizing delivery routes globally.",
    tech: ["Next.js", "TypeScript", "Prisma", "AWS", "Google Maps API"],
    imageColor: "bg-indigo-100",
  },
  {
    title: "Online College Admission System",
    description: "A secure, scalable portal for students to apply to courses, upload documents, and track admission status in real-time.",
    tech: ["React.js", "Firebase", "Tailwind CSS", "Stripe"],
    imageColor: "bg-amber-100",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function Portfolio() {
  return (
    <SectionContainer id="portfolio" bg="white">
      <div className="text-center mb-16 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4"
        >
          Featured Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          A selection of real-world applications I&apos;ve built to solve complex problems and drive business growth.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
          >
            {/* Image Container with Zoom effect */}
            <div className={`relative w-full h-64 md:h-80 overflow-hidden ${project.imageColor} flex items-center justify-center`}>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10" />
              {/* This is a placeholder for actual next/image. We use a visual placeholder to maintain the premium feel */}
              <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out flex items-center justify-center opacity-50">
                <span className="text-slate-500 font-medium tracking-widest uppercase text-sm">Project Preview</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
