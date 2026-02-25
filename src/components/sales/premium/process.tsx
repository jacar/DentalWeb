"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import { Search, PenTool, Code, Rocket } from "lucide-react"

const steps = [
    {
        title: "Descubrimiento y Análisis",
        description: "Analizamos el ADN de tu clínica, tus pacientes ideales y tu competencia.",
        icon: Search,
        color: "blue"
    },
    {
        title: "Concepto de Diseño",
        description: "Creamos un prototipo visual premium que refleje la excelencia de tus tratamientos.",
        icon: PenTool,
        color: "indigo"
    },
    {
        title: "Desarrollo Premium",
        description: "Desarrollamos tu web con las últimas tecnologías para una carga ultra rápida.",
        icon: Code,
        color: "sky"
    },
    {
        title: "Lanzamiento y Crecimiento",
        description: "Puesta en marcha y estrategia de optimización continua para captar pacientes.",
        icon: Rocket,
        color: "blue"
    }
]

export function PremiumProcess() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section ref={containerRef} className="py-32 bg-slate-950 relative overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-blue-500 font-black tracking-[0.4em] uppercase text-xs mb-6 block"
                    >
                        Metodología de Éxito
                    </motion.span>
                    <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.85] uppercase">
                        DE LA IDEA <br />
                        <span className="text-slate-500">AL DOMINIO DIGITAL</span>
                    </h2>
                    <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto italic">
                        "Un camino estructurado para convertir tu clínica en la opción #1 de tu ciudad."
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500 via-teal-400 to-blue-500 -translate-x-1/2 origin-top z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    />

                    <div className="space-y-32">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0
                            return (
                                <div key={step.title} className="relative flex items-center justify-center md:justify-between group">
                                    {/* Icon Circle */}
                                    <div className="absolute left-[-15px] md:left-1/2 w-[60px] h-[60px] rounded-full bg-slate-900 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center -translate-x-1/2 z-20 transition-all group-hover:scale-110 group-hover:border-blue-500/50">
                                        <step.icon className="w-6 h-6 text-blue-400" />
                                    </div>

                                    {/* Content - Desktop Right */}
                                    <div className={`hidden md:block w-[42%] ${isEven ? 'order-last' : 'invisible'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-xl group-hover:bg-white/10 transition-colors"
                                        >
                                            <span className="text-blue-500 font-extrabold text-xs mb-4 block tracking-widest">0{index + 1}</span>
                                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
                                            <p className="text-slate-400 leading-relaxed text-lg">{step.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Content - Desktop Left */}
                                    <div className={`hidden md:block w-[42%] ${!isEven ? 'order-first' : 'invisible'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: -40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-xl text-right group-hover:bg-white/10 transition-colors"
                                        >
                                            <span className="text-blue-500 font-extrabold text-xs mb-4 block tracking-widest">0{index + 1}</span>
                                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
                                            <p className="text-slate-400 leading-relaxed text-lg">{step.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Mobile Content */}
                                    <div className="md:hidden w-full pl-20">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="p-8 rounded-[2rem] bg-white/5 border border-white/5"
                                        >
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
