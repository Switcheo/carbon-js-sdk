/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { RateStrategyParams } from "./rate_strategy_params";
import { AssetParams } from "./asset_params";
import { CreateRewardSchemeParams, UpdateRewardSchemeParams, AddReservesParams } from "./reward_scheme";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface MsgAddRateStrategy {
  creator: string;
  rateStrategyParams?: RateStrategyParams;
}

export interface MsgAddRateStrategyResponse {
  rateStrategyParams?: RateStrategyParams;
}

export interface MsgUpdateRateStrategy {
  creator: string;
  rateStrategyParams?: RateStrategyParams;
}

export interface MsgUpdateRateStrategyResponse {
  rateStrategyParams?: RateStrategyParams;
}

export interface MsgRemoveRateStrategy {
  creator: string;
  name: string;
}

export interface MsgRemoveRateStrategyResponse {
  name: string;
}

export interface MsgAddAsset {
  creator: string;
  assetParams?: AssetParams;
}

export interface MsgAddAssetResponse {
  assetParams?: AssetParams;
}

export interface MsgUpdateAsset {
  creator: string;
  assetParams?: AssetParams;
}

export interface MsgUpdateAssetResponse {
  assetParams?: AssetParams;
}

export interface MsgSupplyAsset {
  creator: string;
  denom: string;
  amount: string;
}

export interface MsgSupplyAssetResponse {}

export interface MsgWithdrawAsset {
  creator: string;
  cdpDenom: string;
  amount: string;
}

export interface MsgWithdrawAssetResponse {}

export interface MsgLockCollateral {
  creator: string;
  cdpDenom: string;
  amount: string;
}

export interface MsgLockCollateralResponse {}

export interface MsgUnlockCollateral {
  creator: string;
  cdpDenom: string;
  amount: string;
}

export interface MsgUnlockCollateralResponse {}

export interface MsgBorrowAsset {
  creator: string;
  denom: string;
  amount: string;
}

export interface MsgBorrowAssetResponse {}

export interface MsgRepayAsset {
  creator: string;
  denom: string;
  amount: string;
}

export interface MsgRepayAssetResponse {}

export interface MsgSupplyAssetAndLockCollateral {
  creator: string;
  denom: string;
  supplyAmount: string;
  lockAmount: string;
}

export interface MsgSupplyAssetAndLockCollateralResponse {}

export interface MsgUnlockCollateralAndWithdrawAsset {
  creator: string;
  cdpDenom: string;
  unlockAmount: string;
  withdrawAmount: string;
}

export interface MsgUnlockCollateralAndWithdrawAssetResponse {}

export interface MsgLiquidateCollateral {
  creator: string;
  debtor: string;
  collateralDenom: string;
  minCollateralAmount: string;
  debtDenom: string;
  debtAmount: string;
}

export interface MsgLiquidateCollateralResponse {}

export interface MsgSetLiquidationFee {
  creator: string;
  liquidationFee: string;
}

export interface MsgSetLiquidationFeeResponse {}

export interface MsgSetInterestFee {
  creator: string;
  interestFee: string;
}

export interface MsgSetInterestFeeResponse {}

export interface MsgRepayAssetWithCdpTokens {
  creator: string;
  debtor: string;
  debtDenom: string;
  cdpDenom: string;
  cdpAmount: string;
}

export interface MsgRepayAssetWithCdpTokensResponse {}

export interface MsgRepayAssetWithCollateral {
  creator: string;
  debtor: string;
  debtDenom: string;
  cdpDenom: string;
  cdpAmount: string;
}

export interface MsgRepayAssetWithCollateralResponse {}

export interface MsgSetStablecoinInterestRate {
  creator: string;
  stablecoinInterestRate: string;
}

export interface MsgSetStablecoinInterestRateResponse {}

export interface MsgMintStablecoin {
  creator: string;
  amount: string;
}

export interface MsgMintStablecoinResponse {}

export interface MsgReturnStablecoin {
  creator: string;
  principalAmount: string;
  interestDenom: string;
  interestAmount: string;
}

export interface MsgReturnStablecoinResponse {}

export interface MsgSetCompleteLiquidationThreshold {
  creator: string;
  completeLiquidationThreshold: string;
}

export interface MsgSetCompleteLiquidationThresholdResponse {}

export interface MsgSetMinimumCloseFactor {
  creator: string;
  minimumCloseFactor: string;
}

export interface MsgSetMinimumCloseFactorResponse {}

export interface MsgSetSmallLiquidationSize {
  creator: string;
  smallLiquidationSize: string;
}

export interface MsgSetSmallLiquidationSizeResponse {}

export interface MsgLiquidateCollateralWithCdpTokens {
  creator: string;
  debtor: string;
  collateralDenom: string;
  minCollateralAmount: string;
  debtDenom: string;
  debtAmount: string;
  debtCollateralDenom: string;
  debtCollateralAmount: string;
}

export interface MsgLiquidateCollateralWithCdpTokensResponse {}

export interface MsgLiquidateCollateralWithCollateral {
  creator: string;
  debtor: string;
  collateralDenom: string;
  minCollateralAmount: string;
  debtDenom: string;
  debtAmount: string;
  debtCollateralDenom: string;
  debtCollateralAmount: string;
}

export interface MsgLiquidateCollateralWithCollateralResponse {}

export interface MsgLiquidateCollateralWithStablecoin {
  creator: string;
  debtor: string;
  collateralDenom: string;
  minCollateralAmount: string;
  debtDenom: string;
  debtAmount: string;
  principalAmount: string;
  interestDenom: string;
  interestAmount: string;
}

export interface MsgLiquidateCollateralWithStablecoinResponse {}

export interface MsgCreateRewardScheme {
  creator: string;
  createRewardSchemeParams?: CreateRewardSchemeParams;
}

export interface MsgCreateRewardSchemeResponse {
  id: Long;
  rewardDenom: string;
  assetDenom: string;
  rewardType: string;
  rewardAmountPerSecond: string;
  startTime?: Date;
  endTime?: Date;
}

export interface MsgUpdateRewardScheme {
  updator: string;
  updateRewardSchemeParams?: UpdateRewardSchemeParams;
}

export interface MsgUpdateRewardSchemeResponse {}

export interface MsgAddRewardReserve {
  creator: string;
  addReservesParams?: AddReservesParams;
}

export interface MsgAddRewardReserveResponse {}

const baseMsgAddRateStrategy: object = { creator: "" };

