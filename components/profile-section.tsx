"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"
import { profileData } from "@/data/portfolio-data"
import Image from "next/image"
import { Mail, MapPin, Calendar, Github, Twitter, Linkedin } from "lucide-react"

export default function ProfileSection() {
  const { t, language } = useLanguage()
  const { currentTheme } = useTheme()
  const isDark = currentTheme.styles.includes("dark")

  const { skills, social } = profileData
  const name = language === "en" ? profileData.name.en : profileData.name.ja
  const role = language === "en" ? profileData.role.en : profileData.role.ja
  const location = language === "en" ? profileData.location.en : profileData.location.ja
  const bio = language === "en" ? profileData.bio.en : profileData.bio.ja
  const experience = language === "en" ? profileData.experience.en : profileData.experience.ja

  return (
    <section
      className={cn(
        "mb-16 rounded-xl backdrop-blur-sm shadow-lg overflow-hidden",
        isDark ? "bg-black/50" : "bg-white/80",
      )}
    >
      <div className="md:flex">
        {/* Profile image and basic info */}
        <div className="md:w-1/3 p-6 md:p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 ring-4 ring-purple-500/20">
            <Image src={profileData.image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <h2 className={cn("text-2xl font-bold mb-1", isDark ? "text-white" : "text-gray-900")}>{name}</h2>
          <p className={cn("text-lg mb-3", isDark ? "text-pink-400" : "text-blue-600")}>{role}</p>
          <div className="flex items-center justify-center mb-4">
            <MapPin size={16} className={isDark ? "text-gray-400" : "text-gray-500"} />
            <span className={cn("ml-1 text-sm", isDark ? "text-gray-300" : "text-gray-600")}>{location}</span>
          </div>
          <p className={cn("text-sm mb-6", isDark ? "text-gray-300" : "text-gray-600")}>{bio}</p>
          <div className="flex gap-3">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full transition-colors",
                isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full transition-colors",
                isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full transition-colors",
                isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Skills and details */}
        <div className="md:w-2/3 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience */}
            <div>
              <h3
                className={cn("text-lg font-semibold mb-3 flex items-center", isDark ? "text-white" : "text-gray-900")}
              >
                <Calendar size={18} className="mr-2" />
                {t.experience}
              </h3>
              <p className={cn("text-sm", isDark ? "text-gray-300" : "text-gray-600")}>{experience}</p>
            </div>

            {/* Contact */}
            <div>
              <h3
                className={cn("text-lg font-semibold mb-3 flex items-center", isDark ? "text-white" : "text-gray-900")}
              >
                <Mail size={18} className="mr-2" />
                {t.contact}
              </h3>
              <a
                href={`mailto:${profileData.email}`}
                className={cn(
                  "text-sm",
                  isDark ? "text-pink-400 hover:text-pink-300" : "text-blue-600 hover:text-blue-700",
                )}
              >
                {profileData.email}
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-white" : "text-gray-900")}>{t.skills}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className={cn("text-sm font-medium mb-2", isDark ? "text-pink-400" : "text-blue-600")}>
                  {t.dailyHeavy}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.dailyHeavy.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-2 py-1 text-xs rounded-full",
                        isDark ? "bg-pink-900/50 text-pink-200" : "bg-pink-100 text-pink-700",
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={cn("text-sm font-medium mb-2", isDark ? "text-pink-400" : "text-blue-600")}>
                  {t.dailyLight}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.dailyLight.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-2 py-1 text-xs rounded-full",
                        isDark ? "bg-purple-900/50 text-purple-200" : "bg-purple-100 text-purple-700",
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={cn("text-sm font-medium mb-2", isDark ? "text-pink-400" : "text-blue-600")}>
                  {t.frontend}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-2 py-1 text-xs rounded-full",
                        isDark ? "bg-gray-800 text-gray-300" : "bg-blue-100 text-blue-700",
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={cn("text-sm font-medium mb-2", isDark ? "text-pink-400" : "text-blue-600")}>
                  {t.backend}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-2 py-1 text-xs rounded-full",
                        isDark ? "bg-gray-800 text-gray-300" : "bg-blue-100 text-blue-700",
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={cn("text-sm font-medium mb-2", isDark ? "text-pink-400" : "text-blue-600")}>
                  {t.occasional}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.occasional.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-2 py-1 text-xs rounded-full",
                        isDark ? "bg-gray-800 text-gray-300" : "bg-blue-100 text-blue-700",
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={cn("text-sm font-medium mb-2", isDark ? "text-pink-400" : "text-blue-600")}>
                  {t.thrownAway}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.thrownAway.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-2 py-1 text-xs rounded-full",
                        isDark ? "bg-gray-800 text-gray-300" : "bg-blue-100 text-blue-700",
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={cn("text-sm font-medium mb-2", isDark ? "text-pink-400" : "text-blue-600")}>
                  {t.other}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-2 py-1 text-xs rounded-full",
                        isDark ? "bg-gray-800 text-gray-300" : "bg-blue-100 text-blue-700",
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
