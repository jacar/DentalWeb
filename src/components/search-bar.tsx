'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Buscar plantillas por nombre o caracteristicas..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 h-11 bg-background border-border focus:border-teal-500 focus:ring-teal-500/20"
      />
    </div>
  )
}
