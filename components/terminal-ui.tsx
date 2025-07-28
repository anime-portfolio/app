"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import type { Work } from "@/types"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

interface TerminalUIProps {
  onClose: () => void
  works: Work[]
  onSelectCategory: (category: string) => void
}

export default function TerminalUI({ onClose, works, onSelectCategory }: TerminalUIProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>(['Welcome to the terminal. Type "help" for available commands.'])
  const inputRef = useRef<HTMLInputElement>(null)
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = currentTheme.styles.includes("dark")

  useEffect(() => {
    // Focus input when terminal opens
    inputRef.current?.focus()
  }, [])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    setHistory((prev) => [...prev, `> ${input}`])
    setInput("")

    // Process command
    if (command === "help") {
      setHistory((prev) => [
        ...prev,
        "Available commands:",
        "  help - Show this help message",
        "  ls - List all projects",
        "  cat <project-id> - Show project details",
        "  featured - Show featured projects",
        "  experimental - Show experimental projects",
        "  clear - Clear terminal",
        "  exit - Close terminal",
      ])
    } else if (command === "ls") {
      setHistory((prev) => [
        ...prev,
        "Projects:",
        ...works.map(
          (work) =>
            `  ${work.id}${work.featured ? ` (${t.featured})` : ""}${work.isWtfProject ? ` (${t.experimental})` : ""}`,
        ),
      ])
    } else if (command.startsWith("cat ")) {
      const projectId = command.split(" ")[1]
      const project = works.find((w) => w.id === projectId)

      if (project) {
        setHistory((prev) => [
          ...prev,
          `Project: ${project.title}`,
          `Description: ${project.description}`,
          `Tags: ${project.tags?.join(", ") || "None"}`,
          `Date: ${project.date || "Unknown"}`,
          project.link ? `Link: ${project.link}` : "No demo available",
          project.repo ? `Repository: ${project.repo}` : "No repository available",
        ])
      } else {
        setHistory((prev) => [...prev, `Error: Project "${projectId}" not found.`])
      }
    } else if (command === "featured") {
      onSelectCategory("featured")
      setHistory((prev) => [...prev, `Showing ${t.featured.toLowerCase()} projects.`])
    } else if (command === "experimental") {
      onSelectCategory("wtf")
      setHistory((prev) => [...prev, `Showing ${t.experimental.toLowerCase()} projects.`])
    } else if (command === "clear") {
      setHistory(["Terminal cleared."])
    } else if (command === "exit") {
      onClose()
    } else {
      setHistory((prev) => [...prev, `Command not found: ${command}. Type "help" for available commands.`])
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={cn(
            "w-full max-w-3xl h-[70vh] border rounded-md overflow-hidden shadow-lg",
            isDark ? "bg-black border-green-500 shadow-green-500/20" : "bg-white border-blue-500 shadow-blue-500/20",
          )}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          {/* Terminal header */}
          <div
            className={cn(
              "flex items-center justify-between px-4 py-2 border-b",
              isDark ? "bg-gray-900 border-green-500" : "bg-blue-100 border-blue-300",
            )}
          >
            <div className={isDark ? "text-green-500 font-mono text-sm" : "text-blue-600 font-mono text-sm"}>
              {t.terminal}
            </div>
            <button
              onClick={onClose}
              className={cn(
                "transition-colors",
                isDark ? "text-gray-400 hover:text-white" : "text-blue-500 hover:text-blue-700",
              )}
              aria-label="Close terminal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Terminal content */}
          <div className="h-[calc(70vh-40px)] flex flex-col">
            <div
              className={cn(
                "flex-1 p-4 font-mono text-sm overflow-y-auto",
                isDark ? "text-green-400" : "text-blue-600",
              )}
            >
              {history.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap mb-1">
                  {line}
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={handleCommand}
              className={cn("p-4 border-t", isDark ? "border-green-900" : "border-blue-200")}
            >
              <div className="flex items-center">
                <span className={cn("font-mono mr-2", isDark ? "text-green-500" : "text-blue-500")}>{">"}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={cn(
                    "flex-1 bg-transparent border-none outline-none font-mono",
                    isDark ? "text-green-400" : "text-blue-600",
                  )}
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
