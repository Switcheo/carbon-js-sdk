/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");

function lockedVersions(packageName) {
  const escaped = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stanza = new RegExp(`^(?:${escaped})@[^\n]+:\\n(?:[ ]{2}[^\n]*\\n|[ ]{4}[^\n]*\\n)*`, "gm");
  return [...lockfile.matchAll(stanza)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();
}

const expectedVersions = {
  braces: ["3.0.3"],
  "cross-spawn": ["7.0.6"],
  defu: ["6.1.5"],
  h3: ["1.15.9"],
  micromatch: ["4.0.8"],
  "node-forge": ["1.4.0"],
  picomatch: ["2.3.2", "4.0.5"],
};

for (const [packageName, versions] of Object.entries(expectedVersions)) {
  test(`${packageName} has only the audited compatible lock targets`, () => {
    assert.deepEqual(lockedVersions(packageName), versions);
  });
}

test("patched glob leaves preserve representative wallet tooling patterns", () => {
  const braces = require("braces");
  const micromatch = require("micromatch");
  const picomatch = require("picomatch");

  assert.deepEqual(braces.expand("wallet/{keplr,leap}.ts"), ["wallet/keplr.ts", "wallet/leap.ts"]);
  assert.deepEqual(micromatch(["wallet/leap.ts", "wallet/leap.js", "wallet/keplr.ts"], "wallet/{leap,keplr}.ts"), [
    "wallet/leap.ts",
    "wallet/keplr.ts",
  ]);
  assert.equal(picomatch("wallet/**/*.ts")("wallet/provider/leap.ts"), true);
});

test("cross-spawn preserves argument boundaries", () => {
  const crossSpawn = require("cross-spawn");
  const result = crossSpawn.sync(process.execPath, ["-e", "process.stdout.write(process.argv[1])", "wallet value;not-a-shell"], {
    encoding: "utf8",
  });

  assert.equal(result.status, 0);
  assert.equal(result.stdout, "wallet value;not-a-shell");
  assert.equal(result.stderr, "");
});

test("defu merges defaults without prototype pollution", () => {
  const { defu } = require("defu");
  const payload = JSON.parse('{"__proto__":{"polluted":"yes"},"wallet":{"name":"leap"}}');
  const merged = defu(payload, { wallet: { network: "carbon" } });

  assert.deepEqual(merged.wallet, { name: "leap", network: "carbon" });
  assert.equal({}.polluted, undefined);
  assert.equal(Object.hasOwn(merged, "__proto__"), false);
});

test("h3 exposes the CommonJS server API expected by wallet-connect tooling", () => {
  const h3 = require("h3");
  const app = h3.createApp();

  assert.equal(typeof h3.defineEventHandler, "function");
  assert.equal(typeof app.use, "function");
});

test("node-forge preserves SHA-256 behavior", () => {
  const forge = require("node-forge");
  const digest = forge.md.sha256.create().update("carbon-wallet", "utf8").digest().toHex();

  assert.equal(digest, "f3f17f8c25b56365aa98ee796f391ce969ecaa5b1a0c560ce47b75baff03fdd4");
});

test("compiled Wallet and Leap entrypoints remain importable", () => {
  for (const relativePath of ["lib/wallet/CarbonWallet.js", "lib/provider/leap/LeapAccount.js"]) {
    const absolutePath = path.join(projectRoot, relativePath);
    assert.doesNotThrow(() => require(absolutePath), relativePath);
  }
});
