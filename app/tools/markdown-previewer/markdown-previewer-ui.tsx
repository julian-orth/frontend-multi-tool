"use client";
import React, { useState, useCallback, useEffect } from "react";
import DOMPurify from "dompurify";
import {
  Copy,
  Check,
  Download,
  Trash2,
  Upload,
  FileText,
  Eye,
  Code2,
  SplitSquareHorizontal,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { Checkbox } from "@/components/checkbox";
import { parseMarkdown, type MarkdownOptions } from "./utils";
import { useDebouncedValue } from "@/lib/hooks/use-debounced-value";
import "./markdown-preview.css";

type ViewMode = "split" | "edit" | "preview";

export function MarkdownPreviewerUI() {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("split");
  const [livePreview, setLivePreview] = useState(true);
  const [enableGFM, setEnableGFM] = useState(true);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const renderMarkdown = useCallback(
    (text: string) => {
      const options: MarkdownOptions = { gfm: enableGFM, breaks: enableGFM };
      setHtml(DOMPurify.sanitize(parseMarkdown(text, options)));
    },
    [enableGFM]
  );

  // Live preview rendering, debounced so large documents don't re-parse on
  // every keystroke.
  const debouncedMarkdown = useDebouncedValue(markdown, 200);
  useEffect(() => {
    if (livePreview && debouncedMarkdown) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      renderMarkdown(debouncedMarkdown);
    } else if (!debouncedMarkdown) {
      setHtml("");
    }
  }, [debouncedMarkdown, livePreview, renderMarkdown]);

  const handleRender = useCallback(() => {
    renderMarkdown(markdown);
  }, [markdown, renderMarkdown]);

  const handleClear = useCallback(() => {
    setMarkdown("");
    setHtml("");
  }, []);

  const handleCopyMarkdown = useCallback(() => {
    navigator.clipboard.writeText(markdown);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 1500);
  }, [markdown]);

  const handleCopyHTML = useCallback(() => {
    navigator.clipboard.writeText(html);
    setCopiedHTML(true);
    setTimeout(() => setCopiedHTML(false), 1500);
  }, [html]);

  const handleDownloadMarkdown = useCallback(() => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `markdown-${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [markdown]);

  const handleDownloadHTML = useCallback(() => {
    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Markdown Export</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      color: #333;
    }
    code {
      background: #f4f4f4;
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
    }
    pre {
      background: #f4f4f4;
      padding: 1rem;
      border-radius: 5px;
      overflow-x: auto;
    }
    pre code {
      background: none;
      padding: 0;
    }
    blockquote {
      border-left: 4px solid #ddd;
      padding-left: 1rem;
      margin-left: 0;
      color: #666;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
    }
    table th,
    table td {
      border: 1px solid #ddd;
      padding: 0.5rem;
      text-align: left;
    }
    table th {
      background: #f4f4f4;
      font-weight: bold;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    a {
      color: #0366d6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
${html}
</body>
</html>`;

    const blob = new Blob([fullHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `markdown-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [html]);

  const handleLoadSample = useCallback(() => {
    const sampleMarkdown = `# Welcome to Markdown Previewer

## What is Markdown?

Markdown is a **lightweight markup language** that you can use to add formatting elements to plaintext text documents.

### Key Features

- Easy to learn and use
- Portable and platform-independent
- Can be converted to HTML and many other formats
- Widely used for documentation and README files

## Text Formatting

You can make text **bold** or *italic* or ***both***.

You can also ~~strikethrough~~ text (GFM).

## Lists

### Ordered List
1. First item
2. Second item
3. Third item

### Unordered List
- Item one
- Item two
  - Nested item
  - Another nested item
- Item three

## Code

Inline code: \`const hello = "world"\`

Code block:
\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");
\`\`\`

## Blockquotes

> This is a blockquote.
> It can span multiple lines.
>
> > Nested blockquotes are also possible.

## Links and Images

[Visit GitHub](https://github.com)

![Placeholder Image](https://via.placeholder.com/400x200?text=Markdown+Preview)

## Tables (GFM)

| Feature | Supported | Notes |
|---------|-----------|-------|
| Headers | ✅ | Six levels |
| Lists | ✅ | Ordered & unordered |
| Code blocks | ✅ | With syntax highlighting |
| Tables | ✅ | GFM extension |

## Task Lists (GFM)

- [x] Write sample markdown
- [x] Add syntax examples
- [ ] Create more tutorials
- [ ] Add emoji support

## Horizontal Rule

---

## Conclusion

Markdown is simple yet powerful. Start writing now!
`;
    setMarkdown(sampleMarkdown);
    setHtml("");
  }, []);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setMarkdown(content);
        setHtml("");
      };
      reader.onerror = () => {
        // Handle error silently or show message
      };
      reader.readAsText(file);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    []
  );

  const markdownChars = markdown.length;
  const hasContent = markdown.length > 0 || html.length > 0;

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4">
        {/* View Mode Toggle */}
        <div className="flex rounded-xl border border-yellow-200 bg-white p-1 dark:border-yellow-800 dark:bg-gray-900">
          <button
            type="button"
            onClick={() => setViewMode("split")}
            className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === "split"
                ? "bg-yellow-600 text-white dark:bg-yellow-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
            title="Split view"
          >
            <SplitSquareHorizontal className="h-4 w-4" aria-hidden="true" />
            Split
          </button>
          <button
            type="button"
            onClick={() => setViewMode("edit")}
            className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === "edit"
                ? "bg-yellow-600 text-white dark:bg-yellow-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
            title="Editor only"
          >
            <Code2 className="h-4 w-4" aria-hidden="true" />
            Edit
          </button>
          <button
            type="button"
            onClick={() => setViewMode("preview")}
            className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === "preview"
                ? "bg-yellow-600 text-white dark:bg-yellow-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
            title="Preview only"
          >
            <Eye className="h-4 w-4" aria-hidden="true" />
            Preview
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Checkbox
            checked={livePreview}
            onChange={setLivePreview}
            label="Live preview"
          />
          <Checkbox
            checked={enableGFM}
            onChange={setEnableGFM}
            label="GitHub-flavored"
          />
        </div>

        <div className="ml-auto flex flex-wrap gap-2">
          <PrimaryButton
            onClick={handleRender}
            className="px-6"
            disabled={livePreview}
          >
            Render
          </PrimaryButton>
          <PrimaryButton
            onClick={handleClear}
            variant="outline"
            className="px-4"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </div>

      {/* Load from File/Sample */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-yellow-200 bg-yellow-50/50 p-4 dark:border-yellow-800 dark:bg-yellow-950/20">
        <input
          ref={fileInputRef}
          type="file"
          accept=".md,.markdown,text/markdown,text/plain"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-yellow-700 transition-colors hover:bg-yellow-100 dark:bg-gray-900 dark:text-yellow-400 dark:hover:bg-gray-800"
        >
          <Upload className="h-4 w-4" aria-hidden="true" />
          Load .md file
        </label>
        <button
          type="button"
          onClick={handleLoadSample}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-yellow-700 transition-colors hover:bg-yellow-100 dark:bg-gray-900 dark:text-yellow-400 dark:hover:bg-gray-800"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Load sample
        </button>
      </div>

      {/* Editor and Preview Grid */}
      <div
        className={`grid gap-6 ${
          viewMode === "split"
            ? "lg:grid-cols-2"
            : viewMode === "edit"
              ? "grid-cols-1"
              : "grid-cols-1"
        }`}
      >
        {/* Editor */}
        {(viewMode === "split" || viewMode === "edit") && (
          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <label
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                htmlFor="markdown-input"
              >
                Markdown Editor
              </label>
              <div className="flex items-center gap-3">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {markdownChars.toLocaleString()} chars
                </div>
                {markdown && (
                  <>
                    <button
                      type="button"
                      onClick={handleCopyMarkdown}
                      className="flex cursor-pointer items-center gap-1 text-xs text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
                      disabled={copiedMarkdown}
                    >
                      {copiedMarkdown ? (
                        <>
                          <Check className="h-3 w-3" aria-hidden="true" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" aria-hidden="true" />
                          Copy
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadMarkdown}
                      className="flex cursor-pointer items-center gap-1 text-xs text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
                    >
                      <Download className="h-3 w-3" aria-hidden="true" />
                      .md
                    </button>
                  </>
                )}
              </div>
            </div>
            <textarea
              id="markdown-input"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="# Start writing markdown here...

Try adding **bold text**, *italics*, lists, code blocks, and more!

Press the 'Load sample' button to see examples."
              className="min-h-[500px] w-full flex-1 resize-y rounded-xl border border-yellow-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 dark:border-yellow-800 dark:bg-gray-900/60 dark:text-gray-100"
              spellCheck={false}
            />
          </div>
        )}

        {/* Preview */}
        {(viewMode === "split" || viewMode === "preview") && (
          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <div
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                role="heading"
                aria-level={3}
              >
                Preview
              </div>
              {html && (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleCopyHTML}
                    className="flex cursor-pointer items-center gap-1 text-xs text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
                    disabled={copiedHTML}
                  >
                    {copiedHTML ? (
                      <>
                        <Check className="h-3 w-3" aria-hidden="true" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" aria-hidden="true" />
                        Copy HTML
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadHTML}
                    className="flex cursor-pointer items-center gap-1 text-xs text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
                  >
                    <Download className="h-3 w-3" aria-hidden="true" />
                    .html
                  </button>
                </div>
              )}
            </div>
            <div className="relative min-h-[500px] w-full overflow-auto rounded-xl border border-yellow-200 bg-white p-8 dark:border-yellow-800 dark:bg-gray-900">
              {html ? (
                <div
                  className="markdown-preview"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ) : (
                <div className="flex min-h-[500px] items-center justify-center text-gray-500 dark:text-gray-400">
                  <p className="text-sm">
                    {livePreview
                      ? "Start typing to see live preview..."
                      : "Click 'Render' to preview your markdown..."}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Info Section */}
      {!hasContent && (
        <div className="rounded-xl border border-yellow-200 bg-yellow-50/30 p-6 dark:border-yellow-800 dark:bg-yellow-950/10">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
            About Markdown
          </h3>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              Markdown is a lightweight markup language for creating formatted
              text. It&apos;s widely used for documentation, README files, and
              content creation.
            </p>
            <ul className="mt-2 ml-5 list-disc space-y-1">
              <li>
                <strong>Live preview:</strong> See your markdown rendered in
                real-time as you type
              </li>
              <li>
                <strong>GitHub-flavored:</strong> Supports tables, task lists,
                strikethrough, and more
              </li>
              <li>
                <strong>Export options:</strong> Download as .md or .html with
                styling included
              </li>
              <li>
                <strong>Syntax highlighting:</strong> Code blocks with language
                support
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
