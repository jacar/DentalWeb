'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Smile, Menu, X, Heart, User } from 'lucide-react'
import { useState } from 'react'
import { useFavoritesStore } from '@/lib/favorites-store'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const favoritesCount = useFavoritesStore((state) => state.favorites.length)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <Smile className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground">DentalTemplates</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#plantillas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Plantillas
            </Link>
            <Link href="#categorias" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Categorias
            </Link>
            <Link href="#precios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Precios
            </Link>
            <Link href="#soporte" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Soporte
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Favorites Button */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-rose-500 text-white border-0">
                  {favoritesCount}
                </Badge>
              )}
            </Button>

            {/* Login Button */}
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>

            {/* CTA Button */}
            <Button className="hidden sm:flex gap-2 bg-teal-600 hover:bg-teal-700">
              Comenzar
            </Button>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-3">
              <Link href="#plantillas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Plantillas
              </Link>
              <Link href="#categorias" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Categorias
              </Link>
              <Link href="#precios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Precios
              </Link>
              <Link href="#soporte" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Soporte
              </Link>
              <Button className="mt-2 gap-2 bg-teal-600 hover:bg-teal-700">
                Comenzar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
