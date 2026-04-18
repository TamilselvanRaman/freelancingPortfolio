"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumSparkle } from "./Icons";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Results", href: "#results" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
];

interface NavbarProps {
  onContactClick?: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <nav 
          className={cn(
            "relative flex items-center justify-between transition-all duration-500 rounded-[2rem] px-6 py-2.5 sm:px-8 sm:py-3",
            scrolled 
              ? "bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]" 
              : "bg-transparent border border-transparent"
          )} 
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link 
              href="/" 
              className="flex items-center gap-2 group transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                <span className="text-white font-black text-lg">T</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                Tamil<span className="text-emerald-600 group-hover:text-slate-900 transition-colors">Selvan.</span>
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-xl p-2.5 transition-colors",
                scrolled ? "text-slate-700 hover:bg-slate-100" : "text-slate-900 hover:bg-white/10"
              )}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-1 items-center">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="relative px-4 py-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-1/3 rounded-full opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button 
              variant="premium"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-4 py-2.5 rounded-full flex items-center gap-2"
            >
              <span className="ml-4">Book a strategic call</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" 
              onClick={() => setMobileMenuOpen(false)} 
            />
            
            <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                    <span className="text-white font-black text-lg">T</span>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-slate-900">
                    Tamil<span className="text-emerald-600">Selvan.</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {navigation.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between group p-4 rounded-2xl border border-slate-50 hover:border-emerald-100 hover:bg-emerald-50/30 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {item.name}
                        </span>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-slate-100">
                <Button 
                  variant="premium"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full rounded-2xl py-6 text-lg font-bold flex items-center justify-center gap-3"
                >
                  Book a strategic call
                </Button>
                <p className="mt-4 text-center text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  Currently accepting new projects
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

