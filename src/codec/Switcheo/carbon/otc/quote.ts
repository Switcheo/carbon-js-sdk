/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.otc";

export interface Quote {
  id: string;
  quoter: string;
  rfqId: string;
  coin?: Coin;
  expiryTime?: Date;
}

export interface QuoteWithStatus {
  quote?: Quote;
  status: string;
}

const baseQuote: object = { id: "", quoter: "", rfqId: "" };

export const Quote = {
  encode(message: Quote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.quoter !== "") {
      writer.uint32(18).string(message.quoter);
    }
    if (message.rfqId !== "") {
      writer.uint32(26).string(message.rfqId);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiryTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuote } as Quote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.quoter = reader.string();
          break;
        case 3:
          message.rfqId = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.expiryTime = fromTimestamp(
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

  fromJSON(object: any): Quote {
    const message = { ...baseQuote } as Quote;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.quoter =
      object.quoter !== undefined && object.quoter !== null
        ? String(object.quoter)
        : "";
    message.rfqId =
      object.rfqId !== undefined && object.rfqId !== null
        ? String(object.rfqId)
        : "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromJSON(object.coin)
        : undefined;
    message.expiryTime =
      object.expiryTime !== undefined && object.expiryTime !== null
        ? fromJsonTimestamp(object.expiryTime)
        : undefined;
    return message;
  },

  toJSON(message: Quote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.quoter !== undefined && (obj.quoter = message.quoter);
    message.rfqId !== undefined && (obj.rfqId = message.rfqId);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.expiryTime !== undefined &&
      (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Quote>): Quote {
    const message = { ...baseQuote } as Quote;
    message.id = object.id ?? "";
    message.quoter = object.quoter ?? "";
    message.rfqId = object.rfqId ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

const baseQuoteWithStatus: object = { status: "" };

export const QuoteWithStatus = {
  encode(
    message: QuoteWithStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quote !== undefined) {
      Quote.encode(message.quote, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteWithStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuoteWithStatus } as QuoteWithStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quote = Quote.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuoteWithStatus {
    const message = { ...baseQuoteWithStatus } as QuoteWithStatus;
    message.quote =
      object.quote !== undefined && object.quote !== null
        ? Quote.fromJSON(object.quote)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    return message;
  },

  toJSON(message: QuoteWithStatus): unknown {
    const obj: any = {};
    message.quote !== undefined &&
      (obj.quote = message.quote ? Quote.toJSON(message.quote) : undefined);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<QuoteWithStatus>): QuoteWithStatus {
    const message = { ...baseQuoteWithStatus } as QuoteWithStatus;
    message.quote =
      object.quote !== undefined && object.quote !== null
        ? Quote.fromPartial(object.quote)
        : undefined;
    message.status = object.status ?? "";
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
