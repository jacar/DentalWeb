'use client'

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface VideoScrollSequenceProps {
    progress?: MotionValue<number>
    showOverlay?: boolean
    opacity?: number
}

export function VideoScrollSequence({ progress, showOverlay = true, opacity = 0.6 }: VideoScrollSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [images, setImages] = useState<HTMLImageElement[]>([])
    const frameCount = 300

    // Default scroll tracking if none provided (for vertical usage)
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const effectiveProgress = progress || scrollYProgress
    const frameIndex = useTransform(effectiveProgress, [0, 1], [0, frameCount - 1])

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = []
        let loadedCount = 0

        const preloadImages = () => {
            for (let i = 0; i < frameCount; i++) {
                const img = new Image()
                const paddedIndex = i.toString().padStart(3, '0')
                img.src = `/images/video/Video 3D Expansión del maxilar mediante expansor dental_${paddedIndex}.webp`
                img.onload = () => {
                    loadedCount++
                    if (loadedCount === frameCount) {
                        setImages(loadedImages)
                    }
                }
                loadedImages.push(img)
            }
        }

        preloadImages()
    }, [])

    // Draw frame on canvas
    useEffect(() => {
        if (images.length === 0 || !canvasRef.current) return

        const context = canvasRef.current.getContext('2d')
        if (!context) return

        const render = () => {
            const index = Math.floor(frameIndex.get())
            const image = images[index]
            if (image) {
                // Clear and draw
                const canvas = canvasRef.current!
                const scale = Math.max(canvas.width / image.width, canvas.height / image.height)
                const x = (canvas.width / 2) - (image.width / 2) * scale
                const y = (canvas.height / 2) - (image.height / 2) * scale

                context.clearRect(0, 0, canvas.width, canvas.height)
                context.drawImage(image, x, y, image.width * scale, image.height * scale)
            }
        }

        // Subscribe to motion value changes
        const unsubscribe = frameIndex.on("change", render)

        // Initial render
        render()

        return () => unsubscribe()
    }, [images, frameIndex])

    // Resize canvas
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth
                canvasRef.current.height = window.innerHeight
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <canvas
                ref={canvasRef}
                style={{ opacity }}
                className="w-full h-full object-cover pointer-events-none"
            />

            {/* Overlay Content (Optional) */}
            {showOverlay && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 z-10 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-2xl"
                    >
                        <span className="text-blue-400 font-black tracking-[0.5em] uppercase text-xs mb-6 block">Tecnología 3D Avanzada</span>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none uppercase">
                            VISUALIZA TU <br />
                            <span className="text-gradient">NUEVA SONRISA</span>
                        </h2>
                        <p className="text-slate-400 text-xl font-medium max-w-lg mx-auto italic">
                            "Simulaciones precisas que permiten a tus pacientes ver el resultado final antes de empezar."
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Decorative Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.95)_100%)] opacity-80" />
        </div>
    )
}
