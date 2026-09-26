"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import WorkCard from "@/components/work-card"
import FloatingGirl from "@/components/floating-girl"
import TerminalUI from "@/components/terminal-ui"
import { GlitchText } from "@/components/glitch-text"
import { useParallax } from "@/hooks/use-parallax"
import { useSecretCode } from "@/hooks/use-secret-code"
import { cn } from "@/lib/utils"
import AsciiLoader from "@/components/ascii-loader"
import GlitchTransition from "@/components/glitch-transition"
import ThemeSwitcher from "@/components/theme-switcher"
import LanguageSwitcher from "@/components/language-switcher"
import ProfileSection from "@/components/profile-section"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { works, categories, siteConfig, profileData } from "@/data/portfolio-data"
import { Book, Github, Menu, X } from "lucide-react"

function PortfolioContent() {
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("featured")
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { ref } = useParallax()
  const secretCodeActivated = useSecretCode()
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const [loadingPhase, setLoadingPhase] = useState<"ascii" | "glitch" | "complete">("ascii")

  useEffect(() => {
    // First phase: ASCII loader
    const asciiTimer = setTimeout(() => {
      setLoadingPhase("glitch")

      // Second phase: Glitch transition
      const glitchTimer = setTimeout(() => {
        setLoadingPhase("complete")
        setLoading(false)
      }, 1800) // Give enough time for glitch transition to complete

      return () => clearTimeout(glitchTimer)
    }, 2000)

    return () => clearTimeout(asciiTimer)
  }, [])

  if (loading) {
    return (
      <>
        {loadingPhase === "ascii" && <AsciiLoader />}
        {loadingPhase === "glitch" && <GlitchTransition />}
      </>
    )
  }

  const currentCategory = categories.find((cat) => cat.id === activeCategory) || categories[0]

  return (
    <div
      ref={ref}
      className={cn(
        "min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-300",
        currentTheme.gradientBg,
        currentTheme.textColor,
        currentTheme.styles.includes("crt") &&
          "after:content-[''] after:pointer-events-none after:fixed after:inset-0 after:bg-[url('/images/crt-overlay.png')] after:bg-cover after:opacity-20 after:z-50",
      )}
    >
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 p-4 md:p-6 flex justify-between items-center backdrop-blur-sm transition-colors duration-300",
          currentTheme.headerBg,
        )}
      >
        <div>
          <GlitchText className={cn("text-xl md:text-2xl font-bold", currentTheme.accentColor)}>didvc</GlitchText>
          <p className={cn("text-xs md:text-sm", currentTheme.secondaryColor)}>
            {currentTheme.styles.includes("dark") ? "Some days feel like static..." : "Coding in watercolor."}
          </p>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X size={24} className={currentTheme.accentColor} />
          ) : (
            <Menu size={24} className={currentTheme.accentColor} />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-3 py-1 text-sm rounded-md transition-all",
                activeCategory === cat.id
                  ? cn("text-white", currentTheme.styles.includes("dark") ? "bg-pink-500" : "bg-blue-500")
                  : cn(
                      currentTheme.buttonBg,
                      currentTheme.styles.includes("dark")
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-blue-700 hover:bg-blue-200",
                    ),
              )}
            >
              {cat.icon} {cat.id === "featured" ? t.featured : cat.id === "all" ? t.allProjects : t.experimental}
            </button>
          ))}
          <Link
            href="/wiki"
            className={cn(
              "px-3 py-1 text-sm rounded-md transition-all flex items-center gap-1",
              currentTheme.buttonBg,
              currentTheme.styles.includes("dark")
                ? "text-gray-300 hover:bg-gray-700"
                : "text-blue-700 hover:bg-blue-200",
            )}
          >
            <Book size={14} /> {t.wiki}
          </Link>
          <button
            onClick={() => setTerminalOpen(!terminalOpen)}
            className={cn(
              "p-2 rounded-md transition-colors",
              currentTheme.buttonBg,
              currentTheme.styles.includes("dark") ? "hover:bg-gray-700" : "hover:bg-blue-200",
            )}
            aria-label={t.terminal}
          >
            <span className={currentTheme.styles.includes("dark") ? "text-green-400" : "text-blue-600"}>{">"}_</span>
          </button>
          <ThemeSwitcher />
          <LanguageSwitcher />
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-md transition-colors",
              currentTheme.buttonBg,
              currentTheme.styles.includes("dark") ? "hover:bg-gray-700" : "hover:bg-blue-200",
            )}
            aria-label={t.github}
          >
            <Github size={18} className={currentTheme.styles.includes("dark") ? "text-gray-300" : "text-blue-700"} />
          </a>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className={cn(
              "fixed inset-0 top-16 z-30 p-4 md:hidden transition-colors duration-300",
              currentTheme.headerBg,
            )}
          >
            <nav className="flex flex-col gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    "px-4 py-3 text-left text-base rounded-md transition-all flex items-center gap-2",
                    activeCategory === cat.id
                      ? cn("text-white", currentTheme.styles.includes("dark") ? "bg-pink-500" : "bg-blue-500")
                      : cn(
                          currentTheme.buttonBg,
                          currentTheme.styles.includes("dark")
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-blue-700 hover:bg-blue-200",
                        ),
                  )}
                >
                  <span>{cat.icon}</span>{" "}
                  {cat.id === "featured" ? t.featured : cat.id === "all" ? t.allProjects : t.experimental}
                </button>
              ))}
              <Link
                href="/wiki"
                className={cn(
                  "px-4 py-3 text-left text-base rounded-md transition-all flex items-center gap-2",
                  currentTheme.buttonBg,
                  currentTheme.styles.includes("dark")
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-blue-700 hover:bg-blue-200",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Book size={16} /> {t.wiki}
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => {
                    setTerminalOpen(!terminalOpen)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    "flex-1 p-3 rounded-md transition-colors flex items-center justify-center gap-2",
                    currentTheme.buttonBg,
                    currentTheme.styles.includes("dark") ? "hover:bg-gray-700" : "hover:bg-blue-200",
                  )}
                  aria-label={t.terminal}
                >
                  <span className={currentTheme.styles.includes("dark") ? "text-green-400" : "text-blue-600"}>
                    {">"}_
                  </span>
                  <span>{t.terminal}</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
              <div className="mt-2">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex-1 p-3 rounded-md transition-colors flex items-center justify-center gap-2",
                    currentTheme.buttonBg,
                    currentTheme.styles.includes("dark") ? "hover:bg-gray-700" : "hover:bg-blue-200",
                  )}
                  aria-label={t.github}
                >
                  <Github
                    size={18}
                    className={currentTheme.styles.includes("dark") ? "text-gray-300" : "text-blue-700"}
                  />
                  <span>{t.github}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <section
          className={cn(
            "mb-16 p-8 rounded-xl backdrop-blur-sm shadow-lg",
            currentTheme.styles.includes("dark") ? "bg-black/50" : "bg-white/80",
          )}
        >
          <h1
            className={cn(
              "text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text",
              currentTheme.styles.includes("dark")
                ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
            )}
          >
            {currentTheme.styles.includes("dark") ? t.welcomeDigital : t.welcomeKawaii}
          </h1>
          <p
            className={cn(
              "text-xl max-w-3xl",
              currentTheme.styles.includes("dark") ? "text-gray-300" : "text-blue-700",
            )}
          >
            {t.portfolioDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/wiki"
              className={cn(
                "px-4 py-2 rounded-md transition-colors flex items-center gap-2",
                currentTheme.styles.includes("dark")
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200",
              )}
            >
              <Book size={16} /> {t.documentation}
            </Link>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-4 py-2 rounded-md transition-colors flex items-center gap-2",
                currentTheme.styles.includes("dark")
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200",
              )}
            >
              <Github size={16} /> {t.githubRepo}
            </a>
          </div>
        </section>

        {/* Profile Section - Top position */}
        {profileData.position === "top" && <ProfileSection />}

        <section className="mb-16">
          <div
            className={cn(
              "flex items-center gap-2 mb-6 p-4 rounded-lg backdrop-blur-sm",
              currentTheme.styles.includes("dark") ? "bg-black/50" : "bg-white/80",
            )}
          >
            <h2
              className={cn(
                "text-2xl font-bold",
                currentTheme.styles.includes("dark") ? "text-white" : "text-blue-700",
              )}
            >
              {currentCategory.id === "featured"
                ? t.featured
                : currentCategory.id === "all"
                  ? t.allProjects
                  : t.experimental}
            </h2>
            {currentCategory.description && (
              <p className={cn("text-sm", currentTheme.styles.includes("dark") ? "text-gray-400" : "text-blue-500")}>
                {currentCategory.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.works.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </section>

        {/* Profile Section - Bottom position */}
        {profileData.position === "bottom" && <ProfileSection />}
      </main>

      {/* Floating anime girl */}
      {currentTheme.features.includes("floating-girl") && currentTheme.floatingGirl && (
        <FloatingGirl girl={currentTheme.floatingGirl} secretCodeActivated={secretCodeActivated} />
      )}

      {/* Terminal UI */}
      {currentTheme.enableTerminalCommands && terminalOpen && (
        <TerminalUI onClose={() => setTerminalOpen(false)} works={works} onSelectCategory={setActiveCategory} />
      )}

      {/* Footer */}
      <footer
        className={cn(
          "fixed bottom-0 left-0 right-0 p-4 text-center text-sm backdrop-blur-sm transition-colors duration-300",
          currentTheme.footerBg,
          currentTheme.styles.includes("dark") ? "text-gray-500" : "text-blue-500",
        )}
      >
        <p>
          {t.copyright} {currentTheme.styles.includes("dark") ? t.weltschmerz : t.crystalline} •{" "}
          <Link href="/wiki" className="hover:underline">
            {t.wiki}
          </Link>{" "}
          •{" "}
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}

export default function Portfolio() {
  return <PortfolioContent />
}
