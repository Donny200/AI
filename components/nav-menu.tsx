"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/app/i18n/LanguageContext"

interface NavMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { labelKey: "about", href: "#about" },
  { labelKey: "participants", href: "#participants" },
  { labelKey: "schedule", href: "#schedule" },
  { labelKey: "sponsors", href: "#sponsors" },
  { labelKey: "faq", href: "#faq" },
  { labelKey: "contact", href: "#contact" },
]

export default function NavMenu({ isOpen, onClose }: NavMenuProps) {
  const { t } = useLanguage()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsAnimating(true)
    onClose()
    setTimeout(() => setIsAnimating(false), 300)
  }

  const handleNavClick = (href: string) => {
    handleClose()
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 300)
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full bg-card/95 backdrop-blur-md border-b border-primary/20 z-40 transition-all duration-300 ease-out ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        } ${isAnimating ? 'pointer-events-none' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/logo-white.png/"
                alt="AI 500 Logo"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                  const fallback = document.getElementById('logo-fallback')
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div id="logo-fallback" className="hidden items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold text-foreground">AI 500</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.labelKey}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-all duration-200 hover:scale-105 font-medium"
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="text-foreground">
                <span className="text-muted-foreground">{t("email")}: </span>
                yusanjiy@gmail.com
              </div>
              <div className="flex gap-3">
                <a href="https://t.me/yu_dias" className="text-primary hover:text-primary/70 transition-colors">
                  Telegram
                </a>
              </div>
            </div>
          </nav>

          <div className={`md:hidden mt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="space-y-4 pb-4">
              {menuItems.map((item) => (
                <button
                  key={item.labelKey}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-2 border-b border-primary/10 last:border-b-0"
                >
                  {t(item.labelKey)}
                </button>
              ))}

              <div className="pt-4 border-t border-primary/20 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{t("email")}</p>
                  <p className="text-foreground font-medium">info@ai500.uz</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{t("followUs")}</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-primary hover:text-primary/70 transition-colors">
                      Telegram
                    </a>
                    <a href="#" className="text-primary hover:text-primary/70 transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 ${isOpen ? 'h-20 md:h-16' : 'h-0'}`} />
    </>
  )
}