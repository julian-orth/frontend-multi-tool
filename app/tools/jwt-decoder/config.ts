import type { Tool } from "@/lib/types/tool";

export const JwtDecoderToolConfig: Tool = {
  id: "jwt-decoder",
  name: "JWT Decoder",
  description: "Decode and inspect JSON Web Tokens (JWT) to view headers, payloads, and signatures for debugging authentication and authorization",
  href: "/tools/jwt-decoder",
  group: "JWT",
  groupColor: "red",
  groupIcon: "shield-check",
  keywords: [
    "jwt",
    "json web token",
    "decoder",
    "authentication"
  ],
  relatedTools: [
    "json-formatter",
    "base64"
  ]
};

export default JwtDecoderToolConfig;
