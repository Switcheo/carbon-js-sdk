/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { PriceSet, TokenPrice } from "./pricing";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface PriceUpdateEvent {
  prices?: PriceSet;
}

export interface TokenPriceUpdateEvent {
  price?: TokenPrice;
}

export interface TokenPriceRemoveEvent {
  price?: TokenPrice;
}

export interface SetImpactBandEvent {
  impactBand: number;
  type: string;
}

export interface SetSmoothenBandEvent {
  smoothenBand: number;
  type: string;
}

export interface SetStaleIndexAllowanceEvent {
  staleIndexAllowance?: Duration;
  type: string;
}

export interface SetBackfillTimeIntervalEvent {
  backfillTimeInterval?: Duration;
  type: string;
}

function createBasePriceUpdateEvent(): PriceUpdateEvent {
  return { prices: undefined };
}

export const PriceUpdateEvent = {
  encode(message: PriceUpdateEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prices !== undefined) {
      PriceSet.encode(message.prices, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceUpdateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prices = PriceSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PriceUpdateEvent {
    return { prices: isSet(object.prices) ? PriceSet.fromJSON(object.prices) : undefined };
  },

  toJSON(message: PriceUpdateEvent): unknown {
    const obj: any = {};
    message.prices !== undefined && (obj.prices = message.prices ? PriceSet.toJSON(message.prices) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PriceUpdateEvent>): PriceUpdateEvent {
    return PriceUpdateEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PriceUpdateEvent>): PriceUpdateEvent {
    const message = createBasePriceUpdateEvent();
    message.prices = (object.prices !== undefined && object.prices !== null)
      ? PriceSet.fromPartial(object.prices)
      : undefined;
    return message;
  },
};

function createBaseTokenPriceUpdateEvent(): TokenPriceUpdateEvent {
  return { price: undefined };
}

export const TokenPriceUpdateEvent = {
  encode(message: TokenPriceUpdateEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      TokenPrice.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPriceUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPriceUpdateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.price = TokenPrice.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenPriceUpdateEvent {
    return { price: isSet(object.price) ? TokenPrice.fromJSON(object.price) : undefined };
  },

  toJSON(message: TokenPriceUpdateEvent): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? TokenPrice.toJSON(message.price) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TokenPriceUpdateEvent>): TokenPriceUpdateEvent {
    return TokenPriceUpdateEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TokenPriceUpdateEvent>): TokenPriceUpdateEvent {
    const message = createBaseTokenPriceUpdateEvent();
    message.price = (object.price !== undefined && object.price !== null)
      ? TokenPrice.fromPartial(object.price)
      : undefined;
    return message;
  },
};

function createBaseTokenPriceRemoveEvent(): TokenPriceRemoveEvent {
  return { price: undefined };
}

export const TokenPriceRemoveEvent = {
  encode(message: TokenPriceRemoveEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      TokenPrice.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPriceRemoveEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPriceRemoveEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.price = TokenPrice.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenPriceRemoveEvent {
    return { price: isSet(object.price) ? TokenPrice.fromJSON(object.price) : undefined };
  },

  toJSON(message: TokenPriceRemoveEvent): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? TokenPrice.toJSON(message.price) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TokenPriceRemoveEvent>): TokenPriceRemoveEvent {
    return TokenPriceRemoveEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TokenPriceRemoveEvent>): TokenPriceRemoveEvent {
    const message = createBaseTokenPriceRemoveEvent();
    message.price = (object.price !== undefined && object.price !== null)
      ? TokenPrice.fromPartial(object.price)
      : undefined;
    return message;
  },
};

function createBaseSetImpactBandEvent(): SetImpactBandEvent {
  return { impactBand: 0, type: "" };
}

export const SetImpactBandEvent = {
  encode(message: SetImpactBandEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.impactBand !== 0) {
      writer.uint32(8).uint32(message.impactBand);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetImpactBandEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetImpactBandEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.impactBand = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetImpactBandEvent {
    return {
      impactBand: isSet(object.impactBand) ? Number(object.impactBand) : 0,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetImpactBandEvent): unknown {
    const obj: any = {};
    message.impactBand !== undefined && (obj.impactBand = Math.round(message.impactBand));
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetImpactBandEvent>): SetImpactBandEvent {
    return SetImpactBandEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetImpactBandEvent>): SetImpactBandEvent {
    const message = createBaseSetImpactBandEvent();
    message.impactBand = object.impactBand ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSetSmoothenBandEvent(): SetSmoothenBandEvent {
  return { smoothenBand: 0, type: "" };
}

export const SetSmoothenBandEvent = {
  encode(message: SetSmoothenBandEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.smoothenBand !== 0) {
      writer.uint32(8).uint32(message.smoothenBand);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSmoothenBandEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSmoothenBandEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.smoothenBand = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetSmoothenBandEvent {
    return {
      smoothenBand: isSet(object.smoothenBand) ? Number(object.smoothenBand) : 0,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetSmoothenBandEvent): unknown {
    const obj: any = {};
    message.smoothenBand !== undefined && (obj.smoothenBand = Math.round(message.smoothenBand));
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetSmoothenBandEvent>): SetSmoothenBandEvent {
    return SetSmoothenBandEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetSmoothenBandEvent>): SetSmoothenBandEvent {
    const message = createBaseSetSmoothenBandEvent();
    message.smoothenBand = object.smoothenBand ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSetStaleIndexAllowanceEvent(): SetStaleIndexAllowanceEvent {
  return { staleIndexAllowance: undefined, type: "" };
}

export const SetStaleIndexAllowanceEvent = {
  encode(message: SetStaleIndexAllowanceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staleIndexAllowance !== undefined) {
      Duration.encode(message.staleIndexAllowance, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetStaleIndexAllowanceEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetStaleIndexAllowanceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.staleIndexAllowance = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetStaleIndexAllowanceEvent {
    return {
      staleIndexAllowance: isSet(object.staleIndexAllowance)
        ? Duration.fromJSON(object.staleIndexAllowance)
        : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetStaleIndexAllowanceEvent): unknown {
    const obj: any = {};
    message.staleIndexAllowance !== undefined &&
      (obj.staleIndexAllowance = message.staleIndexAllowance
        ? Duration.toJSON(message.staleIndexAllowance)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetStaleIndexAllowanceEvent>): SetStaleIndexAllowanceEvent {
    return SetStaleIndexAllowanceEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetStaleIndexAllowanceEvent>): SetStaleIndexAllowanceEvent {
    const message = createBaseSetStaleIndexAllowanceEvent();
    message.staleIndexAllowance = (object.staleIndexAllowance !== undefined && object.staleIndexAllowance !== null)
      ? Duration.fromPartial(object.staleIndexAllowance)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSetBackfillTimeIntervalEvent(): SetBackfillTimeIntervalEvent {
  return { backfillTimeInterval: undefined, type: "" };
}

export const SetBackfillTimeIntervalEvent = {
  encode(message: SetBackfillTimeIntervalEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backfillTimeInterval !== undefined) {
      Duration.encode(message.backfillTimeInterval, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetBackfillTimeIntervalEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetBackfillTimeIntervalEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backfillTimeInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetBackfillTimeIntervalEvent {
    return {
      backfillTimeInterval: isSet(object.backfillTimeInterval)
        ? Duration.fromJSON(object.backfillTimeInterval)
        : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetBackfillTimeIntervalEvent): unknown {
    const obj: any = {};
    message.backfillTimeInterval !== undefined && (obj.backfillTimeInterval = message.backfillTimeInterval
      ? Duration.toJSON(message.backfillTimeInterval)
      : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetBackfillTimeIntervalEvent>): SetBackfillTimeIntervalEvent {
    return SetBackfillTimeIntervalEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetBackfillTimeIntervalEvent>): SetBackfillTimeIntervalEvent {
    const message = createBaseSetBackfillTimeIntervalEvent();
    message.backfillTimeInterval = (object.backfillTimeInterval !== undefined && object.backfillTimeInterval !== null)
      ? Duration.fromPartial(object.backfillTimeInterval)
      : undefined;
    message.type = object.type ?? "";
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
