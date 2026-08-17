"use client";
import React, { useState, useCallback } from "react";
import {
  Copy,
  Check,
  Download,
  Plus,
  Trash2,
  RefreshCw,
  ChevronDown,
  Sparkles,
  X,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { StyledSelect } from "@/components/styled-select";
import {
  PRESET_GRADIENTS,
  getCategories,
  generateGradientCSS,
  generateRandomGradient,
  exportGradient,
  type Gradient,
  type GradientType,
  type GradientStop,
} from "./utils";

type ExportFormat = "css" | "scss" | "tailwind" | "json" | "svg";
type ViewMode = "presets" | "custom";

export function GradientGeneratorUI() {
  const [viewMode, setViewMode] = useState<ViewMode>("presets");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedGradient, setSelectedGradient] = useState<Gradient | null>(
    null
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [exportFormat, setExportFormat] = useState<ExportFormat>("css");
  const [showExportMenu, setShowExportMenu] = useState(false);

  // Custom gradient editor state
  const [customGradient, setCustomGradient] = useState<Gradient>({
    id: "custom",
    name: "Custom Gradient",
    type: "linear",
    angle: 90,
    stops: [
      { color: "#667eea", position: 0 },
      { color: "#764ba2", position: 100 },
    ],
  });

  const categories = ["All", ...getCategories()];

  // Filter gradients by category
  const filteredGradients =
    selectedCategory === "All"
      ? PRESET_GRADIENTS
      : PRESET_GRADIENTS.filter((g) => g.category === selectedCategory);

  // Copy gradient to clipboard
  const handleCopyGradient = useCallback((gradient: Gradient) => {
    const css = generateGradientCSS(gradient);
    navigator.clipboard.writeText(css);
    setCopiedId(gradient.id);
    setTimeout(() => setCopiedId(null), 1500);
  }, []);

  // Export gradient
  const handleExport = useCallback(
    (gradient: Gradient) => {
      const exported = exportGradient(gradient, exportFormat);
      navigator.clipboard.writeText(exported);
      setShowExportMenu(false);
    },
    [exportFormat]
  );

  // Download gradient
  const handleDownload = useCallback(
    (gradient: Gradient) => {
      const exported = exportGradient(gradient, exportFormat);
      const extension = exportFormat === "svg" ? "svg" : "txt";
      const blob = new Blob([exported], {
        type: exportFormat === "svg" ? "image/svg+xml" : "text/plain",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${gradient.id}.${extension}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setShowExportMenu(false);
    },
    [exportFormat]
  );

  // Custom gradient functions
  const handleAddStop = useCallback(() => {
    const newPosition = 50;
    const newStop: GradientStop = {
      color: "#888888",
      position: newPosition,
    };
    setCustomGradient((prev) => ({
      ...prev,
      stops: [...prev.stops, newStop].sort((a, b) => a.position - b.position),
    }));
  }, []);

  const handleRemoveStop = useCallback((index: number) => {
    setCustomGradient((prev) => ({
      ...prev,
      stops: prev.stops.filter((_, i) => i !== index),
    }));
  }, []);

  const handleUpdateStop = useCallback(
    (index: number, updates: Partial<GradientStop>) => {
      setCustomGradient((prev) => ({
        ...prev,
        stops: prev.stops.map((stop, i) =>
          i === index ? { ...stop, ...updates } : stop
        ),
      }));
    },
    []
  );

  const handleRandomizeCustom = useCallback(() => {
    setCustomGradient(generateRandomGradient());
  }, []);

  const currentGradient =
    viewMode === "custom" ? customGradient : selectedGradient;

  return (
    <div className="space-y-8">
      {/* View Mode Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setViewMode("presets")}
            className={`inline-flex cursor-pointer items-center rounded-lg px-6 py-2.5 text-sm font-medium transition-colors ${
              viewMode === "presets"
                ? "bg-rose-600 text-white dark:bg-rose-500"
                : "bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:hover:bg-rose-900/50"
            }`}
          >
            <Sparkles className="mr-2 h-4 w-4" aria-hidden="true" />
            Preset Gradients
          </button>
          <button
            type="button"
            onClick={() => setViewMode("custom")}
            className={`inline-flex cursor-pointer items-center rounded-lg px-6 py-2.5 text-sm font-medium transition-colors ${
              viewMode === "custom"
                ? "bg-rose-600 text-white dark:bg-rose-500"
                : "bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:hover:bg-rose-900/50"
            }`}
          >
            Custom Gradient
          </button>
        </div>

        {currentGradient && (
          <div className="relative">
            <PrimaryButton
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Export
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </PrimaryButton>
            {showExportMenu && (
              <div className="absolute top-full right-0 z-10 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <div className="p-3">
                  <label className="mb-2 block text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Export Format
                  </label>
                  <div className="mb-3">
                    <StyledSelect
                      value={exportFormat}
                      onChange={(v) => setExportFormat(v as ExportFormat)}
                      options={[
                        { value: "css", label: "CSS" },
                        { value: "scss", label: "SCSS" },
                        { value: "tailwind", label: "Tailwind" },
                        { value: "json", label: "JSON" },
                        { value: "svg", label: "SVG" },
                      ]}
                      className="w-full border-gray-200 bg-white text-sm text-gray-900 focus:border-rose-500 focus:ring-rose-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                      listClassName="border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
                      optionActiveClassName="bg-rose-600 font-medium text-white dark:bg-rose-500"
                      optionClassName="text-gray-700 hover:bg-rose-50 dark:text-gray-300 dark:hover:bg-gray-800"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleExport(currentGradient)}
                      className="flex-1 cursor-pointer rounded-lg bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700"
                      title="Copy to clipboard"
                    >
                      <Copy className="mx-auto h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownload(currentGradient)}
                      className="flex-1 cursor-pointer rounded-lg bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700"
                      title="Download file"
                    >
                      <Download
                        className="mx-auto h-4 w-4"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Preset Gradients View */}
      {viewMode === "presets" && (
        <>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-rose-600 text-white dark:bg-rose-500"
                    : "bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:hover:bg-rose-900/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gradients Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGradients.map((gradient) => {
              const css = generateGradientCSS(gradient);
              const isCopied = copiedId === gradient.id;

              return (
                <div
                  key={gradient.id}
                  className="group relative overflow-hidden rounded-xl border-2 border-gray-200 shadow-sm transition-all hover:scale-105 hover:shadow-lg dark:border-gray-700"
                >
                  {/* Gradient Display */}
                  <div
                    className="relative h-40 cursor-pointer"
                    style={{ background: css }}
                    onClick={() => handleCopyGradient(gradient)}
                  >
                    {/* Copy Feedback */}
                    {isCopied && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900">
                          <Check className="h-4 w-4" aria-hidden="true" />
                          Copied!
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                      <Copy
                        className="h-8 w-8 text-white drop-shadow-lg"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Gradient Info */}
                  <div className="bg-white p-3 dark:bg-gray-900">
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                      {gradient.name}
                    </h4>
                    <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                      {gradient.type === "linear"
                        ? `${gradient.angle}°`
                        : gradient.type}
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopyGradient(gradient)}
                        className="flex-1 cursor-pointer rounded-lg bg-rose-100 px-3 py-1.5 text-xs font-medium text-rose-700 transition-colors hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:hover:bg-rose-900/50"
                      >
                        Copy CSS
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedGradient(gradient)}
                        className="cursor-pointer rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Custom Gradient Editor */}
      {viewMode === "custom" && (
        <div className="space-y-6">
          {/* Preview */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Preview
            </label>
            <div
              className="h-48 rounded-xl border-2 border-gray-200 shadow-lg dark:border-gray-700"
              style={{ background: generateGradientCSS(customGradient) }}
            />
          </div>

          {/* Gradient Type */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Gradient Type
            </label>
            <div className="flex gap-2">
              {(["linear", "radial", "conic"] as GradientType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() =>
                    setCustomGradient((prev) => ({ ...prev, type }))
                  }
                  className={`flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${
                    customGradient.type === type
                      ? "bg-rose-600 text-white dark:bg-rose-500"
                      : "bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:hover:bg-rose-900/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Angle Control (for linear gradients) */}
          {customGradient.type === "linear" && (
            <div>
              <label className="mb-2 flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                <span>Angle</span>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                  {customGradient.angle}°
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={customGradient.angle || 90}
                onChange={(e) =>
                  setCustomGradient((prev) => ({
                    ...prev,
                    angle: parseInt(e.target.value),
                  }))
                }
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>
          )}

          {/* Color Stops */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Color Stops
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleRandomizeCustom}
                  className="cursor-pointer rounded-lg bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:hover:bg-rose-900/50"
                >
                  <RefreshCw
                    className="mr-1 inline h-3 w-3"
                    aria-hidden="true"
                  />
                  Random
                </button>
                <button
                  type="button"
                  onClick={handleAddStop}
                  className="cursor-pointer rounded-lg bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:hover:bg-rose-900/50"
                >
                  <Plus className="mr-1 inline h-3 w-3" aria-hidden="true" />
                  Add Stop
                </button>
              </div>
            </div>
            <div className="space-y-3">
              {customGradient.stops
                .sort((a, b) => a.position - b.position)
                .map((stop, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900"
                  >
                    {/* Color Picker */}
                    <input
                      type="color"
                      value={stop.color}
                      onChange={(e) =>
                        handleUpdateStop(index, { color: e.target.value })
                      }
                      className="h-10 w-10 cursor-pointer rounded border-2 border-gray-300 dark:border-gray-600"
                    />

                    {/* Color Input */}
                    <input
                      type="text"
                      value={stop.color.toUpperCase()}
                      onChange={(e) =>
                        handleUpdateStop(index, { color: e.target.value })
                      }
                      className="w-24 rounded border border-gray-200 bg-white px-2 py-1 font-mono text-xs text-gray-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    />

                    {/* Position Slider */}
                    <div className="flex-1">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={stop.position}
                        onChange={(e) =>
                          handleUpdateStop(index, {
                            position: parseInt(e.target.value),
                          })
                        }
                        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                      />
                    </div>

                    {/* Position Input */}
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={stop.position}
                      onChange={(e) =>
                        handleUpdateStop(index, {
                          position: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-16 rounded border border-gray-200 bg-white px-2 py-1 text-center font-mono text-xs text-gray-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      %
                    </span>

                    {/* Delete Button */}
                    <button
                      type="button"
                      onClick={() => handleRemoveStop(index)}
                      disabled={customGradient.stops.length <= 2}
                      className="cursor-pointer rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50 dark:text-red-400 dark:hover:bg-red-900/20"
                      title="Remove stop"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* CSS Output */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              CSS Code
            </label>
            <div className="relative">
              <pre className="overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
                {generateGradientCSS(customGradient)}
              </pre>
              <button
                type="button"
                onClick={() => handleCopyGradient(customGradient)}
                className="absolute top-2 right-2 cursor-pointer rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-rose-700"
              >
                <Copy className="mr-1 inline h-3 w-3" aria-hidden="true" />
                Copy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="rounded-xl border border-rose-200 bg-rose-50/30 p-6 dark:border-rose-800 dark:bg-rose-950/10">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          How to Use
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Presets:</strong> Browse {PRESET_GRADIENTS.length} beautiful
            gradients organized by category. Click any gradient to copy its CSS
            code.
          </p>
          <p>
            <strong>Custom:</strong> Create your own gradients with the custom
            editor. Add color stops, adjust angles, and export in multiple
            formats.
          </p>
          <p>
            <strong>Export:</strong> Download or copy gradients in CSS, SCSS,
            Tailwind, JSON, or SVG format for use in your projects.
          </p>
        </div>
      </div>

      {/* Gradient Details Modal */}
      {selectedGradient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedGradient(null)}
        >
          <div
            className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {selectedGradient.name}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedGradient(null)}
                className="cursor-pointer rounded-lg p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                aria-label="Close"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div
              className="mb-4 h-32 w-full rounded-lg border border-gray-200 dark:border-gray-700"
              style={{ background: generateGradientCSS(selectedGradient) }}
            />

            <dl className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <dt className="text-gray-500 dark:text-gray-400">Type</dt>
              <dd className="text-gray-900 capitalize dark:text-gray-100">
                {selectedGradient.type}
              </dd>
              {selectedGradient.type === "linear" && (
                <>
                  <dt className="text-gray-500 dark:text-gray-400">Angle</dt>
                  <dd className="text-gray-900 dark:text-gray-100">
                    {selectedGradient.angle}°
                  </dd>
                </>
              )}
              {selectedGradient.category && (
                <>
                  <dt className="text-gray-500 dark:text-gray-400">
                    Category
                  </dt>
                  <dd className="text-gray-900 dark:text-gray-100">
                    {selectedGradient.category}
                  </dd>
                </>
              )}
            </dl>

            <div className="mb-4 flex flex-wrap gap-2">
              {selectedGradient.stops.map((stop, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 rounded-lg border border-gray-200 py-1 pr-2 pl-1 dark:border-gray-700"
                >
                  <div
                    className="h-5 w-5 rounded border border-gray-200 dark:border-gray-700"
                    style={{ backgroundColor: stop.color }}
                  />
                  <span className="font-mono text-xs text-gray-700 dark:text-gray-300">
                    {stop.color} · {stop.position}%
                  </span>
                </div>
              ))}
            </div>

            <code className="mb-4 block overflow-x-auto rounded-lg bg-gray-100 p-3 font-mono text-xs break-all text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {generateGradientCSS(selectedGradient)}
            </code>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleCopyGradient(selectedGradient)}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-700"
              >
                {copiedId === selectedGradient.id ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    Copy CSS
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setCustomGradient(selectedGradient);
                  setViewMode("custom");
                  setSelectedGradient(null);
                }}
                className="cursor-pointer rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Edit as Custom
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
