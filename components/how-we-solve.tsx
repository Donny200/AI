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
    {
      icon: Database,
      title: t("acceptAnyData"),
      description: t("acceptAnyDataDesc"),
      features: ["1C Integration", "Didox API", "Payme Connect", "Excel/Sheets", "Custom Databases"]
    },
    {
      icon: Shield,
      title: t("fullyLocal"),
      description: t("fullyLocalDesc"),
      features: ["Tashkent Data Centers", "ZRU-547 Compliant", "Zero Data Export", "Local Infrastructure"]
    },
    {
      icon: Cpu,
      title: t("ownAIModel"),
      description: t("ownAIModelDesc"),
      features: ["Llama-3 8B/70B", "Mistral 7B", "Gemma-2", "NVIDIA A100/H100", "Local Training"]
    },
    {
      icon: Server,
      title: t("unbreakableBackend"),
      description: t("unbreakableBackendDesc"),
      features: ["Java Spring Boot", "PostgreSQL", "Millions of Rows", "99.9% Uptime"]
    },
    {
      icon: Layout,
      title: t("managerScreen"),
      description: t("managerScreenDesc"),
      features: ["Churn Risk Graphs", "Money Saved Metrics", "Action Lists", "One-Click Actions", "Full Human Control"]
    }
  ]

  const techStack = [
    { name: "Java Spring Boot", color: "from-orange-500 to-red-500" },
    { name: "PostgreSQL", color: "from-blue-500 to-blue-700" },
    { name: "NVIDIA A100/H100", color: "from-green-500 to-green-600" },
    { name: "Llama-3 8B/70B", color: "from-purple-500 to-purple-600" },
    { name: "Mistral 7B", color: "from-cyan-500 to-cyan-600" },
    { name: "Gemma-2", color: "from-pink-500 to-pink-600" }
  ]

  return (
    <section
      ref={sectionRef}
      id="how-we-solve"
      className="relative py-24 px-4 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="circuit" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="30" cy="30" r="2" fill="currentColor" />
                <circle cx="15" cy="15" r="1" fill="currentColor" />
                <circle cx="45" cy="45" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("technicalArchitecture")}</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("howWeSolveIt")} <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{t("solveIt")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("howWeSolveSubtitle")}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group bg-card/80 backdrop-blur-xl border-2 rounded-3xl p-8 transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
                solution.title.includes("AI model")
                  ? "border-primary/50 bg-primary/10 xl:col-span-1 lg:col-span-2 order-first lg:order-none"
                  : "border-primary/20 hover:border-primary/40"
              } ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl ${
                  solution.title.includes("AI model")
                    ? "bg-gradient-to-br from-primary to-primary/90"
                    : "bg-primary/10"
                }`}>
                  <solution.icon className={`w-7 h-7 ${
                    solution.title.includes("AI model") ? "text-white" : "text-primary"
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight">{solution.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm transition-all duration-300 hover:translate-x-2"
                    style={{ transitionDelay: `${featureIndex * 50}ms` }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Special Badge for AI Model */}
              {solution.title.includes("AI model") && (
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-semibold">Local GPU Training</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Stack Flow */}
        <div className={`mb-16 transition-all duration-1000 delay-600 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {t("techStackFlow")}
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("techStackDesc")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`px-6 py-3 bg-gradient-to-r ${tech.color} text-white rounded-2xl font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl`}>
                  {tech.name}
                </div>
                {index < techStack.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-primary/60 hidden lg:block" />
                )}
              </div>
            ))}
          </div>

          {/* Flow Description */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-lg">
              Java Spring Boot → PostgreSQL → local GPU cluster (A100/H100) → fine-tuned Llama-3/Mistral
            </p>
          </div>
        </div>

        {/* Live MVP Callout */}
        <div className={`text-center p-12 border-2 border-primary/40 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/15 backdrop-blur-2xl transition-all duration-1000 delay-900 ${
            isInView ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
        }`}>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-primary font-semibold">{t("liveDemoReady")}</span>
            </div>

            <h3 className="text-4xl font-bold text-foreground mb-6">
              {t("liveMVPTitle")} <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {t("readyToShow")}
              </span>
            </h3>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t("liveMVPDesc")}
            </p>

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

        {/* Bottom Tech Highlights */}
        <div className={`grid md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-1200 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
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

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}