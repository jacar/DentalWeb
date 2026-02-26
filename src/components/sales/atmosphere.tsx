'use client'

import { motion } from 'framer-motion'

export function Atmosphere() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Film Grain Texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://res.cloudinary.com/dzv9rqg49/image/upload/v1642675402/grain_m4f9w4.png')] bg-repeat"
                style={{ mixBlendMode: 'overlay' }}
            />

            {/* Dynamic Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] pointer-events-none" />

            {/* Subtle Moving Glows */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -left-20 w-[40vw] h-[40vw] rounded-full bg-teal-400/5 blur-[120px] -z-10"
            />

            <motion.div
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 100, -50, 0],
                    opacity: [0.03, 0.08, 0.03]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 -right-20 w-[35vw] h-[35vw] rounded-full bg-cyan-400/5 blur-[100px] -z-10"
            />
        </div>
    )
}
