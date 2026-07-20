import type { Tool } from "@/lib/types/tool";

export const JsonFormatterToolConfig: Tool = {
  id: "json-formatter",
  name: "JSON Formatter",
  description: "Format, validate, minify, and beautify JSON with error detection",
  href: "/tools/json-formatter",
  group: "JSON",
  groupColor: "blue",
  groupIcon: "braces",
  keywords: [
    "json",
    "formatter",
    "validator",
    "beautifier",
    "minify",
    "pretty print"
  ],
  relatedTools: [
    "base64",
    "jwt-decoder",
    "url-encoder"
  ]
};

export default JsonFormatterToolConfig;
