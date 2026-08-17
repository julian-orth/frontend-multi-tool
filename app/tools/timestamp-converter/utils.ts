export interface TimestampResult {
  isValid: boolean;
  output: string;
  error?: string;
  timestamp?: number;
  date?: Date;
  formats?: {
    iso8601: string;
    rfc2822: string;
    utc: string;
    local: string;
    relative: string;
  };
}

export type RelativeTimeUnit = "minute" | "hour" | "day" | "month" | "year";

/** Localized strings needed to build the report text and relative-time phrases. */
export interface TimestampFormatLabels {
  detectedFormat: string;
  iso8601: string;
  rfc2822: string;
  utc: string;
  local: string;
  relative: string;
  unixSeconds: string;
  unixMilliseconds: string;
  errors: {
    emptyTimestamp: string;
    invalidTimestampFormat: string;
    invalidTimestamp: string;
    yearOutOfRange: (year: number) => string;
    unknownError: string;
    emptyDate: string;
    invalidDateFormat: string;
  };
  relativeTime: {
    justNow: string;
    inAFewSeconds: string;
    past: (n: number, unit: RelativeTimeUnit) => string;
    future: (n: number, unit: RelativeTimeUnit) => string;
  };
}

/**
 * Detect timestamp format (seconds, milliseconds, microseconds, nanoseconds)
 */
export function detectTimestampFormat(value: number): {
  format: "seconds" | "milliseconds" | "microseconds" | "nanoseconds";
  normalized: number;
} {
  const length = Math.abs(value).toString().length;

  if (length <= 10) {
    return { format: "seconds", normalized: value };
  } else if (length <= 13) {
    return { format: "milliseconds", normalized: value };
  } else if (length <= 16) {
    return { format: "microseconds", normalized: Math.floor(value / 1000) };
  } else {
    return {
      format: "nanoseconds",
      normalized: Math.floor(value / 1000000),
    };
  }
}

/**
 * Convert timestamp to human-readable date
 */
export function timestampToDate(
  input: string,
  labels: TimestampFormatLabels
): TimestampResult {
  try {
    const trimmed = input.trim();
    if (!trimmed) {
      return {
        isValid: false,
        output: "",
        error: labels.errors.emptyTimestamp,
      };
    }

    // Try to parse as number
    const num = parseFloat(trimmed);
    if (isNaN(num)) {
      return {
        isValid: false,
        output: "",
        error: labels.errors.invalidTimestampFormat,
      };
    }

    // Detect format and normalize to milliseconds
    const { format, normalized } = detectTimestampFormat(num);
    const date = new Date(normalized);

    // Check if date is valid
    if (isNaN(date.getTime())) {
      return {
        isValid: false,
        output: "",
        error: labels.errors.invalidTimestamp,
      };
    }

    // Check if date is reasonable (between 1970 and 2100)
    const year = date.getFullYear();
    if (year < 1970 || year > 2100) {
      return {
        isValid: false,
        output: "",
        error: labels.errors.yearOutOfRange(year),
      };
    }

    const formats = {
      iso8601: date.toISOString(),
      rfc2822: date.toUTCString(),
      utc: date.toUTCString(),
      local: date.toLocaleString(),
      relative: getRelativeTime(date, labels),
    };

    const output = `${labels.detectedFormat}: ${format}

${labels.iso8601}: ${formats.iso8601}
${labels.rfc2822}: ${formats.rfc2822}
${labels.utc}: ${formats.utc}
${labels.local}: ${formats.local}
${labels.relative}: ${formats.relative}

${labels.unixSeconds}: ${Math.floor(normalized / 1000)}
${labels.unixMilliseconds}: ${normalized}`;

    return {
      isValid: true,
      output,
      timestamp: Math.floor(normalized / 1000),
      date,
      formats,
    };
  } catch (error) {
    return {
      isValid: false,
      output: "",
      error: error instanceof Error ? error.message : labels.errors.unknownError,
    };
  }
}

/**
 * Convert human-readable date to timestamp
 */
export function dateToTimestamp(
  input: string,
  labels: TimestampFormatLabels
): TimestampResult {
  try {
    const trimmed = input.trim();
    if (!trimmed) {
      return {
        isValid: false,
        output: "",
        error: labels.errors.emptyDate,
      };
    }

    // Try to parse the date
    const date = new Date(trimmed);

    // Check if date is valid
    if (isNaN(date.getTime())) {
      return {
        isValid: false,
        output: "",
        error: labels.errors.invalidDateFormat,
      };
    }

    const timestampSeconds = Math.floor(date.getTime() / 1000);
    const timestampMillis = date.getTime();

    const output = `${labels.unixSeconds}: ${timestampSeconds}
${labels.unixMilliseconds}: ${timestampMillis}

${labels.iso8601}: ${date.toISOString()}
${labels.rfc2822}: ${date.toUTCString()}
${labels.utc}: ${date.toUTCString()}
${labels.local}: ${date.toLocaleString()}`;

    return {
      isValid: true,
      output,
      timestamp: timestampSeconds,
      date,
    };
  } catch (error) {
    return {
      isValid: false,
      output: "",
      error: error instanceof Error ? error.message : labels.errors.unknownError,
    };
  }
}

/**
 * Get current timestamp
 */
export function getCurrentTimestamp(
  labels: TimestampFormatLabels
): TimestampResult {
  const now = new Date();
  const timestampSeconds = Math.floor(now.getTime() / 1000);
  const timestampMillis = now.getTime();

  const output = `${labels.unixSeconds}: ${timestampSeconds}
${labels.unixMilliseconds}: ${timestampMillis}

${labels.iso8601}: ${now.toISOString()}
${labels.rfc2822}: ${now.toUTCString()}
${labels.utc}: ${now.toUTCString()}
${labels.local}: ${now.toLocaleString()}`;

  return {
    isValid: true,
    output,
    timestamp: timestampSeconds,
    date: now,
  };
}

/**
 * Get relative time description
 */
function getRelativeTime(date: Date, labels: TimestampFormatLabels): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(Math.abs(diffMs) / 1000);
  const isPast = diffMs > 0;
  const { justNow, inAFewSeconds, past, future } = labels.relativeTime;

  if (diffSeconds < 60) {
    return isPast ? justNow : inAFewSeconds;
  }

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) {
    return isPast ? past(diffMinutes, "minute") : future(diffMinutes, "minute");
  }

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return isPast ? past(diffHours, "hour") : future(diffHours, "hour");
  }

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) {
    return isPast ? past(diffDays, "day") : future(diffDays, "day");
  }

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) {
    return isPast ? past(diffMonths, "month") : future(diffMonths, "month");
  }

  const diffYears = Math.floor(diffMonths / 12);
  return isPast ? past(diffYears, "year") : future(diffYears, "year");
}

/**
 * Format timestamp for specific timezone
 */
export function formatTimestampInTimezone(
  timestamp: number,
  timezone: string
): string {
  try {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  } catch {
    return "Invalid timezone";
  }
}

/**
 * Get common timezones
 */
export function getCommonTimezones(): string[] {
  return [
    "UTC",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "America/Anchorage",
    "Pacific/Honolulu",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Europe/Moscow",
    "Asia/Dubai",
    "Asia/Kolkata",
    "Asia/Singapore",
    "Asia/Shanghai",
    "Asia/Tokyo",
    "Australia/Sydney",
  ];
}
