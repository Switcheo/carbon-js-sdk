/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";

export const protobufPackage = "Switcheo.carbon.market";

/** Params defines the parameters for the market module. */
export interface ParamsV270 {
  defaultLotSizeUsd: string;
  defaultTickSizeUsd: string;
  defaultMinQuantityUsd: string;
  defaultSpotMakerFee: string;
  defaultSpotTakerFee: string;
  defaultFuturesMakerFee: string;
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
}

const baseParamsV270: object = {
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
};

export const ParamsV270 = {
  encode(
    message: ParamsV270,
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsV270 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsV270 } as ParamsV270;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamsV270 {
    const message = { ...baseParamsV270 } as ParamsV270;
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
    return message;
  },

  toJSON(message: ParamsV270): unknown {
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
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsV270>): ParamsV270 {
    const message = { ...baseParamsV270 } as ParamsV270;
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
