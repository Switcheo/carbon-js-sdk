/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const digest = (value) => crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])]));
  }
  return value;
}

function namespaceShape(value, depth = 3, seen = new Set()) {
  if (depth === 0 || value === null) return typeof value;
  if (typeof value !== "object" && typeof value !== "function") return typeof value;
  if (seen.has(value)) return "<cycle>";
  seen.add(value);
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, namespaceShape(value[key], depth - 1, new Set(seen))]));
}

function reachableSources(entries) {
  const queue = [...entries];
  const visited = new Set();
  while (queue.length) {
    const relative = queue.pop();
    if (visited.has(relative)) continue;
    visited.add(relative);
    const source = read(relative);
    const directory = path.posix.dirname(relative);
    for (const match of source.matchAll(/(?:import|export)[\s\S]*?from\s+["'](\.[^"']+)["']/g)) {
      const unresolved = path.posix.normalize(path.posix.join(directory, match[1]));
      const candidates = [`${unresolved}.ts`, path.posix.join(unresolved, "index.ts")];
      const resolved = candidates.find((candidate) => fs.existsSync(path.join(root, candidate)));
      if (resolved) queue.push(resolved);
    }
  }
  return visited;
}

test("generated pure model and metadata entrypoints do not construct a Registry", () => {
  for (const relative of ["src/codec/model-namespaces.ts", "src/codec/message-metadata.ts"]) {
    const source = read(relative);
    assert.doesNotMatch(source, /@cosmjs\/proto-signing|new Registry\(|registry\.register\(/);
  }
  assert.doesNotMatch(read("src/codec/model-namespaces.ts"), /Exported for convenience/);

  const graph = reachableSources(["src/codec/model-namespaces.ts", "src/codec/message-metadata.ts"]);
  for (const relative of graph) {
    assert.doesNotMatch(relative, /src\/codec\/(?:create-registry|registry)\.ts$/);
    assert.doesNotMatch(read(relative), /@cosmjs\/proto-signing|new Registry\(|registry\.register\(/, relative);
  }
});

test("registry construction is explicit and the compatibility singleton remains isolated", () => {
  const factory = read("src/codec/create-registry.ts");
  const singleton = read("src/codec/registry.ts");
  assert.match(factory, /export function createRegistry\(\)/);
  assert.match(factory, /new Registry\(\)/);
  assert.match(singleton, /createRegistry\(\)/);
  assert.match(singleton, /export \{ createRegistry \}/);
  assert.doesNotMatch(read("src/codec/index.ts"), /new Registry\(|registry\.register\(/);
  assert.doesNotMatch(read("src/codec/index.ts"), /export \* from "\.\/registry"/);
});

test("distribution update parameter URLs resolve to distribution codecs", () => {
  const models = require(path.join(root, "lib")).Models;
  const distribution = require(path.join(root, "lib/codec/cosmos/distribution/v1beta1/tx"));
  const ibcChannel = require(path.join(root, "lib/codec/ibc/core/channel/v1/tx"));

  assert.equal(
    models.registry.lookupType("/cosmos.distribution.v1beta1.MsgUpdateParams"),
    distribution.MsgUpdateParams,
  );
  assert.equal(
    models.registry.lookupType("/cosmos.distribution.v1beta1.MsgUpdateParamsResponse"),
    distribution.MsgUpdateParamsResponse,
  );
  assert.notEqual(distribution.MsgUpdateParams, ibcChannel.MsgUpdateParams);
  assert.notEqual(distribution.MsgUpdateParamsResponse, ibcChannel.MsgUpdateParamsResponse);
});

test("the generated split preserves the exact legacy Models namespace shape", () => {
  const models = require(path.join(root, "lib")).Models;
  assert.equal(digest(Object.keys(models).sort()), "f51d3ae667d5be3496008348844c0492cf8c091e0d88bb68c55786a14c823650");
  assert.equal(digest(Object.keys(models.Carbon).sort()), "4d44b71b995670f511652094f4aafb08ca9503d8b140e893cb81de961c0414a0");
  assert.equal(digest(Object.keys(models.IBC).sort()), "50b080cce65e726b37d1285e60f57b11b8feffc4263f01d89352feca714d32ed");
  assert.equal(digest(Object.keys(models.PolyNetwork).sort()), "c221c32a6b79de15069f33266f4da195d2ae810e5ac59c485f1d2ed7aea749b9");
  assert.equal(models.registry.constructor.name, "Registry");
  assert.equal(digest(canonical(models.TxTypes)), "01f9dec7bd4444be71fd7f3adb94422aa56437dbbbe3f1b038230f869f53366e");
  assert.equal(digest(canonical(models.EIP712Types)), "5e2600f9eced9544a406b76312f52b7baf01f15bf24285ac94256a132b1f906b");
  assert.equal(digest(canonical(namespaceShape(models))), "3724b99af1845b74391905f66e4f52f36cf80d93c9bea64ae8f8cfb7500b4a0b");
});
