"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Rocket, Globe, ShoppingCart, MonitorCog, CreditCard } from "lucide-react";
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
    glow: "rgba(34,197,94,0.15)",
    accent: "#22c55e",
    accentLight: "rgba(34,197,94,0.08)",
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
    glow: "rgba(34,197,94,0.30)",
    accent: "#22c55e",
    accentLight: "rgba(34,197,94,0.12)",
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
    glow: "rgba(34,197,94,0.15)",
    accent: "#22c55e",
    accentLight: "rgba(34,197,94,0.08)",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 md:py-32 bg-white overflow-hidden">

      {/* Subtle background dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "28px 28px"
      }} />

      {/* Top light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-green-100/60 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3"
          >
            Our Plans
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3"
          >
            Build Your Business{" "}
            <span className="text-green-500">Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Transparent pricing for your digital success.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 items-center"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                "relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col transition-all duration-300",
                plan.popular
                  ? "sm:scale-105 sm:-my-4 z-20"
                  : "z-10"
              )}
              style={{
                background: plan.popular
                  ? "linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%)"
                  : "#ffffff",
                border: plan.popular
                  ? "2px solid #22c55e"
                  : "1.5px solid #e2e8f0",
                boxShadow: plan.popular
                  ? `0 0 60px ${plan.glow}, 0 20px 60px rgba(0,0,0,0.08)`
                  : "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-400 blur-md rounded-full opacity-40" />
                    <span className="relative flex items-center gap-1.5 bg-green-500 text-white text-[10px] sm:text-xs font-bold px-4 sm:px-5 py-1.5 rounded-b-xl shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Inner glow accent bar (top) */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                style={{ background: plan.popular ? `linear-gradient(90deg, transparent, ${plan.accent}, transparent)` : "transparent" }}
              />

              {/* Card inner glow blob */}
              {plan.popular && (
                <div
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-[50px] pointer-events-none"
                  style={{ background: plan.accentLight }}
                />
              )}

              <div className={cn("relative z-10 p-6 sm:p-8 flex flex-col h-full", plan.popular ? "pt-10 sm:pt-12" : "")}>
                {/* Top Icon */}
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6"
                  style={{
                    background: plan.popular ? "rgba(34,197,94,0.1)" : "rgba(0,0,0,0.03)",
                    border: plan.popular ? "1px solid rgba(34,197,94,0.3)" : "1px solid rgba(0,0,0,0.06)"
                  }}
                >
                  <plan.TopIcon
                    className={cn("w-5 h-5 sm:w-6 sm:h-6", plan.popular ? "text-green-500" : "text-slate-400")}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Plan name */}
                <h3 className={cn(
                  "text-lg sm:text-xl font-bold mb-1",
                  plan.popular ? "text-slate-900" : "text-slate-700"
                )}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <span
                    className={cn(
                      "text-3xl sm:text-4xl md:text-5xl font-black tracking-tight",
                      plan.popular ? "text-green-500" : "text-slate-900"
                    )}
                  >
                    {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-500 text-xs sm:text-sm">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: plan.popular ? "#22c55e" : "#94a3b8" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Bottom Icon */}
                <div className="mt-auto flex justify-end opacity-20">
                  <plan.BottomIcon
                    className={cn("w-8 h-8 sm:w-10 sm:h-10", plan.popular ? "text-green-500" : "text-slate-400")}
                    strokeWidth={1.2}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center mt-10 sm:mt-25"
        >
          <div className="relative group cursor-pointer">
            {/* Outer animated glow */}
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute -inset-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition duration-300"
            />
            <button className="relative flex items-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-base sm:text-xl rounded-full border border-green-400/30 shadow-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
              Start Your Website Today
            </button>

            {/* Limited Time badge */}
            <div className="absolute -top-3 -right-2 sm:-right-6 ">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 blur-sm rounded-full opacity-40" />
                <span className="relative bg-white border border-green-200 text-green-600 text-[9px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow whitespace-nowrap">
                  Limited Time Offer
                </span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
