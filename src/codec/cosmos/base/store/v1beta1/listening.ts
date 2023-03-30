/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  RequestBeginBlock,
  ResponseBeginBlock,
  RequestEndBlock,
  ResponseEndBlock,
  ResponseCommit,
  RequestDeliverTx,
  ResponseDeliverTx,
} from "../../../../tendermint/abci/types";

export const protobufPackage = "cosmos.base.store.v1beta1";

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
  requestBeginBlock?: RequestBeginBlock;
  responseBeginBlock?: ResponseBeginBlock;
  deliverTxs: BlockMetadata_DeliverTx[];
  requestEndBlock?: RequestEndBlock;
  responseEndBlock?: ResponseEndBlock;
  responseCommit?: ResponseCommit;
}

/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTx {
  request?: RequestDeliverTx;
  response?: ResponseDeliverTx;
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
    if (message.requestBeginBlock !== undefined) {
      RequestBeginBlock.encode(
        message.requestBeginBlock,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.responseBeginBlock !== undefined) {
      ResponseBeginBlock.encode(
        message.responseBeginBlock,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.deliverTxs) {
      BlockMetadata_DeliverTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.requestEndBlock !== undefined) {
      RequestEndBlock.encode(
        message.requestEndBlock,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.responseEndBlock !== undefined) {
      ResponseEndBlock.encode(
        message.responseEndBlock,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.responseCommit !== undefined) {
      ResponseCommit.encode(
        message.responseCommit,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockMetadata } as BlockMetadata;
    message.deliverTxs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestBeginBlock = RequestBeginBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.responseBeginBlock = ResponseBeginBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.deliverTxs.push(
            BlockMetadata_DeliverTx.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.requestEndBlock = RequestEndBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.responseEndBlock = ResponseEndBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.responseCommit = ResponseCommit.decode(
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
    message.requestBeginBlock =
      object.requestBeginBlock !== undefined &&
      object.requestBeginBlock !== null
        ? RequestBeginBlock.fromJSON(object.requestBeginBlock)
        : undefined;
    message.responseBeginBlock =
      object.responseBeginBlock !== undefined &&
      object.responseBeginBlock !== null
        ? ResponseBeginBlock.fromJSON(object.responseBeginBlock)
        : undefined;
    message.deliverTxs = (object.deliverTxs ?? []).map((e: any) =>
      BlockMetadata_DeliverTx.fromJSON(e)
    );
    message.requestEndBlock =
      object.requestEndBlock !== undefined && object.requestEndBlock !== null
        ? RequestEndBlock.fromJSON(object.requestEndBlock)
        : undefined;
    message.responseEndBlock =
      object.responseEndBlock !== undefined && object.responseEndBlock !== null
        ? ResponseEndBlock.fromJSON(object.responseEndBlock)
        : undefined;
    message.responseCommit =
      object.responseCommit !== undefined && object.responseCommit !== null
        ? ResponseCommit.fromJSON(object.responseCommit)
        : undefined;
    return message;
  },

  toJSON(message: BlockMetadata): unknown {
    const obj: any = {};
    message.requestBeginBlock !== undefined &&
      (obj.requestBeginBlock = message.requestBeginBlock
        ? RequestBeginBlock.toJSON(message.requestBeginBlock)
        : undefined);
    message.responseBeginBlock !== undefined &&
      (obj.responseBeginBlock = message.responseBeginBlock
        ? ResponseBeginBlock.toJSON(message.responseBeginBlock)
        : undefined);
    if (message.deliverTxs) {
      obj.deliverTxs = message.deliverTxs.map((e) =>
        e ? BlockMetadata_DeliverTx.toJSON(e) : undefined
      );
    } else {
      obj.deliverTxs = [];
    }
    message.requestEndBlock !== undefined &&
      (obj.requestEndBlock = message.requestEndBlock
        ? RequestEndBlock.toJSON(message.requestEndBlock)
        : undefined);
    message.responseEndBlock !== undefined &&
      (obj.responseEndBlock = message.responseEndBlock
        ? ResponseEndBlock.toJSON(message.responseEndBlock)
        : undefined);
    message.responseCommit !== undefined &&
      (obj.responseCommit = message.responseCommit
        ? ResponseCommit.toJSON(message.responseCommit)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockMetadata>): BlockMetadata {
    const message = { ...baseBlockMetadata } as BlockMetadata;
    message.requestBeginBlock =
      object.requestBeginBlock !== undefined &&
      object.requestBeginBlock !== null
        ? RequestBeginBlock.fromPartial(object.requestBeginBlock)
        : undefined;
    message.responseBeginBlock =
      object.responseBeginBlock !== undefined &&
      object.responseBeginBlock !== null
        ? ResponseBeginBlock.fromPartial(object.responseBeginBlock)
        : undefined;
    message.deliverTxs = (object.deliverTxs ?? []).map((e) =>
      BlockMetadata_DeliverTx.fromPartial(e)
    );
    message.requestEndBlock =
      object.requestEndBlock !== undefined && object.requestEndBlock !== null
        ? RequestEndBlock.fromPartial(object.requestEndBlock)
        : undefined;
    message.responseEndBlock =
      object.responseEndBlock !== undefined && object.responseEndBlock !== null
        ? ResponseEndBlock.fromPartial(object.responseEndBlock)
        : undefined;
    message.responseCommit =
      object.responseCommit !== undefined && object.responseCommit !== null
        ? ResponseCommit.fromPartial(object.responseCommit)
        : undefined;
    return message;
  },
};

const baseBlockMetadata_DeliverTx: object = {};

export const BlockMetadata_DeliverTx = {
  encode(
    message: BlockMetadata_DeliverTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      RequestDeliverTx.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      ResponseDeliverTx.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BlockMetadata_DeliverTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBlockMetadata_DeliverTx,
    } as BlockMetadata_DeliverTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.response = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockMetadata_DeliverTx {
    const message = {
      ...baseBlockMetadata_DeliverTx,
    } as BlockMetadata_DeliverTx;
    message.request =
      object.request !== undefined && object.request !== null
        ? RequestDeliverTx.fromJSON(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? ResponseDeliverTx.fromJSON(object.response)
        : undefined;
    return message;
  },

  toJSON(message: BlockMetadata_DeliverTx): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? RequestDeliverTx.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? ResponseDeliverTx.toJSON(message.response)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BlockMetadata_DeliverTx>
  ): BlockMetadata_DeliverTx {
    const message = {
      ...baseBlockMetadata_DeliverTx,
    } as BlockMetadata_DeliverTx;
    message.request =
      object.request !== undefined && object.request !== null
        ? RequestDeliverTx.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? ResponseDeliverTx.fromPartial(object.response)
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
