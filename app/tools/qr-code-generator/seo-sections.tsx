export function WhatIsQRCodeSection() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        What is a QR Code?
      </h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          A QR Code (Quick Response Code) is a two-dimensional barcode that
          stores information in a pattern of black squares on a white
          background. Developed in 1994 by Denso Wave for tracking automotive
          parts, QR codes have become ubiquitous in modern life for instantly
          accessing digital content via smartphone cameras.
        </p>
        <p>
          Unlike traditional barcodes that store data horizontally, QR codes
          store information both horizontally and vertically, allowing them to
          hold significantly more data—up to 4,296 alphanumeric characters or
          7,089 numeric characters. This makes them perfect for storing URLs,
          contact information, WiFi credentials, payment details, and much more.
        </p>
        <p>
          QR codes use error correction algorithms (Reed-Solomon) that allow
          them to remain readable even when partially damaged or obscured. With
          four error correction levels (L, M, Q, H), QR codes can recover from
          7% to 30% data loss, making them incredibly reliable for real-world
          use on posters, product packaging, business cards, and digital
          displays.
        </p>
        <p>
          The &quot;Quick Response&quot; name comes from the original intent: instant
          decoding. Modern smartphones can scan QR codes in milliseconds, making
          them ideal for contactless payments, restaurant menus, event
          check-ins, marketing campaigns, product authentication, and bridging
          the physical and digital worlds seamlessly.
        </p>
      </div>
    </section>
  );
}

export function QRCodeTypesSection() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        Types of QR Codes You Can Generate
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-6 dark:border-purple-800 dark:bg-purple-950/20">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            URL / Website QR Code
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Direct users to websites, landing pages, online stores, or social
            media profiles with a simple scan. Perfect for marketing materials,
            product packaging, posters, and print ads. Most common QR code type
            used for driving traffic from offline to online channels. No typing
            required—instant website access.
          </p>
        </div>
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-6 dark:border-purple-800 dark:bg-purple-950/20">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            Plain Text QR Code
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Store and display simple text messages, instructions, codes, or
            information that appears instantly when scanned. Works offline
            without internet connection. Ideal for product serial numbers, short
            messages, access codes, IoT device IDs, and information that needs
            to be quickly readable without network access.
          </p>
        </div>
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-6 dark:border-purple-800 dark:bg-purple-950/20">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            vCard / Contact Card QR Code
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Share complete contact information including name, phone, email,
            address, company, and website. Recipients can save directly to their
            phone contacts. Perfect for business cards, email signatures,
            conference badges, and networking events. Eliminates manual contact
            entry and ensures accurate information transfer.
          </p>
        </div>
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-6 dark:border-purple-800 dark:bg-purple-950/20">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            WiFi QR Code
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Allow instant WiFi connection without typing passwords. Store
            network name (SSID), password, and encryption type. Perfect for
            guest networks in offices, cafes, hotels, Airbnb properties, and
            homes. Scan and connect automatically—no password sharing or typing
            complex credentials on small phone keyboards.
          </p>
        </div>
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-6 dark:border-purple-800 dark:bg-purple-950/20">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            Email QR Code
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Pre-fill email recipient, subject, and message body. Users scan and
            their email app opens with everything ready to send. Ideal for
            customer support, feedback collection, inquiry forms, and making it
            effortless for customers to reach you. Increases response rates by
            removing friction from email communication.
          </p>
        </div>
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-6 dark:border-purple-800 dark:bg-purple-950/20">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            SMS / Text Message QR Code
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Pre-populate phone number and message text. Recipients scan and send
            the pre-written SMS with one tap. Useful for contests, opt-ins,
            feedback requests, keyword campaigns, event RSVPs, and instant
            text-based interactions. Makes SMS marketing and communication
            frictionless for users.
          </p>
        </div>
      </div>
    </section>
  );
}

