'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function ScrollImageAnimation() {
    const containerRef = useRef<HTMLDivElement>(null)

    // La sección durará 200vh para dar espacio al scroll vertical
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // La imagen 1 (D1.png) comienza fuera de vista (abajo) y sube para cubrir a D2
    const y1 = useTransform(scrollYProgress, [0, 0.8], ["100%", "0%"])
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1])

    // Escala sutil para un efecto premium
    const scale2 = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

    // Animación de separación de letras y desplazamiento lateral TOTAL para que desaparezcan
    const letterSpacing = useTransform(scrollYProgress, [0.1, 0.6], ["0.1em", "1.5em"])
    const xLeft = useTransform(scrollYProgress, [0.3, 0.9], ["0%", "-150%"])
    const xRight = useTransform(scrollYProgress, [0.3, 0.9], ["0%", "150%"])
    const opacityImperio = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [0, 1, 1, 0])

    return (
        <section
            ref={containerRef}
            className="relative h-[250vh] bg-white"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Foto 2: La base (D2.webp) */}
                <motion.div
                    style={{ scale: scale2 }}
                    className="absolute inset-0 z-10"
                >
                    <Image
                        src="/images/D2.webp"
                        alt="Dental Interior Base"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay oscuro sutil inicial */}
                    <div className="absolute inset-0 bg-black/10 z-11" />
                </motion.div>

                {/* Foto 1: La que superpone (D1.png) */}
                <motion.div
                    style={{ y: y1, opacity: opacity1 }}
                    className="absolute inset-0 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]"
                >
                    <Image
                        src="/images/D1.png"
                        alt="Dental Anatomy Overlap"
                        fill
                        className="object-cover"
                    />
                    {/* Un gradiente sutil en el borde superior para suavizar la entrada */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                </motion.div>

                {/* Texto flotante gigante con SCROLL INFINITO (Marquee de fondo) */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-25 flex items-center overflow-hidden pointer-events-none opacity-5">
                    <motion.div
                        animate={{ x: [0, -2000] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex whitespace-nowrap gap-20"
                    >
                        {[...Array(6)].map((_, i) => (
                            <h3 key={i} className="text-[20rem] font-black uppercase italic select-none">
                                CIENCIA <span className="text-teal-400">DENTAL</span>
                            </h3>
                        ))}
                    </motion.div>
                </div>

                {/* Texto Central: Imperio Dental con separación lateral TOTAL */}
                <motion.div
                    style={{ opacity: opacityImperio }}
                    className="absolute inset-0 z-40 flex flex-col items-center justify-center text-white pointer-events-none"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xl md:text-2xl font-bold uppercase tracking-[1em] mb-12 text-teal-400 drop-shadow-lg"
                    >
                        Diseñamos
                    </motion.p>

                    <div className="flex flex-col items-center gap-4 w-full px-20 overflow-hidden">
                        <motion.h2
                            style={{ x: xLeft, letterSpacing }}
                            className="text-6xl md:text-[12rem] font-black uppercase text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-none"
                        >
                            TU IMPERIO
                        </motion.h2>
                        <motion.h2
                            style={{ x: xRight, letterSpacing }}
                            className="text-6xl md:text-[12rem] font-black uppercase text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-none text-white"
                        >
                            DENTAL
                        </motion.h2>
                    </div>
                </motion.div>

                {/* Texto principal inferior enfrente */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-16 left-12 z-50 text-white"
                >
                    <div className="w-16 h-1 bg-teal-500 mb-4" />
                    <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase drop-shadow-2xl">
                        CIENCIA <br />
                        <span className="text-teal-400">APLICADA</span>
                    </h3>
                </motion.div>
            </div>
        </section>
    )
}
