import { describe, expect, it } from "vitest";
import { decodeHtml, localizeRoot } from "@/components/literal-localizer";

describe("literal localizer HTML decoding", () => {
  it("decodes HTML entities without relying on document", () => {
    expect(decodeHtml("It&apos;s commonly used")).toBe("It's commonly used");
    expect(decodeHtml("&amp;lt;")).toBe("&lt;");
    expect(decodeHtml("&lt;tag&gt;")).toBe("<tag>");
  });

  it("restores source text before applying the next locale", () => {
    const root = document.createElement("div");
    root.textContent = "Werkzeug suchen";

    localizeRoot(root, new Map([["Werkzeug suchen", "Search tools"]]));
    expect(root.textContent).toBe("Search tools");

    localizeRoot(root, new Map());
    expect(root.textContent).toBe("Werkzeug suchen");
  });
});
