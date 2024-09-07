/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { RateStrategyParams } from "./rate_strategy_params";
import { AssetParams } from "./asset_params";
import { EModeCategory } from "./e_mode_category";
import { Duration } from "../../../google/protobuf/duration";
import { DebtInfo } from "./debt_info";
import { StablecoinDebtInfo } from "./stablecoin_debt_info";
import { RewardDebt, RewardScheme } from "./reward_scheme";

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

const baseNewRateStrategyParamsEvent: object = { type: "" };

export const NewRateStrategyParamsEvent = {
  encode(
    message: NewRateStrategyParamsEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(
        message.rateStrategyParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NewRateStrategyParamsEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseNewRateStrategyParamsEvent,
    } as NewRateStrategyParamsEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateStrategyParams = RateStrategyParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewRateStrategyParamsEvent {
    const message = {
      ...baseNewRateStrategyParamsEvent,
    } as NewRateStrategyParamsEvent;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: NewRateStrategyParamsEvent): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined &&
      (obj.rateStrategyParams = message.rateStrategyParams
        ? RateStrategyParams.toJSON(message.rateStrategyParams)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<NewRateStrategyParamsEvent>
  ): NewRateStrategyParamsEvent {
    const message = {
      ...baseNewRateStrategyParamsEvent,
    } as NewRateStrategyParamsEvent;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromPartial(object.rateStrategyParams)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseUpdateRateStrategyParamsEvent: object = { type: "" };

export const UpdateRateStrategyParamsEvent = {
  encode(
    message: UpdateRateStrategyParamsEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(
        message.rateStrategyParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateRateStrategyParamsEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateRateStrategyParamsEvent,
    } as UpdateRateStrategyParamsEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateStrategyParams = RateStrategyParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateRateStrategyParamsEvent {
    const message = {
      ...baseUpdateRateStrategyParamsEvent,
    } as UpdateRateStrategyParamsEvent;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: UpdateRateStrategyParamsEvent): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined &&
      (obj.rateStrategyParams = message.rateStrategyParams
        ? RateStrategyParams.toJSON(message.rateStrategyParams)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateRateStrategyParamsEvent>
  ): UpdateRateStrategyParamsEvent {
    const message = {
      ...baseUpdateRateStrategyParamsEvent,
    } as UpdateRateStrategyParamsEvent;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromPartial(object.rateStrategyParams)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseRemoveRateStrategyParamsEvent: object = { type: "" };

export const RemoveRateStrategyParamsEvent = {
  encode(
    message: RemoveRateStrategyParamsEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(
        message.rateStrategyParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveRateStrategyParamsEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveRateStrategyParamsEvent,
    } as RemoveRateStrategyParamsEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateStrategyParams = RateStrategyParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveRateStrategyParamsEvent {
    const message = {
      ...baseRemoveRateStrategyParamsEvent,
    } as RemoveRateStrategyParamsEvent;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: RemoveRateStrategyParamsEvent): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined &&
      (obj.rateStrategyParams = message.rateStrategyParams
        ? RateStrategyParams.toJSON(message.rateStrategyParams)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveRateStrategyParamsEvent>
  ): RemoveRateStrategyParamsEvent {
    const message = {
      ...baseRemoveRateStrategyParamsEvent,
    } as RemoveRateStrategyParamsEvent;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromPartial(object.rateStrategyParams)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseNewAssetParamsEvent: object = { type: "" };

export const NewAssetParamsEvent = {
  encode(
    message: NewAssetParamsEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParams.encode(
        message.assetParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewAssetParamsEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewAssetParamsEvent } as NewAssetParamsEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetParams = AssetParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewAssetParamsEvent {
    const message = { ...baseNewAssetParamsEvent } as NewAssetParamsEvent;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromJSON(object.assetParams)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: NewAssetParamsEvent): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams
        ? AssetParams.toJSON(message.assetParams)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<NewAssetParamsEvent>): NewAssetParamsEvent {
    const message = { ...baseNewAssetParamsEvent } as NewAssetParamsEvent;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromPartial(object.assetParams)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseUpdateAssetParamsEvent: object = { type: "" };

export const UpdateAssetParamsEvent = {
  encode(
    message: UpdateAssetParamsEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParams.encode(
        message.assetParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAssetParamsEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateAssetParamsEvent } as UpdateAssetParamsEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetParams = AssetParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAssetParamsEvent {
    const message = { ...baseUpdateAssetParamsEvent } as UpdateAssetParamsEvent;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromJSON(object.assetParams)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: UpdateAssetParamsEvent): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams
        ? AssetParams.toJSON(message.assetParams)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateAssetParamsEvent>
  ): UpdateAssetParamsEvent {
    const message = { ...baseUpdateAssetParamsEvent } as UpdateAssetParamsEvent;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromPartial(object.assetParams)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseNewEModeCategoryEvent: object = { type: "" };

export const NewEModeCategoryEvent = {
  encode(
    message: NewEModeCategoryEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eModeCategory !== undefined) {
      EModeCategory.encode(
        message.eModeCategory,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NewEModeCategoryEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewEModeCategoryEvent } as NewEModeCategoryEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eModeCategory = EModeCategory.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewEModeCategoryEvent {
    const message = { ...baseNewEModeCategoryEvent } as NewEModeCategoryEvent;
    message.eModeCategory =
      object.eModeCategory !== undefined && object.eModeCategory !== null
        ? EModeCategory.fromJSON(object.eModeCategory)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: NewEModeCategoryEvent): unknown {
    const obj: any = {};
    message.eModeCategory !== undefined &&
      (obj.eModeCategory = message.eModeCategory
        ? EModeCategory.toJSON(message.eModeCategory)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<NewEModeCategoryEvent>
  ): NewEModeCategoryEvent {
    const message = { ...baseNewEModeCategoryEvent } as NewEModeCategoryEvent;
    message.eModeCategory =
      object.eModeCategory !== undefined && object.eModeCategory !== null
        ? EModeCategory.fromPartial(object.eModeCategory)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseUpdateEModeCategoryEvent: object = { type: "" };

export const UpdateEModeCategoryEvent = {
  encode(
    message: UpdateEModeCategoryEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eModeCategory !== undefined) {
      EModeCategory.encode(
        message.eModeCategory,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateEModeCategoryEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateEModeCategoryEvent,
    } as UpdateEModeCategoryEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eModeCategory = EModeCategory.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEModeCategoryEvent {
    const message = {
      ...baseUpdateEModeCategoryEvent,
    } as UpdateEModeCategoryEvent;
    message.eModeCategory =
      object.eModeCategory !== undefined && object.eModeCategory !== null
        ? EModeCategory.fromJSON(object.eModeCategory)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: UpdateEModeCategoryEvent): unknown {
    const obj: any = {};
    message.eModeCategory !== undefined &&
      (obj.eModeCategory = message.eModeCategory
        ? EModeCategory.toJSON(message.eModeCategory)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateEModeCategoryEvent>
  ): UpdateEModeCategoryEvent {
    const message = {
      ...baseUpdateEModeCategoryEvent,
    } as UpdateEModeCategoryEvent;
    message.eModeCategory =
      object.eModeCategory !== undefined && object.eModeCategory !== null
        ? EModeCategory.fromPartial(object.eModeCategory)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseUpdateAccountEModeCategoryNameEvent: object = {
  account: "",
  eModeCategoryName: "",
};

export const UpdateAccountEModeCategoryNameEvent = {
  encode(
    message: UpdateAccountEModeCategoryNameEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.eModeCategoryName !== "") {
      writer.uint32(18).string(message.eModeCategoryName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAccountEModeCategoryNameEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAccountEModeCategoryNameEvent,
    } as UpdateAccountEModeCategoryNameEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
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

  fromJSON(object: any): UpdateAccountEModeCategoryNameEvent {
    const message = {
      ...baseUpdateAccountEModeCategoryNameEvent,
    } as UpdateAccountEModeCategoryNameEvent;
    message.account =
      object.account !== undefined && object.account !== null
        ? String(object.account)
        : "";
    message.eModeCategoryName =
      object.eModeCategoryName !== undefined &&
      object.eModeCategoryName !== null
        ? String(object.eModeCategoryName)
        : "";
    return message;
  },

  toJSON(message: UpdateAccountEModeCategoryNameEvent): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.eModeCategoryName !== undefined &&
      (obj.eModeCategoryName = message.eModeCategoryName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateAccountEModeCategoryNameEvent>
  ): UpdateAccountEModeCategoryNameEvent {
    const message = {
      ...baseUpdateAccountEModeCategoryNameEvent,
    } as UpdateAccountEModeCategoryNameEvent;
    message.account = object.account ?? "";
    message.eModeCategoryName = object.eModeCategoryName ?? "";
    return message;
  },
};

const baseSetInterestFeeEvent: object = { interestFee: "", type: "" };

export const SetInterestFeeEvent = {
  encode(
    message: SetInterestFeeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.interestFee !== "") {
      writer.uint32(10).string(message.interestFee);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetInterestFeeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetInterestFeeEvent } as SetInterestFeeEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interestFee = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetInterestFeeEvent {
    const message = { ...baseSetInterestFeeEvent } as SetInterestFeeEvent;
    message.interestFee =
      object.interestFee !== undefined && object.interestFee !== null
        ? String(object.interestFee)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetInterestFeeEvent): unknown {
    const obj: any = {};
    message.interestFee !== undefined &&
      (obj.interestFee = message.interestFee);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<SetInterestFeeEvent>): SetInterestFeeEvent {
    const message = { ...baseSetInterestFeeEvent } as SetInterestFeeEvent;
    message.interestFee = object.interestFee ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

const baseSetLiquidationFeeEvent: object = { liquidationFee: "", type: "" };

export const SetLiquidationFeeEvent = {
  encode(
    message: SetLiquidationFeeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.liquidationFee !== "") {
      writer.uint32(10).string(message.liquidationFee);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLiquidationFeeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetLiquidationFeeEvent } as SetLiquidationFeeEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidationFee = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetLiquidationFeeEvent {
    const message = { ...baseSetLiquidationFeeEvent } as SetLiquidationFeeEvent;
    message.liquidationFee =
      object.liquidationFee !== undefined && object.liquidationFee !== null
        ? String(object.liquidationFee)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetLiquidationFeeEvent): unknown {
    const obj: any = {};
    message.liquidationFee !== undefined &&
      (obj.liquidationFee = message.liquidationFee);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetLiquidationFeeEvent>
  ): SetLiquidationFeeEvent {
    const message = { ...baseSetLiquidationFeeEvent } as SetLiquidationFeeEvent;
    message.liquidationFee = object.liquidationFee ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

const baseSetStablecoinInterestRateEvent: object = {
  stablecoinInterestRate: "",
  type: "",
  stablecoinInterestRateDec: "",
};

export const SetStablecoinInterestRateEvent = {
  encode(
    message: SetStablecoinInterestRateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetStablecoinInterestRateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetStablecoinInterestRateEvent,
    } as SetStablecoinInterestRateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stablecoinInterestRate = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.stablecoinInterestRateDec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetStablecoinInterestRateEvent {
    const message = {
      ...baseSetStablecoinInterestRateEvent,
    } as SetStablecoinInterestRateEvent;
    message.stablecoinInterestRate =
      object.stablecoinInterestRate !== undefined &&
      object.stablecoinInterestRate !== null
        ? String(object.stablecoinInterestRate)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    message.stablecoinInterestRateDec =
      object.stablecoinInterestRateDec !== undefined &&
      object.stablecoinInterestRateDec !== null
        ? String(object.stablecoinInterestRateDec)
        : "";
    return message;
  },

  toJSON(message: SetStablecoinInterestRateEvent): unknown {
    const obj: any = {};
    message.stablecoinInterestRate !== undefined &&
      (obj.stablecoinInterestRate = message.stablecoinInterestRate);
    message.type !== undefined && (obj.type = message.type);
    message.stablecoinInterestRateDec !== undefined &&
      (obj.stablecoinInterestRateDec = message.stablecoinInterestRateDec);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetStablecoinInterestRateEvent>
  ): SetStablecoinInterestRateEvent {
    const message = {
      ...baseSetStablecoinInterestRateEvent,
    } as SetStablecoinInterestRateEvent;
    message.stablecoinInterestRate = object.stablecoinInterestRate ?? "";
    message.type = object.type ?? "";
    message.stablecoinInterestRateDec = object.stablecoinInterestRateDec ?? "";
    return message;
  },
};

const baseSetStablecoinMintCapEvent: object = {
  stablecoinMintCap: "",
  type: "",
};

export const SetStablecoinMintCapEvent = {
  encode(
    message: SetStablecoinMintCapEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stablecoinMintCap !== "") {
      writer.uint32(10).string(message.stablecoinMintCap);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetStablecoinMintCapEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetStablecoinMintCapEvent,
    } as SetStablecoinMintCapEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stablecoinMintCap = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetStablecoinMintCapEvent {
    const message = {
      ...baseSetStablecoinMintCapEvent,
    } as SetStablecoinMintCapEvent;
    message.stablecoinMintCap =
      object.stablecoinMintCap !== undefined &&
      object.stablecoinMintCap !== null
        ? String(object.stablecoinMintCap)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetStablecoinMintCapEvent): unknown {
    const obj: any = {};
    message.stablecoinMintCap !== undefined &&
      (obj.stablecoinMintCap = message.stablecoinMintCap);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetStablecoinMintCapEvent>
  ): SetStablecoinMintCapEvent {
    const message = {
      ...baseSetStablecoinMintCapEvent,
    } as SetStablecoinMintCapEvent;
    message.stablecoinMintCap = object.stablecoinMintCap ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

const baseSetCompleteLiquidationThresholdEvent: object = {
  completeLiquidationThreshold: "",
  type: "",
};

export const SetCompleteLiquidationThresholdEvent = {
  encode(
    message: SetCompleteLiquidationThresholdEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.completeLiquidationThreshold !== "") {
      writer.uint32(10).string(message.completeLiquidationThreshold);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetCompleteLiquidationThresholdEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetCompleteLiquidationThresholdEvent,
    } as SetCompleteLiquidationThresholdEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completeLiquidationThreshold = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetCompleteLiquidationThresholdEvent {
    const message = {
      ...baseSetCompleteLiquidationThresholdEvent,
    } as SetCompleteLiquidationThresholdEvent;
    message.completeLiquidationThreshold =
      object.completeLiquidationThreshold !== undefined &&
      object.completeLiquidationThreshold !== null
        ? String(object.completeLiquidationThreshold)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetCompleteLiquidationThresholdEvent): unknown {
    const obj: any = {};
    message.completeLiquidationThreshold !== undefined &&
      (obj.completeLiquidationThreshold = message.completeLiquidationThreshold);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetCompleteLiquidationThresholdEvent>
  ): SetCompleteLiquidationThresholdEvent {
    const message = {
      ...baseSetCompleteLiquidationThresholdEvent,
    } as SetCompleteLiquidationThresholdEvent;
    message.completeLiquidationThreshold =
      object.completeLiquidationThreshold ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

const baseSetMinimumCloseFactorEvent: object = {
  minimumCloseFactor: "",
  type: "",
};

export const SetMinimumCloseFactorEvent = {
  encode(
    message: SetMinimumCloseFactorEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minimumCloseFactor !== "") {
      writer.uint32(10).string(message.minimumCloseFactor);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetMinimumCloseFactorEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetMinimumCloseFactorEvent,
    } as SetMinimumCloseFactorEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumCloseFactor = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetMinimumCloseFactorEvent {
    const message = {
      ...baseSetMinimumCloseFactorEvent,
    } as SetMinimumCloseFactorEvent;
    message.minimumCloseFactor =
      object.minimumCloseFactor !== undefined &&
      object.minimumCloseFactor !== null
        ? String(object.minimumCloseFactor)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetMinimumCloseFactorEvent): unknown {
    const obj: any = {};
    message.minimumCloseFactor !== undefined &&
      (obj.minimumCloseFactor = message.minimumCloseFactor);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetMinimumCloseFactorEvent>
  ): SetMinimumCloseFactorEvent {
    const message = {
      ...baseSetMinimumCloseFactorEvent,
    } as SetMinimumCloseFactorEvent;
    message.minimumCloseFactor = object.minimumCloseFactor ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

const baseSetSmallLiquidationSizeEvent: object = {
  smallLiquidationSize: "",
  type: "",
};

export const SetSmallLiquidationSizeEvent = {
  encode(
    message: SetSmallLiquidationSizeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.smallLiquidationSize !== "") {
      writer.uint32(10).string(message.smallLiquidationSize);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetSmallLiquidationSizeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetSmallLiquidationSizeEvent,
    } as SetSmallLiquidationSizeEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.smallLiquidationSize = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetSmallLiquidationSizeEvent {
    const message = {
      ...baseSetSmallLiquidationSizeEvent,
    } as SetSmallLiquidationSizeEvent;
    message.smallLiquidationSize =
      object.smallLiquidationSize !== undefined &&
      object.smallLiquidationSize !== null
        ? String(object.smallLiquidationSize)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetSmallLiquidationSizeEvent): unknown {
    const obj: any = {};
    message.smallLiquidationSize !== undefined &&
      (obj.smallLiquidationSize = message.smallLiquidationSize);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetSmallLiquidationSizeEvent>
  ): SetSmallLiquidationSizeEvent {
    const message = {
      ...baseSetSmallLiquidationSizeEvent,
    } as SetSmallLiquidationSizeEvent;
    message.smallLiquidationSize = object.smallLiquidationSize ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

const baseSetStalePriceGracePeriodEvent: object = { type: "" };

export const SetStalePriceGracePeriodEvent = {
  encode(
    message: SetStalePriceGracePeriodEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stalePriceGracePeriod !== undefined) {
      Duration.encode(
        message.stalePriceGracePeriod,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetStalePriceGracePeriodEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetStalePriceGracePeriodEvent,
    } as SetStalePriceGracePeriodEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stalePriceGracePeriod = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetStalePriceGracePeriodEvent {
    const message = {
      ...baseSetStalePriceGracePeriodEvent,
    } as SetStalePriceGracePeriodEvent;
    message.stalePriceGracePeriod =
      object.stalePriceGracePeriod !== undefined &&
      object.stalePriceGracePeriod !== null
        ? Duration.fromJSON(object.stalePriceGracePeriod)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetStalePriceGracePeriodEvent): unknown {
    const obj: any = {};
    message.stalePriceGracePeriod !== undefined &&
      (obj.stalePriceGracePeriod = message.stalePriceGracePeriod
        ? Duration.toJSON(message.stalePriceGracePeriod)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetStalePriceGracePeriodEvent>
  ): SetStalePriceGracePeriodEvent {
    const message = {
      ...baseSetStalePriceGracePeriodEvent,
    } as SetStalePriceGracePeriodEvent;
    message.stalePriceGracePeriod =
      object.stalePriceGracePeriod !== undefined &&
      object.stalePriceGracePeriod !== null
        ? Duration.fromPartial(object.stalePriceGracePeriod)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseSetCdpPausedEvent: object = { cdpPaused: false, type: "" };

export const SetCdpPausedEvent = {
  encode(
    message: SetCdpPausedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cdpPaused === true) {
      writer.uint32(8).bool(message.cdpPaused);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCdpPausedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetCdpPausedEvent } as SetCdpPausedEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cdpPaused = reader.bool();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetCdpPausedEvent {
    const message = { ...baseSetCdpPausedEvent } as SetCdpPausedEvent;
    message.cdpPaused =
      object.cdpPaused !== undefined && object.cdpPaused !== null
        ? Boolean(object.cdpPaused)
        : false;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetCdpPausedEvent): unknown {
    const obj: any = {};
    message.cdpPaused !== undefined && (obj.cdpPaused = message.cdpPaused);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<SetCdpPausedEvent>): SetCdpPausedEvent {
    const message = { ...baseSetCdpPausedEvent } as SetCdpPausedEvent;
    message.cdpPaused = object.cdpPaused ?? false;
    message.type = object.type ?? "";
    return message;
  },
};

const baseSupplyAssetEvent: object = {
  supplier: "",
  denom: "",
  amountSupplied: "",
  cibtDenom: "",
  amountMinted: "",
};

export const SupplyAssetEvent = {
  encode(
    message: SupplyAssetEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSupplyAssetEvent } as SupplyAssetEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amountSupplied = reader.string();
          break;
        case 4:
          message.cibtDenom = reader.string();
          break;
        case 5:
          message.amountMinted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SupplyAssetEvent {
    const message = { ...baseSupplyAssetEvent } as SupplyAssetEvent;
    message.supplier =
      object.supplier !== undefined && object.supplier !== null
        ? String(object.supplier)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amountSupplied =
      object.amountSupplied !== undefined && object.amountSupplied !== null
        ? String(object.amountSupplied)
        : "";
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
        : "";
    message.amountMinted =
      object.amountMinted !== undefined && object.amountMinted !== null
        ? String(object.amountMinted)
        : "";
    return message;
  },

  toJSON(message: SupplyAssetEvent): unknown {
    const obj: any = {};
    message.supplier !== undefined && (obj.supplier = message.supplier);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountSupplied !== undefined &&
      (obj.amountSupplied = message.amountSupplied);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amountMinted !== undefined &&
      (obj.amountMinted = message.amountMinted);
    return obj;
  },

  fromPartial(object: DeepPartial<SupplyAssetEvent>): SupplyAssetEvent {
    const message = { ...baseSupplyAssetEvent } as SupplyAssetEvent;
    message.supplier = object.supplier ?? "";
    message.denom = object.denom ?? "";
    message.amountSupplied = object.amountSupplied ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amountMinted = object.amountMinted ?? "";
    return message;
  },
};

const baseWithdrawAssetEvent: object = {
  withdrawer: "",
  denom: "",
  amountWithdrawed: "",
  cibtDenom: "",
  amountBurned: "",
};

export const WithdrawAssetEvent = {
  encode(
    message: WithdrawAssetEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawAssetEvent } as WithdrawAssetEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amountWithdrawed = reader.string();
          break;
        case 4:
          message.cibtDenom = reader.string();
          break;
        case 5:
          message.amountBurned = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawAssetEvent {
    const message = { ...baseWithdrawAssetEvent } as WithdrawAssetEvent;
    message.withdrawer =
      object.withdrawer !== undefined && object.withdrawer !== null
        ? String(object.withdrawer)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amountWithdrawed =
      object.amountWithdrawed !== undefined && object.amountWithdrawed !== null
        ? String(object.amountWithdrawed)
        : "";
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
        : "";
    message.amountBurned =
      object.amountBurned !== undefined && object.amountBurned !== null
        ? String(object.amountBurned)
        : "";
    return message;
  },

  toJSON(message: WithdrawAssetEvent): unknown {
    const obj: any = {};
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountWithdrawed !== undefined &&
      (obj.amountWithdrawed = message.amountWithdrawed);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amountBurned !== undefined &&
      (obj.amountBurned = message.amountBurned);
    return obj;
  },

  fromPartial(object: DeepPartial<WithdrawAssetEvent>): WithdrawAssetEvent {
    const message = { ...baseWithdrawAssetEvent } as WithdrawAssetEvent;
    message.withdrawer = object.withdrawer ?? "";
    message.denom = object.denom ?? "";
    message.amountWithdrawed = object.amountWithdrawed ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amountBurned = object.amountBurned ?? "";
    return message;
  },
};

const baseBorrowAssetEvent: object = {
  borrower: "",
  denom: "",
  amountBorrowed: "",
  debtValue: "",
  collateralValue: "",
  initialCumulativeInterestMultiplier: "",
};

export const BorrowAssetEvent = {
  encode(
    message: BorrowAssetEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBorrowAssetEvent } as BorrowAssetEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amountBorrowed = reader.string();
          break;
        case 4:
          message.debtValue = reader.string();
          break;
        case 6:
          message.collateralValue = reader.string();
          break;
        case 5:
          message.initialCumulativeInterestMultiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BorrowAssetEvent {
    const message = { ...baseBorrowAssetEvent } as BorrowAssetEvent;
    message.borrower =
      object.borrower !== undefined && object.borrower !== null
        ? String(object.borrower)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amountBorrowed =
      object.amountBorrowed !== undefined && object.amountBorrowed !== null
        ? String(object.amountBorrowed)
        : "";
    message.debtValue =
      object.debtValue !== undefined && object.debtValue !== null
        ? String(object.debtValue)
        : "";
    message.collateralValue =
      object.collateralValue !== undefined && object.collateralValue !== null
        ? String(object.collateralValue)
        : "";
    message.initialCumulativeInterestMultiplier =
      object.initialCumulativeInterestMultiplier !== undefined &&
      object.initialCumulativeInterestMultiplier !== null
        ? String(object.initialCumulativeInterestMultiplier)
        : "";
    return message;
  },

  toJSON(message: BorrowAssetEvent): unknown {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountBorrowed !== undefined &&
      (obj.amountBorrowed = message.amountBorrowed);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined &&
      (obj.collateralValue = message.collateralValue);
    message.initialCumulativeInterestMultiplier !== undefined &&
      (obj.initialCumulativeInterestMultiplier =
        message.initialCumulativeInterestMultiplier);
    return obj;
  },

  fromPartial(object: DeepPartial<BorrowAssetEvent>): BorrowAssetEvent {
    const message = { ...baseBorrowAssetEvent } as BorrowAssetEvent;
    message.borrower = object.borrower ?? "";
    message.denom = object.denom ?? "";
    message.amountBorrowed = object.amountBorrowed ?? "";
    message.debtValue = object.debtValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    message.initialCumulativeInterestMultiplier =
      object.initialCumulativeInterestMultiplier ?? "";
    return message;
  },
};

const baseRepayAssetEvent: object = {
  repayer: "",
  debtor: "",
  denom: "",
  principalRepaid: "",
  interestRepaid: "",
  debtValue: "",
  collateralValue: "",
};

export const RepayAssetEvent = {
  encode(
    message: RepayAssetEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRepayAssetEvent } as RepayAssetEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repayer = reader.string();
          break;
        case 2:
          message.debtor = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.principalRepaid = reader.string();
          break;
        case 5:
          message.interestRepaid = reader.string();
          break;
        case 6:
          message.debtValue = reader.string();
          break;
        case 7:
          message.collateralValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RepayAssetEvent {
    const message = { ...baseRepayAssetEvent } as RepayAssetEvent;
    message.repayer =
      object.repayer !== undefined && object.repayer !== null
        ? String(object.repayer)
        : "";
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.principalRepaid =
      object.principalRepaid !== undefined && object.principalRepaid !== null
        ? String(object.principalRepaid)
        : "";
    message.interestRepaid =
      object.interestRepaid !== undefined && object.interestRepaid !== null
        ? String(object.interestRepaid)
        : "";
    message.debtValue =
      object.debtValue !== undefined && object.debtValue !== null
        ? String(object.debtValue)
        : "";
    message.collateralValue =
      object.collateralValue !== undefined && object.collateralValue !== null
        ? String(object.collateralValue)
        : "";
    return message;
  },

  toJSON(message: RepayAssetEvent): unknown {
    const obj: any = {};
    message.repayer !== undefined && (obj.repayer = message.repayer);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.denom !== undefined && (obj.denom = message.denom);
    message.principalRepaid !== undefined &&
      (obj.principalRepaid = message.principalRepaid);
    message.interestRepaid !== undefined &&
      (obj.interestRepaid = message.interestRepaid);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined &&
      (obj.collateralValue = message.collateralValue);
    return obj;
  },

  fromPartial(object: DeepPartial<RepayAssetEvent>): RepayAssetEvent {
    const message = { ...baseRepayAssetEvent } as RepayAssetEvent;
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

const baseLockCollateralEvent: object = {
  locker: "",
  cibtDenom: "",
  amountLocked: "",
  debtValue: "",
  collateralValue: "",
};

export const LockCollateralEvent = {
  encode(
    message: LockCollateralEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLockCollateralEvent } as LockCollateralEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locker = reader.string();
          break;
        case 2:
          message.cibtDenom = reader.string();
          break;
        case 3:
          message.amountLocked = reader.string();
          break;
        case 4:
          message.debtValue = reader.string();
          break;
        case 5:
          message.collateralValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockCollateralEvent {
    const message = { ...baseLockCollateralEvent } as LockCollateralEvent;
    message.locker =
      object.locker !== undefined && object.locker !== null
        ? String(object.locker)
        : "";
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
        : "";
    message.amountLocked =
      object.amountLocked !== undefined && object.amountLocked !== null
        ? String(object.amountLocked)
        : "";
    message.debtValue =
      object.debtValue !== undefined && object.debtValue !== null
        ? String(object.debtValue)
        : "";
    message.collateralValue =
      object.collateralValue !== undefined && object.collateralValue !== null
        ? String(object.collateralValue)
        : "";
    return message;
  },

  toJSON(message: LockCollateralEvent): unknown {
    const obj: any = {};
    message.locker !== undefined && (obj.locker = message.locker);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amountLocked !== undefined &&
      (obj.amountLocked = message.amountLocked);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined &&
      (obj.collateralValue = message.collateralValue);
    return obj;
  },

  fromPartial(object: DeepPartial<LockCollateralEvent>): LockCollateralEvent {
    const message = { ...baseLockCollateralEvent } as LockCollateralEvent;
    message.locker = object.locker ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amountLocked = object.amountLocked ?? "";
    message.debtValue = object.debtValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    return message;
  },
};

const baseUnlockCollateralEvent: object = {
  unlocker: "",
  cibtDenom: "",
  amountUnlocked: "",
  debtValue: "",
  collateralValue: "",
};

export const UnlockCollateralEvent = {
  encode(
    message: UnlockCollateralEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnlockCollateralEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnlockCollateralEvent } as UnlockCollateralEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlocker = reader.string();
          break;
        case 2:
          message.cibtDenom = reader.string();
          break;
        case 3:
          message.amountUnlocked = reader.string();
          break;
        case 4:
          message.debtValue = reader.string();
          break;
        case 5:
          message.collateralValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnlockCollateralEvent {
    const message = { ...baseUnlockCollateralEvent } as UnlockCollateralEvent;
    message.unlocker =
      object.unlocker !== undefined && object.unlocker !== null
        ? String(object.unlocker)
        : "";
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
        : "";
    message.amountUnlocked =
      object.amountUnlocked !== undefined && object.amountUnlocked !== null
        ? String(object.amountUnlocked)
        : "";
    message.debtValue =
      object.debtValue !== undefined && object.debtValue !== null
        ? String(object.debtValue)
        : "";
    message.collateralValue =
      object.collateralValue !== undefined && object.collateralValue !== null
        ? String(object.collateralValue)
        : "";
    return message;
  },

  toJSON(message: UnlockCollateralEvent): unknown {
    const obj: any = {};
    message.unlocker !== undefined && (obj.unlocker = message.unlocker);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.amountUnlocked !== undefined &&
      (obj.amountUnlocked = message.amountUnlocked);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined &&
      (obj.collateralValue = message.collateralValue);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UnlockCollateralEvent>
  ): UnlockCollateralEvent {
    const message = { ...baseUnlockCollateralEvent } as UnlockCollateralEvent;
    message.unlocker = object.unlocker ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.amountUnlocked = object.amountUnlocked ?? "";
    message.debtValue = object.debtValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    return message;
  },
};

const baseUpdateDebtInfoEvent: object = { type: "" };

export const UpdateDebtInfoEvent = {
  encode(
    message: UpdateDebtInfoEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.debtInfo !== undefined) {
      DebtInfo.encode(message.debtInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDebtInfoEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateDebtInfoEvent } as UpdateDebtInfoEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.debtInfo = DebtInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDebtInfoEvent {
    const message = { ...baseUpdateDebtInfoEvent } as UpdateDebtInfoEvent;
    message.debtInfo =
      object.debtInfo !== undefined && object.debtInfo !== null
        ? DebtInfo.fromJSON(object.debtInfo)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: UpdateDebtInfoEvent): unknown {
    const obj: any = {};
    message.debtInfo !== undefined &&
      (obj.debtInfo = message.debtInfo
        ? DebtInfo.toJSON(message.debtInfo)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateDebtInfoEvent>): UpdateDebtInfoEvent {
    const message = { ...baseUpdateDebtInfoEvent } as UpdateDebtInfoEvent;
    message.debtInfo =
      object.debtInfo !== undefined && object.debtInfo !== null
        ? DebtInfo.fromPartial(object.debtInfo)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseUpdateStablecoinDebtInfoEvent: object = { type: "" };

export const UpdateStablecoinDebtInfoEvent = {
  encode(
    message: UpdateStablecoinDebtInfoEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stablecoinDebtInfo !== undefined) {
      StablecoinDebtInfo.encode(
        message.stablecoinDebtInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateStablecoinDebtInfoEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateStablecoinDebtInfoEvent,
    } as UpdateStablecoinDebtInfoEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stablecoinDebtInfo = StablecoinDebtInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateStablecoinDebtInfoEvent {
    const message = {
      ...baseUpdateStablecoinDebtInfoEvent,
    } as UpdateStablecoinDebtInfoEvent;
    message.stablecoinDebtInfo =
      object.stablecoinDebtInfo !== undefined &&
      object.stablecoinDebtInfo !== null
        ? StablecoinDebtInfo.fromJSON(object.stablecoinDebtInfo)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: UpdateStablecoinDebtInfoEvent): unknown {
    const obj: any = {};
    message.stablecoinDebtInfo !== undefined &&
      (obj.stablecoinDebtInfo = message.stablecoinDebtInfo
        ? StablecoinDebtInfo.toJSON(message.stablecoinDebtInfo)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateStablecoinDebtInfoEvent>
  ): UpdateStablecoinDebtInfoEvent {
    const message = {
      ...baseUpdateStablecoinDebtInfoEvent,
    } as UpdateStablecoinDebtInfoEvent;
    message.stablecoinDebtInfo =
      object.stablecoinDebtInfo !== undefined &&
      object.stablecoinDebtInfo !== null
        ? StablecoinDebtInfo.fromPartial(object.stablecoinDebtInfo)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseMintStablecoinEvent: object = {
  minter: "",
  denom: "",
  amountMinted: "",
  debtValue: "",
  collateralValue: "",
  initialCumulativeInterestMultiplier: "",
};

export const MintStablecoinEvent = {
  encode(
    message: MintStablecoinEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMintStablecoinEvent } as MintStablecoinEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amountMinted = reader.string();
          break;
        case 4:
          message.debtValue = reader.string();
          break;
        case 6:
          message.collateralValue = reader.string();
          break;
        case 5:
          message.initialCumulativeInterestMultiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintStablecoinEvent {
    const message = { ...baseMintStablecoinEvent } as MintStablecoinEvent;
    message.minter =
      object.minter !== undefined && object.minter !== null
        ? String(object.minter)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amountMinted =
      object.amountMinted !== undefined && object.amountMinted !== null
        ? String(object.amountMinted)
        : "";
    message.debtValue =
      object.debtValue !== undefined && object.debtValue !== null
        ? String(object.debtValue)
        : "";
    message.collateralValue =
      object.collateralValue !== undefined && object.collateralValue !== null
        ? String(object.collateralValue)
        : "";
    message.initialCumulativeInterestMultiplier =
      object.initialCumulativeInterestMultiplier !== undefined &&
      object.initialCumulativeInterestMultiplier !== null
        ? String(object.initialCumulativeInterestMultiplier)
        : "";
    return message;
  },

  toJSON(message: MintStablecoinEvent): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountMinted !== undefined &&
      (obj.amountMinted = message.amountMinted);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined &&
      (obj.collateralValue = message.collateralValue);
    message.initialCumulativeInterestMultiplier !== undefined &&
      (obj.initialCumulativeInterestMultiplier =
        message.initialCumulativeInterestMultiplier);
    return obj;
  },

  fromPartial(object: DeepPartial<MintStablecoinEvent>): MintStablecoinEvent {
    const message = { ...baseMintStablecoinEvent } as MintStablecoinEvent;
    message.minter = object.minter ?? "";
    message.denom = object.denom ?? "";
    message.amountMinted = object.amountMinted ?? "";
    message.debtValue = object.debtValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    message.initialCumulativeInterestMultiplier =
      object.initialCumulativeInterestMultiplier ?? "";
    return message;
  },
};

const baseReturnStablecoinEvent: object = {
  returner: "",
  debtor: "",
  interestDenom: "",
  interestRepaid: "",
  principalRepaid: "",
  debtValue: "",
  collateralValue: "",
};

export const ReturnStablecoinEvent = {
  encode(
    message: ReturnStablecoinEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReturnStablecoinEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReturnStablecoinEvent } as ReturnStablecoinEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.returner = reader.string();
          break;
        case 2:
          message.debtor = reader.string();
          break;
        case 3:
          message.interestDenom = reader.string();
          break;
        case 4:
          message.interestRepaid = reader.string();
          break;
        case 5:
          message.principalRepaid = reader.string();
          break;
        case 6:
          message.debtValue = reader.string();
          break;
        case 7:
          message.collateralValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReturnStablecoinEvent {
    const message = { ...baseReturnStablecoinEvent } as ReturnStablecoinEvent;
    message.returner =
      object.returner !== undefined && object.returner !== null
        ? String(object.returner)
        : "";
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.interestDenom =
      object.interestDenom !== undefined && object.interestDenom !== null
        ? String(object.interestDenom)
        : "";
    message.interestRepaid =
      object.interestRepaid !== undefined && object.interestRepaid !== null
        ? String(object.interestRepaid)
        : "";
    message.principalRepaid =
      object.principalRepaid !== undefined && object.principalRepaid !== null
        ? String(object.principalRepaid)
        : "";
    message.debtValue =
      object.debtValue !== undefined && object.debtValue !== null
        ? String(object.debtValue)
        : "";
    message.collateralValue =
      object.collateralValue !== undefined && object.collateralValue !== null
        ? String(object.collateralValue)
        : "";
    return message;
  },

  toJSON(message: ReturnStablecoinEvent): unknown {
    const obj: any = {};
    message.returner !== undefined && (obj.returner = message.returner);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.interestDenom !== undefined &&
      (obj.interestDenom = message.interestDenom);
    message.interestRepaid !== undefined &&
      (obj.interestRepaid = message.interestRepaid);
    message.principalRepaid !== undefined &&
      (obj.principalRepaid = message.principalRepaid);
    message.debtValue !== undefined && (obj.debtValue = message.debtValue);
    message.collateralValue !== undefined &&
      (obj.collateralValue = message.collateralValue);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReturnStablecoinEvent>
  ): ReturnStablecoinEvent {
    const message = { ...baseReturnStablecoinEvent } as ReturnStablecoinEvent;
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

const baseLiquidateCollateralEvent: object = {
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

export const LiquidateCollateralEvent = {
  encode(
    message: LiquidateCollateralEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidateCollateralEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLiquidateCollateralEvent,
    } as LiquidateCollateralEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidator = reader.string();
          break;
        case 2:
          message.debtor = reader.string();
          break;
        case 3:
          message.collateralDenom = reader.string();
          break;
        case 4:
          message.collateralAmountLiquidated = reader.string();
          break;
        case 5:
          message.collateralAmountLiquidator = reader.string();
          break;
        case 6:
          message.collateralAmountFee = reader.string();
          break;
        case 7:
          message.liquidationPrice = reader.string();
          break;
        case 8:
          message.marketPrice = reader.string();
          break;
        case 9:
          message.discount = reader.string();
          break;
        case 10:
          message.debtDenom = reader.string();
          break;
        case 11:
          message.debtAmount = reader.string();
          break;
        case 12:
          message.id = reader.uint64() as Long;
          break;
        case 13:
          message.principalAmount = reader.string();
          break;
        case 14:
          message.interestDenom = reader.string();
          break;
        case 15:
          message.interestAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidateCollateralEvent {
    const message = {
      ...baseLiquidateCollateralEvent,
    } as LiquidateCollateralEvent;
    message.liquidator =
      object.liquidator !== undefined && object.liquidator !== null
        ? String(object.liquidator)
        : "";
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.collateralDenom =
      object.collateralDenom !== undefined && object.collateralDenom !== null
        ? String(object.collateralDenom)
        : "";
    message.collateralAmountLiquidated =
      object.collateralAmountLiquidated !== undefined &&
      object.collateralAmountLiquidated !== null
        ? String(object.collateralAmountLiquidated)
        : "";
    message.collateralAmountLiquidator =
      object.collateralAmountLiquidator !== undefined &&
      object.collateralAmountLiquidator !== null
        ? String(object.collateralAmountLiquidator)
        : "";
    message.collateralAmountFee =
      object.collateralAmountFee !== undefined &&
      object.collateralAmountFee !== null
        ? String(object.collateralAmountFee)
        : "";
    message.liquidationPrice =
      object.liquidationPrice !== undefined && object.liquidationPrice !== null
        ? String(object.liquidationPrice)
        : "";
    message.marketPrice =
      object.marketPrice !== undefined && object.marketPrice !== null
        ? String(object.marketPrice)
        : "";
    message.discount =
      object.discount !== undefined && object.discount !== null
        ? String(object.discount)
        : "";
    message.debtDenom =
      object.debtDenom !== undefined && object.debtDenom !== null
        ? String(object.debtDenom)
        : "";
    message.debtAmount =
      object.debtAmount !== undefined && object.debtAmount !== null
        ? String(object.debtAmount)
        : "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
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

  toJSON(message: LiquidateCollateralEvent): unknown {
    const obj: any = {};
    message.liquidator !== undefined && (obj.liquidator = message.liquidator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.collateralAmountLiquidated !== undefined &&
      (obj.collateralAmountLiquidated = message.collateralAmountLiquidated);
    message.collateralAmountLiquidator !== undefined &&
      (obj.collateralAmountLiquidator = message.collateralAmountLiquidator);
    message.collateralAmountFee !== undefined &&
      (obj.collateralAmountFee = message.collateralAmountFee);
    message.liquidationPrice !== undefined &&
      (obj.liquidationPrice = message.liquidationPrice);
    message.marketPrice !== undefined &&
      (obj.marketPrice = message.marketPrice);
    message.discount !== undefined && (obj.discount = message.discount);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.debtAmount !== undefined && (obj.debtAmount = message.debtAmount);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.principalAmount !== undefined &&
      (obj.principalAmount = message.principalAmount);
    message.interestDenom !== undefined &&
      (obj.interestDenom = message.interestDenom);
    message.interestAmount !== undefined &&
      (obj.interestAmount = message.interestAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<LiquidateCollateralEvent>
  ): LiquidateCollateralEvent {
    const message = {
      ...baseLiquidateCollateralEvent,
    } as LiquidateCollateralEvent;
    message.liquidator = object.liquidator ?? "";
    message.debtor = object.debtor ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.collateralAmountLiquidated =
      object.collateralAmountLiquidated ?? "";
    message.collateralAmountLiquidator =
      object.collateralAmountLiquidator ?? "";
    message.collateralAmountFee = object.collateralAmountFee ?? "";
    message.liquidationPrice = object.liquidationPrice ?? "";
    message.marketPrice = object.marketPrice ?? "";
    message.discount = object.discount ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.debtAmount = object.debtAmount ?? "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.principalAmount = object.principalAmount ?? "";
    message.interestDenom = object.interestDenom ?? "";
    message.interestAmount = object.interestAmount ?? "";
    return message;
  },
};

const baseClaimRewardEvent: object = {
  receiver: "",
  rewardSchemeId: "",
  rewardClaimed: "",
};

export const ClaimRewardEvent = {
  encode(
    message: ClaimRewardEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClaimRewardEvent } as ClaimRewardEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.rewardSchemeId = reader.string();
          break;
        case 3:
          message.rewardClaimed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimRewardEvent {
    const message = { ...baseClaimRewardEvent } as ClaimRewardEvent;
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.rewardSchemeId =
      object.rewardSchemeId !== undefined && object.rewardSchemeId !== null
        ? String(object.rewardSchemeId)
        : "";
    message.rewardClaimed =
      object.rewardClaimed !== undefined && object.rewardClaimed !== null
        ? String(object.rewardClaimed)
        : "";
    return message;
  },

  toJSON(message: ClaimRewardEvent): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.rewardSchemeId !== undefined &&
      (obj.rewardSchemeId = message.rewardSchemeId);
    message.rewardClaimed !== undefined &&
      (obj.rewardClaimed = message.rewardClaimed);
    return obj;
  },

  fromPartial(object: DeepPartial<ClaimRewardEvent>): ClaimRewardEvent {
    const message = { ...baseClaimRewardEvent } as ClaimRewardEvent;
    message.receiver = object.receiver ?? "";
    message.rewardSchemeId = object.rewardSchemeId ?? "";
    message.rewardClaimed = object.rewardClaimed ?? "";
    return message;
  },
};

const baseRewardDebtEvent: object = { type: "" };

export const RewardDebtEvent = {
  encode(
    message: RewardDebtEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rewardDebt !== undefined) {
      RewardDebt.encode(message.rewardDebt, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardDebtEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardDebtEvent } as RewardDebtEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardDebt = RewardDebt.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardDebtEvent {
    const message = { ...baseRewardDebtEvent } as RewardDebtEvent;
    message.rewardDebt =
      object.rewardDebt !== undefined && object.rewardDebt !== null
        ? RewardDebt.fromJSON(object.rewardDebt)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: RewardDebtEvent): unknown {
    const obj: any = {};
    message.rewardDebt !== undefined &&
      (obj.rewardDebt = message.rewardDebt
        ? RewardDebt.toJSON(message.rewardDebt)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<RewardDebtEvent>): RewardDebtEvent {
    const message = { ...baseRewardDebtEvent } as RewardDebtEvent;
    message.rewardDebt =
      object.rewardDebt !== undefined && object.rewardDebt !== null
        ? RewardDebt.fromPartial(object.rewardDebt)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseRewardSchemeEvent: object = { type: "" };

export const RewardSchemeEvent = {
  encode(
    message: RewardSchemeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rewardScheme !== undefined) {
      RewardScheme.encode(
        message.rewardScheme,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardSchemeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardSchemeEvent } as RewardSchemeEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardScheme = RewardScheme.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardSchemeEvent {
    const message = { ...baseRewardSchemeEvent } as RewardSchemeEvent;
    message.rewardScheme =
      object.rewardScheme !== undefined && object.rewardScheme !== null
        ? RewardScheme.fromJSON(object.rewardScheme)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: RewardSchemeEvent): unknown {
    const obj: any = {};
    message.rewardScheme !== undefined &&
      (obj.rewardScheme = message.rewardScheme
        ? RewardScheme.toJSON(message.rewardScheme)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<RewardSchemeEvent>): RewardSchemeEvent {
    const message = { ...baseRewardSchemeEvent } as RewardSchemeEvent;
    message.rewardScheme =
      object.rewardScheme !== undefined && object.rewardScheme !== null
        ? RewardScheme.fromPartial(object.rewardScheme)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseAddReserveEvent: object = { amountAdded: "" };

export const AddReserveEvent = {
  encode(
    message: AddReserveEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rewardScheme !== undefined) {
      RewardScheme.encode(
        message.rewardScheme,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.amountAdded !== "") {
      writer.uint32(18).string(message.amountAdded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddReserveEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddReserveEvent } as AddReserveEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardScheme = RewardScheme.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountAdded = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddReserveEvent {
    const message = { ...baseAddReserveEvent } as AddReserveEvent;
    message.rewardScheme =
      object.rewardScheme !== undefined && object.rewardScheme !== null
        ? RewardScheme.fromJSON(object.rewardScheme)
        : undefined;
    message.amountAdded =
      object.amountAdded !== undefined && object.amountAdded !== null
        ? String(object.amountAdded)
        : "";
    return message;
  },

  toJSON(message: AddReserveEvent): unknown {
    const obj: any = {};
    message.rewardScheme !== undefined &&
      (obj.rewardScheme = message.rewardScheme
        ? RewardScheme.toJSON(message.rewardScheme)
        : undefined);
    message.amountAdded !== undefined &&
      (obj.amountAdded = message.amountAdded);
    return obj;
  },

  fromPartial(object: DeepPartial<AddReserveEvent>): AddReserveEvent {
    const message = { ...baseAddReserveEvent } as AddReserveEvent;
    message.rewardScheme =
      object.rewardScheme !== undefined && object.rewardScheme !== null
        ? RewardScheme.fromPartial(object.rewardScheme)
        : undefined;
    message.amountAdded = object.amountAdded ?? "";
    return message;
  },
};

const baseRefundReserveEvent: object = { amountRefunded: "" };

export const RefundReserveEvent = {
  encode(
    message: RefundReserveEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rewardScheme !== undefined) {
      RewardScheme.encode(
        message.rewardScheme,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.amountRefunded !== "") {
      writer.uint32(18).string(message.amountRefunded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefundReserveEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRefundReserveEvent } as RefundReserveEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardScheme = RewardScheme.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountRefunded = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefundReserveEvent {
    const message = { ...baseRefundReserveEvent } as RefundReserveEvent;
    message.rewardScheme =
      object.rewardScheme !== undefined && object.rewardScheme !== null
        ? RewardScheme.fromJSON(object.rewardScheme)
        : undefined;
    message.amountRefunded =
      object.amountRefunded !== undefined && object.amountRefunded !== null
        ? String(object.amountRefunded)
        : "";
    return message;
  },

  toJSON(message: RefundReserveEvent): unknown {
    const obj: any = {};
    message.rewardScheme !== undefined &&
      (obj.rewardScheme = message.rewardScheme
        ? RewardScheme.toJSON(message.rewardScheme)
        : undefined);
    message.amountRefunded !== undefined &&
      (obj.amountRefunded = message.amountRefunded);
    return obj;
  },

  fromPartial(object: DeepPartial<RefundReserveEvent>): RefundReserveEvent {
    const message = { ...baseRefundReserveEvent } as RefundReserveEvent;
    message.rewardScheme =
      object.rewardScheme !== undefined && object.rewardScheme !== null
        ? RewardScheme.fromPartial(object.rewardScheme)
        : undefined;
    message.amountRefunded = object.amountRefunded ?? "";
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
