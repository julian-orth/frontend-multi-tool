import type { Tool } from "@/lib/types/tool";

export const LoremIpsumToolConfig: Tool = {
  id: "lorem-ipsum",
  name: "Lorem Ipsum Generator",
  description: "Generate classic placeholder text for designs, mockups, and prototypes",
  href: "/tools/lorem-ipsum",
  group: "Text",
  groupColor: "yellow",
  groupIcon: "file-text",
  keywords: [
    "lorem ipsum",
    "placeholder",
    "text",
    "generator",
    "dummy text"
  ],
  relatedTools: [
    "text-diff"
  ]
};

export default LoremIpsumToolConfig;
