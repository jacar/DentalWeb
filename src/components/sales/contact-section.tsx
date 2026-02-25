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
    <section className="py-24 px-6 md:px-12 bg-white w-full">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Contact Info Column */}
        <div className="text-slate-900">
          <div className="inline-flex items-center gap-2 bg-teal-100/50 backdrop-blur-sm text-teal-700 px-4 py-2 rounded-full text-sm font-black mb-10 border border-teal-200/50 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Hablemos hoy
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
            SOLICITA TU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
              COTIZACIÓN
            </span>
          </h2>
          <p className="text-2xl text-slate-600 mb-12 max-w-lg font-medium">
            Te contactamos en menos de 24 horas con una propuesta irresistible.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-5 bg-white border border-teal-100 shadow-sm rounded-[1.5rem]">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{item.label}</p>
                  <p className="font-bold text-slate-900 text-base">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="gap-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-8 text-xl px-12 shadow-2xl shadow-green-500/30 rounded-full font-black"
            onClick={handleWhatsAppDirect}
          >
            <MessageCircle className="w-6 h-6" />
            DIRECTO A WHATSAPP
          </Button>
        </div>

        {/* Form Column */}
        <div className="w-full">
          <Card className="bg-white/95 backdrop-blur-xl shadow-[0_32px_64px_rgba(0,0,0,0.5)] rounded-[2.5rem] overflow-hidden border-0">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-white pb-8 p-10">
              <CardTitle className="text-3xl font-black flex items-center gap-3 text-slate-900">
                <Send className="w-8 h-8 text-teal-500" />
                PLAN + DEMO GRATIS
              </CardTitle>
              <CardDescription className="text-lg font-medium">
                Completa tus datos y diseñamos tu demo sin costo.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-10 pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-black text-slate-500 mb-2 block uppercase tracking-widest">Nombre completo</label>
                    <Input
                      placeholder="Ej. Dr. García"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-2xl border-slate-200 py-6 px-6 text-lg focus:border-teal-500 focus:ring-teal-500 bg-slate-50 shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-black text-slate-500 mb-2 block uppercase tracking-widest">WhatsApp</label>
                    <Input
                      placeholder="+57..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="rounded-2xl border-slate-200 py-6 px-6 text-lg focus:border-teal-500 focus:ring-teal-500 bg-slate-50 shadow-inner"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex-1">
                    <label className="text-sm font-black text-slate-500 mb-2 block uppercase tracking-widest">Tu Clínica</label>
                    <Input
                      placeholder="Nombre de tu consultorio"
                      value={formData.clinic}
                      onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                      className="rounded-2xl border-slate-200 py-6 px-6 text-lg focus:border-teal-500 focus:ring-teal-500 bg-slate-50 shadow-inner"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-black text-slate-500 mb-2 block uppercase tracking-widest">¿Qué buscas con tu web?</label>
                    <Textarea
                      placeholder="Ej. Quiero atraer más pacientes de estética dental..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-2xl border-slate-200 py-4 px-6 text-lg focus:border-teal-500 focus:ring-teal-500 bg-slate-50 shadow-inner resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-teal-600 hover:scale-[1.02] transition-all text-white py-10 text-2xl rounded-[2rem] font-black shadow-2xl flex items-center justify-center gap-4 group"
                >
                  <Send className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  ENVIAR SOLICITUD
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
