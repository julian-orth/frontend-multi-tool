import { TOOLS } from "@/lib/i18n/en";
import { SITE_CONFIG } from "@/lib/site-config";
import { ToolSearch } from "@/components/tool-search";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 font-[IBM_Plex_Mono] text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)] shadow-[0_1px_0_var(--line)]">
          Welcome · {TOOLS.length} tools, right in your browser
        </div>
        <h1 className="mt-4 font-[Space_Grotesk] text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[0.95] tracking-[-0.02em]">
          {SITE_CONFIG.name}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
          Fast, practical developer tools in one clear workspace.
        </p>
      </header>

      <ToolSearch tools={TOOLS} />
    </div>
  );
}
