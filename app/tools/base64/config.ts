import type { Tool } from "@/lib/types/tool";

export const Base64ToolConfig: Tool = {
  id: "base64",
  name: "Base64 Encoder/Decoder",
  description: "Encode and decode Base64 strings for data transmission, encoding binary data, and working with APIs that require Base64 format",
  href: "/tools/base64",
  group: "Encoding",
  groupColor: "green",
  groupIcon: "binary",
  keywords: [
    "base64",
    "encode",
    "decode",
    "encoder",
    "decoder"
  ],
  relatedTools: [
    "url-encoder",
    "json-formatter",
    "html-encoder"
  ]
};

export default Base64ToolConfig;
