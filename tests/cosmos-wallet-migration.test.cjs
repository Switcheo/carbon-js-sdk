/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, Buffer, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
const manifest = require(path.join(projectRoot, "package.json"));
const lockfile = fs.readFileSync(path.join(projectRoot, "yarn.lock"), "utf8");

function lockedVersions(packageName) {
  const escaped = packageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const quoted = packageName.startsWith("@");
  const prefix = quoted ? `"${escaped}@` : `${escaped}@`;
  const stanza = new RegExp(
    `^${prefix}[^\\n]+:\\n(?:[ ]{2}[^\\n]*\\n|[ ]{4}[^\\n]*\\n)*`,
    "gm",
  );
  return [...lockfile.matchAll(stanza)]
    .map((match) => match[0].match(/^[ ]{2}version "([^"]+)"$/m)?.[1])
    .filter(Boolean)
    .sort();
}

test("obsolete Cosmos wallet roots and their registry family stay removed", () => {
  assert.equal(manifest.dependencies["@cosmos-kit/core"], undefined);
  assert.equal(manifest.dependencies["@cosmos-kit/leap-extension"], undefined);
  assert.equal(manifest.dependencies["@chain-registry/types"], undefined);

  assert.deepEqual(lockedVersions("@cosmos-kit/core"), []);
  assert.deepEqual(lockedVersions("@cosmos-kit/leap-extension"), []);
  assert.deepEqual(lockedVersions("@chain-registry/types"), []);
  assert.deepEqual(lockedVersions("@chain-registry/client"), []);
  assert.deepEqual(lockedVersions("@chain-registry/keplr"), []);
  assert.deepEqual(lockedVersions("@keplr-wallet/cosmos"), []);
});

test("legacy SecretJS, Axios, Protobuf, and Keplr roots stay removed", () => {
  assert.deepEqual(lockedVersions("secretjs"), []);
  assert.deepEqual(lockedVersions("axios"), ["0.33.0"]);
  assert.deepEqual(lockedVersions("protobufjs"), ["7.6.5"]);
  assert.doesNotMatch(lockfile, /^"@chain-registry\/keplr@1\.8\.0":$/m);
  assert.doesNotMatch(lockfile, /^"@keplr-wallet\/cosmos@0\.11\.16":$/m);
});

test("Carbon connects both direct and Ledger Leap accounts through the public flow", async () => {
  const { CarbonSDK } = require(path.join(projectRoot, "lib/index.js"));

  for (const isNanoLedger of [false, true]) {
    const calls = [];
    let connectedWallet;
    const sdk = Object.assign(Object.create(CarbonSDK.prototype), {
      chainId: "carbon-1",
      network: "mainnet",
      configOverride: {},
      getConfig() {
        return {
          Bech32Prefix: "swth",
          chainId: "carbon-1",
          network: "mainnet",
          restUrl: "https://rest.carbon.network",
          tmRpcUrl: "https://rpc.carbon.network",
        };
      },
      query: {
        fee: { async MinGasPriceAll() { return { minGasPrices: [] }; } },
      },
      getTokenClient() {
        return { geckoTokenNames: {}, tokenForDenom() { return undefined; } };
      },
      async connect(wallet) {
        connectedWallet = wallet;
        return this;
      },
    });
    const pubKey = Uint8Array.from([2, ...new Array(31).fill(0), 1]);
    const leap = {
      async experimentalSuggestChain(chainInfo) {
        calls.push(["suggest", chainInfo.chainId]);
      },
      async getKey(chainId) {
        calls.push(["getKey", chainId]);
        return {
          name: "Carbon account",
          algo: "secp256k1",
          pubKey,
          address: new Uint8Array(),
          bech32Address: "swth1contract",
          isNanoLedger,
        };
      },
      async enable(chainId) {
        calls.push(["enable", chainId]);
      },
      async signAmino() {},
      async signDirect() {},
      async signArbitrary() { return { signature: "AQ==" }; },
    };

    const connected = await CarbonSDK.prototype.connectWithLeap.call(sdk, leap);

    assert.equal(connected, sdk);
    assert.deepEqual(calls, [
      ["suggest", "carbon-1"],
      ["getKey", "carbon-1"],
      ["enable", "carbon-1"],
    ]);
    assert.equal(connectedWallet.providerAgent, "leap-extension");
    assert.deepEqual(Uint8Array.from(connectedWallet.publicKey), pubKey);
    assert.equal(typeof connectedWallet.signer.signAmino, "function");
    assert.equal(typeof connectedWallet.signer.signDirect, isNanoLedger ? "undefined" : "function");
  }
});
