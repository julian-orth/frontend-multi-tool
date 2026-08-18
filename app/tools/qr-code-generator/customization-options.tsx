import React from "react";
import { RefreshCw, QrCode } from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { StyledSelect } from "@/components/styled-select";
import { useLocale } from "@/lib/contexts/locale-context";
import type { ErrorCorrectionLevel } from "./utils";

interface CustomizationOptionsProps {
  errorLevel: ErrorCorrectionLevel;
  onErrorLevelChange: (level: ErrorCorrectionLevel) => void;
  foregroundColor: string;
  backgroundColor: string;
  onForegroundColorChange: (color: string) => void;
  onBackgroundColorChange: (color: string) => void;
  size: number;
  onSizeChange: (size: number) => void;
  onGenerate: () => void;
  onReset: () => void;
}

export function CustomizationOptions({
  errorLevel,
  onErrorLevelChange,
  foregroundColor,
  backgroundColor,
  onForegroundColorChange,
  onBackgroundColorChange,
  size,
  onSizeChange,
  onGenerate,
  onReset,
}: CustomizationOptionsProps) {
  const { locale } = useLocale();
  return (
    <div className="space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Customization
      </h3>

      {/* Error Correction Level */}
      <div>
        <label
          htmlFor="error-level"
          className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
        >
          Error Correction Level
        </label>
        <StyledSelect
          id="error-level"
          value={errorLevel}
          onChange={(v) => onErrorLevelChange(v as ErrorCorrectionLevel)}
          options={[
            {
              value: "low",
              label:
                locale === "de"
                  ? "Niedrig (7 % Erholung)"
                  : "Low (7% recovery)",
            },
            {
              value: "medium",
              label:
                locale === "de"
                  ? "Mittel (15 % Erholung)"
                  : "Medium (15% recovery)",
            },
            {
              value: "quartile",
              label:
                locale === "de"
                  ? "Quartil (25 % Erholung)"
                  : "Quartile (25% recovery)",
            },
            {
              value: "high",
              label:
                locale === "de"
                  ? "Hoch (30 % Erholung)"
                  : "High (30% recovery)",
            },
          ]}
          className="w-full border-gray-200 bg-white text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          listClassName="border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
          optionActiveClassName="bg-purple-600 font-medium text-white dark:bg-purple-500"
          optionClassName="text-gray-700 hover:bg-purple-50 dark:text-gray-300 dark:hover:bg-gray-800"
        />
      </div>

      {/* Colors */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fg-color"
            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Foreground Color
          </label>
          <div className="flex gap-2">
            <input
              id="fg-color"
              type="color"
              value={foregroundColor}
              onChange={(e) => onForegroundColorChange(e.target.value)}
              className="h-10 w-14 flex-shrink-0 cursor-pointer rounded-lg border-2 border-gray-300 sm:w-16 dark:border-gray-600"
            />
            <input
              type="text"
              value={foregroundColor.toUpperCase()}
              onChange={(e) => onForegroundColorChange(e.target.value)}
              placeholder="#000000"
              className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2 py-2 font-mono text-sm text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 sm:px-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="bg-color"
            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Background Color
          </label>
          <div className="flex gap-2">
            <input
              id="bg-color"
              type="color"
              value={backgroundColor}
              onChange={(e) => onBackgroundColorChange(e.target.value)}
              className="h-10 w-14 flex-shrink-0 cursor-pointer rounded-lg border-2 border-gray-300 sm:w-16 dark:border-gray-600"
            />
            <input
              type="text"
              value={backgroundColor.toUpperCase()}
              onChange={(e) => onBackgroundColorChange(e.target.value)}
              placeholder="#FFFFFF"
              className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2 py-2 font-mono text-sm text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 sm:px-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Size */}
      <div>
        <label
          htmlFor="size-slider"
          className="mb-2 flex items-center justify-between text-sm font-semibold text-gray-700 dark:text-gray-300"
        >
          <span>Size</span>
          <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
            {size}px
          </span>
        </label>
        <input
          id="size-slider"
          type="range"
          min="200"
          max="800"
          step="50"
          value={size}
          onChange={(e) => onSizeChange(parseInt(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <PrimaryButton onClick={onGenerate} className="flex-1">
          <QrCode className="mr-2 h-4 w-4" aria-hidden="true" />
          Generate QR Code
        </PrimaryButton>
        <button
          type="button"
          onClick={onReset}
          className="cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          aria-label="Reset to defaults"
          title="Reset to defaults"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
