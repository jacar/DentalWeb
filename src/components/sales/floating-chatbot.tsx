'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, MessageCircle } from 'lucide-react'
import { ChatDemo } from './bot-section'

export function FloatingChatbot() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, originX: '90%', originY: '90%' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[90vw] max-w-[400px] shadow-2xl rounded-3xl overflow-hidden border border-slate-200"
                    >
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-black/20 rounded-full text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <ChatDemo />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${isOpen
                        ? 'bg-slate-900 text-white rotate-90'
                        : 'bg-teal-500 text-white hover:bg-teal-600'
                    }`}
            >
                {isOpen ? <X className="w-8 h-8" /> : <Bot className="w-8 h-8" />}

                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute right-20 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 whitespace-nowrap hidden md:block"
                    >
                        <p className="text-slate-900 text-xs font-bold flex items-center gap-2">
                            ¿Dudas? Chatea con DentalBot ✨
                        </p>
                    </motion.div>
                )}
            </motion.button>
        </div>
    )
}
