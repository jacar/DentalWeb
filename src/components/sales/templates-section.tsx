'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye, Layers, Palette, Shield, ShieldCheck, Zap } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const WHATSAPP_NUMBER = '+573052891719'

const templates = [
    {
        title: 'Moderno & Minimalista',
        description: 'Diseño limpio con tonos menta que transmiten frescura y profesionalismo.',
        image: '/previews/moderno-minimalista.jpg',
        previewUrl: '/previews/moderno-minimalista.html',
        tag: 'Popular',
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: 'Premium & Lujoso',
        description: 'Modo oscuro elegante con detalles en oro para clínicas de alta gama.',
        image: '/previews/premium-lujoso.jpg',
        previewUrl: '/previews/premium-lujoso.html',
        tag: 'Premium',
        icon: <Palette className="w-5 h-5" />
    },
    {
        title: 'Familiar & Amigable',
        description: 'Tonos cálidos y elementos redondeados que reducen la ansiedad del paciente.',
        image: '/previews/familiar-amigable.jpg',
        previewUrl: '/previews/familiar-amigable.html',
        tag: 'Cercano',
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        title: 'Tecnológico 4.0',
        description: 'Estilo futurista con Glassmorphism para especialistas en alta tecnología.',
        image: '/previews/tecnologico.jpg',
        previewUrl: '/previews/tecnologico.html',
        tag: 'Innovador',
        icon: <Layers className="w-5 h-5" />
    },
    {
        title: 'Orgánico & Zen',
        description: 'Colores tierra y bienestar integral centrado en la salud holística.',
        image: '/previews/organico-zen-v2.jpg',
        previewUrl: '/previews/organico-zen-v2.html',
        tag: 'Bienestar',
        icon: <Eye className="w-5 h-5" />
    },
    {
        title: 'Innovador Tech V2',
        description: 'Versión avanzada del estilo tecnológico con mayor enfoque en datos y precisión.',
        image: '/previews/tech-v2.jpg',
        previewUrl: '/previews/tech-v2.html',
        tag: 'Tech',
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: 'Dental Moderna V2',
        description: 'Evolución del estilo moderno con layouts asimétricos y tipografía audaz.',
        image: '/previews/modern-v2.jpg',
        previewUrl: '/previews/modern-v2.html',
        tag: 'Moderno',
        icon: <Palette className="w-5 h-5" />
    },
    {
        title: 'Lujo & Elegancia V2',
        description: 'Refinamiento máximo con fondos de mármol y contrastes dorados premium.',
        image: '/previews/luxury-v2.jpg',
        previewUrl: '/previews/luxury-v2.html',
        tag: 'Elite',
        icon: <Layers className="w-5 h-5" />
    },
    {
        title: 'Bienestar Zen V2',
        description: 'Atmósfera de calma absoluta con paletas naturales y diseño espacioso.',
        image: '/previews/holistic-v2.jpg',
        previewUrl: '/previews/holistic-v2.html',
        tag: 'Relajante',
        icon: <Eye className="w-5 h-5" />
    },
    {
        title: 'Familiar Kids V2',
        description: 'Especialmente diseñado para atraer a padres e hijos con elementos lúdicos.',
        image: '/previews/family-v2.jpg',
        previewUrl: '/previews/family-v2.html',
        tag: 'Infantil',
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        title: 'Aventura Pediátrica',
        description: 'La visita al dentista convertida en un juego. Colores vivos y formas divertidas.',
        image: '/previews/pedia-v1.jpg',
        previewUrl: '/previews/pedia-v1.html',
        tag: 'Diversión',
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: 'Mármol & Oro Premium',
        description: 'Diseño ultra-exclusivo para clínicas exclusivas. Máxima sofisticación visual.',
        image: '/previews/luxury-marble.jpg',
        previewUrl: '/previews/luxury-marble.html',
        tag: 'Premium+',
        icon: <Palette className="w-5 h-5" />
    }
]

