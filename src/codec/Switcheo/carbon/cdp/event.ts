/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { AssetParams } from "./asset_params";
import { DebtInfo } from "./debt_info";
import { EModeCategory } from "./e_mode_category";
import { RateStrategyParams } from "./rate_strategy_params";
import { RewardDebt, RewardScheme } from "./reward_scheme";
import { StablecoinDebtInfo } from "./stablecoin_debt_info";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface NewRateStrategyParamsEvent {
  rateStrategyParams?: RateStrategyParams;
  type: string;
}

export interface UpdateRateStrategyParamsEvent {
  rateStrategyParams?: RateStrategyParams;
  type: string;
}

export interface RemoveRateStrategyParamsEvent {
  rateStrategyParams?: RateStrategyParams;
  type: string;
}

export interface NewAssetParamsEvent {
  assetParams?: AssetParams;
  type: string;
}

export interface UpdateAssetParamsEvent {
  assetParams?: AssetParams;
  type: string;
}

export interface NewEModeCategoryEvent {
  eModeCategory?: EModeCategory;
  type: string;
}

export interface UpdateEModeCategoryEvent {
  eModeCategory?: EModeCategory;
  type: string;
}

export interface UpdateAccountEModeCategoryNameEvent {
  account: string;
  eModeCategoryName: string;
}

export interface SetInterestFeeEvent {
  interestFee: string;
  type: string;
}

export interface SetLiquidationFeeEvent {
  liquidationFee: string;
  type: string;
}

export interface SetStablecoinInterestRateEvent {
  /** Deprecated for stablecoin_interest_rate_dec */
  stablecoinInterestRate: string;
  type: string;
  stablecoinInterestRateDec: string;
}

export interface SetStablecoinMintCapEvent {
  stablecoinMintCap: string;
  type: string;
}

export interface SetCompleteLiquidationThresholdEvent {
  completeLiquidationThreshold: string;
  type: string;
}

export interface SetMinimumCloseFactorEvent {
  minimumCloseFactor: string;
  type: string;
}

export interface SetSmallLiquidationSizeEvent {
  smallLiquidationSize: string;
  type: string;
}

export interface SetStalePriceGracePeriodEvent {
  stalePriceGracePeriod?: Duration;
  type: string;
}

export interface SetCdpPausedEvent {
  cdpPaused: boolean;
  type: string;
}

export interface SupplyAssetEvent {
  supplier: string;
  denom: string;
  amountSupplied: string;
  cibtDenom: string;
  amountMinted: string;
}

export interface WithdrawAssetEvent {
  withdrawer: string;
  denom: string;
  amountWithdrawed: string;
  cibtDenom: string;
  amountBurned: string;
}

export interface BorrowAssetEvent {
  borrower: string;
  denom: string;
  amountBorrowed: string;
  debtValue: string;
  collateralValue: string;
  initialCumulativeInterestMultiplier: string;
}

export interface RepayAssetEvent {
  repayer: string;
  debtor: string;
  denom: string;
  principalRepaid: string;
  interestRepaid: string;
  debtValue: string;
  collateralValue: string;
}

export interface LockCollateralEvent {
  locker: string;
  cibtDenom: string;
  amountLocked: string;
  debtValue: string;
  collateralValue: string;
}

export interface UnlockCollateralEvent {
  unlocker: string;
  cibtDenom: string;
  amountUnlocked: string;
  debtValue: string;
  collateralValue: string;
}

export interface UpdateDebtInfoEvent {
  debtInfo?: DebtInfo;
  type: string;
}

export interface UpdateStablecoinDebtInfoEvent {
  stablecoinDebtInfo?: StablecoinDebtInfo;
  type: string;
}

export interface MintStablecoinEvent {
  minter: string;
  denom: string;
  amountMinted: string;
  debtValue: string;
  collateralValue: string;
  initialCumulativeInterestMultiplier: string;
}

export interface ReturnStablecoinEvent {
  returner: string;
  debtor: string;
  interestDenom: string;
  interestRepaid: string;
  principalRepaid: string;
  debtValue: string;
  collateralValue: string;
}

export interface LiquidateCollateralEvent {
  liquidator: string;
  debtor: string;
  collateralDenom: string;
  collateralAmountLiquidated: string;
  collateralAmountLiquidator: string;
  collateralAmountFee: string;
  liquidationPrice: string;
  marketPrice: string;
  discount: string;
  debtDenom: string;
  debtAmount: string;
  id: Long;
  principalAmount: string;
  interestDenom: string;
  interestAmount: string;
}

export interface ClaimRewardEvent {
  receiver: string;
  rewardSchemeId: string;
  rewardClaimed: string;
}

export interface RewardDebtEvent {
  rewardDebt?: RewardDebt;
  type: string;
}

export interface RewardSchemeEvent {
  rewardScheme?: RewardScheme;
  type: string;
}

export interface AddReserveEvent {
  rewardScheme?: RewardScheme;
  amountAdded: string;
}

export interface RefundReserveEvent {
  rewardScheme?: RewardScheme;
  amountRefunded: string;
}

function createBaseNewRateStrategyParamsEvent(): NewRateStrategyParamsEvent {
  return { rateStrategyParams: undefined, type: "" };
}

