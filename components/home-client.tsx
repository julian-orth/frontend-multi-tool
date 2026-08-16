"use client";

import Link from "next/link";
import { Heart, Search, X } from "lucide-react";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { resolveToolIcon } from "@/lib/tools/icon-resolver";
import { TOOLS } from "@/lib/tools/registry";
import { useFavorites } from "@/lib/contexts/favorites-context";
import { useLocale } from "@/lib/contexts/locale-context";
import { IconTooltip } from "@/components/icon-tooltip";
import { getLocalizedTool } from "@/lib/i18n/tools";
import { localizeHref } from "@/lib/i18n/locale";

export function HomeClient() {
  const [query, setQuery] = useState("");
  const [activeToolId, setActiveToolId] = useState(TOOLS[0]?.id ?? "");
  const [cursor, setCursor] = useState({ x: 50, y: 20 });
  const { isFavorite, toggleFavorite } = useFavorites();
  const { locale, t } = useLocale();

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const filteredTools = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return TOOLS;

    return TOOLS.filter((tool) => {
      const localizedTool = getLocalizedTool(tool, locale);
      const searchText = [
        localizedTool.name,
        localizedTool.description,
        tool.group,
        ...(tool.keywords ?? []),
        ...(tool.aliases ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return searchText.includes(term);
    });
  }, [locale, query]);
  const displayedActiveToolId = filteredTools.some(
    (tool) => tool.id === activeToolId
  )
    ? activeToolId
    : (filteredTools[0]?.id ?? "");
  const spotlightStyle = {
    ["--mx" as string]: `${cursor.x}px`,
    ["--my" as string]: `${cursor.y}px`,
  } as CSSProperties;

  return (
    <main className="stage" style={spotlightStyle}>
      <div className="spotlight" aria-hidden="true" />
      <header>
        <div className="eyebrow">{t("site.name")}</div>
        <h1>{t("home.title")}</h1>
        <p>{t("home.intro")}</p>
        <div className="home-search-row">
          <label className="socket-search" aria-label={t("home.searchLabel")}>
            <Search className="h-4 w-4" aria-hidden="true" />
            <input
              id="tool-search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("home.searchPlaceholder")}
              autoComplete="off"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="clear-search"
                aria-label={t("common.clear")}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </label>
          <div className="tool-counter" aria-live="polite">
            {t("home.resultsCounter", {
              shown: filteredTools.length,
              total: TOOLS.length,
            })}
          </div>
        </div>
      </header>

      <div className="pegboard">
        {filteredTools.length === 0 ? (
          <div className="empty-state">{t("home.noToolsFound", { query })}</div>
        ) : (
          <div className="grid">
            {filteredTools.map((tool) => {
              const Icon = resolveToolIcon(tool.groupIcon);
              const localizedTool = getLocalizedTool(tool, locale);
              const isActive = tool.id === displayedActiveToolId;
              const isToolFavorite = isFavorite(tool.id);
              const favoriteLabel = t(
                isToolFavorite ? "favorites.remove" : "favorites.add",
                { name: localizedTool.name }
              );

              return (
                <div
                  key={tool.id}
                  className={`tool ${isActive ? "active" : ""}`}
                >
                  <Link
                    href={localizeHref(tool.href, locale)}
                    className="tool-link"
                    onClick={() => setActiveToolId(tool.id)}
                    aria-label={t("home.openTool", {
                      name: localizedTool.name,
                    })}
                  >
                    <div className="card">
                      <span className="status-dot" aria-hidden="true" />
                      <div className="icon-wrap">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="tool-name">{localizedTool.name}</div>
                      <div className="tool-desc">
                        {localizedTool.description}
                      </div>
                    </div>
                  </Link>
                  <IconTooltip
                    label={favoriteLabel}
                    align="end"
                    className="tool-favorite-tooltip"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFavorite(tool.id)}
                      className={`tool-favorite ${
                        isToolFavorite ? "is-favorite" : ""
                      }`}
                      aria-label={favoriteLabel}
                    >
                      <Heart aria-hidden="true" />
                    </button>
                  </IconTooltip>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
