"use client";

import { motion, Variants } from "framer-motion";
import SectionContainer from "../SectionContainer";

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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function Portfolio() {
  return (
    <SectionContainer id="portfolio" bg="white">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
        >
          Portfolio.
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
          Selected work and projects.
        </motion.p>
      </div>
      
      <hr className="border-slate-200 mb-12" />

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
            className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-green-300 hover:shadow-xl hover:shadow-green-100 transition-all duration-300"
          >
            {/* Image Container */}
            <div className={`relative w-full h-64 md:h-72 overflow-hidden ${project.imageColor} flex items-center justify-center p-6`}>
              <div className="w-full h-full bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500">
                <span className="text-slate-500 font-medium tracking-widest uppercase text-sm">Project Preview</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold rounded-full"
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
