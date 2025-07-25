/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.leverage";

export interface MarketLeverage {
  marketId: string;
  leverage: string;
  isCross: boolean;
}

export interface MarketLeverageRecord {
  address: string;
  marketLeverage?: MarketLeverage;
}

function createBaseMarketLeverage(): MarketLeverage {
  return { marketId: "", leverage: "" };
}

export const MarketLeverage = {
  encode(message: MarketLeverage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.leverage !== "") {
      writer.uint32(18).string(message.leverage);
    }
    if (message.isCross === true) {
      writer.uint32(24).bool(message.isCross);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketLeverage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketLeverage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MarketLeverage {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      leverage: isSet(object.leverage) ? String(object.leverage) : "",
    };
  },

  toJSON(message: MarketLeverage): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.leverage !== undefined && (obj.leverage = message.leverage);
    message.isCross !== undefined && (obj.isCross = message.isCross);
    return obj;
  },

  create(base?: DeepPartial<MarketLeverage>): MarketLeverage {
    return MarketLeverage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MarketLeverage>): MarketLeverage {
    const message = createBaseMarketLeverage();
    message.marketId = object.marketId ?? "";
    message.leverage = object.leverage ?? "";
    message.isCross = object.isCross ?? false;
    return message;
  },
};

function createBaseMarketLeverageRecord(): MarketLeverageRecord {
  return { address: "", marketLeverage: undefined };
}

export const MarketLeverageRecord = {
  encode(message: MarketLeverageRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketLeverage !== undefined) {
      MarketLeverage.encode(message.marketLeverage, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketLeverageRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketLeverageRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketLeverage = MarketLeverage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketLeverageRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketLeverage: isSet(object.marketLeverage) ? MarketLeverage.fromJSON(object.marketLeverage) : undefined,
    };
  },

  toJSON(message: MarketLeverageRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketLeverage !== undefined &&
      (obj.marketLeverage = message.marketLeverage ? MarketLeverage.toJSON(message.marketLeverage) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MarketLeverageRecord>): MarketLeverageRecord {
    return MarketLeverageRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MarketLeverageRecord>): MarketLeverageRecord {
    const message = createBaseMarketLeverageRecord();
    message.address = object.address ?? "";
    message.marketLeverage = (object.marketLeverage !== undefined && object.marketLeverage !== null)
      ? MarketLeverage.fromPartial(object.marketLeverage)
      : undefined;
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
