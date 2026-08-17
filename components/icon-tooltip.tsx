import type { ReactNode } from "react";

export function IconTooltip({
  label,
  children,
  align = "center",
  side = "bottom",
  className,
}: {
  label: string;
  children: ReactNode;
  align?: "center" | "end" | "responsive-end";
  side?: "bottom" | "right";
  className?: string;
}) {
  if (side === "right") {
    return (
      <div className={`group relative inline-flex ${className ?? ""}`}>
        {children}
        <span className="pointer-events-none absolute top-1/2 left-full z-50 ml-2 -translate-x-1 -translate-y-1/2 border border-[var(--line)] bg-[var(--tooltip-bg)] px-2 py-1 text-xs font-medium whitespace-nowrap text-[var(--tooltip-ink)] opacity-0 shadow-[0_8px_18px_rgba(15,23,42,0.2)] transition-all duration-200 ease-out md:group-focus-within:translate-x-0 md:group-focus-within:opacity-100 md:group-hover:translate-x-0 md:group-hover:opacity-100">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className={`group relative inline-flex ${className ?? ""}`}>
      {children}
      <span
        className={`pointer-events-none absolute top-full z-50 mt-2 translate-y-1 border border-[var(--line)] bg-[var(--tooltip-bg)] px-2 py-1 text-xs font-medium whitespace-nowrap text-[var(--tooltip-ink)] opacity-0 shadow-[0_8px_18px_rgba(15,23,42,0.2)] transition-all duration-200 ease-out group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 ${
          align === "end"
            ? "right-0"
            : align === "responsive-end"
              ? "right-0 min-[1400px]:right-auto min-[1400px]:left-1/2 min-[1400px]:-translate-x-1/2"
              : "left-1/2 -translate-x-1/2"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
