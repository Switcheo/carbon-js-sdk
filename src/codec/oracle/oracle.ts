/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";

export const protobufPackage = "Switcheo.carbon.oracle";

/** Params defines the parameters for the oracle module. */
export interface Params {
  oracleSlashEnabled: boolean;
  oracleSlashWindowBlock: number;
  oracleSlashInitial: string;
  oracleSlashIncrement: string;
  oracleContinuousSlashMax: number;
  newlyBondedWindowAllowance: number;
  voteTimestampFutureAllowance?: Duration;
  oracleMinVoteFactor: string;
  maxPowerToSlashFactor: string;
}

export interface Oracle {
  creator: string;
  id: string;
  description: string;
  status: string;
  minTurnoutPercentage: Long;
  maxResultAge: Long;
  securityType: string;
  resultStrategy: string;
  resolution: Long;
  spec: string;
}

export interface Vote {
  oracleId: string;
  timestamp: Long;
  data: string;
  voter: string;
}

export interface Result {
  oracleId: string;
  timestamp: Long;
  data: string;
}

export interface Mark {
  oracleId: string;
  timestamp: Long;
}

const baseParams: object = {
  oracleSlashEnabled: false,
  oracleSlashWindowBlock: 0,
  oracleSlashInitial: "",
  oracleSlashIncrement: "",
  oracleContinuousSlashMax: 0,
  newlyBondedWindowAllowance: 0,
  oracleMinVoteFactor: "",
  maxPowerToSlashFactor: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleSlashEnabled === true) {
      writer.uint32(8).bool(message.oracleSlashEnabled);
    }
    if (message.oracleSlashWindowBlock !== 0) {
      writer.uint32(16).uint32(message.oracleSlashWindowBlock);
    }
    if (message.oracleSlashInitial !== "") {
      writer.uint32(26).string(message.oracleSlashInitial);
    }
    if (message.oracleSlashIncrement !== "") {
      writer.uint32(34).string(message.oracleSlashIncrement);
    }
    if (message.oracleContinuousSlashMax !== 0) {
      writer.uint32(40).uint32(message.oracleContinuousSlashMax);
    }
    if (message.newlyBondedWindowAllowance !== 0) {
      writer.uint32(48).uint32(message.newlyBondedWindowAllowance);
    }
    if (message.voteTimestampFutureAllowance !== undefined) {
      Duration.encode(
        message.voteTimestampFutureAllowance,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.oracleMinVoteFactor !== "") {
      writer.uint32(66).string(message.oracleMinVoteFactor);
    }
    if (message.maxPowerToSlashFactor !== "") {
      writer.uint32(74).string(message.maxPowerToSlashFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleSlashEnabled = reader.bool();
          break;
        case 2:
          message.oracleSlashWindowBlock = reader.uint32();
          break;
        case 3:
          message.oracleSlashInitial = reader.string();
          break;
        case 4:
          message.oracleSlashIncrement = reader.string();
          break;
        case 5:
          message.oracleContinuousSlashMax = reader.uint32();
          break;
        case 6:
          message.newlyBondedWindowAllowance = reader.uint32();
          break;
        case 7:
          message.voteTimestampFutureAllowance = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.oracleMinVoteFactor = reader.string();
          break;
        case 9:
          message.maxPowerToSlashFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.oracleSlashEnabled =
      object.oracleSlashEnabled !== undefined &&
      object.oracleSlashEnabled !== null
        ? Boolean(object.oracleSlashEnabled)
        : false;
    message.oracleSlashWindowBlock =
      object.oracleSlashWindowBlock !== undefined &&
      object.oracleSlashWindowBlock !== null
        ? Number(object.oracleSlashWindowBlock)
        : 0;
    message.oracleSlashInitial =
      object.oracleSlashInitial !== undefined &&
      object.oracleSlashInitial !== null
        ? String(object.oracleSlashInitial)
        : "";
    message.oracleSlashIncrement =
      object.oracleSlashIncrement !== undefined &&
      object.oracleSlashIncrement !== null
        ? String(object.oracleSlashIncrement)
        : "";
    message.oracleContinuousSlashMax =
      object.oracleContinuousSlashMax !== undefined &&
      object.oracleContinuousSlashMax !== null
        ? Number(object.oracleContinuousSlashMax)
        : 0;
    message.newlyBondedWindowAllowance =
      object.newlyBondedWindowAllowance !== undefined &&
      object.newlyBondedWindowAllowance !== null
        ? Number(object.newlyBondedWindowAllowance)
        : 0;
    message.voteTimestampFutureAllowance =
      object.voteTimestampFutureAllowance !== undefined &&
      object.voteTimestampFutureAllowance !== null
        ? Duration.fromJSON(object.voteTimestampFutureAllowance)
        : undefined;
    message.oracleMinVoteFactor =
      object.oracleMinVoteFactor !== undefined &&
      object.oracleMinVoteFactor !== null
        ? String(object.oracleMinVoteFactor)
        : "";
    message.maxPowerToSlashFactor =
      object.maxPowerToSlashFactor !== undefined &&
      object.maxPowerToSlashFactor !== null
        ? String(object.maxPowerToSlashFactor)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.oracleSlashEnabled !== undefined &&
      (obj.oracleSlashEnabled = message.oracleSlashEnabled);
    message.oracleSlashWindowBlock !== undefined &&
      (obj.oracleSlashWindowBlock = message.oracleSlashWindowBlock);
    message.oracleSlashInitial !== undefined &&
      (obj.oracleSlashInitial = message.oracleSlashInitial);
    message.oracleSlashIncrement !== undefined &&
      (obj.oracleSlashIncrement = message.oracleSlashIncrement);
    message.oracleContinuousSlashMax !== undefined &&
      (obj.oracleContinuousSlashMax = message.oracleContinuousSlashMax);
    message.newlyBondedWindowAllowance !== undefined &&
      (obj.newlyBondedWindowAllowance = message.newlyBondedWindowAllowance);
    message.voteTimestampFutureAllowance !== undefined &&
      (obj.voteTimestampFutureAllowance = message.voteTimestampFutureAllowance
        ? Duration.toJSON(message.voteTimestampFutureAllowance)
        : undefined);
    message.oracleMinVoteFactor !== undefined &&
      (obj.oracleMinVoteFactor = message.oracleMinVoteFactor);
    message.maxPowerToSlashFactor !== undefined &&
      (obj.maxPowerToSlashFactor = message.maxPowerToSlashFactor);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.oracleSlashEnabled = object.oracleSlashEnabled ?? false;
    message.oracleSlashWindowBlock = object.oracleSlashWindowBlock ?? 0;
    message.oracleSlashInitial = object.oracleSlashInitial ?? "";
    message.oracleSlashIncrement = object.oracleSlashIncrement ?? "";
    message.oracleContinuousSlashMax = object.oracleContinuousSlashMax ?? 0;
    message.newlyBondedWindowAllowance = object.newlyBondedWindowAllowance ?? 0;
    message.voteTimestampFutureAllowance =
      object.voteTimestampFutureAllowance !== undefined &&
      object.voteTimestampFutureAllowance !== null
        ? Duration.fromPartial(object.voteTimestampFutureAllowance)
        : undefined;
    message.oracleMinVoteFactor = object.oracleMinVoteFactor ?? "";
    message.maxPowerToSlashFactor = object.maxPowerToSlashFactor ?? "";
    return message;
  },
};

const baseOracle: object = {
  creator: "",
  id: "",
  description: "",
  status: "",
  minTurnoutPercentage: Long.ZERO,
  maxResultAge: Long.ZERO,
  securityType: "",
  resultStrategy: "",
  resolution: Long.ZERO,
  spec: "",
};

export const Oracle = {
  encode(
    message: Oracle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (!message.minTurnoutPercentage.isZero()) {
      writer.uint32(40).int64(message.minTurnoutPercentage);
    }
    if (!message.maxResultAge.isZero()) {
      writer.uint32(48).int64(message.maxResultAge);
    }
    if (message.securityType !== "") {
      writer.uint32(58).string(message.securityType);
    }
    if (message.resultStrategy !== "") {
      writer.uint32(66).string(message.resultStrategy);
    }
    if (!message.resolution.isZero()) {
      writer.uint32(72).int64(message.resolution);
    }
    if (message.spec !== "") {
      writer.uint32(82).string(message.spec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Oracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOracle } as Oracle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.minTurnoutPercentage = reader.int64() as Long;
          break;
        case 6:
          message.maxResultAge = reader.int64() as Long;
          break;
        case 7:
          message.securityType = reader.string();
          break;
        case 8:
          message.resultStrategy = reader.string();
          break;
        case 9:
          message.resolution = reader.int64() as Long;
          break;
        case 10:
          message.spec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Oracle {
    const message = { ...baseOracle } as Oracle;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.minTurnoutPercentage =
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
        ? Long.fromString(object.minTurnoutPercentage)
        : Long.ZERO;
    message.maxResultAge =
      object.maxResultAge !== undefined && object.maxResultAge !== null
        ? Long.fromString(object.maxResultAge)
        : Long.ZERO;
    message.securityType =
      object.securityType !== undefined && object.securityType !== null
        ? String(object.securityType)
        : "";
    message.resultStrategy =
      object.resultStrategy !== undefined && object.resultStrategy !== null
        ? String(object.resultStrategy)
        : "";
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Long.fromString(object.resolution)
        : Long.ZERO;
    message.spec =
      object.spec !== undefined && object.spec !== null
        ? String(object.spec)
        : "";
    return message;
  },

  toJSON(message: Oracle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined &&
      (obj.description = message.description);
    message.status !== undefined && (obj.status = message.status);
    message.minTurnoutPercentage !== undefined &&
      (obj.minTurnoutPercentage = (
        message.minTurnoutPercentage || Long.ZERO
      ).toString());
    message.maxResultAge !== undefined &&
      (obj.maxResultAge = (message.maxResultAge || Long.ZERO).toString());
    message.securityType !== undefined &&
      (obj.securityType = message.securityType);
    message.resultStrategy !== undefined &&
      (obj.resultStrategy = message.resultStrategy);
    message.resolution !== undefined &&
      (obj.resolution = (message.resolution || Long.ZERO).toString());
    message.spec !== undefined && (obj.spec = message.spec);
    return obj;
  },

  fromPartial(object: DeepPartial<Oracle>): Oracle {
    const message = { ...baseOracle } as Oracle;
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? "";
    message.minTurnoutPercentage =
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
        ? Long.fromValue(object.minTurnoutPercentage)
        : Long.ZERO;
    message.maxResultAge =
      object.maxResultAge !== undefined && object.maxResultAge !== null
        ? Long.fromValue(object.maxResultAge)
        : Long.ZERO;
    message.securityType = object.securityType ?? "";
    message.resultStrategy = object.resultStrategy ?? "";
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Long.fromValue(object.resolution)
        : Long.ZERO;
    message.spec = object.spec ?? "";
    return message;
  },
};

const baseVote: object = {
  oracleId: "",
  timestamp: Long.ZERO,
  data: "",
  voter: "",
};

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).int64(message.timestamp);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    if (message.voter !== "") {
      writer.uint32(34).string(message.voter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleId = reader.string();
          break;
        case 2:
          message.timestamp = reader.int64() as Long;
          break;
        case 3:
          message.data = reader.string();
          break;
        case 4:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.ZERO;
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    message.voter =
      object.voter !== undefined && object.voter !== null
        ? String(object.voter)
        : "";
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.data !== undefined && (obj.data = message.data);
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    message.oracleId = object.oracleId ?? "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.ZERO;
    message.data = object.data ?? "";
    message.voter = object.voter ?? "";
    return message;
  },
};

const baseResult: object = { oracleId: "", timestamp: Long.ZERO, data: "" };

export const Result = {
  encode(
    message: Result,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).int64(message.timestamp);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResult } as Result;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleId = reader.string();
          break;
        case 3:
          message.timestamp = reader.int64() as Long;
          break;
        case 4:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Result {
    const message = { ...baseResult } as Result;
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.ZERO;
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    return message;
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<Result>): Result {
    const message = { ...baseResult } as Result;
    message.oracleId = object.oracleId ?? "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.ZERO;
    message.data = object.data ?? "";
    return message;
  },
};

const baseMark: object = { oracleId: "", timestamp: Long.ZERO };

export const Mark = {
  encode(message: Mark, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mark {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMark } as Mark;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleId = reader.string();
          break;
        case 2:
          message.timestamp = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mark {
    const message = { ...baseMark } as Mark;
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.ZERO;
    return message;
  },

  toJSON(message: Mark): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Mark>): Mark {
    const message = { ...baseMark } as Mark;
    message.oracleId = object.oracleId ?? "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.ZERO;
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
