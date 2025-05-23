/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool, UpdatePoolParams } from "./pool";
import { UpdateMarketConfigParams, MarketConfig } from "./market";
import { QuoteStrategy, UpdateQuoteStrategyParams, Quote } from "./quote";
import { UserVault, UpdateUserVaultParams } from "./user_vault";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.perpspool";

export interface MsgCreatePool {
  creator: string;
  /** name of pool */
  name: string;
  /** denom of the nav token in the pool that is used to provide liquidity */
  depositDenom: string;
  /** the maximum amount that can be supplied into the pool */
  supplyCap: string;
  /** deposit fee to charge on a successful deposit to pool in decimal */
  depositFee: string;
  /** withdrawal fee to charge on a successful withdrawal from pool in decimal */
  withdrawalFee: string;
  /** borrow fee in decimal per time period to charge on use of liquidity in pool */
  baseBorrowFeePerFundingInterval: string;
}

export interface MsgCreatePoolResponse {
  pool?: Pool;
}

export interface MsgUpdatePool {
  creator: string;
  poolId: Long;
  updatePoolParams?: UpdatePoolParams;
}

export interface MsgUpdatePoolResponse {
  pool?: Pool;
}

export interface MsgRegisterToPool {
  creator: string;
  poolId: Long;
  marketId: string;
  marketConfigParams?: UpdateMarketConfigParams;
}

export interface MsgRegisterToPoolResponse {}

export interface MsgDeregisterFromPool {
  creator: string;
  marketId: string;
}

export interface MsgDeregisterFromPoolResponse {}

export interface MsgDepositToPool {
  creator: string;
  poolId: Long;
  /** the amount to deposit */
  depositAmount: string;
  /** min amount of share to receive */
  minShareAmount: string;
}

export interface MsgDepositToPoolResponse {}

export interface MsgWithdrawFromPool {
  creator: string;
  poolId: Long;
  /** the amount of share to use for withdrawal */
  shareAmount: string;
  /** min amount to receive */
  minReceiveAmount: string;
}

export interface MsgWithdrawFromPoolResponse {}

export interface MsgUpdateMarketConfig {
  creator: string;
  marketId: string;
  updateMarketConfigParams?: UpdateMarketConfigParams;
}

export interface MsgUpdateMarketConfigResponse {
  marketConfig?: MarketConfig;
}

export interface MsgCreateQuoteStrategy {
  creator: string;
  name: string;
  quoteShape: Quote[];
}

export interface MsgCreateQuoteStrategyResponse {
  quoteStrategy?: QuoteStrategy;
}

export interface MsgUpdateQuoteStrategy {
  creator: string;
  quoteStrategyId: Long;
  updateQuoteStrategyParams?: UpdateQuoteStrategyParams;
}

export interface MsgUpdateQuoteStrategyResponse {
  quoteStrategy?: QuoteStrategy;
}

export interface MsgDeleteQuoteStrategy {
  creator: string;
  quoteStrategyId: Long;
}

export interface MsgDeleteQuoteStrategyResponse {}

export interface MsgCreateUserVault {
  creator: string;
  name: string;
  description: string;
  depositAmount: string;
  profitShare: string;
  depositFee: string;
  withdrawFee: string;
}

export interface MsgCreateUserVaultResponse {
  userVault?: UserVault;
}

export interface MsgCloseUserVault {
  creator: string;
  id: Long;
}

export interface MsgCloseUserVaultResponse {}

export interface MsgUpdateUserVault {
  creator: string;
  id: Long;
  updateUserVaultParams?: UpdateUserVaultParams;
}

export interface MsgUpdateUserVaultResponse {}

export interface MsgReleaseUserVaultWithdrawal {
  creator: string;
  vaultId: Long;
  processId: Long;
}

