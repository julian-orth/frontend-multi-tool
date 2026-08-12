import fs from "fs";
import path from "path";
import translate from "@vitalets/google-translate-api";

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

const pending = unique.filter((text) => !deMap[text]);
console.log(
  `Total literals: ${unique.length}, pending German translations: ${pending.length}`
);

const BATCH_SIZE = 12;
for (let i = 0; i < pending.length; i += BATCH_SIZE) {
  const batch = pending.slice(i, i + BATCH_SIZE);

  await Promise.all(
    batch.map(async (text) => {
      try {
        const result = await translate(text, { to: "de" });
        deMap[text] = result.text;
      } catch (error) {
        deMap[text] = text;
      }
    })
  );

  if ((i / BATCH_SIZE + 1) % 5 === 0) {
    fs.writeFileSync(deOutPath, JSON.stringify(deMap, null, 2) + "\n");
    console.log(
      `Progress: ${Math.min(i + BATCH_SIZE, pending.length)}/${pending.length}`
    );
  }
}

for (const text of unique) {
  if (!deMap[text]) deMap[text] = text;
}

fs.writeFileSync(enOutPath, JSON.stringify(enMap, null, 2) + "\n");
fs.writeFileSync(deOutPath, JSON.stringify(deMap, null, 2) + "\n");

console.log(`Wrote ${enOutPath}`);
console.log(`Wrote ${deOutPath}`);
