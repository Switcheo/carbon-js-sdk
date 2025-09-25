/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { StringValue, UInt32Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface Params {
  smoothenBand: number;
  impactBand: number;
  staleIndexAllowance?: Duration;
  backfillTimeInterval?: Duration;
  futurePricesAllowance?: Duration;
  volatilitySpec: string;
}

export interface ParamsToUpdate {
  smoothenBand?: number;
  impactBand?: number;
  staleIndexAllowance?: Duration;
  backfillTimeInterval?: Duration;
  futurePricesAllowance?: Duration;
  volatilitySpec?: string;
}

function createBaseParams(): Params {
  return {
    smoothenBand: 0,
    impactBand: 0,
    staleIndexAllowance: undefined,
    backfillTimeInterval: undefined,
    futurePricesAllowance: undefined,
    volatilitySpec: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.smoothenBand !== 0) {
      writer.uint32(8).uint32(message.smoothenBand);
    }
    if (message.impactBand !== 0) {
      writer.uint32(16).uint32(message.impactBand);
    }
    if (message.staleIndexAllowance !== undefined) {
      Duration.encode(message.staleIndexAllowance, writer.uint32(26).fork()).ldelim();
    }
    if (message.backfillTimeInterval !== undefined) {
      Duration.encode(message.backfillTimeInterval, writer.uint32(34).fork()).ldelim();
    }
    if (message.futurePricesAllowance !== undefined) {
      Duration.encode(message.futurePricesAllowance, writer.uint32(42).fork()).ldelim();
    }
    if (message.volatilitySpec !== "") {
      writer.uint32(50).string(message.volatilitySpec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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
          if (tag !== 16) {
            break;
          }

          message.impactBand = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.staleIndexAllowance = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.backfillTimeInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.futurePricesAllowance = Duration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.volatilitySpec = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      smoothenBand: isSet(object.smoothenBand) ? Number(object.smoothenBand) : 0,
      impactBand: isSet(object.impactBand) ? Number(object.impactBand) : 0,
      staleIndexAllowance: isSet(object.staleIndexAllowance)
        ? Duration.fromJSON(object.staleIndexAllowance)
        : undefined,
      backfillTimeInterval: isSet(object.backfillTimeInterval)
        ? Duration.fromJSON(object.backfillTimeInterval)
        : undefined,
      futurePricesAllowance: isSet(object.futurePricesAllowance)
        ? Duration.fromJSON(object.futurePricesAllowance)
        : undefined,
      volatilitySpec: isSet(object.volatilitySpec) ? String(object.volatilitySpec) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.smoothenBand !== undefined && (obj.smoothenBand = Math.round(message.smoothenBand));
    message.impactBand !== undefined && (obj.impactBand = Math.round(message.impactBand));
    message.staleIndexAllowance !== undefined &&
      (obj.staleIndexAllowance = message.staleIndexAllowance
        ? Duration.toJSON(message.staleIndexAllowance)
        : undefined);
    message.backfillTimeInterval !== undefined && (obj.backfillTimeInterval = message.backfillTimeInterval
      ? Duration.toJSON(message.backfillTimeInterval)
      : undefined);
    message.futurePricesAllowance !== undefined && (obj.futurePricesAllowance = message.futurePricesAllowance
      ? Duration.toJSON(message.futurePricesAllowance)
      : undefined);
    message.volatilitySpec !== undefined && (obj.volatilitySpec = message.volatilitySpec);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.smoothenBand = object.smoothenBand ?? 0;
    message.impactBand = object.impactBand ?? 0;
    message.staleIndexAllowance = (object.staleIndexAllowance !== undefined && object.staleIndexAllowance !== null)
      ? Duration.fromPartial(object.staleIndexAllowance)
      : undefined;
    message.backfillTimeInterval = (object.backfillTimeInterval !== undefined && object.backfillTimeInterval !== null)
      ? Duration.fromPartial(object.backfillTimeInterval)
      : undefined;
    message.futurePricesAllowance =
      (object.futurePricesAllowance !== undefined && object.futurePricesAllowance !== null)
        ? Duration.fromPartial(object.futurePricesAllowance)
        : undefined;
    message.volatilitySpec = object.volatilitySpec ?? "";
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return {
    smoothenBand: undefined,
    impactBand: undefined,
    staleIndexAllowance: undefined,
    backfillTimeInterval: undefined,
    futurePricesAllowance: undefined,
    volatilitySpec: undefined,
  };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.smoothenBand !== undefined) {
      UInt32Value.encode({ value: message.smoothenBand! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.impactBand !== undefined) {
      UInt32Value.encode({ value: message.impactBand! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.staleIndexAllowance !== undefined) {
      Duration.encode(message.staleIndexAllowance, writer.uint32(26).fork()).ldelim();
    }
    if (message.backfillTimeInterval !== undefined) {
      Duration.encode(message.backfillTimeInterval, writer.uint32(34).fork()).ldelim();
    }
    if (message.futurePricesAllowance !== undefined) {
      Duration.encode(message.futurePricesAllowance, writer.uint32(42).fork()).ldelim();
    }
    if (message.volatilitySpec !== undefined) {
      StringValue.encode({ value: message.volatilitySpec! }, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsToUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.smoothenBand = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.impactBand = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.staleIndexAllowance = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.backfillTimeInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.futurePricesAllowance = Duration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.volatilitySpec = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParamsToUpdate {
    return {
      smoothenBand: isSet(object.smoothenBand) ? Number(object.smoothenBand) : undefined,
      impactBand: isSet(object.impactBand) ? Number(object.impactBand) : undefined,
      staleIndexAllowance: isSet(object.staleIndexAllowance)
        ? Duration.fromJSON(object.staleIndexAllowance)
        : undefined,
      backfillTimeInterval: isSet(object.backfillTimeInterval)
        ? Duration.fromJSON(object.backfillTimeInterval)
        : undefined,
      futurePricesAllowance: isSet(object.futurePricesAllowance)
        ? Duration.fromJSON(object.futurePricesAllowance)
        : undefined,
      volatilitySpec: isSet(object.volatilitySpec) ? String(object.volatilitySpec) : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.smoothenBand !== undefined && (obj.smoothenBand = message.smoothenBand);
    message.impactBand !== undefined && (obj.impactBand = message.impactBand);
    message.staleIndexAllowance !== undefined &&
      (obj.staleIndexAllowance = message.staleIndexAllowance
        ? Duration.toJSON(message.staleIndexAllowance)
        : undefined);
    message.backfillTimeInterval !== undefined && (obj.backfillTimeInterval = message.backfillTimeInterval
      ? Duration.toJSON(message.backfillTimeInterval)
      : undefined);
    message.futurePricesAllowance !== undefined && (obj.futurePricesAllowance = message.futurePricesAllowance
      ? Duration.toJSON(message.futurePricesAllowance)
      : undefined);
    message.volatilitySpec !== undefined && (obj.volatilitySpec = message.volatilitySpec);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.smoothenBand = object.smoothenBand ?? undefined;
    message.impactBand = object.impactBand ?? undefined;
    message.staleIndexAllowance = (object.staleIndexAllowance !== undefined && object.staleIndexAllowance !== null)
      ? Duration.fromPartial(object.staleIndexAllowance)
      : undefined;
    message.backfillTimeInterval = (object.backfillTimeInterval !== undefined && object.backfillTimeInterval !== null)
      ? Duration.fromPartial(object.backfillTimeInterval)
      : undefined;
    message.futurePricesAllowance =
      (object.futurePricesAllowance !== undefined && object.futurePricesAllowance !== null)
        ? Duration.fromPartial(object.futurePricesAllowance)
        : undefined;
    message.volatilitySpec = object.volatilitySpec ?? undefined;
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
