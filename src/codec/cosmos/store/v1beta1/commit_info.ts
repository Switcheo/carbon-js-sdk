/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.store.v1beta1";

/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
  version: Long;
  storeInfos: StoreInfo[];
  timestamp?: Date;
}

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
  name: string;
  commitId?: CommitID;
}

/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 */
export interface CommitID {
  version: Long;
  hash: Uint8Array;
}

const baseCommitInfo: object = { version: Long.ZERO };

export const CommitInfo = {
  encode(
    message: CommitInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }
    for (const v of message.storeInfos) {
      StoreInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitInfo } as CommitInfo;
    message.storeInfos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64() as Long;
          break;
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitInfo {
    const message = { ...baseCommitInfo } as CommitInfo;
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.ZERO;
    message.storeInfos = (object.storeInfos ?? []).map((e: any) =>
      StoreInfo.fromJSON(e)
    );
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    return message;
  },

  toJSON(message: CommitInfo): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = (message.version || Long.ZERO).toString());
    if (message.storeInfos) {
      obj.storeInfos = message.storeInfos.map((e) =>
        e ? StoreInfo.toJSON(e) : undefined
      );
    } else {
      obj.storeInfos = [];
    }
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<CommitInfo>): CommitInfo {
    const message = { ...baseCommitInfo } as CommitInfo;
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.ZERO;
    message.storeInfos = (object.storeInfos ?? []).map((e) =>
      StoreInfo.fromPartial(e)
    );
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

const baseStoreInfo: object = { name: "" };

export const StoreInfo = {
  encode(
    message: StoreInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStoreInfo } as StoreInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreInfo {
    const message = { ...baseStoreInfo } as StoreInfo;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.commitId =
      object.commitId !== undefined && object.commitId !== null
        ? CommitID.fromJSON(object.commitId)
        : undefined;
    return message;
  },

  toJSON(message: StoreInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.commitId !== undefined &&
      (obj.commitId = message.commitId
        ? CommitID.toJSON(message.commitId)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StoreInfo>): StoreInfo {
    const message = { ...baseStoreInfo } as StoreInfo;
    message.name = object.name ?? "";
    message.commitId =
      object.commitId !== undefined && object.commitId !== null
        ? CommitID.fromPartial(object.commitId)
        : undefined;
    return message;
  },
};

const baseCommitID: object = { version: Long.ZERO };

export const CommitID = {
  encode(
    message: CommitID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitID } as CommitID;
    message.hash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64() as Long;
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitID {
    const message = { ...baseCommitID } as CommitID;
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.ZERO;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? bytesFromBase64(object.hash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: CommitID): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = (message.version || Long.ZERO).toString());
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<CommitID>): CommitID {
    const message = { ...baseCommitID } as CommitID;
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.ZERO;
    message.hash = object.hash ?? new Uint8Array();
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
