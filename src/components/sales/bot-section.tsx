'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, MessageCircle, Zap, Clock, CheckCircle, Users, ArrowRight, Send, Calendar, Star, Sparkles, PhoneCall } from 'lucide-react'

// ── Chat data / flows ────────────────────────────────────────────────────────

type Message = {
    id: number
    from: 'bot' | 'user'
    text: string
    time: string
}

type QuickReply = {
    label: string
    value: string
}

const now = () => new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })

const FLOWS: Record<string, { text: string; replies?: QuickReply[] }[]> = {
    start: [
        {
            text: '¡Hola! 👋 Soy **DentalBot**, el asistente virtual de *Clínica Dental Sonrisa*. Estoy disponible **24/7** para ayudarte.',
            replies: [
                { label: '📅 Agendar cita', value: 'cita' },
                { label: '🦷 Servicios', value: 'servicios' },
                { label: '💰 Precios', value: 'precios' },
                { label: '📍 Ubicación', value: 'ubicacion' },
            ],
        },
    ],
    cita: [
        { text: 'Perfecto, te ayudo a agendar tu cita. ¿Para qué especialidad necesitas la consulta?' },
        {
            text: '',
            replies: [
                { label: '🦷 Odontología General', value: 'cita_general' },
                { label: '✨ Estética Dental', value: 'cita_estetica' },
                { label: '🔹 Ortodoncia', value: 'cita_ortodoncia' },
                { label: '🔧 Implantes', value: 'cita_implantes' },
            ],
        },
    ],
    cita_general: [
        { text: '¡Excelente elección! Tenemos disponibilidad esta semana para Odontología General.' },
        { text: '¿Qué horario te queda mejor?' },
        {
            text: '',
            replies: [
                { label: '🕘 Mañana (8am–12pm)', value: 'confirmar_manana' },
                { label: '🕒 Tarde (2pm–6pm)', value: 'confirmar_tarde' },
            ],
        },
    ],
    cita_estetica: [
        { text: 'Estética dental es uno de nuestros servicios más solicitados. 😁' },
        {
            text: '¿Cuándo prefieres la consulta?',
            replies: [
                { label: '🕘 Mañana', value: 'confirmar_manana' },
                { label: '🕒 Tarde', value: 'confirmar_tarde' },
            ],
        },
    ],
    cita_ortodoncia: [
        { text: 'Nuestros especialistas en ortodoncia tienen años de experiencia.' },
        {
            text: '¿Cuándo te viene bien?',
            replies: [
                { label: '🕘 Mañana', value: 'confirmar_manana' },
                { label: '🕒 Tarde', value: 'confirmar_tarde' },
            ],
        },
    ],
    cita_implantes: [
        { text: 'Los implantes son una solución permanente y natural. 🦷✨' },
        {
            text: '¿Cuándo prefieres la valoración inicial (sin costo)?',
            replies: [
                { label: '🕘 Mañana', value: 'confirmar_manana' },
                { label: '🕒 Tarde', value: 'confirmar_tarde' },
            ],
        },
    ],
    confirmar_manana: [
        { text: '¡Perfecto! 🎉 Tu cita está **pre-agendada** para mañana en horario de mañana.' },
        { text: 'En unos minutos recibirás confirmación por **WhatsApp**. ¿Necesitas algo más?' },
        {
            text: '',
            replies: [
                { label: '✅ Listo, gracias', value: 'fin' },
                { label: '🔙 Menú principal', value: 'menu' },
            ],
        },
    ],
    confirmar_tarde: [
        { text: '¡Perfecto! 🎉 Tu cita está **pre-agendada** para mañana en horario de tarde.' },
        { text: 'En unos minutos recibirás confirmación por **WhatsApp**. ¿Necesitas algo más?' },
        {
            text: '',
            replies: [
                { label: '✅ Listo, gracias', value: 'fin' },
                { label: '🔙 Menú principal', value: 'menu' },
            ],
        },
    ],
    servicios: [
        {
            text: '🦷 Nuestros servicios incluyen:\n\n• **Limpieza y Blanqueamiento**\n• **Ortodoncia** (brackets y Invisalign)\n• **Implantes Dentales**\n• **Estética Dental** (carillas, resinas)\n• **Endodoncia**\n• **Odontología Pediátrica**',
            replies: [
                { label: '💰 Ver precios', value: 'precios' },
                { label: '📅 Agendar cita', value: 'cita' },
                { label: '🔙 Menú', value: 'menu' },
            ],
        },
    ],
    precios: [
        {
            text: '💰 Nuestros precios:\n\n• Consulta inicial → **GRATIS**\n• Limpieza → desde **$80.000**\n• Blanqueamiento → desde **$250.000**\n• Implante completo → desde **$1.500.000**\n• Brackets metálicos → desde **$800.000**\n• Carillas → desde **$300.000 c/u**',
            replies: [
                { label: '📅 Agendar valoración', value: 'cita' },
                { label: '🔙 Menú', value: 'menu' },
            ],
        },
    ],
    ubicacion: [
        {
            text: '📍 Estamos ubicados en:\n\n**Calle 123 #45-67, Bogotá**\n*Cerca al Centro Comercial El Retiro*\n\n🕘 Horarios: Lunes a Sábado 8am – 6pm\n📞 Tel: +57 305 289 1719',
            replies: [
                { label: '🗺️ Ver en Maps', value: 'maps' },
                { label: '📅 Agendar cita', value: 'cita' },
                { label: '🔙 Menú', value: 'menu' },
            ],
        },
    ],
    maps: [
        {
            text: 'Te enviamos la ubicación exacta por WhatsApp 📲. ¡Estamos a solo unos metros del metro!',
            replies: [
                { label: '📅 Agendar cita', value: 'cita' },
                { label: '🔙 Menú', value: 'menu' },
            ],
        },
    ],
    menu: [
        {
            text: '¿En qué más puedo ayudarte? 😊',
            replies: [
                { label: '📅 Agendar cita', value: 'cita' },
                { label: '🦷 Servicios', value: 'servicios' },
                { label: '💰 Precios', value: 'precios' },
                { label: '📍 Ubicación', value: 'ubicacion' },
            ],
        },
    ],
    fin: [
        {
            text: '¡Fue un placer atenderte! 😊 Recuerda que estoy disponible **24/7**. ¡Hasta pronto! 🦷✨',
            replies: [
                { label: '🔄 Reiniciar demo', value: 'reset' },
            ],
        },
    ],
}

