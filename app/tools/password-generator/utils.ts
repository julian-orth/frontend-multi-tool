export type GeneratorMode = "password" | "passphrase";

export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  customSymbols: string;
  excludeAmbiguous: boolean;
  requireEachSelectedSet: boolean;
  noRepeatedCharacters: boolean;
}

export interface PassphraseOptions {
  wordCount: number;
  separator: string;
  capitalization: "lower" | "title" | "upper";
  includeTrailingNumber: boolean;
  includeTrailingSymbol: boolean;
}

export interface GenerationResult {
  value: string;
  entropyBits: number;
  charsetSize: number;
}

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const DEFAULT_SYMBOLS = "!@#$%^&*()-_=+[]{};:,.?/";
const AMBIGUOUS = "Il1O0|`'\"";

const WORDS = [
  "anchor", "apple", "asteroid", "atlas", "aurora", "bamboo", "beacon", "berry", "blossom", "breeze",
  "bridge", "canyon", "cedar", "cipher", "cloud", "cobalt", "comet", "coral", "cosmos", "crystal",
  "delta", "desert", "drift", "echo", "ember", "falcon", "field", "flame", "forest", "frost",
  "galaxy", "garden", "glacier", "glimmer", "grove", "harbor", "horizon", "island", "jungle", "keystone",
  "lagoon", "lantern", "legend", "lilac", "lotus", "lunar", "maple", "meadow", "mercury", "meteor",
  "mist", "nebula", "oasis", "onyx", "orchard", "orbit", "panda", "pearl", "phoenix", "pine",
  "planet", "prairie", "quantum", "quartz", "raven", "reef", "river", "rocket", "saffron", "sage",
  "sapphire", "savanna", "shadow", "signal", "silver", "skyline", "solstice", "spruce", "star", "stone",
  "summit", "sunset", "thunder", "timber", "topaz", "torrent", "trident", "valley", "velvet", "vertex",
  "violet", "voyage", "willow", "winter", "zephyr", "zenith", "amber", "binary", "matrix", "vector",
  "engine", "packet", "socket", "kernel", "module", "thread", "script", "cipher", "token", "domain",
  "canvas", "flux", "origin", "pilot", "ripple", "signal", "tempo", "unit", "vortex", "warden",
];

function randomInt(maxExclusive: number): number {
  if (maxExclusive <= 0) {
    return 0;
  }

  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const random = new Uint32Array(1);
    crypto.getRandomValues(random);
    return random[0] % maxExclusive;
  }

  return Math.floor(Math.random() * maxExclusive);
}

function pickRandomChar(charset: string, randomizer = randomInt): string {
  return charset[randomizer(charset.length)];
}

function sanitizeCharset(value: string, excludeAmbiguous: boolean): string {
  const unique = Array.from(new Set(value.split("")));
  const filtered = excludeAmbiguous
    ? unique.filter((char) => !AMBIGUOUS.includes(char))
    : unique;
  return filtered.join("");
}

function buildCharacterSets(options: PasswordOptions): string[] {
  const sets: string[] = [];

  if (options.includeUppercase) {
    const chars = sanitizeCharset(UPPERCASE, options.excludeAmbiguous);
    if (chars) sets.push(chars);
  }
  if (options.includeLowercase) {
    const chars = sanitizeCharset(LOWERCASE, options.excludeAmbiguous);
    if (chars) sets.push(chars);
  }
  if (options.includeNumbers) {
    const chars = sanitizeCharset(NUMBERS, options.excludeAmbiguous);
    if (chars) sets.push(chars);
  }
  if (options.includeSymbols) {
    const symbols = options.customSymbols || DEFAULT_SYMBOLS;
    const chars = sanitizeCharset(symbols, options.excludeAmbiguous);
    if (chars) sets.push(chars);
  }

  return sets;
}

function shuffleCharacters(chars: string[], randomizer = randomInt): string {
  const copy = [...chars];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randomizer(index + 1);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy.join("");
}

