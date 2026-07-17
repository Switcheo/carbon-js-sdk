/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, "package.json"), "utf8"));
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
  assert.deepEqual(lockedVersions("@protobufjs/utf8"), ["1.1.2"]);
});

test("Carbon declares the exact Long 4 public declaration artifact", () => {
  assert.equal(packageJson.dependencies["@types/long"], "4.0.1");
  const typesPackage = path.dirname(require.resolve("@types/long/package.json"));
  assert.equal(fs.existsSync(path.join(typesPackage, "index.d.ts")), true);
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

test("Keplr's Protobuf.js 6-generated modules round trip through Protobuf.js 7", () => {
  const Long = require("long");
  const { Coin } = require("@keplr-wallet/proto-types/cosmos/base/v1beta1/coin");
  const { Duration } = require("@keplr-wallet/proto-types/google/protobuf/duration");

  const coin = { denom: "usdc", amount: "123" };
  const encodedCoin = Coin.encode(coin).finish();
  assert.deepEqual(Coin.decode(encodedCoin), coin);

  const duration = { seconds: Long.fromString("9007199254740993"), nanos: 7 };
  const encodedDuration = Duration.encode(duration).finish();
  const decodedDuration = Duration.decode(encodedDuration);
  assert.equal(decodedDuration.seconds.toString(), "9007199254740993");
  assert.equal(decodedDuration.nanos, 7);
});

function protobufOwners(nodeModules) {
  const owners = [];
  const visitPackage = (packageDirectory) => {
    const manifestPath = path.join(packageDirectory, "package.json");
    if (!fs.existsSync(manifestPath)) return;
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    if (manifest.dependencies?.protobufjs || manifest.optionalDependencies?.protobufjs) {
      owners.push(`${manifest.name}@${manifest.version}`);
    }
    visitNodeModules(path.join(packageDirectory, "node_modules"));
  };
  const visitNodeModules = (directory) => {
    if (!fs.existsSync(directory)) return;
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name === ".bin") continue;
      const entryPath = path.join(directory, entry.name);
      if (entry.name.startsWith("@")) {
        for (const scopedEntry of fs.readdirSync(entryPath, { withFileTypes: true })) {
          if (scopedEntry.isDirectory()) visitPackage(path.join(entryPath, scopedEntry.name));
        }
      } else {
        visitPackage(entryPath);
      }
    }
  };
  visitNodeModules(nodeModules);
  return owners.sort();
}

test("protobufjs 7.6.3 is globally resolved only for its audited direct and Keplr owners", () => {
  const versions = [...lockfile.matchAll(/^protobufjs@[^\n]+:\n(?:[ ]{2}[^\n]*\n|[ ]{4}[^\n]*\n)*/gm)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();

  assert.deepEqual(packageJson.resolutions, {
    "**/@ethersproject/providers/ws": "8.21.0",
    protobufjs: "7.6.3",
    uuid: "11.1.1",
  });
  assert.deepEqual(versions, ["7.6.3"]);
  assert.deepEqual(protobufOwners(path.join(projectRoot, "node_modules")), [
    "@keplr-wallet/cosmos@0.12.28",
    "@keplr-wallet/proto-types@0.12.28",
  ]);
});
