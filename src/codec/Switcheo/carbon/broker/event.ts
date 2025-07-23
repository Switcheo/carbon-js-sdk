/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.broker";

export interface TradeEvent {
  id: Long;
  blockHeight: Long;
  blockCreatedAt?: Date;
  marketId: string;
  price: string;
  quantity: string;
  liquidation: string;
  takerId: string;
  takerSide: string;
  takerAddress: string;
  takerFeeAmount: string;
  takerFeeDenom: string;
  takerFeeKickback: string;
  takerFeeCommission: string;
  takerFeeCommissionAddress: string;
  makerId: string;
  makerSide: string;
  makerAddress: string;
  makerFeeAmount: string;
  makerFeeDenom: string;
  makerFeeKickback: string;
  makerFeeCommission: string;
  makerFeeCommissionAddress: string;
}

export interface FundingEvent {
  marketId: string;
  fundingRate: string;
  premiumRate: string;
  borrowRate: string;
}

function createBaseTradeEvent(): TradeEvent {
  return {
    id: Long.UZERO,
    blockHeight: Long.ZERO,
    blockCreatedAt: undefined,
    marketId: "",
    price: "",
    quantity: "",
    liquidation: "",
    takerId: "",
    takerSide: "",
    takerAddress: "",
    takerFeeAmount: "",
    takerFeeDenom: "",
    takerFeeKickback: "",
    takerFeeCommission: "",
    takerFeeCommissionAddress: "",
    makerId: "",
    makerSide: "",
    makerAddress: "",
    makerFeeAmount: "",
    makerFeeDenom: "",
    makerFeeKickback: "",
    makerFeeCommission: "",
    makerFeeCommissionAddress: "",
  };
}

