import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Política de Cookies | DentalWeb',
    description: 'Información sobre el uso de cookies en el sitio web de DentalWeb.',
    robots: 'index, follow',
}

export default function CookiesPage() {
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
                        Política de <span className="text-teal-400 font-serif italic font-normal">Cookies</span>
                    </h1>
                    <p className="text-slate-400 text-base">
                        Última actualización: 1 de marzo de 2026
                    </p>
                </div>

                {/* Body */}
                <div className="prose prose-invert prose-slate max-w-none space-y-10 text-slate-300 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">1. ¿Qué son las cookies?</h2>
                        <p>
                            Las cookies son pequeños archivos de texto que un sitio web almacena en su
                            dispositivo cuando lo visita. Permiten que el sitio recuerde sus acciones y
                            preferencias durante un período de tiempo para mejorar su experiencia de navegación.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">2. Tipos de cookies que utilizamos</h2>

                        <div className="space-y-6 mt-4">
                            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                                <h3 className="text-white font-semibold mb-2">🔧 Cookies esenciales</h3>
                                <p className="text-slate-400 text-sm">
                                    Necesarias para el funcionamiento básico del sitio web. Sin ellas, el sitio no
                                    puede funcionar correctamente. No requieren su consentimiento.
                                </p>
                                <div className="mt-3 text-xs text-slate-500">
                                    <strong className="text-slate-400">Duración:</strong> Sesión / Persistentes según función
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                                <h3 className="text-white font-semibold mb-2">📊 Cookies de analítica</h3>
                                <p className="text-slate-400 text-sm">
                                    Nos ayudan a entender cómo los visitantes interactúan con el sitio web recopilando
                                    información de forma anónima (páginas visitadas, tiempo en sitio, fuente de tráfico).
                                    Utilizamos herramientas como Google Analytics.
                                </p>
                                <div className="mt-3 text-xs text-slate-500">
                                    <strong className="text-slate-400">Duración:</strong> Hasta 2 años
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                                <h3 className="text-white font-semibold mb-2">🎯 Cookies de preferencias</h3>
                                <p className="text-slate-400 text-sm">
                                    Permiten que el sitio recuerde las preferencias del usuario, como el idioma
                                    seleccionado o la región, para ofrecer una experiencia personalizada.
                                </p>
                                <div className="mt-3 text-xs text-slate-500">
                                    <strong className="text-slate-400">Duración:</strong> 1 año
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                                <h3 className="text-white font-semibold mb-2">📣 Cookies de marketing</h3>
                                <p className="text-slate-400 text-sm">
                                    Utilizadas para rastrear visitantes en diferentes sitios web con el fin de mostrar
                                    anuncios relevantes. Pueden provenir de plataformas como Google Ads o Meta (Facebook).
                                </p>
                                <div className="mt-3 text-xs text-slate-500">
                                    <strong className="text-slate-400">Duración:</strong> Hasta 90 días
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">3. Cómo gestionar las cookies</h2>
                        <p>
                            Puede controlar y/o eliminar las cookies en cualquier momento desde su navegador.
                            Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad
                            del sitio web.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-400">
                            <li>
                                <strong className="text-white">Chrome:</strong>{' '}
                                Configuración → Privacidad y seguridad → Cookies
                            </li>
                            <li>
                                <strong className="text-white">Firefox:</strong>{' '}
                                Opciones → Privacidad y seguridad → Cookies
                            </li>
                            <li>
                                <strong className="text-white">Safari:</strong>{' '}
                                Preferencias → Privacidad → Administrar datos del sitio
                            </li>
                            <li>
                                <strong className="text-white">Edge:</strong>{' '}
                                Configuración → Privacidad, búsqueda y servicios → Cookies
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">4. Cookies de terceros</h2>
                        <p>
                            Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras
                            páginas. No tenemos control sobre estas cookies; le recomendamos consultar las
                            políticas de privacidad de dichos terceros:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mt-3 text-slate-400">
                            <li>Google Analytics / Google Ads</li>
                            <li>Meta Pixel (Facebook / Instagram)</li>
                            <li>WhatsApp Business Widget</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">5. Actualizaciones</h2>
                        <p>
                            Podemos actualizar esta Política de Cookies para reflejar cambios en las
                            tecnologías utilizadas. Le recomendamos revisarla periódicamente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">6. Contacto</h2>
                        <p>
                            Para preguntas sobre el uso de cookies, escríbanos a:{' '}
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
                    <Link href="/terminos" className="hover:text-teal-400 transition-colors">Términos de Servicio</Link>
                    <Link href="/privacidad" className="hover:text-teal-400 transition-colors">Política de Privacidad</Link>
                </div>
            </div>
        </div>
    )
}
