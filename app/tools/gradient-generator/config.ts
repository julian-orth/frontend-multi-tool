import type { Tool } from "@/lib/types/tool";

export const GradientGeneratorToolConfig: Tool = {
  id: "gradient-generator",
  name: "Gradient Generator",
  description: "Create stunning CSS gradients with 45+ presets and custom options",
  href: "/tools/gradient-generator",
  group: "Color",
  groupColor: "pink",
  groupIcon: "palette",
  keywords: [
    "gradient",
    "css",
    "linear",
    "radial",
    "generator"
  ],
  relatedTools: [
    "color-picker",
    "color-palettes"
  ]
};

export default GradientGeneratorToolConfig;
