import React from "react";

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  id?: string;
  disabled?: boolean;
  helperText?: string | React.ReactNode;
  className?: string;
}

/**
 * Reusable checkbox component with consistent styling across the app.
 * Uses the shared primary color for a consistent selected state.
 */
export function Checkbox({
  checked,
  onChange,
  label,
  id,
  disabled = false,
  helperText,
  className = "",
}: CheckboxProps) {
  const checkboxId =
    id || `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <input
          id={checkboxId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-[var(--line)] bg-[var(--card)] shadow-sm transition-all duration-200 checked:border-[var(--primary)] checked:bg-[var(--primary)] checked:shadow-md hover:border-[var(--primary)] hover:shadow focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          style={{
            backgroundImage: checked
              ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`
              : undefined,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-describedby={
            helperText ? `${checkboxId}-description` : undefined
          }
        />
      </div>
      <div className="ml-3 min-w-0 flex-1">
        <label
          htmlFor={checkboxId}
          className={`text-sm font-medium text-gray-900 select-none dark:text-gray-100 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        >
          {label}
        </label>
        {helperText && (
          <p
            id={`${checkboxId}-description`}
            className="mt-0.5 text-xs break-words text-gray-500 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
}
