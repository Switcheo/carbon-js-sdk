/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ResponseCommit,
  RequestFinalizeBlock,
  ResponseFinalizeBlock,
} from "../../../tendermint/abci/types";

export const protobufPackage = "cosmos.store.v1beta1";

/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
  /** the store key for the KVStore this pair originates from */
  storeKey: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}

/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
  responseCommit?: ResponseCommit;
  requestFinalizeBlock?: RequestFinalizeBlock;
  /** TODO: should we renumber this? */
  responseFinalizeBlock?: ResponseFinalizeBlock;
}

const baseStoreKVPair: object = { storeKey: "", delete: false };

export const StoreKVPair = {
  encode(
    message: StoreKVPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.delete === true) {
      writer.uint32(16).bool(message.delete);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStoreKVPair } as StoreKVPair;
    message.key = new Uint8Array();
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message.delete = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreKVPair {
    const message = { ...baseStoreKVPair } as StoreKVPair;
    message.storeKey =
      object.storeKey !== undefined && object.storeKey !== null
        ? String(object.storeKey)
        : "";
    message.delete =
      object.delete !== undefined && object.delete !== null
        ? Boolean(object.delete)
        : false;
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: StoreKVPair): unknown {
    const obj: any = {};
    message.storeKey !== undefined && (obj.storeKey = message.storeKey);
    message.delete !== undefined && (obj.delete = message.delete);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<StoreKVPair>): StoreKVPair {
    const message = { ...baseStoreKVPair } as StoreKVPair;
    message.storeKey = object.storeKey ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

const baseBlockMetadata: object = {};

export const BlockMetadata = {
  encode(
    message: BlockMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.responseCommit !== undefined) {
      ResponseCommit.encode(
        message.responseCommit,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.requestFinalizeBlock !== undefined) {
      RequestFinalizeBlock.encode(
        message.requestFinalizeBlock,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.responseFinalizeBlock !== undefined) {
      ResponseFinalizeBlock.encode(
        message.responseFinalizeBlock,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockMetadata } as BlockMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.responseCommit = ResponseCommit.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.requestFinalizeBlock = RequestFinalizeBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.responseFinalizeBlock = ResponseFinalizeBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockMetadata {
    const message = { ...baseBlockMetadata } as BlockMetadata;
    message.responseCommit =
      object.responseCommit !== undefined && object.responseCommit !== null
        ? ResponseCommit.fromJSON(object.responseCommit)
        : undefined;
    message.requestFinalizeBlock =
      object.requestFinalizeBlock !== undefined &&
      object.requestFinalizeBlock !== null
        ? RequestFinalizeBlock.fromJSON(object.requestFinalizeBlock)
        : undefined;
    message.responseFinalizeBlock =
      object.responseFinalizeBlock !== undefined &&
      object.responseFinalizeBlock !== null
        ? ResponseFinalizeBlock.fromJSON(object.responseFinalizeBlock)
        : undefined;
    return message;
  },

  toJSON(message: BlockMetadata): unknown {
    const obj: any = {};
    message.responseCommit !== undefined &&
      (obj.responseCommit = message.responseCommit
        ? ResponseCommit.toJSON(message.responseCommit)
        : undefined);
    message.requestFinalizeBlock !== undefined &&
      (obj.requestFinalizeBlock = message.requestFinalizeBlock
        ? RequestFinalizeBlock.toJSON(message.requestFinalizeBlock)
        : undefined);
    message.responseFinalizeBlock !== undefined &&
      (obj.responseFinalizeBlock = message.responseFinalizeBlock
        ? ResponseFinalizeBlock.toJSON(message.responseFinalizeBlock)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockMetadata>): BlockMetadata {
    const message = { ...baseBlockMetadata } as BlockMetadata;
    message.responseCommit =
      object.responseCommit !== undefined && object.responseCommit !== null
        ? ResponseCommit.fromPartial(object.responseCommit)
        : undefined;
    message.requestFinalizeBlock =
      object.requestFinalizeBlock !== undefined &&
      object.requestFinalizeBlock !== null
        ? RequestFinalizeBlock.fromPartial(object.requestFinalizeBlock)
        : undefined;
    message.responseFinalizeBlock =
      object.responseFinalizeBlock !== undefined &&
      object.responseFinalizeBlock !== null
        ? ResponseFinalizeBlock.fromPartial(object.responseFinalizeBlock)
        : undefined;
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
