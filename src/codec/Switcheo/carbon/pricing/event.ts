/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PriceSet, TokenPrice } from "./pricing";
import { Duration } from "../../../google/protobuf/duration";

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

const basePriceUpdateEvent: object = {};

export const PriceUpdateEvent = {
  encode(
    message: PriceUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prices !== undefined) {
      PriceSet.encode(message.prices, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePriceUpdateEvent } as PriceUpdateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices = PriceSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceUpdateEvent {
    const message = { ...basePriceUpdateEvent } as PriceUpdateEvent;
    message.prices =
      object.prices !== undefined && object.prices !== null
        ? PriceSet.fromJSON(object.prices)
        : undefined;
    return message;
  },

  toJSON(message: PriceUpdateEvent): unknown {
    const obj: any = {};
    message.prices !== undefined &&
      (obj.prices = message.prices
        ? PriceSet.toJSON(message.prices)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PriceUpdateEvent>): PriceUpdateEvent {
    const message = { ...basePriceUpdateEvent } as PriceUpdateEvent;
    message.prices =
      object.prices !== undefined && object.prices !== null
        ? PriceSet.fromPartial(object.prices)
        : undefined;
    return message;
  },
};

const baseTokenPriceUpdateEvent: object = {};

export const TokenPriceUpdateEvent = {
  encode(
    message: TokenPriceUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.price !== undefined) {
      TokenPrice.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TokenPriceUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenPriceUpdateEvent } as TokenPriceUpdateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenPriceUpdateEvent {
    const message = { ...baseTokenPriceUpdateEvent } as TokenPriceUpdateEvent;
    message.price =
      object.price !== undefined && object.price !== null
        ? TokenPrice.fromJSON(object.price)
        : undefined;
    return message;
  },

  toJSON(message: TokenPriceUpdateEvent): unknown {
    const obj: any = {};
    message.price !== undefined &&
      (obj.price = message.price
        ? TokenPrice.toJSON(message.price)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TokenPriceUpdateEvent>
  ): TokenPriceUpdateEvent {
    const message = { ...baseTokenPriceUpdateEvent } as TokenPriceUpdateEvent;
    message.price =
      object.price !== undefined && object.price !== null
        ? TokenPrice.fromPartial(object.price)
        : undefined;
    return message;
  },
};

const baseTokenPriceRemoveEvent: object = {};

export const TokenPriceRemoveEvent = {
  encode(
    message: TokenPriceRemoveEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.price !== undefined) {
      TokenPrice.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TokenPriceRemoveEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenPriceRemoveEvent } as TokenPriceRemoveEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenPriceRemoveEvent {
    const message = { ...baseTokenPriceRemoveEvent } as TokenPriceRemoveEvent;
    message.price =
      object.price !== undefined && object.price !== null
        ? TokenPrice.fromJSON(object.price)
        : undefined;
    return message;
  },

  toJSON(message: TokenPriceRemoveEvent): unknown {
    const obj: any = {};
    message.price !== undefined &&
      (obj.price = message.price
        ? TokenPrice.toJSON(message.price)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TokenPriceRemoveEvent>
  ): TokenPriceRemoveEvent {
    const message = { ...baseTokenPriceRemoveEvent } as TokenPriceRemoveEvent;
    message.price =
      object.price !== undefined && object.price !== null
        ? TokenPrice.fromPartial(object.price)
        : undefined;
    return message;
  },
};

const baseSetImpactBandEvent: object = { impactBand: 0, type: "" };

export const SetImpactBandEvent = {
  encode(
    message: SetImpactBandEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.impactBand !== 0) {
      writer.uint32(8).uint32(message.impactBand);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetImpactBandEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetImpactBandEvent } as SetImpactBandEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.impactBand = reader.uint32();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetImpactBandEvent {
    const message = { ...baseSetImpactBandEvent } as SetImpactBandEvent;
    message.impactBand =
      object.impactBand !== undefined && object.impactBand !== null
        ? Number(object.impactBand)
        : 0;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetImpactBandEvent): unknown {
    const obj: any = {};
    message.impactBand !== undefined && (obj.impactBand = message.impactBand);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<SetImpactBandEvent>): SetImpactBandEvent {
    const message = { ...baseSetImpactBandEvent } as SetImpactBandEvent;
    message.impactBand = object.impactBand ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

const baseSetSmoothenBandEvent: object = { smoothenBand: 0, type: "" };

export const SetSmoothenBandEvent = {
  encode(
    message: SetSmoothenBandEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.smoothenBand !== 0) {
      writer.uint32(8).uint32(message.smoothenBand);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetSmoothenBandEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetSmoothenBandEvent } as SetSmoothenBandEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.smoothenBand = reader.uint32();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetSmoothenBandEvent {
    const message = { ...baseSetSmoothenBandEvent } as SetSmoothenBandEvent;
    message.smoothenBand =
      object.smoothenBand !== undefined && object.smoothenBand !== null
        ? Number(object.smoothenBand)
        : 0;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetSmoothenBandEvent): unknown {
    const obj: any = {};
    message.smoothenBand !== undefined &&
      (obj.smoothenBand = message.smoothenBand);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<SetSmoothenBandEvent>): SetSmoothenBandEvent {
    const message = { ...baseSetSmoothenBandEvent } as SetSmoothenBandEvent;
    message.smoothenBand = object.smoothenBand ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

const baseSetStaleIndexAllowanceEvent: object = { type: "" };

export const SetStaleIndexAllowanceEvent = {
  encode(
    message: SetStaleIndexAllowanceEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.staleIndexAllowance !== undefined) {
      Duration.encode(
        message.staleIndexAllowance,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetStaleIndexAllowanceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetStaleIndexAllowanceEvent,
    } as SetStaleIndexAllowanceEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staleIndexAllowance = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetStaleIndexAllowanceEvent {
    const message = {
      ...baseSetStaleIndexAllowanceEvent,
    } as SetStaleIndexAllowanceEvent;
    message.staleIndexAllowance =
      object.staleIndexAllowance !== undefined &&
      object.staleIndexAllowance !== null
        ? Duration.fromJSON(object.staleIndexAllowance)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
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

  fromPartial(
    object: DeepPartial<SetStaleIndexAllowanceEvent>
  ): SetStaleIndexAllowanceEvent {
    const message = {
      ...baseSetStaleIndexAllowanceEvent,
    } as SetStaleIndexAllowanceEvent;
    message.staleIndexAllowance =
      object.staleIndexAllowance !== undefined &&
      object.staleIndexAllowance !== null
        ? Duration.fromPartial(object.staleIndexAllowance)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseSetBackfillTimeIntervalEvent: object = { type: "" };

export const SetBackfillTimeIntervalEvent = {
  encode(
    message: SetBackfillTimeIntervalEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backfillTimeInterval !== undefined) {
      Duration.encode(
        message.backfillTimeInterval,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetBackfillTimeIntervalEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetBackfillTimeIntervalEvent,
    } as SetBackfillTimeIntervalEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backfillTimeInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetBackfillTimeIntervalEvent {
    const message = {
      ...baseSetBackfillTimeIntervalEvent,
    } as SetBackfillTimeIntervalEvent;
    message.backfillTimeInterval =
      object.backfillTimeInterval !== undefined &&
      object.backfillTimeInterval !== null
        ? Duration.fromJSON(object.backfillTimeInterval)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetBackfillTimeIntervalEvent): unknown {
    const obj: any = {};
    message.backfillTimeInterval !== undefined &&
      (obj.backfillTimeInterval = message.backfillTimeInterval
        ? Duration.toJSON(message.backfillTimeInterval)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetBackfillTimeIntervalEvent>
  ): SetBackfillTimeIntervalEvent {
    const message = {
      ...baseSetBackfillTimeIntervalEvent,
    } as SetBackfillTimeIntervalEvent;
    message.backfillTimeInterval =
      object.backfillTimeInterval !== undefined &&
      object.backfillTimeInterval !== null
        ? Duration.fromPartial(object.backfillTimeInterval)
        : undefined;
    message.type = object.type ?? "";
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
