"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/lib/contexts/favorites-context";
import { useLocale } from "@/lib/contexts/locale-context";

export function FavoriteButton({
  toolId,
  toolName,
}: {
  toolId: string;
  toolName: string;
}) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { t } = useLocale();
  const isToolFavorite = isFavorite(toolId);
  const label = t(isToolFavorite ? "favorites.remove" : "favorites.add", {
    name: toolName,
  });

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(toolId)}
      aria-label={label}
      aria-pressed={isToolFavorite}
      title={label}
      className={`mt-1 inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-colors focus:ring-2 focus:ring-[var(--focus)] focus:outline-none ${
        isToolFavorite
          ? "border-red-200 bg-red-50 text-red-500 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
          : "border-gray-200 bg-white text-gray-400 hover:border-red-200 hover:text-red-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-500 dark:hover:border-red-900/50 dark:hover:text-red-400"
      }`}
    >
      <Heart
        className={`h-5 w-5 ${isToolFavorite ? "fill-current" : ""}`}
        aria-hidden="true"
      />
    </button>
  );
}
