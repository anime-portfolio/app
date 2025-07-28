"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const { currentTheme } = useTheme()
  const isDark = currentTheme.styles.includes("dark")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en")
  }

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "rounded-md transition-colors flex items-center gap-2",
        isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-100 hover:bg-blue-200",
        "flex-1 md:flex-none p-3 md:p-2",
      )}
      aria-label={language === "en" ? t.switchToJapanese : t.switchToEnglish}
    >
      <Globe size={16} className={isDark ? "text-gray-300" : "text-blue-600"} />
      <span className={cn("text-xs", isDark ? "text-white" : "text-blue-600")}>
        {language === "en" ? "日本語" : "English"}
      </span>
    </button>
  )
}
