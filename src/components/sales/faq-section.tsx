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
    <div className="flex h-screen items-center px-6 md:px-24 bg-teal-50/30 w-screen shrink-0">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Header Slide */}
        <div className="w-full">
          <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 px-4 py-1.5 shadow-lg shadow-teal-500/20">
            <HelpCircle className="w-4 h-4 mr-1" />
            FAQ
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-none tracking-tight">
            RESUELVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              TUS DUDAS
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-md font-medium mb-12">
            Todo lo que necesitas saber sobre el despliegue de tu clínica dental en el mundo digital.
          </p>
          <Button
            variant="outline"
            className="gap-3 border-teal-200 text-teal-600 hover:bg-teal-50 hover:border-teal-300 py-6 px-8 rounded-2xl text-lg font-bold shadow-xl"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-5 h-5" />
            Preguntar por WhatsApp
          </Button>
        </div>

        {/* FAQ Items Slide */}
        <div className="w-full">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq: FAQ, index: number) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="bg-white rounded-[2rem] px-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-teal-600 py-6 hover:no-underline text-xl">
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
