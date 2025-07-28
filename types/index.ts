// ポートフォリオに表示する各作品
export interface Work {
  id: string // ユニークID（slugなど）
  title: string
  description: string // 詳細説明
  descriptionShort?: string // 一覧用キャッチ
  images: string[] // スクショ、GIFなど
  link?: string // 公開URL
  repo?: string // GitHubなど
  tags?: string[] // 使用技術、ネタタグ
  date?: string // 例: '2025-05'
  featured?: boolean // トップ表示対象
  isWtfProject?: boolean // ネタ系 or 謎技術フラグ
  animeInspiration?: string // アニメ的発想元（例: Lain, 初音ミク, プリパラ etc）
}

// フローティングアニメ娘の定義
export interface FloatingAnimeGirl {
  id: string
  name?: string // 表示名
  description?: string // 解説や性格
  image: string // 画像 or Live2D / Lottie etc
  voiceClip?: string // mp3等
  floatingStyle?: "hover" | "orbit" | "glitchy" | "fade-in-out"
  mood?: "cheerful" | "tsundere" | "mysterious" | "deadpan"
  phrases?: string[] // 話すセリフ一覧
  interactionTriggers?: ("hover" | "click" | "scroll" | "konami-code")[]
  themeAffinity?: string[] // 例: ['hacker', 'pink']
}

// プロフィールデータの定義
export interface ProfileData {
  position: "top" | "bottom"
  name: {
    en: string
    ja: string
  }
  role: {
    en: string
    ja: string
  }
  location: {
    en: string
    ja: string
  }
  bio: {
    en: string
    ja: string
  }
  experience: {
    en: string
    ja: string
  }
  email: string
  image: string
  social: {
    github: string
    twitter: string
    linkedin: string
  }
  skills: {
    frontend: string[]
    backend: string[]
    thrownAway: string[]
    occasional: string[]
    other: string[]
    dailyHeavy: string[]
    dailyLight: string[]
  }
}

// サイト全体のスタイル・機能指定
export interface PortfolioPageProperties {
  type: "fullscreen" | "scroll" | "split" | "terminalUI"
  styles: ("anime" | "moe" | "dark" | "hacker" | "pink" | "black" | "crt" | "vaporwave" | "neon" | "minimal")[]
  features: (
    | "gimmick"
    | "floating-girl"
    | "glitch-transition"
    | "ascii-loader"
    | "easter-eggs"
    | "voice-reactive"
    | "3d-mouse-parallax"
    | "konami-code"
    | "live2d"
  )[]
  floatingGirl?: FloatingAnimeGirl
  enableTerminalCommands?: boolean // 入力でUI操作する系
  cursorStyle?: "default" | "hacker" | "glitch" | "custom-pink"
  // Theme properties
  gradientBg?: string
  textColor?: string
  cardBg?: string
  cardBorder?: string
  cardHoverBorder?: string
  buttonBg?: string
  buttonHoverBg?: string
  accentColor?: string
  secondaryColor?: string
  headerBg?: string
  footerBg?: string
  // SEO properties
  siteTitle?: string
  siteDescription?: string
}

// カテゴリ分けしたい場合（任意）
export interface WorkCategory {
  id: string
  title: string
  icon?: string
  description?: string
  works: Work[]
}
