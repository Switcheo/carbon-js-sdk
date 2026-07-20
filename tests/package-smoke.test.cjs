/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const { createRequire } = require("node:module");
const path = require("node:path");
const test = require("node:test");

const packageSpecifier = process.env.CARBON_SDK_PACKAGE;
const packageRoot = packageSpecifier
  ? path.dirname(require.resolve(`${packageSpecifier}/package.json`, { paths: [process.cwd()] }))
  : path.resolve(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const sdk = require(path.resolve(packageRoot, manifest.main));
const publicPackageSpecifier = packageSpecifier || manifest.name;
const consumerRequire = createRequire(path.join(process.cwd(), "package-smoke-consumer.cjs"));

test("the package contains its declared entrypoints", () => {
  assert.equal(fs.existsSync(path.resolve(packageRoot, manifest.main)), true);
  assert.equal(fs.existsSync(path.resolve(packageRoot, manifest.types)), true);
});

test("the compiled package entrypoint loads", () => {
  assert.equal(typeof sdk.CarbonSDK, "function");
});

test("the public composition subpaths load through package exports", () => {
  const compose = consumerRequire(`${publicPackageSpecifier}/compose`);
  const order = consumerRequire(`${publicPackageSpecifier}/features/order`);

  assert.equal(typeof compose.composeModules, "function");
  assert.equal(typeof compose.createFeatureRegistry, "function");
  assert.equal(typeof order.orderFeature.createModules, "function");

  const esmResult = spawnSync(process.execPath, [
    "--input-type=module",
    "--eval",
    `
      const compose = await import(${JSON.stringify(`${publicPackageSpecifier}/compose`)});
      const order = await import(${JSON.stringify(`${publicPackageSpecifier}/features/order`)});
      if (
        typeof compose.composeModules !== "function"
        || typeof order.orderFeature.createModules !== "function"
      ) process.exit(1);
    `,
  ], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(esmResult.status, 0, `${esmResult.stdout}\n${esmResult.stderr}`);
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
