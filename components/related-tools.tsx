import Link from "next/link";
import { getRelatedTools } from "@/lib/tools/registry";
import { getLocalizedTool } from "@/lib/i18n/tools";
import { localizeHref, type Locale } from "@/lib/i18n/locale";
import { getToolPageChrome } from "@/lib/i18n/tool-page-chrome";

const HOVER_BORDER_CLASSES = [
  "hover:border-blue-300 dark:hover:border-blue-700",
  "hover:border-red-300 dark:hover:border-red-700",
  "hover:border-purple-300 dark:hover:border-purple-700",
] as const;
const HOVER_TEXT_CLASSES = [
  "group-hover:text-blue-600 dark:group-hover:text-blue-400",
  "group-hover:text-red-600 dark:group-hover:text-red-400",
  "group-hover:text-purple-600 dark:group-hover:text-purple-400",
] as const;

interface RelatedToolsProps {
  toolId: string;
  locale: Locale;
  blurbs: Record<string, string>;
}

/**
 * Renders the "Related Tools" section every tool page ends with. Tool ids
 * come from the tool's own config.ts (single source of truth, already
 * validated by scripts/validate-tools.js), not re-hardcoded per page.
 */
export function RelatedTools({ toolId, locale, blurbs }: RelatedToolsProps) {
  const related = getRelatedTools(toolId);
  if (related.length === 0) return null;

  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        {getToolPageChrome(locale).relatedTools}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {related.map((tool, index) => {
          const localized = getLocalizedTool(tool, locale);
          return (
            <Link
              key={tool.id}
              href={localizeHref(tool.href, locale)}
              className={`group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900 ${HOVER_BORDER_CLASSES[index % 3]}`}
            >
              <h3
                className={`mb-2 text-lg font-semibold text-gray-900 dark:text-gray-50 ${HOVER_TEXT_CLASSES[index % 3]}`}
              >
                {localized.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {blurbs[tool.id] ?? localized.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
