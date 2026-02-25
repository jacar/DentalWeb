'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { XCircle, CheckCircle, ArrowRight, TrendingUp, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useRef, MouseEvent } from 'react'
import { Magnetic } from './magnetic'

interface ProblemItem {
  problem: string
  solution: string
  stat: string
}

function ProblemCard({ item, index }: { item: ProblemItem, index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group box-border h-full"
    >
      {/* Decorative Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/10 to-teal-500/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden flex flex-col"
      >
        {/* Animated Background Element inside card */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-red-50/50 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-emerald-50/50 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

        <div className="flex justify-between items-start mb-8 relative z-10">
          <motion.div
            whileHover={{ rotate: -15, scale: 1.1 }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center border border-slate-200/50 shadow-inner"
          >
            <XCircle className="w-7 h-7 text-slate-400" />
          </motion.div>
          <div className="text-right">
            <motion.span
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="text-4xl font-black text-slate-300 block mb-1"
            >
              {item.stat}
            </motion.span>
            <div className="h-1 w-12 bg-slate-100 rounded-full ml-auto group-hover:w-full transition-all duration-500" />
          </div>
        </div>

        <div className="mb-8 relative z-10">
          <p className="text-xs tracking-widest uppercase text-slate-400 font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-1 bg-slate-400 rounded-full" />
            El Problema
          </p>
          <h3 className="text-gray-800 font-bold text-xl leading-snug group-hover:text-gray-900 transition-colors">
            {item.problem}
          </h3>
        </div>

        {/* Dynamic Divider */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4">
          <motion.div
            style={{ transform: "translateZ(20px)" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 border border-gray-100 shadow-sm"
          >
            <ArrowRight className="w-4 h-4 text-emerald-500 rotate-90" />
          </motion.div>
        </div>

        <div className="mt-8 flex items-start gap-4 relative z-10">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20"
          >
            <CheckCircle className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <p className="text-xs tracking-widest uppercase text-emerald-600 font-bold mb-2 flex items-center gap-2">
              <span className="w-1 h-1 bg-emerald-600 rounded-full" />
              La Solución
            </p>
            <p className="text-gray-900 font-extrabold text-lg leading-tight">
              {item.solution}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProblemsSection() {
  const problems = [
    {
      problem: 'Pierdes pacientes que buscan dentistas en Google',
      solution: 'Apareces en los primeros resultados con una web optimizada',
      stat: '80%'
    },
    {
      problem: 'Tu competencia tiene web y tú no',
      solution: 'Destacas con un sitio profesional que genera confianza',
      stat: '3x'
    },
    {
      problem: 'Los pacientes no encuentran tu información fácilmente',
      solution: 'Dirección, horarios y servicios claros en un solo lugar',
      stat: '24/7'
    },
    {
      problem: 'Pierdes tiempo respondiendo las mismas preguntas',
      solution: 'FAQ y sistema de citas automático disponible siempre',
      stat: '-60%'
    }
  ]

  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent('Hola! Quiero solucionar estos problemas con una página web profesional.')
    window.open(`https://wa.me/573052891719?text=${mensaje}`, '_blank')
  }

  return (
    <div className="flex h-screen items-center px-12 md:px-24 bg-gray-50/50 w-max shrink-0 flex-nowrap">
      {/* Header Section (Full Screen Width-ish Slide) */}
      <div className="min-w-[450px] md:min-w-[700px] pr-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-white border border-slate-100 text-slate-600 px-6 py-2.5 rounded-full text-sm font-bold mb-8 shadow-sm"
        >
          <TrendingUp className="w-4 h-4" />
          EL ÚNICO CAMINO AL ÉXITO DIGITAL
        </motion.div>

        <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">
          SIN UNA WEB, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 bg-300% animate-gradient">
            PIERDES PACIENTES
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 max-w-xl font-medium leading-relaxed">
          El universo digital no perdona. Si no estás en la red con una imagen profesional,
          <span className="text-gray-900 font-bold px-1">estás regalando tus pacientes</span> a quienes sí lo están.
        </p>
      </div>

      {/* Problems Horizontal Stack */}
      <div className="flex gap-12 items-center">
        {problems.map((item, index) => (
          <div key={index} className="min-w-[350px] md:min-w-[450px] h-[550px]">
            <ProblemCard item={item} index={index} />
          </div>
        ))}
      </div>

      {/* CTA Final (As a slide) */}
      <div className="min-w-[400px] md:min-w-[700px] flex flex-col items-center justify-center px-20">
        <Magnetic strength={0.4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group p-[2px] rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 bg-300% animate-gradient shadow-[0_32px_100px_-20px_rgba(16,185,129,0.5)] w-full"
          >
            <Button
              size="lg"
              className="relative w-full bg-slate-900 hover:bg-transparent text-white transition-all duration-300 py-12 text-3xl font-black rounded-full border-none h-auto group overflow-hidden"
              onClick={handleWhatsApp}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 flex items-center justify-center">
                <Sparkles className="w-10 h-10 mr-6 group-hover:rotate-12 transition-transform" />
                ¡QUIERO MI WEB YA!
                <ArrowRight className="w-10 h-10 ml-6 group-hover:translate-x-4 transition-transform" />
              </div>
            </Button>
          </motion.div>
        </Magnetic>
        <p className="mt-10 text-gray-500 font-bold text-xl flex items-center gap-4">
          <span className="w-4 h-4 bg-emerald-500 rounded-full animate-ping" />
          Agenda tu consultoría gratuita hoy
        </p>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s linear infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  )
}
