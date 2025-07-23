/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Deposit, DepositParams, Params, Proposal, TallyParams, Vote, VotingParams } from "./gov";

export const protobufPackage = "cosmos.gov.v1";

/** Since: cosmos-sdk 0.46 */

/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
  /** starting_proposal_id is the ID of the starting proposal. */
  startingProposalId: Long;
  /** deposits defines all the deposits present at genesis. */
  deposits: Deposit[];
  /** votes defines all the votes present at genesis. */
  votes: Vote[];
  /** proposals defines all the proposals present at genesis. */
  proposals: Proposal[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   *
   * @deprecated
   */
  depositParams?: DepositParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   *
   * @deprecated
   */
  votingParams?: VotingParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   *
   * @deprecated
   */
  tallyParams?: TallyParams;
  /**
   * params defines all the paramaters of x/gov module.
   *
   * Since: cosmos-sdk 0.47
   */
  params?: Params;
  /**
   * The constitution allows builders to lay a foundation and define purpose.
   * This is an immutable string set in genesis.
   * There are no amendments, to go outside of scope, just fork.
   * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
   *
   * Since: cosmos-sdk 0.50
   */
  constitution: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    startingProposalId: Long.UZERO,
    deposits: [],
    votes: [],
    proposals: [],
    depositParams: undefined,
    votingParams: undefined,
    tallyParams: undefined,
    params: undefined,
    constitution: "",
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startingProposalId.isZero()) {
      writer.uint32(8).uint64(message.startingProposalId);
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(66).fork()).ldelim();
    }
    if (message.constitution !== "") {
      writer.uint32(74).string(message.constitution);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.startingProposalId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.votes.push(Vote.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.depositParams = DepositParams.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.votingParams = VotingParams.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.constitution = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      startingProposalId: isSet(object.startingProposalId) ? Long.fromValue(object.startingProposalId) : Long.UZERO,
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      depositParams: isSet(object.depositParams) ? DepositParams.fromJSON(object.depositParams) : undefined,
      votingParams: isSet(object.votingParams) ? VotingParams.fromJSON(object.votingParams) : undefined,
      tallyParams: isSet(object.tallyParams) ? TallyParams.fromJSON(object.tallyParams) : undefined,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      constitution: isSet(object.constitution) ? String(object.constitution) : "",
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.startingProposalId !== undefined &&
      (obj.startingProposalId = (message.startingProposalId || Long.UZERO).toString());
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.depositParams !== undefined &&
      (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : undefined);
    message.votingParams !== undefined &&
      (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : undefined);
    message.tallyParams !== undefined &&
      (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.constitution !== undefined && (obj.constitution = message.constitution);
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.startingProposalId = (object.startingProposalId !== undefined && object.startingProposalId !== null)
      ? Long.fromValue(object.startingProposalId)
      : Long.UZERO;
    message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    message.depositParams = (object.depositParams !== undefined && object.depositParams !== null)
      ? DepositParams.fromPartial(object.depositParams)
      : undefined;
    message.votingParams = (object.votingParams !== undefined && object.votingParams !== null)
      ? VotingParams.fromPartial(object.votingParams)
      : undefined;
    message.tallyParams = (object.tallyParams !== undefined && object.tallyParams !== null)
      ? TallyParams.fromPartial(object.tallyParams)
      : undefined;
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.constitution = object.constitution ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
