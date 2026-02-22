'use client'

import { Smile, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">DentalTemplates</span>
            </Link>
            <p className="text-gray-400 mb-4">
              La plataforma lider en plantillas profesionales para clinicas odontologicas. 
              Disenos modernos, responsivos y optimizados.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Plantillas */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Plantillas</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Paginas de Servicios</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Paginas de Equipo</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Formularios de Contacto</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Paginas de Promociones</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Recursos</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Documentacion</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Tutoriales</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Comunidad</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <a href="mailto:info@dentaltemplates.com" className="hover:text-teal-400 transition-colors">
                  info@dentaltemplates.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <a href="tel:+34900123456" className="hover:text-teal-400 transition-colors">
                  +34 900 123 456
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 mt-1" />
                <span>Madrid, Espana</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright {currentYear} DentalTemplates. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-teal-400 transition-colors">Terminos de uso</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Cookies</a>
            </div>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-rose-500 fill-current" /> para odontologos
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
