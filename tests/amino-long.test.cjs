/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, global, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");
const Long = require("long");

const projectRoot = path.resolve(__dirname, "..");

if (!global.window) {
  global.window = {
    addEventListener() {},
    dispatchEvent() {},
  };
}

// Load the package root first so its circular imports resolve in order.
const { AminoTypesMap } = require(path.join(projectRoot, "lib"));
const { registry } = require(path.join(projectRoot, "lib/codec"));
const { ConvertEncType, paramConverter } = require(path.join(projectRoot, "lib/provider/amino/utils"));

const MSG_VOTE = "/cosmos.gov.v1beta1.MsgVote";
const MSG_TRANSFER = "/ibc.applications.transfer.v1.MsgTransfer";
const ADDRESS = "swth1qnufjmd8vwm6j6d3q28wxqr4d8408f34km04vt";

const vote = (proposalId) => ({ type: "cosmos-sdk/MsgVote", value: { proposal_id: proposalId, voter: ADDRESS, option: 1 } });

// The amino round trip a Ledger signature goes through, from the message signed to the body broadcast.
const ledgerRoundTrip = (typeUrl, value) => {
  const amino = AminoTypesMap.toAmino({ typeUrl, value });
  const signed = AminoTypesMap.fromAmino(amino);
  assert.equal(signed.typeUrl, typeUrl);
  return { amino, broadcast: registry.decode({ typeUrl, value: registry.encode(signed) }) };
};

test("ConvertEncType.Long reads an amino id below 2^32 as before", () => {
  assert.equal(paramConverter("42", ConvertEncType.Long, false).toString(), "42");
  assert.equal(paramConverter("4294967295", ConvertEncType.Long, false).toString(), "4294967295");
});

test("ConvertEncType.Long keeps the high bits and the sign of a 64-bit amino value", () => {
  assert.equal(paramConverter("4294967301", ConvertEncType.Long, false).toString(), "4294967301");
  assert.equal(paramConverter("-5", ConvertEncType.Long, false).toString(), "-5");
  assert.equal(paramConverter("18446744073709551615", ConvertEncType.Long, false).toUnsigned().toString(), "18446744073709551615");
});

test("ConvertEncType.LongToNum keeps the high bits of an amino number", () => {
  assert.equal(paramConverter(4294967301, ConvertEncType.LongToNum, false).toString(), "4294967301");
  assert.equal(paramConverter(7, ConvertEncType.LongToNum, false).toString(), "7");
});

test("a Ledger-signed vote on a proposal above 2^32 broadcasts the id it signed", () => {
  const value = AminoTypesMap.fromAmino(vote("4294967301")).value;
  const { amino, broadcast } = ledgerRoundTrip(MSG_VOTE, value);
  assert.equal(amino.value.proposal_id, "4294967301");
  assert.equal(broadcast.proposalId.toString(), "4294967301");
});

test("a Ledger-signed IBC transfer broadcasts the nanosecond timeout it signed", () => {
  const value = registry.lookupType(MSG_TRANSFER).fromPartial({
    sourcePort: "transfer",
    sourceChannel: "channel-0",
    token: { denom: "swth", amount: "1" },
    sender: ADDRESS,
    receiver: "osmo1receiver",
    timeoutTimestamp: Long.fromString("1731744000000000000", true),
  });
  const { amino, broadcast } = ledgerRoundTrip(MSG_TRANSFER, value);
  assert.equal(amino.value.timeout_timestamp, "1731744000000000000");
  assert.equal(broadcast.timeoutTimestamp.toString(), "1731744000000000000");
  assert.deepEqual(AminoTypesMap.toAmino({ typeUrl: MSG_TRANSFER, value: broadcast }), amino);
});
