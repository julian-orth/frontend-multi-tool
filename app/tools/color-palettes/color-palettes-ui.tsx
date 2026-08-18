"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  Copy,
  Check,
  RefreshCw,
  Lock,
  Unlock,
  Download,
  Sparkles,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { StyledSelect } from "@/components/styled-select";
import {
  generateMonochromaticPalette,
  generateAnalogousPalette,
  generateComplementaryPalette,
  generateTriadicPalette,
  generateTetradicPalette,
  generateSplitComplementaryPalette,
  generateRandomPalette,
  generatePastelPalette,
  generateVibrantPalette,
  generateDarkPalette,
  generateRandomColor,
  hexToRgb,
  getReadableTextColor,
  exportPalette,
} from "./utils";

type PaletteType =
  | "random"
  | "monochromatic"
  | "analogous"
  | "complementary"
  | "triadic"
  | "tetradic"
  | "split-complementary"
  | "pastel"
  | "vibrant"
  | "dark";

type ExportFormat = "css" | "scss" | "json" | "svg" | "tailwind" | "array";

// Static placeholder so server and client render the same markup on first
// paint; the real random palette is generated client-side after mount.
const DEFAULT_COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
];

export function ColorPalettesUI() {
  const [paletteType, setPaletteType] = useState<PaletteType>("random");
  const [colors, setColors] = useState<string[]>(DEFAULT_COLORS);
  const [lockedColors, setLockedColors] = useState<Set<number>>(new Set());
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [colorCount, setColorCount] = useState(5);
  const [exportFormat, setExportFormat] = useState<ExportFormat>("css");
  const [showExportMenu, setShowExportMenu] = useState(false);

  // Generate palette based on selected type
  const generatePalette = useCallback(
    (type: PaletteType = paletteType, baseColor?: string) => {
      const base = baseColor || generateRandomColor();
      let newColors: string[] = [];

      switch (type) {
        case "monochromatic":
          newColors = generateMonochromaticPalette(base, colorCount);
          break;
        case "analogous":
          newColors = generateAnalogousPalette(base, colorCount);
          break;
        case "complementary":
          newColors = generateComplementaryPalette(base);
          break;
        case "triadic":
          newColors = generateTriadicPalette(base);
          break;
        case "tetradic":
          newColors = generateTetradicPalette(base);
          break;
        case "split-complementary":
          newColors = generateSplitComplementaryPalette(base);
          break;
        case "pastel":
          newColors = generatePastelPalette(colorCount);
          break;
        case "vibrant":
          newColors = generateVibrantPalette(colorCount);
          break;
        case "dark":
          newColors = generateDarkPalette(colorCount);
          break;
        default:
          newColors = generateRandomPalette(colorCount);
      }

      // Preserve locked colors
      const finalColors = newColors.map((color, index) =>
        lockedColors.has(index) && colors[index] ? colors[index] : color
      );

      setColors(finalColors);
    },
    [paletteType, colorCount, lockedColors, colors]
  );

  // Replace the deterministic placeholder with a real random palette once
  // mounted, so the server-rendered HTML matches the client's first render.
  useEffect(() => {
    // Intentional: randomize only after mount so SSR output and the first
    // client render match; the randomized value can't be computed during
    // render without diverging from the server-rendered markup.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setColors(generateRandomPalette(colorCount));
    // Runs once on mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Toggle lock on a color
  const toggleLock = useCallback((index: number) => {
    setLockedColors((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  // Copy color to clipboard
  const handleCopyColor = useCallback((color: string, index: number) => {
    navigator.clipboard.writeText(color);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  }, []);

  // Handle color change from input
  const handleColorChange = useCallback((index: number, newColor: string) => {
    setColors((prev) => {
      const updated = [...prev];
      updated[index] = newColor;
      return updated;
    });
  }, []);

  // Export palette
  const handleExport = useCallback(() => {
    const exported = exportPalette(colors, exportFormat);
    navigator.clipboard.writeText(exported);
    setShowExportMenu(false);
    // Show toast or feedback
  }, [colors, exportFormat]);

  // Download palette as text file
  const handleDownload = useCallback(() => {
    const exported = exportPalette(colors, exportFormat);
    const extension = exportFormat === "svg" ? "svg" : "txt";
    const blob = new Blob([exported], {
      type: exportFormat === "svg" ? "image/svg+xml" : "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `palette-${Date.now()}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setShowExportMenu(false);
  }, [colors, exportFormat]);

  // Change palette type
  const handleTypeChange = useCallback(
    (type: PaletteType) => {
      setPaletteType(type);
      generatePalette(type);
    },
    [generatePalette]
  );

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Palette Type
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            <PrimaryButton
              onClick={() => generatePalette()}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Generate New
            </PrimaryButton>
            <div className="relative">
              <PrimaryButton
                onClick={() => setShowExportMenu(!showExportMenu)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Export
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
                          { value: "css", label: "CSS Variables" },
                          { value: "scss", label: "SCSS Variables" },
                          { value: "json", label: "JSON" },
                          { value: "svg", label: "SVG" },
                          { value: "tailwind", label: "Tailwind Config" },
                          { value: "array", label: "JavaScript Array" },
                        ]}
                        className="w-full border-gray-200 bg-white text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                        listClassName="border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
                        optionActiveClassName="bg-indigo-600 font-medium text-white dark:bg-indigo-500"
                        optionClassName="text-gray-700 hover:bg-indigo-50 dark:text-gray-300 dark:hover:bg-gray-800"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleExport}
                        className="flex-1 cursor-pointer rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                      >
                        <Copy className="mx-auto h-4 w-4" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={handleDownload}
                        className="flex-1 cursor-pointer rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
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
          </div>
        </div>

        {/* Palette Type Buttons */}
        <div className="flex flex-wrap gap-2">
          {(
            [
              "random",
              "monochromatic",
              "analogous",
              "complementary",
              "triadic",
              "tetradic",
              "split-complementary",
              "pastel",
              "vibrant",
              "dark",
            ] as PaletteType[]
          ).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleTypeChange(type)}
              className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${
                paletteType === type
                  ? "bg-indigo-600 text-white dark:bg-indigo-500"
                  : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50"
              }`}
            >
              {type === "split-complementary"
                ? "Split Comp."
                : type.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Color Count Slider */}
        {[
          "random",
          "monochromatic",
          "analogous",
          "pastel",
          "vibrant",
          "dark",
        ].includes(paletteType) && (
          <div>
            <label className="mb-2 flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
              <span>Number of Colors</span>
              <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                {colorCount}
              </span>
            </label>
            <input
              type="range"
              min="3"
              max="10"
              value={colorCount}
              onChange={(e) => {
                const newCount = parseInt(e.target.value);
                setColorCount(newCount);
                generatePalette(paletteType);
              }}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
            />
          </div>
        )}
      </div>

      {/* Color Palette Display */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {colors.map((color, index) => {
          const rgb = hexToRgb(color);
          const textColor = rgb ? getReadableTextColor(rgb) : "#000000";
          const isLocked = lockedColors.has(index);

          return (
            <div
              key={`${color}-${index}`}
              className="group relative overflow-hidden rounded-xl border-2 border-gray-200 shadow-sm transition-all hover:scale-105 hover:shadow-lg dark:border-gray-700"
            >
              {/* Color Display */}
              <div
                className="aspect-square cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => handleCopyColor(color, index)}
              >
                {/* Lock Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLock(index);
                  }}
                  className="absolute top-2 right-2 cursor-pointer rounded-lg bg-black/30 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/50"
                  title={isLocked ? "Unlock color" : "Lock color"}
                >
                  {isLocked ? (
                    <Lock
                      className="h-4 w-4"
                      style={{ color: textColor }}
                      aria-hidden="true"
                    />
                  ) : (
                    <Unlock
                      className="h-4 w-4"
                      style={{ color: textColor }}
                      aria-hidden="true"
                    />
                  )}
                </button>

                {/* Copy Feedback */}
                {copiedIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Copied!
                    </div>
                  </div>
                )}
              </div>

              {/* Color Info */}
              <div className="bg-white p-3 dark:bg-gray-900">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={color.toUpperCase()}
                    onChange={(e) => handleColorChange(index, e.target.value)}
                    className="w-full min-w-0 flex-1 rounded border border-gray-200 bg-white px-2 py-1 text-center font-mono text-xs font-semibold text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopyColor(color, index)}
                    aria-label="Copy HEX"
                    title="Copy HEX"
                    className="flex h-7 w-7 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 transition-colors hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50"
                  >
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Section */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50/30 p-6 dark:border-indigo-800 dark:bg-indigo-950/10">
        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          <Sparkles
            className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
            aria-hidden="true"
          />
          How to Use
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Generate:</strong> Click a palette type button or &quot;Generate
            New&quot; to create a new color scheme.
          </p>
          <p>
            <strong>Lock Colors:</strong> Click the lock icon on any color to
            keep it when generating new palettes.
          </p>
          <p>
            <strong>Copy:</strong> Click on a color swatch or the &quot;Copy HEX&quot;
            button to copy it to your clipboard.
          </p>
          <p>
            <strong>Edit:</strong> Type a HEX color directly into the input
            field to customize individual colors.
          </p>
          <p>
            <strong>Export:</strong> Use the Export button to copy or download
            your palette in various formats (CSS, SCSS, JSON, SVG, Tailwind,
            Array).
          </p>
        </div>
      </div>

      {/* Palette Theory Info */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
            Color Harmony Types
          </h4>
          <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
            <li>
              <strong>Monochromatic:</strong> Variations of a single hue
            </li>
            <li>
              <strong>Analogous:</strong> Colors adjacent on the wheel
            </li>
            <li>
              <strong>Complementary:</strong> Opposite colors (high contrast)
            </li>
            <li>
              <strong>Triadic:</strong> Three colors equally spaced
            </li>
            <li>
              <strong>Tetradic:</strong> Four colors in a square formation
            </li>
            <li>
              <strong>Split-Complementary:</strong> Base + two adjacent to
              complement
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
            Style Presets
          </h4>
          <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
            <li>
              <strong>Random:</strong> Harmonious random color combinations
            </li>
            <li>
              <strong>Pastel:</strong> Soft, light colors with low saturation
            </li>
            <li>
              <strong>Vibrant:</strong> Bright, highly saturated colors
            </li>
            <li>
              <strong>Dark:</strong> Deep, low-lightness colors for dark themes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
