'use client'

import { Button } from '@/components/ui/button'
import { Menu, X, MessageCircle, Sparkles, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Magnetic } from './magnetic'

export function SalesHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Usamos un umbral pequeño para el cambio de estado
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    // Ejecutar una vez al montar por si ya hay scroll
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent('Hola! Me interesa una pagina web para mi clinica dental. Quiero la demo gratis.')
    window.open(`https://wa.me/573052891719?text=${mensaje}`, '_blank')
  }

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#precios', label: 'Precios' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#faq', label: 'FAQ' }
  ]

  const isDarkState = isScrolled || isMenuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-300 ${isDarkState
        ? 'bg-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2'
        : 'bg-black/10 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group relative z-[1100]">
            <div className="relative h-8 lg:h-10 w-auto">
              <img
                src="/images/logodental.png"
                alt="Logo DentalWeb"
                className="h-full w-auto object-contain transition-all duration-300"
                style={{
                  filter: isDarkState
                    ? 'none'
                    : 'brightness(0) invert(1)'
                }}
              />
            </div>
            <span className={`text-[6px] lg:text-[8px] font-black uppercase tracking-[0.2em] transition-colors mt-0.5 ${isDarkState ? 'text-teal-600' : 'text-white'}`}>
              Web Premium para Odontólogos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 relative z-[60]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] transition-colors ${isDarkState ? 'text-slate-950 hover:text-teal-600' : 'text-white hover:text-teal-300'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 relative z-[60]">
            <Button
              variant="ghost"
              size="sm"
              className={`hidden md:flex gap-2 font-bold uppercase text-[9px] tracking-widest transition-colors ${isDarkState ? 'text-slate-600 hover:text-teal-600' : 'text-white/80 hover:text-white'}`}
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Magnetic strength={0.2}>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white gap-2 rounded-lg px-6 h-10 font-bold shadow-lg shadow-teal-600/20 hover:scale-105 transition-all text-[10px] uppercase tracking-widest border-0"
                onClick={handleWhatsApp}
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">Demo Gratis</span>
                <span className="sm:hidden">Demo</span>
              </Button>
            </Magnetic>
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isDarkState ? 'text-slate-950' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-gray-100">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-bold text-slate-800 dark:text-white uppercase tracking-widest hover:text-teal-600 px-4 py-4 border-b border-slate-50 transition-all flex justify-between items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                      <Sparkles className="w-4 h-4 text-teal-500" />
                    </Link>
                  ))}
                  <Button
                    className="mt-3 gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Solicitar Demo Gratis
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
