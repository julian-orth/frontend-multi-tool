#!/usr/bin/env node

/**
 * Tool Generator CLI
 *
 * Scaffolds new tools with all required boilerplate:
 * - page.tsx with metadata
 * - UI component file
 * - utils.ts file
 * - config.ts file
 * - test file
 * - Registers config in app/tools/tool-configs.ts
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const VALID_GROUPS = [
  "JSON",
  "UUID",
  "Encoding",
  "Regex",
  "Color",
  "Text",
  "Time",
  "JWT",
  "CSS",
  "HTML",
  "Image",
  "Network",
  "Security",
  "Data",
];

const VALID_COLORS = [
  "blue",
  "purple",
  "green",
  "orange",
  "pink",
  "red",
  "indigo",
  "cyan",
  "teal",
  "yellow",
];

function parseArgs() {
  const args = {};
  process.argv.slice(2).forEach((arg) => {
    const [key, value] = arg.replace(/^--/, "").split("=");
    args[key] = value;
  });
  return args;
}

function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function toPascalCase(str) {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function generatePageTemplate(config) {
  const componentName = `${toPascalCase(config.id)}UI`;

  return `import Breadcrumb from "@/components/breadcrumb";
import type { Metadata } from "next";
import { ${componentName} } from "./${config.id}-ui";

export const metadata: Metadata = {
  title: "${config.name}",
  description: "${config.description}",
  keywords: [
    // Add relevant keywords
  ],
  openGraph: {
    title: "${config.name} — Frontend Tools Hub",
    description: "${config.description}",
    url: "/tools/${config.id}",
    siteName: "Frontend Tools Hub",
  },
  twitter: {
    card: "summary",
    title: "${config.name} — Frontend Tools Hub",
    description: "${config.description}",
  },
  alternates: {
    canonical: "/tools/${config.id}",
  },
};

export default function ${toPascalCase(config.id)}Page() {
  return (
    <div className="px-6 py-8">
      <div className="mb-8">
        <Breadcrumb />
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-black dark:text-white">
          ${config.name}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          ${config.description}
        </p>
      </div>

      <${componentName} />
    </div>
  );
}
`;
}

function generateUITemplate(config) {
  const componentName = `${toPascalCase(config.id)}UI`;

  return `"use client";

import { useState } from "react";

export function ${componentName}() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleProcess = () => {
    setOutput("Processing: " + input);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="space-y-6">
        <div>
          <label
            htmlFor="input"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Input
          </label>
          <textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-gray-900 focus:border-${config.color}-500 focus:ring-2 focus:ring-${config.color}-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
            rows={8}
            placeholder="Enter text here..."
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleProcess}
            className="rounded-lg bg-${config.color}-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-${config.color}-700 focus:ring-2 focus:ring-${config.color}-500 focus:ring-offset-2 focus:outline-none dark:bg-${config.color}-700 dark:hover:bg-${config.color}-600"
          >
            Process
          </button>
        </div>

        {output && (
          <div>
            <label
              htmlFor="output"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Output
            </label>
            <textarea
              id="output"
              value={output}
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              rows={8}
            />
          </div>
        )}
      </div>
    </div>
  );
}
`;
}

function generateUtilsTemplate(config) {
  return `/**
 * Utility functions for ${config.name}
 */

export function process${toPascalCase(config.id)}(input: string): string {
  return input;
}
`;
}

function generateConfigTemplate(config) {
  const varName = `${toPascalCase(config.id)}ToolConfig`;

  return `import type { Tool } from "@/lib/types/tool";

export const ${varName}: Tool = {
  id: "${config.id}",
  name: "${config.name}",
  description: "${config.description}",
  href: "/tools/${config.id}",
  group: "${config.group}",
  groupColor: "${config.color}",
  groupIcon: "${config.icon}",
  keywords: [],
  relatedTools: [],
};

export default ${varName};
`;
}

function generateTestTemplate(config) {
  const componentName = `${toPascalCase(config.id)}UI`;

  return `import { render, screen } from "@testing-library/react";
import { ${componentName} } from "./${config.id}-ui";

describe("${componentName}", () => {
  it("renders basic input and action controls", () => {
    render(<${componentName} />);

    expect(screen.getByLabelText(/input/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /process/i })).toBeInTheDocument();
  });
});
`;
}

function ensureToolConfigsIndex(indexPath) {
  if (fs.existsSync(indexPath)) return;

  const initial = `import type { Tool } from "@/lib/types/tool";

