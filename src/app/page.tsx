import {
  SalesHeader,
  PremiumStickyHero,
  ProblemsSection,
  PremiumServices,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
  SalesFooter,
  TemplatesSection,
  PremiumProcess,
  BeforeAfter,
  HorizontalSection,
  Atmosphere,
  Magnetic,
  VideoScrollSequence,
  MobileAnimation,
  BotSection,
  ScrollImageAnimation,
  NextStepsSection,
} from '@/components/sales'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-teal-500 selection:text-white">
      <Atmosphere />

      {/* Header */}
      <SalesHeader />

      {/* Hero (Vertical) */}
      <PremiumStickyHero />

      {/* Horizontal: Problems + Results */}
      <HorizontalSection horizontalWidth="370">
        <ProblemsSection />

        {/* Results Slide 1 */}
        <div className="min-w-[85vw] md:min-w-[75vw] h-screen flex flex-col justify-center px-12 bg-white">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
              Resultados <span className="text-teal-600 tracking-normal italic font-serif lowercase">visibles</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto font-medium">
              Casos reales de estética dental. La excelencia se demuestra con resultados.
            </p>
          </div>
          <div className="max-w-4xl mx-auto w-full">
            <BeforeAfter
              beforeImage="/images/antes_dental.png"
              afterImage="/images/despues_dental.png"
              beforeLabel="Estética Inicial"
              afterLabel="Resultado Final"
            />
          </div>
        </div>

        {/* Results Slide 2 */}
        <div className="min-w-[85vw] md:min-w-[75vw] h-screen flex flex-col justify-center px-24 bg-white border-l border-slate-50">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
              Ortodoncia <span className="text-blue-600 tracking-normal italic font-serif lowercase">avanzada</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto font-medium">
              Transformaciones funcionales y estéticas que cambian vidas.
            </p>
          </div>
          <div className="max-w-4xl mx-auto w-full">
            <BeforeAfter
              beforeImage="/images/braces-1-sin.png"
              afterImage="/images/braces-3-con.png"
              beforeLabel="Sin Tratamiento"
              afterLabel="Con Ortodoncia"
            />
          </div>
        </div>
      </HorizontalSection>

      {/* Services (Vertical) */}
      <section id="servicios">
        <PremiumServices />
      </section>


      {/* Methodology (Vertical) */}
      <section id="proceso">
        <PremiumProcess />
      </section>

      {/* Horizontal: Style Catalog (Templates) */}
      <HorizontalSection horizontalWidth="430">
        <TemplatesSection />
      </HorizontalSection>

      <MobileAnimation />


      {/* Bot / Chatbot Section */}
      <BotSection />

      {/* Trust & investment (Vertical) */}
      <section id="precios" className="bg-white">
        <PricingSection />
      </section>

      <section id="testimonios" className="bg-white pb-12">
        <TestimonialsSection />
      </section>

      {/* Horizontal: Final Steps (FAQ) */}
      <HorizontalSection horizontalWidth="120" showDecorations={true}>
        <FAQSection />
      </HorizontalSection>

      {/* Vertical Transition: Image Scroll Animation */}
      <ScrollImageAnimation />

      {/* Next Steps: How to proceed */}
      <NextStepsSection />

      {/* Final Vertical Section: Contact */}
      <section id="contacto">
        <ContactSection />
      </section>

      {/* Footer (Vertical) */}
      <SalesFooter />
    </div>
  )
}
