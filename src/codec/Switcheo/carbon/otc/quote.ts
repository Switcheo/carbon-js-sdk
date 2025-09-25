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

function createBaseQuote(): Quote {
  return { id: "", quoter: "", rfqId: "", coin: undefined, expiryTime: undefined };
}

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
      Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quoter = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rfqId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Quote {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      quoter: isSet(object.quoter) ? String(object.quoter) : "",
      rfqId: isSet(object.rfqId) ? String(object.rfqId) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : undefined,
    };
  },

  toJSON(message: Quote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.quoter !== undefined && (obj.quoter = message.quoter);
    message.rfqId !== undefined && (obj.rfqId = message.rfqId);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.expiryTime !== undefined && (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<Quote>): Quote {
    return Quote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Quote>): Quote {
    const message = createBaseQuote();
    message.id = object.id ?? "";
    message.quoter = object.quoter ?? "";
    message.rfqId = object.rfqId ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

function createBaseQuoteWithStatus(): QuoteWithStatus {
  return { quote: undefined, status: "" };
}

export const QuoteWithStatus = {
  encode(message: QuoteWithStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quote !== undefined) {
      Quote.encode(message.quote, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteWithStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuoteWithStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quote = Quote.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuoteWithStatus {
    return {
      quote: isSet(object.quote) ? Quote.fromJSON(object.quote) : undefined,
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: QuoteWithStatus): unknown {
    const obj: any = {};
    message.quote !== undefined && (obj.quote = message.quote ? Quote.toJSON(message.quote) : undefined);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  create(base?: DeepPartial<QuoteWithStatus>): QuoteWithStatus {
    return QuoteWithStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuoteWithStatus>): QuoteWithStatus {
    const message = createBaseQuoteWithStatus();
    message.quote = (object.quote !== undefined && object.quote !== null) ? Quote.fromPartial(object.quote) : undefined;
    message.status = object.status ?? "";
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
