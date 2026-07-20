"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

function applyTheme(nextTheme: Theme) {
  document.documentElement.classList.toggle("dark", nextTheme === "dark");
  document.documentElement.style.colorScheme = nextTheme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      applyTheme(storedTheme);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const initialTheme = mediaQuery.matches ? "dark" : "light";
    setTheme(initialTheme);
    applyTheme(initialTheme);

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      const nextTheme: Theme = event.matches ? "dark" : "light";
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
