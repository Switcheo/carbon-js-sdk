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

function createBaseVote(): Vote {
  return { validator: new Uint8Array(), oracleId: "", timestamp: Long.UZERO, data: "" };
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.oracleId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timestamp = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vote {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = base64FromBytes(message.validator !== undefined ? message.validator : new Uint8Array()));
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create(base?: DeepPartial<Vote>): Vote {
    return Vote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    message.validator = object.validator ?? new Uint8Array();
    message.oracleId = object.oracleId ?? "";
    message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
      ? Long.fromValue(object.timestamp)
      : Long.UZERO;
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseGossipVote(): GossipVote {
  return {
    validator: new Uint8Array(),
    publicKey: new Uint8Array(),
    signType: "",
    votes: [],
    signedTimestamp: Long.UZERO,
    signature: new Uint8Array(),
  };
}

export const GossipVote = {
  encode(message: GossipVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGossipVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.publicKey = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.votes.push(Vote.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.signedTimestamp = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GossipVote {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : new Uint8Array(),
      signType: isSet(object.signType) ? String(object.signType) : "",
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      signedTimestamp: isSet(object.signedTimestamp) ? Long.fromValue(object.signedTimestamp) : Long.UZERO,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: GossipVote): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = base64FromBytes(message.validator !== undefined ? message.validator : new Uint8Array()));
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(message.publicKey !== undefined ? message.publicKey : new Uint8Array()));
    message.signType !== undefined && (obj.signType = message.signType);
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.signedTimestamp !== undefined && (obj.signedTimestamp = (message.signedTimestamp || Long.UZERO).toString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GossipVote>): GossipVote {
    return GossipVote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GossipVote>): GossipVote {
    const message = createBaseGossipVote();
    message.validator = object.validator ?? new Uint8Array();
    message.publicKey = object.publicKey ?? new Uint8Array();
    message.signType = object.signType ?? "";
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    message.signedTimestamp = (object.signedTimestamp !== undefined && object.signedTimestamp !== null)
      ? Long.fromValue(object.signedTimestamp)
      : Long.UZERO;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseCanonicalGossipVote(): CanonicalGossipVote {
  return { validator: new Uint8Array(), publicKey: new Uint8Array(), signType: "", votes: [] };
}

export const CanonicalGossipVote = {
  encode(message: CanonicalGossipVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanonicalGossipVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.publicKey = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.votes.push(Vote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CanonicalGossipVote {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : new Uint8Array(),
      signType: isSet(object.signType) ? String(object.signType) : "",
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
    };
  },

  toJSON(message: CanonicalGossipVote): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = base64FromBytes(message.validator !== undefined ? message.validator : new Uint8Array()));
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(message.publicKey !== undefined ? message.publicKey : new Uint8Array()));
    message.signType !== undefined && (obj.signType = message.signType);
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CanonicalGossipVote>): CanonicalGossipVote {
    return CanonicalGossipVote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CanonicalGossipVote>): CanonicalGossipVote {
    const message = createBaseCanonicalGossipVote();
    message.validator = object.validator ?? new Uint8Array();
    message.publicKey = object.publicKey ?? new Uint8Array();
    message.signType = object.signType ?? "";
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOracle(): Oracle {
  return {
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
}

export const Oracle = {
  encode(message: Oracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.status = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.minTurnoutPercentage = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxResultAge = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.securityType = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.resultStrategy = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.resolution = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.spec = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Oracle {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : "",
      status: isSet(object.status) ? String(object.status) : "",
      minTurnoutPercentage: isSet(object.minTurnoutPercentage) ? String(object.minTurnoutPercentage) : "",
      maxResultAge: isSet(object.maxResultAge) ? String(object.maxResultAge) : "",
      securityType: isSet(object.securityType) ? String(object.securityType) : "",
      resultStrategy: isSet(object.resultStrategy) ? String(object.resultStrategy) : "",
      resolution: isSet(object.resolution) ? String(object.resolution) : "",
      spec: isSet(object.spec) ? String(object.spec) : "",
    };
  },

  toJSON(message: Oracle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined && (obj.description = message.description);
    message.status !== undefined && (obj.status = message.status);
    message.minTurnoutPercentage !== undefined && (obj.minTurnoutPercentage = message.minTurnoutPercentage);
    message.maxResultAge !== undefined && (obj.maxResultAge = message.maxResultAge);
    message.securityType !== undefined && (obj.securityType = message.securityType);
    message.resultStrategy !== undefined && (obj.resultStrategy = message.resultStrategy);
    message.resolution !== undefined && (obj.resolution = message.resolution);
    message.spec !== undefined && (obj.spec = message.spec);
    return obj;
  },

  create(base?: DeepPartial<Oracle>): Oracle {
    return Oracle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Oracle>): Oracle {
    const message = createBaseOracle();
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

function createBaseResult(): Result {
  return { oracleId: "", timestamp: Long.ZERO, data: "" };
}

export const Result = {
  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oracleId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timestamp = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Result {
    return {
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create(base?: DeepPartial<Result>): Result {
    return Result.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Result>): Result {
    const message = createBaseResult();
    message.oracleId = object.oracleId ?? "";
    message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
      ? Long.fromValue(object.timestamp)
      : Long.ZERO;
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseGossipVotes(): GossipVotes {
  return { GossipVotes: [] };
}

export const GossipVotes = {
  encode(message: GossipVotes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.GossipVotes) {
      GossipVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GossipVotes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGossipVotes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.GossipVotes.push(GossipVote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GossipVotes {
    return {
      GossipVotes: Array.isArray(object?.GossipVotes) ? object.GossipVotes.map((e: any) => GossipVote.fromJSON(e)) : [],
    };
  },

  toJSON(message: GossipVotes): unknown {
    const obj: any = {};
    if (message.GossipVotes) {
      obj.GossipVotes = message.GossipVotes.map((e) => e ? GossipVote.toJSON(e) : undefined);
    } else {
      obj.GossipVotes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GossipVotes>): GossipVotes {
    return GossipVotes.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GossipVotes>): GossipVotes {
    const message = createBaseGossipVotes();
    message.GossipVotes = object.GossipVotes?.map((e) => GossipVote.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
