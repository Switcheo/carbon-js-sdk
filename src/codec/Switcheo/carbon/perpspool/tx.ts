/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MarketConfig, UpdateMarketConfigParams } from "./market";
import { ParamsToUpdate } from "./params";
import { Pool, UpdatePoolParams } from "./pool";
import { Quote, QuoteStrategy, UpdateQuoteStrategyParams } from "./quote";
import { UpdateUserVaultParams, UserVault } from "./user_vault";

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

export interface MsgRegisterToPoolResponse {
}

export interface MsgDeregisterFromPool {
  creator: string;
  marketId: string;
}

export interface MsgDeregisterFromPoolResponse {
}

export interface MsgDepositToPool {
  creator: string;
  poolId: Long;
  /** the amount to deposit */
  depositAmount: string;
  /** min amount of share to receive */
  minShareAmount: string;
}

export interface MsgDepositToPoolResponse {
}

export interface MsgWithdrawFromPool {
  creator: string;
  poolId: Long;
  /** the amount of share to use for withdrawal */
  shareAmount: string;
  /** min amount to receive */
  minReceiveAmount: string;
}

export interface MsgWithdrawFromPoolResponse {
}

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

export interface MsgDeleteQuoteStrategyResponse {
}

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

export interface MsgCloseUserVaultResponse {
}

export interface MsgUpdateUserVault {
  creator: string;
  id: Long;
  updateUserVaultParams?: UpdateUserVaultParams;
}

export interface MsgUpdateUserVaultResponse {
}

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
export interface MsgUpdateParamsResponse {
}

function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    creator: "",
    name: "",
    depositDenom: "",
    supplyCap: "",
    depositFee: "",
    withdrawalFee: "",
    baseBorrowFeePerFundingInterval: "",
  };
}

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.depositDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.supplyCap = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.depositFee = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.withdrawalFee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.baseBorrowFeePerFundingInterval = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      supplyCap: isSet(object.supplyCap) ? String(object.supplyCap) : "",
      depositFee: isSet(object.depositFee) ? String(object.depositFee) : "",
      withdrawalFee: isSet(object.withdrawalFee) ? String(object.withdrawalFee) : "",
      baseBorrowFeePerFundingInterval: isSet(object.baseBorrowFeePerFundingInterval)
        ? String(object.baseBorrowFeePerFundingInterval)
        : "",
    };
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined && (obj.withdrawalFee = message.withdrawalFee);
    message.baseBorrowFeePerFundingInterval !== undefined &&
      (obj.baseBorrowFeePerFundingInterval = message.baseBorrowFeePerFundingInterval);
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePool>): MsgCreatePool {
    return MsgCreatePool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.depositDenom = object.depositDenom ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.baseBorrowFeePerFundingInterval = object.baseBorrowFeePerFundingInterval ?? "";
    return message;
  },
};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return { pool: undefined };
}

