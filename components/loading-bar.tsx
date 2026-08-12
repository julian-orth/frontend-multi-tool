"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { stripLocalePrefix } from "@/lib/i18n/locale";

// Staged targets rather than a continuous formula: each stage eases toward
// its target over its own CSS transition, so the bar shows real motion
// within ~150ms even when navigation resolves almost instantly, while
// still having headroom to keep crawling on slower loads.
const STAGES = [
  { target: 28, duration: 200 },
  { target: 56, duration: 350 },
  { target: 76, duration: 600 },
  { target: 90, duration: 1200 },
] as const;

const COMPLETE_DURATION = 200;
const FADE_DURATION = 200;

export function LoadingBar() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const isLoadingRef = useRef(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isToolPage = stripLocalePrefix(pathname).startsWith("/tools/");

  const clearTimers = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  useEffect(() => {
    // Handle navigation start by listening for link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (!link || !link.href || link.target || link.download) return;

      const url = new URL(link.href);
      const currentUrl = new URL(window.location.href);

      // Only internal navigations to a different path start the bar
      if (
        url.origin !== currentUrl.origin ||
        url.pathname === currentUrl.pathname
      ) {
        return;
      }

      clearTimers();
      isLoadingRef.current = true;
      setIsLoading(true);
      setVisible(true);
      setProgress(0);

      // Kick off on the next frame so the 0% state actually paints before
      // the first stage transition starts, otherwise the browser can
      // coalesce them and skip the initial animation entirely.
      requestAnimationFrame(() => {
        let elapsed = 0;
        for (const stage of STAGES) {
          const timer = setTimeout(() => setProgress(stage.target), elapsed);
          timeoutsRef.current.push(timer);
          elapsed += stage.duration;
        }
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  // Complete loading when pathname changes — this is genuinely syncing to
  // an external event (the Next.js router finishing navigation), not a
  // derived value. Gating on isLoadingRef (kept in sync with isLoading)
  // keeps this effect pathname-only, so starting a new navigation doesn't
  // itself re-trigger completion and cut the animation short.
  useEffect(() => {
    if (!isLoadingRef.current) return;

    clearTimers();
    setProgress(100);

    const fadeTimer = setTimeout(() => setVisible(false), COMPLETE_DURATION);
    const resetTimer = setTimeout(() => {
      isLoadingRef.current = false;
      setIsLoading(false);
      setProgress(0);
    }, COMPLETE_DURATION + FADE_DURATION);

    timeoutsRef.current.push(fadeTimer, resetTimer);
  }, [pathname]);

  // Cleanup pending timers on unmount
  useEffect(() => clearTimers, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed top-[73px] right-0 z-50 h-[3px] overflow-hidden bg-transparent transition-opacity ease-out ${
        visible ? "opacity-100 duration-150" : "opacity-0 duration-200"
      } ${isToolPage ? "left-0 md:left-72" : "left-0"}`}
    >
      <div
        className="h-full bg-blue-600 shadow-[0_0_6px] shadow-blue-500/40 transition-[width] duration-300 ease-out dark:bg-blue-500 dark:shadow-blue-400/30"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
