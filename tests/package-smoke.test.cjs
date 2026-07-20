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

test("the public composition subpaths load through package exports", async () => {
  const compose = require("carbon-js-sdk/compose");
  const order = require("carbon-js-sdk/features/order");
  const esmCompose = await import("carbon-js-sdk/compose");
  const esmOrder = await import("carbon-js-sdk/features/order");

  assert.equal(typeof compose.composeModules, "function");
  assert.equal(typeof compose.createFeatureRegistry, "function");
  assert.equal(typeof order.orderFeature.createModules, "function");
  assert.equal(typeof esmCompose.composeModules, "function");
  assert.equal(typeof esmOrder.orderFeature.createModules, "function");
});

const representativeModules = [
  "lib/clients/GrpcQueryClient.js",
  "lib/provider/keplr/KeplrAccount.js",
  "lib/provider/leap/LeapAccount.js",
  "lib/wallet/CarbonSigningClient.js",
];

for (const modulePath of representativeModules) {
  test(`${modulePath} loads without a network call`, () => {
    const loadedModule = require(path.join(packageRoot, modulePath));
    assert.ok(Object.keys(loadedModule).length > 0, `${modulePath} should export at least one symbol`);
  });
}
