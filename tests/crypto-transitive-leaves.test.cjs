/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");

const expectedVersions = {
  "base-x": ["3.0.11", "5.0.1"],
  "bn.js": ["4.12.3", "5.2.3"],
  "cipher-base": ["1.0.5"],
  pbkdf2: [],
  "sha.js": ["2.4.12"],
};

function lockedVersions(packageName) {
  const escaped = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stanza = new RegExp(`^(?:${escaped})@[^\n]+:\\n(?:[ ]{2}[^\n]*\\n|[ ]{4}[^\n]*\\n)*`, "gm");
  return [...lockfile.matchAll(stanza)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();
}

for (const [packageName, versions] of Object.entries(expectedVersions)) {
  test(`${packageName} has only audited compatible lock targets`, () => {
    assert.deepEqual(lockedVersions(packageName), versions);
  });
}

test("sha.js preserves the SHA-256 known-answer vector", () => {
  const digest = require("sha.js")("sha256").update("abc").digest("hex");
  assert.equal(digest, "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
});

test("base-x preserves leading-zero encoding and round trips", () => {
  const baseX = require("base-x");
  const base58 = baseX("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
  const payload = Buffer.from("000001020304ff", "hex");
  assert.equal(base58.encode(payload), "117bWpXp");
  assert.deepEqual(Buffer.from(base58.decode("117bWpXp")), payload);
});
