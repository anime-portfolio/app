"use client"

import { useState, useEffect } from "react"

const SECRET_CODE = [
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

export function useSecretCode() {
  const [secretCodeActivated, setSecretCodeActivated] = useState(false)
  const [keySequence, setKeySequence] = useState<string[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Add the key to the sequence
      const newSequence = [...keySequence, e.key]

      // Only keep the last N keys where N is the length of the secret code
      if (newSequence.length > SECRET_CODE.length) {
        newSequence.shift()
      }

      setKeySequence(newSequence)

      // Check if the sequence matches the secret code
      const isSecretCode = newSequence.join(",") === SECRET_CODE.join(",")

      if (isSecretCode && !secretCodeActivated) {
        setSecretCodeActivated(true)

        // Reset after some time
        setTimeout(() => {
          setSecretCodeActivated(false)
        }, 10000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [keySequence, secretCodeActivated])

  return secretCodeActivated
}
