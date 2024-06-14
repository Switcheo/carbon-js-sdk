/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tendermint.oracle";

export interface Vote {
  validator: Uint8Array;
  oracleId: string;
  timestamp: Long;
  data: string;
}

export interface GossipVote {
  validator: Uint8Array;
  publicKey: Uint8Array;
  signType: string;
  votes: Vote[];
  signedTimestamp: Long;
  signature: Uint8Array;
}

export interface CanonicalGossipVote {
  validator: Uint8Array;
  publicKey: Uint8Array;
  signType: string;
  votes: Vote[];
}

export interface Oracle {
  creator: string;
  id: string;
  description: string;
  status: string;
  minTurnoutPercentage: string;
  maxResultAge: string;
  securityType: string;
  resultStrategy: string;
  resolution: string;
  spec: string;
}

export interface Result {
  oracleId: string;
  timestamp: Long;
  data: string;
}

export interface GossipVotes {
  GossipVotes: GossipVote[];
}

const baseVote: object = { oracleId: "", timestamp: Long.UZERO, data: "" };

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }
    if (message.oracleId !== "") {
      writer.uint32(18).string(message.oracleId);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    message.validator = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.bytes();
          break;
        case 2:
          message.oracleId = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64() as Long;
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

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? bytesFromBase64(object.validator)
        : new Uint8Array();
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.UZERO;
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = base64FromBytes(
        message.validator !== undefined ? message.validator : new Uint8Array()
      ));
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    message.validator = object.validator ?? new Uint8Array();
    message.oracleId = object.oracleId ?? "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.UZERO;
    message.data = object.data ?? "";
    return message;
  },
};

const baseGossipVote: object = { signType: "", signedTimestamp: Long.UZERO };

export const GossipVote = {
  encode(
    message: GossipVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(18).bytes(message.publicKey);
    }
    if (message.signType !== "") {
      writer.uint32(26).string(message.signType);
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.signedTimestamp.isZero()) {
      writer.uint32(40).uint64(message.signedTimestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(50).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GossipVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGossipVote } as GossipVote;
    message.votes = [];
    message.validator = new Uint8Array();
    message.publicKey = new Uint8Array();
    message.signature = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.bytes();
          break;
        case 2:
          message.publicKey = reader.bytes();
          break;
        case 3:
          message.signType = reader.string();
          break;
        case 4:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 5:
          message.signedTimestamp = reader.uint64() as Long;
          break;
        case 6:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GossipVote {
    const message = { ...baseGossipVote } as GossipVote;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? bytesFromBase64(object.validator)
        : new Uint8Array();
    message.publicKey =
      object.publicKey !== undefined && object.publicKey !== null
        ? bytesFromBase64(object.publicKey)
        : new Uint8Array();
    message.signType =
      object.signType !== undefined && object.signType !== null
        ? String(object.signType)
        : "";
    message.votes = (object.votes ?? []).map((e: any) => Vote.fromJSON(e));
    message.signedTimestamp =
      object.signedTimestamp !== undefined && object.signedTimestamp !== null
        ? Long.fromString(object.signedTimestamp)
        : Long.UZERO;
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? bytesFromBase64(object.signature)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GossipVote): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = base64FromBytes(
        message.validator !== undefined ? message.validator : new Uint8Array()
      ));
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(
        message.publicKey !== undefined ? message.publicKey : new Uint8Array()
      ));
    message.signType !== undefined && (obj.signType = message.signType);
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.signedTimestamp !== undefined &&
      (obj.signedTimestamp = (
        message.signedTimestamp || Long.UZERO
      ).toString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<GossipVote>): GossipVote {
    const message = { ...baseGossipVote } as GossipVote;
    message.validator = object.validator ?? new Uint8Array();
    message.publicKey = object.publicKey ?? new Uint8Array();
    message.signType = object.signType ?? "";
    message.votes = (object.votes ?? []).map((e) => Vote.fromPartial(e));
    message.signedTimestamp =
      object.signedTimestamp !== undefined && object.signedTimestamp !== null
        ? Long.fromValue(object.signedTimestamp)
        : Long.UZERO;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

const baseCanonicalGossipVote: object = { signType: "" };

export const CanonicalGossipVote = {
  encode(
    message: CanonicalGossipVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(18).bytes(message.publicKey);
    }
    if (message.signType !== "") {
      writer.uint32(26).string(message.signType);
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalGossipVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCanonicalGossipVote } as CanonicalGossipVote;
    message.votes = [];
    message.validator = new Uint8Array();
    message.publicKey = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.bytes();
          break;
        case 2:
          message.publicKey = reader.bytes();
          break;
        case 3:
          message.signType = reader.string();
          break;
        case 4:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CanonicalGossipVote {
    const message = { ...baseCanonicalGossipVote } as CanonicalGossipVote;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? bytesFromBase64(object.validator)
        : new Uint8Array();
    message.publicKey =
      object.publicKey !== undefined && object.publicKey !== null
        ? bytesFromBase64(object.publicKey)
        : new Uint8Array();
    message.signType =
      object.signType !== undefined && object.signType !== null
        ? String(object.signType)
        : "";
    message.votes = (object.votes ?? []).map((e: any) => Vote.fromJSON(e));
    return message;
  },

  toJSON(message: CanonicalGossipVote): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = base64FromBytes(
        message.validator !== undefined ? message.validator : new Uint8Array()
      ));
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(
        message.publicKey !== undefined ? message.publicKey : new Uint8Array()
      ));
    message.signType !== undefined && (obj.signType = message.signType);
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CanonicalGossipVote>): CanonicalGossipVote {
    const message = { ...baseCanonicalGossipVote } as CanonicalGossipVote;
    message.validator = object.validator ?? new Uint8Array();
    message.publicKey = object.publicKey ?? new Uint8Array();
    message.signType = object.signType ?? "";
    message.votes = (object.votes ?? []).map((e) => Vote.fromPartial(e));
    return message;
  },
};

