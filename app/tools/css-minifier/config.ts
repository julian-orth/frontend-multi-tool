import type { Tool } from "@/lib/types/tool";

export const CssMinifierToolConfig: Tool = {
  id: "css-minifier",
  name: "CSS Minifier/Beautifier",
  description: "Minify CSS to reduce file size or beautify for readability with instant formatting, comment preservation options, and zero data transmission",
  href: "/tools/css-minifier",
  group: "CSS",
  groupColor: "teal",
  groupIcon: "file-code",
  keywords: [
    "css",
    "minifier",
    "beautifier",
    "formatter",
    "compress",
    "optimize",
    "minify",
    "prettify",
    "format css"
  ],
  relatedTools: [
    "markdown-previewer"
  ]
};

export default CssMinifierToolConfig;
