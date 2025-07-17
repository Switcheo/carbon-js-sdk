/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { MarketConfig } from "./market";
import { Pool } from "./pool";
import { QuoteStrategy } from "./quote";
import { UserVault } from "./user_vault";

export const protobufPackage = "Switcheo.carbon.perpspool";

export interface PoolEvent {
  pool?: Pool;
  type: string;
}

export interface RegisterToPoolEvent {
  poolId: Long;
  marketId: string;
}

export interface DeregisterFromPoolEvent {
  poolId: Long;
  marketId: string;
}

export interface SetMarketConfigEvent {
  marketConfig?: MarketConfig;
}

export interface UpdateMarketLiquidityUsageMultiplierEvent {
  marketId: string;
  multiplier: string;
}

export interface DepositToVaultEvent {
  poolId: Long;
  denom: string;
  amount: string;
  shareDenom: string;
  shareAmount: string;
  initialShareAmountBurnt: string;
  depositor: string;
  vaultFeeDenom: string;
  vaultFeeAmount: string;
  commissionFeeDenom: string;
  commissionFeeAmount: string;
  vaultType: Long;
}

export interface WithdrawFromVaultEvent {
  poolId: Long;
  denom: string;
  amount: string;
  shareDenom: string;
  shareAmount: string;
  withdrawer: string;
  vaultFeeDenom: string;
  vaultFeeAmount: string;
  commissionFeeDenom: string;
  commissionFeeAmount: string;
  vaultType: Long;
}

export interface UserVaultWithdrawalPendingEvent {
  vaultId: Long;
  address: string;
  sharesAmount: string;
  processId: Long;
  requestTime?: Date;
}

export interface UserVaultWithdrawalReleasedEvent {
  vaultId: Long;
  processId: Long;
  address: string;
  sharesDenom: string;
  sharesAmount: string;
  receivedDenom: string;
  receivedAmount: string;
  requestTime?: Date;
  completionTime?: Date;
  error: string;
}

export interface UserVaultEvent {
  vault?: UserVault;
}

export interface UserVaultClosedEvent {
  id: Long;
}

export interface SetQuoteStrategyEvent {
  quoteStrategy?: QuoteStrategy;
}

function createBasePoolEvent(): PoolEvent {
  return { pool: undefined, type: "" };
}

