import { resolveToolIcon } from "@/lib/tools/icon-resolver";

export function ToolGroupIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  // resolveToolIcon looks up a stable, module-level icon component from a
  // fixed table — it never creates a new component, the linter just can't
  // see through the function call to confirm that.
  /* eslint-disable react-hooks/static-components */
  const LucideIcon = resolveToolIcon(icon);
  return <LucideIcon className={className} />;
  /* eslint-enable react-hooks/static-components */
}
