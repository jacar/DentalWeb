'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { services, Service } from '@/lib/sales-data'
import { Layout, Globe, ShoppingCart, Settings, ArrowRight, Check } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Globe,
  ShoppingCart,
  Settings
}

export function ServicesSection() {
  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent('Hola! Quiero más información sobre los servicios web para mi clínica dental.')
    window.open(`https://wa.me/573052891719?text=${mensaje}`, '_blank')
  }

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-teal-50/30 blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-50/30 blur-3xl translate-x-1/2" />
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
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluciones Web para
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Cada Necesidad
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Desde una landing page hasta un sitio completo con tienda online. 
            Tenemos la solución perfecta para tu clínica dental.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service: Service, index: number) => {
            const IconComponent = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full border-0 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden rounded-2xl">
                  {/* Gradient top border */}
                  <div className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center mb-4 group-hover:from-teal-500 group-hover:to-cyan-500 transition-all duration-300">
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                      )}
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                            <Check className="w-3 h-3 text-teal-600" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-lg shadow-teal-500/25 px-8 gap-2"
            onClick={handleWhatsApp}
          >
            Solicitar Cotización Personalizada
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
