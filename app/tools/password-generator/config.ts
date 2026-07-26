import type { Tool } from "@/lib/types/tool";

export const PasswordGeneratorToolConfig: Tool = {
  id: "password-generator",
  name: "Password Generator",
  description:
    "Generate secure passwords and passphrases with entropy scoring, character controls, and bulk output for teams, vault setup, and account hardening",
  href: "/tools/password-generator",
  group: "Security",
  groupColor: "indigo",
  groupIcon: "shield",
  keywords: [
    "password generator",
    "secure password",
    "passphrase generator",
    "random password",
    "entropy",
    "password strength",
    "bulk password",
    "cryptographically secure",
  ],
  relatedTools: ["hash-generator", "base64", "jwt-decoder"],
};

export default PasswordGeneratorToolConfig;
