'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                type="button"
                onClick={scrollToTop}
                className={cn(
                    'p-3 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2',
                    isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10 pointer-events-none'
                )}
                aria-label="Volver arriba"
            >
                <ArrowUp className="w-6 h-6" />
            </button>
        </div>
    )
}
