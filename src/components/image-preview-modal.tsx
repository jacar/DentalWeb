'use client'

import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X, ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ImagePreviewModalProps {
  src: string
  alt: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImagePreviewModal({ src, alt, open, onOpenChange }: ImagePreviewModalProps) {
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.5, 0.5))
  }

  const handleRotate = () => {
    setRotation((prev) => prev + 90)
  }

  const handleReset = () => {
    setScale(1)
    setRotation(0)
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = src
    link.download = alt.replace(/\s+/g, '-').toLowerCase() + '.jpg'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
        {/* Controls */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <div className="flex items-center gap-1 bg-black/50 rounded-lg p-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleZoomOut}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-white text-sm px-2 min-w-[60px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleZoomIn}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRotate}
            className="text-white hover:bg-white/20 h-8 w-8 bg-black/50"
          >
            <RotateCw className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDownload}
            className="text-white hover:bg-white/20 h-8 w-8 bg-black/50"
          >
            <Download className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="text-white hover:bg-white/20 h-8 w-8 bg-black/50"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
          <div
            className="relative transition-transform duration-300 cursor-move"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
            }}
            onDoubleClick={handleReset}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] w-auto"
              priority
            />
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="bg-black/50 rounded-lg px-4 py-2 text-center">
            <p className="text-white text-sm">{alt}</p>
            <p className="text-white/60 text-xs mt-1">Doble clic para restablecer zoom</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
