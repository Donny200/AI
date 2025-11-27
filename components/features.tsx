"use client"

import { useInView } from "react-intersection-observer"
import { GraduationCap, Database, Briefcase, MapPin, Users } from "lucide-react"
import { useLanguage } from "@/app/i18n/LanguageContext"

const advantages = [
  { icon: GraduationCap, titleKey: "pdpUniversity", descKey: "pdpUniversityDesc" },
  { icon: Database, titleKey: "localExpertise", descKey: "localExpertiseDesc" },
  { icon: Briefcase, titleKey: "provenTrack", descKey: "provenTrackDesc" },
  { icon: MapPin, titleKey: "culturalUnderstanding", descKey: "culturalUnderstandingDesc" },
  { icon: Users, titleKey: "longTermPartnership", descKey: "longTermPartnershipDesc" },
]

export default function WhyUs() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <section id="why-us" className="relative py-20 px-8 lg:px-16 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_25%_50%,var(--primary)_0,transparent_50%),radial-gradient(circle_at_75%_50%,var(--primary)_0,transparent_50%)] opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            {t("whyUsTitle")} <span className="text-primary">{t("whyUsTitle")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("whyUsSubtitle")}</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className={`group p-8 bg-card/50 backdrop-blur border border-primary/20 rounded-2xl hover:border-primary/50 transition-all duration-700 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: inView ? `${i * 100}ms` : "0ms" }}
            >
              <adv.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 text-foreground">{t(adv.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(adv.descKey)}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 p-8 border border-primary/30 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-sm transition-all duration-1000 delay-800 ${inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="text-lg font-semibold text-foreground italic">{t("juryQuote")}</p>
        </div>
      </div>
    </section>
  )
}