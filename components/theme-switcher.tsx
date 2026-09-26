"use client"

import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ThemeSwitcher() {
  const { themeName, toggleTheme, currentTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = currentTheme.styles.includes("dark")

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "rounded-md transition-colors flex items-center gap-2",
        isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-100 hover:bg-blue-200",
        "flex-1 md:flex-none p-3 md:p-2",
      )}
      aria-label={`Switch to ${isDark ? "Crystalline" : "Weltschmerz"} theme`}
    >
      {isDark ? (
        <>
          <Sun size={16} className="text-yellow-400" />
          <span className="text-xs text-white">{t.crystalline}</span>
        </>
      ) : (
        <>
          <Moon size={16} className="text-purple-600" />
          <span className="text-xs text-blue-600">{t.weltschmerz}</span>
        </>
      )}
    </button>
  )
}
