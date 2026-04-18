"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Rocket, Globe, ShoppingCart, MonitorCog, CreditCard } from "lucide-react";
import SectionContainer from "../SectionContainer";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter Plan",
    price: "₹3,999",
    features: [
      "1-2 Page Website",
      "Mobile Responsive",
      "WhatsApp Integration",
    ],
    popular: false,
    TopIcon: Code2,
    BottomIcon: ShoppingCart,
  },
  {
    name: "Growth Plan",
    price: "₹6,999",
    features: [
      "Business / Ecommerce Website",
      "Up to 15 Products",
      "Modern UI Design",
    ],
    popular: true,
    TopIcon: Rocket,
    BottomIcon: MonitorCog,
  },
  {
    name: "Ecommerce Plan",
    price: "₹11,999",
    features: [
      "Full Ecommerce Setup",
      "Payment Gateway (Razorpay)",
      "Up to 30 Products",
    ],
    popular: false,
    TopIcon: Globe,
    BottomIcon: CreditCard,
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

export default function Pricing() {
  return (
    <SectionContainer id="pricing" bg="dark" className="relative overflow-hidden bg-[#0a0f1c] pt-16 sm:pt-24 pb-20 sm:pb-32">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-green-500/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent transform -skew-y-3 blur-[1px]" />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center text-center mb-10 sm:mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4"
        >
          Pricing.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-slate-400 font-light"
        >
          Transparent pricing for your digital success.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 max-w-5xl mx-auto items-center px-4"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={cn(
              "relative rounded-[1.5rem] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300",
              plan.popular
                ? "bg-slate-900/60 border border-green-500/60 shadow-[0_0_50px_-15px_rgba(34,197,94,0.4)] sm:scale-105 z-20 py-8 sm:py-10 backdrop-blur-md"
                : "bg-slate-900/40 border border-slate-700/50 hover:border-slate-600/80 backdrop-blur-sm z-10"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 blur-sm rounded-full opacity-60" />
                  <span className="relative bg-gradient-to-r from-green-500 to-emerald-400 text-white text-[10px] sm:text-xs font-bold px-4 sm:px-5 py-1.5 rounded-full shadow-lg border border-green-400/50 whitespace-nowrap tracking-wide">
                    Most Popular
                  </span>
                </div>
              </div>
            )}

            <div className={cn(
              "mb-3 sm:mb-4 p-2 sm:p-3 rounded-2xl transition-colors duration-300",
              plan.popular ? "text-green-400" : "text-slate-400"
            )}>
              <plan.TopIcon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </div>

            <h3 className="text-base sm:text-xl font-medium text-white mb-2">
              {plan.name}
            </h3>

            <div className="mb-6 sm:mb-8">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">{plan.price}</span>
            </div>

            <div className="w-full flex justify-center flex-1">
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left inline-block">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-300 text-xs sm:text-[15px]">
                    <span className={cn(
                      "w-1 h-1 rounded-full mr-2 sm:mr-3 shrink-0",
                      plan.popular ? "bg-green-400" : "bg-slate-500"
                    )} />
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(
              "mt-auto pt-4 sm:pt-6",
              plan.popular ? "text-green-400" : "text-slate-500"
            )}>
              <plan.BottomIcon className="w-8 h-8 sm:w-10 sm:h-10 opacity-40" strokeWidth={1.5} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative z-20 mt-16 sm:mt-28 flex flex-col items-center justify-center cursor-pointer group px-4"
      >
        <div className="relative inline-block">
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-300" />

          <button className="relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full leading-none flex items-center justify-center border border-green-400/50">
            <span className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide">
              Start Your Website Today
            </span>
          </button>

          <div className="absolute -top-3 sm:-top-4 -right-1 sm:-right-8 z-30">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 blur-sm rounded-full opacity-50" />
              <span className="relative bg-[#0a0f1c] border border-green-500/50 text-green-400 text-[9px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                Limited Time Offer
              </span>
            </div>
          </div>
        </div>
        <p className="text-slate-500 mt-4 sm:mt-6 text-xs sm:text-sm">24/7 Virtual Support Available</p>
      </motion.div>
    </SectionContainer>
  );
}
