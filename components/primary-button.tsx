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
    "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600";
  const outline =
    "border-2 border-teal-600 bg-white text-teal-700 hover:bg-teal-50 focus:ring-teal-500 dark:border-teal-400 dark:bg-gray-950 dark:text-teal-300 dark:hover:bg-gray-900";

  const classes = [base, variant === "solid" ? solid : outline, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
