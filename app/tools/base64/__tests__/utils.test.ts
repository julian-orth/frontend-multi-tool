import { describe, it, expect } from "vitest";
import {
  encodeToBase64,
  decodeFromBase64,
  encodeLineByLine,
  decodeLineByLine,
  splitIntoChunks,
  isValidBase64,
} from "../base64-utils";

describe("Base64 Encoder/Decoder Utils", () => {
  describe("encodeToBase64", () => {
    it("should encode simple ASCII text", () => {
      const result = encodeToBase64("Hello World");
      expect(result.isValid).toBe(true);
      expect(result.output).toBe("SGVsbG8gV29ybGQ=");
      expect(result.error).toBeUndefined();
    });

    it("should encode empty string", () => {
      const result = encodeToBase64("");
      expect(result.isValid).toBe(true);
      expect(result.output).toBe("");
    });

    it("should encode special characters", () => {
      const result = encodeToBase64("!@#$%^&*()");
      expect(result.isValid).toBe(true);
      expect(result.output).toBe("IUAjJCVeJiooKQ==");
    });

    it("should encode Unicode characters", () => {
      const result = encodeToBase64("🚀 Unicode 中文");
      expect(result.isValid).toBe(true);
      expect(result.output).toBeDefined();
      // Verify it can be decoded back
      const decoded = decodeFromBase64(result.output);
      expect(decoded.output).toBe("🚀 Unicode 中文");
    });

    it("should encode German umlauts", () => {
      const result = encodeToBase64("Über Änderungen");
      expect(result.isValid).toBe(true);
      const decoded = decodeFromBase64(result.output);
      expect(decoded.output).toBe("Über Änderungen");
    });

    it("should encode multi-line text", () => {
      const result = encodeToBase64("Line 1\nLine 2\nLine 3");
      expect(result.isValid).toBe(true);
      const decoded = decodeFromBase64(result.output);
      expect(decoded.output).toBe("Line 1\nLine 2\nLine 3");
    });

    it("should encode URL-safe format", () => {
      const result = encodeToBase64("Hello+World/Test=", true);
      expect(result.isValid).toBe(true);
      // URL-safe should not contain +, /, or =
      expect(result.output).not.toContain("+");
      expect(result.output).not.toContain("/");
      expect(result.output).not.toContain("=");
    });

    it("should handle very long text", () => {
      const longText = "A".repeat(10000);
      const result = encodeToBase64(longText);
      expect(result.isValid).toBe(true);
      expect(result.output.length).toBeGreaterThan(0);
    });
  });

  describe("decodeFromBase64", () => {
    it("should decode simple Base64 string", () => {
      const result = decodeFromBase64("SGVsbG8gV29ybGQ=");
      expect(result.isValid).toBe(true);
      expect(result.output).toBe("Hello World");
      expect(result.error).toBeUndefined();
    });

    it("should decode empty string", () => {
      const result = decodeFromBase64("");
      expect(result.isValid).toBe(true);
      expect(result.output).toBe("");
    });

    it("should decode Base64 without padding", () => {
      // Base64 can sometimes omit padding
      const result = decodeFromBase64("SGVsbG8");
      expect(result.isValid).toBe(true);
      expect(result.output).toBe("Hello");
    });

    it("should decode with extra whitespace", () => {
      const result = decodeFromBase64("  SGVsbG8gV29ybGQ=  ");
      expect(result.isValid).toBe(true);
      expect(result.output).toBe("Hello World");
    });

    it("should handle invalid Base64 characters", () => {
      const result = decodeFromBase64("Invalid@#$%");
      expect(result.isValid).toBe(false);
      expect(result.error).toBeDefined();
      expect(result.output).toBe("");
    });

    it("should decode URL-safe Base64", () => {
      // URL-safe uses - and _ instead of + and /
      const result = decodeFromBase64("SGVsbG8tV29ybGQ_", true);
      expect(result.isValid).toBe(true);
      expect(result.output).toBeDefined();
    });

    it("should handle malformed Base64", () => {
      const result = decodeFromBase64("SGVs!");
      expect(result.isValid).toBe(false);
      expect(result.error).toBeDefined();
    });

    it("should decode Unicode text", () => {
      // First encode, then decode
      const original = "🚀 Emoji Test 中文";
      const encoded = encodeToBase64(original);
      const decoded = decodeFromBase64(encoded.output);
      expect(decoded.isValid).toBe(true);
      expect(decoded.output).toBe(original);
    });
  });

  describe("Round-trip encoding/decoding", () => {
    const testCases = [
      "Simple text",
      "Special chars: !@#$%^&*()",
      "Numbers: 1234567890",
      "Multi\nLine\nText",
      "Emoji: 🚀 🎉 💻",
      "German: Über Änderungen",
      "Chinese: 你好世界",
      "Mixed: Hello 世界! 🚀",
      JSON.stringify({ key: "value", nested: { array: [1, 2, 3] } }),
      "Tab\tSeparated\tValues",
      "Quote test: \"Hello\" and 'World'",
    ];

    testCases.forEach((testCase) => {
      it(`should round-trip: ${testCase.substring(0, 30)}...`, () => {
        const encoded = encodeToBase64(testCase);
        expect(encoded.isValid).toBe(true);

        const decoded = decodeFromBase64(encoded.output);
        expect(decoded.isValid).toBe(true);
        expect(decoded.output).toBe(testCase);
      });
    });

    it("should round-trip in URL-safe mode", () => {
      const original = "Test+String/With=Special";
      const encoded = encodeToBase64(original, true);
      expect(encoded.isValid).toBe(true);

      const decoded = decodeFromBase64(encoded.output, true);
      expect(decoded.isValid).toBe(true);
      expect(decoded.output).toBe(original);
    });
  });

  describe("encodeLineByLine", () => {
    it("should encode multiple lines separately", () => {
      const input = "Line 1\nLine 2\nLine 3";
      const result = encodeLineByLine(input);
      expect(result.isValid).toBe(true);
      const lines = result.output.split("\n");
      expect(lines).toHaveLength(3);
      expect(lines[0]).toBe(encodeToBase64("Line 1").output);
      expect(lines[1]).toBe(encodeToBase64("Line 2").output);
      expect(lines[2]).toBe(encodeToBase64("Line 3").output);
    });

    it("should handle empty lines", () => {
      const input = "Line 1\n\nLine 3";
      const result = encodeLineByLine(input);
      expect(result.isValid).toBe(true);
      const lines = result.output.split("\n");
      expect(lines).toHaveLength(3);
      expect(lines[1]).toBe("");
    });

    it("should encode in URL-safe mode line by line", () => {
      const input = "Test 1\nTest 2";
      const result = encodeLineByLine(input, true);
      expect(result.isValid).toBe(true);
      const lines = result.output.split("\n");
      lines.forEach((line) => {
        if (line) {
          expect(line).not.toContain("+");
          expect(line).not.toContain("/");
          expect(line).not.toContain("=");
        }
      });
    });

    it("should handle single line without newline", () => {
      const input = "Single line";
      const result = encodeLineByLine(input);
      expect(result.isValid).toBe(true);
      expect(result.output).toBe(encodeToBase64(input).output);
    });
  });

  describe("decodeLineByLine", () => {
    it("should decode multiple lines separately", () => {
      const encoded = "TGluZSAx\nTGluZSAy\nTGluZSAz";
      const result = decodeLineByLine(encoded);
      expect(result.isValid).toBe(true);
      expect(result.output).toBe("Line 1\nLine 2\nLine 3");
    });

    it("should handle empty lines", () => {
      const encoded = "TGluZSAx\n\nTGluZSAz";
      const result = decodeLineByLine(encoded);
      expect(result.isValid).toBe(true);
      expect(result.output).toBe("Line 1\n\nLine 3");
    });

    it("should provide line number in error message", () => {
      const encoded = "TGluZSAx\nInvalid!\nTGluZSAz";
      const result = decodeLineByLine(encoded);
      expect(result.isValid).toBe(false);
      expect(result.error).toContain("Line 2");
    });

    it("should decode URL-safe format line by line", () => {
      const input = "Test 1\nTest 2";
      const encoded = encodeLineByLine(input, true);
      const decoded = decodeLineByLine(encoded.output, true);
      expect(decoded.isValid).toBe(true);
      expect(decoded.output).toBe(input);
    });
  });

  describe("splitIntoChunks", () => {
    it("should split into 76-character chunks by default", () => {
      const longString = "A".repeat(200);
      const result = splitIntoChunks(longString);
      const lines = result.split("\n");
      expect(lines[0]).toHaveLength(76);
      expect(lines[1]).toHaveLength(76);
      expect(lines[2]).toHaveLength(48); // Remaining characters
    });

    it("should split with custom chunk size", () => {
      const input = "A".repeat(100);
      const result = splitIntoChunks(input, 25);
      const lines = result.split("\n");
      expect(lines[0]).toHaveLength(25);
      expect(lines[1]).toHaveLength(25);
      expect(lines[2]).toHaveLength(25);
      expect(lines[3]).toHaveLength(25);
    });

    it("should handle empty string", () => {
      const result = splitIntoChunks("");
      expect(result).toBe("");
    });

    it("should handle string shorter than chunk size", () => {
      const result = splitIntoChunks("Short", 76);
      expect(result).toBe("Short");
      expect(result).not.toContain("\n");
    });

    it("should create MIME-compliant Base64", () => {
      const text = "A".repeat(100);
      const encoded = encodeToBase64(text);
      const chunked = splitIntoChunks(encoded.output, 76);
      const lines = chunked.split("\n");
      lines.forEach((line, index) => {
        if (index < lines.length - 1) {
          expect(line.length).toBeLessThanOrEqual(76);
        }
      });
    });
  });

  describe("isValidBase64", () => {
    it("should validate correct Base64 strings", () => {
      expect(isValidBase64("SGVsbG8gV29ybGQ=")).toBe(true);
      expect(isValidBase64("VGVzdA==")).toBe(true);
      expect(isValidBase64("YWJjZA==")).toBe(true);
    });

    it("should validate Base64 without padding", () => {
      // In URL-safe mode, padding is optional
      expect(isValidBase64("SGVsbG8", true)).toBe(true);
    });

    it("should reject empty string", () => {
      expect(isValidBase64("")).toBe(false);
    });

    it("should reject invalid characters", () => {
      expect(isValidBase64("Hello@#$")).toBe(false);
      expect(isValidBase64("Test!")).toBe(false);
      // Note: isValidBase64 strips whitespace, so test without space
      expect(isValidBase64("Invalid@")).toBe(false);
    });

    it("should handle whitespace correctly", () => {
      // With whitespace stripped, should be valid
      expect(isValidBase64("SGVs bG8=")).toBe(true);
    });

    it("should validate URL-safe Base64", () => {
      expect(isValidBase64("SGVsbG8tV29ybGQ_", true)).toBe(true);
      expect(isValidBase64("Test-String_", true)).toBe(true);
    });

    it("should reject standard Base64 in URL-safe mode", () => {
      // Standard Base64 with + and / should fail URL-safe validation
      const standardEncoded = encodeToBase64("Hello+World");
      if (
        standardEncoded.output.includes("+") ||
        standardEncoded.output.includes("/")
      ) {
        expect(isValidBase64(standardEncoded.output, true)).toBe(false);
      }
    });

    it("should handle various padding scenarios", () => {
      expect(isValidBase64("YQ==")).toBe(true); // 2 padding chars
      expect(isValidBase64("YWI=")).toBe(true); // 1 padding char
      expect(isValidBase64("YWJj")).toBe(true); // No padding
    });

    it("should reject invalid padding", () => {
      expect(isValidBase64("YQ===")).toBe(false); // Too much padding
      expect(isValidBase64("=YWJj")).toBe(false); // Padding at start
    });
  });

  describe("Edge Cases and Error Handling", () => {
    it("should handle very long strings", () => {
      const longText = "Testing ".repeat(10000);
      const encoded = encodeToBase64(longText);
      expect(encoded.isValid).toBe(true);

      const decoded = decodeFromBase64(encoded.output);
      expect(decoded.isValid).toBe(true);
      expect(decoded.output).toBe(longText);
    });

    it("should handle all printable ASCII characters", () => {
      const ascii = Array.from({ length: 95 }, (_, i) =>
        String.fromCharCode(32 + i)
      ).join("");
      const encoded = encodeToBase64(ascii);
      expect(encoded.isValid).toBe(true);

      const decoded = decodeFromBase64(encoded.output);
      expect(decoded.isValid).toBe(true);
      expect(decoded.output).toBe(ascii);
    });

    it("should handle binary-like data", () => {
      const binary = "\x00\x01\x02\x03\x04\x05\x06\x07";
      const encoded = encodeToBase64(binary);
      expect(encoded.isValid).toBe(true);

      const decoded = decodeFromBase64(encoded.output);
      expect(decoded.isValid).toBe(true);
      expect(decoded.output).toBe(binary);
    });

    it("should handle JSON data", () => {
      const json = JSON.stringify({
        name: "Test",
        values: [1, 2, 3],
        nested: { key: "value" },
      });
      const encoded = encodeToBase64(json);
      expect(encoded.isValid).toBe(true);

      const decoded = decodeFromBase64(encoded.output);
      expect(decoded.isValid).toBe(true);
      expect(JSON.parse(decoded.output)).toEqual(JSON.parse(json));
    });

    it("should distinguish between standard and URL-safe modes", () => {
      const text = "Subject: Hello";
      const standard = encodeToBase64(text, false);
      const urlSafe = encodeToBase64(text, true);

      expect(standard.output).not.toBe(urlSafe.output);

      // Decode with correct mode
      const decodedStandard = decodeFromBase64(standard.output, false);
      const decodedUrlSafe = decodeFromBase64(urlSafe.output, true);

      expect(decodedStandard.output).toBe(text);
      expect(decodedUrlSafe.output).toBe(text);
    });
  });
});