export const MsgCreatePoolResponse = {
  encode(message: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = Pool.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoolResponse {
    return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseMsgUpdatePool(): MsgUpdatePool {
  return { creator: "", poolId: Long.UZERO, updatePoolParams: undefined };
}

export const MsgUpdatePool = {
  encode(message: MsgUpdatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.updatePoolParams !== undefined) {
      UpdatePoolParams.encode(message.updatePoolParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePool();
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

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updatePoolParams = UpdatePoolParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      updatePoolParams: isSet(object.updatePoolParams) ? UpdatePoolParams.fromJSON(object.updatePoolParams) : undefined,
    };
  },

  toJSON(message: MsgUpdatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.updatePoolParams !== undefined &&
      (obj.updatePoolParams = message.updatePoolParams ? UpdatePoolParams.toJSON(message.updatePoolParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdatePool>): MsgUpdatePool {
    return MsgUpdatePool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdatePool>): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    message.creator = object.creator ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.updatePoolParams = (object.updatePoolParams !== undefined && object.updatePoolParams !== null)
      ? UpdatePoolParams.fromPartial(object.updatePoolParams)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
  return { pool: undefined };
}

export const MsgUpdatePoolResponse = {
  encode(message: MsgUpdatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = Pool.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePoolResponse {
    return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: MsgUpdatePoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseMsgRegisterToPool(): MsgRegisterToPool {
  return { creator: "", poolId: Long.UZERO, marketId: "", marketConfigParams: undefined };
}

export const MsgRegisterToPool = {
  encode(message: MsgRegisterToPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      UpdateMarketConfigParams.encode(message.marketConfigParams, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterToPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterToPool();
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

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.marketConfigParams = UpdateMarketConfigParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterToPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      marketConfigParams: isSet(object.marketConfigParams)
        ? UpdateMarketConfigParams.fromJSON(object.marketConfigParams)
        : undefined,
    };
  },

  toJSON(message: MsgRegisterToPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.marketConfigParams !== undefined && (obj.marketConfigParams = message.marketConfigParams
      ? UpdateMarketConfigParams.toJSON(message.marketConfigParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterToPool>): MsgRegisterToPool {
    return MsgRegisterToPool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRegisterToPool>): MsgRegisterToPool {
    const message = createBaseMsgRegisterToPool();
    message.creator = object.creator ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.marketId = object.marketId ?? "";
    message.marketConfigParams = (object.marketConfigParams !== undefined && object.marketConfigParams !== null)
      ? UpdateMarketConfigParams.fromPartial(object.marketConfigParams)
      : undefined;
    return message;
  },
};

function createBaseMsgRegisterToPoolResponse(): MsgRegisterToPoolResponse {
  return {};
}

export const MsgRegisterToPoolResponse = {
  encode(_: MsgRegisterToPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterToPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterToPoolResponse();
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

  fromJSON(_: any): MsgRegisterToPoolResponse {
    return {};
  },

  toJSON(_: MsgRegisterToPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterToPoolResponse>): MsgRegisterToPoolResponse {
    return MsgRegisterToPoolResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRegisterToPoolResponse>): MsgRegisterToPoolResponse {
    const message = createBaseMsgRegisterToPoolResponse();
    return message;
  },
};

function createBaseMsgDeregisterFromPool(): MsgDeregisterFromPool {
  return { creator: "", marketId: "" };
}

export const MsgDeregisterFromPool = {
  encode(message: MsgDeregisterFromPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterFromPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterFromPool();
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

          message.marketId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeregisterFromPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: MsgDeregisterFromPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<MsgDeregisterFromPool>): MsgDeregisterFromPool {
    return MsgDeregisterFromPool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeregisterFromPool>): MsgDeregisterFromPool {
    const message = createBaseMsgDeregisterFromPool();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseMsgDeregisterFromPoolResponse(): MsgDeregisterFromPoolResponse {
  return {};
}

export const MsgDeregisterFromPoolResponse = {
  encode(_: MsgDeregisterFromPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterFromPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterFromPoolResponse();
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

  fromJSON(_: any): MsgDeregisterFromPoolResponse {
    return {};
  },

  toJSON(_: MsgDeregisterFromPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeregisterFromPoolResponse>): MsgDeregisterFromPoolResponse {
    return MsgDeregisterFromPoolResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeregisterFromPoolResponse>): MsgDeregisterFromPoolResponse {
    const message = createBaseMsgDeregisterFromPoolResponse();
    return message;
  },
};

function createBaseMsgDepositToPool(): MsgDepositToPool {
  return { creator: "", poolId: Long.UZERO, depositAmount: "", minShareAmount: "" };
}

export const MsgDepositToPool = {
  encode(message: MsgDepositToPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositToPool();
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

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.depositAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minShareAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDepositToPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      depositAmount: isSet(object.depositAmount) ? String(object.depositAmount) : "",
      minShareAmount: isSet(object.minShareAmount) ? String(object.minShareAmount) : "",
    };
  },

  toJSON(message: MsgDepositToPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.depositAmount !== undefined && (obj.depositAmount = message.depositAmount);
    message.minShareAmount !== undefined && (obj.minShareAmount = message.minShareAmount);
    return obj;
  },

  create(base?: DeepPartial<MsgDepositToPool>): MsgDepositToPool {
    return MsgDepositToPool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDepositToPool>): MsgDepositToPool {
    const message = createBaseMsgDepositToPool();
    message.creator = object.creator ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.depositAmount = object.depositAmount ?? "";
    message.minShareAmount = object.minShareAmount ?? "";
    return message;
  },
};

function createBaseMsgDepositToPoolResponse(): MsgDepositToPoolResponse {
  return {};
}

export const MsgDepositToPoolResponse = {
  encode(_: MsgDepositToPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositToPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositToPoolResponse();
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

  fromJSON(_: any): MsgDepositToPoolResponse {
    return {};
  },

  toJSON(_: MsgDepositToPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDepositToPoolResponse>): MsgDepositToPoolResponse {
    return MsgDepositToPoolResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDepositToPoolResponse>): MsgDepositToPoolResponse {
    const message = createBaseMsgDepositToPoolResponse();
    return message;
  },
};

function createBaseMsgWithdrawFromPool(): MsgWithdrawFromPool {
  return { creator: "", poolId: Long.UZERO, shareAmount: "", minReceiveAmount: "" };
}

export const MsgWithdrawFromPool = {
  encode(message: MsgWithdrawFromPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromPool();
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

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.shareAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minReceiveAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawFromPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      shareAmount: isSet(object.shareAmount) ? String(object.shareAmount) : "",
      minReceiveAmount: isSet(object.minReceiveAmount) ? String(object.minReceiveAmount) : "",
    };
  },

  toJSON(message: MsgWithdrawFromPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.shareAmount !== undefined && (obj.shareAmount = message.shareAmount);
    message.minReceiveAmount !== undefined && (obj.minReceiveAmount = message.minReceiveAmount);
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawFromPool>): MsgWithdrawFromPool {
    return MsgWithdrawFromPool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgWithdrawFromPool>): MsgWithdrawFromPool {
    const message = createBaseMsgWithdrawFromPool();
    message.creator = object.creator ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.shareAmount = object.shareAmount ?? "";
    message.minReceiveAmount = object.minReceiveAmount ?? "";
    return message;
  },
};

function createBaseMsgWithdrawFromPoolResponse(): MsgWithdrawFromPoolResponse {
  return {};
}

export const MsgWithdrawFromPoolResponse = {
  encode(_: MsgWithdrawFromPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFromPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromPoolResponse();
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

  fromJSON(_: any): MsgWithdrawFromPoolResponse {
    return {};
  },

  toJSON(_: MsgWithdrawFromPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawFromPoolResponse>): MsgWithdrawFromPoolResponse {
    return MsgWithdrawFromPoolResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgWithdrawFromPoolResponse>): MsgWithdrawFromPoolResponse {
    const message = createBaseMsgWithdrawFromPoolResponse();
    return message;
  },
};

function createBaseMsgUpdateMarketConfig(): MsgUpdateMarketConfig {
  return { creator: "", marketId: "", updateMarketConfigParams: undefined };
}

export const MsgUpdateMarketConfig = {
  encode(message: MsgUpdateMarketConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.updateMarketConfigParams !== undefined) {
      UpdateMarketConfigParams.encode(message.updateMarketConfigParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMarketConfig();
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

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateMarketConfigParams = UpdateMarketConfigParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMarketConfig {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      updateMarketConfigParams: isSet(object.updateMarketConfigParams)
        ? UpdateMarketConfigParams.fromJSON(object.updateMarketConfigParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateMarketConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.updateMarketConfigParams !== undefined && (obj.updateMarketConfigParams = message.updateMarketConfigParams
      ? UpdateMarketConfigParams.toJSON(message.updateMarketConfigParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateMarketConfig>): MsgUpdateMarketConfig {
    return MsgUpdateMarketConfig.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateMarketConfig>): MsgUpdateMarketConfig {
    const message = createBaseMsgUpdateMarketConfig();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.updateMarketConfigParams =
      (object.updateMarketConfigParams !== undefined && object.updateMarketConfigParams !== null)
        ? UpdateMarketConfigParams.fromPartial(object.updateMarketConfigParams)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateMarketConfigResponse(): MsgUpdateMarketConfigResponse {
  return { marketConfig: undefined };
}

export const MsgUpdateMarketConfigResponse = {
  encode(message: MsgUpdateMarketConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketConfig !== undefined) {
      MarketConfig.encode(message.marketConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketConfigResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMarketConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketConfig = MarketConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMarketConfigResponse {
    return { marketConfig: isSet(object.marketConfig) ? MarketConfig.fromJSON(object.marketConfig) : undefined };
  },

  toJSON(message: MsgUpdateMarketConfigResponse): unknown {
    const obj: any = {};
    message.marketConfig !== undefined &&
      (obj.marketConfig = message.marketConfig ? MarketConfig.toJSON(message.marketConfig) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateMarketConfigResponse>): MsgUpdateMarketConfigResponse {
    return MsgUpdateMarketConfigResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateMarketConfigResponse>): MsgUpdateMarketConfigResponse {
    const message = createBaseMsgUpdateMarketConfigResponse();
    message.marketConfig = (object.marketConfig !== undefined && object.marketConfig !== null)
      ? MarketConfig.fromPartial(object.marketConfig)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateQuoteStrategy(): MsgCreateQuoteStrategy {
  return { creator: "", name: "", quoteShape: [] };
}

export const MsgCreateQuoteStrategy = {
  encode(message: MsgCreateQuoteStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateQuoteStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateQuoteStrategy();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quoteShape.push(Quote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateQuoteStrategy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      quoteShape: Array.isArray(object?.quoteShape) ? object.quoteShape.map((e: any) => Quote.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgCreateQuoteStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    if (message.quoteShape) {
      obj.quoteShape = message.quoteShape.map((e) => e ? Quote.toJSON(e) : undefined);
    } else {
      obj.quoteShape = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateQuoteStrategy>): MsgCreateQuoteStrategy {
    return MsgCreateQuoteStrategy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateQuoteStrategy>): MsgCreateQuoteStrategy {
    const message = createBaseMsgCreateQuoteStrategy();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.quoteShape = object.quoteShape?.map((e) => Quote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateQuoteStrategyResponse(): MsgCreateQuoteStrategyResponse {
  return { quoteStrategy: undefined };
}

export const MsgCreateQuoteStrategyResponse = {
  encode(message: MsgCreateQuoteStrategyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quoteStrategy !== undefined) {
      QuoteStrategy.encode(message.quoteStrategy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateQuoteStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateQuoteStrategyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quoteStrategy = QuoteStrategy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateQuoteStrategyResponse {
    return { quoteStrategy: isSet(object.quoteStrategy) ? QuoteStrategy.fromJSON(object.quoteStrategy) : undefined };
  },

  toJSON(message: MsgCreateQuoteStrategyResponse): unknown {
    const obj: any = {};
    message.quoteStrategy !== undefined &&
      (obj.quoteStrategy = message.quoteStrategy ? QuoteStrategy.toJSON(message.quoteStrategy) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateQuoteStrategyResponse>): MsgCreateQuoteStrategyResponse {
    return MsgCreateQuoteStrategyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateQuoteStrategyResponse>): MsgCreateQuoteStrategyResponse {
    const message = createBaseMsgCreateQuoteStrategyResponse();
    message.quoteStrategy = (object.quoteStrategy !== undefined && object.quoteStrategy !== null)
      ? QuoteStrategy.fromPartial(object.quoteStrategy)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateQuoteStrategy(): MsgUpdateQuoteStrategy {
  return { creator: "", quoteStrategyId: Long.UZERO, updateQuoteStrategyParams: undefined };
}

export const MsgUpdateQuoteStrategy = {
  encode(message: MsgUpdateQuoteStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.quoteStrategyId.isZero()) {
      writer.uint32(16).uint64(message.quoteStrategyId);
    }
    if (message.updateQuoteStrategyParams !== undefined) {
      UpdateQuoteStrategyParams.encode(message.updateQuoteStrategyParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateQuoteStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateQuoteStrategy();
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

          message.quoteStrategyId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateQuoteStrategyParams = UpdateQuoteStrategyParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateQuoteStrategy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      quoteStrategyId: isSet(object.quoteStrategyId) ? Long.fromValue(object.quoteStrategyId) : Long.UZERO,
      updateQuoteStrategyParams: isSet(object.updateQuoteStrategyParams)
        ? UpdateQuoteStrategyParams.fromJSON(object.updateQuoteStrategyParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateQuoteStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.quoteStrategyId !== undefined && (obj.quoteStrategyId = (message.quoteStrategyId || Long.UZERO).toString());
    message.updateQuoteStrategyParams !== undefined &&
      (obj.updateQuoteStrategyParams = message.updateQuoteStrategyParams
        ? UpdateQuoteStrategyParams.toJSON(message.updateQuoteStrategyParams)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateQuoteStrategy>): MsgUpdateQuoteStrategy {
    return MsgUpdateQuoteStrategy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateQuoteStrategy>): MsgUpdateQuoteStrategy {
    const message = createBaseMsgUpdateQuoteStrategy();
    message.creator = object.creator ?? "";
    message.quoteStrategyId = (object.quoteStrategyId !== undefined && object.quoteStrategyId !== null)
      ? Long.fromValue(object.quoteStrategyId)
      : Long.UZERO;
    message.updateQuoteStrategyParams =
      (object.updateQuoteStrategyParams !== undefined && object.updateQuoteStrategyParams !== null)
        ? UpdateQuoteStrategyParams.fromPartial(object.updateQuoteStrategyParams)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateQuoteStrategyResponse(): MsgUpdateQuoteStrategyResponse {
  return { quoteStrategy: undefined };
}

export const MsgUpdateQuoteStrategyResponse = {
  encode(message: MsgUpdateQuoteStrategyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quoteStrategy !== undefined) {
      QuoteStrategy.encode(message.quoteStrategy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateQuoteStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateQuoteStrategyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quoteStrategy = QuoteStrategy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateQuoteStrategyResponse {
    return { quoteStrategy: isSet(object.quoteStrategy) ? QuoteStrategy.fromJSON(object.quoteStrategy) : undefined };
  },

  toJSON(message: MsgUpdateQuoteStrategyResponse): unknown {
    const obj: any = {};
    message.quoteStrategy !== undefined &&
      (obj.quoteStrategy = message.quoteStrategy ? QuoteStrategy.toJSON(message.quoteStrategy) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateQuoteStrategyResponse>): MsgUpdateQuoteStrategyResponse {
    return MsgUpdateQuoteStrategyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateQuoteStrategyResponse>): MsgUpdateQuoteStrategyResponse {
    const message = createBaseMsgUpdateQuoteStrategyResponse();
    message.quoteStrategy = (object.quoteStrategy !== undefined && object.quoteStrategy !== null)
      ? QuoteStrategy.fromPartial(object.quoteStrategy)
      : undefined;
    return message;
  },
};

function createBaseMsgDeleteQuoteStrategy(): MsgDeleteQuoteStrategy {
  return { creator: "", quoteStrategyId: Long.UZERO };
}

export const MsgDeleteQuoteStrategy = {
  encode(message: MsgDeleteQuoteStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.quoteStrategyId.isZero()) {
      writer.uint32(16).uint64(message.quoteStrategyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteQuoteStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteQuoteStrategy();
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

          message.quoteStrategyId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteQuoteStrategy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      quoteStrategyId: isSet(object.quoteStrategyId) ? Long.fromValue(object.quoteStrategyId) : Long.UZERO,
    };
  },

  toJSON(message: MsgDeleteQuoteStrategy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.quoteStrategyId !== undefined && (obj.quoteStrategyId = (message.quoteStrategyId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgDeleteQuoteStrategy>): MsgDeleteQuoteStrategy {
    return MsgDeleteQuoteStrategy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeleteQuoteStrategy>): MsgDeleteQuoteStrategy {
    const message = createBaseMsgDeleteQuoteStrategy();
    message.creator = object.creator ?? "";
    message.quoteStrategyId = (object.quoteStrategyId !== undefined && object.quoteStrategyId !== null)
      ? Long.fromValue(object.quoteStrategyId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgDeleteQuoteStrategyResponse(): MsgDeleteQuoteStrategyResponse {
  return {};
}

export const MsgDeleteQuoteStrategyResponse = {
  encode(_: MsgDeleteQuoteStrategyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteQuoteStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteQuoteStrategyResponse();
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

  fromJSON(_: any): MsgDeleteQuoteStrategyResponse {
    return {};
  },

  toJSON(_: MsgDeleteQuoteStrategyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeleteQuoteStrategyResponse>): MsgDeleteQuoteStrategyResponse {
    return MsgDeleteQuoteStrategyResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeleteQuoteStrategyResponse>): MsgDeleteQuoteStrategyResponse {
    const message = createBaseMsgDeleteQuoteStrategyResponse();
    return message;
  },
};

function createBaseMsgCreateUserVault(): MsgCreateUserVault {
  return {
    creator: "",
    name: "",
    description: "",
    depositAmount: "",
    profitShare: "",
    depositFee: "",
    withdrawFee: "",
  };
}

export const MsgCreateUserVault = {
  encode(message: MsgCreateUserVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserVault();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.depositAmount = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.profitShare = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.depositFee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.withdrawFee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUserVault {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      depositAmount: isSet(object.depositAmount) ? String(object.depositAmount) : "",
      profitShare: isSet(object.profitShare) ? String(object.profitShare) : "",
      depositFee: isSet(object.depositFee) ? String(object.depositFee) : "",
      withdrawFee: isSet(object.withdrawFee) ? String(object.withdrawFee) : "",
    };
  },

  toJSON(message: MsgCreateUserVault): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.depositAmount !== undefined && (obj.depositAmount = message.depositAmount);
    message.profitShare !== undefined && (obj.profitShare = message.profitShare);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawFee !== undefined && (obj.withdrawFee = message.withdrawFee);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateUserVault>): MsgCreateUserVault {
    return MsgCreateUserVault.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateUserVault>): MsgCreateUserVault {
    const message = createBaseMsgCreateUserVault();
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

function createBaseMsgCreateUserVaultResponse(): MsgCreateUserVaultResponse {
  return { userVault: undefined };
}

export const MsgCreateUserVaultResponse = {
  encode(message: MsgCreateUserVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userVault !== undefined) {
      UserVault.encode(message.userVault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userVault = UserVault.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUserVaultResponse {
    return { userVault: isSet(object.userVault) ? UserVault.fromJSON(object.userVault) : undefined };
  },

  toJSON(message: MsgCreateUserVaultResponse): unknown {
    const obj: any = {};
    message.userVault !== undefined &&
      (obj.userVault = message.userVault ? UserVault.toJSON(message.userVault) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateUserVaultResponse>): MsgCreateUserVaultResponse {
    return MsgCreateUserVaultResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateUserVaultResponse>): MsgCreateUserVaultResponse {
    const message = createBaseMsgCreateUserVaultResponse();
    message.userVault = (object.userVault !== undefined && object.userVault !== null)
      ? UserVault.fromPartial(object.userVault)
      : undefined;
    return message;
  },
};

function createBaseMsgCloseUserVault(): MsgCloseUserVault {
  return { creator: "", id: Long.UZERO };
}

export const MsgCloseUserVault = {
  encode(message: MsgCloseUserVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseUserVault {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseUserVault();
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

          message.id = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCloseUserVault {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: MsgCloseUserVault): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgCloseUserVault>): MsgCloseUserVault {
    return MsgCloseUserVault.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCloseUserVault>): MsgCloseUserVault {
    const message = createBaseMsgCloseUserVault();
    message.creator = object.creator ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseMsgCloseUserVaultResponse(): MsgCloseUserVaultResponse {
  return {};
}

export const MsgCloseUserVaultResponse = {
  encode(_: MsgCloseUserVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseUserVaultResponse();
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

  fromJSON(_: any): MsgCloseUserVaultResponse {
    return {};
  },

  toJSON(_: MsgCloseUserVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCloseUserVaultResponse>): MsgCloseUserVaultResponse {
    return MsgCloseUserVaultResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCloseUserVaultResponse>): MsgCloseUserVaultResponse {
    const message = createBaseMsgCloseUserVaultResponse();
    return message;
  },
};

function createBaseMsgUpdateUserVault(): MsgUpdateUserVault {
  return { creator: "", id: Long.UZERO, updateUserVaultParams: undefined };
}

export const MsgUpdateUserVault = {
  encode(message: MsgUpdateUserVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.updateUserVaultParams !== undefined) {
      UpdateUserVaultParams.encode(message.updateUserVaultParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserVault {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserVault();
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

          message.id = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateUserVaultParams = UpdateUserVaultParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateUserVault {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      updateUserVaultParams: isSet(object.updateUserVaultParams)
        ? UpdateUserVaultParams.fromJSON(object.updateUserVaultParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateUserVault): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.updateUserVaultParams !== undefined && (obj.updateUserVaultParams = message.updateUserVaultParams
      ? UpdateUserVaultParams.toJSON(message.updateUserVaultParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateUserVault>): MsgUpdateUserVault {
    return MsgUpdateUserVault.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateUserVault>): MsgUpdateUserVault {
    const message = createBaseMsgUpdateUserVault();
    message.creator = object.creator ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.updateUserVaultParams =
      (object.updateUserVaultParams !== undefined && object.updateUserVaultParams !== null)
        ? UpdateUserVaultParams.fromPartial(object.updateUserVaultParams)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateUserVaultResponse(): MsgUpdateUserVaultResponse {
  return {};
}

export const MsgUpdateUserVaultResponse = {
  encode(_: MsgUpdateUserVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserVaultResponse();
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

  fromJSON(_: any): MsgUpdateUserVaultResponse {
    return {};
  },

  toJSON(_: MsgUpdateUserVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateUserVaultResponse>): MsgUpdateUserVaultResponse {
    return MsgUpdateUserVaultResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateUserVaultResponse>): MsgUpdateUserVaultResponse {
    const message = createBaseMsgUpdateUserVaultResponse();
    return message;
  },
};

function createBaseMsgReleaseUserVaultWithdrawal(): MsgReleaseUserVaultWithdrawal {
  return { creator: "", vaultId: Long.UZERO, processId: Long.UZERO };
}

export const MsgReleaseUserVaultWithdrawal = {
  encode(message: MsgReleaseUserVaultWithdrawal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReleaseUserVaultWithdrawal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReleaseUserVaultWithdrawal();
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

          message.vaultId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.processId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgReleaseUserVaultWithdrawal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      vaultId: isSet(object.vaultId) ? Long.fromValue(object.vaultId) : Long.UZERO,
      processId: isSet(object.processId) ? Long.fromValue(object.processId) : Long.UZERO,
    };
  },

  toJSON(message: MsgReleaseUserVaultWithdrawal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.vaultId !== undefined && (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.processId !== undefined && (obj.processId = (message.processId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgReleaseUserVaultWithdrawal>): MsgReleaseUserVaultWithdrawal {
    return MsgReleaseUserVaultWithdrawal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgReleaseUserVaultWithdrawal>): MsgReleaseUserVaultWithdrawal {
    const message = createBaseMsgReleaseUserVaultWithdrawal();
    message.creator = object.creator ?? "";
    message.vaultId = (object.vaultId !== undefined && object.vaultId !== null)
      ? Long.fromValue(object.vaultId)
      : Long.UZERO;
    message.processId = (object.processId !== undefined && object.processId !== null)
      ? Long.fromValue(object.processId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgReleaseUserVaultWithdrawalResponse(): MsgReleaseUserVaultWithdrawalResponse {
  return { error: "" };
}

export const MsgReleaseUserVaultWithdrawalResponse = {
  encode(message: MsgReleaseUserVaultWithdrawalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReleaseUserVaultWithdrawalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReleaseUserVaultWithdrawalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgReleaseUserVaultWithdrawalResponse {
    return { error: isSet(object.error) ? String(object.error) : "" };
  },

  toJSON(message: MsgReleaseUserVaultWithdrawalResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  create(base?: DeepPartial<MsgReleaseUserVaultWithdrawalResponse>): MsgReleaseUserVaultWithdrawalResponse {
    return MsgReleaseUserVaultWithdrawalResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgReleaseUserVaultWithdrawalResponse>): MsgReleaseUserVaultWithdrawalResponse {
    const message = createBaseMsgReleaseUserVaultWithdrawalResponse();
    message.error = object.error ?? "";
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
  /** * perps pool ** // */
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
  RegisterToPool(request: MsgRegisterToPool): Promise<MsgRegisterToPoolResponse>;
  DeregisterFromPool(request: MsgDeregisterFromPool): Promise<MsgDeregisterFromPoolResponse>;
  DepositToPool(request: MsgDepositToPool): Promise<MsgDepositToPoolResponse>;
  WithdrawFromPool(request: MsgWithdrawFromPool): Promise<MsgWithdrawFromPoolResponse>;
  UpdateMarketConfig(request: MsgUpdateMarketConfig): Promise<MsgUpdateMarketConfigResponse>;
  /** * quote strategies ** // */
  CreateQuoteStrategy(request: MsgCreateQuoteStrategy): Promise<MsgCreateQuoteStrategyResponse>;
  UpdateQuoteStrategy(request: MsgUpdateQuoteStrategy): Promise<MsgUpdateQuoteStrategyResponse>;
  DeleteQuoteStrategy(request: MsgDeleteQuoteStrategy): Promise<MsgDeleteQuoteStrategyResponse>;
  /** * user vaults ** // */
  CreateUserVault(request: MsgCreateUserVault): Promise<MsgCreateUserVaultResponse>;
  CloseUserVault(request: MsgCloseUserVault): Promise<MsgCloseUserVaultResponse>;
  UpdateUserVault(request: MsgUpdateUserVault): Promise<MsgUpdateUserVaultResponse>;
  ReleaseUserVaultWithdrawal(request: MsgReleaseUserVaultWithdrawal): Promise<MsgReleaseUserVaultWithdrawalResponse>;
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
    this.service = opts?.service || "Switcheo.carbon.perpspool.Msg";
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
    this.ReleaseUserVaultWithdrawal = this.ReleaseUserVaultWithdrawal.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePool", data);
    return promise.then((data) => MsgCreatePoolResponse.decode(_m0.Reader.create(data)));
  }

  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdatePool", data);
    return promise.then((data) => MsgUpdatePoolResponse.decode(_m0.Reader.create(data)));
  }

  RegisterToPool(request: MsgRegisterToPool): Promise<MsgRegisterToPoolResponse> {
    const data = MsgRegisterToPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterToPool", data);
    return promise.then((data) => MsgRegisterToPoolResponse.decode(_m0.Reader.create(data)));
  }

  DeregisterFromPool(request: MsgDeregisterFromPool): Promise<MsgDeregisterFromPoolResponse> {
    const data = MsgDeregisterFromPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeregisterFromPool", data);
    return promise.then((data) => MsgDeregisterFromPoolResponse.decode(_m0.Reader.create(data)));
  }

  DepositToPool(request: MsgDepositToPool): Promise<MsgDepositToPoolResponse> {
    const data = MsgDepositToPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "DepositToPool", data);
    return promise.then((data) => MsgDepositToPoolResponse.decode(_m0.Reader.create(data)));
  }

  WithdrawFromPool(request: MsgWithdrawFromPool): Promise<MsgWithdrawFromPoolResponse> {
    const data = MsgWithdrawFromPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "WithdrawFromPool", data);
    return promise.then((data) => MsgWithdrawFromPoolResponse.decode(_m0.Reader.create(data)));
  }

  UpdateMarketConfig(request: MsgUpdateMarketConfig): Promise<MsgUpdateMarketConfigResponse> {
    const data = MsgUpdateMarketConfig.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateMarketConfig", data);
    return promise.then((data) => MsgUpdateMarketConfigResponse.decode(_m0.Reader.create(data)));
  }

  CreateQuoteStrategy(request: MsgCreateQuoteStrategy): Promise<MsgCreateQuoteStrategyResponse> {
    const data = MsgCreateQuoteStrategy.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateQuoteStrategy", data);
    return promise.then((data) => MsgCreateQuoteStrategyResponse.decode(_m0.Reader.create(data)));
  }

  UpdateQuoteStrategy(request: MsgUpdateQuoteStrategy): Promise<MsgUpdateQuoteStrategyResponse> {
    const data = MsgUpdateQuoteStrategy.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateQuoteStrategy", data);
    return promise.then((data) => MsgUpdateQuoteStrategyResponse.decode(_m0.Reader.create(data)));
  }

  DeleteQuoteStrategy(request: MsgDeleteQuoteStrategy): Promise<MsgDeleteQuoteStrategyResponse> {
    const data = MsgDeleteQuoteStrategy.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteQuoteStrategy", data);
    return promise.then((data) => MsgDeleteQuoteStrategyResponse.decode(_m0.Reader.create(data)));
  }

  CreateUserVault(request: MsgCreateUserVault): Promise<MsgCreateUserVaultResponse> {
    const data = MsgCreateUserVault.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateUserVault", data);
    return promise.then((data) => MsgCreateUserVaultResponse.decode(_m0.Reader.create(data)));
  }

  CloseUserVault(request: MsgCloseUserVault): Promise<MsgCloseUserVaultResponse> {
    const data = MsgCloseUserVault.encode(request).finish();
    const promise = this.rpc.request(this.service, "CloseUserVault", data);
    return promise.then((data) => MsgCloseUserVaultResponse.decode(_m0.Reader.create(data)));
  }

  UpdateUserVault(request: MsgUpdateUserVault): Promise<MsgUpdateUserVaultResponse> {
    const data = MsgUpdateUserVault.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateUserVault", data);
    return promise.then((data) => MsgUpdateUserVaultResponse.decode(_m0.Reader.create(data)));
  }

  ReleaseUserVaultWithdrawal(request: MsgReleaseUserVaultWithdrawal): Promise<MsgReleaseUserVaultWithdrawalResponse> {
    const data = MsgReleaseUserVaultWithdrawal.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReleaseUserVaultWithdrawal", data);
    return promise.then((data) => MsgReleaseUserVaultWithdrawalResponse.decode(_m0.Reader.create(data)));
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
