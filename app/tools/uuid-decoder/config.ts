import type { Tool } from "@/lib/types/tool";

export const UuidDecoderToolConfig: Tool = {
  id: "uuid-decoder",
  name: "UUID Decoder & Analyzer",
  description: "Decode and analyze UUIDs to extract detailed information including version, variant, timestamp, node ID, and clock sequence data",
  href: "/tools/uuid-decoder",
  group: "UUID",
  groupColor: "purple",
  groupIcon: "fingerprint",
  keywords: [
    "uuid",
    "guid",
    "decoder",
    "analyzer",
    "timestamp"
  ],
  relatedTools: [
    "uuid-generator",
    "uuid-validator",
    "uuid-format-converter"
  ]
};

export default UuidDecoderToolConfig;
