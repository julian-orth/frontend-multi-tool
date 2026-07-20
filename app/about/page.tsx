import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { Shield, Code, Zap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DeveloperUtilityTools - a free, privacy-focused collection of developer utilities that run entirely in your browser.",
  keywords: [
    "about",
    "developer tools",
    "privacy",
    "client-side tools",
    "open source",
  ],
  openGraph: {
    title: `About | ${SITE_CONFIG.name}`,
    description:
      "Learn about our commitment to privacy-first developer tools and client-side processing.",
    url: `${SITE_CONFIG.domain}/about`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `About | ${SITE_CONFIG.name}`,
    description:
      "Privacy-first developer tools running entirely in your browser.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 pb-16 sm:px-6">
      <div className="mb-8">
        <span className="inline-flex items-center rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)] shadow-[0_1px_0_var(--line)]">
          About
        </span>
        <h1 className="mb-3 mt-4 font-[Space_Grotesk] text-5xl font-bold tracking-tight text-[var(--ink)]">
          About This Project
        </h1>
        <p className="text-lg text-[var(--ink-soft)]">
          A production-style frontend project focused on privacy, speed, and
          practical developer workflows.
        </p>
      </div>

      <div className="space-y-8">
        {/* Mission Section */}
        <section className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_1px_0_var(--line-soft)]">
          <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            Project Goal
          </h2>
          <p className="mb-4 text-[var(--ink-soft)]">
            DeveloperUtilityTools was built as a focused utility hub for common
            engineering tasks like formatting, encoding, UUID work, and text
            processing. The objective is to provide clean UX, fast interaction,
            and reliable behavior across devices.
          </p>
          <p className="text-[var(--ink-soft)]">
            The app is intentionally designed for client-side execution. Inputs
            are processed in-browser, which reduces data exposure and keeps the
            tools responsive for day-to-day use.
          </p>
        </section>

        {/* Features Grid */}
        <section>
          <h2 className="mb-6 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            Core Principles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_0_var(--line-soft)]">
              <div className="mb-4 inline-flex rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                <Shield
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-2 font-[Space_Grotesk] text-xl font-bold text-[var(--ink)]">
                Privacy by Design
              </h3>
              <p className="text-[var(--ink-soft)]">
                Sensitive values like tokens, snippets, and payloads are handled
                locally in the browser. No backend processing is required for
                core tool functionality.
              </p>
            </article>

            <article className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_0_var(--line-soft)]">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                <Zap
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-2 font-[Space_Grotesk] text-xl font-bold text-[var(--ink)]">
                Performance Focus
              </h3>
              <p className="text-[var(--ink-soft)]">
                Tool interactions are optimized for fast feedback loops. The
                interface and processing logic are structured to keep routine
                tasks quick and predictable.
              </p>
            </article>

            <article className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_0_var(--line-soft)]">
              <div className="mb-4 inline-flex rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                <Code
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-2 font-[Space_Grotesk] text-xl font-bold text-[var(--ink)]">
                Maintainable Architecture
              </h3>
              <p className="text-[var(--ink-soft)]">
                A typed tool registry, reusable components, and validation
                scripts support scalable growth as new tools are added.
              </p>
            </article>

            <article className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_0_var(--line-soft)]">
              <div className="mb-4 inline-flex rounded-full bg-pink-100 p-3 dark:bg-pink-900/30">
                <Heart
                  className="h-6 w-6 text-pink-600 dark:text-pink-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-2 font-[Space_Grotesk] text-xl font-bold text-[var(--ink)]">
                Product Mindset
              </h3>
              <p className="text-[var(--ink-soft)]">
                This repository is treated like a real product: SEO metadata,
                accessibility patterns, testing, and deployment-readiness are
                part of the development workflow.
              </p>
            </article>
          </div>
        </section>

        {/* Technology Section */}
        <section className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_1px_0_var(--line-soft)]">
          <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            Stack and Engineering Choices
          </h2>
          <p className="mb-4 text-[var(--ink-soft)]">
            The platform uses modern frontend tooling to balance developer
            experience, performance, and maintainability:
          </p>
          <ul className="space-y-2 text-[var(--ink-soft)]">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Next.js 16</strong> because we like our pages fast and
                our SEO robust
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>React 19</strong> for all the smooth, reactive UI
                interactions
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>TypeScript</strong> because we prefer catching bugs at
                compile time
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Tailwind CSS 4</strong> for making things pretty without
                utility-class consistency across pages
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Lucide Icons</strong> for icons that don&apos;t look
                clean and consistent
              </span>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_1px_0_var(--line-soft)]">
          <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            Contact
          </h2>
          <p className="text-[var(--ink-soft)]">
            For feedback, collaboration requests, or bug reports, use the
            contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
