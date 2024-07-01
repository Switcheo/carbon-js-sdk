/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ProposalExecutorResult,
  ProposalStatus,
  TallyResult,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
  proposalStatusFromJSON,
  proposalStatusToJSON,
} from "./types";

export const protobufPackage = "cosmos.group.v1";

/** Since: cosmos-sdk 0.46 */

/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}

/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}

/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}

/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** address is the account address of the group member. */
  address: string;
}

/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPruned {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
  /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
  status: ProposalStatus;
  /** tally_result is the proposal tally result (when applicable). */
  tallyResult?: TallyResult;
}

const baseEventCreateGroup: object = { groupId: Long.UZERO };

export const EventCreateGroup = {
  encode(
    message: EventCreateGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateGroup } as EventCreateGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateGroup {
    const message = { ...baseEventCreateGroup } as EventCreateGroup;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromString(object.groupId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup {
    const message = { ...baseEventCreateGroup } as EventCreateGroup;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    return message;
  },
};

const baseEventUpdateGroup: object = { groupId: Long.UZERO };

export const EventUpdateGroup = {
  encode(
    message: EventUpdateGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateGroup {
    const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromString(object.groupId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    return message;
  },
};

const baseEventCreateGroupPolicy: object = { address: "" };

export const EventCreateGroupPolicy = {
  encode(
    message: EventCreateGroupPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateGroupPolicy } as EventCreateGroupPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateGroupPolicy {
    const message = { ...baseEventCreateGroupPolicy } as EventCreateGroupPolicy;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: EventCreateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventCreateGroupPolicy>
  ): EventCreateGroupPolicy {
    const message = { ...baseEventCreateGroupPolicy } as EventCreateGroupPolicy;
    message.address = object.address ?? "";
    return message;
  },
};

const baseEventUpdateGroupPolicy: object = { address: "" };

export const EventUpdateGroupPolicy = {
  encode(
    message: EventUpdateGroupPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventUpdateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventUpdateGroupPolicy } as EventUpdateGroupPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateGroupPolicy {
    const message = { ...baseEventUpdateGroupPolicy } as EventUpdateGroupPolicy;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: EventUpdateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventUpdateGroupPolicy>
  ): EventUpdateGroupPolicy {
    const message = { ...baseEventUpdateGroupPolicy } as EventUpdateGroupPolicy;
    message.address = object.address ?? "";
    return message;
  },
};

const baseEventSubmitProposal: object = { proposalId: Long.UZERO };

export const EventSubmitProposal = {
  encode(
    message: EventSubmitProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventSubmitProposal } as EventSubmitProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSubmitProposal {
    const message = { ...baseEventSubmitProposal } as EventSubmitProposal;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromString(object.proposalId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventSubmitProposal>): EventSubmitProposal {
    const message = { ...baseEventSubmitProposal } as EventSubmitProposal;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

const baseEventWithdrawProposal: object = { proposalId: Long.UZERO };

export const EventWithdrawProposal = {
  encode(
    message: EventWithdrawProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventWithdrawProposal } as EventWithdrawProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdrawProposal {
    const message = { ...baseEventWithdrawProposal } as EventWithdrawProposal;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromString(object.proposalId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventWithdrawProposal>
  ): EventWithdrawProposal {
    const message = { ...baseEventWithdrawProposal } as EventWithdrawProposal;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

const baseEventVote: object = { proposalId: Long.UZERO };

export const EventVote = {
  encode(
    message: EventVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventVote } as EventVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVote {
    const message = { ...baseEventVote } as EventVote;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromString(object.proposalId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventVote>): EventVote {
    const message = { ...baseEventVote } as EventVote;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

const baseEventExec: object = { proposalId: Long.UZERO, result: 0, logs: "" };

export const EventExec = {
  encode(
    message: EventExec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== "") {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventExec } as EventExec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        case 3:
          message.logs = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExec {
    const message = { ...baseEventExec } as EventExec;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromString(object.proposalId)
        : Long.UZERO;
    message.result =
      object.result !== undefined && object.result !== null
        ? proposalExecutorResultFromJSON(object.result)
        : 0;
    message.logs =
      object.logs !== undefined && object.logs !== null
        ? String(object.logs)
        : "";
    return message;
  },

  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.result !== undefined &&
      (obj.result = proposalExecutorResultToJSON(message.result));
    message.logs !== undefined && (obj.logs = message.logs);
    return obj;
  },

  fromPartial(object: DeepPartial<EventExec>): EventExec {
    const message = { ...baseEventExec } as EventExec;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.result = object.result ?? 0;
    message.logs = object.logs ?? "";
    return message;
  },
};

const baseEventLeaveGroup: object = { groupId: Long.UZERO, address: "" };

export const EventLeaveGroup = {
  encode(
    message: EventLeaveGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventLeaveGroup } as EventLeaveGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventLeaveGroup {
    const message = { ...baseEventLeaveGroup } as EventLeaveGroup;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromString(object.groupId)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<EventLeaveGroup>): EventLeaveGroup {
    const message = { ...baseEventLeaveGroup } as EventLeaveGroup;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

const baseEventProposalPruned: object = { proposalId: Long.UZERO, status: 0 };

export const EventProposalPruned = {
  encode(
    message: EventProposalPruned,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.tallyResult !== undefined) {
      TallyResult.encode(
        message.tallyResult,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventProposalPruned {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventProposalPruned } as EventProposalPruned;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.tallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventProposalPruned {
    const message = { ...baseEventProposalPruned } as EventProposalPruned;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromString(object.proposalId)
        : Long.UZERO;
    message.status =
      object.status !== undefined && object.status !== null
        ? proposalStatusFromJSON(object.status)
        : 0;
    message.tallyResult =
      object.tallyResult !== undefined && object.tallyResult !== null
        ? TallyResult.fromJSON(object.tallyResult)
        : undefined;
    return message;
  },

  toJSON(message: EventProposalPruned): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.status !== undefined &&
      (obj.status = proposalStatusToJSON(message.status));
    message.tallyResult !== undefined &&
      (obj.tallyResult = message.tallyResult
        ? TallyResult.toJSON(message.tallyResult)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EventProposalPruned>): EventProposalPruned {
    const message = { ...baseEventProposalPruned } as EventProposalPruned;
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.status = object.status ?? 0;
    message.tallyResult =
      object.tallyResult !== undefined && object.tallyResult !== null
        ? TallyResult.fromPartial(object.tallyResult)
        : undefined;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
