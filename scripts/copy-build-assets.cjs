#!/usr/bin/env node
/* global __dirname, require */
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const source = path.join(root, "src");
const outputs = [path.join(root, "lib"), path.join(root, "esm")];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const absolute = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(absolute) : [absolute];
    });
}

const assets = walk(source).filter((file) => file.endsWith(".json"));
for (const asset of assets) {
  const relative = path.relative(source, asset);
  for (const output of outputs) {
    const destination = path.join(output, relative);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(asset, destination);
  }
}
console.log(`copied ${assets.length} JSON assets to each output`);
