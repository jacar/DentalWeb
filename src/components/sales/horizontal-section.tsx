'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { createContext, useContext, useRef } from 'react'
import { FallingDentalElements } from './falling-dental-elements'

export const HorizontalSectionContext = createContext<MotionValue<number> | null>(null)

export function useHorizontalScroll() {
    const context = useContext(HorizontalSectionContext)
    if (!context) {
        throw new Error('useHorizontalScroll must be used within a HorizontalSection')
    }
    return context
}

interface HorizontalSectionProps {
    children: React.ReactNode
    horizontalWidth?: string // e.g. "300" (percentage based on viewports)
    showDecorations?: boolean
}

export function HorizontalSection({ children, horizontalWidth = "300", showDecorations = false }: HorizontalSectionProps) {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(parseInt(horizontalWidth) - 100)}%`])

    return (
        <section ref={targetRef} className="relative bg-white h-auto lg:h-[var(--h-width)]" style={{ '--h-width': `${horizontalWidth}vh` } as React.CSSProperties}>
            <div className="relative lg:sticky top-0 h-auto lg:h-screen flex flex-col lg:flex-row lg:items-center overflow-hidden">
                {/* Background Decoration Layer (Now sticky too) */}
                {showDecorations && (
                    <div className="absolute inset-0 z-0 hidden lg:block">
                        <FallingDentalElements progress={scrollYProgress} />
                    </div>
                )}

                <motion.div style={{ x }} className="flex flex-col lg:flex-row h-auto lg:h-full lg:items-center relative z-10 w-full max-lg:!transform-none">
                    <HorizontalSectionContext.Provider value={scrollYProgress}>
                        {children}
                    </HorizontalSectionContext.Provider>
                </motion.div>

                {/* Subtle Horizontal Progress Indicator */}
                <div className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden z-20">
                    <motion.div
                        style={{ scaleX: scrollYProgress }}
                        className="h-full bg-teal-500 origin-left"
                    />
                </div>
            </div>
        </section>
    )
}
