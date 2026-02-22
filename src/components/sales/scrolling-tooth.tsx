'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ScrollingTooth({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Smooth opacity transitions for 3 separate images (d1, d2, d3)
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.8], [0, 1, 1, 0])
    const opacity3 = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1])

    // Motion for the visual container - LARGER SCALE
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.25, 1.1])
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0])

    return (
        <div className="relative w-full flex flex-col items-center justify-center z-20">
            <motion.div
                style={{ scale, rotate }}
                className="relative w-full aspect-square max-w-[550px] mx-auto"
            >
                {/* Removed the background container div for a cleaner look */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Layered images for smooth transitions: d1 -> d2 -> d3 */}
                    <motion.img
                        src="/d1.png"
                        alt="Estado 1"
                        style={{ opacity: opacity1 }}
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                    <motion.img
                        src="/d2.png"
                        alt="Estado 2"
                        style={{ opacity: opacity2 }}
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                    <motion.img
                        src="/d3.png"
                        alt="Estado 3"
                        style={{ opacity: opacity3 }}
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                </div>

                {/* ULTRA-VISIBLE labels */}
                <motion.div
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-br from-teal-600 to-cyan-800 p-[3px] rounded-[1.8rem] shadow-[0_30px_60px_rgba(13,148,136,0.3)] z-30 min-w-[320px]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <div className="bg-white rounded-[1.6rem] px-8 py-5 text-center">
                        <motion.span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-cyan-900 text-2xl sm:text-3xl uppercase tracking-tighter leading-none mb-2">
                            {useTransform(scrollYProgress,
                                [0, 0.45, 0.8],
                                ["¿CLÍNICA INVISIBLE?", "¿PERDIENDO CITAS?", "¡TOMA EL CONTROL!"]
                            )}
                        </motion.span>

                        <div className="flex justify-center gap-3 mt-2">
                            {[0.2, 0.5, 0.85].map((point, i) => (
                                <motion.div
                                    key={i}
                                    className="h-2 rounded-full bg-slate-100"
                                    style={{
                                        width: useTransform(scrollYProgress,
                                            [point - 0.1, point, point + 0.1],
                                            ["12px", "40px", "12px"]
                                        ),
                                        backgroundColor: useTransform(scrollYProgress,
                                            [point - 0.1, point, point + 0.1],
                                            ["#f1f5f9", "#0d9488", "#f1f5f9"]
                                        )
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
