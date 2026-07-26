/**
 * URL encoding/decoding utility functions
 */

export type UrlEncodeResult = {
  output: string;
  error?: string;
  isValid: boolean;
};

export type EncodingMode =
  | "component"
  | "uri"
  | "formdata"
  | "rfc3986"
  | "decode";

/**
 * Encode using encodeURIComponent (for query parameters, form data values)
 * Escapes all characters except: A-Z a-z 0-9 - _ . ! ~ * ' ( )
 */
export function encodeComponent(input: string): UrlEncodeResult {
  try {
    if (!input) {
      return { output: "", isValid: true };
    }
    const encoded = encodeURIComponent(input);
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
 * Encode using encodeURI (for full URLs)
 * Escapes all characters except: A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
 */
export function encodeFullUri(input: string): UrlEncodeResult {
  try {
    if (!input) {
      return { output: "", isValid: true };
    }
    const encoded = encodeURI(input);
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
 * Encode for application/x-www-form-urlencoded format
 * Spaces become +, not %20
 */
export function encodeFormData(input: string): UrlEncodeResult {
  try {
    if (!input) {
      return { output: "", isValid: true };
    }
    const encoded = encodeURIComponent(input).replace(/%20/g, "+");
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
 * Encode for RFC3986 compliance
 * Also encodes !, ', (, ), and *
 */
export function encodeRFC3986(input: string): UrlEncodeResult {
  try {
    if (!input) {
      return { output: "", isValid: true };
    }
    const encoded = encodeURIComponent(input).replace(
      /[!'()*]/g,
      (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`
    );
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
 * Decode URL-encoded string
 * Handles both %20 and + for spaces
 */
export function decodeUrl(input: string): UrlEncodeResult {
  try {
    if (!input) {
      return { output: "", isValid: true };
    }

    // First, replace + with spaces (common in form data)
    let normalized = input.replace(/\+/g, " ");

    // Then decode
    const decoded = decodeURIComponent(normalized);

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
          : "Invalid URL-encoded string",
      isValid: false,
    };
  }
}

/**
 * Encode each line separately
 */
export function encodeLineByLine(
  input: string,
  mode: EncodingMode
): UrlEncodeResult {
  try {
    const lines = input.split("\n");
    const encoded = lines
      .map((line) => {
        if (!line) return "";
        let result: UrlEncodeResult;
        switch (mode) {
          case "uri":
            result = encodeFullUri(line);
            break;
          case "formdata":
            result = encodeFormData(line);
            break;
          case "rfc3986":
            result = encodeRFC3986(line);
            break;
          default:
            result = encodeComponent(line);
        }
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
export function decodeLineByLine(input: string): UrlEncodeResult {
  try {
    const lines = input.split("\n");
    const decoded = lines
      .map((line, index) => {
        if (!line.trim()) return "";
        const result = decodeUrl(line);
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
 * Validate if a string contains valid URL encoding
 */
export function isValidUrlEncoded(input: string): boolean {
  if (!input) return false;

  try {
    // Try to decode - if it fails, it's not valid
    decodeURIComponent(input.replace(/\+/g, " "));
    return true;
  } catch {
    return false;
  }
}

/**
 * Parse URL query string into key-value pairs
 */
export function parseQueryString(
  input: string
): { key: string; value: string }[] {
  const params: { key: string; value: string }[] = [];

  // Remove leading ? if present
  const queryString = input.startsWith("?") ? input.slice(1) : input;

  if (!queryString) return params;

  const pairs = queryString.split("&");
  for (const pair of pairs) {
    const [key, value] = pair.split("=");
    if (key) {
      params.push({
        key: decodeURIComponent(key),
        value: value ? decodeURIComponent(value.replace(/\+/g, " ")) : "",
      });
    }
  }

  return params;
}

/**
 * Build query string from key-value pairs
 */
export function buildQueryString(
  params: { key: string; value: string }[]
): string {
  return params
    .filter((p) => p.key)
    .map((p) => `${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`)
    .join("&");
}
