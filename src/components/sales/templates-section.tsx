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
        title: 'Clínica Dental Boutique',
        description: 'Diseño ultra-limpio en tonos menta y blanco para una experiencia de calma y frescura.',
        image: '/previews/moderno-minimalista.jpg',
        previewUrl: '/previews/moderno-minimalista.html',
        tag: 'Más Popular',
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: 'Estética Dental Premium',
        description: 'Elegancia en modo oscuro con acentos dorados, ideal para centros de alta gama.',
        image: '/previews/premium-lujoso.jpg',
        previewUrl: '/previews/premium-lujoso.html',
        tag: 'Lujo',
        icon: <Palette className="w-5 h-5" />
    },
    {
        title: 'Odontología Familiar',
        description: 'Cercanía y amabilidad con elementos suaves que reducen el miedo al dentista.',
        image: '/previews/familiar-amigable.jpg',
        previewUrl: '/previews/familiar-amigable.html',
        tag: 'Cercano',
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        title: 'Ortodoncia Invisible 4.0',
        description: 'Estilo tecnológico futurista para especialistas en Invisalign y tecnología digital.',
        image: '/previews/tecnologico.jpg',
        previewUrl: '/previews/tecnologico.html',
        tag: 'Alta Tecnología',
        icon: <Layers className="w-5 h-5" />
    },
    {
        title: 'Odontología Holística',
        description: 'Enfoque orgánico y natural centrado en el bienestar integral del paciente.',
        image: '/previews/organico-zen-v2.jpg',
        previewUrl: '/previews/organico-zen-v2.html',
        tag: 'Zen',
        icon: <Eye className="w-5 h-5" />
    },
    {
        title: 'Implantología Avanzada',
        description: 'Versión técnica con enfoque en precisión clínica y resultados de larga duración.',
        image: '/previews/tech-v2.jpg',
        previewUrl: '/previews/tech-v2.html',
        tag: 'Precisión',
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: 'Odonto-Estética Moderna',
        description: 'Layout asimétrico y tipografía impactante para dentistas que marcan tendencia.',
        image: '/previews/modern-v2.jpg',
        previewUrl: '/previews/modern-v2.html',
        tag: 'Moderno',
        icon: <Palette className="w-5 h-5" />
    },
    {
        title: 'Élite Marble & Gold',
        description: 'El máximo nivel de sofisticación con texturas de mármol para clínicas boutique.',
        image: '/previews/luxury-v2.jpg',
        previewUrl: '/previews/luxury-v2.html',
        tag: 'Élite',
        icon: <Layers className="w-5 h-5" />
    },
    {
        title: 'Armonía Dental Zen',
        description: 'Paleta de colores tierra y aire para una atmósfera de relajación absoluta.',
        image: '/previews/holistic-v2.jpg',
        previewUrl: '/previews/holistic-v2.html',
        tag: 'Serenidad',
        icon: <Eye className="w-5 h-5" />
    },
    {
        title: 'Odontopediatría Mágica',
        description: 'Diseño lúdico y colorido para atraer a los más pequeños y sus familias.',
        image: '/previews/family-v2.jpg',
        previewUrl: '/previews/family-v2.html',
        tag: 'Kids',
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        title: 'Aventura Pediátrica',
        description: 'Transforma la consulta en un juego con este estilo vibrante y divertido.',
        image: '/previews/pedia-v1.jpg',
        previewUrl: '/previews/pedia-v1.html',
        tag: 'Diversión',
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: 'Odontología de Lujo',
        description: 'Sofisticación máxima para pacientes que buscan la exclusividad total.',
        image: '/previews/luxury-marble.jpg',
        previewUrl: '/previews/luxury-marble.html',
        tag: 'Exclusivo',
        icon: <Palette className="w-5 h-5" />
    },
    {
        title: 'Dental Boutique Minimal',
        description: 'Minimalismo extremo en blanco y gris. Para clínicas con enfoque artístico.',
        image: '/previews/elite-boutique-v1.jpg',
        previewUrl: '/previews/elite-boutique-v1.html',
        tag: 'Minimalista',
        icon: <Layers className="w-5 h-5" />
    },
    {
        title: 'Implantología de Élite',
        description: 'Diseño arquitectónico en tonos pizarra que proyecta máxima autoridad y precisión quirúrgica.',
        image: '/previews/dark-implantology-v1.jpg',
        previewUrl: '/previews/dark-implantology-v1.html',
        tag: 'Especializado',
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: 'Boutique Cálida & Minimalista',
        description: 'Ambiente sereno y acogedor en tonos arena para una experiencia dental sin estrés.',
        image: '/previews/warm-boutique-v1.jpg',
        previewUrl: '/previews/warm-boutique-v1.html',
        tag: 'Serenidad',
        icon: <Eye className="w-5 h-5" />
    },
    {
        title: 'Precisión Naval Ejecutiva',
        description: 'Estética en azul profundo que comunica confianza, seguridad y excelencia clínica clínica.',
        image: '/previews/navy-precision-v1.jpg',
        previewUrl: '/previews/navy-precision-v1.html',
        tag: 'Autoridad',
        icon: <ShieldCheck className="w-5 h-5" />
    }
]