export const PoolEvent = {
  encode(message: PoolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = Pool.decode(reader, reader.uint32());
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

  fromJSON(object: any): PoolEvent {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: PoolEvent): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<PoolEvent>): PoolEvent {
    return PoolEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PoolEvent>): PoolEvent {
    const message = createBasePoolEvent();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseRegisterToPoolEvent(): RegisterToPoolEvent {
  return { poolId: Long.UZERO, marketId: "" };
}

export const RegisterToPoolEvent = {
  encode(message: RegisterToPoolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterToPoolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterToPoolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
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

  fromJSON(object: any): RegisterToPoolEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: RegisterToPoolEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<RegisterToPoolEvent>): RegisterToPoolEvent {
    return RegisterToPoolEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterToPoolEvent>): RegisterToPoolEvent {
    const message = createBaseRegisterToPoolEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseDeregisterFromPoolEvent(): DeregisterFromPoolEvent {
  return { poolId: Long.UZERO, marketId: "" };
}

export const DeregisterFromPoolEvent = {
  encode(message: DeregisterFromPoolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterFromPoolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeregisterFromPoolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
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

  fromJSON(object: any): DeregisterFromPoolEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: DeregisterFromPoolEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<DeregisterFromPoolEvent>): DeregisterFromPoolEvent {
    return DeregisterFromPoolEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeregisterFromPoolEvent>): DeregisterFromPoolEvent {
    const message = createBaseDeregisterFromPoolEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseSetMarketConfigEvent(): SetMarketConfigEvent {
  return { marketConfig: undefined };
}

export const SetMarketConfigEvent = {
  encode(message: SetMarketConfigEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketConfig !== undefined) {
      MarketConfig.encode(message.marketConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMarketConfigEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMarketConfigEvent();
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

  fromJSON(object: any): SetMarketConfigEvent {
    return { marketConfig: isSet(object.marketConfig) ? MarketConfig.fromJSON(object.marketConfig) : undefined };
  },

  toJSON(message: SetMarketConfigEvent): unknown {
    const obj: any = {};
    message.marketConfig !== undefined &&
      (obj.marketConfig = message.marketConfig ? MarketConfig.toJSON(message.marketConfig) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SetMarketConfigEvent>): SetMarketConfigEvent {
    return SetMarketConfigEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetMarketConfigEvent>): SetMarketConfigEvent {
    const message = createBaseSetMarketConfigEvent();
    message.marketConfig = (object.marketConfig !== undefined && object.marketConfig !== null)
      ? MarketConfig.fromPartial(object.marketConfig)
      : undefined;
    return message;
  },
};

function createBaseUpdateMarketLiquidityUsageMultiplierEvent(): UpdateMarketLiquidityUsageMultiplierEvent {
  return { marketId: "", multiplier: "" };
}

export const UpdateMarketLiquidityUsageMultiplierEvent = {
  encode(message: UpdateMarketLiquidityUsageMultiplierEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.multiplier !== "") {
      writer.uint32(18).string(message.multiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMarketLiquidityUsageMultiplierEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMarketLiquidityUsageMultiplierEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.multiplier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateMarketLiquidityUsageMultiplierEvent {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      multiplier: isSet(object.multiplier) ? String(object.multiplier) : "",
    };
  },

  toJSON(message: UpdateMarketLiquidityUsageMultiplierEvent): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },

  create(base?: DeepPartial<UpdateMarketLiquidityUsageMultiplierEvent>): UpdateMarketLiquidityUsageMultiplierEvent {
    return UpdateMarketLiquidityUsageMultiplierEvent.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<UpdateMarketLiquidityUsageMultiplierEvent>,
  ): UpdateMarketLiquidityUsageMultiplierEvent {
    const message = createBaseUpdateMarketLiquidityUsageMultiplierEvent();
    message.marketId = object.marketId ?? "";
    message.multiplier = object.multiplier ?? "";
    return message;
  },
};

function createBaseDepositToVaultEvent(): DepositToVaultEvent {
  return {
    poolId: Long.UZERO,
    denom: "",
    amount: "",
    shareDenom: "",
    shareAmount: "",
    initialShareAmountBurnt: "",
    depositor: "",
    vaultFeeDenom: "",
    vaultFeeAmount: "",
    commissionFeeDenom: "",
    commissionFeeAmount: "",
    vaultType: Long.UZERO,
  };
}

export const DepositToVaultEvent = {
  encode(message: DepositToVaultEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.shareDenom !== "") {
      writer.uint32(34).string(message.shareDenom);
    }
    if (message.shareAmount !== "") {
      writer.uint32(42).string(message.shareAmount);
    }
    if (message.initialShareAmountBurnt !== "") {
      writer.uint32(50).string(message.initialShareAmountBurnt);
    }
    if (message.depositor !== "") {
      writer.uint32(58).string(message.depositor);
    }
    if (message.vaultFeeDenom !== "") {
      writer.uint32(66).string(message.vaultFeeDenom);
    }
    if (message.vaultFeeAmount !== "") {
      writer.uint32(74).string(message.vaultFeeAmount);
    }
    if (message.commissionFeeDenom !== "") {
      writer.uint32(82).string(message.commissionFeeDenom);
    }
    if (message.commissionFeeAmount !== "") {
      writer.uint32(90).string(message.commissionFeeAmount);
    }
    if (!message.vaultType.isZero()) {
      writer.uint32(96).uint64(message.vaultType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositToVaultEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositToVaultEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
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

          message.shareDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.shareAmount = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.initialShareAmountBurnt = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.depositor = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.vaultFeeDenom = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.vaultFeeAmount = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.commissionFeeDenom = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.commissionFeeAmount = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.vaultType = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DepositToVaultEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      shareDenom: isSet(object.shareDenom) ? String(object.shareDenom) : "",
      shareAmount: isSet(object.shareAmount) ? String(object.shareAmount) : "",
      initialShareAmountBurnt: isSet(object.initialShareAmountBurnt) ? String(object.initialShareAmountBurnt) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      vaultFeeDenom: isSet(object.vaultFeeDenom) ? String(object.vaultFeeDenom) : "",
      vaultFeeAmount: isSet(object.vaultFeeAmount) ? String(object.vaultFeeAmount) : "",
      commissionFeeDenom: isSet(object.commissionFeeDenom) ? String(object.commissionFeeDenom) : "",
      commissionFeeAmount: isSet(object.commissionFeeAmount) ? String(object.commissionFeeAmount) : "",
      vaultType: isSet(object.vaultType) ? Long.fromValue(object.vaultType) : Long.UZERO,
    };
  },

  toJSON(message: DepositToVaultEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined && (obj.shareAmount = message.shareAmount);
    message.initialShareAmountBurnt !== undefined && (obj.initialShareAmountBurnt = message.initialShareAmountBurnt);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.vaultFeeDenom !== undefined && (obj.vaultFeeDenom = message.vaultFeeDenom);
    message.vaultFeeAmount !== undefined && (obj.vaultFeeAmount = message.vaultFeeAmount);
    message.commissionFeeDenom !== undefined && (obj.commissionFeeDenom = message.commissionFeeDenom);
    message.commissionFeeAmount !== undefined && (obj.commissionFeeAmount = message.commissionFeeAmount);
    message.vaultType !== undefined && (obj.vaultType = (message.vaultType || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<DepositToVaultEvent>): DepositToVaultEvent {
    return DepositToVaultEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DepositToVaultEvent>): DepositToVaultEvent {
    const message = createBaseDepositToVaultEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.initialShareAmountBurnt = object.initialShareAmountBurnt ?? "";
    message.depositor = object.depositor ?? "";
    message.vaultFeeDenom = object.vaultFeeDenom ?? "";
    message.vaultFeeAmount = object.vaultFeeAmount ?? "";
    message.commissionFeeDenom = object.commissionFeeDenom ?? "";
    message.commissionFeeAmount = object.commissionFeeAmount ?? "";
    message.vaultType = (object.vaultType !== undefined && object.vaultType !== null)
      ? Long.fromValue(object.vaultType)
      : Long.UZERO;
    return message;
  },
};

function createBaseWithdrawFromVaultEvent(): WithdrawFromVaultEvent {
  return {
    poolId: Long.UZERO,
    denom: "",
    amount: "",
    shareDenom: "",
    shareAmount: "",
    withdrawer: "",
    vaultFeeDenom: "",
    vaultFeeAmount: "",
    commissionFeeDenom: "",
    commissionFeeAmount: "",
    vaultType: Long.UZERO,
  };
}

export const WithdrawFromVaultEvent = {
  encode(message: WithdrawFromVaultEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.shareDenom !== "") {
      writer.uint32(34).string(message.shareDenom);
    }
    if (message.shareAmount !== "") {
      writer.uint32(42).string(message.shareAmount);
    }
    if (message.withdrawer !== "") {
      writer.uint32(50).string(message.withdrawer);
    }
    if (message.vaultFeeDenom !== "") {
      writer.uint32(58).string(message.vaultFeeDenom);
    }
    if (message.vaultFeeAmount !== "") {
      writer.uint32(66).string(message.vaultFeeAmount);
    }
    if (message.commissionFeeDenom !== "") {
      writer.uint32(74).string(message.commissionFeeDenom);
    }
    if (message.commissionFeeAmount !== "") {
      writer.uint32(82).string(message.commissionFeeAmount);
    }
    if (!message.vaultType.isZero()) {
      writer.uint32(88).uint64(message.vaultType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawFromVaultEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawFromVaultEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
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

          message.shareDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.shareAmount = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.withdrawer = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.vaultFeeDenom = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.vaultFeeAmount = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.commissionFeeDenom = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.commissionFeeAmount = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.vaultType = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithdrawFromVaultEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      shareDenom: isSet(object.shareDenom) ? String(object.shareDenom) : "",
      shareAmount: isSet(object.shareAmount) ? String(object.shareAmount) : "",
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      vaultFeeDenom: isSet(object.vaultFeeDenom) ? String(object.vaultFeeDenom) : "",
      vaultFeeAmount: isSet(object.vaultFeeAmount) ? String(object.vaultFeeAmount) : "",
      commissionFeeDenom: isSet(object.commissionFeeDenom) ? String(object.commissionFeeDenom) : "",
      commissionFeeAmount: isSet(object.commissionFeeAmount) ? String(object.commissionFeeAmount) : "",
      vaultType: isSet(object.vaultType) ? Long.fromValue(object.vaultType) : Long.UZERO,
    };
  },

  toJSON(message: WithdrawFromVaultEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined && (obj.shareAmount = message.shareAmount);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.vaultFeeDenom !== undefined && (obj.vaultFeeDenom = message.vaultFeeDenom);
    message.vaultFeeAmount !== undefined && (obj.vaultFeeAmount = message.vaultFeeAmount);
    message.commissionFeeDenom !== undefined && (obj.commissionFeeDenom = message.commissionFeeDenom);
    message.commissionFeeAmount !== undefined && (obj.commissionFeeAmount = message.commissionFeeAmount);
    message.vaultType !== undefined && (obj.vaultType = (message.vaultType || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<WithdrawFromVaultEvent>): WithdrawFromVaultEvent {
    return WithdrawFromVaultEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WithdrawFromVaultEvent>): WithdrawFromVaultEvent {
    const message = createBaseWithdrawFromVaultEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.withdrawer = object.withdrawer ?? "";
    message.vaultFeeDenom = object.vaultFeeDenom ?? "";
    message.vaultFeeAmount = object.vaultFeeAmount ?? "";
    message.commissionFeeDenom = object.commissionFeeDenom ?? "";
    message.commissionFeeAmount = object.commissionFeeAmount ?? "";
    message.vaultType = (object.vaultType !== undefined && object.vaultType !== null)
      ? Long.fromValue(object.vaultType)
      : Long.UZERO;
    return message;
  },
};

function createBaseUserVaultWithdrawalPendingEvent(): UserVaultWithdrawalPendingEvent {
  return { vaultId: Long.UZERO, address: "", sharesAmount: "", processId: Long.UZERO, requestTime: undefined };
}

export const UserVaultWithdrawalPendingEvent = {
  encode(message: UserVaultWithdrawalPendingEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.vaultId.isZero()) {
      writer.uint32(8).uint64(message.vaultId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.sharesAmount !== "") {
      writer.uint32(26).string(message.sharesAmount);
    }
    if (!message.processId.isZero()) {
      writer.uint32(32).uint64(message.processId);
    }
    if (message.requestTime !== undefined) {
      Timestamp.encode(toTimestamp(message.requestTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVaultWithdrawalPendingEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserVaultWithdrawalPendingEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.vaultId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sharesAmount = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.processId = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.requestTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserVaultWithdrawalPendingEvent {
    return {
      vaultId: isSet(object.vaultId) ? Long.fromValue(object.vaultId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      sharesAmount: isSet(object.sharesAmount) ? String(object.sharesAmount) : "",
      processId: isSet(object.processId) ? Long.fromValue(object.processId) : Long.UZERO,
      requestTime: isSet(object.requestTime) ? fromJsonTimestamp(object.requestTime) : undefined,
    };
  },

  toJSON(message: UserVaultWithdrawalPendingEvent): unknown {
    const obj: any = {};
    message.vaultId !== undefined && (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.sharesAmount !== undefined && (obj.sharesAmount = message.sharesAmount);
    message.processId !== undefined && (obj.processId = (message.processId || Long.UZERO).toString());
    message.requestTime !== undefined && (obj.requestTime = message.requestTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<UserVaultWithdrawalPendingEvent>): UserVaultWithdrawalPendingEvent {
    return UserVaultWithdrawalPendingEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserVaultWithdrawalPendingEvent>): UserVaultWithdrawalPendingEvent {
    const message = createBaseUserVaultWithdrawalPendingEvent();
    message.vaultId = (object.vaultId !== undefined && object.vaultId !== null)
      ? Long.fromValue(object.vaultId)
      : Long.UZERO;
    message.address = object.address ?? "";
    message.sharesAmount = object.sharesAmount ?? "";
    message.processId = (object.processId !== undefined && object.processId !== null)
      ? Long.fromValue(object.processId)
      : Long.UZERO;
    message.requestTime = object.requestTime ?? undefined;
    return message;
  },
};

function createBaseUserVaultWithdrawalReleasedEvent(): UserVaultWithdrawalReleasedEvent {
  return {
    vaultId: Long.UZERO,
    processId: Long.UZERO,
    address: "",
    sharesDenom: "",
    sharesAmount: "",
    receivedDenom: "",
    receivedAmount: "",
    requestTime: undefined,
    completionTime: undefined,
    error: "",
  };
}

export const UserVaultWithdrawalReleasedEvent = {
  encode(message: UserVaultWithdrawalReleasedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.vaultId.isZero()) {
      writer.uint32(8).uint64(message.vaultId);
    }
    if (!message.processId.isZero()) {
      writer.uint32(16).uint64(message.processId);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.sharesDenom !== "") {
      writer.uint32(34).string(message.sharesDenom);
    }
    if (message.sharesAmount !== "") {
      writer.uint32(42).string(message.sharesAmount);
    }
    if (message.receivedDenom !== "") {
      writer.uint32(50).string(message.receivedDenom);
    }
    if (message.receivedAmount !== "") {
      writer.uint32(58).string(message.receivedAmount);
    }
    if (message.requestTime !== undefined) {
      Timestamp.encode(toTimestamp(message.requestTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(82).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVaultWithdrawalReleasedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserVaultWithdrawalReleasedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.vaultId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.processId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sharesDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sharesAmount = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.receivedDenom = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.receivedAmount = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.requestTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
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

  fromJSON(object: any): UserVaultWithdrawalReleasedEvent {
    return {
      vaultId: isSet(object.vaultId) ? Long.fromValue(object.vaultId) : Long.UZERO,
      processId: isSet(object.processId) ? Long.fromValue(object.processId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      sharesDenom: isSet(object.sharesDenom) ? String(object.sharesDenom) : "",
      sharesAmount: isSet(object.sharesAmount) ? String(object.sharesAmount) : "",
      receivedDenom: isSet(object.receivedDenom) ? String(object.receivedDenom) : "",
      receivedAmount: isSet(object.receivedAmount) ? String(object.receivedAmount) : "",
      requestTime: isSet(object.requestTime) ? fromJsonTimestamp(object.requestTime) : undefined,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: UserVaultWithdrawalReleasedEvent): unknown {
    const obj: any = {};
    message.vaultId !== undefined && (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.processId !== undefined && (obj.processId = (message.processId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.sharesDenom !== undefined && (obj.sharesDenom = message.sharesDenom);
    message.sharesAmount !== undefined && (obj.sharesAmount = message.sharesAmount);
    message.receivedDenom !== undefined && (obj.receivedDenom = message.receivedDenom);
    message.receivedAmount !== undefined && (obj.receivedAmount = message.receivedAmount);
    message.requestTime !== undefined && (obj.requestTime = message.requestTime.toISOString());
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  create(base?: DeepPartial<UserVaultWithdrawalReleasedEvent>): UserVaultWithdrawalReleasedEvent {
    return UserVaultWithdrawalReleasedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserVaultWithdrawalReleasedEvent>): UserVaultWithdrawalReleasedEvent {
    const message = createBaseUserVaultWithdrawalReleasedEvent();
    message.vaultId = (object.vaultId !== undefined && object.vaultId !== null)
      ? Long.fromValue(object.vaultId)
      : Long.UZERO;
    message.processId = (object.processId !== undefined && object.processId !== null)
      ? Long.fromValue(object.processId)
      : Long.UZERO;
    message.address = object.address ?? "";
    message.sharesDenom = object.sharesDenom ?? "";
    message.sharesAmount = object.sharesAmount ?? "";
    message.receivedDenom = object.receivedDenom ?? "";
    message.receivedAmount = object.receivedAmount ?? "";
    message.requestTime = object.requestTime ?? undefined;
    message.completionTime = object.completionTime ?? undefined;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseUserVaultEvent(): UserVaultEvent {
  return { vault: undefined };
}

export const UserVaultEvent = {
  encode(message: UserVaultEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vault !== undefined) {
      UserVault.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVaultEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserVaultEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vault = UserVault.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserVaultEvent {
    return { vault: isSet(object.vault) ? UserVault.fromJSON(object.vault) : undefined };
  },

  toJSON(message: UserVaultEvent): unknown {
    const obj: any = {};
    message.vault !== undefined && (obj.vault = message.vault ? UserVault.toJSON(message.vault) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UserVaultEvent>): UserVaultEvent {
    return UserVaultEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserVaultEvent>): UserVaultEvent {
    const message = createBaseUserVaultEvent();
    message.vault = (object.vault !== undefined && object.vault !== null)
      ? UserVault.fromPartial(object.vault)
      : undefined;
    return message;
  },
};

function createBaseUserVaultClosedEvent(): UserVaultClosedEvent {
  return { id: Long.UZERO };
}

export const UserVaultClosedEvent = {
  encode(message: UserVaultClosedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVaultClosedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserVaultClosedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): UserVaultClosedEvent {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: UserVaultClosedEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<UserVaultClosedEvent>): UserVaultClosedEvent {
    return UserVaultClosedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserVaultClosedEvent>): UserVaultClosedEvent {
    const message = createBaseUserVaultClosedEvent();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseSetQuoteStrategyEvent(): SetQuoteStrategyEvent {
  return { quoteStrategy: undefined };
}

export const SetQuoteStrategyEvent = {
  encode(message: SetQuoteStrategyEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quoteStrategy !== undefined) {
      QuoteStrategy.encode(message.quoteStrategy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetQuoteStrategyEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetQuoteStrategyEvent();
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

  fromJSON(object: any): SetQuoteStrategyEvent {
    return { quoteStrategy: isSet(object.quoteStrategy) ? QuoteStrategy.fromJSON(object.quoteStrategy) : undefined };
  },

  toJSON(message: SetQuoteStrategyEvent): unknown {
    const obj: any = {};
    message.quoteStrategy !== undefined &&
      (obj.quoteStrategy = message.quoteStrategy ? QuoteStrategy.toJSON(message.quoteStrategy) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SetQuoteStrategyEvent>): SetQuoteStrategyEvent {
    return SetQuoteStrategyEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetQuoteStrategyEvent>): SetQuoteStrategyEvent {
    const message = createBaseSetQuoteStrategyEvent();
    message.quoteStrategy = (object.quoteStrategy !== undefined && object.quoteStrategy !== null)
      ? QuoteStrategy.fromPartial(object.quoteStrategy)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
