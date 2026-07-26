/**
 * Markdown parsing and rendering utilities
 * Uses marked library for markdown parsing with GFM support
 */

export interface MarkdownOptions {
  gfm?: boolean; // GitHub Flavored Markdown
  breaks?: boolean; // Convert \n to <br>
  sanitize?: boolean; // Sanitize HTML
}

/**
 * Parse markdown to HTML using a line-by-line parser
 * This is a lightweight implementation - for production, consider using marked.js
 */
export function parseMarkdown(
  markdown: string,
  options: MarkdownOptions = {}
): string {
  if (!markdown) return "";

  const { gfm = true, breaks = false } = options;

  const lines = markdown.split("\n");
  const result: string[] = [];
  let inCodeBlock = false;
  let codeBlockLang = "";
  let codeBlockContent: string[] = [];
  let inList = false;
  let listType: "ul" | "ol" | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code blocks
    if (line.trim().startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockLang = line.trim().slice(3) || "plaintext";
        codeBlockContent = [];
      } else {
        inCodeBlock = false;
        const code = codeBlockContent
          .join("\n")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        result.push(
          `<pre><code class="language-${codeBlockLang}">${code}</code></pre>`
        );
        codeBlockContent = [];
        codeBlockLang = "";
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // Close list if we're in one and this isn't a list item
    if (
      inList &&
      !line.match(/^(\s*)[-*+]\s+/) &&
      !line.match(/^(\s*)\d+\.\s+/) &&
      line.trim() !== ""
    ) {
      result.push(listType === "ul" ? "</ul>" : "</ol>");
      inList = false;
      listType = null;
    }

    // Empty line
    if (line.trim() === "") {
      if (inList) {
        result.push(listType === "ul" ? "</ul>" : "</ol>");
        inList = false;
        listType = null;
      }
      result.push("");
      continue;
    }

    // Headers
    const headerMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const text = processInline(headerMatch[2]);
      result.push(`<h${level}>${text}</h${level}>`);
      continue;
    }

    // Horizontal rules
    if (line.match(/^(---|___|\*\*\*)$/)) {
      result.push("<hr>");
      continue;
    }

    // Blockquotes
    if (line.match(/^>\s+/)) {
      const text = processInline(line.replace(/^>\s+/, ""));
      result.push(`<blockquote>${text}</blockquote>`);
      continue;
    }

    // Unordered lists
    const ulMatch = line.match(/^(\s*)[-*+]\s+(.+)$/);
    if (ulMatch) {
      if (!inList || listType !== "ul") {
        if (inList) result.push(listType === "ul" ? "</ul>" : "</ol>");
        result.push("<ul>");
        inList = true;
        listType = "ul";
      }

      const text = processInline(ulMatch[2]);

      // Task lists (GFM)
      if (gfm && text.match(/^\[[ x]\]\s+/)) {
        const checked = text.startsWith("[x]");
        const taskText = text.replace(/^\[[ x]\]\s+/, "");
        result.push(
          `<li><input type="checkbox" ${checked ? "checked" : ""} disabled> ${taskText}</li>`
        );
      } else {
        result.push(`<li>${text}</li>`);
      }
      continue;
    }

    // Ordered lists
    const olMatch = line.match(/^(\s*)\d+\.\s+(.+)$/);
    if (olMatch) {
      if (!inList || listType !== "ol") {
        if (inList) result.push(listType === "ul" ? "</ul>" : "</ol>");
        result.push("<ol>");
        inList = true;
        listType = "ol";
      }
      const text = processInline(olMatch[2]);
      result.push(`<li>${text}</li>`);
      continue;
    }

    // Tables (GFM)
    if (gfm && line.includes("|")) {
      // Check if next line is separator
      if (
        i + 1 < lines.length &&
        lines[i + 1].match(/^\|?\s*[-:|\s]+\s*\|?\s*$/)
      ) {
        const tableLines = [line, lines[i + 1]];
        i += 2; // Skip header and separator

        // Collect table body rows
        while (
          i < lines.length &&
          lines[i].includes("|") &&
          lines[i].trim() !== ""
        ) {
          tableLines.push(lines[i]);
          i++;
        }
        i--; // Back up one since loop will increment

        const tableHtml = parseTable(tableLines);
        result.push(tableHtml);
        continue;
      }
    }

    // Regular paragraph
    const text = processInline(line);
    result.push(`<p>${text}</p>`);
  }

  // Close any open list
  if (inList) {
    result.push(listType === "ul" ? "</ul>" : "</ol>");
  }

  return result.join("\n");
}

