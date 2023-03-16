/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";

export const protobufPackage = "Switcheo.carbon.cdp";

/** Params defines the parameters for the module. */
export interface Params {
  interestFee: string;
  liquidationFee: string;
  /** Stablecoin interest rate deprecated. Moved to stablecoin_interest_info.proto */
  stablecoinInterestRate: string;
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
   * stale_price_grace_period determines the grace period in seconds before an oracle price is regarded as stale.
   * This would cause certain actions like borrowing to be paused
   */
  stalePriceGracePeriod: string;
  /** cdp_paused if true, causes all supply, locking, lending, borrowing and liquidations to be paused */
  cdpPaused: boolean;
  /** time interval in between each adjustment of stablecoin interest rate to help stablecoin price stability */
  stablecoinInterestRateEpoch?: Duration;
  /** used in formula to calculate stablecoin interest rate to help stablecoin price stability */
  stablecoinInterestRateAdjusterCoefficient: string;
}

const baseParams: object = {
  interestFee: "",
  liquidationFee: "",
  stablecoinInterestRate: "",
  stablecoinMintCap: "",
  completeLiquidationThreshold: "",
  minimumCloseFactor: "",
  smallLiquidationSize: "",
  stalePriceGracePeriod: "",
  cdpPaused: false,
  stablecoinInterestRateAdjusterCoefficient: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.interestFee !== "") {
      writer.uint32(10).string(message.interestFee);
    }
    if (message.liquidationFee !== "") {
      writer.uint32(18).string(message.liquidationFee);
    }
    if (message.stablecoinInterestRate !== "") {
      writer.uint32(26).string(message.stablecoinInterestRate);
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
    if (message.stalePriceGracePeriod !== "") {
      writer.uint32(66).string(message.stalePriceGracePeriod);
    }
    if (message.cdpPaused === true) {
      writer.uint32(72).bool(message.cdpPaused);
    }
    if (message.stablecoinInterestRateEpoch !== undefined) {
      Duration.encode(
        message.stablecoinInterestRateEpoch,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.stablecoinInterestRateAdjusterCoefficient !== "") {
      writer
        .uint32(90)
        .string(message.stablecoinInterestRateAdjusterCoefficient);
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
          message.interestFee = reader.string();
          break;
        case 2:
          message.liquidationFee = reader.string();
          break;
        case 3:
          message.stablecoinInterestRate = reader.string();
          break;
        case 4:
          message.stablecoinMintCap = reader.string();
          break;
        case 5:
          message.completeLiquidationThreshold = reader.string();
          break;
        case 6:
          message.minimumCloseFactor = reader.string();
          break;
        case 7:
          message.smallLiquidationSize = reader.string();
          break;
        case 8:
          message.stalePriceGracePeriod = reader.string();
          break;
        case 9:
          message.cdpPaused = reader.bool();
          break;
        case 10:
          message.stablecoinInterestRateEpoch = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.stablecoinInterestRateAdjusterCoefficient = reader.string();
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
    message.interestFee =
      object.interestFee !== undefined && object.interestFee !== null
        ? String(object.interestFee)
        : "";
    message.liquidationFee =
      object.liquidationFee !== undefined && object.liquidationFee !== null
        ? String(object.liquidationFee)
        : "";
    message.stablecoinInterestRate =
      object.stablecoinInterestRate !== undefined &&
      object.stablecoinInterestRate !== null
        ? String(object.stablecoinInterestRate)
        : "";
    message.stablecoinMintCap =
      object.stablecoinMintCap !== undefined &&
      object.stablecoinMintCap !== null
        ? String(object.stablecoinMintCap)
        : "";
    message.completeLiquidationThreshold =
      object.completeLiquidationThreshold !== undefined &&
      object.completeLiquidationThreshold !== null
        ? String(object.completeLiquidationThreshold)
        : "";
    message.minimumCloseFactor =
      object.minimumCloseFactor !== undefined &&
      object.minimumCloseFactor !== null
        ? String(object.minimumCloseFactor)
        : "";
    message.smallLiquidationSize =
      object.smallLiquidationSize !== undefined &&
      object.smallLiquidationSize !== null
        ? String(object.smallLiquidationSize)
        : "";
    message.stalePriceGracePeriod =
      object.stalePriceGracePeriod !== undefined &&
      object.stalePriceGracePeriod !== null
        ? String(object.stalePriceGracePeriod)
        : "";
    message.cdpPaused =
      object.cdpPaused !== undefined && object.cdpPaused !== null
        ? Boolean(object.cdpPaused)
        : false;
    message.stablecoinInterestRateEpoch =
      object.stablecoinInterestRateEpoch !== undefined &&
      object.stablecoinInterestRateEpoch !== null
        ? Duration.fromJSON(object.stablecoinInterestRateEpoch)
        : undefined;
    message.stablecoinInterestRateAdjusterCoefficient =
      object.stablecoinInterestRateAdjusterCoefficient !== undefined &&
      object.stablecoinInterestRateAdjusterCoefficient !== null
        ? String(object.stablecoinInterestRateAdjusterCoefficient)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.interestFee !== undefined &&
      (obj.interestFee = message.interestFee);
    message.liquidationFee !== undefined &&
      (obj.liquidationFee = message.liquidationFee);
    message.stablecoinInterestRate !== undefined &&
      (obj.stablecoinInterestRate = message.stablecoinInterestRate);
    message.stablecoinMintCap !== undefined &&
      (obj.stablecoinMintCap = message.stablecoinMintCap);
    message.completeLiquidationThreshold !== undefined &&
      (obj.completeLiquidationThreshold = message.completeLiquidationThreshold);
    message.minimumCloseFactor !== undefined &&
      (obj.minimumCloseFactor = message.minimumCloseFactor);
    message.smallLiquidationSize !== undefined &&
      (obj.smallLiquidationSize = message.smallLiquidationSize);
    message.stalePriceGracePeriod !== undefined &&
      (obj.stalePriceGracePeriod = message.stalePriceGracePeriod);
    message.cdpPaused !== undefined && (obj.cdpPaused = message.cdpPaused);
    message.stablecoinInterestRateEpoch !== undefined &&
      (obj.stablecoinInterestRateEpoch = message.stablecoinInterestRateEpoch
        ? Duration.toJSON(message.stablecoinInterestRateEpoch)
        : undefined);
    message.stablecoinInterestRateAdjusterCoefficient !== undefined &&
      (obj.stablecoinInterestRateAdjusterCoefficient =
        message.stablecoinInterestRateAdjusterCoefficient);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.interestFee = object.interestFee ?? "";
    message.liquidationFee = object.liquidationFee ?? "";
    message.stablecoinInterestRate = object.stablecoinInterestRate ?? "";
    message.stablecoinMintCap = object.stablecoinMintCap ?? "";
    message.completeLiquidationThreshold =
      object.completeLiquidationThreshold ?? "";
    message.minimumCloseFactor = object.minimumCloseFactor ?? "";
    message.smallLiquidationSize = object.smallLiquidationSize ?? "";
    message.stalePriceGracePeriod = object.stalePriceGracePeriod ?? "";
    message.cdpPaused = object.cdpPaused ?? false;
    message.stablecoinInterestRateEpoch =
      object.stablecoinInterestRateEpoch !== undefined &&
      object.stablecoinInterestRateEpoch !== null
        ? Duration.fromPartial(object.stablecoinInterestRateEpoch)
        : undefined;
    message.stablecoinInterestRateAdjusterCoefficient =
      object.stablecoinInterestRateAdjusterCoefficient ?? "";
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
