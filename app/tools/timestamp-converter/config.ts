import type { Tool } from "@/lib/types/tool";

export const TimestampConverterToolConfig: Tool = {
  id: "timestamp-converter",
  name: "Timestamp Converter",
  description: "Convert Unix timestamps to human-readable dates and vice versa, supporting milliseconds and multiple timezone formats instantly",
  href: "/tools/timestamp-converter",
  group: "Time",
  groupColor: "cyan",
  groupIcon: "clock",
  keywords: [
    "timestamp",
    "unix",
    "epoch",
    "date",
    "converter"
  ],
  relatedTools: [
    "uuid-decoder"
  ]
};

export default TimestampConverterToolConfig;
