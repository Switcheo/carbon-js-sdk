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
  maxUnsettledMarkets: number;
  defaultTradingBandwidth: number;
  fundingRateBand: string;
  defaultLpSpotTakerFee: string;
  defaultLpSpotMakerFee: string;
  defaultLpFuturesTakerFee: string;
  defaultLpFuturesMakerFee: string;
  defaultMaxOpenInterestUsd: string;
  defaultStaleIndexPriceAllowance?: Duration;
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
  maxUnsettledMarkets?: number;
  defaultTradingBandwidth?: number;
  fundingRateBand: string;
  defaultLpSpotTakerFee: string;
  defaultLpSpotMakerFee: string;
  defaultLpFuturesTakerFee: string;
  defaultLpFuturesMakerFee: string;
  defaultMaxOpenInterestUsd: string;
  defaultStaleIndexPriceAllowance?: Duration;
}

function createBaseParams(): Params {
  return {
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
    defaultMaxLiquidationOrderDuration: undefined,
    defaultImpactSizeUsd: "",
    defaultMarkPriceBand: 0,
    defaultLastPriceProtectedBand: 0,
    maxUnsettledMarkets: 0,
    defaultTradingBandwidth: 0,
    fundingRateBand: "",
    defaultLpSpotTakerFee: "",
    defaultLpSpotMakerFee: "",
    defaultLpFuturesTakerFee: "",
    defaultLpFuturesMakerFee: "",
    defaultMaxOpenInterestUsd: "",
    defaultStaleIndexPriceAllowance: undefined,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Duration.encode(message.defaultMaxLiquidationOrderDuration, writer.uint32(106).fork()).ldelim();
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
    if (message.maxUnsettledMarkets !== 0) {
      writer.uint32(136).uint32(message.maxUnsettledMarkets);
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
    if (message.defaultStaleIndexPriceAllowance !== undefined) {
      Duration.encode(message.defaultStaleIndexPriceAllowance, writer.uint32(202).fork()).ldelim();
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

          message.defaultLotSizeUsd = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.defaultTickSizeUsd = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultMinQuantityUsd = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.defaultSpotMakerFee = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.defaultSpotTakerFee = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.defaultFuturesMakerFee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.defaultFuturesTakerFee = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.defaultRiskStepSizeUsd = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.defaultInitialMarginBase = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.defaultInitialMarginStep = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.defaultMaintenanceMarginRatio = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.defaultMaxLiquidationOrderTicketUsd = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.defaultMaxLiquidationOrderDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.defaultImpactSizeUsd = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.defaultMarkPriceBand = reader.uint32();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.defaultLastPriceProtectedBand = reader.uint32();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.maxUnsettledMarkets = reader.uint32();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.defaultTradingBandwidth = reader.uint32();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.fundingRateBand = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.defaultLpSpotTakerFee = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.defaultLpSpotMakerFee = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.defaultLpFuturesTakerFee = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.defaultLpFuturesMakerFee = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.defaultMaxOpenInterestUsd = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.defaultStaleIndexPriceAllowance = Duration.decode(reader, reader.uint32());
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
      defaultLotSizeUsd: isSet(object.defaultLotSizeUsd) ? String(object.defaultLotSizeUsd) : "",
      defaultTickSizeUsd: isSet(object.defaultTickSizeUsd) ? String(object.defaultTickSizeUsd) : "",
      defaultMinQuantityUsd: isSet(object.defaultMinQuantityUsd) ? String(object.defaultMinQuantityUsd) : "",
      defaultSpotMakerFee: isSet(object.defaultSpotMakerFee) ? String(object.defaultSpotMakerFee) : "",
      defaultSpotTakerFee: isSet(object.defaultSpotTakerFee) ? String(object.defaultSpotTakerFee) : "",
      defaultFuturesMakerFee: isSet(object.defaultFuturesMakerFee) ? String(object.defaultFuturesMakerFee) : "",
      defaultFuturesTakerFee: isSet(object.defaultFuturesTakerFee) ? String(object.defaultFuturesTakerFee) : "",
      defaultRiskStepSizeUsd: isSet(object.defaultRiskStepSizeUsd) ? String(object.defaultRiskStepSizeUsd) : "",
      defaultInitialMarginBase: isSet(object.defaultInitialMarginBase) ? String(object.defaultInitialMarginBase) : "",
      defaultInitialMarginStep: isSet(object.defaultInitialMarginStep) ? String(object.defaultInitialMarginStep) : "",
      defaultMaintenanceMarginRatio: isSet(object.defaultMaintenanceMarginRatio)
        ? String(object.defaultMaintenanceMarginRatio)
        : "",
      defaultMaxLiquidationOrderTicketUsd: isSet(object.defaultMaxLiquidationOrderTicketUsd)
        ? String(object.defaultMaxLiquidationOrderTicketUsd)
        : "",
      defaultMaxLiquidationOrderDuration: isSet(object.defaultMaxLiquidationOrderDuration)
        ? Duration.fromJSON(object.defaultMaxLiquidationOrderDuration)
        : undefined,
      defaultImpactSizeUsd: isSet(object.defaultImpactSizeUsd) ? String(object.defaultImpactSizeUsd) : "",
      defaultMarkPriceBand: isSet(object.defaultMarkPriceBand) ? Number(object.defaultMarkPriceBand) : 0,
      defaultLastPriceProtectedBand: isSet(object.defaultLastPriceProtectedBand)
        ? Number(object.defaultLastPriceProtectedBand)
        : 0,
      maxUnsettledMarkets: isSet(object.maxUnsettledMarkets) ? Number(object.maxUnsettledMarkets) : 0,
      defaultTradingBandwidth: isSet(object.defaultTradingBandwidth) ? Number(object.defaultTradingBandwidth) : 0,
      fundingRateBand: isSet(object.fundingRateBand) ? String(object.fundingRateBand) : "",
      defaultLpSpotTakerFee: isSet(object.defaultLpSpotTakerFee) ? String(object.defaultLpSpotTakerFee) : "",
      defaultLpSpotMakerFee: isSet(object.defaultLpSpotMakerFee) ? String(object.defaultLpSpotMakerFee) : "",
      defaultLpFuturesTakerFee: isSet(object.defaultLpFuturesTakerFee) ? String(object.defaultLpFuturesTakerFee) : "",
      defaultLpFuturesMakerFee: isSet(object.defaultLpFuturesMakerFee) ? String(object.defaultLpFuturesMakerFee) : "",
      defaultMaxOpenInterestUsd: isSet(object.defaultMaxOpenInterestUsd)
        ? String(object.defaultMaxOpenInterestUsd)
        : "",
      defaultStaleIndexPriceAllowance: isSet(object.defaultStaleIndexPriceAllowance)
        ? Duration.fromJSON(object.defaultStaleIndexPriceAllowance)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.defaultLotSizeUsd !== undefined && (obj.defaultLotSizeUsd = message.defaultLotSizeUsd);
    message.defaultTickSizeUsd !== undefined && (obj.defaultTickSizeUsd = message.defaultTickSizeUsd);
    message.defaultMinQuantityUsd !== undefined && (obj.defaultMinQuantityUsd = message.defaultMinQuantityUsd);
    message.defaultSpotMakerFee !== undefined && (obj.defaultSpotMakerFee = message.defaultSpotMakerFee);
    message.defaultSpotTakerFee !== undefined && (obj.defaultSpotTakerFee = message.defaultSpotTakerFee);
    message.defaultFuturesMakerFee !== undefined && (obj.defaultFuturesMakerFee = message.defaultFuturesMakerFee);
    message.defaultFuturesTakerFee !== undefined && (obj.defaultFuturesTakerFee = message.defaultFuturesTakerFee);
    message.defaultRiskStepSizeUsd !== undefined && (obj.defaultRiskStepSizeUsd = message.defaultRiskStepSizeUsd);
    message.defaultInitialMarginBase !== undefined && (obj.defaultInitialMarginBase = message.defaultInitialMarginBase);
    message.defaultInitialMarginStep !== undefined && (obj.defaultInitialMarginStep = message.defaultInitialMarginStep);
    message.defaultMaintenanceMarginRatio !== undefined &&
      (obj.defaultMaintenanceMarginRatio = message.defaultMaintenanceMarginRatio);
    message.defaultMaxLiquidationOrderTicketUsd !== undefined &&
      (obj.defaultMaxLiquidationOrderTicketUsd = message.defaultMaxLiquidationOrderTicketUsd);
    message.defaultMaxLiquidationOrderDuration !== undefined &&
      (obj.defaultMaxLiquidationOrderDuration = message.defaultMaxLiquidationOrderDuration
        ? Duration.toJSON(message.defaultMaxLiquidationOrderDuration)
        : undefined);
    message.defaultImpactSizeUsd !== undefined && (obj.defaultImpactSizeUsd = message.defaultImpactSizeUsd);
    message.defaultMarkPriceBand !== undefined && (obj.defaultMarkPriceBand = Math.round(message.defaultMarkPriceBand));
    message.defaultLastPriceProtectedBand !== undefined &&
      (obj.defaultLastPriceProtectedBand = Math.round(message.defaultLastPriceProtectedBand));
    message.maxUnsettledMarkets !== undefined && (obj.maxUnsettledMarkets = Math.round(message.maxUnsettledMarkets));
    message.defaultTradingBandwidth !== undefined &&
      (obj.defaultTradingBandwidth = Math.round(message.defaultTradingBandwidth));
    message.fundingRateBand !== undefined && (obj.fundingRateBand = message.fundingRateBand);
    message.defaultLpSpotTakerFee !== undefined && (obj.defaultLpSpotTakerFee = message.defaultLpSpotTakerFee);
    message.defaultLpSpotMakerFee !== undefined && (obj.defaultLpSpotMakerFee = message.defaultLpSpotMakerFee);
    message.defaultLpFuturesTakerFee !== undefined && (obj.defaultLpFuturesTakerFee = message.defaultLpFuturesTakerFee);
    message.defaultLpFuturesMakerFee !== undefined && (obj.defaultLpFuturesMakerFee = message.defaultLpFuturesMakerFee);
    message.defaultMaxOpenInterestUsd !== undefined &&
      (obj.defaultMaxOpenInterestUsd = message.defaultMaxOpenInterestUsd);
    message.defaultStaleIndexPriceAllowance !== undefined &&
      (obj.defaultStaleIndexPriceAllowance = message.defaultStaleIndexPriceAllowance
        ? Duration.toJSON(message.defaultStaleIndexPriceAllowance)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
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
    message.defaultMaintenanceMarginRatio = object.defaultMaintenanceMarginRatio ?? "";
    message.defaultMaxLiquidationOrderTicketUsd = object.defaultMaxLiquidationOrderTicketUsd ?? "";
    message.defaultMaxLiquidationOrderDuration =
      (object.defaultMaxLiquidationOrderDuration !== undefined && object.defaultMaxLiquidationOrderDuration !== null)
        ? Duration.fromPartial(object.defaultMaxLiquidationOrderDuration)
        : undefined;
    message.defaultImpactSizeUsd = object.defaultImpactSizeUsd ?? "";
    message.defaultMarkPriceBand = object.defaultMarkPriceBand ?? 0;
    message.defaultLastPriceProtectedBand = object.defaultLastPriceProtectedBand ?? 0;
    message.maxUnsettledMarkets = object.maxUnsettledMarkets ?? 0;
    message.defaultTradingBandwidth = object.defaultTradingBandwidth ?? 0;
    message.fundingRateBand = object.fundingRateBand ?? "";
    message.defaultLpSpotTakerFee = object.defaultLpSpotTakerFee ?? "";
    message.defaultLpSpotMakerFee = object.defaultLpSpotMakerFee ?? "";
    message.defaultLpFuturesTakerFee = object.defaultLpFuturesTakerFee ?? "";
    message.defaultLpFuturesMakerFee = object.defaultLpFuturesMakerFee ?? "";
    message.defaultMaxOpenInterestUsd = object.defaultMaxOpenInterestUsd ?? "";
    message.defaultStaleIndexPriceAllowance =
      (object.defaultStaleIndexPriceAllowance !== undefined && object.defaultStaleIndexPriceAllowance !== null)
        ? Duration.fromPartial(object.defaultStaleIndexPriceAllowance)
        : undefined;
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return {
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
    defaultMaxLiquidationOrderDuration: undefined,
    defaultImpactSizeUsd: "",
    defaultMarkPriceBand: undefined,
    defaultLastPriceProtectedBand: undefined,
    maxUnsettledMarkets: undefined,
    defaultTradingBandwidth: undefined,
    fundingRateBand: "",
    defaultLpSpotTakerFee: "",
    defaultLpSpotMakerFee: "",
    defaultLpFuturesTakerFee: "",
    defaultLpFuturesMakerFee: "",
    defaultMaxOpenInterestUsd: "",
    defaultStaleIndexPriceAllowance: undefined,
  };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Duration.encode(message.defaultMaxLiquidationOrderDuration, writer.uint32(106).fork()).ldelim();
    }
    if (message.defaultImpactSizeUsd !== "") {
      writer.uint32(114).string(message.defaultImpactSizeUsd);
    }
    if (message.defaultMarkPriceBand !== undefined) {
      UInt32Value.encode({ value: message.defaultMarkPriceBand! }, writer.uint32(122).fork()).ldelim();
    }
    if (message.defaultLastPriceProtectedBand !== undefined) {
      UInt32Value.encode({ value: message.defaultLastPriceProtectedBand! }, writer.uint32(130).fork()).ldelim();
    }
    if (message.maxUnsettledMarkets !== undefined) {
      UInt32Value.encode({ value: message.maxUnsettledMarkets! }, writer.uint32(138).fork()).ldelim();
    }
    if (message.defaultTradingBandwidth !== undefined) {
      UInt32Value.encode({ value: message.defaultTradingBandwidth! }, writer.uint32(146).fork()).ldelim();
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
    if (message.defaultStaleIndexPriceAllowance !== undefined) {
      Duration.encode(message.defaultStaleIndexPriceAllowance, writer.uint32(202).fork()).ldelim();
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

          message.defaultLotSizeUsd = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.defaultTickSizeUsd = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultMinQuantityUsd = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.defaultSpotMakerFee = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.defaultSpotTakerFee = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.defaultFuturesMakerFee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.defaultFuturesTakerFee = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.defaultRiskStepSizeUsd = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.defaultInitialMarginBase = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.defaultInitialMarginStep = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.defaultMaintenanceMarginRatio = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.defaultMaxLiquidationOrderTicketUsd = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.defaultMaxLiquidationOrderDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.defaultImpactSizeUsd = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.defaultMarkPriceBand = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.defaultLastPriceProtectedBand = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.maxUnsettledMarkets = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.defaultTradingBandwidth = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.fundingRateBand = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.defaultLpSpotTakerFee = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.defaultLpSpotMakerFee = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.defaultLpFuturesTakerFee = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.defaultLpFuturesMakerFee = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.defaultMaxOpenInterestUsd = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.defaultStaleIndexPriceAllowance = Duration.decode(reader, reader.uint32());
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
      defaultLotSizeUsd: isSet(object.defaultLotSizeUsd) ? String(object.defaultLotSizeUsd) : "",
      defaultTickSizeUsd: isSet(object.defaultTickSizeUsd) ? String(object.defaultTickSizeUsd) : "",
      defaultMinQuantityUsd: isSet(object.defaultMinQuantityUsd) ? String(object.defaultMinQuantityUsd) : "",
      defaultSpotMakerFee: isSet(object.defaultSpotMakerFee) ? String(object.defaultSpotMakerFee) : "",
      defaultSpotTakerFee: isSet(object.defaultSpotTakerFee) ? String(object.defaultSpotTakerFee) : "",
      defaultFuturesMakerFee: isSet(object.defaultFuturesMakerFee) ? String(object.defaultFuturesMakerFee) : "",
      defaultFuturesTakerFee: isSet(object.defaultFuturesTakerFee) ? String(object.defaultFuturesTakerFee) : "",
      defaultRiskStepSizeUsd: isSet(object.defaultRiskStepSizeUsd) ? String(object.defaultRiskStepSizeUsd) : "",
      defaultInitialMarginBase: isSet(object.defaultInitialMarginBase) ? String(object.defaultInitialMarginBase) : "",
      defaultInitialMarginStep: isSet(object.defaultInitialMarginStep) ? String(object.defaultInitialMarginStep) : "",
      defaultMaintenanceMarginRatio: isSet(object.defaultMaintenanceMarginRatio)
        ? String(object.defaultMaintenanceMarginRatio)
        : "",
      defaultMaxLiquidationOrderTicketUsd: isSet(object.defaultMaxLiquidationOrderTicketUsd)
        ? String(object.defaultMaxLiquidationOrderTicketUsd)
        : "",
      defaultMaxLiquidationOrderDuration: isSet(object.defaultMaxLiquidationOrderDuration)
        ? Duration.fromJSON(object.defaultMaxLiquidationOrderDuration)
        : undefined,
      defaultImpactSizeUsd: isSet(object.defaultImpactSizeUsd) ? String(object.defaultImpactSizeUsd) : "",
      defaultMarkPriceBand: isSet(object.defaultMarkPriceBand) ? Number(object.defaultMarkPriceBand) : undefined,
      defaultLastPriceProtectedBand: isSet(object.defaultLastPriceProtectedBand)
        ? Number(object.defaultLastPriceProtectedBand)
        : undefined,
      maxUnsettledMarkets: isSet(object.maxUnsettledMarkets) ? Number(object.maxUnsettledMarkets) : undefined,
      defaultTradingBandwidth: isSet(object.defaultTradingBandwidth)
        ? Number(object.defaultTradingBandwidth)
        : undefined,
      fundingRateBand: isSet(object.fundingRateBand) ? String(object.fundingRateBand) : "",
      defaultLpSpotTakerFee: isSet(object.defaultLpSpotTakerFee) ? String(object.defaultLpSpotTakerFee) : "",
      defaultLpSpotMakerFee: isSet(object.defaultLpSpotMakerFee) ? String(object.defaultLpSpotMakerFee) : "",
      defaultLpFuturesTakerFee: isSet(object.defaultLpFuturesTakerFee) ? String(object.defaultLpFuturesTakerFee) : "",
      defaultLpFuturesMakerFee: isSet(object.defaultLpFuturesMakerFee) ? String(object.defaultLpFuturesMakerFee) : "",
      defaultMaxOpenInterestUsd: isSet(object.defaultMaxOpenInterestUsd)
        ? String(object.defaultMaxOpenInterestUsd)
        : "",
      defaultStaleIndexPriceAllowance: isSet(object.defaultStaleIndexPriceAllowance)
        ? Duration.fromJSON(object.defaultStaleIndexPriceAllowance)
        : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.defaultLotSizeUsd !== undefined && (obj.defaultLotSizeUsd = message.defaultLotSizeUsd);
    message.defaultTickSizeUsd !== undefined && (obj.defaultTickSizeUsd = message.defaultTickSizeUsd);
    message.defaultMinQuantityUsd !== undefined && (obj.defaultMinQuantityUsd = message.defaultMinQuantityUsd);
    message.defaultSpotMakerFee !== undefined && (obj.defaultSpotMakerFee = message.defaultSpotMakerFee);
    message.defaultSpotTakerFee !== undefined && (obj.defaultSpotTakerFee = message.defaultSpotTakerFee);
    message.defaultFuturesMakerFee !== undefined && (obj.defaultFuturesMakerFee = message.defaultFuturesMakerFee);
    message.defaultFuturesTakerFee !== undefined && (obj.defaultFuturesTakerFee = message.defaultFuturesTakerFee);
    message.defaultRiskStepSizeUsd !== undefined && (obj.defaultRiskStepSizeUsd = message.defaultRiskStepSizeUsd);
    message.defaultInitialMarginBase !== undefined && (obj.defaultInitialMarginBase = message.defaultInitialMarginBase);
    message.defaultInitialMarginStep !== undefined && (obj.defaultInitialMarginStep = message.defaultInitialMarginStep);
    message.defaultMaintenanceMarginRatio !== undefined &&
      (obj.defaultMaintenanceMarginRatio = message.defaultMaintenanceMarginRatio);
    message.defaultMaxLiquidationOrderTicketUsd !== undefined &&
      (obj.defaultMaxLiquidationOrderTicketUsd = message.defaultMaxLiquidationOrderTicketUsd);
    message.defaultMaxLiquidationOrderDuration !== undefined &&
      (obj.defaultMaxLiquidationOrderDuration = message.defaultMaxLiquidationOrderDuration
        ? Duration.toJSON(message.defaultMaxLiquidationOrderDuration)
        : undefined);
    message.defaultImpactSizeUsd !== undefined && (obj.defaultImpactSizeUsd = message.defaultImpactSizeUsd);
    message.defaultMarkPriceBand !== undefined && (obj.defaultMarkPriceBand = message.defaultMarkPriceBand);
    message.defaultLastPriceProtectedBand !== undefined &&
      (obj.defaultLastPriceProtectedBand = message.defaultLastPriceProtectedBand);
    message.maxUnsettledMarkets !== undefined && (obj.maxUnsettledMarkets = message.maxUnsettledMarkets);
    message.defaultTradingBandwidth !== undefined && (obj.defaultTradingBandwidth = message.defaultTradingBandwidth);
    message.fundingRateBand !== undefined && (obj.fundingRateBand = message.fundingRateBand);
    message.defaultLpSpotTakerFee !== undefined && (obj.defaultLpSpotTakerFee = message.defaultLpSpotTakerFee);
    message.defaultLpSpotMakerFee !== undefined && (obj.defaultLpSpotMakerFee = message.defaultLpSpotMakerFee);
    message.defaultLpFuturesTakerFee !== undefined && (obj.defaultLpFuturesTakerFee = message.defaultLpFuturesTakerFee);
    message.defaultLpFuturesMakerFee !== undefined && (obj.defaultLpFuturesMakerFee = message.defaultLpFuturesMakerFee);
    message.defaultMaxOpenInterestUsd !== undefined &&
      (obj.defaultMaxOpenInterestUsd = message.defaultMaxOpenInterestUsd);
    message.defaultStaleIndexPriceAllowance !== undefined &&
      (obj.defaultStaleIndexPriceAllowance = message.defaultStaleIndexPriceAllowance
        ? Duration.toJSON(message.defaultStaleIndexPriceAllowance)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
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
    message.defaultMaintenanceMarginRatio = object.defaultMaintenanceMarginRatio ?? "";
    message.defaultMaxLiquidationOrderTicketUsd = object.defaultMaxLiquidationOrderTicketUsd ?? "";
    message.defaultMaxLiquidationOrderDuration =
      (object.defaultMaxLiquidationOrderDuration !== undefined && object.defaultMaxLiquidationOrderDuration !== null)
        ? Duration.fromPartial(object.defaultMaxLiquidationOrderDuration)
        : undefined;
    message.defaultImpactSizeUsd = object.defaultImpactSizeUsd ?? "";
    message.defaultMarkPriceBand = object.defaultMarkPriceBand ?? undefined;
    message.defaultLastPriceProtectedBand = object.defaultLastPriceProtectedBand ?? undefined;
    message.maxUnsettledMarkets = object.maxUnsettledMarkets ?? undefined;
    message.defaultTradingBandwidth = object.defaultTradingBandwidth ?? undefined;
    message.fundingRateBand = object.fundingRateBand ?? "";
    message.defaultLpSpotTakerFee = object.defaultLpSpotTakerFee ?? "";
    message.defaultLpSpotMakerFee = object.defaultLpSpotMakerFee ?? "";
    message.defaultLpFuturesTakerFee = object.defaultLpFuturesTakerFee ?? "";
    message.defaultLpFuturesMakerFee = object.defaultLpFuturesMakerFee ?? "";
    message.defaultMaxOpenInterestUsd = object.defaultMaxOpenInterestUsd ?? "";
    message.defaultStaleIndexPriceAllowance =
      (object.defaultStaleIndexPriceAllowance !== undefined && object.defaultStaleIndexPriceAllowance !== null)
        ? Duration.fromPartial(object.defaultStaleIndexPriceAllowance)
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
