import type { Tool } from "@/lib/types/tool";

export const UuidFormatConverterToolConfig: Tool = {
  id: "uuid-format-converter",
  name: "UUID Format Converter",
  description: "Convert UUIDs between formats (hyphens, uppercase, URN, etc.)",
  href: "/tools/uuid-format-converter",
  group: "UUID",
  groupColor: "purple",
  groupIcon: "fingerprint",
  keywords: [
    "uuid",
    "guid",
    "converter",
    "format"
  ],
  relatedTools: [
    "uuid-generator",
    "uuid-validator",
    "uuid-decoder"
  ]
};

export default UuidFormatConverterToolConfig;
