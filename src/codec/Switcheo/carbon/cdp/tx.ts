/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { BoolValue, Int64Value, StringValue } from "../../../google/protobuf/wrappers";
import { AssetParams, UpdateAssetParams } from "./asset_params";
import { EModeCategory } from "./e_mode_category";
import { ParamsToUpdate } from "./params";
import { RateStrategyParams } from "./rate_strategy_params";
import { CreateRewardSchemeParams, UpdateRewardSchemeParams } from "./reward_scheme";

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

export interface MsgSupplyAssetResponse {
}

export interface MsgWithdrawAsset {
  creator: string;
  cibtDenom: string;
  amount: string;
}

export interface MsgWithdrawAssetResponse {
}

export interface MsgLockCollateral {
  creator: string;
  cibtDenom: string;
  amount: string;
}

export interface MsgLockCollateralResponse {
}

export interface MsgUnlockCollateral {
  creator: string;
  cibtDenom: string;
  amount: string;
}

export interface MsgUnlockCollateralResponse {
}

export interface MsgBorrowAsset {
  creator: string;
  denom: string;
  amount: string;
}

export interface MsgBorrowAssetResponse {
}

export interface MsgRepayAsset {
  creator: string;
  denom: string;
  amount: string;
  debtor: string;
  fromCollateral: boolean;
}

export interface MsgRepayAssetResponse {
}

export interface MsgSupplyAssetAndLockCollateral {
  creator: string;
  denom: string;
  supplyAmount: string;
  lockAmount: string;
}

export interface MsgSupplyAssetAndLockCollateralResponse {
}

export interface MsgUnlockCollateralAndWithdrawAsset {
  creator: string;
  cibtDenom: string;
  unlockAmount: string;
  withdrawAmount: string;
}

export interface MsgUnlockCollateralAndWithdrawAssetResponse {
}

export interface MsgLiquidateCollateral {
  creator: string;
  debtor: string;
  minCollateral?: Coin;
  debt?: Coin;
  stableInterest?: Coin;
  debtFromCollateral: boolean;
  interestFromCollateral: boolean;
}

export interface MsgLiquidateCollateralResponse {
}

export interface MsgSetLiquidationFee {
  creator: string;
  liquidationFee: string;
}

export interface MsgSetLiquidationFeeResponse {
}

export interface MsgSetInterestFee {
  creator: string;
  interestFee: string;
}

export interface MsgSetInterestFeeResponse {
}

export interface MsgSetStablecoinMintCap {
  creator: string;
  stablecoinMintCap: string;
}

export interface MsgSetStablecoinMintCapResponse {
}

export interface MsgSetStablecoinInterestRate {
  creator: string;
  stablecoinInterestRate: string;
}

export interface MsgSetStablecoinInterestRateResponse {
}

export interface MsgMintStablecoin {
  creator: string;
  amount: string;
}

export interface MsgMintStablecoinResponse {
}

export interface MsgReturnStablecoin {
  creator: string;
  principal?: Coin;
  interest?: Coin;
  debtor: string;
  principalFromCollateral: boolean;
  interestFromCollateral: boolean;
}

export interface MsgReturnStablecoinResponse {
}

export interface MsgSetCompleteLiquidationThreshold {
  creator: string;
  completeLiquidationThreshold: string;
}

export interface MsgSetCompleteLiquidationThresholdResponse {
}

export interface MsgSetMinimumCloseFactor {
  creator: string;
  minimumCloseFactor: string;
}

export interface MsgSetMinimumCloseFactorResponse {
}

export interface MsgSetSmallLiquidationSize {
  creator: string;
  smallLiquidationSize: string;
}

export interface MsgSetSmallLiquidationSizeResponse {
}

export interface MsgCreateRewardScheme {
  creator: string;
  createRewardSchemeParams?: CreateRewardSchemeParams;
}

export interface MsgCreateRewardSchemeResponse {
}

export interface MsgUpdateRewardScheme {
  updater: string;
  updateRewardSchemeParams?: UpdateRewardSchemeParams;
}

export interface MsgUpdateRewardSchemeResponse {
}

export interface MsgClaimRewards {
  creator: string;
}

export interface MsgClaimRewardsResponse {
}

export interface MsgSetStalePriceGracePeriod {
  creator: string;
  stalePriceGracePeriod?: Duration;
}

export interface MsgSetStalePriceGracePeriodResponse {
}

export interface MsgSetCdpPaused {
  creator: string;
  cdpPaused: boolean;
}

export interface MsgSetCdpPausedResponse {
}

export interface MsgConvertTokenInCdpToGroupTokens {
  creator: string;
  denom: string;
}

export interface MsgConvertTokenInCdpToGroupTokensResponse {
}

export interface MsgAddEModeCategory {
  creator: string;
  eModeCategory?: EModeCategory;
}

export interface MsgAddEModeCategoryResponse {
}

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

export interface MsgUpdateEModeCategoryResponse {
}

export interface MsgSetAccountEMode {
  creator: string;
  eModeCategoryName: string;
}

export interface MsgSetAccountEModeResponse {
}

export interface MsgRemoveAccountEMode {
  creator: string;
}

export interface MsgRemoveAccountEModeResponse {
}

export interface MsgAddAccountToLiquidationProtection {
  creator: string;
  address: string;
}

export interface MsgAddAccountToLiquidationProtectionResponse {
}

export interface MsgRemoveAccountFromLiquidationProtection {
  creator: string;
  address: string;
}

export interface MsgRemoveAccountFromLiquidationProtectionResponse {
}

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
export interface MsgUpdateParamsResponse {
}

function createBaseMsgAddRateStrategy(): MsgAddRateStrategy {
  return { creator: "", rateStrategyParams: undefined };
}

