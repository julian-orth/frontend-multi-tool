import type { Tool } from "@/lib/types/tool";

export const TextDiffToolConfig: Tool = {
  id: "text-diff",
  name: "Text Diff",
  description: "Compare text differences side-by-side with highlighted additions, deletions, and changes for easy code review and document comparison",
  href: "/tools/text-diff",
  group: "Text",
  groupColor: "yellow",
  groupIcon: "file-text",
  keywords: [
    "diff",
    "compare",
    "text",
    "difference",
    "merge"
  ],
  relatedTools: [
    "lorem-ipsum",
    "regex-tester"
  ]
};

export default TextDiffToolConfig;
