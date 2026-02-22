'use client'

import { Smile, Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function SalesFooter() {
  const currentYear = new Date().getFullYear()

  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent('Hola! Quiero más información sobre los servicios web.')
    window.open(`https://wa.me/573052891719?text=${mensaje}`, '_blank')
  }

  const footerLinks = {
    servicios: [
      { label: 'Landing Pages', href: '#servicios' },
      { label: 'Sitios Web Completos', href: '#servicios' },
      { label: 'Tiendas Online', href: '#servicios' },
      { label: 'Mantenimiento Web', href: '#servicios' }
    ],
    recursos: [
      { label: 'Blog', href: '#' },
      { label: 'Guías Gratuitas', href: '#' },
      { label: 'Plantillas', href: '#' },
      { label: 'Casos de Éxito', href: '#testimonios' }
    ],
    legal: [
      { label: 'Términos', href: '#' },
      { label: 'Privacidad', href: '#' },
      { label: 'Cookies', href: '#' }
    ]
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">¿Listo para tener tu página web?</h3>
              <p className="text-slate-300">Solicita tu demo gratis y te contactamos en 24 horas.</p>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white gap-2 shadow-lg shadow-green-500/25 flex-shrink-0"
              onClick={handleWhatsApp}
            >
              <Sparkles className="w-4 h-4" />
              Demo Gratis
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/25 group-hover:shadow-teal-500/40 transition-shadow">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">DentalWeb</span>
                <span className="text-xs text-slate-400 -mt-0.5">Para Odontólogos</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              Especialistas en desarrollo web para clínicas dentales. Más de 200 odontólogos en Colombia confían en nosotros.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-teal-400" />
                </div>
                <span className="text-slate-300 text-sm">+57 305 289 1719</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-teal-400" />
                </div>
                <span className="text-slate-300 text-sm">webcincodev@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <span className="text-slate-300 text-sm">Colombia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} DentalWeb. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              {footerLinks.legal.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-teal-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              Hecho con <Heart className="w-4 h-4 text-rose-500 fill-current" /> para odontólogos
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
