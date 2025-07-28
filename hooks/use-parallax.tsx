"use client"

import { useRef, useEffect } from "react"

export function useParallax() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage of screen
      const x = clientX / innerWidth
      const y = clientY / innerHeight

      // Create parallax effect for elements with data-parallax attribute
      const elements = ref.current?.querySelectorAll("[data-parallax]")
      elements?.forEach((el) => {
        const strength = Number.parseFloat(el.getAttribute("data-parallax") || "0.1")
        const offsetX = (x - 0.5) * strength * 100
        const offsetY = (y - 0.5) * strength * 100

        el.setAttribute("style", `transform: translate(${offsetX}px, ${offsetY}px);`)
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return { ref }
}
