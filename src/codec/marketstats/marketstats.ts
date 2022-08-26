/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.marketstats";

export interface MarketStats {
  market: string;
  marketType: string;
  dayOpen: string;
  dayHigh: string;
  dayLow: string;
  dayClose: string;
  dayVolume: string;
  dayQuoteVolume: string;
  indexPrice: string;
  markPrice: string;
  lastPrice: string;
}

const baseMarketStats: object = {
  market: "",
  marketType: "",
  dayOpen: "",
  dayHigh: "",
  dayLow: "",
  dayClose: "",
  dayVolume: "",
  dayQuoteVolume: "",
  indexPrice: "",
  markPrice: "",
  lastPrice: "",
};

export const MarketStats = {
  encode(
    message: MarketStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.marketType !== "") {
      writer.uint32(18).string(message.marketType);
    }
    if (message.dayOpen !== "") {
      writer.uint32(26).string(message.dayOpen);
    }
    if (message.dayHigh !== "") {
      writer.uint32(34).string(message.dayHigh);
    }
    if (message.dayLow !== "") {
      writer.uint32(42).string(message.dayLow);
    }
    if (message.dayClose !== "") {
      writer.uint32(50).string(message.dayClose);
    }
    if (message.dayVolume !== "") {
      writer.uint32(58).string(message.dayVolume);
    }
    if (message.dayQuoteVolume !== "") {
      writer.uint32(66).string(message.dayQuoteVolume);
    }
    if (message.indexPrice !== "") {
      writer.uint32(74).string(message.indexPrice);
    }
    if (message.markPrice !== "") {
      writer.uint32(82).string(message.markPrice);
    }
    if (message.lastPrice !== "") {
      writer.uint32(90).string(message.lastPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketStats } as MarketStats;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.marketType = reader.string();
          break;
        case 3:
          message.dayOpen = reader.string();
          break;
        case 4:
          message.dayHigh = reader.string();
          break;
        case 5:
          message.dayLow = reader.string();
          break;
        case 6:
          message.dayClose = reader.string();
          break;
        case 7:
          message.dayVolume = reader.string();
          break;
        case 8:
          message.dayQuoteVolume = reader.string();
          break;
        case 9:
          message.indexPrice = reader.string();
          break;
        case 10:
          message.markPrice = reader.string();
          break;
        case 11:
          message.lastPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketStats {
    const message = { ...baseMarketStats } as MarketStats;
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.marketType =
      object.marketType !== undefined && object.marketType !== null
        ? String(object.marketType)
        : "";
    message.dayOpen =
      object.dayOpen !== undefined && object.dayOpen !== null
        ? String(object.dayOpen)
        : "";
    message.dayHigh =
      object.dayHigh !== undefined && object.dayHigh !== null
        ? String(object.dayHigh)
        : "";
    message.dayLow =
      object.dayLow !== undefined && object.dayLow !== null
        ? String(object.dayLow)
        : "";
    message.dayClose =
      object.dayClose !== undefined && object.dayClose !== null
        ? String(object.dayClose)
        : "";
    message.dayVolume =
      object.dayVolume !== undefined && object.dayVolume !== null
        ? String(object.dayVolume)
        : "";
    message.dayQuoteVolume =
      object.dayQuoteVolume !== undefined && object.dayQuoteVolume !== null
        ? String(object.dayQuoteVolume)
        : "";
    message.indexPrice =
      object.indexPrice !== undefined && object.indexPrice !== null
        ? String(object.indexPrice)
        : "";
    message.markPrice =
      object.markPrice !== undefined && object.markPrice !== null
        ? String(object.markPrice)
        : "";
    message.lastPrice =
      object.lastPrice !== undefined && object.lastPrice !== null
        ? String(object.lastPrice)
        : "";
    return message;
  },

  toJSON(message: MarketStats): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.dayOpen !== undefined && (obj.dayOpen = message.dayOpen);
    message.dayHigh !== undefined && (obj.dayHigh = message.dayHigh);
    message.dayLow !== undefined && (obj.dayLow = message.dayLow);
    message.dayClose !== undefined && (obj.dayClose = message.dayClose);
    message.dayVolume !== undefined && (obj.dayVolume = message.dayVolume);
    message.dayQuoteVolume !== undefined &&
      (obj.dayQuoteVolume = message.dayQuoteVolume);
    message.indexPrice !== undefined && (obj.indexPrice = message.indexPrice);
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketStats>): MarketStats {
    const message = { ...baseMarketStats } as MarketStats;
    message.market = object.market ?? "";
    message.marketType = object.marketType ?? "";
    message.dayOpen = object.dayOpen ?? "";
    message.dayHigh = object.dayHigh ?? "";
    message.dayLow = object.dayLow ?? "";
    message.dayClose = object.dayClose ?? "";
    message.dayVolume = object.dayVolume ?? "";
    message.dayQuoteVolume = object.dayQuoteVolume ?? "";
    message.indexPrice = object.indexPrice ?? "";
    message.markPrice = object.markPrice ?? "";
    message.lastPrice = object.lastPrice ?? "";
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
