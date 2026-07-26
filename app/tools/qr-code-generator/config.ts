import type { Tool } from "@/lib/types/tool";

export const QrCodeGeneratorToolConfig: Tool = {
  id: "qr-code-generator",
  name: "QR Code Generator",
  description: "Generate customizable QR codes for URLs, text, vCards, WiFi, email, and SMS with color options, logo support, error correction levels, and instant download in PNG or SVG",
  href: "/tools/qr-code-generator",
  group: "Image",
  groupColor: "purple",
  groupIcon: "qr-code",
  keywords: [
    "qr code",
    "qr generator",
    "qr code maker",
    "barcode",
    "2d barcode",
    "vcard",
    "wifi qr",
    "url qr",
    "qr scanner",
    "custom qr"
  ],
  relatedTools: [
    "base64"
  ]
};

export default QrCodeGeneratorToolConfig;
