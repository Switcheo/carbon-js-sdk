/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { RateStrategyParams } from "./rate_strategy_params";
import { AssetParams } from "./asset_params";
import { DebtInfo } from "./debt_info";
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

export interface SetInterestFeeEvent {
  interestFee: string;
  type: string;
}

export interface SetLiquidationFeeEvent {
  liquidationFee: string;
  type: string;
}

export interface SetStablecoinInterestRateEvent {
  stablecoinInterestRate: string;
  type: string;
}

export interface SupplyAssetEvent {
  supplier: string;
  denom: string;
  amountSupplied: string;
  cdpDenom: string;
  amountReceived: string;
}

export interface WithdrawAssetEvent {
  withdrawer: string;
  denom: string;
  amountWithdrawed: string;
  cdpDenom: string;
  amountBurned: string;
}

export interface BorrowAssetEvent {
  borrower: string;
  denom: string;
  amountBorrowed: string;
  healthFactor: string;
}

export interface RepayAssetEvent {
  repayer: string;
  debtor: string;
  denom: string;
  amountRepaid: string;
  healthFactor: string;
}

export interface LockCollateralEvent {
  locker: string;
  cdpDenom: string;
  amountLocked: string;
  healthFactor: string;
}

export interface UnlockCollateralEvent {
  unlocker: string;
  cdpDenom: string;
  amountUnlocked: string;
  healthFactor: string;
}

export interface UpdateDebtInfoEvent {
  debtInfo?: DebtInfo;
  type: string;
}

export interface UpdateStablecoinDebtInfoEvent {
  stablecoinDebtInfo?: StablecoinDebtInfo;
  type: string;
}

export interface ReturnStablecoinEvent {
  repayer: string;
  debtor: string;
  interestDenom: string;
  interestRepaid: string;
  principalRepaid: string;
  healthFactor: string;
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
    return message;
  },

  toJSON(message: SetStablecoinInterestRateEvent): unknown {
    const obj: any = {};
    message.stablecoinInterestRate !== undefined &&
      (obj.stablecoinInterestRate = message.stablecoinInterestRate);
    message.type !== undefined && (obj.type = message.type);
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
    return message;
  },
};

const baseSupplyAssetEvent: object = {
  supplier: "",
  denom: "",
  amountSupplied: "",
  cdpDenom: "",
  amountReceived: "",
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
    if (message.cdpDenom !== "") {
      writer.uint32(34).string(message.cdpDenom);
    }
    if (message.amountReceived !== "") {
      writer.uint32(42).string(message.amountReceived);
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
          message.cdpDenom = reader.string();
          break;
        case 5:
          message.amountReceived = reader.string();
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
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
        : "";
    message.amountReceived =
      object.amountReceived !== undefined && object.amountReceived !== null
        ? String(object.amountReceived)
        : "";
    return message;
  },

  toJSON(message: SupplyAssetEvent): unknown {
    const obj: any = {};
    message.supplier !== undefined && (obj.supplier = message.supplier);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountSupplied !== undefined &&
      (obj.amountSupplied = message.amountSupplied);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.amountReceived !== undefined &&
      (obj.amountReceived = message.amountReceived);
    return obj;
  },

  fromPartial(object: DeepPartial<SupplyAssetEvent>): SupplyAssetEvent {
    const message = { ...baseSupplyAssetEvent } as SupplyAssetEvent;
    message.supplier = object.supplier ?? "";
    message.denom = object.denom ?? "";
    message.amountSupplied = object.amountSupplied ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.amountReceived = object.amountReceived ?? "";
    return message;
  },
};

const baseWithdrawAssetEvent: object = {
  withdrawer: "",
  denom: "",
  amountWithdrawed: "",
  cdpDenom: "",
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
    if (message.cdpDenom !== "") {
      writer.uint32(34).string(message.cdpDenom);
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
          message.cdpDenom = reader.string();
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
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
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
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.amountBurned !== undefined &&
      (obj.amountBurned = message.amountBurned);
    return obj;
  },

  fromPartial(object: DeepPartial<WithdrawAssetEvent>): WithdrawAssetEvent {
    const message = { ...baseWithdrawAssetEvent } as WithdrawAssetEvent;
    message.withdrawer = object.withdrawer ?? "";
    message.denom = object.denom ?? "";
    message.amountWithdrawed = object.amountWithdrawed ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.amountBurned = object.amountBurned ?? "";
    return message;
  },
};

