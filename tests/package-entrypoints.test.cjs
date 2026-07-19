/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const packageJson = require("../package.json");
const compatibility = require("./fixtures/legacy-package-files.json");
const { assertSafeSubpath } = require("../scripts/package-entrypoint-paths.cjs");

function targetPath(target) {
  return path.join(root, target.replace(/^\.\//, ""));
}

test("entrypoint inputs are normalized safe package subpaths", () => {
  for (const value of ["util/number", "codec/carbon/bank/tx", "lib/index.js"]) {
    assert.equal(assertSafeSubpath("fixture", value), value);
  }
  assert.equal(assertSafeSubpath("root", ".", { allowRoot: true }), ".");
  for (const value of ["", "/absolute", "C:\\absolute", "../escape", "a/../escape", "a\\b", "./relative", "a//b"]) {
    assert.throws(() => assertSafeSubpath("fixture", value), /safe normalized package subpath/);
  }
});

test("every pre-change packed path remains explicitly exported", () => {
  for (const file of compatibility.paths) {
    const exact = `./${file}`;
    assert.ok(packageJson.exports[exact], `missing exact export ${exact}`);
    if (file.endsWith(".js")) {
      const extensionless = `./${file.slice(0, -3)}`;
      assert.ok(packageJson.exports[extensionless], `missing extensionless export ${extensionless}`);
      const declaration = file.replace(/\.js$/, ".d.ts");
      const mapping = packageJson.typesVersions["*"][extensionless.slice(2)];
      assert.deepEqual(mapping, [declaration], `missing classic TS mapping for ${extensionless}`);
    }
  }
});

test("every package export condition points at a built file", () => {
  for (const [key, value] of Object.entries(packageJson.exports)) {
    const targets = typeof value === "string" ? [value] : Object.values(value);
    for (const target of targets) {
      assert.ok(fs.existsSync(targetPath(target)), `${key} targets missing ${target}`);
    }
  }
});

test("stable entrypoints resolve in CommonJS and preserve CJS identity", () => {
  const rootModule = require("carbon-js-sdk");
  const legacyModels = require("carbon-js-sdk/lib/codec");
  const stableRegistry = require("carbon-js-sdk/codec/registry");
  const bankTx = require("carbon-js-sdk/codec/carbon/bank/tx");
  assert.equal(rootModule.Models.registry, legacyModels.registry);
  assert.equal(rootModule.Models.registry, stableRegistry.registry);
  assert.equal(rootModule.Models.Carbon.Bank.MsgBlacklistAddress, bankTx.MsgBlacklistAddress);
  assert.equal(typeof require("carbon-js-sdk/util/number").bnOrZero, "function");
});

test("stable entrypoints resolve in native ESM and preserve ESM identity", async () => {
  const rootModule = await import("carbon-js-sdk");
  const stableRegistry = await import("carbon-js-sdk/codec/registry");
  const bankTx = await import("carbon-js-sdk/codec/carbon/bank/tx");
  assert.equal(rootModule.Models.registry, stableRegistry.registry);
  assert.equal(rootModule.Models.Carbon.Bank.MsgBlacklistAddress, bankTx.MsgBlacklistAddress);
  assert.equal(typeof (await import("carbon-js-sdk/util/number")).bnOrZero, "function");
});

test("CJS and ESM conditions are documented as separate module graphs", async () => {
  const cjs = require("carbon-js-sdk");
  const esm = await import("carbon-js-sdk");
  assert.notEqual(cjs.Models.registry, esm.Models.registry);
  assert.deepEqual(Object.keys(cjs).sort(), Object.keys(esm).filter((key) => key !== "default" && key !== "module.exports").sort());
});
