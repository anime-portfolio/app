"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"

export default function AsciiLoader() {
  const [frame, setFrame] = useState(0)
  const [loadingText, setLoadingText] = useState("Loading")
  const { currentTheme } = useTheme()
  const isDark = currentTheme.styles.includes("dark")

  const frames = [
    `
    ⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏
    ⣾⣽⣻⢿⡿⣟⣯⣷
    `,
    `
     /\\_/\\
    ( o.o )
     > ^ <
    `,
    `
      /\\_/\\
     ( o.o )
      > ^ <
    `,
    `
       /\\_/\\
      ( o.o )
       > ^ <
    `,
    `
        /\\_/\\
       ( ^.^ )
        > ^ <
    `,
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length)
    }, 300)

    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === "Loading...") return "Loading"
        return prev + "."
      })
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [frames.length])

  return (
    <div
      className={cn("fixed inset-0 flex flex-col items-center justify-center z-50", isDark ? "bg-black" : "bg-blue-50")}
    >
      <pre className={cn("font-mono text-xl md:text-2xl whitespace-pre", isDark ? "text-pink-500" : "text-blue-500")}>
        {frames[frame]}
      </pre>
      <div className={cn("font-mono mt-4 text-xl", isDark ? "text-pink-300" : "text-blue-400")}>{loadingText}</div>
      <div className={cn("mt-8 w-64 h-2 rounded-full overflow-hidden", isDark ? "bg-gray-800" : "bg-blue-100")}>
        <div
          className={cn(
            "h-full rounded-full",
            isDark ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gradient-to-r from-blue-500 to-purple-500",
          )}
          style={{
            width: `${(frame / (frames.length - 1)) * 100}%`,
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  )
}
