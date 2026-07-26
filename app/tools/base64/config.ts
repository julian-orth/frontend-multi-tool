import type { Tool } from "@/lib/types/tool";

export const Base64ToolConfig: Tool = {
  id: "base64",
  name: "Base64 / URL / HTML Encoder & Decoder",
  description: "Encode and decode Base64, URL, and HTML entities for data transmission, safe HTML rendering, and working with APIs that require encoded formats",
  href: "/tools/base64",
  group: "Encoding",
  groupColor: "green",
  groupIcon: "binary",
  keywords: [
    "base64",
    "url encoder",
    "html encoder",
    "encode",
    "decode",
    "encoder",
    "decoder"
  ],
  relatedTools: [
    "json-formatter",
    "jwt-decoder"
  ]
};

export default Base64ToolConfig;
