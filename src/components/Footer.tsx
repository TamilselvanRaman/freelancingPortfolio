"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GitHubLogo, LinkedInLogo, TwitterLogo } from "./Icons";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="text-3xl font-black tracking-tighter text-slate-900 mb-6 group">
              Tamil<span className="text-emerald-600 group-hover:text-blue-600 transition-colors">Selvan.</span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-8">
              Strategically engineering digital solutions for ambitious brands. Focused on high-performance architectures and premium user experiences.
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -4 }}
                href="https://github.com/TamilselvanRaman/" 
                target="_blank"
                className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm"
              >
                <GitHubLogo />
              </motion.a>
              <motion.a 
                whileHover={{ y: -4 }}
                href="https://www.linkedin.com/in/tamilselvan-raman-758a45291/" 
                target="_blank"
                className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm"
              >
                <LinkedInLogo />
              </motion.a>
              <motion.a 
                whileHover={{ y: -4 }}
                href="https://twitter.com/tamilselvan" 
                target="_blank"
                className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm"
              >
                <TwitterLogo />
              </motion.a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Services</h4>
              <Link href="#services" className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">Web Development</Link>
              <Link href="#services" className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">UI/UX Strategy</Link>
              <Link href="#services" className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">Mobile Solutions</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Company</h4>
              <Link href="#portfolio" className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">Portfolio</Link>
              <Link href="#pricing" className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">Pricing Plans</Link>
              <Link href="#results" className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">Client Results</Link>
            </div>
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contact</h4>
              <a href="mailto:ceittamilselvanr26@gmail.com" className="group flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                <Mail className="w-4 h-4" />
                Email Me
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                Available for worldwide freelance <br /> opportunities and partnerships.
              </p>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
            &copy; {currentYear} TAMIL SELVAN. ENGINEERED FOR EXCELLENCE.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
