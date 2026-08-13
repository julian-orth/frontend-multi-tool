import { describe, expect, it } from "vitest";
import { decodeHtml } from "@/components/literal-localizer";

describe("literal localizer HTML decoding", () => {
  it("decodes HTML entities without relying on document", () => {
    expect(decodeHtml("It&apos;s commonly used")).toBe("It's commonly used");
    expect(decodeHtml("&amp;lt;")).toBe("&lt;");
    expect(decodeHtml("&lt;tag&gt;")).toBe("<tag>");
  });
});
