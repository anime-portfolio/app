"use client"

import { useState, useEffect, useRef } from "react"

export function useBgm(audioSrc?: string) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!audioSrc) return

    // Create audio element
    audioRef.current = new Audio(audioSrc)
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [audioSrc])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      // Some browsers require user interaction before playing audio
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio started playing successfully
          })
          .catch((error) => {
            console.error("Audio playback failed:", error)
          })
      }
    }

    setIsPlaying(!isPlaying)
  }

  return { isPlaying, togglePlay }
}
