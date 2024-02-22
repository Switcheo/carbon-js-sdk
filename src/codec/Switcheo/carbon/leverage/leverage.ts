/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.leverage";

export interface MarketLeverage {
  marketId: string;
  leverage: string;
}

export interface MarketLeverageRecord {
  address: string;
  marketLeverage?: MarketLeverage;
}

const baseMarketLeverage: object = { marketId: "", leverage: "" };

export const MarketLeverage = {
  encode(
    message: MarketLeverage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.leverage !== "") {
      writer.uint32(18).string(message.leverage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketLeverage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketLeverage } as MarketLeverage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.leverage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketLeverage {
    const message = { ...baseMarketLeverage } as MarketLeverage;
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

  toJSON(message: MarketLeverage): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.leverage !== undefined && (obj.leverage = message.leverage);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketLeverage>): MarketLeverage {
    const message = { ...baseMarketLeverage } as MarketLeverage;
    message.marketId = object.marketId ?? "";
    message.leverage = object.leverage ?? "";
    return message;
  },
};

const baseMarketLeverageRecord: object = { address: "" };

export const MarketLeverageRecord = {
  encode(
    message: MarketLeverageRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketLeverage !== undefined) {
      MarketLeverage.encode(
        message.marketLeverage,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketLeverageRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketLeverageRecord } as MarketLeverageRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.marketLeverage = MarketLeverage.decode(
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

  fromJSON(object: any): MarketLeverageRecord {
    const message = { ...baseMarketLeverageRecord } as MarketLeverageRecord;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.marketLeverage =
      object.marketLeverage !== undefined && object.marketLeverage !== null
        ? MarketLeverage.fromJSON(object.marketLeverage)
        : undefined;
    return message;
  },

  toJSON(message: MarketLeverageRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketLeverage !== undefined &&
      (obj.marketLeverage = message.marketLeverage
        ? MarketLeverage.toJSON(message.marketLeverage)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketLeverageRecord>): MarketLeverageRecord {
    const message = { ...baseMarketLeverageRecord } as MarketLeverageRecord;
    message.address = object.address ?? "";
    message.marketLeverage =
      object.marketLeverage !== undefined && object.marketLeverage !== null
        ? MarketLeverage.fromPartial(object.marketLeverage)
        : undefined;
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
