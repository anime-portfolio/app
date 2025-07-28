"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { PortfolioPageProperties } from "@/types"

// Define our themes
export const lainTheme: PortfolioPageProperties = {
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
    id: "lain",
    name: "Lain",
    description: "Your digital companion who knows too much about the Wired",
    image: "https://yuis.xsrv.jp/images/ss/lain_bgr_drawing.png",
    floatingStyle: "glitchy",
    mood: "mysterious",
    phrases: [
      "Present day... Present time!",
      "Everything is connected in the Wired.",
      "Who are you really?",
      "Let me show you something interesting...",
    ],
    interactionTriggers: ["hover", "click", "konami-code"],
    themeAffinity: ["hacker", "dark"],
  },
  backgroundMusic: "/audio/cyberia-mix.mp3",
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

export const luckyStarTheme: PortfolioPageProperties = {
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
    id: "konata",
    name: "Konata",
    description: "Your otaku companion who knows too much about anime and games",
    image: "https://yuis.xsrv.jp/images/ss/konata_bgr_drawing.png",
    floatingStyle: "hover",
    mood: "cheerful",
    phrases: [
      "I'm not lazy, I'm just conserving energy!",
      "Games and anime are my life!",
      "Did you know I'm an expert at RPGs?",
      "Let me show you my collection...",
    ],
    interactionTriggers: ["hover", "click", "konami-code"],
    themeAffinity: ["moe", "pink"],
  },
  backgroundMusic: "/audio/lucky-star-theme.mp3",
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
  themeName: "lain" | "luckystar"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<"lain" | "luckystar">("luckystar")
  const [currentTheme, setCurrentTheme] = useState<PortfolioPageProperties>(luckyStarTheme)

  useEffect(() => {
    setCurrentTheme(themeName === "lain" ? lainTheme : luckyStarTheme)
  }, [themeName])

  const toggleTheme = () => {
    setThemeName(themeName === "lain" ? "luckystar" : "lain")
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
