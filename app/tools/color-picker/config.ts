import type { Tool } from "@/lib/types/tool";

export const ColorPickerToolConfig: Tool = {
  id: "color-picker",
  name: "Color Picker",
  description: "Pick colors, convert formats (HEX, RGB, HSL), and generate palettes",
  href: "/tools/color-picker",
  group: "Color",
  groupColor: "pink",
  groupIcon: "palette",
  keywords: [
    "color",
    "picker",
    "hex",
    "rgb",
    "hsl",
    "converter"
  ],
  relatedTools: [
    "color-palettes",
    "gradient-generator"
  ]
};

export default ColorPickerToolConfig;
