"use client";

import { useLocale } from "@/lib/contexts/locale-context";

export function HomeHero({ toolCount }: { toolCount: number }) {
  const { t } = useLocale();

  return (
    <header className="mb-10">
      <div className="inline-flex items-center gap-2 rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-[var(--ink-soft)] uppercase shadow-[0_1px_0_var(--line)]">
        {t("home.kicker", { count: toolCount })}
      </div>
      <h1 className="font-display mt-4 text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.95] font-bold tracking-[-0.02em]">
        {t("site.name")}
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
        {t("home.subtitle")}
      </p>
    </header>
  );
}
