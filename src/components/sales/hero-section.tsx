'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Check, Sparkles, Star, Users, Award, Clock, Play } from 'lucide-react'
import { useRef } from 'react'
import { ScrollingTooth } from './scrolling-tooth'

export function HeroSection() {
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

  return (
    <section ref={sectionRef} className="relative h-[180vh] bg-gradient-to-b from-teal-50/50 via-white to-white overflow-visible">

      {/* 
        STICKY WRAPPER: This container stays at the top of the viewport 
        while the parent section (180vh) scrolls. 
      */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* Background elements (Absolute inside the sticky wrapper) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main green "bifuminado" background glow */}
          <motion.div
            className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_20%_30%,#ccfbf1_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#f0fdfa_0%,transparent_50%)] opacity-70 blur-[100px]"
            animate={{
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-teal-100/40 blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-emerald-50/60 blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        </div>

        {/* Content Overlay (Absolute/Relative inside the sticky wrapper) */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20 lg:pt-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 px-5 py-2 text-sm font-bold shadow-xl shadow-teal-500/20 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Demo Gratis en 24 Horas
                </Badge>
              </motion.div>

              {/* Headline with Staggered Character Animation - Fixed word wrapping */}
              <div className="mb-6 lg:mb-8">
                <motion.h1
                  className="text-4xl sm:text-6xl lg:text-[5rem] font-black text-gray-900 leading-[1] lg:leading-[1.1] tracking-tighter"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.02 } }
                  }}
                >
                  {"Tu Clínica Dental".split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.2em]">
                      {word.split("").map((char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          variants={{
                            hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}

                  <motion.span
                    className="inline-block lg:block bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent mt-2 lg:mt-0 xl:inline xl:ml-4"
                    variants={{
                      hidden: { opacity: 0, x: -20, filter: 'blur(10px)' },
                      visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Merece lo Mejor
                  </motion.span>
                </motion.h1>
              </div>

              {/* Subheadline with fade-up and blur effect */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-4 mb-8"
              >
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-amber-100 shadow-sm animate-pulse">
                  <Sparkles className="w-3 h-3" />
                  ¡Tu página no tiene por qué ser aburrida!
                </div>

                <p className="text-xl sm:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-tight">
                  Diseño web profesional para odontólogos. <br className="hidden sm:block" />
                  <span className="font-bold text-teal-600">Un solo pago anual, sin sorpresas.</span>
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="grid grid-cols-2 gap-4 mb-10"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-teal-600 font-bold" />
                    </div>
                    <span className="text-sm sm:text-base font-bold tracking-tight">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl shadow-green-500/30 px-10 py-8 text-xl font-black rounded-2xl transition-all hover:scale-105 active:scale-95"
                  onClick={handleWhatsApp}
                >
                  <ArrowRight className="w-6 h-6" />
                  Solicitar Demo Gratis
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="mt-10 pt-8 border-t border-gray-200/60"
              >
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-9 h-9 rounded-full bg-teal-400 border-2 border-white flex items-center justify-center shadow-sm">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                      <strong className="text-gray-900 font-black">200+</strong> odontólogos
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual Area */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Visual: Scrolling Tooth Animation */}
                <ScrollingTooth containerRef={sectionRef} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
