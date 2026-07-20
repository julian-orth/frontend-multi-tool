import type { Tool } from "@/lib/types/tool";

export const HtmlEncoderToolConfig: Tool = {
  id: "html-encoder",
  name: "HTML Encoder/Decoder",
  description: "Convert special characters to HTML entities and decode them back to plain text for XSS prevention, displaying code snippets, and safe character rendering",
  href: "/tools/html-encoder",
  group: "Encoding",
  groupColor: "green",
  groupIcon: "binary",
  keywords: [
    "html",
    "encode",
    "decode",
    "entities",
    "escape",
    "unescape",
    "xss",
    "security"
  ],
  relatedTools: [
    "url-encoder",
    "base64",
    "markdown-previewer"
  ]
};

export default HtmlEncoderToolConfig;
