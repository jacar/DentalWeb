import Link from 'next/link'
import { Metadata } from 'next'

export const viewport = {
    width: "device-width",
    initialScale: 1,
}

export const metadata: Metadata = {
    title: "404 - Página no encontrada | DentalWeb",
    description: "Lo sentimos, la página que buscas no existe en DentalWeb.",
}

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-6 text-center">
            <h1 className="text-9xl font-black text-teal-100 uppercase tracking-tighter">404</h1>
            <h2 className="text-4xl font-bold text-slate-900 mt-[-2rem] mb-6">Página no encontrada</h2>
            <p className="text-slate-500 max-w-md mb-10 text-lg">
                Parece que el enlace que seguiste ha expirado o la página ha sido movida a una nueva ubicación.
            </p>
            <Link
                href="/"
                className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-teal-500/20"
            >
                Volver al inicio
            </Link>
        </div>
    )
}
