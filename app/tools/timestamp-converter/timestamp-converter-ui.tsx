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
import { StyledSelect } from "@/components/styled-select";
import { useLocale } from "@/lib/contexts/locale-context";
import {
  timestampToDate,
  dateToTimestamp,
  getCurrentTimestamp,
  formatTimestampInTimezone,
  getCommonTimezones,
  type TimestampResult,
} from "./utils";
import { uiContent } from "./content";

type Mode = "to-date" | "to-timestamp";

export function TimestampConverterUI() {
  const { locale } = useLocale();
  const c = uiContent[locale];
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
      setCurrentTime(getCurrentTimestamp(c.timestampLabels));
    };
    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  }, [c]);

  const handleProcess = useCallback(() => {
    let processResult: TimestampResult;

    if (mode === "to-date") {
      processResult = timestampToDate(input, c.timestampLabels);
    } else {
      processResult = dateToTimestamp(input, c.timestampLabels);
    }

    setResult(processResult);
    setOutput(processResult.output);
  }, [input, mode, c]);

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
        <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-gray-700 dark:bg-gray-800/40">
          <div className="mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {c.currentTimestampTitle}
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {c.secondsLabel}
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                {currentTime.timestamp}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {c.millisecondsLabel}
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
            className={`inline-flex cursor-pointer items-center rounded-lg px-6 py-2 text-sm font-medium transition-colors ${
              mode === "to-date"
                ? "bg-cyan-600 text-white dark:bg-cyan-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
          >
            <Clock className="mr-2 h-4 w-4" aria-hidden="true" />
            {c.modeToDate}
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("to-timestamp");
              setOutput("");
              setResult(null);
            }}
            className={`inline-flex cursor-pointer items-center rounded-lg px-6 py-2 text-sm font-medium transition-colors ${
              mode === "to-timestamp"
                ? "bg-cyan-600 text-white dark:bg-cyan-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
          >
            <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
            {c.modeToTimestamp}
          </button>
        </div>

        <div className="ml-auto flex flex-wrap gap-2">
          <PrimaryButton onClick={handleProcess} className="px-6">
            {c.convertButton}
          </PrimaryButton>
          <PrimaryButton
            onClick={handleClear}
            variant="outline"
            className="px-4"
            aria-label={c.clearButtonAriaLabel}
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-cyan-200 bg-cyan-50/50 p-4 dark:border-gray-700 dark:bg-gray-800/40">
        <button
          type="button"
          onClick={handleLoadCurrent}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          {c.useCurrentTime}
        </button>
        <button
          type="button"
          onClick={handleLoadSample}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          {c.loadSample}
        </button>
        <div className="h-6 w-px bg-cyan-300 dark:bg-cyan-700" />
        <button
          type="button"
          onClick={() => handleQuickDate(-7)}
          className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          {c.quickDates.weekAgo}
        </button>
        <button
          type="button"
          onClick={() => handleQuickDate(-1)}
          className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          {c.quickDates.yesterday}
        </button>
        <button
          type="button"
          onClick={() => handleQuickDate(0)}
          className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          {c.quickDates.today}
        </button>
        <button
          type="button"
          onClick={() => handleQuickDate(1)}
          className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          {c.quickDates.tomorrow}
        </button>
        <button
          type="button"
          onClick={() => handleQuickDate(7)}
          className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:bg-gray-900 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          {c.quickDates.weekAhead}
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
            <p className="font-medium text-red-800 dark:text-red-200">
              {c.errorLabel}
            </p>
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
              {c.convertedSuccessfully}
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
              {c.inputLabel}{" "}
              {mode === "to-date" ? c.inputSuffixToDate : c.inputSuffixToTimestamp}
            </label>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {c.charsLabel(input.length)}
            </div>
          </div>
          <textarea
            id="timestamp-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "to-date" ? c.placeholderToDate : c.placeholderToTimestamp
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
              {c.outputLabel}{" "}
              {mode === "to-date" ? c.outputSuffixToDate : c.outputSuffixToTimestamp}
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
                      {c.copiedButton}
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" aria-hidden="true" />
                      {c.copyButton}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex cursor-pointer items-center gap-1 text-xs text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                >
                  <Download className="h-3 w-3" aria-hidden="true" />
                  {c.downloadButton}
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
                <p className="text-sm">{c.outputPlaceholder}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Timezone Converter */}
      {result && result.isValid && result.timestamp && (
        <div className="rounded-xl border border-cyan-200 bg-cyan-50/30 p-6 dark:border-gray-700 dark:bg-gray-800/30">
          <div className="mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {c.timezoneConverterTitle}
            </h3>
          </div>
          <div className="mb-4">
            <label
              htmlFor="timezone-select"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {c.selectTimezoneLabel}
            </label>
            <StyledSelect
              id="timezone-select"
              value={selectedTimezone}
              onChange={setSelectedTimezone}
              options={timezones.map((tz) => ({
                value: tz,
                label: tz.replace(/_/g, " "),
              }))}
              className="w-full border-cyan-200 bg-white text-sm font-medium text-gray-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-800 dark:bg-gray-900 dark:text-gray-300"
              listClassName="border-cyan-200 bg-white dark:border-cyan-800 dark:bg-gray-900"
              optionActiveClassName="bg-cyan-600 font-medium text-white dark:bg-cyan-500"
              optionClassName="text-gray-700 hover:bg-cyan-50 dark:text-gray-300 dark:hover:bg-gray-800"
            />
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
      <div className="rounded-xl border border-cyan-200 bg-cyan-50/30 p-6 dark:border-gray-700 dark:bg-gray-800/30">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {c.aboutTitle}
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>{c.aboutIntro}</p>
          <ul className="mt-2 ml-5 list-disc space-y-1">
            {c.formatList.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong> {item.text}
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-1">
            {c.conversionTable.map((row) => (
              <div key={row.label} className="flex justify-between text-xs">
                <span className="font-medium">{row.label}</span>
                <span className="font-mono">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
