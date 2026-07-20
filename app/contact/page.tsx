import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for feedback, feature ideas, collaborations, or project inquiries.",
  keywords: [
    "contact",
    "feedback",
    "collaboration",
    "project inquiry",
    "developer portfolio",
  ],
  openGraph: {
    title: `Contact | ${SITE_CONFIG.name}`,
    description: "Reach out for feedback, collaborations, or project questions.",
    type: "website",
    url: `${SITE_CONFIG.domain}/contact`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Contact | ${SITE_CONFIG.name}`,
    description: "Reach out for feedback, collaborations, or project questions.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 pb-16 sm:px-6">
      <div className="mb-8">
        <span className="inline-flex items-center rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)] shadow-[0_1px_0_var(--line)]">
          Contact
        </span>
        <h1 className="mb-3 mt-4 font-[Space_Grotesk] text-5xl font-bold tracking-tight text-[var(--ink)]">
          Contact
        </h1>
        <p className="text-lg text-[var(--ink-soft)]">
          Questions, feedback, or collaboration ideas are welcome.
        </p>
      </div>

      <div className="space-y-8">
        <section className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_0_var(--line-soft)]">
          <h2 className="mb-3 font-[Space_Grotesk] text-xl font-semibold text-[var(--ink)]">
            Before You Send
          </h2>
          <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
            Include context such as browser, sample input, expected behavior, and
            tool name when reporting issues. For direct contact you can also use
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mx-1 font-medium text-[var(--ink)] underline underline-offset-2"
            >
              {SITE_CONFIG.email}
            </a>
            .
          </p>
        </section>

        <section>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
