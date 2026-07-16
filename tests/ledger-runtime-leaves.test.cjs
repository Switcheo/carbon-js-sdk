/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");

function lockedVersions(packageName) {
  const escaped = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const quoted = packageName.startsWith("@");
  const prefix = quoted ? `"${escaped}@` : `${escaped}@`;
  const stanza = new RegExp(`^${prefix}[^\n]+:\\n(?:[ ]{2}[^\n]*\\n|[ ]{4}[^\n]*\\n)*`, "gm");
  return [...lockfile.matchAll(stanza)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();
}

test("@babel/runtime has only the audited compatible lock target", () => {
  assert.deepEqual(lockedVersions("@babel/runtime"), ["7.26.10"]);
});

test("semver has no vulnerable lock targets", () => {
  assert.deepEqual(lockedVersions("semver"), ["7.8.5"]);
});

test("Babel helpers used by Ledger packages preserve object and async behavior", async () => {
  const extendsHelper = require("@babel/runtime/helpers/extends");
  const asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");
  const merged = extendsHelper({}, { transport: "webusb" }, { transport: "webhid", app: "Carbon" });
  const wrapped = asyncToGenerator(function* ledgerValue() {
    return yield Promise.resolve(merged);
  });

  assert.deepEqual(merged, { transport: "webhid", app: "Carbon" });
  await assert.doesNotReject(async () => assert.deepEqual(await wrapped(), merged));
});

test("semver preserves Ledger firmware range checks", () => {
  const semver = require("semver");

  assert.equal(semver.satisfies("2.1.0", ">=2.0.0 <3.0.0"), true);
  assert.equal(semver.satisfies("3.0.0", ">=2.0.0 <3.0.0"), false);
  assert.equal(semver.valid("2.1.0"), "2.1.0");
});

test("compiled Ledger entrypoints remain importable", () => {
  assert.doesNotThrow(() => require(path.join(projectRoot, "lib/provider/ledger/ledger.js")));
  const transport = require("@ledgerhq/hw-transport");
  assert.equal(typeof (transport.default || transport), "function");
});
