"use client"

import { useState, useEffect } from "react"

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

export function useKonamiCode() {
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [keySequence, setKeySequence] = useState<string[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Add the key to the sequence
      const newSequence = [...keySequence, e.key]

      // Only keep the last N keys where N is the length of the Konami code
      if (newSequence.length > KONAMI_CODE.length) {
        newSequence.shift()
      }

      setKeySequence(newSequence)

      // Check if the sequence matches the Konami code
      const isKonamiCode = newSequence.join(",") === KONAMI_CODE.join(",")

      if (isKonamiCode && !konamiActivated) {
        setKonamiActivated(true)

        // Reset after some time
        setTimeout(() => {
          setKonamiActivated(false)
        }, 10000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [keySequence, konamiActivated])

  return konamiActivated
}
