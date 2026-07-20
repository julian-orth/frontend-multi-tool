"use client";

import { TOOLS, SITE_NAME } from "@/lib/i18n/en";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, X } from "lucide-react";
import {
  GROUP_COLOR_CLASSES,
  resolveToolIcon,
} from "@/lib/tools/icon-resolver";

export function SidebarNav() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  // Only show sidebar on tool pages (starting with /tools/)
  const isToolPage = pathname.startsWith("/tools/");

  // Ctrl+K keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl+K (or Cmd+K on Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = TOOLS.filter(
    (tool) =>
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description?.toLowerCase().includes(query.toLowerCase())
  );

  // Group tools by group
  const grouped = filtered.reduce(
    (acc, tool) => {
      acc[tool.group] = acc[tool.group] || [];
      acc[tool.group].push(tool);
      return acc;
    },
    {} as Record<string, typeof TOOLS>
  );

  // Don't render sidebar if not on a tool page
  if (!isToolPage) {
    return null;
  }

  return (
    <nav
      className="fixed top-0 left-0 z-40 hidden h-full w-72 flex-shrink-0 border-r border-gray-200 bg-white md:block dark:border-gray-800 dark:bg-gray-950"
      aria-label="Main navigation"
    >
      <div className="flex h-full flex-col">
        <div className="relative flex items-center border-b border-gray-200/50 px-6 py-4 dark:border-gray-800/50">
          <label htmlFor="sidebar-search" className="sr-only">
            Search tools
          </label>
          <Search
            className="pointer-events-none absolute left-9 h-4 w-4 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="sidebar-search"
            ref={inputRef}
            type="search"
            placeholder={`Search ${TOOLS.length} tools…`}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pr-10 pl-10 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-400 [&::-webkit-search-cancel-button]:hidden"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="absolute right-8 h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              aria-label="Clear search"
              title="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-8 flex items-center gap-0.5 rounded border border-gray-300 bg-white px-1.5 py-0.5 font-mono text-xs font-semibold text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
              <span className="text-base leading-none">⌘</span>
              <span className="leading-none">K</span>
            </kbd>
          )}
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 pb-4">
          {Object.keys(grouped).length === 0 && (
            <div className="px-3 py-2 text-gray-400 dark:text-gray-600">
              No tools found.
            </div>
          )}
          <div className="space-y-6">
            {Object.entries(grouped).map(([group, tools]) => (
              <div key={group}>
                <h2 className="mb-2 px-3 text-xs font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                  {group}
                </h2>
                <ul className="space-y-1">
                  {tools.map((tool) => {
                    const Icon = resolveToolIcon(tool.groupIcon);
                    const badgeColor =
                      GROUP_COLOR_CLASSES[tool.groupColor] ||
                      GROUP_COLOR_CLASSES.blue;
                    const isActive = pathname === tool.href;
                    return (
                      <li key={tool.id}>
                        <Link
                          href={tool.href}
                          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-950 ${
                            isActive
                              ? "bg-blue-50 font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                              : "text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                          }`}
                          aria-label={`Open ${tool.name} tool`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <span className={`rounded-full p-2 ${badgeColor}`}>
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </span>
                          <span>{tool.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SidebarNav;
