"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDragOver' | 'onDragEnter' | 'onDragLeave' | 'onDrop' | 'onScroll' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onTransitionEnd'> {
  variant?: "default" | "outline" | "ghost" | "secondary" | "corporate" | "premium" | "ultra";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Magnetic effect spring configs
    const springConfig = { damping: 20, stiffness: 150 };
    const magneticX = useSpring(useMotionValue(0), springConfig);
    const magneticY = useSpring(useMotionValue(0), springConfig);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // Update spotlight position (relative to top-left)
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
      
      // Update magnetic position (relative to center, limited range)
      if (variant === "premium" || variant === "ultra") {
        magneticX.set(x * 0.15);
        magneticY.set(y * 0.15);
      }
    }

    function handleMouseLeave() {
      magneticX.set(0);
      magneticY.set(0);
    }

    return (
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          x: magneticX,
          y: magneticY,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}

        className={cn(
          "inline-flex items-center justify-center rounded-2xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 overflow-hidden relative group",
          {
            "bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_10px_20px_-10px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)]": variant === "default",
            "bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/20": variant === "secondary",
            "bg-slate-950 text-white border border-slate-800 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:border-emerald-500/30 transition-all": variant === "corporate",
            "bg-slate-950/95 backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:border-emerald-500/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-700": variant === "premium",
            "bg-black text-white border border-white/5 shadow-2xl hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] transition-all duration-500": variant === "ultra",
            "border-2 border-slate-200 bg-transparent text-slate-900 hover:bg-slate-50 hover:border-slate-300": variant === "outline",
            "hover:bg-slate-100 text-slate-600 hover:text-slate-900": variant === "ghost",
            "h-11 px-6": size === "default",
            "h-9 px-4 text-xs": size === "sm",
            "h-16 px-12 text-lg tracking-tighter": size === "lg",
            "h-11 w-11": size === "icon",
          },
          className
        )}
        {...props}
      >
        {/* Premium & Ultra Shared Material Effects */}
        {(variant === "premium" || variant === "ultra") && (
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] z-0" />
        )}

        {/* Premium Variant Effects */}
        {variant === "premium" && (
          <>
            <motion.div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    350px circle at ${mouseX}px ${mouseY}px,
                    rgba(16,185,129,0.15),
                    transparent 80%
                  )
                `,
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Shimmer sweep effect */}
            <motion.div 
              initial={{ x: "-150%", skewX: -45 }}
              whileHover={{ x: "150%" }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 w-1/2"
            />
            
            {/* Interactive Glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-700" />
            
            {/* Glossy Top Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
          </>
        )}

        {/* Ultra Variant Effects (The wow factor) */}
        {variant === "ultra" && (
          <>
            {/* Spotlight tracking for Ultra */}
            <motion.div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    400px circle at ${mouseX}px ${mouseY}px,
                    rgba(16,185,129,0.25),
                    transparent 80%
                  )
                `,
              }}
            />


            {/* Border Beam Animation */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#10b981_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <div className="absolute inset-[1px] bg-black rounded-2xl z-0" />
            
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        )}


        <span className={cn(
          "relative z-10 flex items-center gap-3 transition-colors duration-300",
          variant === "premium" && "group-hover:text-emerald-50",
          variant === "ultra" && "bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
        )}>
          {props.children}
        </span>
      </motion.button>
    )


  }
)
Button.displayName = "Button"

export { Button }



