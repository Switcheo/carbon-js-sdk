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

export interface MsgCreateResponse {}

export interface MsgBind {
  creator: string;
  sourceAssetDenom: string;
  toChainId: Long;
  toAssetHash: Uint8Array;
}

export interface MsgBindResponse {}

export interface MsgLock {
  fromAddress: string;
  sourceAssetDenom: string;
  toChainId: Long;
  toAddressBytes: Uint8Array;
  value: string;
}

export interface MsgLockResponse {}

const baseMsgCreate: object = { creator: "", denom: "", redeemScript: "" };

export const MsgCreate = {
  encode(
    message: MsgCreate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreate } as MsgCreate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.redeemScript = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    const message = { ...baseMsgCreate } as MsgCreate;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.redeemScript =
      object.redeemScript !== undefined && object.redeemScript !== null
        ? String(object.redeemScript)
        : "";
    return message;
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.redeemScript !== undefined &&
      (obj.redeemScript = message.redeemScript);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreate>): MsgCreate {
    const message = { ...baseMsgCreate } as MsgCreate;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.redeemScript = object.redeemScript ?? "";
    return message;
  },
};

const baseMsgCreateResponse: object = {};

export const MsgCreateResponse = {
  encode(
    _: MsgCreateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateResponse {
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    return message;
  },

  toJSON(_: MsgCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    return message;
  },
};

const baseMsgBind: object = {
  creator: "",
  sourceAssetDenom: "",
  toChainId: Long.UZERO,
};

export const MsgBind = {
  encode(
    message: MsgBind,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBind } as MsgBind;
    message.toAssetHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sourceAssetDenom = reader.string();
          break;
        case 3:
          message.toChainId = reader.uint64() as Long;
          break;
        case 4:
          message.toAssetHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBind {
    const message = { ...baseMsgBind } as MsgBind;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.sourceAssetDenom =
      object.sourceAssetDenom !== undefined && object.sourceAssetDenom !== null
        ? String(object.sourceAssetDenom)
        : "";
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromString(object.toChainId)
        : Long.UZERO;
    message.toAssetHash =
      object.toAssetHash !== undefined && object.toAssetHash !== null
        ? bytesFromBase64(object.toAssetHash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: MsgBind): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sourceAssetDenom !== undefined &&
      (obj.sourceAssetDenom = message.sourceAssetDenom);
    message.toChainId !== undefined &&
      (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.toAssetHash !== undefined &&
      (obj.toAssetHash = base64FromBytes(
        message.toAssetHash !== undefined
          ? message.toAssetHash
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBind>): MsgBind {
    const message = { ...baseMsgBind } as MsgBind;
    message.creator = object.creator ?? "";
    message.sourceAssetDenom = object.sourceAssetDenom ?? "";
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromValue(object.toChainId)
        : Long.UZERO;
    message.toAssetHash = object.toAssetHash ?? new Uint8Array();
    return message;
  },
};

const baseMsgBindResponse: object = {};

export const MsgBindResponse = {
  encode(
    _: MsgBindResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBindResponse } as MsgBindResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBindResponse {
    const message = { ...baseMsgBindResponse } as MsgBindResponse;
    return message;
  },

  toJSON(_: MsgBindResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBindResponse>): MsgBindResponse {
    const message = { ...baseMsgBindResponse } as MsgBindResponse;
    return message;
  },
};

const baseMsgLock: object = {
  fromAddress: "",
  sourceAssetDenom: "",
  toChainId: Long.UZERO,
  value: "",
};

export const MsgLock = {
  encode(
    message: MsgLock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLock } as MsgLock;
    message.toAddressBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.sourceAssetDenom = reader.string();
          break;
        case 3:
          message.toChainId = reader.uint64() as Long;
          break;
        case 4:
          message.toAddressBytes = reader.bytes();
          break;
        case 5:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLock {
    const message = { ...baseMsgLock } as MsgLock;
    message.fromAddress =
      object.fromAddress !== undefined && object.fromAddress !== null
        ? String(object.fromAddress)
        : "";
    message.sourceAssetDenom =
      object.sourceAssetDenom !== undefined && object.sourceAssetDenom !== null
        ? String(object.sourceAssetDenom)
        : "";
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromString(object.toChainId)
        : Long.UZERO;
    message.toAddressBytes =
      object.toAddressBytes !== undefined && object.toAddressBytes !== null
        ? bytesFromBase64(object.toAddressBytes)
        : new Uint8Array();
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: MsgLock): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.sourceAssetDenom !== undefined &&
      (obj.sourceAssetDenom = message.sourceAssetDenom);
    message.toChainId !== undefined &&
      (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.toAddressBytes !== undefined &&
      (obj.toAddressBytes = base64FromBytes(
        message.toAddressBytes !== undefined
          ? message.toAddressBytes
          : new Uint8Array()
      ));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLock>): MsgLock {
    const message = { ...baseMsgLock } as MsgLock;
    message.fromAddress = object.fromAddress ?? "";
    message.sourceAssetDenom = object.sourceAssetDenom ?? "";
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromValue(object.toChainId)
        : Long.UZERO;
    message.toAddressBytes = object.toAddressBytes ?? new Uint8Array();
    message.value = object.value ?? "";
    return message;
  },
};

const baseMsgLockResponse: object = {};

export const MsgLockResponse = {
  encode(
    _: MsgLockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLockResponse } as MsgLockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLockResponse {
    const message = { ...baseMsgLockResponse } as MsgLockResponse;
    return message;
  },

  toJSON(_: MsgLockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgLockResponse>): MsgLockResponse {
    const message = { ...baseMsgLockResponse } as MsgLockResponse;
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
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Bind = this.Bind.bind(this);
    this.Lock = this.Lock.bind(this);
  }
  Create(request: MsgCreate): Promise<MsgCreateResponse> {
    const data = MsgCreate.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.btcx.Msg",
      "Create",
      data
    );
    return promise.then((data) =>
      MsgCreateResponse.decode(new _m0.Reader(data))
    );
  }

  Bind(request: MsgBind): Promise<MsgBindResponse> {
    const data = MsgBind.encode(request).finish();
    const promise = this.rpc.request("Switcheo.carbon.btcx.Msg", "Bind", data);
    return promise.then((data) => MsgBindResponse.decode(new _m0.Reader(data)));
  }

  Lock(request: MsgLock): Promise<MsgLockResponse> {
    const data = MsgLock.encode(request).finish();
    const promise = this.rpc.request("Switcheo.carbon.btcx.Msg", "Lock", data);
    return promise.then((data) => MsgLockResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
