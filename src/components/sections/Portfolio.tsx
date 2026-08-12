"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Database, 
  Cpu, 
  Layers, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp,
  Sparkles,
  Info,
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

import { 
  ReactLogo, 
  NextJsLogo, 
  FirebaseLogo, 
  TailwindLogo, 
  StripeLogo, 
  NodeJsLogo, 
  MongoDBLogo, 
  TypeScriptLogo,
  FigmaLogo,
  DockerLogo
} from "../Icons";

// Tech icon mapper helper
const getTechIcon = (techName: string) => {
  const normalized = techName.toLowerCase();
  
  if (normalized.includes("next.js") || normalized.includes("nextjs")) {
    return <NextJsLogo className="w-4 h-4 text-slate-900 dark:text-white" />;
  }
  if (normalized.includes("react") || normalized.includes("redux") || normalized.includes("router")) {
    return <ReactLogo className="w-4 h-4 text-sky-400" />;
  }
  if (normalized.includes("firebase") || normalized.includes("firestore")) {
    return <FirebaseLogo className="w-4 h-4 text-amber-500" />;
  }
  if (normalized.includes("tailwind")) {
    return <TailwindLogo className="w-4 h-4 text-cyan-400" />;
  }
  if (normalized.includes("stripe") || normalized.includes("razorpay") || normalized.includes("payment")) {
    return <StripeLogo className="w-4 h-4 text-indigo-500" />;
  }
  if (normalized.includes("node") || normalized.includes("express")) {
    return <NodeJsLogo className="w-4 h-4 text-emerald-500" />;
  }
  if (normalized.includes("mongodb") || normalized.includes("mongoose")) {
    return <MongoDBLogo className="w-4 h-4 text-green-600" />;
  }
  if (normalized.includes("typescript")) {
    return <TypeScriptLogo className="w-4 h-4 text-blue-500" />;
  }
  if (normalized.includes("figma")) {
    return <FigmaLogo className="w-4 h-4 text-orange-500" />;
  }
  if (normalized.includes("docker")) {
    return <DockerLogo className="w-4 h-4 text-blue-400" />;
  }
  
  if (normalized.includes("python") || normalized.includes("fastapi") || normalized.includes("openai") || normalized.includes("ai") || normalized.includes("llm") || normalized.includes("semantic")) {
    return <Cpu className="w-3.5 h-3.5 text-rose-500" />;
  }
  if (normalized.includes("sql") || normalized.includes("database") || normalized.includes("vector")) {
    return <Database className="w-3.5 h-3.5 text-blue-600" />;
  }
  if (normalized.includes("chart") || normalized.includes("recharts") || normalized.includes("analytics")) {
    return <TrendingUp className="w-3.5 h-3.5 text-violet-500" />;
  }
  if (normalized.includes("framer") || normalized.includes("gsap") || normalized.includes("animation")) {
    return <Sparkles className="w-3.5 h-3.5 text-amber-500" />;
  }
  
  return <Layers className="w-3.5 h-3.5 text-slate-400" />;
};

// Premium colors map
const colorThemes = [
  { accent: "bg-emerald-500", text: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100", gradient: "from-emerald-500 to-teal-600" },
  { accent: "bg-violet-500", text: "text-violet-600", bg: "bg-violet-50 border-violet-100", gradient: "from-violet-500 to-indigo-600" },
  { accent: "bg-blue-500", text: "text-blue-600", bg: "bg-blue-50 border-blue-100", gradient: "from-blue-500 to-cyan-600" },
  { accent: "bg-amber-500", text: "text-amber-600", bg: "bg-amber-50 border-amber-100", gradient: "from-amber-500 to-orange-600" },
  { accent: "bg-rose-500", text: "text-rose-600", bg: "bg-rose-50 border-rose-100", gradient: "from-rose-500 to-pink-600" }
];

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  featured: boolean;
  technologies: string[];
  order: number;
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  images?: string[];
  outcome?: string;
  hidden?: boolean;
  
  // UI Generated fields
  index: string;
  accent: string;
  labelColor: string;
  labelBg: string;
  gradient: string;
  subtitle: string;
  role: string;
  status: string;
}


