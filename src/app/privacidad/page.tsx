import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Política de Privacidad | DentalWeb',
    description: 'Conoce cómo DentalWeb recopila, usa y protege tus datos personales.',
    robots: 'index, follow',
}

export default function PrivacidadPage() {
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
                        Política de <span className="text-teal-400 font-serif italic font-normal">Privacidad</span>
                    </h1>
                    <p className="text-slate-400 text-base">
                        Última actualización: 1 de marzo de 2026
                    </p>
                </div>

                {/* Body */}
                <div className="prose prose-invert prose-slate max-w-none space-y-10 text-slate-300 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">1. Responsable del tratamiento</h2>
                        <p>
                            <strong className="text-white">DentalWeb</strong> es el responsable del tratamiento de
                            los datos personales recopilados a través de este sitio web. Para contactarnos:{' '}
                            <a href="mailto:webcincodev@gmail.com" className="text-teal-400 hover:underline">
                                webcincodev@gmail.com
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">2. Datos que recopilamos</h2>
                        <p>Recopilamos los siguientes tipos de información:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-400">
                            <li><strong className="text-white">Datos de contacto:</strong> nombre, correo electrónico, número de teléfono proporcionados a través del formulario de contacto o WhatsApp.</li>
                            <li><strong className="text-white">Datos de uso:</strong> páginas visitadas, tiempo de permanencia, dispositivo y navegador utilizados (recopilados de forma anónima).</li>
                            <li><strong className="text-white">Cookies:</strong> información técnica para mejorar la experiencia del usuario (ver nuestra Política de Cookies).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">3. Finalidad del tratamiento</h2>
                        <p>Utilizamos sus datos personales para:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-400">
                            <li>Responder a sus consultas y solicitudes de servicio.</li>
                            <li>Enviar información sobre nuestros servicios cuando usted lo haya solicitado.</li>
                            <li>Mejorar la experiencia de navegación en nuestro sitio web.</li>
                            <li>Cumplir con obligaciones legales y contractuales.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">4. Base legal del tratamiento</h2>
                        <p>
                            El tratamiento de sus datos se basa en: (a) su consentimiento expreso al completar
                            formularios, (b) la ejecución de un contrato de servicios, y (c) nuestro interés
                            legítimo en mejorar nuestros servicios, siempre respetando sus derechos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">5. Compartición de datos</h2>
                        <p>
                            No vendemos ni compartimos sus datos personales con terceros, salvo en los
                            siguientes casos:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-400">
                            <li>Proveedores tecnológicos que nos ayudan a operar el sitio (ej. hosting, analíticas), bajo acuerdos de confidencialidad.</li>
                            <li>Autoridades competentes cuando lo exija la ley colombiana.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">6. Conservación de datos</h2>
                        <p>
                            Sus datos se conservarán durante el tiempo necesario para cumplir las finalidades
                            descritas y, en todo caso, durante el período exigido por la legislación colombiana
                            aplicable (Ley 1581 de 2012).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">7. Sus derechos</h2>
                        <p>Conforme a la Ley 1581 de 2012 (Habeas Data), usted tiene derecho a:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-400">
                            <li><strong className="text-white">Acceso:</strong> conocer qué datos tenemos sobre usted.</li>
                            <li><strong className="text-white">Rectificación:</strong> corregir datos incorrectos.</li>
                            <li><strong className="text-white">Supresión:</strong> solicitar la eliminación de sus datos.</li>
                            <li><strong className="text-white">Oposición:</strong> oponerse al tratamiento en determinados casos.</li>
                        </ul>
                        <p className="mt-3">
                            Para ejercer estos derechos, envíe un correo a{' '}
                            <a href="mailto:webcincodev@gmail.com" className="text-teal-400 hover:underline">
                                webcincodev@gmail.com
                            </a>
                            {' '}indicando su solicitud y documento de identidad.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">8. Seguridad</h2>
                        <p>
                            Implementamos medidas técnicas y organizativas para proteger sus datos contra
                            accesos no autorizados, pérdida o divulgación. Sin embargo, ningún sistema de
                            transmisión por internet es 100% seguro.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">9. Cambios en esta política</h2>
                        <p>
                            Podemos actualizar esta política periódicamente. Le notificaremos los cambios
                            significativos a través del sitio web. Le recomendamos revisarla regularmente.
                        </p>
                    </section>

                </div>

                {/* Legal links */}
                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap gap-6 text-sm text-slate-500">
                    <Link href="/terminos" className="hover:text-teal-400 transition-colors">Términos de Servicio</Link>
                    <Link href="/cookies" className="hover:text-teal-400 transition-colors">Política de Cookies</Link>
                </div>
            </div>
        </div>
    )
}
