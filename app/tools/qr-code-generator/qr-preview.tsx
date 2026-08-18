import React from "react";
import { Copy, Check, Download, QrCode } from "lucide-react";
import PrimaryButton from "@/components/primary-button";

interface QRPreviewProps {
  qrDataUrl: string | null;
  size: number;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  copied: boolean;
  onCopy: () => void;
  onDownload: (format: "png" | "svg") => void;
}

export function QRPreview({
  qrDataUrl,
  size,
  canvasRef,
  copied,
  onCopy,
  onDownload,
}: QRPreviewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
          Preview
        </h3>
        <div
          className="flex items-center justify-center overflow-auto rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800/50"
          style={{ minHeight: "400px" }}
          role="status"
          aria-live="polite"
        >
          {/* Canvas is always rendered but hidden when no QR code */}
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={qrDataUrl ? "Generated QR code" : undefined}
            className={`${qrDataUrl ? "" : "hidden"}`}
            style={{
              imageRendering: "crisp-edges",
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
          {!qrDataUrl && (
            <div className="text-center">
              <QrCode
                className="mx-auto mb-3 h-16 w-16 text-gray-400"
                aria-hidden="true"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter content and click Generate QR Code
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {qrDataUrl && (
        <div className="flex flex-wrap gap-3">
          <PrimaryButton onClick={onCopy} className="flex-1">
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" aria-hidden="true" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
                Copy as Image
              </>
            )}
          </PrimaryButton>
          <button
            type="button"
            onClick={() => onDownload("png")}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            PNG
          </button>
          <button
            type="button"
            onClick={() => onDownload("svg")}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            SVG
          </button>
        </div>
      )}
    </div>
  );
}
