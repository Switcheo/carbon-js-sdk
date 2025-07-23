/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.btcx";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreate {
  creator: string;
  denom: string;
  redeemScript: string;
}

export interface MsgCreateResponse {
}

export interface MsgBind {
  creator: string;
  sourceAssetDenom: string;
  toChainId: Long;
  toAssetHash: Uint8Array;
}

export interface MsgBindResponse {
}

export interface MsgLock {
  fromAddress: string;
  sourceAssetDenom: string;
  toChainId: Long;
  toAddressBytes: Uint8Array;
  value: string;
}

export interface MsgLockResponse {
}

function createBaseMsgCreate(): MsgCreate {
  return { creator: "", denom: "", redeemScript: "" };
}

export const MsgCreate = {
  encode(message: MsgCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.redeemScript !== "") {
      writer.uint32(26).string(message.redeemScript);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreate();
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

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.redeemScript = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      redeemScript: isSet(object.redeemScript) ? String(object.redeemScript) : "",
    };
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.redeemScript !== undefined && (obj.redeemScript = message.redeemScript);
    return obj;
  },

  create(base?: DeepPartial<MsgCreate>): MsgCreate {
    return MsgCreate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreate>): MsgCreate {
    const message = createBaseMsgCreate();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.redeemScript = object.redeemScript ?? "";
    return message;
  },
};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {};
}

export const MsgCreateResponse = {
  encode(_: MsgCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreateResponse {
    return {};
  },

  toJSON(_: MsgCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    return MsgCreateResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    return message;
  },
};

function createBaseMsgBind(): MsgBind {
  return { creator: "", sourceAssetDenom: "", toChainId: Long.UZERO, toAssetHash: new Uint8Array() };
}

export const MsgBind = {
  encode(message: MsgBind, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sourceAssetDenom !== "") {
      writer.uint32(18).string(message.sourceAssetDenom);
    }
    if (!message.toChainId.isZero()) {
      writer.uint32(24).uint64(message.toChainId);
    }
    if (message.toAssetHash.length !== 0) {
      writer.uint32(34).bytes(message.toAssetHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBind {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBind();
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

          message.sourceAssetDenom = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toChainId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.toAssetHash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBind {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      sourceAssetDenom: isSet(object.sourceAssetDenom) ? String(object.sourceAssetDenom) : "",
      toChainId: isSet(object.toChainId) ? Long.fromValue(object.toChainId) : Long.UZERO,
      toAssetHash: isSet(object.toAssetHash) ? bytesFromBase64(object.toAssetHash) : new Uint8Array(),
    };
  },

  toJSON(message: MsgBind): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sourceAssetDenom !== undefined && (obj.sourceAssetDenom = message.sourceAssetDenom);
    message.toChainId !== undefined && (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.toAssetHash !== undefined &&
      (obj.toAssetHash = base64FromBytes(message.toAssetHash !== undefined ? message.toAssetHash : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<MsgBind>): MsgBind {
    return MsgBind.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBind>): MsgBind {
    const message = createBaseMsgBind();
    message.creator = object.creator ?? "";
    message.sourceAssetDenom = object.sourceAssetDenom ?? "";
    message.toChainId = (object.toChainId !== undefined && object.toChainId !== null)
      ? Long.fromValue(object.toChainId)
      : Long.UZERO;
    message.toAssetHash = object.toAssetHash ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgBindResponse(): MsgBindResponse {
  return {};
}

export const MsgBindResponse = {
  encode(_: MsgBindResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgBindResponse {
    return {};
  },

  toJSON(_: MsgBindResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgBindResponse>): MsgBindResponse {
    return MsgBindResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgBindResponse>): MsgBindResponse {
    const message = createBaseMsgBindResponse();
    return message;
  },
};

function createBaseMsgLock(): MsgLock {
  return { fromAddress: "", sourceAssetDenom: "", toChainId: Long.UZERO, toAddressBytes: new Uint8Array(), value: "" };
}

export const MsgLock = {
  encode(message: MsgLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.sourceAssetDenom !== "") {
      writer.uint32(18).string(message.sourceAssetDenom);
    }
    if (!message.toChainId.isZero()) {
      writer.uint32(24).uint64(message.toChainId);
    }
    if (message.toAddressBytes.length !== 0) {
      writer.uint32(34).bytes(message.toAddressBytes);
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fromAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceAssetDenom = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toChainId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.toAddressBytes = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLock {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      sourceAssetDenom: isSet(object.sourceAssetDenom) ? String(object.sourceAssetDenom) : "",
      toChainId: isSet(object.toChainId) ? Long.fromValue(object.toChainId) : Long.UZERO,
      toAddressBytes: isSet(object.toAddressBytes) ? bytesFromBase64(object.toAddressBytes) : new Uint8Array(),
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MsgLock): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.sourceAssetDenom !== undefined && (obj.sourceAssetDenom = message.sourceAssetDenom);
    message.toChainId !== undefined && (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.toAddressBytes !== undefined &&
      (obj.toAddressBytes = base64FromBytes(
        message.toAddressBytes !== undefined ? message.toAddressBytes : new Uint8Array(),
      ));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<MsgLock>): MsgLock {
    return MsgLock.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgLock>): MsgLock {
    const message = createBaseMsgLock();
    message.fromAddress = object.fromAddress ?? "";
    message.sourceAssetDenom = object.sourceAssetDenom ?? "";
    message.toChainId = (object.toChainId !== undefined && object.toChainId !== null)
      ? Long.fromValue(object.toChainId)
      : Long.UZERO;
    message.toAddressBytes = object.toAddressBytes ?? new Uint8Array();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMsgLockResponse(): MsgLockResponse {
  return {};
}

export const MsgLockResponse = {
  encode(_: MsgLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgLockResponse {
    return {};
  },

  toJSON(_: MsgLockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgLockResponse>): MsgLockResponse {
    return MsgLockResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgLockResponse>): MsgLockResponse {
    const message = createBaseMsgLockResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Create(request: MsgCreate): Promise<MsgCreateResponse>;
  Bind(request: MsgBind): Promise<MsgBindResponse>;
  Lock(request: MsgLock): Promise<MsgLockResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.btcx.Msg";
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Bind = this.Bind.bind(this);
    this.Lock = this.Lock.bind(this);
  }
  Create(request: MsgCreate): Promise<MsgCreateResponse> {
    const data = MsgCreate.encode(request).finish();
    const promise = this.rpc.request(this.service, "Create", data);
    return promise.then((data) => MsgCreateResponse.decode(_m0.Reader.create(data)));
  }

  Bind(request: MsgBind): Promise<MsgBindResponse> {
    const data = MsgBind.encode(request).finish();
    const promise = this.rpc.request(this.service, "Bind", data);
    return promise.then((data) => MsgBindResponse.decode(_m0.Reader.create(data)));
  }

  Lock(request: MsgLock): Promise<MsgLockResponse> {
    const data = MsgLock.encode(request).finish();
    const promise = this.rpc.request(this.service, "Lock", data);
    return promise.then((data) => MsgLockResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
