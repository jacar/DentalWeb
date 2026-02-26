'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NextStepsSection() {
    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hola! Estoy interesado en los siguientes pasos para mi página web dental.')
        window.open(`https://wa.me/573052891719?text=${message}`, '_blank')
    }

    const handleCall = () => {
        window.open('tel:+573052891719', '_self')
    }

    const steps = [
        {
            icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
            title: "Escríbenos por WhatsApp",
            description: "Resolvimos tus dudas iniciales y coordinamos una reunión de 15 min.",
            action: handleWhatsApp,
            btnText: "Chat por WhatsApp"
        },
        {
            icon: <Phone className="w-6 h-6 text-blue-500" />,
            title: "Llamada Directa",
            description: "Si prefieres hablar de inmediato, llámanos para una asesoría rápida.",
            action: handleCall,
            btnText: "Llamar Ahora"
        },
        {
            icon: <Calendar className="w-6 h-6 text-teal-500" />,
            title: "Reunión de Definición",
            description: "Organizamos una reunión virtual para definir los pasos siguientes de tu imperio digital.",
            action: handleWhatsApp,
            btnText: "Agendar Reunión"
        }
    ]

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6"
                    >
                        <CheckCircle2 className="w-4 h-4" />
                        ¿Interesado? Estos son los siguientes pasos
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase">
                        TRANSFORMEMOS TU <br />
                        <span className="text-teal-600">CLÍNICA HOY</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        El proceso es simple y personalizado. Estamos listos para ayudarte a dar el siguiente paso hacia la excelencia digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                            <p className="text-slate-600 mb-8 font-medium leading-relaxed">
                                {step.description}
                            </p>
                            <Button
                                onClick={step.action}
                                className="mt-auto w-full bg-slate-900 hover:bg-teal-600 text-white font-bold h-12 rounded-xl transition-all flex items-center gap-2"
                            >
                                {step.btnText}
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/10 via-transparent to-blue-500/10 pointer-events-none" />
                    <h3 className="text-3xl font-bold text-white mb-4 italic">"El primer paso para el éxito es la acción deliberada."</h3>
                    <p className="text-slate-400 text-lg mb-0 font-medium">
                        Escribe al WhatsApp o haz una llamada para organizar una reunión y definir los pasos siguientes.
                    </p>
                </div>
            </div>
        </section>
    )
}
