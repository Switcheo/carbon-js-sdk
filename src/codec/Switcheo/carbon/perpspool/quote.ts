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

const baseQuote: object = {
  quotePriceType: "",
  quotePriceValue: "",
  quoteAmountRatio: "",
};

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuote } as Quote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quotePriceType = reader.string();
          break;
        case 2:
          message.quotePriceValue = reader.string();
          break;
        case 3:
          message.quoteAmountRatio = reader.string();
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
    message.quotePriceType =
      object.quotePriceType !== undefined && object.quotePriceType !== null
        ? String(object.quotePriceType)
        : "";
    message.quotePriceValue =
      object.quotePriceValue !== undefined && object.quotePriceValue !== null
        ? String(object.quotePriceValue)
        : "";
    message.quoteAmountRatio =
      object.quoteAmountRatio !== undefined && object.quoteAmountRatio !== null
        ? String(object.quoteAmountRatio)
        : "";
    return message;
  },

  toJSON(message: Quote): unknown {
    const obj: any = {};
    message.quotePriceType !== undefined &&
      (obj.quotePriceType = message.quotePriceType);
    message.quotePriceValue !== undefined &&
      (obj.quotePriceValue = message.quotePriceValue);
    message.quoteAmountRatio !== undefined &&
      (obj.quoteAmountRatio = message.quoteAmountRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<Quote>): Quote {
    const message = { ...baseQuote } as Quote;
    message.quotePriceType = object.quotePriceType ?? "";
    message.quotePriceValue = object.quotePriceValue ?? "";
    message.quoteAmountRatio = object.quoteAmountRatio ?? "";
    return message;
  },
};

const baseQuoteStrategy: object = { id: Long.UZERO, name: "" };

export const QuoteStrategy = {
  encode(
    message: QuoteStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuoteStrategy } as QuoteStrategy;
    message.quoteShape = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.quoteShape.push(Quote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuoteStrategy {
    const message = { ...baseQuoteStrategy } as QuoteStrategy;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.quoteShape = (object.quoteShape ?? []).map((e: any) =>
      Quote.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QuoteStrategy): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    if (message.quoteShape) {
      obj.quoteShape = message.quoteShape.map((e) =>
        e ? Quote.toJSON(e) : undefined
      );
    } else {
      obj.quoteShape = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QuoteStrategy>): QuoteStrategy {
    const message = { ...baseQuoteStrategy } as QuoteStrategy;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.quoteShape = (object.quoteShape ?? []).map((e) =>
      Quote.fromPartial(e)
    );
    return message;
  },
};

const baseUpdateQuoteStrategyParams: object = {};

export const UpdateQuoteStrategyParams = {
  encode(
    message: UpdateQuoteStrategyParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      StringValue.encode(
        { value: message.name! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.quoteShape) {
      Quote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateQuoteStrategyParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateQuoteStrategyParams,
    } as UpdateQuoteStrategyParams;
    message.quoteShape = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.quoteShape.push(Quote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateQuoteStrategyParams {
    const message = {
      ...baseUpdateQuoteStrategyParams,
    } as UpdateQuoteStrategyParams;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : undefined;
    message.quoteShape = (object.quoteShape ?? []).map((e: any) =>
      Quote.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateQuoteStrategyParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.quoteShape) {
      obj.quoteShape = message.quoteShape.map((e) =>
        e ? Quote.toJSON(e) : undefined
      );
    } else {
      obj.quoteShape = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateQuoteStrategyParams>
  ): UpdateQuoteStrategyParams {
    const message = {
      ...baseUpdateQuoteStrategyParams,
    } as UpdateQuoteStrategyParams;
    message.name = object.name ?? undefined;
    message.quoteShape = (object.quoteShape ?? []).map((e) =>
      Quote.fromPartial(e)
    );
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
