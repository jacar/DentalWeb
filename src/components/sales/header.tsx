'use client'

import { Button } from '@/components/ui/button'
import { Smile, Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-teal-50'
          : 'bg-teal-50/30 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/25 group-hover:shadow-teal-500/40 transition-shadow">
              <Smile className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">DentalWeb</span>
              <span className="hidden sm:block text-[10px] text-gray-400 -mt-0.5 tracking-wide">Para Odontólogos</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 lg:gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex gap-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 gap-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
              onClick={handleWhatsApp}
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Demo Gratis</span>
              <span className="sm:hidden">Demo</span>
            </Button>
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
                      className="text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg px-3 py-2.5 transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
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
