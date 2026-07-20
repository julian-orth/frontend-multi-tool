import type { Tool } from "@/lib/types/tool";

export const UrlEncoderToolConfig: Tool = {
  id: "url-encoder",
  name: "URL Encoder/Decoder",
  description: "Encode and decode URLs with percent encoding for safe transmission of special characters in web addresses and query parameters",
  href: "/tools/url-encoder",
  group: "Encoding",
  groupColor: "green",
  groupIcon: "binary",
  keywords: [
    "url",
    "encode",
    "decode",
    "percent encoding",
    "uri"
  ],
  relatedTools: [
    "base64",
    "json-formatter",
    "html-encoder"
  ]
};

export default UrlEncoderToolConfig;
