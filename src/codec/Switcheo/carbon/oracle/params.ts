/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { BoolValue, UInt32Value, UInt64Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.oracle";

export interface Params {
  oracleSlashEnabled: boolean;
  oracleSlashWindowBlock: number;
  oracleSlashInitial: string;
  oracleSlashIncrement: string;
  oracleContinuousSlashMax: number;
  newlyBondedWindowAllowance: number;
  voteTimestampFutureAllowance?: Duration;
  oracleMinVoteFactor: string;
  maxPowerToSlashFactor: string;
  evmOracleEnabled: boolean;
  historicalResultsPerBucket: Long;
}

export interface ParamsToUpdate {
  oracleSlashEnabled?: boolean;
  oracleSlashWindowBlock?: number;
  oracleSlashInitial: string;
  oracleSlashIncrement: string;
  oracleContinuousSlashMax?: number;
  newlyBondedWindowAllowance?: number;
  voteTimestampFutureAllowance?: Duration;
  oracleMinVoteFactor: string;
  maxPowerToSlashFactor: string;
  evmOracleEnabled?: boolean;
  historicalResultsPerBucket?: Long;
}

function createBaseParams(): Params {
  return {
    oracleSlashEnabled: false,
    oracleSlashWindowBlock: 0,
    oracleSlashInitial: "",
    oracleSlashIncrement: "",
    oracleContinuousSlashMax: 0,
    newlyBondedWindowAllowance: 0,
    voteTimestampFutureAllowance: undefined,
    oracleMinVoteFactor: "",
    maxPowerToSlashFactor: "",
    evmOracleEnabled: false,
    historicalResultsPerBucket: Long.UZERO,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleSlashEnabled === true) {
      writer.uint32(8).bool(message.oracleSlashEnabled);
    }
    if (message.oracleSlashWindowBlock !== 0) {
      writer.uint32(16).uint32(message.oracleSlashWindowBlock);
    }
    if (message.oracleSlashInitial !== "") {
      writer.uint32(26).string(message.oracleSlashInitial);
    }
    if (message.oracleSlashIncrement !== "") {
      writer.uint32(34).string(message.oracleSlashIncrement);
    }
    if (message.oracleContinuousSlashMax !== 0) {
      writer.uint32(40).uint32(message.oracleContinuousSlashMax);
    }
    if (message.newlyBondedWindowAllowance !== 0) {
      writer.uint32(48).uint32(message.newlyBondedWindowAllowance);
    }
    if (message.voteTimestampFutureAllowance !== undefined) {
      Duration.encode(message.voteTimestampFutureAllowance, writer.uint32(58).fork()).ldelim();
    }
    if (message.oracleMinVoteFactor !== "") {
      writer.uint32(66).string(message.oracleMinVoteFactor);
    }
    if (message.maxPowerToSlashFactor !== "") {
      writer.uint32(74).string(message.maxPowerToSlashFactor);
    }
    if (message.evmOracleEnabled === true) {
      writer.uint32(80).bool(message.evmOracleEnabled);
    }
    if (!message.historicalResultsPerBucket.isZero()) {
      writer.uint32(88).uint64(message.historicalResultsPerBucket);
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

          message.oracleSlashEnabled = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.oracleSlashWindowBlock = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.oracleSlashInitial = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.oracleSlashIncrement = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.oracleContinuousSlashMax = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.newlyBondedWindowAllowance = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.voteTimestampFutureAllowance = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.oracleMinVoteFactor = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.maxPowerToSlashFactor = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.evmOracleEnabled = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.historicalResultsPerBucket = reader.uint64() as Long;
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
      oracleSlashEnabled: isSet(object.oracleSlashEnabled) ? Boolean(object.oracleSlashEnabled) : false,
      oracleSlashWindowBlock: isSet(object.oracleSlashWindowBlock) ? Number(object.oracleSlashWindowBlock) : 0,
      oracleSlashInitial: isSet(object.oracleSlashInitial) ? String(object.oracleSlashInitial) : "",
      oracleSlashIncrement: isSet(object.oracleSlashIncrement) ? String(object.oracleSlashIncrement) : "",
      oracleContinuousSlashMax: isSet(object.oracleContinuousSlashMax) ? Number(object.oracleContinuousSlashMax) : 0,
      newlyBondedWindowAllowance: isSet(object.newlyBondedWindowAllowance)
        ? Number(object.newlyBondedWindowAllowance)
        : 0,
      voteTimestampFutureAllowance: isSet(object.voteTimestampFutureAllowance)
        ? Duration.fromJSON(object.voteTimestampFutureAllowance)
        : undefined,
      oracleMinVoteFactor: isSet(object.oracleMinVoteFactor) ? String(object.oracleMinVoteFactor) : "",
      maxPowerToSlashFactor: isSet(object.maxPowerToSlashFactor) ? String(object.maxPowerToSlashFactor) : "",
      evmOracleEnabled: isSet(object.evmOracleEnabled) ? Boolean(object.evmOracleEnabled) : false,
      historicalResultsPerBucket: isSet(object.historicalResultsPerBucket)
        ? Long.fromValue(object.historicalResultsPerBucket)
        : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.oracleSlashEnabled !== undefined && (obj.oracleSlashEnabled = message.oracleSlashEnabled);
    message.oracleSlashWindowBlock !== undefined &&
      (obj.oracleSlashWindowBlock = Math.round(message.oracleSlashWindowBlock));
    message.oracleSlashInitial !== undefined && (obj.oracleSlashInitial = message.oracleSlashInitial);
    message.oracleSlashIncrement !== undefined && (obj.oracleSlashIncrement = message.oracleSlashIncrement);
    message.oracleContinuousSlashMax !== undefined &&
      (obj.oracleContinuousSlashMax = Math.round(message.oracleContinuousSlashMax));
    message.newlyBondedWindowAllowance !== undefined &&
      (obj.newlyBondedWindowAllowance = Math.round(message.newlyBondedWindowAllowance));
    message.voteTimestampFutureAllowance !== undefined &&
      (obj.voteTimestampFutureAllowance = message.voteTimestampFutureAllowance
        ? Duration.toJSON(message.voteTimestampFutureAllowance)
        : undefined);
    message.oracleMinVoteFactor !== undefined && (obj.oracleMinVoteFactor = message.oracleMinVoteFactor);
    message.maxPowerToSlashFactor !== undefined && (obj.maxPowerToSlashFactor = message.maxPowerToSlashFactor);
    message.evmOracleEnabled !== undefined && (obj.evmOracleEnabled = message.evmOracleEnabled);
    message.historicalResultsPerBucket !== undefined &&
      (obj.historicalResultsPerBucket = (message.historicalResultsPerBucket || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.oracleSlashEnabled = object.oracleSlashEnabled ?? false;
    message.oracleSlashWindowBlock = object.oracleSlashWindowBlock ?? 0;
    message.oracleSlashInitial = object.oracleSlashInitial ?? "";
    message.oracleSlashIncrement = object.oracleSlashIncrement ?? "";
    message.oracleContinuousSlashMax = object.oracleContinuousSlashMax ?? 0;
    message.newlyBondedWindowAllowance = object.newlyBondedWindowAllowance ?? 0;
    message.voteTimestampFutureAllowance =
      (object.voteTimestampFutureAllowance !== undefined && object.voteTimestampFutureAllowance !== null)
        ? Duration.fromPartial(object.voteTimestampFutureAllowance)
        : undefined;
    message.oracleMinVoteFactor = object.oracleMinVoteFactor ?? "";
    message.maxPowerToSlashFactor = object.maxPowerToSlashFactor ?? "";
    message.evmOracleEnabled = object.evmOracleEnabled ?? false;
    message.historicalResultsPerBucket =
      (object.historicalResultsPerBucket !== undefined && object.historicalResultsPerBucket !== null)
        ? Long.fromValue(object.historicalResultsPerBucket)
        : Long.UZERO;
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return {
    oracleSlashEnabled: undefined,
    oracleSlashWindowBlock: undefined,
    oracleSlashInitial: "",
    oracleSlashIncrement: "",
    oracleContinuousSlashMax: undefined,
    newlyBondedWindowAllowance: undefined,
    voteTimestampFutureAllowance: undefined,
    oracleMinVoteFactor: "",
    maxPowerToSlashFactor: "",
    evmOracleEnabled: undefined,
    historicalResultsPerBucket: undefined,
  };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleSlashEnabled !== undefined) {
      BoolValue.encode({ value: message.oracleSlashEnabled! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.oracleSlashWindowBlock !== undefined) {
      UInt32Value.encode({ value: message.oracleSlashWindowBlock! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.oracleSlashInitial !== "") {
      writer.uint32(26).string(message.oracleSlashInitial);
    }
    if (message.oracleSlashIncrement !== "") {
      writer.uint32(34).string(message.oracleSlashIncrement);
    }
    if (message.oracleContinuousSlashMax !== undefined) {
      UInt32Value.encode({ value: message.oracleContinuousSlashMax! }, writer.uint32(42).fork()).ldelim();
    }
    if (message.newlyBondedWindowAllowance !== undefined) {
      UInt32Value.encode({ value: message.newlyBondedWindowAllowance! }, writer.uint32(50).fork()).ldelim();
    }
    if (message.voteTimestampFutureAllowance !== undefined) {
      Duration.encode(message.voteTimestampFutureAllowance, writer.uint32(58).fork()).ldelim();
    }
    if (message.oracleMinVoteFactor !== "") {
      writer.uint32(66).string(message.oracleMinVoteFactor);
    }
    if (message.maxPowerToSlashFactor !== "") {
      writer.uint32(74).string(message.maxPowerToSlashFactor);
    }
    if (message.evmOracleEnabled !== undefined) {
      BoolValue.encode({ value: message.evmOracleEnabled! }, writer.uint32(82).fork()).ldelim();
    }
    if (message.historicalResultsPerBucket !== undefined) {
      UInt64Value.encode({ value: message.historicalResultsPerBucket! }, writer.uint32(90).fork()).ldelim();
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

          message.oracleSlashEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.oracleSlashWindowBlock = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.oracleSlashInitial = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.oracleSlashIncrement = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.oracleContinuousSlashMax = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.newlyBondedWindowAllowance = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.voteTimestampFutureAllowance = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.oracleMinVoteFactor = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.maxPowerToSlashFactor = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.evmOracleEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.historicalResultsPerBucket = UInt64Value.decode(reader, reader.uint32()).value;
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
      oracleSlashEnabled: isSet(object.oracleSlashEnabled) ? Boolean(object.oracleSlashEnabled) : undefined,
      oracleSlashWindowBlock: isSet(object.oracleSlashWindowBlock) ? Number(object.oracleSlashWindowBlock) : undefined,
      oracleSlashInitial: isSet(object.oracleSlashInitial) ? String(object.oracleSlashInitial) : "",
      oracleSlashIncrement: isSet(object.oracleSlashIncrement) ? String(object.oracleSlashIncrement) : "",
      oracleContinuousSlashMax: isSet(object.oracleContinuousSlashMax)
        ? Number(object.oracleContinuousSlashMax)
        : undefined,
      newlyBondedWindowAllowance: isSet(object.newlyBondedWindowAllowance)
        ? Number(object.newlyBondedWindowAllowance)
        : undefined,
      voteTimestampFutureAllowance: isSet(object.voteTimestampFutureAllowance)
        ? Duration.fromJSON(object.voteTimestampFutureAllowance)
        : undefined,
      oracleMinVoteFactor: isSet(object.oracleMinVoteFactor) ? String(object.oracleMinVoteFactor) : "",
      maxPowerToSlashFactor: isSet(object.maxPowerToSlashFactor) ? String(object.maxPowerToSlashFactor) : "",
      evmOracleEnabled: isSet(object.evmOracleEnabled) ? Boolean(object.evmOracleEnabled) : undefined,
      historicalResultsPerBucket: isSet(object.historicalResultsPerBucket)
        ? Long.fromValue(object.historicalResultsPerBucket)
        : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.oracleSlashEnabled !== undefined && (obj.oracleSlashEnabled = message.oracleSlashEnabled);
    message.oracleSlashWindowBlock !== undefined && (obj.oracleSlashWindowBlock = message.oracleSlashWindowBlock);
    message.oracleSlashInitial !== undefined && (obj.oracleSlashInitial = message.oracleSlashInitial);
    message.oracleSlashIncrement !== undefined && (obj.oracleSlashIncrement = message.oracleSlashIncrement);
    message.oracleContinuousSlashMax !== undefined && (obj.oracleContinuousSlashMax = message.oracleContinuousSlashMax);
    message.newlyBondedWindowAllowance !== undefined &&
      (obj.newlyBondedWindowAllowance = message.newlyBondedWindowAllowance);
    message.voteTimestampFutureAllowance !== undefined &&
      (obj.voteTimestampFutureAllowance = message.voteTimestampFutureAllowance
        ? Duration.toJSON(message.voteTimestampFutureAllowance)
        : undefined);
    message.oracleMinVoteFactor !== undefined && (obj.oracleMinVoteFactor = message.oracleMinVoteFactor);
    message.maxPowerToSlashFactor !== undefined && (obj.maxPowerToSlashFactor = message.maxPowerToSlashFactor);
    message.evmOracleEnabled !== undefined && (obj.evmOracleEnabled = message.evmOracleEnabled);
    message.historicalResultsPerBucket !== undefined &&
      (obj.historicalResultsPerBucket = message.historicalResultsPerBucket);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.oracleSlashEnabled = object.oracleSlashEnabled ?? undefined;
    message.oracleSlashWindowBlock = object.oracleSlashWindowBlock ?? undefined;
    message.oracleSlashInitial = object.oracleSlashInitial ?? "";
    message.oracleSlashIncrement = object.oracleSlashIncrement ?? "";
    message.oracleContinuousSlashMax = object.oracleContinuousSlashMax ?? undefined;
    message.newlyBondedWindowAllowance = object.newlyBondedWindowAllowance ?? undefined;
    message.voteTimestampFutureAllowance =
      (object.voteTimestampFutureAllowance !== undefined && object.voteTimestampFutureAllowance !== null)
        ? Duration.fromPartial(object.voteTimestampFutureAllowance)
        : undefined;
    message.oracleMinVoteFactor = object.oracleMinVoteFactor ?? "";
    message.maxPowerToSlashFactor = object.maxPowerToSlashFactor ?? "";
    message.evmOracleEnabled = object.evmOracleEnabled ?? undefined;
    message.historicalResultsPerBucket =
      (object.historicalResultsPerBucket !== undefined && object.historicalResultsPerBucket !== null)
        ? Long.fromValue(object.historicalResultsPerBucket)
        : undefined;
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
