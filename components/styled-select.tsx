"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export interface StyledSelectOption<T extends string = string> {
  value: T;
  label: ReactNode;
  disabled?: boolean;
}

export interface StyledSelectProps<T extends string = string> {
  value: T;
  onChange: (value: T) => void;
  options: readonly StyledSelectOption<T>[];
  id?: string;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  disabled?: boolean;
  /** Classes for the trigger button — controls width, colors, borders. */
  className?: string;
  /** Classes for the popup list — controls colors, borders. */
  listClassName?: string;
  /** Classes applied to the currently selected option row. */
  optionActiveClassName?: string;
  /** Classes applied to unselected option rows (include hover states here). */
  optionClassName?: string;
}

const TRIGGER_BASE =
  "flex cursor-pointer items-center justify-between gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:outline-none";
const LIST_BASE =
  "absolute top-full left-0 z-10 mt-1 max-h-72 w-full min-w-max overflow-y-auto rounded-lg border py-1 shadow-lg";
const OPTION_BASE = "cursor-pointer px-4 py-2 text-sm transition-colors";
const TYPEAHEAD_RESET_MS = 600;

/**
 * A fully custom-styled dropdown (trigger button + listbox) that replaces the
 * native <select>, whose open option list can't be styled with CSS across
 * browsers. Supports arrow-key navigation, Home/End, Enter/Space, Escape,
 * and type-ahead-by-first-letter, mirroring native <select> keyboard behavior.
 */
export function StyledSelect<T extends string = string>({
  value,
  onChange,
  options,
  id,
  ariaLabelledBy,
  ariaLabel,
  disabled = false,
  className = "",
  listClassName = "",
  optionActiveClassName = "bg-indigo-600 font-medium text-white",
  optionClassName = "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
}: StyledSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const generatedId = useId();
  const optionIdPrefix = `${id ?? generatedId}-option`;
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);
  const typeaheadRef = useRef("");
  const typeaheadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const activeOption = options.find((option) => option.value === value);

  function labelToText(label: ReactNode): string {
    return typeof label === "string" ? label : "";
  }

  function firstEnabledIndex() {
    return options.findIndex((o) => !o.disabled);
  }
  function lastEnabledIndex() {
    for (let i = options.length - 1; i >= 0; i--) {
      if (!options[i].disabled) return i;
    }
    return -1;
  }
  function nextEnabledIndex(from: number, dir: 1 | -1) {
    if (options.length === 0) return from;
    let i = from;
    for (let step = 0; step < options.length; step++) {
      i = (i + dir + options.length) % options.length;
      if (!options[i].disabled) return i;
    }
    return from;
  }

  function selectIndex(index: number) {
    const option = options[index];
    if (!option || option.disabled) return;
    onChange(option.value);
    setOpen(false);
  }

  function openMenu() {
    const currentIndex = options.findIndex((o) => o.value === value);
    setHighlightedIndex(currentIndex >= 0 ? currentIndex : firstEnabledIndex());
    setOpen(true);
  }

  useEffect(() => {
    if (open) {
      optionRefs.current[highlightedIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [open, highlightedIndex]);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setOpen(false);
          break;
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((i) => nextEnabledIndex(i, 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((i) => nextEnabledIndex(i, -1));
          break;
        case "Home":
          e.preventDefault();
          setHighlightedIndex(firstEnabledIndex());
          break;
        case "End":
          e.preventDefault();
          setHighlightedIndex(lastEnabledIndex());
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          selectIndex(highlightedIndex);
          break;
        default:
          if (e.key.length === 1 && /\S/.test(e.key)) {
            if (typeaheadTimerRef.current) {
              clearTimeout(typeaheadTimerRef.current);
            }
            typeaheadRef.current += e.key.toLowerCase();
            const query = typeaheadRef.current;
            const startAt = (highlightedIndex + 1) % Math.max(options.length, 1);
            const match = options.findIndex(
              (o, idx) =>
                !o.disabled &&
                idx >= startAt &&
                labelToText(o.label).toLowerCase().startsWith(query)
            );
            const wrapped =
              match === -1
                ? options.findIndex(
                    (o) =>
                      !o.disabled &&
                      labelToText(o.label).toLowerCase().startsWith(query)
                  )
                : match;
            if (wrapped !== -1) setHighlightedIndex(wrapped);
            typeaheadTimerRef.current = setTimeout(() => {
              typeaheadRef.current = "";
            }, TYPEAHEAD_RESET_MS);
          }
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      if (typeaheadTimerRef.current) clearTimeout(typeaheadTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, highlightedIndex, options]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        id={id}
        disabled={disabled}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? `${optionIdPrefix}s` : undefined}
        aria-activedescendant={
          open ? `${optionIdPrefix}-${highlightedIndex}` : undefined
        }
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        onClick={() => (open ? setOpen(false) : openMenu())}
        className={`${TRIGGER_BASE} ${className} ${
          disabled ? "cursor-not-allowed opacity-60" : ""
        }`}
      >
        <span className="truncate">{activeOption?.label}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul
          id={`${optionIdPrefix}s`}
          role="listbox"
          aria-labelledby={ariaLabelledBy}
          className={`${LIST_BASE} ${listClassName}`}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`${optionIdPrefix}-${index}`}
              ref={(el) => {
                optionRefs.current[index] = el;
              }}
              role="option"
              aria-selected={option.value === value}
              aria-disabled={option.disabled}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => selectIndex(index)}
              className={`${OPTION_BASE} ${
                option.value === value ? optionActiveClassName : optionClassName
              } ${
                index === highlightedIndex && option.value !== value
                  ? "bg-black/5 dark:bg-white/10"
                  : ""
              } ${option.disabled ? "cursor-not-allowed opacity-50" : ""}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
