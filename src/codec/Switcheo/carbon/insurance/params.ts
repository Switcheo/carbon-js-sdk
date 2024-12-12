/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

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

const baseParams: object = { maxUtilizationRatio: "" };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.minMarketLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.utilizationInterval !== undefined) {
      Duration.encode(
        message.utilizationInterval,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.maxUtilizationRatio !== "") {
      writer.uint32(26).string(message.maxUtilizationRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.minMarketLiquidity = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minMarketLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.utilizationInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.maxUtilizationRatio = reader.string();
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
    message.minMarketLiquidity = (object.minMarketLiquidity ?? []).map(
      (e: any) => Coin.fromJSON(e)
    );
    message.utilizationInterval =
      object.utilizationInterval !== undefined &&
      object.utilizationInterval !== null
        ? Duration.fromJSON(object.utilizationInterval)
        : undefined;
    message.maxUtilizationRatio =
      object.maxUtilizationRatio !== undefined &&
      object.maxUtilizationRatio !== null
        ? String(object.maxUtilizationRatio)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.minMarketLiquidity) {
      obj.minMarketLiquidity = message.minMarketLiquidity.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.minMarketLiquidity = [];
    }
    message.utilizationInterval !== undefined &&
      (obj.utilizationInterval = message.utilizationInterval
        ? Duration.toJSON(message.utilizationInterval)
        : undefined);
    message.maxUtilizationRatio !== undefined &&
      (obj.maxUtilizationRatio = message.maxUtilizationRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.minMarketLiquidity = (object.minMarketLiquidity ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.utilizationInterval =
      object.utilizationInterval !== undefined &&
      object.utilizationInterval !== null
        ? Duration.fromPartial(object.utilizationInterval)
        : undefined;
    message.maxUtilizationRatio = object.maxUtilizationRatio ?? "";
    return message;
  },
};

const baseParamsToUpdate: object = { maxUtilizationRatio: "" };

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.minMarketLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.utilizationInterval !== undefined) {
      Duration.encode(
        message.utilizationInterval,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.maxUtilizationRatio !== "") {
      writer.uint32(26).string(message.maxUtilizationRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.minMarketLiquidity = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minMarketLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.utilizationInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.maxUtilizationRatio = reader.string();
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
    message.minMarketLiquidity = (object.minMarketLiquidity ?? []).map(
      (e: any) => Coin.fromJSON(e)
    );
    message.utilizationInterval =
      object.utilizationInterval !== undefined &&
      object.utilizationInterval !== null
        ? Duration.fromJSON(object.utilizationInterval)
        : undefined;
    message.maxUtilizationRatio =
      object.maxUtilizationRatio !== undefined &&
      object.maxUtilizationRatio !== null
        ? String(object.maxUtilizationRatio)
        : "";
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    if (message.minMarketLiquidity) {
      obj.minMarketLiquidity = message.minMarketLiquidity.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.minMarketLiquidity = [];
    }
    message.utilizationInterval !== undefined &&
      (obj.utilizationInterval = message.utilizationInterval
        ? Duration.toJSON(message.utilizationInterval)
        : undefined);
    message.maxUtilizationRatio !== undefined &&
      (obj.maxUtilizationRatio = message.maxUtilizationRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.minMarketLiquidity = (object.minMarketLiquidity ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.utilizationInterval =
      object.utilizationInterval !== undefined &&
      object.utilizationInterval !== null
        ? Duration.fromPartial(object.utilizationInterval)
        : undefined;
    message.maxUtilizationRatio = object.maxUtilizationRatio ?? "";
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
