"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "Tamil Selvan transformed our vision into reality. The UI quality is exceptional, and the web app loads incredibly fast. Professional, communicative, and delivered ahead of schedule.",
    author: "Sarah J.",
    role: "Startup Founder",
    rating: 5,
    gradient: "from-green-50 to-emerald-50",
    avatarGradient: "from-green-400 to-emerald-500",
    border: "border-green-100",
    glow: "rgba(34,197,94,0.12)",
  },
  {
    content:
      "One of the best developers I've worked with. He understood exactly what we needed and built a scalable solution that our users love. Highly recommend for any serious project.",
    author: "Michael T.",
    role: "Product Manager",
    rating: 5,
    gradient: "from-blue-50 to-indigo-50",
    avatarGradient: "from-blue-400 to-indigo-500",
    border: "border-blue-100",
    glow: "rgba(99,102,241,0.12)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-24 bg-slate-50 overflow-hidden">

      {/* Background subtle pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />

      {/* Ambient glow top */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-green-100/50 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-blue-100/40 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-green-500 mb-3"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 tracking-tight"
          >
            What Clients{" "}
            <span className="text-green-500">Say.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto"
          >
            Real feedback from real clients who trusted the process.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative bg-gradient-to-br ${t.gradient} border ${t.border} rounded-2xl sm:rounded-3xl p-7 sm:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}
              style={{
                boxShadow: `0 4px 30px ${t.glow}`
              }}
            >
              {/* Large decorative quote watermark */}
              <div className="absolute -top-4 -right-2 text-[120px] sm:text-[160px] font-black leading-none select-none pointer-events-none opacity-10 text-slate-900">
                "
              </div>

              {/* Stars */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex gap-1 mb-5"
              >
                {[...Array(t.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 + i * 0.06, type: "spring", stiffness: 300 }}
                  >
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote text */}
              <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8 relative z-10 font-medium">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-12 h-px bg-slate-300 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-md`}
                >
                  {t.author.charAt(0)}
                  {/* Shine */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{t.author}</h4>
                  <p className="text-xs sm:text-sm text-slate-500">{t.role}</p>
                </div>

                {/* Verified badge */}
                <div className="ml-auto">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/70 border border-green-100 text-green-600 text-[10px] sm:text-xs font-semibold rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["S","M","A"].map((l, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                  {l}
                </div>
              ))}
            </div>
            <span className="text-slate-600 text-sm font-medium">Happy Clients</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-slate-300" />
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-slate-600 text-sm font-medium">5.0 Average Rating</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-slate-300" />
          <span className="text-slate-600 text-sm font-medium">100% Satisfaction Guarantee</span>
        </motion.div>

      </div>
    </section>
  );
}
