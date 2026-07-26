"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Copy, Check, Palette, RefreshCw } from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import {
  parseColor,
  getColorFormats,
  normalizeHex,
  generateLighterShades,
  generateDarkerShades,
  getComplementaryColor,
  getAnalogousColors,
  getTriadicColors,
  getTetradicColors,
  hasGoodContrast,
  getReadableTextColor,
  hslToRgb,
  rgbToHex,
  rgbToHsl,
  type RGB,
} from "./utils";

type PaletteType =
  | "complementary"
  | "analogous"
  | "triadic"
  | "tetradic"
  | "shades";

export function ColorPickerUI() {
  const [color, setColor] = useState("#3b82f6");
  const [inputValue, setInputValue] = useState("#3b82f6");
  const [alpha, setAlpha] = useState(1);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [paletteType, setPaletteType] = useState<PaletteType>("shades");
  const [isDragging, setIsDragging] = useState(false);
  const colorBoxRef = React.useRef<HTMLDivElement>(null);

  const handleColorInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);

      // Only commit as the active color once it parses to a valid one;
      // otherwise keep the last valid color while the user keeps typing.
      const parsed = parseColor(value);
      if (parsed) {
        setColor(normalizeHex(value));
      }
    },
    []
  );

  const handleNativePickerChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setColor(value);
      setInputValue(value);
    },
    []
  );

  const handleRandomColor = useCallback(() => {
    const randomHex = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setColor(randomHex);
    setInputValue(randomHex);
  }, []);

  const handleCopy = useCallback((text: string, format: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 1500);
  }, []);

  // Get current color formats
  const rgb = parseColor(color);
  const formats = rgb ? getColorFormats(rgb, alpha) : null;

  // Generate color palettes
  const getPaletteColors = useCallback((): string[] => {
    switch (paletteType) {
      case "complementary":
        return [color, getComplementaryColor(color)];
      case "analogous":
        return [color, ...getAnalogousColors(color)];
      case "triadic":
        return [color, ...getTriadicColors(color)];
      case "tetradic":
        return [color, ...getTetradicColors(color)];
      case "shades":
        return [
          ...generateLighterShades(color, 3).reverse(),
          color,
          ...generateDarkerShades(color, 3),
        ];
      default:
        return [color];
    }
  }, [color, paletteType]);

  const paletteColors = getPaletteColors();

  // Get contrast info
  const contrastInfo =
    rgb && hasGoodContrast(rgb, { r: 255, g: 255, b: 255 }, "AA");
  const textColor = rgb ? getReadableTextColor(rgb) : "#000000";

  // Get HSL values from current color
  const currentHsl = rgb
    ? rgbToHsl(rgb.r, rgb.g, rgb.b)
    : { h: 217, s: 91, l: 60 };
  const [hue, setHue] = useState(currentHsl.h);

  // Re-sync the hue slider whenever the active color changes from any
  // other source (hex input, native picker, random color) — hue can't be
  // derived inline here since dragging the slider itself needs to hold an
  // in-progress value independent of color's saturation/lightness.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHue(currentHsl.h);
  }, [currentHsl.h]);

  const handleHueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newHue = parseInt(e.target.value);
      setHue(newHue);
      const rgb = hslToRgb(newHue, currentHsl.s, currentHsl.l);
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      setColor(hex);
      setInputValue(hex);
    },
    [currentHsl.s, currentHsl.l]
  );

  // Update color based on position in color box
  const updateColorFromPosition = useCallback(
    (clientX: number, clientY: number) => {
      if (!colorBoxRef.current) return;

      const rect = colorBoxRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

      // Calculate saturation (0-100) based on x position
      const saturation = Math.round((x / rect.width) * 100);
      // Calculate lightness (100-0) based on y position (inverted)
      const lightness = Math.round(100 - (y / rect.height) * 100);

      const rgb = hslToRgb(hue, saturation, lightness);
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      setColor(hex);
      setInputValue(hex);
    },
    [hue]
  );

  // Handle mouse down on color box
  const handleColorBoxMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      updateColorFromPosition(e.clientX, e.clientY);
    },
    [updateColorFromPosition]
  );

  // Handle mouse move (dragging)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateColorFromPosition(e.clientX, e.clientY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, updateColorFromPosition]);

  return (
    <div className="space-y-8">
      {/* Main Color Display */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Color Preview */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Select Color
            </label>
            <PrimaryButton
              onClick={handleRandomColor}
              variant="outline"
              className="ml-auto px-3 py-1 text-sm"
            >
              <RefreshCw className="mr-1 h-4 w-4" aria-hidden="true" />
              Random
            </PrimaryButton>
          </div>

          {/* Color Box - Saturation/Lightness Picker */}
          <div>
            <label className="mb-2 block text-xs font-medium text-gray-600 dark:text-gray-400">
              Click or drag to pick a color
            </label>
            <div
              ref={colorBoxRef}
              onMouseDown={handleColorBoxMouseDown}
              className="relative h-64 w-full cursor-crosshair rounded-xl border-2 border-pink-300 shadow-lg dark:border-pink-700"
              style={{
                background: `linear-gradient(to top, black, transparent), linear-gradient(to right, white, hsl(${hue}, 100%, 50%))`,
              }}
            >
              {/* Indicator dot for current color position */}
              <div
                className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-lg"
                style={{
                  left: `${currentHsl.s}%`,
                  top: `${100 - currentHsl.l}%`,
                  backgroundColor: color,
                }}
              />
            </div>
          </div>

          {/* Hue Slider */}
          <div>
            <label
              htmlFor="hue-slider"
              className="mb-2 flex items-center justify-between text-xs font-medium text-gray-600 dark:text-gray-400"
            >
              <span>Hue</span>
              <span className="font-mono">{hue}°</span>
            </label>
            <input
              id="hue-slider"
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={handleHueChange}
              className="h-3 w-full cursor-pointer appearance-none rounded-lg"
              style={{
                background:
                  "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)",
              }}
            />
          </div>

          {/* Text input */}
          <div>
            <label
              htmlFor="color-input"
              className="mb-2 block text-xs font-medium text-gray-600 dark:text-gray-400"
            >
              Or enter color value:
            </label>
            <input
              type="text"
              id="color-input"
              value={inputValue}
              onChange={handleColorInputChange}
              placeholder="e.g., #3b82f6, rgb(59, 130, 246), hsl(217, 91%, 60%)"
              className="w-full rounded-lg border border-pink-200 bg-white px-4 py-2 font-mono text-sm text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 dark:border-pink-800 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Large color preview */}
          <div
            className="relative h-48 rounded-xl border-2 border-pink-200 shadow-lg dark:border-pink-800"
            style={{ backgroundColor: color }}
          >
            <div
              className="absolute inset-x-0 bottom-0 flex items-center justify-center rounded-b-xl bg-black/50 py-4 backdrop-blur-sm"
              style={{ color: textColor }}
            >
              <p className="text-lg font-semibold">{color.toUpperCase()}</p>
            </div>
          </div>

          {/* Alpha slider */}
          <div>
            <label
              htmlFor="opacity-slider"
              className="mb-2 flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <span>Opacity</span>
              <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                {Math.round(alpha * 100)}%
              </span>
            </label>
            <input
              id="opacity-slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={alpha}
              onChange={(e) => setAlpha(parseFloat(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              style={{
                background: `linear-gradient(to right, transparent, ${color})`,
              }}
            />
          </div>
        </div>

        {/* Color Formats */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Color Formats
          </h3>

          {formats && (
            <div className="space-y-3">
              {Object.entries(formats).map(([format, value]) => (
                <div
                  key={format}
                  className="flex items-center gap-3 rounded-lg border border-pink-200 bg-pink-50/50 p-3 dark:border-pink-800 dark:bg-pink-950/20"
                >
                  <div className="flex-1">
                    <div className="mb-1 text-xs font-semibold text-gray-600 uppercase dark:text-gray-400">
                      {format}
                    </div>
                    <code className="text-sm text-gray-900 dark:text-gray-100">
                      {value}
                    </code>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(value, format)}
                    className="flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg text-pink-600 transition-colors hover:bg-pink-100 dark:text-pink-400 dark:hover:bg-pink-900/30"
                    title={`Copy ${format.toUpperCase()}`}
                  >
                    {copiedFormat === format ? (
                      <Check className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Contrast Info */}
          {rgb && contrastInfo && (
            <div className="rounded-lg border border-pink-200 bg-pink-50/50 p-4 dark:border-pink-800 dark:bg-pink-950/20">
              <div className="mb-2 flex items-center gap-2">
                <Palette
                  className="h-4 w-4 text-pink-600 dark:text-pink-400"
                  aria-hidden="true"
                />
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Accessibility
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    Contrast ratio (on white):
                  </span>
                  <span className="font-mono font-semibold text-gray-900 dark:text-gray-100">
                    {contrastInfo.ratio}:1
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    WCAG AA:
                  </span>
                  <span
                    className={`font-semibold ${
                      contrastInfo.passes
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {contrastInfo.passes ? "Pass" : "Fail"}
                  </span>
                </div>
                <div className="mt-3 flex gap-2">
                  <div
                    className="flex-1 rounded p-2 text-center text-xs font-medium"
                    style={{ backgroundColor: color, color: "#ffffff" }}
                  >
                    White Text
                  </div>
                  <div
                    className="flex-1 rounded p-2 text-center text-xs font-medium"
                    style={{ backgroundColor: color, color: "#000000" }}
                  >
                    Black Text
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Color Palettes */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Color Palettes
          </h3>
          <div className="flex flex-wrap gap-2">
            {(
              [
                "shades",
                "complementary",
                "analogous",
                "triadic",
                "tetradic",
              ] as PaletteType[]
            ).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setPaletteType(type)}
                className={`cursor-pointer rounded-lg px-4 py-1.5 text-xs font-medium capitalize transition-colors ${
                  paletteType === type
                    ? "bg-pink-600 text-white dark:bg-pink-500"
                    : "bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {paletteColors.map((paletteColor, index) => {
            const paletteRgb = parseColor(paletteColor);
            const paletteTextColor = paletteRgb
              ? getReadableTextColor(paletteRgb)
              : "#000000";

            return (
              <button
                key={`${paletteColor}-${index}`}
                type="button"
                onClick={() => {
                  setColor(paletteColor);
                  setInputValue(paletteColor);
                }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border-2 border-pink-200 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-pink-800"
                style={{ backgroundColor: paletteColor }}
                title={`Click to use ${paletteColor.toUpperCase()}`}
              >
                <div
                  className="absolute inset-x-0 bottom-0 bg-black/50 py-1 text-center font-mono text-xs font-semibold backdrop-blur-sm transition-opacity group-hover:opacity-100 sm:opacity-0"
                  style={{ color: paletteTextColor }}
                >
                  {paletteColor.toUpperCase()}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Info Section */}
      <div className="rounded-xl border border-pink-200 bg-pink-50/30 p-6 dark:border-pink-800 dark:bg-pink-950/10">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          About Color Formats
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            This color picker supports multiple color formats and provides
            instant conversion between them:
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-1">
            <li>
              <strong>HEX:</strong> Hexadecimal format (#RRGGBB), widely used in
              CSS and web design
            </li>
            <li>
              <strong>RGB:</strong> Red, Green, Blue values (0-255), intuitive
              for digital colors
            </li>
            <li>
              <strong>HSL:</strong> Hue, Saturation, Lightness, easier for color
              manipulation
            </li>
            <li>
              <strong>RGBA/HSLA:</strong> Same as RGB/HSL but with alpha channel
              for transparency
            </li>
          </ul>
          <p className="mt-3">
            Generate color palettes using color theory: complementary,
            analogous, triadic, tetradic, or lightness/darkness variations.
          </p>
        </div>
      </div>
    </div>
  );
}
