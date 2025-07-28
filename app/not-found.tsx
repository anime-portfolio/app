import Link from "next/link"
import { siteConfig } from "@/data/portfolio-data"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Go Home
          </Link>
          <Link
            href="/wiki"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Visit Wiki
          </Link>
        </div>
        <div className="mt-8">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  )
}
