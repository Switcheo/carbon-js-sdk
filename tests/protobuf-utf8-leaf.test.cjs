/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");

function lockedVersions(packageName) {
  const escaped = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stanza = new RegExp(`^"${escaped}@[^\n]+:\\n(?:[ ]{2}[^\n]*\\n|[ ]{4}[^\n]*\\n)*`, "gm");
  return [...lockfile.matchAll(stanza)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();
}

test("@protobufjs/utf8 has only the audited compatible lock target", () => {
  assert.deepEqual(lockedVersions("@protobufjs/utf8"), ["1.1.1"]);
});

test("the patched UTF-8 helper preserves multibyte sizing and round trips", () => {
  const utf8 = require("@protobufjs/utf8");
  const value = "Carbon 🚀 交易";
  const buffer = Buffer.alloc(utf8.length(value));
  const written = utf8.write(value, buffer, 0);

  assert.equal(written, Buffer.byteLength(value, "utf8"));
  assert.equal(utf8.read(buffer, 0, written), value);
  assert.equal(utf8.read(Uint8Array.from([0xc0, 0x80]), 0, 2), "\ufffd");
});

test("protobufjs uses the patched UTF-8 helper for message encoding", () => {
  const protobuf = require("protobufjs");
  const utf8 = require("@protobufjs/utf8");
  const Message = new protobuf.Type("Message").add(new protobuf.Field("memo", 1, "string"));
  const encoded = Message.encode({ memo: "Carbon 🚀" }).finish();

  assert.equal(protobuf.util.utf8, utf8);
  assert.equal(Message.decode(encoded).memo, "Carbon 🚀");
});

test("protobufjs major-version blockers remain explicit", () => {
  const versions = [...lockfile.matchAll(/^protobufjs@[^\n]+:\n(?:[ ]{2}[^\n]*\n|[ ]{4}[^\n]*\n)*/gm)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();

  assert.deepEqual(versions, ["6.11.4"]);
  assert.equal(versions.some((version) => version.startsWith("7.")), false);
});
