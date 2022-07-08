/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgGasCost, MinGasPrice } from "./fee";

export const protobufPackage = "Switcheo.carbon.fee";

export interface MsgSetGasCost {
  creator: string;
  setGasCostParams?: MsgGasCost;
}

export interface MsgSetGasCostResponse {}

export interface MsgSetMinGasPrice {
  creator: string;
  setMinGasPriceParams?: MinGasPrice;
}

export interface MsgSetMinGasPriceResponse {}

export interface MsgRemoveGasCost {
  creator: string;
  msgType: string;
}

export interface MsgRemoveGasCostResponse {}

export interface MsgRemoveMinGasPrice {
  creator: string;
  denom: string;
}

export interface MsgRemoveMinGasPriceResponse {}

const baseMsgSetGasCost: object = { creator: "" };

export const MsgSetGasCost = {
  encode(
    message: MsgSetGasCost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setGasCostParams !== undefined) {
      MsgGasCost.encode(
        message.setGasCostParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetGasCost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetGasCost } as MsgSetGasCost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setGasCostParams = MsgGasCost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetGasCost {
    const message = { ...baseMsgSetGasCost } as MsgSetGasCost;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.setGasCostParams =
      object.setGasCostParams !== undefined && object.setGasCostParams !== null
        ? MsgGasCost.fromJSON(object.setGasCostParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetGasCost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setGasCostParams !== undefined &&
      (obj.setGasCostParams = message.setGasCostParams
        ? MsgGasCost.toJSON(message.setGasCostParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetGasCost>): MsgSetGasCost {
    const message = { ...baseMsgSetGasCost } as MsgSetGasCost;
    message.creator = object.creator ?? "";
    message.setGasCostParams =
      object.setGasCostParams !== undefined && object.setGasCostParams !== null
        ? MsgGasCost.fromPartial(object.setGasCostParams)
        : undefined;
    return message;
  },
};

const baseMsgSetGasCostResponse: object = {};

export const MsgSetGasCostResponse = {
  encode(
    _: MsgSetGasCostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetGasCostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetGasCostResponse } as MsgSetGasCostResponse;
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

  fromJSON(_: any): MsgSetGasCostResponse {
    const message = { ...baseMsgSetGasCostResponse } as MsgSetGasCostResponse;
    return message;
  },

  toJSON(_: MsgSetGasCostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetGasCostResponse>): MsgSetGasCostResponse {
    const message = { ...baseMsgSetGasCostResponse } as MsgSetGasCostResponse;
    return message;
  },
};

const baseMsgSetMinGasPrice: object = { creator: "" };

export const MsgSetMinGasPrice = {
  encode(
    message: MsgSetMinGasPrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setMinGasPriceParams !== undefined) {
      MinGasPrice.encode(
        message.setMinGasPriceParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinGasPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetMinGasPrice } as MsgSetMinGasPrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setMinGasPriceParams = MinGasPrice.decode(
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

  fromJSON(object: any): MsgSetMinGasPrice {
    const message = { ...baseMsgSetMinGasPrice } as MsgSetMinGasPrice;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.setMinGasPriceParams =
      object.setMinGasPriceParams !== undefined &&
      object.setMinGasPriceParams !== null
        ? MinGasPrice.fromJSON(object.setMinGasPriceParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetMinGasPrice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setMinGasPriceParams !== undefined &&
      (obj.setMinGasPriceParams = message.setMinGasPriceParams
        ? MinGasPrice.toJSON(message.setMinGasPriceParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetMinGasPrice>): MsgSetMinGasPrice {
    const message = { ...baseMsgSetMinGasPrice } as MsgSetMinGasPrice;
    message.creator = object.creator ?? "";
    message.setMinGasPriceParams =
      object.setMinGasPriceParams !== undefined &&
      object.setMinGasPriceParams !== null
        ? MinGasPrice.fromPartial(object.setMinGasPriceParams)
        : undefined;
    return message;
  },
};

const baseMsgSetMinGasPriceResponse: object = {};

export const MsgSetMinGasPriceResponse = {
  encode(
    _: MsgSetMinGasPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetMinGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMinGasPriceResponse,
    } as MsgSetMinGasPriceResponse;
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

  fromJSON(_: any): MsgSetMinGasPriceResponse {
    const message = {
      ...baseMsgSetMinGasPriceResponse,
    } as MsgSetMinGasPriceResponse;
    return message;
  },

  toJSON(_: MsgSetMinGasPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetMinGasPriceResponse>
  ): MsgSetMinGasPriceResponse {
    const message = {
      ...baseMsgSetMinGasPriceResponse,
    } as MsgSetMinGasPriceResponse;
    return message;
  },
};

const baseMsgRemoveGasCost: object = { creator: "", msgType: "" };

export const MsgRemoveGasCost = {
  encode(
    message: MsgRemoveGasCost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.msgType !== "") {
      writer.uint32(18).string(message.msgType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveGasCost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveGasCost } as MsgRemoveGasCost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveGasCost {
    const message = { ...baseMsgRemoveGasCost } as MsgRemoveGasCost;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.msgType =
      object.msgType !== undefined && object.msgType !== null
        ? String(object.msgType)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveGasCost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.msgType !== undefined && (obj.msgType = message.msgType);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveGasCost>): MsgRemoveGasCost {
    const message = { ...baseMsgRemoveGasCost } as MsgRemoveGasCost;
    message.creator = object.creator ?? "";
    message.msgType = object.msgType ?? "";
    return message;
  },
};

const baseMsgRemoveGasCostResponse: object = {};

export const MsgRemoveGasCostResponse = {
  encode(
    _: MsgRemoveGasCostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveGasCostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveGasCostResponse,
    } as MsgRemoveGasCostResponse;
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

  fromJSON(_: any): MsgRemoveGasCostResponse {
    const message = {
      ...baseMsgRemoveGasCostResponse,
    } as MsgRemoveGasCostResponse;
    return message;
  },

  toJSON(_: MsgRemoveGasCostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveGasCostResponse>
  ): MsgRemoveGasCostResponse {
    const message = {
      ...baseMsgRemoveGasCostResponse,
    } as MsgRemoveGasCostResponse;
    return message;
  },
};

const baseMsgRemoveMinGasPrice: object = { creator: "", denom: "" };

export const MsgRemoveMinGasPrice = {
  encode(
    message: MsgRemoveMinGasPrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveMinGasPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveMinGasPrice } as MsgRemoveMinGasPrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveMinGasPrice {
    const message = { ...baseMsgRemoveMinGasPrice } as MsgRemoveMinGasPrice;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveMinGasPrice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveMinGasPrice>): MsgRemoveMinGasPrice {
    const message = { ...baseMsgRemoveMinGasPrice } as MsgRemoveMinGasPrice;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgRemoveMinGasPriceResponse: object = {};

export const MsgRemoveMinGasPriceResponse = {
  encode(
    _: MsgRemoveMinGasPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveMinGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveMinGasPriceResponse,
    } as MsgRemoveMinGasPriceResponse;
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

  fromJSON(_: any): MsgRemoveMinGasPriceResponse {
    const message = {
      ...baseMsgRemoveMinGasPriceResponse,
    } as MsgRemoveMinGasPriceResponse;
    return message;
  },

  toJSON(_: MsgRemoveMinGasPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveMinGasPriceResponse>
  ): MsgRemoveMinGasPriceResponse {
    const message = {
      ...baseMsgRemoveMinGasPriceResponse,
    } as MsgRemoveMinGasPriceResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetMsgGasCost(request: MsgSetGasCost): Promise<MsgSetGasCostResponse>;
  SetMinGasPrice(
    request: MsgSetMinGasPrice
  ): Promise<MsgSetMinGasPriceResponse>;
  RemoveMsgGasCost(
    request: MsgRemoveGasCost
  ): Promise<MsgRemoveGasCostResponse>;
  RemoveMinGasPrice(
    request: MsgRemoveMinGasPrice
  ): Promise<MsgRemoveMinGasPriceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetMsgGasCost = this.SetMsgGasCost.bind(this);
    this.SetMinGasPrice = this.SetMinGasPrice.bind(this);
    this.RemoveMsgGasCost = this.RemoveMsgGasCost.bind(this);
    this.RemoveMinGasPrice = this.RemoveMinGasPrice.bind(this);
  }
  SetMsgGasCost(request: MsgSetGasCost): Promise<MsgSetGasCostResponse> {
    const data = MsgSetGasCost.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Msg",
      "SetMsgGasCost",
      data
    );
    return promise.then((data) =>
      MsgSetGasCostResponse.decode(new _m0.Reader(data))
    );
  }

  SetMinGasPrice(
    request: MsgSetMinGasPrice
  ): Promise<MsgSetMinGasPriceResponse> {
    const data = MsgSetMinGasPrice.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Msg",
      "SetMinGasPrice",
      data
    );
    return promise.then((data) =>
      MsgSetMinGasPriceResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveMsgGasCost(
    request: MsgRemoveGasCost
  ): Promise<MsgRemoveGasCostResponse> {
    const data = MsgRemoveGasCost.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Msg",
      "RemoveMsgGasCost",
      data
    );
    return promise.then((data) =>
      MsgRemoveGasCostResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveMinGasPrice(
    request: MsgRemoveMinGasPrice
  ): Promise<MsgRemoveMinGasPriceResponse> {
    const data = MsgRemoveMinGasPrice.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Msg",
      "RemoveMinGasPrice",
      data
    );
    return promise.then((data) =>
      MsgRemoveMinGasPriceResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
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
