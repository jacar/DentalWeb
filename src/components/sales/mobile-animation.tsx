'use client'

import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Smartphone, ShieldCheck, Zap } from 'lucide-react'

const images = [
    '/images/m1.png',
    '/images/m2.png',
    '/images/m3.png'
]

export function MobileAnimation() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Independent vertical scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Transitions for entrance and exit
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.15], [0.9, 1])

    // Parallax transforms for horizontal depth
    const videoX = useTransform(scrollYProgress, [0.1, 0.9], ["40px", "-40px"])
    const textX = useTransform(scrollYProgress, [0.1, 0.9], ["-20px", "20px"])

    // Floating background elements transforms
    const float1Y = useTransform(scrollYProgress, [0, 1], [-20, 150])
    const float2Y = useTransform(scrollYProgress, [0, 1], [40, -150])
    const float3Y = useTransform(scrollYProgress, [0, 1], [-80, 80])

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            // Split the progress into 3 parts for the 3 images
            const section = 1 / images.length
            const index = Math.min(Math.floor(v / section), images.length - 1)
            setCurrentImageIndex(index)
        })

        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <section ref={containerRef} className="relative bg-white" style={{ height: '200vh' }}>
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ opacity, scale }}
                    className="w-full flex items-center justify-center px-6 md:px-24 relative z-20"
                >
                    {/* Background Parallax Elements */}
                    <motion.div style={{ y: float1Y, x: -50 }} className="absolute top-[20%] left-[15%] opacity-10 pointer-events-none">
                        <Smartphone size={120} className="text-teal-600" />
                    </motion.div>
                    <motion.div style={{ y: float2Y, x: 50 }} className="absolute bottom-[10%] right-[20%] opacity-10 pointer-events-none">
                        <ShieldCheck size={160} className="text-blue-600" />
                    </motion.div>
                    <motion.div style={{ y: float3Y }} className="absolute top-[40%] right-[10%] opacity-5 pointer-events-none">
                        <Zap size={200} className="text-teal-400" />
                    </motion.div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32 w-full max-w-7xl mx-auto relative z-10">
                        {/* Image Container with Parallax X */}
                        <motion.div
                            style={{ x: videoX }}
                            className="relative shrink-0"
                        >
                            <div
                                style={{
                                    boxShadow: '0 50px 100px -20px rgba(0,0,0,0.15)',
                                }}
                                className="relative w-[300px] md:w-[420px] aspect-[9/18.5] bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-inner"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none z-10" />

                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={images[currentImageIndex]}
                                        src={images[currentImageIndex]}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="w-full h-full object-contain bg-white"
                                        style={{ imageRendering: 'high-quality' as any }}
                                        alt={`Slide ${currentImageIndex + 1}`}
                                    />
                                </AnimatePresence>
                            </div>

                            <motion.div
                                style={{ y: float3Y, x: 30 }}
                                className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl z-20 border border-white/10 hidden md:block"
                            >
                                <div className="flex items-center gap-3 mb-1">
                                    <Zap className="w-5 h-5 text-teal-400 fill-current" />
                                    <span className="text-sm font-black uppercase tracking-widest">Ultra Rápido</span>
                                </div>
                                <div className="text-[10px] text-slate-400 font-bold">Optimizado para 5G</div>
                            </motion.div>

                            {/* Último Proyecto Alert Link */}
                            <motion.a
                                href="https://www.consultorioodontologicola78.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.02 }}
                                className="mt-10 flex items-center justify-between bg-teal-50/50 backdrop-blur-sm border border-teal-100 p-4 rounded-2xl group transition-all hover:bg-white hover:shadow-2xl hover:border-teal-200"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-3 h-3 rounded-full bg-teal-500 animate-ping absolute inset-0" />
                                        <div className="w-3 h-3 rounded-full bg-teal-500 relative z-10" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-teal-600">Último Proyecto</span>
                                        <span className="text-sm font-bold text-slate-900 tracking-tight">Consultorio La 78</span>
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all transform group-hover:rotate-12">
                                    <Smartphone size={14} />
                                </div>
                            </motion.a>
                        </motion.div>

                        {/* Text Content with Parallax X */}
                        <motion.div
                            style={{ x: textX }}
                            className="max-w-xl text-center lg:text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-teal-100"
                            >
                                <Smartphone className="w-4 h-4" />
                                Experiencia Móvil Nativa
                            </motion.div>

                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none uppercase">
                                TU CLÍNICA EN <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">EL BOLSILLO</span>
                            </h2>

                            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 italic">
                                "Diseñamos experiencias móviles tan fluidas que tus pacientes podrán agendar citas mientras esperan el café."
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:bg-teal-50 hover:border-teal-100 group">
                                    <div className="flex items-center gap-3 text-teal-600">
                                        <Zap className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                                        <span className="font-black text-sm uppercase tracking-widest text-slate-900">Velocidad</span>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">Carga instantánea diseñada para retener pacientes.</p>
                                </div>
                                <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:bg-blue-50 hover:border-blue-100 group">
                                    <div className="flex items-center gap-3 text-blue-600">
                                        <ShieldCheck className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                                        <span className="font-black text-sm uppercase tracking-widest text-slate-900">Seguridad</span>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">Protección de datos y agendamiento 100% confiable.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
