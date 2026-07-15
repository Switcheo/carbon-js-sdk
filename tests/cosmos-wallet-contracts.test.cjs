/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, Buffer, process, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { spawnSync } = require("node:child_process");
const Long = require("long");

const projectRoot = path.resolve(__dirname, "..");
const { LeapAccount } = require(path.join(projectRoot, "lib/index.js"));

function signature(value) {
  return {
    pub_key: { type: "tendermint/PubKeySecp256k1", value: "AQ==" },
    signature: Buffer.from(value).toString("base64"),
  };
}

function fakeLeap(calls) {
  return {
    async getKey(chainId) {
      calls.push(["getKey", chainId]);
      return {
        name: "Carbon account",
        algo: "secp256k1",
        pubKey: Uint8Array.from([2, 3, 4]),
        address: Uint8Array.from([5, 6, 7]),
        bech32Address: "swth1contract",
        isNanoLedger: false,
      };
    },
    async signDirect(chainId, address, doc, options) {
      calls.push(["signDirect", chainId, address, doc, options]);
      return { signed: doc, signature: signature("direct") };
    },
    async signAmino(chainId, address, doc, options) {
      calls.push(["signAmino", chainId, address, doc, options]);
      return { signed: doc, signature: signature("amino") };
    },
    async signArbitrary(chainId, address, message) {
      calls.push(["signArbitrary", chainId, address, message]);
      return signature("arbitrary");
    },
  };
}

function fakeSdkProvider() {
  return {
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
      fee: {
        async MinGasPriceAll() {
          return { minGasPrices: [{ denom: "uusdc", gasPrice: "1000000000000" }] };
        },
      },
    },
    getTokenClient() {
      return {
        geckoTokenNames: { uusdc: "usd-coin" },
        tokenForDenom(denom) {
          if (denom !== "uusdc") return undefined;
          return { denom, symbol: "USDC", decimals: Long.fromNumber(6) };
        },
      };
    },
  };
}

test("Leap signer preserves account, direct, amino, and arbitrary-signing contracts", async () => {
  const calls = [];
  const signer = LeapAccount.createLeapSigner(fakeLeap(calls), "carbon-1");

  assert.deepEqual(await signer.getAccounts(), [
    {
      algo: "secp256k1",
      address: "swth1contract",
      pubkey: Uint8Array.from([2, 3, 4]),
    },
  ]);

  const bodyBytes = Uint8Array.from([1, 2]);
  const authInfoBytes = Uint8Array.from([3, 4]);
  const directDoc = { bodyBytes, authInfoBytes, chainId: "carbon-1", accountNumber: 7n };
  await signer.signDirect("swth1contract", directDoc);

  const directCall = calls.find(([name]) => name === "signDirect");
  assert.equal(directCall[1], "carbon-1");
  assert.equal(directCall[2], "swth1contract");
  assert.equal(Long.isLong(directCall[3].accountNumber), true);
  assert.equal(directCall[3].accountNumber.toString(), "7");
  assert.deepEqual(directCall[3].bodyBytes, bodyBytes);
  assert.deepEqual(directCall[3].authInfoBytes, authInfoBytes);
  assert.equal(directCall[3].chainId, "carbon-1");
  assert.deepEqual(directCall[4], { preferNoSetFee: true });

  const aminoDoc = { chain_id: "carbon-1", account_number: "7", sequence: "2", fee: {}, msgs: [], memo: "" };
  await signer.signAmino("swth1contract", aminoDoc);
  const aminoCall = calls.find(([name]) => name === "signAmino");
  assert.deepEqual(aminoCall.slice(1), ["carbon-1", "swth1contract", aminoDoc, { preferNoSetFee: true }]);

  assert.equal(await signer.signMessage("swth1contract", "Carbon compatibility"), Buffer.from("arbitrary").toString("hex"));
  assert.deepEqual(calls.find(([name]) => name === "signArbitrary").slice(1), [
    "carbon-1",
    "swth1contract",
    "Carbon compatibility",
  ]);
});

test("Leap chain info preserves complete Carbon wallet registration data", async () => {
  const chainInfo = await LeapAccount.getChainInfo(fakeSdkProvider());

  assert.equal(chainInfo.chainId, "carbon-1");
  assert.equal(chainInfo.chainName, "Carbon");
  assert.equal(chainInfo.rpc, "https://rpc.carbon.network");
  assert.equal(chainInfo.rest, "https://rest.carbon.network");
  assert.deepEqual(chainInfo.bip44, { coinType: 118 });
  assert.deepEqual(chainInfo.stakeCurrency, {
    coinDenom: "SWTH",
    coinMinimalDenom: "swth",
    coinDecimals: 8,
    coinGeckoId: "switcheo",
    gasPriceStep: { low: 1, average: 1.5, high: 2 },
  });
  assert.equal(chainInfo.currencies.length, 2);
  assert.deepEqual(chainInfo.currencies[1], {
    coinDenom: "USDC",
    coinMinimalDenom: "uusdc",
    coinDecimals: 6,
    coinGeckoId: "usd-coin",
    gasPriceStep: { low: 0.000001, average: 0.000001, high: 0.000001 },
  });
  assert.deepEqual(chainInfo.feeCurrencies, chainInfo.currencies);
  assert.deepEqual(chainInfo.bech32Config, {
    bech32PrefixAccAddr: "swth",
    bech32PrefixAccPub: "swthpub",
    bech32PrefixValAddr: "swthvaloper",
    bech32PrefixValPub: "swthvaloperpub",
    bech32PrefixConsAddr: "swthvalcons",
    bech32PrefixConsPub: "swthvalconspub",
  });
  assert.deepEqual([...chainInfo.features].sort(), ["ibc-go", "ibc-transfer", "stargate"]);
});

test("Leap extension metadata remains loadable", () => {
  const { wallets } = require("@cosmos-kit/leap-extension");
  assert.equal(wallets.some((wallet) => wallet.walletName === "leap-extension"), true);
});

test("legacy Carbon wallet types compile through the public package entrypoint", () => {
  const tsc = require.resolve("typescript/bin/tsc");
  const fixture = path.join(projectRoot, "tests/fixtures/cosmos-wallet-public-types.ts");
  const result = spawnSync(
    process.execPath,
    [tsc, "--noEmit", "--strict", "--skipLibCheck", "--esModuleInterop", "--module", "commonjs", "--moduleResolution", "node", "--target", "es2020", fixture],
    { cwd: projectRoot, encoding: "utf8" },
  );
  assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);

  const rootDeclarations = fs.readFileSync(path.join(projectRoot, "lib/index.d.ts"), "utf8");
  assert.match(rootDeclarations, /provider/);
});
