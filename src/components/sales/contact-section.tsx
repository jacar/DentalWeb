'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Zap, Sparkles, Check } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const mensaje = `Hola! Solicito cotización para página web dental.

*Datos:*
- Nombre: ${formData.name}
- Teléfono: ${formData.phone}
- Email: ${formData.email}
- Clínica: ${formData.clinic || 'No especificado'}
- Mensaje: ${formData.message || 'Sin mensaje adicional'}

Me interesa conocer los planes disponibles. Gracias!`

    window.open(`https://wa.me/573052891719?text=${encodeURIComponent(mensaje)}`, '_blank')
  }

  const handleWhatsAppDirect = () => {
    const mensaje = encodeURIComponent('Hola! Me interesa una página web para mi clínica dental. Quiero más información sobre los planes.')
    window.open(`https://wa.me/573052891719?text=${mensaje}`, '_blank')
  }

  const contactInfo = [
    { icon: Phone, label: 'WhatsApp', value: '+57 305 289 1719', color: 'from-green-400 to-emerald-400' },
    { icon: Mail, label: 'Email', value: 'webcincodev@gmail.com', color: 'from-teal-400 to-cyan-400' },
    { icon: MapPin, label: 'Ciudad', value: 'Colombia', color: 'from-orange-400 to-amber-400' },
    { icon: Clock, label: 'Respuesta', value: 'En menos de 24 horas', color: 'from-purple-400 to-pink-400' }
  ]

  const benefits = [
    'Demo personalizada gratis',
    'Sin compromiso de compra',
    'Respuesta en 24 horas',
    'Asesoría incluida'
  ]

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Sparkles className="w-4 h-4" />
              Contáctanos
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Solicita tu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                Cotización Gratis
              </span>
            </h2>
            <p className="text-lg text-teal-100/80 mb-8 max-w-lg">
              Te contactamos en menos de 24 horas. Sin compromiso ni costos ocultos.
            </p>

            {/* Demo card */}
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xl mb-1">Demo Gratis en 24 Horas</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Te generamos una demo personalizada de cómo quedaría tu página web sin costo alguno. Sin compromiso.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-teal-200/60">{item.label}</p>
                    <p className="font-medium text-white text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp button */}
            <Button 
              size="lg" 
              className="gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-6 text-lg px-8 shadow-lg shadow-green-500/25 rounded-xl"
              onClick={handleWhatsAppDirect}
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </Button>

            {/* Promo */}
            <div className="mt-8 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-sm text-teal-200 mb-2">✨ Oferta válida solo este mes</p>
              <p className="font-bold text-3xl text-white mb-2">Desde $400.000 COP</p>
              <p className="text-teal-100/80 text-sm">
                Dominio, hosting, panel autoadministrable, mantenimiento y asesoría incluidos.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white pb-6">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Send className="w-5 h-5 text-teal-500" />
                  Cotización Gratis + Demo Sin Costo
                </CardTitle>
                <CardDescription className="text-base">
                  Llena el formulario y te enviamos una demo personalizada
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">Nombre completo *</label>
                      <Input
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">WhatsApp *</label>
                      <Input
                        placeholder="300 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email *</label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Nombre de tu Clínica</label>
                    <Input
                      placeholder="Clínica Dental..."
                      value={formData.clinic}
                      onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                      className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">¿Qué plan te interesa?</label>
                    <Textarea
                      placeholder="Me interesa el plan Profesional para mi clínica..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 resize-none"
                    />
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-100">
                    <div className="grid grid-cols-2 gap-2">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-teal-700">
                          <Check className="w-4 h-4 text-teal-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 gap-2 py-6 text-lg rounded-xl shadow-lg shadow-green-500/25"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    Al enviar serás redirigido a WhatsApp para completar tu solicitud.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
