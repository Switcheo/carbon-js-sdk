/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { RateStrategyParams } from "./rate_strategy_params";
import { AssetParams } from "./asset_params";

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
  cdpDenom: string;
  amount: string;
}

export interface MsgRepayAssetWithCdpTokensResponse {}

export interface MsgRepayAssetWithCollateral {
  creator: string;
  cdpDenom: string;
  amount: string;
}

export interface MsgRepayAssetWithCollateralResponse {}

export interface MsgSetStableCoinInterestRate {
  creator: string;
  stableCoinInterestRate: string;
}

export interface MsgSetStableCoinInterestRateResponse {}

export interface MsgMintStablecoin {
  creator: string;
  amount: string;
}

export interface MsgMintStablecoinResponse {}

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
    if (message.debtDenom !== "") {
      writer.uint32(34).string(message.debtDenom);
    }
    if (message.debtAmount !== "") {
      writer.uint32(42).string(message.debtAmount);
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
          message.debtDenom = reader.string();
          break;
        case 5:
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
  cdpDenom: "",
  amount: "",
};

export const MsgRepayAssetWithCdpTokens = {
  encode(
    message: MsgRepayAssetWithCdpTokens,
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

  fromJSON(object: any): MsgRepayAssetWithCdpTokens {
    const message = {
      ...baseMsgRepayAssetWithCdpTokens,
    } as MsgRepayAssetWithCdpTokens;
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

  toJSON(message: MsgRepayAssetWithCdpTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRepayAssetWithCdpTokens>
  ): MsgRepayAssetWithCdpTokens {
    const message = {
      ...baseMsgRepayAssetWithCdpTokens,
    } as MsgRepayAssetWithCdpTokens;
    message.creator = object.creator ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.amount = object.amount ?? "";
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
  cdpDenom: "",
  amount: "",
};

export const MsgRepayAssetWithCollateral = {
  encode(
    message: MsgRepayAssetWithCollateral,
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

  fromJSON(object: any): MsgRepayAssetWithCollateral {
    const message = {
      ...baseMsgRepayAssetWithCollateral,
    } as MsgRepayAssetWithCollateral;
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

  toJSON(message: MsgRepayAssetWithCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdpDenom !== undefined && (obj.cdpDenom = message.cdpDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRepayAssetWithCollateral>
  ): MsgRepayAssetWithCollateral {
    const message = {
      ...baseMsgRepayAssetWithCollateral,
    } as MsgRepayAssetWithCollateral;
    message.creator = object.creator ?? "";
    message.cdpDenom = object.cdpDenom ?? "";
    message.amount = object.amount ?? "";
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

const baseMsgSetStableCoinInterestRate: object = {
  creator: "",
  stableCoinInterestRate: "",
};

export const MsgSetStableCoinInterestRate = {
  encode(
    message: MsgSetStableCoinInterestRate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.stableCoinInterestRate !== "") {
      writer.uint32(18).string(message.stableCoinInterestRate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStableCoinInterestRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStableCoinInterestRate,
    } as MsgSetStableCoinInterestRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.stableCoinInterestRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetStableCoinInterestRate {
    const message = {
      ...baseMsgSetStableCoinInterestRate,
    } as MsgSetStableCoinInterestRate;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stableCoinInterestRate =
      object.stableCoinInterestRate !== undefined &&
      object.stableCoinInterestRate !== null
        ? String(object.stableCoinInterestRate)
        : "";
    return message;
  },

  toJSON(message: MsgSetStableCoinInterestRate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stableCoinInterestRate !== undefined &&
      (obj.stableCoinInterestRate = message.stableCoinInterestRate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetStableCoinInterestRate>
  ): MsgSetStableCoinInterestRate {
    const message = {
      ...baseMsgSetStableCoinInterestRate,
    } as MsgSetStableCoinInterestRate;
    message.creator = object.creator ?? "";
    message.stableCoinInterestRate = object.stableCoinInterestRate ?? "";
    return message;
  },
};

const baseMsgSetStableCoinInterestRateResponse: object = {};

export const MsgSetStableCoinInterestRateResponse = {
  encode(
    _: MsgSetStableCoinInterestRateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStableCoinInterestRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStableCoinInterestRateResponse,
    } as MsgSetStableCoinInterestRateResponse;
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

  fromJSON(_: any): MsgSetStableCoinInterestRateResponse {
    const message = {
      ...baseMsgSetStableCoinInterestRateResponse,
    } as MsgSetStableCoinInterestRateResponse;
    return message;
  },

  toJSON(_: MsgSetStableCoinInterestRateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetStableCoinInterestRateResponse>
  ): MsgSetStableCoinInterestRateResponse {
    const message = {
      ...baseMsgSetStableCoinInterestRateResponse,
    } as MsgSetStableCoinInterestRateResponse;
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
  SetStableCoinInterestRate(
    request: MsgSetStableCoinInterestRate
  ): Promise<MsgSetStableCoinInterestRateResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  MintStablecoin(
    request: MsgMintStablecoin
  ): Promise<MsgMintStablecoinResponse>;
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
    this.SetStableCoinInterestRate = this.SetStableCoinInterestRate.bind(this);
    this.MintStablecoin = this.MintStablecoin.bind(this);
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

  SetStableCoinInterestRate(
    request: MsgSetStableCoinInterestRate
  ): Promise<MsgSetStableCoinInterestRateResponse> {
    const data = MsgSetStableCoinInterestRate.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "SetStableCoinInterestRate",
      data
    );
    return promise.then((data) =>
      MsgSetStableCoinInterestRateResponse.decode(new _m0.Reader(data))
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
