'use client'

import { Smile, Heart, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Magnetic } from './magnetic'

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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] -mr-48 -mt-48" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-none uppercase">¿LISTO PARA EL <br /><span className="text-blue-500 font-serif italic normal-case">siguiente nivel</span>?</h3>
              <p className="text-slate-400 text-lg font-medium max-w-md">Solicita tu demo hoy y transformaremos tu clínica dental en una marca de élite.</p>
            </div>
            <Magnetic strength={0.4}>
              <Button
                size="lg"
                className="bg-white text-slate-950 hover:bg-slate-100 rounded-full px-12 py-10 text-2xl font-black gap-4 shadow-[0_20px_50px_rgba(255,255,255,0.1)] flex-shrink-0 group"
                onClick={handleWhatsApp}
              >
                <Sparkles className="w-6 h-6 fill-slate-950" />
                Obtener Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="h-10 lg:h-12 w-auto overflow-hidden">
                <img
                  src="/images/logodental.png"
                  alt="Logo DentalWeb"
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              Especialistas en desarrollo web para clínicas dentales. Más de 200 odontólogos en Colombia confían en nosotros.
            </p>
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
