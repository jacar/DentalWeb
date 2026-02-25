import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesState {
  favorites: string[]
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
  toggleFavorite: (id: string) => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (id: string) => set((state) => ({
        favorites: [...state.favorites, id]
      })),

      removeFavorite: (id: string) => set((state) => ({
        favorites: state.favorites.filter((fav) => fav !== id)
      })),

      isFavorite: (id: string) => get().favorites.includes(id),

      toggleFavorite: (id: string) => {
        const { favorites, addFavorite, removeFavorite } = get()
        if (favorites.includes(id)) {
          removeFavorite(id)
        } else {
          addFavorite(id)
        }
      }
    }),
    {
      name: 'dental-templates-favorites',
      // Solo intentar acceder a storage si estamos en el cliente
      storage: typeof window !== 'undefined' ? localStorage : undefined
    }
  )
)
