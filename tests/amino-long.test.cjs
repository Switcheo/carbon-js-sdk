/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, global, require */
const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

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
const VOTER = "swth1qnufjmd8vwm6j6d3q28wxqr4d8408f34km04vt";

const vote = (proposalId) => ({ type: "cosmos-sdk/MsgVote", value: { proposal_id: proposalId, voter: VOTER, option: 1 } });

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
  const { typeUrl, value } = AminoTypesMap.fromAmino(vote("4294967301"));
  assert.equal(typeUrl, MSG_VOTE);
  const decoded = registry.decode({ typeUrl, value: registry.encode({ typeUrl, value }) });
  assert.equal(decoded.proposalId.toString(), "4294967301");
  assert.deepEqual(AminoTypesMap.toAmino({ typeUrl, value: decoded }).value.proposal_id, "4294967301");
});
