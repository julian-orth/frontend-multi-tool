import Link from "next/link";
import type { Metadata } from "next";
import { TOOLS } from "@/lib/i18n/en";
import { SITE_CONFIG } from "@/lib/site-config";
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
    description: "Encoding, UUID, regex, time, token and data checks.",
  },
  DESIGN: {
    label: "UI & Color",
    color: "#3D5A99",
    description: "Visual helpers for color, CSS and graphics workflows.",
  },
  CONTENT: {
    label: "Text & Content",
    color: "#2E6B5E",
    description: "Formatting, text generation, conversion and comparison.",
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

export const metadata: Metadata = {
  title: "All Developer Tools",
  description:
    "Browse the complete set of privacy-first frontend tools. Everything runs in your browser.",
  openGraph: {
    title: `All Developer Tools | ${SITE_CONFIG.name}`,
    description:
      "Browse the complete set of privacy-first frontend tools. Everything runs in your browser.",
    type: "website",
    url: `${SITE_CONFIG.domain}/tools`,
    siteName: SITE_CONFIG.name,
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools`,
  },
};

export default function ToolsPage() {
  const grouped = TOOLS.reduce(
    (acc, tool) => {
      const key = mapGroup(tool.group);
      acc[key].push(tool);
      return acc;
    },
    {
      ESSENTIALS: [],
      DESIGN: [],
      CONTENT: [],
    } as Record<SimpleGroupKey, Tool[]>
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-10">
        <span className="inline-flex items-center rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)] shadow-[0_1px_0_var(--line)]">
          Tool Directory
        </span>
        <h1 className="mt-4 font-[Space_Grotesk] text-5xl font-bold tracking-tight text-[var(--ink)]">
          All Developer Tools
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">
          Browse all {TOOLS.length} tools grouped into a small set of practical
          categories.
        </p>
      </header>

      <section className="space-y-10" aria-label="Developer tools list">
        {(Object.keys(SIMPLE_GROUPS) as SimpleGroupKey[]).map((groupKey) => {
          const section = SIMPLE_GROUPS[groupKey];
          const items = grouped[groupKey];

          if (!items.length) return null;

          return (
            <div key={groupKey}>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="rounded-t-sm px-3 py-1.5 text-xs uppercase tracking-[0.1em] text-white"
                  style={{ background: section.color }}
                >
                  {section.label}
                </span>
                <span className="text-xs text-[var(--ink-soft)]">
                  {items.length} Tool{items.length !== 1 ? "s" : ""}
                </span>
                <span className="h-px flex-1 bg-[var(--line)]" />
              </div>
              <p className="mb-3 text-sm text-[var(--ink-soft)]">
                {section.description}
              </p>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((tool) => (
                  <article key={tool.id}>
                    <Link
                      href={tool.href}
                      className="group relative flex h-full flex-col rounded-md border border-[var(--line)] bg-[var(--card)] px-4 py-4 shadow-[0_1px_0_var(--line-soft)] transition duration-150 hover:-translate-y-0.5 hover:border-[var(--ink-soft)] hover:shadow-[0_8px_18px_-12px_rgba(22,35,58,0.35)]"
                      aria-label={`Open ${tool.name}`}
                    >
                      <span className="absolute right-3 top-2 text-[9px] text-[var(--line)]">
                        #{tool.id}
                      </span>
                      <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded border border-[var(--line)] bg-[var(--paper-2)]">
                        <ToolGroupIcon
                          icon={tool.groupIcon}
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </span>
                      <h2 className="font-[Space_Grotesk] text-[15px] font-semibold text-[var(--ink)]">
                        {tool.name}
                      </h2>
                      <p className="mt-1 text-[12.5px] leading-snug text-[var(--ink-soft)]">
                        {tool.description}
                      </p>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
