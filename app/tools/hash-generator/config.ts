import type { Tool } from "@/lib/types/tool";

export const HashGeneratorToolConfig: Tool = {
  id: "hash-generator",
  name: "Hash Generator",
  description: "Generate cryptographic hashes (MD5, SHA-1, SHA-256, SHA-512) and HMAC for data integrity, password hashing, and checksums with instant browser-based processing",
  href: "/tools/hash-generator",
  group: "Security",
  groupColor: "indigo",
  groupIcon: "shield",
  keywords: [
    "hash",
    "md5",
    "sha1",
    "sha256",
    "sha512",
    "hmac",
    "checksum",
    "digest",
    "cryptographic",
    "password hash"
  ],
  relatedTools: [
    "base64",
    "jwt-decoder"
  ]
};

export default HashGeneratorToolConfig;
