/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BoolValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.broker";

/** Params defines the parameters for the broker module. */
export interface Params {
  futuresInvariantBufferBps: string;
  shouldSystemLiquidate: boolean;
  maxLiquidationOrderCounterpartyDeltaBps: string;
  maxBadDebtThresholdUsd: string;
  acceptedBadDebtAssets: string[];
  isTradingPaused: boolean;
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  futuresInvariantBufferBps: string;
  shouldSystemLiquidate?: boolean;
  maxLiquidationOrderCounterpartyDeltaBps: string;
  maxBadDebtThresholdUsd: string;
  acceptedBadDebtAssets: string[];
  isTradingPaused?: boolean;
}

function createBaseParams(): Params {
  return {
    futuresInvariantBufferBps: "",
    shouldSystemLiquidate: false,
    maxLiquidationOrderCounterpartyDeltaBps: "",
    maxBadDebtThresholdUsd: "",
    acceptedBadDebtAssets: [],
    isTradingPaused: false,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.futuresInvariantBufferBps !== "") {
      writer.uint32(10).string(message.futuresInvariantBufferBps);
    }
    if (message.shouldSystemLiquidate === true) {
      writer.uint32(16).bool(message.shouldSystemLiquidate);
    }
    if (message.maxLiquidationOrderCounterpartyDeltaBps !== "") {
      writer.uint32(26).string(message.maxLiquidationOrderCounterpartyDeltaBps);
    }
    if (message.maxBadDebtThresholdUsd !== "") {
      writer.uint32(34).string(message.maxBadDebtThresholdUsd);
    }
    for (const v of message.acceptedBadDebtAssets) {
      writer.uint32(42).string(v!);
    }
    if (message.isTradingPaused === true) {
      writer.uint32(48).bool(message.isTradingPaused);
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
          if (tag !== 10) {
            break;
          }

          message.futuresInvariantBufferBps = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.shouldSystemLiquidate = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxLiquidationOrderCounterpartyDeltaBps = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxBadDebtThresholdUsd = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.acceptedBadDebtAssets.push(reader.string());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isTradingPaused = reader.bool();
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
      futuresInvariantBufferBps: isSet(object.futuresInvariantBufferBps)
        ? String(object.futuresInvariantBufferBps)
        : "",
      shouldSystemLiquidate: isSet(object.shouldSystemLiquidate) ? Boolean(object.shouldSystemLiquidate) : false,
      maxLiquidationOrderCounterpartyDeltaBps: isSet(object.maxLiquidationOrderCounterpartyDeltaBps)
        ? String(object.maxLiquidationOrderCounterpartyDeltaBps)
        : "",
      maxBadDebtThresholdUsd: isSet(object.maxBadDebtThresholdUsd) ? String(object.maxBadDebtThresholdUsd) : "",
      acceptedBadDebtAssets: Array.isArray(object?.acceptedBadDebtAssets)
        ? object.acceptedBadDebtAssets.map((e: any) => String(e))
        : [],
      isTradingPaused: isSet(object.isTradingPaused) ? Boolean(object.isTradingPaused) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.futuresInvariantBufferBps !== undefined &&
      (obj.futuresInvariantBufferBps = message.futuresInvariantBufferBps);
    message.shouldSystemLiquidate !== undefined && (obj.shouldSystemLiquidate = message.shouldSystemLiquidate);
    message.maxLiquidationOrderCounterpartyDeltaBps !== undefined &&
      (obj.maxLiquidationOrderCounterpartyDeltaBps = message.maxLiquidationOrderCounterpartyDeltaBps);
    message.maxBadDebtThresholdUsd !== undefined && (obj.maxBadDebtThresholdUsd = message.maxBadDebtThresholdUsd);
    if (message.acceptedBadDebtAssets) {
      obj.acceptedBadDebtAssets = message.acceptedBadDebtAssets.map((e) => e);
    } else {
      obj.acceptedBadDebtAssets = [];
    }
    message.isTradingPaused !== undefined && (obj.isTradingPaused = message.isTradingPaused);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.futuresInvariantBufferBps = object.futuresInvariantBufferBps ?? "";
    message.shouldSystemLiquidate = object.shouldSystemLiquidate ?? false;
    message.maxLiquidationOrderCounterpartyDeltaBps = object.maxLiquidationOrderCounterpartyDeltaBps ?? "";
    message.maxBadDebtThresholdUsd = object.maxBadDebtThresholdUsd ?? "";
    message.acceptedBadDebtAssets = object.acceptedBadDebtAssets?.map((e) => e) || [];
    message.isTradingPaused = object.isTradingPaused ?? false;
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return {
    futuresInvariantBufferBps: "",
    shouldSystemLiquidate: undefined,
    maxLiquidationOrderCounterpartyDeltaBps: "",
    maxBadDebtThresholdUsd: "",
    acceptedBadDebtAssets: [],
    isTradingPaused: undefined,
  };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.futuresInvariantBufferBps !== "") {
      writer.uint32(10).string(message.futuresInvariantBufferBps);
    }
    if (message.shouldSystemLiquidate !== undefined) {
      BoolValue.encode({ value: message.shouldSystemLiquidate! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxLiquidationOrderCounterpartyDeltaBps !== "") {
      writer.uint32(26).string(message.maxLiquidationOrderCounterpartyDeltaBps);
    }
    if (message.maxBadDebtThresholdUsd !== "") {
      writer.uint32(34).string(message.maxBadDebtThresholdUsd);
    }
    for (const v of message.acceptedBadDebtAssets) {
      writer.uint32(42).string(v!);
    }
    if (message.isTradingPaused !== undefined) {
      BoolValue.encode({ value: message.isTradingPaused! }, writer.uint32(50).fork()).ldelim();
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

          message.futuresInvariantBufferBps = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.shouldSystemLiquidate = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maxLiquidationOrderCounterpartyDeltaBps = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxBadDebtThresholdUsd = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.acceptedBadDebtAssets.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.isTradingPaused = BoolValue.decode(reader, reader.uint32()).value;
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
      futuresInvariantBufferBps: isSet(object.futuresInvariantBufferBps)
        ? String(object.futuresInvariantBufferBps)
        : "",
      shouldSystemLiquidate: isSet(object.shouldSystemLiquidate) ? Boolean(object.shouldSystemLiquidate) : undefined,
      maxLiquidationOrderCounterpartyDeltaBps: isSet(object.maxLiquidationOrderCounterpartyDeltaBps)
        ? String(object.maxLiquidationOrderCounterpartyDeltaBps)
        : "",
      maxBadDebtThresholdUsd: isSet(object.maxBadDebtThresholdUsd) ? String(object.maxBadDebtThresholdUsd) : "",
      acceptedBadDebtAssets: Array.isArray(object?.acceptedBadDebtAssets)
        ? object.acceptedBadDebtAssets.map((e: any) => String(e))
        : [],
      isTradingPaused: isSet(object.isTradingPaused) ? Boolean(object.isTradingPaused) : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.futuresInvariantBufferBps !== undefined &&
      (obj.futuresInvariantBufferBps = message.futuresInvariantBufferBps);
    message.shouldSystemLiquidate !== undefined && (obj.shouldSystemLiquidate = message.shouldSystemLiquidate);
    message.maxLiquidationOrderCounterpartyDeltaBps !== undefined &&
      (obj.maxLiquidationOrderCounterpartyDeltaBps = message.maxLiquidationOrderCounterpartyDeltaBps);
    message.maxBadDebtThresholdUsd !== undefined && (obj.maxBadDebtThresholdUsd = message.maxBadDebtThresholdUsd);
    if (message.acceptedBadDebtAssets) {
      obj.acceptedBadDebtAssets = message.acceptedBadDebtAssets.map((e) => e);
    } else {
      obj.acceptedBadDebtAssets = [];
    }
    message.isTradingPaused !== undefined && (obj.isTradingPaused = message.isTradingPaused);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.futuresInvariantBufferBps = object.futuresInvariantBufferBps ?? "";
    message.shouldSystemLiquidate = object.shouldSystemLiquidate ?? undefined;
    message.maxLiquidationOrderCounterpartyDeltaBps = object.maxLiquidationOrderCounterpartyDeltaBps ?? "";
    message.maxBadDebtThresholdUsd = object.maxBadDebtThresholdUsd ?? "";
    message.acceptedBadDebtAssets = object.acceptedBadDebtAssets?.map((e) => e) || [];
    message.isTradingPaused = object.isTradingPaused ?? undefined;
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
