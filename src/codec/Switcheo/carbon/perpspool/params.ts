/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { UInt64Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.perpspool";

/** Params defines the parameters for the module. */
export interface Params {
  /** requotes when index price fluctuation threshold exceeded (in ratio) */
  quoteIndexPriceFluctuationToleranceRatio: string;
  /** requotes after orders are x seconds old */
  quoteExpiryDuration?: Duration;
  /** interval to take market utilization snapshot, e.g. every 60 seconds */
  marketUtilizationSnapshotInterval?: Duration;
  /**
   * time duration window used to calculate the TWA market utilization e.g. last
   * 24 hours
   */
  maxMarketUtilizationSnapshotWindow?: Duration;
  navPerShareSnapshots: Long;
  navPerShareSnapshotInterval?: Duration;
  indexLastUpdatedAtThreshold?: Duration;
}

export interface ParamsToUpdate {
  quoteIndexPriceFluctuationToleranceRatio: string;
  quoteExpiryDuration?: Duration;
  marketUtilizationSnapshotInterval?: Duration;
  maxMarketUtilizationSnapshotWindow?: Duration;
  navPerShareSnapshots?: Long;
  navPerShareSnapshotInterval?: Duration;
  indexLastUpdatedAtThreshold?: Duration;
}

const baseParams: object = {
  quoteIndexPriceFluctuationToleranceRatio: "",
  navPerShareSnapshots: Long.UZERO,
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoteIndexPriceFluctuationToleranceRatio !== "") {
      writer
        .uint32(10)
        .string(message.quoteIndexPriceFluctuationToleranceRatio);
    }
    if (message.quoteExpiryDuration !== undefined) {
      Duration.encode(
        message.quoteExpiryDuration,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.marketUtilizationSnapshotInterval !== undefined) {
      Duration.encode(
        message.marketUtilizationSnapshotInterval,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.maxMarketUtilizationSnapshotWindow !== undefined) {
      Duration.encode(
        message.maxMarketUtilizationSnapshotWindow,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (!message.navPerShareSnapshots.isZero()) {
      writer.uint32(40).uint64(message.navPerShareSnapshots);
    }
    if (message.navPerShareSnapshotInterval !== undefined) {
      Duration.encode(
        message.navPerShareSnapshotInterval,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.indexLastUpdatedAtThreshold !== undefined) {
      Duration.encode(
        message.indexLastUpdatedAtThreshold,
        writer.uint32(58).fork()
      ).ldelim();
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
          message.quoteIndexPriceFluctuationToleranceRatio = reader.string();
          break;
        case 2:
          message.quoteExpiryDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.marketUtilizationSnapshotInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.maxMarketUtilizationSnapshotWindow = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.navPerShareSnapshots = reader.uint64() as Long;
          break;
        case 6:
          message.navPerShareSnapshotInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.indexLastUpdatedAtThreshold = Duration.decode(
            reader,
            reader.uint32()
          );
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
    message.quoteIndexPriceFluctuationToleranceRatio =
      object.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      object.quoteIndexPriceFluctuationToleranceRatio !== null
        ? String(object.quoteIndexPriceFluctuationToleranceRatio)
        : "";
    message.quoteExpiryDuration =
      object.quoteExpiryDuration !== undefined &&
      object.quoteExpiryDuration !== null
        ? Duration.fromJSON(object.quoteExpiryDuration)
        : undefined;
    message.marketUtilizationSnapshotInterval =
      object.marketUtilizationSnapshotInterval !== undefined &&
      object.marketUtilizationSnapshotInterval !== null
        ? Duration.fromJSON(object.marketUtilizationSnapshotInterval)
        : undefined;
    message.maxMarketUtilizationSnapshotWindow =
      object.maxMarketUtilizationSnapshotWindow !== undefined &&
      object.maxMarketUtilizationSnapshotWindow !== null
        ? Duration.fromJSON(object.maxMarketUtilizationSnapshotWindow)
        : undefined;
    message.navPerShareSnapshots =
      object.navPerShareSnapshots !== undefined &&
      object.navPerShareSnapshots !== null
        ? Long.fromString(object.navPerShareSnapshots)
        : Long.UZERO;
    message.navPerShareSnapshotInterval =
      object.navPerShareSnapshotInterval !== undefined &&
      object.navPerShareSnapshotInterval !== null
        ? Duration.fromJSON(object.navPerShareSnapshotInterval)
        : undefined;
    message.indexLastUpdatedAtThreshold =
      object.indexLastUpdatedAtThreshold !== undefined &&
      object.indexLastUpdatedAtThreshold !== null
        ? Duration.fromJSON(object.indexLastUpdatedAtThreshold)
        : undefined;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      (obj.quoteIndexPriceFluctuationToleranceRatio =
        message.quoteIndexPriceFluctuationToleranceRatio);
    message.quoteExpiryDuration !== undefined &&
      (obj.quoteExpiryDuration = message.quoteExpiryDuration
        ? Duration.toJSON(message.quoteExpiryDuration)
        : undefined);
    message.marketUtilizationSnapshotInterval !== undefined &&
      (obj.marketUtilizationSnapshotInterval =
        message.marketUtilizationSnapshotInterval
          ? Duration.toJSON(message.marketUtilizationSnapshotInterval)
          : undefined);
    message.maxMarketUtilizationSnapshotWindow !== undefined &&
      (obj.maxMarketUtilizationSnapshotWindow =
        message.maxMarketUtilizationSnapshotWindow
          ? Duration.toJSON(message.maxMarketUtilizationSnapshotWindow)
          : undefined);
    message.navPerShareSnapshots !== undefined &&
      (obj.navPerShareSnapshots = (
        message.navPerShareSnapshots || Long.UZERO
      ).toString());
    message.navPerShareSnapshotInterval !== undefined &&
      (obj.navPerShareSnapshotInterval = message.navPerShareSnapshotInterval
        ? Duration.toJSON(message.navPerShareSnapshotInterval)
        : undefined);
    message.indexLastUpdatedAtThreshold !== undefined &&
      (obj.indexLastUpdatedAtThreshold = message.indexLastUpdatedAtThreshold
        ? Duration.toJSON(message.indexLastUpdatedAtThreshold)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.quoteIndexPriceFluctuationToleranceRatio =
      object.quoteIndexPriceFluctuationToleranceRatio ?? "";
    message.quoteExpiryDuration =
      object.quoteExpiryDuration !== undefined &&
      object.quoteExpiryDuration !== null
        ? Duration.fromPartial(object.quoteExpiryDuration)
        : undefined;
    message.marketUtilizationSnapshotInterval =
      object.marketUtilizationSnapshotInterval !== undefined &&
      object.marketUtilizationSnapshotInterval !== null
        ? Duration.fromPartial(object.marketUtilizationSnapshotInterval)
        : undefined;
    message.maxMarketUtilizationSnapshotWindow =
      object.maxMarketUtilizationSnapshotWindow !== undefined &&
      object.maxMarketUtilizationSnapshotWindow !== null
        ? Duration.fromPartial(object.maxMarketUtilizationSnapshotWindow)
        : undefined;
    message.navPerShareSnapshots =
      object.navPerShareSnapshots !== undefined &&
      object.navPerShareSnapshots !== null
        ? Long.fromValue(object.navPerShareSnapshots)
        : Long.UZERO;
    message.navPerShareSnapshotInterval =
      object.navPerShareSnapshotInterval !== undefined &&
      object.navPerShareSnapshotInterval !== null
        ? Duration.fromPartial(object.navPerShareSnapshotInterval)
        : undefined;
    message.indexLastUpdatedAtThreshold =
      object.indexLastUpdatedAtThreshold !== undefined &&
      object.indexLastUpdatedAtThreshold !== null
        ? Duration.fromPartial(object.indexLastUpdatedAtThreshold)
        : undefined;
    return message;
  },
};

const baseParamsToUpdate: object = {
  quoteIndexPriceFluctuationToleranceRatio: "",
};

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoteIndexPriceFluctuationToleranceRatio !== "") {
      writer
        .uint32(10)
        .string(message.quoteIndexPriceFluctuationToleranceRatio);
    }
    if (message.quoteExpiryDuration !== undefined) {
      Duration.encode(
        message.quoteExpiryDuration,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.marketUtilizationSnapshotInterval !== undefined) {
      Duration.encode(
        message.marketUtilizationSnapshotInterval,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.maxMarketUtilizationSnapshotWindow !== undefined) {
      Duration.encode(
        message.maxMarketUtilizationSnapshotWindow,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.navPerShareSnapshots !== undefined) {
      UInt64Value.encode(
        { value: message.navPerShareSnapshots! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.navPerShareSnapshotInterval !== undefined) {
      Duration.encode(
        message.navPerShareSnapshotInterval,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.indexLastUpdatedAtThreshold !== undefined) {
      Duration.encode(
        message.indexLastUpdatedAtThreshold,
        writer.uint32(58).fork()
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
          message.quoteIndexPriceFluctuationToleranceRatio = reader.string();
          break;
        case 2:
          message.quoteExpiryDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.marketUtilizationSnapshotInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.maxMarketUtilizationSnapshotWindow = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.navPerShareSnapshots = UInt64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.navPerShareSnapshotInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.indexLastUpdatedAtThreshold = Duration.decode(
            reader,
            reader.uint32()
          );
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
    message.quoteIndexPriceFluctuationToleranceRatio =
      object.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      object.quoteIndexPriceFluctuationToleranceRatio !== null
        ? String(object.quoteIndexPriceFluctuationToleranceRatio)
        : "";
    message.quoteExpiryDuration =
      object.quoteExpiryDuration !== undefined &&
      object.quoteExpiryDuration !== null
        ? Duration.fromJSON(object.quoteExpiryDuration)
        : undefined;
    message.marketUtilizationSnapshotInterval =
      object.marketUtilizationSnapshotInterval !== undefined &&
      object.marketUtilizationSnapshotInterval !== null
        ? Duration.fromJSON(object.marketUtilizationSnapshotInterval)
        : undefined;
    message.maxMarketUtilizationSnapshotWindow =
      object.maxMarketUtilizationSnapshotWindow !== undefined &&
      object.maxMarketUtilizationSnapshotWindow !== null
        ? Duration.fromJSON(object.maxMarketUtilizationSnapshotWindow)
        : undefined;
    message.navPerShareSnapshots =
      object.navPerShareSnapshots !== undefined &&
      object.navPerShareSnapshots !== null
        ? Long.fromValue(object.navPerShareSnapshots)
        : undefined;
    message.navPerShareSnapshotInterval =
      object.navPerShareSnapshotInterval !== undefined &&
      object.navPerShareSnapshotInterval !== null
        ? Duration.fromJSON(object.navPerShareSnapshotInterval)
        : undefined;
    message.indexLastUpdatedAtThreshold =
      object.indexLastUpdatedAtThreshold !== undefined &&
      object.indexLastUpdatedAtThreshold !== null
        ? Duration.fromJSON(object.indexLastUpdatedAtThreshold)
        : undefined;
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      (obj.quoteIndexPriceFluctuationToleranceRatio =
        message.quoteIndexPriceFluctuationToleranceRatio);
    message.quoteExpiryDuration !== undefined &&
      (obj.quoteExpiryDuration = message.quoteExpiryDuration
        ? Duration.toJSON(message.quoteExpiryDuration)
        : undefined);
    message.marketUtilizationSnapshotInterval !== undefined &&
      (obj.marketUtilizationSnapshotInterval =
        message.marketUtilizationSnapshotInterval
          ? Duration.toJSON(message.marketUtilizationSnapshotInterval)
          : undefined);
    message.maxMarketUtilizationSnapshotWindow !== undefined &&
      (obj.maxMarketUtilizationSnapshotWindow =
        message.maxMarketUtilizationSnapshotWindow
          ? Duration.toJSON(message.maxMarketUtilizationSnapshotWindow)
          : undefined);
    message.navPerShareSnapshots !== undefined &&
      (obj.navPerShareSnapshots = message.navPerShareSnapshots);
    message.navPerShareSnapshotInterval !== undefined &&
      (obj.navPerShareSnapshotInterval = message.navPerShareSnapshotInterval
        ? Duration.toJSON(message.navPerShareSnapshotInterval)
        : undefined);
    message.indexLastUpdatedAtThreshold !== undefined &&
      (obj.indexLastUpdatedAtThreshold = message.indexLastUpdatedAtThreshold
        ? Duration.toJSON(message.indexLastUpdatedAtThreshold)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.quoteIndexPriceFluctuationToleranceRatio =
      object.quoteIndexPriceFluctuationToleranceRatio ?? "";
    message.quoteExpiryDuration =
      object.quoteExpiryDuration !== undefined &&
      object.quoteExpiryDuration !== null
        ? Duration.fromPartial(object.quoteExpiryDuration)
        : undefined;
    message.marketUtilizationSnapshotInterval =
      object.marketUtilizationSnapshotInterval !== undefined &&
      object.marketUtilizationSnapshotInterval !== null
        ? Duration.fromPartial(object.marketUtilizationSnapshotInterval)
        : undefined;
    message.maxMarketUtilizationSnapshotWindow =
      object.maxMarketUtilizationSnapshotWindow !== undefined &&
      object.maxMarketUtilizationSnapshotWindow !== null
        ? Duration.fromPartial(object.maxMarketUtilizationSnapshotWindow)
        : undefined;
    message.navPerShareSnapshots =
      object.navPerShareSnapshots !== undefined &&
      object.navPerShareSnapshots !== null
        ? Long.fromValue(object.navPerShareSnapshots)
        : undefined;
    message.navPerShareSnapshotInterval =
      object.navPerShareSnapshotInterval !== undefined &&
      object.navPerShareSnapshotInterval !== null
        ? Duration.fromPartial(object.navPerShareSnapshotInterval)
        : undefined;
    message.indexLastUpdatedAtThreshold =
      object.indexLastUpdatedAtThreshold !== undefined &&
      object.indexLastUpdatedAtThreshold !== null
        ? Duration.fromPartial(object.indexLastUpdatedAtThreshold)
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
