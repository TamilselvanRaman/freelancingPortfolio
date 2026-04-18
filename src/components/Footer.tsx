import * as React from "react";
import Link from "next/link";
import { Mail, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
              Tamil<span className="text-green-600">Selvan</span>
            </Link>
            <p className="text-slate-500 max-w-sm">
              Full-stack developer focused on building fast, scalable, and high-quality web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-5">
              <a href="#" className="p-3 bg-white rounded-full text-slate-400 hover:text-slate-900 shadow-sm border border-slate-200 transition-all hover:scale-110">
                <span className="sr-only">GitHub</span>
                <Globe className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" className="p-3 bg-white rounded-full text-slate-400 hover:text-slate-900 shadow-sm border border-slate-200 transition-all hover:scale-110">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-slate-500 text-sm font-medium">
              Available for worldwide freelance opportunities.
            </p>
          </div>

        </div>
        
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-slate-400">
            &copy; {currentYear} Tamil Selvan. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm font-medium text-slate-400">
            <Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
