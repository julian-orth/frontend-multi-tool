"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export function LoadingBar() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const isToolPage = pathname.startsWith("/tools/");

  useEffect(() => {
    // Handle navigation start by listening for link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href && !link.target && !link.download) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        // Check if it's an internal navigation to a different page
        if (
          url.origin === currentUrl.origin &&
          url.pathname !== currentUrl.pathname
        ) {
          // Cancel any existing animation
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }

          setIsLoading(true);
          setProgress(0);
          startTimeRef.current = Date.now();

          // Smooth animation using requestAnimationFrame
          const animate = () => {
            const elapsed = Date.now() - startTimeRef.current;

            // Exponential easing: fast start, then slows down
            // Approaches 90% asymptotically
            const newProgress = 90 * (1 - Math.exp(-elapsed / 2000));

            setProgress(Math.min(newProgress, 90));

            if (newProgress < 90) {
              animationFrameRef.current = requestAnimationFrame(animate);
            }
          };

          animationFrameRef.current = requestAnimationFrame(animate);
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  // Complete loading when pathname changes — this is genuinely syncing to
  // an external event (the Next.js router finishing navigation), not a
  // derived value.
  useEffect(() => {
    if (isLoading) {
      // Cancel animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      // Jump to 100%
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProgress(100);

      // Hide after animation completes
      const timer = setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [pathname, isLoading]);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed top-[73px] right-0 z-50 h-1 overflow-hidden bg-transparent transition-all ${isToolPage ? "left-0 md:left-72" : "left-0"}`}
    >
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 shadow-lg shadow-blue-500/50 transition-all duration-150 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
