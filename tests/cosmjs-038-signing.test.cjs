/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, Buffer, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

const projectRoot = path.resolve(__dirname, "..");
require(path.join(projectRoot, "lib/index.js"));
const { DirectSecp256k1Wallet } = require("@cosmjs/proto-signing");
const { Tendermint37Client } = require("@cosmjs/tendermint-rpc");
const { AuthInfo, TxBody, TxRaw } = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const { MsgSend } = require(path.join(projectRoot, "lib/codec/cosmos/bank/v1beta1/tx.js"));
const { MetaMask } = require(path.join(projectRoot, "lib/provider/metamask/MetaMask.js"));
const { CarbonSigningClient } = require(path.join(projectRoot, "lib/wallet/CarbonSigningClient.js"));

function unusedTmClient() {
  return Tendermint37Client.create({
    disconnect() {},
    async execute() {
      throw new Error("RPC must not be used while signing with explicit signer data");
    },
  });
}

test("direct signing preserves a large uint64 account number and produces a decodable transaction", async () => {
  const wallet = await DirectSecp256k1Wallet.fromKey(Uint8Array.from({ length: 32 }, (_, index) => index + 1), "swth");
  const [account] = await wallet.getAccounts();
  let capturedSignDoc;
  const signer = {
    async getAccounts() {
      return [account];
    },
    async signDirect(address, signDoc) {
      assert.equal(address, account.address);
      capturedSignDoc = signDoc;
      return {
        signed: signDoc,
        signature: {
          pub_key: { type: "tendermint/PubKeySecp256k1", value: Buffer.from(account.pubkey).toString("base64") },
          signature: Buffer.alloc(64, 7).toString("base64"),
        },
      };
    },
  };
  const client = new CarbonSigningClient(unusedTmClient(), signer);
  const accountNumber = 2 ** 40 + 123;
  const sequence = 17;
  const timeoutHeight = 9_876_543;
  const message = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: MsgSend.fromPartial({
      fromAddress: account.address,
      toAddress: account.address,
      amount: [{ denom: "swth", amount: "1" }],
    }),
  };

  const signedTx = await client.sign(
    account.address,
    [message],
    { amount: [{ denom: "swth", amount: "250" }], gas: "100000" },
    "cosmjs-038",
    { accountNumber, sequence, chainId: "carbon-1", timeoutHeight },
  );

  assert.equal(capturedSignDoc.accountNumber, BigInt(accountNumber));
  assert.equal(capturedSignDoc.chainId, "carbon-1");
  assert.equal(capturedSignDoc.bodyBytes instanceof Uint8Array, true);
  assert.equal(capturedSignDoc.authInfoBytes instanceof Uint8Array, true);

  const encoded = TxRaw.encode(signedTx).finish();
  const decoded = TxRaw.decode(encoded);
  const body = TxBody.decode(decoded.bodyBytes);
  const authInfo = AuthInfo.decode(decoded.authInfoBytes);
  assert.equal(body.memo, "cosmjs-038");
  assert.equal(body.messages[0].typeUrl, message.typeUrl);
  assert.equal(body.timeoutHeight.toString(), String(timeoutHeight));
  assert.equal(authInfo.signerInfos[0].sequence.toString(), String(sequence));
  assert.equal(authInfo.fee.gasLimit.toString(), "100000");
  assert.deepEqual(Buffer.from(decoded.signatures[0]), Buffer.alloc(64, 7));
});

test("MetaMask Amino signing keeps the EIP-712 counterpath unchanged", async () => {
  const wallet = await DirectSecp256k1Wallet.fromKey(Uint8Array.from({ length: 32 }, (_, index) => 32 - index), "swth");
  const [account] = await wallet.getAccounts();
  const calls = [];
  const metamask = {
    legacyEip712SignMode: false,
    async defaultAccount() {
      return "0x1111111111111111111111111111111111111111";
    },
    async signEip712(evmAddress, accountNumber, chainId, msgs, fee, memo, sequence) {
      calls.push({ evmAddress, accountNumber, chainId, msgs, fee, memo, sequence });
      return {
        sig: "ab".repeat(65),
        signedDoc: {
          account_number: accountNumber,
          chain_id: chainId,
          fee,
          memo,
          msgs,
          sequence,
        },
      };
    },
  };
  const signer = MetaMask.createMetamaskSigner(
    metamask,
    "carbon_9790-1",
    Buffer.from(account.pubkey).toString("base64"),
    { network: "mainnet", bech32Prefix: "swth" },
  );
  const signDoc = {
    account_number: String(2 ** 40 + 321),
    chain_id: "carbon-1",
    fee: { amount: [{ denom: "swth", amount: "50" }], gas: "90000" },
    memo: "metamask-038",
    msgs: [{ type: "cosmos-sdk/MsgSend", value: { from_address: account.address, to_address: account.address, amount: [] } }],
    sequence: "23",
  };

  const response = await signer.signAmino(account.address, signDoc);

  assert.equal(calls.length, 1);
  assert.equal(calls[0].accountNumber, signDoc.account_number);
  assert.equal(calls[0].chainId, "carbon_9790-1");
  assert.equal(calls[0].sequence, "23");
  assert.deepEqual(calls[0].msgs, signDoc.msgs);
  assert.deepEqual(response.signed, { ...signDoc, chain_id: "carbon_9790-1" });
  assert.deepEqual(Buffer.from(response.signature.signature, "base64"), Buffer.alloc(64, 0xab));
});

test("Carbon signing simulation encodes messages and returns the 0.38 gas estimate", async () => {
  const wallet = await DirectSecp256k1Wallet.fromKey(Uint8Array.from({ length: 32 }, () => 3), "swth");
  const [account] = await wallet.getAccounts();
  const signer = { async getAccounts() { return [account]; } };
  const client = new CarbonSigningClient(unusedTmClient(), signer);
  const calls = [];
  client.getSequence = async (address) => {
    assert.equal(address, account.address);
    return { accountNumber: 7, sequence: 29 };
  };
  client.forceGetQueryClient = () => ({
    tx: {
      async simulate(messages, memo, pubkey, sequence) {
        calls.push({ messages, memo, pubkey, sequence });
        return { gasInfo: { gasUsed: 456789n, gasWanted: 500000n } };
      },
    },
  });
  const message = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: MsgSend.fromPartial({ fromAddress: account.address, toAddress: account.address, amount: [] }),
  };

  const gas = await client.simulate(account.address, [message], "simulate-038");

  assert.equal(gas, 456789);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].memo, "simulate-038");
  assert.equal(calls[0].sequence, 29);
  assert.equal(calls[0].messages[0].typeUrl, message.typeUrl);
  assert.equal(calls[0].messages[0].value instanceof Uint8Array, true);
  assert.equal(calls[0].pubkey.type, "tendermint/PubKeySecp256k1");
});
