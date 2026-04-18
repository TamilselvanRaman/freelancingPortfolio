import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: "white" | "slate" | "dark";
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
        "py-16 md:py-24 scroll-mt-20",
        {
          "bg-white": bg === "white",
          "bg-slate-50": bg === "slate",
          "bg-slate-900 text-white": bg === "dark",
        },
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}
