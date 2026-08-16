"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiteralLocalizer } from "@/components/literal-localizer";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[var(--card)] focus:px-4 focus:py-2 focus:text-[var(--ink)] focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-[var(--focus)]"
      >
        Skip to content
      </a>
      <Header />
      <div className="flex w-full flex-1">
        <main id="main-content" className="ml-16 min-w-0 flex-1">
          {children}
        </main>
      </div>
      <LiteralLocalizer />
      <Footer />
    </>
  );
}
