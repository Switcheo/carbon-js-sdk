/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { BoolValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.cdp";

/** Params defines the parameters for the module. */
export interface Params {
  interestFee: string;
  liquidationFee: string;
  stablecoinMintCap: string;
  /**
   * Complete Liquidation Threshold determines how far between
   * liquidation_threshold (LT) and collateral_value (CV) a borrower's
   * borrowed value must have progressed in order to allow a full liquidation.
   * 0.3 indicates 30% of the way from LT to CV.
   * Valid values: 0-1.
   */
  completeLiquidationThreshold: string;
  /**
   * Close Factor determines the portion of a borrower's position that can be
   * liquidated in a single event. Minimum Close Factor is Close Factor at
   * liquidation_threshold. 0.1 means that that 10% of the borrower position can
   * be liquidated when the borrowed value passes the liquidation_threshold.
   * close_factor scales linearly between minimum_close_factor and 1.0,
   * reaching its maximum when borrowed value passes
   * complete_liquidation_threshold. We can put it into the picture:
   *
   *             borrowed           C := collateral
   *             value                   value
   *  --- | ------- | ----- | -------- | ------->
   *      L                 CL
   *
   * liquidation = liquidation_threshold * C
   * CL = L + (C-CL) * complete_liquidation_threshold
   *    is the borrowed value above which close factor will be 1.
   *
   * Valid values: 0-1.
   */
  minimumCloseFactor: string;
  /**
   * Small Liquidation Size determines the USD value at which a borrow is
   * considered small enough to be liquidated in a single transaction, bypassing
   * dynamic close factor.
   */
  smallLiquidationSize: string;
  /**
   * stale_price_grace_period determines the grace period before an oracle price
   * is regarded as stale. This would cause certain actions like borrowing to be
   * paused
   */
  stalePriceGracePeriod?: Duration;
  /**
   * cdp_paused if true, causes all supply, locking, lending, borrowing and
   * liquidations to be paused
   */
  cdpPaused: boolean;
  /**
   * time interval in between each adjustment of stablecoin interest rate to
   * help stablecoin price stability
   */
  stablecoinInterestRateEpoch?: Duration;
  /**
   * used in formula to calculate stablecoin interest rate to help stablecoin
   * price stability
   */
  stablecoinInterestRateAdjusterCoefficient: string;
  cdpLiquidationPaused: boolean;
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  interestFee: string;
  liquidationFee: string;
  stablecoinMintCap: string;
  completeLiquidationThreshold: string;
  minimumCloseFactor: string;
  smallLiquidationSize: string;
  stalePriceGracePeriod?: Duration;
  cdpPaused?: boolean;
  stablecoinInterestRateEpoch?: Duration;
  stablecoinInterestRateAdjusterCoefficient: string;
  cdpLiquidationPaused?: boolean;
}

function createBaseParams(): Params {
  return {
    interestFee: "",
    liquidationFee: "",
    stablecoinMintCap: "",
    completeLiquidationThreshold: "",
    minimumCloseFactor: "",
    smallLiquidationSize: "",
    stalePriceGracePeriod: undefined,
    cdpPaused: false,
    stablecoinInterestRateEpoch: undefined,
    stablecoinInterestRateAdjusterCoefficient: "",
    cdpLiquidationPaused: false,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interestFee !== "") {
      writer.uint32(10).string(message.interestFee);
    }
    if (message.liquidationFee !== "") {
      writer.uint32(18).string(message.liquidationFee);
    }
    if (message.stablecoinMintCap !== "") {
      writer.uint32(34).string(message.stablecoinMintCap);
    }
    if (message.completeLiquidationThreshold !== "") {
      writer.uint32(42).string(message.completeLiquidationThreshold);
    }
    if (message.minimumCloseFactor !== "") {
      writer.uint32(50).string(message.minimumCloseFactor);
    }
    if (message.smallLiquidationSize !== "") {
      writer.uint32(58).string(message.smallLiquidationSize);
    }
    if (message.stalePriceGracePeriod !== undefined) {
      Duration.encode(message.stalePriceGracePeriod, writer.uint32(66).fork()).ldelim();
    }
    if (message.cdpPaused === true) {
      writer.uint32(72).bool(message.cdpPaused);
    }
    if (message.stablecoinInterestRateEpoch !== undefined) {
      Duration.encode(message.stablecoinInterestRateEpoch, writer.uint32(82).fork()).ldelim();
    }
    if (message.stablecoinInterestRateAdjusterCoefficient !== "") {
      writer.uint32(90).string(message.stablecoinInterestRateAdjusterCoefficient);
    }
    if (message.cdpLiquidationPaused === true) {
      writer.uint32(96).bool(message.cdpLiquidationPaused);
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

          message.interestFee = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liquidationFee = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stablecoinMintCap = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.completeLiquidationThreshold = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.minimumCloseFactor = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.smallLiquidationSize = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.stalePriceGracePeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.cdpPaused = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.stablecoinInterestRateEpoch = Duration.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.stablecoinInterestRateAdjusterCoefficient = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.cdpLiquidationPaused = reader.bool();
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
      interestFee: isSet(object.interestFee) ? String(object.interestFee) : "",
      liquidationFee: isSet(object.liquidationFee) ? String(object.liquidationFee) : "",
      stablecoinMintCap: isSet(object.stablecoinMintCap) ? String(object.stablecoinMintCap) : "",
      completeLiquidationThreshold: isSet(object.completeLiquidationThreshold)
        ? String(object.completeLiquidationThreshold)
        : "",
      minimumCloseFactor: isSet(object.minimumCloseFactor) ? String(object.minimumCloseFactor) : "",
      smallLiquidationSize: isSet(object.smallLiquidationSize) ? String(object.smallLiquidationSize) : "",
      stalePriceGracePeriod: isSet(object.stalePriceGracePeriod)
        ? Duration.fromJSON(object.stalePriceGracePeriod)
        : undefined,
      cdpPaused: isSet(object.cdpPaused) ? Boolean(object.cdpPaused) : false,
      stablecoinInterestRateEpoch: isSet(object.stablecoinInterestRateEpoch)
        ? Duration.fromJSON(object.stablecoinInterestRateEpoch)
        : undefined,
      stablecoinInterestRateAdjusterCoefficient: isSet(object.stablecoinInterestRateAdjusterCoefficient)
        ? String(object.stablecoinInterestRateAdjusterCoefficient)
        : "",
      cdpLiquidationPaused: isSet(object.cdpLiquidationPaused) ? Boolean(object.cdpLiquidationPaused) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.interestFee !== undefined && (obj.interestFee = message.interestFee);
    message.liquidationFee !== undefined && (obj.liquidationFee = message.liquidationFee);
    message.stablecoinMintCap !== undefined && (obj.stablecoinMintCap = message.stablecoinMintCap);
    message.completeLiquidationThreshold !== undefined &&
      (obj.completeLiquidationThreshold = message.completeLiquidationThreshold);
    message.minimumCloseFactor !== undefined && (obj.minimumCloseFactor = message.minimumCloseFactor);
    message.smallLiquidationSize !== undefined && (obj.smallLiquidationSize = message.smallLiquidationSize);
    message.stalePriceGracePeriod !== undefined && (obj.stalePriceGracePeriod = message.stalePriceGracePeriod
      ? Duration.toJSON(message.stalePriceGracePeriod)
      : undefined);
    message.cdpPaused !== undefined && (obj.cdpPaused = message.cdpPaused);
    message.stablecoinInterestRateEpoch !== undefined &&
      (obj.stablecoinInterestRateEpoch = message.stablecoinInterestRateEpoch
        ? Duration.toJSON(message.stablecoinInterestRateEpoch)
        : undefined);
    message.stablecoinInterestRateAdjusterCoefficient !== undefined &&
      (obj.stablecoinInterestRateAdjusterCoefficient = message.stablecoinInterestRateAdjusterCoefficient);
    message.cdpLiquidationPaused !== undefined && (obj.cdpLiquidationPaused = message.cdpLiquidationPaused);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.interestFee = object.interestFee ?? "";
    message.liquidationFee = object.liquidationFee ?? "";
    message.stablecoinMintCap = object.stablecoinMintCap ?? "";
    message.completeLiquidationThreshold = object.completeLiquidationThreshold ?? "";
    message.minimumCloseFactor = object.minimumCloseFactor ?? "";
    message.smallLiquidationSize = object.smallLiquidationSize ?? "";
    message.stalePriceGracePeriod =
      (object.stalePriceGracePeriod !== undefined && object.stalePriceGracePeriod !== null)
        ? Duration.fromPartial(object.stalePriceGracePeriod)
        : undefined;
    message.cdpPaused = object.cdpPaused ?? false;
    message.stablecoinInterestRateEpoch =
      (object.stablecoinInterestRateEpoch !== undefined && object.stablecoinInterestRateEpoch !== null)
        ? Duration.fromPartial(object.stablecoinInterestRateEpoch)
        : undefined;
    message.stablecoinInterestRateAdjusterCoefficient = object.stablecoinInterestRateAdjusterCoefficient ?? "";
    message.cdpLiquidationPaused = object.cdpLiquidationPaused ?? false;
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return {
    interestFee: "",
    liquidationFee: "",
    stablecoinMintCap: "",
    completeLiquidationThreshold: "",
    minimumCloseFactor: "",
    smallLiquidationSize: "",
    stalePriceGracePeriod: undefined,
    cdpPaused: undefined,
    stablecoinInterestRateEpoch: undefined,
    stablecoinInterestRateAdjusterCoefficient: "",
    cdpLiquidationPaused: undefined,
  };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interestFee !== "") {
      writer.uint32(10).string(message.interestFee);
    }
    if (message.liquidationFee !== "") {
      writer.uint32(18).string(message.liquidationFee);
    }
    if (message.stablecoinMintCap !== "") {
      writer.uint32(34).string(message.stablecoinMintCap);
    }
    if (message.completeLiquidationThreshold !== "") {
      writer.uint32(42).string(message.completeLiquidationThreshold);
    }
    if (message.minimumCloseFactor !== "") {
      writer.uint32(50).string(message.minimumCloseFactor);
    }
    if (message.smallLiquidationSize !== "") {
      writer.uint32(58).string(message.smallLiquidationSize);
    }
    if (message.stalePriceGracePeriod !== undefined) {
      Duration.encode(message.stalePriceGracePeriod, writer.uint32(66).fork()).ldelim();
    }
    if (message.cdpPaused !== undefined) {
      BoolValue.encode({ value: message.cdpPaused! }, writer.uint32(74).fork()).ldelim();
    }
    if (message.stablecoinInterestRateEpoch !== undefined) {
      Duration.encode(message.stablecoinInterestRateEpoch, writer.uint32(82).fork()).ldelim();
    }
    if (message.stablecoinInterestRateAdjusterCoefficient !== "") {
      writer.uint32(90).string(message.stablecoinInterestRateAdjusterCoefficient);
    }
    if (message.cdpLiquidationPaused !== undefined) {
      BoolValue.encode({ value: message.cdpLiquidationPaused! }, writer.uint32(98).fork()).ldelim();
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

          message.interestFee = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liquidationFee = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stablecoinMintCap = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.completeLiquidationThreshold = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.minimumCloseFactor = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.smallLiquidationSize = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.stalePriceGracePeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.cdpPaused = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.stablecoinInterestRateEpoch = Duration.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.stablecoinInterestRateAdjusterCoefficient = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.cdpLiquidationPaused = BoolValue.decode(reader, reader.uint32()).value;
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
      interestFee: isSet(object.interestFee) ? String(object.interestFee) : "",
      liquidationFee: isSet(object.liquidationFee) ? String(object.liquidationFee) : "",
      stablecoinMintCap: isSet(object.stablecoinMintCap) ? String(object.stablecoinMintCap) : "",
      completeLiquidationThreshold: isSet(object.completeLiquidationThreshold)
        ? String(object.completeLiquidationThreshold)
        : "",
      minimumCloseFactor: isSet(object.minimumCloseFactor) ? String(object.minimumCloseFactor) : "",
      smallLiquidationSize: isSet(object.smallLiquidationSize) ? String(object.smallLiquidationSize) : "",
      stalePriceGracePeriod: isSet(object.stalePriceGracePeriod)
        ? Duration.fromJSON(object.stalePriceGracePeriod)
        : undefined,
      cdpPaused: isSet(object.cdpPaused) ? Boolean(object.cdpPaused) : undefined,
      stablecoinInterestRateEpoch: isSet(object.stablecoinInterestRateEpoch)
        ? Duration.fromJSON(object.stablecoinInterestRateEpoch)
        : undefined,
      stablecoinInterestRateAdjusterCoefficient: isSet(object.stablecoinInterestRateAdjusterCoefficient)
        ? String(object.stablecoinInterestRateAdjusterCoefficient)
        : "",
      cdpLiquidationPaused: isSet(object.cdpLiquidationPaused) ? Boolean(object.cdpLiquidationPaused) : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.interestFee !== undefined && (obj.interestFee = message.interestFee);
    message.liquidationFee !== undefined && (obj.liquidationFee = message.liquidationFee);
    message.stablecoinMintCap !== undefined && (obj.stablecoinMintCap = message.stablecoinMintCap);
    message.completeLiquidationThreshold !== undefined &&
      (obj.completeLiquidationThreshold = message.completeLiquidationThreshold);
    message.minimumCloseFactor !== undefined && (obj.minimumCloseFactor = message.minimumCloseFactor);
    message.smallLiquidationSize !== undefined && (obj.smallLiquidationSize = message.smallLiquidationSize);
    message.stalePriceGracePeriod !== undefined && (obj.stalePriceGracePeriod = message.stalePriceGracePeriod
      ? Duration.toJSON(message.stalePriceGracePeriod)
      : undefined);
    message.cdpPaused !== undefined && (obj.cdpPaused = message.cdpPaused);
    message.stablecoinInterestRateEpoch !== undefined &&
      (obj.stablecoinInterestRateEpoch = message.stablecoinInterestRateEpoch
        ? Duration.toJSON(message.stablecoinInterestRateEpoch)
        : undefined);
    message.stablecoinInterestRateAdjusterCoefficient !== undefined &&
      (obj.stablecoinInterestRateAdjusterCoefficient = message.stablecoinInterestRateAdjusterCoefficient);
    message.cdpLiquidationPaused !== undefined && (obj.cdpLiquidationPaused = message.cdpLiquidationPaused);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.interestFee = object.interestFee ?? "";
    message.liquidationFee = object.liquidationFee ?? "";
    message.stablecoinMintCap = object.stablecoinMintCap ?? "";
    message.completeLiquidationThreshold = object.completeLiquidationThreshold ?? "";
    message.minimumCloseFactor = object.minimumCloseFactor ?? "";
    message.smallLiquidationSize = object.smallLiquidationSize ?? "";
    message.stalePriceGracePeriod =
      (object.stalePriceGracePeriod !== undefined && object.stalePriceGracePeriod !== null)
        ? Duration.fromPartial(object.stalePriceGracePeriod)
        : undefined;
    message.cdpPaused = object.cdpPaused ?? undefined;
    message.stablecoinInterestRateEpoch =
      (object.stablecoinInterestRateEpoch !== undefined && object.stablecoinInterestRateEpoch !== null)
        ? Duration.fromPartial(object.stablecoinInterestRateEpoch)
        : undefined;
    message.stablecoinInterestRateAdjusterCoefficient = object.stablecoinInterestRateAdjusterCoefficient ?? "";
    message.cdpLiquidationPaused = object.cdpLiquidationPaused ?? undefined;
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
