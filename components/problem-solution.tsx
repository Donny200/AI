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
        const centerX = 50;
        const centerY = 50;

        const newSparkles = Array.from({ length: 4 }, (_, i) => {
          const angle = Math.random() * Math.PI * 2;
          const distance = 30 + Math.random() * 40;
          const endX = centerX + Math.cos(angle) * distance;
          const endY = centerY + Math.sin(angle) * distance;

          return {
            id: Date.now() + i,
            startX: centerX,
            startY: centerY,
            endX: endX,
            endY: endY,
            size: Math.random() * 2 + 1
          }
        });

        setSparkles(prev => [...prev.slice(-20), ...newSparkles])

        setTimeout(() => {
          setSparkles(prev => prev.filter(spark => spark.id > Date.now() - 800))
        }, 800)
      }, 800)

      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section
      ref={sectionRef}
      id="problem-solution"
      className="relative py-20 px-6 bg-gradient-to-b from-background to-background via-secondary/10 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-small" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-small)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 border border-primary/50 rounded-full text-sm text-primary bg-primary/5">
            {t("innovationChallenge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">{t("localAIStopsChurn")}</span><br />
            {t("localAIStopsChurn")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("dataSovereignty")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem Column */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold text-red-400">{t("theProblem")}</h3>
            </div>

            {/* Problem Box with Fast Lagging Border and Thrown Electric Sparks */}
            <div className="relative p-8 border border-red-500/30 bg-red-500/5 rounded-2xl backdrop-blur-sm overflow-hidden">
              {/* Fast Lagging Border Effect */}
              <div className="absolute inset-0 border border-red-400/40 rounded-2xl animate-fast-lag-1" />
              <div className="absolute inset-0 border border-red-300/30 rounded-2xl animate-fast-lag-2" />
              <div className="absolute inset-0 border border-red-200/20 rounded-2xl animate-fast-lag-3" />

              {/* Thrown Electric Sparks */}
              {sparkles.map(sparkle => (
                <div
                  key={sparkle.id}
                  className="absolute bg-yellow-400 rounded-full animate-thrown-spark shadow-lg shadow-yellow-400/50"
                  style={{
                    left: `${sparkle.startX}%`,
                    top: `${sparkle.startY}%`,
                    width: `${sparkle.size}px`,
                    height: `${sparkle.size}px`,
                    '--endX': `${sparkle.endX}%`,
                    '--endY': `${sparkle.endY}%`,
                  } as React.CSSProperties}
                />
              ))}

              {/* Fast Flickering Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-fast-flicker rounded-2xl" />

              <ul className="space-y-4 text-lg relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">●</span>
                  <span>Every year Uzbek companies lose <strong className="text-red-400">15–25%</strong> of their clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">●</span>
                  <span>No real-time analysis of client behavior and no timely reaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">●</span>
                  <span>
                    Global tools (Amplitude, Gainsight, Intercom) cannot be used –
                    <strong className="text-red-400"> Law ZRU-547</strong> forbids exporting personal data outside Uzbekistan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">●</span>
                  <span>One human analyst can handle only <strong className="text-red-400">80–100 clients</strong> per month</span>
                </li>
              </ul>
            </div>

            {/* Problem Summary */}
            <div className="text-center p-6 border border-red-500/20 rounded-xl bg-gradient-to-r from-red-500/5 to-transparent">
              <p className="text-red-300 font-semibold text-lg">
                {t("problemSummary")}
              </p>
            </div>
          </div>

          {/* Solution Column - Clean and Professional */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold text-green-400">{t("ourSolution")}</h3>
            </div>

            {/* Solution Box - Clean and Professional */}
            <div className="relative p-8 border border-green-500/30 bg-green-500/5 rounded-2xl backdrop-blur-sm">
              {/* Simple Animated Checkmark */}
              <div className="absolute -top-4 -right-4 w-16 h-16">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-2 border-2 border-white rounded-full animate-ping" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong className="text-green-400">100% local AI</strong> {t("solutionPoint1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{t("solutionPoint2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{t("solutionPoint3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{t("solutionPoint4")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{t("solutionPoint5")}</span>
                </li>
              </ul>
            </div>

            {/* Solution Summary */}
            <div className="text-center p-6 border border-green-500/30 rounded-xl bg-gradient-to-r from-green-500/5 to-transparent">
              <p className="text-green-300 font-semibold text-lg">
                {t("solutionSummary")}
              </p>
              <p className="text-green-400/80 text-sm mt-2">
                {t("juryNote")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to global CSS */}
      <style jsx>{`
        @keyframes fast-lag-1 {
          0%, 100% { opacity: 1; transform: translate(0, 0); }
          25% { opacity: 0.8; transform: translate(-2px, 2px); }
          50% { opacity: 0.6; transform: translate(2px, -2px); }
          75% { opacity: 0.8; transform: translate(-2px, -2px); }
        }

        @keyframes fast-lag-2 {
          0%, 100% { opacity: 0.7; transform: translate(0, 0); }
          33% { opacity: 0.5; transform: translate(3px, -3px); }
          66% { opacity: 0.5; transform: translate(-3px, 3px); }
        }

        @keyframes fast-lag-3 {
          0%, 100% { opacity: 0.4; transform: translate(0, 0); }
          50% { opacity: 0.2; transform: translate(4px, 4px); }
        }

        @keyframes thrown-spark {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
            box-shadow: 0 0 10px #ff0, 0 0 20px #ff0;
            left: var(--startX, 50%);
            top: var(--startY, 50%);
          }
          50% {
            transform: translate(0, 0) scale(2);
            opacity: 0.8;
            box-shadow: 0 0 15px #ff0, 0 0 30px #ff0, 0 0 45px #ff0;
          }
          100% {
            transform: translate(calc(var(--endX) - var(--startX, 50%)), calc(var(--endY) - var(--startY, 50%))) scale(0);
            opacity: 0;
            box-shadow: 0 0 5px #ff0;
            left: var(--endX, 80%);
            top: var(--endY, 80%);
          }
        }

        @keyframes fast-flicker {
          0%, 100% { opacity: 0; }
          10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90% { opacity: 0.1; }
          15%, 25%, 35%, 45%, 55%, 65%, 75%, 85% { opacity: 0.05; }
        }

        .animate-fast-lag-1 {
          animation: fast-lag-1 0.8s ease-in-out infinite;
        }

        .animate-fast-lag-2 {
          animation: fast-lag-2 1s ease-in-out infinite;
        }

        .animate-fast-lag-3 {
          animation: fast-lag-3 1.2s ease-in-out infinite;
        }

        .animate-thrown-spark {
          animation: thrown-spark 0.8s ease-out forwards;
        }

        .animate-fast-flicker {
          animation: fast-flicker 0.5s linear infinite;
        }
      `}</style>
    </section>
  )
}