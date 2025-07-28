"use client"

import { useState } from "react"
import Image from "next/image"
import type { Work } from "@/types"
import { GlitchText } from "./glitch-text"
import { cn } from "@/lib/utils"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

interface WorkCardProps {
  work: Work
}

export default function WorkCard({ work }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = currentTheme.styles.includes("dark")

  const nextImage = () => {
    if (work.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % work.images.length)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border transition-all duration-300 shadow-lg",
        currentTheme.cardBg,
        isHovered ? currentTheme.cardHoverBorder : currentTheme.cardBorder,
        isHovered && (isDark ? "shadow-pink-500/20" : "shadow-blue-500/20"),
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={work.images[currentImageIndex] || "/placeholder.svg?height=400&width=600"}
          alt={work.title}
          width={600}
          height={400}
          className={cn("object-cover transition-transform duration-700", isHovered && "scale-105")}
        />

        {work.images.length > 1 && (
          <button
            onClick={nextImage}
            className={cn(
              "absolute bottom-2 right-2 p-1 rounded-full text-white hover:bg-opacity-90 transition-all",
              isDark ? "bg-black bg-opacity-50 hover:bg-opacity-70" : "bg-white bg-opacity-70 text-blue-600",
            )}
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
        )}

        {/* Tags */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {work.featured && (
            <span
              className={cn(
                "px-2 py-0.5 text-xs font-medium text-white rounded-full",
                isDark ? "bg-pink-500" : "bg-blue-500",
              )}
            >
              {t.featured}
            </span>
          )}
          {work.isWtfProject && (
            <span className="px-2 py-0.5 text-xs font-medium bg-purple-500 text-white rounded-full">
              {t.experimental}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className={cn("text-xl font-bold mb-1", isDark ? "text-white" : "text-blue-700")}>
          {isHovered ? <GlitchText>{work.title}</GlitchText> : work.title}
        </h3>

        <p className={cn("text-sm mb-3", isDark ? "text-gray-300" : "text-blue-600")}>
          {work.descriptionShort || work.description.substring(0, 100) + "..."}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {work.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-2 py-0.5 text-xs rounded-full",
                isDark ? "bg-gray-800 text-gray-300" : "bg-blue-100 text-blue-600",
              )}
            >
              {tag}
            </span>
          ))}
          {work.tags && work.tags.length > 3 && (
            <span
              className={cn(
                "px-2 py-0.5 text-xs rounded-full",
                isDark ? "bg-gray-800 text-gray-300" : "bg-blue-100 text-blue-600",
              )}
            >
              +{work.tags.length - 3}
            </span>
          )}
        </div>

        {/* Anime inspiration */}
        {work.animeInspiration && (
          <div className={cn("text-xs mb-3", isDark ? "text-pink-400" : "text-pink-500")}>
            {t.inspiredBy}: {work.animeInspiration}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-2 mt-2">
          {work.link && (
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1 text-xs text-white px-2 py-1 rounded transition-colors",
                isDark ? "bg-pink-600 hover:bg-pink-700" : "bg-blue-600 hover:bg-blue-700",
              )}
            >
              <ExternalLink size={12} /> {t.demo}
            </a>
          )}
          {work.repo && (
            <a
              href={work.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1 text-xs text-white px-2 py-1 rounded transition-colors",
                isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-purple-600 hover:bg-purple-700",
              )}
            >
              <Github size={12} /> {t.code}
            </a>
          )}
          {work.date && (
            <span className={cn("ml-auto text-xs self-center", isDark ? "text-gray-400" : "text-blue-400")}>
              {new Date(work.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
