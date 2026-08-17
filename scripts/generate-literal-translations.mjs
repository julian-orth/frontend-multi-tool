import fs from "fs";
import path from "path";
import { translate } from "@vitalets/google-translate-api";

const ROOT = process.cwd();
const sourcePath = path.join(
  ROOT,
  "public/locales/frontend-visible-texts.json"
);
const deOutPath = path.join(ROOT, "public/locales/literals.de.json");
const enOutPath = path.join(ROOT, "public/locales/literals.en.json");

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Missing ${sourcePath}. Run text extraction first.`);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const entries = Object.values(source.files || {}).flat();
const unique = [...new Set(entries)].filter(
  (text) => typeof text === "string" && text.trim().length > 0
);

const existingDe = fs.existsSync(deOutPath)
  ? JSON.parse(fs.readFileSync(deOutPath, "utf8"))
  : {};

const deMap = { ...existingDe };
const enMap = {};

for (const text of unique) {
  enMap[text] = text;
}

const pending = unique.filter((text) => !deMap[text] || deMap[text] === text);
console.log(
  `Total literals: ${unique.length}, pending German translations: ${pending.length}`
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function translateWithRetry(text, attempts = 4) {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const result = await translate(text, { to: "de" });
      return result.text;
    } catch (error) {
      if (attempt === attempts) return text;
      const isRateLimit = error?.name === "TooManyRequestsError";
      await sleep(isRateLimit ? 4000 * attempt : 500 * attempt);
    }
  }
  return text;
}

const BATCH_SIZE = 5;
let failed = 0;
for (let i = 0; i < pending.length; i += BATCH_SIZE) {
  const batch = pending.slice(i, i + BATCH_SIZE);

  await Promise.all(
    batch.map(async (text) => {
      const translated = await translateWithRetry(text);
      deMap[text] = translated;
      if (translated === text) failed++;
    })
  );

  if ((i / BATCH_SIZE + 1) % 5 === 0) {
    fs.writeFileSync(deOutPath, JSON.stringify(deMap, null, 2) + "\n");
    console.log(
      `Progress: ${Math.min(i + BATCH_SIZE, pending.length)}/${pending.length}`
    );
  }

  await sleep(600);
}

if (failed > 0) {
  console.log(
    `Warning: ${failed} strings still untranslated after retries (rerun the script to try again).`
  );
}

for (const text of unique) {
  if (!deMap[text]) deMap[text] = text;
}

fs.writeFileSync(enOutPath, JSON.stringify(enMap, null, 2) + "\n");
fs.writeFileSync(deOutPath, JSON.stringify(deMap, null, 2) + "\n");

console.log(`Wrote ${enOutPath}`);
console.log(`Wrote ${deOutPath}`);
