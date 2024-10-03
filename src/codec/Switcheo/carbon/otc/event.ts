/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Quote } from "./quote";
import { Rfq } from "./rfq";

export const protobufPackage = "Switcheo.carbon.otc";

export interface QuoteEvent {
  quote?: Quote;
  status: string;
  updatedBlockHeight: Long;
}

export interface RfqEvent {
  rfq?: Rfq;
  status: string;
  updatedBlockHeight: Long;
}

const baseQuoteEvent: object = { status: "", updatedBlockHeight: Long.UZERO };

export const QuoteEvent = {
  encode(
    message: QuoteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quote !== undefined) {
      Quote.encode(message.quote, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (!message.updatedBlockHeight.isZero()) {
      writer.uint32(24).uint64(message.updatedBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuoteEvent } as QuoteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quote = Quote.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.updatedBlockHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuoteEvent {
    const message = { ...baseQuoteEvent } as QuoteEvent;
    message.quote =
      object.quote !== undefined && object.quote !== null
        ? Quote.fromJSON(object.quote)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.updatedBlockHeight =
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
        ? Long.fromString(object.updatedBlockHeight)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QuoteEvent): unknown {
    const obj: any = {};
    message.quote !== undefined &&
      (obj.quote = message.quote ? Quote.toJSON(message.quote) : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.updatedBlockHeight !== undefined &&
      (obj.updatedBlockHeight = (
        message.updatedBlockHeight || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QuoteEvent>): QuoteEvent {
    const message = { ...baseQuoteEvent } as QuoteEvent;
    message.quote =
      object.quote !== undefined && object.quote !== null
        ? Quote.fromPartial(object.quote)
        : undefined;
    message.status = object.status ?? "";
    message.updatedBlockHeight =
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
        ? Long.fromValue(object.updatedBlockHeight)
        : Long.UZERO;
    return message;
  },
};

const baseRfqEvent: object = { status: "", updatedBlockHeight: Long.UZERO };

export const RfqEvent = {
  encode(
    message: RfqEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rfq !== undefined) {
      Rfq.encode(message.rfq, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (!message.updatedBlockHeight.isZero()) {
      writer.uint32(24).uint64(message.updatedBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RfqEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRfqEvent } as RfqEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rfq = Rfq.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.updatedBlockHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RfqEvent {
    const message = { ...baseRfqEvent } as RfqEvent;
    message.rfq =
      object.rfq !== undefined && object.rfq !== null
        ? Rfq.fromJSON(object.rfq)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.updatedBlockHeight =
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
        ? Long.fromString(object.updatedBlockHeight)
        : Long.UZERO;
    return message;
  },

  toJSON(message: RfqEvent): unknown {
    const obj: any = {};
    message.rfq !== undefined &&
      (obj.rfq = message.rfq ? Rfq.toJSON(message.rfq) : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.updatedBlockHeight !== undefined &&
      (obj.updatedBlockHeight = (
        message.updatedBlockHeight || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<RfqEvent>): RfqEvent {
    const message = { ...baseRfqEvent } as RfqEvent;
    message.rfq =
      object.rfq !== undefined && object.rfq !== null
        ? Rfq.fromPartial(object.rfq)
        : undefined;
    message.status = object.status ?? "";
    message.updatedBlockHeight =
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
        ? Long.fromValue(object.updatedBlockHeight)
        : Long.UZERO;
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
