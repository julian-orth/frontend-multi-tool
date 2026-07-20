"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { TOOLS } from "@/lib/i18n/en";
import { ToolGroupIcon } from "@/components/tool-group-icons";
import type { Tool, ToolGroup } from "@/lib/types/tool";

type SimpleGroupKey = "ESSENTIALS" | "DESIGN" | "CONTENT";

const SIMPLE_GROUPS: Record<
  SimpleGroupKey,
  { label: string; color: string; description: string }
> = {
  ESSENTIALS: {
    label: "Core Tools",
    color: "#B5652C",
    description: "Encode, validate, inspect, and debug development data.",
  },
  DESIGN: {
    label: "UI & Color",
    color: "#3D5A99",
    description: "Design helpers for color, CSS, and visual output.",
  },
  CONTENT: {
    label: "Text & Content",
    color: "#2E6B5E",
    description: "Write, format, compare, and transform content quickly.",
  },
};

const GROUP_TO_SIMPLE: Partial<Record<ToolGroup, SimpleGroupKey>> = {
  Encoding: "ESSENTIALS",
  UUID: "ESSENTIALS",
  Regex: "ESSENTIALS",
  JWT: "ESSENTIALS",
  Security: "ESSENTIALS",
  Time: "ESSENTIALS",
  JSON: "ESSENTIALS",
  Data: "ESSENTIALS",
  Network: "ESSENTIALS",
  Color: "DESIGN",
  CSS: "DESIGN",
  Image: "DESIGN",
  Text: "CONTENT",
  HTML: "CONTENT",
};

function mapGroup(group: ToolGroup): SimpleGroupKey {
  return GROUP_TO_SIMPLE[group] ?? "ESSENTIALS";
}

function getSearchText(tool: Tool): string {
  return [
    tool.name,
    tool.description,
    tool.group,
    ...(tool.keywords ?? []),
    ...(tool.aliases ?? []),
  ]
    .join(" ")
    .toLowerCase();
}

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return TOOLS;
    return TOOLS.filter((tool) => getSearchText(tool).includes(term));
  }, [query]);

  const grouped = useMemo(() => {
    const initial: Record<SimpleGroupKey, Tool[]> = {
      ESSENTIALS: [],
      DESIGN: [],
      CONTENT: [],
    };

    for (const tool of filtered) {
      initial[mapGroup(tool.group)].push(tool);
    }

    return initial;
  }, [filtered]);

  return (
    <div className="tb-root">
      <style jsx global>{`
        .tb-root {
          --paper: #eaeef2;
          --paper-2: #e1e6ec;
          --card: #fdfdfc;
          --ink: #16233a;
          --ink-soft: #4b5a72;
          --line: #c7cdd6;
          --line-soft: #dadfe5;
          --focus: #3d5a99;
          min-height: 100vh;
          background: var(--paper);
          background-image:
            linear-gradient(var(--line-soft) 1px, transparent 1px),
            linear-gradient(90deg, var(--line-soft) 1px, transparent 1px);
          background-size: 28px 28px;
          color: var(--ink);
          font-family: var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif;
        }
        .dark .tb-root {
          --paper: #101722;
          --paper-2: #162132;
          --card: #111b2b;
          --ink: #e5edf7;
          --ink-soft: #97a9c3;
          --line: #2b3a4f;
          --line-soft: #213044;
          --focus: #7da0e8;
        }
        .tb-root * {
          box-sizing: border-box;
        }
        .tb-root ::selection {
          background: #16233a;
          color: #eaeef2;
        }
        .tb-display {
          font-family: var(--font-space-grotesk), "Space Grotesk", sans-serif;
        }
        .tb-mono {
          font-family: var(--font-ibm-plex-mono), "IBM Plex Mono", monospace;
        }
        .tb-focus:focus-visible {
          outline: 2px solid var(--focus);
          outline-offset: 2px;
        }
      `}</style>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)] shadow-[0_1px_0_var(--line)] tb-mono">
            Willkommen · {TOOLS.length} Tools direkt im Browser
          </div>
          <h1 className="mt-4 text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[0.95] tracking-[-0.02em] tb-display">
            Frontend Tools Hub
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
            Schnelle, praktische Entwickler-Tools in einem klaren Arbeitsbereich.
          </p>
          <div className="mt-6 flex max-w-xl items-center gap-3 rounded border border-[var(--line)] bg-[var(--card)] px-3 py-2.5 shadow-[0_2px_0_var(--line)] focus-within:border-[var(--focus)]">
            <Search className="h-4 w-4 text-[#b5652c]" aria-hidden="true" />
            <input
              className="tb-focus tb-mono w-full border-none bg-transparent text-sm text-[var(--ink)] outline-none"
              placeholder="Tool suchen, z.B. json, uuid, color..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </header>

        {filtered.length === 0 ? (
          <div className="rounded border border-[var(--line)] bg-[var(--card)] px-4 py-10 text-center text-sm text-[var(--ink-soft)] tb-mono">
            Keine Tools für "{query}" gefunden.
          </div>
        ) : (
          <section className="space-y-10">
            {(Object.keys(SIMPLE_GROUPS) as SimpleGroupKey[]).map((groupKey) => {
              const section = SIMPLE_GROUPS[groupKey];
              const tools = grouped[groupKey];

              if (tools.length === 0) return null;

              return (
                <div key={groupKey}>
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="rounded-t-sm px-3 py-1.5 text-xs uppercase tracking-[0.1em] text-white tb-mono"
                      style={{ background: section.color }}
                    >
                      {section.label}
                    </span>
                    <span className="text-xs text-[var(--ink-soft)] tb-mono">
                      {tools.length} Tool{tools.length !== 1 ? "s" : ""}
                    </span>
                    <span className="h-px flex-1 bg-[var(--line)]" />
                  </div>
                  <p className="mb-3 text-sm text-[var(--ink-soft)]">
                    {section.description}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={tool.href}
                        className="tb-focus group relative rounded-md border border-[var(--line)] bg-[var(--card)] px-4 py-4 text-left shadow-[0_1px_0_var(--line-soft)] transition duration-150 hover:-translate-y-0.5 hover:border-[var(--ink-soft)] hover:shadow-[0_8px_18px_-12px_rgba(22,35,58,0.35)]"
                        aria-label={`${tool.name} öffnen`}
                      >
                        <span className="tb-mono absolute right-3 top-2 text-[9px] text-[var(--line)]">
                          #{tool.id}
                        </span>
                        <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded border border-[var(--line)] bg-[var(--paper-2)]">
                          <ToolGroupIcon
                            icon={tool.groupIcon}
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </span>
                        <div className="tb-display text-[15px] font-semibold">
                          {tool.name}
                        </div>
                        <p className="mt-1 line-clamp-2 text-[12.5px] leading-snug text-[var(--ink-soft)]">
                          {tool.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        )}
      </main>
    </div>
  );
}