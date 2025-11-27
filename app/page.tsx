"use client"

import { useState, useEffect, Suspense, lazy } from "react"
import { Menu, X } from "lucide-react"
import LoadingPage from "@/components/loading_page"
import NavMenu from "@/components/nav-menu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
<LanguageSwitcher />

// Lazy load heavy components
const Hero = lazy(() => import("@/components/hero"))
const ProblemSolution = lazy(() => import("@/components/problem-solution"))
const TeamSection = lazy(() => import("@/components/team-section"))
const Features = lazy(() => import("@/components/features"))
const Roadmap = lazy(() => import("@/components/roadmap"))
const HowWeSolve = lazy(() => import("@/components/how-we-solve"))
const Contact = lazy(() => import("@/components/contact"))
const Footer = lazy(() => import("@/components/footer"))

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Throttle scroll handler for better performance
        let timeout: NodeJS.Timeout
        const handleScroll = () => {
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(() => {
                const windowHeight = window.innerHeight
                const documentHeight = document.documentElement.scrollHeight
                const scrollTop = window.scrollY
                const totalScrollableHeight = documentHeight - windowHeight
                const progress = totalScrollableHeight > 0 ? (scrollTop / totalScrollableHeight) * 100 : 0
                setScrollProgress(Math.min(progress, 100))
            }, 50) // 50ms throttle
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            if (timeout) clearTimeout(timeout)
        }
    }, [])

    return (
        <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
            {/* Fixed Hamburger Menu - Uncommented and optimized */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="fixed top-6 right-6 z-50 p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Toggle menu"
            >
                {menuOpen ? <X className="w-6 h-6 text-primary"/> : <Menu className="w-6 h-6 text-primary"/>}
            </button>
            
            {/* Side Menu */}
            <LanguageSwitcher />
            <NavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

            {/* Scroll Progress Indicator */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-40" style={{width: `${scrollProgress}%`}}/>

            {/* Loading Page - Always render, let it handle visibility */}
            <LoadingPage />

            {/* Main Content with Suspense for lazy loading */}
            <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                <main className="relative">
                    <Hero/>
                    <ProblemSolution/>
                    <TeamSection/>
                    <Features/>
                    <Roadmap/>
                    <HowWeSolve/>
                    <Contact/>
                    <Footer/>
                </main>
            </Suspense>
        </div>
    )
}
