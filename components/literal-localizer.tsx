"use client";

import { useEffect, useMemo } from "react";
import { useLocale } from "@/lib/contexts/locale-context";
import deLiteralsRaw from "@/public/locales/literals.de.json";
import enLiteralsRaw from "@/public/locales/literals.en.json";

type LiteralMap = Record<string, string>;

const deLiterals = deLiteralsRaw as LiteralMap;
const enLiterals = enLiteralsRaw as LiteralMap;

const TRANSLATABLE_ATTRS = ["placeholder", "title", "aria-label", "alt"];
const HTML_ENTITY_PATTERN =
  /&(?:amp|lt|gt|quot|apos|nbsp|copy|reg|trade|euro|#\d+|#x[0-9a-f]+);/gi;

export function decodeHtml(value: string): string {
  if (!value) return "";

  if (typeof document !== "undefined") {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = value;
    return textarea.value;
  }

  return value.replace(HTML_ENTITY_PATTERN, (match) => {
    const normalized = match.toLowerCase();

    switch (normalized) {
      case "&amp;":
        return "&";
      case "&lt;":
        return "<";
      case "&gt;":
        return ">";
      case "&quot;":
        return '"';
      case "&apos;":
        return "'";
      case "&nbsp;":
        return "\u00A0";
      case "&copy;":
        return "©";
      case "&reg;":
        return "®";
      case "&trade;":
        return "™";
      case "&euro;":
        return "€";
      default:
        if (normalized.startsWith("&#x")) {
          return String.fromCodePoint(parseInt(match.slice(3, -1), 16));
        }
        if (normalized.startsWith("&#")) {
          return String.fromCodePoint(Number(match.slice(2, -1)));
        }
        return match;
    }
  });
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function toLookupMap(map: LiteralMap): Map<string, string> {
  const lookup = new Map<string, string>();

  for (const [source, translated] of Object.entries(map)) {
    const sourceKey = normalizeText(decodeHtml(source));
    const translatedValue = decodeHtml(translated);
    if (!sourceKey || !translatedValue) continue;
    lookup.set(sourceKey, translatedValue);
  }

  return lookup;
}

function preserveEdgeWhitespace(original: string, translated: string): string {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function shouldSkipNode(node: Node): boolean {
  const parent = node.parentElement;
  if (!parent) return true;
  if (parent.closest("script, style, textarea, input, select, option")) {
    return true;
  }

  return false;
}

function translateTextNodes(root: Node, map: Map<string, string>) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    const textNode = walker.currentNode as Text;
    if (shouldSkipNode(textNode)) continue;
    nodes.push(textNode);
  }

  for (const node of nodes) {
    const original = node.textContent ?? "";
    const normalized = normalizeText(original);
    if (!normalized) continue;

    const translated = map.get(normalized);
    if (!translated || translated === normalized) continue;

    node.textContent = preserveEdgeWhitespace(original, translated);
  }
}

function translateAttributes(root: Element, map: Map<string, string>) {
  const selector = TRANSLATABLE_ATTRS.map((attr) => `[${attr}]`).join(",");
  const elements = root.matches(selector)
    ? [root, ...Array.from(root.querySelectorAll(selector))]
    : Array.from(root.querySelectorAll(selector));

  for (const element of elements) {
    for (const attr of TRANSLATABLE_ATTRS) {
      const current = element.getAttribute(attr);
      if (!current) continue;
      const normalized = normalizeText(current);
      const translated = map.get(normalized);
      if (!translated || translated === normalized) continue;
      element.setAttribute(attr, preserveEdgeWhitespace(current, translated));
    }
  }
}

export function LiteralLocalizer() {
  const { locale } = useLocale();

  const lookup = useMemo(() => {
    if (typeof window === "undefined") {
      return new Map<string, string>();
    }

    if (locale === "de") return toLookupMap(deLiterals);
    return toLookupMap(enLiterals);
  }, [locale]);

  useEffect(() => {
    const root = document.getElementById("main-content");
    if (!root) return;

    const runTranslation = () => {
      translateTextNodes(root, lookup);
      translateAttributes(root, lookup);
    };

    runTranslation();

    const observer = new MutationObserver(() => {
      runTranslation();
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: TRANSLATABLE_ATTRS,
    });

    return () => observer.disconnect();
  }, [lookup]);

  return null;
}
