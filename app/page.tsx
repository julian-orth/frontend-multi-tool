"use client";

import Link from "next/link";
import { Heart, Search, X } from "lucide-react";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { resolveToolIcon } from "@/lib/tools/icon-resolver";
import { TOOLS } from "@/lib/tools/registry";
import { useFavorites } from "@/lib/contexts/favorites-context";
import { IconTooltip } from "@/components/icon-tooltip";

function HookSVG() {
  return (
    <svg viewBox="0 0 20 26" aria-hidden="true">
      <path className="hook-metal" d="M10 26 V10 A6 6 0 1 1 16 10" />
      <circle className="peg-hole" cx="10" cy="6" r="3.2" />
    </svg>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeToolId, setActiveToolId] = useState(TOOLS[0]?.id ?? "");
  const [cursor, setCursor] = useState({ x: 50, y: 20 });
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const filteredTools = useMemo(() => {
    const term = query.trim().toLowerCase();

    if (!term) return TOOLS;

    return TOOLS.filter((tool) => {
      const searchText = [
        tool.name,
        tool.description,
        tool.group,
        ...(tool.keywords ?? []),
        ...(tool.aliases ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return searchText.includes(term);
    });
  }, [query]);

  useEffect(() => {
    if (filteredTools.length === 0) return;
    if (!filteredTools.some((tool) => tool.id === activeToolId)) {
      setActiveToolId(filteredTools[0].id);
    }
  }, [activeToolId, filteredTools]);

  const spotlightStyle = {
    ["--mx" as string]: `${cursor.x}px`,
    ["--my" as string]: `${cursor.y}px`,
  } as CSSProperties;

  return (
    <main className="stage" style={spotlightStyle}>
      <div className="spotlight" aria-hidden="true" />

      <header>
        <div className="eyebrow">Werkbank online</div>
        <h1>Deine Toolbox</h1>
        <p>
          Client-seitige Dev-Werkzeuge, direkt im Browser. Kein Server, keine
          Wartezeit — einfach vom Haken nehmen und loslegen.
        </p>

        <label className="socket-search" aria-label="Werkzeug suchen">
          <Search className="h-4 w-4" aria-hidden="true" />
          <input
            id="tool-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Werkzeug suchen…"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="clear-search"
              aria-label="Suche leeren"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </label>
      </header>

      <div className="pegboard">
        {filteredTools.length === 0 ? (
          <div className="empty-state">
            Keine Werkzeuge für „{query}“ gefunden.
          </div>
        ) : (
          <div className="grid">
            {filteredTools.map((tool) => {
              const Icon = resolveToolIcon(tool.groupIcon);
              const isActive = tool.id === activeToolId;
              const isToolFavorite = isFavorite(tool.id);
              const favoriteLabel = `${
                isToolFavorite ? "Entferne" : "Füge"
              } ${tool.name} ${
                isToolFavorite ? "aus Favoriten" : "zu Favoriten hinzu"
              }`;

              return (
                <div
                  key={tool.id}
                  className={`tool ${isActive ? "active" : ""}`}
                >
                  <Link
                    href={tool.href}
                    className="tool-link"
                    onClick={() => setActiveToolId(tool.id)}
                    aria-label={`Öffne ${tool.name}`}
                  >
                    <div className="hook">
                      <HookSVG />
                    </div>
                    <div className="card">
                      <span className="status-dot" aria-hidden="true" />
                      <div className="icon-wrap">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="tool-name">{tool.name}</div>
                      <div className="tool-desc">{tool.description}</div>
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

      <footer>
        {filteredTools.length} Werkzeug{filteredTools.length !== 1 ? "e" : ""} ·
        alles läuft lokal im Browser
      </footer>
    </main>
  );
}
