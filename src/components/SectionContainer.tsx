import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: "white" | "slate" | "dark" | "transparent";
}

export default function SectionContainer({
  children,
  id,
  className,
  bg = "white",
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 scroll-mt-0",
        {
          "bg-white": bg === "white",
          "bg-slate-50 border-y border-slate-100": bg === "slate",
          "bg-slate-900 text-white": bg === "dark",
          "": bg === "transparent"
        },
        className
      )}
      {...props}
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
