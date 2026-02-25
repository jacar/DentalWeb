'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Check, Sparkles, Star, Users, Play } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { Magnetic } from '../magnetic'

export function PremiumStickyHero() {
    const handleWhatsApp = () => {
        const mensaje = encodeURIComponent('Hola! Me interesa una pagina web para mi clinica dental. Quiero solicitar la demo gratis.')
        window.open(`https://wa.me/573052891719?text=${mensaje}`, '_blank')
    }

    const features = [
        'Dominio .com incluido',
        'Hosting por 1 año',
        'Panel autoadministrable',
        'Mantenimiento gratis',
        'Asesoría 1 año',
        'Sin costos ocultos'
    ]

    const sectionRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    })

    // Smooth scroll progress for the video scrubbing
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Sync video currentTime with smoothProgress
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        // Ensure video is paused so scrubbing works smoothly
        video.pause()

        const unsubscribe = smoothProgress.on("change", (v) => {
            if (video && video.duration && !isNaN(video.duration)) {
                video.currentTime = v * video.duration
            }
        })

        return () => unsubscribe()
    }, [smoothProgress])

    // Para desvanecer el contenido de texto al final del scroll de la sección hero
    const contentOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])
    const contentScale = useTransform(scrollYProgress, [0.8, 1], [1, 0.95])
    const videoOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.5])
    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    // Animación de desplazamiento horizontal para asegurar la lectura completa hasta "DENTAL"
    const xMovement = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], ["0%", "0%", "-70%", "-75%"])
    const letterSpacing = useTransform(scrollYProgress, [0, 0.5], ["0em", "0.15em"])

    return (
        <section ref={sectionRef} className="relative h-[300vh] bg-slate-950 overflow-visible">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-slate-950">

                {/* Full Width Video Background */}
                <motion.div
                    style={{ scale: videoScale, opacity: videoOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <video
                        ref={videoRef}
                        src="/images/dental.webm"
                        muted
                        playsInline
                        preload="auto"
                        onLoadedData={() => setIsVideoLoaded(true)}
                        className="w-full h-full object-cover"
                    />
                    {/* Cinematic Darkness Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent z-[1]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/80 z-[1]" />
                </motion.div>

                {/* Content */}
                <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 z-10 flex justify-center">
                    <div className="max-w-4xl w-full">

                        {/* Left Content (Premium Text & CTAs) */}
                        <motion.div
                            style={{ opacity: contentOpacity, scale: contentScale }}
                            className="text-center lg:text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-teal-100/50 text-teal-600 font-semibold text-xs mb-8 tracking-wider uppercase"
                            >
                                <Sparkles className="w-3.5 h-3.5 fill-current" />
                                <span>Excelencia Visual y Conversión</span>
                            </motion.div>

                            {/* --- EFECTO CLIPPED H1: DISEÑAMOS TU IMPERIO DENTAL --- */}
                            <div className="relative w-full overflow-hidden mb-8 md:mb-12">
                                <div className="relative w-full h-[18vh] md:h-[40vh] flex items-center justify-center">
                                    {/* El título que se mueve (sin fondo, sobre el video) */}
                                    <motion.h1
                                        style={{ x: xMovement, letterSpacing }}
                                        className="absolute top-1/2 -translate-y-1/2 left-0 text-[15vw] md:text-[14vw] font-black text-teal-400 uppercase whitespace-nowrap leading-none z-20 select-none px-4 md:px-0"
                                    >
                                        DISEÑAMOS TU IMPERIO DENTAL
                                    </motion.h1>

                                </div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-2xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-snug font-medium px-4 md:px-0"
                            >
                                Tecnología visual de vanguardia para clínicas de élite. <br className="hidden md:block" />
                                <span className="font-bold text-teal-400">Eleva tu marca con el poder del 3D.</span>
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 mb-10 max-w-2xl mx-auto"
                            >
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2.5 text-slate-400 justify-center">
                                        <Check className="w-3 h-3 text-teal-400 font-bold" />
                                        <span className="text-xs font-bold tracking-tight">{feature}</span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Magnetic strength={0.4}>
                                    <Button
                                        size="lg"
                                        className="bg-teal-600 hover:bg-teal-500 text-white rounded-xl px-10 py-7 text-xl font-bold group shadow-lg shadow-teal-500/20 border-0"
                                        onClick={handleWhatsApp}
                                    >
                                        Solicitar Demo Gratis
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Magnetic>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-12 pt-8 border-t border-white/10"
                            >
                                <div className="flex items-center gap-4 justify-center">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-teal-500 border-2 border-slate-900 flex items-center justify-center shadow-sm">
                                                <Users className="w-5 h-5 text-white" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-400 font-medium">
                                        <strong className="text-white font-black text-base">200+</strong> especialistas ya confían
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Progress Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-teal-400 font-bold">Desliza para ver la transformación</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-teal-400 to-transparent" />
                </motion.div>
            </div>
        </section>
    )
}
