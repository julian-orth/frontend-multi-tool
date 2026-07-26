import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    `Privacy policy for ${SITE_NAME}. Learn how we protect your data and respect your privacy while you use our client-side developer tools.`,
  keywords: [
    "privacy policy",
    "data protection",
    "privacy",
    "client-side tools",
    "no tracking",
  ],
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      `Learn how ${SITE_NAME} protects your privacy with client-side-only tools and no data collection.`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      `Learn how ${SITE_NAME} protects your privacy with client-side-only tools and no data collection.`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <span className="inline-flex items-center rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)] shadow-[0_1px_0_var(--line)]">
          Legal
        </span>
        <h1 className="mb-6 mt-4 font-[Space_Grotesk] text-5xl font-bold tracking-tight text-[var(--ink)]">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-[var(--ink-soft)]">
          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              Your Privacy Matters
            </h2>
            <p className="mb-4 leading-relaxed">
              At {SITE_NAME}, we take your privacy seriously. This page
              explains how we handle (or rather, don&apos;t handle) your data.
              The short version:{" "}
              <strong>
                we don&apos;t collect, store, or transmit any of your data
              </strong>
              .
            </p>
          </section>

          <section className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_0_var(--line-soft)]">
            <h2 className="mb-4 font-[Space_Grotesk] text-xl font-semibold text-[var(--ink)]">
              TL;DR
            </h2>
            <p className="leading-relaxed">
              Your data stays on your device. We don&apos;t collect, store, or
              transmit anything. All tools run client-side in your browser. Your
              privacy is protected by design.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              How Our Tools Work
            </h2>
            <p className="mb-4 leading-relaxed">
              All tools on {SITE_NAME} run entirely in your browser. This
              means:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>
                <strong>No data leaves your device.</strong> All processing
                happens locally in your browser using JavaScript.
              </li>
              <li>
                <strong>No server-side processing.</strong> We don&apos;t have
                backend servers that receive or process your data.
              </li>
              <li>
                <strong>No data storage.</strong> We don&apos;t save, log, or
                store any content you input into our tools.
              </li>
              <li>
                <strong>No accounts required.</strong> You can use all tools
                without creating an account or providing any personal
                information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              What We Collect
            </h2>
            <p className="mb-4 leading-relaxed">
              We collect minimal information to provide you with the best
              experience:
            </p>

            <h3 className="mb-3 font-[Space_Grotesk] text-xl font-semibold text-[var(--ink)]">
              Local Storage
            </h3>
            <p className="mb-4 leading-relaxed">
              We use your browser&apos;s local storage to remember your
              preferences, such as:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>
                <strong>Theme preference</strong> (light or dark mode) - stored
                locally in your browser
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              This data never leaves your device and can be cleared at any time
              by clearing your browser&apos;s local storage.
            </p>

            <h3 className="mb-3 font-[Space_Grotesk] text-xl font-semibold text-[var(--ink)]">
              Analytics (Optional)
            </h3>
            <p className="mb-4 leading-relaxed">
              Currently, we do not use any analytics or tracking services. If
              this changes in the future, we will:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>Update this privacy policy</li>
              <li>Use privacy-focused analytics that respect your privacy</li>
              <li>Provide an opt-out mechanism if tracking is implemented</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              Third-Party Services
            </h2>
            <p className="mb-4 leading-relaxed">
              {SITE_NAME} is a static website. We don&apos;t integrate
              with third-party services that track you or collect your data. The
              website is hosted on a content delivery network (CDN), which may
              collect standard server logs (IP addresses, access times) for
              operational purposes, but this data is not accessible to us or
              used for tracking.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              Cookies
            </h2>
            <p className="mb-4 leading-relaxed">
              We do not use cookies. Your theme preference is stored in local
              storage, not in cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              Data Security
            </h2>
            <p className="mb-4 leading-relaxed">
              Since all processing happens in your browser and we don&apos;t
              collect or store your data, there&apos;s no data for us to secure
              on our end. However, we recommend:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>Use a modern, up-to-date browser for the best security</li>
              <li>
                Be cautious when using our tools on public or shared computers
              </li>
              <li>
                Clear your browser&apos;s local storage if using a shared device
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              Children&apos;s Privacy
            </h2>
            <p className="mb-4 leading-relaxed">
              Our services are not directed to children under the age of 13. We
              do not knowingly collect personal information from children. Since
              we don&apos;t collect any data at all, this is not a concern with
              our application.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              Open Source
            </h2>
            <p className="mb-4 leading-relaxed">
              {SITE_NAME} is open source. You can review our code on
              GitHub to verify that we handle your data as described in this
              policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              Changes to This Policy
            </h2>
            <p className="mb-4 leading-relaxed">
              We may update this privacy policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last
              updated&quot; date at the top.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              Contact
            </h2>
            <p className="mb-4 leading-relaxed">
              If you have any questions about this privacy policy, please feel
              free to open an issue on our GitHub repository.
            </p>
          </section>

          <section className="mt-12 border-t border-[var(--line)] pt-8">
            <p className="text-center text-sm text-[var(--ink-soft)]">
              Last updated: December 2, 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
