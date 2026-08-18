"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import type { Tool } from "@/lib/types/tool";
import {
  groupToolsBySimpleCategory,
  SIMPLE_GROUPS,
  type SimpleGroupKey,
} from "@/lib/tools/simple-groups";
import {
  GROUP_COLOR_CLASSES,
  resolveToolIcon,
} from "@/lib/tools/icon-resolver";
import { useLocale } from "@/lib/contexts/locale-context";
import { localizeHref } from "@/lib/i18n/locale";
import { getLocalizedTool } from "@/lib/i18n/tools";

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
  const { locale, t } = useLocale();

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return tools;
    return tools.filter((tool) => getSearchText(tool).includes(term));
  }, [tools, query]);

  const grouped = useMemo(() => {
    return groupToolsBySimpleCategory(filtered);
  }, [filtered]);

  return (
    <>
      <div className="mt-6 flex max-w-xl items-center gap-3 rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-2.5 shadow-[0_2px_0_var(--line)] focus-within:border-[var(--focus)]">
        <Search className="h-4 w-4 text-[#b5652c]" aria-hidden="true" />
        <input
          className="w-full border-none bg-transparent font-mono text-sm text-[var(--ink)] outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
          placeholder={t("home.searchPlaceholder")}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="cursor-pointer rounded p-0.5 text-[var(--ink-soft)] transition hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
            aria-label={t("common.clear")}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-sm border border-[var(--line)] bg-[var(--card)] px-4 py-10 text-center font-mono text-sm text-[var(--ink-soft)]">
          {t("home.noToolsFound", { query })}
        </div>
      ) : (
        <section className="mt-10 space-y-10">
          {(Object.keys(SIMPLE_GROUPS) as SimpleGroupKey[]).map((groupKey) => {
            const section = SIMPLE_GROUPS[groupKey];
            const groupTools = grouped[groupKey];

            if (groupTools.length === 0) return null;

            return (
              <div
                key={groupKey}
                className="rounded-sm border border-[var(--line)] bg-[var(--card)] p-3 sm:p-4"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 font-mono text-xs font-semibold tracking-[0.1em] text-white uppercase shadow-[0_1px_0_rgba(0,0,0,0.25)]"
                    style={{
                      background: section.color,
                      borderColor: section.color,
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                      aria-hidden="true"
                    />
                    {t(`categories.${groupKey}.label`)}
                  </span>
                  <span className="rounded-sm border border-[var(--line)] bg-[var(--paper-2)] px-2 py-0.5 font-mono text-[11px] text-[var(--ink-soft)]">
                    {groupTools.length}{" "}
                    {groupTools.length !== 1
                      ? t("common.tools")
                      : t("common.tool")}
                  </span>
                </div>
                <p className="mb-3 text-sm text-[var(--ink-soft)]">
                  {t(`categories.${groupKey}.description`)}
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {groupTools.map((tool) => {
                    const localizedTool = getLocalizedTool(tool, locale);
                    const Icon = resolveToolIcon(tool.groupIcon);
                    const badgeColor =
                      GROUP_COLOR_CLASSES[tool.groupColor] ||
                      GROUP_COLOR_CLASSES.blue;

                    return (
                      <Link
                        key={tool.id}
                        href={localizeHref(tool.href, locale)}
                        className="group relative rounded-sm border border-[var(--line)] bg-[var(--paper)] px-3 py-3 text-left shadow-[0_1px_0_var(--line-soft)] transition-colors hover:bg-[var(--paper-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
                      >
                        <div className="mb-2">
                          <span className="inline-flex items-center justify-center rounded-full border border-[var(--line)]/60 p-1.5">
                            <span
                              className={`rounded-full p-1.5 ${badgeColor}`}
                            >
                              <Icon
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                            </span>
                          </span>
                        </div>
                        <div className="font-display text-[14px] leading-tight font-semibold">
                          {localizedTool.name}
                        </div>
                        <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-[var(--ink-soft)]">
                          {localizedTool.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
}
