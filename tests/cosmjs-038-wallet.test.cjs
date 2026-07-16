/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, Buffer, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");
const BigNumber = require("bignumber.js");
const { TimeoutError } = require("@cosmjs/stargate");

const projectRoot = path.resolve(__dirname, "..");
const { CarbonWallet } = require(path.join(projectRoot, "lib/index.js"));
const GasFee = require(path.join(projectRoot, "lib/clients/GasFee.js")).default;

function createWallet() {
  return new CarbonWallet({
    mode: "privateKey",
    privateKey: Buffer.alloc(32, 1),
    network: "mainnet",
  });
}

function emptyTx() {
  return CarbonWallet.TxRaw.fromPartial({
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    signatures: [],
  });
}

function successfulDeliverResponse() {
  return {
    height: 77,
    txIndex: 2,
    code: 0,
    transactionHash: "AABB",
    events: [],
    rawLog: "",
    msgResponses: [],
    gasUsed: 123n,
    gasWanted: 150n,
  };
}

test("fee calculation preserves Carbon gas costs and bignumber.js 9.1 identity", () => {
  const wallet = createWallet();
  const message = { typeUrl: "/cosmos.bank.v1beta1.MsgSend", value: {} };
  wallet.gasFee = new GasFee(
    { [message.typeUrl]: new BigNumber("250000") },
    { swth: new BigNumber("0.4") },
  );

  const fee = wallet.estimateTxFee([message], "swth");

  assert.deepEqual(fee, {
    amount: [{ amount: "100000", denom: "swth" }],
    gas: "100000000",
  });
  assert.equal(require("bignumber.js/package.json").version, "9.1.2");
});

test("block, sync, and async broadcast modes preserve 0.38 response contracts", async () => {
  const wallet = createWallet();
  const tx = emptyTx();
  const blockResponse = successfulDeliverResponse();
  const syncResponse = {
    code: 0,
    codespace: "",
    log: "",
    data: new Uint8Array(),
    events: [],
    gasWanted: 150n,
    gasUsed: 123n,
    hash: Uint8Array.from([0xaa, 0xbb]),
  };
  const asyncResponse = { hash: Uint8Array.from([0xcc, 0xdd]) };
  const calls = [];
  wallet.getSigningClient = async () => ({
    async broadcastTx(bytes, timeoutMs, pollIntervalMs) {
      calls.push({ mode: "block", bytes, timeoutMs, pollIntervalMs });
      return blockResponse;
    },
  });
  wallet.getTmClient = async () => ({
    async broadcastTxSync({ tx: bytes }) {
      calls.push({ mode: "sync", bytes });
      return syncResponse;
    },
    async broadcastTxAsync({ tx: bytes }) {
      calls.push({ mode: "async", bytes });
      return asyncResponse;
    },
  });

  assert.equal(await wallet.broadcastTx(tx, { timeoutMs: 3210, pollIntervalMs: 45 }), blockResponse);
  assert.equal(await wallet.broadcastTxToMempoolWithoutConfirm(tx), syncResponse);
  assert.equal(await wallet.broadcastTxWithoutConfirm(tx), asyncResponse);

  assert.deepEqual(calls.map(({ mode }) => mode), ["block", "sync", "async"]);
  assert.equal(calls.every(({ bytes }) => bytes instanceof Uint8Array), true);
  assert.deepEqual(
    { timeoutMs: calls[0].timeoutMs, pollIntervalMs: calls[0].pollIntervalMs },
    { timeoutMs: 3210, pollIntervalMs: 45 },
  );
});

test("sync broadcast failures preserve Tendermint code and log for retry parsing", async () => {
  const wallet = createWallet();
  const failure = {
    hash: Uint8Array.from([0xde, 0xad]),
    code: 32,
    log: "account sequence mismatch, expected 8, got 7",
    codespace: "sdk",
    events: [],
    gasWanted: 0n,
    gasUsed: 0n,
  };
  wallet.getTmClient = async () => ({
    async broadcastTxSync() {
      return failure;
    },
  });

  await assert.rejects(
    wallet.broadcastTxToMempoolWithoutConfirm(emptyTx()),
    (error) => {
      assert.equal(error.message, `[32] ${failure.log}`);
      assert.equal(error.type, "broadcast_fail");
      assert.equal(error.data, failure);
      return true;
    },
  );
});

test("sequence mismatch is retried once while unrelated broadcast errors are preserved", async () => {
  const wallet = createWallet();
  const retried = [];
  const mismatch = new Error("account sequence mismatch, expected 12, got 11");
  wallet.broadcastTx = async () => { throw mismatch; };
  wallet.txSignManager = { enqueue(request) { retried.push(request); } };
  let rejected;
  const request = {
    reattempts: 0,
    signerAddress: wallet.bech32Address,
    messages: [{ typeUrl: "/cosmos.bank.v1beta1.MsgSend", value: {} }],
    signedTx: emptyTx(),
    broadcastOpts: {},
    signOpts: { memo: "retry-me" },
    handler: { resolve() {}, reject(error) { rejected = error; } },
  };

  await wallet.dispatchTx(request);

  assert.equal(rejected, undefined);
  assert.equal(wallet.sequenceInvalidated, true);
  assert.equal(retried.length, 1);
  assert.equal(retried[0].reattempts, 1);
  assert.equal(retried[0].signOpts.memo, "retry-me");

  const ordinaryError = new Error("insufficient fees");
  wallet.broadcastTx = async () => { throw ordinaryError; };
  retried.length = 0;
  await wallet.dispatchTx({ ...request, handler: { resolve() {}, reject(error) { rejected = error; } } });
  assert.equal(retried.length, 0);
  assert.equal(rejected, ordinaryError);
});

test("transaction confirmation normalizes hashes and timeout polling raises TimeoutError", async () => {
  const wallet = createWallet();
  const response = {
    tx: new Uint8Array(),
    hash: Uint8Array.from([0xaa, 0xbb]),
    height: 88,
    index: 0,
    result: { code: 0, events: [], gasWanted: 10n, gasUsed: 9n },
  };
  let queriedHash;
  wallet.getTmClient = async () => ({
    async tx({ hash }) {
      queriedHash = hash;
      return response;
    },
  });

  assert.equal(await wallet.waitForTx("aabb", true, 100, 1), response);
  assert.deepEqual(Buffer.from(queriedHash), Buffer.from("AABB", "hex"));

  wallet.getTmClient = async () => ({
    async tx() {
      throw new Error("tx (AABB) not found");
    },
  });
  await assert.rejects(
    wallet.waitForTx("aabb", false, 5, 1),
    (error) => error instanceof TimeoutError && error.txId === "AABB",
  );
});
