"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
  onHoverOnly?: boolean
}

export function GlitchText({ children, className, intensity = "medium", onHoverOnly = false }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(!onHoverOnly)

  useEffect(() => {
    if (onHoverOnly) return

    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [onHoverOnly])

  const getIntensityStyles = () => {
    switch (intensity) {
      case "low":
        return "before:left-[1px] after:left-[-1px] before:text-pink-400 after:text-cyan-400"
      case "high":
        return "before:left-[3px] after:left-[-3px] before:text-red-500 after:text-blue-500"
      default: // medium
        return "before:left-[2px] after:left-[-2px] before:text-pink-500 after:text-cyan-500"
    }
  }

  return (
    <span
      className={cn(
        "relative inline-block",
        onHoverOnly &&
          "hover:text-transparent hover:before:content-[attr(data-text)] hover:after:content-[attr(data-text)]",
        isGlitching && "text-transparent",
        className,
      )}
      data-text={typeof children === "string" ? children : undefined}
      onMouseEnter={() => onHoverOnly && setIsGlitching(true)}
      onMouseLeave={() => onHoverOnly && setIsGlitching(false)}
    >
      {children}
      {(isGlitching || onHoverOnly) && (
        <>
          <span
            className={cn(
              "absolute top-0 left-0 w-full h-full before:content-[attr(data-text)] before:absolute before:top-0 before:w-full before:h-full before:z-[-1]",
              getIntensityStyles(),
            )}
            data-text={typeof children === "string" ? children : undefined}
          />
          <span
            className={cn(
              "absolute top-0 left-0 w-full h-full after:content-[attr(data-text)] after:absolute after:top-0 after:w-full after:h-full after:z-[-2]",
              getIntensityStyles(),
            )}
            data-text={typeof children === "string" ? children : undefined}
          />
        </>
      )}
    </span>
  )
}
