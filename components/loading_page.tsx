"use client"

import { useEffect, useState, useRef } from "react"

export default function LoadingPage() {
    const [show, setShow] = useState(true)
    const [lines, setLines] = useState<string[]>([])
    const [currentProgress, setCurrentProgress] = useState(0)
    const terminalRef = useRef<HTMLDivElement>(null)

    const generateRandomIP = () => {
        return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
    }

    const generateProgressBar = (percent: number) => {
        const bars = Math.floor(percent / 5)
        return `[${'='.repeat(bars)}${' '.repeat(20 - bars)}] ${percent}%`
    }

    useEffect(() => {
        const initialLines = [
            "[Auralife@terminal:~]$ Initializing AI500 Hackathon Protocol...",
            "[Auralife@terminal:~]$ Team Members: Sanjarbek, Doniyor",
            "[Auralife@terminal:~]$ Mission: Penetrate Agrobank Security",
            "[Auralife@terminal:~]$ Loading cyber modules...",
            "[Auralife@terminal:~]$ Establishing encrypted connection..."
        ]

        // Set initial lines
        setLines(initialLines)

        const sequence = [
            { delay: 800, action: 'scan' },
            { delay: 1200, action: 'progress', target: 25 },
            { delay: 1600, action: 'firewall' },
            { delay: 2000, action: 'progress', target: 50 },
            { delay: 2400, action: 'encryption' },
            { delay: 2800, action: 'progress', target: 75 },
            { delay: 3200, action: 'access' },
            { delay: 3600, action: 'progress', target: 100 },
            { delay: 4000, action: 'complete' }
        ]

        let timeoutIds: NodeJS.Timeout[] = []

        sequence.forEach((step, index) => {
            const timeoutId = setTimeout(() => {
                switch (step.action) {
                    case 'scan':
                        const ip = generateRandomIP()
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ Scanning network... Found: ${ip}`])
                        break

                    case 'progress':
                        if (step.target) {
                            setCurrentProgress(step.target)
                            setLines(prev => [...prev, `[Auralife@terminal:~]$ Bypassing security ${generateProgressBar(step.target as number)}`])
                        }
                        break

                    case 'firewall':
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ Firewall detected! Deploying countermeasures...`])
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ Injecting malicious payload...`])
                        break

                    case 'encryption':
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ Decrypting SSL certificates...`])
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ Brute forcing encryption keys...`])
                        break

                    case 'access':
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ Root access achieved!`])
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ Downloading classified data...`])
                        break

                    case 'complete':
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ #######################################`])
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ # AGROBANK AI500 SYSTEM COMPROMISED #`])
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ #######################################`])
                        setLines(prev => [...prev, `[Auralife@terminal:~]$ Welcome to the future of banking...`])

                        setTimeout(() => {
                            setShow(false)
                        }, 1500)
                        break
                }

                // Auto-scroll to bottom
                if (terminalRef.current) {
                    terminalRef.current.scrollTop = terminalRef.current.scrollHeight
                }
            }, step.delay)

            timeoutIds.push(timeoutId)
        })

        // Add some random system messages
        const randomMessages = [
            () => setLines(prev => [...prev, `[System] Unauthorized access attempt logged from ${generateRandomIP()}`]),
            () => setLines(prev => [...prev, `[Security] Intrusion detection system activated`]),
            () => setLines(prev => [...prev, `[Firewall] Port 443 traffic anomaly detected`]),
            () => setLines(prev => [...prev, `[Admin] User session terminated unexpectedly`]),
        ]

        randomMessages.forEach((message, index) => {
            const timeoutId = setTimeout(message, 500 + (index * 600))
            timeoutIds.push(timeoutId)
        })

        return () => {
            timeoutIds.forEach(id => clearTimeout(id))
        }
    }, [])

    if (!show) return null

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl h-[500px] bg-gray-900 rounded-lg border border-green-500 overflow-hidden font-mono text-sm">
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-3 border-b border-green-500 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-green-400 font-bold">AURALIFE TERMINAL - AI500 HACKATHON</div>
                    <div className="text-gray-400 text-xs">AGROBANK PENETRATION</div>
                </div>

                {/* Terminal Content */}
                <div
                    ref={terminalRef}
                    className="p-4 h-[420px] overflow-y-auto bg-gray-950"
                >
                    {/* Welcome Banner */}
                    <div className="text-green-300 mb-4">
                        <div>╔════════════════════════════════════════╗</div>
                        <div>║    AURALIFE SECURITY TERMINAL v3.1.4   ║</div>
                        <div>║         AI500 BY AGROBANK              ║</div>
                        <div>║    OPERATORS: SANJARBEK, DONIYOR      ║</div>
                        <div>╚════════════════════════════════════════╝</div>
                    </div>

                    {/* Animated lines */}
                    {lines.map((line, index) => (
                        <div
                            key={index}
                            className={`mb-1 ${
                                line.includes('AGROBANK') ? 'text-yellow-400 font-bold' :
                                    line.includes('System') || line.includes('Security') || line.includes('Firewall') || line.includes('Admin') ? 'text-red-400' :
                                        line.includes('################################') ? 'text-green-500' :
                                            'text-green-300'
                            }`}
                        >
                            {line}
                            {index === lines.length - 1 && !line.includes('Welcome') && (
                                <span className="ml-1 animate-pulse bg-green-400">▊</span>
                            )}
                        </div>
                    ))}

                    {/* Final message */}
                    {lines.some(line => line.includes('Welcome to the future')) && (
                        <div className="mt-4 text-center">
                            <div className="text-green-500 text-lg font-bold mb-2">
                                ACCESS GRANTED
                            </div>
                            <div className="text-yellow-400 text-sm animate-pulse">
                                Entering AI500 Hackathon Portal...
                            </div>
                        </div>
                    )}
                </div>

                {/* Terminal Footer */}
                <div className="bg-gray-800 px-4 py-2 border-t border-green-500 text-green-400 text-xs flex justify-between">
                    <div>Status: {currentProgress < 100 ? 'Penetrating...' : 'System Compromised'}</div>
                    <div>Progress: {currentProgress}%</div>
                    <div>Auralife Team</div>
                </div>
            </div>
        </div>
    )
}