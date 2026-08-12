"use client";

import { useEffect, useMemo } from "react";
import { useLocale } from "@/lib/contexts/locale-context";
import deLiteralsRaw from "@/public/locales/literals.de.json";
import enLiteralsRaw from "@/public/locales/literals.en.json";

type LiteralMap = Record<string, string>;

const deLiterals = deLiteralsRaw as LiteralMap;
const enLiterals = enLiteralsRaw as LiteralMap;

const TRANSLATABLE_ATTRS = ["placeholder", "title", "aria-label", "alt"];

function decodeHtml(value: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
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
