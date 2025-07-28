"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { en } from "@/lib/i18n/en"
import { ja } from "@/lib/i18n/ja"

type Language = "en" | "ja"
type Translations = typeof en

type LanguageContextType = {
  language: Language
  t: Translations
  setLanguage: (language: Language) => void
}

const translations = {
  en,
  ja,
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [t, setTranslations] = useState<Translations>(translations.en)

  useEffect(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ja")) {
      setLanguageState(savedLanguage)
      setTranslations(translations[savedLanguage])
    } else {
      // Check browser language
      const browserLanguage = navigator.language.split("-")[0]
      if (browserLanguage === "ja") {
        setLanguageState("ja")
        setTranslations(translations.ja)
      }
    }
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    setTranslations(translations[newLanguage])
    localStorage.setItem("language", newLanguage)
  }

  return <LanguageContext.Provider value={{ language, t, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
