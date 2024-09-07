/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { RateStrategyParams } from "./rate_strategy_params";
import { AssetParams, UpdateAssetParams } from "./asset_params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import {
  CreateRewardSchemeParams,
  UpdateRewardSchemeParams,
} from "./reward_scheme";
import { Duration } from "../../../google/protobuf/duration";
import { EModeCategory } from "./e_mode_category";
import { ParamsToUpdate } from "./params";
import {
  StringValue,
  Int64Value,
  BoolValue,
} from "../../../google/protobuf/wrappers";

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
  assetParams?: UpdateAssetParams;
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
  cibtDenom: string;
  amount: string;
}

export interface MsgWithdrawAssetResponse {}

export interface MsgLockCollateral {
  creator: string;
  cibtDenom: string;
  amount: string;
}

export interface MsgLockCollateralResponse {}

export interface MsgUnlockCollateral {
  creator: string;
  cibtDenom: string;
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
  debtor: string;
  fromCollateral: boolean;
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
  cibtDenom: string;
  unlockAmount: string;
  withdrawAmount: string;
}

export interface MsgUnlockCollateralAndWithdrawAssetResponse {}

export interface MsgLiquidateCollateral {
  creator: string;
  debtor: string;
  minCollateral?: Coin;
  debt?: Coin;
  stableInterest?: Coin;
  debtFromCollateral: boolean;
  interestFromCollateral: boolean;
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

export interface MsgSetStablecoinMintCap {
  creator: string;
  stablecoinMintCap: string;
}

export interface MsgSetStablecoinMintCapResponse {}

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
  principal?: Coin;
  interest?: Coin;
  debtor: string;
  principalFromCollateral: boolean;
  interestFromCollateral: boolean;
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

export interface MsgCreateRewardScheme {
  creator: string;
  createRewardSchemeParams?: CreateRewardSchemeParams;
}

export interface MsgCreateRewardSchemeResponse {}

export interface MsgUpdateRewardScheme {
  updater: string;
  updateRewardSchemeParams?: UpdateRewardSchemeParams;
}

export interface MsgUpdateRewardSchemeResponse {}

export interface MsgClaimRewards {
  creator: string;
}

export interface MsgClaimRewardsResponse {}

export interface MsgSetStalePriceGracePeriod {
  creator: string;
  stalePriceGracePeriod?: Duration;
}

export interface MsgSetStalePriceGracePeriodResponse {}

export interface MsgSetCdpPaused {
  creator: string;
  cdpPaused: boolean;
}

export interface MsgSetCdpPausedResponse {}

export interface MsgConvertTokenInCdpToGroupTokens {
  creator: string;
  denom: string;
}

export interface MsgConvertTokenInCdpToGroupTokensResponse {}

export interface MsgAddEModeCategory {
  creator: string;
  eModeCategory?: EModeCategory;
}

export interface MsgAddEModeCategoryResponse {}

export interface MsgUpdateEModeCategory {
  creator: string;
  eModeCategoryName: string;
  updateEModeCategoryParams?: UpdateEModeCategoryParams;
}

export interface UpdateEModeCategoryParams {
  denoms: string[];
  loanToValue?: Long;
  liquidationThreshold?: Long;
  liquidationDiscount?: Long;
  isActive?: boolean;
}

export interface MsgUpdateEModeCategoryResponse {}

export interface MsgSetAccountEMode {
  creator: string;
  eModeCategoryName: string;
}

export interface MsgSetAccountEModeResponse {}

export interface MsgRemoveAccountEMode {
  creator: string;
}

export interface MsgRemoveAccountEModeResponse {}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}

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
      UpdateAssetParams.encode(
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
          message.assetParams = UpdateAssetParams.decode(
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

  fromJSON(object: any): MsgUpdateAsset {
    const message = { ...baseMsgUpdateAsset } as MsgUpdateAsset;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? UpdateAssetParams.fromJSON(object.assetParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams
        ? UpdateAssetParams.toJSON(message.assetParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAsset>): MsgUpdateAsset {
    const message = { ...baseMsgUpdateAsset } as MsgUpdateAsset;
    message.creator = object.creator ?? "";
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? UpdateAssetParams.fromPartial(object.assetParams)
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

const baseMsgWithdrawAsset: object = { creator: "", cibtDenom: "", amount: "" };

export const MsgWithdrawAsset = {
  encode(
    message: MsgWithdrawAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(18).string(message.cibtDenom);
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
          message.cibtDenom = reader.string();
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
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
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
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawAsset>): MsgWithdrawAsset {
    const message = { ...baseMsgWithdrawAsset } as MsgWithdrawAsset;
    message.creator = object.creator ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
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

const baseMsgLockCollateral: object = {
  creator: "",
  cibtDenom: "",
  amount: "",
};

export const MsgLockCollateral = {
  encode(
    message: MsgLockCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(18).string(message.cibtDenom);
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
          message.cibtDenom = reader.string();
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
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
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
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLockCollateral>): MsgLockCollateral {
    const message = { ...baseMsgLockCollateral } as MsgLockCollateral;
    message.creator = object.creator ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
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
  cibtDenom: "",
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
    if (message.cibtDenom !== "") {
      writer.uint32(18).string(message.cibtDenom);
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
          message.cibtDenom = reader.string();
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
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
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
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnlockCollateral>): MsgUnlockCollateral {
    const message = { ...baseMsgUnlockCollateral } as MsgUnlockCollateral;
    message.creator = object.creator ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
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

const baseMsgRepayAsset: object = {
  creator: "",
  denom: "",
  amount: "",
  debtor: "",
  fromCollateral: false,
};

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
    if (message.debtor !== "") {
      writer.uint32(34).string(message.debtor);
    }
    if (message.fromCollateral === true) {
      writer.uint32(40).bool(message.fromCollateral);
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
        case 4:
          message.debtor = reader.string();
          break;
        case 5:
          message.fromCollateral = reader.bool();
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
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.fromCollateral =
      object.fromCollateral !== undefined && object.fromCollateral !== null
        ? Boolean(object.fromCollateral)
        : false;
    return message;
  },

  toJSON(message: MsgRepayAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.fromCollateral !== undefined &&
      (obj.fromCollateral = message.fromCollateral);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRepayAsset>): MsgRepayAsset {
    const message = { ...baseMsgRepayAsset } as MsgRepayAsset;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.debtor = object.debtor ?? "";
    message.fromCollateral = object.fromCollateral ?? false;
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
  cibtDenom: "",
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
    if (message.cibtDenom !== "") {
      writer.uint32(18).string(message.cibtDenom);
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
          message.cibtDenom = reader.string();
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
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
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
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
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
    message.cibtDenom = object.cibtDenom ?? "";
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
  debtFromCollateral: false,
  interestFromCollateral: false,
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
    if (message.minCollateral !== undefined) {
      Coin.encode(message.minCollateral, writer.uint32(26).fork()).ldelim();
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(34).fork()).ldelim();
    }
    if (message.stableInterest !== undefined) {
      Coin.encode(message.stableInterest, writer.uint32(42).fork()).ldelim();
    }
    if (message.debtFromCollateral === true) {
      writer.uint32(48).bool(message.debtFromCollateral);
    }
    if (message.interestFromCollateral === true) {
      writer.uint32(56).bool(message.interestFromCollateral);
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
          message.minCollateral = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.stableInterest = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.debtFromCollateral = reader.bool();
          break;
        case 7:
          message.interestFromCollateral = reader.bool();
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
    message.minCollateral =
      object.minCollateral !== undefined && object.minCollateral !== null
        ? Coin.fromJSON(object.minCollateral)
        : undefined;
    message.debt =
      object.debt !== undefined && object.debt !== null
        ? Coin.fromJSON(object.debt)
        : undefined;
    message.stableInterest =
      object.stableInterest !== undefined && object.stableInterest !== null
        ? Coin.fromJSON(object.stableInterest)
        : undefined;
    message.debtFromCollateral =
      object.debtFromCollateral !== undefined &&
      object.debtFromCollateral !== null
        ? Boolean(object.debtFromCollateral)
        : false;
    message.interestFromCollateral =
      object.interestFromCollateral !== undefined &&
      object.interestFromCollateral !== null
        ? Boolean(object.interestFromCollateral)
        : false;
    return message;
  },

  toJSON(message: MsgLiquidateCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.minCollateral !== undefined &&
      (obj.minCollateral = message.minCollateral
        ? Coin.toJSON(message.minCollateral)
        : undefined);
    message.debt !== undefined &&
      (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    message.stableInterest !== undefined &&
      (obj.stableInterest = message.stableInterest
        ? Coin.toJSON(message.stableInterest)
        : undefined);
    message.debtFromCollateral !== undefined &&
      (obj.debtFromCollateral = message.debtFromCollateral);
    message.interestFromCollateral !== undefined &&
      (obj.interestFromCollateral = message.interestFromCollateral);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLiquidateCollateral>
  ): MsgLiquidateCollateral {
    const message = { ...baseMsgLiquidateCollateral } as MsgLiquidateCollateral;
    message.creator = object.creator ?? "";
    message.debtor = object.debtor ?? "";
    message.minCollateral =
      object.minCollateral !== undefined && object.minCollateral !== null
        ? Coin.fromPartial(object.minCollateral)
        : undefined;
    message.debt =
      object.debt !== undefined && object.debt !== null
        ? Coin.fromPartial(object.debt)
        : undefined;
    message.stableInterest =
      object.stableInterest !== undefined && object.stableInterest !== null
        ? Coin.fromPartial(object.stableInterest)
        : undefined;
    message.debtFromCollateral = object.debtFromCollateral ?? false;
    message.interestFromCollateral = object.interestFromCollateral ?? false;
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

const baseMsgSetStablecoinMintCap: object = {
  creator: "",
  stablecoinMintCap: "",
};

export const MsgSetStablecoinMintCap = {
  encode(
    message: MsgSetStablecoinMintCap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.stablecoinMintCap !== "") {
      writer.uint32(18).string(message.stablecoinMintCap);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStablecoinMintCap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStablecoinMintCap,
    } as MsgSetStablecoinMintCap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.stablecoinMintCap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetStablecoinMintCap {
    const message = {
      ...baseMsgSetStablecoinMintCap,
    } as MsgSetStablecoinMintCap;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stablecoinMintCap =
      object.stablecoinMintCap !== undefined &&
      object.stablecoinMintCap !== null
        ? String(object.stablecoinMintCap)
        : "";
    return message;
  },

  toJSON(message: MsgSetStablecoinMintCap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stablecoinMintCap !== undefined &&
      (obj.stablecoinMintCap = message.stablecoinMintCap);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetStablecoinMintCap>
  ): MsgSetStablecoinMintCap {
    const message = {
      ...baseMsgSetStablecoinMintCap,
    } as MsgSetStablecoinMintCap;
    message.creator = object.creator ?? "";
    message.stablecoinMintCap = object.stablecoinMintCap ?? "";
    return message;
  },
};

const baseMsgSetStablecoinMintCapResponse: object = {};

export const MsgSetStablecoinMintCapResponse = {
  encode(
    _: MsgSetStablecoinMintCapResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStablecoinMintCapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStablecoinMintCapResponse,
    } as MsgSetStablecoinMintCapResponse;
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

  fromJSON(_: any): MsgSetStablecoinMintCapResponse {
    const message = {
      ...baseMsgSetStablecoinMintCapResponse,
    } as MsgSetStablecoinMintCapResponse;
    return message;
  },

  toJSON(_: MsgSetStablecoinMintCapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetStablecoinMintCapResponse>
  ): MsgSetStablecoinMintCapResponse {
    const message = {
      ...baseMsgSetStablecoinMintCapResponse,
    } as MsgSetStablecoinMintCapResponse;
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
  debtor: "",
  principalFromCollateral: false,
  interestFromCollateral: false,
};

export const MsgReturnStablecoin = {
  encode(
    message: MsgReturnStablecoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(18).fork()).ldelim();
    }
    if (message.interest !== undefined) {
      Coin.encode(message.interest, writer.uint32(26).fork()).ldelim();
    }
    if (message.debtor !== "") {
      writer.uint32(34).string(message.debtor);
    }
    if (message.principalFromCollateral === true) {
      writer.uint32(40).bool(message.principalFromCollateral);
    }
    if (message.interestFromCollateral === true) {
      writer.uint32(48).bool(message.interestFromCollateral);
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
          message.principal = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.interest = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.debtor = reader.string();
          break;
        case 5:
          message.principalFromCollateral = reader.bool();
          break;
        case 6:
          message.interestFromCollateral = reader.bool();
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
    message.principal =
      object.principal !== undefined && object.principal !== null
        ? Coin.fromJSON(object.principal)
        : undefined;
    message.interest =
      object.interest !== undefined && object.interest !== null
        ? Coin.fromJSON(object.interest)
        : undefined;
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.principalFromCollateral =
      object.principalFromCollateral !== undefined &&
      object.principalFromCollateral !== null
        ? Boolean(object.principalFromCollateral)
        : false;
    message.interestFromCollateral =
      object.interestFromCollateral !== undefined &&
      object.interestFromCollateral !== null
        ? Boolean(object.interestFromCollateral)
        : false;
    return message;
  },

  toJSON(message: MsgReturnStablecoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.principal !== undefined &&
      (obj.principal = message.principal
        ? Coin.toJSON(message.principal)
        : undefined);
    message.interest !== undefined &&
      (obj.interest = message.interest
        ? Coin.toJSON(message.interest)
        : undefined);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.principalFromCollateral !== undefined &&
      (obj.principalFromCollateral = message.principalFromCollateral);
    message.interestFromCollateral !== undefined &&
      (obj.interestFromCollateral = message.interestFromCollateral);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReturnStablecoin>): MsgReturnStablecoin {
    const message = { ...baseMsgReturnStablecoin } as MsgReturnStablecoin;
    message.creator = object.creator ?? "";
    message.principal =
      object.principal !== undefined && object.principal !== null
        ? Coin.fromPartial(object.principal)
        : undefined;
    message.interest =
      object.interest !== undefined && object.interest !== null
        ? Coin.fromPartial(object.interest)
        : undefined;
    message.debtor = object.debtor ?? "";
    message.principalFromCollateral = object.principalFromCollateral ?? false;
    message.interestFromCollateral = object.interestFromCollateral ?? false;
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
      writer.uint32(18).string(message.completeLiquidationThreshold);
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
        case 2:
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
      writer.uint32(18).string(message.minimumCloseFactor);
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
        case 2:
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
      writer.uint32(18).string(message.smallLiquidationSize);
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
        case 2:
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

const baseMsgCreateRewardSchemeResponse: object = {};

export const MsgCreateRewardSchemeResponse = {
  encode(
    _: MsgCreateRewardSchemeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateRewardSchemeResponse {
    const message = {
      ...baseMsgCreateRewardSchemeResponse,
    } as MsgCreateRewardSchemeResponse;
    return message;
  },

  toJSON(_: MsgCreateRewardSchemeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateRewardSchemeResponse>
  ): MsgCreateRewardSchemeResponse {
    const message = {
      ...baseMsgCreateRewardSchemeResponse,
    } as MsgCreateRewardSchemeResponse;
    return message;
  },
};

const baseMsgUpdateRewardScheme: object = { updater: "" };

export const MsgUpdateRewardScheme = {
  encode(
    message: MsgUpdateRewardScheme,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
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
          message.updater = reader.string();
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
    message.updater =
      object.updater !== undefined && object.updater !== null
        ? String(object.updater)
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
    message.updater !== undefined && (obj.updater = message.updater);
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
    message.updater = object.updater ?? "";
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

const baseMsgClaimRewards: object = { creator: "" };

export const MsgClaimRewards = {
  encode(
    message: MsgClaimRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimRewards } as MsgClaimRewards;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimRewards {
    const message = { ...baseMsgClaimRewards } as MsgClaimRewards;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    return message;
  },

  toJSON(message: MsgClaimRewards): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimRewards>): MsgClaimRewards {
    const message = { ...baseMsgClaimRewards } as MsgClaimRewards;
    message.creator = object.creator ?? "";
    return message;
  },
};

const baseMsgClaimRewardsResponse: object = {};

export const MsgClaimRewardsResponse = {
  encode(
    _: MsgClaimRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClaimRewardsResponse,
    } as MsgClaimRewardsResponse;
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

  fromJSON(_: any): MsgClaimRewardsResponse {
    const message = {
      ...baseMsgClaimRewardsResponse,
    } as MsgClaimRewardsResponse;
    return message;
  },

  toJSON(_: MsgClaimRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgClaimRewardsResponse>
  ): MsgClaimRewardsResponse {
    const message = {
      ...baseMsgClaimRewardsResponse,
    } as MsgClaimRewardsResponse;
    return message;
  },
};

const baseMsgSetStalePriceGracePeriod: object = { creator: "" };

export const MsgSetStalePriceGracePeriod = {
  encode(
    message: MsgSetStalePriceGracePeriod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.stalePriceGracePeriod !== undefined) {
      Duration.encode(
        message.stalePriceGracePeriod,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStalePriceGracePeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStalePriceGracePeriod,
    } as MsgSetStalePriceGracePeriod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.stalePriceGracePeriod = Duration.decode(
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

  fromJSON(object: any): MsgSetStalePriceGracePeriod {
    const message = {
      ...baseMsgSetStalePriceGracePeriod,
    } as MsgSetStalePriceGracePeriod;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stalePriceGracePeriod =
      object.stalePriceGracePeriod !== undefined &&
      object.stalePriceGracePeriod !== null
        ? Duration.fromJSON(object.stalePriceGracePeriod)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetStalePriceGracePeriod): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stalePriceGracePeriod !== undefined &&
      (obj.stalePriceGracePeriod = message.stalePriceGracePeriod
        ? Duration.toJSON(message.stalePriceGracePeriod)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetStalePriceGracePeriod>
  ): MsgSetStalePriceGracePeriod {
    const message = {
      ...baseMsgSetStalePriceGracePeriod,
    } as MsgSetStalePriceGracePeriod;
    message.creator = object.creator ?? "";
    message.stalePriceGracePeriod =
      object.stalePriceGracePeriod !== undefined &&
      object.stalePriceGracePeriod !== null
        ? Duration.fromPartial(object.stalePriceGracePeriod)
        : undefined;
    return message;
  },
};

const baseMsgSetStalePriceGracePeriodResponse: object = {};

export const MsgSetStalePriceGracePeriodResponse = {
  encode(
    _: MsgSetStalePriceGracePeriodResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStalePriceGracePeriodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStalePriceGracePeriodResponse,
    } as MsgSetStalePriceGracePeriodResponse;
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

  fromJSON(_: any): MsgSetStalePriceGracePeriodResponse {
    const message = {
      ...baseMsgSetStalePriceGracePeriodResponse,
    } as MsgSetStalePriceGracePeriodResponse;
    return message;
  },

  toJSON(_: MsgSetStalePriceGracePeriodResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetStalePriceGracePeriodResponse>
  ): MsgSetStalePriceGracePeriodResponse {
    const message = {
      ...baseMsgSetStalePriceGracePeriodResponse,
    } as MsgSetStalePriceGracePeriodResponse;
    return message;
  },
};

const baseMsgSetCdpPaused: object = { creator: "", cdpPaused: false };

export const MsgSetCdpPaused = {
  encode(
    message: MsgSetCdpPaused,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cdpPaused === true) {
      writer.uint32(16).bool(message.cdpPaused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCdpPaused {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetCdpPaused } as MsgSetCdpPaused;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cdpPaused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetCdpPaused {
    const message = { ...baseMsgSetCdpPaused } as MsgSetCdpPaused;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.cdpPaused =
      object.cdpPaused !== undefined && object.cdpPaused !== null
        ? Boolean(object.cdpPaused)
        : false;
    return message;
  },

  toJSON(message: MsgSetCdpPaused): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdpPaused !== undefined && (obj.cdpPaused = message.cdpPaused);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetCdpPaused>): MsgSetCdpPaused {
    const message = { ...baseMsgSetCdpPaused } as MsgSetCdpPaused;
    message.creator = object.creator ?? "";
    message.cdpPaused = object.cdpPaused ?? false;
    return message;
  },
};

const baseMsgSetCdpPausedResponse: object = {};

export const MsgSetCdpPausedResponse = {
  encode(
    _: MsgSetCdpPausedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetCdpPausedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetCdpPausedResponse,
    } as MsgSetCdpPausedResponse;
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

  fromJSON(_: any): MsgSetCdpPausedResponse {
    const message = {
      ...baseMsgSetCdpPausedResponse,
    } as MsgSetCdpPausedResponse;
    return message;
  },

  toJSON(_: MsgSetCdpPausedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetCdpPausedResponse>
  ): MsgSetCdpPausedResponse {
    const message = {
      ...baseMsgSetCdpPausedResponse,
    } as MsgSetCdpPausedResponse;
    return message;
  },
};

const baseMsgConvertTokenInCdpToGroupTokens: object = {
  creator: "",
  denom: "",
};

export const MsgConvertTokenInCdpToGroupTokens = {
  encode(
    message: MsgConvertTokenInCdpToGroupTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConvertTokenInCdpToGroupTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConvertTokenInCdpToGroupTokens,
    } as MsgConvertTokenInCdpToGroupTokens;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConvertTokenInCdpToGroupTokens {
    const message = {
      ...baseMsgConvertTokenInCdpToGroupTokens,
    } as MsgConvertTokenInCdpToGroupTokens;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgConvertTokenInCdpToGroupTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgConvertTokenInCdpToGroupTokens>
  ): MsgConvertTokenInCdpToGroupTokens {
    const message = {
      ...baseMsgConvertTokenInCdpToGroupTokens,
    } as MsgConvertTokenInCdpToGroupTokens;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgConvertTokenInCdpToGroupTokensResponse: object = {};

export const MsgConvertTokenInCdpToGroupTokensResponse = {
  encode(
    _: MsgConvertTokenInCdpToGroupTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConvertTokenInCdpToGroupTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConvertTokenInCdpToGroupTokensResponse,
    } as MsgConvertTokenInCdpToGroupTokensResponse;
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

  fromJSON(_: any): MsgConvertTokenInCdpToGroupTokensResponse {
    const message = {
      ...baseMsgConvertTokenInCdpToGroupTokensResponse,
    } as MsgConvertTokenInCdpToGroupTokensResponse;
    return message;
  },

  toJSON(_: MsgConvertTokenInCdpToGroupTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConvertTokenInCdpToGroupTokensResponse>
  ): MsgConvertTokenInCdpToGroupTokensResponse {
    const message = {
      ...baseMsgConvertTokenInCdpToGroupTokensResponse,
    } as MsgConvertTokenInCdpToGroupTokensResponse;
    return message;
  },
};

const baseMsgAddEModeCategory: object = { creator: "" };

export const MsgAddEModeCategory = {
  encode(
    message: MsgAddEModeCategory,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.eModeCategory !== undefined) {
      EModeCategory.encode(
        message.eModeCategory,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddEModeCategory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddEModeCategory } as MsgAddEModeCategory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.eModeCategory = EModeCategory.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddEModeCategory {
    const message = { ...baseMsgAddEModeCategory } as MsgAddEModeCategory;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.eModeCategory =
      object.eModeCategory !== undefined && object.eModeCategory !== null
        ? EModeCategory.fromJSON(object.eModeCategory)
        : undefined;
    return message;
  },

  toJSON(message: MsgAddEModeCategory): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.eModeCategory !== undefined &&
      (obj.eModeCategory = message.eModeCategory
        ? EModeCategory.toJSON(message.eModeCategory)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddEModeCategory>): MsgAddEModeCategory {
    const message = { ...baseMsgAddEModeCategory } as MsgAddEModeCategory;
    message.creator = object.creator ?? "";
    message.eModeCategory =
      object.eModeCategory !== undefined && object.eModeCategory !== null
        ? EModeCategory.fromPartial(object.eModeCategory)
        : undefined;
    return message;
  },
};

const baseMsgAddEModeCategoryResponse: object = {};

export const MsgAddEModeCategoryResponse = {
  encode(
    _: MsgAddEModeCategoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddEModeCategoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddEModeCategoryResponse,
    } as MsgAddEModeCategoryResponse;
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

  fromJSON(_: any): MsgAddEModeCategoryResponse {
    const message = {
      ...baseMsgAddEModeCategoryResponse,
    } as MsgAddEModeCategoryResponse;
    return message;
  },

  toJSON(_: MsgAddEModeCategoryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddEModeCategoryResponse>
  ): MsgAddEModeCategoryResponse {
    const message = {
      ...baseMsgAddEModeCategoryResponse,
    } as MsgAddEModeCategoryResponse;
    return message;
  },
};

const baseMsgUpdateEModeCategory: object = {
  creator: "",
  eModeCategoryName: "",
};

export const MsgUpdateEModeCategory = {
  encode(
    message: MsgUpdateEModeCategory,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.eModeCategoryName !== "") {
      writer.uint32(18).string(message.eModeCategoryName);
    }
    if (message.updateEModeCategoryParams !== undefined) {
      UpdateEModeCategoryParams.encode(
        message.updateEModeCategoryParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateEModeCategory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateEModeCategory } as MsgUpdateEModeCategory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.eModeCategoryName = reader.string();
          break;
        case 3:
          message.updateEModeCategoryParams = UpdateEModeCategoryParams.decode(
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

  fromJSON(object: any): MsgUpdateEModeCategory {
    const message = { ...baseMsgUpdateEModeCategory } as MsgUpdateEModeCategory;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.eModeCategoryName =
      object.eModeCategoryName !== undefined &&
      object.eModeCategoryName !== null
        ? String(object.eModeCategoryName)
        : "";
    message.updateEModeCategoryParams =
      object.updateEModeCategoryParams !== undefined &&
      object.updateEModeCategoryParams !== null
        ? UpdateEModeCategoryParams.fromJSON(object.updateEModeCategoryParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateEModeCategory): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.eModeCategoryName !== undefined &&
      (obj.eModeCategoryName = message.eModeCategoryName);
    message.updateEModeCategoryParams !== undefined &&
      (obj.updateEModeCategoryParams = message.updateEModeCategoryParams
        ? UpdateEModeCategoryParams.toJSON(message.updateEModeCategoryParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateEModeCategory>
  ): MsgUpdateEModeCategory {
    const message = { ...baseMsgUpdateEModeCategory } as MsgUpdateEModeCategory;
    message.creator = object.creator ?? "";
    message.eModeCategoryName = object.eModeCategoryName ?? "";
    message.updateEModeCategoryParams =
      object.updateEModeCategoryParams !== undefined &&
      object.updateEModeCategoryParams !== null
        ? UpdateEModeCategoryParams.fromPartial(
            object.updateEModeCategoryParams
          )
        : undefined;
    return message;
  },
};

const baseUpdateEModeCategoryParams: object = {};

export const UpdateEModeCategoryParams = {
  encode(
    message: UpdateEModeCategoryParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.denoms) {
      StringValue.encode({ value: v!! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.loanToValue !== undefined) {
      Int64Value.encode(
        { value: message.loanToValue! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.liquidationThreshold !== undefined) {
      Int64Value.encode(
        { value: message.liquidationThreshold! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.liquidationDiscount !== undefined) {
      Int64Value.encode(
        { value: message.liquidationDiscount! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.isActive !== undefined) {
      BoolValue.encode(
        { value: message.isActive! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateEModeCategoryParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateEModeCategoryParams,
    } as UpdateEModeCategoryParams;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(
            StringValue.decode(reader, reader.uint32()).value
          );
          break;
        case 2:
          message.loanToValue = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.liquidationThreshold = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.liquidationDiscount = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.isActive = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEModeCategoryParams {
    const message = {
      ...baseUpdateEModeCategoryParams,
    } as UpdateEModeCategoryParams;
    message.denoms = (object.denoms ?? []).map((e: any) => String(e));
    message.loanToValue =
      object.loanToValue !== undefined && object.loanToValue !== null
        ? Long.fromValue(object.loanToValue)
        : undefined;
    message.liquidationThreshold =
      object.liquidationThreshold !== undefined &&
      object.liquidationThreshold !== null
        ? Long.fromValue(object.liquidationThreshold)
        : undefined;
    message.liquidationDiscount =
      object.liquidationDiscount !== undefined &&
      object.liquidationDiscount !== null
        ? Long.fromValue(object.liquidationDiscount)
        : undefined;
    message.isActive =
      object.isActive !== undefined && object.isActive !== null
        ? Boolean(object.isActive)
        : undefined;
    return message;
  },

  toJSON(message: UpdateEModeCategoryParams): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    message.loanToValue !== undefined &&
      (obj.loanToValue = message.loanToValue);
    message.liquidationThreshold !== undefined &&
      (obj.liquidationThreshold = message.liquidationThreshold);
    message.liquidationDiscount !== undefined &&
      (obj.liquidationDiscount = message.liquidationDiscount);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateEModeCategoryParams>
  ): UpdateEModeCategoryParams {
    const message = {
      ...baseUpdateEModeCategoryParams,
    } as UpdateEModeCategoryParams;
    message.denoms = (object.denoms ?? []).map((e) => e);
    message.loanToValue =
      object.loanToValue !== undefined && object.loanToValue !== null
        ? Long.fromValue(object.loanToValue)
        : undefined;
    message.liquidationThreshold =
      object.liquidationThreshold !== undefined &&
      object.liquidationThreshold !== null
        ? Long.fromValue(object.liquidationThreshold)
        : undefined;
    message.liquidationDiscount =
      object.liquidationDiscount !== undefined &&
      object.liquidationDiscount !== null
        ? Long.fromValue(object.liquidationDiscount)
        : undefined;
    message.isActive = object.isActive ?? undefined;
    return message;
  },
};

const baseMsgUpdateEModeCategoryResponse: object = {};

export const MsgUpdateEModeCategoryResponse = {
  encode(
    _: MsgUpdateEModeCategoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateEModeCategoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateEModeCategoryResponse,
    } as MsgUpdateEModeCategoryResponse;
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

  fromJSON(_: any): MsgUpdateEModeCategoryResponse {
    const message = {
      ...baseMsgUpdateEModeCategoryResponse,
    } as MsgUpdateEModeCategoryResponse;
    return message;
  },

  toJSON(_: MsgUpdateEModeCategoryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateEModeCategoryResponse>
  ): MsgUpdateEModeCategoryResponse {
    const message = {
      ...baseMsgUpdateEModeCategoryResponse,
    } as MsgUpdateEModeCategoryResponse;
    return message;
  },
};

const baseMsgSetAccountEMode: object = { creator: "", eModeCategoryName: "" };

export const MsgSetAccountEMode = {
  encode(
    message: MsgSetAccountEMode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.eModeCategoryName !== "") {
      writer.uint32(18).string(message.eModeCategoryName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAccountEMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetAccountEMode } as MsgSetAccountEMode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.eModeCategoryName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetAccountEMode {
    const message = { ...baseMsgSetAccountEMode } as MsgSetAccountEMode;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.eModeCategoryName =
      object.eModeCategoryName !== undefined &&
      object.eModeCategoryName !== null
        ? String(object.eModeCategoryName)
        : "";
    return message;
  },

  toJSON(message: MsgSetAccountEMode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.eModeCategoryName !== undefined &&
      (obj.eModeCategoryName = message.eModeCategoryName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetAccountEMode>): MsgSetAccountEMode {
    const message = { ...baseMsgSetAccountEMode } as MsgSetAccountEMode;
    message.creator = object.creator ?? "";
    message.eModeCategoryName = object.eModeCategoryName ?? "";
    return message;
  },
};

const baseMsgSetAccountEModeResponse: object = {};

export const MsgSetAccountEModeResponse = {
  encode(
    _: MsgSetAccountEModeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetAccountEModeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetAccountEModeResponse,
    } as MsgSetAccountEModeResponse;
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

  fromJSON(_: any): MsgSetAccountEModeResponse {
    const message = {
      ...baseMsgSetAccountEModeResponse,
    } as MsgSetAccountEModeResponse;
    return message;
  },

  toJSON(_: MsgSetAccountEModeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetAccountEModeResponse>
  ): MsgSetAccountEModeResponse {
    const message = {
      ...baseMsgSetAccountEModeResponse,
    } as MsgSetAccountEModeResponse;
    return message;
  },
};

const baseMsgRemoveAccountEMode: object = { creator: "" };

export const MsgRemoveAccountEMode = {
  encode(
    message: MsgRemoveAccountEMode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveAccountEMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveAccountEMode } as MsgRemoveAccountEMode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveAccountEMode {
    const message = { ...baseMsgRemoveAccountEMode } as MsgRemoveAccountEMode;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveAccountEMode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveAccountEMode>
  ): MsgRemoveAccountEMode {
    const message = { ...baseMsgRemoveAccountEMode } as MsgRemoveAccountEMode;
    message.creator = object.creator ?? "";
    return message;
  },
};

const baseMsgRemoveAccountEModeResponse: object = {};

export const MsgRemoveAccountEModeResponse = {
  encode(
    _: MsgRemoveAccountEModeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveAccountEModeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveAccountEModeResponse,
    } as MsgRemoveAccountEModeResponse;
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

  fromJSON(_: any): MsgRemoveAccountEModeResponse {
    const message = {
      ...baseMsgRemoveAccountEModeResponse,
    } as MsgRemoveAccountEModeResponse;
    return message;
  },

  toJSON(_: MsgRemoveAccountEModeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveAccountEModeResponse>
  ): MsgRemoveAccountEModeResponse {
    const message = {
      ...baseMsgRemoveAccountEModeResponse,
    } as MsgRemoveAccountEModeResponse;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params
        ? ParamsToUpdate.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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
  CreateRewardScheme(
    request: MsgCreateRewardScheme
  ): Promise<MsgCreateRewardSchemeResponse>;
  UpdateRewardScheme(
    request: MsgUpdateRewardScheme
  ): Promise<MsgUpdateRewardSchemeResponse>;
  ClaimRewards(request: MsgClaimRewards): Promise<MsgClaimRewardsResponse>;
  SetStablecoinInterestRate(
    request: MsgSetStablecoinInterestRate
  ): Promise<MsgSetStablecoinInterestRateResponse>;
  SetStablecoinMintCap(
    request: MsgSetStablecoinMintCap
  ): Promise<MsgSetStablecoinMintCapResponse>;
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
  SetStalePriceGracePeriod(
    request: MsgSetStalePriceGracePeriod
  ): Promise<MsgSetStalePriceGracePeriodResponse>;
  SetCdpPaused(request: MsgSetCdpPaused): Promise<MsgSetCdpPausedResponse>;
  ConvertTokenInCdpToGroupTokens(
    request: MsgConvertTokenInCdpToGroupTokens
  ): Promise<MsgConvertTokenInCdpToGroupTokensResponse>;
  AddEModeCategory(
    request: MsgAddEModeCategory
  ): Promise<MsgAddEModeCategoryResponse>;
  UpdateEModeCategory(
    request: MsgUpdateEModeCategory
  ): Promise<MsgUpdateEModeCategoryResponse>;
  SetAccountEMode(
    request: MsgSetAccountEMode
  ): Promise<MsgSetAccountEModeResponse>;
  RemoveAccountEMode(
    request: MsgRemoveAccountEMode
  ): Promise<MsgRemoveAccountEModeResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
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
    this.CreateRewardScheme = this.CreateRewardScheme.bind(this);
    this.UpdateRewardScheme = this.UpdateRewardScheme.bind(this);
    this.ClaimRewards = this.ClaimRewards.bind(this);
    this.SetStablecoinInterestRate = this.SetStablecoinInterestRate.bind(this);
    this.SetStablecoinMintCap = this.SetStablecoinMintCap.bind(this);
    this.MintStablecoin = this.MintStablecoin.bind(this);
    this.ReturnStablecoin = this.ReturnStablecoin.bind(this);
    this.SetCompleteLiquidationThreshold =
      this.SetCompleteLiquidationThreshold.bind(this);
    this.SetMinimumCloseFactor = this.SetMinimumCloseFactor.bind(this);
    this.SetSmallLiquidationSize = this.SetSmallLiquidationSize.bind(this);
    this.SetStalePriceGracePeriod = this.SetStalePriceGracePeriod.bind(this);
    this.SetCdpPaused = this.SetCdpPaused.bind(this);
    this.ConvertTokenInCdpToGroupTokens =
      this.ConvertTokenInCdpToGroupTokens.bind(this);
    this.AddEModeCategory = this.AddEModeCategory.bind(this);
    this.UpdateEModeCategory = this.UpdateEModeCategory.bind(this);
    this.SetAccountEMode = this.SetAccountEMode.bind(this);
    this.RemoveAccountEMode = this.RemoveAccountEMode.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
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

  ClaimRewards(request: MsgClaimRewards): Promise<MsgClaimRewardsResponse> {
    const data = MsgClaimRewards.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "ClaimRewards",
      data
    );
    return promise.then((data) =>
      MsgClaimRewardsResponse.decode(new _m0.Reader(data))
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

  SetStablecoinMintCap(
    request: MsgSetStablecoinMintCap
  ): Promise<MsgSetStablecoinMintCapResponse> {
    const data = MsgSetStablecoinMintCap.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetStablecoinMintCap",
      data
    );
    return promise.then((data) =>
      MsgSetStablecoinMintCapResponse.decode(new _m0.Reader(data))
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

  SetStalePriceGracePeriod(
    request: MsgSetStalePriceGracePeriod
  ): Promise<MsgSetStalePriceGracePeriodResponse> {
    const data = MsgSetStalePriceGracePeriod.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetStalePriceGracePeriod",
      data
    );
    return promise.then((data) =>
      MsgSetStalePriceGracePeriodResponse.decode(new _m0.Reader(data))
    );
  }

  SetCdpPaused(request: MsgSetCdpPaused): Promise<MsgSetCdpPausedResponse> {
    const data = MsgSetCdpPaused.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetCdpPaused",
      data
    );
    return promise.then((data) =>
      MsgSetCdpPausedResponse.decode(new _m0.Reader(data))
    );
  }

  ConvertTokenInCdpToGroupTokens(
    request: MsgConvertTokenInCdpToGroupTokens
  ): Promise<MsgConvertTokenInCdpToGroupTokensResponse> {
    const data = MsgConvertTokenInCdpToGroupTokens.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "ConvertTokenInCdpToGroupTokens",
      data
    );
    return promise.then((data) =>
      MsgConvertTokenInCdpToGroupTokensResponse.decode(new _m0.Reader(data))
    );
  }

  AddEModeCategory(
    request: MsgAddEModeCategory
  ): Promise<MsgAddEModeCategoryResponse> {
    const data = MsgAddEModeCategory.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "AddEModeCategory",
      data
    );
    return promise.then((data) =>
      MsgAddEModeCategoryResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateEModeCategory(
    request: MsgUpdateEModeCategory
  ): Promise<MsgUpdateEModeCategoryResponse> {
    const data = MsgUpdateEModeCategory.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "UpdateEModeCategory",
      data
    );
    return promise.then((data) =>
      MsgUpdateEModeCategoryResponse.decode(new _m0.Reader(data))
    );
  }

  SetAccountEMode(
    request: MsgSetAccountEMode
  ): Promise<MsgSetAccountEModeResponse> {
    const data = MsgSetAccountEMode.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetAccountEMode",
      data
    );
    return promise.then((data) =>
      MsgSetAccountEModeResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveAccountEMode(
    request: MsgRemoveAccountEMode
  ): Promise<MsgRemoveAccountEModeResponse> {
    const data = MsgRemoveAccountEMode.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "RemoveAccountEMode",
      data
    );
    return promise.then((data) =>
      MsgRemoveAccountEModeResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
