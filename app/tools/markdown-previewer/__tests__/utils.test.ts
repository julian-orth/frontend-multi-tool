import { describe, it, expect } from "vitest";
import { parseMarkdown } from "../utils";

describe("Markdown Previewer Utils", () => {
  describe("parseMarkdown", () => {
    it("renders basic formatting", () => {
      const html = parseMarkdown("# Title\n\n**bold** and *italic*");
      expect(html).toContain("<h1>Title</h1>");
      expect(html).toContain("<strong>bold</strong>");
      expect(html).toContain("<em>italic</em>");
    });

    it("renders a normal link and image", () => {
      const html = parseMarkdown(
        "[docs](https://example.com)\n\n![alt](https://example.com/x.png)"
      );
      expect(html).toContain('<a href="https://example.com">docs</a>');
      expect(html).toContain(
        '<img src="https://example.com/x.png" alt="alt" />'
      );
    });

    it("does not let a link URL break out of the href attribute", () => {
      const html = parseMarkdown('[x]("onmouseover="alert(1))');
      expect(html).not.toContain('" onmouseover="');
    });

    it("does not let an image URL break out of the src attribute", () => {
      const html = parseMarkdown('![x](x" onerror="alert(1))');
      expect(html).not.toContain('" onerror="');
    });

    it("drops javascript: and data: URL schemes from href/src", () => {
      const jsLink = parseMarkdown("[click](javascript:alert(1))");
      expect(jsLink).not.toMatch(/href="javascript:/i);

      const dataImg = parseMarkdown(
        "![x](data:text/html,<script>alert(1)</script>)"
      );
      expect(dataImg).not.toMatch(/src="data:/i);
      expect(dataImg).not.toContain("<script>");
    });

    it("escapes raw HTML typed into the document", () => {
      const html = parseMarkdown('<img src=x onerror="alert(1)">');
      expect(html).not.toMatch(/<img[^>]*\son\w+=/i);
      expect(html).toContain("&lt;img");
    });

    it("still allows relative and mailto links", () => {
      const html = parseMarkdown(
        "[home](/about) and [me](mailto:test@example.com)"
      );
      expect(html).toContain('<a href="/about">home</a>');
      expect(html).toContain('<a href="mailto:test@example.com">me</a>');
    });
  });
});
