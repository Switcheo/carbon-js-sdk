/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.coin";

/** Params defines the parameters for the coin module. */
export interface Params {
  assetsRouteToFutures: string[];
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  assetsRouteToFutures: string[];
}

const baseParams: object = { assetsRouteToFutures: "" };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assetsRouteToFutures) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.assetsRouteToFutures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetsRouteToFutures.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.assetsRouteToFutures = (object.assetsRouteToFutures ?? []).map(
      (e: any) => String(e)
    );
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.assetsRouteToFutures) {
      obj.assetsRouteToFutures = message.assetsRouteToFutures.map((e) => e);
    } else {
      obj.assetsRouteToFutures = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.assetsRouteToFutures = (object.assetsRouteToFutures ?? []).map(
      (e) => e
    );
    return message;
  },
};

const baseParamsToUpdate: object = { assetsRouteToFutures: "" };

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assetsRouteToFutures) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.assetsRouteToFutures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetsRouteToFutures.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.assetsRouteToFutures = (object.assetsRouteToFutures ?? []).map(
      (e: any) => String(e)
    );
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    if (message.assetsRouteToFutures) {
      obj.assetsRouteToFutures = message.assetsRouteToFutures.map((e) => e);
    } else {
      obj.assetsRouteToFutures = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.assetsRouteToFutures = (object.assetsRouteToFutures ?? []).map(
      (e) => e
    );
    return message;
  },
};

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
