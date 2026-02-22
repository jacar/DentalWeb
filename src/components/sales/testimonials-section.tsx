'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials, Testimonial } from '@/lib/sales-data'
import { useState } from 'react'

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-teal-50/50 blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-[300px] h-[300px] rounded-full bg-cyan-50/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que Dicen
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Nuestros Clientes
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 200 odontólogos en Colombia ya confían en nosotros para su presencia digital.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 rounded-2xl overflow-hidden group">
                <CardContent className="pt-8 pb-6 px-6">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-teal-200 group-hover:text-teal-300 transition-colors" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-base">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-200">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <p className="text-xs text-teal-600 font-medium">{testimonial.clinic}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {[
            { value: '200+', label: 'Clínicas' },
            { value: '4.9', label: 'Calificación' },
            { value: '5+', label: 'Años' },
            { value: '100%', label: 'Satisfacción' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <p className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
