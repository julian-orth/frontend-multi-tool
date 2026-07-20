import type { Tool } from "@/lib/types/tool";

export const RegexTesterToolConfig: Tool = {
  id: "regex-tester",
  name: "Regex Tester",
  description: "Test and debug regular expressions with real-time pattern matching, capture groups, and detailed match highlighting for any text input",
  href: "/tools/regex-tester",
  group: "Regex",
  groupColor: "orange",
  groupIcon: "regex",
  keywords: [
    "regex",
    "regular expression",
    "tester",
    "pattern"
  ],
  relatedTools: [
    "text-diff"
  ]
};

export default RegexTesterToolConfig;