export function TemplatesSection() {
    const [selectedTemplate, setSelectedTemplate] = useState<typeof templates[0] | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(false)

    // Drag-to-scroll logic
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [hasMoved, setHasMoved] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused && scrollRef.current && !isDragging) {
                const container = scrollRef.current
                const scrollAmount = window.innerWidth < 640 ? 320 + 32 : 400 + 32

                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
                    container.scrollTo({ left: 0, behavior: 'smooth' })
                } else {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
                }
            }
        }, 3500)

        return () => clearInterval(interval)
    }, [isPaused, isDragging])

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return
        setIsDragging(true)
        setHasMoved(false)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    const handleMouseUp = (e: React.MouseEvent) => {
        setIsDragging(false)
        // Pequeño timeout para permitir que otros eventos (como clics en botones)
        // se procesen antes de que snap-mandatory se reactive
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return

        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 2 // Velocidad de arrastre

        if (Math.abs(walk) > 5) {
            setHasMoved(true)
            e.preventDefault()
            scrollRef.current.scrollLeft = scrollLeft - walk
        }
    }

    const handleSelectTemplate = (templateName: string) => {
        const message = encodeURIComponent(`¡Hola! Me interesa la plantilla "${templateName}" para mi clínica dental. ¿Podrían darme más información?`)
        window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank')
    }

    const handleTemplateClick = (template: typeof templates[0], e: React.MouseEvent) => {
        // Solo abrir si no hubo desplazamiento significativo (es decir, fue un clic limpio)
        if (!hasMoved) {
            setSelectedTemplate(template)
        }
    }

    return (
        <section id="templates" className="py-24 bg-slate-50 relative overflow-hidden select-none">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/20 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-teal-100/50 text-teal-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6"
                    >
                        <Palette className="w-4 h-4" />
                        Estilos Personalizables
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight"
                    >
                        Diferentes Estilos para <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-700">Tu Identidad Dental</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Explore nuestra colección de diseños premium. Deslice para ver todos los estilos disponibles. <br />
                        <span className="font-bold text-teal-600 italic">Precio Especial: $400,000 COP (Incluye dominio y hosting por 1 año)</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-4 inline-flex items-center gap-2 text-xs text-gray-400 bg-white/50 px-4 py-2 rounded-lg border border-gray-100"
                    >
                        <Shield className="w-3 h-3" />
                        Puedes editar fotos, textos y contenido. (Estructura base fija)
                    </motion.div>
                </div>

                <Dialog open={!!selectedTemplate} onOpenChange={(open) => !open && setSelectedTemplate(null)}>
                    {/* Horizontal Scroll Container */}
                    <div className="relative group">
                        <div
                            ref={scrollRef}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => {
                                setIsPaused(false)
                                setIsDragging(false)
                            }}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            className={`flex overflow-x-auto gap-8 pb-12 pt-4 px-4 scrollbar-hide transition-all cursor-grab active:cursor-grabbing ${isDragging ? 'snap-none' : 'snap-x snap-mandatory'}`}
                        >
                            {templates.map((template, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="min-w-[320px] sm:min-w-[400px] snap-start"
                                >
                                    <Card className="overflow-hidden border-0 shadow-xl shadow-slate-200/50 bg-white h-full group/card hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 flex flex-col pointer-events-auto">
                                        <div
                                            className="relative aspect-[4/5] overflow-hidden cursor-pointer"
                                            onClick={(e) => handleTemplateClick(template, e)}
                                        >
                                            <img
                                                src={template.image}
                                                alt={template.title}
                                                draggable="false"
                                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-110 pointer-events-none"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-end p-6 gap-3">
                                                <div className="flex-1 bg-white text-gray-900 hover:bg-teal-500 hover:text-white font-bold rounded-xl transition-colors py-4 text-center text-sm flex items-center justify-center gap-2">
                                                    <Eye className="w-4 h-4" />
                                                    Ver Demo
                                                </div>
                                            </div>
                                            <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 border-0 font-bold px-3 py-1 shadow-md">
                                                {template.tag}
                                            </Badge>
                                        </div>
                                        <CardContent className="p-6 flex-grow flex flex-col">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                                    {template.icon}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">{template.title}</h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                                {template.description}
                                            </p>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-400">Precio Anual:</span>
                                                    <span className="font-bold text-teal-600">$400,000 COP</span>
                                                </div>
                                                <Button
                                                    onClick={() => handleSelectTemplate(template.title)}
                                                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-teal-600/20 transition-all uppercase tracking-wide"
                                                >
                                                    Seleccionar esta plantilla
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Scroll indicator for mobile */}
                        <div className="flex justify-center gap-2 mt-4 lg:hidden">
                            <div className="w-8 h-1 bg-teal-200 rounded-full overflow-hidden">
                                <motion.div
                                    className="w-full h-full bg-teal-600"
                                    animate={{ x: [-32, 32] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                        </div>
                    </div>

                    <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden bg-slate-900 border-slate-800">
                        <DialogHeader className="p-6 bg-white/10 backdrop-blur-xl border-b border-white/10 absolute top-0 left-0 right-0 z-50">
                            <div className="flex items-center justify-between">
                                <div>
                                    <DialogTitle className="text-2xl font-black text-white">{selectedTemplate?.title}</DialogTitle>
                                    <DialogDescription className="text-teal-400 font-medium">
                                        Precio: $400,000 COP (Hosting y Dominio Incluidos)
                                    </DialogDescription>
                                </div>
                                <Button
                                    onClick={() => handleSelectTemplate(selectedTemplate?.title || '')}
                                    className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8"
                                >
                                    ¡La quiero!
                                </Button>
                            </div>
                        </DialogHeader>
                        <div className="w-full h-full pt-20 overflow-hidden bg-slate-950">
                            {selectedTemplate && (
                                <iframe
                                    key={selectedTemplate.title}
                                    src={selectedTemplate.previewUrl}
                                    title={selectedTemplate.title}
                                    className="w-full border-0"
                                    style={{ height: 'calc(90vh - 80px)' }}
                                />
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}
