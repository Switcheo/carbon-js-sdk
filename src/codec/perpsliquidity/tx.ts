/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PlPool, UpdatePlPoolParams } from "./pool";
import { UpdateMarketConfigParams, MarketConfig } from "./market";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

export interface MsgCreatePlPool {
  creator: string;
  /** name of pool */
  name: string;
  /** denom of the underlying token in the pool that is used to provide liquidity */
  depositDenom: string;
  /** symbol of the share token that represents any tokens in the pool 1-to-1 */
  shareTokenSymbol: string;
  /** the maximum amount that can be supplied into the pool */
  supplyCap: string;
  /** deposit fee to charge on a successful deposit to PLP in decimal */
  depositFee: string;
  /** withdrawal fee to charge on a successful withdrawal from PLP in decimal */
  withdrawalFee: string;
  /** borrow fee in decimal per time period to charge on use of liquidity in pool */
  borrowFee: string;
}

export interface MsgCreatePlPoolResponse {
  pool?: PlPool;
}

export interface MsgUpdatePlPool {
  creator: string;
  poolId: Long;
  updatePoolParams?: UpdatePlPoolParams;
}

export interface MsgUpdatePlPoolResponse {
  pool?: PlPool;
}

export interface MsgRegisterToPlPool {
  creator: string;
  poolId: Long;
  marketId: string;
  marketConfigParams?: UpdateMarketConfigParams;
}

export interface MsgRegisterToPlPoolResponse {}

export interface MsgDeregisterFromPlPool {
  creator: string;
  marketId: string;
}

export interface MsgDeregisterFromPlPoolResponse {}

export interface MsgDepositToPlPool {
  creator: string;
  poolId: Long;
  /** the amount to deposit */
  depositAmount: string;
  /** min amount of share to receive */
  minShareAmount: string;
}

export interface MsgDepositToPlPoolResponse {}

export interface MsgWithdrawFromPlPool {
  creator: string;
  poolId: Long;
  /** the amount of share to use for withdrawal */
  shareAmount: string;
  /** min amount to receive */
  minReceiveAmount: string;
}

export interface MsgWithdrawFromPlPoolResponse {}

export interface MsgUpdateMarketConfig {
  creator: string;
  marketId: string;
  updateMarketConfigParams?: UpdateMarketConfigParams;
}

export interface MsgUpdateMarketConfigResponse {
  marketConfig?: MarketConfig;
}

const baseMsgCreatePlPool: object = {
  creator: "",
  name: "",
  depositDenom: "",
  shareTokenSymbol: "",
  supplyCap: "",
  depositFee: "",
  withdrawalFee: "",
  borrowFee: "",
};

