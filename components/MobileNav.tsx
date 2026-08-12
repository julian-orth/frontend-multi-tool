"use client";

import { useRef, useEffect } from "react";
import { Menu, PocketKnife, X } from "lucide-react";
import { useMobileNav } from "@/lib/contexts/mobile-nav-context";
import { TOOLS } from "@/lib/tools/registry";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  resolveToolIcon,
  GROUP_COLOR_CLASSES,
} from "@/lib/tools/icon-resolver";
import {
  groupToolsBySimpleCategory,
  SIMPLE_GROUPS,
  type SimpleGroupKey,
} from "@/lib/tools/simple-groups";
import { useLocale } from "@/lib/contexts/locale-context";
import { localizeHref, stripLocalePrefix } from "@/lib/i18n/locale";
import { getLocalizedTool } from "@/lib/i18n/tools";

export function MobileNavButton() {
  const { open } = useMobileNav();
  const { t } = useLocale();

  return (
    <button
      className="rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none md:hidden dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-950"
      aria-label={t("mobile.openMenu")}
      onClick={open}
    >
      <Menu className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

export default function MobileNav() {
  const { isOpen, close } = useMobileNav();
  const dialogRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const basePathname = stripLocalePrefix(pathname);
  const { locale, t } = useLocale();

  // Trap focus when open, and restore it to whatever triggered the menu
  // when it closes.
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = () =>
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) ?? [];

    getFocusable()[0]?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = Array.from(getFocusable());
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      previouslyFocused?.focus();
    };
  }, [isOpen, close]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const grouped = groupToolsBySimpleCategory(TOOLS);

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={dialogRef}
        className="fixed inset-0 z-[100] flex md:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-black/40 transition-opacity dark:bg-black/60"
          aria-hidden="true"
          onClick={close}
        />
        <aside className="animate-slide-in-left relative flex h-full w-72 max-w-full flex-col border-r border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
            <Link
              href={localizeHref("/", locale)}
              className="group flex items-center gap-2 transition-opacity hover:opacity-80"
              onClick={close}
              aria-label={t("nav.home")}
            >
              <span className="rounded-full bg-red-100 p-2 dark:bg-red-900/30">
                <PocketKnife
                  className="h-5 w-5 text-red-700 dark:text-red-400"
                  aria-hidden="true"
                />
              </span>
              <span className="text-base font-bold tracking-tight text-gray-900 dark:text-gray-50">
                {t("site.name")}
              </span>
            </Link>
            <button
              className="rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-950"
              aria-label={t("mobile.closeMenu")}
              onClick={close}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="space-y-6">
              {(Object.keys(SIMPLE_GROUPS) as SimpleGroupKey[]).map(
                (groupKey) => {
                  const tools = grouped[groupKey];
                  if (tools.length === 0) return null;

                  return (
                    <div key={groupKey}>
                      <h2 className="mb-2 px-3 text-xs font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                        {t(`categories.${groupKey}.label`)}
                      </h2>
                      <ul className="space-y-1">
                        {tools.map((tool) => {
                          const localizedTool = getLocalizedTool(tool, locale);
                          const Icon = resolveToolIcon(tool.groupIcon);
                          const badgeColor =
                            GROUP_COLOR_CLASSES[tool.groupColor] ||
                            GROUP_COLOR_CLASSES.blue;
                          const localizedHref = localizeHref(tool.href, locale);
                          const isActive = basePathname === tool.href;
                          return (
                            <li key={tool.id}>
                              <Link
                                href={localizedHref}
                                onClick={close}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-950 ${
                                  isActive
                                    ? "bg-blue-50 font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                    : "text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                                }`}
                                aria-label={t("mobile.openTool", {
                                  name: localizedTool.name,
                                })}
                                aria-current={isActive ? "page" : undefined}
                              >
                                <span
                                  className={`rounded-full p-2 ${badgeColor}`}
                                >
                                  <Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </span>
                                <span>{localizedTool.name}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </aside>
      </div>
      <style jsx global>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
}
