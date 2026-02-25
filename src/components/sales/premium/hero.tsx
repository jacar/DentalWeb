"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { useRef } from "react"

export function PremiumHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-slate-950 pt-20"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px]"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-[120px]"
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                <motion.div
                    style={{ opacity, scale }}
                    className="flex flex-col items-center text-center max-w-5xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-blue-100/50 text-blue-600 dark:text-blue-400 font-semibold text-xs mb-8 tracking-wider uppercase"
                    >
                        <Sparkles className="w-3.5 h-3.5 fill-current" />
                        <span>Excelencia Visual y Conversión</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white mb-8 leading-[0.9] tracking-tighter"
                    >
                        TRANSFORMAMOS <br />
                        <span className="text-gradient">SONRISAS</span> EN ÉXITO
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl leading-relaxed font-medium"
                    >
                        Estrategias digitales exclusivas para clínicas odontológicas que buscan liderar el mercado premium. Diseño, tecnología y resultados.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <Button size="xl" className="bg-slate-900 dark:bg-white dark:text-slate-950 text-white hover:scale-105 transition-transform rounded-full px-12 py-8 text-xl font-bold group shadow-2xl">
                            Iniciar Proyecto
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                        </Button>
                        <button className="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white hover:opacity-70 transition-opacity">
                            <span className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center">
                                <Star className="w-5 h-5 fill-current" />
                            </span>
                            Ver Casos de Éxito
                        </button>
                    </motion.div>
                </motion.div>

                {/* Floating Elements (3D Simulation) */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 10, 0],
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[15%] left-[5%] opacity-20 dark:opacity-40"
                    >
                        <div className="w-32 h-32 bg-blue-400/30 rounded-full blur-2xl" />
                        <span className="text-8xl absolute top-0 left-0">🦷</span>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 40, 0],
                            rotate: [0, -15, 0],
                        }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[20%] right-[5%] opacity-20 dark:opacity-40"
                    >
                        <div className="w-40 h-40 bg-indigo-400/30 rounded-full blur-2xl" />
                        <span className="text-9xl absolute top-0 left-0">✨</span>
                    </motion.div>

                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-slate-200/50 dark:border-white/5 rounded-full scale-[1.5] -z-10"
                    />
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 origin-left"
            />

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600 font-bold">Scroll para explorar</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
            </motion.div>
        </section>
    )
}
