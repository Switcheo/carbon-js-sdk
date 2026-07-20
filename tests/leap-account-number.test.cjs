/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");
const Long = require("long");

const projectRoot = path.resolve(__dirname, "..");

test("Leap direct signing preserves uint64 account numbers above 32 bits", async () => {
  const { LeapAccount } = require(path.join(projectRoot, "lib/index.js"));
  let forwarded;
  const leap = {
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
  const signer = LeapAccount.createLeapSigner(leap, "carbon-1");
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
