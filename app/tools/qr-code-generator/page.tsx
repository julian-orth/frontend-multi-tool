import Breadcrumb from "@/components/breadcrumb";
import type { Metadata } from "next";
import { QRCodeGeneratorUI } from "./qr-code-generator-ui";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";
import { WhatIsQRCodeSection, QuickFactsSection } from "./seo-sections";
import { FAQSection } from "./faq-section";
import { RelatedToolsSection } from "./related-tools-section";

export const metadata: Metadata = {
  title: "QR Code Generator - Free Custom QR Codes with Logo & Colors",
  description:
    "Generate custom QR codes for free with colors, logos, and error correction. Create QR codes for URLs, WiFi, vCards, email, SMS, and text. Download as PNG or SVG instantly.",
  keywords: [
    "qr code generator",
    "free qr code",
    "custom qr code",
    "qr code maker",
    "qr generator",
    "url qr code",
    "wifi qr code",
    "vcard qr code",
    "qr code with logo",
    "colored qr code",
    "qr code download",
    "svg qr code",
    "png qr code",
    "qr code online",
    "business card qr",
  ],
  openGraph: {
    title: "QR Code Generator — Create Custom QR Codes with Logo & Colors",
    description:
      "Free QR code generator for URLs, WiFi, vCards, email, and SMS. Customize with colors and logos, adjust error correction, download as PNG/SVG.",
    url: `${SITE_CONFIG.domain}/tools/qr-code-generator`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `QR Code Generator — ${SITE_CONFIG.name}`,
    description:
      "Generate custom QR codes with logos and colors. Support for URLs, WiFi, vCards. Download PNG/SVG. Free tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/qr-code-generator`,
  },
};

export default function QRCodeGeneratorPage() {
  return (
    <>
      <ToolSchema
        name="QR Code Generator"
        description="Generate custom QR codes with colors, logos, and error correction for URLs, WiFi, vCards, email, and SMS"
        url="/tools/qr-code-generator"
        keywords={[
          "qr code generator",
          "custom qr code",
          "qr code maker",
          "wifi qr code",
          "vcard qr code",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              QR Code Generator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Generate custom QR codes for URLs, text, contact cards (vCard),
              WiFi credentials, email, and SMS. Customize colors, add logos,
              adjust error correction, and download as PNG or SVG. All
              processing happens in your browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <QRCodeGeneratorUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            <WhatIsQRCodeSection />
            <QuickFactsSection />
            <FAQSection />
            <RelatedToolsSection />
          </div>
        </div>
      </div>
    </>
  );
}
