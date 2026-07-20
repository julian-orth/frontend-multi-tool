import { resolveToolIcon } from "@/lib/tools/icon-resolver";

export function ToolGroupIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const LucideIcon = resolveToolIcon(icon);
  return <LucideIcon className={className} />;
}
