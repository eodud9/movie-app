import { create } from "zustand";
import { persist } from "zustand/middleware";

interface favoriteState {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

//favorite page, movie & tv distributiion

export const useFavoriteStore = create<favoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (id: number) => {
        const { favorites } = get();
        const isExit = favorites.includes(id);

        if (isExit) {
          set({ favorites: favorites.filter((favorite) => favorite !== id) });
        } else {
          set({ favorites: [...favorites, id] });
        }
      },
      isFavorite: (id: number) => get().favorites.includes(id),
    }),
    { name: "favorite-storage" },
  ),
);