export const TradeEvent = {
  encode(message: TradeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(136).uint64(message.id);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.blockCreatedAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.marketId !== "") {
      writer.uint32(106).string(message.marketId);
    }
    if (message.price !== "") {
      writer.uint32(114).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(122).string(message.quantity);
    }
    if (message.liquidation !== "") {
      writer.uint32(130).string(message.liquidation);
    }
    if (message.takerId !== "") {
      writer.uint32(26).string(message.takerId);
    }
    if (message.takerSide !== "") {
      writer.uint32(58).string(message.takerSide);
    }
    if (message.takerAddress !== "") {
      writer.uint32(34).string(message.takerAddress);
    }
    if (message.takerFeeAmount !== "") {
      writer.uint32(42).string(message.takerFeeAmount);
    }
    if (message.takerFeeDenom !== "") {
      writer.uint32(50).string(message.takerFeeDenom);
    }
    if (message.takerFeeKickback !== "") {
      writer.uint32(146).string(message.takerFeeKickback);
    }
    if (message.takerFeeCommission !== "") {
      writer.uint32(154).string(message.takerFeeCommission);
    }
    if (message.takerFeeCommissionAddress !== "") {
      writer.uint32(162).string(message.takerFeeCommissionAddress);
    }
    if (message.makerId !== "") {
      writer.uint32(66).string(message.makerId);
    }
    if (message.makerSide !== "") {
      writer.uint32(98).string(message.makerSide);
    }
    if (message.makerAddress !== "") {
      writer.uint32(74).string(message.makerAddress);
    }
    if (message.makerFeeAmount !== "") {
      writer.uint32(82).string(message.makerFeeAmount);
    }
    if (message.makerFeeDenom !== "") {
      writer.uint32(90).string(message.makerFeeDenom);
    }
    if (message.makerFeeKickback !== "") {
      writer.uint32(170).string(message.makerFeeKickback);
    }
    if (message.makerFeeCommission !== "") {
      writer.uint32(178).string(message.makerFeeCommission);
    }
    if (message.makerFeeCommissionAddress !== "") {
      writer.uint32(186).string(message.makerFeeCommissionAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 17:
          if (tag !== 136) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 1:
          if (tag !== 8) {
            break;
          }

          message.blockHeight = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blockCreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.price = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.quantity = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.liquidation = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.takerId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.takerSide = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.takerAddress = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.takerFeeAmount = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.takerFeeDenom = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.takerFeeKickback = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.takerFeeCommission = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.takerFeeCommissionAddress = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.makerId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.makerSide = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.makerAddress = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.makerFeeAmount = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.makerFeeDenom = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.makerFeeKickback = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.makerFeeCommission = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.makerFeeCommissionAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TradeEvent {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      blockCreatedAt: isSet(object.blockCreatedAt) ? fromJsonTimestamp(object.blockCreatedAt) : undefined,
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      liquidation: isSet(object.liquidation) ? String(object.liquidation) : "",
      takerId: isSet(object.takerId) ? String(object.takerId) : "",
      takerSide: isSet(object.takerSide) ? String(object.takerSide) : "",
      takerAddress: isSet(object.takerAddress) ? String(object.takerAddress) : "",
      takerFeeAmount: isSet(object.takerFeeAmount) ? String(object.takerFeeAmount) : "",
      takerFeeDenom: isSet(object.takerFeeDenom) ? String(object.takerFeeDenom) : "",
      takerFeeKickback: isSet(object.takerFeeKickback) ? String(object.takerFeeKickback) : "",
      takerFeeCommission: isSet(object.takerFeeCommission) ? String(object.takerFeeCommission) : "",
      takerFeeCommissionAddress: isSet(object.takerFeeCommissionAddress)
        ? String(object.takerFeeCommissionAddress)
        : "",
      makerId: isSet(object.makerId) ? String(object.makerId) : "",
      makerSide: isSet(object.makerSide) ? String(object.makerSide) : "",
      makerAddress: isSet(object.makerAddress) ? String(object.makerAddress) : "",
      makerFeeAmount: isSet(object.makerFeeAmount) ? String(object.makerFeeAmount) : "",
      makerFeeDenom: isSet(object.makerFeeDenom) ? String(object.makerFeeDenom) : "",
      makerFeeKickback: isSet(object.makerFeeKickback) ? String(object.makerFeeKickback) : "",
      makerFeeCommission: isSet(object.makerFeeCommission) ? String(object.makerFeeCommission) : "",
      makerFeeCommissionAddress: isSet(object.makerFeeCommissionAddress)
        ? String(object.makerFeeCommissionAddress)
        : "",
    };
  },

  toJSON(message: TradeEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockCreatedAt !== undefined && (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.liquidation !== undefined && (obj.liquidation = message.liquidation);
    message.takerId !== undefined && (obj.takerId = message.takerId);
    message.takerSide !== undefined && (obj.takerSide = message.takerSide);
    message.takerAddress !== undefined && (obj.takerAddress = message.takerAddress);
    message.takerFeeAmount !== undefined && (obj.takerFeeAmount = message.takerFeeAmount);
    message.takerFeeDenom !== undefined && (obj.takerFeeDenom = message.takerFeeDenom);
    message.takerFeeKickback !== undefined && (obj.takerFeeKickback = message.takerFeeKickback);
    message.takerFeeCommission !== undefined && (obj.takerFeeCommission = message.takerFeeCommission);
    message.takerFeeCommissionAddress !== undefined &&
      (obj.takerFeeCommissionAddress = message.takerFeeCommissionAddress);
    message.makerId !== undefined && (obj.makerId = message.makerId);
    message.makerSide !== undefined && (obj.makerSide = message.makerSide);
    message.makerAddress !== undefined && (obj.makerAddress = message.makerAddress);
    message.makerFeeAmount !== undefined && (obj.makerFeeAmount = message.makerFeeAmount);
    message.makerFeeDenom !== undefined && (obj.makerFeeDenom = message.makerFeeDenom);
    message.makerFeeKickback !== undefined && (obj.makerFeeKickback = message.makerFeeKickback);
    message.makerFeeCommission !== undefined && (obj.makerFeeCommission = message.makerFeeCommission);
    message.makerFeeCommissionAddress !== undefined &&
      (obj.makerFeeCommissionAddress = message.makerFeeCommissionAddress);
    return obj;
  },

  create(base?: DeepPartial<TradeEvent>): TradeEvent {
    return TradeEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TradeEvent>): TradeEvent {
    const message = createBaseTradeEvent();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.liquidation = object.liquidation ?? "";
    message.takerId = object.takerId ?? "";
    message.takerSide = object.takerSide ?? "";
    message.takerAddress = object.takerAddress ?? "";
    message.takerFeeAmount = object.takerFeeAmount ?? "";
    message.takerFeeDenom = object.takerFeeDenom ?? "";
    message.takerFeeKickback = object.takerFeeKickback ?? "";
    message.takerFeeCommission = object.takerFeeCommission ?? "";
    message.takerFeeCommissionAddress = object.takerFeeCommissionAddress ?? "";
    message.makerId = object.makerId ?? "";
    message.makerSide = object.makerSide ?? "";
    message.makerAddress = object.makerAddress ?? "";
    message.makerFeeAmount = object.makerFeeAmount ?? "";
    message.makerFeeDenom = object.makerFeeDenom ?? "";
    message.makerFeeKickback = object.makerFeeKickback ?? "";
    message.makerFeeCommission = object.makerFeeCommission ?? "";
    message.makerFeeCommissionAddress = object.makerFeeCommissionAddress ?? "";
    return message;
  },
};

function createBaseFundingEvent(): FundingEvent {
  return { marketId: "", fundingRate: "", premiumRate: "", borrowRate: "" };
}

export const FundingEvent = {
  encode(message: FundingEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.fundingRate !== "") {
      writer.uint32(18).string(message.fundingRate);
    }
    if (message.premiumRate !== "") {
      writer.uint32(26).string(message.premiumRate);
    }
    if (message.borrowRate !== "") {
      writer.uint32(34).string(message.borrowRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundingEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingEvent();
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

          message.fundingRate = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.premiumRate = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.borrowRate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FundingEvent {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      fundingRate: isSet(object.fundingRate) ? String(object.fundingRate) : "",
      premiumRate: isSet(object.premiumRate) ? String(object.premiumRate) : "",
      borrowRate: isSet(object.borrowRate) ? String(object.borrowRate) : "",
    };
  },

  toJSON(message: FundingEvent): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.fundingRate !== undefined && (obj.fundingRate = message.fundingRate);
    message.premiumRate !== undefined && (obj.premiumRate = message.premiumRate);
    message.borrowRate !== undefined && (obj.borrowRate = message.borrowRate);
    return obj;
  },

  create(base?: DeepPartial<FundingEvent>): FundingEvent {
    return FundingEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FundingEvent>): FundingEvent {
    const message = createBaseFundingEvent();
    message.marketId = object.marketId ?? "";
    message.fundingRate = object.fundingRate ?? "";
    message.premiumRate = object.premiumRate ?? "";
    message.borrowRate = object.borrowRate ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