export function generatePassword(
  options: PasswordOptions,
  randomizer: (maxExclusive: number) => number = randomInt
): GenerationResult {
  const length = Math.max(4, Math.min(256, Math.floor(options.length)));
  const sets = buildCharacterSets(options);

  if (sets.length === 0) {
    throw new Error("Select at least one character type.");
  }

  const unionSet = Array.from(new Set(sets.join("").split(""))).join("");

  if (options.noRepeatedCharacters && length > unionSet.length) {
    throw new Error(
      "No-repeat mode cannot create a password longer than the unique characters available in the selected sets."
    );
  }

  const chars: string[] = [];
  const usedChars = new Set<string>();

  if (options.requireEachSelectedSet) {
    sets.forEach((set) => {
      let char = pickRandomChar(set, randomizer);
      if (options.noRepeatedCharacters) {
        while (usedChars.has(char)) {
          char = pickRandomChar(set, randomizer);
        }
        usedChars.add(char);
      }
      chars.push(char);
    });
  }

  while (chars.length < length) {
    let char = pickRandomChar(unionSet, randomizer);
    if (options.noRepeatedCharacters) {
      while (usedChars.has(char)) {
        char = pickRandomChar(unionSet, randomizer);
      }
      usedChars.add(char);
    }
    chars.push(char);
  }

  const value = shuffleCharacters(chars, randomizer);
  const entropyBits = length * Math.log2(unionSet.length);

  return {
    value,
    entropyBits,
    charsetSize: unionSet.length,
  };
}

function transformWord(word: string, mode: PassphraseOptions["capitalization"]): string {
  if (mode === "upper") {
    return word.toUpperCase();
  }
  if (mode === "title") {
    return word[0].toUpperCase() + word.slice(1);
  }
  return word;
}

export function generatePassphrase(
  options: PassphraseOptions,
  randomizer: (maxExclusive: number) => number = randomInt
): GenerationResult {
  const count = Math.max(3, Math.min(24, Math.floor(options.wordCount)));
  const words: string[] = [];

  for (let index = 0; index < count; index += 1) {
    const word = WORDS[randomizer(WORDS.length)];
    words.push(transformWord(word, options.capitalization));
  }

  let value = words.join(options.separator);
  let entropyBits = count * Math.log2(WORDS.length);

  if (options.includeTrailingNumber) {
    value += `${options.separator}${pickRandomChar(NUMBERS, randomizer)}`;
    entropyBits += Math.log2(10);
  }

  if (options.includeTrailingSymbol) {
    value += `${options.separator}${pickRandomChar(DEFAULT_SYMBOLS, randomizer)}`;
    entropyBits += Math.log2(DEFAULT_SYMBOLS.length);
  }

  return {
    value,
    entropyBits,
    charsetSize: WORDS.length,
  };
}

export function formatEntropy(bits: number): string {
  return `${bits.toFixed(1)} bits`;
}

export function estimateStrength(bits: number): {
  label: "Very weak" | "Weak" | "Fair" | "Strong" | "Very strong";
  score: number;
  crackEstimate: string;
} {
  if (bits < 36) {
    return { label: "Very weak", score: 1, crackEstimate: "Seconds to minutes" };
  }
  if (bits < 50) {
    return { label: "Weak", score: 2, crackEstimate: "Hours to days" };
  }
  if (bits < 64) {
    return { label: "Fair", score: 3, crackEstimate: "Months to years" };
  }
  if (bits < 80) {
    return { label: "Strong", score: 4, crackEstimate: "Thousands of years" };
  }
  return { label: "Very strong", score: 5, crackEstimate: "Practically uncrackable" };
}

export function getStrengthBarClass(score: number): string {
  if (score <= 1) return "bg-red-500";
  if (score === 2) return "bg-orange-500";
  if (score === 3) return "bg-yellow-500";
  if (score === 4) return "bg-lime-500";
  return "bg-emerald-500";
}

export function getStrengthTextClass(score: number): string {
  if (score <= 1) return "text-red-700 dark:text-red-300";
  if (score === 2) return "text-orange-700 dark:text-orange-300";
  if (score === 3) return "text-yellow-700 dark:text-yellow-300";
  if (score === 4) return "text-lime-700 dark:text-lime-300";
  return "text-emerald-700 dark:text-emerald-300";
}
