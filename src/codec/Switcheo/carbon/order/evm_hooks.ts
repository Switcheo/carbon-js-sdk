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

function createBaseIncomingEVMOrder(): IncomingEVMOrder {
  return { orderKey: "", orderId: "", contract: new Uint8Array(), evmCreator: new Uint8Array() };
}

export const IncomingEVMOrder = {
  encode(message: IncomingEVMOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncomingEVMOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contract = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.evmCreator = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IncomingEVMOrder {
    return {
      orderKey: isSet(object.orderKey) ? String(object.orderKey) : "",
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
      contract: isSet(object.contract) ? bytesFromBase64(object.contract) : new Uint8Array(),
      evmCreator: isSet(object.evmCreator) ? bytesFromBase64(object.evmCreator) : new Uint8Array(),
    };
  },

  toJSON(message: IncomingEVMOrder): unknown {
    const obj: any = {};
    message.orderKey !== undefined && (obj.orderKey = message.orderKey);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.contract !== undefined &&
      (obj.contract = base64FromBytes(message.contract !== undefined ? message.contract : new Uint8Array()));
    message.evmCreator !== undefined &&
      (obj.evmCreator = base64FromBytes(message.evmCreator !== undefined ? message.evmCreator : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<IncomingEVMOrder>): IncomingEVMOrder {
    return IncomingEVMOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IncomingEVMOrder>): IncomingEVMOrder {
    const message = createBaseIncomingEVMOrder();
    message.orderKey = object.orderKey ?? "";
    message.orderId = object.orderId ?? "";
    message.contract = object.contract ?? new Uint8Array();
    message.evmCreator = object.evmCreator ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryEVMOrderQueue(): QueryEVMOrderQueue {
  return { contractAddress: new Uint8Array(), requests: [] };
}

export const QueryEVMOrderQueue = {
  encode(message: QueryEVMOrderQueue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress.length !== 0) {
      writer.uint32(10).bytes(message.contractAddress);
    }
    for (const v of message.requests) {
      QueryEVMOrderRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEVMOrderQueue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEVMOrderQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddress = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requests.push(QueryEVMOrderRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEVMOrderQueue {
    return {
      contractAddress: isSet(object.contractAddress) ? bytesFromBase64(object.contractAddress) : new Uint8Array(),
      requests: Array.isArray(object?.requests)
        ? object.requests.map((e: any) => QueryEVMOrderRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryEVMOrderQueue): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = base64FromBytes(
        message.contractAddress !== undefined ? message.contractAddress : new Uint8Array(),
      ));
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? QueryEVMOrderRequest.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryEVMOrderQueue>): QueryEVMOrderQueue {
    return QueryEVMOrderQueue.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEVMOrderQueue>): QueryEVMOrderQueue {
    const message = createBaseQueryEVMOrderQueue();
    message.contractAddress = object.contractAddress ?? new Uint8Array();
    message.requests = object.requests?.map((e) => QueryEVMOrderRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryEVMOrderRequest(): QueryEVMOrderRequest {
  return { orderId: "", orderKey: "", caller: new Uint8Array() };
}

export const QueryEVMOrderRequest = {
  encode(message: QueryEVMOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEVMOrderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEVMOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orderKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.caller = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEVMOrderRequest {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
      orderKey: isSet(object.orderKey) ? String(object.orderKey) : "",
      caller: isSet(object.caller) ? bytesFromBase64(object.caller) : new Uint8Array(),
    };
  },

  toJSON(message: QueryEVMOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.orderKey !== undefined && (obj.orderKey = message.orderKey);
    message.caller !== undefined &&
      (obj.caller = base64FromBytes(message.caller !== undefined ? message.caller : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<QueryEVMOrderRequest>): QueryEVMOrderRequest {
    return QueryEVMOrderRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEVMOrderRequest>): QueryEVMOrderRequest {
    const message = createBaseQueryEVMOrderRequest();
    message.orderId = object.orderId ?? "";
    message.orderKey = object.orderKey ?? "";
    message.caller = object.caller ?? new Uint8Array();
    return message;
  },
};

function createBaseEVMContract(): EVMContract {
  return { version: Long.UZERO, contractType: "", address: "", active: false };
}

export const EVMContract = {
  encode(message: EVMContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEVMContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.version = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EVMContract {
    return {
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
      contractType: isSet(object.contractType) ? String(object.contractType) : "",
      address: isSet(object.address) ? String(object.address) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: EVMContract): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    message.contractType !== undefined && (obj.contractType = message.contractType);
    message.address !== undefined && (obj.address = message.address);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  create(base?: DeepPartial<EVMContract>): EVMContract {
    return EVMContract.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EVMContract>): EVMContract {
    const message = createBaseEVMContract();
    message.version = (object.version !== undefined && object.version !== null)
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
