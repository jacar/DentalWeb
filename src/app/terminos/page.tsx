import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Términos de Servicio | DentalWeb',
    description: 'Términos y condiciones de uso de los servicios ofrecidos por DentalWeb.',
    robots: 'index, follow',
}

export default function TerminosPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Header */}
            <div className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver al inicio
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
                {/* Title */}
                <div className="mb-12">
                    <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
                        Términos de <span className="text-teal-400 font-serif italic font-normal">Servicio</span>
                    </h1>
                    <p className="text-slate-400 text-base">
                        Última actualización: 1 de marzo de 2026
                    </p>
                </div>

                {/* Body */}
                <div className="prose prose-invert prose-slate max-w-none space-y-10 text-slate-300 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">1. Aceptación de los términos</h2>
                        <p>
                            Al contratar, acceder o utilizar los servicios de <strong className="text-white">DentalWeb</strong>
                            , usted acepta quedar vinculado por estos Términos de Servicio. Si no está de acuerdo con
                            alguna parte de estos términos, no podrá utilizar nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">2. Descripción del servicio</h2>
                        <p>
                            DentalWeb ofrece servicios de diseño, desarrollo y mantenimiento de sitios web
                            orientados a clínicas y profesionales odontológicos. Esto incluye, sin limitarse a:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-400">
                            <li>Diseño de landing pages y sitios web completos</li>
                            <li>Optimización SEO local</li>
                            <li>Integración de chatbots y herramientas de conversión</li>
                            <li>Mantenimiento y soporte técnico mensual</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">3. Obligaciones del cliente</h2>
                        <p>El cliente se compromete a:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-400">
                            <li>Proporcionar información verídica y actualizada para la creación de su sitio web.</li>
                            <li>Entregar los materiales solicitados (logos, fotos, textos) en los plazos acordados.</li>
                            <li>Realizar los pagos en las fechas establecidas en el contrato.</li>
                            <li>No utilizar los servicios para actividades ilegales o que infrinjan derechos de terceros.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">4. Propiedad intelectual</h2>
                        <p>
                            Una vez completado el pago total del proyecto, el cliente recibirá los derechos de uso
                            del sitio web desarrollado. DentalWeb se reserva el derecho de mostrar el proyecto en
                            su portafolio y materiales de marketing, salvo acuerdo de confidencialidad expreso.
                        </p>
                        <p className="mt-3">
                            Los componentes, plantillas y frameworks utilizados están sujetos a sus respectivas
                            licencias de código abierto o comercial.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">5. Pagos y reembolsos</h2>
                        <p>
                            Los precios de los servicios se detallan en la propuesta o contrato firmado entre las
                            partes. Los pagos son no reembolsables una vez iniciado el desarrollo del proyecto,
                            salvo causa imputable exclusivamente a DentalWeb.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">6. Limitación de responsabilidad</h2>
                        <p>
                            DentalWeb no será responsable por pérdidas de ingresos, datos o cualquier daño
                            indirecto derivado del uso o imposibilidad de uso de los servicios. Nuestra
                            responsabilidad total no superará el monto pagado por el proyecto en cuestión.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">7. Modificaciones</h2>
                        <p>
                            Nos reservamos el derecho de actualizar estos términos en cualquier momento. Los
                            cambios entrarán en vigencia al publicarse en este sitio. El uso continuado de
                            nuestros servicios constituye la aceptación de los nuevos términos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">8. Legislación aplicable</h2>
                        <p>
                            Estos términos se rigen por las leyes de la República de Colombia. Cualquier
                            controversia se resolverá ante los tribunales competentes de Bogotá, Colombia.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">9. Contacto</h2>
                        <p>
                            Para consultas sobre estos términos, contáctenos en:{' '}
                            <a
                                href="mailto:webcincodev@gmail.com"
                                className="text-teal-400 hover:underline"
                            >
                                webcincodev@gmail.com
                            </a>
                        </p>
                    </section>
                </div>

                {/* Legal links */}
                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap gap-6 text-sm text-slate-500">
                    <Link href="/privacidad" className="hover:text-teal-400 transition-colors">Política de Privacidad</Link>
                    <Link href="/cookies" className="hover:text-teal-400 transition-colors">Política de Cookies</Link>
                </div>
            </div>
        </div>
    )
}
