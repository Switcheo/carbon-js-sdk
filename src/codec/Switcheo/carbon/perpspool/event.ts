/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool } from "./pool";
import { MarketConfig } from "./market";
import { UserVault } from "./user_vault";
import { QuoteStrategy } from "./quote";
import { Timestamp } from "../../../google/protobuf/timestamp";

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

const basePoolEvent: object = { type: "" };

export const PoolEvent = {
  encode(
    message: PoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolEvent } as PoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
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

  fromJSON(object: any): PoolEvent {
    const message = { ...basePoolEvent } as PoolEvent;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromJSON(object.pool)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: PoolEvent): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolEvent>): PoolEvent {
    const message = { ...basePoolEvent } as PoolEvent;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseRegisterToPoolEvent: object = { poolId: Long.UZERO, marketId: "" };

export const RegisterToPoolEvent = {
  encode(
    message: RegisterToPoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterToPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterToPoolEvent } as RegisterToPoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
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

  fromJSON(object: any): RegisterToPoolEvent {
    const message = { ...baseRegisterToPoolEvent } as RegisterToPoolEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: RegisterToPoolEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterToPoolEvent>): RegisterToPoolEvent {
    const message = { ...baseRegisterToPoolEvent } as RegisterToPoolEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseDeregisterFromPoolEvent: object = {
  poolId: Long.UZERO,
  marketId: "",
};

export const DeregisterFromPoolEvent = {
  encode(
    message: DeregisterFromPoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeregisterFromPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeregisterFromPoolEvent,
    } as DeregisterFromPoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
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

  fromJSON(object: any): DeregisterFromPoolEvent {
    const message = {
      ...baseDeregisterFromPoolEvent,
    } as DeregisterFromPoolEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: DeregisterFromPoolEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeregisterFromPoolEvent>
  ): DeregisterFromPoolEvent {
    const message = {
      ...baseDeregisterFromPoolEvent,
    } as DeregisterFromPoolEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseSetMarketConfigEvent: object = {};

export const SetMarketConfigEvent = {
  encode(
    message: SetMarketConfigEvent,
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
  ): SetMarketConfigEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetMarketConfigEvent } as SetMarketConfigEvent;
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

  fromJSON(object: any): SetMarketConfigEvent {
    const message = { ...baseSetMarketConfigEvent } as SetMarketConfigEvent;
    message.marketConfig =
      object.marketConfig !== undefined && object.marketConfig !== null
        ? MarketConfig.fromJSON(object.marketConfig)
        : undefined;
    return message;
  },

  toJSON(message: SetMarketConfigEvent): unknown {
    const obj: any = {};
    message.marketConfig !== undefined &&
      (obj.marketConfig = message.marketConfig
        ? MarketConfig.toJSON(message.marketConfig)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SetMarketConfigEvent>): SetMarketConfigEvent {
    const message = { ...baseSetMarketConfigEvent } as SetMarketConfigEvent;
    message.marketConfig =
      object.marketConfig !== undefined && object.marketConfig !== null
        ? MarketConfig.fromPartial(object.marketConfig)
        : undefined;
    return message;
  },
};

const baseUpdateMarketLiquidityUsageMultiplierEvent: object = {
  marketId: "",
  multiplier: "",
};

export const UpdateMarketLiquidityUsageMultiplierEvent = {
  encode(
    message: UpdateMarketLiquidityUsageMultiplierEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.multiplier !== "") {
      writer.uint32(18).string(message.multiplier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateMarketLiquidityUsageMultiplierEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateMarketLiquidityUsageMultiplierEvent,
    } as UpdateMarketLiquidityUsageMultiplierEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.multiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMarketLiquidityUsageMultiplierEvent {
    const message = {
      ...baseUpdateMarketLiquidityUsageMultiplierEvent,
    } as UpdateMarketLiquidityUsageMultiplierEvent;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.multiplier =
      object.multiplier !== undefined && object.multiplier !== null
        ? String(object.multiplier)
        : "";
    return message;
  },

  toJSON(message: UpdateMarketLiquidityUsageMultiplierEvent): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateMarketLiquidityUsageMultiplierEvent>
  ): UpdateMarketLiquidityUsageMultiplierEvent {
    const message = {
      ...baseUpdateMarketLiquidityUsageMultiplierEvent,
    } as UpdateMarketLiquidityUsageMultiplierEvent;
    message.marketId = object.marketId ?? "";
    message.multiplier = object.multiplier ?? "";
    return message;
  },
};

const baseDepositToVaultEvent: object = {
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

export const DepositToVaultEvent = {
  encode(
    message: DepositToVaultEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositToVaultEvent } as DepositToVaultEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.shareDenom = reader.string();
          break;
        case 5:
          message.shareAmount = reader.string();
          break;
        case 6:
          message.initialShareAmountBurnt = reader.string();
          break;
        case 7:
          message.depositor = reader.string();
          break;
        case 8:
          message.vaultFeeDenom = reader.string();
          break;
        case 9:
          message.vaultFeeAmount = reader.string();
          break;
        case 10:
          message.commissionFeeDenom = reader.string();
          break;
        case 11:
          message.commissionFeeAmount = reader.string();
          break;
        case 12:
          message.vaultType = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositToVaultEvent {
    const message = { ...baseDepositToVaultEvent } as DepositToVaultEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.shareDenom =
      object.shareDenom !== undefined && object.shareDenom !== null
        ? String(object.shareDenom)
        : "";
    message.shareAmount =
      object.shareAmount !== undefined && object.shareAmount !== null
        ? String(object.shareAmount)
        : "";
    message.initialShareAmountBurnt =
      object.initialShareAmountBurnt !== undefined &&
      object.initialShareAmountBurnt !== null
        ? String(object.initialShareAmountBurnt)
        : "";
    message.depositor =
      object.depositor !== undefined && object.depositor !== null
        ? String(object.depositor)
        : "";
    message.vaultFeeDenom =
      object.vaultFeeDenom !== undefined && object.vaultFeeDenom !== null
        ? String(object.vaultFeeDenom)
        : "";
    message.vaultFeeAmount =
      object.vaultFeeAmount !== undefined && object.vaultFeeAmount !== null
        ? String(object.vaultFeeAmount)
        : "";
    message.commissionFeeDenom =
      object.commissionFeeDenom !== undefined &&
      object.commissionFeeDenom !== null
        ? String(object.commissionFeeDenom)
        : "";
    message.commissionFeeAmount =
      object.commissionFeeAmount !== undefined &&
      object.commissionFeeAmount !== null
        ? String(object.commissionFeeAmount)
        : "";
    message.vaultType =
      object.vaultType !== undefined && object.vaultType !== null
        ? Long.fromString(object.vaultType)
        : Long.UZERO;
    return message;
  },

  toJSON(message: DepositToVaultEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.initialShareAmountBurnt !== undefined &&
      (obj.initialShareAmountBurnt = message.initialShareAmountBurnt);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.vaultFeeDenom !== undefined &&
      (obj.vaultFeeDenom = message.vaultFeeDenom);
    message.vaultFeeAmount !== undefined &&
      (obj.vaultFeeAmount = message.vaultFeeAmount);
    message.commissionFeeDenom !== undefined &&
      (obj.commissionFeeDenom = message.commissionFeeDenom);
    message.commissionFeeAmount !== undefined &&
      (obj.commissionFeeAmount = message.commissionFeeAmount);
    message.vaultType !== undefined &&
      (obj.vaultType = (message.vaultType || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DepositToVaultEvent>): DepositToVaultEvent {
    const message = { ...baseDepositToVaultEvent } as DepositToVaultEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
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
    message.vaultType =
      object.vaultType !== undefined && object.vaultType !== null
        ? Long.fromValue(object.vaultType)
        : Long.UZERO;
    return message;
  },
};

const baseWithdrawFromVaultEvent: object = {
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

export const WithdrawFromVaultEvent = {
  encode(
    message: WithdrawFromVaultEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WithdrawFromVaultEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawFromVaultEvent } as WithdrawFromVaultEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.shareDenom = reader.string();
          break;
        case 5:
          message.shareAmount = reader.string();
          break;
        case 6:
          message.withdrawer = reader.string();
          break;
        case 7:
          message.vaultFeeDenom = reader.string();
          break;
        case 8:
          message.vaultFeeAmount = reader.string();
          break;
        case 9:
          message.commissionFeeDenom = reader.string();
          break;
        case 10:
          message.commissionFeeAmount = reader.string();
          break;
        case 11:
          message.vaultType = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawFromVaultEvent {
    const message = { ...baseWithdrawFromVaultEvent } as WithdrawFromVaultEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.shareDenom =
      object.shareDenom !== undefined && object.shareDenom !== null
        ? String(object.shareDenom)
        : "";
    message.shareAmount =
      object.shareAmount !== undefined && object.shareAmount !== null
        ? String(object.shareAmount)
        : "";
    message.withdrawer =
      object.withdrawer !== undefined && object.withdrawer !== null
        ? String(object.withdrawer)
        : "";
    message.vaultFeeDenom =
      object.vaultFeeDenom !== undefined && object.vaultFeeDenom !== null
        ? String(object.vaultFeeDenom)
        : "";
    message.vaultFeeAmount =
      object.vaultFeeAmount !== undefined && object.vaultFeeAmount !== null
        ? String(object.vaultFeeAmount)
        : "";
    message.commissionFeeDenom =
      object.commissionFeeDenom !== undefined &&
      object.commissionFeeDenom !== null
        ? String(object.commissionFeeDenom)
        : "";
    message.commissionFeeAmount =
      object.commissionFeeAmount !== undefined &&
      object.commissionFeeAmount !== null
        ? String(object.commissionFeeAmount)
        : "";
    message.vaultType =
      object.vaultType !== undefined && object.vaultType !== null
        ? Long.fromString(object.vaultType)
        : Long.UZERO;
    return message;
  },

  toJSON(message: WithdrawFromVaultEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.vaultFeeDenom !== undefined &&
      (obj.vaultFeeDenom = message.vaultFeeDenom);
    message.vaultFeeAmount !== undefined &&
      (obj.vaultFeeAmount = message.vaultFeeAmount);
    message.commissionFeeDenom !== undefined &&
      (obj.commissionFeeDenom = message.commissionFeeDenom);
    message.commissionFeeAmount !== undefined &&
      (obj.commissionFeeAmount = message.commissionFeeAmount);
    message.vaultType !== undefined &&
      (obj.vaultType = (message.vaultType || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawFromVaultEvent>
  ): WithdrawFromVaultEvent {
    const message = { ...baseWithdrawFromVaultEvent } as WithdrawFromVaultEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
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
    message.vaultType =
      object.vaultType !== undefined && object.vaultType !== null
        ? Long.fromValue(object.vaultType)
        : Long.UZERO;
    return message;
  },
};

const baseUserVaultWithdrawalPendingEvent: object = {
  vaultId: Long.UZERO,
  address: "",
  sharesAmount: "",
  processId: Long.UZERO,
};

export const UserVaultWithdrawalPendingEvent = {
  encode(
    message: UserVaultWithdrawalPendingEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.requestTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserVaultWithdrawalPendingEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUserVaultWithdrawalPendingEvent,
    } as UserVaultWithdrawalPendingEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.sharesAmount = reader.string();
          break;
        case 4:
          message.processId = reader.uint64() as Long;
          break;
        case 5:
          message.requestTime = fromTimestamp(
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

  fromJSON(object: any): UserVaultWithdrawalPendingEvent {
    const message = {
      ...baseUserVaultWithdrawalPendingEvent,
    } as UserVaultWithdrawalPendingEvent;
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromString(object.vaultId)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.sharesAmount =
      object.sharesAmount !== undefined && object.sharesAmount !== null
        ? String(object.sharesAmount)
        : "";
    message.processId =
      object.processId !== undefined && object.processId !== null
        ? Long.fromString(object.processId)
        : Long.UZERO;
    message.requestTime =
      object.requestTime !== undefined && object.requestTime !== null
        ? fromJsonTimestamp(object.requestTime)
        : undefined;
    return message;
  },

  toJSON(message: UserVaultWithdrawalPendingEvent): unknown {
    const obj: any = {};
    message.vaultId !== undefined &&
      (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.sharesAmount !== undefined &&
      (obj.sharesAmount = message.sharesAmount);
    message.processId !== undefined &&
      (obj.processId = (message.processId || Long.UZERO).toString());
    message.requestTime !== undefined &&
      (obj.requestTime = message.requestTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<UserVaultWithdrawalPendingEvent>
  ): UserVaultWithdrawalPendingEvent {
    const message = {
      ...baseUserVaultWithdrawalPendingEvent,
    } as UserVaultWithdrawalPendingEvent;
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromValue(object.vaultId)
        : Long.UZERO;
    message.address = object.address ?? "";
    message.sharesAmount = object.sharesAmount ?? "";
    message.processId =
      object.processId !== undefined && object.processId !== null
        ? Long.fromValue(object.processId)
        : Long.UZERO;
    message.requestTime = object.requestTime ?? undefined;
    return message;
  },
};

const baseUserVaultWithdrawalReleasedEvent: object = {
  vaultId: Long.UZERO,
  processId: Long.UZERO,
  address: "",
  sharesDenom: "",
  sharesAmount: "",
  receivedDenom: "",
  receivedAmount: "",
  error: "",
};

export const UserVaultWithdrawalReleasedEvent = {
  encode(
    message: UserVaultWithdrawalReleasedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.requestTime),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(82).string(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserVaultWithdrawalReleasedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUserVaultWithdrawalReleasedEvent,
    } as UserVaultWithdrawalReleasedEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultId = reader.uint64() as Long;
          break;
        case 2:
          message.processId = reader.uint64() as Long;
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.sharesDenom = reader.string();
          break;
        case 5:
          message.sharesAmount = reader.string();
          break;
        case 6:
          message.receivedDenom = reader.string();
          break;
        case 7:
          message.receivedAmount = reader.string();
          break;
        case 8:
          message.requestTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserVaultWithdrawalReleasedEvent {
    const message = {
      ...baseUserVaultWithdrawalReleasedEvent,
    } as UserVaultWithdrawalReleasedEvent;
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromString(object.vaultId)
        : Long.UZERO;
    message.processId =
      object.processId !== undefined && object.processId !== null
        ? Long.fromString(object.processId)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.sharesDenom =
      object.sharesDenom !== undefined && object.sharesDenom !== null
        ? String(object.sharesDenom)
        : "";
    message.sharesAmount =
      object.sharesAmount !== undefined && object.sharesAmount !== null
        ? String(object.sharesAmount)
        : "";
    message.receivedDenom =
      object.receivedDenom !== undefined && object.receivedDenom !== null
        ? String(object.receivedDenom)
        : "";
    message.receivedAmount =
      object.receivedAmount !== undefined && object.receivedAmount !== null
        ? String(object.receivedAmount)
        : "";
    message.requestTime =
      object.requestTime !== undefined && object.requestTime !== null
        ? fromJsonTimestamp(object.requestTime)
        : undefined;
    message.completionTime =
      object.completionTime !== undefined && object.completionTime !== null
        ? fromJsonTimestamp(object.completionTime)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? String(object.error)
        : "";
    return message;
  },

  toJSON(message: UserVaultWithdrawalReleasedEvent): unknown {
    const obj: any = {};
    message.vaultId !== undefined &&
      (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.processId !== undefined &&
      (obj.processId = (message.processId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.sharesDenom !== undefined &&
      (obj.sharesDenom = message.sharesDenom);
    message.sharesAmount !== undefined &&
      (obj.sharesAmount = message.sharesAmount);
    message.receivedDenom !== undefined &&
      (obj.receivedDenom = message.receivedDenom);
    message.receivedAmount !== undefined &&
      (obj.receivedAmount = message.receivedAmount);
    message.requestTime !== undefined &&
      (obj.requestTime = message.requestTime.toISOString());
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UserVaultWithdrawalReleasedEvent>
  ): UserVaultWithdrawalReleasedEvent {
    const message = {
      ...baseUserVaultWithdrawalReleasedEvent,
    } as UserVaultWithdrawalReleasedEvent;
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromValue(object.vaultId)
        : Long.UZERO;
    message.processId =
      object.processId !== undefined && object.processId !== null
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

const baseUserVaultEvent: object = {};

export const UserVaultEvent = {
  encode(
    message: UserVaultEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vault !== undefined) {
      UserVault.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVaultEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserVaultEvent } as UserVaultEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault = UserVault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserVaultEvent {
    const message = { ...baseUserVaultEvent } as UserVaultEvent;
    message.vault =
      object.vault !== undefined && object.vault !== null
        ? UserVault.fromJSON(object.vault)
        : undefined;
    return message;
  },

  toJSON(message: UserVaultEvent): unknown {
    const obj: any = {};
    message.vault !== undefined &&
      (obj.vault = message.vault ? UserVault.toJSON(message.vault) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserVaultEvent>): UserVaultEvent {
    const message = { ...baseUserVaultEvent } as UserVaultEvent;
    message.vault =
      object.vault !== undefined && object.vault !== null
        ? UserVault.fromPartial(object.vault)
        : undefined;
    return message;
  },
};

const baseUserVaultClosedEvent: object = { id: Long.UZERO };

export const UserVaultClosedEvent = {
  encode(
    message: UserVaultClosedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserVaultClosedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserVaultClosedEvent } as UserVaultClosedEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserVaultClosedEvent {
    const message = { ...baseUserVaultClosedEvent } as UserVaultClosedEvent;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    return message;
  },

  toJSON(message: UserVaultClosedEvent): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<UserVaultClosedEvent>): UserVaultClosedEvent {
    const message = { ...baseUserVaultClosedEvent } as UserVaultClosedEvent;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

const baseSetQuoteStrategyEvent: object = {};

export const SetQuoteStrategyEvent = {
  encode(
    message: SetQuoteStrategyEvent,
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
  ): SetQuoteStrategyEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetQuoteStrategyEvent } as SetQuoteStrategyEvent;
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

  fromJSON(object: any): SetQuoteStrategyEvent {
    const message = { ...baseSetQuoteStrategyEvent } as SetQuoteStrategyEvent;
    message.quoteStrategy =
      object.quoteStrategy !== undefined && object.quoteStrategy !== null
        ? QuoteStrategy.fromJSON(object.quoteStrategy)
        : undefined;
    return message;
  },

  toJSON(message: SetQuoteStrategyEvent): unknown {
    const obj: any = {};
    message.quoteStrategy !== undefined &&
      (obj.quoteStrategy = message.quoteStrategy
        ? QuoteStrategy.toJSON(message.quoteStrategy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetQuoteStrategyEvent>
  ): SetQuoteStrategyEvent {
    const message = { ...baseSetQuoteStrategyEvent } as SetQuoteStrategyEvent;
    message.quoteStrategy =
      object.quoteStrategy !== undefined && object.quoteStrategy !== null
        ? QuoteStrategy.fromPartial(object.quoteStrategy)
        : undefined;
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
