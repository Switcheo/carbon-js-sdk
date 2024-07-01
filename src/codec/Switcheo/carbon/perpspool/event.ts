/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool } from "./pool";
import { MarketConfig } from "./market";

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

export interface DepositToPoolEvent {
  poolId: Long;
  denom: string;
  amount: string;
  shareDenom: string;
  shareAmount: string;
  initialShareAmountBurnt: string;
  depositor: string;
}

export interface WithdrawFromPoolEvent {
  poolId: Long;
  denom: string;
  amount: string;
  shareDenom: string;
  shareAmount: string;
  withdrawer: string;
}

export interface UpdateMarketLiquidityUsageMultiplierEvent {
  marketId: string;
  multiplier: string;
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

const baseDepositToPoolEvent: object = {
  poolId: Long.UZERO,
  denom: "",
  amount: "",
  shareDenom: "",
  shareAmount: "",
  initialShareAmountBurnt: "",
  depositor: "",
};

export const DepositToPoolEvent = {
  encode(
    message: DepositToPoolEvent,
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositToPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositToPoolEvent } as DepositToPoolEvent;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositToPoolEvent {
    const message = { ...baseDepositToPoolEvent } as DepositToPoolEvent;
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
    return message;
  },

  toJSON(message: DepositToPoolEvent): unknown {
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
    return obj;
  },

  fromPartial(object: DeepPartial<DepositToPoolEvent>): DepositToPoolEvent {
    const message = { ...baseDepositToPoolEvent } as DepositToPoolEvent;
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
    return message;
  },
};

const baseWithdrawFromPoolEvent: object = {
  poolId: Long.UZERO,
  denom: "",
  amount: "",
  shareDenom: "",
  shareAmount: "",
  withdrawer: "",
};

export const WithdrawFromPoolEvent = {
  encode(
    message: WithdrawFromPoolEvent,
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WithdrawFromPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawFromPoolEvent } as WithdrawFromPoolEvent;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawFromPoolEvent {
    const message = { ...baseWithdrawFromPoolEvent } as WithdrawFromPoolEvent;
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
    return message;
  },

  toJSON(message: WithdrawFromPoolEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawFromPoolEvent>
  ): WithdrawFromPoolEvent {
    const message = { ...baseWithdrawFromPoolEvent } as WithdrawFromPoolEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.withdrawer = object.withdrawer ?? "";
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
