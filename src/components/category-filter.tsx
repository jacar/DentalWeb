'use client'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Grid3X3, Layout, Briefcase, Users, Phone, Tag } from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: string
}

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Grid3X3,
  Layout,
  Briefcase,
  Users,
  Phone,
  Tag
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-2 pb-2">
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon]
          const isActive = activeCategory === category.id
          
          return (
            <Button
              key={category.id}
              variant={isActive ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className={`gap-2 transition-all duration-200 ${
                isActive 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {IconComponent && <IconComponent className="w-4 h-4" />}
              {category.name}
            </Button>
          )
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
