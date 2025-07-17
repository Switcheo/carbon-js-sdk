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

function createBaseQuoteEvent(): QuoteEvent {
  return { quote: undefined, status: "", updatedBlockHeight: Long.UZERO };
}

export const QuoteEvent = {
  encode(message: QuoteEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuoteEvent();
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedBlockHeight = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuoteEvent {
    return {
      quote: isSet(object.quote) ? Quote.fromJSON(object.quote) : undefined,
      status: isSet(object.status) ? String(object.status) : "",
      updatedBlockHeight: isSet(object.updatedBlockHeight) ? Long.fromValue(object.updatedBlockHeight) : Long.UZERO,
    };
  },

  toJSON(message: QuoteEvent): unknown {
    const obj: any = {};
    message.quote !== undefined && (obj.quote = message.quote ? Quote.toJSON(message.quote) : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.updatedBlockHeight !== undefined &&
      (obj.updatedBlockHeight = (message.updatedBlockHeight || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QuoteEvent>): QuoteEvent {
    return QuoteEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuoteEvent>): QuoteEvent {
    const message = createBaseQuoteEvent();
    message.quote = (object.quote !== undefined && object.quote !== null) ? Quote.fromPartial(object.quote) : undefined;
    message.status = object.status ?? "";
    message.updatedBlockHeight = (object.updatedBlockHeight !== undefined && object.updatedBlockHeight !== null)
      ? Long.fromValue(object.updatedBlockHeight)
      : Long.UZERO;
    return message;
  },
};

function createBaseRfqEvent(): RfqEvent {
  return { rfq: undefined, status: "", updatedBlockHeight: Long.UZERO };
}

export const RfqEvent = {
  encode(message: RfqEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRfqEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rfq = Rfq.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedBlockHeight = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RfqEvent {
    return {
      rfq: isSet(object.rfq) ? Rfq.fromJSON(object.rfq) : undefined,
      status: isSet(object.status) ? String(object.status) : "",
      updatedBlockHeight: isSet(object.updatedBlockHeight) ? Long.fromValue(object.updatedBlockHeight) : Long.UZERO,
    };
  },

  toJSON(message: RfqEvent): unknown {
    const obj: any = {};
    message.rfq !== undefined && (obj.rfq = message.rfq ? Rfq.toJSON(message.rfq) : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.updatedBlockHeight !== undefined &&
      (obj.updatedBlockHeight = (message.updatedBlockHeight || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<RfqEvent>): RfqEvent {
    return RfqEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RfqEvent>): RfqEvent {
    const message = createBaseRfqEvent();
    message.rfq = (object.rfq !== undefined && object.rfq !== null) ? Rfq.fromPartial(object.rfq) : undefined;
    message.status = object.status ?? "";
    message.updatedBlockHeight = (object.updatedBlockHeight !== undefined && object.updatedBlockHeight !== null)
      ? Long.fromValue(object.updatedBlockHeight)
      : Long.UZERO;
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
