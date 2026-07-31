import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { TOOLS } from "@/lib/tools/registry";
import { Layers, FlaskConical, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Frontend Multitool is built: a typed tool registry, 300+ tests, no backend, and real Lighthouse scores — not marketing copy.",
  keywords: [
    "about",
    "developer tools",
    "privacy",
    "client-side tools",
    "portfolio project",
  ],
  openGraph: {
    title: `About | ${SITE_CONFIG.name}`,
    description:
      "How Frontend Multitool is built: architecture, testing, and real performance numbers.",
    url: `${SITE_CONFIG.domain}/about`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `About | ${SITE_CONFIG.name}`,
    description: "How Frontend Multitool is built, tested, and measured.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/about`,
  },
};

const CATEGORY_COUNT = new Set(TOOLS.map((tool) => tool.group)).size;

const PROJECT_STATS = [
  { label: "Tools shipped", value: String(TOOLS.length) },
  { label: "Tool categories", value: String(CATEGORY_COUNT) },
  { label: "Automated tests", value: "331" },
  { label: "Backend servers", value: "0" },
];

const LIGHTHOUSE_SCORES = [
  { label: "Performance", value: 92 },
  { label: "Accessibility", value: 100 },
  { label: "Best Practices", value: 100 },
  { label: "SEO", value: 100 },
];

const PRINCIPLES = [
  {
    icon: Layers,
    color: "#3D5A99",
    title: "Typed registry, not a page pile",
    description:
      "Every tool is one typed config object. A prebuild script (validate:tools) rejects the build on duplicate IDs, missing pages, or dead relatedTools references, so a broken tool config never reaches production.",
  },
  {
    icon: FlaskConical,
    color: "#2E6B5E",
    title: "Tests that check the math",
    description:
      "331 Vitest + Testing Library tests across 9 files, covering things like color-space conversion and UUID decoding, not just that a component renders without throwing.",
  },
  {
    icon: Gauge,
    color: "#B5652C",
    title: "Client-side by architecture",
    description:
      "No backend, no analytics, no cookies. A blocking inline script sets the color theme before first paint to avoid a flash of the wrong theme — the accessibility and performance numbers below are a side effect of that, not a target hit after the fact.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 pb-16 sm:px-6">
      <div className="mb-8">
        <span className="inline-flex items-center rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)] shadow-[0_1px_0_var(--line)]">
          About
        </span>
        <h1 className="mb-3 mt-4 font-[Space_Grotesk] text-5xl font-bold tracking-tight text-[var(--ink)]">
          About This Project
        </h1>
        <p className="max-w-2xl text-lg text-[var(--ink-soft)]">
          A personal project built to practice production-grade frontend
          engineering in the open: a typed tool registry, a real test suite,
          and no backend to hide behind.
        </p>
      </div>

      <div className="space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PROJECT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-md border border-[var(--line)] bg-[var(--card)] p-4 shadow-[0_1px_0_var(--line-soft)]"
            >
              <div className="font-[Space_Grotesk] text-3xl font-bold text-[var(--ink)]">
                {stat.value}
              </div>
              <div className="mt-1 font-[IBM_Plex_Mono] text-[11px] uppercase tracking-[0.08em] text-[var(--ink-soft)]">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* What it is */}
        <section className="rounded-md border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_1px_0_var(--line-soft)]">
          <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            What it is
          </h2>
          <p className="mb-4 text-[var(--ink-soft)]">
            Frontend Multitool is a growing collection of everyday developer
            utilities — formatters, encoders, generators, converters — that
            run entirely in the browser. There&apos;s no API layer processing
            your input: what you type never leaves the page.
          </p>
          <p className="text-[var(--ink-soft)]">
            The point of the project isn&apos;t the tools themselves (plenty
            of formatters exist already). It&apos;s the codebase around
            them: a registry pattern that lets a new tool go from an empty
            folder to a linked, tested, SEO-indexed page without touching
            five different files by hand.
          </p>
        </section>

        {/* Principles */}
        <section>
          <h2 className="mb-6 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            How it&apos;s built
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((principle) => (
              <article
                key={principle.title}
                className="rounded-md border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_0_var(--line-soft)]"
              >
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded border"
                  style={{
                    borderColor: principle.color,
                    color: principle.color,
                  }}
                >
                  <principle.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-[Space_Grotesk] text-xl font-bold text-[var(--ink)]">
                  {principle.title}
                </h3>
                <p className="text-[var(--ink-soft)]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Lighthouse */}
        <section className="rounded-md border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_1px_0_var(--line-soft)]">
          <h2 className="mb-2 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            Lighthouse scores
          </h2>
          <p className="mb-6 text-[var(--ink-soft)]">
            Measured with the Lighthouse CLI against the production
            deployment, not the dev server. Update this after major changes
            rather than trusting it forever.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {LIGHTHOUSE_SCORES.map((score) => (
              <div
                key={score.label}
                className="rounded-md border border-[var(--line)] bg-[var(--paper-2)] p-4 text-center"
              >
                <div className="font-[Space_Grotesk] text-3xl font-bold text-[var(--ink)]">
                  {score.value}
                </div>
                <div className="mt-1 font-[IBM_Plex_Mono] text-[11px] uppercase tracking-[0.08em] text-[var(--ink-soft)]">
                  {score.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="rounded-md border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_1px_0_var(--line-soft)]">
          <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            Stack
          </h2>
          <ul className="space-y-2 text-[var(--ink-soft)]">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Next.js 16</strong> (App Router) — file-based
                routing and per-page metadata for SEO
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>React 19</strong> + <strong>TypeScript</strong> in
                strict mode — one shared <code>Tool</code> type across every
                tool page
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Tailwind CSS 4</strong> on top of a small set of CSS
                custom properties (<code>--ink</code>, <code>--paper</code>,{" "}
                <code>--line</code>) so light/dark theming lives in one place
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Vitest</strong> + <strong>Testing Library</strong> —
                run via <code>test:ci</code> as part of a{" "}
                <code>prebuild</code> gate, not just on demand
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                A small internal CLI (<code>scripts/create-tool.js</code>,{" "}
                <code>scripts/validate-tools.js</code>) scaffolds new tools
                and checks registry consistency — built after doing it by
                hand got error-prone around the tenth tool
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
