"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"

export default function GlitchTransition() {
  const [show, setShow] = useState(true)
  const { currentTheme } = useTheme()
  const isDark = currentTheme.styles.includes("dark")

  useEffect(() => {
    // Hide the transition after a delay
    const timer = setTimeout(() => {
      setShow(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, delay: 1.2 },
          }}
        >
          <motion.div
            className={cn(
              "relative text-4xl md:text-6xl font-bold glitch-text",
              isDark ? "text-pink-500" : "text-blue-500",
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0.5, 1, 0],
              y: [20, 0, 0, 5, 0, -20],
              x: [0, 0, 5, -5, 0, 0],
              filter: ["blur(0px)", "blur(0px)", "blur(2px)", "blur(0px)", "blur(1px)", "blur(0px)"],
            }}
            transition={{
              duration: 1.2,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            }}
          >
            <span className="relative inline-block">
              <span
                className={cn("absolute top-0 left-0 w-full h-full", isDark ? "text-pink-300" : "text-purple-300")}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-5px, -5px)" }}
              >
                .fumiya.tsx
              </span>
              <span
                className={cn("absolute top-0 left-0 w-full h-full", isDark ? "text-cyan-300" : "text-pink-300")}
                style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)", transform: "translate(5px, 5px)" }}
              >
                .fumiya.tsx
              </span>
              <span>.fumiya.tsx</span>
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
