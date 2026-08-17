export type JWTDecodeError =
  | { code: "empty" }
  | { code: "wrong-part-count"; got: number }
  | { code: "empty-header-or-payload" }
  | { code: "invalid-header-json"; message: string }
  | { code: "invalid-payload-json"; message: string }
  | { code: "decode-error"; message: string };

export interface JWTResult {
  isValid: boolean;
  header: string;
  payload: string;
  signature: string;
  headerObj: Record<string, unknown> | null;
  payloadObj: Record<string, unknown> | null;
  error?: JWTDecodeError;
}

/**
 * Base64URL decode
 * Converts Base64URL encoded string to regular string
 */
function base64UrlDecode(input: string): string {
  // Replace Base64URL characters with standard Base64
  let base64 = input.replace(/-/g, "+").replace(/_/g, "/");

  // Add padding if necessary
  const pad = base64.length % 4;
  if (pad) {
    if (pad === 1) {
      throw new Error("Invalid Base64URL string");
    }
    base64 += "=".repeat(4 - pad);
  }

  // Decode using standard Base64
  const decoded = atob(base64);

  // Convert to UTF-8
  const bytes = Uint8Array.from(decoded, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/**
 * Decode JWT token
 * Parses and decodes a JWT token into its components
 */
export function decodeJWT(token: string): JWTResult {
  // Remove whitespace
  const trimmedToken = token.trim();

  if (!trimmedToken) {
    return {
      isValid: false,
      header: "",
      payload: "",
      signature: "",
      headerObj: null,
      payloadObj: null,
      error: { code: "empty" },
    };
  }

  // Split token into parts
  const parts = trimmedToken.split(".");

  if (parts.length !== 3) {
    return {
      isValid: false,
      header: "",
      payload: "",
      signature: "",
      headerObj: null,
      payloadObj: null,
      error: { code: "wrong-part-count", got: parts.length },
    };
  }

  const [headerPart, payloadPart, signaturePart] = parts;

  // Validate that parts are not empty
  if (!headerPart || !payloadPart) {
    return {
      isValid: false,
      header: "",
      payload: "",
      signature: signaturePart || "",
      headerObj: null,
      payloadObj: null,
      error: { code: "empty-header-or-payload" },
    };
  }

  try {
    // Decode header
    const decodedHeader = base64UrlDecode(headerPart);
    let headerObj: Record<string, unknown> | null = null;

    try {
      headerObj = JSON.parse(decodedHeader) as Record<string, unknown>;
    } catch (e) {
      return {
        isValid: false,
        header: decodedHeader,
        payload: "",
        signature: signaturePart || "",
        headerObj: null,
        payloadObj: null,
        error: {
          code: "invalid-header-json",
          message: e instanceof Error ? e.message : "Unknown error",
        },
      };
    }

    // Decode payload
    const decodedPayload = base64UrlDecode(payloadPart);
    let payloadObj: Record<string, unknown> | null = null;

    try {
      payloadObj = JSON.parse(decodedPayload) as Record<string, unknown>;
    } catch (e) {
      return {
        isValid: false,
        header: decodedHeader,
        payload: decodedPayload,
        signature: signaturePart || "",
        headerObj,
        payloadObj: null,
        error: {
          code: "invalid-payload-json",
          message: e instanceof Error ? e.message : "Unknown error",
        },
      };
    }

    return {
      isValid: true,
      header: JSON.stringify(headerObj, null, 2),
      payload: JSON.stringify(payloadObj, null, 2),
      signature: signaturePart || "",
      headerObj,
      payloadObj,
    };
  } catch (error) {
    return {
      isValid: false,
      header: "",
      payload: "",
      signature: signaturePart || "",
      headerObj: null,
      payloadObj: null,
      error: {
        code: "decode-error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
    };
  }
}

export type TimeUnit = "second" | "minute" | "hour" | "day";

export interface RelativeTime {
  value: number;
  unit: TimeUnit;
  direction: "past" | "future";
}

/** The set of JWT claim keys we have a localized description for. */
export const KNOWN_CLAIM_KEYS = [
  "iss",
  "sub",
  "aud",
  "exp",
  "nbf",
  "iat",
  "jti",
  "name",
  "email",
  "email_verified",
  "phone_number",
  "phone_number_verified",
  "given_name",
  "family_name",
  "middle_name",
  "nickname",
  "preferred_username",
  "profile",
  "picture",
  "website",
  "gender",
  "birthdate",
  "zoneinfo",
  "locale",
  "updated_at",
  "azp",
  "nonce",
  "auth_time",
  "acr",
  "amr",
  "scope",
  "roles",
  "groups",
] as const;

export type KnownClaimKey = (typeof KNOWN_CLAIM_KEYS)[number];

function isKnownClaimKey(key: string): key is KnownClaimKey {
  return (KNOWN_CLAIM_KEYS as readonly string[]).includes(key);
}

export interface JWTClaim {
  key: string;
  value: string;
  knownKey: KnownClaimKey | null;
}

export interface ClaimsAnalysis {
  claims: JWTClaim[];
  isExpired: boolean;
  expiration?: RelativeTime;
}

/**
 * Analyze JWT claims
 * Extracts and analyzes common JWT claims. Returns structured data only —
 * no English text — so the UI layer can render fully localized labels.
 */
export function analyzeJWTClaims(
  payloadObj: Record<string, unknown> | null
): ClaimsAnalysis {
  const claims: JWTClaim[] = [];
  let isExpired = false;
  let expiration: RelativeTime | undefined;

  if (!payloadObj) {
    return { claims, isExpired };
  }

  const now = Math.floor(Date.now() / 1000);

  for (const [key, value] of Object.entries(payloadObj)) {
    let displayValue = String(value);

    // Format timestamp values
    if (["exp", "nbf", "iat", "auth_time", "updated_at"].includes(key)) {
      const timestamp = Number(value);
      if (!isNaN(timestamp) && timestamp > 0) {
        const date = new Date(timestamp * 1000);
        displayValue = `${timestamp} (${date.toISOString()})`;

        // Check expiration
        if (key === "exp") {
          if (timestamp < now) {
            isExpired = true;
            expiration = { ...formatTimeDifference(now - timestamp), direction: "past" };
          } else {
            expiration = {
              ...formatTimeDifference(timestamp - now),
              direction: "future",
            };
          }
        }
      }
    }

    // Format arrays and objects
    if (
      Array.isArray(value) ||
      (typeof value === "object" && value !== null)
    ) {
      displayValue = JSON.stringify(value, null, 2);
    }

    claims.push({
      key,
      value: displayValue,
      knownKey: isKnownClaimKey(key) ? key : null,
    });
  }

  return { claims, isExpired, expiration };
}

/**
 * Reduce a second count to the largest whole unit (days/hours/minutes/seconds).
 */
function formatTimeDifference(seconds: number): { value: number; unit: TimeUnit } {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return { value: days, unit: "day" };
  if (hours > 0) return { value: hours, unit: "hour" };
  if (minutes > 0) return { value: minutes, unit: "minute" };
  return { value: seconds, unit: "second" };
}

export const KNOWN_ALGORITHMS = [
  "HS256",
  "HS384",
  "HS512",
  "RS256",
  "RS384",
  "RS512",
  "ES256",
  "ES384",
  "ES512",
  "PS256",
  "PS384",
  "PS512",
  "NONE",
] as const;

export type KnownAlgorithm = (typeof KNOWN_ALGORITHMS)[number];

/**
 * Get algorithm name from JWT header. Returns structured data only.
 */
export function getAlgorithmInfo(headerObj: Record<string, unknown> | null): {
  algorithm: string;
  knownAlgorithm: KnownAlgorithm | null;
  isNone: boolean;
  isUnspecified: boolean;
} {
  if (!headerObj || !headerObj.alg) {
    return {
      algorithm: "Unknown",
      knownAlgorithm: null,
      isNone: false,
      isUnspecified: true,
    };
  }

  const alg = String(headerObj.alg).toUpperCase();
  const isNone = alg === "NONE";
  const knownAlgorithm = (KNOWN_ALGORITHMS as readonly string[]).includes(alg)
    ? (alg as KnownAlgorithm)
    : null;

  return { algorithm: alg, knownAlgorithm, isNone, isUnspecified: false };
}

/**
 * Generate sample JWT token for testing
 */
export function generateSampleJWT(): string {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    sub: "1234567890",
    name: "John Doe",
    email: "john.doe@example.com",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
    iss: "https://example.com",
    aud: "https://api.example.com",
  };

  // Encode to Base64URL
  const encodeBase64URL = (obj: Record<string, unknown>): string => {
    const json = JSON.stringify(obj);
    const base64 = btoa(
      new TextEncoder()
        .encode(json)
        .reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  };

  const headerEncoded = encodeBase64URL(header);
  const payloadEncoded = encodeBase64URL(payload);
  const signature = "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"; // Sample signature

  return `${headerEncoded}.${payloadEncoded}.${signature}`;
}
