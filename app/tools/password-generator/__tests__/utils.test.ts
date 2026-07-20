import { describe, expect, it } from "vitest";
import {
  estimateStrength,
  generatePassphrase,
  generatePassword,
} from "../utils";

const deterministicRandom = (maxExclusive: number) => {
  if (maxExclusive <= 0) return 0;
  return 0;
};

describe("password generator utils", () => {
  it("generates a password with required character sets", () => {
    const result = generatePassword(
      {
        length: 12,
        includeUppercase: true,
        includeLowercase: true,
        includeNumbers: true,
        includeSymbols: true,
        customSymbols: "!@#",
        excludeAmbiguous: false,
        requireEachSelectedSet: true,
        noRepeatedCharacters: false,
      },
      deterministicRandom
    );

    expect(result.value.length).toBe(12);
    expect(/[A-Z]/.test(result.value)).toBe(true);
    expect(/[a-z]/.test(result.value)).toBe(true);
    expect(/[0-9]/.test(result.value)).toBe(true);
    expect(/[!@#]/.test(result.value)).toBe(true);
  });

  it("throws when no character sets are selected", () => {
    expect(() =>
      generatePassword(
        {
          length: 12,
          includeUppercase: false,
          includeLowercase: false,
          includeNumbers: false,
          includeSymbols: false,
          customSymbols: "",
          excludeAmbiguous: false,
          requireEachSelectedSet: false,
          noRepeatedCharacters: false,
        },
        deterministicRandom
      )
    ).toThrow("Select at least one character type.");
  });

  it("generates passphrases with optional suffixes", () => {
    const result = generatePassphrase(
      {
        wordCount: 4,
        separator: "-",
        capitalization: "title",
        includeTrailingNumber: true,
        includeTrailingSymbol: true,
      },
      deterministicRandom
    );

    const parts = result.value.split("-");
    expect(parts).toHaveLength(6);
    expect(parts[0][0]).toBe(parts[0][0].toUpperCase());
    expect(/[0-9]/.test(parts[4])).toBe(true);
  });

  it("maps entropy ranges to expected strength labels", () => {
    expect(estimateStrength(20).label).toBe("Very weak");
    expect(estimateStrength(45).label).toBe("Weak");
    expect(estimateStrength(60).label).toBe("Fair");
    expect(estimateStrength(72).label).toBe("Strong");
    expect(estimateStrength(95).label).toBe("Very strong");
  });
});
