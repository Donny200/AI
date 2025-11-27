"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Database, Shield, Cpu, Server, Layout, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/app/i18n/LanguageContext"

export default function HowWeSolve() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const solutions = [
    { icon: Database, titleKey: "acceptAnyData", descKey: "acceptAnyDataDesc" },
    { icon: Shield, titleKey: "fullyLocal", descKey: "fullyLocalDesc" },
    { icon: Cpu, titleKey: "ownAIModel", descKey: "ownAIModelDesc", isAIModel: true },
    { icon: Server, titleKey: "unbreakableBackend", descKey: "unbreakableBackendDesc" },
    { icon: Layout, titleKey: "managerScreen", descKey: "managerScreenDesc" },
  ]

  const techStack = [
    "Java Spring Boot", "PostgreSQL", "NVIDIA A100/H100", "Llama-3 8B/70B", "Mistral 7B", "Gemma-2"
  ]

  return (
    <section ref={sectionRef} id="how-we-solve" className="relative py-24 px-4 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("technicalArchitecture")}</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("howWeSolveIt")} <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{t("howWeSolveIt")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("howWeSolveSubtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {solutions.map((s, i) => (
            <div key={i} className={`group bg-card/80 backdrop-blur-xl border-2 rounded-3xl p-8 transition-all duration-700 hover:shadow-2xl hover:scale-105 ${s.isAIModel ? "border-primary/50 bg-primary/10 xl:col-span-1 lg:col-span-2 order-first lg:order-none" : "border-primary/20 hover:border-primary/40"} ${isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl ${s.isAIModel ? "bg-gradient-to-br from-primary to-primary/90" : "bg-primary/10"}`}>
                  <s.icon className={`w-7 h-7 ${s.isAIModel ? "text-white" : "text-primary"}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight">{t(s.titleKey)}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{t(s.descKey)}</p>
              {s.isAIModel && (
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-semibold">{t("localGPUTraining")}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-600 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">{t("techStackFlow")}</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("techStackDesc")}</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
            {techStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  {tech}
                </div>
                {i < techStack.length - 1 && <ArrowRight className="w-5 h-5 text-primary/60 hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>

        {/* Live MVP */}
        <div className={`text-center p-12 border-2 border-primary/40 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/15 backdrop-blur-2xl transition-all duration-1000 delay-900 ${isInView ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}`}>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-primary font-semibold">{t("liveDemoReady")}</span>
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-6">
              {t("liveMVPTitle")} <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{t("readyToShow") || "ready to show on 13 December"}</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t("liveMVPDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-3">
                <Layout className="w-5 h-5" />
                {t("viewLiveDemo")}
              </button>
              <button className="px-8 py-4 border-2 border-primary/40 text-primary rounded-2xl font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:border-primary/60 flex items-center gap-3">
                <Database className="w-5 h-5" />
                {t("integrationGuide")}
              </button>
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-1200 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="text-center p-6 bg-card/50 backdrop-blur border border-primary/20 rounded-2xl">
            <Server className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold text-foreground mb-2">{t("rockSolidBackend")}</h4>
            <p className="text-muted-foreground text-sm">{t("rockSolidBackendDesc")}</p>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur border border-primary/20 rounded-2xl">
            <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold text-foreground mb-2">{t("localAITraining")}</h4>
            <p className="text-muted-foreground text-sm">{t("localAITrainingDesc")}</p>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur border border-primary/20 rounded-2xl">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold text-foreground mb-2">{t("fullyCompliant")}</h4>
            <p className="text-muted-foreground text-sm">{t("fullyCompliantDesc")}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  )
}