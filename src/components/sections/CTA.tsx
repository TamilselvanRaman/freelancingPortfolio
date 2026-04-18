"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import ContactForm from "../ContactForm";
import { GitHubLogo, LinkedInLogo, TwitterLogo } from "../Icons";

export default function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Available for new projects</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[0.9] mb-8"
          >
            Let’s Engineer Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
              Next Success.
            </span>
          </motion.h2>
        </div>

        {/* High-Impact Contact Box */}
        <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] border border-slate-800">
          {/* Immersive background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12">
            
            {/* Contact Info Side */}
            <div className="p-8 sm:p-12 lg:p-20 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Strategic Partnership</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Whether you're launching a new venture or scaling an existing enterprise, 
                  I provide the technical expertise to ensure your digital success.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300">
                    <Mail className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Email</p>
                    <p className="text-white font-bold group-hover:text-emerald-400 transition-colors">stamil096@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300">
                    <Phone className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Mobile</p>
                    <p className="text-white font-bold group-hover:text-emerald-400 transition-colors">+91 91596 05210</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Based In</p>
                    <p className="text-white font-bold">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-16 grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
                <div>
                  <p className="text-3xl font-black text-white mb-1">100%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Confidentiality</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white mb-1">24h</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Response Time</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8 sm:p-12 lg:p-20 lg:col-span-7 bg-slate-900/50 backdrop-blur-sm">
              <div className="mb-10">
                <h4 className="text-xl font-bold text-white mb-2">Initialize Project</h4>
                <p className="text-slate-500 text-sm">Fill out the form below and I'll get back to you with a strategic proposal.</p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
