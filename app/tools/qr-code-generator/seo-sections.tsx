export function WhatIsQRCodeSection() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        What is a QR Code?
      </h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          A QR Code (Quick Response Code) is a two-dimensional barcode that
          stores information—like URLs, contact details, or WiFi
          credentials—in a pattern of black and white squares. Unlike
          traditional barcodes, QR codes hold data in both directions,
          letting them pack thousands of characters into a small space.
          Built-in error correction means a code can still scan correctly
          even if part of it is damaged or covered, and modern smartphones
          decode them instantly with the default camera app.
        </p>
      </div>
    </section>
  );
}

export function QuickFactsSection() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        Quick Facts
      </h2>
      <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Types:</strong> generate codes for URLs, plain text,
            vCard contacts, WiFi credentials, email, or SMS.
          </li>
          <li>
            <strong>Common uses:</strong> marketing materials, business
            cards, product packaging, restaurant menus, event tickets, and
            payments.
          </li>
          <li>
            <strong>Customization:</strong> add brand colors and a logo
            (up to ~30% of the code area) while keeping strong contrast.
          </li>
          <li>
            <strong>Error correction:</strong> choose L/M/Q/H depending on
            damage risk—use the higher Q or H levels when embedding a logo.
          </li>
          <li>
            <strong>Best practices:</strong> keep a quiet white border
            around the code, test scans on real devices before printing,
            and use SVG for large prints or PNG for screens.
          </li>
          <li>
            <strong>Privacy:</strong> everything is generated locally in
            your browser—no data is ever sent to a server.
          </li>
        </ul>
      </div>
    </section>
  );
}
