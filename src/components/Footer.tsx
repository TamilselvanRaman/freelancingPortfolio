import * as React from "react";
import Link from "next/link";
import { Mail, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-2">
              Tamil<span className="text-green-500">Selvan</span>
            </Link>
            <p className="text-slate-400 max-w-sm">
              Full-stack developer focused on building fast, scalable, and high-quality web applications without unnecessary delays.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center justify-center">
                <span className="sr-only">GitHub</span>
                <Globe className="h-6 w-6" />
              </a>
              <a href="mailto:hello@example.com" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              Based in India. Available for worldwide freelance opportunities.
            </p>
          </div>

        </div>
        
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Tamil Selvan. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
