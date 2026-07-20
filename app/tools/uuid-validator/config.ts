import type { Tool } from "@/lib/types/tool";

export const UuidValidatorToolConfig: Tool = {
  id: "uuid-validator",
  name: "UUID Validator",
  description: "Validate RFC 4122 compliant UUIDs instantly, check format correctness, determine version, and verify basic structural integrity",
  href: "/tools/uuid-validator",
  group: "UUID",
  groupColor: "purple",
  groupIcon: "fingerprint",
  keywords: [
    "uuid",
    "guid",
    "validator",
    "validate"
  ],
  relatedTools: [
    "uuid-generator",
    "uuid-decoder",
    "uuid-format-converter"
  ]
};

export default UuidValidatorToolConfig;
