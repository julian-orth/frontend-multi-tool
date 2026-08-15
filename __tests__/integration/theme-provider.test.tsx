import { renderToString } from "react-dom/server";
import { beforeEach, describe, expect, it } from "vitest";
import { ThemeProvider, useTheme } from "@/lib/contexts/theme-context";

function ThemeProbe() {
  const { theme } = useTheme();
  return <div>{theme}</div>;
}

describe("ThemeProvider hydration behavior", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "";
    document.cookie = "theme=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    localStorage.clear();
  });

  it("keeps a hydration-safe light theme during server render even when the browser root is dark", () => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";

    const html = renderToString(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>
    );

    expect(html).toContain("light");
    expect(html).not.toContain("dark");
  });
});