export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Fetch projects from Firestore
  useEffect(() => {
    async function fetchProjects() {
      try {
        const colRef = collection(db, "projects");
        const snapshot = await getDocs(colRef);
        const projectsList: Project[] = [];
        
        snapshot.docs.forEach((doc, idx) => {
          const data = doc.data();
          const theme = colorThemes[idx % colorThemes.length];
          
          let techs: string[] = [];
          if (Array.isArray(data.technologies)) {
            techs = data.technologies;
          } else if (typeof data.technologies === "string") {
            techs = (data.technologies as string).split(",").map(t => t.trim());
          }

          let subtitle = "Web Application";
          if (techs.some(t => t.toLowerCase().includes("e-commerce") || t.toLowerCase().includes("shop") || t.toLowerCase().includes("cafe"))) {
            subtitle = "E-Commerce Ecosystem";
          } else if (techs.some(t => t.toLowerCase().includes("ai") || t.toLowerCase().includes("openai") || t.toLowerCase().includes("llm"))) {
            subtitle = "AI-Powered Platform";
          } else if (techs.some(t => t.toLowerCase().includes("iot") || t.toLowerCase().includes("sensor"))) {
            subtitle = "Real-Time IoT Solution";
          } else if (techs.some(t => t.toLowerCase().includes("tracker") || t.toLowerCase().includes("bill"))) {
            subtitle = "Smart Utility Dashboard";
          }

          let role = "Full-Stack Developer";
          if (techs.some(t => t.toLowerCase().includes("python") || t.toLowerCase().includes("fastapi") || t.toLowerCase().includes("sqlite"))) {
            role = "Backend Architect";
          } else if (data.title?.toLowerCase().includes("brains") || data.title?.toLowerCase().includes("split")) {
            role = "UI Architect & Frontend Dev";
          }

          projectsList.push({
            id: doc.id,
            title: data.title || "",
            description: data.description || "",
            longDescription: data.longDescription || "",
            featured: data.featured || false,
            technologies: techs,
            order: data.order !== undefined ? data.order : 99,
            githubUrl: data.githubUrl || "",
            liveUrl: data.liveUrl || data.url || "",
            imageUrl: data.imageUrl || undefined,
            images: data.images || undefined,
            outcome: data.outcome || "",
            hidden: data.hidden || false,
            
            index: String(projectsList.length + 1).padStart(2, "0"),
            accent: theme.accent,
            labelColor: theme.text,
            labelBg: theme.bg,
            gradient: theme.gradient,
            subtitle,
            role,
            status: data.featured ? "Featured Project" : "Production Ready"
          });
        });

        const visibleProjects = projectsList.filter(p => !p.hidden);
        visibleProjects.sort((a, b) => a.order - b.order);
        
        const sortedList = visibleProjects.map((p, index) => ({
          ...p,
          index: String(index + 1).padStart(2, "0")
        }));

        setProjects(sortedList);
      } catch (err) {
        console.error("Error fetching projects: ", err);
      }
    }

    fetchProjects();
  }, []);

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setActiveImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setActiveImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
    }
  };

  return (
    <section 
      id="portfolio" 
      className="scroll-mt-28 pt-28 sm:pt-36 pb-20 sm:pb-28 bg-slate-50 dark:bg-slate-900 relative z-10 transition-colors duration-300"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-[0.2em]">Crafted Works</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none"
          >
            Portfolio.
          </motion.h2>
        </div>

        {/* Clean Standard Display List (One by One) */}
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-[2.2rem] md:rounded-[2.8rem] shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700/80 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[440px] group hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Left Column: Image Section */}
              <div className="relative md:col-span-6 h-56 md:h-full min-h-[260px] overflow-hidden bg-slate-100 dark:bg-slate-900">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.95] contrast-105 group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className={`absolute inset-0 w-full h-full bg-gradient-to-tr ${project.gradient} brightness-[0.8]`} />
                )}

                {/* Category Tag Badge */}
                <div className="absolute top-6 left-6 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 px-4 py-1.5 rounded-full shadow-md">
                  <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                    {project.subtitle}
                  </span>
                </div>

                {/* Floating Index Number */}
                <div className="absolute bottom-4 right-6 z-20 select-none">
                  <span className="text-[6rem] font-black text-white/50 dark:text-white/20 tracking-tighter leading-none">
                    {project.index}
                  </span>
                </div>
              </div>

              {/* Right Column: Content Section */}
              <div className="p-6 md:p-8 md:col-span-6 flex flex-col justify-between h-full bg-white dark:bg-slate-800 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-700/60">
                
                <div className="space-y-3">
                  {/* Role Line */}
                  <div>
                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] block mb-1 leading-none">
                      {project.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-medium line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Outcome Box */}
                  {project.outcome && (
                    <div className="p-3.5 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 rounded-2xl">
                      <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-0.5">
                        Key Outcome
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 text-xs font-bold leading-normal">
                        {project.outcome}
                      </p>
                    </div>
                  )}
                </div>

                {/* Technologies & Footer Buttons */}
                <div className="pt-4">
                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-350 text-[10px] font-black rounded-lg uppercase tracking-wider"
                      >
                        {getTechIcon(t)}
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-400 text-[10px] font-bold rounded-lg uppercase">
                        +{project.technologies.length - 4} More
                      </span>
                    )}
                  </div>

                  {/* CTAs Footer */}
                  <div className="flex items-center gap-3 border-t border-slate-100 dark:border-slate-700/40 pt-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0f172a] hover:bg-emerald-600 text-white text-xs font-black rounded-xl transition-all shadow-md"
                      >
                        <span>Launch Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-300 transition-all"
                        title="View Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setActiveImageIndex(0);
                      }}
                      className="inline-flex items-center gap-1.5 text-[10px] font-black text-slate-400 hover:text-slate-800 dark:hover:text-white uppercase tracking-wider ml-auto transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Component */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-full max-w-4xl rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
                    {selectedProject.role}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                    {selectedProject.title}
                  </h2>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="overflow-y-auto p-6 space-y-8 flex-1">
                
                {/* Images Gallery */}
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-900">
                    <img 
                      src={selectedProject.images[activeImageIndex]} 
                      alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                    
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 text-white rounded-full transition-all"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 text-white rounded-full transition-all"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        
                        {/* Dots indicator */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                          {selectedProject.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveImageIndex(idx)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                idx === activeImageIndex ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  /* Fallback cover image inside details */
                  selectedProject.imageUrl && (
                    <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-900">
                      <Image 
                        src={selectedProject.imageUrl} 
                        alt={selectedProject.title}
                        fill
                        unoptimized
                        className="object-cover object-top"
                      />
                    </div>
                  )
                )}

                {/* Description details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Descriptions */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Project Overview</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.longDescription && (
                      <div>
                        <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">System Architecture & Technical Scope</h4>
                        <div className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed font-medium space-y-4 whitespace-pre-line">
                          {selectedProject.longDescription}
                        </div>
                      </div>
                    )}

                    {selectedProject.outcome && (
                      <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
                        <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                          <Info className="w-4 h-4" />
                          Key Impact & Outcome
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                          {selectedProject.outcome}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Stack & Metadata */}
                  <div className="lg:col-span-4 space-y-6">
                    <div>
                      <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Technologies Leveraged</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((t, idx) => (
                          <span 
                            key={idx} 
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-black rounded-lg uppercase tracking-wider"
                          >
                            {getTechIcon(t)}
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-3">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-slate-400">Environment</span>
                        <span className="text-slate-750 dark:text-slate-300 font-bold">{selectedProject.status}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-slate-400">Assigned Role</span>
                        <span className="text-slate-750 dark:text-slate-300 font-bold">{selectedProject.role}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-100 dark:border-slate-750/60 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-end gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-slate-250 dark:border-slate-700 hover:border-slate-400 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-bold rounded-2xl transition-all bg-white dark:bg-slate-800"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
                
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
                  >
                    Launch Live Service
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
