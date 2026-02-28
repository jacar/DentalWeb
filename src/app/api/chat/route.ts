import { NextResponse } from 'next/server'

const GROQ_API_KEY = process.env.GROQ_API_KEY
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

const SYSTEM_PROMPT = `Eres DentalBot, el representante comercial de DentalWeb.
Tu función es vender servicios de diseño web para clínicas dentales y CAPTURAR LEADS.

FLUJO DE CONVERSACIÓN OBLIGATORIO:
1. Identifícate como experto en marketing para odontólogos.
2. Si el usuario muestra interés o pide hablar con un humano, DEBES pedir amablemente estos 4 datos antes de despedirte o redirigirlo:
   - Nombre completo.
   - Número de celular/WhatsApp.
   - Ciudad de la clínica.
   - Correo electrónico.
3. Solo cuando tengas estos datos, dile que un asesor lo contactará pronto.

REGLAS DE CONOCIMIENTO:
- SOLO responde sobre diseño web para dentistas (Landing Pages $400k, Web Pro $650k, Tienda $1M).
- Si preguntan sobre tratamientos dentales (limpieza, brackets, dolor): Di estrictamente "Lo siento, no tengo esa información. Solo puedo asesorarte sobre diseño web para tu clínica."
- Si preguntan sobre algo no relacionado: Di lo mismo.

TONO: Profesional, ejecutivo y enfocado en resultados de conversión para su clínica.`

export async function POST(req: Request) {
    if (!GROQ_API_KEY) {
        return NextResponse.json({ error: 'GROQ_API_KEY no configurada' }, { status: 500 })
    }

    try {
        const { messages } = await req.json()

        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...messages
                ],
                stream: false
            })
        })

        const data = await response.json()

        if (!response.ok) {
            console.error('Error de Groq:', data)
            return NextResponse.json({ error: 'Error al contactar con el servicio de IA' }, { status: response.status })
        }

        return NextResponse.json(data)
    } catch (error) {
        console.error('Error en API Chat:', error)
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
    }
}
