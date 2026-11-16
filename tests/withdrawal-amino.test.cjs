/* eslint-disable @typescript-eslint/no-require-imports */
/* global Buffer, __dirname, global, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

// scripts/withdrawal-amino-golden.go.txt generates this fixture from carbon's own codecs.
const golden = require("./fixtures/withdrawal-amino-golden.json");

const projectRoot = path.resolve(__dirname, "..");

if (!global.window) {
  global.window = {
    addEventListener() {},
    dispatchEvent() {},
  };
}

const { makeSignDoc } = require("@cosmjs/amino");
const { SignTypedDataVersion, TypedDataUtils } = require("@metamask/eth-sig-util");
const BigNumber = require("bignumber.js");

// Load the package root first so its circular imports resolve in order.
const { AminoTypesMap, WithdrawalModule } = require(path.join(projectRoot, "lib"));
const { registry } = require(path.join(projectRoot, "lib/codec"));
const { ExitUpdate } = require(path.join(projectRoot, "lib/codec/Switcheo/carbon/withdrawal/tx"));
const { constructEIP712Tx } = require(path.join(projectRoot, "lib/util/eip712"));
const { legacyConstructEIP712Tx } = require(path.join(projectRoot, "lib/util/legacyEIP712"));
const { sortObject } = require(path.join(projectRoot, "lib/util/generic"));
const { makeSignDocAmino } = require(path.join(projectRoot, "lib/wallet/CarbonSigningClient"));

const MSG_WITHDRAW = "/Switcheo.carbon.withdrawal.MsgWithdraw";
const MSG_UPDATE_CONTROLS = "/Switcheo.carbon.withdrawal.MsgUpdateControls";
const WITHDRAWAL_TYPE_URLS = [
  MSG_WITHDRAW,
  "/Switcheo.carbon.withdrawal.MsgRetryTicket",
  "/Switcheo.carbon.withdrawal.MsgUpdateTeamList",
  MSG_UPDATE_CONTROLS,
  "/Switcheo.carbon.withdrawal.MsgRebalanceWithdrawal",
  "/Switcheo.carbon.withdrawal.MsgResolveUnclaimedDeposit",
  "/Switcheo.carbon.withdrawal.MsgReconcileBroker",
];

// Ledger and MetaMask signatures are checked against bytes from carbon's x/tx handler, which writes MsgUpdateControls's
// BoolValue and LegacyDec fields unlike the legacy amino codec the converter follows. No wallet signs the message,
// because only the admin policy or the authority may send it.
const HANDLER_GAP = "carbon's x/tx handler writes BoolValue and LegacyDec unlike legacy amino";
const handlerGap = (v) => (v.type_url === MSG_UPDATE_CONTROLS ? HANDLER_GAP : undefined);

const LEGACY_ZERO_GAP = 'legacyEIP712.ts leaves false and "0" values out of the types, and ethermint types them';
const LEGACY_EIP712_GAPS = {
  withdraw_unset_usd: LEGACY_ZERO_GAP,
  update_controls_all: LEGACY_ZERO_GAP,
  update_controls_partial: LEGACY_ZERO_GAP,
};

// ethermint's legacy EIP-712 domain names its verifying contract "cosmos".
const ETHERMINT_LEGACY_DOMAIN = { verifyingContract: "cosmos" };

const fee = { amount: [], gas: golden.gas };
const vector = (name) => golden.vectors.find((v) => v.name === name);
const decode = (v) => registry.decode({ typeUrl: v.type_url, value: Buffer.from(v.proto, "base64") });
const toAmino = (v) => AminoTypesMap.toAmino({ typeUrl: v.type_url, value: decode(v) });
const signDoc = (amino) => makeSignDoc([amino], fee, golden.chain_id, golden.memo, golden.account_number, golden.sequence);
const legacyTypedData = (amino) => legacyConstructEIP712Tx({ ...signDoc(amino), fee: { ...fee, feePayer: golden.fee_payer } });
const eip712Hash = (typedData) =>
  `0x${Buffer.from(TypedDataUtils.eip712Hash(typedData, SignTypedDataVersion.V4)).toString("hex")}`;

test("the vectors cover all seven x/withdrawal messages", () => {
  assert.deepEqual([...new Set(golden.vectors.map((v) => v.type_url))].sort(), [...WITHDRAWAL_TYPE_URLS].sort());
});

test("each converter maps every field of its codec message", () => {
  for (const typeUrl of WITHDRAWAL_TYPE_URLS) {
    const { type } = AminoTypesMap.toAmino({ typeUrl, value: {} });
    const fields = Object.keys(AminoTypesMap.fromAmino({ type, value: {} }).value).sort();
    assert.deepEqual(fields, Object.keys(registry.lookupType(typeUrl).fromPartial({})).sort(), typeUrl);
  }
  const exit = AminoTypesMap.fromAmino({ type: "withdrawal/UpdateControls", value: { exit: {} } }).value.exit;
  assert.deepEqual(Object.keys(exit).sort(), Object.keys(ExitUpdate.fromPartial({})).sort());
});

for (const v of golden.vectors) {
  test(`${v.name}: toAmino of carbon's protobuf bytes is carbon's legacy amino JSON`, () => {
    assert.deepEqual(toAmino(v), v.amino);
  });

  test(`${v.name}: fromAmino of carbon's amino JSON encodes to carbon's protobuf bytes`, () => {
    const { typeUrl, value } = AminoTypesMap.fromAmino(v.amino);
    assert.equal(typeUrl, v.type_url);
    assert.equal(Buffer.from(registry.encode({ typeUrl, value })).toString("base64"), v.proto);
  });

  test(`${v.name}: the Ledger sign doc is the node's SIGN_MODE_LEGACY_AMINO_JSON bytes`, { todo: handlerGap(v) }, () => {
    const doc = makeSignDocAmino([toAmino(v)], fee, golden.chain_id, golden.memo, golden.account_number, golden.sequence, golden.timeout_height);
    assert.equal(JSON.stringify(sortObject(doc)), v.ledger_sign_bytes);
  });

  test(`${v.name}: MetaMask's EIP-712 hash is ethermint's for the node's amino bytes`, { todo: handlerGap(v) }, () => {
    assert.equal(eip712Hash(constructEIP712Tx(signDoc(toAmino(v)), golden.chain_id)), v.metamask_eip712_hash);
  });

  if (v.legacy_eip712_hash) {
    test(`${v.name}: MetaMask's legacy EIP-712 types and message are ethermint's`, { todo: LEGACY_EIP712_GAPS[v.name] }, () => {
      const typedData = legacyTypedData(toAmino(v));
      assert.equal(eip712Hash({ ...typedData, domain: { ...typedData.domain, ...ETHERMINT_LEGACY_DOMAIN } }), v.legacy_eip712_hash);
    });
  }
}

test("legacyConstructEIP712Tx signs over ethermint's legacy domain", { todo: "the legacy builder reuses the direct-mode verifying contract" }, () => {
  assert.equal(legacyTypedData(vector("withdraw").amino).domain.verifyingContract, ETHERMINT_LEGACY_DOMAIN.verifyingContract);
});

test("an unset usd is written as carbon writes a nil math.Int", () => {
  const { sender, recipient } = vector("withdraw_unset_usd").amino.value;
  const value = registry.lookupType(MSG_WITHDRAW).fromPartial({ sender, recipient });
  assert.equal(value.usd, "");
  assert.deepEqual(AminoTypesMap.toAmino({ typeUrl: MSG_WITHDRAW, value }), vector("withdraw_unset_usd").amino);
});

test("a stock warning that is not a whole number of 10^-18 units is refused, not rounded", () => {
  const value = registry.lookupType(MSG_UPDATE_CONTROLS).fromPartial({ creator: "swth1creator", stockWarningUsd: "250000.5" });
  assert.throws(() => AminoTypesMap.toAmino({ typeUrl: MSG_UPDATE_CONTROLS, value }), /250000\.5 is not a whole number/);
  const amino = { type: "withdrawal/UpdateControls", value: { stock_warning_usd: "0.0000000000000000015" } };
  assert.throws(() => AminoTypesMap.fromAmino(amino), /is not a whole number/);
});

test("rebalanceWithdrawal sends the sender's own in-kind draw, floored to base units", async () => {
  const sample = vector("rebalance_withdrawal");
  const expected = sample.amino.value;
  let sent;
  const wallet = {
    bech32Address: expected.sender,
    sendTx: async (msg, opts) => {
      sent = { msg, opts };
      return "tx";
    },
  };
  const withdrawal = new WithdrawalModule({ getConnectedWallet: () => wallet });
  const result = await withdrawal.rebalanceWithdrawal(
    { denom: expected.denom, amount: new BigNumber(expected.amount).plus("0.99"), recipient: expected.recipient },
    { memo: "m" },
  );

  assert.equal(result, "tx");
  assert.equal(sent.msg.typeUrl, "/Switcheo.carbon.withdrawal.MsgRebalanceWithdrawal");
  assert.equal(sent.msg.value.account, "");
  assert.deepEqual(sent.opts, { memo: "m" });
  assert.deepEqual(AminoTypesMap.toAmino(sent.msg), sample.amino);
  assert.equal(Buffer.from(registry.encode(sent.msg)).toString("base64"), sample.proto);
});
