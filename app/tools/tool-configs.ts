import type { Tool } from "@/lib/types/tool";
import JsonFormatterToolConfig from "./json-formatter/config";
import UuidGeneratorToolConfig from "./uuid-generator/config";
import Base64ToolConfig from "./base64/config";
import RegexTesterToolConfig from "./regex-tester/config";
import ColorPickerToolConfig from "./color-picker/config";
import ColorPalettesToolConfig from "./color-palettes/config";
import GradientGeneratorToolConfig from "./gradient-generator/config";
import TimestampConverterToolConfig from "./timestamp-converter/config";
import TextDiffToolConfig from "./text-diff/config";
import JwtDecoderToolConfig from "./jwt-decoder/config";
import HashGeneratorToolConfig from "./hash-generator/config";
import PasswordGeneratorToolConfig from "./password-generator/config";
import MarkdownPreviewerToolConfig from "./markdown-previewer/config";
import CssMinifierToolConfig from "./css-minifier/config";
import QrCodeGeneratorToolConfig from "./qr-code-generator/config";

export const TOOL_CONFIGS: Tool[] = [
  JsonFormatterToolConfig,
  UuidGeneratorToolConfig,
  Base64ToolConfig,
  RegexTesterToolConfig,
  ColorPickerToolConfig,
  ColorPalettesToolConfig,
  GradientGeneratorToolConfig,
  TimestampConverterToolConfig,
  TextDiffToolConfig,
  JwtDecoderToolConfig,
  HashGeneratorToolConfig,
  PasswordGeneratorToolConfig,
  MarkdownPreviewerToolConfig,
  CssMinifierToolConfig,
  QrCodeGeneratorToolConfig,
];
