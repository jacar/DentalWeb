'use client'

import { Button } from '@/components/ui/button'
import { Smile, Menu, X, Phone, MessageCircle, Sparkles, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Magnetic } from './magnetic'

export function SalesHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled
        ? 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border-b border-white/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-[60]">
            <div className="relative h-9 lg:h-12 w-auto overflow-hidden">
              <img
                src="/images/logodental.png"
                alt="Logo DentalWeb"
                className="h-full w-auto object-contain"
                style={{ filter: (isScrolled || isMenuOpen) ? 'none' : 'brightness(0) invert(1)' }}
              />
            </div>
          </Link>

          {/* New R2 Brand Visual (Provided by User) */}
          <div className="absolute inset-x-0 top-0 bottom-0 flex justify-center pointer-events-none overflow-hidden z-[40]">
            <div className="w-full max-w-[1400px] h-full relative" style={{ containerType: 'size' }}>
              <motion.div
                initial={{ x: '-150%', opacity: 0 }}
                animate={{ x: isScrolled ? '-120%' : '-60%', opacity: isScrolled ? 0.05 : 0.15 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-[50%] top-[50%] -translate-y-1/2 w-[180px] h-[220px]"
              >
                <svg viewBox="0 0 194 250" fill="none" className="w-full h-full rotate-[-5deg]">
                  <path d="M0.96875 3.77539H99.39C127.739 3.77539 149.687 10.4054 165.233 23.6654C180.779 36.6968 188.552 55.2151 188.552 79.2203C188.552 98.1958 183.637 113.856 173.806 126.202C163.975 138.547 149.801 146.892 131.283 151.236L115.508 154.665H44.864V250H0.96875V3.77539ZM101.105 166.325C99.2757 162.667 96.6466 159.809 93.2173 157.752C90.0166 155.694 86.473 154.665 82.5864 154.665L93.9031 151.922L88.4162 141.291H136.084L193.353 250H144.314L101.105 166.325ZM96.9895 116.943C112.536 116.943 124.424 113.742 132.654 107.341C141.113 100.711 145.343 91.3372 145.343 79.2203C145.343 66.8748 141.228 57.5013 132.997 51.0999C124.767 44.6985 112.764 41.4978 96.9895 41.4978H44.864V116.943H96.9895Z" fill="currentColor" className="text-teal-500/30" />
                </svg>
              </motion.div>
              <motion.div
                initial={{ x: '150%', opacity: 0 }}
                animate={{ x: isScrolled ? '120%' : '60%', opacity: isScrolled ? 0.05 : 0.15 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-[50%] top-[50%] -translate-y-1/2 w-[160px] h-[220px]"
              >
                <svg viewBox="0 0 180 250" fill="none" className="w-full h-full rotate-[5deg]">
                  <path d="M100.137 123.114L0 214.678V250H179.012L178.669 210.562H64.1289L129.287 150.892C145.748 135.802 157.865 122.314 165.638 110.425C173.64 98.3082 177.641 84.4765 177.641 68.93C177.641 46.2963 169.639 29.1495 153.635 17.4897C137.632 5.8299 117.627 0 93.6214 0C68.0156 0 47.0965 6.28715 30.8642 18.8615C14.6319 31.4358 4.45817 49.0398 0.342941 71.6735L41.1523 86.7627C43.6671 71.4449 49.3827 59.6708 58.299 51.4403C67.444 43.2099 79.2181 39.0947 93.6214 39.0947C104.138 39.0947 113.397 41.4952 121.399 46.2963C129.63 50.8688 133.745 58.5277 133.745 69.273V72.0164C133.745 79.7897 131.001 87.6772 125.514 95.679C120.027 103.452 111.568 112.597 100.137 123.114Z" fill="currentColor" className="text-teal-500/30" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 relative z-[60]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 text-xs font-black uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-gray-500 hover:text-teal-600' : 'text-white/70 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 lg:gap-3 relative z-[60]">
            <Button
              variant="ghost"
              size="sm"
              className={`hidden md:flex gap-2 font-bold uppercase text-[10px] tracking-widest transition-colors ${isScrolled ? 'text-gray-400 hover:text-teal-600 hover:bg-teal-50' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Magnetic strength={0.2}>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white gap-3 rounded-xl px-8 h-10 font-bold shadow-lg shadow-teal-600/20 hover:scale-105 transition-all text-[11px] uppercase tracking-widest border-0"
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
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
