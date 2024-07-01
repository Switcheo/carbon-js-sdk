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

const baseTradeEvent: object = {
  id: Long.UZERO,
  blockHeight: Long.ZERO,
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

export const TradeEvent = {
  encode(
    message: TradeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(136).uint64(message.id);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockCreatedAt),
        writer.uint32(18).fork()
      ).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTradeEvent } as TradeEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 17:
          message.id = reader.uint64() as Long;
          break;
        case 1:
          message.blockHeight = reader.int64() as Long;
          break;
        case 2:
          message.blockCreatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.marketId = reader.string();
          break;
        case 14:
          message.price = reader.string();
          break;
        case 15:
          message.quantity = reader.string();
          break;
        case 16:
          message.liquidation = reader.string();
          break;
        case 3:
          message.takerId = reader.string();
          break;
        case 7:
          message.takerSide = reader.string();
          break;
        case 4:
          message.takerAddress = reader.string();
          break;
        case 5:
          message.takerFeeAmount = reader.string();
          break;
        case 6:
          message.takerFeeDenom = reader.string();
          break;
        case 18:
          message.takerFeeKickback = reader.string();
          break;
        case 19:
          message.takerFeeCommission = reader.string();
          break;
        case 20:
          message.takerFeeCommissionAddress = reader.string();
          break;
        case 8:
          message.makerId = reader.string();
          break;
        case 12:
          message.makerSide = reader.string();
          break;
        case 9:
          message.makerAddress = reader.string();
          break;
        case 10:
          message.makerFeeAmount = reader.string();
          break;
        case 11:
          message.makerFeeDenom = reader.string();
          break;
        case 21:
          message.makerFeeKickback = reader.string();
          break;
        case 22:
          message.makerFeeCommission = reader.string();
          break;
        case 23:
          message.makerFeeCommissionAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradeEvent {
    const message = { ...baseTradeEvent } as TradeEvent;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromString(object.blockHeight)
        : Long.ZERO;
    message.blockCreatedAt =
      object.blockCreatedAt !== undefined && object.blockCreatedAt !== null
        ? fromJsonTimestamp(object.blockCreatedAt)
        : undefined;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.price =
      object.price !== undefined && object.price !== null
        ? String(object.price)
        : "";
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? String(object.quantity)
        : "";
    message.liquidation =
      object.liquidation !== undefined && object.liquidation !== null
        ? String(object.liquidation)
        : "";
    message.takerId =
      object.takerId !== undefined && object.takerId !== null
        ? String(object.takerId)
        : "";
    message.takerSide =
      object.takerSide !== undefined && object.takerSide !== null
        ? String(object.takerSide)
        : "";
    message.takerAddress =
      object.takerAddress !== undefined && object.takerAddress !== null
        ? String(object.takerAddress)
        : "";
    message.takerFeeAmount =
      object.takerFeeAmount !== undefined && object.takerFeeAmount !== null
        ? String(object.takerFeeAmount)
        : "";
    message.takerFeeDenom =
      object.takerFeeDenom !== undefined && object.takerFeeDenom !== null
        ? String(object.takerFeeDenom)
        : "";
    message.takerFeeKickback =
      object.takerFeeKickback !== undefined && object.takerFeeKickback !== null
        ? String(object.takerFeeKickback)
        : "";
    message.takerFeeCommission =
      object.takerFeeCommission !== undefined &&
      object.takerFeeCommission !== null
        ? String(object.takerFeeCommission)
        : "";
    message.takerFeeCommissionAddress =
      object.takerFeeCommissionAddress !== undefined &&
      object.takerFeeCommissionAddress !== null
        ? String(object.takerFeeCommissionAddress)
        : "";
    message.makerId =
      object.makerId !== undefined && object.makerId !== null
        ? String(object.makerId)
        : "";
    message.makerSide =
      object.makerSide !== undefined && object.makerSide !== null
        ? String(object.makerSide)
        : "";
    message.makerAddress =
      object.makerAddress !== undefined && object.makerAddress !== null
        ? String(object.makerAddress)
        : "";
    message.makerFeeAmount =
      object.makerFeeAmount !== undefined && object.makerFeeAmount !== null
        ? String(object.makerFeeAmount)
        : "";
    message.makerFeeDenom =
      object.makerFeeDenom !== undefined && object.makerFeeDenom !== null
        ? String(object.makerFeeDenom)
        : "";
    message.makerFeeKickback =
      object.makerFeeKickback !== undefined && object.makerFeeKickback !== null
        ? String(object.makerFeeKickback)
        : "";
    message.makerFeeCommission =
      object.makerFeeCommission !== undefined &&
      object.makerFeeCommission !== null
        ? String(object.makerFeeCommission)
        : "";
    message.makerFeeCommissionAddress =
      object.makerFeeCommissionAddress !== undefined &&
      object.makerFeeCommissionAddress !== null
        ? String(object.makerFeeCommissionAddress)
        : "";
    return message;
  },

  toJSON(message: TradeEvent): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockCreatedAt !== undefined &&
      (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.liquidation !== undefined &&
      (obj.liquidation = message.liquidation);
    message.takerId !== undefined && (obj.takerId = message.takerId);
    message.takerSide !== undefined && (obj.takerSide = message.takerSide);
    message.takerAddress !== undefined &&
      (obj.takerAddress = message.takerAddress);
    message.takerFeeAmount !== undefined &&
      (obj.takerFeeAmount = message.takerFeeAmount);
    message.takerFeeDenom !== undefined &&
      (obj.takerFeeDenom = message.takerFeeDenom);
    message.takerFeeKickback !== undefined &&
      (obj.takerFeeKickback = message.takerFeeKickback);
    message.takerFeeCommission !== undefined &&
      (obj.takerFeeCommission = message.takerFeeCommission);
    message.takerFeeCommissionAddress !== undefined &&
      (obj.takerFeeCommissionAddress = message.takerFeeCommissionAddress);
    message.makerId !== undefined && (obj.makerId = message.makerId);
    message.makerSide !== undefined && (obj.makerSide = message.makerSide);
    message.makerAddress !== undefined &&
      (obj.makerAddress = message.makerAddress);
    message.makerFeeAmount !== undefined &&
      (obj.makerFeeAmount = message.makerFeeAmount);
    message.makerFeeDenom !== undefined &&
      (obj.makerFeeDenom = message.makerFeeDenom);
    message.makerFeeKickback !== undefined &&
      (obj.makerFeeKickback = message.makerFeeKickback);
    message.makerFeeCommission !== undefined &&
      (obj.makerFeeCommission = message.makerFeeCommission);
    message.makerFeeCommissionAddress !== undefined &&
      (obj.makerFeeCommissionAddress = message.makerFeeCommissionAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<TradeEvent>): TradeEvent {
    const message = { ...baseTradeEvent } as TradeEvent;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
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

const baseFundingEvent: object = {
  marketId: "",
  fundingRate: "",
  premiumRate: "",
  borrowRate: "",
};

export const FundingEvent = {
  encode(
    message: FundingEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFundingEvent } as FundingEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.fundingRate = reader.string();
          break;
        case 3:
          message.premiumRate = reader.string();
          break;
        case 4:
          message.borrowRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FundingEvent {
    const message = { ...baseFundingEvent } as FundingEvent;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.fundingRate =
      object.fundingRate !== undefined && object.fundingRate !== null
        ? String(object.fundingRate)
        : "";
    message.premiumRate =
      object.premiumRate !== undefined && object.premiumRate !== null
        ? String(object.premiumRate)
        : "";
    message.borrowRate =
      object.borrowRate !== undefined && object.borrowRate !== null
        ? String(object.borrowRate)
        : "";
    return message;
  },

  toJSON(message: FundingEvent): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.fundingRate !== undefined &&
      (obj.fundingRate = message.fundingRate);
    message.premiumRate !== undefined &&
      (obj.premiumRate = message.premiumRate);
    message.borrowRate !== undefined && (obj.borrowRate = message.borrowRate);
    return obj;
  },

  fromPartial(object: DeepPartial<FundingEvent>): FundingEvent {
    const message = { ...baseFundingEvent } as FundingEvent;
    message.marketId = object.marketId ?? "";
    message.fundingRate = object.fundingRate ?? "";
    message.premiumRate = object.premiumRate ?? "";
    message.borrowRate = object.borrowRate ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
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
