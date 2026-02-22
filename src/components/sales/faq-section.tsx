'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { faqs, FAQ } from '@/lib/sales-data'
import { HelpCircle, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FAQSection() {
  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent('Hola! Tengo una pregunta que no está en el FAQ.')
    window.open(`https://wa.me/573052891719?text=${mensaje}`, '_blank')
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal-50/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-cyan-50/50 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 px-4 py-1.5">
            <HelpCircle className="w-4 h-4 mr-1" />
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Preguntas
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              {' '}Frecuentes
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios web para clínicas dentales.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq: FAQ, index: number) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-white rounded-2xl px-6 border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-teal-600 py-5 hover:no-underline">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">¿Tienes otra pregunta?</p>
          <Button 
            variant="outline"
            className="gap-2 border-teal-200 text-teal-600 hover:bg-teal-50 hover:border-teal-300"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-4 h-4" />
            Escríbenos por WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