// ── Chatbot demo ─────────────────────────────────────────────────────────────

function renderText(text: string) {
    return text.split('\n').map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/)
        return (
            <span key={i}>
                {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**'))
                        return <strong key={j}>{part.slice(2, -2)}</strong>
                    if (part.startsWith('*') && part.endsWith('*'))
                        return <em key={j}>{part.slice(1, -1)}</em>
                    return part
                })}
                {i < text.split('\n').length - 1 && <br />}
            </span>
        )
    })
}

function ChatDemo() {
    const [messages, setMessages] = useState<Message[]>([])
    const [currentReplies, setCurrentReplies] = useState<QuickReply[]>([])
    const [typing, setTyping] = useState(false)
    const [started, setStarted] = useState(false)
    const bottomRef = useRef<HTMLDivElement>(null)
    const messagesRef = useRef<HTMLDivElement>(null)

    // Scroll ONLY inside the chat box, never the page
    useEffect(() => {
        const el = messagesRef.current
        if (el) el.scrollTop = el.scrollHeight
    }, [messages, typing])

    const addBotMessage = useCallback((text: string) =>
        new Promise<void>((resolve) => {
            if (!text) { resolve(); return }
            setMessages((prev) => [
                ...prev,
                { id: Date.now() + Math.random(), from: 'bot' as const, text, time: now() },
            ])
            resolve()
        })
        , [])

    const runFlow = useCallback(async (key: string) => {
        if (key === 'reset') {
            setMessages([])
            setCurrentReplies([])
            setStarted(false)
            return
        }

        const steps = FLOWS[key]
        if (!steps) return

        setCurrentReplies([])
        setTyping(true)

        for (let i = 0; i < steps.length; i++) {
            const step = steps[i]
            const isLast = i === steps.length - 1
            await new Promise((r) => setTimeout(r, 800))
            setTyping(false)
            if (step.text) await addBotMessage(step.text)
            if (step.replies && !isLast) {
                setCurrentReplies(step.replies)
                return
            }
            if (!isLast) setTyping(true)
        }

        const lastStep = steps[steps.length - 1]
        setCurrentReplies(lastStep.replies || [])
        setTyping(false)
    }, [addBotMessage])

    const handleStart = useCallback(() => {
        setStarted(true)
        runFlow('start')
    }, [runFlow])

    const handleReply = useCallback((reply: QuickReply) => {
        setMessages((prev) => [
            ...prev,
            { id: Date.now(), from: 'user' as const, text: reply.label, time: now() },
        ])
        runFlow(reply.value)
    }, [runFlow])

    return (
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col" style={{ height: 560 }}>
            {/* Chat header */}
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-4 flex items-center gap-3 shrink-0">
                <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                    <p className="text-white font-bold text-sm leading-tight">DentalBot ✨</p>
                    <p className="text-teal-100 text-xs">Asistente Virtual · En línea</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-teal-100 text-xs font-medium">24/7</span>
                </div>
            </div>

            {/* Messages area */}
            <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
                {!started && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center h-full text-center gap-4"
                    >
                        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
                            <Bot className="w-8 h-8 text-teal-500" />
                        </div>
                        <div>
                            <p className="text-slate-700 font-bold text-base">Chatbot Demo en Vivo</p>
                            <p className="text-slate-500 text-sm mt-1">Simula cómo interactuarían tus pacientes</p>
                        </div>
                        <button
                            onClick={handleStart}
                            className="px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-bold rounded-2xl transition-all shadow-lg shadow-teal-500/30 flex items-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Iniciar conversación
                        </button>
                    </motion.div>
                )}

                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {msg.from === 'bot' && (
                                <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center mr-2 mt-1 shrink-0">
                                    <Bot className="w-4 h-4 text-teal-600" />
                                </div>
                            )}
                            <div className={`max-w-[78%] ${msg.from === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                                <div
                                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.from === 'bot'
                                        ? 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-sm'
                                        : 'bg-teal-500 text-white rounded-tr-sm'
                                        }`}
                                >
                                    {renderText(msg.text)}
                                </div>
                                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing indicator */}
                <AnimatePresence>
                    {typing && (
                        <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                                <Bot className="w-4 h-4 text-teal-600" />
                            </div>
                            <div className="bg-white shadow-sm border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-full bg-teal-300 block"
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <AnimatePresence>
                {currentReplies.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-slate-100 bg-white px-3 py-3 flex flex-wrap gap-2 shrink-0"
                    >
                        {currentReplies.map((r) => (
                            <button
                                key={r.value}
                                onClick={() => handleReply(r)}
                                className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-teal-200 text-teal-700 bg-teal-50 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all"
                            >
                                {r.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Input bar (decorative) */}
            <div className="px-4 py-3 border-t border-slate-100 bg-white flex items-center gap-2 shrink-0">
                <div className="flex-1 bg-slate-50 rounded-xl px-4 py-2 text-slate-400 text-sm">
                    Escribe un mensaje…
                </div>
                <button className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center shrink-0 opacity-40">
                    <Send className="w-4 h-4 text-white" />
                </button>
            </div>
        </div>
    )
}

// ── Section ──────────────────────────────────────────────────────────────────

const BENEFITS = [
    { icon: <Clock className="w-5 h-5" />, title: 'Disponible 24/7', desc: 'Nunca pierdas un paciente por fuera de horario.' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Agendamiento automático', desc: 'Los pacientes reservan sin llamadas ni esperas.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Respuestas instantáneas', desc: 'FAQ, precios y ubicación resueltos en segundos.' },
    { icon: <Users className="w-5 h-5" />, title: 'Más pacientes nuevos', desc: 'Captura leads mientras atiendes en el consultorio.' },
    { icon: <CheckCircle className="w-5 h-5" />, title: 'Sin esfuerzo extra', desc: 'Configuramos el bot con la información de tu clínica.' },
    { icon: <Star className="w-5 h-5" />, title: 'Conectado a WhatsApp', desc: 'Funciona dentro de WhatsApp Business, donde ya está tu paciente.' },
]

export function BotSection() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background deco */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-6"
                >
                    <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                        <Sparkles className="w-3.5 h-3.5" />
                        Automatización Inteligente
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black text-center text-slate-900 tracking-tighter leading-none mb-6"
                >
                    Tu clínica{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                        responde sola
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-xl text-slate-500 text-center max-w-2xl mx-auto mb-16"
                >
                    Un bot inteligente atiende a tus pacientes, agenda citas y responde preguntas —
                    sin que tengas que levantar un dedo.
                </motion.p>

                {/* Main grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Benefits */}
                    <div>
                        <div className="grid sm:grid-cols-2 gap-5 mb-10">
                            {BENEFITS.map((b, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="group bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-teal-500/5 border border-transparent hover:border-teal-100 rounded-2xl p-5 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-3 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                        {b.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-sm mb-1">{b.title}</h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="https://wa.me/573052891719?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20bot%20automatizado%20para%20mi%20cl%C3%ADnica%20dental."
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-xl shadow-slate-900/20 group"
                        >
                            <PhoneCall className="w-5 h-5" />
                            Quiero mi bot dental
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <p className="text-slate-400 text-xs mt-4 flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-teal-500" />
                            Incluido en el plan Profesional y Premium · Configuración gratis
                        </p>
                    </div>

                    {/* Right: ChatDemo */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <div className="relative">
                            {/* Glow behind chat */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-3xl blur-2xl" />
                            <div className="relative">
                                <ChatDemo />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
