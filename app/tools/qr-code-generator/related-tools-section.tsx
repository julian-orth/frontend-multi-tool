import React from "react";

export function RelatedToolsSection() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        Related Tools
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Enhance your QR code workflow with these related tools:
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <a
          href="/tools/base64"
          className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
        >
          <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
            Base64 Encoder
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Encode data for embedding in QR codes
          </p>
        </a>
        <a
          href="/tools/color-picker"
          className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-pink-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-pink-700"
        >
          <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-pink-600 dark:text-gray-50 dark:group-hover:text-pink-400">
            Color Picker
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Choose perfect colors for your custom QR codes
          </p>
        </a>
      </div>
    </section>
  );
}
