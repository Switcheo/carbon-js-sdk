/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.leverage";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSetLeverage {
  creator: string;
  marketId: string;
  leverage: string;
}

export interface MsgSetLeverageResponse {}

export interface MsgSetMarginMode {
  creator: string;
  marketId: string;
  toCross: boolean;
}

export interface MsgSetMarginModeResponse {}

export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

export interface MsgUpdateParamsResponse {}

const baseMsgSetLeverage: object = { creator: "", marketId: "", leverage: "" };

export const MsgSetLeverage = {
  encode(
    message: MsgSetLeverage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.leverage !== "") {
      writer.uint32(26).string(message.leverage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLeverage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetLeverage } as MsgSetLeverage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.leverage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetLeverage {
    const message = { ...baseMsgSetLeverage } as MsgSetLeverage;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.leverage =
      object.leverage !== undefined && object.leverage !== null
        ? String(object.leverage)
        : "";
    return message;
  },

  toJSON(message: MsgSetLeverage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.leverage !== undefined && (obj.leverage = message.leverage);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetLeverage>): MsgSetLeverage {
    const message = { ...baseMsgSetLeverage } as MsgSetLeverage;
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.leverage = object.leverage ?? "";
    return message;
  },
};

const baseMsgSetLeverageResponse: object = {};

export const MsgSetLeverageResponse = {
  encode(
    _: MsgSetLeverageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetLeverageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetLeverageResponse } as MsgSetLeverageResponse;
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

  fromJSON(_: any): MsgSetLeverageResponse {
    const message = { ...baseMsgSetLeverageResponse } as MsgSetLeverageResponse;
    return message;
  },

  toJSON(_: MsgSetLeverageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetLeverageResponse>): MsgSetLeverageResponse {
    const message = { ...baseMsgSetLeverageResponse } as MsgSetLeverageResponse;
    return message;
  },
};

const baseMsgSetMarginMode: object = {
  creator: "",
  marketId: "",
  toCross: false,
};

export const MsgSetMarginMode = {
  encode(
    message: MsgSetMarginMode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.toCross === true) {
      writer.uint32(24).bool(message.toCross);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMarginMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetMarginMode } as MsgSetMarginMode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.toCross = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetMarginMode {
    const message = { ...baseMsgSetMarginMode } as MsgSetMarginMode;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.toCross =
      object.toCross !== undefined && object.toCross !== null
        ? Boolean(object.toCross)
        : false;
    return message;
  },

  toJSON(message: MsgSetMarginMode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.toCross !== undefined && (obj.toCross = message.toCross);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetMarginMode>): MsgSetMarginMode {
    const message = { ...baseMsgSetMarginMode } as MsgSetMarginMode;
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.toCross = object.toCross ?? false;
    return message;
  },
};

const baseMsgSetMarginModeResponse: object = {};

export const MsgSetMarginModeResponse = {
  encode(
    _: MsgSetMarginModeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetMarginModeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMarginModeResponse,
    } as MsgSetMarginModeResponse;
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

  fromJSON(_: any): MsgSetMarginModeResponse {
    const message = {
      ...baseMsgSetMarginModeResponse,
    } as MsgSetMarginModeResponse;
    return message;
  },

  toJSON(_: MsgSetMarginModeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetMarginModeResponse>
  ): MsgSetMarginModeResponse {
    const message = {
      ...baseMsgSetMarginModeResponse,
    } as MsgSetMarginModeResponse;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params
        ? ParamsToUpdate.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetLeverage(request: MsgSetLeverage): Promise<MsgSetLeverageResponse>;
  SetMarginMode(request: MsgSetMarginMode): Promise<MsgSetMarginModeResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetLeverage = this.SetLeverage.bind(this);
    this.SetMarginMode = this.SetMarginMode.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  SetLeverage(request: MsgSetLeverage): Promise<MsgSetLeverageResponse> {
    const data = MsgSetLeverage.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.leverage.Msg",
      "SetLeverage",
      data
    );
    return promise.then((data) =>
      MsgSetLeverageResponse.decode(new _m0.Reader(data))
    );
  }

  SetMarginMode(request: MsgSetMarginMode): Promise<MsgSetMarginModeResponse> {
    const data = MsgSetMarginMode.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.leverage.Msg",
      "SetMarginMode",
      data
    );
    return promise.then((data) =>
      MsgSetMarginModeResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.leverage.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
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
