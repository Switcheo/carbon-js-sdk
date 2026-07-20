/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const keplrRegistryPrefix =
  "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/";

const registryConsumers = [
  "src/modules/ibc.ts",
  "src/provider/keplr/KeplrAccount.ts",
  "lib/modules/ibc.js",
  "lib/provider/keplr/KeplrAccount.js",
];

test("Keplr chain-registry consumers use the upstream main branch", () => {
  for (const relativePath of registryConsumers) {
    const content = fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
    assert.ok(
      content.includes(`${keplrRegistryPrefix}main/`),
      `${relativePath} must fetch Keplr registry data from main`,
    );
    assert.ok(
      !content.includes(`${keplrRegistryPrefix}master/`),
      `${relativePath} must not fetch Keplr registry data from master`,
    );
  }
});