export const NewRateStrategyParamsEvent = {
  encode(message: NewRateStrategyParamsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(message.rateStrategyParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewRateStrategyParamsEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewRateStrategyParamsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rateStrategyParams = RateStrategyParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewRateStrategyParamsEvent {
    return {
      rateStrategyParams: isSet(object.rateStrategyParams)
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: NewRateStrategyParamsEvent): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined && (obj.rateStrategyParams = message.rateStrategyParams
      ? RateStrategyParams.toJSON(message.rateStrategyParams)
      : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<NewRateStrategyParamsEvent>): NewRateStrategyParamsEvent {
    return NewRateStrategyParamsEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NewRateStrategyParamsEvent>): NewRateStrategyParamsEvent {
    const message = createBaseNewRateStrategyParamsEvent();
    message.rateStrategyParams = (object.rateStrategyParams !== undefined && object.rateStrategyParams !== null)
      ? RateStrategyParams.fromPartial(object.rateStrategyParams)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseUpdateRateStrategyParamsEvent(): UpdateRateStrategyParamsEvent {
  return { rateStrategyParams: undefined, type: "" };
}

export const UpdateRateStrategyParamsEvent = {
  encode(message: UpdateRateStrategyParamsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(message.rateStrategyParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRateStrategyParamsEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRateStrategyParamsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rateStrategyParams = RateStrategyParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateRateStrategyParamsEvent {
    return {
      rateStrategyParams: isSet(object.rateStrategyParams)
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: UpdateRateStrategyParamsEvent): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined && (obj.rateStrategyParams = message.rateStrategyParams
      ? RateStrategyParams.toJSON(message.rateStrategyParams)
      : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<UpdateRateStrategyParamsEvent>): UpdateRateStrategyParamsEvent {
    return UpdateRateStrategyParamsEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateRateStrategyParamsEvent>): UpdateRateStrategyParamsEvent {
    const message = createBaseUpdateRateStrategyParamsEvent();
    message.rateStrategyParams = (object.rateStrategyParams !== undefined && object.rateStrategyParams !== null)
      ? RateStrategyParams.fromPartial(object.rateStrategyParams)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseRemoveRateStrategyParamsEvent(): RemoveRateStrategyParamsEvent {
  return { rateStrategyParams: undefined, type: "" };
}

export const RemoveRateStrategyParamsEvent = {
  encode(message: RemoveRateStrategyParamsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(message.rateStrategyParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveRateStrategyParamsEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveRateStrategyParamsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rateStrategyParams = RateStrategyParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveRateStrategyParamsEvent {
    return {
      rateStrategyParams: isSet(object.rateStrategyParams)
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: RemoveRateStrategyParamsEvent): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined && (obj.rateStrategyParams = message.rateStrategyParams
      ? RateStrategyParams.toJSON(message.rateStrategyParams)
      : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<RemoveRateStrategyParamsEvent>): RemoveRateStrategyParamsEvent {
    return RemoveRateStrategyParamsEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RemoveRateStrategyParamsEvent>): RemoveRateStrategyParamsEvent {
    const message = createBaseRemoveRateStrategyParamsEvent();
    message.rateStrategyParams = (object.rateStrategyParams !== undefined && object.rateStrategyParams !== null)
      ? RateStrategyParams.fromPartial(object.rateStrategyParams)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseNewAssetParamsEvent(): NewAssetParamsEvent {
  return { assetParams: undefined, type: "" };
}

export const NewAssetParamsEvent = {
  encode(message: NewAssetParamsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParams.encode(message.assetParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewAssetParamsEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewAssetParamsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetParams = AssetParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewAssetParamsEvent {
    return {
      assetParams: isSet(object.assetParams) ? AssetParams.fromJSON(object.assetParams) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: NewAssetParamsEvent): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams ? AssetParams.toJSON(message.assetParams) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<NewAssetParamsEvent>): NewAssetParamsEvent {
    return NewAssetParamsEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NewAssetParamsEvent>): NewAssetParamsEvent {
    const message = createBaseNewAssetParamsEvent();
    message.assetParams = (object.assetParams !== undefined && object.assetParams !== null)
      ? AssetParams.fromPartial(object.assetParams)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseUpdateAssetParamsEvent(): UpdateAssetParamsEvent {
  return { assetParams: undefined, type: "" };
}

export const UpdateAssetParamsEvent = {
  encode(message: UpdateAssetParamsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParams.encode(message.assetParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssetParamsEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAssetParamsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetParams = AssetParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAssetParamsEvent {
    return {
      assetParams: isSet(object.assetParams) ? AssetParams.fromJSON(object.assetParams) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: UpdateAssetParamsEvent): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams ? AssetParams.toJSON(message.assetParams) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<UpdateAssetParamsEvent>): UpdateAssetParamsEvent {
    return UpdateAssetParamsEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateAssetParamsEvent>): UpdateAssetParamsEvent {
    const message = createBaseUpdateAssetParamsEvent();
    message.assetParams = (object.assetParams !== undefined && object.assetParams !== null)
      ? AssetParams.fromPartial(object.assetParams)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseNewEModeCategoryEvent(): NewEModeCategoryEvent {
  return { eModeCategory: undefined, type: "" };
}

export const NewEModeCategoryEvent = {
  encode(message: NewEModeCategoryEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eModeCategory !== undefined) {
      EModeCategory.encode(message.eModeCategory, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewEModeCategoryEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewEModeCategoryEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eModeCategory = EModeCategory.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewEModeCategoryEvent {
    return {
      eModeCategory: isSet(object.eModeCategory) ? EModeCategory.fromJSON(object.eModeCategory) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: NewEModeCategoryEvent): unknown {
    const obj: any = {};
    message.eModeCategory !== undefined &&
      (obj.eModeCategory = message.eModeCategory ? EModeCategory.toJSON(message.eModeCategory) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<NewEModeCategoryEvent>): NewEModeCategoryEvent {
    return NewEModeCategoryEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NewEModeCategoryEvent>): NewEModeCategoryEvent {
    const message = createBaseNewEModeCategoryEvent();
    message.eModeCategory = (object.eModeCategory !== undefined && object.eModeCategory !== null)
      ? EModeCategory.fromPartial(object.eModeCategory)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseUpdateEModeCategoryEvent(): UpdateEModeCategoryEvent {
  return { eModeCategory: undefined, type: "" };
}

export const UpdateEModeCategoryEvent = {
  encode(message: UpdateEModeCategoryEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eModeCategory !== undefined) {
      EModeCategory.encode(message.eModeCategory, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEModeCategoryEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEModeCategoryEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eModeCategory = EModeCategory.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateEModeCategoryEvent {
    return {
      eModeCategory: isSet(object.eModeCategory) ? EModeCategory.fromJSON(object.eModeCategory) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: UpdateEModeCategoryEvent): unknown {
    const obj: any = {};
    message.eModeCategory !== undefined &&
      (obj.eModeCategory = message.eModeCategory ? EModeCategory.toJSON(message.eModeCategory) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<UpdateEModeCategoryEvent>): UpdateEModeCategoryEvent {
    return UpdateEModeCategoryEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateEModeCategoryEvent>): UpdateEModeCategoryEvent {
    const message = createBaseUpdateEModeCategoryEvent();
    message.eModeCategory = (object.eModeCategory !== undefined && object.eModeCategory !== null)
      ? EModeCategory.fromPartial(object.eModeCategory)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseUpdateAccountEModeCategoryNameEvent(): UpdateAccountEModeCategoryNameEvent {
  return { account: "", eModeCategoryName: "" };
}

export const UpdateAccountEModeCategoryNameEvent = {
  encode(message: UpdateAccountEModeCategoryNameEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.eModeCategoryName !== "") {
      writer.uint32(18).string(message.eModeCategoryName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccountEModeCategoryNameEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccountEModeCategoryNameEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = reader.string();
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

  fromJSON(object: any): UpdateAccountEModeCategoryNameEvent {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      eModeCategoryName: isSet(object.eModeCategoryName) ? String(object.eModeCategoryName) : "",
    };
  },

  toJSON(message: UpdateAccountEModeCategoryNameEvent): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.eModeCategoryName !== undefined && (obj.eModeCategoryName = message.eModeCategoryName);
    return obj;
  },

  create(base?: DeepPartial<UpdateAccountEModeCategoryNameEvent>): UpdateAccountEModeCategoryNameEvent {
    return UpdateAccountEModeCategoryNameEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateAccountEModeCategoryNameEvent>): UpdateAccountEModeCategoryNameEvent {
    const message = createBaseUpdateAccountEModeCategoryNameEvent();
    message.account = object.account ?? "";
    message.eModeCategoryName = object.eModeCategoryName ?? "";
    return message;
  },
};

function createBaseSetInterestFeeEvent(): SetInterestFeeEvent {
  return { interestFee: "", type: "" };
}

export const SetInterestFeeEvent = {
  encode(message: SetInterestFeeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interestFee !== "") {
      writer.uint32(10).string(message.interestFee);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetInterestFeeEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetInterestFeeEvent();
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

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetInterestFeeEvent {
    return {
      interestFee: isSet(object.interestFee) ? String(object.interestFee) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetInterestFeeEvent): unknown {
    const obj: any = {};
    message.interestFee !== undefined && (obj.interestFee = message.interestFee);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetInterestFeeEvent>): SetInterestFeeEvent {
    return SetInterestFeeEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetInterestFeeEvent>): SetInterestFeeEvent {
    const message = createBaseSetInterestFeeEvent();
    message.interestFee = object.interestFee ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSetLiquidationFeeEvent(): SetLiquidationFeeEvent {
  return { liquidationFee: "", type: "" };
}

export const SetLiquidationFeeEvent = {
  encode(message: SetLiquidationFeeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidationFee !== "") {
      writer.uint32(10).string(message.liquidationFee);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetLiquidationFeeEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLiquidationFeeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.liquidationFee = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetLiquidationFeeEvent {
    return {
      liquidationFee: isSet(object.liquidationFee) ? String(object.liquidationFee) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetLiquidationFeeEvent): unknown {
    const obj: any = {};
    message.liquidationFee !== undefined && (obj.liquidationFee = message.liquidationFee);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetLiquidationFeeEvent>): SetLiquidationFeeEvent {
    return SetLiquidationFeeEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetLiquidationFeeEvent>): SetLiquidationFeeEvent {
    const message = createBaseSetLiquidationFeeEvent();
    message.liquidationFee = object.liquidationFee ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSetStablecoinInterestRateEvent(): SetStablecoinInterestRateEvent {
  return { stablecoinInterestRate: "", type: "", stablecoinInterestRateDec: "" };
}

export const SetStablecoinInterestRateEvent = {
  encode(message: SetStablecoinInterestRateEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stablecoinInterestRate !== "") {
      writer.uint32(10).string(message.stablecoinInterestRate);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.stablecoinInterestRateDec !== "") {
      writer.uint32(26).string(message.stablecoinInterestRateDec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetStablecoinInterestRateEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetStablecoinInterestRateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stablecoinInterestRate = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stablecoinInterestRateDec = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetStablecoinInterestRateEvent {
    return {
      stablecoinInterestRate: isSet(object.stablecoinInterestRate) ? String(object.stablecoinInterestRate) : "",
      type: isSet(object.type) ? String(object.type) : "",
      stablecoinInterestRateDec: isSet(object.stablecoinInterestRateDec)
        ? String(object.stablecoinInterestRateDec)
        : "",
    };
  },

  toJSON(message: SetStablecoinInterestRateEvent): unknown {
    const obj: any = {};
    message.stablecoinInterestRate !== undefined && (obj.stablecoinInterestRate = message.stablecoinInterestRate);
    message.type !== undefined && (obj.type = message.type);
    message.stablecoinInterestRateDec !== undefined &&
      (obj.stablecoinInterestRateDec = message.stablecoinInterestRateDec);
    return obj;
  },

  create(base?: DeepPartial<SetStablecoinInterestRateEvent>): SetStablecoinInterestRateEvent {
    return SetStablecoinInterestRateEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetStablecoinInterestRateEvent>): SetStablecoinInterestRateEvent {
    const message = createBaseSetStablecoinInterestRateEvent();
    message.stablecoinInterestRate = object.stablecoinInterestRate ?? "";
    message.type = object.type ?? "";
    message.stablecoinInterestRateDec = object.stablecoinInterestRateDec ?? "";
    return message;
  },
};

function createBaseSetStablecoinMintCapEvent(): SetStablecoinMintCapEvent {
  return { stablecoinMintCap: "", type: "" };
}

export const SetStablecoinMintCapEvent = {
  encode(message: SetStablecoinMintCapEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stablecoinMintCap !== "") {
      writer.uint32(10).string(message.stablecoinMintCap);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetStablecoinMintCapEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetStablecoinMintCapEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stablecoinMintCap = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetStablecoinMintCapEvent {
    return {
      stablecoinMintCap: isSet(object.stablecoinMintCap) ? String(object.stablecoinMintCap) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetStablecoinMintCapEvent): unknown {
    const obj: any = {};
    message.stablecoinMintCap !== undefined && (obj.stablecoinMintCap = message.stablecoinMintCap);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetStablecoinMintCapEvent>): SetStablecoinMintCapEvent {
    return SetStablecoinMintCapEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetStablecoinMintCapEvent>): SetStablecoinMintCapEvent {
    const message = createBaseSetStablecoinMintCapEvent();
    message.stablecoinMintCap = object.stablecoinMintCap ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSetCompleteLiquidationThresholdEvent(): SetCompleteLiquidationThresholdEvent {
  return { completeLiquidationThreshold: "", type: "" };
}

export const SetCompleteLiquidationThresholdEvent = {
  encode(message: SetCompleteLiquidationThresholdEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completeLiquidationThreshold !== "") {
      writer.uint32(10).string(message.completeLiquidationThreshold);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCompleteLiquidationThresholdEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCompleteLiquidationThresholdEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.completeLiquidationThreshold = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetCompleteLiquidationThresholdEvent {
    return {
      completeLiquidationThreshold: isSet(object.completeLiquidationThreshold)
        ? String(object.completeLiquidationThreshold)
        : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetCompleteLiquidationThresholdEvent): unknown {
    const obj: any = {};
    message.completeLiquidationThreshold !== undefined &&
      (obj.completeLiquidationThreshold = message.completeLiquidationThreshold);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetCompleteLiquidationThresholdEvent>): SetCompleteLiquidationThresholdEvent {
    return SetCompleteLiquidationThresholdEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetCompleteLiquidationThresholdEvent>): SetCompleteLiquidationThresholdEvent {
    const message = createBaseSetCompleteLiquidationThresholdEvent();
    message.completeLiquidationThreshold = object.completeLiquidationThreshold ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSetMinimumCloseFactorEvent(): SetMinimumCloseFactorEvent {
  return { minimumCloseFactor: "", type: "" };
}

export const SetMinimumCloseFactorEvent = {
  encode(message: SetMinimumCloseFactorEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimumCloseFactor !== "") {
      writer.uint32(10).string(message.minimumCloseFactor);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMinimumCloseFactorEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMinimumCloseFactorEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minimumCloseFactor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetMinimumCloseFactorEvent {
    return {
      minimumCloseFactor: isSet(object.minimumCloseFactor) ? String(object.minimumCloseFactor) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetMinimumCloseFactorEvent): unknown {
    const obj: any = {};
    message.minimumCloseFactor !== undefined && (obj.minimumCloseFactor = message.minimumCloseFactor);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetMinimumCloseFactorEvent>): SetMinimumCloseFactorEvent {
    return SetMinimumCloseFactorEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetMinimumCloseFactorEvent>): SetMinimumCloseFactorEvent {
    const message = createBaseSetMinimumCloseFactorEvent();
    message.minimumCloseFactor = object.minimumCloseFactor ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSetSmallLiquidationSizeEvent(): SetSmallLiquidationSizeEvent {
  return { smallLiquidationSize: "", type: "" };
}

export const SetSmallLiquidationSizeEvent = {
  encode(message: SetSmallLiquidationSizeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.smallLiquidationSize !== "") {
      writer.uint32(10).string(message.smallLiquidationSize);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSmallLiquidationSizeEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSmallLiquidationSizeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.smallLiquidationSize = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetSmallLiquidationSizeEvent {
    return {
      smallLiquidationSize: isSet(object.smallLiquidationSize) ? String(object.smallLiquidationSize) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetSmallLiquidationSizeEvent): unknown {
    const obj: any = {};
    message.smallLiquidationSize !== undefined && (obj.smallLiquidationSize = message.smallLiquidationSize);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetSmallLiquidationSizeEvent>): SetSmallLiquidationSizeEvent {
    return SetSmallLiquidationSizeEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetSmallLiquidationSizeEvent>): SetSmallLiquidationSizeEvent {
    const message = createBaseSetSmallLiquidationSizeEvent();
    message.smallLiquidationSize = object.smallLiquidationSize ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSetStalePriceGracePeriodEvent(): SetStalePriceGracePeriodEvent {
  return { stalePriceGracePeriod: undefined, type: "" };
}

export const SetStalePriceGracePeriodEvent = {
  encode(message: SetStalePriceGracePeriodEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stalePriceGracePeriod !== undefined) {
      Duration.encode(message.stalePriceGracePeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetStalePriceGracePeriodEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetStalePriceGracePeriodEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stalePriceGracePeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetStalePriceGracePeriodEvent {
    return {
      stalePriceGracePeriod: isSet(object.stalePriceGracePeriod)
        ? Duration.fromJSON(object.stalePriceGracePeriod)
        : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetStalePriceGracePeriodEvent): unknown {
    const obj: any = {};
    message.stalePriceGracePeriod !== undefined && (obj.stalePriceGracePeriod = message.stalePriceGracePeriod
      ? Duration.toJSON(message.stalePriceGracePeriod)
      : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetStalePriceGracePeriodEvent>): SetStalePriceGracePeriodEvent {
    return SetStalePriceGracePeriodEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetStalePriceGracePeriodEvent>): SetStalePriceGracePeriodEvent {
    const message = createBaseSetStalePriceGracePeriodEvent();
    message.stalePriceGracePeriod =
      (object.stalePriceGracePeriod !== undefined && object.stalePriceGracePeriod !== null)
        ? Duration.fromPartial(object.stalePriceGracePeriod)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSetCdpPausedEvent(): SetCdpPausedEvent {
  return { cdpPaused: false, type: "" };
}

export const SetCdpPausedEvent = {
  encode(message: SetCdpPausedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cdpPaused === true) {
      writer.uint32(8).bool(message.cdpPaused);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCdpPausedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCdpPausedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.cdpPaused = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetCdpPausedEvent {
    return {
      cdpPaused: isSet(object.cdpPaused) ? Boolean(object.cdpPaused) : false,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: SetCdpPausedEvent): unknown {
    const obj: any = {};
    message.cdpPaused !== undefined && (obj.cdpPaused = message.cdpPaused);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<SetCdpPausedEvent>): SetCdpPausedEvent {
    return SetCdpPausedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetCdpPausedEvent>): SetCdpPausedEvent {
    const message = createBaseSetCdpPausedEvent();
    message.cdpPaused = object.cdpPaused ?? false;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSupplyAssetEvent(): SupplyAssetEvent {
  return { supplier: "", denom: "", amountSupplied: "", cibtDenom: "", amountMinted: "" };
}

export const SupplyAssetEvent = {
  encode(message: SupplyAssetEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amountSupplied !== "") {
      writer.uint32(26).string(message.amountSupplied);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(34).string(message.cibtDenom);
    }
    if (message.amountMinted !== "") {
      writer.uint32(42).string(message.amountMinted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SupplyAssetEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupplyAssetEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.supplier = reader.string();
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

          message.amountSupplied = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cibtDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amountMinted = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SupplyAssetEvent {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amountSupplied: isSet(object.amountSupplied) ? String(object.amountSupplied) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      amountMinted: isSet(object.amountMinted) ? String(object.amountMinted) : "",
    };
  },

  toJSON(message: SupplyAssetEvent): unknown {
    const obj: any = {};
    message.supplier !== undefined && (obj.supplier = message.supplier);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountSupplied !== undefined && (obj.amountSupplied = message.amountSupplied);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amountMinted !== undefined && (obj.amountMinted = message.amountMinted);
    return obj;
  },

  create(base?: DeepPartial<SupplyAssetEvent>): SupplyAssetEvent {
    return SupplyAssetEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SupplyAssetEvent>): SupplyAssetEvent {
    const message = createBaseSupplyAssetEvent();
    message.supplier = object.supplier ?? "";
    message.denom = object.denom ?? "";
    message.amountSupplied = object.amountSupplied ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amountMinted = object.amountMinted ?? "";
    return message;
  },
};

function createBaseWithdrawAssetEvent(): WithdrawAssetEvent {
  return { withdrawer: "", denom: "", amountWithdrawed: "", cibtDenom: "", amountBurned: "" };
}

export const WithdrawAssetEvent = {
  encode(message: WithdrawAssetEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawer !== "") {
      writer.uint32(10).string(message.withdrawer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amountWithdrawed !== "") {
      writer.uint32(26).string(message.amountWithdrawed);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(34).string(message.cibtDenom);
    }
    if (message.amountBurned !== "") {
      writer.uint32(42).string(message.amountBurned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawAssetEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawAssetEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.withdrawer = reader.string();
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

          message.amountWithdrawed = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cibtDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amountBurned = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithdrawAssetEvent {
    return {
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amountWithdrawed: isSet(object.amountWithdrawed) ? String(object.amountWithdrawed) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      amountBurned: isSet(object.amountBurned) ? String(object.amountBurned) : "",
    };
  },

  toJSON(message: WithdrawAssetEvent): unknown {
    const obj: any = {};
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountWithdrawed !== undefined && (obj.amountWithdrawed = message.amountWithdrawed);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amountBurned !== undefined && (obj.amountBurned = message.amountBurned);
    return obj;
  },

  create(base?: DeepPartial<WithdrawAssetEvent>): WithdrawAssetEvent {
    return WithdrawAssetEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WithdrawAssetEvent>): WithdrawAssetEvent {
    const message = createBaseWithdrawAssetEvent();
    message.withdrawer = object.withdrawer ?? "";
    message.denom = object.denom ?? "";
    message.amountWithdrawed = object.amountWithdrawed ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amountBurned = object.amountBurned ?? "";
    return message;
  },
};

function createBaseBorrowAssetEvent(): BorrowAssetEvent {
  return {
    borrower: "",
    denom: "",
    amountBorrowed: "",
    debtValue: "",
    collateralValue: "",
    initialCumulativeInterestMultiplier: "",
  };
}

export const BorrowAssetEvent = {
  encode(message: BorrowAssetEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amountBorrowed !== "") {
      writer.uint32(26).string(message.amountBorrowed);
    }
    if (message.debtValue !== "") {
      writer.uint32(34).string(message.debtValue);
    }
    if (message.collateralValue !== "") {
      writer.uint32(50).string(message.collateralValue);
    }
    if (message.initialCumulativeInterestMultiplier !== "") {
      writer.uint32(42).string(message.initialCumulativeInterestMultiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BorrowAssetEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBorrowAssetEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.borrower = reader.string();
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

          message.amountBorrowed = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.debtValue = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.collateralValue = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initialCumulativeInterestMultiplier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BorrowAssetEvent {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amountBorrowed: isSet(object.amountBorrowed) ? String(object.amountBorrowed) : "",
      debtValue: isSet(object.debtValue) ? String(object.debtValue) : "",
      collateralValue: isSet(object.collateralValue) ? String(object.collateralValue) : "",
      initialCumulativeInterestMultiplier: isSet(object.initialCumulativeInterestMultiplier)
        ? String(object.initialCumulativeInterestMultiplier)
        : "",
    };
  },

  toJSON(message: BorrowAssetEvent): unknown {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountBorrowed !== undefined && (obj.amountBorrowed = message.amountBorrowed);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined && (obj.collateralValue = message.collateralValue);
    message.initialCumulativeInterestMultiplier !== undefined &&
      (obj.initialCumulativeInterestMultiplier = message.initialCumulativeInterestMultiplier);
    return obj;
  },

  create(base?: DeepPartial<BorrowAssetEvent>): BorrowAssetEvent {
    return BorrowAssetEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BorrowAssetEvent>): BorrowAssetEvent {
    const message = createBaseBorrowAssetEvent();
    message.borrower = object.borrower ?? "";
    message.denom = object.denom ?? "";
    message.amountBorrowed = object.amountBorrowed ?? "";
    message.debtValue = object.debtValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    message.initialCumulativeInterestMultiplier = object.initialCumulativeInterestMultiplier ?? "";
    return message;
  },
};

function createBaseRepayAssetEvent(): RepayAssetEvent {
  return {
    repayer: "",
    debtor: "",
    denom: "",
    principalRepaid: "",
    interestRepaid: "",
    debtValue: "",
    collateralValue: "",
  };
}

export const RepayAssetEvent = {
  encode(message: RepayAssetEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repayer !== "") {
      writer.uint32(10).string(message.repayer);
    }
    if (message.debtor !== "") {
      writer.uint32(18).string(message.debtor);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.principalRepaid !== "") {
      writer.uint32(34).string(message.principalRepaid);
    }
    if (message.interestRepaid !== "") {
      writer.uint32(42).string(message.interestRepaid);
    }
    if (message.debtValue !== "") {
      writer.uint32(50).string(message.debtValue);
    }
    if (message.collateralValue !== "") {
      writer.uint32(58).string(message.collateralValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepayAssetEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepayAssetEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.repayer = reader.string();
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

          message.denom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.principalRepaid = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.interestRepaid = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.debtValue = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.collateralValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RepayAssetEvent {
    return {
      repayer: isSet(object.repayer) ? String(object.repayer) : "",
      debtor: isSet(object.debtor) ? String(object.debtor) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      principalRepaid: isSet(object.principalRepaid) ? String(object.principalRepaid) : "",
      interestRepaid: isSet(object.interestRepaid) ? String(object.interestRepaid) : "",
      debtValue: isSet(object.debtValue) ? String(object.debtValue) : "",
      collateralValue: isSet(object.collateralValue) ? String(object.collateralValue) : "",
    };
  },

  toJSON(message: RepayAssetEvent): unknown {
    const obj: any = {};
    message.repayer !== undefined && (obj.repayer = message.repayer);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.denom !== undefined && (obj.denom = message.denom);
    message.principalRepaid !== undefined && (obj.principalRepaid = message.principalRepaid);
    message.interestRepaid !== undefined && (obj.interestRepaid = message.interestRepaid);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined && (obj.collateralValue = message.collateralValue);
    return obj;
  },

  create(base?: DeepPartial<RepayAssetEvent>): RepayAssetEvent {
    return RepayAssetEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RepayAssetEvent>): RepayAssetEvent {
    const message = createBaseRepayAssetEvent();
    message.repayer = object.repayer ?? "";
    message.debtor = object.debtor ?? "";
    message.denom = object.denom ?? "";
    message.principalRepaid = object.principalRepaid ?? "";
    message.interestRepaid = object.interestRepaid ?? "";
    message.debtValue = object.debtValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    return message;
  },
};

function createBaseLockCollateralEvent(): LockCollateralEvent {
  return { locker: "", cibtDenom: "", amountLocked: "", debtValue: "", collateralValue: "" };
}

export const LockCollateralEvent = {
  encode(message: LockCollateralEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.locker !== "") {
      writer.uint32(10).string(message.locker);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(18).string(message.cibtDenom);
    }
    if (message.amountLocked !== "") {
      writer.uint32(26).string(message.amountLocked);
    }
    if (message.debtValue !== "") {
      writer.uint32(34).string(message.debtValue);
    }
    if (message.collateralValue !== "") {
      writer.uint32(42).string(message.collateralValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockCollateralEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockCollateralEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.locker = reader.string();
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

          message.amountLocked = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.debtValue = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.collateralValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LockCollateralEvent {
    return {
      locker: isSet(object.locker) ? String(object.locker) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      amountLocked: isSet(object.amountLocked) ? String(object.amountLocked) : "",
      debtValue: isSet(object.debtValue) ? String(object.debtValue) : "",
      collateralValue: isSet(object.collateralValue) ? String(object.collateralValue) : "",
    };
  },

  toJSON(message: LockCollateralEvent): unknown {
    const obj: any = {};
    message.locker !== undefined && (obj.locker = message.locker);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amountLocked !== undefined && (obj.amountLocked = message.amountLocked);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined && (obj.collateralValue = message.collateralValue);
    return obj;
  },

  create(base?: DeepPartial<LockCollateralEvent>): LockCollateralEvent {
    return LockCollateralEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LockCollateralEvent>): LockCollateralEvent {
    const message = createBaseLockCollateralEvent();
    message.locker = object.locker ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amountLocked = object.amountLocked ?? "";
    message.debtValue = object.debtValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    return message;
  },
};

function createBaseUnlockCollateralEvent(): UnlockCollateralEvent {
  return { unlocker: "", cibtDenom: "", amountUnlocked: "", debtValue: "", collateralValue: "" };
}

export const UnlockCollateralEvent = {
  encode(message: UnlockCollateralEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unlocker !== "") {
      writer.uint32(10).string(message.unlocker);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(18).string(message.cibtDenom);
    }
    if (message.amountUnlocked !== "") {
      writer.uint32(26).string(message.amountUnlocked);
    }
    if (message.debtValue !== "") {
      writer.uint32(34).string(message.debtValue);
    }
    if (message.collateralValue !== "") {
      writer.uint32(42).string(message.collateralValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnlockCollateralEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlockCollateralEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unlocker = reader.string();
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

          message.amountUnlocked = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.debtValue = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.collateralValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnlockCollateralEvent {
    return {
      unlocker: isSet(object.unlocker) ? String(object.unlocker) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      amountUnlocked: isSet(object.amountUnlocked) ? String(object.amountUnlocked) : "",
      debtValue: isSet(object.debtValue) ? String(object.debtValue) : "",
      collateralValue: isSet(object.collateralValue) ? String(object.collateralValue) : "",
    };
  },

  toJSON(message: UnlockCollateralEvent): unknown {
    const obj: any = {};
    message.unlocker !== undefined && (obj.unlocker = message.unlocker);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amountUnlocked !== undefined && (obj.amountUnlocked = message.amountUnlocked);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined && (obj.collateralValue = message.collateralValue);
    return obj;
  },

  create(base?: DeepPartial<UnlockCollateralEvent>): UnlockCollateralEvent {
    return UnlockCollateralEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnlockCollateralEvent>): UnlockCollateralEvent {
    const message = createBaseUnlockCollateralEvent();
    message.unlocker = object.unlocker ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amountUnlocked = object.amountUnlocked ?? "";
    message.debtValue = object.debtValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    return message;
  },
};

function createBaseUpdateDebtInfoEvent(): UpdateDebtInfoEvent {
  return { debtInfo: undefined, type: "" };
}

export const UpdateDebtInfoEvent = {
  encode(message: UpdateDebtInfoEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.debtInfo !== undefined) {
      DebtInfo.encode(message.debtInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDebtInfoEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDebtInfoEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.debtInfo = DebtInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDebtInfoEvent {
    return {
      debtInfo: isSet(object.debtInfo) ? DebtInfo.fromJSON(object.debtInfo) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: UpdateDebtInfoEvent): unknown {
    const obj: any = {};
    message.debtInfo !== undefined && (obj.debtInfo = message.debtInfo ? DebtInfo.toJSON(message.debtInfo) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<UpdateDebtInfoEvent>): UpdateDebtInfoEvent {
    return UpdateDebtInfoEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateDebtInfoEvent>): UpdateDebtInfoEvent {
    const message = createBaseUpdateDebtInfoEvent();
    message.debtInfo = (object.debtInfo !== undefined && object.debtInfo !== null)
      ? DebtInfo.fromPartial(object.debtInfo)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseUpdateStablecoinDebtInfoEvent(): UpdateStablecoinDebtInfoEvent {
  return { stablecoinDebtInfo: undefined, type: "" };
}

export const UpdateStablecoinDebtInfoEvent = {
  encode(message: UpdateStablecoinDebtInfoEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stablecoinDebtInfo !== undefined) {
      StablecoinDebtInfo.encode(message.stablecoinDebtInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStablecoinDebtInfoEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateStablecoinDebtInfoEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stablecoinDebtInfo = StablecoinDebtInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateStablecoinDebtInfoEvent {
    return {
      stablecoinDebtInfo: isSet(object.stablecoinDebtInfo)
        ? StablecoinDebtInfo.fromJSON(object.stablecoinDebtInfo)
        : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: UpdateStablecoinDebtInfoEvent): unknown {
    const obj: any = {};
    message.stablecoinDebtInfo !== undefined && (obj.stablecoinDebtInfo = message.stablecoinDebtInfo
      ? StablecoinDebtInfo.toJSON(message.stablecoinDebtInfo)
      : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<UpdateStablecoinDebtInfoEvent>): UpdateStablecoinDebtInfoEvent {
    return UpdateStablecoinDebtInfoEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateStablecoinDebtInfoEvent>): UpdateStablecoinDebtInfoEvent {
    const message = createBaseUpdateStablecoinDebtInfoEvent();
    message.stablecoinDebtInfo = (object.stablecoinDebtInfo !== undefined && object.stablecoinDebtInfo !== null)
      ? StablecoinDebtInfo.fromPartial(object.stablecoinDebtInfo)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseMintStablecoinEvent(): MintStablecoinEvent {
  return {
    minter: "",
    denom: "",
    amountMinted: "",
    debtValue: "",
    collateralValue: "",
    initialCumulativeInterestMultiplier: "",
  };
}

export const MintStablecoinEvent = {
  encode(message: MintStablecoinEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amountMinted !== "") {
      writer.uint32(26).string(message.amountMinted);
    }
    if (message.debtValue !== "") {
      writer.uint32(34).string(message.debtValue);
    }
    if (message.collateralValue !== "") {
      writer.uint32(50).string(message.collateralValue);
    }
    if (message.initialCumulativeInterestMultiplier !== "") {
      writer.uint32(42).string(message.initialCumulativeInterestMultiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintStablecoinEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintStablecoinEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minter = reader.string();
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

          message.amountMinted = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.debtValue = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.collateralValue = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initialCumulativeInterestMultiplier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MintStablecoinEvent {
    return {
      minter: isSet(object.minter) ? String(object.minter) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amountMinted: isSet(object.amountMinted) ? String(object.amountMinted) : "",
      debtValue: isSet(object.debtValue) ? String(object.debtValue) : "",
      collateralValue: isSet(object.collateralValue) ? String(object.collateralValue) : "",
      initialCumulativeInterestMultiplier: isSet(object.initialCumulativeInterestMultiplier)
        ? String(object.initialCumulativeInterestMultiplier)
        : "",
    };
  },

  toJSON(message: MintStablecoinEvent): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountMinted !== undefined && (obj.amountMinted = message.amountMinted);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined && (obj.collateralValue = message.collateralValue);
    message.initialCumulativeInterestMultiplier !== undefined &&
      (obj.initialCumulativeInterestMultiplier = message.initialCumulativeInterestMultiplier);
    return obj;
  },

  create(base?: DeepPartial<MintStablecoinEvent>): MintStablecoinEvent {
    return MintStablecoinEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MintStablecoinEvent>): MintStablecoinEvent {
    const message = createBaseMintStablecoinEvent();
    message.minter = object.minter ?? "";
    message.denom = object.denom ?? "";
    message.amountMinted = object.amountMinted ?? "";
    message.debtValue = object.debtValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    message.initialCumulativeInterestMultiplier = object.initialCumulativeInterestMultiplier ?? "";
    return message;
  },
};

function createBaseReturnStablecoinEvent(): ReturnStablecoinEvent {
  return {
    returner: "",
    debtor: "",
    interestDenom: "",
    interestRepaid: "",
    principalRepaid: "",
    debtValue: "",
    collateralValue: "",
  };
}

export const ReturnStablecoinEvent = {
  encode(message: ReturnStablecoinEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.returner !== "") {
      writer.uint32(10).string(message.returner);
    }
    if (message.debtor !== "") {
      writer.uint32(18).string(message.debtor);
    }
    if (message.interestDenom !== "") {
      writer.uint32(26).string(message.interestDenom);
    }
    if (message.interestRepaid !== "") {
      writer.uint32(34).string(message.interestRepaid);
    }
    if (message.principalRepaid !== "") {
      writer.uint32(42).string(message.principalRepaid);
    }
    if (message.debtValue !== "") {
      writer.uint32(50).string(message.debtValue);
    }
    if (message.collateralValue !== "") {
      writer.uint32(58).string(message.collateralValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnStablecoinEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnStablecoinEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.returner = reader.string();
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

          message.interestDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.interestRepaid = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.principalRepaid = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.debtValue = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.collateralValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnStablecoinEvent {
    return {
      returner: isSet(object.returner) ? String(object.returner) : "",
      debtor: isSet(object.debtor) ? String(object.debtor) : "",
      interestDenom: isSet(object.interestDenom) ? String(object.interestDenom) : "",
      interestRepaid: isSet(object.interestRepaid) ? String(object.interestRepaid) : "",
      principalRepaid: isSet(object.principalRepaid) ? String(object.principalRepaid) : "",
      debtValue: isSet(object.debtValue) ? String(object.debtValue) : "",
      collateralValue: isSet(object.collateralValue) ? String(object.collateralValue) : "",
    };
  },

  toJSON(message: ReturnStablecoinEvent): unknown {
    const obj: any = {};
    message.returner !== undefined && (obj.returner = message.returner);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.interestDenom !== undefined && (obj.interestDenom = message.interestDenom);
    message.interestRepaid !== undefined && (obj.interestRepaid = message.interestRepaid);
    message.principalRepaid !== undefined && (obj.principalRepaid = message.principalRepaid);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined && (obj.collateralValue = message.collateralValue);
    return obj;
  },

  create(base?: DeepPartial<ReturnStablecoinEvent>): ReturnStablecoinEvent {
    return ReturnStablecoinEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ReturnStablecoinEvent>): ReturnStablecoinEvent {
    const message = createBaseReturnStablecoinEvent();
    message.returner = object.returner ?? "";
    message.debtor = object.debtor ?? "";
    message.interestDenom = object.interestDenom ?? "";
    message.interestRepaid = object.interestRepaid ?? "";
    message.principalRepaid = object.principalRepaid ?? "";
    message.debtValue = object.debtValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    return message;
  },
};

function createBaseLiquidateCollateralEvent(): LiquidateCollateralEvent {
  return {
    liquidator: "",
    debtor: "",
    collateralDenom: "",
    collateralAmountLiquidated: "",
    collateralAmountLiquidator: "",
    collateralAmountFee: "",
    liquidationPrice: "",
    marketPrice: "",
    discount: "",
    debtDenom: "",
    debtAmount: "",
    id: Long.UZERO,
    principalAmount: "",
    interestDenom: "",
    interestAmount: "",
  };
}

export const LiquidateCollateralEvent = {
  encode(message: LiquidateCollateralEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidator !== "") {
      writer.uint32(10).string(message.liquidator);
    }
    if (message.debtor !== "") {
      writer.uint32(18).string(message.debtor);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(26).string(message.collateralDenom);
    }
    if (message.collateralAmountLiquidated !== "") {
      writer.uint32(34).string(message.collateralAmountLiquidated);
    }
    if (message.collateralAmountLiquidator !== "") {
      writer.uint32(42).string(message.collateralAmountLiquidator);
    }
    if (message.collateralAmountFee !== "") {
      writer.uint32(50).string(message.collateralAmountFee);
    }
    if (message.liquidationPrice !== "") {
      writer.uint32(58).string(message.liquidationPrice);
    }
    if (message.marketPrice !== "") {
      writer.uint32(66).string(message.marketPrice);
    }
    if (message.discount !== "") {
      writer.uint32(74).string(message.discount);
    }
    if (message.debtDenom !== "") {
      writer.uint32(82).string(message.debtDenom);
    }
    if (message.debtAmount !== "") {
      writer.uint32(90).string(message.debtAmount);
    }
    if (!message.id.isZero()) {
      writer.uint32(96).uint64(message.id);
    }
    if (message.principalAmount !== "") {
      writer.uint32(106).string(message.principalAmount);
    }
    if (message.interestDenom !== "") {
      writer.uint32(114).string(message.interestDenom);
    }
    if (message.interestAmount !== "") {
      writer.uint32(122).string(message.interestAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidateCollateralEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidateCollateralEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.liquidator = reader.string();
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

          message.collateralDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.collateralAmountLiquidated = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.collateralAmountLiquidator = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.collateralAmountFee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.liquidationPrice = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.marketPrice = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.discount = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.debtDenom = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.debtAmount = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.principalAmount = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.interestDenom = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.interestAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LiquidateCollateralEvent {
    return {
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      debtor: isSet(object.debtor) ? String(object.debtor) : "",
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
      collateralAmountLiquidated: isSet(object.collateralAmountLiquidated)
        ? String(object.collateralAmountLiquidated)
        : "",
      collateralAmountLiquidator: isSet(object.collateralAmountLiquidator)
        ? String(object.collateralAmountLiquidator)
        : "",
      collateralAmountFee: isSet(object.collateralAmountFee) ? String(object.collateralAmountFee) : "",
      liquidationPrice: isSet(object.liquidationPrice) ? String(object.liquidationPrice) : "",
      marketPrice: isSet(object.marketPrice) ? String(object.marketPrice) : "",
      discount: isSet(object.discount) ? String(object.discount) : "",
      debtDenom: isSet(object.debtDenom) ? String(object.debtDenom) : "",
      debtAmount: isSet(object.debtAmount) ? String(object.debtAmount) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      principalAmount: isSet(object.principalAmount) ? String(object.principalAmount) : "",
      interestDenom: isSet(object.interestDenom) ? String(object.interestDenom) : "",
      interestAmount: isSet(object.interestAmount) ? String(object.interestAmount) : "",
    };
  },

  toJSON(message: LiquidateCollateralEvent): unknown {
    const obj: any = {};
    message.liquidator !== undefined && (obj.liquidator = message.liquidator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    message.collateralAmountLiquidated !== undefined &&
      (obj.collateralAmountLiquidated = message.collateralAmountLiquidated);
    message.collateralAmountLiquidator !== undefined &&
      (obj.collateralAmountLiquidator = message.collateralAmountLiquidator);
    message.collateralAmountFee !== undefined && (obj.collateralAmountFee = message.collateralAmountFee);
    message.liquidationPrice !== undefined && (obj.liquidationPrice = message.liquidationPrice);
    message.marketPrice !== undefined && (obj.marketPrice = message.marketPrice);
    message.discount !== undefined && (obj.discount = message.discount);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.debtAmount !== undefined && (obj.debtAmount = message.debtAmount);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.principalAmount !== undefined && (obj.principalAmount = message.principalAmount);
    message.interestDenom !== undefined && (obj.interestDenom = message.interestDenom);
    message.interestAmount !== undefined && (obj.interestAmount = message.interestAmount);
    return obj;
  },

  create(base?: DeepPartial<LiquidateCollateralEvent>): LiquidateCollateralEvent {
    return LiquidateCollateralEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LiquidateCollateralEvent>): LiquidateCollateralEvent {
    const message = createBaseLiquidateCollateralEvent();
    message.liquidator = object.liquidator ?? "";
    message.debtor = object.debtor ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.collateralAmountLiquidated = object.collateralAmountLiquidated ?? "";
    message.collateralAmountLiquidator = object.collateralAmountLiquidator ?? "";
    message.collateralAmountFee = object.collateralAmountFee ?? "";
    message.liquidationPrice = object.liquidationPrice ?? "";
    message.marketPrice = object.marketPrice ?? "";
    message.discount = object.discount ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.debtAmount = object.debtAmount ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.principalAmount = object.principalAmount ?? "";
    message.interestDenom = object.interestDenom ?? "";
    message.interestAmount = object.interestAmount ?? "";
    return message;
  },
};

function createBaseClaimRewardEvent(): ClaimRewardEvent {
  return { receiver: "", rewardSchemeId: "", rewardClaimed: "" };
}

export const ClaimRewardEvent = {
  encode(message: ClaimRewardEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.rewardSchemeId !== "") {
      writer.uint32(18).string(message.rewardSchemeId);
    }
    if (message.rewardClaimed !== "") {
      writer.uint32(26).string(message.rewardClaimed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRewardEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRewardEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rewardSchemeId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewardClaimed = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClaimRewardEvent {
    return {
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      rewardSchemeId: isSet(object.rewardSchemeId) ? String(object.rewardSchemeId) : "",
      rewardClaimed: isSet(object.rewardClaimed) ? String(object.rewardClaimed) : "",
    };
  },

  toJSON(message: ClaimRewardEvent): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.rewardSchemeId !== undefined && (obj.rewardSchemeId = message.rewardSchemeId);
    message.rewardClaimed !== undefined && (obj.rewardClaimed = message.rewardClaimed);
    return obj;
  },

  create(base?: DeepPartial<ClaimRewardEvent>): ClaimRewardEvent {
    return ClaimRewardEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ClaimRewardEvent>): ClaimRewardEvent {
    const message = createBaseClaimRewardEvent();
    message.receiver = object.receiver ?? "";
    message.rewardSchemeId = object.rewardSchemeId ?? "";
    message.rewardClaimed = object.rewardClaimed ?? "";
    return message;
  },
};

function createBaseRewardDebtEvent(): RewardDebtEvent {
  return { rewardDebt: undefined, type: "" };
}

export const RewardDebtEvent = {
  encode(message: RewardDebtEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardDebt !== undefined) {
      RewardDebt.encode(message.rewardDebt, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardDebtEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardDebtEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardDebt = RewardDebt.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardDebtEvent {
    return {
      rewardDebt: isSet(object.rewardDebt) ? RewardDebt.fromJSON(object.rewardDebt) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: RewardDebtEvent): unknown {
    const obj: any = {};
    message.rewardDebt !== undefined &&
      (obj.rewardDebt = message.rewardDebt ? RewardDebt.toJSON(message.rewardDebt) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<RewardDebtEvent>): RewardDebtEvent {
    return RewardDebtEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardDebtEvent>): RewardDebtEvent {
    const message = createBaseRewardDebtEvent();
    message.rewardDebt = (object.rewardDebt !== undefined && object.rewardDebt !== null)
      ? RewardDebt.fromPartial(object.rewardDebt)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseRewardSchemeEvent(): RewardSchemeEvent {
  return { rewardScheme: undefined, type: "" };
}

export const RewardSchemeEvent = {
  encode(message: RewardSchemeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardScheme !== undefined) {
      RewardScheme.encode(message.rewardScheme, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardSchemeEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardSchemeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardScheme = RewardScheme.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardSchemeEvent {
    return {
      rewardScheme: isSet(object.rewardScheme) ? RewardScheme.fromJSON(object.rewardScheme) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: RewardSchemeEvent): unknown {
    const obj: any = {};
    message.rewardScheme !== undefined &&
      (obj.rewardScheme = message.rewardScheme ? RewardScheme.toJSON(message.rewardScheme) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<RewardSchemeEvent>): RewardSchemeEvent {
    return RewardSchemeEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardSchemeEvent>): RewardSchemeEvent {
    const message = createBaseRewardSchemeEvent();
    message.rewardScheme = (object.rewardScheme !== undefined && object.rewardScheme !== null)
      ? RewardScheme.fromPartial(object.rewardScheme)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseAddReserveEvent(): AddReserveEvent {
  return { rewardScheme: undefined, amountAdded: "" };
}

export const AddReserveEvent = {
  encode(message: AddReserveEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardScheme !== undefined) {
      RewardScheme.encode(message.rewardScheme, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountAdded !== "") {
      writer.uint32(18).string(message.amountAdded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddReserveEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddReserveEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardScheme = RewardScheme.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountAdded = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddReserveEvent {
    return {
      rewardScheme: isSet(object.rewardScheme) ? RewardScheme.fromJSON(object.rewardScheme) : undefined,
      amountAdded: isSet(object.amountAdded) ? String(object.amountAdded) : "",
    };
  },

  toJSON(message: AddReserveEvent): unknown {
    const obj: any = {};
    message.rewardScheme !== undefined &&
      (obj.rewardScheme = message.rewardScheme ? RewardScheme.toJSON(message.rewardScheme) : undefined);
    message.amountAdded !== undefined && (obj.amountAdded = message.amountAdded);
    return obj;
  },

  create(base?: DeepPartial<AddReserveEvent>): AddReserveEvent {
    return AddReserveEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddReserveEvent>): AddReserveEvent {
    const message = createBaseAddReserveEvent();
    message.rewardScheme = (object.rewardScheme !== undefined && object.rewardScheme !== null)
      ? RewardScheme.fromPartial(object.rewardScheme)
      : undefined;
    message.amountAdded = object.amountAdded ?? "";
    return message;
  },
};

function createBaseRefundReserveEvent(): RefundReserveEvent {
  return { rewardScheme: undefined, amountRefunded: "" };
}

export const RefundReserveEvent = {
  encode(message: RefundReserveEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardScheme !== undefined) {
      RewardScheme.encode(message.rewardScheme, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountRefunded !== "") {
      writer.uint32(18).string(message.amountRefunded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefundReserveEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefundReserveEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardScheme = RewardScheme.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountRefunded = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RefundReserveEvent {
    return {
      rewardScheme: isSet(object.rewardScheme) ? RewardScheme.fromJSON(object.rewardScheme) : undefined,
      amountRefunded: isSet(object.amountRefunded) ? String(object.amountRefunded) : "",
    };
  },

  toJSON(message: RefundReserveEvent): unknown {
    const obj: any = {};
    message.rewardScheme !== undefined &&
      (obj.rewardScheme = message.rewardScheme ? RewardScheme.toJSON(message.rewardScheme) : undefined);
    message.amountRefunded !== undefined && (obj.amountRefunded = message.amountRefunded);
    return obj;
  },

  create(base?: DeepPartial<RefundReserveEvent>): RefundReserveEvent {
    return RefundReserveEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RefundReserveEvent>): RefundReserveEvent {
    const message = createBaseRefundReserveEvent();
    message.rewardScheme = (object.rewardScheme !== undefined && object.rewardScheme !== null)
      ? RewardScheme.fromPartial(object.rewardScheme)
      : undefined;
    message.amountRefunded = object.amountRefunded ?? "";
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
