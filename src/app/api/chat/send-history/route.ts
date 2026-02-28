import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const { history, userEmail, rating, attachments } = await req.json()
        const targetEmail = 'webcincodev@gmail.com'

        if (!process.env.EMAIL_APP_PASSWORD) {
            console.error('EMAIL_APP_PASSWORD no encontrada en .env')
            return NextResponse.json({ error: 'Configuración de correo incompleta' }, { status: 500 })
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'webcincodias@gmail.com',
                pass: process.env.EMAIL_APP_PASSWORD.replace(/\s/g, '')
            }
        })

        // VERIFICAR CONEXIÓN
        try {
            await transporter.verify()
            console.log('✅ SMTP Auth Success')
        } catch (verifyError) {
            console.error('❌ SMTP Auth Failed:', verifyError)
            return NextResponse.json({
                error: 'Error de autenticación con Gmail. Verifica el App Password.',
                details: verifyError instanceof Error ? verifyError.message : String(verifyError)
            }, { status: 401 })
        }

        const formattedHistory = history.map((m: any) =>
            `[${m.role.toUpperCase()}] (${new Date().toLocaleTimeString()}): ${m.content}`
        ).join('\n\n')

        const stars = rating ? '⭐'.repeat(rating) : 'Sin calificar'

        const mailOptions: any = {
            from: '"DentalWeb Assistant" <webcincodias@gmail.com>',
            to: `webcincodev@gmail.com, webcincodias@gmail.com`, // Enviar a ambos
            subject: `Nuevo Lead: Historial + Adjuntos - ${new Date().toLocaleDateString()}`,
            text: `Se ha generado un contacto desde el Chatbot.\n\nENCUESTA DE SATISFACCIÓN: ${stars} (${rating || 0}/5)\n\nDATOS CAPTURADOS Y CONVERSACIÓN:\n\n${formattedHistory}\n\nEmail del usuario (si lo proporcionó): ${userEmail || 'Desconocido'}`,
            attachments: attachments?.map((file: any) => ({
                filename: file.name,
                content: file.data.split('base64,')[1],
                encoding: 'base64'
            }))
        }

        const info = await transporter.sendMail(mailOptions)
        console.log('✅ Email Sent:', info.messageId)

        return NextResponse.json({ success: true, message: 'Historial enviado correctamente' })
    } catch (error) {
        console.error('Error detallado enviando email:', error)
        return NextResponse.json({ error: 'Error al enviar el correo', details: error instanceof Error ? error.message : String(error) }, { status: 500 })
    }
}
