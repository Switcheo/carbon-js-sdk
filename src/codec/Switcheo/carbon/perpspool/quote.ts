/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StringValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.perpspool";

export interface Quote {
  quotePriceType: string;
  quotePriceValue: string;
  quoteAmountRatio: string;
}

export interface QuoteStrategy {
  /** Unique identifier for this quote strategy */
  id: Long;
  /**
   * A human-friendly name to identify the shape (e.g. "high volatility", "low
   * liquidity", etc)
   */
  name: string;
  /** The list of quotes that make up the shape. */
  quoteShape: Quote[];
}

export interface UpdateQuoteStrategyParams {
  name?: string;
  quoteShape: Quote[];
}

function createBaseQuote(): Quote {
  return { quotePriceType: "", quotePriceValue: "", quoteAmountRatio: "" };
}

export const Quote = {
  encode(message: Quote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quotePriceType !== "") {
      writer.uint32(10).string(message.quotePriceType);
    }
    if (message.quotePriceValue !== "") {
      writer.uint32(18).string(message.quotePriceValue);
    }
    if (message.quoteAmountRatio !== "") {
      writer.uint32(26).string(message.quoteAmountRatio);
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

          message.quotePriceType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quotePriceValue = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quoteAmountRatio = reader.string();
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
      quotePriceType: isSet(object.quotePriceType) ? String(object.quotePriceType) : "",
      quotePriceValue: isSet(object.quotePriceValue) ? String(object.quotePriceValue) : "",
      quoteAmountRatio: isSet(object.quoteAmountRatio) ? String(object.quoteAmountRatio) : "",
    };
  },

  toJSON(message: Quote): unknown {
    const obj: any = {};
    message.quotePriceType !== undefined && (obj.quotePriceType = message.quotePriceType);
    message.quotePriceValue !== undefined && (obj.quotePriceValue = message.quotePriceValue);
    message.quoteAmountRatio !== undefined && (obj.quoteAmountRatio = message.quoteAmountRatio);
    return obj;
  },

  create(base?: DeepPartial<Quote>): Quote {
    return Quote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Quote>): Quote {
    const message = createBaseQuote();
    message.quotePriceType = object.quotePriceType ?? "";
    message.quotePriceValue = object.quotePriceValue ?? "";
    message.quoteAmountRatio = object.quoteAmountRatio ?? "";
    return message;
  },
};

function createBaseQuoteStrategy(): QuoteStrategy {
  return { id: Long.UZERO, name: "", quoteShape: [] };
}

export const QuoteStrategy = {
  encode(message: QuoteStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.quoteShape) {
      Quote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuoteStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quoteShape.push(Quote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuoteStrategy {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      quoteShape: Array.isArray(object?.quoteShape) ? object.quoteShape.map((e: any) => Quote.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuoteStrategy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    if (message.quoteShape) {
      obj.quoteShape = message.quoteShape.map((e) => e ? Quote.toJSON(e) : undefined);
    } else {
      obj.quoteShape = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QuoteStrategy>): QuoteStrategy {
    return QuoteStrategy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuoteStrategy>): QuoteStrategy {
    const message = createBaseQuoteStrategy();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.quoteShape = object.quoteShape?.map((e) => Quote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateQuoteStrategyParams(): UpdateQuoteStrategyParams {
  return { name: undefined, quoteShape: [] };
}

export const UpdateQuoteStrategyParams = {
  encode(message: UpdateQuoteStrategyParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      StringValue.encode({ value: message.name! }, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.quoteShape) {
      Quote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateQuoteStrategyParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateQuoteStrategyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quoteShape.push(Quote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateQuoteStrategyParams {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      quoteShape: Array.isArray(object?.quoteShape) ? object.quoteShape.map((e: any) => Quote.fromJSON(e)) : [],
    };
  },

  toJSON(message: UpdateQuoteStrategyParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.quoteShape) {
      obj.quoteShape = message.quoteShape.map((e) => e ? Quote.toJSON(e) : undefined);
    } else {
      obj.quoteShape = [];
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateQuoteStrategyParams>): UpdateQuoteStrategyParams {
    return UpdateQuoteStrategyParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateQuoteStrategyParams>): UpdateQuoteStrategyParams {
    const message = createBaseUpdateQuoteStrategyParams();
    message.name = object.name ?? undefined;
    message.quoteShape = object.quoteShape?.map((e) => Quote.fromPartial(e)) || [];
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
