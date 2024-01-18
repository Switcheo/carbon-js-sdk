/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.order";

export interface IncomingEVMOrder {
  orderKey: string;
  orderId: string;
  contract: Uint8Array;
  evmCreator: Uint8Array;
}

export interface QueryEVMOrderQueue {
  contractAddress: Uint8Array;
  requests: QueryEVMOrderRequest[];
}

export interface QueryEVMOrderRequest {
  orderId: string;
  orderKey: string;
  caller: Uint8Array;
}

export interface EVMContract {
  version: Long;
  contractType: string;
  address: string;
  active: boolean;
}

const baseIncomingEVMOrder: object = { orderKey: "", orderId: "" };

export const IncomingEVMOrder = {
  encode(
    message: IncomingEVMOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderKey !== "") {
      writer.uint32(10).string(message.orderKey);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    if (message.contract.length !== 0) {
      writer.uint32(26).bytes(message.contract);
    }
    if (message.evmCreator.length !== 0) {
      writer.uint32(34).bytes(message.evmCreator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncomingEVMOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIncomingEVMOrder } as IncomingEVMOrder;
    message.contract = new Uint8Array();
    message.evmCreator = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderKey = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.contract = reader.bytes();
          break;
        case 4:
          message.evmCreator = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IncomingEVMOrder {
    const message = { ...baseIncomingEVMOrder } as IncomingEVMOrder;
    message.orderKey =
      object.orderKey !== undefined && object.orderKey !== null
        ? String(object.orderKey)
        : "";
    message.orderId =
      object.orderId !== undefined && object.orderId !== null
        ? String(object.orderId)
        : "";
    message.contract =
      object.contract !== undefined && object.contract !== null
        ? bytesFromBase64(object.contract)
        : new Uint8Array();
    message.evmCreator =
      object.evmCreator !== undefined && object.evmCreator !== null
        ? bytesFromBase64(object.evmCreator)
        : new Uint8Array();
    return message;
  },

  toJSON(message: IncomingEVMOrder): unknown {
    const obj: any = {};
    message.orderKey !== undefined && (obj.orderKey = message.orderKey);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.contract !== undefined &&
      (obj.contract = base64FromBytes(
        message.contract !== undefined ? message.contract : new Uint8Array()
      ));
    message.evmCreator !== undefined &&
      (obj.evmCreator = base64FromBytes(
        message.evmCreator !== undefined ? message.evmCreator : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<IncomingEVMOrder>): IncomingEVMOrder {
    const message = { ...baseIncomingEVMOrder } as IncomingEVMOrder;
    message.orderKey = object.orderKey ?? "";
    message.orderId = object.orderId ?? "";
    message.contract = object.contract ?? new Uint8Array();
    message.evmCreator = object.evmCreator ?? new Uint8Array();
    return message;
  },
};

const baseQueryEVMOrderQueue: object = {};

export const QueryEVMOrderQueue = {
  encode(
    message: QueryEVMOrderQueue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractAddress.length !== 0) {
      writer.uint32(10).bytes(message.contractAddress);
    }
    for (const v of message.requests) {
      QueryEVMOrderRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEVMOrderQueue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEVMOrderQueue } as QueryEVMOrderQueue;
    message.requests = [];
    message.contractAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.bytes();
          break;
        case 2:
          message.requests.push(
            QueryEVMOrderRequest.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEVMOrderQueue {
    const message = { ...baseQueryEVMOrderQueue } as QueryEVMOrderQueue;
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? bytesFromBase64(object.contractAddress)
        : new Uint8Array();
    message.requests = (object.requests ?? []).map((e: any) =>
      QueryEVMOrderRequest.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryEVMOrderQueue): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = base64FromBytes(
        message.contractAddress !== undefined
          ? message.contractAddress
          : new Uint8Array()
      ));
    if (message.requests) {
      obj.requests = message.requests.map((e) =>
        e ? QueryEVMOrderRequest.toJSON(e) : undefined
      );
    } else {
      obj.requests = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEVMOrderQueue>): QueryEVMOrderQueue {
    const message = { ...baseQueryEVMOrderQueue } as QueryEVMOrderQueue;
    message.contractAddress = object.contractAddress ?? new Uint8Array();
    message.requests = (object.requests ?? []).map((e) =>
      QueryEVMOrderRequest.fromPartial(e)
    );
    return message;
  },
};

const baseQueryEVMOrderRequest: object = { orderId: "", orderKey: "" };

export const QueryEVMOrderRequest = {
  encode(
    message: QueryEVMOrderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.orderKey !== "") {
      writer.uint32(18).string(message.orderKey);
    }
    if (message.caller.length !== 0) {
      writer.uint32(26).bytes(message.caller);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEVMOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEVMOrderRequest } as QueryEVMOrderRequest;
    message.caller = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.orderKey = reader.string();
          break;
        case 3:
          message.caller = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEVMOrderRequest {
    const message = { ...baseQueryEVMOrderRequest } as QueryEVMOrderRequest;
    message.orderId =
      object.orderId !== undefined && object.orderId !== null
        ? String(object.orderId)
        : "";
    message.orderKey =
      object.orderKey !== undefined && object.orderKey !== null
        ? String(object.orderKey)
        : "";
    message.caller =
      object.caller !== undefined && object.caller !== null
        ? bytesFromBase64(object.caller)
        : new Uint8Array();
    return message;
  },

  toJSON(message: QueryEVMOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.orderKey !== undefined && (obj.orderKey = message.orderKey);
    message.caller !== undefined &&
      (obj.caller = base64FromBytes(
        message.caller !== undefined ? message.caller : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEVMOrderRequest>): QueryEVMOrderRequest {
    const message = { ...baseQueryEVMOrderRequest } as QueryEVMOrderRequest;
    message.orderId = object.orderId ?? "";
    message.orderKey = object.orderKey ?? "";
    message.caller = object.caller ?? new Uint8Array();
    return message;
  },
};

const baseEVMContract: object = {
  version: Long.UZERO,
  contractType: "",
  address: "",
  active: false,
};

export const EVMContract = {
  encode(
    message: EVMContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).uint64(message.version);
    }
    if (message.contractType !== "") {
      writer.uint32(18).string(message.contractType);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EVMContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEVMContract } as EVMContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint64() as Long;
          break;
        case 2:
          message.contractType = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EVMContract {
    const message = { ...baseEVMContract } as EVMContract;
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO;
    message.contractType =
      object.contractType !== undefined && object.contractType !== null
        ? String(object.contractType)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.active =
      object.active !== undefined && object.active !== null
        ? Boolean(object.active)
        : false;
    return message;
  },

  toJSON(message: EVMContract): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.contractType !== undefined &&
      (obj.contractType = message.contractType);
    message.address !== undefined && (obj.address = message.address);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: DeepPartial<EVMContract>): EVMContract {
    const message = { ...baseEVMContract } as EVMContract;
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    message.contractType = object.contractType ?? "";
    message.address = object.address ?? "";
    message.active = object.active ?? false;
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
