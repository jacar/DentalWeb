'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Sparkles, MessageCircle, Zap, Shield, Headphones, ArrowRight } from 'lucide-react'
import { pricingPlans, PricingPlan } from '@/lib/sales-data'

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

export function PricingSection() {
  const handleSelectPlan = (plan: PricingPlan) => {
    const mensaje = `Hola! Me interesa el plan *${plan.name}* para mi clínica dental.

Precio: ${formatPrice(plan.price)} - ${plan.period}

Me gustaría recibir la demo gratis y más información. Gracias!`
    
    window.open(`https://wa.me/573052891719?text=${encodeURIComponent(mensaje)}`, '_blank')
  }

  const includedFeatures = [
    { icon: Zap, title: 'Dominio .com', desc: 'Incluido 1 año' },
    { icon: Shield, title: 'Hosting SSL', desc: 'Seguridad incluida' },
    { icon: Headphones, title: 'Asesoría', desc: 'Soporte 1 año' }
  ]

  return (
    <section id="precios" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-teal-100/30 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full bg-cyan-100/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 px-4 py-1.5">
            Precios en Pesos Colombianos
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Un Solo Pago Anual
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Sin Costos Ocultos
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Todo incluido: dominio, hosting, panel autoadministrable, mantenimiento y asesoría. 
            No necesitas contratar una agencia.
          </p>
          
          {/* Demo badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-5 py-2.5 rounded-full shadow-lg shadow-amber-400/25"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Demo gratis en menos de 24 horas</span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan: PricingPlan, index: number) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={plan.recommended ? 'md:-mt-4 md:mb-4' : ''}
            >
              <Card 
                className={`relative h-full ${
                  plan.recommended 
                    ? 'border-2 border-teal-500 shadow-2xl shadow-teal-500/20 bg-white' 
                    : 'border border-gray-200 bg-white shadow-lg hover:shadow-xl'
                } transition-all duration-300 rounded-2xl overflow-hidden`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-center py-2 text-sm font-semibold">
                      <Sparkles className="w-4 h-4 inline mr-1" />
                      Más Vendido
                    </div>
                  </div>
                )}
                
                <CardHeader className={`text-center pb-4 ${plan.recommended ? 'pt-14' : 'pt-8'}`}>
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                  
                  <div className="mt-6">
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-2xl text-gray-400">$</span>
                      <span className="text-5xl lg:text-6xl font-bold text-gray-900">
                        {formatPrice(plan.price).replace('$', '').replace('COP', '').trim()}
                      </span>
                    </div>
                    <p className="text-teal-600 font-semibold text-sm mt-2">
                      {plan.period}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-2 px-6">
                  {/* Highlighted features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {plan.highlighted.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-teal-50 text-teal-700 border-0 font-medium">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-4 pb-8 px-6">
                  <Button 
                    className={`w-full py-6 text-base font-semibold rounded-xl gap-2 transition-all ${
                      plan.recommended 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    onClick={() => handleSelectPlan(plan)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Included features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {includedFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Payment methods */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            💳 Aceptamos transferencia, PSE, tarjetas de crédito y cuotas sin interés.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
