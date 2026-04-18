"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Smartphone } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance, fully responsive websites and web apps built with Next.js, React, Node.js, and Firebase. Engineered for speed, scalability, and real business impact.",
    icon: Globe,
    tags: ["Next.js", "React", "Node.js", "Firebase"],
    gradient: "from-green-400/20 to-emerald-300/10",
    accent: "bg-green-500",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    border: "hover:border-green-300",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Clean, minimal, and conversion-focused interfaces. Every pixel is designed to guide your users naturally — from first click to final action.",
    icon: Layers,
    tags: ["Figma", "Tailwind CSS", "Framer Motion", "GSAP"],
    gradient: "from-violet-400/20 to-purple-300/10",
    accent: "bg-violet-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    border: "hover:border-violet-300",
  },
  {
    number: "03",
    title: "App Development",
    description:
      "Cross-platform mobile apps with smooth UX and native-level performance. Built with React Native and modern backend integrations for iOS and Android.",
    icon: Smartphone,
    tags: ["React Native", "Expo", "REST APIs", "Firebase"],
    gradient: "from-sky-400/20 to-blue-300/10",
    accent: "bg-sky-500",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    border: "hover:border-sky-300",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="bg-green-200 text-green-950 px-2 sm:px-3 py-1 inline-block">
              Services.
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden sm:block w-px h-10 sm:h-12 bg-slate-300"
          />
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-xl md:text-2xl text-slate-500"
          >
            What I build for you.
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-slate-200 mb-10 sm:mb-14"
        />

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200 ${service.border} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-default flex flex-col`}
            >
              {/* Top gradient accent */}
              <div className={`absolute inset-x-0 top-0 h-1 ${service.accent}`} />

              {/* Background gradient blob */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-3xl sm:text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors select-none">
                    {service.number}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-11 h-11 sm:w-14 sm:h-14 ${service.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center`}
                  >
                    <service.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${service.iconColor}`} strokeWidth={1.8} />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {service.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-500 text-[10px] sm:text-xs font-medium rounded-full group-hover:border-slate-300 transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