export function UseCasesSection() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        Popular QR Code Use Cases
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
            📱 Marketing & Advertising
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Print ads, billboards, posters, flyers, magazine ads, and outdoor
            advertising. Drive traffic from physical media to digital campaigns.
            Track engagement and conversions from offline channels. Enable
            instant access to promotions, product info, and special offers.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
            💼 Business Cards
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Modern business cards with QR codes for instant contact saving.
            Include LinkedIn profile, portfolio website, or complete vCard data.
            Professional, memorable, and ensures accurate contact information
            transfer. No more manually typing contact details.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
            📦 Product Packaging
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Link to instruction manuals, product registration, warranty
            information, recipes, how-to videos, or authenticity verification.
            Reduce printed materials while providing more detailed product
            information. Enable smart packaging and customer engagement.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
            🍽️ Restaurant Menus
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Contactless digital menus that are easy to update. Display allergen
            information, nutritional data, and daily specials. Reduce printing
            costs and paper waste. Became essential during COVID-19 and remains
            popular for hygiene and convenience.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
            🎫 Event Management
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Digital tickets, event check-ins, attendee badges, and access
            control. Provide event schedules, maps, speaker information, and
            networking opportunities. Enable contactless entry and real-time
            attendance tracking for conferences, concerts, and festivals.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
            💳 Payments & Donations
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Contactless payments, digital wallets, cryptocurrency transfers, and
            donation collection. Popular in Asia and increasingly common
            worldwide. Faster than card payments with lower transaction fees.
            Perfect for street vendors, nonprofits, and peer-to-peer payments.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
            🏫 Education & Training
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Quick access to course materials, assignments, video lectures, and
            supplementary resources. Student attendance tracking, quiz access,
            and interactive learning experiences. Connect physical textbooks and
            classroom materials to digital content.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
            🏠 Real Estate
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Property listings, virtual tours, floor plans, and agent contact
            information on yard signs and brochures. Enable instant property
            details access for drive-by potential buyers. Schedule showings and
            access property videos without calling.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
            🏥 Healthcare
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Patient registration, appointment scheduling, medication
            information, prescription refills, and health records access.
            Hospital wayfinding and department information. Reduce paperwork and
            improve patient experience with contactless information access.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CustomizationSection() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        QR Code Customization Options
      </h2>
      <div className="space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            Colors & Styling
          </h3>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Customize foreground (dark modules) and background colors to match
            your brand identity. While black-on-white remains most scannable,
            colored QR codes work perfectly when maintaining sufficient
            contrast. Use brand colors to create visually appealing codes that
            integrate seamlessly with your design.
          </p>
          <ul className="ml-6 list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Maintain at least 3:1 contrast ratio for reliable scanning</li>
            <li>Dark foreground colors work best (black, navy, dark purple)</li>
            <li>Test QR codes on actual devices after customization</li>
            <li>
              Avoid low contrast combinations (yellow on white, light gray on
              white)
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            Logo Embedding
          </h3>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Add your company logo to the center of QR codes for brand
            recognition and professional appearance. Error correction allows
            logos to cover up to 30% of the QR code while maintaining
            scannability. Popular brands like Spotify, Instagram, and Snapchat
            use logo-embedded QR codes extensively.
          </p>
          <ul className="ml-6 list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Keep logo size reasonable (10-30% of QR code area)</li>
            <li>Use high error correction (Q or H level) when adding logos</li>
            <li>Simple, high-contrast logos work best</li>
            <li>Test scanning with logo from typical viewing distances</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            Error Correction Levels
          </h3>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            QR codes include error correction that allows them to be read even
            when partially damaged or obscured. Choose the appropriate level
            based on your use case and customization needs:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                Level L (Low) - 7% recovery
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Best for clean environments and maximum data storage. Use when
                QR code will be protected and printed clearly.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                Level M (Medium) - 15% recovery
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Balanced option suitable for most use cases. Good for business
                cards and indoor materials.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                Level Q (Quartile) - 25% recovery
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Recommended when adding logos or for outdoor use. Higher damage
                tolerance for harsh environments.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                Level H (High) - 30% recovery
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Maximum error correction for heavily customized codes or
                outdoor/industrial environments where damage is likely.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            Size & Resolution
          </h3>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            QR code size depends on scanning distance and complexity. More data
            requires larger QR codes with more modules (squares). Follow these
            guidelines for optimal scanning:
          </p>
          <ul className="ml-6 list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>
              <strong>Minimum size:</strong> 2cm × 2cm (0.8&quot; × 0.8&quot;) for
              close-up scanning
            </li>
            <li>
              <strong>Business cards:</strong> 2-3cm (0.8-1.2&quot;) works well
            </li>
            <li>
              <strong>Posters/Flyers:</strong> 5-10cm (2-4&quot;) for arm&apos;s-length
              scanning
            </li>
            <li>
              <strong>Billboards:</strong> Scale up based on viewing distance
              (10cm per meter of distance)
            </li>
            <li>
              <strong>Digital displays:</strong> Minimum 200×200px, recommend
              400×400px
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function BestPracticesSection() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
        QR Code Best Practices
      </h2>
      <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Test Before Printing:</strong> Always test your QR code on
            multiple devices (iPhone, Android, different scanning apps) before
            mass printing. Test under various lighting conditions and from
            expected scanning distances. What works on your computer screen
            might not work on physical materials.
          </p>
          <p>
            <strong>Provide Context:</strong> Add a clear call-to-action near
            your QR code: &quot;Scan to visit website,&quot; &quot;Scan for menu,&quot; &quot;Scan to
            connect to WiFi.&quot; Users are more likely to scan when they know what
            to expect. Include your logo or brand elements nearby for trust and
            recognition.
          </p>
          <p>
            <strong>Maintain Quiet Zone:</strong> Leave adequate white space
            (quiet zone) around your QR code—at least 4 modules (squares) wide
            on all sides. This border helps scanners detect the code edges.
            Don&apos;t crop QR codes too tightly or place them on busy backgrounds.
          </p>
          <p>
            <strong>Choose the Right Format:</strong> Use PNG for digital
            displays and most print materials. Use SVG for high-quality
            printing, signs, or when you need to scale the QR code to different
            sizes. SVG is vector-based and maintains perfect quality at any
            size.
          </p>
          <p>
            <strong>Consider Mobile Experience:</strong> Ensure the destination
            (website, landing page) is mobile-optimized. Most QR code scans come
            from mobile devices. A non-mobile-friendly destination ruins the
            user experience and wastes your QR code investment.
          </p>
          <p>
            <strong>Use URL Shorteners:</strong> Shorter URLs create simpler QR
            codes with fewer modules, making them easier to scan. They also look
            cleaner and allow for better error correction with logos. Plus, many
            URL shorteners provide analytics to track QR code performance.
          </p>
          <p>
            <strong>Avoid Extreme Customization:</strong> While creative designs
            are tempting, overly stylized QR codes may not scan reliably.
            Rounded corners, decorative patterns, or low contrast can cause
            scanning failures. When in doubt, choose functionality over
            creativity.
          </p>
        </div>
      </div>
    </section>
  );
}