export const MsgAddRateStrategy = {
  encode(
    message: MsgAddRateStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(
        message.rateStrategyParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRateStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddRateStrategy } as MsgAddRateStrategy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rateStrategyParams = RateStrategyParams.decode(
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

  fromJSON(object: any): MsgAddRateStrategy {
    const message = { ...baseMsgAddRateStrategy } as MsgAddRateStrategy;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgAddRateStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.rateStrategyParams !== undefined &&
      (obj.rateStrategyParams = message.rateStrategyParams
        ? RateStrategyParams.toJSON(message.rateStrategyParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddRateStrategy>): MsgAddRateStrategy {
    const message = { ...baseMsgAddRateStrategy } as MsgAddRateStrategy;
    message.creator = object.creator ?? "";
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromPartial(object.rateStrategyParams)
        : undefined;
    return message;
  },
};

const baseMsgAddRateStrategyResponse: object = {};

export const MsgAddRateStrategyResponse = {
  encode(
    message: MsgAddRateStrategyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(
        message.rateStrategyParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddRateStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddRateStrategyResponse,
    } as MsgAddRateStrategyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateStrategyParams = RateStrategyParams.decode(
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

  fromJSON(object: any): MsgAddRateStrategyResponse {
    const message = {
      ...baseMsgAddRateStrategyResponse,
    } as MsgAddRateStrategyResponse;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgAddRateStrategyResponse): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined &&
      (obj.rateStrategyParams = message.rateStrategyParams
        ? RateStrategyParams.toJSON(message.rateStrategyParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAddRateStrategyResponse>
  ): MsgAddRateStrategyResponse {
    const message = {
      ...baseMsgAddRateStrategyResponse,
    } as MsgAddRateStrategyResponse;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromPartial(object.rateStrategyParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdateRateStrategy: object = { creator: "" };

export const MsgUpdateRateStrategy = {
  encode(
    message: MsgUpdateRateStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(
        message.rateStrategyParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRateStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateRateStrategy } as MsgUpdateRateStrategy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rateStrategyParams = RateStrategyParams.decode(
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

  fromJSON(object: any): MsgUpdateRateStrategy {
    const message = { ...baseMsgUpdateRateStrategy } as MsgUpdateRateStrategy;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateRateStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.rateStrategyParams !== undefined &&
      (obj.rateStrategyParams = message.rateStrategyParams
        ? RateStrategyParams.toJSON(message.rateStrategyParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateRateStrategy>
  ): MsgUpdateRateStrategy {
    const message = { ...baseMsgUpdateRateStrategy } as MsgUpdateRateStrategy;
    message.creator = object.creator ?? "";
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromPartial(object.rateStrategyParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdateRateStrategyResponse: object = {};

export const MsgUpdateRateStrategyResponse = {
  encode(
    message: MsgUpdateRateStrategyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(
        message.rateStrategyParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRateStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRateStrategyResponse,
    } as MsgUpdateRateStrategyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateStrategyParams = RateStrategyParams.decode(
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

  fromJSON(object: any): MsgUpdateRateStrategyResponse {
    const message = {
      ...baseMsgUpdateRateStrategyResponse,
    } as MsgUpdateRateStrategyResponse;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateRateStrategyResponse): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined &&
      (obj.rateStrategyParams = message.rateStrategyParams
        ? RateStrategyParams.toJSON(message.rateStrategyParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateRateStrategyResponse>
  ): MsgUpdateRateStrategyResponse {
    const message = {
      ...baseMsgUpdateRateStrategyResponse,
    } as MsgUpdateRateStrategyResponse;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromPartial(object.rateStrategyParams)
        : undefined;
    return message;
  },
};

const baseMsgRemoveRateStrategy: object = { creator: "", name: "" };

export const MsgRemoveRateStrategy = {
  encode(
    message: MsgRemoveRateStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveRateStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveRateStrategy } as MsgRemoveRateStrategy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveRateStrategy {
    const message = { ...baseMsgRemoveRateStrategy } as MsgRemoveRateStrategy;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveRateStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveRateStrategy>
  ): MsgRemoveRateStrategy {
    const message = { ...baseMsgRemoveRateStrategy } as MsgRemoveRateStrategy;
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

const baseMsgRemoveRateStrategyResponse: object = { name: "" };

export const MsgRemoveRateStrategyResponse = {
  encode(
    message: MsgRemoveRateStrategyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveRateStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveRateStrategyResponse,
    } as MsgRemoveRateStrategyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveRateStrategyResponse {
    const message = {
      ...baseMsgRemoveRateStrategyResponse,
    } as MsgRemoveRateStrategyResponse;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveRateStrategyResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveRateStrategyResponse>
  ): MsgRemoveRateStrategyResponse {
    const message = {
      ...baseMsgRemoveRateStrategyResponse,
    } as MsgRemoveRateStrategyResponse;
    message.name = object.name ?? "";
    return message;
  },
};

const baseMsgAddAsset: object = { creator: "" };

export const MsgAddAsset = {
  encode(
    message: MsgAddAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.assetParams !== undefined) {
      AssetParams.encode(
        message.assetParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAsset } as MsgAddAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.assetParams = AssetParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAsset {
    const message = { ...baseMsgAddAsset } as MsgAddAsset;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromJSON(object.assetParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgAddAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams
        ? AssetParams.toJSON(message.assetParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddAsset>): MsgAddAsset {
    const message = { ...baseMsgAddAsset } as MsgAddAsset;
    message.creator = object.creator ?? "";
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromPartial(object.assetParams)
        : undefined;
    return message;
  },
};

const baseMsgAddAssetResponse: object = {};

export const MsgAddAssetResponse = {
  encode(
    message: MsgAddAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParams.encode(
        message.assetParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAssetResponse } as MsgAddAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetParams = AssetParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAssetResponse {
    const message = { ...baseMsgAddAssetResponse } as MsgAddAssetResponse;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromJSON(object.assetParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgAddAssetResponse): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams
        ? AssetParams.toJSON(message.assetParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddAssetResponse>): MsgAddAssetResponse {
    const message = { ...baseMsgAddAssetResponse } as MsgAddAssetResponse;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromPartial(object.assetParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdateAsset: object = { creator: "" };

export const MsgUpdateAsset = {
  encode(
    message: MsgUpdateAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.assetParams !== undefined) {
      AssetParams.encode(
        message.assetParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAsset } as MsgUpdateAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.assetParams = AssetParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAsset {
    const message = { ...baseMsgUpdateAsset } as MsgUpdateAsset;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromJSON(object.assetParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams
        ? AssetParams.toJSON(message.assetParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAsset>): MsgUpdateAsset {
    const message = { ...baseMsgUpdateAsset } as MsgUpdateAsset;
    message.creator = object.creator ?? "";
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromPartial(object.assetParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdateAssetResponse: object = {};

export const MsgUpdateAssetResponse = {
  encode(
    message: MsgUpdateAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParams.encode(
        message.assetParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAssetResponse } as MsgUpdateAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetParams = AssetParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAssetResponse {
    const message = { ...baseMsgUpdateAssetResponse } as MsgUpdateAssetResponse;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromJSON(object.assetParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateAssetResponse): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams
        ? AssetParams.toJSON(message.assetParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateAssetResponse>
  ): MsgUpdateAssetResponse {
    const message = { ...baseMsgUpdateAssetResponse } as MsgUpdateAssetResponse;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromPartial(object.assetParams)
        : undefined;
    return message;
  },
};

const baseMsgSupplyAsset: object = { creator: "", denom: "", amount: "" };

export const MsgSupplyAsset = {
  encode(
    message: MsgSupplyAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSupplyAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSupplyAsset } as MsgSupplyAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSupplyAsset {
    const message = { ...baseMsgSupplyAsset } as MsgSupplyAsset;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: MsgSupplyAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSupplyAsset>): MsgSupplyAsset {
    const message = { ...baseMsgSupplyAsset } as MsgSupplyAsset;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgSupplyAssetResponse: object = {};

export const MsgSupplyAssetResponse = {
  encode(
    _: MsgSupplyAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSupplyAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSupplyAssetResponse } as MsgSupplyAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSupplyAssetResponse {
    const message = { ...baseMsgSupplyAssetResponse } as MsgSupplyAssetResponse;
    return message;
  },

  toJSON(_: MsgSupplyAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSupplyAssetResponse>): MsgSupplyAssetResponse {
    const message = { ...baseMsgSupplyAssetResponse } as MsgSupplyAssetResponse;
    return message;
  },
};

const baseMsgWithdrawAsset: object = { creator: "", cdpDenom: "", amount: "" };

export const MsgWithdrawAsset = {
  encode(
    message: MsgWithdrawAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cdpDenom !== "") {
      writer.uint32(18).string(message.cdpDenom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawAsset } as MsgWithdrawAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cdpDenom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawAsset {
    const message = { ...baseMsgWithdrawAsset } as MsgWithdrawAsset;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: MsgWithdrawAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawAsset>): MsgWithdrawAsset {
    const message = { ...baseMsgWithdrawAsset } as MsgWithdrawAsset;
    message.creator = object.creator ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgWithdrawAssetResponse: object = {};

export const MsgWithdrawAssetResponse = {
  encode(
    _: MsgWithdrawAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawAssetResponse,
    } as MsgWithdrawAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawAssetResponse {
    const message = {
      ...baseMsgWithdrawAssetResponse,
    } as MsgWithdrawAssetResponse;
    return message;
  },

  toJSON(_: MsgWithdrawAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawAssetResponse>
  ): MsgWithdrawAssetResponse {
    const message = {
      ...baseMsgWithdrawAssetResponse,
    } as MsgWithdrawAssetResponse;
    return message;
  },
};

const baseMsgLockCollateral: object = { creator: "", cdpDenom: "", amount: "" };

export const MsgLockCollateral = {
  encode(
    message: MsgLockCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cdpDenom !== "") {
      writer.uint32(18).string(message.cdpDenom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLockCollateral } as MsgLockCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cdpDenom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLockCollateral {
    const message = { ...baseMsgLockCollateral } as MsgLockCollateral;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: MsgLockCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLockCollateral>): MsgLockCollateral {
    const message = { ...baseMsgLockCollateral } as MsgLockCollateral;
    message.creator = object.creator ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgLockCollateralResponse: object = {};

export const MsgLockCollateralResponse = {
  encode(
    _: MsgLockCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLockCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLockCollateralResponse,
    } as MsgLockCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLockCollateralResponse {
    const message = {
      ...baseMsgLockCollateralResponse,
    } as MsgLockCollateralResponse;
    return message;
  },

  toJSON(_: MsgLockCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLockCollateralResponse>
  ): MsgLockCollateralResponse {
    const message = {
      ...baseMsgLockCollateralResponse,
    } as MsgLockCollateralResponse;
    return message;
  },
};

const baseMsgUnlockCollateral: object = {
  creator: "",
  cdpDenom: "",
  amount: "",
};

export const MsgUnlockCollateral = {
  encode(
    message: MsgUnlockCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cdpDenom !== "") {
      writer.uint32(18).string(message.cdpDenom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlockCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnlockCollateral } as MsgUnlockCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cdpDenom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnlockCollateral {
    const message = { ...baseMsgUnlockCollateral } as MsgUnlockCollateral;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: MsgUnlockCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnlockCollateral>): MsgUnlockCollateral {
    const message = { ...baseMsgUnlockCollateral } as MsgUnlockCollateral;
    message.creator = object.creator ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgUnlockCollateralResponse: object = {};

export const MsgUnlockCollateralResponse = {
  encode(
    _: MsgUnlockCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnlockCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUnlockCollateralResponse,
    } as MsgUnlockCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnlockCollateralResponse {
    const message = {
      ...baseMsgUnlockCollateralResponse,
    } as MsgUnlockCollateralResponse;
    return message;
  },

  toJSON(_: MsgUnlockCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUnlockCollateralResponse>
  ): MsgUnlockCollateralResponse {
    const message = {
      ...baseMsgUnlockCollateralResponse,
    } as MsgUnlockCollateralResponse;
    return message;
  },
};

const baseMsgBorrowAsset: object = { creator: "", denom: "", amount: "" };

export const MsgBorrowAsset = {
  encode(
    message: MsgBorrowAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBorrowAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBorrowAsset } as MsgBorrowAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBorrowAsset {
    const message = { ...baseMsgBorrowAsset } as MsgBorrowAsset;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: MsgBorrowAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBorrowAsset>): MsgBorrowAsset {
    const message = { ...baseMsgBorrowAsset } as MsgBorrowAsset;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgBorrowAssetResponse: object = {};

export const MsgBorrowAssetResponse = {
  encode(
    _: MsgBorrowAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBorrowAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBorrowAssetResponse } as MsgBorrowAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBorrowAssetResponse {
    const message = { ...baseMsgBorrowAssetResponse } as MsgBorrowAssetResponse;
    return message;
  },

  toJSON(_: MsgBorrowAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBorrowAssetResponse>): MsgBorrowAssetResponse {
    const message = { ...baseMsgBorrowAssetResponse } as MsgBorrowAssetResponse;
    return message;
  },
};

const baseMsgRepayAsset: object = { creator: "", denom: "", amount: "" };

export const MsgRepayAsset = {
  encode(
    message: MsgRepayAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRepayAsset } as MsgRepayAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepayAsset {
    const message = { ...baseMsgRepayAsset } as MsgRepayAsset;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: MsgRepayAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRepayAsset>): MsgRepayAsset {
    const message = { ...baseMsgRepayAsset } as MsgRepayAsset;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgRepayAssetResponse: object = {};

export const MsgRepayAssetResponse = {
  encode(
    _: MsgRepayAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRepayAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRepayAssetResponse } as MsgRepayAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRepayAssetResponse {
    const message = { ...baseMsgRepayAssetResponse } as MsgRepayAssetResponse;
    return message;
  },

  toJSON(_: MsgRepayAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRepayAssetResponse>): MsgRepayAssetResponse {
    const message = { ...baseMsgRepayAssetResponse } as MsgRepayAssetResponse;
    return message;
  },
};

const baseMsgSupplyAssetAndLockCollateral: object = {
  creator: "",
  denom: "",
  supplyAmount: "",
  lockAmount: "",
};

export const MsgSupplyAssetAndLockCollateral = {
  encode(
    message: MsgSupplyAssetAndLockCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.supplyAmount !== "") {
      writer.uint32(26).string(message.supplyAmount);
    }
    if (message.lockAmount !== "") {
      writer.uint32(34).string(message.lockAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSupplyAssetAndLockCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSupplyAssetAndLockCollateral,
    } as MsgSupplyAssetAndLockCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.supplyAmount = reader.string();
          break;
        case 4:
          message.lockAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSupplyAssetAndLockCollateral {
    const message = {
      ...baseMsgSupplyAssetAndLockCollateral,
    } as MsgSupplyAssetAndLockCollateral;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.supplyAmount =
      object.supplyAmount !== undefined && object.supplyAmount !== null
        ? String(object.supplyAmount)
        : "";
    message.lockAmount =
      object.lockAmount !== undefined && object.lockAmount !== null
        ? String(object.lockAmount)
        : "";
    return message;
  },

  toJSON(message: MsgSupplyAssetAndLockCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.supplyAmount !== undefined &&
      (obj.supplyAmount = message.supplyAmount);
    message.lockAmount !== undefined && (obj.lockAmount = message.lockAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSupplyAssetAndLockCollateral>
  ): MsgSupplyAssetAndLockCollateral {
    const message = {
      ...baseMsgSupplyAssetAndLockCollateral,
    } as MsgSupplyAssetAndLockCollateral;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.supplyAmount = object.supplyAmount ?? "";
    message.lockAmount = object.lockAmount ?? "";
    return message;
  },
};

const baseMsgSupplyAssetAndLockCollateralResponse: object = {};

export const MsgSupplyAssetAndLockCollateralResponse = {
  encode(
    _: MsgSupplyAssetAndLockCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSupplyAssetAndLockCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSupplyAssetAndLockCollateralResponse,
    } as MsgSupplyAssetAndLockCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSupplyAssetAndLockCollateralResponse {
    const message = {
      ...baseMsgSupplyAssetAndLockCollateralResponse,
    } as MsgSupplyAssetAndLockCollateralResponse;
    return message;
  },

  toJSON(_: MsgSupplyAssetAndLockCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSupplyAssetAndLockCollateralResponse>
  ): MsgSupplyAssetAndLockCollateralResponse {
    const message = {
      ...baseMsgSupplyAssetAndLockCollateralResponse,
    } as MsgSupplyAssetAndLockCollateralResponse;
    return message;
  },
};

const baseMsgUnlockCollateralAndWithdrawAsset: object = {
  creator: "",
  cdpDenom: "",
  unlockAmount: "",
  withdrawAmount: "",
};

export const MsgUnlockCollateralAndWithdrawAsset = {
  encode(
    message: MsgUnlockCollateralAndWithdrawAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cdpDenom !== "") {
      writer.uint32(18).string(message.cdpDenom);
    }
    if (message.unlockAmount !== "") {
      writer.uint32(26).string(message.unlockAmount);
    }
    if (message.withdrawAmount !== "") {
      writer.uint32(34).string(message.withdrawAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnlockCollateralAndWithdrawAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUnlockCollateralAndWithdrawAsset,
    } as MsgUnlockCollateralAndWithdrawAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cdpDenom = reader.string();
          break;
        case 3:
          message.unlockAmount = reader.string();
          break;
        case 4:
          message.withdrawAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnlockCollateralAndWithdrawAsset {
    const message = {
      ...baseMsgUnlockCollateralAndWithdrawAsset,
    } as MsgUnlockCollateralAndWithdrawAsset;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
        : "";
    message.unlockAmount =
      object.unlockAmount !== undefined && object.unlockAmount !== null
        ? String(object.unlockAmount)
        : "";
    message.withdrawAmount =
      object.withdrawAmount !== undefined && object.withdrawAmount !== null
        ? String(object.withdrawAmount)
        : "";
    return message;
  },

  toJSON(message: MsgUnlockCollateralAndWithdrawAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.unlockAmount !== undefined &&
      (obj.unlockAmount = message.unlockAmount);
    message.withdrawAmount !== undefined &&
      (obj.withdrawAmount = message.withdrawAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUnlockCollateralAndWithdrawAsset>
  ): MsgUnlockCollateralAndWithdrawAsset {
    const message = {
      ...baseMsgUnlockCollateralAndWithdrawAsset,
    } as MsgUnlockCollateralAndWithdrawAsset;
    message.creator = object.creator ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.unlockAmount = object.unlockAmount ?? "";
    message.withdrawAmount = object.withdrawAmount ?? "";
    return message;
  },
};

const baseMsgUnlockCollateralAndWithdrawAssetResponse: object = {};

export const MsgUnlockCollateralAndWithdrawAssetResponse = {
  encode(
    _: MsgUnlockCollateralAndWithdrawAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnlockCollateralAndWithdrawAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUnlockCollateralAndWithdrawAssetResponse,
    } as MsgUnlockCollateralAndWithdrawAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnlockCollateralAndWithdrawAssetResponse {
    const message = {
      ...baseMsgUnlockCollateralAndWithdrawAssetResponse,
    } as MsgUnlockCollateralAndWithdrawAssetResponse;
    return message;
  },

  toJSON(_: MsgUnlockCollateralAndWithdrawAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUnlockCollateralAndWithdrawAssetResponse>
  ): MsgUnlockCollateralAndWithdrawAssetResponse {
    const message = {
      ...baseMsgUnlockCollateralAndWithdrawAssetResponse,
    } as MsgUnlockCollateralAndWithdrawAssetResponse;
    return message;
  },
};

const baseMsgLiquidateCollateral: object = {
  creator: "",
  debtor: "",
  collateralDenom: "",
  minCollateralAmount: "",
  debtDenom: "",
  debtAmount: "",
};

export const MsgLiquidateCollateral = {
  encode(
    message: MsgLiquidateCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.debtor !== "") {
      writer.uint32(18).string(message.debtor);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(26).string(message.collateralDenom);
    }
    if (message.minCollateralAmount !== "") {
      writer.uint32(34).string(message.minCollateralAmount);
    }
    if (message.debtDenom !== "") {
      writer.uint32(42).string(message.debtDenom);
    }
    if (message.debtAmount !== "") {
      writer.uint32(50).string(message.debtAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidateCollateral } as MsgLiquidateCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.debtor = reader.string();
          break;
        case 3:
          message.collateralDenom = reader.string();
          break;
        case 4:
          message.minCollateralAmount = reader.string();
          break;
        case 5:
          message.debtDenom = reader.string();
          break;
        case 6:
          message.debtAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateral {
    const message = { ...baseMsgLiquidateCollateral } as MsgLiquidateCollateral;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.collateralDenom =
      object.collateralDenom !== undefined && object.collateralDenom !== null
        ? String(object.collateralDenom)
        : "";
    message.minCollateralAmount =
      object.minCollateralAmount !== undefined &&
      object.minCollateralAmount !== null
        ? String(object.minCollateralAmount)
        : "";
    message.debtDenom =
      object.debtDenom !== undefined && object.debtDenom !== null
        ? String(object.debtDenom)
        : "";
    message.debtAmount =
      object.debtAmount !== undefined && object.debtAmount !== null
        ? String(object.debtAmount)
        : "";
    return message;
  },

  toJSON(message: MsgLiquidateCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.minCollateralAmount !== undefined &&
      (obj.minCollateralAmount = message.minCollateralAmount);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.debtAmount !== undefined && (obj.debtAmount = message.debtAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLiquidateCollateral>
  ): MsgLiquidateCollateral {
    const message = { ...baseMsgLiquidateCollateral } as MsgLiquidateCollateral;
    message.creator = object.creator ?? "";
    message.debtor = object.debtor ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.minCollateralAmount = object.minCollateralAmount ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.debtAmount = object.debtAmount ?? "";
    return message;
  },
};

const baseMsgLiquidateCollateralResponse: object = {};

export const MsgLiquidateCollateralResponse = {
  encode(
    _: MsgLiquidateCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateCollateralResponse,
    } as MsgLiquidateCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLiquidateCollateralResponse {
    const message = {
      ...baseMsgLiquidateCollateralResponse,
    } as MsgLiquidateCollateralResponse;
    return message;
  },

  toJSON(_: MsgLiquidateCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLiquidateCollateralResponse>
  ): MsgLiquidateCollateralResponse {
    const message = {
      ...baseMsgLiquidateCollateralResponse,
    } as MsgLiquidateCollateralResponse;
    return message;
  },
};

const baseMsgSetLiquidationFee: object = { creator: "", liquidationFee: "" };

export const MsgSetLiquidationFee = {
  encode(
    message: MsgSetLiquidationFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.liquidationFee !== "") {
      writer.uint32(18).string(message.liquidationFee);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetLiquidationFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetLiquidationFee } as MsgSetLiquidationFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.liquidationFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetLiquidationFee {
    const message = { ...baseMsgSetLiquidationFee } as MsgSetLiquidationFee;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.liquidationFee =
      object.liquidationFee !== undefined && object.liquidationFee !== null
        ? String(object.liquidationFee)
        : "";
    return message;
  },

  toJSON(message: MsgSetLiquidationFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.liquidationFee !== undefined &&
      (obj.liquidationFee = message.liquidationFee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetLiquidationFee>): MsgSetLiquidationFee {
    const message = { ...baseMsgSetLiquidationFee } as MsgSetLiquidationFee;
    message.creator = object.creator ?? "";
    message.liquidationFee = object.liquidationFee ?? "";
    return message;
  },
};

const baseMsgSetLiquidationFeeResponse: object = {};

export const MsgSetLiquidationFeeResponse = {
  encode(
    _: MsgSetLiquidationFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetLiquidationFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetLiquidationFeeResponse,
    } as MsgSetLiquidationFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetLiquidationFeeResponse {
    const message = {
      ...baseMsgSetLiquidationFeeResponse,
    } as MsgSetLiquidationFeeResponse;
    return message;
  },

  toJSON(_: MsgSetLiquidationFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetLiquidationFeeResponse>
  ): MsgSetLiquidationFeeResponse {
    const message = {
      ...baseMsgSetLiquidationFeeResponse,
    } as MsgSetLiquidationFeeResponse;
    return message;
  },
};

const baseMsgSetInterestFee: object = { creator: "", interestFee: "" };

export const MsgSetInterestFee = {
  encode(
    message: MsgSetInterestFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.interestFee !== "") {
      writer.uint32(18).string(message.interestFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetInterestFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetInterestFee } as MsgSetInterestFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.interestFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetInterestFee {
    const message = { ...baseMsgSetInterestFee } as MsgSetInterestFee;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.interestFee =
      object.interestFee !== undefined && object.interestFee !== null
        ? String(object.interestFee)
        : "";
    return message;
  },

  toJSON(message: MsgSetInterestFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.interestFee !== undefined &&
      (obj.interestFee = message.interestFee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetInterestFee>): MsgSetInterestFee {
    const message = { ...baseMsgSetInterestFee } as MsgSetInterestFee;
    message.creator = object.creator ?? "";
    message.interestFee = object.interestFee ?? "";
    return message;
  },
};

const baseMsgSetInterestFeeResponse: object = {};

export const MsgSetInterestFeeResponse = {
  encode(
    _: MsgSetInterestFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetInterestFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetInterestFeeResponse,
    } as MsgSetInterestFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetInterestFeeResponse {
    const message = {
      ...baseMsgSetInterestFeeResponse,
    } as MsgSetInterestFeeResponse;
    return message;
  },

  toJSON(_: MsgSetInterestFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetInterestFeeResponse>
  ): MsgSetInterestFeeResponse {
    const message = {
      ...baseMsgSetInterestFeeResponse,
    } as MsgSetInterestFeeResponse;
    return message;
  },
};

const baseMsgRepayAssetWithCdpTokens: object = {
  creator: "",
  debtor: "",
  debtDenom: "",
  cdpDenom: "",
  cdpAmount: "",
};

export const MsgRepayAssetWithCdpTokens = {
  encode(
    message: MsgRepayAssetWithCdpTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.debtor !== "") {
      writer.uint32(18).string(message.debtor);
    }
    if (message.debtDenom !== "") {
      writer.uint32(26).string(message.debtDenom);
    }
    if (message.cdpDenom !== "") {
      writer.uint32(34).string(message.cdpDenom);
    }
    if (message.cdpAmount !== "") {
      writer.uint32(42).string(message.cdpAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRepayAssetWithCdpTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRepayAssetWithCdpTokens,
    } as MsgRepayAssetWithCdpTokens;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.debtor = reader.string();
          break;
        case 3:
          message.debtDenom = reader.string();
          break;
        case 4:
          message.cdpDenom = reader.string();
          break;
        case 5:
          message.cdpAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepayAssetWithCdpTokens {
    const message = {
      ...baseMsgRepayAssetWithCdpTokens,
    } as MsgRepayAssetWithCdpTokens;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.debtDenom =
      object.debtDenom !== undefined && object.debtDenom !== null
        ? String(object.debtDenom)
        : "";
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
        : "";
    message.cdpAmount =
      object.cdpAmount !== undefined && object.cdpAmount !== null
        ? String(object.cdpAmount)
        : "";
    return message;
  },

  toJSON(message: MsgRepayAssetWithCdpTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.cdpAmount !== undefined && (obj.cdpAmount = message.cdpAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRepayAssetWithCdpTokens>
  ): MsgRepayAssetWithCdpTokens {
    const message = {
      ...baseMsgRepayAssetWithCdpTokens,
    } as MsgRepayAssetWithCdpTokens;
    message.creator = object.creator ?? "";
    message.debtor = object.debtor ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.cdpAmount = object.cdpAmount ?? "";
    return message;
  },
};

const baseMsgRepayAssetWithCdpTokensResponse: object = {};

export const MsgRepayAssetWithCdpTokensResponse = {
  encode(
    _: MsgRepayAssetWithCdpTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRepayAssetWithCdpTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRepayAssetWithCdpTokensResponse,
    } as MsgRepayAssetWithCdpTokensResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRepayAssetWithCdpTokensResponse {
    const message = {
      ...baseMsgRepayAssetWithCdpTokensResponse,
    } as MsgRepayAssetWithCdpTokensResponse;
    return message;
  },

  toJSON(_: MsgRepayAssetWithCdpTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRepayAssetWithCdpTokensResponse>
  ): MsgRepayAssetWithCdpTokensResponse {
    const message = {
      ...baseMsgRepayAssetWithCdpTokensResponse,
    } as MsgRepayAssetWithCdpTokensResponse;
    return message;
  },
};

const baseMsgRepayAssetWithCollateral: object = {
  creator: "",
  debtor: "",
  debtDenom: "",
  cdpDenom: "",
  cdpAmount: "",
};

export const MsgRepayAssetWithCollateral = {
  encode(
    message: MsgRepayAssetWithCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.debtor !== "") {
      writer.uint32(18).string(message.debtor);
    }
    if (message.debtDenom !== "") {
      writer.uint32(26).string(message.debtDenom);
    }
    if (message.cdpDenom !== "") {
      writer.uint32(34).string(message.cdpDenom);
    }
    if (message.cdpAmount !== "") {
      writer.uint32(42).string(message.cdpAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRepayAssetWithCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRepayAssetWithCollateral,
    } as MsgRepayAssetWithCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.debtor = reader.string();
          break;
        case 3:
          message.debtDenom = reader.string();
          break;
        case 4:
          message.cdpDenom = reader.string();
          break;
        case 5:
          message.cdpAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepayAssetWithCollateral {
    const message = {
      ...baseMsgRepayAssetWithCollateral,
    } as MsgRepayAssetWithCollateral;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.debtDenom =
      object.debtDenom !== undefined && object.debtDenom !== null
        ? String(object.debtDenom)
        : "";
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
        : "";
    message.cdpAmount =
      object.cdpAmount !== undefined && object.cdpAmount !== null
        ? String(object.cdpAmount)
        : "";
    return message;
  },

  toJSON(message: MsgRepayAssetWithCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.cdpAmount !== undefined && (obj.cdpAmount = message.cdpAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRepayAssetWithCollateral>
  ): MsgRepayAssetWithCollateral {
    const message = {
      ...baseMsgRepayAssetWithCollateral,
    } as MsgRepayAssetWithCollateral;
    message.creator = object.creator ?? "";
    message.debtor = object.debtor ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.cdpAmount = object.cdpAmount ?? "";
    return message;
  },
};

const baseMsgRepayAssetWithCollateralResponse: object = {};

export const MsgRepayAssetWithCollateralResponse = {
  encode(
    _: MsgRepayAssetWithCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRepayAssetWithCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRepayAssetWithCollateralResponse,
    } as MsgRepayAssetWithCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRepayAssetWithCollateralResponse {
    const message = {
      ...baseMsgRepayAssetWithCollateralResponse,
    } as MsgRepayAssetWithCollateralResponse;
    return message;
  },

  toJSON(_: MsgRepayAssetWithCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRepayAssetWithCollateralResponse>
  ): MsgRepayAssetWithCollateralResponse {
    const message = {
      ...baseMsgRepayAssetWithCollateralResponse,
    } as MsgRepayAssetWithCollateralResponse;
    return message;
  },
};

const baseMsgSetStablecoinInterestRate: object = {
  creator: "",
  stablecoinInterestRate: "",
};

export const MsgSetStablecoinInterestRate = {
  encode(
    message: MsgSetStablecoinInterestRate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.stablecoinInterestRate !== "") {
      writer.uint32(18).string(message.stablecoinInterestRate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStablecoinInterestRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStablecoinInterestRate,
    } as MsgSetStablecoinInterestRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.stablecoinInterestRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetStablecoinInterestRate {
    const message = {
      ...baseMsgSetStablecoinInterestRate,
    } as MsgSetStablecoinInterestRate;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stablecoinInterestRate =
      object.stablecoinInterestRate !== undefined &&
      object.stablecoinInterestRate !== null
        ? String(object.stablecoinInterestRate)
        : "";
    return message;
  },

  toJSON(message: MsgSetStablecoinInterestRate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stablecoinInterestRate !== undefined &&
      (obj.stablecoinInterestRate = message.stablecoinInterestRate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetStablecoinInterestRate>
  ): MsgSetStablecoinInterestRate {
    const message = {
      ...baseMsgSetStablecoinInterestRate,
    } as MsgSetStablecoinInterestRate;
    message.creator = object.creator ?? "";
    message.stablecoinInterestRate = object.stablecoinInterestRate ?? "";
    return message;
  },
};

const baseMsgSetStablecoinInterestRateResponse: object = {};

export const MsgSetStablecoinInterestRateResponse = {
  encode(
    _: MsgSetStablecoinInterestRateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStablecoinInterestRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStablecoinInterestRateResponse,
    } as MsgSetStablecoinInterestRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetStablecoinInterestRateResponse {
    const message = {
      ...baseMsgSetStablecoinInterestRateResponse,
    } as MsgSetStablecoinInterestRateResponse;
    return message;
  },

  toJSON(_: MsgSetStablecoinInterestRateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetStablecoinInterestRateResponse>
  ): MsgSetStablecoinInterestRateResponse {
    const message = {
      ...baseMsgSetStablecoinInterestRateResponse,
    } as MsgSetStablecoinInterestRateResponse;
    return message;
  },
};

const baseMsgMintStablecoin: object = { creator: "", amount: "" };

export const MsgMintStablecoin = {
  encode(
    message: MsgMintStablecoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintStablecoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintStablecoin } as MsgMintStablecoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintStablecoin {
    const message = { ...baseMsgMintStablecoin } as MsgMintStablecoin;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: MsgMintStablecoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintStablecoin>): MsgMintStablecoin {
    const message = { ...baseMsgMintStablecoin } as MsgMintStablecoin;
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgMintStablecoinResponse: object = {};

export const MsgMintStablecoinResponse = {
  encode(
    _: MsgMintStablecoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMintStablecoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMintStablecoinResponse,
    } as MsgMintStablecoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMintStablecoinResponse {
    const message = {
      ...baseMsgMintStablecoinResponse,
    } as MsgMintStablecoinResponse;
    return message;
  },

  toJSON(_: MsgMintStablecoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgMintStablecoinResponse>
  ): MsgMintStablecoinResponse {
    const message = {
      ...baseMsgMintStablecoinResponse,
    } as MsgMintStablecoinResponse;
    return message;
  },
};

const baseMsgReturnStablecoin: object = {
  creator: "",
  principalAmount: "",
  interestDenom: "",
  interestAmount: "",
};

export const MsgReturnStablecoin = {
  encode(
    message: MsgReturnStablecoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.principalAmount !== "") {
      writer.uint32(18).string(message.principalAmount);
    }
    if (message.interestDenom !== "") {
      writer.uint32(26).string(message.interestDenom);
    }
    if (message.interestAmount !== "") {
      writer.uint32(34).string(message.interestAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReturnStablecoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReturnStablecoin } as MsgReturnStablecoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.principalAmount = reader.string();
          break;
        case 3:
          message.interestDenom = reader.string();
          break;
        case 4:
          message.interestAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReturnStablecoin {
    const message = { ...baseMsgReturnStablecoin } as MsgReturnStablecoin;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.principalAmount =
      object.principalAmount !== undefined && object.principalAmount !== null
        ? String(object.principalAmount)
        : "";
    message.interestDenom =
      object.interestDenom !== undefined && object.interestDenom !== null
        ? String(object.interestDenom)
        : "";
    message.interestAmount =
      object.interestAmount !== undefined && object.interestAmount !== null
        ? String(object.interestAmount)
        : "";
    return message;
  },

  toJSON(message: MsgReturnStablecoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.principalAmount !== undefined &&
      (obj.principalAmount = message.principalAmount);
    message.interestDenom !== undefined &&
      (obj.interestDenom = message.interestDenom);
    message.interestAmount !== undefined &&
      (obj.interestAmount = message.interestAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReturnStablecoin>): MsgReturnStablecoin {
    const message = { ...baseMsgReturnStablecoin } as MsgReturnStablecoin;
    message.creator = object.creator ?? "";
    message.principalAmount = object.principalAmount ?? "";
    message.interestDenom = object.interestDenom ?? "";
    message.interestAmount = object.interestAmount ?? "";
    return message;
  },
};

const baseMsgReturnStablecoinResponse: object = {};

export const MsgReturnStablecoinResponse = {
  encode(
    _: MsgReturnStablecoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgReturnStablecoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgReturnStablecoinResponse,
    } as MsgReturnStablecoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgReturnStablecoinResponse {
    const message = {
      ...baseMsgReturnStablecoinResponse,
    } as MsgReturnStablecoinResponse;
    return message;
  },

  toJSON(_: MsgReturnStablecoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgReturnStablecoinResponse>
  ): MsgReturnStablecoinResponse {
    const message = {
      ...baseMsgReturnStablecoinResponse,
    } as MsgReturnStablecoinResponse;
    return message;
  },
};

const baseMsgSetCompleteLiquidationThreshold: object = {
  creator: "",
  completeLiquidationThreshold: "",
};

export const MsgSetCompleteLiquidationThreshold = {
  encode(
    message: MsgSetCompleteLiquidationThreshold,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.completeLiquidationThreshold !== "") {
      writer.uint32(34).string(message.completeLiquidationThreshold);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetCompleteLiquidationThreshold {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetCompleteLiquidationThreshold,
    } as MsgSetCompleteLiquidationThreshold;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 4:
          message.completeLiquidationThreshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetCompleteLiquidationThreshold {
    const message = {
      ...baseMsgSetCompleteLiquidationThreshold,
    } as MsgSetCompleteLiquidationThreshold;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.completeLiquidationThreshold =
      object.completeLiquidationThreshold !== undefined &&
      object.completeLiquidationThreshold !== null
        ? String(object.completeLiquidationThreshold)
        : "";
    return message;
  },

  toJSON(message: MsgSetCompleteLiquidationThreshold): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.completeLiquidationThreshold !== undefined &&
      (obj.completeLiquidationThreshold = message.completeLiquidationThreshold);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetCompleteLiquidationThreshold>
  ): MsgSetCompleteLiquidationThreshold {
    const message = {
      ...baseMsgSetCompleteLiquidationThreshold,
    } as MsgSetCompleteLiquidationThreshold;
    message.creator = object.creator ?? "";
    message.completeLiquidationThreshold =
      object.completeLiquidationThreshold ?? "";
    return message;
  },
};

const baseMsgSetCompleteLiquidationThresholdResponse: object = {};

export const MsgSetCompleteLiquidationThresholdResponse = {
  encode(
    _: MsgSetCompleteLiquidationThresholdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetCompleteLiquidationThresholdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetCompleteLiquidationThresholdResponse,
    } as MsgSetCompleteLiquidationThresholdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetCompleteLiquidationThresholdResponse {
    const message = {
      ...baseMsgSetCompleteLiquidationThresholdResponse,
    } as MsgSetCompleteLiquidationThresholdResponse;
    return message;
  },

  toJSON(_: MsgSetCompleteLiquidationThresholdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetCompleteLiquidationThresholdResponse>
  ): MsgSetCompleteLiquidationThresholdResponse {
    const message = {
      ...baseMsgSetCompleteLiquidationThresholdResponse,
    } as MsgSetCompleteLiquidationThresholdResponse;
    return message;
  },
};

const baseMsgSetMinimumCloseFactor: object = {
  creator: "",
  minimumCloseFactor: "",
};

export const MsgSetMinimumCloseFactor = {
  encode(
    message: MsgSetMinimumCloseFactor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.minimumCloseFactor !== "") {
      writer.uint32(42).string(message.minimumCloseFactor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetMinimumCloseFactor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMinimumCloseFactor,
    } as MsgSetMinimumCloseFactor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 5:
          message.minimumCloseFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetMinimumCloseFactor {
    const message = {
      ...baseMsgSetMinimumCloseFactor,
    } as MsgSetMinimumCloseFactor;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.minimumCloseFactor =
      object.minimumCloseFactor !== undefined &&
      object.minimumCloseFactor !== null
        ? String(object.minimumCloseFactor)
        : "";
    return message;
  },

  toJSON(message: MsgSetMinimumCloseFactor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.minimumCloseFactor !== undefined &&
      (obj.minimumCloseFactor = message.minimumCloseFactor);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetMinimumCloseFactor>
  ): MsgSetMinimumCloseFactor {
    const message = {
      ...baseMsgSetMinimumCloseFactor,
    } as MsgSetMinimumCloseFactor;
    message.creator = object.creator ?? "";
    message.minimumCloseFactor = object.minimumCloseFactor ?? "";
    return message;
  },
};

const baseMsgSetMinimumCloseFactorResponse: object = {};

export const MsgSetMinimumCloseFactorResponse = {
  encode(
    _: MsgSetMinimumCloseFactorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetMinimumCloseFactorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMinimumCloseFactorResponse,
    } as MsgSetMinimumCloseFactorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetMinimumCloseFactorResponse {
    const message = {
      ...baseMsgSetMinimumCloseFactorResponse,
    } as MsgSetMinimumCloseFactorResponse;
    return message;
  },

  toJSON(_: MsgSetMinimumCloseFactorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetMinimumCloseFactorResponse>
  ): MsgSetMinimumCloseFactorResponse {
    const message = {
      ...baseMsgSetMinimumCloseFactorResponse,
    } as MsgSetMinimumCloseFactorResponse;
    return message;
  },
};

const baseMsgSetSmallLiquidationSize: object = {
  creator: "",
  smallLiquidationSize: "",
};

export const MsgSetSmallLiquidationSize = {
  encode(
    message: MsgSetSmallLiquidationSize,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.smallLiquidationSize !== "") {
      writer.uint32(50).string(message.smallLiquidationSize);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetSmallLiquidationSize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetSmallLiquidationSize,
    } as MsgSetSmallLiquidationSize;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 6:
          message.smallLiquidationSize = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetSmallLiquidationSize {
    const message = {
      ...baseMsgSetSmallLiquidationSize,
    } as MsgSetSmallLiquidationSize;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.smallLiquidationSize =
      object.smallLiquidationSize !== undefined &&
      object.smallLiquidationSize !== null
        ? String(object.smallLiquidationSize)
        : "";
    return message;
  },

  toJSON(message: MsgSetSmallLiquidationSize): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.smallLiquidationSize !== undefined &&
      (obj.smallLiquidationSize = message.smallLiquidationSize);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetSmallLiquidationSize>
  ): MsgSetSmallLiquidationSize {
    const message = {
      ...baseMsgSetSmallLiquidationSize,
    } as MsgSetSmallLiquidationSize;
    message.creator = object.creator ?? "";
    message.smallLiquidationSize = object.smallLiquidationSize ?? "";
    return message;
  },
};

const baseMsgSetSmallLiquidationSizeResponse: object = {};

export const MsgSetSmallLiquidationSizeResponse = {
  encode(
    _: MsgSetSmallLiquidationSizeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetSmallLiquidationSizeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetSmallLiquidationSizeResponse,
    } as MsgSetSmallLiquidationSizeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetSmallLiquidationSizeResponse {
    const message = {
      ...baseMsgSetSmallLiquidationSizeResponse,
    } as MsgSetSmallLiquidationSizeResponse;
    return message;
  },

  toJSON(_: MsgSetSmallLiquidationSizeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetSmallLiquidationSizeResponse>
  ): MsgSetSmallLiquidationSizeResponse {
    const message = {
      ...baseMsgSetSmallLiquidationSizeResponse,
    } as MsgSetSmallLiquidationSizeResponse;
    return message;
  },
};

const baseMsgLiquidateCollateralWithCdpTokens: object = {
  creator: "",
  debtor: "",
  collateralDenom: "",
  minCollateralAmount: "",
  debtDenom: "",
  debtAmount: "",
  debtCollateralDenom: "",
  debtCollateralAmount: "",
};

export const MsgLiquidateCollateralWithCdpTokens = {
  encode(
    message: MsgLiquidateCollateralWithCdpTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.debtor !== "") {
      writer.uint32(18).string(message.debtor);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(26).string(message.collateralDenom);
    }
    if (message.minCollateralAmount !== "") {
      writer.uint32(34).string(message.minCollateralAmount);
    }
    if (message.debtDenom !== "") {
      writer.uint32(42).string(message.debtDenom);
    }
    if (message.debtAmount !== "") {
      writer.uint32(50).string(message.debtAmount);
    }
    if (message.debtCollateralDenom !== "") {
      writer.uint32(58).string(message.debtCollateralDenom);
    }
    if (message.debtCollateralAmount !== "") {
      writer.uint32(66).string(message.debtCollateralAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCollateralWithCdpTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateCollateralWithCdpTokens,
    } as MsgLiquidateCollateralWithCdpTokens;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.debtor = reader.string();
          break;
        case 3:
          message.collateralDenom = reader.string();
          break;
        case 4:
          message.minCollateralAmount = reader.string();
          break;
        case 5:
          message.debtDenom = reader.string();
          break;
        case 6:
          message.debtAmount = reader.string();
          break;
        case 7:
          message.debtCollateralDenom = reader.string();
          break;
        case 8:
          message.debtCollateralAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateralWithCdpTokens {
    const message = {
      ...baseMsgLiquidateCollateralWithCdpTokens,
    } as MsgLiquidateCollateralWithCdpTokens;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.collateralDenom =
      object.collateralDenom !== undefined && object.collateralDenom !== null
        ? String(object.collateralDenom)
        : "";
    message.minCollateralAmount =
      object.minCollateralAmount !== undefined &&
      object.minCollateralAmount !== null
        ? String(object.minCollateralAmount)
        : "";
    message.debtDenom =
      object.debtDenom !== undefined && object.debtDenom !== null
        ? String(object.debtDenom)
        : "";
    message.debtAmount =
      object.debtAmount !== undefined && object.debtAmount !== null
        ? String(object.debtAmount)
        : "";
    message.debtCollateralDenom =
      object.debtCollateralDenom !== undefined &&
      object.debtCollateralDenom !== null
        ? String(object.debtCollateralDenom)
        : "";
    message.debtCollateralAmount =
      object.debtCollateralAmount !== undefined &&
      object.debtCollateralAmount !== null
        ? String(object.debtCollateralAmount)
        : "";
    return message;
  },

  toJSON(message: MsgLiquidateCollateralWithCdpTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.minCollateralAmount !== undefined &&
      (obj.minCollateralAmount = message.minCollateralAmount);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.debtAmount !== undefined && (obj.debtAmount = message.debtAmount);
    message.debtCollateralDenom !== undefined &&
      (obj.debtCollateralDenom = message.debtCollateralDenom);
    message.debtCollateralAmount !== undefined &&
      (obj.debtCollateralAmount = message.debtCollateralAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLiquidateCollateralWithCdpTokens>
  ): MsgLiquidateCollateralWithCdpTokens {
    const message = {
      ...baseMsgLiquidateCollateralWithCdpTokens,
    } as MsgLiquidateCollateralWithCdpTokens;
    message.creator = object.creator ?? "";
    message.debtor = object.debtor ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.minCollateralAmount = object.minCollateralAmount ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.debtAmount = object.debtAmount ?? "";
    message.debtCollateralDenom = object.debtCollateralDenom ?? "";
    message.debtCollateralAmount = object.debtCollateralAmount ?? "";
    return message;
  },
};

const baseMsgLiquidateCollateralWithCdpTokensResponse: object = {};

export const MsgLiquidateCollateralWithCdpTokensResponse = {
  encode(
    _: MsgLiquidateCollateralWithCdpTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCollateralWithCdpTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateCollateralWithCdpTokensResponse,
    } as MsgLiquidateCollateralWithCdpTokensResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLiquidateCollateralWithCdpTokensResponse {
    const message = {
      ...baseMsgLiquidateCollateralWithCdpTokensResponse,
    } as MsgLiquidateCollateralWithCdpTokensResponse;
    return message;
  },

  toJSON(_: MsgLiquidateCollateralWithCdpTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLiquidateCollateralWithCdpTokensResponse>
  ): MsgLiquidateCollateralWithCdpTokensResponse {
    const message = {
      ...baseMsgLiquidateCollateralWithCdpTokensResponse,
    } as MsgLiquidateCollateralWithCdpTokensResponse;
    return message;
  },
};

const baseMsgLiquidateCollateralWithCollateral: object = {
  creator: "",
  debtor: "",
  collateralDenom: "",
  minCollateralAmount: "",
  debtDenom: "",
  debtAmount: "",
  debtCollateralDenom: "",
  debtCollateralAmount: "",
};

export const MsgLiquidateCollateralWithCollateral = {
  encode(
    message: MsgLiquidateCollateralWithCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.debtor !== "") {
      writer.uint32(18).string(message.debtor);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(26).string(message.collateralDenom);
    }
    if (message.minCollateralAmount !== "") {
      writer.uint32(34).string(message.minCollateralAmount);
    }
    if (message.debtDenom !== "") {
      writer.uint32(42).string(message.debtDenom);
    }
    if (message.debtAmount !== "") {
      writer.uint32(50).string(message.debtAmount);
    }
    if (message.debtCollateralDenom !== "") {
      writer.uint32(58).string(message.debtCollateralDenom);
    }
    if (message.debtCollateralAmount !== "") {
      writer.uint32(66).string(message.debtCollateralAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCollateralWithCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateCollateralWithCollateral,
    } as MsgLiquidateCollateralWithCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.debtor = reader.string();
          break;
        case 3:
          message.collateralDenom = reader.string();
          break;
        case 4:
          message.minCollateralAmount = reader.string();
          break;
        case 5:
          message.debtDenom = reader.string();
          break;
        case 6:
          message.debtAmount = reader.string();
          break;
        case 7:
          message.debtCollateralDenom = reader.string();
          break;
        case 8:
          message.debtCollateralAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateralWithCollateral {
    const message = {
      ...baseMsgLiquidateCollateralWithCollateral,
    } as MsgLiquidateCollateralWithCollateral;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.collateralDenom =
      object.collateralDenom !== undefined && object.collateralDenom !== null
        ? String(object.collateralDenom)
        : "";
    message.minCollateralAmount =
      object.minCollateralAmount !== undefined &&
      object.minCollateralAmount !== null
        ? String(object.minCollateralAmount)
        : "";
    message.debtDenom =
      object.debtDenom !== undefined && object.debtDenom !== null
        ? String(object.debtDenom)
        : "";
    message.debtAmount =
      object.debtAmount !== undefined && object.debtAmount !== null
        ? String(object.debtAmount)
        : "";
    message.debtCollateralDenom =
      object.debtCollateralDenom !== undefined &&
      object.debtCollateralDenom !== null
        ? String(object.debtCollateralDenom)
        : "";
    message.debtCollateralAmount =
      object.debtCollateralAmount !== undefined &&
      object.debtCollateralAmount !== null
        ? String(object.debtCollateralAmount)
        : "";
    return message;
  },

  toJSON(message: MsgLiquidateCollateralWithCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.minCollateralAmount !== undefined &&
      (obj.minCollateralAmount = message.minCollateralAmount);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.debtAmount !== undefined && (obj.debtAmount = message.debtAmount);
    message.debtCollateralDenom !== undefined &&
      (obj.debtCollateralDenom = message.debtCollateralDenom);
    message.debtCollateralAmount !== undefined &&
      (obj.debtCollateralAmount = message.debtCollateralAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLiquidateCollateralWithCollateral>
  ): MsgLiquidateCollateralWithCollateral {
    const message = {
      ...baseMsgLiquidateCollateralWithCollateral,
    } as MsgLiquidateCollateralWithCollateral;
    message.creator = object.creator ?? "";
    message.debtor = object.debtor ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.minCollateralAmount = object.minCollateralAmount ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.debtAmount = object.debtAmount ?? "";
    message.debtCollateralDenom = object.debtCollateralDenom ?? "";
    message.debtCollateralAmount = object.debtCollateralAmount ?? "";
    return message;
  },
};

const baseMsgLiquidateCollateralWithCollateralResponse: object = {};

export const MsgLiquidateCollateralWithCollateralResponse = {
  encode(
    _: MsgLiquidateCollateralWithCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCollateralWithCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateCollateralWithCollateralResponse,
    } as MsgLiquidateCollateralWithCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLiquidateCollateralWithCollateralResponse {
    const message = {
      ...baseMsgLiquidateCollateralWithCollateralResponse,
    } as MsgLiquidateCollateralWithCollateralResponse;
    return message;
  },

  toJSON(_: MsgLiquidateCollateralWithCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLiquidateCollateralWithCollateralResponse>
  ): MsgLiquidateCollateralWithCollateralResponse {
    const message = {
      ...baseMsgLiquidateCollateralWithCollateralResponse,
    } as MsgLiquidateCollateralWithCollateralResponse;
    return message;
  },
};

const baseMsgLiquidateCollateralWithStablecoin: object = {
  creator: "",
  debtor: "",
  collateralDenom: "",
  minCollateralAmount: "",
  debtDenom: "",
  debtAmount: "",
  principalAmount: "",
  interestDenom: "",
  interestAmount: "",
};

export const MsgLiquidateCollateralWithStablecoin = {
  encode(
    message: MsgLiquidateCollateralWithStablecoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.debtor !== "") {
      writer.uint32(18).string(message.debtor);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(26).string(message.collateralDenom);
    }
    if (message.minCollateralAmount !== "") {
      writer.uint32(34).string(message.minCollateralAmount);
    }
    if (message.debtDenom !== "") {
      writer.uint32(42).string(message.debtDenom);
    }
    if (message.debtAmount !== "") {
      writer.uint32(50).string(message.debtAmount);
    }
    if (message.principalAmount !== "") {
      writer.uint32(58).string(message.principalAmount);
    }
    if (message.interestDenom !== "") {
      writer.uint32(66).string(message.interestDenom);
    }
    if (message.interestAmount !== "") {
      writer.uint32(74).string(message.interestAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCollateralWithStablecoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateCollateralWithStablecoin,
    } as MsgLiquidateCollateralWithStablecoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.debtor = reader.string();
          break;
        case 3:
          message.collateralDenom = reader.string();
          break;
        case 4:
          message.minCollateralAmount = reader.string();
          break;
        case 5:
          message.debtDenom = reader.string();
          break;
        case 6:
          message.debtAmount = reader.string();
          break;
        case 7:
          message.principalAmount = reader.string();
          break;
        case 8:
          message.interestDenom = reader.string();
          break;
        case 9:
          message.interestAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateralWithStablecoin {
    const message = {
      ...baseMsgLiquidateCollateralWithStablecoin,
    } as MsgLiquidateCollateralWithStablecoin;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.collateralDenom =
      object.collateralDenom !== undefined && object.collateralDenom !== null
        ? String(object.collateralDenom)
        : "";
    message.minCollateralAmount =
      object.minCollateralAmount !== undefined &&
      object.minCollateralAmount !== null
        ? String(object.minCollateralAmount)
        : "";
    message.debtDenom =
      object.debtDenom !== undefined && object.debtDenom !== null
        ? String(object.debtDenom)
        : "";
    message.debtAmount =
      object.debtAmount !== undefined && object.debtAmount !== null
        ? String(object.debtAmount)
        : "";
    message.principalAmount =
      object.principalAmount !== undefined && object.principalAmount !== null
        ? String(object.principalAmount)
        : "";
    message.interestDenom =
      object.interestDenom !== undefined && object.interestDenom !== null
        ? String(object.interestDenom)
        : "";
    message.interestAmount =
      object.interestAmount !== undefined && object.interestAmount !== null
        ? String(object.interestAmount)
        : "";
    return message;
  },

  toJSON(message: MsgLiquidateCollateralWithStablecoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.minCollateralAmount !== undefined &&
      (obj.minCollateralAmount = message.minCollateralAmount);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.debtAmount !== undefined && (obj.debtAmount = message.debtAmount);
    message.principalAmount !== undefined &&
      (obj.principalAmount = message.principalAmount);
    message.interestDenom !== undefined &&
      (obj.interestDenom = message.interestDenom);
    message.interestAmount !== undefined &&
      (obj.interestAmount = message.interestAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLiquidateCollateralWithStablecoin>
  ): MsgLiquidateCollateralWithStablecoin {
    const message = {
      ...baseMsgLiquidateCollateralWithStablecoin,
    } as MsgLiquidateCollateralWithStablecoin;
    message.creator = object.creator ?? "";
    message.debtor = object.debtor ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.minCollateralAmount = object.minCollateralAmount ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.debtAmount = object.debtAmount ?? "";
    message.principalAmount = object.principalAmount ?? "";
    message.interestDenom = object.interestDenom ?? "";
    message.interestAmount = object.interestAmount ?? "";
    return message;
  },
};

const baseMsgLiquidateCollateralWithStablecoinResponse: object = {};

export const MsgLiquidateCollateralWithStablecoinResponse = {
  encode(
    _: MsgLiquidateCollateralWithStablecoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCollateralWithStablecoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateCollateralWithStablecoinResponse,
    } as MsgLiquidateCollateralWithStablecoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLiquidateCollateralWithStablecoinResponse {
    const message = {
      ...baseMsgLiquidateCollateralWithStablecoinResponse,
    } as MsgLiquidateCollateralWithStablecoinResponse;
    return message;
  },

  toJSON(_: MsgLiquidateCollateralWithStablecoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLiquidateCollateralWithStablecoinResponse>
  ): MsgLiquidateCollateralWithStablecoinResponse {
    const message = {
      ...baseMsgLiquidateCollateralWithStablecoinResponse,
    } as MsgLiquidateCollateralWithStablecoinResponse;
    return message;
  },
};

const baseMsgCreateRewardScheme: object = { creator: "" };

export const MsgCreateRewardScheme = {
  encode(
    message: MsgCreateRewardScheme,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createRewardSchemeParams !== undefined) {
      CreateRewardSchemeParams.encode(
        message.createRewardSchemeParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateRewardScheme {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRewardScheme } as MsgCreateRewardScheme;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.createRewardSchemeParams = CreateRewardSchemeParams.decode(
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

  fromJSON(object: any): MsgCreateRewardScheme {
    const message = { ...baseMsgCreateRewardScheme } as MsgCreateRewardScheme;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.createRewardSchemeParams =
      object.createRewardSchemeParams !== undefined &&
      object.createRewardSchemeParams !== null
        ? CreateRewardSchemeParams.fromJSON(object.createRewardSchemeParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreateRewardScheme): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createRewardSchemeParams !== undefined &&
      (obj.createRewardSchemeParams = message.createRewardSchemeParams
        ? CreateRewardSchemeParams.toJSON(message.createRewardSchemeParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRewardScheme>
  ): MsgCreateRewardScheme {
    const message = { ...baseMsgCreateRewardScheme } as MsgCreateRewardScheme;
    message.creator = object.creator ?? "";
    message.createRewardSchemeParams =
      object.createRewardSchemeParams !== undefined &&
      object.createRewardSchemeParams !== null
        ? CreateRewardSchemeParams.fromPartial(object.createRewardSchemeParams)
        : undefined;
    return message;
  },
};

const baseMsgCreateRewardSchemeResponse: object = {
  id: Long.UZERO,
  rewardDenom: "",
  assetDenom: "",
  rewardType: "",
  rewardAmountPerSecond: "",
};

export const MsgCreateRewardSchemeResponse = {
  encode(
    message: MsgCreateRewardSchemeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }
    if (message.rewardType !== "") {
      writer.uint32(34).string(message.rewardType);
    }
    if (message.rewardAmountPerSecond !== "") {
      writer.uint32(42).string(message.rewardAmountPerSecond);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateRewardSchemeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRewardSchemeResponse,
    } as MsgCreateRewardSchemeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.rewardDenom = reader.string();
          break;
        case 3:
          message.assetDenom = reader.string();
          break;
        case 4:
          message.rewardType = reader.string();
          break;
        case 5:
          message.rewardAmountPerSecond = reader.string();
          break;
        case 6:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRewardSchemeResponse {
    const message = {
      ...baseMsgCreateRewardSchemeResponse,
    } as MsgCreateRewardSchemeResponse;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.rewardDenom =
      object.rewardDenom !== undefined && object.rewardDenom !== null
        ? String(object.rewardDenom)
        : "";
    message.assetDenom =
      object.assetDenom !== undefined && object.assetDenom !== null
        ? String(object.assetDenom)
        : "";
    message.rewardType =
      object.rewardType !== undefined && object.rewardType !== null
        ? String(object.rewardType)
        : "";
    message.rewardAmountPerSecond =
      object.rewardAmountPerSecond !== undefined &&
      object.rewardAmountPerSecond !== null
        ? String(object.rewardAmountPerSecond)
        : "";
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? fromJsonTimestamp(object.endTime)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreateRewardSchemeResponse): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.rewardDenom !== undefined &&
      (obj.rewardDenom = message.rewardDenom);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.rewardType !== undefined && (obj.rewardType = message.rewardType);
    message.rewardAmountPerSecond !== undefined &&
      (obj.rewardAmountPerSecond = message.rewardAmountPerSecond);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRewardSchemeResponse>
  ): MsgCreateRewardSchemeResponse {
    const message = {
      ...baseMsgCreateRewardSchemeResponse,
    } as MsgCreateRewardSchemeResponse;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.rewardDenom = object.rewardDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.rewardType = object.rewardType ?? "";
    message.rewardAmountPerSecond = object.rewardAmountPerSecond ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
};

const baseMsgUpdateRewardScheme: object = { updator: "" };

export const MsgUpdateRewardScheme = {
  encode(
    message: MsgUpdateRewardScheme,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.updator !== "") {
      writer.uint32(10).string(message.updator);
    }
    if (message.updateRewardSchemeParams !== undefined) {
      UpdateRewardSchemeParams.encode(
        message.updateRewardSchemeParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRewardScheme {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateRewardScheme } as MsgUpdateRewardScheme;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updator = reader.string();
          break;
        case 2:
          message.updateRewardSchemeParams = UpdateRewardSchemeParams.decode(
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

  fromJSON(object: any): MsgUpdateRewardScheme {
    const message = { ...baseMsgUpdateRewardScheme } as MsgUpdateRewardScheme;
    message.updator =
      object.updator !== undefined && object.updator !== null
        ? String(object.updator)
        : "";
    message.updateRewardSchemeParams =
      object.updateRewardSchemeParams !== undefined &&
      object.updateRewardSchemeParams !== null
        ? UpdateRewardSchemeParams.fromJSON(object.updateRewardSchemeParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateRewardScheme): unknown {
    const obj: any = {};
    message.updator !== undefined && (obj.updator = message.updator);
    message.updateRewardSchemeParams !== undefined &&
      (obj.updateRewardSchemeParams = message.updateRewardSchemeParams
        ? UpdateRewardSchemeParams.toJSON(message.updateRewardSchemeParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateRewardScheme>
  ): MsgUpdateRewardScheme {
    const message = { ...baseMsgUpdateRewardScheme } as MsgUpdateRewardScheme;
    message.updator = object.updator ?? "";
    message.updateRewardSchemeParams =
      object.updateRewardSchemeParams !== undefined &&
      object.updateRewardSchemeParams !== null
        ? UpdateRewardSchemeParams.fromPartial(object.updateRewardSchemeParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdateRewardSchemeResponse: object = {};

export const MsgUpdateRewardSchemeResponse = {
  encode(
    _: MsgUpdateRewardSchemeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRewardSchemeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRewardSchemeResponse,
    } as MsgUpdateRewardSchemeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateRewardSchemeResponse {
    const message = {
      ...baseMsgUpdateRewardSchemeResponse,
    } as MsgUpdateRewardSchemeResponse;
    return message;
  },

  toJSON(_: MsgUpdateRewardSchemeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateRewardSchemeResponse>
  ): MsgUpdateRewardSchemeResponse {
    const message = {
      ...baseMsgUpdateRewardSchemeResponse,
    } as MsgUpdateRewardSchemeResponse;
    return message;
  },
};

const baseMsgAddRewardReserve: object = { creator: "" };

export const MsgAddRewardReserve = {
  encode(
    message: MsgAddRewardReserve,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.addReservesParams !== undefined) {
      AddReservesParams.encode(
        message.addReservesParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRewardReserve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddRewardReserve } as MsgAddRewardReserve;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addReservesParams = AddReservesParams.decode(
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

  fromJSON(object: any): MsgAddRewardReserve {
    const message = { ...baseMsgAddRewardReserve } as MsgAddRewardReserve;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.addReservesParams =
      object.addReservesParams !== undefined &&
      object.addReservesParams !== null
        ? AddReservesParams.fromJSON(object.addReservesParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgAddRewardReserve): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addReservesParams !== undefined &&
      (obj.addReservesParams = message.addReservesParams
        ? AddReservesParams.toJSON(message.addReservesParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddRewardReserve>): MsgAddRewardReserve {
    const message = { ...baseMsgAddRewardReserve } as MsgAddRewardReserve;
    message.creator = object.creator ?? "";
    message.addReservesParams =
      object.addReservesParams !== undefined &&
      object.addReservesParams !== null
        ? AddReservesParams.fromPartial(object.addReservesParams)
        : undefined;
    return message;
  },
};

const baseMsgAddRewardReserveResponse: object = {};

export const MsgAddRewardReserveResponse = {
  encode(
    _: MsgAddRewardReserveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddRewardReserveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddRewardReserveResponse,
    } as MsgAddRewardReserveResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddRewardReserveResponse {
    const message = {
      ...baseMsgAddRewardReserveResponse,
    } as MsgAddRewardReserveResponse;
    return message;
  },

  toJSON(_: MsgAddRewardReserveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddRewardReserveResponse>
  ): MsgAddRewardReserveResponse {
    const message = {
      ...baseMsgAddRewardReserveResponse,
    } as MsgAddRewardReserveResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  AddRateStrategy(
    request: MsgAddRateStrategy
  ): Promise<MsgAddRateStrategyResponse>;
  RemoveRateStrategy(
    request: MsgRemoveRateStrategy
  ): Promise<MsgRemoveRateStrategyResponse>;
  AddAsset(request: MsgAddAsset): Promise<MsgAddAssetResponse>;
  UpdateRateStrategy(
    request: MsgUpdateRateStrategy
  ): Promise<MsgUpdateRateStrategyResponse>;
  UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse>;
  SupplyAsset(request: MsgSupplyAsset): Promise<MsgSupplyAssetResponse>;
  WithdrawAsset(request: MsgWithdrawAsset): Promise<MsgWithdrawAssetResponse>;
  LockCollateral(
    request: MsgLockCollateral
  ): Promise<MsgLockCollateralResponse>;
  UnlockCollateral(
    request: MsgUnlockCollateral
  ): Promise<MsgUnlockCollateralResponse>;
  BorrowAsset(request: MsgBorrowAsset): Promise<MsgBorrowAssetResponse>;
  RepayAsset(request: MsgRepayAsset): Promise<MsgRepayAssetResponse>;
  SupplyAssetAndLockCollateral(
    request: MsgSupplyAssetAndLockCollateral
  ): Promise<MsgSupplyAssetAndLockCollateralResponse>;
  UnlockCollateralAndWithdrawAsset(
    request: MsgUnlockCollateralAndWithdrawAsset
  ): Promise<MsgUnlockCollateralAndWithdrawAssetResponse>;
  LiquidateCollateral(
    request: MsgLiquidateCollateral
  ): Promise<MsgLiquidateCollateralResponse>;
  SetLiquidationFee(
    request: MsgSetLiquidationFee
  ): Promise<MsgSetLiquidationFeeResponse>;
  SetInterestFee(
    request: MsgSetInterestFee
  ): Promise<MsgSetInterestFeeResponse>;
  RepayAssetWithCdpTokens(
    request: MsgRepayAssetWithCdpTokens
  ): Promise<MsgRepayAssetWithCdpTokensResponse>;
  RepayAssetWithCollateral(
    request: MsgRepayAssetWithCollateral
  ): Promise<MsgRepayAssetWithCollateralResponse>;
  CreateRewardScheme(
    request: MsgCreateRewardScheme
  ): Promise<MsgCreateRewardSchemeResponse>;
  UpdateRewardScheme(
    request: MsgUpdateRewardScheme
  ): Promise<MsgUpdateRewardSchemeResponse>;
  AddReserve(
    request: MsgAddRewardReserve
  ): Promise<MsgAddRewardReserveResponse>;
  SetStablecoinInterestRate(
    request: MsgSetStablecoinInterestRate
  ): Promise<MsgSetStablecoinInterestRateResponse>;
  MintStablecoin(
    request: MsgMintStablecoin
  ): Promise<MsgMintStablecoinResponse>;
  ReturnStablecoin(
    request: MsgReturnStablecoin
  ): Promise<MsgReturnStablecoinResponse>;
  SetCompleteLiquidationThreshold(
    request: MsgSetCompleteLiquidationThreshold
  ): Promise<MsgSetCompleteLiquidationThresholdResponse>;
  SetMinimumCloseFactor(
    request: MsgSetMinimumCloseFactor
  ): Promise<MsgSetMinimumCloseFactorResponse>;
  SetSmallLiquidationSize(
    request: MsgSetSmallLiquidationSize
  ): Promise<MsgSetSmallLiquidationSizeResponse>;
  LiquidateCollateralWithCdpTokens(
    request: MsgLiquidateCollateralWithCdpTokens
  ): Promise<MsgLiquidateCollateralWithCdpTokensResponse>;
  LiquidateCollateralWithCollateral(
    request: MsgLiquidateCollateralWithCollateral
  ): Promise<MsgLiquidateCollateralWithCollateralResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  LiquidateCollateralWithStablecoin(
    request: MsgLiquidateCollateralWithStablecoin
  ): Promise<MsgLiquidateCollateralWithStablecoinResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddRateStrategy = this.AddRateStrategy.bind(this);
    this.RemoveRateStrategy = this.RemoveRateStrategy.bind(this);
    this.AddAsset = this.AddAsset.bind(this);
    this.UpdateRateStrategy = this.UpdateRateStrategy.bind(this);
    this.UpdateAsset = this.UpdateAsset.bind(this);
    this.SupplyAsset = this.SupplyAsset.bind(this);
    this.WithdrawAsset = this.WithdrawAsset.bind(this);
    this.LockCollateral = this.LockCollateral.bind(this);
    this.UnlockCollateral = this.UnlockCollateral.bind(this);
    this.BorrowAsset = this.BorrowAsset.bind(this);
    this.RepayAsset = this.RepayAsset.bind(this);
    this.SupplyAssetAndLockCollateral =
      this.SupplyAssetAndLockCollateral.bind(this);
    this.UnlockCollateralAndWithdrawAsset =
      this.UnlockCollateralAndWithdrawAsset.bind(this);
    this.LiquidateCollateral = this.LiquidateCollateral.bind(this);
    this.SetLiquidationFee = this.SetLiquidationFee.bind(this);
    this.SetInterestFee = this.SetInterestFee.bind(this);
    this.RepayAssetWithCdpTokens = this.RepayAssetWithCdpTokens.bind(this);
    this.RepayAssetWithCollateral = this.RepayAssetWithCollateral.bind(this);
    this.CreateRewardScheme = this.CreateRewardScheme.bind(this);
    this.UpdateRewardScheme = this.UpdateRewardScheme.bind(this);
    this.AddReserve = this.AddReserve.bind(this);
    this.SetStablecoinInterestRate = this.SetStablecoinInterestRate.bind(this);
    this.MintStablecoin = this.MintStablecoin.bind(this);
    this.ReturnStablecoin = this.ReturnStablecoin.bind(this);
    this.SetCompleteLiquidationThreshold =
      this.SetCompleteLiquidationThreshold.bind(this);
    this.SetMinimumCloseFactor = this.SetMinimumCloseFactor.bind(this);
    this.SetSmallLiquidationSize = this.SetSmallLiquidationSize.bind(this);
    this.LiquidateCollateralWithCdpTokens =
      this.LiquidateCollateralWithCdpTokens.bind(this);
    this.LiquidateCollateralWithCollateral =
      this.LiquidateCollateralWithCollateral.bind(this);
    this.LiquidateCollateralWithStablecoin =
      this.LiquidateCollateralWithStablecoin.bind(this);
  }
  AddRateStrategy(
    request: MsgAddRateStrategy
  ): Promise<MsgAddRateStrategyResponse> {
    const data = MsgAddRateStrategy.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "AddRateStrategy",
      data
    );
    return promise.then((data) =>
      MsgAddRateStrategyResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveRateStrategy(
    request: MsgRemoveRateStrategy
  ): Promise<MsgRemoveRateStrategyResponse> {
    const data = MsgRemoveRateStrategy.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "RemoveRateStrategy",
      data
    );
    return promise.then((data) =>
      MsgRemoveRateStrategyResponse.decode(new _m0.Reader(data))
    );
  }

  AddAsset(request: MsgAddAsset): Promise<MsgAddAssetResponse> {
    const data = MsgAddAsset.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "AddAsset",
      data
    );
    return promise.then((data) =>
      MsgAddAssetResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateRateStrategy(
    request: MsgUpdateRateStrategy
  ): Promise<MsgUpdateRateStrategyResponse> {
    const data = MsgUpdateRateStrategy.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "UpdateRateStrategy",
      data
    );
    return promise.then((data) =>
      MsgUpdateRateStrategyResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse> {
    const data = MsgUpdateAsset.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "UpdateAsset",
      data
    );
    return promise.then((data) =>
      MsgUpdateAssetResponse.decode(new _m0.Reader(data))
    );
  }

  SupplyAsset(request: MsgSupplyAsset): Promise<MsgSupplyAssetResponse> {
    const data = MsgSupplyAsset.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SupplyAsset",
      data
    );
    return promise.then((data) =>
      MsgSupplyAssetResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawAsset(request: MsgWithdrawAsset): Promise<MsgWithdrawAssetResponse> {
    const data = MsgWithdrawAsset.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "WithdrawAsset",
      data
    );
    return promise.then((data) =>
      MsgWithdrawAssetResponse.decode(new _m0.Reader(data))
    );
  }

  LockCollateral(
    request: MsgLockCollateral
  ): Promise<MsgLockCollateralResponse> {
    const data = MsgLockCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "LockCollateral",
      data
    );
    return promise.then((data) =>
      MsgLockCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  UnlockCollateral(
    request: MsgUnlockCollateral
  ): Promise<MsgUnlockCollateralResponse> {
    const data = MsgUnlockCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "UnlockCollateral",
      data
    );
    return promise.then((data) =>
      MsgUnlockCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  BorrowAsset(request: MsgBorrowAsset): Promise<MsgBorrowAssetResponse> {
    const data = MsgBorrowAsset.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "BorrowAsset",
      data
    );
    return promise.then((data) =>
      MsgBorrowAssetResponse.decode(new _m0.Reader(data))
    );
  }

  RepayAsset(request: MsgRepayAsset): Promise<MsgRepayAssetResponse> {
    const data = MsgRepayAsset.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "RepayAsset",
      data
    );
    return promise.then((data) =>
      MsgRepayAssetResponse.decode(new _m0.Reader(data))
    );
  }

  SupplyAssetAndLockCollateral(
    request: MsgSupplyAssetAndLockCollateral
  ): Promise<MsgSupplyAssetAndLockCollateralResponse> {
    const data = MsgSupplyAssetAndLockCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SupplyAssetAndLockCollateral",
      data
    );
    return promise.then((data) =>
      MsgSupplyAssetAndLockCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  UnlockCollateralAndWithdrawAsset(
    request: MsgUnlockCollateralAndWithdrawAsset
  ): Promise<MsgUnlockCollateralAndWithdrawAssetResponse> {
    const data = MsgUnlockCollateralAndWithdrawAsset.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "UnlockCollateralAndWithdrawAsset",
      data
    );
    return promise.then((data) =>
      MsgUnlockCollateralAndWithdrawAssetResponse.decode(new _m0.Reader(data))
    );
  }

  LiquidateCollateral(
    request: MsgLiquidateCollateral
  ): Promise<MsgLiquidateCollateralResponse> {
    const data = MsgLiquidateCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "LiquidateCollateral",
      data
    );
    return promise.then((data) =>
      MsgLiquidateCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  SetLiquidationFee(
    request: MsgSetLiquidationFee
  ): Promise<MsgSetLiquidationFeeResponse> {
    const data = MsgSetLiquidationFee.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetLiquidationFee",
      data
    );
    return promise.then((data) =>
      MsgSetLiquidationFeeResponse.decode(new _m0.Reader(data))
    );
  }

  SetInterestFee(
    request: MsgSetInterestFee
  ): Promise<MsgSetInterestFeeResponse> {
    const data = MsgSetInterestFee.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetInterestFee",
      data
    );
    return promise.then((data) =>
      MsgSetInterestFeeResponse.decode(new _m0.Reader(data))
    );
  }

  RepayAssetWithCdpTokens(
    request: MsgRepayAssetWithCdpTokens
  ): Promise<MsgRepayAssetWithCdpTokensResponse> {
    const data = MsgRepayAssetWithCdpTokens.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "RepayAssetWithCdpTokens",
      data
    );
    return promise.then((data) =>
      MsgRepayAssetWithCdpTokensResponse.decode(new _m0.Reader(data))
    );
  }

  RepayAssetWithCollateral(
    request: MsgRepayAssetWithCollateral
  ): Promise<MsgRepayAssetWithCollateralResponse> {
    const data = MsgRepayAssetWithCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "RepayAssetWithCollateral",
      data
    );
    return promise.then((data) =>
      MsgRepayAssetWithCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  CreateRewardScheme(
    request: MsgCreateRewardScheme
  ): Promise<MsgCreateRewardSchemeResponse> {
    const data = MsgCreateRewardScheme.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "CreateRewardScheme",
      data
    );
    return promise.then((data) =>
      MsgCreateRewardSchemeResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateRewardScheme(
    request: MsgUpdateRewardScheme
  ): Promise<MsgUpdateRewardSchemeResponse> {
    const data = MsgUpdateRewardScheme.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "UpdateRewardScheme",
      data
    );
    return promise.then((data) =>
      MsgUpdateRewardSchemeResponse.decode(new _m0.Reader(data))
    );
  }

  AddReserve(
    request: MsgAddRewardReserve
  ): Promise<MsgAddRewardReserveResponse> {
    const data = MsgAddRewardReserve.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "AddReserve",
      data
    );
    return promise.then((data) =>
      MsgAddRewardReserveResponse.decode(new _m0.Reader(data))
    );
  }

  SetStablecoinInterestRate(
    request: MsgSetStablecoinInterestRate
  ): Promise<MsgSetStablecoinInterestRateResponse> {
    const data = MsgSetStablecoinInterestRate.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetStablecoinInterestRate",
      data
    );
    return promise.then((data) =>
      MsgSetStablecoinInterestRateResponse.decode(new _m0.Reader(data))
    );
  }

  MintStablecoin(
    request: MsgMintStablecoin
  ): Promise<MsgMintStablecoinResponse> {
    const data = MsgMintStablecoin.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "MintStablecoin",
      data
    );
    return promise.then((data) =>
      MsgMintStablecoinResponse.decode(new _m0.Reader(data))
    );
  }

  ReturnStablecoin(
    request: MsgReturnStablecoin
  ): Promise<MsgReturnStablecoinResponse> {
    const data = MsgReturnStablecoin.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "ReturnStablecoin",
      data
    );
    return promise.then((data) =>
      MsgReturnStablecoinResponse.decode(new _m0.Reader(data))
    );
  }

  SetCompleteLiquidationThreshold(
    request: MsgSetCompleteLiquidationThreshold
  ): Promise<MsgSetCompleteLiquidationThresholdResponse> {
    const data = MsgSetCompleteLiquidationThreshold.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetCompleteLiquidationThreshold",
      data
    );
    return promise.then((data) =>
      MsgSetCompleteLiquidationThresholdResponse.decode(new _m0.Reader(data))
    );
  }

  SetMinimumCloseFactor(
    request: MsgSetMinimumCloseFactor
  ): Promise<MsgSetMinimumCloseFactorResponse> {
    const data = MsgSetMinimumCloseFactor.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetMinimumCloseFactor",
      data
    );
    return promise.then((data) =>
      MsgSetMinimumCloseFactorResponse.decode(new _m0.Reader(data))
    );
  }

  SetSmallLiquidationSize(
    request: MsgSetSmallLiquidationSize
  ): Promise<MsgSetSmallLiquidationSizeResponse> {
    const data = MsgSetSmallLiquidationSize.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetSmallLiquidationSize",
      data
    );
    return promise.then((data) =>
      MsgSetSmallLiquidationSizeResponse.decode(new _m0.Reader(data))
    );
  }

  LiquidateCollateralWithCdpTokens(
    request: MsgLiquidateCollateralWithCdpTokens
  ): Promise<MsgLiquidateCollateralWithCdpTokensResponse> {
    const data = MsgLiquidateCollateralWithCdpTokens.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "LiquidateCollateralWithCdpTokens",
      data
    );
    return promise.then((data) =>
      MsgLiquidateCollateralWithCdpTokensResponse.decode(new _m0.Reader(data))
    );
  }

  LiquidateCollateralWithCollateral(
    request: MsgLiquidateCollateralWithCollateral
  ): Promise<MsgLiquidateCollateralWithCollateralResponse> {
    const data = MsgLiquidateCollateralWithCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "LiquidateCollateralWithCollateral",
      data
    );
    return promise.then((data) =>
      MsgLiquidateCollateralWithCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  LiquidateCollateralWithStablecoin(
    request: MsgLiquidateCollateralWithStablecoin
  ): Promise<MsgLiquidateCollateralWithStablecoinResponse> {
    const data = MsgLiquidateCollateralWithStablecoin.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "LiquidateCollateralWithStablecoin",
      data
    );
    return promise.then((data) =>
      MsgLiquidateCollateralWithStablecoinResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
