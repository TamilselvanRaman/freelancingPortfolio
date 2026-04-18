"use client";

import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../Button";
import SectionContainer from "../SectionContainer";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Landing Page",
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
  },
  {
    name: "Standard Website",
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
  },
  {
    name: "Premium Web App",
    price: "₹9,999+",
    description: "For complex web applications, SaaS products, and custom platforms.",
    features: [
      "Custom Backend & Database",
      "User Authentication",
      "API Integrations",
      "Payment Gateway Setup",
      "Scalable Architecture",
      "3 Months Free Support",
    ],
    popular: false,
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
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function Pricing() {
  return (
    <SectionContainer id="pricing" bg="slate">
      <div className="text-center mb-16 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Invest in a high-performance digital presence that pays for itself.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center"
      >
        {plans.map((plan, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className={cn(
              "relative bg-white rounded-3xl p-8 flex flex-col h-full transition-transform duration-300",
              plan.popular 
                ? "border-2 border-green-500 shadow-xl shadow-green-900/10 md:scale-105 z-10" 
                : "border border-slate-200 shadow-sm hover:shadow-md"
            )}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-green-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm h-10">{plan.description}</p>
            </div>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span className="text-slate-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant={plan.popular ? "default" : "outline"} 
              size="lg" 
              className="w-full mt-auto"
            >
              Choose Plan
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
