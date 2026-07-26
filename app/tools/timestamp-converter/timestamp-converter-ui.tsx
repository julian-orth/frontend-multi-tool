"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  Copy,
  Check,
  Download,
  AlertCircle,
  CheckCircle,
  Trash2,
  Clock,
  Calendar,
  RefreshCw,
  Globe,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import {
  timestampToDate,
  dateToTimestamp,
  getCurrentTimestamp,
  formatTimestampInTimezone,
  getCommonTimezones,
  type TimestampResult,
} from "./utils";

type Mode = "to-date" | "to-timestamp";

export function TimestampConverterUI() {
  const [mode, setMode] = useState<Mode>("to-date");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [result, setResult] = useState<TimestampResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<TimestampResult | null>(null);
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");

  const timezones = getCommonTimezones();

  // Update current time every second
  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(getCurrentTimestamp());
    };
    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleProcess = useCallback(() => {
    let processResult: TimestampResult;

    if (mode === "to-date") {
      processResult = timestampToDate(input);
    } else {
      processResult = dateToTimestamp(input);
    }

    setResult(processResult);
    setOutput(processResult.output);
  }, [input, mode]);

  const handleClear = useCallback(() => {
    setInput("");
    setOutput("");
    setResult(null);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `timestamp-${mode}-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [output, mode]);

  const handleLoadCurrent = useCallback(() => {
    if (currentTime) {
      if (mode === "to-date") {
        setInput(currentTime.timestamp?.toString() || "");
      } else {
        setInput(currentTime.date?.toISOString() || "");
      }
    }
  }, [currentTime, mode]);

  const handleLoadSample = useCallback(() => {
    if (mode === "to-date") {
      setInput("1701388800"); // Dec 1, 2023 00:00:00
    } else {
      setInput("2024-12-01 12:00:00");
    }
  }, [mode]);

  const handleQuickDate = useCallback(
    (daysOffset: number) => {
      const date = new Date();
      date.setDate(date.getDate() + daysOffset);
      date.setHours(0, 0, 0, 0);

      if (mode === "to-date") {
        setInput(Math.floor(date.getTime() / 1000).toString());
      } else {
        setInput(date.toISOString());
      }
    },
    [mode]
  );

  return (
    <div className="space-y-6">
      {/* Current Time Display */}
      {currentTime && (
        <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20">
          <div className="mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Current Unix Timestamp
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Seconds
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                {currentTime.timestamp}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Milliseconds
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                {currentTime.date?.getTime()}
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            <div className="font-medium">
              {currentTime.date?.toLocaleString()}
            </div>
            <div className="mt-1 text-gray-600 dark:text-gray-400">
              {currentTime.date?.toISOString()}
            </div>
          </div>
        </div>
      )}

      {/* Mode Toggle */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex rounded-xl border border-cyan-200 bg-white p-1 dark:border-cyan-800 dark:bg-gray-900">
          <button
            type="button"
            onClick={() => {
              setMode("to-date");
              setOutput("");
              setResult(null);
            }}
            className={`cursor-pointer rounded-lg px-6 py-2 text-sm font-medium transition-colors ${
              mode === "to-date"
                ? "bg-cyan-600 text-white dark:bg-cyan-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
          >
            <Clock className="mr-2 inline-block h-4 w-4" aria-hidden="true" />
            Timestamp → Date
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("to-timestamp");
              setOutput("");
              setResult(null);
            }}
            className={`cursor-pointer rounded-lg px-6 py-2 text-sm font-medium transition-colors ${
              mode === "to-timestamp"
                ? "bg-cyan-600 text-white dark:bg-cyan-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
          >
            <Calendar
              className="mr-2 inline-block h-4 w-4"
              aria-hidden="true"
            />
            Date → Timestamp
          </button>
        </div>

        <div className="ml-auto flex flex-wrap gap-2">
          <PrimaryButton onClick={handleProcess} className="px-6">
            Convert
          </PrimaryButton>
          <PrimaryButton
            onClick={handleClear}
            variant="outline"
            className="px-4"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-cyan-200 bg-cyan-50/50 p-4 dark:border-cyan-800 dark:bg-cyan-950/20">
        <button
          type="button"
          onClick={handleLoadCurrent}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Use current time
        </button>
        <button
          type="button"
          onClick={handleLoadSample}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          Load sample
        </button>
        <div className="h-6 w-px bg-cyan-300 dark:bg-cyan-700" />
        <button
          type="button"
          onClick={() => handleQuickDate(-7)}
          className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          1 week ago
        </button>
        <button
          type="button"
          onClick={() => handleQuickDate(-1)}
          className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          Yesterday
        </button>
        <button
          type="button"
          onClick={() => handleQuickDate(0)}
          className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          Today
        </button>
        <button
          type="button"
          onClick={() => handleQuickDate(1)}
          className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          Tomorrow
        </button>
        <button
          type="button"
          onClick={() => handleQuickDate(7)}
          className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          1 week ahead
        </button>
      </div>

      {/* Validation status */}
      {result && !result.isValid && result.error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800/50 dark:bg-red-950/30">
          <AlertCircle
            className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400"
            aria-hidden="true"
          />
          <div className="flex-1">
            <p className="font-medium text-red-800 dark:text-red-200">Error</p>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              {result.error}
            </p>
          </div>
        </div>
      )}

      {result && result.isValid && output && (
        <div className="flex items-start gap-3 rounded-xl border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-800/50 dark:bg-cyan-950/30">
          <CheckCircle
            className="h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400"
            aria-hidden="true"
          />
          <div className="flex-1">
            <p className="font-medium text-cyan-800 dark:text-cyan-200">
              Converted successfully
            </p>
          </div>
        </div>
      )}

      {/* Input/Output Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Input */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <label
              className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              htmlFor="timestamp-input"
            >
              Input{" "}
              {mode === "to-date" ? "(Unix Timestamp)" : "(Date/Time String)"}
            </label>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {input.length.toLocaleString()} chars
            </div>
          </div>
          <textarea
            id="timestamp-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "to-date"
                ? "Enter Unix timestamp (seconds or milliseconds)...\nExamples: 1701388800, 1701388800000"
                : "Enter date/time string...\nExamples:\n2024-12-01\nDec 1, 2024 12:00:00\n12/1/2024"
            }
            className="min-h-[300px] w-full rounded-xl border border-cyan-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-cyan-800 dark:bg-gray-900/60 dark:text-gray-100"
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <div
              className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              role="heading"
              aria-level={3}
            >
              Output{" "}
              {mode === "to-date" ? "(Date/Time Formats)" : "(Unix Timestamp)"}
            </div>
            {output && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex cursor-pointer items-center gap-1 text-xs text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" aria-hidden="true" />
                      Copy
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex cursor-pointer items-center gap-1 text-xs text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                >
                  <Download className="h-3 w-3" aria-hidden="true" />
                  Download
                </button>
              </div>
            )}
          </div>
          <div className="relative min-h-[300px] w-full overflow-auto rounded-xl border border-cyan-200 bg-white/80 dark:border-cyan-800 dark:bg-gray-900/60">
            {output ? (
              <pre className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                <code className="break-words whitespace-pre-wrap">
                  {output}
                </code>
              </pre>
            ) : (
              <div className="flex h-[300px] items-center justify-center text-gray-500 dark:text-gray-400">
                <p className="text-sm">Output will appear here...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Timezone Converter */}
      {result && result.isValid && result.timestamp && (
        <div className="rounded-xl border border-cyan-200 bg-cyan-50/30 p-6 dark:border-cyan-800 dark:bg-cyan-950/10">
          <div className="mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Timezone Converter
            </h3>
          </div>
          <div className="mb-4">
            <label
              htmlFor="timezone-select"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Select Timezone
            </label>
            <select
              id="timezone-select"
              value={selectedTimezone}
              onChange={(e) => setSelectedTimezone(e.target.value)}
              className="w-full rounded-lg border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-cyan-800 dark:bg-gray-900 dark:text-gray-300"
            >
              {timezones.map((tz) => (
                <option key={tz} value={tz}>
                  {tz.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </div>
          <div className="rounded-lg border border-cyan-200 bg-white p-4 dark:border-cyan-800 dark:bg-gray-900">
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {selectedTimezone.replace(/_/g, " ")}
            </div>
            <div className="mt-2 font-mono text-lg font-semibold text-gray-900 dark:text-gray-100">
              {formatTimestampInTimezone(
                result.timestamp * 1000,
                selectedTimezone
              )}
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50/30 p-6 dark:border-cyan-800 dark:bg-cyan-950/10">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          About Unix Timestamps
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            Unix timestamp (also known as Epoch time) is a system for tracking
            time as a running total of seconds since January 1, 1970 00:00:00
            UTC (the Unix Epoch).
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-1">
            <li>
              <strong>Seconds:</strong> Standard Unix timestamp (10 digits)
            </li>
            <li>
              <strong>Milliseconds:</strong> JavaScript timestamp (13 digits)
            </li>
            <li>
              <strong>Microseconds:</strong> High-precision timestamp (16
              digits)
            </li>
            <li>
              <strong>Nanoseconds:</strong> Ultra-precise timestamp (19 digits)
            </li>
          </ul>
          <div className="mt-4 space-y-1">
            <div className="flex justify-between text-xs">
              <span className="font-medium">1 minute</span>
              <span className="font-mono">60 seconds</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="font-medium">1 hour</span>
              <span className="font-mono">3,600 seconds</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="font-medium">1 day</span>
              <span className="font-mono">86,400 seconds</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="font-medium">1 week</span>
              <span className="font-mono">604,800 seconds</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="font-medium">1 year (365.24 days)</span>
              <span className="font-mono">31,556,926 seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
