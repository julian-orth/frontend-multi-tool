"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { TOOLS } from "@/lib/i18n/en";

export function Footer() {
  const pathname = usePathname();
  const isToolPage = pathname.startsWith("/tools/");
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative border-t border-[var(--line)] bg-[var(--paper)] py-8 ${isToolPage ? "md:ml-72" : ""}`}
    >
      <div
        className={`px-4 sm:px-6 ${isToolPage ? "max-w-full" : "mx-auto max-w-7xl"}`}
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-md">
            <div className="mb-3">
              <Image
                src="/logo.svg"
                alt="Frontend Multitool"
                width={250}
                height={38}
                className="h-9 w-auto dark:hidden"
              />
              <Image
                src="/logo-darkmode.svg"
                alt="Frontend Multitool"
                width={250}
                height={38}
                className="hidden h-9 w-auto dark:block"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              Your go-to collection of powerful, privacy-focused developer
              utilities. All tools run client-side in your browser—no data ever
              leaves your device.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold tracking-wider text-gray-900 uppercase dark:text-white">
              Popular Tools
            </h4>
            <ul className="space-y-2 text-sm">
              {TOOLS.slice(0, 5).map((tool) => {
                const isActive = pathname === tool.href;
                return (
                  <li key={tool.id}>
                    <Link
                      href={tool.href}
                      className={`transition-colors ${
                        isActive
                          ? "font-semibold text-[var(--ink)]"
                          : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {tool.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--line)] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              © {currentYear} Frontend Multitool. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className={`transition-colors ${
                  pathname === "/privacy"
                    ? "font-semibold text-[var(--ink)]"
                    : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                }`}
                aria-current={pathname === "/privacy" ? "page" : undefined}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className={`transition-colors ${
                  pathname === "/terms"
                    ? "font-semibold text-[var(--ink)]"
                    : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                }`}
                aria-current={pathname === "/terms" ? "page" : undefined}
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
