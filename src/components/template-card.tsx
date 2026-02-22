'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Download, Eye, Heart } from 'lucide-react'
import { Template } from '@/lib/templates-data'
import { useFavoritesStore } from '@/lib/favorites-store'
import { ImagePreviewModal } from '@/components/image-preview-modal'
import Image from 'next/image'
import { useState } from 'react'

// Formatear numero de manera consistente
function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num.toString()
}

interface TemplateCardProps {
  template: Template
  onViewDetails: (template: Template) => void
}

export function TemplateCard({ template, onViewDetails }: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showImagePreview, setShowImagePreview] = useState(false)
  const { isFavorite, toggleFavorite } = useFavoritesStore()
  const favorite = isFavorite(template.id)

  return (
    <>
      <Card 
        className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={template.image}
            alt={template.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <Button 
                size="sm" 
                className="flex-1 bg-white text-gray-900 hover:bg-white/90"
                onClick={() => setShowImagePreview(true)}
              >
                <Eye className="w-4 h-4 mr-2" />
                Vista Previa
              </Button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {template.isNew && (
              <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-0">
                Nuevo
              </Badge>
            )}
            {template.isPopular && (
              <Badge className="bg-amber-500 hover:bg-amber-600 text-white border-0">
                Popular
              </Badge>
            )}
          </div>

          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleFavorite(template.id)
            }}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
              favorite 
                ? 'bg-rose-500 text-white' 
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
            aria-label={favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg text-card-foreground">{template.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                {template.description}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-3">
          {/* Features */}
          <div className="flex flex-wrap gap-1.5">
            {template.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs font-normal">
                {feature}
              </Badge>
            ))}
            {template.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{template.features.length - 3} mas
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-0 border-t border-border">
          <div className="flex items-center justify-between w-full pt-3">
            <div className="flex items-center gap-4">
              {/* Rating */}
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{template.rating}</span>
              </div>
              
              {/* Downloads */}
              <div className="flex items-center gap-1 text-muted-foreground">
                <Download className="w-4 h-4" />
                <span className="text-sm">{formatNumber(template.downloads)}</span>
              </div>
            </div>

            <Button 
              variant="ghost" 
              size="sm"
              className="text-primary hover:text-primary hover:bg-primary/10"
              onClick={() => onViewDetails(template)}
            >
              Ver detalles
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        src={template.image}
        alt={template.name}
        open={showImagePreview}
        onOpenChange={setShowImagePreview}
      />
    </>
  )
}
