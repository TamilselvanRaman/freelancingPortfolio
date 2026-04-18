import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg hover:shadow-green-600/20": variant === "default",
            "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg": variant === "secondary",
            "border border-slate-200 bg-white text-slate-900 hover:bg-slate-100": variant === "outline",
            "hover:bg-slate-100 text-slate-700 hover:text-slate-900": variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-12 px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