const baseOracle: object = {
  creator: "",
  id: "",
  description: "",
  status: "",
  minTurnoutPercentage: "",
  maxResultAge: "",
  securityType: "",
  resultStrategy: "",
  resolution: "",
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
    if (message.minTurnoutPercentage !== "") {
      writer.uint32(42).string(message.minTurnoutPercentage);
    }
    if (message.maxResultAge !== "") {
      writer.uint32(50).string(message.maxResultAge);
    }
    if (message.securityType !== "") {
      writer.uint32(58).string(message.securityType);
    }
    if (message.resultStrategy !== "") {
      writer.uint32(66).string(message.resultStrategy);
    }
    if (message.resolution !== "") {
      writer.uint32(74).string(message.resolution);
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
          message.minTurnoutPercentage = reader.string();
          break;
        case 6:
          message.maxResultAge = reader.string();
          break;
        case 7:
          message.securityType = reader.string();
          break;
        case 8:
          message.resultStrategy = reader.string();
          break;
        case 9:
          message.resolution = reader.string();
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
        ? String(object.minTurnoutPercentage)
        : "";
    message.maxResultAge =
      object.maxResultAge !== undefined && object.maxResultAge !== null
        ? String(object.maxResultAge)
        : "";
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
        ? String(object.resolution)
        : "";
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
      (obj.minTurnoutPercentage = message.minTurnoutPercentage);
    message.maxResultAge !== undefined &&
      (obj.maxResultAge = message.maxResultAge);
    message.securityType !== undefined &&
      (obj.securityType = message.securityType);
    message.resultStrategy !== undefined &&
      (obj.resultStrategy = message.resultStrategy);
    message.resolution !== undefined && (obj.resolution = message.resolution);
    message.spec !== undefined && (obj.spec = message.spec);
    return obj;
  },

  fromPartial(object: DeepPartial<Oracle>): Oracle {
    const message = { ...baseOracle } as Oracle;
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? "";
    message.minTurnoutPercentage = object.minTurnoutPercentage ?? "";
    message.maxResultAge = object.maxResultAge ?? "";
    message.securityType = object.securityType ?? "";
    message.resultStrategy = object.resultStrategy ?? "";
    message.resolution = object.resolution ?? "";
    message.spec = object.spec ?? "";
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

const baseGossipVotes: object = {};

export const GossipVotes = {
  encode(
    message: GossipVotes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.GossipVotes) {
      GossipVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GossipVotes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGossipVotes } as GossipVotes;
    message.GossipVotes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.GossipVotes.push(GossipVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GossipVotes {
    const message = { ...baseGossipVotes } as GossipVotes;
    message.GossipVotes = (object.GossipVotes ?? []).map((e: any) =>
      GossipVote.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GossipVotes): unknown {
    const obj: any = {};
    if (message.GossipVotes) {
      obj.GossipVotes = message.GossipVotes.map((e) =>
        e ? GossipVote.toJSON(e) : undefined
      );
    } else {
      obj.GossipVotes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GossipVotes>): GossipVotes {
    const message = { ...baseGossipVotes } as GossipVotes;
    message.GossipVotes = (object.GossipVotes ?? []).map((e) =>
      GossipVote.fromPartial(e)
    );
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
