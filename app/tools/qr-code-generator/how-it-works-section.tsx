import React from "react";

export function HowItWorksSection() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        How QR Codes Work
      </h2>
      <div className="space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            QR Code Structure
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            QR codes have a specific structure that enables reliable scanning
            from any angle:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Position Detection Patterns:</strong> Three large squares
              in corners allow scanners to detect code orientation and position
              instantly
            </li>
            <li>
              <strong>Alignment Patterns:</strong> Smaller squares help scanners
              read distorted codes on curved or damaged surfaces
            </li>
            <li>
              <strong>Timing Patterns:</strong> Alternating modules between
              position markers help determine module density
            </li>
            <li>
              <strong>Format Information:</strong> Encodes error correction
              level and mask pattern used
            </li>
            <li>
              <strong>Data and Error Correction:</strong> Main area stores your
              encoded information plus redundancy for recovery
            </li>
            <li>
              <strong>Quiet Zone:</strong> White border around the code helps
              scanners distinguish it from surroundings
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            Scanning Process
          </h3>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            When you scan a QR code, here&apos;s what happens in milliseconds:
          </p>
          <ol className="ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Camera captures image and scanning software detects position
              markers
            </li>
            <li>Code orientation, size, and skew angle are calculated</li>
            <li>
              Timing patterns determine the grid size and module positions
            </li>
            <li>
              Data is read from modules (black = 1, white = 0) in specific
              pattern
            </li>
            <li>
              Error correction algorithms fix any corrupted or unclear modules
            </li>
            <li>Data is decoded according to the character encoding mode</li>
            <li>
              Result is presented to user (URL opens, text displays, contact
              saves, etc.)
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
