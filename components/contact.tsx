"use client"

import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/app/i18n/LanguageContext"

export default function Contact() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({ threshold: 0.2 })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 px-8 lg:px-16 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            {t("getInTouch")} <span className="text-primary">{t("contact")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/40">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{t("email")}</h3>
                <p className="text-muted-foreground">info@ai500.uz</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/40">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{t("phone")}</h3>
                <p className="text-muted-foreground">+998 71 200 50 00</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/40">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{t("location")}</h3>
                <p className="text-muted-foreground">{t("tashkentUzbekistan")}</p>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur p-8 rounded-2xl border border-primary/20 mt-8">
              <h3 className="text-lg font-semibold mb-4 text-primary">{t("followUs")}</h3>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:text-primary/70 transition-colors font-medium">Telegram</a>
                <a href="#" className="text-primary hover:text-primary/70 transition-colors font-medium">Twitter</a>
                <a href="#" className="text-primary hover:text-primary/70 transition-colors font-medium">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div>
              <label className="block text-sm font-medium mb-2 text-primary">{t("name")}</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder={t("yourName")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-primary">{t("email")}</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder={t("yourEmail")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-primary">{t("message")}</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder={t("yourMessage")}
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
            >
              {submitted ? t("messageSent") : t("sendMessage")}
              {!submitted && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>

            {submitted && <p className="text-primary text-sm font-medium">{t("thankYou")}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}