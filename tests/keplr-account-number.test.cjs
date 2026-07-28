/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");
const Long = require("long");

const projectRoot = path.resolve(__dirname, "..");

test("Keplr direct signing preserves uint64 account numbers above 32 bits", async () => {
  const { KeplrAccount } = require(path.join(projectRoot, "lib/index.js"));
  let forwarded;
  const keplr = {
    async signDirect(_chainId, _address, doc) {
      forwarded = doc.accountNumber;
      return {
        signed: doc,
        signature: {
          pub_key: { type: "tendermint/PubKeySecp256k1", value: "AQ==" },
          signature: "AQ==",
        },
      };
    },
  };
  const signer = KeplrAccount.createKeplrSigner(
    keplr,
    { chainId: "carbon-1" },
    { bech32Address: "swth1contract", pubKey: new Uint8Array() },
  );
  const accountNumber = (1n << 40n) + 123n;

  await signer.signDirect("swth1contract", {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    chainId: "carbon-1",
    accountNumber,
  });

  assert.equal(Long.isLong(forwarded), true);
  assert.equal(forwarded.unsigned, true);
  assert.equal(forwarded.toString(), accountNumber.toString());
});
