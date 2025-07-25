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

export interface MsgSetLeverageResponse {
}

function createBaseMsgSetLeverage(): MsgSetLeverage {
  return { creator: "", marketId: "", leverage: "" };
}

export const MsgSetLeverage = {
  encode(message: MsgSetLeverage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetLeverage();
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

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.leverage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetLeverage {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      leverage: isSet(object.leverage) ? String(object.leverage) : "",
    };
  },

  toJSON(message: MsgSetLeverage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.leverage !== undefined && (obj.leverage = message.leverage);
    return obj;
  },

  create(base?: DeepPartial<MsgSetLeverage>): MsgSetLeverage {
    return MsgSetLeverage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetLeverage>): MsgSetLeverage {
    const message = createBaseMsgSetLeverage();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.leverage = object.leverage ?? "";
    return message;
  },
};

function createBaseMsgSetLeverageResponse(): MsgSetLeverageResponse {
  return {};
}

export const MsgSetLeverageResponse = {
  encode(_: MsgSetLeverageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLeverageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetLeverageResponse();
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

  fromJSON(_: any): MsgSetLeverageResponse {
    return {};
  },

  toJSON(_: MsgSetLeverageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetLeverageResponse>): MsgSetLeverageResponse {
    return MsgSetLeverageResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetLeverageResponse>): MsgSetLeverageResponse {
    const message = createBaseMsgSetLeverageResponse();
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
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.leverage.Msg";
    this.rpc = rpc;
    this.SetLeverage = this.SetLeverage.bind(this);
    this.SetMarginMode = this.SetMarginMode.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  SetLeverage(request: MsgSetLeverage): Promise<MsgSetLeverageResponse> {
    const data = MsgSetLeverage.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetLeverage", data);
    return promise.then((data) => MsgSetLeverageResponse.decode(_m0.Reader.create(data)));
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