const baseBorrowAssetEvent: object = {
  borrower: "",
  denom: "",
  amountBorrowed: "",
  healthFactor: "",
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
    if (message.healthFactor !== "") {
      writer.uint32(34).string(message.healthFactor);
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
          message.healthFactor = reader.string();
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
    message.healthFactor =
      object.healthFactor !== undefined && object.healthFactor !== null
        ? String(object.healthFactor)
        : "";
    return message;
  },

  toJSON(message: BorrowAssetEvent): unknown {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountBorrowed !== undefined &&
      (obj.amountBorrowed = message.amountBorrowed);
    message.healthFactor !== undefined &&
      (obj.healthFactor = message.healthFactor);
    return obj;
  },

  fromPartial(object: DeepPartial<BorrowAssetEvent>): BorrowAssetEvent {
    const message = { ...baseBorrowAssetEvent } as BorrowAssetEvent;
    message.borrower = object.borrower ?? "";
    message.denom = object.denom ?? "";
    message.amountBorrowed = object.amountBorrowed ?? "";
    message.healthFactor = object.healthFactor ?? "";
    return message;
  },
};

const baseRepayAssetEvent: object = {
  repayer: "",
  debtor: "",
  denom: "",
  amountRepaid: "",
  healthFactor: "",
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
    if (message.amountRepaid !== "") {
      writer.uint32(34).string(message.amountRepaid);
    }
    if (message.healthFactor !== "") {
      writer.uint32(42).string(message.healthFactor);
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
          message.amountRepaid = reader.string();
          break;
        case 5:
          message.healthFactor = reader.string();
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
    message.amountRepaid =
      object.amountRepaid !== undefined && object.amountRepaid !== null
        ? String(object.amountRepaid)
        : "";
    message.healthFactor =
      object.healthFactor !== undefined && object.healthFactor !== null
        ? String(object.healthFactor)
        : "";
    return message;
  },

  toJSON(message: RepayAssetEvent): unknown {
    const obj: any = {};
    message.repayer !== undefined && (obj.repayer = message.repayer);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amountRepaid !== undefined &&
      (obj.amountRepaid = message.amountRepaid);
    message.healthFactor !== undefined &&
      (obj.healthFactor = message.healthFactor);
    return obj;
  },

  fromPartial(object: DeepPartial<RepayAssetEvent>): RepayAssetEvent {
    const message = { ...baseRepayAssetEvent } as RepayAssetEvent;
    message.repayer = object.repayer ?? "";
    message.debtor = object.debtor ?? "";
    message.denom = object.denom ?? "";
    message.amountRepaid = object.amountRepaid ?? "";
    message.healthFactor = object.healthFactor ?? "";
    return message;
  },
};

const baseLockCollateralEvent: object = {
  locker: "",
  cdpDenom: "",
  amountLocked: "",
  healthFactor: "",
};

export const LockCollateralEvent = {
  encode(
    message: LockCollateralEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.locker !== "") {
      writer.uint32(10).string(message.locker);
    }
    if (message.cdpDenom !== "") {
      writer.uint32(18).string(message.cdpDenom);
    }
    if (message.amountLocked !== "") {
      writer.uint32(26).string(message.amountLocked);
    }
    if (message.healthFactor !== "") {
      writer.uint32(34).string(message.healthFactor);
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
          message.cdpDenom = reader.string();
          break;
        case 3:
          message.amountLocked = reader.string();
          break;
        case 4:
          message.healthFactor = reader.string();
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
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
        : "";
    message.amountLocked =
      object.amountLocked !== undefined && object.amountLocked !== null
        ? String(object.amountLocked)
        : "";
    message.healthFactor =
      object.healthFactor !== undefined && object.healthFactor !== null
        ? String(object.healthFactor)
        : "";
    return message;
  },

  toJSON(message: LockCollateralEvent): unknown {
    const obj: any = {};
    message.locker !== undefined && (obj.locker = message.locker);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.amountLocked !== undefined &&
      (obj.amountLocked = message.amountLocked);
    message.healthFactor !== undefined &&
      (obj.healthFactor = message.healthFactor);
    return obj;
  },

  fromPartial(object: DeepPartial<LockCollateralEvent>): LockCollateralEvent {
    const message = { ...baseLockCollateralEvent } as LockCollateralEvent;
    message.locker = object.locker ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.amountLocked = object.amountLocked ?? "";
    message.healthFactor = object.healthFactor ?? "";
    return message;
  },
};