export interface MsgReleaseUserVaultWithdrawalResponse {
  error: string;
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
export interface MsgUpdateParamsResponse {}

const baseMsgCreatePool: object = {
  creator: "",
  name: "",
  depositDenom: "",
  supplyCap: "",
  depositFee: "",
  withdrawalFee: "",
  baseBorrowFeePerFundingInterval: "",
};

export const MsgCreatePool = {
  encode(
    message: MsgCreatePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.depositDenom !== "") {
      writer.uint32(26).string(message.depositDenom);
    }
    if (message.supplyCap !== "") {
      writer.uint32(34).string(message.supplyCap);
    }
    if (message.depositFee !== "") {
      writer.uint32(42).string(message.depositFee);
    }
    if (message.withdrawalFee !== "") {
      writer.uint32(50).string(message.withdrawalFee);
    }
    if (message.baseBorrowFeePerFundingInterval !== "") {
      writer.uint32(58).string(message.baseBorrowFeePerFundingInterval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.depositDenom = reader.string();
          break;
        case 4:
          message.supplyCap = reader.string();
          break;
        case 5:
          message.depositFee = reader.string();
          break;
        case 6:
          message.withdrawalFee = reader.string();
          break;
        case 7:
          message.baseBorrowFeePerFundingInterval = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.depositDenom =
      object.depositDenom !== undefined && object.depositDenom !== null
        ? String(object.depositDenom)
        : "";
    message.supplyCap =
      object.supplyCap !== undefined && object.supplyCap !== null
        ? String(object.supplyCap)
        : "";
    message.depositFee =
      object.depositFee !== undefined && object.depositFee !== null
        ? String(object.depositFee)
        : "";
    message.withdrawalFee =
      object.withdrawalFee !== undefined && object.withdrawalFee !== null
        ? String(object.withdrawalFee)
        : "";
    message.baseBorrowFeePerFundingInterval =
      object.baseBorrowFeePerFundingInterval !== undefined &&
      object.baseBorrowFeePerFundingInterval !== null
        ? String(object.baseBorrowFeePerFundingInterval)
        : "";
    return message;
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.depositDenom !== undefined &&
      (obj.depositDenom = message.depositDenom);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined &&
      (obj.withdrawalFee = message.withdrawalFee);
    message.baseBorrowFeePerFundingInterval !== undefined &&
      (obj.baseBorrowFeePerFundingInterval =
        message.baseBorrowFeePerFundingInterval);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.depositDenom = object.depositDenom ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.baseBorrowFeePerFundingInterval =
      object.baseBorrowFeePerFundingInterval ?? "";
    return message;
  },
};

const baseMsgCreatePoolResponse: object = {};

export const MsgCreatePoolResponse = {
  encode(
    message: MsgCreatePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromJSON(object.pool)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePoolResponse>
  ): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

const baseMsgUpdatePool: object = { creator: "", poolId: Long.UZERO };

export const MsgUpdatePool = {
  encode(
    message: MsgUpdatePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.updatePoolParams !== undefined) {
      UpdatePoolParams.encode(
        message.updatePoolParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.updatePoolParams = UpdatePoolParams.decode(
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

  fromJSON(object: any): MsgUpdatePool {
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.updatePoolParams =
      object.updatePoolParams !== undefined && object.updatePoolParams !== null
        ? UpdatePoolParams.fromJSON(object.updatePoolParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.updatePoolParams !== undefined &&
      (obj.updatePoolParams = message.updatePoolParams
        ? UpdatePoolParams.toJSON(message.updatePoolParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePool>): MsgUpdatePool {
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
    message.creator = object.creator ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.updatePoolParams =
      object.updatePoolParams !== undefined && object.updatePoolParams !== null
        ? UpdatePoolParams.fromPartial(object.updatePoolParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdatePoolResponse: object = {};

export const MsgUpdatePoolResponse = {
  encode(
    message: MsgUpdatePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePoolResponse {
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromJSON(object.pool)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePoolResponse>
  ): MsgUpdatePoolResponse {
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

const baseMsgRegisterToPool: object = {
  creator: "",
  poolId: Long.UZERO,
  marketId: "",
};

export const MsgRegisterToPool = {
  encode(
    message: MsgRegisterToPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.marketConfigParams !== undefined) {
      UpdateMarketConfigParams.encode(
        message.marketConfigParams,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterToPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterToPool } as MsgRegisterToPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.marketId = reader.string();
          break;
        case 4:
          message.marketConfigParams = UpdateMarketConfigParams.decode(
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

  fromJSON(object: any): MsgRegisterToPool {
    const message = { ...baseMsgRegisterToPool } as MsgRegisterToPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.marketConfigParams =
      object.marketConfigParams !== undefined &&
      object.marketConfigParams !== null
        ? UpdateMarketConfigParams.fromJSON(object.marketConfigParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgRegisterToPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.marketConfigParams !== undefined &&
      (obj.marketConfigParams = message.marketConfigParams
        ? UpdateMarketConfigParams.toJSON(message.marketConfigParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterToPool>): MsgRegisterToPool {
    const message = { ...baseMsgRegisterToPool } as MsgRegisterToPool;
    message.creator = object.creator ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.marketId = object.marketId ?? "";
    message.marketConfigParams =
      object.marketConfigParams !== undefined &&
      object.marketConfigParams !== null
        ? UpdateMarketConfigParams.fromPartial(object.marketConfigParams)
        : undefined;
    return message;
  },
};

const baseMsgRegisterToPoolResponse: object = {};

export const MsgRegisterToPoolResponse = {
  encode(
    _: MsgRegisterToPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterToPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterToPoolResponse,
    } as MsgRegisterToPoolResponse;
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

  fromJSON(_: any): MsgRegisterToPoolResponse {
    const message = {
      ...baseMsgRegisterToPoolResponse,
    } as MsgRegisterToPoolResponse;
    return message;
  },

  toJSON(_: MsgRegisterToPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterToPoolResponse>
  ): MsgRegisterToPoolResponse {
    const message = {
      ...baseMsgRegisterToPoolResponse,
    } as MsgRegisterToPoolResponse;
    return message;
  },
};

const baseMsgDeregisterFromPool: object = { creator: "", marketId: "" };

export const MsgDeregisterFromPool = {
  encode(
    message: MsgDeregisterFromPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeregisterFromPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeregisterFromPool } as MsgDeregisterFromPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeregisterFromPool {
    const message = { ...baseMsgDeregisterFromPool } as MsgDeregisterFromPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: MsgDeregisterFromPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeregisterFromPool>
  ): MsgDeregisterFromPool {
    const message = { ...baseMsgDeregisterFromPool } as MsgDeregisterFromPool;
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseMsgDeregisterFromPoolResponse: object = {};

export const MsgDeregisterFromPoolResponse = {
  encode(
    _: MsgDeregisterFromPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeregisterFromPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeregisterFromPoolResponse,
    } as MsgDeregisterFromPoolResponse;
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

  fromJSON(_: any): MsgDeregisterFromPoolResponse {
    const message = {
      ...baseMsgDeregisterFromPoolResponse,
    } as MsgDeregisterFromPoolResponse;
    return message;
  },

  toJSON(_: MsgDeregisterFromPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeregisterFromPoolResponse>
  ): MsgDeregisterFromPoolResponse {
    const message = {
      ...baseMsgDeregisterFromPoolResponse,
    } as MsgDeregisterFromPoolResponse;
    return message;
  },
};

const baseMsgDepositToPool: object = {
  creator: "",
  poolId: Long.UZERO,
  depositAmount: "",
  minShareAmount: "",
};

export const MsgDepositToPool = {
  encode(
    message: MsgDepositToPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.depositAmount !== "") {
      writer.uint32(26).string(message.depositAmount);
    }
    if (message.minShareAmount !== "") {
      writer.uint32(34).string(message.minShareAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositToPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDepositToPool } as MsgDepositToPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.depositAmount = reader.string();
          break;
        case 4:
          message.minShareAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositToPool {
    const message = { ...baseMsgDepositToPool } as MsgDepositToPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.depositAmount =
      object.depositAmount !== undefined && object.depositAmount !== null
        ? String(object.depositAmount)
        : "";
    message.minShareAmount =
      object.minShareAmount !== undefined && object.minShareAmount !== null
        ? String(object.minShareAmount)
        : "";
    return message;
  },

  toJSON(message: MsgDepositToPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount);
    message.minShareAmount !== undefined &&
      (obj.minShareAmount = message.minShareAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDepositToPool>): MsgDepositToPool {
    const message = { ...baseMsgDepositToPool } as MsgDepositToPool;
    message.creator = object.creator ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.depositAmount = object.depositAmount ?? "";
    message.minShareAmount = object.minShareAmount ?? "";
    return message;
  },
};

const baseMsgDepositToPoolResponse: object = {};

export const MsgDepositToPoolResponse = {
  encode(
    _: MsgDepositToPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositToPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDepositToPoolResponse,
    } as MsgDepositToPoolResponse;
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

  fromJSON(_: any): MsgDepositToPoolResponse {
    const message = {
      ...baseMsgDepositToPoolResponse,
    } as MsgDepositToPoolResponse;
    return message;
  },

  toJSON(_: MsgDepositToPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDepositToPoolResponse>
  ): MsgDepositToPoolResponse {
    const message = {
      ...baseMsgDepositToPoolResponse,
    } as MsgDepositToPoolResponse;
    return message;
  },
};

const baseMsgWithdrawFromPool: object = {
  creator: "",
  poolId: Long.UZERO,
  shareAmount: "",
  minReceiveAmount: "",
};

export const MsgWithdrawFromPool = {
  encode(
    message: MsgWithdrawFromPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.shareAmount !== "") {
      writer.uint32(26).string(message.shareAmount);
    }
    if (message.minReceiveAmount !== "") {
      writer.uint32(34).string(message.minReceiveAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFromPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawFromPool } as MsgWithdrawFromPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.shareAmount = reader.string();
          break;
        case 4:
          message.minReceiveAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawFromPool {
    const message = { ...baseMsgWithdrawFromPool } as MsgWithdrawFromPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.shareAmount =
      object.shareAmount !== undefined && object.shareAmount !== null
        ? String(object.shareAmount)
        : "";
    message.minReceiveAmount =
      object.minReceiveAmount !== undefined && object.minReceiveAmount !== null
        ? String(object.minReceiveAmount)
        : "";
    return message;
  },

  toJSON(message: MsgWithdrawFromPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.minReceiveAmount !== undefined &&
      (obj.minReceiveAmount = message.minReceiveAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawFromPool>): MsgWithdrawFromPool {
    const message = { ...baseMsgWithdrawFromPool } as MsgWithdrawFromPool;
    message.creator = object.creator ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.shareAmount = object.shareAmount ?? "";
    message.minReceiveAmount = object.minReceiveAmount ?? "";
    return message;
  },
};

const baseMsgWithdrawFromPoolResponse: object = {};

export const MsgWithdrawFromPoolResponse = {
  encode(
    _: MsgWithdrawFromPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawFromPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawFromPoolResponse,
    } as MsgWithdrawFromPoolResponse;
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

  fromJSON(_: any): MsgWithdrawFromPoolResponse {
    const message = {
      ...baseMsgWithdrawFromPoolResponse,
    } as MsgWithdrawFromPoolResponse;
    return message;
  },

  toJSON(_: MsgWithdrawFromPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawFromPoolResponse>
  ): MsgWithdrawFromPoolResponse {
    const message = {
      ...baseMsgWithdrawFromPoolResponse,
    } as MsgWithdrawFromPoolResponse;
    return message;
  },
};

const baseMsgUpdateMarketConfig: object = { creator: "", marketId: "" };

export const MsgUpdateMarketConfig = {
  encode(
    message: MsgUpdateMarketConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.updateMarketConfigParams !== undefined) {
      UpdateMarketConfigParams.encode(
        message.updateMarketConfigParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMarketConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMarketConfig } as MsgUpdateMarketConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.updateMarketConfigParams = UpdateMarketConfigParams.decode(
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

  fromJSON(object: any): MsgUpdateMarketConfig {
    const message = { ...baseMsgUpdateMarketConfig } as MsgUpdateMarketConfig;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.updateMarketConfigParams =
      object.updateMarketConfigParams !== undefined &&
      object.updateMarketConfigParams !== null
        ? UpdateMarketConfigParams.fromJSON(object.updateMarketConfigParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateMarketConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.updateMarketConfigParams !== undefined &&
      (obj.updateMarketConfigParams = message.updateMarketConfigParams
        ? UpdateMarketConfigParams.toJSON(message.updateMarketConfigParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateMarketConfig>
  ): MsgUpdateMarketConfig {
    const message = { ...baseMsgUpdateMarketConfig } as MsgUpdateMarketConfig;
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.updateMarketConfigParams =
      object.updateMarketConfigParams !== undefined &&
      object.updateMarketConfigParams !== null
        ? UpdateMarketConfigParams.fromPartial(object.updateMarketConfigParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdateMarketConfigResponse: object = {};

export const MsgUpdateMarketConfigResponse = {
  encode(
    message: MsgUpdateMarketConfigResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketConfig !== undefined) {
      MarketConfig.encode(
        message.marketConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMarketConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMarketConfigResponse,
    } as MsgUpdateMarketConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketConfig = MarketConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMarketConfigResponse {
    const message = {
      ...baseMsgUpdateMarketConfigResponse,
    } as MsgUpdateMarketConfigResponse;
    message.marketConfig =
      object.marketConfig !== undefined && object.marketConfig !== null
        ? MarketConfig.fromJSON(object.marketConfig)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateMarketConfigResponse): unknown {
    const obj: any = {};
    message.marketConfig !== undefined &&
      (obj.marketConfig = message.marketConfig
        ? MarketConfig.toJSON(message.marketConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateMarketConfigResponse>
  ): MsgUpdateMarketConfigResponse {
    const message = {
      ...baseMsgUpdateMarketConfigResponse,
    } as MsgUpdateMarketConfigResponse;
    message.marketConfig =
      object.marketConfig !== undefined && object.marketConfig !== null
        ? MarketConfig.fromPartial(object.marketConfig)
        : undefined;
    return message;
  },
};

const baseMsgCreateQuoteStrategy: object = { creator: "", name: "" };

export const MsgCreateQuoteStrategy = {
  encode(
    message: MsgCreateQuoteStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.quoteShape) {
      Quote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateQuoteStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateQuoteStrategy } as MsgCreateQuoteStrategy;
    message.quoteShape = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.quoteShape.push(Quote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateQuoteStrategy {
    const message = { ...baseMsgCreateQuoteStrategy } as MsgCreateQuoteStrategy;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.quoteShape = (object.quoteShape ?? []).map((e: any) =>
      Quote.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgCreateQuoteStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    if (message.quoteShape) {
      obj.quoteShape = message.quoteShape.map((e) =>
        e ? Quote.toJSON(e) : undefined
      );
    } else {
      obj.quoteShape = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateQuoteStrategy>
  ): MsgCreateQuoteStrategy {
    const message = { ...baseMsgCreateQuoteStrategy } as MsgCreateQuoteStrategy;
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.quoteShape = (object.quoteShape ?? []).map((e) =>
      Quote.fromPartial(e)
    );
    return message;
  },
};

const baseMsgCreateQuoteStrategyResponse: object = {};

export const MsgCreateQuoteStrategyResponse = {
  encode(
    message: MsgCreateQuoteStrategyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoteStrategy !== undefined) {
      QuoteStrategy.encode(
        message.quoteStrategy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateQuoteStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateQuoteStrategyResponse,
    } as MsgCreateQuoteStrategyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoteStrategy = QuoteStrategy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateQuoteStrategyResponse {
    const message = {
      ...baseMsgCreateQuoteStrategyResponse,
    } as MsgCreateQuoteStrategyResponse;
    message.quoteStrategy =
      object.quoteStrategy !== undefined && object.quoteStrategy !== null
        ? QuoteStrategy.fromJSON(object.quoteStrategy)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreateQuoteStrategyResponse): unknown {
    const obj: any = {};
    message.quoteStrategy !== undefined &&
      (obj.quoteStrategy = message.quoteStrategy
        ? QuoteStrategy.toJSON(message.quoteStrategy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateQuoteStrategyResponse>
  ): MsgCreateQuoteStrategyResponse {
    const message = {
      ...baseMsgCreateQuoteStrategyResponse,
    } as MsgCreateQuoteStrategyResponse;
    message.quoteStrategy =
      object.quoteStrategy !== undefined && object.quoteStrategy !== null
        ? QuoteStrategy.fromPartial(object.quoteStrategy)
        : undefined;
    return message;
  },
};

const baseMsgUpdateQuoteStrategy: object = {
  creator: "",
  quoteStrategyId: Long.UZERO,
};

export const MsgUpdateQuoteStrategy = {
  encode(
    message: MsgUpdateQuoteStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.quoteStrategyId.isZero()) {
      writer.uint32(16).uint64(message.quoteStrategyId);
    }
    if (message.updateQuoteStrategyParams !== undefined) {
      UpdateQuoteStrategyParams.encode(
        message.updateQuoteStrategyParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateQuoteStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateQuoteStrategy } as MsgUpdateQuoteStrategy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.quoteStrategyId = reader.uint64() as Long;
          break;
        case 3:
          message.updateQuoteStrategyParams = UpdateQuoteStrategyParams.decode(
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

  fromJSON(object: any): MsgUpdateQuoteStrategy {
    const message = { ...baseMsgUpdateQuoteStrategy } as MsgUpdateQuoteStrategy;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.quoteStrategyId =
      object.quoteStrategyId !== undefined && object.quoteStrategyId !== null
        ? Long.fromString(object.quoteStrategyId)
        : Long.UZERO;
    message.updateQuoteStrategyParams =
      object.updateQuoteStrategyParams !== undefined &&
      object.updateQuoteStrategyParams !== null
        ? UpdateQuoteStrategyParams.fromJSON(object.updateQuoteStrategyParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateQuoteStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.quoteStrategyId !== undefined &&
      (obj.quoteStrategyId = (
        message.quoteStrategyId || Long.UZERO
      ).toString());
    message.updateQuoteStrategyParams !== undefined &&
      (obj.updateQuoteStrategyParams = message.updateQuoteStrategyParams
        ? UpdateQuoteStrategyParams.toJSON(message.updateQuoteStrategyParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateQuoteStrategy>
  ): MsgUpdateQuoteStrategy {
    const message = { ...baseMsgUpdateQuoteStrategy } as MsgUpdateQuoteStrategy;
    message.creator = object.creator ?? "";
    message.quoteStrategyId =
      object.quoteStrategyId !== undefined && object.quoteStrategyId !== null
        ? Long.fromValue(object.quoteStrategyId)
        : Long.UZERO;
    message.updateQuoteStrategyParams =
      object.updateQuoteStrategyParams !== undefined &&
      object.updateQuoteStrategyParams !== null
        ? UpdateQuoteStrategyParams.fromPartial(
            object.updateQuoteStrategyParams
          )
        : undefined;
    return message;
  },
};

const baseMsgUpdateQuoteStrategyResponse: object = {};

export const MsgUpdateQuoteStrategyResponse = {
  encode(
    message: MsgUpdateQuoteStrategyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoteStrategy !== undefined) {
      QuoteStrategy.encode(
        message.quoteStrategy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateQuoteStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateQuoteStrategyResponse,
    } as MsgUpdateQuoteStrategyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoteStrategy = QuoteStrategy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateQuoteStrategyResponse {
    const message = {
      ...baseMsgUpdateQuoteStrategyResponse,
    } as MsgUpdateQuoteStrategyResponse;
    message.quoteStrategy =
      object.quoteStrategy !== undefined && object.quoteStrategy !== null
        ? QuoteStrategy.fromJSON(object.quoteStrategy)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateQuoteStrategyResponse): unknown {
    const obj: any = {};
    message.quoteStrategy !== undefined &&
      (obj.quoteStrategy = message.quoteStrategy
        ? QuoteStrategy.toJSON(message.quoteStrategy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateQuoteStrategyResponse>
  ): MsgUpdateQuoteStrategyResponse {
    const message = {
      ...baseMsgUpdateQuoteStrategyResponse,
    } as MsgUpdateQuoteStrategyResponse;
    message.quoteStrategy =
      object.quoteStrategy !== undefined && object.quoteStrategy !== null
        ? QuoteStrategy.fromPartial(object.quoteStrategy)
        : undefined;
    return message;
  },
};

const baseMsgDeleteQuoteStrategy: object = {
  creator: "",
  quoteStrategyId: Long.UZERO,
};

export const MsgDeleteQuoteStrategy = {
  encode(
    message: MsgDeleteQuoteStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.quoteStrategyId.isZero()) {
      writer.uint32(16).uint64(message.quoteStrategyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteQuoteStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteQuoteStrategy } as MsgDeleteQuoteStrategy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.quoteStrategyId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteQuoteStrategy {
    const message = { ...baseMsgDeleteQuoteStrategy } as MsgDeleteQuoteStrategy;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.quoteStrategyId =
      object.quoteStrategyId !== undefined && object.quoteStrategyId !== null
        ? Long.fromString(object.quoteStrategyId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgDeleteQuoteStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.quoteStrategyId !== undefined &&
      (obj.quoteStrategyId = (
        message.quoteStrategyId || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteQuoteStrategy>
  ): MsgDeleteQuoteStrategy {
    const message = { ...baseMsgDeleteQuoteStrategy } as MsgDeleteQuoteStrategy;
    message.creator = object.creator ?? "";
    message.quoteStrategyId =
      object.quoteStrategyId !== undefined && object.quoteStrategyId !== null
        ? Long.fromValue(object.quoteStrategyId)
        : Long.UZERO;
    return message;
  },
};

const baseMsgDeleteQuoteStrategyResponse: object = {};

export const MsgDeleteQuoteStrategyResponse = {
  encode(
    _: MsgDeleteQuoteStrategyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteQuoteStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteQuoteStrategyResponse,
    } as MsgDeleteQuoteStrategyResponse;
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

  fromJSON(_: any): MsgDeleteQuoteStrategyResponse {
    const message = {
      ...baseMsgDeleteQuoteStrategyResponse,
    } as MsgDeleteQuoteStrategyResponse;
    return message;
  },

  toJSON(_: MsgDeleteQuoteStrategyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteQuoteStrategyResponse>
  ): MsgDeleteQuoteStrategyResponse {
    const message = {
      ...baseMsgDeleteQuoteStrategyResponse,
    } as MsgDeleteQuoteStrategyResponse;
    return message;
  },
};

const baseMsgCreateUserVault: object = {
  creator: "",
  name: "",
  description: "",
  depositAmount: "",
  profitShare: "",
  depositFee: "",
  withdrawFee: "",
};

export const MsgCreateUserVault = {
  encode(
    message: MsgCreateUserVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.depositAmount !== "") {
      writer.uint32(34).string(message.depositAmount);
    }
    if (message.profitShare !== "") {
      writer.uint32(42).string(message.profitShare);
    }
    if (message.depositFee !== "") {
      writer.uint32(50).string(message.depositFee);
    }
    if (message.withdrawFee !== "") {
      writer.uint32(58).string(message.withdrawFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateUserVault } as MsgCreateUserVault;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.depositAmount = reader.string();
          break;
        case 5:
          message.profitShare = reader.string();
          break;
        case 6:
          message.depositFee = reader.string();
          break;
        case 7:
          message.withdrawFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUserVault {
    const message = { ...baseMsgCreateUserVault } as MsgCreateUserVault;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.depositAmount =
      object.depositAmount !== undefined && object.depositAmount !== null
        ? String(object.depositAmount)
        : "";
    message.profitShare =
      object.profitShare !== undefined && object.profitShare !== null
        ? String(object.profitShare)
        : "";
    message.depositFee =
      object.depositFee !== undefined && object.depositFee !== null
        ? String(object.depositFee)
        : "";
    message.withdrawFee =
      object.withdrawFee !== undefined && object.withdrawFee !== null
        ? String(object.withdrawFee)
        : "";
    return message;
  },

  toJSON(message: MsgCreateUserVault): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount);
    message.profitShare !== undefined &&
      (obj.profitShare = message.profitShare);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawFee !== undefined &&
      (obj.withdrawFee = message.withdrawFee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateUserVault>): MsgCreateUserVault {
    const message = { ...baseMsgCreateUserVault } as MsgCreateUserVault;
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.depositAmount = object.depositAmount ?? "";
    message.profitShare = object.profitShare ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawFee = object.withdrawFee ?? "";
    return message;
  },
};

const baseMsgCreateUserVaultResponse: object = {};

export const MsgCreateUserVaultResponse = {
  encode(
    message: MsgCreateUserVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userVault !== undefined) {
      UserVault.encode(message.userVault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateUserVaultResponse,
    } as MsgCreateUserVaultResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userVault = UserVault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUserVaultResponse {
    const message = {
      ...baseMsgCreateUserVaultResponse,
    } as MsgCreateUserVaultResponse;
    message.userVault =
      object.userVault !== undefined && object.userVault !== null
        ? UserVault.fromJSON(object.userVault)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreateUserVaultResponse): unknown {
    const obj: any = {};
    message.userVault !== undefined &&
      (obj.userVault = message.userVault
        ? UserVault.toJSON(message.userVault)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateUserVaultResponse>
  ): MsgCreateUserVaultResponse {
    const message = {
      ...baseMsgCreateUserVaultResponse,
    } as MsgCreateUserVaultResponse;
    message.userVault =
      object.userVault !== undefined && object.userVault !== null
        ? UserVault.fromPartial(object.userVault)
        : undefined;
    return message;
  },
};

const baseMsgCloseUserVault: object = { creator: "", id: Long.UZERO };

export const MsgCloseUserVault = {
  encode(
    message: MsgCloseUserVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseUserVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseUserVault } as MsgCloseUserVault;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseUserVault {
    const message = { ...baseMsgCloseUserVault } as MsgCloseUserVault;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgCloseUserVault): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseUserVault>): MsgCloseUserVault {
    const message = { ...baseMsgCloseUserVault } as MsgCloseUserVault;
    message.creator = object.creator ?? "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

const baseMsgCloseUserVaultResponse: object = {};

export const MsgCloseUserVaultResponse = {
  encode(
    _: MsgCloseUserVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCloseUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCloseUserVaultResponse,
    } as MsgCloseUserVaultResponse;
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

  fromJSON(_: any): MsgCloseUserVaultResponse {
    const message = {
      ...baseMsgCloseUserVaultResponse,
    } as MsgCloseUserVaultResponse;
    return message;
  },

  toJSON(_: MsgCloseUserVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCloseUserVaultResponse>
  ): MsgCloseUserVaultResponse {
    const message = {
      ...baseMsgCloseUserVaultResponse,
    } as MsgCloseUserVaultResponse;
    return message;
  },
};

const baseMsgUpdateUserVault: object = { creator: "", id: Long.UZERO };

export const MsgUpdateUserVault = {
  encode(
    message: MsgUpdateUserVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.updateUserVaultParams !== undefined) {
      UpdateUserVaultParams.encode(
        message.updateUserVaultParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateUserVault } as MsgUpdateUserVault;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.updateUserVaultParams = UpdateUserVaultParams.decode(
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

  fromJSON(object: any): MsgUpdateUserVault {
    const message = { ...baseMsgUpdateUserVault } as MsgUpdateUserVault;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.updateUserVaultParams =
      object.updateUserVaultParams !== undefined &&
      object.updateUserVaultParams !== null
        ? UpdateUserVaultParams.fromJSON(object.updateUserVaultParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateUserVault): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.updateUserVaultParams !== undefined &&
      (obj.updateUserVaultParams = message.updateUserVaultParams
        ? UpdateUserVaultParams.toJSON(message.updateUserVaultParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateUserVault>): MsgUpdateUserVault {
    const message = { ...baseMsgUpdateUserVault } as MsgUpdateUserVault;
    message.creator = object.creator ?? "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.updateUserVaultParams =
      object.updateUserVaultParams !== undefined &&
      object.updateUserVaultParams !== null
        ? UpdateUserVaultParams.fromPartial(object.updateUserVaultParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdateUserVaultResponse: object = {};

export const MsgUpdateUserVaultResponse = {
  encode(
    _: MsgUpdateUserVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateUserVaultResponse,
    } as MsgUpdateUserVaultResponse;
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

  fromJSON(_: any): MsgUpdateUserVaultResponse {
    const message = {
      ...baseMsgUpdateUserVaultResponse,
    } as MsgUpdateUserVaultResponse;
    return message;
  },

  toJSON(_: MsgUpdateUserVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateUserVaultResponse>
  ): MsgUpdateUserVaultResponse {
    const message = {
      ...baseMsgUpdateUserVaultResponse,
    } as MsgUpdateUserVaultResponse;
    return message;
  },
};

const baseMsgReleaseUserVaultWithdrawal: object = {
  creator: "",
  vaultId: Long.UZERO,
  processId: Long.UZERO,
};

export const MsgReleaseUserVaultWithdrawal = {
  encode(
    message: MsgReleaseUserVaultWithdrawal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.vaultId.isZero()) {
      writer.uint32(16).uint64(message.vaultId);
    }
    if (!message.processId.isZero()) {
      writer.uint32(24).uint64(message.processId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgReleaseUserVaultWithdrawal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgReleaseUserVaultWithdrawal,
    } as MsgReleaseUserVaultWithdrawal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.vaultId = reader.uint64() as Long;
          break;
        case 3:
          message.processId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReleaseUserVaultWithdrawal {
    const message = {
      ...baseMsgReleaseUserVaultWithdrawal,
    } as MsgReleaseUserVaultWithdrawal;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromString(object.vaultId)
        : Long.UZERO;
    message.processId =
      object.processId !== undefined && object.processId !== null
        ? Long.fromString(object.processId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgReleaseUserVaultWithdrawal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.vaultId !== undefined &&
      (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.processId !== undefined &&
      (obj.processId = (message.processId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgReleaseUserVaultWithdrawal>
  ): MsgReleaseUserVaultWithdrawal {
    const message = {
      ...baseMsgReleaseUserVaultWithdrawal,
    } as MsgReleaseUserVaultWithdrawal;
    message.creator = object.creator ?? "";
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromValue(object.vaultId)
        : Long.UZERO;
    message.processId =
      object.processId !== undefined && object.processId !== null
        ? Long.fromValue(object.processId)
        : Long.UZERO;
    return message;
  },
};

const baseMsgReleaseUserVaultWithdrawalResponse: object = { error: "" };

export const MsgReleaseUserVaultWithdrawalResponse = {
  encode(
    message: MsgReleaseUserVaultWithdrawalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgReleaseUserVaultWithdrawalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgReleaseUserVaultWithdrawalResponse,
    } as MsgReleaseUserVaultWithdrawalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReleaseUserVaultWithdrawalResponse {
    const message = {
      ...baseMsgReleaseUserVaultWithdrawalResponse,
    } as MsgReleaseUserVaultWithdrawalResponse;
    message.error =
      object.error !== undefined && object.error !== null
        ? String(object.error)
        : "";
    return message;
  },

  toJSON(message: MsgReleaseUserVaultWithdrawalResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgReleaseUserVaultWithdrawalResponse>
  ): MsgReleaseUserVaultWithdrawalResponse {
    const message = {
      ...baseMsgReleaseUserVaultWithdrawalResponse,
    } as MsgReleaseUserVaultWithdrawalResponse;
    message.error = object.error ?? "";
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
  /** * perps pool ** // */
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
  RegisterToPool(
    request: MsgRegisterToPool
  ): Promise<MsgRegisterToPoolResponse>;
  DeregisterFromPool(
    request: MsgDeregisterFromPool
  ): Promise<MsgDeregisterFromPoolResponse>;
  DepositToPool(request: MsgDepositToPool): Promise<MsgDepositToPoolResponse>;
  WithdrawFromPool(
    request: MsgWithdrawFromPool
  ): Promise<MsgWithdrawFromPoolResponse>;
  UpdateMarketConfig(
    request: MsgUpdateMarketConfig
  ): Promise<MsgUpdateMarketConfigResponse>;
  /** * quote strategies ** // */
  CreateQuoteStrategy(
    request: MsgCreateQuoteStrategy
  ): Promise<MsgCreateQuoteStrategyResponse>;
  UpdateQuoteStrategy(
    request: MsgUpdateQuoteStrategy
  ): Promise<MsgUpdateQuoteStrategyResponse>;
  DeleteQuoteStrategy(
    request: MsgDeleteQuoteStrategy
  ): Promise<MsgDeleteQuoteStrategyResponse>;
  /** * user vaults ** // */
  CreateUserVault(
    request: MsgCreateUserVault
  ): Promise<MsgCreateUserVaultResponse>;
  CloseUserVault(
    request: MsgCloseUserVault
  ): Promise<MsgCloseUserVaultResponse>;
  UpdateUserVault(
    request: MsgUpdateUserVault
  ): Promise<MsgUpdateUserVaultResponse>;
  ReleaseUserVaultWithdrawal(
    request: MsgReleaseUserVaultWithdrawal
  ): Promise<MsgReleaseUserVaultWithdrawalResponse>;
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
    this.CreatePool = this.CreatePool.bind(this);
    this.UpdatePool = this.UpdatePool.bind(this);
    this.RegisterToPool = this.RegisterToPool.bind(this);
    this.DeregisterFromPool = this.DeregisterFromPool.bind(this);
    this.DepositToPool = this.DepositToPool.bind(this);
    this.WithdrawFromPool = this.WithdrawFromPool.bind(this);
    this.UpdateMarketConfig = this.UpdateMarketConfig.bind(this);
    this.CreateQuoteStrategy = this.CreateQuoteStrategy.bind(this);
    this.UpdateQuoteStrategy = this.UpdateQuoteStrategy.bind(this);
    this.DeleteQuoteStrategy = this.DeleteQuoteStrategy.bind(this);
    this.CreateUserVault = this.CreateUserVault.bind(this);
    this.CloseUserVault = this.CloseUserVault.bind(this);
    this.UpdateUserVault = this.UpdateUserVault.bind(this);
    this.ReleaseUserVaultWithdrawal =
      this.ReleaseUserVaultWithdrawal.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "CreatePool",
      data
    );
    return promise.then((data) =>
      MsgCreatePoolResponse.decode(new _m0.Reader(data))
    );
  }

  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "UpdatePool",
      data
    );
    return promise.then((data) =>
      MsgUpdatePoolResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterToPool(
    request: MsgRegisterToPool
  ): Promise<MsgRegisterToPoolResponse> {
    const data = MsgRegisterToPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "RegisterToPool",
      data
    );
    return promise.then((data) =>
      MsgRegisterToPoolResponse.decode(new _m0.Reader(data))
    );
  }

  DeregisterFromPool(
    request: MsgDeregisterFromPool
  ): Promise<MsgDeregisterFromPoolResponse> {
    const data = MsgDeregisterFromPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "DeregisterFromPool",
      data
    );
    return promise.then((data) =>
      MsgDeregisterFromPoolResponse.decode(new _m0.Reader(data))
    );
  }

  DepositToPool(request: MsgDepositToPool): Promise<MsgDepositToPoolResponse> {
    const data = MsgDepositToPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "DepositToPool",
      data
    );
    return promise.then((data) =>
      MsgDepositToPoolResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawFromPool(
    request: MsgWithdrawFromPool
  ): Promise<MsgWithdrawFromPoolResponse> {
    const data = MsgWithdrawFromPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "WithdrawFromPool",
      data
    );
    return promise.then((data) =>
      MsgWithdrawFromPoolResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateMarketConfig(
    request: MsgUpdateMarketConfig
  ): Promise<MsgUpdateMarketConfigResponse> {
    const data = MsgUpdateMarketConfig.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "UpdateMarketConfig",
      data
    );
    return promise.then((data) =>
      MsgUpdateMarketConfigResponse.decode(new _m0.Reader(data))
    );
  }

  CreateQuoteStrategy(
    request: MsgCreateQuoteStrategy
  ): Promise<MsgCreateQuoteStrategyResponse> {
    const data = MsgCreateQuoteStrategy.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "CreateQuoteStrategy",
      data
    );
    return promise.then((data) =>
      MsgCreateQuoteStrategyResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateQuoteStrategy(
    request: MsgUpdateQuoteStrategy
  ): Promise<MsgUpdateQuoteStrategyResponse> {
    const data = MsgUpdateQuoteStrategy.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "UpdateQuoteStrategy",
      data
    );
    return promise.then((data) =>
      MsgUpdateQuoteStrategyResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteQuoteStrategy(
    request: MsgDeleteQuoteStrategy
  ): Promise<MsgDeleteQuoteStrategyResponse> {
    const data = MsgDeleteQuoteStrategy.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "DeleteQuoteStrategy",
      data
    );
    return promise.then((data) =>
      MsgDeleteQuoteStrategyResponse.decode(new _m0.Reader(data))
    );
  }

  CreateUserVault(
    request: MsgCreateUserVault
  ): Promise<MsgCreateUserVaultResponse> {
    const data = MsgCreateUserVault.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "CreateUserVault",
      data
    );
    return promise.then((data) =>
      MsgCreateUserVaultResponse.decode(new _m0.Reader(data))
    );
  }

  CloseUserVault(
    request: MsgCloseUserVault
  ): Promise<MsgCloseUserVaultResponse> {
    const data = MsgCloseUserVault.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "CloseUserVault",
      data
    );
    return promise.then((data) =>
      MsgCloseUserVaultResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateUserVault(
    request: MsgUpdateUserVault
  ): Promise<MsgUpdateUserVaultResponse> {
    const data = MsgUpdateUserVault.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "UpdateUserVault",
      data
    );
    return promise.then((data) =>
      MsgUpdateUserVaultResponse.decode(new _m0.Reader(data))
    );
  }

  ReleaseUserVaultWithdrawal(
    request: MsgReleaseUserVaultWithdrawal
  ): Promise<MsgReleaseUserVaultWithdrawalResponse> {
    const data = MsgReleaseUserVaultWithdrawal.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
      "ReleaseUserVaultWithdrawal",
      data
    );
    return promise.then((data) =>
      MsgReleaseUserVaultWithdrawalResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Msg",
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
