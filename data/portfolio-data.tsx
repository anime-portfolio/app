import type { Work, WorkCategory, PortfolioPageProperties, ProfileData } from "@/types"

// Profile data
export const profileData: ProfileData = {
  position: "bottom", // "top" or "bottom"
  name: {
    en: "Aesthetic Vulpes",
    ja: "Aesthetic Vulpes",
  },
  role: {
    en: "Full Stack Developer",
    ja: "フルスタック開発者",
  },
  location: {
    en: "Tokyo, Japan",
    ja: "東京、日本",
  },
  bio: {
    en: "A developer in Tokyo working on the web, provenance and cryptography, with a soft spot for illustration and the arts.",
    ja: "東京の開発者。Web、来歴（プロベナンス）、暗号技術に取り組みつつ、イラストやアートを大切にしています。",
  },
  experience: {
    en: "Since 2016",
    ja: "2016年から",
  },
  email: "",
  image: "https://github.com/didvc.png",
  social: {
    github: "https://github.com/didvc",
  },
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "AWS"],
    thrownAway: ["Ruby", "Rails", "WordPress", "jQuery", "Angular", "PHP"],
    occasional: ["Lua", "AutoHotkey", "GAS", "PHP", "Python", "Bash"],
    other: ["Git", "CI/CD", "Testing", "Performance Optimization", "WebGL", "WebRTC"],
    dailyHeavy: ["TypeScript", "ChatGPT", "GitHub Copilot", "v0"],
    dailyLight: ["Python", "Gephi", "Grafana", "Prometheus", "Victoria Metrics", "Next.js"],
  },
}

// Weltschmerz theme configuration (dark)
export const weltschmerzTheme: PortfolioPageProperties = {
  type: "fullscreen",
  styles: ["anime", "dark", "hacker", "neon"],
  features: ["floating-girl", "glitch-transition", "ascii-loader", "easter-eggs", "3d-mouse-parallax", "konami-code"],
  floatingGirl: {
    id: "weltschmerz",
    name: "Weltschmerz-chan",
    description: "A quiet girl who feels the weight of the world",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/weltschmerz.png`,
    floatingStyle: "glitchy",
    mood: "mysterious",
    phrases: [
      "Some days the world feels heavy.",
      "Ink dries, but the stain stays.",
      "Stay a little longer, if you like.",
      "Let me show you something quiet...",
    ],
    interactionTriggers: ["hover", "click", "konami-code"],
    themeAffinity: ["hacker", "dark"],
  },
  enableTerminalCommands: true,
  cursorStyle: "glitch",
  gradientBg: "bg-gradient-to-br from-gray-900 via-purple-900 to-black",
  textColor: "text-white",
  cardBg: "bg-gray-900",
  cardBorder: "border-gray-800",
  cardHoverBorder: "border-pink-500",
  buttonBg: "bg-gray-800",
  buttonHoverBg: "bg-gray-700",
  accentColor: "text-pink-500",
  secondaryColor: "text-gray-400",
  headerBg: "bg-black/70",
  footerBg: "bg-black/70",
  siteTitle: "Aesthetic Vulpes | Weltschmerz",
  siteDescription: "A dark, quiet developer portfolio with the original character Weltschmerz-chan",
}

// Crystalline theme configuration (light)
export const crystallineTheme: PortfolioPageProperties = {
  type: "fullscreen",
  styles: ["anime", "moe", "pink", "minimal"],
  features: ["floating-girl", "glitch-transition", "ascii-loader", "easter-eggs", "3d-mouse-parallax", "konami-code"],
  floatingGirl: {
    id: "crystalline",
    name: "Crystalline-chan",
    description: "A watercolor girl who walks with a deer made of glass",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/crystalline.png`,
    floatingStyle: "hover",
    mood: "cheerful",
    phrases: [
      "Everything looks clearer through glass.",
      "Did you see the deer? It's made of light.",
      "Colors bleed, and that's the best part.",
      "Let me show you something that sparkles...",
    ],
    interactionTriggers: ["hover", "click", "konami-code"],
    themeAffinity: ["moe", "pink"],
  },
  enableTerminalCommands: true,
  cursorStyle: "default",
  gradientBg: "bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100",
  textColor: "text-blue-900",
  cardBg: "bg-white",
  cardBorder: "border-blue-200",
  cardHoverBorder: "border-blue-500",
  buttonBg: "bg-blue-100",
  buttonHoverBg: "bg-blue-200",
  accentColor: "text-blue-600",
  secondaryColor: "text-blue-400",
  headerBg: "bg-white/70",
  footerBg: "bg-white/70",
  siteTitle: "Aesthetic Vulpes | Crystalline",
  siteDescription: "A light watercolor developer portfolio with the original character Crystalline-chan",
}