const baseUnlockCollateralEvent: object = {
  unlocker: "",
  cdpDenom: "",
  amountUnlocked: "",
  healthFactor: "",
};

export const UnlockCollateralEvent = {
  encode(
    message: UnlockCollateralEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unlocker !== "") {
      writer.uint32(10).string(message.unlocker);
    }
    if (message.cdpDenom !== "") {
      writer.uint32(18).string(message.cdpDenom);
    }
    if (message.amountUnlocked !== "") {
      writer.uint32(26).string(message.amountUnlocked);
    }
    if (message.healthFactor !== "") {
      writer.uint32(34).string(message.healthFactor);
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
          message.cdpDenom = reader.string();
          break;
        case 3:
          message.amountUnlocked = reader.string();
          break;
        case 4:
          message.healthFactor = reader.string();
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
    message.cdpDenom =
      object.cdpDenom !== undefined && object.cdpDenom !== null
        ? String(object.cdpDenom)
        : "";
    message.amountUnlocked =
      object.amountUnlocked !== undefined && object.amountUnlocked !== null
        ? String(object.amountUnlocked)
        : "";
    message.healthFactor =
      object.healthFactor !== undefined && object.healthFactor !== null
        ? String(object.healthFactor)
        : "";
    return message;
  },

  toJSON(message: UnlockCollateralEvent): unknown {
    const obj: any = {};
    message.unlocker !== undefined && (obj.unlocker = message.unlocker);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.amountUnlocked !== undefined &&
      (obj.amountUnlocked = message.amountUnlocked);
    message.healthFactor !== undefined &&
      (obj.healthFactor = message.healthFactor);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UnlockCollateralEvent>
  ): UnlockCollateralEvent {
    const message = { ...baseUnlockCollateralEvent } as UnlockCollateralEvent;
    message.unlocker = object.unlocker ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.amountUnlocked = object.amountUnlocked ?? "";
    message.healthFactor = object.healthFactor ?? "";
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

const baseReturnStablecoinEvent: object = {
  repayer: "",
  debtor: "",
  interestDenom: "",
  interestRepaid: "",
  principalRepaid: "",
  healthFactor: "",
};

export const ReturnStablecoinEvent = {
  encode(
    message: ReturnStablecoinEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.repayer !== "") {
      writer.uint32(10).string(message.repayer);
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
    if (message.healthFactor !== "") {
      writer.uint32(50).string(message.healthFactor);
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
          message.repayer = reader.string();
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
          message.healthFactor = reader.string();
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
    message.repayer =
      object.repayer !== undefined && object.repayer !== null
        ? String(object.repayer)
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
    message.healthFactor =
      object.healthFactor !== undefined && object.healthFactor !== null
        ? String(object.healthFactor)
        : "";
    return message;
  },

  toJSON(message: ReturnStablecoinEvent): unknown {
    const obj: any = {};
    message.repayer !== undefined && (obj.repayer = message.repayer);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.interestDenom !== undefined &&
      (obj.interestDenom = message.interestDenom);
    message.interestRepaid !== undefined &&
      (obj.interestRepaid = message.interestRepaid);
    message.principalRepaid !== undefined &&
      (obj.principalRepaid = message.principalRepaid);
    message.healthFactor !== undefined &&
      (obj.healthFactor = message.healthFactor);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReturnStablecoinEvent>
  ): ReturnStablecoinEvent {
    const message = { ...baseReturnStablecoinEvent } as ReturnStablecoinEvent;
    message.repayer = object.repayer ?? "";
    message.debtor = object.debtor ?? "";
    message.interestDenom = object.interestDenom ?? "";
    message.interestRepaid = object.interestRepaid ?? "";
    message.principalRepaid = object.principalRepaid ?? "";
    message.healthFactor = object.healthFactor ?? "";
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