export const TOOL_CONFIGS: Tool[] = [];
`;

  fs.writeFileSync(indexPath, initial);
}

function registerInToolConfigs(config) {
  const indexPath = path.join(__dirname, "../app/tools/tool-configs.ts");
  ensureToolConfigsIndex(indexPath);

  const varName = `${toPascalCase(config.id)}ToolConfig`;
  const importLine = `import ${varName} from "./${config.id}/config";`;

  let content = fs.readFileSync(indexPath, "utf8");

  if (!content.includes(importLine)) {
    content = content.replace(
      /import type \{ Tool \} from "@\/lib\/types\/tool";\n/,
      `import type { Tool } from "@/lib/types/tool";\n${importLine}\n`
    );
  }

  if (!content.includes(`  ${varName},`)) {
    content = content.replace(/(export const TOOL_CONFIGS: Tool\[] = \[\n)([\s\S]*?)(\];)/, (_m, start, middle, end) => {
      const trimmed = middle.trimEnd();
      const nextMiddle = trimmed ? `${trimmed}\n  ${varName},\n` : `  ${varName},\n`;
      return `${start}${nextMiddle}${end}`;
    });
  }

  fs.writeFileSync(indexPath, content);
}

async function main() {
  console.log("🛠️  Tool Generator\n");

  const args = parseArgs();

  const config = {
    id:
      args.id ||
      toKebabCase(
        await prompt("Tool ID (kebab-case, e.g., 'my-awesome-tool'): ")
      ),
    name: args.name || (await prompt("Tool Name (e.g., 'My Awesome Tool'): ")),
    description:
      args.description ||
      (await prompt("Short Description (150-160 chars for SEO): ")),
    group: args.group || (await prompt(`Group (${VALID_GROUPS.join(", ")}): `)),
    color: args.color || (await prompt(`Color (${VALID_COLORS.join(", ")}): `)),
    icon: args.icon || (await prompt("Lucide Icon Name (e.g., 'zap'): ")),
  };

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(config.id)) {
    console.error("❌ Invalid ID. Must be kebab-case.");
    process.exit(1);
  }

  if (!VALID_GROUPS.includes(config.group)) {
    console.error(
      `❌ Invalid group. Must be one of: ${VALID_GROUPS.join(", ")}`
    );
    process.exit(1);
  }

  if (!VALID_COLORS.includes(config.color)) {
    console.error(
      `❌ Invalid color. Must be one of: ${VALID_COLORS.join(", ")}`
    );
    process.exit(1);
  }

  const toolDir = path.join(__dirname, "../app/tools", config.id);
  if (fs.existsSync(toolDir)) {
    console.error(`❌ Tool directory already exists: ${toolDir}`);
    process.exit(1);
  }

  console.log(`\n✅ Creating tool: ${config.name}`);
  console.log(`📁 Directory: ${toolDir}\n`);

  fs.mkdirSync(toolDir, { recursive: true });

  const files = [
    { name: "page.tsx", content: generatePageTemplate(config) },
    { name: `${config.id}-ui.tsx`, content: generateUITemplate(config) },
    { name: "utils.ts", content: generateUtilsTemplate(config) },
    { name: "config.ts", content: generateConfigTemplate(config) },
    { name: `${config.id}.test.tsx`, content: generateTestTemplate(config) },
  ];

  files.forEach((file) => {
    fs.writeFileSync(path.join(toolDir, file.name), file.content);
    console.log(`✅ Created: ${file.name}`);
  });

  registerInToolConfigs(config);
  console.log("✅ Registered in app/tools/tool-configs.ts\n");

  console.log("🎉 Tool scaffolded successfully!\n");
  console.log("Next steps:");
  console.log(`1. Implement tool logic in app/tools/${config.id}/${config.id}-ui.tsx`);
  console.log(`2. Add utility functions in app/tools/${config.id}/utils.ts`);
  console.log(`3. Fill keywords/relatedTools in app/tools/${config.id}/config.ts`);
  console.log(`4. Run npm run validate:tools && npm run test:ci`);
  console.log(`5. Test at http://localhost:3000/tools/${config.id}\n`);
}

main().catch((error) => {
  console.error("❌ Tool generator failed:", error);
  process.exit(1);
});
