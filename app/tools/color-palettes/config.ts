import type { Tool } from "@/lib/types/tool";

export const ColorPalettesToolConfig: Tool = {
  id: "color-palettes",
  name: "Color Palette Generator",
  description: "Generate beautiful color palettes using color theory harmonies",
  href: "/tools/color-palettes",
  group: "Color",
  groupColor: "pink",
  groupIcon: "palette",
  keywords: [
    "color",
    "palette",
    "harmony",
    "scheme",
    "generator"
  ],
  relatedTools: [
    "color-picker",
    "gradient-generator"
  ]
};

export default ColorPalettesToolConfig;
