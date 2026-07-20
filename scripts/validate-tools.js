#!/usr/bin/env node

/**
 * Tool Validator Script
 *
 * Validates tool configs in tool folders and checks folder consistency:
 * - Required fields are present
 * - No duplicate IDs or hrefs
 * - Proper naming conventions
 * - Every config has a matching folder/page
 * - Every non-redirect tool folder has a config
 * - relatedTools references are valid
 */

const fs = require("fs");
const path = require("path");

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

function getToolFolders() {
  const toolsRoot = path.join(__dirname, "../app/tools");
  return fs
    .readdirSync(toolsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function extractConfigObject(configPath) {
  const content = fs.readFileSync(configPath, "utf8");
  const objectMatch = content.match(/const\s+\w+\s*:\s*Tool\s*=\s*({[\s\S]*?});/);

  if (!objectMatch) {
    throw new Error("Could not find `const <name>: Tool = { ... };` in config.ts");
  }

  const cleaned = objectMatch[1]
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "")
    .replace(/,(\s*[}\]])/g, "$1");

  return eval(`(${cleaned})`);
}

function loadConfigs() {
  const folders = getToolFolders();
  const tools = [];
  const warnings = [];

  for (const folder of folders) {
    const dirPath = path.join(__dirname, "../app/tools", folder);
    const pagePath = path.join(dirPath, "page.tsx");
    const configPath = path.join(dirPath, "config.ts");

    const hasPage = fs.existsSync(pagePath);
    if (!hasPage) {
      warnings.push(`Folder ${folder} has no page.tsx`);
      continue;
    }

    if (!fs.existsSync(configPath)) {
      const pageContent = fs.readFileSync(pagePath, "utf8");
      const isRedirectAlias = /redirect\(\s*["']\/tools\//.test(pageContent);

      if (isRedirectAlias) {
        warnings.push(`Folder ${folder} is a redirect alias and has no config.ts (allowed)`);
        continue;
      }

      throw new Error(`Folder ${folder} has page.tsx but no config.ts`);
    }

    let config;
    try {
      config = extractConfigObject(configPath);
    } catch (error) {
      throw new Error(`Failed to parse ${folder}/config.ts: ${error.message}`);
    }

    tools.push({ ...config, __folder: folder });
  }

  return { tools, warnings };
}

function validateTool(tool, allToolIds) {
  const errors = [];
  const warnings = [];

  if (!tool.id) {
    errors.push("Missing required field: id");
  } else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(tool.id)) {
    errors.push("id must be kebab-case (lowercase, hyphens only)");
  }

  if (tool.id && tool.__folder && tool.id !== tool.__folder) {
    errors.push(`id and folder mismatch: id=${tool.id}, folder=${tool.__folder}`);
  }

  if (!tool.name) {
    errors.push("Missing required field: name");
  }

  if (!tool.description) {
    errors.push("Missing required field: description");
  } else {
    const len = tool.description.length;
    if (len < 50) {
      warnings.push(`Description too short (${len} chars, aim for 150-160)`);
    } else if (len > 200) {
      warnings.push(`Description too long (${len} chars, aim for 150-160)`);
    }
  }

  if (!tool.href) {
    errors.push("Missing required field: href");
  } else if (!tool.href.startsWith("/tools/")) {
    errors.push("href must start with /tools/");
  } else if (tool.id && tool.href !== `/tools/${tool.id}`) {
    errors.push(`href should be /tools/${tool.id} (got ${tool.href})`);
  }

  if (!tool.group) {
    errors.push("Missing required field: group");
  } else if (!VALID_GROUPS.includes(tool.group)) {
    errors.push(`Invalid group: ${tool.group}`);
  }

  if (!tool.groupColor) {
    errors.push("Missing required field: groupColor");
  } else if (!VALID_COLORS.includes(tool.groupColor)) {
    errors.push(`Invalid groupColor: ${tool.groupColor}`);
  }

  if (!tool.groupIcon) {
    errors.push("Missing required field: groupIcon");
  }

  if (!tool.keywords || tool.keywords.length === 0) {
    warnings.push("No keywords defined (recommended for SEO)");
  }

  if (Array.isArray(tool.relatedTools)) {
    for (const relatedId of tool.relatedTools) {
      if (relatedId === tool.id) {
        errors.push("relatedTools contains self reference");
      }
      if (!allToolIds.has(relatedId)) {
        errors.push(`relatedTools contains unknown id: ${relatedId}`);
      }
    }
  }

  return { errors, warnings, toolId: tool.id || tool.__folder || "unknown" };
}

function validateRegistry(tools) {
  const errors = [];
  const warnings = [];

  const ids = new Map();
  const hrefs = new Map();

  tools.forEach((tool, index) => {
    if (tool.id) {
      if (ids.has(tool.id)) {
        errors.push(
          `Duplicate tool ID: ${tool.id} (indices ${ids.get(tool.id)}, ${index})`
        );
      } else {
        ids.set(tool.id, index);
      }
    }

    if (tool.href) {
      if (hrefs.has(tool.href)) {
        errors.push(
          `Duplicate href: ${tool.href} (indices ${hrefs.get(tool.href)}, ${index})`
        );
      } else {
        hrefs.set(tool.href, index);
      }
    }
  });

  if (tools.length === 0) {
    errors.push("No tools found in app/tools/*/config.ts");
  } else {
    warnings.push(`Total tools: ${tools.length}`);

    const groups = tools.reduce((acc, tool) => {
      acc[tool.group] = (acc[tool.group] || 0) + 1;
      return acc;
    }, {});

    const groupSummary = Object.entries(groups)
      .map(([group, count]) => `${group} (${count})`)
      .join(", ");
    warnings.push(`Tool groups: ${groupSummary}`);
  }

  return { errors, warnings };
}

function main() {
  console.log("🔍 Validating Tools Configuration...\n");

  let loaded;
  try {
    loaded = loadConfigs();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }

  const { tools, warnings: loadWarnings } = loaded;
  console.log(`Found ${tools.length} tool configs\n`);

  let hasErrors = false;

  const allToolIds = new Set(tools.map((tool) => tool.id));

  tools.forEach((tool) => {
    const result = validateTool(tool, allToolIds);

    if (result.errors.length > 0 || result.warnings.length > 0) {
      console.log(`\n📦 Tool: ${result.toolId}`);

      if (result.errors.length > 0) {
        hasErrors = true;
        console.log("  Errors:");
        result.errors.forEach((error) => console.log(`    ❌ ${error}`));
      }

      if (result.warnings.length > 0) {
        console.log("  Warnings:");
        result.warnings.forEach((warning) => console.log(`    ⚠️  ${warning}`));
      }
    }
  });

  const registryResult = validateRegistry(tools);

  if (
    loadWarnings.length > 0 ||
    registryResult.errors.length > 0 ||
    registryResult.warnings.length > 0
  ) {
    console.log("\n📋 Registry-Level Validation:");

    if (loadWarnings.length > 0) {
      console.log("  Notes:");
      loadWarnings.forEach((warning) => console.log(`    ℹ️  ${warning}`));
    }

    if (registryResult.errors.length > 0) {
      hasErrors = true;
      console.log("  Errors:");
      registryResult.errors.forEach((error) => console.log(`    ❌ ${error}`));
    }

    if (registryResult.warnings.length > 0) {
      console.log("  Info:");
      registryResult.warnings.forEach((warning) =>
        console.log(`    ℹ️  ${warning}`)
      );
    }
  }

  console.log("\n" + "=".repeat(50));
  if (hasErrors) {
    console.log("❌ Validation failed with errors");
    process.exit(1);
  }

  console.log("✅ All tools validated successfully!");
  process.exit(0);
}

main();
