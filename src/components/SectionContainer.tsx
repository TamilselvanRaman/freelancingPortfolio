import * as React from "react";
import { cn } from "@/lib/utils";

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
        "py-8 md:py-12 scroll-mt-20 px-4 sm:px-6",
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          "mx-auto max-w-6xl", // slightly smaller max-w so the cards aren't too huge
          {
            "bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 md:p-12": bg === "white",
            "bg-slate-50 rounded-[2rem] p-6 md:p-12": bg === "slate",
            "bg-slate-900 text-white rounded-[2rem] p-6 md:p-12": bg === "dark",
            "": bg === "transparent"
          }
        )}
      >
        {children}
      </div>
    </section>
  );
}