// Portfolio works data
export const works: Work[] = [
  {
    id: "neural-singer",
    title: "Neural Singer",
    description:
      "An AI-powered voice synthesizer that can mimic any singing voice with just a few samples. Built with PyTorch and React.",
    descriptionShort: "AI voice synthesis for the masses",
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&w=2070&auto=format&fit=crop",
    ],
    link: "https://neural-singer.example.com",
    repo: "https://github.com/anime-portfolio/app",
    tags: ["AI", "PyTorch", "React", "Web Audio API", "TensorFlow.js"],
    date: "2025-04",
    featured: true,
  },
  {
    id: "quiet-protocol",
    title: "Quiet Protocol",
    description: "A decentralized social network with unique avatars and a custom UI.",
    descriptionShort: "Connect with like-minded people",
    images: [
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    ],
    link: "https://quiet-protocol.example.com",
    repo: "https://github.com/anime-portfolio/app",
    tags: ["React", "Node.js", "WebRTC", "Encryption", "P2P"],
    date: "2025-02",
    featured: true,
  },
  {
    id: "hologram-live",
    title: "Hologram Live",
    description: "A WebGL-based virtual concert platform that creates hologram-like performances in your browser.",
    descriptionShort: "Virtual concerts in your browser",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop",
    ],
    link: "https://hologram-live.example.com",
    repo: "https://github.com/anime-portfolio/app",
    tags: ["Three.js", "WebGL", "React", "Web Audio API"],
    date: "2024-12",
    featured: true,
  },
  {
    id: "quantum-cat",
    title: "Quantum Cat",
    description:
      "A quantum computing simulator with a cat-themed interface. Educational tool for learning quantum algorithms.",
    descriptionShort: "Learn quantum computing with cats",
    images: [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2015&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop",
    ],
    link: "https://quantum-cat.example.com",
    repo: "https://github.com/anime-portfolio/app",
    tags: ["TypeScript", "React", "D3.js", "Quantum Computing"],
    date: "2024-10",
    isWtfProject: true,
  },
  {
    id: "pixel-painter",
    title: "Pixel Painter",
    description: "A collaborative pixel art creation tool with real-time multiplayer capabilities.",
    descriptionShort: "Create pixel art together",
    images: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2074&auto=format&fit=crop",
    ],
    link: "https://pixel-painter.example.com",
    repo: "https://github.com/anime-portfolio/app",
    tags: ["Canvas API", "Socket.io", "React", "Node.js"],
    date: "2024-08",
    isWtfProject: true,
  },
]

// Portfolio categories
export const categories: WorkCategory[] = [
  {
    id: "featured",
    title: "Featured Works",
    icon: "✨",
    works: works.filter((work) => work.featured),
  },
  {
    id: "all",
    title: "All Projects",
    icon: "🚀",
    works: works,
  },
  {
    id: "wtf",
    title: "Experimental",
    icon: "🧪",
    description: "The weird and wonderful experiments",
    works: works.filter((work) => work.isWtfProject),
  },
]

// Site configuration
export const siteConfig = {
  name: "Aesthetic Vulpes",
  url: "https://anime-portfolio.github.io/app/",
  ogImage: "https://anime-portfolio.github.io/app/og.png",
  description: "A developer portfolio with two original watercolor characters, Crystalline-chan and Weltschmerz-chan",
  links: {
    github: "https://github.com/anime-portfolio/app",
  },
  creator: "Aesthetic Vulpes",
  keywords: [
    "developer portfolio",
    "anime",
    "react",
    "next.js",
    "typescript",
    "tailwindcss",
    "framer motion",
    "interactive",
  ],
}
