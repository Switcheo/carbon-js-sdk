/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import {
  BoolValue,
  UInt32Value,
  UInt64Value,
} from "../../../google/protobuf/wrappers";

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

const baseParams: object = {
  oracleSlashEnabled: false,
  oracleSlashWindowBlock: 0,
  oracleSlashInitial: "",
  oracleSlashIncrement: "",
  oracleContinuousSlashMax: 0,
  newlyBondedWindowAllowance: 0,
  oracleMinVoteFactor: "",
  maxPowerToSlashFactor: "",
  evmOracleEnabled: false,
  historicalResultsPerBucket: Long.UZERO,
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Duration.encode(
        message.voteTimestampFutureAllowance,
        writer.uint32(58).fork()
      ).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleSlashEnabled = reader.bool();
          break;
        case 2:
          message.oracleSlashWindowBlock = reader.uint32();
          break;
        case 3:
          message.oracleSlashInitial = reader.string();
          break;
        case 4:
          message.oracleSlashIncrement = reader.string();
          break;
        case 5:
          message.oracleContinuousSlashMax = reader.uint32();
          break;
        case 6:
          message.newlyBondedWindowAllowance = reader.uint32();
          break;
        case 7:
          message.voteTimestampFutureAllowance = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.oracleMinVoteFactor = reader.string();
          break;
        case 9:
          message.maxPowerToSlashFactor = reader.string();
          break;
        case 10:
          message.evmOracleEnabled = reader.bool();
          break;
        case 11:
          message.historicalResultsPerBucket = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.oracleSlashEnabled =
      object.oracleSlashEnabled !== undefined &&
      object.oracleSlashEnabled !== null
        ? Boolean(object.oracleSlashEnabled)
        : false;
    message.oracleSlashWindowBlock =
      object.oracleSlashWindowBlock !== undefined &&
      object.oracleSlashWindowBlock !== null
        ? Number(object.oracleSlashWindowBlock)
        : 0;
    message.oracleSlashInitial =
      object.oracleSlashInitial !== undefined &&
      object.oracleSlashInitial !== null
        ? String(object.oracleSlashInitial)
        : "";
    message.oracleSlashIncrement =
      object.oracleSlashIncrement !== undefined &&
      object.oracleSlashIncrement !== null
        ? String(object.oracleSlashIncrement)
        : "";
    message.oracleContinuousSlashMax =
      object.oracleContinuousSlashMax !== undefined &&
      object.oracleContinuousSlashMax !== null
        ? Number(object.oracleContinuousSlashMax)
        : 0;
    message.newlyBondedWindowAllowance =
      object.newlyBondedWindowAllowance !== undefined &&
      object.newlyBondedWindowAllowance !== null
        ? Number(object.newlyBondedWindowAllowance)
        : 0;
    message.voteTimestampFutureAllowance =
      object.voteTimestampFutureAllowance !== undefined &&
      object.voteTimestampFutureAllowance !== null
        ? Duration.fromJSON(object.voteTimestampFutureAllowance)
        : undefined;
    message.oracleMinVoteFactor =
      object.oracleMinVoteFactor !== undefined &&
      object.oracleMinVoteFactor !== null
        ? String(object.oracleMinVoteFactor)
        : "";
    message.maxPowerToSlashFactor =
      object.maxPowerToSlashFactor !== undefined &&
      object.maxPowerToSlashFactor !== null
        ? String(object.maxPowerToSlashFactor)
        : "";
    message.evmOracleEnabled =
      object.evmOracleEnabled !== undefined && object.evmOracleEnabled !== null
        ? Boolean(object.evmOracleEnabled)
        : false;
    message.historicalResultsPerBucket =
      object.historicalResultsPerBucket !== undefined &&
      object.historicalResultsPerBucket !== null
        ? Long.fromString(object.historicalResultsPerBucket)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.oracleSlashEnabled !== undefined &&
      (obj.oracleSlashEnabled = message.oracleSlashEnabled);
    message.oracleSlashWindowBlock !== undefined &&
      (obj.oracleSlashWindowBlock = message.oracleSlashWindowBlock);
    message.oracleSlashInitial !== undefined &&
      (obj.oracleSlashInitial = message.oracleSlashInitial);
    message.oracleSlashIncrement !== undefined &&
      (obj.oracleSlashIncrement = message.oracleSlashIncrement);
    message.oracleContinuousSlashMax !== undefined &&
      (obj.oracleContinuousSlashMax = message.oracleContinuousSlashMax);
    message.newlyBondedWindowAllowance !== undefined &&
      (obj.newlyBondedWindowAllowance = message.newlyBondedWindowAllowance);
    message.voteTimestampFutureAllowance !== undefined &&
      (obj.voteTimestampFutureAllowance = message.voteTimestampFutureAllowance
        ? Duration.toJSON(message.voteTimestampFutureAllowance)
        : undefined);
    message.oracleMinVoteFactor !== undefined &&
      (obj.oracleMinVoteFactor = message.oracleMinVoteFactor);
    message.maxPowerToSlashFactor !== undefined &&
      (obj.maxPowerToSlashFactor = message.maxPowerToSlashFactor);
    message.evmOracleEnabled !== undefined &&
      (obj.evmOracleEnabled = message.evmOracleEnabled);
    message.historicalResultsPerBucket !== undefined &&
      (obj.historicalResultsPerBucket = (
        message.historicalResultsPerBucket || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.oracleSlashEnabled = object.oracleSlashEnabled ?? false;
    message.oracleSlashWindowBlock = object.oracleSlashWindowBlock ?? 0;
    message.oracleSlashInitial = object.oracleSlashInitial ?? "";
    message.oracleSlashIncrement = object.oracleSlashIncrement ?? "";
    message.oracleContinuousSlashMax = object.oracleContinuousSlashMax ?? 0;
    message.newlyBondedWindowAllowance = object.newlyBondedWindowAllowance ?? 0;
    message.voteTimestampFutureAllowance =
      object.voteTimestampFutureAllowance !== undefined &&
      object.voteTimestampFutureAllowance !== null
        ? Duration.fromPartial(object.voteTimestampFutureAllowance)
        : undefined;
    message.oracleMinVoteFactor = object.oracleMinVoteFactor ?? "";
    message.maxPowerToSlashFactor = object.maxPowerToSlashFactor ?? "";
    message.evmOracleEnabled = object.evmOracleEnabled ?? false;
    message.historicalResultsPerBucket =
      object.historicalResultsPerBucket !== undefined &&
      object.historicalResultsPerBucket !== null
        ? Long.fromValue(object.historicalResultsPerBucket)
        : Long.UZERO;
    return message;
  },
};

const baseParamsToUpdate: object = {
  oracleSlashInitial: "",
  oracleSlashIncrement: "",
  oracleMinVoteFactor: "",
  maxPowerToSlashFactor: "",
};

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleSlashEnabled !== undefined) {
      BoolValue.encode(
        { value: message.oracleSlashEnabled! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.oracleSlashWindowBlock !== undefined) {
      UInt32Value.encode(
        { value: message.oracleSlashWindowBlock! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.oracleSlashInitial !== "") {
      writer.uint32(26).string(message.oracleSlashInitial);
    }
    if (message.oracleSlashIncrement !== "") {
      writer.uint32(34).string(message.oracleSlashIncrement);
    }
    if (message.oracleContinuousSlashMax !== undefined) {
      UInt32Value.encode(
        { value: message.oracleContinuousSlashMax! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.newlyBondedWindowAllowance !== undefined) {
      UInt32Value.encode(
        { value: message.newlyBondedWindowAllowance! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.voteTimestampFutureAllowance !== undefined) {
      Duration.encode(
        message.voteTimestampFutureAllowance,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.oracleMinVoteFactor !== "") {
      writer.uint32(66).string(message.oracleMinVoteFactor);
    }
    if (message.maxPowerToSlashFactor !== "") {
      writer.uint32(74).string(message.maxPowerToSlashFactor);
    }
    if (message.evmOracleEnabled !== undefined) {
      BoolValue.encode(
        { value: message.evmOracleEnabled! },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.historicalResultsPerBucket !== undefined) {
      UInt64Value.encode(
        { value: message.historicalResultsPerBucket! },
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleSlashEnabled = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.oracleSlashWindowBlock = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.oracleSlashInitial = reader.string();
          break;
        case 4:
          message.oracleSlashIncrement = reader.string();
          break;
        case 5:
          message.oracleContinuousSlashMax = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.newlyBondedWindowAllowance = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.voteTimestampFutureAllowance = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.oracleMinVoteFactor = reader.string();
          break;
        case 9:
          message.maxPowerToSlashFactor = reader.string();
          break;
        case 10:
          message.evmOracleEnabled = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.historicalResultsPerBucket = UInt64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.oracleSlashEnabled =
      object.oracleSlashEnabled !== undefined &&
      object.oracleSlashEnabled !== null
        ? Boolean(object.oracleSlashEnabled)
        : undefined;
    message.oracleSlashWindowBlock =
      object.oracleSlashWindowBlock !== undefined &&
      object.oracleSlashWindowBlock !== null
        ? Number(object.oracleSlashWindowBlock)
        : undefined;
    message.oracleSlashInitial =
      object.oracleSlashInitial !== undefined &&
      object.oracleSlashInitial !== null
        ? String(object.oracleSlashInitial)
        : "";
    message.oracleSlashIncrement =
      object.oracleSlashIncrement !== undefined &&
      object.oracleSlashIncrement !== null
        ? String(object.oracleSlashIncrement)
        : "";
    message.oracleContinuousSlashMax =
      object.oracleContinuousSlashMax !== undefined &&
      object.oracleContinuousSlashMax !== null
        ? Number(object.oracleContinuousSlashMax)
        : undefined;
    message.newlyBondedWindowAllowance =
      object.newlyBondedWindowAllowance !== undefined &&
      object.newlyBondedWindowAllowance !== null
        ? Number(object.newlyBondedWindowAllowance)
        : undefined;
    message.voteTimestampFutureAllowance =
      object.voteTimestampFutureAllowance !== undefined &&
      object.voteTimestampFutureAllowance !== null
        ? Duration.fromJSON(object.voteTimestampFutureAllowance)
        : undefined;
    message.oracleMinVoteFactor =
      object.oracleMinVoteFactor !== undefined &&
      object.oracleMinVoteFactor !== null
        ? String(object.oracleMinVoteFactor)
        : "";
    message.maxPowerToSlashFactor =
      object.maxPowerToSlashFactor !== undefined &&
      object.maxPowerToSlashFactor !== null
        ? String(object.maxPowerToSlashFactor)
        : "";
    message.evmOracleEnabled =
      object.evmOracleEnabled !== undefined && object.evmOracleEnabled !== null
        ? Boolean(object.evmOracleEnabled)
        : undefined;
    message.historicalResultsPerBucket =
      object.historicalResultsPerBucket !== undefined &&
      object.historicalResultsPerBucket !== null
        ? Long.fromValue(object.historicalResultsPerBucket)
        : undefined;
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.oracleSlashEnabled !== undefined &&
      (obj.oracleSlashEnabled = message.oracleSlashEnabled);
    message.oracleSlashWindowBlock !== undefined &&
      (obj.oracleSlashWindowBlock = message.oracleSlashWindowBlock);
    message.oracleSlashInitial !== undefined &&
      (obj.oracleSlashInitial = message.oracleSlashInitial);
    message.oracleSlashIncrement !== undefined &&
      (obj.oracleSlashIncrement = message.oracleSlashIncrement);
    message.oracleContinuousSlashMax !== undefined &&
      (obj.oracleContinuousSlashMax = message.oracleContinuousSlashMax);
    message.newlyBondedWindowAllowance !== undefined &&
      (obj.newlyBondedWindowAllowance = message.newlyBondedWindowAllowance);
    message.voteTimestampFutureAllowance !== undefined &&
      (obj.voteTimestampFutureAllowance = message.voteTimestampFutureAllowance
        ? Duration.toJSON(message.voteTimestampFutureAllowance)
        : undefined);
    message.oracleMinVoteFactor !== undefined &&
      (obj.oracleMinVoteFactor = message.oracleMinVoteFactor);
    message.maxPowerToSlashFactor !== undefined &&
      (obj.maxPowerToSlashFactor = message.maxPowerToSlashFactor);
    message.evmOracleEnabled !== undefined &&
      (obj.evmOracleEnabled = message.evmOracleEnabled);
    message.historicalResultsPerBucket !== undefined &&
      (obj.historicalResultsPerBucket = message.historicalResultsPerBucket);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.oracleSlashEnabled = object.oracleSlashEnabled ?? undefined;
    message.oracleSlashWindowBlock = object.oracleSlashWindowBlock ?? undefined;
    message.oracleSlashInitial = object.oracleSlashInitial ?? "";
    message.oracleSlashIncrement = object.oracleSlashIncrement ?? "";
    message.oracleContinuousSlashMax =
      object.oracleContinuousSlashMax ?? undefined;
    message.newlyBondedWindowAllowance =
      object.newlyBondedWindowAllowance ?? undefined;
    message.voteTimestampFutureAllowance =
      object.voteTimestampFutureAllowance !== undefined &&
      object.voteTimestampFutureAllowance !== null
        ? Duration.fromPartial(object.voteTimestampFutureAllowance)
        : undefined;
    message.oracleMinVoteFactor = object.oracleMinVoteFactor ?? "";
    message.maxPowerToSlashFactor = object.maxPowerToSlashFactor ?? "";
    message.evmOracleEnabled = object.evmOracleEnabled ?? undefined;
    message.historicalResultsPerBucket =
      object.historicalResultsPerBucket !== undefined &&
      object.historicalResultsPerBucket !== null
        ? Long.fromValue(object.historicalResultsPerBucket)
        : undefined;
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
