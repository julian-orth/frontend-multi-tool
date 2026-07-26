import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    `Terms and conditions for using ${SITE_NAME}. Understand your rights and responsibilities when using our free, client-side developer tools.`,
  keywords: [
    "terms and conditions",
    "terms of service",
    "terms of use",
    "legal",
    "developer tools",
  ],
  openGraph: {
    title: `Terms & Conditions | ${SITE_NAME}`,
    description:
      `Terms and conditions for using ${SITE_NAME}'s free, client-side developer utilities.`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Terms & Conditions | ${SITE_NAME}`,
    description:
      `Terms and conditions for using ${SITE_NAME}'s free, client-side developer utilities.`,
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <span className="inline-flex items-center rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)] shadow-[0_1px_0_var(--line)]">
          Legal
        </span>
        <h1 className="mb-6 mt-4 font-[Space_Grotesk] text-5xl font-bold tracking-tight text-[var(--ink)]">
          Terms &amp; Conditions
        </h1>

        <div className="space-y-8 text-[var(--ink-soft)]">
          <section>
            <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
              Welcome to {SITE_NAME}
            </h2>
            <p className="mb-4 leading-relaxed">
              By accessing and using {SITE_NAME}, you agree to be bound
              by these Terms and Conditions. If you do not agree with any part
              of these terms, please do not use our services.
            </p>
          </section>

          <section className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_0_var(--line-soft)]">
            <h2 className="mb-4 font-[Space_Grotesk] text-xl font-semibold text-[var(--ink)]">
              TL;DR
            </h2>
            <p className="leading-relaxed">
              Use our tools freely and responsibly. We provide them &quot;as
              is&quot; without warranties. Don&apos;t abuse the service.
              We&apos;re not liable for issues arising from your use. These
              terms may change, so check back occasionally.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4 leading-relaxed">
              These Terms and Conditions constitute a legally binding agreement
              between you and {SITE_NAME}. By accessing or using our
              website and tools, you acknowledge that you have read, understood,
              and agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              2. Description of Service
            </h2>
            <p className="mb-4 leading-relaxed">
              {SITE_NAME} provides a collection of free, client-side
              developer utilities and tools. All tools run entirely in your
              browser without server-side processing. We offer these tools for:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>Text and data manipulation</li>
              <li>Code formatting and validation</li>
              <li>Development utilities</li>
              <li>Color and design tools</li>
              <li>Encoding and decoding operations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              3. Use License
            </h2>
            <p className="mb-4 leading-relaxed">
              We grant you a personal, non-exclusive, non-transferable, limited
              license to access and use our tools for lawful purposes. You may:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>Use our tools for personal or commercial projects</li>
              <li>Process any data you own or have permission to process</li>
              <li>Share links to our tools with others</li>
            </ul>
            <p className="mb-4 leading-relaxed">You may not:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>
                Attempt to reverse engineer, decompile, or disassemble our tools
                (except as permitted by open source license)
              </li>
              <li>
                Use automated systems to access our site in ways that send more
                requests than a human could reasonably produce
              </li>
              <li>
                Attempt to interfere with the proper functioning of our services
              </li>
              <li>Remove or modify any copyright or proprietary notices</li>
              <li>Use our tools for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              4. Open Source
            </h2>
            <p className="mb-4 leading-relaxed">
              {SITE_NAME} is an open-source project. The source code is
              available on GitHub and licensed under the MIT License. You are
              free to:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>View, fork, and modify the source code</li>
              <li>Contribute improvements via pull requests</li>
              <li>
                Use the code in your own projects (subject to MIT License)
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              Please refer to the LICENSE file in our GitHub repository for
              complete licensing details.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              5. Disclaimer of Warranties
            </h2>
            <p className="mb-4 leading-relaxed">
              {SITE_NAME} is provided &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; without warranties of any kind, either express or
              implied, including but not limited to:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>
                Warranties of merchantability or fitness for a particular
                purpose
              </li>
              <li>Accuracy, completeness, or reliability of our tools</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Security of data processed through our tools</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              We do not warrant that our tools will meet your requirements or
              that any errors will be corrected. Use our services at your own
              risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              6. Limitation of Liability
            </h2>
            <p className="mb-4 leading-relaxed">
              To the maximum extent permitted by law, {SITE_NAME} and its
              contributors shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>Loss of profits, data, or use</li>
              <li>Business interruption</li>
              <li>Loss of savings or revenue</li>
              <li>
                Any other commercial damages or losses arising from your use or
                inability to use our services
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              Some jurisdictions do not allow the exclusion or limitation of
              liability for consequential or incidental damages. In such
              jurisdictions, our liability is limited to the greatest extent
              permitted by law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              7. User Responsibilities
            </h2>
            <p className="mb-4 leading-relaxed">You are responsible for:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4">
              <li>
                Ensuring you have the right to process any data you input into
                our tools
              </li>
              <li>
                Verifying the output of our tools before using it in production
                environments
              </li>
              <li>Maintaining the security of your own devices and data</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>
                Understanding that client-side tools may store data in your
                browser&apos;s local storage
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              8. Privacy
            </h2>
            <p className="mb-4 leading-relaxed">
              All tools run entirely in your browser. We do not collect, store,
              or transmit your data to our servers. For complete details on how
              we handle data, please review our{" "}
              <a
                href="/privacy"
                className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              9. Intellectual Property
            </h2>
            <p className="mb-4 leading-relaxed">
              The {SITE_NAME} website, including its design, layout,
              graphics, and original content, is protected by copyright and
              other intellectual property laws. While our source code is
              open-source (MIT License), certain trademarks, logos, and branding
              elements may be subject to separate protection.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              10. Third-Party Links
            </h2>
            <p className="mb-4 leading-relaxed">
              Our website may contain links to third-party websites or services
              that are not owned or controlled by {SITE_NAME}. We have no
              control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              11. Service Modifications
            </h2>
            <p className="mb-4 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part
              of our service at any time without notice. We may also add new
              tools, remove existing tools, or change functionality as we see
              fit. We will not be liable to you or any third party for any
              modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              12. Changes to Terms
            </h2>
            <p className="mb-4 leading-relaxed">
              We reserve the right to update or modify these Terms and
              Conditions at any time without prior notice. Changes will be
              effective immediately upon posting to this page. Your continued
              use of {SITE_NAME} after any changes constitutes acceptance
              of the new terms. We encourage you to review these terms
              periodically.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              13. Governing Law
            </h2>
            <p className="mb-4 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in
              accordance with applicable laws, without regard to conflict of law
              principles. Any disputes arising from these terms or your use of
              our service shall be resolved through good faith negotiation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              14. Severability
            </h2>
            <p className="mb-4 leading-relaxed">
              If any provision of these Terms and Conditions is found to be
              unenforceable or invalid, that provision will be limited or
              eliminated to the minimum extent necessary so that these terms
              will otherwise remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              15. Contact Information
            </h2>
            <p className="mb-4 leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              feel free to open an issue on our GitHub repository or contact us
              through the channels listed on our{" "}
              <a
                href="/about"
                className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                About
              </a>{" "}
              page.
            </p>
          </section>

          <section className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Last updated: December 2, 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
