/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");

const expectedVersions = {
  "base-x": ["3.0.11"],
  "bn.js": ["4.12.3", "5.2.3"],
  "cipher-base": ["1.0.5"],
  pbkdf2: ["3.1.3"],
  "sha.js": ["2.4.12"],
  "tiny-secp256k1": ["1.1.7"],
  secp256k1: ["4.0.4"],
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

test("PBKDF2 preserves the RFC 6070 SHA-1 vector", () => {
  const pbkdf2 = require("pbkdf2");
  assert.equal(pbkdf2.pbkdf2Sync("password", "salt", 1, 20, "sha1").toString("hex"), "0c60c80f961f0e71f3a9b524af6012062fe037a6");
});

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

test("tiny-secp256k1 preserves deterministic signing and verification", () => {
  const tinySecp256k1 = require("tiny-secp256k1");
  const privateKey = Buffer.alloc(32);
  privateKey[31] = 1;
  const digest = Buffer.from("4f3c2f8cf697e50e2465a586afb83f3da2f4723a55d67f0f97d0500fc482827c", "hex");
  const publicKey = tinySecp256k1.pointFromScalar(privateKey, true);
  const signature = tinySecp256k1.sign(digest, privateKey);

  assert.equal(Buffer.from(publicKey).toString("hex"), "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
  assert.equal(
    Buffer.from(signature).toString("hex"),
    "6a5ac630a8403057f635795e5519dfafe00246f77dfaa99c2518a899dc57399a6e430014324f78ae52786b280e40ebbdba8fcff5ad8cb6f9ee3c2cc6b5b0263f",
  );
  assert.equal(tinySecp256k1.verify(digest, publicKey, signature), true);
});
