"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Calendar, Code, Presentation, Rocket, Users, Shield, TrendingUp, Trophy, Check, Clock, ArrowRight } from "lucide-react"

const timelineItems = [
  {
    id: 1,
    date: new Date('2025-11-27'),
    title: "Final idea preparation & submission",
    description: "Final idea preparation and submission for AI500 Hackathon",
    icon: Calendar,
    status: "completed"
  },
  {
    id: 2,
    date: new Date('2025-12-07'),
    title: "Active MVP development",
    description: "Data connectors, local AI core, dashboard, first recommendations",
    icon: Code,
    status: "current"
  },
  {
    id: 3,
    date: new Date('2025-12-13'),
    title: "Official AI500 Hackathon presentation",
    description: "Presenting our working product to the judges and audience",
    icon: Presentation,
    status: "upcoming"
  },
  {
    id: 4,
    date: new Date('2025-12-17'),
    title: "Public launch (if we win)",
    description: "Onboarding of first 10–20 real clients",
    icon: Rocket,
    status: "upcoming"
  },
  {
    id: 5,
    date: new Date('2026-01-31'),
    title: "50 paying SMB clients",
    description: "Expanding our client base to 50 small and medium businesses",
    icon: Users,
    status: "upcoming"
  },
  {
    id: 6,
    date: new Date('2026-03-31'),
    title: "Certification + first bank pilot",
    description: "Full certification by the Personal Data Agency + first bank pilot",
    icon: Shield,
    status: "upcoming"
  },
  {
    id: 7,
    date: new Date('2026-06-30'),
    title: "200+ clients across Uzbekistan",
    description: "Expanding our reach to over 200 clients nationwide",
    icon: TrendingUp,
    status: "upcoming"
  },
  {
    id: 8,
    date: new Date('2026-12-31'),
    title: "Leader in customer-retention AI",
    description: "Becoming the recognized leader in AI-driven customer retention in Uzbekistan",
    icon: Trophy,
    status: "upcoming"
  },
]

