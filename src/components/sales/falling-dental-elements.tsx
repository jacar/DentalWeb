'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useRef } from 'react'

interface FallingElementProps {
    progress: MotionValue<number>
    index: number
}

const ToothIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 4.5 4 4 2.5 4C1.5 4 1 4.5 1 5.5V11C1 15 4 18 7 20C8 20.5 9 21.5 10 22H14C15 21.5 16 20.5 17 20C20 18 23 15 23 11V5.5C23 4.5 22.5 4 21.5 4C20 4 18.5 4.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="white" fillOpacity="0.4" />
        <path d="M12 2.5C9.8 2.5 8 3.8 7.1 5.6C6.2 4.6 4.9 4 3.5 4C2.7 4 2.5 4.2 2.5 5V10.5C2.5 14.1 5.2 16.8 7.9 18.6C8.8 19.1 9.7 20 10.6 20.4H13.4C14.3 20 15.2 19.1 16.1 18.6C18.8 16.8 21.5 14.1 21.5 10.5V5C21.5 4.2 21.3 4 20.5 4C19.1 4 17.8 4.6 16.9 5.6C16 3.8 14.2 2.5 12 2.5Z" stroke="white" strokeOpacity="0.5" strokeWidth="0.5" />
    </svg>
)

function FallingItem({ progress, index }: FallingElementProps) {
    // Randomize start position and speed
    const startX = `${(index * 25) % 100}%`
    const speedMultiplier = 1 + (index % 3) * 0.5

    // Vertical translation based on scroll progress
    // Elements "fall" from top to bottom
    const y = useTransform(progress, [0, 1], ["-20%", "120%"])

    // Rotation for 3D feel
    const rotate = useTransform(progress, [0, 1], [0, 360 * (index % 2 === 0 ? 1 : -1)])
    const opacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 0.6, 0.6, 0])

    return (
        <motion.div
            style={{
                position: 'absolute',
                left: startX,
                top: 0,
                y,
                rotate,
                opacity,
                scale: 0.5 + (index % 5) * 0.2,
            }}
            className="pointer-events-none z-0"
        >
            {index % 3 === 0 ? (
                <ToothIcon className="w-16 h-16 md:w-24 md:h-24 blur-[0.5px] text-white/40" />
            ) : index % 3 === 1 ? (
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/40 bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <Sparkles className="w-1/2 h-1/2 text-white/60" />
                </div>
            ) : (
                <div className="w-10 h-2 md:w-16 md:h-3 bg-white/40 rounded-full blur-[1px] transform rotate-45" />
            )}
        </motion.div>
    )
}

export function FallingDentalElements({ progress }: { progress: MotionValue<number> }) {
    // Create an array of 25 elements for more density
    const items = Array.from({ length: 25 })

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {items.map((_, i) => (
                <FallingItem key={i} progress={progress} index={i} />
            ))}
        </div>
    )
}
