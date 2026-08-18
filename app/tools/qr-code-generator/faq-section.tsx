import type { QrCodeGeneratorPageContent } from "./content";

interface FAQSectionProps {
  content: QrCodeGeneratorPageContent;
}

export function FAQSection({ content }: FAQSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-50 sm:mb-6 sm:text-3xl">
        {content.faqHeading}
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {content.faq.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6"
          >
            <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
              {item.question}
            </summary>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
