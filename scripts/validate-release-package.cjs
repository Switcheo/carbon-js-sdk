#!/usr/bin/env node
/* global process, require */
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const [archive, expectedVersion] = process.argv.slice(2);
if (!archive || !expectedVersion) {
  console.error("usage: validate-release-package.cjs <archive.tgz> <expected-version>");
  process.exit(1);
}
if (!fs.existsSync(archive)) {
  throw new Error(`Package archive does not exist: ${archive}`);
}

function tar(...args) {
  const result = spawnSync("tar", args, { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(`tar ${args.join(" ")} failed: ${result.stderr.trim()}`);
  }
  return result.stdout;
}

const entries = new Set(tar("-tzf", archive).split("\n").filter(Boolean));
const required = [
  "package/package.json",
  "package/lib/index.js",
  "package/lib/index.d.ts",
  "package/esm/index.js",
  "package/esm/package.json",
  "package/lib/eth/abis/generated.js",
  "package/lib/eth/abis/generated.d.ts",
  "package/esm/eth/abis/generated.js",
  "package/README.md",
];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const absolute = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(absolute) : [absolute];
    });
}

const sourceRoot = path.resolve(__dirname, "../src");
const runtimeJsonAssets = walk(sourceRoot).filter((file) => file.endsWith(".json"));
if (runtimeJsonAssets.length === 0) {
  throw new Error("No runtime JSON assets were found under src; package validation cannot prove generated assets are present");
}
for (const asset of runtimeJsonAssets) {
  const relative = path.relative(sourceRoot, asset).split(path.sep).join("/");
  required.push(`package/lib/${relative}`, `package/esm/${relative}`);
}

const missing = required.filter((entry) => !entries.has(entry));
if (missing.length > 0) {
  throw new Error(`Package archive is missing required files:\n${missing.map((entry) => `- ${entry}`).join("\n")}`);
}

const manifest = JSON.parse(tar("-xOzf", archive, "package/package.json"));
if (manifest.name !== "carbon-js-sdk") {
  throw new Error(`Packed package name is ${manifest.name}; expected carbon-js-sdk`);
}
if (manifest.version !== expectedVersion) {
  throw new Error(`Packed package version is ${manifest.version}; expected ${expectedVersion}`);
}

console.log(`validated ${required.length} required package files, including ${runtimeJsonAssets.length} JSON assets in both builds`);