export const MsgAddRateStrategy = {
  encode(message: MsgAddRateStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(message.rateStrategyParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRateStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRateStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rateStrategyParams = RateStrategyParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddRateStrategy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      rateStrategyParams: isSet(object.rateStrategyParams)
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined,
    };
  },

  toJSON(message: MsgAddRateStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.rateStrategyParams !== undefined && (obj.rateStrategyParams = message.rateStrategyParams
      ? RateStrategyParams.toJSON(message.rateStrategyParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgAddRateStrategy>): MsgAddRateStrategy {
    return MsgAddRateStrategy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddRateStrategy>): MsgAddRateStrategy {
    const message = createBaseMsgAddRateStrategy();
    message.creator = object.creator ?? "";
    message.rateStrategyParams = (object.rateStrategyParams !== undefined && object.rateStrategyParams !== null)
      ? RateStrategyParams.fromPartial(object.rateStrategyParams)
      : undefined;
    return message;
  },
};

function createBaseMsgAddRateStrategyResponse(): MsgAddRateStrategyResponse {
  return { rateStrategyParams: undefined };
}

export const MsgAddRateStrategyResponse = {
  encode(message: MsgAddRateStrategyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(message.rateStrategyParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRateStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRateStrategyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rateStrategyParams = RateStrategyParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddRateStrategyResponse {
    return {
      rateStrategyParams: isSet(object.rateStrategyParams)
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined,
    };
  },

  toJSON(message: MsgAddRateStrategyResponse): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined && (obj.rateStrategyParams = message.rateStrategyParams
      ? RateStrategyParams.toJSON(message.rateStrategyParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgAddRateStrategyResponse>): MsgAddRateStrategyResponse {
    return MsgAddRateStrategyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddRateStrategyResponse>): MsgAddRateStrategyResponse {
    const message = createBaseMsgAddRateStrategyResponse();
    message.rateStrategyParams = (object.rateStrategyParams !== undefined && object.rateStrategyParams !== null)
      ? RateStrategyParams.fromPartial(object.rateStrategyParams)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateRateStrategy(): MsgUpdateRateStrategy {
  return { creator: "", rateStrategyParams: undefined };
}

export const MsgUpdateRateStrategy = {
  encode(message: MsgUpdateRateStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(message.rateStrategyParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRateStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRateStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rateStrategyParams = RateStrategyParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRateStrategy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      rateStrategyParams: isSet(object.rateStrategyParams)
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateRateStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.rateStrategyParams !== undefined && (obj.rateStrategyParams = message.rateStrategyParams
      ? RateStrategyParams.toJSON(message.rateStrategyParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateRateStrategy>): MsgUpdateRateStrategy {
    return MsgUpdateRateStrategy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateRateStrategy>): MsgUpdateRateStrategy {
    const message = createBaseMsgUpdateRateStrategy();
    message.creator = object.creator ?? "";
    message.rateStrategyParams = (object.rateStrategyParams !== undefined && object.rateStrategyParams !== null)
      ? RateStrategyParams.fromPartial(object.rateStrategyParams)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateRateStrategyResponse(): MsgUpdateRateStrategyResponse {
  return { rateStrategyParams: undefined };
}

export const MsgUpdateRateStrategyResponse = {
  encode(message: MsgUpdateRateStrategyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(message.rateStrategyParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRateStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRateStrategyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rateStrategyParams = RateStrategyParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRateStrategyResponse {
    return {
      rateStrategyParams: isSet(object.rateStrategyParams)
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateRateStrategyResponse): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined && (obj.rateStrategyParams = message.rateStrategyParams
      ? RateStrategyParams.toJSON(message.rateStrategyParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateRateStrategyResponse>): MsgUpdateRateStrategyResponse {
    return MsgUpdateRateStrategyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateRateStrategyResponse>): MsgUpdateRateStrategyResponse {
    const message = createBaseMsgUpdateRateStrategyResponse();
    message.rateStrategyParams = (object.rateStrategyParams !== undefined && object.rateStrategyParams !== null)
      ? RateStrategyParams.fromPartial(object.rateStrategyParams)
      : undefined;
    return message;
  },
};

function createBaseMsgRemoveRateStrategy(): MsgRemoveRateStrategy {
  return { creator: "", name: "" };
}

export const MsgRemoveRateStrategy = {
  encode(message: MsgRemoveRateStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveRateStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRateStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveRateStrategy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgRemoveRateStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveRateStrategy>): MsgRemoveRateStrategy {
    return MsgRemoveRateStrategy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveRateStrategy>): MsgRemoveRateStrategy {
    const message = createBaseMsgRemoveRateStrategy();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgRemoveRateStrategyResponse(): MsgRemoveRateStrategyResponse {
  return { name: "" };
}

export const MsgRemoveRateStrategyResponse = {
  encode(message: MsgRemoveRateStrategyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveRateStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRateStrategyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveRateStrategyResponse {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: MsgRemoveRateStrategyResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveRateStrategyResponse>): MsgRemoveRateStrategyResponse {
    return MsgRemoveRateStrategyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveRateStrategyResponse>): MsgRemoveRateStrategyResponse {
    const message = createBaseMsgRemoveRateStrategyResponse();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgAddAsset(): MsgAddAsset {
  return { creator: "", assetParams: undefined };
}

export const MsgAddAsset = {
  encode(message: MsgAddAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.assetParams !== undefined) {
      AssetParams.encode(message.assetParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAsset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assetParams = AssetParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      assetParams: isSet(object.assetParams) ? AssetParams.fromJSON(object.assetParams) : undefined,
    };
  },

  toJSON(message: MsgAddAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams ? AssetParams.toJSON(message.assetParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgAddAsset>): MsgAddAsset {
    return MsgAddAsset.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddAsset>): MsgAddAsset {
    const message = createBaseMsgAddAsset();
    message.creator = object.creator ?? "";
    message.assetParams = (object.assetParams !== undefined && object.assetParams !== null)
      ? AssetParams.fromPartial(object.assetParams)
      : undefined;
    return message;
  },
};

function createBaseMsgAddAssetResponse(): MsgAddAssetResponse {
  return { assetParams: undefined };
}

export const MsgAddAssetResponse = {
  encode(message: MsgAddAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParams.encode(message.assetParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetParams = AssetParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddAssetResponse {
    return { assetParams: isSet(object.assetParams) ? AssetParams.fromJSON(object.assetParams) : undefined };
  },

  toJSON(message: MsgAddAssetResponse): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams ? AssetParams.toJSON(message.assetParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgAddAssetResponse>): MsgAddAssetResponse {
    return MsgAddAssetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddAssetResponse>): MsgAddAssetResponse {
    const message = createBaseMsgAddAssetResponse();
    message.assetParams = (object.assetParams !== undefined && object.assetParams !== null)
      ? AssetParams.fromPartial(object.assetParams)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateAsset(): MsgUpdateAsset {
  return { creator: "", assetParams: undefined };
}

export const MsgUpdateAsset = {
  encode(message: MsgUpdateAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.assetParams !== undefined) {
      UpdateAssetParams.encode(message.assetParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAsset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assetParams = UpdateAssetParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      assetParams: isSet(object.assetParams) ? UpdateAssetParams.fromJSON(object.assetParams) : undefined,
    };
  },

  toJSON(message: MsgUpdateAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams ? UpdateAssetParams.toJSON(message.assetParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateAsset>): MsgUpdateAsset {
    return MsgUpdateAsset.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateAsset>): MsgUpdateAsset {
    const message = createBaseMsgUpdateAsset();
    message.creator = object.creator ?? "";
    message.assetParams = (object.assetParams !== undefined && object.assetParams !== null)
      ? UpdateAssetParams.fromPartial(object.assetParams)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateAssetResponse(): MsgUpdateAssetResponse {
  return { assetParams: undefined };
}

export const MsgUpdateAssetResponse = {
  encode(message: MsgUpdateAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParams.encode(message.assetParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetParams = AssetParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAssetResponse {
    return { assetParams: isSet(object.assetParams) ? AssetParams.fromJSON(object.assetParams) : undefined };
  },

  toJSON(message: MsgUpdateAssetResponse): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams ? AssetParams.toJSON(message.assetParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse {
    return MsgUpdateAssetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse {
    const message = createBaseMsgUpdateAssetResponse();
    message.assetParams = (object.assetParams !== undefined && object.assetParams !== null)
      ? AssetParams.fromPartial(object.assetParams)
      : undefined;
    return message;
  },
};

function createBaseMsgSupplyAsset(): MsgSupplyAsset {
  return { creator: "", denom: "", amount: "" };
}

export const MsgSupplyAsset = {
  encode(message: MsgSupplyAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSupplyAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSupplyAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgSupplyAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<MsgSupplyAsset>): MsgSupplyAsset {
    return MsgSupplyAsset.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSupplyAsset>): MsgSupplyAsset {
    const message = createBaseMsgSupplyAsset();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgSupplyAssetResponse(): MsgSupplyAssetResponse {
  return {};
}

export const MsgSupplyAssetResponse = {
  encode(_: MsgSupplyAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSupplyAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSupplyAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSupplyAssetResponse {
    return {};
  },

  toJSON(_: MsgSupplyAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSupplyAssetResponse>): MsgSupplyAssetResponse {
    return MsgSupplyAssetResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSupplyAssetResponse>): MsgSupplyAssetResponse {
    const message = createBaseMsgSupplyAssetResponse();
    return message;
  },
};

function createBaseMsgWithdrawAsset(): MsgWithdrawAsset {
  return { creator: "", cibtDenom: "", amount: "" };
}

export const MsgWithdrawAsset = {
  encode(message: MsgWithdrawAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cibtDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgWithdrawAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawAsset>): MsgWithdrawAsset {
    return MsgWithdrawAsset.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgWithdrawAsset>): MsgWithdrawAsset {
    const message = createBaseMsgWithdrawAsset();
    message.creator = object.creator ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgWithdrawAssetResponse(): MsgWithdrawAssetResponse {
  return {};
}

export const MsgWithdrawAssetResponse = {
  encode(_: MsgWithdrawAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawAssetResponse {
    return {};
  },

  toJSON(_: MsgWithdrawAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawAssetResponse>): MsgWithdrawAssetResponse {
    return MsgWithdrawAssetResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgWithdrawAssetResponse>): MsgWithdrawAssetResponse {
    const message = createBaseMsgWithdrawAssetResponse();
    return message;
  },
};

function createBaseMsgLockCollateral(): MsgLockCollateral {
  return { creator: "", cibtDenom: "", amount: "" };
}

export const MsgLockCollateral = {
  encode(message: MsgLockCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cibtDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLockCollateral {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgLockCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<MsgLockCollateral>): MsgLockCollateral {
    return MsgLockCollateral.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgLockCollateral>): MsgLockCollateral {
    const message = createBaseMsgLockCollateral();
    message.creator = object.creator ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgLockCollateralResponse(): MsgLockCollateralResponse {
  return {};
}

export const MsgLockCollateralResponse = {
  encode(_: MsgLockCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgLockCollateralResponse {
    return {};
  },

  toJSON(_: MsgLockCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgLockCollateralResponse>): MsgLockCollateralResponse {
    return MsgLockCollateralResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgLockCollateralResponse>): MsgLockCollateralResponse {
    const message = createBaseMsgLockCollateralResponse();
    return message;
  },
};

function createBaseMsgUnlockCollateral(): MsgUnlockCollateral {
  return { creator: "", cibtDenom: "", amount: "" };
}

export const MsgUnlockCollateral = {
  encode(message: MsgUnlockCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cibtDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUnlockCollateral {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgUnlockCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<MsgUnlockCollateral>): MsgUnlockCollateral {
    return MsgUnlockCollateral.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUnlockCollateral>): MsgUnlockCollateral {
    const message = createBaseMsgUnlockCollateral();
    message.creator = object.creator ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgUnlockCollateralResponse(): MsgUnlockCollateralResponse {
  return {};
}

export const MsgUnlockCollateralResponse = {
  encode(_: MsgUnlockCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlockCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUnlockCollateralResponse {
    return {};
  },

  toJSON(_: MsgUnlockCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUnlockCollateralResponse>): MsgUnlockCollateralResponse {
    return MsgUnlockCollateralResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUnlockCollateralResponse>): MsgUnlockCollateralResponse {
    const message = createBaseMsgUnlockCollateralResponse();
    return message;
  },
};

function createBaseMsgBorrowAsset(): MsgBorrowAsset {
  return { creator: "", denom: "", amount: "" };
}

export const MsgBorrowAsset = {
  encode(message: MsgBorrowAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrowAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBorrowAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgBorrowAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<MsgBorrowAsset>): MsgBorrowAsset {
    return MsgBorrowAsset.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBorrowAsset>): MsgBorrowAsset {
    const message = createBaseMsgBorrowAsset();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgBorrowAssetResponse(): MsgBorrowAssetResponse {
  return {};
}

export const MsgBorrowAssetResponse = {
  encode(_: MsgBorrowAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBorrowAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrowAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgBorrowAssetResponse {
    return {};
  },

  toJSON(_: MsgBorrowAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgBorrowAssetResponse>): MsgBorrowAssetResponse {
    return MsgBorrowAssetResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgBorrowAssetResponse>): MsgBorrowAssetResponse {
    const message = createBaseMsgBorrowAssetResponse();
    return message;
  },
};

function createBaseMsgRepayAsset(): MsgRepayAsset {
  return { creator: "", denom: "", amount: "", debtor: "", fromCollateral: false };
}

export const MsgRepayAsset = {
  encode(message: MsgRepayAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.debtor = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.fromCollateral = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRepayAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      debtor: isSet(object.debtor) ? String(object.debtor) : "",
      fromCollateral: isSet(object.fromCollateral) ? Boolean(object.fromCollateral) : false,
    };
  },

  toJSON(message: MsgRepayAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.fromCollateral !== undefined && (obj.fromCollateral = message.fromCollateral);
    return obj;
  },

  create(base?: DeepPartial<MsgRepayAsset>): MsgRepayAsset {
    return MsgRepayAsset.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRepayAsset>): MsgRepayAsset {
    const message = createBaseMsgRepayAsset();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.debtor = object.debtor ?? "";
    message.fromCollateral = object.fromCollateral ?? false;
    return message;
  },
};

function createBaseMsgRepayAssetResponse(): MsgRepayAssetResponse {
  return {};
}

export const MsgRepayAssetResponse = {
  encode(_: MsgRepayAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRepayAssetResponse {
    return {};
  },

  toJSON(_: MsgRepayAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRepayAssetResponse>): MsgRepayAssetResponse {
    return MsgRepayAssetResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRepayAssetResponse>): MsgRepayAssetResponse {
    const message = createBaseMsgRepayAssetResponse();
    return message;
  },
};

function createBaseMsgSupplyAssetAndLockCollateral(): MsgSupplyAssetAndLockCollateral {
  return { creator: "", denom: "", supplyAmount: "", lockAmount: "" };
}

export const MsgSupplyAssetAndLockCollateral = {
  encode(message: MsgSupplyAssetAndLockCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSupplyAssetAndLockCollateral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSupplyAssetAndLockCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.supplyAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lockAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSupplyAssetAndLockCollateral {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      supplyAmount: isSet(object.supplyAmount) ? String(object.supplyAmount) : "",
      lockAmount: isSet(object.lockAmount) ? String(object.lockAmount) : "",
    };
  },

  toJSON(message: MsgSupplyAssetAndLockCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.supplyAmount !== undefined && (obj.supplyAmount = message.supplyAmount);
    message.lockAmount !== undefined && (obj.lockAmount = message.lockAmount);
    return obj;
  },

  create(base?: DeepPartial<MsgSupplyAssetAndLockCollateral>): MsgSupplyAssetAndLockCollateral {
    return MsgSupplyAssetAndLockCollateral.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSupplyAssetAndLockCollateral>): MsgSupplyAssetAndLockCollateral {
    const message = createBaseMsgSupplyAssetAndLockCollateral();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.supplyAmount = object.supplyAmount ?? "";
    message.lockAmount = object.lockAmount ?? "";
    return message;
  },
};

function createBaseMsgSupplyAssetAndLockCollateralResponse(): MsgSupplyAssetAndLockCollateralResponse {
  return {};
}

export const MsgSupplyAssetAndLockCollateralResponse = {
  encode(_: MsgSupplyAssetAndLockCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSupplyAssetAndLockCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSupplyAssetAndLockCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSupplyAssetAndLockCollateralResponse {
    return {};
  },

  toJSON(_: MsgSupplyAssetAndLockCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSupplyAssetAndLockCollateralResponse>): MsgSupplyAssetAndLockCollateralResponse {
    return MsgSupplyAssetAndLockCollateralResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSupplyAssetAndLockCollateralResponse>): MsgSupplyAssetAndLockCollateralResponse {
    const message = createBaseMsgSupplyAssetAndLockCollateralResponse();
    return message;
  },
};

function createBaseMsgUnlockCollateralAndWithdrawAsset(): MsgUnlockCollateralAndWithdrawAsset {
  return { creator: "", cibtDenom: "", unlockAmount: "", withdrawAmount: "" };
}

export const MsgUnlockCollateralAndWithdrawAsset = {
  encode(message: MsgUnlockCollateralAndWithdrawAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlockCollateralAndWithdrawAsset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockCollateralAndWithdrawAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cibtDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unlockAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.withdrawAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUnlockCollateralAndWithdrawAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      unlockAmount: isSet(object.unlockAmount) ? String(object.unlockAmount) : "",
      withdrawAmount: isSet(object.withdrawAmount) ? String(object.withdrawAmount) : "",
    };
  },

  toJSON(message: MsgUnlockCollateralAndWithdrawAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.unlockAmount !== undefined && (obj.unlockAmount = message.unlockAmount);
    message.withdrawAmount !== undefined && (obj.withdrawAmount = message.withdrawAmount);
    return obj;
  },

  create(base?: DeepPartial<MsgUnlockCollateralAndWithdrawAsset>): MsgUnlockCollateralAndWithdrawAsset {
    return MsgUnlockCollateralAndWithdrawAsset.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUnlockCollateralAndWithdrawAsset>): MsgUnlockCollateralAndWithdrawAsset {
    const message = createBaseMsgUnlockCollateralAndWithdrawAsset();
    message.creator = object.creator ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.unlockAmount = object.unlockAmount ?? "";
    message.withdrawAmount = object.withdrawAmount ?? "";
    return message;
  },
};

function createBaseMsgUnlockCollateralAndWithdrawAssetResponse(): MsgUnlockCollateralAndWithdrawAssetResponse {
  return {};
}

export const MsgUnlockCollateralAndWithdrawAssetResponse = {
  encode(_: MsgUnlockCollateralAndWithdrawAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlockCollateralAndWithdrawAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockCollateralAndWithdrawAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUnlockCollateralAndWithdrawAssetResponse {
    return {};
  },

  toJSON(_: MsgUnlockCollateralAndWithdrawAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUnlockCollateralAndWithdrawAssetResponse>): MsgUnlockCollateralAndWithdrawAssetResponse {
    return MsgUnlockCollateralAndWithdrawAssetResponse.fromPartial(base ?? {});
  },

  fromPartial(
    _: DeepPartial<MsgUnlockCollateralAndWithdrawAssetResponse>,
  ): MsgUnlockCollateralAndWithdrawAssetResponse {
    const message = createBaseMsgUnlockCollateralAndWithdrawAssetResponse();
    return message;
  },
};

function createBaseMsgLiquidateCollateral(): MsgLiquidateCollateral {
  return {
    creator: "",
    debtor: "",
    minCollateral: undefined,
    debt: undefined,
    stableInterest: undefined,
    debtFromCollateral: false,
    interestFromCollateral: false,
  };
}

export const MsgLiquidateCollateral = {
  encode(message: MsgLiquidateCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateCollateral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.debtor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.minCollateral = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.debt = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stableInterest = Coin.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.debtFromCollateral = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.interestFromCollateral = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateral {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      debtor: isSet(object.debtor) ? String(object.debtor) : "",
      minCollateral: isSet(object.minCollateral) ? Coin.fromJSON(object.minCollateral) : undefined,
      debt: isSet(object.debt) ? Coin.fromJSON(object.debt) : undefined,
      stableInterest: isSet(object.stableInterest) ? Coin.fromJSON(object.stableInterest) : undefined,
      debtFromCollateral: isSet(object.debtFromCollateral) ? Boolean(object.debtFromCollateral) : false,
      interestFromCollateral: isSet(object.interestFromCollateral) ? Boolean(object.interestFromCollateral) : false,
    };
  },

  toJSON(message: MsgLiquidateCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.minCollateral !== undefined &&
      (obj.minCollateral = message.minCollateral ? Coin.toJSON(message.minCollateral) : undefined);
    message.debt !== undefined && (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    message.stableInterest !== undefined &&
      (obj.stableInterest = message.stableInterest ? Coin.toJSON(message.stableInterest) : undefined);
    message.debtFromCollateral !== undefined && (obj.debtFromCollateral = message.debtFromCollateral);
    message.interestFromCollateral !== undefined && (obj.interestFromCollateral = message.interestFromCollateral);
    return obj;
  },

  create(base?: DeepPartial<MsgLiquidateCollateral>): MsgLiquidateCollateral {
    return MsgLiquidateCollateral.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgLiquidateCollateral>): MsgLiquidateCollateral {
    const message = createBaseMsgLiquidateCollateral();
    message.creator = object.creator ?? "";
    message.debtor = object.debtor ?? "";
    message.minCollateral = (object.minCollateral !== undefined && object.minCollateral !== null)
      ? Coin.fromPartial(object.minCollateral)
      : undefined;
    message.debt = (object.debt !== undefined && object.debt !== null) ? Coin.fromPartial(object.debt) : undefined;
    message.stableInterest = (object.stableInterest !== undefined && object.stableInterest !== null)
      ? Coin.fromPartial(object.stableInterest)
      : undefined;
    message.debtFromCollateral = object.debtFromCollateral ?? false;
    message.interestFromCollateral = object.interestFromCollateral ?? false;
    return message;
  },
};

function createBaseMsgLiquidateCollateralResponse(): MsgLiquidateCollateralResponse {
  return {};
}

export const MsgLiquidateCollateralResponse = {
  encode(_: MsgLiquidateCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgLiquidateCollateralResponse {
    return {};
  },

  toJSON(_: MsgLiquidateCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgLiquidateCollateralResponse>): MsgLiquidateCollateralResponse {
    return MsgLiquidateCollateralResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgLiquidateCollateralResponse>): MsgLiquidateCollateralResponse {
    const message = createBaseMsgLiquidateCollateralResponse();
    return message;
  },
};

function createBaseMsgSetLiquidationFee(): MsgSetLiquidationFee {
  return { creator: "", liquidationFee: "" };
}

export const MsgSetLiquidationFee = {
  encode(message: MsgSetLiquidationFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.liquidationFee !== "") {
      writer.uint32(18).string(message.liquidationFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLiquidationFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetLiquidationFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liquidationFee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetLiquidationFee {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      liquidationFee: isSet(object.liquidationFee) ? String(object.liquidationFee) : "",
    };
  },

  toJSON(message: MsgSetLiquidationFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.liquidationFee !== undefined && (obj.liquidationFee = message.liquidationFee);
    return obj;
  },

  create(base?: DeepPartial<MsgSetLiquidationFee>): MsgSetLiquidationFee {
    return MsgSetLiquidationFee.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetLiquidationFee>): MsgSetLiquidationFee {
    const message = createBaseMsgSetLiquidationFee();
    message.creator = object.creator ?? "";
    message.liquidationFee = object.liquidationFee ?? "";
    return message;
  },
};

function createBaseMsgSetLiquidationFeeResponse(): MsgSetLiquidationFeeResponse {
  return {};
}

export const MsgSetLiquidationFeeResponse = {
  encode(_: MsgSetLiquidationFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLiquidationFeeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetLiquidationFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetLiquidationFeeResponse {
    return {};
  },

  toJSON(_: MsgSetLiquidationFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetLiquidationFeeResponse>): MsgSetLiquidationFeeResponse {
    return MsgSetLiquidationFeeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetLiquidationFeeResponse>): MsgSetLiquidationFeeResponse {
    const message = createBaseMsgSetLiquidationFeeResponse();
    return message;
  },
};

function createBaseMsgSetInterestFee(): MsgSetInterestFee {
  return { creator: "", interestFee: "" };
}

export const MsgSetInterestFee = {
  encode(message: MsgSetInterestFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.interestFee !== "") {
      writer.uint32(18).string(message.interestFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetInterestFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInterestFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.interestFee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetInterestFee {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      interestFee: isSet(object.interestFee) ? String(object.interestFee) : "",
    };
  },

  toJSON(message: MsgSetInterestFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.interestFee !== undefined && (obj.interestFee = message.interestFee);
    return obj;
  },

  create(base?: DeepPartial<MsgSetInterestFee>): MsgSetInterestFee {
    return MsgSetInterestFee.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetInterestFee>): MsgSetInterestFee {
    const message = createBaseMsgSetInterestFee();
    message.creator = object.creator ?? "";
    message.interestFee = object.interestFee ?? "";
    return message;
  },
};

function createBaseMsgSetInterestFeeResponse(): MsgSetInterestFeeResponse {
  return {};
}

export const MsgSetInterestFeeResponse = {
  encode(_: MsgSetInterestFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetInterestFeeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInterestFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetInterestFeeResponse {
    return {};
  },

  toJSON(_: MsgSetInterestFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetInterestFeeResponse>): MsgSetInterestFeeResponse {
    return MsgSetInterestFeeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetInterestFeeResponse>): MsgSetInterestFeeResponse {
    const message = createBaseMsgSetInterestFeeResponse();
    return message;
  },
};

function createBaseMsgSetStablecoinMintCap(): MsgSetStablecoinMintCap {
  return { creator: "", stablecoinMintCap: "" };
}

export const MsgSetStablecoinMintCap = {
  encode(message: MsgSetStablecoinMintCap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.stablecoinMintCap !== "") {
      writer.uint32(18).string(message.stablecoinMintCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStablecoinMintCap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStablecoinMintCap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stablecoinMintCap = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetStablecoinMintCap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      stablecoinMintCap: isSet(object.stablecoinMintCap) ? String(object.stablecoinMintCap) : "",
    };
  },

  toJSON(message: MsgSetStablecoinMintCap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stablecoinMintCap !== undefined && (obj.stablecoinMintCap = message.stablecoinMintCap);
    return obj;
  },

  create(base?: DeepPartial<MsgSetStablecoinMintCap>): MsgSetStablecoinMintCap {
    return MsgSetStablecoinMintCap.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetStablecoinMintCap>): MsgSetStablecoinMintCap {
    const message = createBaseMsgSetStablecoinMintCap();
    message.creator = object.creator ?? "";
    message.stablecoinMintCap = object.stablecoinMintCap ?? "";
    return message;
  },
};

function createBaseMsgSetStablecoinMintCapResponse(): MsgSetStablecoinMintCapResponse {
  return {};
}

export const MsgSetStablecoinMintCapResponse = {
  encode(_: MsgSetStablecoinMintCapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStablecoinMintCapResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStablecoinMintCapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetStablecoinMintCapResponse {
    return {};
  },

  toJSON(_: MsgSetStablecoinMintCapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetStablecoinMintCapResponse>): MsgSetStablecoinMintCapResponse {
    return MsgSetStablecoinMintCapResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetStablecoinMintCapResponse>): MsgSetStablecoinMintCapResponse {
    const message = createBaseMsgSetStablecoinMintCapResponse();
    return message;
  },
};

function createBaseMsgSetStablecoinInterestRate(): MsgSetStablecoinInterestRate {
  return { creator: "", stablecoinInterestRate: "" };
}

export const MsgSetStablecoinInterestRate = {
  encode(message: MsgSetStablecoinInterestRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.stablecoinInterestRate !== "") {
      writer.uint32(18).string(message.stablecoinInterestRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStablecoinInterestRate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStablecoinInterestRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stablecoinInterestRate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetStablecoinInterestRate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      stablecoinInterestRate: isSet(object.stablecoinInterestRate) ? String(object.stablecoinInterestRate) : "",
    };
  },

  toJSON(message: MsgSetStablecoinInterestRate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stablecoinInterestRate !== undefined && (obj.stablecoinInterestRate = message.stablecoinInterestRate);
    return obj;
  },

  create(base?: DeepPartial<MsgSetStablecoinInterestRate>): MsgSetStablecoinInterestRate {
    return MsgSetStablecoinInterestRate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetStablecoinInterestRate>): MsgSetStablecoinInterestRate {
    const message = createBaseMsgSetStablecoinInterestRate();
    message.creator = object.creator ?? "";
    message.stablecoinInterestRate = object.stablecoinInterestRate ?? "";
    return message;
  },
};

function createBaseMsgSetStablecoinInterestRateResponse(): MsgSetStablecoinInterestRateResponse {
  return {};
}

export const MsgSetStablecoinInterestRateResponse = {
  encode(_: MsgSetStablecoinInterestRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStablecoinInterestRateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStablecoinInterestRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetStablecoinInterestRateResponse {
    return {};
  },

  toJSON(_: MsgSetStablecoinInterestRateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetStablecoinInterestRateResponse>): MsgSetStablecoinInterestRateResponse {
    return MsgSetStablecoinInterestRateResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetStablecoinInterestRateResponse>): MsgSetStablecoinInterestRateResponse {
    const message = createBaseMsgSetStablecoinInterestRateResponse();
    return message;
  },
};

function createBaseMsgMintStablecoin(): MsgMintStablecoin {
  return { creator: "", amount: "" };
}

export const MsgMintStablecoin = {
  encode(message: MsgMintStablecoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintStablecoin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintStablecoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMintStablecoin {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgMintStablecoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<MsgMintStablecoin>): MsgMintStablecoin {
    return MsgMintStablecoin.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgMintStablecoin>): MsgMintStablecoin {
    const message = createBaseMsgMintStablecoin();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgMintStablecoinResponse(): MsgMintStablecoinResponse {
  return {};
}

export const MsgMintStablecoinResponse = {
  encode(_: MsgMintStablecoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintStablecoinResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintStablecoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgMintStablecoinResponse {
    return {};
  },

  toJSON(_: MsgMintStablecoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgMintStablecoinResponse>): MsgMintStablecoinResponse {
    return MsgMintStablecoinResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgMintStablecoinResponse>): MsgMintStablecoinResponse {
    const message = createBaseMsgMintStablecoinResponse();
    return message;
  },
};

function createBaseMsgReturnStablecoin(): MsgReturnStablecoin {
  return {
    creator: "",
    principal: undefined,
    interest: undefined,
    debtor: "",
    principalFromCollateral: false,
    interestFromCollateral: false,
  };
}

export const MsgReturnStablecoin = {
  encode(message: MsgReturnStablecoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReturnStablecoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.principal = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.interest = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.debtor = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.principalFromCollateral = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.interestFromCollateral = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgReturnStablecoin {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      principal: isSet(object.principal) ? Coin.fromJSON(object.principal) : undefined,
      interest: isSet(object.interest) ? Coin.fromJSON(object.interest) : undefined,
      debtor: isSet(object.debtor) ? String(object.debtor) : "",
      principalFromCollateral: isSet(object.principalFromCollateral) ? Boolean(object.principalFromCollateral) : false,
      interestFromCollateral: isSet(object.interestFromCollateral) ? Boolean(object.interestFromCollateral) : false,
    };
  },

  toJSON(message: MsgReturnStablecoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.principal !== undefined && (obj.principal = message.principal ? Coin.toJSON(message.principal) : undefined);
    message.interest !== undefined && (obj.interest = message.interest ? Coin.toJSON(message.interest) : undefined);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.principalFromCollateral !== undefined && (obj.principalFromCollateral = message.principalFromCollateral);
    message.interestFromCollateral !== undefined && (obj.interestFromCollateral = message.interestFromCollateral);
    return obj;
  },

  create(base?: DeepPartial<MsgReturnStablecoin>): MsgReturnStablecoin {
    return MsgReturnStablecoin.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgReturnStablecoin>): MsgReturnStablecoin {
    const message = createBaseMsgReturnStablecoin();
    message.creator = object.creator ?? "";
    message.principal = (object.principal !== undefined && object.principal !== null)
      ? Coin.fromPartial(object.principal)
      : undefined;
    message.interest = (object.interest !== undefined && object.interest !== null)
      ? Coin.fromPartial(object.interest)
      : undefined;
    message.debtor = object.debtor ?? "";
    message.principalFromCollateral = object.principalFromCollateral ?? false;
    message.interestFromCollateral = object.interestFromCollateral ?? false;
    return message;
  },
};

function createBaseMsgReturnStablecoinResponse(): MsgReturnStablecoinResponse {
  return {};
}

export const MsgReturnStablecoinResponse = {
  encode(_: MsgReturnStablecoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReturnStablecoinResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReturnStablecoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgReturnStablecoinResponse {
    return {};
  },

  toJSON(_: MsgReturnStablecoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgReturnStablecoinResponse>): MsgReturnStablecoinResponse {
    return MsgReturnStablecoinResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgReturnStablecoinResponse>): MsgReturnStablecoinResponse {
    const message = createBaseMsgReturnStablecoinResponse();
    return message;
  },
};

function createBaseMsgSetCompleteLiquidationThreshold(): MsgSetCompleteLiquidationThreshold {
  return { creator: "", completeLiquidationThreshold: "" };
}

export const MsgSetCompleteLiquidationThreshold = {
  encode(message: MsgSetCompleteLiquidationThreshold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.completeLiquidationThreshold !== "") {
      writer.uint32(18).string(message.completeLiquidationThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCompleteLiquidationThreshold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCompleteLiquidationThreshold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.completeLiquidationThreshold = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetCompleteLiquidationThreshold {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      completeLiquidationThreshold: isSet(object.completeLiquidationThreshold)
        ? String(object.completeLiquidationThreshold)
        : "",
    };
  },

  toJSON(message: MsgSetCompleteLiquidationThreshold): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.completeLiquidationThreshold !== undefined &&
      (obj.completeLiquidationThreshold = message.completeLiquidationThreshold);
    return obj;
  },

  create(base?: DeepPartial<MsgSetCompleteLiquidationThreshold>): MsgSetCompleteLiquidationThreshold {
    return MsgSetCompleteLiquidationThreshold.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetCompleteLiquidationThreshold>): MsgSetCompleteLiquidationThreshold {
    const message = createBaseMsgSetCompleteLiquidationThreshold();
    message.creator = object.creator ?? "";
    message.completeLiquidationThreshold = object.completeLiquidationThreshold ?? "";
    return message;
  },
};

function createBaseMsgSetCompleteLiquidationThresholdResponse(): MsgSetCompleteLiquidationThresholdResponse {
  return {};
}

export const MsgSetCompleteLiquidationThresholdResponse = {
  encode(_: MsgSetCompleteLiquidationThresholdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCompleteLiquidationThresholdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCompleteLiquidationThresholdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetCompleteLiquidationThresholdResponse {
    return {};
  },

  toJSON(_: MsgSetCompleteLiquidationThresholdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetCompleteLiquidationThresholdResponse>): MsgSetCompleteLiquidationThresholdResponse {
    return MsgSetCompleteLiquidationThresholdResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetCompleteLiquidationThresholdResponse>): MsgSetCompleteLiquidationThresholdResponse {
    const message = createBaseMsgSetCompleteLiquidationThresholdResponse();
    return message;
  },
};

function createBaseMsgSetMinimumCloseFactor(): MsgSetMinimumCloseFactor {
  return { creator: "", minimumCloseFactor: "" };
}

export const MsgSetMinimumCloseFactor = {
  encode(message: MsgSetMinimumCloseFactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.minimumCloseFactor !== "") {
      writer.uint32(18).string(message.minimumCloseFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinimumCloseFactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinimumCloseFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.minimumCloseFactor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetMinimumCloseFactor {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      minimumCloseFactor: isSet(object.minimumCloseFactor) ? String(object.minimumCloseFactor) : "",
    };
  },

  toJSON(message: MsgSetMinimumCloseFactor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.minimumCloseFactor !== undefined && (obj.minimumCloseFactor = message.minimumCloseFactor);
    return obj;
  },

  create(base?: DeepPartial<MsgSetMinimumCloseFactor>): MsgSetMinimumCloseFactor {
    return MsgSetMinimumCloseFactor.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetMinimumCloseFactor>): MsgSetMinimumCloseFactor {
    const message = createBaseMsgSetMinimumCloseFactor();
    message.creator = object.creator ?? "";
    message.minimumCloseFactor = object.minimumCloseFactor ?? "";
    return message;
  },
};

function createBaseMsgSetMinimumCloseFactorResponse(): MsgSetMinimumCloseFactorResponse {
  return {};
}

export const MsgSetMinimumCloseFactorResponse = {
  encode(_: MsgSetMinimumCloseFactorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinimumCloseFactorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinimumCloseFactorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetMinimumCloseFactorResponse {
    return {};
  },

  toJSON(_: MsgSetMinimumCloseFactorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetMinimumCloseFactorResponse>): MsgSetMinimumCloseFactorResponse {
    return MsgSetMinimumCloseFactorResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetMinimumCloseFactorResponse>): MsgSetMinimumCloseFactorResponse {
    const message = createBaseMsgSetMinimumCloseFactorResponse();
    return message;
  },
};

function createBaseMsgSetSmallLiquidationSize(): MsgSetSmallLiquidationSize {
  return { creator: "", smallLiquidationSize: "" };
}

export const MsgSetSmallLiquidationSize = {
  encode(message: MsgSetSmallLiquidationSize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.smallLiquidationSize !== "") {
      writer.uint32(18).string(message.smallLiquidationSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSmallLiquidationSize {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSmallLiquidationSize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.smallLiquidationSize = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetSmallLiquidationSize {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      smallLiquidationSize: isSet(object.smallLiquidationSize) ? String(object.smallLiquidationSize) : "",
    };
  },

  toJSON(message: MsgSetSmallLiquidationSize): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.smallLiquidationSize !== undefined && (obj.smallLiquidationSize = message.smallLiquidationSize);
    return obj;
  },

  create(base?: DeepPartial<MsgSetSmallLiquidationSize>): MsgSetSmallLiquidationSize {
    return MsgSetSmallLiquidationSize.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetSmallLiquidationSize>): MsgSetSmallLiquidationSize {
    const message = createBaseMsgSetSmallLiquidationSize();
    message.creator = object.creator ?? "";
    message.smallLiquidationSize = object.smallLiquidationSize ?? "";
    return message;
  },
};

function createBaseMsgSetSmallLiquidationSizeResponse(): MsgSetSmallLiquidationSizeResponse {
  return {};
}

export const MsgSetSmallLiquidationSizeResponse = {
  encode(_: MsgSetSmallLiquidationSizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSmallLiquidationSizeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSmallLiquidationSizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetSmallLiquidationSizeResponse {
    return {};
  },

  toJSON(_: MsgSetSmallLiquidationSizeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetSmallLiquidationSizeResponse>): MsgSetSmallLiquidationSizeResponse {
    return MsgSetSmallLiquidationSizeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetSmallLiquidationSizeResponse>): MsgSetSmallLiquidationSizeResponse {
    const message = createBaseMsgSetSmallLiquidationSizeResponse();
    return message;
  },
};

function createBaseMsgCreateRewardScheme(): MsgCreateRewardScheme {
  return { creator: "", createRewardSchemeParams: undefined };
}

export const MsgCreateRewardScheme = {
  encode(message: MsgCreateRewardScheme, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createRewardSchemeParams !== undefined) {
      CreateRewardSchemeParams.encode(message.createRewardSchemeParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRewardScheme {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRewardScheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createRewardSchemeParams = CreateRewardSchemeParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRewardScheme {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      createRewardSchemeParams: isSet(object.createRewardSchemeParams)
        ? CreateRewardSchemeParams.fromJSON(object.createRewardSchemeParams)
        : undefined,
    };
  },

  toJSON(message: MsgCreateRewardScheme): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createRewardSchemeParams !== undefined && (obj.createRewardSchemeParams = message.createRewardSchemeParams
      ? CreateRewardSchemeParams.toJSON(message.createRewardSchemeParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateRewardScheme>): MsgCreateRewardScheme {
    return MsgCreateRewardScheme.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateRewardScheme>): MsgCreateRewardScheme {
    const message = createBaseMsgCreateRewardScheme();
    message.creator = object.creator ?? "";
    message.createRewardSchemeParams =
      (object.createRewardSchemeParams !== undefined && object.createRewardSchemeParams !== null)
        ? CreateRewardSchemeParams.fromPartial(object.createRewardSchemeParams)
        : undefined;
    return message;
  },
};

function createBaseMsgCreateRewardSchemeResponse(): MsgCreateRewardSchemeResponse {
  return {};
}

export const MsgCreateRewardSchemeResponse = {
  encode(_: MsgCreateRewardSchemeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRewardSchemeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRewardSchemeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreateRewardSchemeResponse {
    return {};
  },

  toJSON(_: MsgCreateRewardSchemeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateRewardSchemeResponse>): MsgCreateRewardSchemeResponse {
    return MsgCreateRewardSchemeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreateRewardSchemeResponse>): MsgCreateRewardSchemeResponse {
    const message = createBaseMsgCreateRewardSchemeResponse();
    return message;
  },
};

function createBaseMsgUpdateRewardScheme(): MsgUpdateRewardScheme {
  return { updater: "", updateRewardSchemeParams: undefined };
}

export const MsgUpdateRewardScheme = {
  encode(message: MsgUpdateRewardScheme, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.updateRewardSchemeParams !== undefined) {
      UpdateRewardSchemeParams.encode(message.updateRewardSchemeParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRewardScheme {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardScheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updater = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateRewardSchemeParams = UpdateRewardSchemeParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRewardScheme {
    return {
      updater: isSet(object.updater) ? String(object.updater) : "",
      updateRewardSchemeParams: isSet(object.updateRewardSchemeParams)
        ? UpdateRewardSchemeParams.fromJSON(object.updateRewardSchemeParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateRewardScheme): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.updateRewardSchemeParams !== undefined && (obj.updateRewardSchemeParams = message.updateRewardSchemeParams
      ? UpdateRewardSchemeParams.toJSON(message.updateRewardSchemeParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateRewardScheme>): MsgUpdateRewardScheme {
    return MsgUpdateRewardScheme.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateRewardScheme>): MsgUpdateRewardScheme {
    const message = createBaseMsgUpdateRewardScheme();
    message.updater = object.updater ?? "";
    message.updateRewardSchemeParams =
      (object.updateRewardSchemeParams !== undefined && object.updateRewardSchemeParams !== null)
        ? UpdateRewardSchemeParams.fromPartial(object.updateRewardSchemeParams)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateRewardSchemeResponse(): MsgUpdateRewardSchemeResponse {
  return {};
}

export const MsgUpdateRewardSchemeResponse = {
  encode(_: MsgUpdateRewardSchemeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRewardSchemeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardSchemeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateRewardSchemeResponse {
    return {};
  },

  toJSON(_: MsgUpdateRewardSchemeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateRewardSchemeResponse>): MsgUpdateRewardSchemeResponse {
    return MsgUpdateRewardSchemeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateRewardSchemeResponse>): MsgUpdateRewardSchemeResponse {
    const message = createBaseMsgUpdateRewardSchemeResponse();
    return message;
  },
};

function createBaseMsgClaimRewards(): MsgClaimRewards {
  return { creator: "" };
}

export const MsgClaimRewards = {
  encode(message: MsgClaimRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgClaimRewards {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgClaimRewards): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create(base?: DeepPartial<MsgClaimRewards>): MsgClaimRewards {
    return MsgClaimRewards.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgClaimRewards>): MsgClaimRewards {
    const message = createBaseMsgClaimRewards();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgClaimRewardsResponse(): MsgClaimRewardsResponse {
  return {};
}

export const MsgClaimRewardsResponse = {
  encode(_: MsgClaimRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgClaimRewardsResponse {
    return {};
  },

  toJSON(_: MsgClaimRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgClaimRewardsResponse>): MsgClaimRewardsResponse {
    return MsgClaimRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgClaimRewardsResponse>): MsgClaimRewardsResponse {
    const message = createBaseMsgClaimRewardsResponse();
    return message;
  },
};

function createBaseMsgSetStalePriceGracePeriod(): MsgSetStalePriceGracePeriod {
  return { creator: "", stalePriceGracePeriod: undefined };
}

export const MsgSetStalePriceGracePeriod = {
  encode(message: MsgSetStalePriceGracePeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.stalePriceGracePeriod !== undefined) {
      Duration.encode(message.stalePriceGracePeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStalePriceGracePeriod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStalePriceGracePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stalePriceGracePeriod = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetStalePriceGracePeriod {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      stalePriceGracePeriod: isSet(object.stalePriceGracePeriod)
        ? Duration.fromJSON(object.stalePriceGracePeriod)
        : undefined,
    };
  },

  toJSON(message: MsgSetStalePriceGracePeriod): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stalePriceGracePeriod !== undefined && (obj.stalePriceGracePeriod = message.stalePriceGracePeriod
      ? Duration.toJSON(message.stalePriceGracePeriod)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgSetStalePriceGracePeriod>): MsgSetStalePriceGracePeriod {
    return MsgSetStalePriceGracePeriod.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetStalePriceGracePeriod>): MsgSetStalePriceGracePeriod {
    const message = createBaseMsgSetStalePriceGracePeriod();
    message.creator = object.creator ?? "";
    message.stalePriceGracePeriod =
      (object.stalePriceGracePeriod !== undefined && object.stalePriceGracePeriod !== null)
        ? Duration.fromPartial(object.stalePriceGracePeriod)
        : undefined;
    return message;
  },
};

function createBaseMsgSetStalePriceGracePeriodResponse(): MsgSetStalePriceGracePeriodResponse {
  return {};
}

export const MsgSetStalePriceGracePeriodResponse = {
  encode(_: MsgSetStalePriceGracePeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStalePriceGracePeriodResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStalePriceGracePeriodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetStalePriceGracePeriodResponse {
    return {};
  },

  toJSON(_: MsgSetStalePriceGracePeriodResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetStalePriceGracePeriodResponse>): MsgSetStalePriceGracePeriodResponse {
    return MsgSetStalePriceGracePeriodResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetStalePriceGracePeriodResponse>): MsgSetStalePriceGracePeriodResponse {
    const message = createBaseMsgSetStalePriceGracePeriodResponse();
    return message;
  },
};

function createBaseMsgSetCdpPaused(): MsgSetCdpPaused {
  return { creator: "", cdpPaused: false };
}

export const MsgSetCdpPaused = {
  encode(message: MsgSetCdpPaused, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cdpPaused === true) {
      writer.uint32(16).bool(message.cdpPaused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCdpPaused {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCdpPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.cdpPaused = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetCdpPaused {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cdpPaused: isSet(object.cdpPaused) ? Boolean(object.cdpPaused) : false,
    };
  },

  toJSON(message: MsgSetCdpPaused): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdpPaused !== undefined && (obj.cdpPaused = message.cdpPaused);
    return obj;
  },

  create(base?: DeepPartial<MsgSetCdpPaused>): MsgSetCdpPaused {
    return MsgSetCdpPaused.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetCdpPaused>): MsgSetCdpPaused {
    const message = createBaseMsgSetCdpPaused();
    message.creator = object.creator ?? "";
    message.cdpPaused = object.cdpPaused ?? false;
    return message;
  },
};

function createBaseMsgSetCdpPausedResponse(): MsgSetCdpPausedResponse {
  return {};
}

export const MsgSetCdpPausedResponse = {
  encode(_: MsgSetCdpPausedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCdpPausedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCdpPausedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetCdpPausedResponse {
    return {};
  },

  toJSON(_: MsgSetCdpPausedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetCdpPausedResponse>): MsgSetCdpPausedResponse {
    return MsgSetCdpPausedResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetCdpPausedResponse>): MsgSetCdpPausedResponse {
    const message = createBaseMsgSetCdpPausedResponse();
    return message;
  },
};

function createBaseMsgConvertTokenInCdpToGroupTokens(): MsgConvertTokenInCdpToGroupTokens {
  return { creator: "", denom: "" };
}

export const MsgConvertTokenInCdpToGroupTokens = {
  encode(message: MsgConvertTokenInCdpToGroupTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertTokenInCdpToGroupTokens {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertTokenInCdpToGroupTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConvertTokenInCdpToGroupTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgConvertTokenInCdpToGroupTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgConvertTokenInCdpToGroupTokens>): MsgConvertTokenInCdpToGroupTokens {
    return MsgConvertTokenInCdpToGroupTokens.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgConvertTokenInCdpToGroupTokens>): MsgConvertTokenInCdpToGroupTokens {
    const message = createBaseMsgConvertTokenInCdpToGroupTokens();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgConvertTokenInCdpToGroupTokensResponse(): MsgConvertTokenInCdpToGroupTokensResponse {
  return {};
}

export const MsgConvertTokenInCdpToGroupTokensResponse = {
  encode(_: MsgConvertTokenInCdpToGroupTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertTokenInCdpToGroupTokensResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertTokenInCdpToGroupTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgConvertTokenInCdpToGroupTokensResponse {
    return {};
  },

  toJSON(_: MsgConvertTokenInCdpToGroupTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgConvertTokenInCdpToGroupTokensResponse>): MsgConvertTokenInCdpToGroupTokensResponse {
    return MsgConvertTokenInCdpToGroupTokensResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgConvertTokenInCdpToGroupTokensResponse>): MsgConvertTokenInCdpToGroupTokensResponse {
    const message = createBaseMsgConvertTokenInCdpToGroupTokensResponse();
    return message;
  },
};

function createBaseMsgAddEModeCategory(): MsgAddEModeCategory {
  return { creator: "", eModeCategory: undefined };
}

export const MsgAddEModeCategory = {
  encode(message: MsgAddEModeCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.eModeCategory !== undefined) {
      EModeCategory.encode(message.eModeCategory, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddEModeCategory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddEModeCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eModeCategory = EModeCategory.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddEModeCategory {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      eModeCategory: isSet(object.eModeCategory) ? EModeCategory.fromJSON(object.eModeCategory) : undefined,
    };
  },

  toJSON(message: MsgAddEModeCategory): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.eModeCategory !== undefined &&
      (obj.eModeCategory = message.eModeCategory ? EModeCategory.toJSON(message.eModeCategory) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgAddEModeCategory>): MsgAddEModeCategory {
    return MsgAddEModeCategory.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddEModeCategory>): MsgAddEModeCategory {
    const message = createBaseMsgAddEModeCategory();
    message.creator = object.creator ?? "";
    message.eModeCategory = (object.eModeCategory !== undefined && object.eModeCategory !== null)
      ? EModeCategory.fromPartial(object.eModeCategory)
      : undefined;
    return message;
  },
};

function createBaseMsgAddEModeCategoryResponse(): MsgAddEModeCategoryResponse {
  return {};
}

export const MsgAddEModeCategoryResponse = {
  encode(_: MsgAddEModeCategoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddEModeCategoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddEModeCategoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgAddEModeCategoryResponse {
    return {};
  },

  toJSON(_: MsgAddEModeCategoryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddEModeCategoryResponse>): MsgAddEModeCategoryResponse {
    return MsgAddEModeCategoryResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAddEModeCategoryResponse>): MsgAddEModeCategoryResponse {
    const message = createBaseMsgAddEModeCategoryResponse();
    return message;
  },
};

function createBaseMsgUpdateEModeCategory(): MsgUpdateEModeCategory {
  return { creator: "", eModeCategoryName: "", updateEModeCategoryParams: undefined };
}

export const MsgUpdateEModeCategory = {
  encode(message: MsgUpdateEModeCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.eModeCategoryName !== "") {
      writer.uint32(18).string(message.eModeCategoryName);
    }
    if (message.updateEModeCategoryParams !== undefined) {
      UpdateEModeCategoryParams.encode(message.updateEModeCategoryParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEModeCategory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEModeCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eModeCategoryName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateEModeCategoryParams = UpdateEModeCategoryParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateEModeCategory {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      eModeCategoryName: isSet(object.eModeCategoryName) ? String(object.eModeCategoryName) : "",
      updateEModeCategoryParams: isSet(object.updateEModeCategoryParams)
        ? UpdateEModeCategoryParams.fromJSON(object.updateEModeCategoryParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateEModeCategory): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.eModeCategoryName !== undefined && (obj.eModeCategoryName = message.eModeCategoryName);
    message.updateEModeCategoryParams !== undefined &&
      (obj.updateEModeCategoryParams = message.updateEModeCategoryParams
        ? UpdateEModeCategoryParams.toJSON(message.updateEModeCategoryParams)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateEModeCategory>): MsgUpdateEModeCategory {
    return MsgUpdateEModeCategory.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateEModeCategory>): MsgUpdateEModeCategory {
    const message = createBaseMsgUpdateEModeCategory();
    message.creator = object.creator ?? "";
    message.eModeCategoryName = object.eModeCategoryName ?? "";
    message.updateEModeCategoryParams =
      (object.updateEModeCategoryParams !== undefined && object.updateEModeCategoryParams !== null)
        ? UpdateEModeCategoryParams.fromPartial(object.updateEModeCategoryParams)
        : undefined;
    return message;
  },
};

function createBaseUpdateEModeCategoryParams(): UpdateEModeCategoryParams {
  return {
    denoms: [],
    loanToValue: undefined,
    liquidationThreshold: undefined,
    liquidationDiscount: undefined,
    isActive: undefined,
  };
}

export const UpdateEModeCategoryParams = {
  encode(message: UpdateEModeCategoryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      StringValue.encode({ value: v!! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.loanToValue !== undefined) {
      Int64Value.encode({ value: message.loanToValue! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.liquidationThreshold !== undefined) {
      Int64Value.encode({ value: message.liquidationThreshold! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.liquidationDiscount !== undefined) {
      Int64Value.encode({ value: message.liquidationDiscount! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.isActive !== undefined) {
      BoolValue.encode({ value: message.isActive! }, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEModeCategoryParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEModeCategoryParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denoms.push(StringValue.decode(reader, reader.uint32()).value);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.loanToValue = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.liquidationThreshold = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.liquidationDiscount = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.isActive = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateEModeCategoryParams {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => String(e)) : [],
      loanToValue: isSet(object.loanToValue) ? Long.fromValue(object.loanToValue) : undefined,
      liquidationThreshold: isSet(object.liquidationThreshold)
        ? Long.fromValue(object.liquidationThreshold)
        : undefined,
      liquidationDiscount: isSet(object.liquidationDiscount) ? Long.fromValue(object.liquidationDiscount) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : undefined,
    };
  },

  toJSON(message: UpdateEModeCategoryParams): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    message.loanToValue !== undefined && (obj.loanToValue = message.loanToValue);
    message.liquidationThreshold !== undefined && (obj.liquidationThreshold = message.liquidationThreshold);
    message.liquidationDiscount !== undefined && (obj.liquidationDiscount = message.liquidationDiscount);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  create(base?: DeepPartial<UpdateEModeCategoryParams>): UpdateEModeCategoryParams {
    return UpdateEModeCategoryParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateEModeCategoryParams>): UpdateEModeCategoryParams {
    const message = createBaseUpdateEModeCategoryParams();
    message.denoms = object.denoms?.map((e) => e) || [];
    message.loanToValue = (object.loanToValue !== undefined && object.loanToValue !== null)
      ? Long.fromValue(object.loanToValue)
      : undefined;
    message.liquidationThreshold = (object.liquidationThreshold !== undefined && object.liquidationThreshold !== null)
      ? Long.fromValue(object.liquidationThreshold)
      : undefined;
    message.liquidationDiscount = (object.liquidationDiscount !== undefined && object.liquidationDiscount !== null)
      ? Long.fromValue(object.liquidationDiscount)
      : undefined;
    message.isActive = object.isActive ?? undefined;
    return message;
  },
};

function createBaseMsgUpdateEModeCategoryResponse(): MsgUpdateEModeCategoryResponse {
  return {};
}

export const MsgUpdateEModeCategoryResponse = {
  encode(_: MsgUpdateEModeCategoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEModeCategoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEModeCategoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateEModeCategoryResponse {
    return {};
  },

  toJSON(_: MsgUpdateEModeCategoryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateEModeCategoryResponse>): MsgUpdateEModeCategoryResponse {
    return MsgUpdateEModeCategoryResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateEModeCategoryResponse>): MsgUpdateEModeCategoryResponse {
    const message = createBaseMsgUpdateEModeCategoryResponse();
    return message;
  },
};

function createBaseMsgSetAccountEMode(): MsgSetAccountEMode {
  return { creator: "", eModeCategoryName: "" };
}

export const MsgSetAccountEMode = {
  encode(message: MsgSetAccountEMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.eModeCategoryName !== "") {
      writer.uint32(18).string(message.eModeCategoryName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAccountEMode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAccountEMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eModeCategoryName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetAccountEMode {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      eModeCategoryName: isSet(object.eModeCategoryName) ? String(object.eModeCategoryName) : "",
    };
  },

  toJSON(message: MsgSetAccountEMode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.eModeCategoryName !== undefined && (obj.eModeCategoryName = message.eModeCategoryName);
    return obj;
  },

  create(base?: DeepPartial<MsgSetAccountEMode>): MsgSetAccountEMode {
    return MsgSetAccountEMode.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetAccountEMode>): MsgSetAccountEMode {
    const message = createBaseMsgSetAccountEMode();
    message.creator = object.creator ?? "";
    message.eModeCategoryName = object.eModeCategoryName ?? "";
    return message;
  },
};

function createBaseMsgSetAccountEModeResponse(): MsgSetAccountEModeResponse {
  return {};
}

export const MsgSetAccountEModeResponse = {
  encode(_: MsgSetAccountEModeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAccountEModeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAccountEModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetAccountEModeResponse {
    return {};
  },

  toJSON(_: MsgSetAccountEModeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetAccountEModeResponse>): MsgSetAccountEModeResponse {
    return MsgSetAccountEModeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetAccountEModeResponse>): MsgSetAccountEModeResponse {
    const message = createBaseMsgSetAccountEModeResponse();
    return message;
  },
};

function createBaseMsgRemoveAccountEMode(): MsgRemoveAccountEMode {
  return { creator: "" };
}

export const MsgRemoveAccountEMode = {
  encode(message: MsgRemoveAccountEMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAccountEMode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAccountEMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveAccountEMode {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgRemoveAccountEMode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveAccountEMode>): MsgRemoveAccountEMode {
    return MsgRemoveAccountEMode.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveAccountEMode>): MsgRemoveAccountEMode {
    const message = createBaseMsgRemoveAccountEMode();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgRemoveAccountEModeResponse(): MsgRemoveAccountEModeResponse {
  return {};
}

export const MsgRemoveAccountEModeResponse = {
  encode(_: MsgRemoveAccountEModeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAccountEModeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAccountEModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveAccountEModeResponse {
    return {};
  },

  toJSON(_: MsgRemoveAccountEModeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveAccountEModeResponse>): MsgRemoveAccountEModeResponse {
    return MsgRemoveAccountEModeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveAccountEModeResponse>): MsgRemoveAccountEModeResponse {
    const message = createBaseMsgRemoveAccountEModeResponse();
    return message;
  },
};

function createBaseMsgAddAccountToLiquidationProtection(): MsgAddAccountToLiquidationProtection {
  return { creator: "", address: "" };
}

export const MsgAddAccountToLiquidationProtection = {
  encode(message: MsgAddAccountToLiquidationProtection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccountToLiquidationProtection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAccountToLiquidationProtection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddAccountToLiquidationProtection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgAddAccountToLiquidationProtection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<MsgAddAccountToLiquidationProtection>): MsgAddAccountToLiquidationProtection {
    return MsgAddAccountToLiquidationProtection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddAccountToLiquidationProtection>): MsgAddAccountToLiquidationProtection {
    const message = createBaseMsgAddAccountToLiquidationProtection();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgAddAccountToLiquidationProtectionResponse(): MsgAddAccountToLiquidationProtectionResponse {
  return {};
}

export const MsgAddAccountToLiquidationProtectionResponse = {
  encode(_: MsgAddAccountToLiquidationProtectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccountToLiquidationProtectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAccountToLiquidationProtectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgAddAccountToLiquidationProtectionResponse {
    return {};
  },

  toJSON(_: MsgAddAccountToLiquidationProtectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<MsgAddAccountToLiquidationProtectionResponse>,
  ): MsgAddAccountToLiquidationProtectionResponse {
    return MsgAddAccountToLiquidationProtectionResponse.fromPartial(base ?? {});
  },

  fromPartial(
    _: DeepPartial<MsgAddAccountToLiquidationProtectionResponse>,
  ): MsgAddAccountToLiquidationProtectionResponse {
    const message = createBaseMsgAddAccountToLiquidationProtectionResponse();
    return message;
  },
};

function createBaseMsgRemoveAccountFromLiquidationProtection(): MsgRemoveAccountFromLiquidationProtection {
  return { creator: "", address: "" };
}

export const MsgRemoveAccountFromLiquidationProtection = {
  encode(message: MsgRemoveAccountFromLiquidationProtection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAccountFromLiquidationProtection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAccountFromLiquidationProtection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveAccountFromLiquidationProtection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgRemoveAccountFromLiquidationProtection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveAccountFromLiquidationProtection>): MsgRemoveAccountFromLiquidationProtection {
    return MsgRemoveAccountFromLiquidationProtection.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<MsgRemoveAccountFromLiquidationProtection>,
  ): MsgRemoveAccountFromLiquidationProtection {
    const message = createBaseMsgRemoveAccountFromLiquidationProtection();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgRemoveAccountFromLiquidationProtectionResponse(): MsgRemoveAccountFromLiquidationProtectionResponse {
  return {};
}

export const MsgRemoveAccountFromLiquidationProtectionResponse = {
  encode(_: MsgRemoveAccountFromLiquidationProtectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAccountFromLiquidationProtectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAccountFromLiquidationProtectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveAccountFromLiquidationProtectionResponse {
    return {};
  },

  toJSON(_: MsgRemoveAccountFromLiquidationProtectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<MsgRemoveAccountFromLiquidationProtectionResponse>,
  ): MsgRemoveAccountFromLiquidationProtectionResponse {
    return MsgRemoveAccountFromLiquidationProtectionResponse.fromPartial(base ?? {});
  },

  fromPartial(
    _: DeepPartial<MsgRemoveAccountFromLiquidationProtectionResponse>,
  ): MsgRemoveAccountFromLiquidationProtectionResponse {
    const message = createBaseMsgRemoveAccountFromLiquidationProtectionResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? ParamsToUpdate.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? ParamsToUpdate.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ParamsToUpdate.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  AddRateStrategy(request: MsgAddRateStrategy): Promise<MsgAddRateStrategyResponse>;
  RemoveRateStrategy(request: MsgRemoveRateStrategy): Promise<MsgRemoveRateStrategyResponse>;
  AddAsset(request: MsgAddAsset): Promise<MsgAddAssetResponse>;
  UpdateRateStrategy(request: MsgUpdateRateStrategy): Promise<MsgUpdateRateStrategyResponse>;
  UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse>;
  SupplyAsset(request: MsgSupplyAsset): Promise<MsgSupplyAssetResponse>;
  WithdrawAsset(request: MsgWithdrawAsset): Promise<MsgWithdrawAssetResponse>;
  LockCollateral(request: MsgLockCollateral): Promise<MsgLockCollateralResponse>;
  UnlockCollateral(request: MsgUnlockCollateral): Promise<MsgUnlockCollateralResponse>;
  BorrowAsset(request: MsgBorrowAsset): Promise<MsgBorrowAssetResponse>;
  RepayAsset(request: MsgRepayAsset): Promise<MsgRepayAssetResponse>;
  SupplyAssetAndLockCollateral(
    request: MsgSupplyAssetAndLockCollateral,
  ): Promise<MsgSupplyAssetAndLockCollateralResponse>;
  UnlockCollateralAndWithdrawAsset(
    request: MsgUnlockCollateralAndWithdrawAsset,
  ): Promise<MsgUnlockCollateralAndWithdrawAssetResponse>;
  LiquidateCollateral(request: MsgLiquidateCollateral): Promise<MsgLiquidateCollateralResponse>;
  SetLiquidationFee(request: MsgSetLiquidationFee): Promise<MsgSetLiquidationFeeResponse>;
  SetInterestFee(request: MsgSetInterestFee): Promise<MsgSetInterestFeeResponse>;
  CreateRewardScheme(request: MsgCreateRewardScheme): Promise<MsgCreateRewardSchemeResponse>;
  UpdateRewardScheme(request: MsgUpdateRewardScheme): Promise<MsgUpdateRewardSchemeResponse>;
  ClaimRewards(request: MsgClaimRewards): Promise<MsgClaimRewardsResponse>;
  SetStablecoinInterestRate(request: MsgSetStablecoinInterestRate): Promise<MsgSetStablecoinInterestRateResponse>;
  SetStablecoinMintCap(request: MsgSetStablecoinMintCap): Promise<MsgSetStablecoinMintCapResponse>;
  MintStablecoin(request: MsgMintStablecoin): Promise<MsgMintStablecoinResponse>;
  ReturnStablecoin(request: MsgReturnStablecoin): Promise<MsgReturnStablecoinResponse>;
  SetCompleteLiquidationThreshold(
    request: MsgSetCompleteLiquidationThreshold,
  ): Promise<MsgSetCompleteLiquidationThresholdResponse>;
  SetMinimumCloseFactor(request: MsgSetMinimumCloseFactor): Promise<MsgSetMinimumCloseFactorResponse>;
  SetSmallLiquidationSize(request: MsgSetSmallLiquidationSize): Promise<MsgSetSmallLiquidationSizeResponse>;
  SetStalePriceGracePeriod(request: MsgSetStalePriceGracePeriod): Promise<MsgSetStalePriceGracePeriodResponse>;
  SetCdpPaused(request: MsgSetCdpPaused): Promise<MsgSetCdpPausedResponse>;
  ConvertTokenInCdpToGroupTokens(
    request: MsgConvertTokenInCdpToGroupTokens,
  ): Promise<MsgConvertTokenInCdpToGroupTokensResponse>;
  AddEModeCategory(request: MsgAddEModeCategory): Promise<MsgAddEModeCategoryResponse>;
  UpdateEModeCategory(request: MsgUpdateEModeCategory): Promise<MsgUpdateEModeCategoryResponse>;
  SetAccountEMode(request: MsgSetAccountEMode): Promise<MsgSetAccountEModeResponse>;
  RemoveAccountEMode(request: MsgRemoveAccountEMode): Promise<MsgRemoveAccountEModeResponse>;
  AddAccountToLiquidationProtection(
    request: MsgAddAccountToLiquidationProtection,
  ): Promise<MsgAddAccountToLiquidationProtectionResponse>;
  RemoveAccountFromLiquidationProtection(
    request: MsgRemoveAccountFromLiquidationProtection,
  ): Promise<MsgRemoveAccountFromLiquidationProtectionResponse>;
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
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.cdp.Msg";
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
    this.SupplyAssetAndLockCollateral = this.SupplyAssetAndLockCollateral.bind(this);
    this.UnlockCollateralAndWithdrawAsset = this.UnlockCollateralAndWithdrawAsset.bind(this);
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
    this.SetCompleteLiquidationThreshold = this.SetCompleteLiquidationThreshold.bind(this);
    this.SetMinimumCloseFactor = this.SetMinimumCloseFactor.bind(this);
    this.SetSmallLiquidationSize = this.SetSmallLiquidationSize.bind(this);
    this.SetStalePriceGracePeriod = this.SetStalePriceGracePeriod.bind(this);
    this.SetCdpPaused = this.SetCdpPaused.bind(this);
    this.ConvertTokenInCdpToGroupTokens = this.ConvertTokenInCdpToGroupTokens.bind(this);
    this.AddEModeCategory = this.AddEModeCategory.bind(this);
    this.UpdateEModeCategory = this.UpdateEModeCategory.bind(this);
    this.SetAccountEMode = this.SetAccountEMode.bind(this);
    this.RemoveAccountEMode = this.RemoveAccountEMode.bind(this);
    this.AddAccountToLiquidationProtection = this.AddAccountToLiquidationProtection.bind(this);
    this.RemoveAccountFromLiquidationProtection = this.RemoveAccountFromLiquidationProtection.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  AddRateStrategy(request: MsgAddRateStrategy): Promise<MsgAddRateStrategyResponse> {
    const data = MsgAddRateStrategy.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddRateStrategy", data);
    return promise.then((data) => MsgAddRateStrategyResponse.decode(_m0.Reader.create(data)));
  }

  RemoveRateStrategy(request: MsgRemoveRateStrategy): Promise<MsgRemoveRateStrategyResponse> {
    const data = MsgRemoveRateStrategy.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveRateStrategy", data);
    return promise.then((data) => MsgRemoveRateStrategyResponse.decode(_m0.Reader.create(data)));
  }

  AddAsset(request: MsgAddAsset): Promise<MsgAddAssetResponse> {
    const data = MsgAddAsset.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddAsset", data);
    return promise.then((data) => MsgAddAssetResponse.decode(_m0.Reader.create(data)));
  }

  UpdateRateStrategy(request: MsgUpdateRateStrategy): Promise<MsgUpdateRateStrategyResponse> {
    const data = MsgUpdateRateStrategy.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateRateStrategy", data);
    return promise.then((data) => MsgUpdateRateStrategyResponse.decode(_m0.Reader.create(data)));
  }

  UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse> {
    const data = MsgUpdateAsset.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateAsset", data);
    return promise.then((data) => MsgUpdateAssetResponse.decode(_m0.Reader.create(data)));
  }

  SupplyAsset(request: MsgSupplyAsset): Promise<MsgSupplyAssetResponse> {
    const data = MsgSupplyAsset.encode(request).finish();
    const promise = this.rpc.request(this.service, "SupplyAsset", data);
    return promise.then((data) => MsgSupplyAssetResponse.decode(_m0.Reader.create(data)));
  }

  WithdrawAsset(request: MsgWithdrawAsset): Promise<MsgWithdrawAssetResponse> {
    const data = MsgWithdrawAsset.encode(request).finish();
    const promise = this.rpc.request(this.service, "WithdrawAsset", data);
    return promise.then((data) => MsgWithdrawAssetResponse.decode(_m0.Reader.create(data)));
  }

  LockCollateral(request: MsgLockCollateral): Promise<MsgLockCollateralResponse> {
    const data = MsgLockCollateral.encode(request).finish();
    const promise = this.rpc.request(this.service, "LockCollateral", data);
    return promise.then((data) => MsgLockCollateralResponse.decode(_m0.Reader.create(data)));
  }

  UnlockCollateral(request: MsgUnlockCollateral): Promise<MsgUnlockCollateralResponse> {
    const data = MsgUnlockCollateral.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnlockCollateral", data);
    return promise.then((data) => MsgUnlockCollateralResponse.decode(_m0.Reader.create(data)));
  }

  BorrowAsset(request: MsgBorrowAsset): Promise<MsgBorrowAssetResponse> {
    const data = MsgBorrowAsset.encode(request).finish();
    const promise = this.rpc.request(this.service, "BorrowAsset", data);
    return promise.then((data) => MsgBorrowAssetResponse.decode(_m0.Reader.create(data)));
  }

  RepayAsset(request: MsgRepayAsset): Promise<MsgRepayAssetResponse> {
    const data = MsgRepayAsset.encode(request).finish();
    const promise = this.rpc.request(this.service, "RepayAsset", data);
    return promise.then((data) => MsgRepayAssetResponse.decode(_m0.Reader.create(data)));
  }

  SupplyAssetAndLockCollateral(
    request: MsgSupplyAssetAndLockCollateral,
  ): Promise<MsgSupplyAssetAndLockCollateralResponse> {
    const data = MsgSupplyAssetAndLockCollateral.encode(request).finish();
    const promise = this.rpc.request(this.service, "SupplyAssetAndLockCollateral", data);
    return promise.then((data) => MsgSupplyAssetAndLockCollateralResponse.decode(_m0.Reader.create(data)));
  }

  UnlockCollateralAndWithdrawAsset(
    request: MsgUnlockCollateralAndWithdrawAsset,
  ): Promise<MsgUnlockCollateralAndWithdrawAssetResponse> {
    const data = MsgUnlockCollateralAndWithdrawAsset.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnlockCollateralAndWithdrawAsset", data);
    return promise.then((data) => MsgUnlockCollateralAndWithdrawAssetResponse.decode(_m0.Reader.create(data)));
  }

  LiquidateCollateral(request: MsgLiquidateCollateral): Promise<MsgLiquidateCollateralResponse> {
    const data = MsgLiquidateCollateral.encode(request).finish();
    const promise = this.rpc.request(this.service, "LiquidateCollateral", data);
    return promise.then((data) => MsgLiquidateCollateralResponse.decode(_m0.Reader.create(data)));
  }

  SetLiquidationFee(request: MsgSetLiquidationFee): Promise<MsgSetLiquidationFeeResponse> {
    const data = MsgSetLiquidationFee.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetLiquidationFee", data);
    return promise.then((data) => MsgSetLiquidationFeeResponse.decode(_m0.Reader.create(data)));
  }

  SetInterestFee(request: MsgSetInterestFee): Promise<MsgSetInterestFeeResponse> {
    const data = MsgSetInterestFee.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetInterestFee", data);
    return promise.then((data) => MsgSetInterestFeeResponse.decode(_m0.Reader.create(data)));
  }

  CreateRewardScheme(request: MsgCreateRewardScheme): Promise<MsgCreateRewardSchemeResponse> {
    const data = MsgCreateRewardScheme.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateRewardScheme", data);
    return promise.then((data) => MsgCreateRewardSchemeResponse.decode(_m0.Reader.create(data)));
  }

  UpdateRewardScheme(request: MsgUpdateRewardScheme): Promise<MsgUpdateRewardSchemeResponse> {
    const data = MsgUpdateRewardScheme.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateRewardScheme", data);
    return promise.then((data) => MsgUpdateRewardSchemeResponse.decode(_m0.Reader.create(data)));
  }

  ClaimRewards(request: MsgClaimRewards): Promise<MsgClaimRewardsResponse> {
    const data = MsgClaimRewards.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClaimRewards", data);
    return promise.then((data) => MsgClaimRewardsResponse.decode(_m0.Reader.create(data)));
  }

  SetStablecoinInterestRate(request: MsgSetStablecoinInterestRate): Promise<MsgSetStablecoinInterestRateResponse> {
    const data = MsgSetStablecoinInterestRate.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetStablecoinInterestRate", data);
    return promise.then((data) => MsgSetStablecoinInterestRateResponse.decode(_m0.Reader.create(data)));
  }

  SetStablecoinMintCap(request: MsgSetStablecoinMintCap): Promise<MsgSetStablecoinMintCapResponse> {
    const data = MsgSetStablecoinMintCap.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetStablecoinMintCap", data);
    return promise.then((data) => MsgSetStablecoinMintCapResponse.decode(_m0.Reader.create(data)));
  }

  MintStablecoin(request: MsgMintStablecoin): Promise<MsgMintStablecoinResponse> {
    const data = MsgMintStablecoin.encode(request).finish();
    const promise = this.rpc.request(this.service, "MintStablecoin", data);
    return promise.then((data) => MsgMintStablecoinResponse.decode(_m0.Reader.create(data)));
  }

  ReturnStablecoin(request: MsgReturnStablecoin): Promise<MsgReturnStablecoinResponse> {
    const data = MsgReturnStablecoin.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReturnStablecoin", data);
    return promise.then((data) => MsgReturnStablecoinResponse.decode(_m0.Reader.create(data)));
  }

  SetCompleteLiquidationThreshold(
    request: MsgSetCompleteLiquidationThreshold,
  ): Promise<MsgSetCompleteLiquidationThresholdResponse> {
    const data = MsgSetCompleteLiquidationThreshold.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetCompleteLiquidationThreshold", data);
    return promise.then((data) => MsgSetCompleteLiquidationThresholdResponse.decode(_m0.Reader.create(data)));
  }

  SetMinimumCloseFactor(request: MsgSetMinimumCloseFactor): Promise<MsgSetMinimumCloseFactorResponse> {
    const data = MsgSetMinimumCloseFactor.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetMinimumCloseFactor", data);
    return promise.then((data) => MsgSetMinimumCloseFactorResponse.decode(_m0.Reader.create(data)));
  }

  SetSmallLiquidationSize(request: MsgSetSmallLiquidationSize): Promise<MsgSetSmallLiquidationSizeResponse> {
    const data = MsgSetSmallLiquidationSize.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetSmallLiquidationSize", data);
    return promise.then((data) => MsgSetSmallLiquidationSizeResponse.decode(_m0.Reader.create(data)));
  }

  SetStalePriceGracePeriod(request: MsgSetStalePriceGracePeriod): Promise<MsgSetStalePriceGracePeriodResponse> {
    const data = MsgSetStalePriceGracePeriod.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetStalePriceGracePeriod", data);
    return promise.then((data) => MsgSetStalePriceGracePeriodResponse.decode(_m0.Reader.create(data)));
  }

  SetCdpPaused(request: MsgSetCdpPaused): Promise<MsgSetCdpPausedResponse> {
    const data = MsgSetCdpPaused.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetCdpPaused", data);
    return promise.then((data) => MsgSetCdpPausedResponse.decode(_m0.Reader.create(data)));
  }

  ConvertTokenInCdpToGroupTokens(
    request: MsgConvertTokenInCdpToGroupTokens,
  ): Promise<MsgConvertTokenInCdpToGroupTokensResponse> {
    const data = MsgConvertTokenInCdpToGroupTokens.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConvertTokenInCdpToGroupTokens", data);
    return promise.then((data) => MsgConvertTokenInCdpToGroupTokensResponse.decode(_m0.Reader.create(data)));
  }

  AddEModeCategory(request: MsgAddEModeCategory): Promise<MsgAddEModeCategoryResponse> {
    const data = MsgAddEModeCategory.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddEModeCategory", data);
    return promise.then((data) => MsgAddEModeCategoryResponse.decode(_m0.Reader.create(data)));
  }

  UpdateEModeCategory(request: MsgUpdateEModeCategory): Promise<MsgUpdateEModeCategoryResponse> {
    const data = MsgUpdateEModeCategory.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateEModeCategory", data);
    return promise.then((data) => MsgUpdateEModeCategoryResponse.decode(_m0.Reader.create(data)));
  }

  SetAccountEMode(request: MsgSetAccountEMode): Promise<MsgSetAccountEModeResponse> {
    const data = MsgSetAccountEMode.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetAccountEMode", data);
    return promise.then((data) => MsgSetAccountEModeResponse.decode(_m0.Reader.create(data)));
  }

  RemoveAccountEMode(request: MsgRemoveAccountEMode): Promise<MsgRemoveAccountEModeResponse> {
    const data = MsgRemoveAccountEMode.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveAccountEMode", data);
    return promise.then((data) => MsgRemoveAccountEModeResponse.decode(_m0.Reader.create(data)));
  }

  AddAccountToLiquidationProtection(
    request: MsgAddAccountToLiquidationProtection,
  ): Promise<MsgAddAccountToLiquidationProtectionResponse> {
    const data = MsgAddAccountToLiquidationProtection.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddAccountToLiquidationProtection", data);
    return promise.then((data) => MsgAddAccountToLiquidationProtectionResponse.decode(_m0.Reader.create(data)));
  }

  RemoveAccountFromLiquidationProtection(
    request: MsgRemoveAccountFromLiquidationProtection,
  ): Promise<MsgRemoveAccountFromLiquidationProtectionResponse> {
    const data = MsgRemoveAccountFromLiquidationProtection.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveAccountFromLiquidationProtection", data);
    return promise.then((data) => MsgRemoveAccountFromLiquidationProtectionResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
