import {
  SalesHeader,
  HeroSection,
  ProblemsSection,
  ServicesSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
  SalesFooter,
  TemplatesSection
} from '@/components/sales'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <SalesHeader />

      {/* Hero Section */}
      <HeroSection />

      {/* Problems Section */}
      <ProblemsSection />

      {/* Templates Section */}
      <TemplatesSection />

      {/* Services Section */}
      <section id="servicios">
        <ServicesSection />
      </section>

      {/* Pricing Section */}
      <section id="precios">
        <PricingSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonios">
        <TestimonialsSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Contact Section */}
      <section id="contacto">
        <ContactSection />
      </section>

      {/* Footer */}
      <SalesFooter />
    </div>
  )
}
