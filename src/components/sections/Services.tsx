"use client";

import { motion, Variants } from "framer-motion";
import { MonitorSmartphone, LayoutTemplate, Settings, LineChart } from "lucide-react";
import SectionContainer from "../SectionContainer";

const services = [
  {
    title: "Web Development",
    description: "Fast, responsive, and scalable web applications built with modern frameworks like Next.js and React.",
    icon: MonitorSmartphone,
  },
  {
    title: "UI/UX Design",
    description: "Clean, minimal, and user-centric designs that convert visitors into loyal customers.",
    icon: LayoutTemplate,
  },
  {
    title: "Automation & Backend",
    description: "Robust backend systems and automated workflows to streamline your business operations.",
    icon: Settings,
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO implementation to ensure your website ranks high and loads blazingly fast.",
    icon: LineChart,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

export default function Services() {
  return (
    <SectionContainer id="services" bg="slate">
      <div className="text-center mb-16 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4"
        >
          Specialized Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Everything you need to build, launch, and scale your digital presence under one roof.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 border border-slate-100 flex flex-col items-start"
          >
            <div className="p-3 bg-green-50 rounded-xl text-green-600 mb-6">
              <service.icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
