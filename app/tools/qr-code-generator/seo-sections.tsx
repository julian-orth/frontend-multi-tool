import type { QrCodeGeneratorPageContent } from "./content";

interface SectionProps {
  content: QrCodeGeneratorPageContent;
}

export function WhatIsQRCodeSection({ content }: SectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        {content.whatIsHeading}
      </h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>{content.whatIsParagraph}</p>
      </div>
    </section>
  );
}

export function QuickFactsSection({ content }: SectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        {content.quickFactsHeading}
      </h2>
      <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
          {content.quickFacts.map((parts, index) => (
            <li key={index}>
              {parts.map((part, partIndex) =>
                part.bold ? (
                  <strong key={partIndex}>{part.text}</strong>
                ) : (
                  <span key={partIndex}>{part.text}</span>
                ),
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
