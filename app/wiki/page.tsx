import type { Metadata } from "next"
import Link from "next/link"
import { getAllArticles } from "@/lib/articles-data"
import { siteConfig } from "@/data/portfolio-data"
import { ChevronLeft, ChevronRight, Github } from "lucide-react"

export const metadata: Metadata = {
  title: `Wiki | ${siteConfig.name}`,
  description: "Documentation and guides for the Anime Dev Portfolio",
  openGraph: {
    title: `Wiki | ${siteConfig.name}`,
    description: "Documentation and guides for the Anime Dev Portfolio",
    url: `${siteConfig.url}/wiki`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Anime Dev Portfolio Wiki",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Wiki | ${siteConfig.name}`,
    description: "Documentation and guides for the Anime Dev Portfolio",
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
}

export default function WikiPage() {
  const articles = getAllArticles()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ChevronLeft size={16} className="mr-1" />
            Back to Portfolio
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Github size={16} className="mr-1" />
            GitHub
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wiki & Documentation</h1>
          <p className="text-gray-600 mb-8">
            Welcome to the Anime Dev Portfolio wiki. Here you'll find documentation, guides, and other helpful
            information about using and customizing the portfolio.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/wiki/${article.id}`}
                className="block p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-blue-800 mb-2">{article.title}</h2>
                  <ChevronRight size={18} className="text-blue-500 mt-1" />
                </div>
                <p className="text-gray-600 mb-2">{article.description}</p>
                <div className="text-sm text-gray-500">Last updated: {article.lastUpdated}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
