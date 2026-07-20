import type { Tool } from "@/lib/types/tool";

export const UuidGeneratorToolConfig: Tool = {
  id: "uuid-generator",
  name: "UUID Generator",
  description: "Generate RFC 4122 compliant UUIDs in multiple versions (v1, v3, v4, v5, v7, NIL) for databases, APIs, and distributed systems",
  href: "/tools/uuid-generator",
  group: "UUID",
  groupColor: "purple",
  groupIcon: "fingerprint",
  keywords: [
    "uuid",
    "guid",
    "unique identifier",
    "generator"
  ],
  relatedTools: [
    "uuid-validator",
    "uuid-decoder",
    "uuid-format-converter"
  ]
};

export default UuidGeneratorToolConfig;
