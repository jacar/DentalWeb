'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles, Play, Check } from 'lucide-react'

export function HeroSection() {
  const features = [
    'Disenos profesionales',
    '100% responsivo',
    'Facil personalizacion',
    'Soporte incluido'
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-200/30 to-cyan-200/30 dark:from-teal-900/20 dark:to-cyan-900/20 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-200/30 to-teal-200/30 dark:from-cyan-900/20 dark:to-teal-900/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-100 border-teal-200 dark:border-teal-800">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Nuevas plantillas agregadas cada semana
          </Badge>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Plantillas Profesionales para
            <span className="block mt-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Clinicas Odontologicas
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Impulsa tu consultorio dental con disenos modernos, responsivos y optimizados para convertir visitantes en pacientes.
          </p>

          {/* Features list */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Check className="w-4 h-4 text-teal-500" />
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-500/25 px-8">
              Explorar Plantillas
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-gray-300 dark:border-gray-700">
              <Play className="w-4 h-4" />
              Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105">
              <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">50+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Plantillas</p>
            </div>
            <div className="p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105">
              <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">10K+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Descargas</p>
            </div>
            <div className="p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105">
              <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">4.9</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Calificacion</p>
            </div>
            <div className="p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105">
              <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">100%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Responsivo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
