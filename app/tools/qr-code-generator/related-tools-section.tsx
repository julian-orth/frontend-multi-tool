import type { Locale } from "@/lib/i18n/locale";
import { localizeHref } from "@/lib/i18n/locale";
import type { QrCodeGeneratorPageContent } from "./content";

interface RelatedToolsSectionProps {
  content: QrCodeGeneratorPageContent;
  locale: Locale;
}

export function RelatedToolsSection({
  content,
  locale,
}: RelatedToolsSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        {content.relatedToolsHeading}
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {content.relatedToolsIntro}
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <a
          href={localizeHref("/tools/base64", locale)}
          className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
        >
          <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
            {content.relatedTools.base64.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {content.relatedTools.base64.description}
          </p>
        </a>
        <a
          href={localizeHref("/tools/color-picker", locale)}
          className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-pink-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-pink-700"
        >
          <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-pink-600 dark:text-gray-50 dark:group-hover:text-pink-400">
            {content.relatedTools.colorPicker.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {content.relatedTools.colorPicker.description}
          </p>
        </a>
      </div>
    </section>
  );
}
