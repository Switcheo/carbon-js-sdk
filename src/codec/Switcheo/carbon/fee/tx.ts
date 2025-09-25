/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MinGasPrice, MsgGasCost } from "./fee";

export const protobufPackage = "Switcheo.carbon.fee";

export interface MsgSetGasCost {
  creator: string;
  setGasCostParams?: MsgGasCost;
}

export interface MsgSetGasCostResponse {
}

export interface MsgSetMinGasPrice {
  creator: string;
  setMinGasPriceParams?: MinGasPrice;
}

export interface MsgSetMinGasPriceResponse {
}

export interface MsgRemoveGasCost {
  creator: string;
  msgType: string;
}

export interface MsgRemoveGasCostResponse {
}

export interface MsgRemoveMinGasPrice {
  creator: string;
  denom: string;
}

export interface MsgRemoveMinGasPriceResponse {
}

function createBaseMsgSetGasCost(): MsgSetGasCost {
  return { creator: "", setGasCostParams: undefined };
}

export const MsgSetGasCost = {
  encode(message: MsgSetGasCost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setGasCostParams !== undefined) {
      MsgGasCost.encode(message.setGasCostParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetGasCost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetGasCost();
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

          message.setGasCostParams = MsgGasCost.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetGasCost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setGasCostParams: isSet(object.setGasCostParams) ? MsgGasCost.fromJSON(object.setGasCostParams) : undefined,
    };
  },

  toJSON(message: MsgSetGasCost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setGasCostParams !== undefined &&
      (obj.setGasCostParams = message.setGasCostParams ? MsgGasCost.toJSON(message.setGasCostParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgSetGasCost>): MsgSetGasCost {
    return MsgSetGasCost.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetGasCost>): MsgSetGasCost {
    const message = createBaseMsgSetGasCost();
    message.creator = object.creator ?? "";
    message.setGasCostParams = (object.setGasCostParams !== undefined && object.setGasCostParams !== null)
      ? MsgGasCost.fromPartial(object.setGasCostParams)
      : undefined;
    return message;
  },
};

function createBaseMsgSetGasCostResponse(): MsgSetGasCostResponse {
  return {};
}

export const MsgSetGasCostResponse = {
  encode(_: MsgSetGasCostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetGasCostResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetGasCostResponse();
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

  fromJSON(_: any): MsgSetGasCostResponse {
    return {};
  },

  toJSON(_: MsgSetGasCostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetGasCostResponse>): MsgSetGasCostResponse {
    return MsgSetGasCostResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetGasCostResponse>): MsgSetGasCostResponse {
    const message = createBaseMsgSetGasCostResponse();
    return message;
  },
};

function createBaseMsgSetMinGasPrice(): MsgSetMinGasPrice {
  return { creator: "", setMinGasPriceParams: undefined };
}

export const MsgSetMinGasPrice = {
  encode(message: MsgSetMinGasPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setMinGasPriceParams !== undefined) {
      MinGasPrice.encode(message.setMinGasPriceParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinGasPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinGasPrice();
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

          message.setMinGasPriceParams = MinGasPrice.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetMinGasPrice {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setMinGasPriceParams: isSet(object.setMinGasPriceParams)
        ? MinGasPrice.fromJSON(object.setMinGasPriceParams)
        : undefined,
    };
  },

  toJSON(message: MsgSetMinGasPrice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setMinGasPriceParams !== undefined && (obj.setMinGasPriceParams = message.setMinGasPriceParams
      ? MinGasPrice.toJSON(message.setMinGasPriceParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgSetMinGasPrice>): MsgSetMinGasPrice {
    return MsgSetMinGasPrice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetMinGasPrice>): MsgSetMinGasPrice {
    const message = createBaseMsgSetMinGasPrice();
    message.creator = object.creator ?? "";
    message.setMinGasPriceParams = (object.setMinGasPriceParams !== undefined && object.setMinGasPriceParams !== null)
      ? MinGasPrice.fromPartial(object.setMinGasPriceParams)
      : undefined;
    return message;
  },
};

function createBaseMsgSetMinGasPriceResponse(): MsgSetMinGasPriceResponse {
  return {};
}

export const MsgSetMinGasPriceResponse = {
  encode(_: MsgSetMinGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinGasPriceResponse();
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

  fromJSON(_: any): MsgSetMinGasPriceResponse {
    return {};
  },

  toJSON(_: MsgSetMinGasPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetMinGasPriceResponse>): MsgSetMinGasPriceResponse {
    return MsgSetMinGasPriceResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetMinGasPriceResponse>): MsgSetMinGasPriceResponse {
    const message = createBaseMsgSetMinGasPriceResponse();
    return message;
  },
};

function createBaseMsgRemoveGasCost(): MsgRemoveGasCost {
  return { creator: "", msgType: "" };
}

export const MsgRemoveGasCost = {
  encode(message: MsgRemoveGasCost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.msgType !== "") {
      writer.uint32(18).string(message.msgType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveGasCost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveGasCost();
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

          message.msgType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveGasCost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      msgType: isSet(object.msgType) ? String(object.msgType) : "",
    };
  },

  toJSON(message: MsgRemoveGasCost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.msgType !== undefined && (obj.msgType = message.msgType);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveGasCost>): MsgRemoveGasCost {
    return MsgRemoveGasCost.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveGasCost>): MsgRemoveGasCost {
    const message = createBaseMsgRemoveGasCost();
    message.creator = object.creator ?? "";
    message.msgType = object.msgType ?? "";
    return message;
  },
};

function createBaseMsgRemoveGasCostResponse(): MsgRemoveGasCostResponse {
  return {};
}

export const MsgRemoveGasCostResponse = {
  encode(_: MsgRemoveGasCostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveGasCostResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveGasCostResponse();
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

  fromJSON(_: any): MsgRemoveGasCostResponse {
    return {};
  },

  toJSON(_: MsgRemoveGasCostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveGasCostResponse>): MsgRemoveGasCostResponse {
    return MsgRemoveGasCostResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveGasCostResponse>): MsgRemoveGasCostResponse {
    const message = createBaseMsgRemoveGasCostResponse();
    return message;
  },
};

function createBaseMsgRemoveMinGasPrice(): MsgRemoveMinGasPrice {
  return { creator: "", denom: "" };
}

export const MsgRemoveMinGasPrice = {
  encode(message: MsgRemoveMinGasPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMinGasPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMinGasPrice();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveMinGasPrice {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgRemoveMinGasPrice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveMinGasPrice>): MsgRemoveMinGasPrice {
    return MsgRemoveMinGasPrice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveMinGasPrice>): MsgRemoveMinGasPrice {
    const message = createBaseMsgRemoveMinGasPrice();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgRemoveMinGasPriceResponse(): MsgRemoveMinGasPriceResponse {
  return {};
}

export const MsgRemoveMinGasPriceResponse = {
  encode(_: MsgRemoveMinGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMinGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMinGasPriceResponse();
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

  fromJSON(_: any): MsgRemoveMinGasPriceResponse {
    return {};
  },

  toJSON(_: MsgRemoveMinGasPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveMinGasPriceResponse>): MsgRemoveMinGasPriceResponse {
    return MsgRemoveMinGasPriceResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveMinGasPriceResponse>): MsgRemoveMinGasPriceResponse {
    const message = createBaseMsgRemoveMinGasPriceResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetMsgGasCost(request: MsgSetGasCost): Promise<MsgSetGasCostResponse>;
  SetMinGasPrice(request: MsgSetMinGasPrice): Promise<MsgSetMinGasPriceResponse>;
  RemoveMsgGasCost(request: MsgRemoveGasCost): Promise<MsgRemoveGasCostResponse>;
  RemoveMinGasPrice(request: MsgRemoveMinGasPrice): Promise<MsgRemoveMinGasPriceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.fee.Msg";
    this.rpc = rpc;
    this.SetMsgGasCost = this.SetMsgGasCost.bind(this);
    this.SetMinGasPrice = this.SetMinGasPrice.bind(this);
    this.RemoveMsgGasCost = this.RemoveMsgGasCost.bind(this);
    this.RemoveMinGasPrice = this.RemoveMinGasPrice.bind(this);
  }
  SetMsgGasCost(request: MsgSetGasCost): Promise<MsgSetGasCostResponse> {
    const data = MsgSetGasCost.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetMsgGasCost", data);
    return promise.then((data) => MsgSetGasCostResponse.decode(_m0.Reader.create(data)));
  }

  SetMinGasPrice(request: MsgSetMinGasPrice): Promise<MsgSetMinGasPriceResponse> {
    const data = MsgSetMinGasPrice.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetMinGasPrice", data);
    return promise.then((data) => MsgSetMinGasPriceResponse.decode(_m0.Reader.create(data)));
  }

  RemoveMsgGasCost(request: MsgRemoveGasCost): Promise<MsgRemoveGasCostResponse> {
    const data = MsgRemoveGasCost.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveMsgGasCost", data);
    return promise.then((data) => MsgRemoveGasCostResponse.decode(_m0.Reader.create(data)));
  }

  RemoveMinGasPrice(request: MsgRemoveMinGasPrice): Promise<MsgRemoveMinGasPriceResponse> {
    const data = MsgRemoveMinGasPrice.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveMinGasPrice", data);
    return promise.then((data) => MsgRemoveMinGasPriceResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
