"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useLanguage } from "@/app/i18n/LanguageContext"

export default function ProblemSolution() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [sparkles, setSparkles] = useState<Array<{id: number, startX: number, startY: number, endX: number, endY: number, size: number}>>([])

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        const centerX = 50, centerY = 50
        const newSparkles = Array.from({ length: 4 }, () => {
          const angle = Math.random() * Math.PI * 2
          const distance = 30 + Math.random() * 40
          return {
            id: Date.now() + Math.random(),
            startX: centerX,
            startY: centerY,
            endX: centerX + Math.cos(angle) * distance,
            endY: centerY + Math.sin(angle) * distance,
            size: Math.random() * 2 + 1
          }
        })
        setSparkles(prev => [...prev.slice(-20), ...newSparkles])
        setTimeout(() => setSparkles(prev => prev.filter(s => s.id > Date.now() - 800)), 800)
      }, 800)
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section ref={sectionRef} id="problem-solution" className="relative py-20 px-6 bg-gradient-to-b from-background to-background via-secondary/10 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grid-small)" /></svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 border border-primary/50 rounded-full text-sm text-primary bg-primary/5">
            {t("innovationChallenge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">{t("localAIStopsChurn")}</span><br />
            {t("localAIStopsChurn")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("dataSovereignty")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-6 transition-all duration-1000 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold text-red-400">{t("theProblem")}</h3>
            </div>
            <div className="relative p-8 border border-red-500/30 bg-red-500/5 rounded-2xl backdrop-blur-sm overflow-hidden">
              {sparkles.map(s => (
                <div key={s.id} className="absolute bg-yellow-400 rounded-full animate-thrown-spark shadow-lg shadow-yellow-400/50"
                  style={{ left: `${s.startX}%`, top: `${s.startY}%`, width: `${s.size}px`, height: `${s.size}px`, '--endX': `${s.endX}%`, '--endY': `${s.endY}%` } as any} />
              ))}
              <ul className="space-y-4 text-lg relative z-10">
                <li className="flex items-start gap-3"><span className="text-red-400 mt-1">●</span> <span>{t("problemPoint1") || "Every year Uzbek companies lose 15–25% of their clients"}</span></li>
                <li className="flex items-start gap-3"><span className="text-red-400 mt-1">●</span> <span>{t("problemPoint2") || "No real-time analysis..."}</span></li>
                <li className="flex items-start gap-3"><span className="text-red-400 mt-1">●</span> <span>{t("problemPoint3") || "Global tools cannot be used – Law ZRU-547..."}</span></li>
                <li className="flex items-start gap-3"><span className="text-red-400 mt-1">●</span> <span>{t("problemPoint4") || "One human analyst can handle only 80–100 clients per month"}</span></li>
              </ul>
            </div>
            <div className="text-center p-6 border border-red-500/20 rounded-xl bg-gradient-to-r from-red-500/5 to-transparent">
              <p className="text-red-300 font-semibold text-lg">{t("problemSummary")}</p>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold text-green-400">{t("ourSolution")}</h3>
            </div>
            <div className="relative p-8 border border-green-500/30 bg-green-500/5 rounded-2xl backdrop-blur-sm">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><span className="text-green-400 mt-1">Check</span> <span><strong className="text-green-400">100% local AI</strong> {t("solutionPoint1") || "that processes and stores all data only inside Uzbekistan"}</span></li>
                <li className="flex items-start gap-3"><span className="text-green-400 mt-1">Check</span> <span>{t("solutionPoint2") || "Tracks every client action..."}</span></li>
                <li className="flex items-start gap-3"><span className="text-green-400 mt-1">Check</span> <span>{t("solutionPoint3") || "Gives managers clear..."}</span></li>
                <li className="flex items-start gap-3"><span className="text-green-400 mt-1">Check</span> <span>{t("solutionPoint4") || "Never acts automatically..."}</span></li>
                <li className="flex items-start gap-3"><span className="text-green-400 mt-1">Check</span> <span>{t("solutionPoint5") || "Understands local patterns..."}</span></li>
              </ul>
            </div>
            <div className="text-center p-6 border border-green-500/30 rounded-xl bg-gradient-to-r from-green-500/5 to-transparent">
              <p className="text-green-300 font-semibold text-lg">{t("solutionSummary")}</p>
              <p className="text-green-400/80 text-sm mt-2">{t("juryNote")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}