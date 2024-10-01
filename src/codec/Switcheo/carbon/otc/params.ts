/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Int64Value, BoolValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.otc";

export interface Params {
  feeCollectorWhitelistedMarketMakers: string[];
  feeCollectorBlacklistedDenoms: string[];
  /** ctx.BlockHeight() is int64 */
  feeCollectorRfqBlockInterval: Long;
  feeCollectorRfqExpiryDuration?: Duration;
  /** minimum expiry duration for RFQs and Quotes */
  minimumDuration?: Duration;
  /** maximum expiry duration for RFQs and Quotes */
  maximumDuration?: Duration;
  enableFeeConversion: boolean;
}

export interface ParamsToUpdate {
  feeCollectorWhitelistedMarketMakers: string[];
  feeCollectorBlacklistedDenoms: string[];
  /** ctx.BlockHeight() is int64 */
  feeCollectorRfqBlockInterval?: Long;
  feeCollectorRfqExpiryDuration?: Duration;
  minimumDuration?: Duration;
  maximumDuration?: Duration;
  enableFeeConversion?: boolean;
}

const baseParams: object = {
  feeCollectorWhitelistedMarketMakers: "",
  feeCollectorBlacklistedDenoms: "",
  feeCollectorRfqBlockInterval: Long.ZERO,
  enableFeeConversion: false,
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeCollectorWhitelistedMarketMakers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.feeCollectorBlacklistedDenoms) {
      writer.uint32(18).string(v!);
    }
    if (!message.feeCollectorRfqBlockInterval.isZero()) {
      writer.uint32(24).int64(message.feeCollectorRfqBlockInterval);
    }
    if (message.feeCollectorRfqExpiryDuration !== undefined) {
      Duration.encode(
        message.feeCollectorRfqExpiryDuration,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.minimumDuration !== undefined) {
      Duration.encode(
        message.minimumDuration,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maximumDuration !== undefined) {
      Duration.encode(
        message.maximumDuration,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.enableFeeConversion === true) {
      writer.uint32(56).bool(message.enableFeeConversion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.feeCollectorWhitelistedMarketMakers = [];
    message.feeCollectorBlacklistedDenoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeCollectorWhitelistedMarketMakers.push(reader.string());
          break;
        case 2:
          message.feeCollectorBlacklistedDenoms.push(reader.string());
          break;
        case 3:
          message.feeCollectorRfqBlockInterval = reader.int64() as Long;
          break;
        case 4:
          message.feeCollectorRfqExpiryDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.minimumDuration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.maximumDuration = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.enableFeeConversion = reader.bool();
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
    message.feeCollectorWhitelistedMarketMakers = (
      object.feeCollectorWhitelistedMarketMakers ?? []
    ).map((e: any) => String(e));
    message.feeCollectorBlacklistedDenoms = (
      object.feeCollectorBlacklistedDenoms ?? []
    ).map((e: any) => String(e));
    message.feeCollectorRfqBlockInterval =
      object.feeCollectorRfqBlockInterval !== undefined &&
      object.feeCollectorRfqBlockInterval !== null
        ? Long.fromString(object.feeCollectorRfqBlockInterval)
        : Long.ZERO;
    message.feeCollectorRfqExpiryDuration =
      object.feeCollectorRfqExpiryDuration !== undefined &&
      object.feeCollectorRfqExpiryDuration !== null
        ? Duration.fromJSON(object.feeCollectorRfqExpiryDuration)
        : undefined;
    message.minimumDuration =
      object.minimumDuration !== undefined && object.minimumDuration !== null
        ? Duration.fromJSON(object.minimumDuration)
        : undefined;
    message.maximumDuration =
      object.maximumDuration !== undefined && object.maximumDuration !== null
        ? Duration.fromJSON(object.maximumDuration)
        : undefined;
    message.enableFeeConversion =
      object.enableFeeConversion !== undefined &&
      object.enableFeeConversion !== null
        ? Boolean(object.enableFeeConversion)
        : false;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.feeCollectorWhitelistedMarketMakers) {
      obj.feeCollectorWhitelistedMarketMakers =
        message.feeCollectorWhitelistedMarketMakers.map((e) => e);
    } else {
      obj.feeCollectorWhitelistedMarketMakers = [];
    }
    if (message.feeCollectorBlacklistedDenoms) {
      obj.feeCollectorBlacklistedDenoms =
        message.feeCollectorBlacklistedDenoms.map((e) => e);
    } else {
      obj.feeCollectorBlacklistedDenoms = [];
    }
    message.feeCollectorRfqBlockInterval !== undefined &&
      (obj.feeCollectorRfqBlockInterval = (
        message.feeCollectorRfqBlockInterval || Long.ZERO
      ).toString());
    message.feeCollectorRfqExpiryDuration !== undefined &&
      (obj.feeCollectorRfqExpiryDuration = message.feeCollectorRfqExpiryDuration
        ? Duration.toJSON(message.feeCollectorRfqExpiryDuration)
        : undefined);
    message.minimumDuration !== undefined &&
      (obj.minimumDuration = message.minimumDuration
        ? Duration.toJSON(message.minimumDuration)
        : undefined);
    message.maximumDuration !== undefined &&
      (obj.maximumDuration = message.maximumDuration
        ? Duration.toJSON(message.maximumDuration)
        : undefined);
    message.enableFeeConversion !== undefined &&
      (obj.enableFeeConversion = message.enableFeeConversion);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.feeCollectorWhitelistedMarketMakers = (
      object.feeCollectorWhitelistedMarketMakers ?? []
    ).map((e) => e);
    message.feeCollectorBlacklistedDenoms = (
      object.feeCollectorBlacklistedDenoms ?? []
    ).map((e) => e);
    message.feeCollectorRfqBlockInterval =
      object.feeCollectorRfqBlockInterval !== undefined &&
      object.feeCollectorRfqBlockInterval !== null
        ? Long.fromValue(object.feeCollectorRfqBlockInterval)
        : Long.ZERO;
    message.feeCollectorRfqExpiryDuration =
      object.feeCollectorRfqExpiryDuration !== undefined &&
      object.feeCollectorRfqExpiryDuration !== null
        ? Duration.fromPartial(object.feeCollectorRfqExpiryDuration)
        : undefined;
    message.minimumDuration =
      object.minimumDuration !== undefined && object.minimumDuration !== null
        ? Duration.fromPartial(object.minimumDuration)
        : undefined;
    message.maximumDuration =
      object.maximumDuration !== undefined && object.maximumDuration !== null
        ? Duration.fromPartial(object.maximumDuration)
        : undefined;
    message.enableFeeConversion = object.enableFeeConversion ?? false;
    return message;
  },
};

const baseParamsToUpdate: object = {
  feeCollectorWhitelistedMarketMakers: "",
  feeCollectorBlacklistedDenoms: "",
};

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeCollectorWhitelistedMarketMakers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.feeCollectorBlacklistedDenoms) {
      writer.uint32(18).string(v!);
    }
    if (message.feeCollectorRfqBlockInterval !== undefined) {
      Int64Value.encode(
        { value: message.feeCollectorRfqBlockInterval! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.feeCollectorRfqExpiryDuration !== undefined) {
      Duration.encode(
        message.feeCollectorRfqExpiryDuration,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.minimumDuration !== undefined) {
      Duration.encode(
        message.minimumDuration,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maximumDuration !== undefined) {
      Duration.encode(
        message.maximumDuration,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.enableFeeConversion !== undefined) {
      BoolValue.encode(
        { value: message.enableFeeConversion! },
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.feeCollectorWhitelistedMarketMakers = [];
    message.feeCollectorBlacklistedDenoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeCollectorWhitelistedMarketMakers.push(reader.string());
          break;
        case 2:
          message.feeCollectorBlacklistedDenoms.push(reader.string());
          break;
        case 3:
          message.feeCollectorRfqBlockInterval = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.feeCollectorRfqExpiryDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.minimumDuration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.maximumDuration = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.enableFeeConversion = BoolValue.decode(
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
    message.feeCollectorWhitelistedMarketMakers = (
      object.feeCollectorWhitelistedMarketMakers ?? []
    ).map((e: any) => String(e));
    message.feeCollectorBlacklistedDenoms = (
      object.feeCollectorBlacklistedDenoms ?? []
    ).map((e: any) => String(e));
    message.feeCollectorRfqBlockInterval =
      object.feeCollectorRfqBlockInterval !== undefined &&
      object.feeCollectorRfqBlockInterval !== null
        ? Long.fromValue(object.feeCollectorRfqBlockInterval)
        : undefined;
    message.feeCollectorRfqExpiryDuration =
      object.feeCollectorRfqExpiryDuration !== undefined &&
      object.feeCollectorRfqExpiryDuration !== null
        ? Duration.fromJSON(object.feeCollectorRfqExpiryDuration)
        : undefined;
    message.minimumDuration =
      object.minimumDuration !== undefined && object.minimumDuration !== null
        ? Duration.fromJSON(object.minimumDuration)
        : undefined;
    message.maximumDuration =
      object.maximumDuration !== undefined && object.maximumDuration !== null
        ? Duration.fromJSON(object.maximumDuration)
        : undefined;
    message.enableFeeConversion =
      object.enableFeeConversion !== undefined &&
      object.enableFeeConversion !== null
        ? Boolean(object.enableFeeConversion)
        : undefined;
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    if (message.feeCollectorWhitelistedMarketMakers) {
      obj.feeCollectorWhitelistedMarketMakers =
        message.feeCollectorWhitelistedMarketMakers.map((e) => e);
    } else {
      obj.feeCollectorWhitelistedMarketMakers = [];
    }
    if (message.feeCollectorBlacklistedDenoms) {
      obj.feeCollectorBlacklistedDenoms =
        message.feeCollectorBlacklistedDenoms.map((e) => e);
    } else {
      obj.feeCollectorBlacklistedDenoms = [];
    }
    message.feeCollectorRfqBlockInterval !== undefined &&
      (obj.feeCollectorRfqBlockInterval = message.feeCollectorRfqBlockInterval);
    message.feeCollectorRfqExpiryDuration !== undefined &&
      (obj.feeCollectorRfqExpiryDuration = message.feeCollectorRfqExpiryDuration
        ? Duration.toJSON(message.feeCollectorRfqExpiryDuration)
        : undefined);
    message.minimumDuration !== undefined &&
      (obj.minimumDuration = message.minimumDuration
        ? Duration.toJSON(message.minimumDuration)
        : undefined);
    message.maximumDuration !== undefined &&
      (obj.maximumDuration = message.maximumDuration
        ? Duration.toJSON(message.maximumDuration)
        : undefined);
    message.enableFeeConversion !== undefined &&
      (obj.enableFeeConversion = message.enableFeeConversion);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.feeCollectorWhitelistedMarketMakers = (
      object.feeCollectorWhitelistedMarketMakers ?? []
    ).map((e) => e);
    message.feeCollectorBlacklistedDenoms = (
      object.feeCollectorBlacklistedDenoms ?? []
    ).map((e) => e);
    message.feeCollectorRfqBlockInterval =
      object.feeCollectorRfqBlockInterval !== undefined &&
      object.feeCollectorRfqBlockInterval !== null
        ? Long.fromValue(object.feeCollectorRfqBlockInterval)
        : undefined;
    message.feeCollectorRfqExpiryDuration =
      object.feeCollectorRfqExpiryDuration !== undefined &&
      object.feeCollectorRfqExpiryDuration !== null
        ? Duration.fromPartial(object.feeCollectorRfqExpiryDuration)
        : undefined;
    message.minimumDuration =
      object.minimumDuration !== undefined && object.minimumDuration !== null
        ? Duration.fromPartial(object.minimumDuration)
        : undefined;
    message.maximumDuration =
      object.maximumDuration !== undefined && object.maximumDuration !== null
        ? Duration.fromPartial(object.maximumDuration)
        : undefined;
    message.enableFeeConversion = object.enableFeeConversion ?? undefined;
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
