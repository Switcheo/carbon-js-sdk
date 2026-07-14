/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const packageSpecifier = process.env.CARBON_SDK_PACKAGE;
const packageRoot = packageSpecifier
  ? path.dirname(require.resolve(`${packageSpecifier}/package.json`, { paths: [process.cwd()] }))
  : path.resolve(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const sdk = require(path.resolve(packageRoot, manifest.main));

test("the package contains its declared entrypoints", () => {
  assert.equal(fs.existsSync(path.resolve(packageRoot, manifest.main)), true);
  assert.equal(fs.existsSync(path.resolve(packageRoot, manifest.types)), true);
});

test("the compiled package entrypoint loads", () => {
  assert.equal(typeof sdk.CarbonSDK, "function");
});
