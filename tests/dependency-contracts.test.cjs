/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

const manifest = require(path.resolve(__dirname, "../package.json"));

const requiredRuntimeDependencies = {
  "@cosmjs/amino": "0.38.1",
  "@cosmjs/cosmwasm-stargate": "0.38.1",
  "@cosmjs/proto-signing": "0.38.1",
  "google-protobuf": "3.21.4",
};

for (const [packageName, expectedVersion] of Object.entries(requiredRuntimeDependencies)) {
  test(`${packageName} is declared as a direct runtime dependency`, () => {
    assert.equal(manifest.dependencies[packageName], expectedVersion);
  });

  test(`${packageName} resolves from the project root`, () => {
    assert.doesNotThrow(() => require.resolve(packageName, { paths: [path.resolve(__dirname, "..")] }));
  });
}

test("Starknet is not a direct Carbon SDK runtime dependency", () => {
  assert.equal(manifest.dependencies.starknet, undefined);
});
