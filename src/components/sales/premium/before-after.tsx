"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface BeforeAfterProps {
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
}

export function BeforeAfter({
    beforeImage,
    afterImage,
    beforeLabel = "Antes",
    afterLabel = "Después"
}: BeforeAfterProps) {
    const [sliderPos, setSliderPos] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = "touches" in e ? e.touches[0].clientX : e.clientX
        const pos = ((x - rect.left) / rect.width) * 100
        setSliderPos(Math.max(0, Math.min(100, pos)))
    }

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMove)
            window.addEventListener("touchmove", handleMove)
            window.addEventListener("mouseup", () => setIsDragging(false))
            window.addEventListener("touchend", () => setIsDragging(false))
        }
        return () => {
            window.removeEventListener("mousemove", handleMove)
            window.removeEventListener("touchmove", handleMove)
            window.removeEventListener("mouseup", () => setIsDragging(false))
            window.removeEventListener("touchend", () => setIsDragging(false))
        }
    }, [isDragging])

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none border border-white/20 group"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
        >
            {/* After Image (Background) */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${afterImage})` }}
            />

            {/* Before Image (Foreground) */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-none"
                style={{
                    backgroundImage: `url(${beforeImage})`,
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                }}
            />

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-white/50">
                    <div className="flex gap-1">
                        <div className="w-1 h-3 bg-slate-400 rounded-full" />
                        <div className="w-1 h-3 bg-slate-400 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute inset-0 p-8 flex justify-between items-end pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-900 border border-white/50">{beforeLabel}</span>
                <span className="glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-900 border border-white/50">{afterLabel}</span>
            </div>

            {/* Dark Overlay for better label contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
    )
}