export const MsgCreatePlPool = {
  encode(
    message: MsgCreatePlPool,
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
    if (message.shareTokenSymbol !== "") {
      writer.uint32(34).string(message.shareTokenSymbol);
    }
    if (message.supplyCap !== "") {
      writer.uint32(42).string(message.supplyCap);
    }
    if (message.depositFee !== "") {
      writer.uint32(58).string(message.depositFee);
    }
    if (message.withdrawalFee !== "") {
      writer.uint32(66).string(message.withdrawalFee);
    }
    if (message.borrowFee !== "") {
      writer.uint32(74).string(message.borrowFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePlPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePlPool } as MsgCreatePlPool;
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
          message.shareTokenSymbol = reader.string();
          break;
        case 5:
          message.supplyCap = reader.string();
          break;
        case 7:
          message.depositFee = reader.string();
          break;
        case 8:
          message.withdrawalFee = reader.string();
          break;
        case 9:
          message.borrowFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePlPool {
    const message = { ...baseMsgCreatePlPool } as MsgCreatePlPool;
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
    message.shareTokenSymbol =
      object.shareTokenSymbol !== undefined && object.shareTokenSymbol !== null
        ? String(object.shareTokenSymbol)
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
    message.borrowFee =
      object.borrowFee !== undefined && object.borrowFee !== null
        ? String(object.borrowFee)
        : "";
    return message;
  },

  toJSON(message: MsgCreatePlPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.depositDenom !== undefined &&
      (obj.depositDenom = message.depositDenom);
    message.shareTokenSymbol !== undefined &&
      (obj.shareTokenSymbol = message.shareTokenSymbol);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined &&
      (obj.withdrawalFee = message.withdrawalFee);
    message.borrowFee !== undefined && (obj.borrowFee = message.borrowFee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePlPool>): MsgCreatePlPool {
    const message = { ...baseMsgCreatePlPool } as MsgCreatePlPool;
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.depositDenom = object.depositDenom ?? "";
    message.shareTokenSymbol = object.shareTokenSymbol ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.borrowFee = object.borrowFee ?? "";
    return message;
  },
};

const baseMsgCreatePlPoolResponse: object = {};

export const MsgCreatePlPoolResponse = {
  encode(
    message: MsgCreatePlPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      PlPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePlPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePlPoolResponse,
    } as MsgCreatePlPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PlPool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePlPoolResponse {
    const message = {
      ...baseMsgCreatePlPoolResponse,
    } as MsgCreatePlPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PlPool.fromJSON(object.pool)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreatePlPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? PlPool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePlPoolResponse>
  ): MsgCreatePlPoolResponse {
    const message = {
      ...baseMsgCreatePlPoolResponse,
    } as MsgCreatePlPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PlPool.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

const baseMsgUpdatePlPool: object = { creator: "", poolId: Long.UZERO };

export const MsgUpdatePlPool = {
  encode(
    message: MsgUpdatePlPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.updatePoolParams !== undefined) {
      UpdatePlPoolParams.encode(
        message.updatePoolParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePlPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePlPool } as MsgUpdatePlPool;
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
          message.updatePoolParams = UpdatePlPoolParams.decode(
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

  fromJSON(object: any): MsgUpdatePlPool {
    const message = { ...baseMsgUpdatePlPool } as MsgUpdatePlPool;
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
        ? UpdatePlPoolParams.fromJSON(object.updatePoolParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePlPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.updatePoolParams !== undefined &&
      (obj.updatePoolParams = message.updatePoolParams
        ? UpdatePlPoolParams.toJSON(message.updatePoolParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePlPool>): MsgUpdatePlPool {
    const message = { ...baseMsgUpdatePlPool } as MsgUpdatePlPool;
    message.creator = object.creator ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.updatePoolParams =
      object.updatePoolParams !== undefined && object.updatePoolParams !== null
        ? UpdatePlPoolParams.fromPartial(object.updatePoolParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdatePlPoolResponse: object = {};

export const MsgUpdatePlPoolResponse = {
  encode(
    message: MsgUpdatePlPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      PlPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePlPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePlPoolResponse,
    } as MsgUpdatePlPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PlPool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePlPoolResponse {
    const message = {
      ...baseMsgUpdatePlPoolResponse,
    } as MsgUpdatePlPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PlPool.fromJSON(object.pool)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePlPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? PlPool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePlPoolResponse>
  ): MsgUpdatePlPoolResponse {
    const message = {
      ...baseMsgUpdatePlPoolResponse,
    } as MsgUpdatePlPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PlPool.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

const baseMsgRegisterToPlPool: object = {
  creator: "",
  poolId: Long.UZERO,
  marketId: "",
};

export const MsgRegisterToPlPool = {
  encode(
    message: MsgRegisterToPlPool,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterToPlPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterToPlPool } as MsgRegisterToPlPool;
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

  fromJSON(object: any): MsgRegisterToPlPool {
    const message = { ...baseMsgRegisterToPlPool } as MsgRegisterToPlPool;
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

  toJSON(message: MsgRegisterToPlPool): unknown {
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

  fromPartial(object: DeepPartial<MsgRegisterToPlPool>): MsgRegisterToPlPool {
    const message = { ...baseMsgRegisterToPlPool } as MsgRegisterToPlPool;
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

const baseMsgRegisterToPlPoolResponse: object = {};

export const MsgRegisterToPlPoolResponse = {
  encode(
    _: MsgRegisterToPlPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterToPlPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterToPlPoolResponse,
    } as MsgRegisterToPlPoolResponse;
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

  fromJSON(_: any): MsgRegisterToPlPoolResponse {
    const message = {
      ...baseMsgRegisterToPlPoolResponse,
    } as MsgRegisterToPlPoolResponse;
    return message;
  },

  toJSON(_: MsgRegisterToPlPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterToPlPoolResponse>
  ): MsgRegisterToPlPoolResponse {
    const message = {
      ...baseMsgRegisterToPlPoolResponse,
    } as MsgRegisterToPlPoolResponse;
    return message;
  },
};

const baseMsgDeregisterFromPlPool: object = { creator: "", marketId: "" };

export const MsgDeregisterFromPlPool = {
  encode(
    message: MsgDeregisterFromPlPool,
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
  ): MsgDeregisterFromPlPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeregisterFromPlPool,
    } as MsgDeregisterFromPlPool;
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

  fromJSON(object: any): MsgDeregisterFromPlPool {
    const message = {
      ...baseMsgDeregisterFromPlPool,
    } as MsgDeregisterFromPlPool;
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

  toJSON(message: MsgDeregisterFromPlPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeregisterFromPlPool>
  ): MsgDeregisterFromPlPool {
    const message = {
      ...baseMsgDeregisterFromPlPool,
    } as MsgDeregisterFromPlPool;
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseMsgDeregisterFromPlPoolResponse: object = {};

export const MsgDeregisterFromPlPoolResponse = {
  encode(
    _: MsgDeregisterFromPlPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeregisterFromPlPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeregisterFromPlPoolResponse,
    } as MsgDeregisterFromPlPoolResponse;
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

  fromJSON(_: any): MsgDeregisterFromPlPoolResponse {
    const message = {
      ...baseMsgDeregisterFromPlPoolResponse,
    } as MsgDeregisterFromPlPoolResponse;
    return message;
  },

  toJSON(_: MsgDeregisterFromPlPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeregisterFromPlPoolResponse>
  ): MsgDeregisterFromPlPoolResponse {
    const message = {
      ...baseMsgDeregisterFromPlPoolResponse,
    } as MsgDeregisterFromPlPoolResponse;
    return message;
  },
};

const baseMsgDepositToPlPool: object = {
  creator: "",
  poolId: Long.UZERO,
  depositAmount: "",
  minShareAmount: "",
};

export const MsgDepositToPlPool = {
  encode(
    message: MsgDepositToPlPool,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositToPlPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDepositToPlPool } as MsgDepositToPlPool;
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

  fromJSON(object: any): MsgDepositToPlPool {
    const message = { ...baseMsgDepositToPlPool } as MsgDepositToPlPool;
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

  toJSON(message: MsgDepositToPlPool): unknown {
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

  fromPartial(object: DeepPartial<MsgDepositToPlPool>): MsgDepositToPlPool {
    const message = { ...baseMsgDepositToPlPool } as MsgDepositToPlPool;
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

const baseMsgDepositToPlPoolResponse: object = {};

export const MsgDepositToPlPoolResponse = {
  encode(
    _: MsgDepositToPlPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositToPlPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDepositToPlPoolResponse,
    } as MsgDepositToPlPoolResponse;
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

  fromJSON(_: any): MsgDepositToPlPoolResponse {
    const message = {
      ...baseMsgDepositToPlPoolResponse,
    } as MsgDepositToPlPoolResponse;
    return message;
  },

  toJSON(_: MsgDepositToPlPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDepositToPlPoolResponse>
  ): MsgDepositToPlPoolResponse {
    const message = {
      ...baseMsgDepositToPlPoolResponse,
    } as MsgDepositToPlPoolResponse;
    return message;
  },
};

const baseMsgWithdrawFromPlPool: object = {
  creator: "",
  poolId: Long.UZERO,
  shareAmount: "",
  minReceiveAmount: "",
};

export const MsgWithdrawFromPlPool = {
  encode(
    message: MsgWithdrawFromPlPool,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawFromPlPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawFromPlPool } as MsgWithdrawFromPlPool;
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

  fromJSON(object: any): MsgWithdrawFromPlPool {
    const message = { ...baseMsgWithdrawFromPlPool } as MsgWithdrawFromPlPool;
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

  toJSON(message: MsgWithdrawFromPlPool): unknown {
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

  fromPartial(
    object: DeepPartial<MsgWithdrawFromPlPool>
  ): MsgWithdrawFromPlPool {
    const message = { ...baseMsgWithdrawFromPlPool } as MsgWithdrawFromPlPool;
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

const baseMsgWithdrawFromPlPoolResponse: object = {};

export const MsgWithdrawFromPlPoolResponse = {
  encode(
    _: MsgWithdrawFromPlPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawFromPlPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawFromPlPoolResponse,
    } as MsgWithdrawFromPlPoolResponse;
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

  fromJSON(_: any): MsgWithdrawFromPlPoolResponse {
    const message = {
      ...baseMsgWithdrawFromPlPoolResponse,
    } as MsgWithdrawFromPlPoolResponse;
    return message;
  },

  toJSON(_: MsgWithdrawFromPlPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawFromPlPoolResponse>
  ): MsgWithdrawFromPlPoolResponse {
    const message = {
      ...baseMsgWithdrawFromPlPoolResponse,
    } as MsgWithdrawFromPlPoolResponse;
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

/** Msg defines the Msg service. */
export interface Msg {
  CreatePlPool(request: MsgCreatePlPool): Promise<MsgCreatePlPoolResponse>;
  UpdatePlPool(request: MsgUpdatePlPool): Promise<MsgUpdatePlPoolResponse>;
  RegisterToPlPool(
    request: MsgRegisterToPlPool
  ): Promise<MsgRegisterToPlPoolResponse>;
  DeregisterFromPlPool(
    request: MsgDeregisterFromPlPool
  ): Promise<MsgDeregisterFromPlPoolResponse>;
  DepositToPlPool(
    request: MsgDepositToPlPool
  ): Promise<MsgDepositToPlPoolResponse>;
  WithdrawFromPlPool(
    request: MsgWithdrawFromPlPool
  ): Promise<MsgWithdrawFromPlPoolResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateMarketConfig(
    request: MsgUpdateMarketConfig
  ): Promise<MsgUpdateMarketConfigResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePlPool = this.CreatePlPool.bind(this);
    this.UpdatePlPool = this.UpdatePlPool.bind(this);
    this.RegisterToPlPool = this.RegisterToPlPool.bind(this);
    this.DeregisterFromPlPool = this.DeregisterFromPlPool.bind(this);
    this.DepositToPlPool = this.DepositToPlPool.bind(this);
    this.WithdrawFromPlPool = this.WithdrawFromPlPool.bind(this);
    this.UpdateMarketConfig = this.UpdateMarketConfig.bind(this);
  }
  CreatePlPool(request: MsgCreatePlPool): Promise<MsgCreatePlPoolResponse> {
    const data = MsgCreatePlPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "CreatePlPool",
      data
    );
    return promise.then((data) =>
      MsgCreatePlPoolResponse.decode(new _m0.Reader(data))
    );
  }

  UpdatePlPool(request: MsgUpdatePlPool): Promise<MsgUpdatePlPoolResponse> {
    const data = MsgUpdatePlPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "UpdatePlPool",
      data
    );
    return promise.then((data) =>
      MsgUpdatePlPoolResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterToPlPool(
    request: MsgRegisterToPlPool
  ): Promise<MsgRegisterToPlPoolResponse> {
    const data = MsgRegisterToPlPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "RegisterToPlPool",
      data
    );
    return promise.then((data) =>
      MsgRegisterToPlPoolResponse.decode(new _m0.Reader(data))
    );
  }

  DeregisterFromPlPool(
    request: MsgDeregisterFromPlPool
  ): Promise<MsgDeregisterFromPlPoolResponse> {
    const data = MsgDeregisterFromPlPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "DeregisterFromPlPool",
      data
    );
    return promise.then((data) =>
      MsgDeregisterFromPlPoolResponse.decode(new _m0.Reader(data))
    );
  }

  DepositToPlPool(
    request: MsgDepositToPlPool
  ): Promise<MsgDepositToPlPoolResponse> {
    const data = MsgDepositToPlPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "DepositToPlPool",
      data
    );
    return promise.then((data) =>
      MsgDepositToPlPoolResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawFromPlPool(
    request: MsgWithdrawFromPlPool
  ): Promise<MsgWithdrawFromPlPoolResponse> {
    const data = MsgWithdrawFromPlPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "WithdrawFromPlPool",
      data
    );
    return promise.then((data) =>
      MsgWithdrawFromPlPoolResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateMarketConfig(
    request: MsgUpdateMarketConfig
  ): Promise<MsgUpdateMarketConfigResponse> {
    const data = MsgUpdateMarketConfig.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "UpdateMarketConfig",
      data
    );
    return promise.then((data) =>
      MsgUpdateMarketConfigResponse.decode(new _m0.Reader(data))
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
