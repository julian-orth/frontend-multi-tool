"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import SidebarNav from "@/components/SidebarNav";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isToolPage = pathname.startsWith("/tools/");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--card)] focus:px-4 focus:py-2 focus:text-[var(--ink)] focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-[var(--focus)]"
      >
        Skip to content
      </a>
      <Header />
      <div className="flex w-full flex-1">
        <SidebarNav />
        <main
          id="main-content"
          className={`min-w-0 flex-1 pt-20 transition-all ${isToolPage ? "md:ml-72" : ""}`}
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
