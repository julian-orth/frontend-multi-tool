"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  isTransitioning: false,
});

function applyTheme(nextTheme: Theme) {
  document.documentElement.classList.toggle("dark", nextTheme === "dark");
  document.documentElement.style.colorScheme = nextTheme;
}

function withThemeSwitchLock(callback: () => void) {
  const root = document.documentElement;
  root.classList.add("theme-switching");

  callback();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove("theme-switching");
    });
  });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionLockRef = useRef(false);

  // The initial theme is already resolved before hydration by the
  // theme-bootstrap script (see app/layout.tsx) and picked up above via the
  // lazy useState initializer. This effect only needs to keep listening for
  // OS-level scheme changes, and only while the user hasn't set an explicit
  // preference of their own.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "light" || storedTheme === "dark") return;

      const nextTheme: Theme = event.matches ? "dark" : "light";
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    if (transitionLockRef.current) return;

    transitionLockRef.current = true;
    setIsTransitioning(true);

    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    const commit = () => {
      localStorage.setItem("theme", nextTheme);
      applyTheme(nextTheme);
    };

    setTheme(nextTheme);

    // Keep the switch atomic: disable CSS transitions briefly while applying
    // the root theme class, then animate via View Transitions when available.
    if (document.startViewTransition) {
      try {
        const transition = document.startViewTransition(() => {
          withThemeSwitchLock(commit);
        });

        void transition.finished.finally(() => {
          transitionLockRef.current = false;
          setIsTransitioning(false);
        });
      } catch {
        withThemeSwitchLock(commit);
        transitionLockRef.current = false;
        setIsTransitioning(false);
      }
      return;
    }

    withThemeSwitchLock(commit);
    transitionLockRef.current = false;
    setIsTransitioning(false);
  }, [theme]);

  const value = useMemo(
    () => ({ theme, toggleTheme, isTransitioning }),
    [isTransitioning, theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
