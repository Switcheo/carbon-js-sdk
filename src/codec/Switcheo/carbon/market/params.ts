/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { UInt32Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.market";

/** Params defines the parameters for the market module. */
export interface Params {
  defaultLotSizeUsd: string;
  defaultTickSizeUsd: string;
  defaultMinQuantityUsd: string;
  /** @deprecated */
  defaultSpotMakerFee: string;
  /** @deprecated */
  defaultSpotTakerFee: string;
  /** @deprecated */
  defaultFuturesMakerFee: string;
  /** @deprecated */
  defaultFuturesTakerFee: string;
  defaultRiskStepSizeUsd: string;
  defaultInitialMarginBase: string;
  defaultInitialMarginStep: string;
  defaultMaintenanceMarginRatio: string;
  defaultMaxLiquidationOrderTicketUsd: string;
  defaultMaxLiquidationOrderDuration?: Duration;
  defaultImpactSizeUsd: string;
  defaultMarkPriceBand: number;
  defaultLastPriceProtectedBand: number;
  maxActiveMarkets: number;
  defaultTradingBandwidth: number;
  fundingRateBand: string;
  defaultLpSpotTakerFee: string;
  defaultLpSpotMakerFee: string;
  defaultLpFuturesTakerFee: string;
  defaultLpFuturesMakerFee: string;
  defaultMaxOpenInterestUsd: string;
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  defaultLotSizeUsd: string;
  defaultTickSizeUsd: string;
  defaultMinQuantityUsd: string;
  /** @deprecated */
  defaultSpotMakerFee: string;
  /** @deprecated */
  defaultSpotTakerFee: string;
  /** @deprecated */
  defaultFuturesMakerFee: string;
  /** @deprecated */
  defaultFuturesTakerFee: string;
  defaultRiskStepSizeUsd: string;
  defaultInitialMarginBase: string;
  defaultInitialMarginStep: string;
  defaultMaintenanceMarginRatio: string;
  defaultMaxLiquidationOrderTicketUsd: string;
  defaultMaxLiquidationOrderDuration?: Duration;
  defaultImpactSizeUsd: string;
  defaultMarkPriceBand?: number;
  defaultLastPriceProtectedBand?: number;
  maxActiveMarkets?: number;
  defaultTradingBandwidth?: number;
  fundingRateBand: string;
  defaultLpSpotTakerFee: string;
  defaultLpSpotMakerFee: string;
  defaultLpFuturesTakerFee: string;
  defaultLpFuturesMakerFee: string;
  defaultMaxOpenInterestUsd: string;
}

const baseParams: object = {
  defaultLotSizeUsd: "",
  defaultTickSizeUsd: "",
  defaultMinQuantityUsd: "",
  defaultSpotMakerFee: "",
  defaultSpotTakerFee: "",
  defaultFuturesMakerFee: "",
  defaultFuturesTakerFee: "",
  defaultRiskStepSizeUsd: "",
  defaultInitialMarginBase: "",
  defaultInitialMarginStep: "",
  defaultMaintenanceMarginRatio: "",
  defaultMaxLiquidationOrderTicketUsd: "",
  defaultImpactSizeUsd: "",
  defaultMarkPriceBand: 0,
  defaultLastPriceProtectedBand: 0,
  maxActiveMarkets: 0,
  defaultTradingBandwidth: 0,
  fundingRateBand: "",
  defaultLpSpotTakerFee: "",
  defaultLpSpotMakerFee: "",
  defaultLpFuturesTakerFee: "",
  defaultLpFuturesMakerFee: "",
  defaultMaxOpenInterestUsd: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.defaultLotSizeUsd !== "") {
      writer.uint32(10).string(message.defaultLotSizeUsd);
    }
    if (message.defaultTickSizeUsd !== "") {
      writer.uint32(18).string(message.defaultTickSizeUsd);
    }
    if (message.defaultMinQuantityUsd !== "") {
      writer.uint32(26).string(message.defaultMinQuantityUsd);
    }
    if (message.defaultSpotMakerFee !== "") {
      writer.uint32(34).string(message.defaultSpotMakerFee);
    }
    if (message.defaultSpotTakerFee !== "") {
      writer.uint32(42).string(message.defaultSpotTakerFee);
    }
    if (message.defaultFuturesMakerFee !== "") {
      writer.uint32(50).string(message.defaultFuturesMakerFee);
    }
    if (message.defaultFuturesTakerFee !== "") {
      writer.uint32(58).string(message.defaultFuturesTakerFee);
    }
    if (message.defaultRiskStepSizeUsd !== "") {
      writer.uint32(66).string(message.defaultRiskStepSizeUsd);
    }
    if (message.defaultInitialMarginBase !== "") {
      writer.uint32(74).string(message.defaultInitialMarginBase);
    }
    if (message.defaultInitialMarginStep !== "") {
      writer.uint32(82).string(message.defaultInitialMarginStep);
    }
    if (message.defaultMaintenanceMarginRatio !== "") {
      writer.uint32(90).string(message.defaultMaintenanceMarginRatio);
    }
    if (message.defaultMaxLiquidationOrderTicketUsd !== "") {
      writer.uint32(98).string(message.defaultMaxLiquidationOrderTicketUsd);
    }
    if (message.defaultMaxLiquidationOrderDuration !== undefined) {
      Duration.encode(
        message.defaultMaxLiquidationOrderDuration,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.defaultImpactSizeUsd !== "") {
      writer.uint32(114).string(message.defaultImpactSizeUsd);
    }
    if (message.defaultMarkPriceBand !== 0) {
      writer.uint32(120).uint32(message.defaultMarkPriceBand);
    }
    if (message.defaultLastPriceProtectedBand !== 0) {
      writer.uint32(128).uint32(message.defaultLastPriceProtectedBand);
    }
    if (message.maxActiveMarkets !== 0) {
      writer.uint32(136).uint32(message.maxActiveMarkets);
    }
    if (message.defaultTradingBandwidth !== 0) {
      writer.uint32(144).uint32(message.defaultTradingBandwidth);
    }
    if (message.fundingRateBand !== "") {
      writer.uint32(154).string(message.fundingRateBand);
    }
    if (message.defaultLpSpotTakerFee !== "") {
      writer.uint32(162).string(message.defaultLpSpotTakerFee);
    }
    if (message.defaultLpSpotMakerFee !== "") {
      writer.uint32(170).string(message.defaultLpSpotMakerFee);
    }
    if (message.defaultLpFuturesTakerFee !== "") {
      writer.uint32(178).string(message.defaultLpFuturesTakerFee);
    }
    if (message.defaultLpFuturesMakerFee !== "") {
      writer.uint32(186).string(message.defaultLpFuturesMakerFee);
    }
    if (message.defaultMaxOpenInterestUsd !== "") {
      writer.uint32(194).string(message.defaultMaxOpenInterestUsd);
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
          message.defaultLotSizeUsd = reader.string();
          break;
        case 2:
          message.defaultTickSizeUsd = reader.string();
          break;
        case 3:
          message.defaultMinQuantityUsd = reader.string();
          break;
        case 4:
          message.defaultSpotMakerFee = reader.string();
          break;
        case 5:
          message.defaultSpotTakerFee = reader.string();
          break;
        case 6:
          message.defaultFuturesMakerFee = reader.string();
          break;
        case 7:
          message.defaultFuturesTakerFee = reader.string();
          break;
        case 8:
          message.defaultRiskStepSizeUsd = reader.string();
          break;
        case 9:
          message.defaultInitialMarginBase = reader.string();
          break;
        case 10:
          message.defaultInitialMarginStep = reader.string();
          break;
        case 11:
          message.defaultMaintenanceMarginRatio = reader.string();
          break;
        case 12:
          message.defaultMaxLiquidationOrderTicketUsd = reader.string();
          break;
        case 13:
          message.defaultMaxLiquidationOrderDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.defaultImpactSizeUsd = reader.string();
          break;
        case 15:
          message.defaultMarkPriceBand = reader.uint32();
          break;
        case 16:
          message.defaultLastPriceProtectedBand = reader.uint32();
          break;
        case 17:
          message.maxActiveMarkets = reader.uint32();
          break;
        case 18:
          message.defaultTradingBandwidth = reader.uint32();
          break;
        case 19:
          message.fundingRateBand = reader.string();
          break;
        case 20:
          message.defaultLpSpotTakerFee = reader.string();
          break;
        case 21:
          message.defaultLpSpotMakerFee = reader.string();
          break;
        case 22:
          message.defaultLpFuturesTakerFee = reader.string();
          break;
        case 23:
          message.defaultLpFuturesMakerFee = reader.string();
          break;
        case 24:
          message.defaultMaxOpenInterestUsd = reader.string();
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
    message.defaultLotSizeUsd =
      object.defaultLotSizeUsd !== undefined &&
      object.defaultLotSizeUsd !== null
        ? String(object.defaultLotSizeUsd)
        : "";
    message.defaultTickSizeUsd =
      object.defaultTickSizeUsd !== undefined &&
      object.defaultTickSizeUsd !== null
        ? String(object.defaultTickSizeUsd)
        : "";
    message.defaultMinQuantityUsd =
      object.defaultMinQuantityUsd !== undefined &&
      object.defaultMinQuantityUsd !== null
        ? String(object.defaultMinQuantityUsd)
        : "";
    message.defaultSpotMakerFee =
      object.defaultSpotMakerFee !== undefined &&
      object.defaultSpotMakerFee !== null
        ? String(object.defaultSpotMakerFee)
        : "";
    message.defaultSpotTakerFee =
      object.defaultSpotTakerFee !== undefined &&
      object.defaultSpotTakerFee !== null
        ? String(object.defaultSpotTakerFee)
        : "";
    message.defaultFuturesMakerFee =
      object.defaultFuturesMakerFee !== undefined &&
      object.defaultFuturesMakerFee !== null
        ? String(object.defaultFuturesMakerFee)
        : "";
    message.defaultFuturesTakerFee =
      object.defaultFuturesTakerFee !== undefined &&
      object.defaultFuturesTakerFee !== null
        ? String(object.defaultFuturesTakerFee)
        : "";
    message.defaultRiskStepSizeUsd =
      object.defaultRiskStepSizeUsd !== undefined &&
      object.defaultRiskStepSizeUsd !== null
        ? String(object.defaultRiskStepSizeUsd)
        : "";
    message.defaultInitialMarginBase =
      object.defaultInitialMarginBase !== undefined &&
      object.defaultInitialMarginBase !== null
        ? String(object.defaultInitialMarginBase)
        : "";
    message.defaultInitialMarginStep =
      object.defaultInitialMarginStep !== undefined &&
      object.defaultInitialMarginStep !== null
        ? String(object.defaultInitialMarginStep)
        : "";
    message.defaultMaintenanceMarginRatio =
      object.defaultMaintenanceMarginRatio !== undefined &&
      object.defaultMaintenanceMarginRatio !== null
        ? String(object.defaultMaintenanceMarginRatio)
        : "";
    message.defaultMaxLiquidationOrderTicketUsd =
      object.defaultMaxLiquidationOrderTicketUsd !== undefined &&
      object.defaultMaxLiquidationOrderTicketUsd !== null
        ? String(object.defaultMaxLiquidationOrderTicketUsd)
        : "";
    message.defaultMaxLiquidationOrderDuration =
      object.defaultMaxLiquidationOrderDuration !== undefined &&
      object.defaultMaxLiquidationOrderDuration !== null
        ? Duration.fromJSON(object.defaultMaxLiquidationOrderDuration)
        : undefined;
    message.defaultImpactSizeUsd =
      object.defaultImpactSizeUsd !== undefined &&
      object.defaultImpactSizeUsd !== null
        ? String(object.defaultImpactSizeUsd)
        : "";
    message.defaultMarkPriceBand =
      object.defaultMarkPriceBand !== undefined &&
      object.defaultMarkPriceBand !== null
        ? Number(object.defaultMarkPriceBand)
        : 0;
    message.defaultLastPriceProtectedBand =
      object.defaultLastPriceProtectedBand !== undefined &&
      object.defaultLastPriceProtectedBand !== null
        ? Number(object.defaultLastPriceProtectedBand)
        : 0;
    message.maxActiveMarkets =
      object.maxActiveMarkets !== undefined && object.maxActiveMarkets !== null
        ? Number(object.maxActiveMarkets)
        : 0;
    message.defaultTradingBandwidth =
      object.defaultTradingBandwidth !== undefined &&
      object.defaultTradingBandwidth !== null
        ? Number(object.defaultTradingBandwidth)
        : 0;
    message.fundingRateBand =
      object.fundingRateBand !== undefined && object.fundingRateBand !== null
        ? String(object.fundingRateBand)
        : "";
    message.defaultLpSpotTakerFee =
      object.defaultLpSpotTakerFee !== undefined &&
      object.defaultLpSpotTakerFee !== null
        ? String(object.defaultLpSpotTakerFee)
        : "";
    message.defaultLpSpotMakerFee =
      object.defaultLpSpotMakerFee !== undefined &&
      object.defaultLpSpotMakerFee !== null
        ? String(object.defaultLpSpotMakerFee)
        : "";
    message.defaultLpFuturesTakerFee =
      object.defaultLpFuturesTakerFee !== undefined &&
      object.defaultLpFuturesTakerFee !== null
        ? String(object.defaultLpFuturesTakerFee)
        : "";
    message.defaultLpFuturesMakerFee =
      object.defaultLpFuturesMakerFee !== undefined &&
      object.defaultLpFuturesMakerFee !== null
        ? String(object.defaultLpFuturesMakerFee)
        : "";
    message.defaultMaxOpenInterestUsd =
      object.defaultMaxOpenInterestUsd !== undefined &&
      object.defaultMaxOpenInterestUsd !== null
        ? String(object.defaultMaxOpenInterestUsd)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.defaultLotSizeUsd !== undefined &&
      (obj.defaultLotSizeUsd = message.defaultLotSizeUsd);
    message.defaultTickSizeUsd !== undefined &&
      (obj.defaultTickSizeUsd = message.defaultTickSizeUsd);
    message.defaultMinQuantityUsd !== undefined &&
      (obj.defaultMinQuantityUsd = message.defaultMinQuantityUsd);
    message.defaultSpotMakerFee !== undefined &&
      (obj.defaultSpotMakerFee = message.defaultSpotMakerFee);
    message.defaultSpotTakerFee !== undefined &&
      (obj.defaultSpotTakerFee = message.defaultSpotTakerFee);
    message.defaultFuturesMakerFee !== undefined &&
      (obj.defaultFuturesMakerFee = message.defaultFuturesMakerFee);
    message.defaultFuturesTakerFee !== undefined &&
      (obj.defaultFuturesTakerFee = message.defaultFuturesTakerFee);
    message.defaultRiskStepSizeUsd !== undefined &&
      (obj.defaultRiskStepSizeUsd = message.defaultRiskStepSizeUsd);
    message.defaultInitialMarginBase !== undefined &&
      (obj.defaultInitialMarginBase = message.defaultInitialMarginBase);
    message.defaultInitialMarginStep !== undefined &&
      (obj.defaultInitialMarginStep = message.defaultInitialMarginStep);
    message.defaultMaintenanceMarginRatio !== undefined &&
      (obj.defaultMaintenanceMarginRatio =
        message.defaultMaintenanceMarginRatio);
    message.defaultMaxLiquidationOrderTicketUsd !== undefined &&
      (obj.defaultMaxLiquidationOrderTicketUsd =
        message.defaultMaxLiquidationOrderTicketUsd);
    message.defaultMaxLiquidationOrderDuration !== undefined &&
      (obj.defaultMaxLiquidationOrderDuration =
        message.defaultMaxLiquidationOrderDuration
          ? Duration.toJSON(message.defaultMaxLiquidationOrderDuration)
          : undefined);
    message.defaultImpactSizeUsd !== undefined &&
      (obj.defaultImpactSizeUsd = message.defaultImpactSizeUsd);
    message.defaultMarkPriceBand !== undefined &&
      (obj.defaultMarkPriceBand = message.defaultMarkPriceBand);
    message.defaultLastPriceProtectedBand !== undefined &&
      (obj.defaultLastPriceProtectedBand =
        message.defaultLastPriceProtectedBand);
    message.maxActiveMarkets !== undefined &&
      (obj.maxActiveMarkets = message.maxActiveMarkets);
    message.defaultTradingBandwidth !== undefined &&
      (obj.defaultTradingBandwidth = message.defaultTradingBandwidth);
    message.fundingRateBand !== undefined &&
      (obj.fundingRateBand = message.fundingRateBand);
    message.defaultLpSpotTakerFee !== undefined &&
      (obj.defaultLpSpotTakerFee = message.defaultLpSpotTakerFee);
    message.defaultLpSpotMakerFee !== undefined &&
      (obj.defaultLpSpotMakerFee = message.defaultLpSpotMakerFee);
    message.defaultLpFuturesTakerFee !== undefined &&
      (obj.defaultLpFuturesTakerFee = message.defaultLpFuturesTakerFee);
    message.defaultLpFuturesMakerFee !== undefined &&
      (obj.defaultLpFuturesMakerFee = message.defaultLpFuturesMakerFee);
    message.defaultMaxOpenInterestUsd !== undefined &&
      (obj.defaultMaxOpenInterestUsd = message.defaultMaxOpenInterestUsd);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.defaultLotSizeUsd = object.defaultLotSizeUsd ?? "";
    message.defaultTickSizeUsd = object.defaultTickSizeUsd ?? "";
    message.defaultMinQuantityUsd = object.defaultMinQuantityUsd ?? "";
    message.defaultSpotMakerFee = object.defaultSpotMakerFee ?? "";
    message.defaultSpotTakerFee = object.defaultSpotTakerFee ?? "";
    message.defaultFuturesMakerFee = object.defaultFuturesMakerFee ?? "";
    message.defaultFuturesTakerFee = object.defaultFuturesTakerFee ?? "";
    message.defaultRiskStepSizeUsd = object.defaultRiskStepSizeUsd ?? "";
    message.defaultInitialMarginBase = object.defaultInitialMarginBase ?? "";
    message.defaultInitialMarginStep = object.defaultInitialMarginStep ?? "";
    message.defaultMaintenanceMarginRatio =
      object.defaultMaintenanceMarginRatio ?? "";
    message.defaultMaxLiquidationOrderTicketUsd =
      object.defaultMaxLiquidationOrderTicketUsd ?? "";
    message.defaultMaxLiquidationOrderDuration =
      object.defaultMaxLiquidationOrderDuration !== undefined &&
      object.defaultMaxLiquidationOrderDuration !== null
        ? Duration.fromPartial(object.defaultMaxLiquidationOrderDuration)
        : undefined;
    message.defaultImpactSizeUsd = object.defaultImpactSizeUsd ?? "";
    message.defaultMarkPriceBand = object.defaultMarkPriceBand ?? 0;
    message.defaultLastPriceProtectedBand =
      object.defaultLastPriceProtectedBand ?? 0;
    message.maxActiveMarkets = object.maxActiveMarkets ?? 0;
    message.defaultTradingBandwidth = object.defaultTradingBandwidth ?? 0;
    message.fundingRateBand = object.fundingRateBand ?? "";
    message.defaultLpSpotTakerFee = object.defaultLpSpotTakerFee ?? "";
    message.defaultLpSpotMakerFee = object.defaultLpSpotMakerFee ?? "";
    message.defaultLpFuturesTakerFee = object.defaultLpFuturesTakerFee ?? "";
    message.defaultLpFuturesMakerFee = object.defaultLpFuturesMakerFee ?? "";
    message.defaultMaxOpenInterestUsd = object.defaultMaxOpenInterestUsd ?? "";
    return message;
  },
};

const baseParamsToUpdate: object = {
  defaultLotSizeUsd: "",
  defaultTickSizeUsd: "",
  defaultMinQuantityUsd: "",
  defaultSpotMakerFee: "",
  defaultSpotTakerFee: "",
  defaultFuturesMakerFee: "",
  defaultFuturesTakerFee: "",
  defaultRiskStepSizeUsd: "",
  defaultInitialMarginBase: "",
  defaultInitialMarginStep: "",
  defaultMaintenanceMarginRatio: "",
  defaultMaxLiquidationOrderTicketUsd: "",
  defaultImpactSizeUsd: "",
  fundingRateBand: "",
  defaultLpSpotTakerFee: "",
  defaultLpSpotMakerFee: "",
  defaultLpFuturesTakerFee: "",
  defaultLpFuturesMakerFee: "",
  defaultMaxOpenInterestUsd: "",
};

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.defaultLotSizeUsd !== "") {
      writer.uint32(10).string(message.defaultLotSizeUsd);
    }
    if (message.defaultTickSizeUsd !== "") {
      writer.uint32(18).string(message.defaultTickSizeUsd);
    }
    if (message.defaultMinQuantityUsd !== "") {
      writer.uint32(26).string(message.defaultMinQuantityUsd);
    }
    if (message.defaultSpotMakerFee !== "") {
      writer.uint32(34).string(message.defaultSpotMakerFee);
    }
    if (message.defaultSpotTakerFee !== "") {
      writer.uint32(42).string(message.defaultSpotTakerFee);
    }
    if (message.defaultFuturesMakerFee !== "") {
      writer.uint32(50).string(message.defaultFuturesMakerFee);
    }
    if (message.defaultFuturesTakerFee !== "") {
      writer.uint32(58).string(message.defaultFuturesTakerFee);
    }
    if (message.defaultRiskStepSizeUsd !== "") {
      writer.uint32(66).string(message.defaultRiskStepSizeUsd);
    }
    if (message.defaultInitialMarginBase !== "") {
      writer.uint32(74).string(message.defaultInitialMarginBase);
    }
    if (message.defaultInitialMarginStep !== "") {
      writer.uint32(82).string(message.defaultInitialMarginStep);
    }
    if (message.defaultMaintenanceMarginRatio !== "") {
      writer.uint32(90).string(message.defaultMaintenanceMarginRatio);
    }
    if (message.defaultMaxLiquidationOrderTicketUsd !== "") {
      writer.uint32(98).string(message.defaultMaxLiquidationOrderTicketUsd);
    }
    if (message.defaultMaxLiquidationOrderDuration !== undefined) {
      Duration.encode(
        message.defaultMaxLiquidationOrderDuration,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.defaultImpactSizeUsd !== "") {
      writer.uint32(114).string(message.defaultImpactSizeUsd);
    }
    if (message.defaultMarkPriceBand !== undefined) {
      UInt32Value.encode(
        { value: message.defaultMarkPriceBand! },
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.defaultLastPriceProtectedBand !== undefined) {
      UInt32Value.encode(
        { value: message.defaultLastPriceProtectedBand! },
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.maxActiveMarkets !== undefined) {
      UInt32Value.encode(
        { value: message.maxActiveMarkets! },
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.defaultTradingBandwidth !== undefined) {
      UInt32Value.encode(
        { value: message.defaultTradingBandwidth! },
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.fundingRateBand !== "") {
      writer.uint32(154).string(message.fundingRateBand);
    }
    if (message.defaultLpSpotTakerFee !== "") {
      writer.uint32(162).string(message.defaultLpSpotTakerFee);
    }
    if (message.defaultLpSpotMakerFee !== "") {
      writer.uint32(170).string(message.defaultLpSpotMakerFee);
    }
    if (message.defaultLpFuturesTakerFee !== "") {
      writer.uint32(178).string(message.defaultLpFuturesTakerFee);
    }
    if (message.defaultLpFuturesMakerFee !== "") {
      writer.uint32(186).string(message.defaultLpFuturesMakerFee);
    }
    if (message.defaultMaxOpenInterestUsd !== "") {
      writer.uint32(194).string(message.defaultMaxOpenInterestUsd);
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
          message.defaultLotSizeUsd = reader.string();
          break;
        case 2:
          message.defaultTickSizeUsd = reader.string();
          break;
        case 3:
          message.defaultMinQuantityUsd = reader.string();
          break;
        case 4:
          message.defaultSpotMakerFee = reader.string();
          break;
        case 5:
          message.defaultSpotTakerFee = reader.string();
          break;
        case 6:
          message.defaultFuturesMakerFee = reader.string();
          break;
        case 7:
          message.defaultFuturesTakerFee = reader.string();
          break;
        case 8:
          message.defaultRiskStepSizeUsd = reader.string();
          break;
        case 9:
          message.defaultInitialMarginBase = reader.string();
          break;
        case 10:
          message.defaultInitialMarginStep = reader.string();
          break;
        case 11:
          message.defaultMaintenanceMarginRatio = reader.string();
          break;
        case 12:
          message.defaultMaxLiquidationOrderTicketUsd = reader.string();
          break;
        case 13:
          message.defaultMaxLiquidationOrderDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.defaultImpactSizeUsd = reader.string();
          break;
        case 15:
          message.defaultMarkPriceBand = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 16:
          message.defaultLastPriceProtectedBand = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 17:
          message.maxActiveMarkets = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 18:
          message.defaultTradingBandwidth = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 19:
          message.fundingRateBand = reader.string();
          break;
        case 20:
          message.defaultLpSpotTakerFee = reader.string();
          break;
        case 21:
          message.defaultLpSpotMakerFee = reader.string();
          break;
        case 22:
          message.defaultLpFuturesTakerFee = reader.string();
          break;
        case 23:
          message.defaultLpFuturesMakerFee = reader.string();
          break;
        case 24:
          message.defaultMaxOpenInterestUsd = reader.string();
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
    message.defaultLotSizeUsd =
      object.defaultLotSizeUsd !== undefined &&
      object.defaultLotSizeUsd !== null
        ? String(object.defaultLotSizeUsd)
        : "";
    message.defaultTickSizeUsd =
      object.defaultTickSizeUsd !== undefined &&
      object.defaultTickSizeUsd !== null
        ? String(object.defaultTickSizeUsd)
        : "";
    message.defaultMinQuantityUsd =
      object.defaultMinQuantityUsd !== undefined &&
      object.defaultMinQuantityUsd !== null
        ? String(object.defaultMinQuantityUsd)
        : "";
    message.defaultSpotMakerFee =
      object.defaultSpotMakerFee !== undefined &&
      object.defaultSpotMakerFee !== null
        ? String(object.defaultSpotMakerFee)
        : "";
    message.defaultSpotTakerFee =
      object.defaultSpotTakerFee !== undefined &&
      object.defaultSpotTakerFee !== null
        ? String(object.defaultSpotTakerFee)
        : "";
    message.defaultFuturesMakerFee =
      object.defaultFuturesMakerFee !== undefined &&
      object.defaultFuturesMakerFee !== null
        ? String(object.defaultFuturesMakerFee)
        : "";
    message.defaultFuturesTakerFee =
      object.defaultFuturesTakerFee !== undefined &&
      object.defaultFuturesTakerFee !== null
        ? String(object.defaultFuturesTakerFee)
        : "";
    message.defaultRiskStepSizeUsd =
      object.defaultRiskStepSizeUsd !== undefined &&
      object.defaultRiskStepSizeUsd !== null
        ? String(object.defaultRiskStepSizeUsd)
        : "";
    message.defaultInitialMarginBase =
      object.defaultInitialMarginBase !== undefined &&
      object.defaultInitialMarginBase !== null
        ? String(object.defaultInitialMarginBase)
        : "";
    message.defaultInitialMarginStep =
      object.defaultInitialMarginStep !== undefined &&
      object.defaultInitialMarginStep !== null
        ? String(object.defaultInitialMarginStep)
        : "";
    message.defaultMaintenanceMarginRatio =
      object.defaultMaintenanceMarginRatio !== undefined &&
      object.defaultMaintenanceMarginRatio !== null
        ? String(object.defaultMaintenanceMarginRatio)
        : "";
    message.defaultMaxLiquidationOrderTicketUsd =
      object.defaultMaxLiquidationOrderTicketUsd !== undefined &&
      object.defaultMaxLiquidationOrderTicketUsd !== null
        ? String(object.defaultMaxLiquidationOrderTicketUsd)
        : "";
    message.defaultMaxLiquidationOrderDuration =
      object.defaultMaxLiquidationOrderDuration !== undefined &&
      object.defaultMaxLiquidationOrderDuration !== null
        ? Duration.fromJSON(object.defaultMaxLiquidationOrderDuration)
        : undefined;
    message.defaultImpactSizeUsd =
      object.defaultImpactSizeUsd !== undefined &&
      object.defaultImpactSizeUsd !== null
        ? String(object.defaultImpactSizeUsd)
        : "";
    message.defaultMarkPriceBand =
      object.defaultMarkPriceBand !== undefined &&
      object.defaultMarkPriceBand !== null
        ? Number(object.defaultMarkPriceBand)
        : undefined;
    message.defaultLastPriceProtectedBand =
      object.defaultLastPriceProtectedBand !== undefined &&
      object.defaultLastPriceProtectedBand !== null
        ? Number(object.defaultLastPriceProtectedBand)
        : undefined;
    message.maxActiveMarkets =
      object.maxActiveMarkets !== undefined && object.maxActiveMarkets !== null
        ? Number(object.maxActiveMarkets)
        : undefined;
    message.defaultTradingBandwidth =
      object.defaultTradingBandwidth !== undefined &&
      object.defaultTradingBandwidth !== null
        ? Number(object.defaultTradingBandwidth)
        : undefined;
    message.fundingRateBand =
      object.fundingRateBand !== undefined && object.fundingRateBand !== null
        ? String(object.fundingRateBand)
        : "";
    message.defaultLpSpotTakerFee =
      object.defaultLpSpotTakerFee !== undefined &&
      object.defaultLpSpotTakerFee !== null
        ? String(object.defaultLpSpotTakerFee)
        : "";
    message.defaultLpSpotMakerFee =
      object.defaultLpSpotMakerFee !== undefined &&
      object.defaultLpSpotMakerFee !== null
        ? String(object.defaultLpSpotMakerFee)
        : "";
    message.defaultLpFuturesTakerFee =
      object.defaultLpFuturesTakerFee !== undefined &&
      object.defaultLpFuturesTakerFee !== null
        ? String(object.defaultLpFuturesTakerFee)
        : "";
    message.defaultLpFuturesMakerFee =
      object.defaultLpFuturesMakerFee !== undefined &&
      object.defaultLpFuturesMakerFee !== null
        ? String(object.defaultLpFuturesMakerFee)
        : "";
    message.defaultMaxOpenInterestUsd =
      object.defaultMaxOpenInterestUsd !== undefined &&
      object.defaultMaxOpenInterestUsd !== null
        ? String(object.defaultMaxOpenInterestUsd)
        : "";
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.defaultLotSizeUsd !== undefined &&
      (obj.defaultLotSizeUsd = message.defaultLotSizeUsd);
    message.defaultTickSizeUsd !== undefined &&
      (obj.defaultTickSizeUsd = message.defaultTickSizeUsd);
    message.defaultMinQuantityUsd !== undefined &&
      (obj.defaultMinQuantityUsd = message.defaultMinQuantityUsd);
    message.defaultSpotMakerFee !== undefined &&
      (obj.defaultSpotMakerFee = message.defaultSpotMakerFee);
    message.defaultSpotTakerFee !== undefined &&
      (obj.defaultSpotTakerFee = message.defaultSpotTakerFee);
    message.defaultFuturesMakerFee !== undefined &&
      (obj.defaultFuturesMakerFee = message.defaultFuturesMakerFee);
    message.defaultFuturesTakerFee !== undefined &&
      (obj.defaultFuturesTakerFee = message.defaultFuturesTakerFee);
    message.defaultRiskStepSizeUsd !== undefined &&
      (obj.defaultRiskStepSizeUsd = message.defaultRiskStepSizeUsd);
    message.defaultInitialMarginBase !== undefined &&
      (obj.defaultInitialMarginBase = message.defaultInitialMarginBase);
    message.defaultInitialMarginStep !== undefined &&
      (obj.defaultInitialMarginStep = message.defaultInitialMarginStep);
    message.defaultMaintenanceMarginRatio !== undefined &&
      (obj.defaultMaintenanceMarginRatio =
        message.defaultMaintenanceMarginRatio);
    message.defaultMaxLiquidationOrderTicketUsd !== undefined &&
      (obj.defaultMaxLiquidationOrderTicketUsd =
        message.defaultMaxLiquidationOrderTicketUsd);
    message.defaultMaxLiquidationOrderDuration !== undefined &&
      (obj.defaultMaxLiquidationOrderDuration =
        message.defaultMaxLiquidationOrderDuration
          ? Duration.toJSON(message.defaultMaxLiquidationOrderDuration)
          : undefined);
    message.defaultImpactSizeUsd !== undefined &&
      (obj.defaultImpactSizeUsd = message.defaultImpactSizeUsd);
    message.defaultMarkPriceBand !== undefined &&
      (obj.defaultMarkPriceBand = message.defaultMarkPriceBand);
    message.defaultLastPriceProtectedBand !== undefined &&
      (obj.defaultLastPriceProtectedBand =
        message.defaultLastPriceProtectedBand);
    message.maxActiveMarkets !== undefined &&
      (obj.maxActiveMarkets = message.maxActiveMarkets);
    message.defaultTradingBandwidth !== undefined &&
      (obj.defaultTradingBandwidth = message.defaultTradingBandwidth);
    message.fundingRateBand !== undefined &&
      (obj.fundingRateBand = message.fundingRateBand);
    message.defaultLpSpotTakerFee !== undefined &&
      (obj.defaultLpSpotTakerFee = message.defaultLpSpotTakerFee);
    message.defaultLpSpotMakerFee !== undefined &&
      (obj.defaultLpSpotMakerFee = message.defaultLpSpotMakerFee);
    message.defaultLpFuturesTakerFee !== undefined &&
      (obj.defaultLpFuturesTakerFee = message.defaultLpFuturesTakerFee);
    message.defaultLpFuturesMakerFee !== undefined &&
      (obj.defaultLpFuturesMakerFee = message.defaultLpFuturesMakerFee);
    message.defaultMaxOpenInterestUsd !== undefined &&
      (obj.defaultMaxOpenInterestUsd = message.defaultMaxOpenInterestUsd);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.defaultLotSizeUsd = object.defaultLotSizeUsd ?? "";
    message.defaultTickSizeUsd = object.defaultTickSizeUsd ?? "";
    message.defaultMinQuantityUsd = object.defaultMinQuantityUsd ?? "";
    message.defaultSpotMakerFee = object.defaultSpotMakerFee ?? "";
    message.defaultSpotTakerFee = object.defaultSpotTakerFee ?? "";
    message.defaultFuturesMakerFee = object.defaultFuturesMakerFee ?? "";
    message.defaultFuturesTakerFee = object.defaultFuturesTakerFee ?? "";
    message.defaultRiskStepSizeUsd = object.defaultRiskStepSizeUsd ?? "";
    message.defaultInitialMarginBase = object.defaultInitialMarginBase ?? "";
    message.defaultInitialMarginStep = object.defaultInitialMarginStep ?? "";
    message.defaultMaintenanceMarginRatio =
      object.defaultMaintenanceMarginRatio ?? "";
    message.defaultMaxLiquidationOrderTicketUsd =
      object.defaultMaxLiquidationOrderTicketUsd ?? "";
    message.defaultMaxLiquidationOrderDuration =
      object.defaultMaxLiquidationOrderDuration !== undefined &&
      object.defaultMaxLiquidationOrderDuration !== null
        ? Duration.fromPartial(object.defaultMaxLiquidationOrderDuration)
        : undefined;
    message.defaultImpactSizeUsd = object.defaultImpactSizeUsd ?? "";
    message.defaultMarkPriceBand = object.defaultMarkPriceBand ?? undefined;
    message.defaultLastPriceProtectedBand =
      object.defaultLastPriceProtectedBand ?? undefined;
    message.maxActiveMarkets = object.maxActiveMarkets ?? undefined;
    message.defaultTradingBandwidth =
      object.defaultTradingBandwidth ?? undefined;
    message.fundingRateBand = object.fundingRateBand ?? "";
    message.defaultLpSpotTakerFee = object.defaultLpSpotTakerFee ?? "";
    message.defaultLpSpotMakerFee = object.defaultLpSpotMakerFee ?? "";
    message.defaultLpFuturesTakerFee = object.defaultLpFuturesTakerFee ?? "";
    message.defaultLpFuturesMakerFee = object.defaultLpFuturesMakerFee ?? "";
    message.defaultMaxOpenInterestUsd = object.defaultMaxOpenInterestUsd ?? "";
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
