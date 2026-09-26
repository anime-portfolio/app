"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import type { FloatingAnimeGirl } from "@/types"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingGirlProps {
  girl: FloatingAnimeGirl
  secretCodeActivated?: boolean
}

export default function FloatingGirl({ girl, secretCodeActivated = false }: FloatingGirlProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isTalking, setIsTalking] = useState(false)
  const [currentPhrase, setCurrentPhrase] = useState("")
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio if available
  useEffect(() => {
    if (girl.voiceClip) {
      audioRef.current = new Audio(girl.voiceClip)
    }
  }, [girl.voiceClip])

  // Handle random phrases
  useEffect(() => {
    if (!girl.phrases?.length) return

    const showRandomPhrase = () => {
      if (!isTalking && Math.random() > 0.7) {
        const randomIndex = Math.floor(Math.random() * girl.phrases!.length)
        setCurrentPhrase(girl.phrases![randomIndex])
        setIsTalking(true)

        // Play voice clip if available
        if (audioRef.current) {
          audioRef.current.play().catch((e) => console.error("Audio playback failed:", e))
        }

        setTimeout(() => {
          setIsTalking(false)
        }, 5000)
      }
    }

    const interval = setInterval(showRandomPhrase, 10000)
    return () => clearInterval(interval)
  }, [girl.phrases, isTalking])

  // Handle secret code activation
  useEffect(() => {
    if (secretCodeActivated && girl.interactionTriggers?.includes("secret-code")) {
      setCurrentPhrase("You found the secret code! Here's a special message just for you.")
      setIsTalking(true)
      setTimeout(() => {
        setIsTalking(false)
      }, 5000)
    }
  }, [secretCodeActivated, girl.interactionTriggers])

  // Handle floating animation based on style
  const getAnimationVariants = () => {
    switch (girl.floatingStyle) {
      case "hover":
        return {
          animate: {
            y: [0, -10, 0],
            transition: {
              y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
            },
          },
        }
      case "orbit":
        return {
          animate: {
            rotate: 360,
            transition: {
              rotate: { repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" },
            },
          },
        }
      case "glitchy":
        return {
          animate: {
            x: [0, -3, 5, -2, 0],
            y: [0, 2, -4, 1, 0],
            filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
            opacity: [1, 0.9, 1],
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              repeatType: "mirror",
            },
          },
        }
      case "fade-in-out":
        return {
          animate: {
            opacity: [0.7, 1, 0.7],
            transition: {
              opacity: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" },
            },
          },
        }
      default:
        return {
          animate: {
            y: [0, -10, 0],
            transition: {
              y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
            },
          },
        }
    }
  }

  const handleClick = () => {
    if (girl.interactionTriggers?.includes("click") && girl.phrases?.length) {
      const randomIndex = Math.floor(Math.random() * girl.phrases.length)
      setCurrentPhrase(girl.phrases[randomIndex])
      setIsTalking(true)

      // Play voice clip if available
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play().catch((e) => console.error("Audio playback failed:", e))
      }

      setTimeout(() => {
        setIsTalking(false)
      }, 5000)
    }
  }

  const animationVariants = getAnimationVariants()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-16 right-8 z-30 select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {/* Speech bubble */}
          <AnimatePresence>
            {isTalking && (
              <motion.div
                className="absolute bottom-full right-0 mb-2 p-3 bg-black bg-opacity-80 border border-pink-500 rounded-lg max-w-xs text-white text-sm"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                style={{
                  boxShadow: "0 0 15px rgba(236, 72, 153, 0.3)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="relative">
                  {currentPhrase}
                  <div className="absolute -bottom-7 right-4 w-4 h-4 bg-black bg-opacity-80 border-r border-b border-pink-500 transform rotate-45"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Character */}
          <motion.div
            className={cn(
              "relative cursor-pointer",
              girl.mood === "cheerful" && "hover:animate-bounce",
              girl.mood === "tsundere" && "hover:rotate-3",
              girl.mood === "mysterious" && "hover:blur-sm",
              girl.mood === "deadpan" && "grayscale hover:grayscale-0",
            )}
            onClick={handleClick}
            variants={animationVariants}
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={girl.image || "/placeholder.svg"}
              alt={girl.name || "Anime character"}
              width={150}
              height={200}
              className="object-contain"
              priority
            />
            {girl.name && (
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-pink-400 font-medium bg-black bg-opacity-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                {girl.name}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
