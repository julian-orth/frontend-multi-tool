import type { ReactNode } from "react";

export function IconTooltip({
  label,
  children,
  align = "center",
  className,
}: {
  label: string;
  children: ReactNode;
  align?: "center" | "end";
  className?: string;
}) {
  return (
    <div className={`group relative inline-flex ${className ?? ""}`}>
      {children}
      <span
        className={`pointer-events-none absolute top-full z-50 mt-2 translate-y-1 border border-[var(--line)] bg-[var(--card)] px-2 py-1 text-xs font-medium whitespace-nowrap text-[var(--ink)] opacity-0 shadow-md transition-all duration-200 ease-out group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 ${
          align === "end" ? "right-0" : "left-1/2 -translate-x-1/2"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
