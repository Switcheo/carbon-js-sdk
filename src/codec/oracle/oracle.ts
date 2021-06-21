/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.oracle";

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
  blockHeight: Long;
  timestamp: Long;
  data: string;
}

export interface Mark {
  oracleId: string;
  timestamp: Long;
}

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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
    ) {
      message.minTurnoutPercentage = Long.fromString(
        object.minTurnoutPercentage
      );
    } else {
      message.minTurnoutPercentage = Long.ZERO;
    }
    if (object.maxResultAge !== undefined && object.maxResultAge !== null) {
      message.maxResultAge = Long.fromString(object.maxResultAge);
    } else {
      message.maxResultAge = Long.ZERO;
    }
    if (object.securityType !== undefined && object.securityType !== null) {
      message.securityType = String(object.securityType);
    } else {
      message.securityType = "";
    }
    if (object.resultStrategy !== undefined && object.resultStrategy !== null) {
      message.resultStrategy = String(object.resultStrategy);
    } else {
      message.resultStrategy = "";
    }
    if (object.resolution !== undefined && object.resolution !== null) {
      message.resolution = Long.fromString(object.resolution);
    } else {
      message.resolution = Long.ZERO;
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = String(object.spec);
    } else {
      message.spec = "";
    }
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
    ) {
      message.minTurnoutPercentage = object.minTurnoutPercentage as Long;
    } else {
      message.minTurnoutPercentage = Long.ZERO;
    }
    if (object.maxResultAge !== undefined && object.maxResultAge !== null) {
      message.maxResultAge = object.maxResultAge as Long;
    } else {
      message.maxResultAge = Long.ZERO;
    }
    if (object.securityType !== undefined && object.securityType !== null) {
      message.securityType = object.securityType;
    } else {
      message.securityType = "";
    }
    if (object.resultStrategy !== undefined && object.resultStrategy !== null) {
      message.resultStrategy = object.resultStrategy;
    } else {
      message.resultStrategy = "";
    }
    if (object.resolution !== undefined && object.resolution !== null) {
      message.resolution = object.resolution as Long;
    } else {
      message.resolution = Long.ZERO;
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = object.spec;
    } else {
      message.spec = "";
    }
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
    if (object.oracleId !== undefined && object.oracleId !== null) {
      message.oracleId = String(object.oracleId);
    } else {
      message.oracleId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromString(object.timestamp);
    } else {
      message.timestamp = Long.ZERO;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
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
    if (object.oracleId !== undefined && object.oracleId !== null) {
      message.oracleId = object.oracleId;
    } else {
      message.oracleId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp as Long;
    } else {
      message.timestamp = Long.ZERO;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    return message;
  },
};

const baseResult: object = {
  oracleId: "",
  blockHeight: Long.ZERO,
  timestamp: Long.ZERO,
  data: "",
};

export const Result = {
  encode(
    message: Result,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).int64(message.blockHeight);
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
        case 2:
          message.blockHeight = reader.int64() as Long;
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
    if (object.oracleId !== undefined && object.oracleId !== null) {
      message.oracleId = String(object.oracleId);
    } else {
      message.oracleId = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Long.fromString(object.blockHeight);
    } else {
      message.blockHeight = Long.ZERO;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromString(object.timestamp);
    } else {
      message.timestamp = Long.ZERO;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    return message;
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<Result>): Result {
    const message = { ...baseResult } as Result;
    if (object.oracleId !== undefined && object.oracleId !== null) {
      message.oracleId = object.oracleId;
    } else {
      message.oracleId = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight as Long;
    } else {
      message.blockHeight = Long.ZERO;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp as Long;
    } else {
      message.timestamp = Long.ZERO;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
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
    if (object.oracleId !== undefined && object.oracleId !== null) {
      message.oracleId = String(object.oracleId);
    } else {
      message.oracleId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromString(object.timestamp);
    } else {
      message.timestamp = Long.ZERO;
    }
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
    if (object.oracleId !== undefined && object.oracleId !== null) {
      message.oracleId = object.oracleId;
    } else {
      message.oracleId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp as Long;
    } else {
      message.timestamp = Long.ZERO;
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
