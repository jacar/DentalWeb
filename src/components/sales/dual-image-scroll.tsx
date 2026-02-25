'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export function DualImageScroll() {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    // D2 starts fully below (translateY 100%) and ends at 0 (fully covers D1)
    const d2Y = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])

    // D2 opacity: fades in from 0 to 1 as it slides up
    const d2Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

    // Subtle scale on D1 as D2 covers it (feels like a push/pull)
    const d1Scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])

    return (
        <div
            ref={sectionRef}
            className="relative"
            style={{ height: '250vh' }} // tall enough for a slow, smooth overlap
        >
            {/* Sticky container that fills the viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* ── D1: base image (scales slightly out as D2 arrives) ── */}
                <motion.div
                    style={{ scale: d1Scale }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src="/d1.png"
                        alt="Diseño dental 1"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* ── D2: slides up from the bottom and overlays D1 ── */}
                <motion.div
                    style={{ y: d2Y, opacity: d2Opacity }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src="/d2.png"
                        alt="Diseño dental 2"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Optional subtle vignette at the bottom for depth */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
        </div>
    )
}
