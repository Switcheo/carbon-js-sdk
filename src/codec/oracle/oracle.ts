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

  fromPartial<I extends Exact<DeepPartial<Oracle>, I>>(object: I): Oracle {
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

  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
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

  fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
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

  fromPartial<I extends Exact<DeepPartial<Mark>, I>>(object: I): Mark {
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
