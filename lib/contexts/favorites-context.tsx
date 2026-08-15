"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const FAVORITES_STORAGE_KEY = "favorite-tool-ids";

interface FavoritesContextValue {
  favoriteToolIds: string[];
  isFavorite: (toolId: string) => boolean;
  toggleFavorite: (toolId: string) => void;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextValue>({
  favoriteToolIds: [],
  isFavorite: () => false,
  toggleFavorite: () => {},
  clearFavorites: () => {},
});

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteToolIds, setFavoriteToolIds] = useState<string[]>([]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      try {
        const storedFavorites = sessionStorage.getItem(FAVORITES_STORAGE_KEY);
        const parsedFavorites: unknown = storedFavorites
          ? JSON.parse(storedFavorites)
          : [];

        if (
          Array.isArray(parsedFavorites) &&
          parsedFavorites.every((toolId) => typeof toolId === "string")
        ) {
          setFavoriteToolIds(parsedFavorites);
        }
      } catch {
        sessionStorage.removeItem(FAVORITES_STORAGE_KEY);
      }
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  const toggleFavorite = useCallback((toolId: string) => {
    setFavoriteToolIds((currentFavorites) => {
      const nextFavorites = currentFavorites.includes(toolId)
        ? currentFavorites.filter((id) => id !== toolId)
        : [...currentFavorites, toolId];

      sessionStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(nextFavorites)
      );

      return nextFavorites;
    });
  }, []);

  const clearFavorites = useCallback(() => {
    sessionStorage.removeItem(FAVORITES_STORAGE_KEY);
    setFavoriteToolIds([]);
  }, []);

  const value = useMemo(
    () => ({
      favoriteToolIds,
      isFavorite: (toolId: string) => favoriteToolIds.includes(toolId),
      toggleFavorite,
      clearFavorites,
    }),
    [clearFavorites, favoriteToolIds, toggleFavorite]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