// Only allow link/image URLs that can't execute script (blocks
// javascript:, data:, vbscript:, etc.). Relative and anchor URLs have no
// scheme and are always allowed.
const SAFE_URL_SCHEMES = /^(https?|mailto|tel):/i;
function isSafeUrl(url: string): boolean {
  const trimmed = url.trim();
  if (/^(#|\/|\.\.?\/)/.test(trimmed)) return true;
  if (!/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return true;
  return SAFE_URL_SCHEMES.test(trimmed);
}

/**
 * Process inline markdown (bold, italic, code, links, etc.)
 */
function processInline(text: string): string {
  // Escape HTML entities, including quotes so nothing below can break out
  // of an attribute value it's interpolated into.
  let result = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  // Inline code (process first to protect code content)
  result = result.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Images (before links since they have similar syntax)
  result = result.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) =>
    isSafeUrl(url) ? `<img src="${url}" alt="${alt}" />` : match
  );

  // Links
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, url) =>
    isSafeUrl(url) ? `<a href="${url}">${label}</a>` : match
  );

  // Bold and italic (*** before ** and *)
  result = result.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  result = result.replace(/___(.+?)___/g, "<strong><em>$1</em></strong>");
  result = result.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/__(.+?)__/g, "<strong>$1</strong>");
  result = result.replace(/\*(.+?)\*/g, "<em>$1</em>");
  result = result.replace(/_(.+?)_/g, "<em>$1</em>");

  // Strikethrough (GFM)
  result = result.replace(/~~(.+?)~~/g, "<del>$1</del>");

  return result;
}

/**
 * Parse markdown table to HTML
 */
function parseTable(lines: string[]): string {
  if (lines.length < 2) return lines.join("\n");

  const headerCells = lines[0]
    .split("|")
    .filter((cell) => cell.trim())
    .map((cell) => `<th>${processInline(cell.trim())}</th>`)
    .join("");

  const bodyRows = lines
    .slice(2)
    .map((row) => {
      const cells = row
        .split("|")
        .filter((cell) => cell.trim())
        .map((cell) => `<td>${processInline(cell.trim())}</td>`)
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");

  return `<table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
}

/**
 * Get word count from markdown text
 */
export function getWordCount(markdown: string): number {
  // Remove markdown syntax
  const plainText = markdown
    .replace(/[#*_\[\]()]/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[.*?\]\(.*?\)/g, "")
    .trim();

  if (!plainText) return 0;

  return plainText.split(/\s+/).filter((word) => word.length > 0).length;
}

/**
 * Get character count (excluding spaces)
 */
export function getCharCount(markdown: string, excludeSpaces = false): number {
  if (excludeSpaces) {
    return markdown.replace(/\s/g, "").length;
  }
  return markdown.length;
}

/**
 * Get reading time estimate (assuming 200 words per minute)
 */
export function getReadingTime(markdown: string): number {
  const wordCount = getWordCount(markdown);
  const minutes = Math.ceil(wordCount / 200);
  return minutes;
}

/**
 * Extract headings from markdown for table of contents
 */
export function extractHeadings(markdown: string): Array<{
  level: number;
  text: string;
  id: string;
}> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Array<{ level: number; text: string; id: string }> = [];

  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    headings.push({ level, text, id });
  }

  return headings;
}