export function TemplatesSection() {
    const [selectedTemplate, setSelectedTemplate] = useState<typeof templates[0] | null>(null)

    const handleSelectTemplate = (templateName: string) => {
        const message = encodeURIComponent(`¡Hola! Me interesa la plantilla "${templateName}" para mi clínica dental. ¿Podrían darme más información?`)
        window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank')
    }

    return (
        <div className="flex h-screen items-center px-12 md:px-24 bg-slate-50 w-max shrink-0 flex-nowrap">
            {/* Header Content */}
            <div className="min-w-[400px] md:min-w-[550px] pr-16 shrink-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 bg-teal-100/50 text-teal-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6"
                >
                    <Palette className="w-4 h-4" />
                    Personalización Élite
                </motion.div>

                <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-none tracking-tight">
                    ESTILOS QUE <br />
                    <span className="text-gradient">CAUTIVAN</span>
                </h2>

                <p className="text-xl text-gray-600 mb-8 max-w-md">
                    Diseños premium optimizados para la máxima conversión de pacientes.
                    <br />
                    <span className="font-bold text-teal-600 mt-4 block">$400.000 COP / Año</span>
                </p>
            </div>

            {/* Horizontal Templates List */}
            <div className="flex gap-8 items-center">
                {templates.map((template, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="min-w-[320px] md:min-w-[400px]"
                    >
                        <Card className="overflow-hidden border-0 shadow-2xl bg-white h-[600px] flex flex-col group/card transition-all duration-500 hover:-translate-y-4">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img
                                    src={template.image}
                                    alt={template.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-110"
                                />
                                <Badge className="absolute top-4 right-4 bg-white text-gray-900 font-bold px-3 py-1 shadow-xl">
                                    {template.tag}
                                </Badge>
                            </div>
                            <CardContent className="p-6 flex flex-col justify-between flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                                        {template.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{template.title}</h3>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Button
                                        variant="outline"
                                        onClick={() => setSelectedTemplate(template)}
                                        className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 font-bold h-12 rounded-xl transition-all flex items-center gap-2"
                                    >
                                        <Eye className="w-4 h-4" />
                                        VISTA PREVIA
                                    </Button>
                                    <Button
                                        onClick={() => handleSelectTemplate(template.title)}
                                        className="w-full bg-slate-900 hover:bg-teal-600 text-white font-bold h-12 rounded-xl transition-all"
                                    >
                                        ELEGIR ESTILO
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>


            <Dialog open={!!selectedTemplate} onOpenChange={(open) => !open && setSelectedTemplate(null)}>
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
    )
}
