"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { PortfolioPageProperties } from "@/types"

// Define our themes
export const weltschmerzTheme: PortfolioPageProperties = {
  type: "fullscreen",
  styles: ["anime", "dark", "hacker", "neon"],
  features: [
    "floating-girl",
    "glitch-transition",
    "ascii-loader",
    "easter-eggs",
    "3d-mouse-parallax",
    "bgm",
    "konami-code",
  ],
  floatingGirl: {
    id: "weltschmerz",
    name: "Weltschmerz-chan",
    description: "A quiet girl who feels the weight of the world",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/weltschmerz.png`,
    floatingStyle: "glitchy",
    mood: "mysterious",
    phrases: [
      "Some days the world feels heavy.",
      "Ink dries, but the stain stays.",
      "Stay a little longer, if you like.",
      "Let me show you something quiet...",
    ],
    interactionTriggers: ["hover", "click", "konami-code"],
    themeAffinity: ["hacker", "dark"],
  },
  enableTerminalCommands: true,
  cursorStyle: "glitch",
  gradientBg: "bg-gradient-to-br from-gray-900 via-purple-900 to-black",
  textColor: "text-white",
  cardBg: "bg-gray-900",
  cardBorder: "border-gray-800",
  cardHoverBorder: "border-pink-500",
  buttonBg: "bg-gray-800",
  buttonHoverBg: "bg-gray-700",
  accentColor: "text-pink-500",
  secondaryColor: "text-gray-400",
  headerBg: "bg-black/70",
  footerBg: "bg-black/70",
}

export const crystallineTheme: PortfolioPageProperties = {
  type: "fullscreen",
  styles: ["anime", "moe", "pink", "minimal"],
  features: [
    "floating-girl",
    "glitch-transition",
    "ascii-loader",
    "easter-eggs",
    "3d-mouse-parallax",
    "bgm",
    "konami-code",
  ],
  floatingGirl: {
    id: "crystalline",
    name: "Crystalline-chan",
    description: "A watercolor girl who walks with a deer made of glass",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/crystalline.png`,
    floatingStyle: "hover",
    mood: "cheerful",
    phrases: [
      "Everything looks clearer through glass.",
      "Did you see the deer? It's made of light.",
      "Colors bleed, and that's the best part.",
      "Let me show you something that sparkles...",
    ],
    interactionTriggers: ["hover", "click", "konami-code"],
    themeAffinity: ["moe", "pink"],
  },
  enableTerminalCommands: true,
  cursorStyle: "default",
  gradientBg: "bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100",
  textColor: "text-blue-900",
  cardBg: "bg-white",
  cardBorder: "border-blue-200",
  cardHoverBorder: "border-blue-500",
  buttonBg: "bg-blue-100",
  buttonHoverBg: "bg-blue-200",
  accentColor: "text-blue-600",
  secondaryColor: "text-blue-400",
  headerBg: "bg-white/70",
  footerBg: "bg-white/70",
}

type ThemeContextType = {
  currentTheme: PortfolioPageProperties
  themeName: "weltschmerz" | "crystalline"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<"weltschmerz" | "crystalline">("crystalline")
  const [currentTheme, setCurrentTheme] = useState<PortfolioPageProperties>(crystallineTheme)

  useEffect(() => {
    setCurrentTheme(themeName === "weltschmerz" ? weltschmerzTheme : crystallineTheme)
  }, [themeName])

  const toggleTheme = () => {
    setThemeName(themeName === "weltschmerz" ? "crystalline" : "weltschmerz")
  }

  return <ThemeContext.Provider value={{ currentTheme, themeName, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