export default function Roadmap() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [currentStageProgress, setCurrentStageProgress] = useState(0)
  const [animatedItems, setAnimatedItems] = useState(new Set())

  const currentDate = new Date('2025-11-27')
  const currentStageIndex = timelineItems.findIndex(item => item.status === "current")

    useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const newSet = new Set<number>()
        timelineItems.forEach((_, index) => {
          setTimeout(() => {
            newSet.add(index)
            setVisibleItems(new Set(newSet))
            // Trigger individual item animations
            setTimeout(() => {
              setAnimatedItems(prev => new Set(prev.add(index)))
            }, index * 200 + 500)
          }, index * 150)
        })
      }, 100)

      const progressInterval = setInterval(() => {
        setCurrentStageProgress(prev => {
          if (prev >= 100) return 100
          return prev + 1.5
        })
      }, 30)

      return () => {
        clearTimeout(timer)
        clearInterval(progressInterval)
      }
    }
  }, [inView])
  useEffect(() => {
    if (inView && currentStageProgress === 0) {
      let progress = 0
      const interval = setInterval(() => {
        progress += 1.5
        if (progress >= 100) {
          clearInterval(interval)
          setCurrentStageProgress(100)
        } else {
          setCurrentStageProgress(progress)
        }
      }, 30)

      return () => clearInterval(interval)
    }
  }, [inView])


  const getStatusStyles = (status: string) => {
    const baseStyles = "relative w-16 h-16 flex items-center justify-center rounded-full border-4 border-background transition-all duration-700 z-20 transform"

    switch (status) {
      case "completed":
        return `${baseStyles} bg-gradient-to-br from-green-500 to-green-600 scale-100 shadow-2xl shadow-green-500/40`
      case "current":
        return `${baseStyles} bg-gradient-to-br from-primary to-primary/90 scale-125 shadow-2xl shadow-primary/60 animate-pulse-slow`
      case "upcoming":
        return `${baseStyles} bg-gradient-to-br from-primary/30 to-primary/20 scale-100 shadow-lg shadow-primary/20`
      default:
        return baseStyles
    }
  }

  const getContentStyles = (status: string) => {
    const baseStyles = "bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl p-8 rounded-2xl border-2 transition-all duration-700 hover:scale-105 hover:shadow-2xl"

    switch (status) {
      case "completed":
        return `${baseStyles} border-green-500/40 bg-green-500/5 hover:border-green-500/60 hover:shadow-green-500/20`
      case "current":
        return `${baseStyles} border-primary/60 bg-primary/15 hover:border-primary/80 hover:shadow-primary/30`
      case "upcoming":
        return `${baseStyles} border-primary/30 bg-primary/5 hover:border-primary/50 hover:shadow-primary/20`
      default:
        return baseStyles
    }
  }

  // Enhanced wave positions with more dramatic curves
 const getWavyPosition = (index: number) => {
  const totalItems = timelineItems.length
  const position = (index / (totalItems - 1)) * 100

  const wavePattern = [-120, 120, -100, 140, -80, 160, -60, 180]

  return {
    top: `${position}%`,
    left: `calc(50% + ${wavePattern[index]}px)`
  }
}


  // Enhanced SVG path for more dramatic waves
  const getWavePath = () => {
    return `M 400,0 
            C 100,80 700,160 400,240
            C 100,320 700,400 400,480
            C 100,560 700,640 400,720
            C 100,800 700,880 400,960
            L 400,1000`
  }

  return (
      <section id="roadmap" ref={ref} className="relative py-24 px-4 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/5 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />

          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid-enhanced" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-enhanced)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Development Journey</span>
            </div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Roadmap</span>
            </h2>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-card/50 backdrop-blur border border-primary/20 rounded-2xl mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="text-primary font-semibold text-lg">Current Stage: Prototype / Preparing MVP</div>
                <div className="text-muted-foreground text-sm">As of 27 November 2025</div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are not just talking about the idea – we are already building it right now.
              <span className="text-primary font-semibold"> See you on 13 December with a working product.</span>
            </p>
          </div>

          {/* Enhanced Wavy Timeline */}
          <div className="relative">
            <div className="relative h-[1200px]">
              {/* Enhanced Wavy Line */}
              <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 800 1200"
                  preserveAspectRatio="none"
              >
                {/* Background Glow */}
                <path
                    d={getWavePath()}
                    stroke="url(#glowGradient)"
                    strokeWidth="20"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.1"
                    filter="blur(10px)"
                />

                {/* Main Line */}
                <path
                    d={getWavePath()}
                    stroke="#374151"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.2"
                />

                {/* Completed Progress Line */}
                <path
                    d={getWavePath()}
                    stroke="url(#progressGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="1200"
                    strokeDashoffset={1200 - (currentStageProgress / 100) * 1200}
                    className="transition-all duration-3000 ease-out"
                    filter="url(#glow)"
                />

                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>

                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00ff88" />
                    <stop offset="50%" stopColor="#00ff00" />
                    <stop offset="100%" stopColor="#00cc00" />
                  </linearGradient>

                  <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00ff00" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00ff00" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Enhanced Current Position Indicator */}
              <div
                  className="absolute z-40 transition-all duration-3000 ease-out"
                  style={{
                    top: `${(currentStageIndex / (timelineItems.length - 1)) * 100}%`,
                    left: `calc(50% - 20px)`,
                    transform: `translateX(${
                        currentStageIndex === 0 ? -280 :
                            currentStageIndex === 1 ? 220 :
                                currentStageIndex === 2 ? -240 :
                                    currentStageIndex === 3 ? 260 :
                                        currentStageIndex === 4 ? -200 :
                                            currentStageIndex === 5 ? 300 :
                                                currentStageIndex === 6 ? -160 :
                                                    340
                    }px) translateY(-50%)`
                  }}
              >
                <div className="relative">
                  {/* Outer Pulse */}
                  <div className="absolute inset-0 w-16 h-16 bg-primary/30 rounded-full animate-ping-slow" />

                  {/* Main Indicator */}
                  <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary/90 rounded-full shadow-2xl shadow-primary/60 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>

                  {/* Direction Arrow */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Enhanced Timeline Items */}
              {timelineItems.map((item, index) => {
                const position = getWavyPosition(index)
                const isAnimated = animatedItems.has(index)

                return (
                    <div
                        key={item.id}
                        className={`absolute transform -translate-y-1/2 transition-all duration-1000 ${
                            visibleItems.has(index) ? "opacity-100" : "opacity-0"
                        }`}
                        style={position}
                    >
                      {/* Enhanced Content Box */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 w-96 ${
                          position.left.includes('-') ? "left-64" : "right-64"
                      } ${getContentStyles(item.status)} ${
                          isAnimated ? 'translate-x-0' : position.left.includes('-') ? '-translate-x-8' : 'translate-x-8'
                      }`}>
                        {/* Header with enhanced styling */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-lg ${
                              item.status === "completed" ? "bg-green-500/20" :
                                  item.status === "current" ? "bg-primary/20" : "bg-primary/10"
                          }`}>
                            <item.icon className={`w-5 h-5 ${
                                item.status === "completed" ? "text-green-400" :
                                    item.status === "current" ? "text-primary" : "text-primary/60"
                            }`} />
                          </div>
                          <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {item.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-foreground leading-tight">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                        {item.status === "current" && (
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                              </div>
                              <span className="text-primary text-sm font-semibold">In Progress</span>
                            </div>
                        )}
                      </div>

                      {/* Enhanced Icon Node */}
                      <div className={`${getStatusStyles(item.status)} ${
                          isAnimated ? 'scale-100 rotate-0' : 'scale-90 rotate-45'
                      }`}>
                        {item.status === "completed" ? (
                            <Check className="w-6 h-6 text-white" />
                        ) : (
                            <item.icon className={`w-6 h-6 ${
                                item.status === "current" ? "text-white" : "text-primary/80"
                            }`} />
                        )}

                        {/* Enhanced Progress Ring */}
                        {item.status === "current" && (
                            <svg className="absolute inset-0 w-16 h-16 transform -rotate-90">
                              <circle
                                  cx="32"
                                  cy="32"
                                  r="26"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  fill="none"
                                  strokeDasharray="163.4"
                                  strokeDashoffset={163.4 - (currentStageProgress / 100) * 163.4}
                                  className="text-primary/40"
                                  strokeLinecap="round"
                              />
                            </svg>
                        )}

                        {/* Connection Lines */}
                        <div className={`absolute top-1/2 w-32 h-0.5 bg-gradient-to-r ${
                            position.left.includes('-')
                                ? 'left-full from-primary/50 to-transparent'
                                : 'right-full from-transparent to-primary/50'
                        } ${item.status === "completed" ? 'from-green-500/50 to-transparent' : ''}`} />
                      </div>
                    </div>
                )
              })}
            </div>
          </div>

          {/* Enhanced Final Call to Action */}
          <div className={`text-center mt-24 p-12 border-2 border-primary/30 rounded-3xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 backdrop-blur-2xl transition-all duration-1000 delay-1200 ${
              inView ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
          }`}>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Ready to Transform Customer Retention in Uzbekistan?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're building the future of AI-powered customer insights, tailored specifically for the Uzbek market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-3">
                  <Rocket className="w-5 h-5" />
                  Follow Our Journey
                </button>
                <button className="px-8 py-4 border-2 border-primary/30 text-primary rounded-2xl font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:border-primary/50 flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Save the Date: Dec 13
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Custom Animations */}
        <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
      </section>
  )
}