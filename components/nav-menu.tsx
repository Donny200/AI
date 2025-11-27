"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

interface NavMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: "About Us", href: "#about" },
  { label: "Participants", href: "#participants" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export default function NavMenu({ isOpen, onClose }: NavMenuProps) {
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
        {/* Navbar Panel */}
        <div
            className={`fixed top-0 left-0 w-full bg-card/95 backdrop-blur-md border-b border-primary/20 z-40 transition-all duration-300 ease-out ${
                isOpen
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
            } ${isAnimating ? 'pointer-events-none' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            {/* Main Navigation */}
            <nav className="flex items-center justify-between">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-3">
                {/* Logo Image */}
                <img
                    src="/logo-white.png/" // Update this path to your actual logo file
                    alt="AI 500 Logo"
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      // Show fallback text logo
                      const fallback = document.getElementById('logo-fallback')
                      if (fallback) fallback.style.display = 'flex'
                    }}
                />
                {/* Fallback text logo */}
                <div id="logo-fallback" className="hidden items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">AI</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">AI 500</span>
                </div>
              </div>

              {/* Desktop Menu Items */}
              <div className="hidden md:flex items-center space-x-8">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => handleNavClick(item.href)}
                        className="text-foreground hover:text-primary transition-all duration-200 hover:scale-105 font-medium"
                    >
                      {item.label}
                    </button>
                ))}
              </div>

              {/* Contact Info - Desktop */}
              <div className="hidden lg:flex items-center space-x-6 text-sm">
                <div className="text-foreground">
                  <span className="text-muted-foreground">Email: </span>
                  yusanjiy@gmail.com
                </div>
                <div className="flex gap-3">
                  <a href="https://t.me/yu_dias" className="text-primary hover:text-primary/70 transition-colors">
                    Telegram
                  </a>
                </div>
              </div>
            </nav>

            {/* Mobile Menu - Slides down when open */}
            <div className={`md:hidden mt-4 transition-all duration-300 overflow-hidden ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="space-y-4 pb-4">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left text-foreground hover:text-primary transition-colors py-2 border-b border-primary/10 last:border-b-0"
                    >
                      {item.label}
                    </button>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-primary/20 space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Email</p>
                    <p className="text-foreground font-medium">info@ai500.uz</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Follow Us</p>
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

        {/* Content spacer to prevent overlap */}
        <div className={`transition-all duration-300 ${
            isOpen ? 'h-20 md:h-16' : 'h-0'
        }`} />
      </>
  )
}