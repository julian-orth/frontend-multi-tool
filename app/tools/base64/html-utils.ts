/**
 * HTML encoding/decoding utility functions
 */

export type HtmlResult = {
  output: string;
  error?: string;
  isValid: boolean;
};

/**
 * HTML entity map for encoding
 */
const HTML_ENTITIES_ENCODE: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "¢": "&cent;",
  "£": "&pound;",
  "¥": "&yen;",
  "€": "&euro;",
  "©": "&copy;",
  "®": "&reg;",
  "™": "&trade;",
  " ": "&nbsp;",
  "¡": "&iexcl;",
  "¿": "&iquest;",
  "«": "&laquo;",
  "»": "&raquo;",
  "°": "&deg;",
  "±": "&plusmn;",
  "×": "&times;",
  "÷": "&divide;",
  µ: "&micro;",
  "¶": "&para;",
  "§": "&sect;",
  "·": "&middot;",
  "¼": "&frac14;",
  "½": "&frac12;",
  "¾": "&frac34;",
  "–": "&ndash;",
  "—": "&mdash;",
  "\u2018": "&lsquo;",
  "\u2019": "&rsquo;",
  "\u201A": "&sbquo;",
  "\u201C": "&ldquo;",
  "\u201D": "&rdquo;",
  "\u201E": "&bdquo;",
  "\u2020": "&dagger;",
  "‡": "&Dagger;",
  "•": "&bull;",
  "…": "&hellip;",
  "‰": "&permil;",
  "′": "&prime;",
  "″": "&Prime;",
  "‹": "&lsaquo;",
  "›": "&rsaquo;",
  "‾": "&oline;",
};

/**
 * HTML entity map for decoding (reverse of encode map + numeric entities)
 */
const HTML_ENTITIES_DECODE: Record<string, string> = {};
Object.entries(HTML_ENTITIES_ENCODE).forEach(([char, entity]) => {
  HTML_ENTITIES_DECODE[entity] = char;
});

/**
 * Encode special characters to HTML entities
 */
export function encodeToHtml(
  input: string,
  useNamedEntities: boolean = true,
  encodeAll: boolean = false
): HtmlResult {
  try {
    if (!input) {
      return { output: "", isValid: true };
    }

    let encoded = input;

    if (encodeAll) {
      // Encode all characters (even ASCII letters/numbers)
      encoded = Array.from(input)
        .map((char) => {
          if (useNamedEntities && HTML_ENTITIES_ENCODE[char]) {
            return HTML_ENTITIES_ENCODE[char];
          }
          const code = char.charCodeAt(0);
          return `&#${code};`;
        })
        .join("");
    } else {
      // Encode only special characters
      encoded = Array.from(input)
        .map((char) => {
          if (useNamedEntities && HTML_ENTITIES_ENCODE[char]) {
            return HTML_ENTITIES_ENCODE[char];
          }
          const code = char.charCodeAt(0);
          // Encode non-ASCII characters (> 127) and special HTML chars
          if (
            code > 127 ||
            char === "&" ||
            char === "<" ||
            char === ">" ||
            char === '"' ||
            char === "'"
          ) {
            return `&#${code};`;
          }
          return char;
        })
        .join("");
    }

    return {
      output: encoded,
      isValid: true,
    };
  } catch (error) {
    return {
      output: "",
      error:
        error instanceof Error
          ? `Encoding failed: ${error.message}`
          : "Encoding failed",
      isValid: false,
    };
  }
}

/**
 * Decode HTML entities to plain text
 */
export function decodeFromHtml(input: string): HtmlResult {
  try {
    if (!input) {
      return { output: "", isValid: true };
    }

    let decoded = input;

    // Decode named entities
    Object.entries(HTML_ENTITIES_DECODE).forEach(([entity, char]) => {
      decoded = decoded.replace(new RegExp(entity, "g"), char);
    });

    // Decode numeric entities (decimal)
    decoded = decoded.replace(/&#(\d+);/g, (_, code) => {
      return String.fromCharCode(parseInt(code, 10));
    });

    // Decode numeric entities (hexadecimal)
    decoded = decoded.replace(/&#x([0-9A-Fa-f]+);/g, (_, code) => {
      return String.fromCharCode(parseInt(code, 16));
    });

    return {
      output: decoded,
      isValid: true,
    };
  } catch (error) {
    return {
      output: "",
      error:
        error instanceof Error
          ? `Decoding failed: ${error.message}`
          : "Decoding failed",
      isValid: false,
    };
  }
}

/**
 * Encode each line separately
 */
export function encodeLineByLine(
  input: string,
  useNamedEntities: boolean = true,
  encodeAll: boolean = false
): HtmlResult {
  try {
    const lines = input.split("\n");
    const encoded = lines
      .map((line) => {
        if (!line) return "";
        const result = encodeToHtml(line, useNamedEntities, encodeAll);
        if (!result.isValid) throw new Error(result.error);
        return result.output;
      })
      .join("\n");

    return {
      output: encoded,
      isValid: true,
    };
  } catch (error) {
    return {
      output: "",
      error:
        error instanceof Error
          ? `Line-by-line encoding failed: ${error.message}`
          : "Line-by-line encoding failed",
      isValid: false,
    };
  }
}

/**
 * Decode each line separately
 */
export function decodeLineByLine(input: string): HtmlResult {
  try {
    const lines = input.split("\n");
    const decoded = lines
      .map((line, index) => {
        if (!line.trim()) return "";
        const result = decodeFromHtml(line);
        if (!result.isValid) {
          throw new Error(`Line ${index + 1}: ${result.error}`);
        }
        return result.output;
      })
      .join("\n");

    return {
      output: decoded,
      isValid: true,
    };
  } catch (error) {
    return {
      output: "",
      error:
        error instanceof Error ? error.message : "Line-by-line decoding failed",
      isValid: false,
    };
  }
}

/**
 * Detect if string contains HTML entities
 */
export function containsHtmlEntities(input: string): boolean {
  return /&[#a-zA-Z0-9]+;/.test(input);
}

/**
 * Count HTML entities in string
 */
export function countHtmlEntities(input: string): number {
  const matches = input.match(/&[#a-zA-Z0-9]+;/g);
  return matches ? matches.length : 0;
}
