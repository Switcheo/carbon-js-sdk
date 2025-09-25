/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "Switcheo.carbon.insurance";

export interface Params {
  minMarketLiquidity: Coin[];
  /**
   * utilization_interval specifies the duration after which a market's
   * insurance fund usage will be reset.
   */
  utilizationInterval?: Duration;
  /** percentage of the total insurance fund that can be used per interval */
  maxUtilizationRatio: string;
}

export interface ParamsToUpdate {
  minMarketLiquidity: Coin[];
  utilizationInterval?: Duration;
  maxUtilizationRatio: string;
}

function createBaseParams(): Params {
  return { minMarketLiquidity: [], utilizationInterval: undefined, maxUtilizationRatio: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minMarketLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.utilizationInterval !== undefined) {
      Duration.encode(message.utilizationInterval, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxUtilizationRatio !== "") {
      writer.uint32(26).string(message.maxUtilizationRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minMarketLiquidity.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.utilizationInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxUtilizationRatio = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      minMarketLiquidity: Array.isArray(object?.minMarketLiquidity)
        ? object.minMarketLiquidity.map((e: any) => Coin.fromJSON(e))
        : [],
      utilizationInterval: isSet(object.utilizationInterval)
        ? Duration.fromJSON(object.utilizationInterval)
        : undefined,
      maxUtilizationRatio: isSet(object.maxUtilizationRatio) ? String(object.maxUtilizationRatio) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.minMarketLiquidity) {
      obj.minMarketLiquidity = message.minMarketLiquidity.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minMarketLiquidity = [];
    }
    message.utilizationInterval !== undefined &&
      (obj.utilizationInterval = message.utilizationInterval
        ? Duration.toJSON(message.utilizationInterval)
        : undefined);
    message.maxUtilizationRatio !== undefined && (obj.maxUtilizationRatio = message.maxUtilizationRatio);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.minMarketLiquidity = object.minMarketLiquidity?.map((e) => Coin.fromPartial(e)) || [];
    message.utilizationInterval = (object.utilizationInterval !== undefined && object.utilizationInterval !== null)
      ? Duration.fromPartial(object.utilizationInterval)
      : undefined;
    message.maxUtilizationRatio = object.maxUtilizationRatio ?? "";
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return { minMarketLiquidity: [], utilizationInterval: undefined, maxUtilizationRatio: "" };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minMarketLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.utilizationInterval !== undefined) {
      Duration.encode(message.utilizationInterval, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxUtilizationRatio !== "") {
      writer.uint32(26).string(message.maxUtilizationRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsToUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minMarketLiquidity.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.utilizationInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxUtilizationRatio = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParamsToUpdate {
    return {
      minMarketLiquidity: Array.isArray(object?.minMarketLiquidity)
        ? object.minMarketLiquidity.map((e: any) => Coin.fromJSON(e))
        : [],
      utilizationInterval: isSet(object.utilizationInterval)
        ? Duration.fromJSON(object.utilizationInterval)
        : undefined,
      maxUtilizationRatio: isSet(object.maxUtilizationRatio) ? String(object.maxUtilizationRatio) : "",
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    if (message.minMarketLiquidity) {
      obj.minMarketLiquidity = message.minMarketLiquidity.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minMarketLiquidity = [];
    }
    message.utilizationInterval !== undefined &&
      (obj.utilizationInterval = message.utilizationInterval
        ? Duration.toJSON(message.utilizationInterval)
        : undefined);
    message.maxUtilizationRatio !== undefined && (obj.maxUtilizationRatio = message.maxUtilizationRatio);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.minMarketLiquidity = object.minMarketLiquidity?.map((e) => Coin.fromPartial(e)) || [];
    message.utilizationInterval = (object.utilizationInterval !== undefined && object.utilizationInterval !== null)
      ? Duration.fromPartial(object.utilizationInterval)
      : undefined;
    message.maxUtilizationRatio = object.maxUtilizationRatio ?? "";
    return message;
  },
};

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
