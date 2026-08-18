import React from "react";

export default function PrimaryButton({
  children,
  type = "button",
  variant = "solid",
  className = "",
  disabled = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex h-12 items-center justify-center rounded-xl px-4 font-semibold shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

  const solid =
    "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] focus:ring-[var(--primary)]";
  const outline =
    "border-2 border-[var(--primary-on-surface)] bg-[var(--card)] text-[var(--primary-on-surface)] hover:bg-[var(--paper-2)] focus:ring-[var(--primary)]";

  const classes = [base, variant === "solid" ? solid : outline, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
