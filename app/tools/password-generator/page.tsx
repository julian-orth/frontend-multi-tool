import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";
import { PasswordGeneratorUI } from "./password-generator-ui";

export const metadata: Metadata = {
  title: "Password Generator - Secure Password & Passphrase Builder",
  description:
    "Generate cryptographically secure passwords and passphrases with entropy scoring, ambiguity filters, batch export, and privacy-first browser processing.",
  keywords: [
    "password generator",
    "secure password generator",
    "passphrase generator",
    "entropy calculator",
    "random password",
    "password strength",
    "bulk password generation",
  ],
  openGraph: {
    title: "Password Generator - Secure Password & Passphrase Builder",
    description:
      "Generate secure passwords and passphrases with advanced options, entropy insights, and copy/export tools. All processing happens in your browser.",
    url: `${SITE_CONFIG.domain}/tools/password-generator`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Password Generator - ${SITE_CONFIG.name}`,
    description:
      "Create strong passwords and passphrases with professional controls and entropy scoring.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/password-generator`,
  },
};

export default function PasswordGeneratorPage() {
  return (
    <>
      <ToolSchema
        name="Password Generator"
        description="Generate cryptographically secure passwords and passphrases with entropy scoring and advanced customization"
        url="/tools/password-generator"
        keywords={[
          "password generator",
          "passphrase generator",
          "entropy",
          "security",
          "random password",
        ]}
      />

      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Password Generator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Build strong passwords and memorable passphrases with fine-grained
              controls, live entropy insights, and bulk export.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <PasswordGeneratorUI />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <section className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
              <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                Why Entropy Matters
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Entropy estimates how many guesses an attacker needs on average.
                Higher entropy means exponentially higher resistance against
                brute-force attacks.
              </p>
            </section>

            <section className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20">
              <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                Password vs Passphrase
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Password mode is ideal for strict complexity policies.
                Passphrase mode improves memorability while staying strong with
                enough random words.
              </p>
            </section>

            <section className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                Privacy by Design
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                All generation uses browser cryptography APIs locally.
                No passwords are sent to a server, logged, or stored remotely.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
