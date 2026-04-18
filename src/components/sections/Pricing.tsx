"use client";

import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../Button";
import SectionContainer from "../SectionContainer";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "landing page",
    price: "₹2,999",
    description: "Perfect for single-page marketing websites and personal portfolios.",
    features: [
      "Custom UI/UX Design",
      "Fully Responsive Layout",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Fast Page Load Speed",
    ],
    popular: false,
    color: "green",
  },
  {
    name: "standard",
    price: "₹5,999",
    description: "Ideal for small businesses needing a professional online presence.",
    features: [
      "Up to 5 Custom Pages",
      "CMS Integration (Blog/Content)",
      "Advanced SEO Optimization",
      "Google Analytics Setup",
      "1 Month Free Support",
    ],
    popular: true,
    color: "blue",
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function Pricing() {
  return (
    <SectionContainer id="pricing" bg="white">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
        >
          Pricing.
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
          Simple & transparent packages.
        </motion.p>
      </div>
      
      <hr className="border-slate-200 mb-12" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center"
      >
        {plans.map((plan, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className={cn(
              "relative bg-slate-50 rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-300 border border-slate-200 hover:shadow-xl",
              plan.color === "green" ? "hover:border-green-300 hover:shadow-green-100" : "hover:border-blue-300 hover:shadow-blue-100",
              plan.popular ? "md:scale-[1.02] bg-white shadow-md z-10 border-slate-300" : ""
            )}
          >
            {plan.popular && (
              <div className="absolute -top-4 right-8">
                <span className="bg-slate-900 text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-full shadow-md">
                  POPULAR
                </span>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className={cn(
                "text-2xl md:text-3xl font-bold mb-3",
                plan.color === "green" ? "text-green-600" : "text-blue-600"
              )}>
                {plan.name}
              </h3>
              <p className="text-slate-500">{plan.description}</p>
            </div>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <div className={cn(
                    "mr-4 rounded-full p-1",
                    plan.color === "green" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                  )}>
                    <Check className="h-4 w-4 shrink-0 font-bold" strokeWidth={3} />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              size="lg" 
              className={cn(
                "w-full rounded-full h-14 text-lg font-semibold shadow-md",
                plan.popular 
                  ? "bg-slate-900 text-white hover:bg-slate-800" 
                  : plan.color === "green" 
                    ? "bg-green-100 text-green-700 hover:bg-green-200 border-none"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200 border-none"
              )}
            >
              Start Building
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
