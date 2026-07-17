#!/usr/bin/env node
/* global __dirname, process, require */
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const codecRoot = path.join(root, "src/codec");
const generatedRoots = new Set([
  "carbon-models.ts", "cosmos-models.ts", "ethermint-models.ts", "ibc-models.ts", "polynetwork-models.ts",
  "model-namespaces.ts", "message-metadata.ts", "create-registry.ts", "registry.ts", "index.ts",
]);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const absolute = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(absolute) : [absolute];
    });
}
function manifest() {
  return walk(codecRoot)
    .filter((file) => path.basename(file) === "export.ts" || (path.dirname(file) === codecRoot && generatedRoots.has(path.basename(file))))
    .map((file) => {
      const relative = path.relative(root, file).split(path.sep).join("/");
      const hash = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
      return `${relative}\0${hash}`;
    });
}
function generate() {
  const result = spawnSync("bash", ["scripts/generate-registry.sh"], { cwd: root, encoding: "utf8", env: process.env });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout);
}

const before = manifest();
generate();
const once = manifest();
generate();
const twice = manifest();
if (JSON.stringify(before) !== JSON.stringify(once)) throw new Error("generated codec outputs differ from a clean regeneration");
if (JSON.stringify(once) !== JSON.stringify(twice)) throw new Error("generated codec outputs are not idempotent");
console.log(`verified ${twice.length} generated codec files across two runs`);
