/**
 * Base64 encoding/decoding utility functions
 */

export type Base64Result = {
  output: string;
  error?: string;
  isValid: boolean;
};

/**
 * Encode text to Base64
 */
export function encodeToBase64(
  input: string,
  urlSafe: boolean = false
): Base64Result {
  try {
    if (!input) {
      return { output: "", isValid: true };
    }

    // Encode using browser's built-in btoa after converting to UTF-8
    const utf8Bytes = new TextEncoder().encode(input);
    const binaryString = Array.from(utf8Bytes)
      .map((byte) => String.fromCharCode(byte))
      .join("");
    let encoded = btoa(binaryString);

    // Apply URL-safe encoding if requested
    if (urlSafe) {
      encoded = encoded
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
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
 * Decode Base64 to text
 */
export function decodeFromBase64(
  input: string,
  urlSafe: boolean = false
): Base64Result {
  try {
    if (!input) {
      return { output: "", isValid: true };
    }

    let normalized = input.trim();

    // Handle URL-safe Base64
    if (urlSafe) {
      normalized = normalized.replace(/-/g, "+").replace(/_/g, "/");
    }

    // Add padding if missing
    while (normalized.length % 4 !== 0) {
      normalized += "=";
    }

    // Decode using browser's built-in atob
    const binaryString = atob(normalized);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const decoded = new TextDecoder("utf-8", { fatal: true }).decode(bytes);

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
          : "Invalid Base64 string",
      isValid: false,
    };
  }
}

/**
 * Encode each line separately
 */
export function encodeLineByLine(
  input: string,
  urlSafe: boolean = false
): Base64Result {
  try {
    const lines = input.split("\n");
    const encoded = lines
      .map((line) => {
        if (!line) return "";
        const result = encodeToBase64(line, urlSafe);
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
export function decodeLineByLine(
  input: string,
  urlSafe: boolean = false
): Base64Result {
  try {
    const lines = input.split("\n");
    const decoded = lines
      .map((line, index) => {
        if (!line.trim()) return "";
        const result = decodeFromBase64(line, urlSafe);
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
 * Split Base64 string into chunks (for MIME format)
 */
export function splitIntoChunks(input: string, chunkSize: number = 76): string {
  if (!input) return input;
  const chunks: string[] = [];
  for (let i = 0; i < input.length; i += chunkSize) {
    chunks.push(input.slice(i, i + chunkSize));
  }
  return chunks.join("\n");
}

/**
 * Validate if a string is valid Base64
 */
export function isValidBase64(
  input: string,
  urlSafe: boolean = false
): boolean {
  if (!input) return false;

  let normalized = input.trim().replace(/\s/g, "");

  // Handle URL-safe Base64
  if (urlSafe) {
    normalized = normalized.replace(/-/g, "+").replace(/_/g, "/");
  }

  // Check character set
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  if (!base64Regex.test(normalized)) return false;

  // Check length
  if (normalized.length % 4 !== 0 && !urlSafe) return false;

  try {
    atob(
      normalized.length % 4 === 0
        ? normalized
        : normalized + "=".repeat((4 - (normalized.length % 4)) % 4)
    );
    return true;
  } catch {
    return false;
  }
}
