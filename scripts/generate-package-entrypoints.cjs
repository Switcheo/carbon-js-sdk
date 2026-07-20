const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const { assertSafeSubpath } = require("./package-entrypoint-paths.cjs");

const root = path.resolve(__dirname, "..");
const packagePath = path.join(root, "package.json");
const compatibilityPath = path.join(root, "tests/fixtures/legacy-package-files.json");
const stablePath = path.join(__dirname, "public-entrypoints.json");
const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const compatibility = JSON.parse(fs.readFileSync(compatibilityPath, "utf8"));
const stable = JSON.parse(fs.readFileSync(stablePath, "utf8"));
for (const file of compatibility.paths) assertSafeSubpath("legacy package path", file);
const digest = crypto.createHash("sha256").update(`${compatibility.paths.join("\n")}\n`).digest("hex");
if (digest !== compatibility.pathSha256 || compatibility.paths.length !== compatibility.fileCount) {
  throw new Error("legacy package-file fixture failed its source digest");
}

const exportsMap = {};
const typeMappings = {};

function add(key, value) {
  if (exportsMap[key] && JSON.stringify(exportsMap[key]) !== JSON.stringify(value)) {
    throw new Error(`conflicting export mapping for ${key}`);
  }
  exportsMap[key] = value;
}

function addRuntime(publicPath, targetBase) {
  assertSafeSubpath("public entrypoint", publicPath, { allowRoot: true });
  assertSafeSubpath("entrypoint target", targetBase);
  const key = publicPath === "." ? "." : `./${publicPath}`;
  const value = {
    types: `./lib/${targetBase}.d.ts`,
    import: `./esm/${targetBase}.js`,
    require: `./lib/${targetBase}.js`,
    default: `./lib/${targetBase}.js`,
  };
  add(key, value);
  if (publicPath !== ".") typeMappings[publicPath] = [`lib/${targetBase}.d.ts`];
}

addRuntime(".", "index");
for (const [publicPath, targetBase] of Object.entries(stable)) {
  assertSafeSubpath("public entrypoint", publicPath);
  assertSafeSubpath("entrypoint target", targetBase);
}
const missingStableTargets = Object.entries(stable)
  .filter(([, targetBase]) => !fs.existsSync(path.join(root, "src", `${targetBase}.ts`)))
  .map(([publicPath, targetBase]) => `${publicPath} -> ${targetBase}`);
if (missingStableTargets.length) {
  throw new Error(`stable entrypoints target missing source files:\n${missingStableTargets.join("\n")}`);
}
for (const [publicPath, targetBase] of Object.entries(stable).sort(([a], [b]) => a.localeCompare(b))) {
  addRuntime(publicPath, targetBase);
}

const legacyJs = compatibility.paths.filter((entry) => entry.endsWith(".js"));
const legacyDeclarations = new Set(compatibility.paths.filter((entry) => entry.endsWith(".d.ts")));
for (const file of legacyJs) {
  const base = file.slice("lib/".length, -".js".length);
  if (!legacyDeclarations.has(`lib/${base}.d.ts`)) throw new Error(`missing declaration for ${file}`);
  addRuntime(`lib/${base}`, base);
  addRuntime(`lib/${base}.js`, base);
  if (base.endsWith("/index")) addRuntime(`lib/${base.slice(0, -"/index".length)}`, base);

  const stablePrefixes = [
    ["codec/Switcheo/carbon/", "codec/carbon/"],
    ["codec/cosmos/", "codec/cosmos/"],
  ];
  for (const [physicalPrefix, publicPrefix] of stablePrefixes) {
    if (!base.startsWith(physicalPrefix)) continue;
    const suffix = base.slice(physicalPrefix.length);
    addRuntime(`${publicPrefix}${suffix}`, base);
    addRuntime(`${publicPrefix}${suffix}.js`, base);
    if (suffix.endsWith("/export")) addRuntime(`${publicPrefix}${suffix.slice(0, -"/export".length)}`, base);
  }
}

for (const file of compatibility.paths.filter((entry) => entry.endsWith(".d.ts"))) {
  const key = `./${file}`;
  add(key, `./${file}`);
  typeMappings[file] = [file];
}
for (const file of compatibility.paths.filter((entry) => entry.endsWith(".json"))) {
  add(`./${file}`, `./${file}`);
}
add("./package.json", "./package.json");

const sortedExports = Object.fromEntries(Object.entries(exportsMap).sort(([a], [b]) => {
  if (a === ".") return -1;
  if (b === ".") return 1;
  return a.localeCompare(b);
}));
const sortedTypes = Object.fromEntries(Object.entries(typeMappings).sort(([a], [b]) => a.localeCompare(b)));
const expected = {
  module: "esm/index.js",
  files: ["lib/**/*", "esm/**/*", "README.md"],
  sideEffects: [],
  exports: sortedExports,
  typesVersions: { "*": sortedTypes },
};

if (process.argv.includes("--write")) {
  Object.assign(packageJson, expected);
  fs.writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);
  console.log(`wrote ${Object.keys(sortedExports).length} exports and ${Object.keys(sortedTypes).length} type mappings`);
} else {
  const actual = Object.fromEntries(Object.keys(expected).map((key) => [key, packageJson[key]]));
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error("package entrypoints are stale; run `yarn generate:entrypoints`");
  }
  console.log(`verified ${Object.keys(sortedExports).length} exports and ${Object.keys(sortedTypes).length} type mappings`);
}
