"use client"

import { motion } from "framer-motion"
import { Monitor, Smartphone, Zap, Target, Palette, BarChart3, Plus } from "lucide-react"

const services = [
    {
        title: "DISEÑO UI/UX",
        description: "Interfaces disruptivas que capturan la esencia de tu clínica y maximizan la retención.",
        icon: Palette,
        tags: ["Premium", "Minimal"]
    },
    {
        title: "MOBILE FIRST",
        description: "Experiencias móviles ultrarápidas diseñadas para el comportamiento del paciente actual.",
        icon: Smartphone,
        tags: ["Responsive", "Fast"]
    },
    {
        title: "SEO ESTRATÉGICO",
        description: "Posicionamiento orgánico de alto nivel para dominar las búsquedas locales.",
        icon: Target,
        tags: ["Growth", "Local"]
    },
    {
        title: "NEXT.JS ENGINE",
        description: "Potencia tecnológica que garantiza tiempos de carga casi instantáneos.",
        icon: Zap,
        tags: ["React", "Future"]
    },
    {
        title: "NEUROMARKETING",
        description: "Copywriting persuasivo basado en ciencia para aumentar tus citas mensuales.",
        icon: Monitor,
        tags: ["Psychology", "Sales"]
    },
    {
        title: "GROWTH DATA",
        description: "Análisis de métricas críticas para escalar el éxito de tu práctica dental.",
        icon: BarChart3,
        tags: ["Data", "Scale"]
    }
]

export function PremiumServices() {
    return (
        <section className="py-16 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                        >
                            Capacidades Pro
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter"
                        >
                            INGENIERÍA DIGITAL <br />
                            <span className="text-slate-400">PARA ÉLITE DENTAL</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="hidden lg:block pb-2"
                    >
                        <p className="text-slate-500 dark:text-slate-400 max-w-xs text-right font-medium italic">
                            "Combinamos arte y conversión para crear marcas que no solo se ven bien, sino que venden."
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative p-12 border border-slate-100 dark:border-slate-900 lg:hover:bg-slate-50 dark:lg:hover:bg-slate-900/50 transition-colors duration-500 overflow-hidden"
                        >
                            {/* Decorative number */}
                            <span className="absolute top-8 right-12 text-6xl font-black text-slate-50 dark:text-slate-900 lg:group-hover:text-blue-50/50 dark:lg:group-hover:text-blue-900/20 transition-colors duration-500 -z-10">
                                0{index + 1}
                            </span>

                            <div className="flex flex-col h-full">
                                <div className="mb-8 p-4 w-fit rounded-2xl bg-slate-50 dark:bg-slate-900 lg:group-hover:bg-blue-600 lg:group-hover:text-white transition-all duration-500">
                                    <service.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-600 px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white dark:text-slate-950 text-white flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
