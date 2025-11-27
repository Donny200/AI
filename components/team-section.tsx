"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export default function TeamSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const teamMembers = [
        {
            name: "Yuldashev Sanjarbek",
            role: "Team Leader, Backend Developer",
            github: "https://github.com/Sanjarbek-2007",
            linkedin: "https://www.linkedin.com/in/sanjarbek-yuldashev-6097aa310",
            description: "Leading the technical architecture and backend development with expertise in scalable systems and AI integration."
        },
        {
            name: "Xudayarov Doniyor",
            role: "Fullstack Developer",
            github: "https://github.com/Donny200",
            linkedin: "https://linkedin.com/in/doniyor",
            description: "Building seamless user experiences and robust full-stack solutions with modern web technologies."
        }
    ]

    return (
        <section
            ref={sectionRef}
            id="team"
            className="relative py-20 px-6 overflow-hidden"
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-background to-gray-950 animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10 animate-pulse-slow" />

                {/* Animated Grid Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="grid-dense" width="30" height="30" patternUnits="userSpaceOnUse">
                                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-dense)" />
                    </svg>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${10 + Math.random() * 10}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 border border-primary/50 rounded-full text-sm text-primary bg-primary/5">
                        The Minds Behind Auralife
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Meet Our <span className="text-primary">Team</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Two passionate developers united by a vision to transform Uzbekistan's AI landscape
                    </p>
                </div>

                {/* Team Members */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.name}
                            className={`flex flex-col items-center text-center transition-all duration-1000 ${
                                isInView
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-12 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Profile Image Container - Placeholder for your arm photo */}
                            <div className="relative mb-8">
                                <div className="w-48 h-48 rounded-full border-4 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                                    {/* This is where your arm photo with circle placeholder will go */}
                                    <div className="w-40 h-40 rounded-full bg-primary/5 border-2 border-primary/20 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-primary/60 text-sm font-mono">
                          Photo
                        </span>
                                            </div>
                                            <span className="text-xs text-muted-foreground">Your Image Here</span>
                                        </div>
                                    </div>

                                    {/* Animated Ring */}
                                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping-slow" />
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full animate-pulse" />
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                            </div>

                            {/* Team Member Info */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary font-semibold text-lg">
                                        {member.role}
                                    </p>
                                </div>

                                <p className="text-muted-foreground leading-relaxed max-w-md">
                                    {member.description}
                                </p>

                                {/* Social Links */}
                                <div className="flex justify-center space-x-4 pt-4">
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary/10 border border-primary/20 rounded-full text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary/10 border border-primary/20 rounded-full text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Collaboration Message */}
                <div className={`text-center mt-16 p-8 border border-primary/20 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent backdrop-blur-sm transition-all duration-1000 delay-600 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                        United by Innovation
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Together, we're building the future of AI in Uzbekistan - combining technical excellence
                        with deep understanding of local challenges to create solutions that truly make a difference.
                    </p>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.1); opacity: 0; }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </section>
    )
}