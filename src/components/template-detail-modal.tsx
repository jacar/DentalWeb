'use client'

import { Template } from '@/lib/templates-data'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ImagePreviewModal } from '@/components/image-preview-modal'
import { Star, Download, Check, ExternalLink, Copy, Heart, Share2, Code, Eye, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useFavoritesStore } from '@/lib/favorites-store'
import { toast } from 'sonner'

// Formatear numero de manera consistente
function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num.toString()
}

interface TemplateDetailModalProps {
  template: Template | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TemplateDetailModal({ template, open, onOpenChange }: TemplateDetailModalProps) {
  const [copied, setCopied] = useState(false)
  const [showImagePreview, setShowImagePreview] = useState(false)
  const { isFavorite, toggleFavorite } = useFavoritesStore()

  if (!template) return null

  const favorite = isFavorite(template.id)

  const handleCopyId = () => {
    navigator.clipboard.writeText(template.id)
    setCopied(true)
    toast.success('ID copiado al portapapeles')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleUseTemplate = () => {
    toast.success(`Plantilla "${template.name}" seleccionada!`)
    onOpenChange(false)
  }

  const handleToggleFavorite = () => {
    toggleFavorite(template.id)
    toast.success(favorite ? 'Eliminado de favoritos' : 'Agregado a favoritos')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: template.name,
        text: template.description,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success('Enlace copiado al portapapeles')
    }
  }

  const categoryNames: Record<string, string> = {
    landing: 'Landing Page',
    services: 'Servicios',
    team: 'Equipo',
    contact: 'Contacto',
    promo: 'Promociones'
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 flex-wrap">
              <DialogTitle className="text-2xl">{template.name}</DialogTitle>
              {template.isNew && (
                <Badge className="bg-emerald-500 text-white border-0">Nuevo</Badge>
              )}
              {template.isPopular && (
                <Badge className="bg-amber-500 text-white border-0">Popular</Badge>
              )}
            </div>
            <DialogDescription className="text-base">
              {template.description}
            </DialogDescription>
          </DialogHeader>

          {/* Preview Image */}
          <div 
            className="relative aspect-video rounded-lg overflow-hidden border border-border bg-muted cursor-pointer group"
            onClick={() => setShowImagePreview(true)}
          >
            <Image
              src={template.image}
              alt={template.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="lg" className="gap-2 bg-white/90 text-gray-900 hover:bg-white">
                  <Eye className="w-5 h-5" />
                  Vista Previa Completa
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between py-4 border-y border-border">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <div>
                  <p className="font-semibold">{template.rating}</p>
                  <p className="text-xs text-muted-foreground">Calificacion</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold">{formatNumber(template.downloads)}</p>
                  <p className="text-xs text-muted-foreground">Descargas</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-teal-500/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-teal-600">T</span>
                </div>
                <div>
                  <p className="font-semibold">{categoryNames[template.category]}</p>
                  <p className="text-xs text-muted-foreground">Categoria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="caracteristicas" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="caracteristicas">Caracteristicas</TabsTrigger>
              <TabsTrigger value="detalles">Detalles</TabsTrigger>
              <TabsTrigger value="opiniones">Opiniones</TabsTrigger>
            </TabsList>
            
            <TabsContent value="caracteristicas" className="mt-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Caracteristicas incluidas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="detalles" className="mt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm text-muted-foreground">Tecnologias</p>
                    <p className="font-medium mt-1">React, Tailwind CSS, TypeScript</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm text-muted-foreground">Diseno</p>
                    <p className="font-medium mt-1">Responsivo, Moderno, Accesible</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm text-muted-foreground">Ultima actualizacion</p>
                    <p className="font-medium mt-1">Enero 2025</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm text-muted-foreground">Compatibilidad</p>
                    <p className="font-medium mt-1">Todos los navegadores modernos</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="opiniones" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Opiniones de usuarios</h4>
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Escribir opinion
                  </Button>
                </div>
                
                {/* Sample reviews */}
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1,2,3,4,5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">Dr. Martinez</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Excelente plantilla, muy profesional. Mis pacientes han elogiado el diseno de mi nuevo sitio web.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1,2,3,4,5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">Dra. Gonzalez</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Facil de personalizar y muy bien documentada. La recomiendo totalmente.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
            <Button 
              className="flex-1 gap-2 bg-teal-600 hover:bg-teal-700" 
              size="lg"
              onClick={handleUseTemplate}
            >
              <ExternalLink className="w-4 h-4" />
              Usar Plantilla
            </Button>
            <Button 
              variant={favorite ? "default" : "outline"} 
              size="lg" 
              className={`gap-2 ${favorite ? 'bg-rose-500 hover:bg-rose-600' : ''}`}
              onClick={handleToggleFavorite}
            >
              <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
              {favorite ? 'En favoritos' : 'Favorito'}
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={handleShare}>
              <Share2 className="w-4 h-4" />
              Compartir
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={handleCopyId}>
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  Copiado
                </>
              ) : (
                <>
                  <Code className="w-4 h-4" />
                  Copiar ID
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            ID de plantilla: <code className="bg-muted px-2 py-1 rounded font-mono">{template.id}</code>
          </p>
        </DialogContent>
      </Dialog>

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
