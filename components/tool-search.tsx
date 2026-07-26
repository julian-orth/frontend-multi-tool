"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
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

export function ToolSearch({ tools }: { tools: Tool[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return tools;
    return tools.filter((tool) => getSearchText(tool).includes(term));
  }, [tools, query]);

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
    <>
      <div className="mt-6 flex max-w-xl items-center gap-3 rounded border border-[var(--line)] bg-[var(--card)] px-3 py-2.5 shadow-[0_2px_0_var(--line)] focus-within:border-[var(--focus)]">
        <Search className="h-4 w-4 text-[#b5652c]" aria-hidden="true" />
        <input
          className="w-full border-none bg-transparent font-[IBM_Plex_Mono] text-sm text-[var(--ink)] outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
          placeholder="Search tools, e.g. json, uuid, color..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded border border-[var(--line)] bg-[var(--card)] px-4 py-10 text-center font-[IBM_Plex_Mono] text-sm text-[var(--ink-soft)]">
          No tools found for &quot;{query}&quot;.
        </div>
      ) : (
        <section className="mt-10 space-y-10">
          {(Object.keys(SIMPLE_GROUPS) as SimpleGroupKey[]).map((groupKey) => {
            const section = SIMPLE_GROUPS[groupKey];
            const groupTools = grouped[groupKey];

            if (groupTools.length === 0) return null;

            return (
              <div key={groupKey}>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="rounded-t-sm px-3 py-1.5 font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.1em] text-white"
                    style={{ background: section.color }}
                  >
                    {section.label}
                  </span>
                  <span className="font-[IBM_Plex_Mono] text-xs text-[var(--ink-soft)]">
                    {groupTools.length} Tool{groupTools.length !== 1 ? "s" : ""}
                  </span>
                  <span className="h-px flex-1 bg-[var(--line)]" />
                </div>
                <p className="mb-3 text-sm text-[var(--ink-soft)]">
                  {section.description}
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {groupTools.map((tool) => (
                    <Link
                      key={tool.id}
                      href={tool.href}
                      className="group relative rounded-md border border-[var(--line)] bg-[var(--card)] px-4 py-4 text-left shadow-[0_1px_0_var(--line-soft)] transition duration-150 hover:-translate-y-0.5 hover:border-[var(--ink-soft)] hover:shadow-[0_8px_18px_-12px_rgba(22,35,58,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
                      aria-label={`Open ${tool.name}`}
                    >
                      <span className="absolute right-3 top-2 font-[IBM_Plex_Mono] text-[9px] text-[var(--line)]">
                        #{tool.id}
                      </span>
                      <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded border border-[var(--line)] bg-[var(--paper-2)]">
                        <ToolGroupIcon
                          icon={tool.groupIcon}
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </span>
                      <div className="font-[Space_Grotesk] text-[15px] font-semibold">
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
    </>
  );
}
