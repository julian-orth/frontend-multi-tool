import type { Tool } from "@/lib/types/tool";

export const MarkdownPreviewerToolConfig: Tool = {
  id: "markdown-previewer",
  name: "Markdown Previewer",
  description: "Live markdown editor with instant preview, GitHub-flavored markdown support, syntax highlighting, and export to HTML for documentation and content creation",
  href: "/tools/markdown-previewer",
  group: "Text",
  groupColor: "yellow",
  groupIcon: "file-text",
  keywords: [
    "markdown",
    "md",
    "preview",
    "editor",
    "github flavored",
    "gfm",
    "syntax highlighting",
    "html export",
    "documentation"
  ],
  relatedTools: [
    "text-diff",
    "lorem-ipsum"
  ]
};

export default MarkdownPreviewerToolConfig;
