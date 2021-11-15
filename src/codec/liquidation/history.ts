/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.liquidation";

export interface AccountTradeHistoryRow {
  orderId: string;
  market: string;
  side: string;
  quantity: string;
  price: string;
  feeAmount: string;
  feeDenom: string;
  address: string;
  blockHeight: Long;
  blockCreatedAt?: Date;
}

const baseAccountTradeHistoryRow: object = {
  orderId: "",
  market: "",
  side: "",
  quantity: "",
  price: "",
  feeAmount: "",
  feeDenom: "",
  address: "",
  blockHeight: Long.ZERO,
};

export const AccountTradeHistoryRow = {
  encode(
    message: AccountTradeHistoryRow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (message.side !== "") {
      writer.uint32(26).string(message.side);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(message.quantity);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    if (message.feeAmount !== "") {
      writer.uint32(50).string(message.feeAmount);
    }
    if (message.feeDenom !== "") {
      writer.uint32(58).string(message.feeDenom);
    }
    if (message.address !== "") {
      writer.uint32(66).string(message.address);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(72).int64(message.blockHeight);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockCreatedAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountTradeHistoryRow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountTradeHistoryRow } as AccountTradeHistoryRow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.side = reader.string();
          break;
        case 4:
          message.quantity = reader.string();
          break;
        case 5:
          message.price = reader.string();
          break;
        case 6:
          message.feeAmount = reader.string();
          break;
        case 7:
          message.feeDenom = reader.string();
          break;
        case 8:
          message.address = reader.string();
          break;
        case 9:
          message.blockHeight = reader.int64() as Long;
          break;
        case 10:
          message.blockCreatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountTradeHistoryRow {
    const message = { ...baseAccountTradeHistoryRow } as AccountTradeHistoryRow;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.side !== undefined && object.side !== null) {
      message.side = String(object.side);
    } else {
      message.side = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = String(object.quantity);
    } else {
      message.quantity = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.feeAmount !== undefined && object.feeAmount !== null) {
      message.feeAmount = String(object.feeAmount);
    } else {
      message.feeAmount = "";
    }
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = String(object.feeDenom);
    } else {
      message.feeDenom = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Long.fromString(object.blockHeight);
    } else {
      message.blockHeight = Long.ZERO;
    }
    if (object.blockCreatedAt !== undefined && object.blockCreatedAt !== null) {
      message.blockCreatedAt = fromJsonTimestamp(object.blockCreatedAt);
    } else {
      message.blockCreatedAt = undefined;
    }
    return message;
  },

  toJSON(message: AccountTradeHistoryRow): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.market !== undefined && (obj.market = message.market);
    message.side !== undefined && (obj.side = message.side);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.price !== undefined && (obj.price = message.price);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    message.address !== undefined && (obj.address = message.address);
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockCreatedAt !== undefined &&
      (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<AccountTradeHistoryRow>
  ): AccountTradeHistoryRow {
    const message = { ...baseAccountTradeHistoryRow } as AccountTradeHistoryRow;
    message.orderId = object.orderId ?? "";
    message.market = object.market ?? "";
    message.side = object.side ?? "";
    message.quantity = object.quantity ?? "";
    message.price = object.price ?? "";
    message.feeAmount = object.feeAmount ?? "";
    message.feeDenom = object.feeDenom ?? "";
    message.address = object.address ?? "";
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight as Long;
    } else {
      message.blockHeight = Long.ZERO;
    }
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
