"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
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
        "sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md",
        scrolled ? "bg-white/80 shadow-sm border-b border-slate-200/50" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 md:px-8" aria-label="Global">
        <div className="flex md:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold tracking-tight text-slate-900">
            Tamil<span className="text-green-600">Selvan</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium leading-6 text-slate-700 hover:text-green-600 transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link href="#contact">
            <Button>Start Project</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:px-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold tracking-tight" onClick={() => setMobileMenuOpen(false)}>
              Tamil<span className="text-green-600">Selvan</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Start Project</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
