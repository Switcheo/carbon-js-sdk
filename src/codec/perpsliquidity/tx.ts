/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PerpetualsLiquidityPool,
  UpdatePerpetualsLiquidityPoolParams,
  UpdatePLPMarketConfigParams,
  PLPMarketConfig,
} from "./perpetuals_liquidity_pool";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

export interface MsgCreatePerpetualsLiquidityPool {
  creator: string;
  /** name of perpetuals_liquidity_pool */
  name: string;
  /** denom of the underlying token in the perpetuals_liquidity_pool that is used to provide liquidity */
  depositDenom: string;
  /** symbol of the share token that represents any tokens in the perpetuals_liquidity_pool 1-to-1 */
  shareTokenSymbol: string;
  /** the maximum amount that can be supplied into the pool */
  supplyCap: string;
  /** deposit fee to charge on a successful deposit to PLP in bps */
  depositFeeBps: string;
  /** withdrawal fee to charge on a successful withdrawal from PLP in bps */
  withdrawalFeeBps: string;
}

export interface MsgCreatePerpetualsLiquidityPoolResponse {
  perpetualsLiquidityPool?: PerpetualsLiquidityPool;
}

export interface MsgUpdatePerpetualsLiquidityPool {
  creator: string;
  perpetualsLiquidityPoolId: Long;
  updatePerpetualsLiquidityPoolParams?: UpdatePerpetualsLiquidityPoolParams;
}

export interface MsgUpdatePerpetualsLiquidityPoolResponse {
  perpetualsLiquidityPool?: PerpetualsLiquidityPool;
}

export interface MsgRegisterToPerpetualsLiquidityPool {
  creator: string;
  perpetualsLiquidityPoolId: Long;
  marketId: string;
}

export interface MsgRegisterToPerpetualsLiquidityPoolResponse {}

export interface MsgDeregisterFromPerpetualsLiquidityPool {
  creator: string;
  marketId: string;
}

export interface MsgDeregisterFromPerpetualsLiquidityPoolResponse {}

export interface MsgDepositToPerpetualsLiquidityPool {
  creator: string;
  perpetualsLiquidityPoolId: Long;
  /** the amount to deposit */
  depositAmount: string;
  /** min amount of share to receive */
  minShareAmount: string;
}

export interface MsgDepositToPerpetualsLiquidityPoolResponse {}

export interface MsgWithdrawFromPerpetualsLiquidityPool {
  creator: string;
  perpetualsLiquidityPoolId: Long;
  /** the amount of share to use for withdrawal */
  shareAmount: string;
  /** min amount to receive */
  minReceiveAmount: string;
}

export interface MsgWithdrawFromPerpetualsLiquidityPoolResponse {}

export interface MsgUpdatePLPMarketConfig {
  creator: string;
  marketId: string;
  updateMarketConfigParams?: UpdatePLPMarketConfigParams;
}

export interface MsgUpdatePLPMarketConfigResponse {
  marketConfig?: PLPMarketConfig;
}

const baseMsgCreatePerpetualsLiquidityPool: object = {
  creator: "",
  name: "",
  depositDenom: "",
  shareTokenSymbol: "",
  supplyCap: "",
  depositFeeBps: "",
  withdrawalFeeBps: "",
};

export const MsgCreatePerpetualsLiquidityPool = {
  encode(
    message: MsgCreatePerpetualsLiquidityPool,
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
    if (message.depositFeeBps !== "") {
      writer.uint32(58).string(message.depositFeeBps);
    }
    if (message.withdrawalFeeBps !== "") {
      writer.uint32(66).string(message.withdrawalFeeBps);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePerpetualsLiquidityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePerpetualsLiquidityPool,
    } as MsgCreatePerpetualsLiquidityPool;
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
          message.depositFeeBps = reader.string();
          break;
        case 8:
          message.withdrawalFeeBps = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePerpetualsLiquidityPool {
    const message = {
      ...baseMsgCreatePerpetualsLiquidityPool,
    } as MsgCreatePerpetualsLiquidityPool;
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
    message.depositFeeBps =
      object.depositFeeBps !== undefined && object.depositFeeBps !== null
        ? String(object.depositFeeBps)
        : "";
    message.withdrawalFeeBps =
      object.withdrawalFeeBps !== undefined && object.withdrawalFeeBps !== null
        ? String(object.withdrawalFeeBps)
        : "";
    return message;
  },

  toJSON(message: MsgCreatePerpetualsLiquidityPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.depositDenom !== undefined &&
      (obj.depositDenom = message.depositDenom);
    message.shareTokenSymbol !== undefined &&
      (obj.shareTokenSymbol = message.shareTokenSymbol);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFeeBps !== undefined &&
      (obj.depositFeeBps = message.depositFeeBps);
    message.withdrawalFeeBps !== undefined &&
      (obj.withdrawalFeeBps = message.withdrawalFeeBps);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePerpetualsLiquidityPool>
  ): MsgCreatePerpetualsLiquidityPool {
    const message = {
      ...baseMsgCreatePerpetualsLiquidityPool,
    } as MsgCreatePerpetualsLiquidityPool;
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.depositDenom = object.depositDenom ?? "";
    message.shareTokenSymbol = object.shareTokenSymbol ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.depositFeeBps = object.depositFeeBps ?? "";
    message.withdrawalFeeBps = object.withdrawalFeeBps ?? "";
    return message;
  },
};

const baseMsgCreatePerpetualsLiquidityPoolResponse: object = {};

export const MsgCreatePerpetualsLiquidityPoolResponse = {
  encode(
    message: MsgCreatePerpetualsLiquidityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.perpetualsLiquidityPool !== undefined) {
      PerpetualsLiquidityPool.encode(
        message.perpetualsLiquidityPool,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePerpetualsLiquidityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePerpetualsLiquidityPoolResponse,
    } as MsgCreatePerpetualsLiquidityPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPool = PerpetualsLiquidityPool.decode(
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

  fromJSON(object: any): MsgCreatePerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgCreatePerpetualsLiquidityPoolResponse,
    } as MsgCreatePerpetualsLiquidityPoolResponse;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromJSON(object.perpetualsLiquidityPool)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreatePerpetualsLiquidityPoolResponse): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPool !== undefined &&
      (obj.perpetualsLiquidityPool = message.perpetualsLiquidityPool
        ? PerpetualsLiquidityPool.toJSON(message.perpetualsLiquidityPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePerpetualsLiquidityPoolResponse>
  ): MsgCreatePerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgCreatePerpetualsLiquidityPoolResponse,
    } as MsgCreatePerpetualsLiquidityPoolResponse;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromPartial(object.perpetualsLiquidityPool)
        : undefined;
    return message;
  },
};

const baseMsgUpdatePerpetualsLiquidityPool: object = {
  creator: "",
  perpetualsLiquidityPoolId: Long.UZERO,
};

export const MsgUpdatePerpetualsLiquidityPool = {
  encode(
    message: MsgUpdatePerpetualsLiquidityPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.perpetualsLiquidityPoolId.isZero()) {
      writer.uint32(16).uint64(message.perpetualsLiquidityPoolId);
    }
    if (message.updatePerpetualsLiquidityPoolParams !== undefined) {
      UpdatePerpetualsLiquidityPoolParams.encode(
        message.updatePerpetualsLiquidityPoolParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePerpetualsLiquidityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePerpetualsLiquidityPool,
    } as MsgUpdatePerpetualsLiquidityPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.perpetualsLiquidityPoolId = reader.uint64() as Long;
          break;
        case 3:
          message.updatePerpetualsLiquidityPoolParams =
            UpdatePerpetualsLiquidityPoolParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePerpetualsLiquidityPool {
    const message = {
      ...baseMsgUpdatePerpetualsLiquidityPool,
    } as MsgUpdatePerpetualsLiquidityPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromString(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.updatePerpetualsLiquidityPoolParams =
      object.updatePerpetualsLiquidityPoolParams !== undefined &&
      object.updatePerpetualsLiquidityPoolParams !== null
        ? UpdatePerpetualsLiquidityPoolParams.fromJSON(
            object.updatePerpetualsLiquidityPoolParams
          )
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePerpetualsLiquidityPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = (
        message.perpetualsLiquidityPoolId || Long.UZERO
      ).toString());
    message.updatePerpetualsLiquidityPoolParams !== undefined &&
      (obj.updatePerpetualsLiquidityPoolParams =
        message.updatePerpetualsLiquidityPoolParams
          ? UpdatePerpetualsLiquidityPoolParams.toJSON(
              message.updatePerpetualsLiquidityPoolParams
            )
          : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePerpetualsLiquidityPool>
  ): MsgUpdatePerpetualsLiquidityPool {
    const message = {
      ...baseMsgUpdatePerpetualsLiquidityPool,
    } as MsgUpdatePerpetualsLiquidityPool;
    message.creator = object.creator ?? "";
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromValue(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.updatePerpetualsLiquidityPoolParams =
      object.updatePerpetualsLiquidityPoolParams !== undefined &&
      object.updatePerpetualsLiquidityPoolParams !== null
        ? UpdatePerpetualsLiquidityPoolParams.fromPartial(
            object.updatePerpetualsLiquidityPoolParams
          )
        : undefined;
    return message;
  },
};

const baseMsgUpdatePerpetualsLiquidityPoolResponse: object = {};

export const MsgUpdatePerpetualsLiquidityPoolResponse = {
  encode(
    message: MsgUpdatePerpetualsLiquidityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.perpetualsLiquidityPool !== undefined) {
      PerpetualsLiquidityPool.encode(
        message.perpetualsLiquidityPool,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePerpetualsLiquidityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePerpetualsLiquidityPoolResponse,
    } as MsgUpdatePerpetualsLiquidityPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPool = PerpetualsLiquidityPool.decode(
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

  fromJSON(object: any): MsgUpdatePerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgUpdatePerpetualsLiquidityPoolResponse,
    } as MsgUpdatePerpetualsLiquidityPoolResponse;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromJSON(object.perpetualsLiquidityPool)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePerpetualsLiquidityPoolResponse): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPool !== undefined &&
      (obj.perpetualsLiquidityPool = message.perpetualsLiquidityPool
        ? PerpetualsLiquidityPool.toJSON(message.perpetualsLiquidityPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePerpetualsLiquidityPoolResponse>
  ): MsgUpdatePerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgUpdatePerpetualsLiquidityPoolResponse,
    } as MsgUpdatePerpetualsLiquidityPoolResponse;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromPartial(object.perpetualsLiquidityPool)
        : undefined;
    return message;
  },
};

const baseMsgRegisterToPerpetualsLiquidityPool: object = {
  creator: "",
  perpetualsLiquidityPoolId: Long.UZERO,
  marketId: "",
};

export const MsgRegisterToPerpetualsLiquidityPool = {
  encode(
    message: MsgRegisterToPerpetualsLiquidityPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.perpetualsLiquidityPoolId.isZero()) {
      writer.uint32(16).uint64(message.perpetualsLiquidityPoolId);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterToPerpetualsLiquidityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterToPerpetualsLiquidityPool,
    } as MsgRegisterToPerpetualsLiquidityPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.perpetualsLiquidityPoolId = reader.uint64() as Long;
          break;
        case 3:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterToPerpetualsLiquidityPool {
    const message = {
      ...baseMsgRegisterToPerpetualsLiquidityPool,
    } as MsgRegisterToPerpetualsLiquidityPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromString(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterToPerpetualsLiquidityPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = (
        message.perpetualsLiquidityPoolId || Long.UZERO
      ).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterToPerpetualsLiquidityPool>
  ): MsgRegisterToPerpetualsLiquidityPool {
    const message = {
      ...baseMsgRegisterToPerpetualsLiquidityPool,
    } as MsgRegisterToPerpetualsLiquidityPool;
    message.creator = object.creator ?? "";
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromValue(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseMsgRegisterToPerpetualsLiquidityPoolResponse: object = {};

export const MsgRegisterToPerpetualsLiquidityPoolResponse = {
  encode(
    _: MsgRegisterToPerpetualsLiquidityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterToPerpetualsLiquidityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterToPerpetualsLiquidityPoolResponse,
    } as MsgRegisterToPerpetualsLiquidityPoolResponse;
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

  fromJSON(_: any): MsgRegisterToPerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgRegisterToPerpetualsLiquidityPoolResponse,
    } as MsgRegisterToPerpetualsLiquidityPoolResponse;
    return message;
  },

  toJSON(_: MsgRegisterToPerpetualsLiquidityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterToPerpetualsLiquidityPoolResponse>
  ): MsgRegisterToPerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgRegisterToPerpetualsLiquidityPoolResponse,
    } as MsgRegisterToPerpetualsLiquidityPoolResponse;
    return message;
  },
};

const baseMsgDeregisterFromPerpetualsLiquidityPool: object = {
  creator: "",
  marketId: "",
};

export const MsgDeregisterFromPerpetualsLiquidityPool = {
  encode(
    message: MsgDeregisterFromPerpetualsLiquidityPool,
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
  ): MsgDeregisterFromPerpetualsLiquidityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeregisterFromPerpetualsLiquidityPool,
    } as MsgDeregisterFromPerpetualsLiquidityPool;
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

  fromJSON(object: any): MsgDeregisterFromPerpetualsLiquidityPool {
    const message = {
      ...baseMsgDeregisterFromPerpetualsLiquidityPool,
    } as MsgDeregisterFromPerpetualsLiquidityPool;
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

  toJSON(message: MsgDeregisterFromPerpetualsLiquidityPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeregisterFromPerpetualsLiquidityPool>
  ): MsgDeregisterFromPerpetualsLiquidityPool {
    const message = {
      ...baseMsgDeregisterFromPerpetualsLiquidityPool,
    } as MsgDeregisterFromPerpetualsLiquidityPool;
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseMsgDeregisterFromPerpetualsLiquidityPoolResponse: object = {};

export const MsgDeregisterFromPerpetualsLiquidityPoolResponse = {
  encode(
    _: MsgDeregisterFromPerpetualsLiquidityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeregisterFromPerpetualsLiquidityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeregisterFromPerpetualsLiquidityPoolResponse,
    } as MsgDeregisterFromPerpetualsLiquidityPoolResponse;
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

  fromJSON(_: any): MsgDeregisterFromPerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgDeregisterFromPerpetualsLiquidityPoolResponse,
    } as MsgDeregisterFromPerpetualsLiquidityPoolResponse;
    return message;
  },

  toJSON(_: MsgDeregisterFromPerpetualsLiquidityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeregisterFromPerpetualsLiquidityPoolResponse>
  ): MsgDeregisterFromPerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgDeregisterFromPerpetualsLiquidityPoolResponse,
    } as MsgDeregisterFromPerpetualsLiquidityPoolResponse;
    return message;
  },
};

const baseMsgDepositToPerpetualsLiquidityPool: object = {
  creator: "",
  perpetualsLiquidityPoolId: Long.UZERO,
  depositAmount: "",
  minShareAmount: "",
};

export const MsgDepositToPerpetualsLiquidityPool = {
  encode(
    message: MsgDepositToPerpetualsLiquidityPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.perpetualsLiquidityPoolId.isZero()) {
      writer.uint32(16).uint64(message.perpetualsLiquidityPoolId);
    }
    if (message.depositAmount !== "") {
      writer.uint32(26).string(message.depositAmount);
    }
    if (message.minShareAmount !== "") {
      writer.uint32(34).string(message.minShareAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositToPerpetualsLiquidityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDepositToPerpetualsLiquidityPool,
    } as MsgDepositToPerpetualsLiquidityPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.perpetualsLiquidityPoolId = reader.uint64() as Long;
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

  fromJSON(object: any): MsgDepositToPerpetualsLiquidityPool {
    const message = {
      ...baseMsgDepositToPerpetualsLiquidityPool,
    } as MsgDepositToPerpetualsLiquidityPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromString(object.perpetualsLiquidityPoolId)
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

  toJSON(message: MsgDepositToPerpetualsLiquidityPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = (
        message.perpetualsLiquidityPoolId || Long.UZERO
      ).toString());
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount);
    message.minShareAmount !== undefined &&
      (obj.minShareAmount = message.minShareAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDepositToPerpetualsLiquidityPool>
  ): MsgDepositToPerpetualsLiquidityPool {
    const message = {
      ...baseMsgDepositToPerpetualsLiquidityPool,
    } as MsgDepositToPerpetualsLiquidityPool;
    message.creator = object.creator ?? "";
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromValue(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.depositAmount = object.depositAmount ?? "";
    message.minShareAmount = object.minShareAmount ?? "";
    return message;
  },
};

const baseMsgDepositToPerpetualsLiquidityPoolResponse: object = {};

export const MsgDepositToPerpetualsLiquidityPoolResponse = {
  encode(
    _: MsgDepositToPerpetualsLiquidityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositToPerpetualsLiquidityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDepositToPerpetualsLiquidityPoolResponse,
    } as MsgDepositToPerpetualsLiquidityPoolResponse;
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

  fromJSON(_: any): MsgDepositToPerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgDepositToPerpetualsLiquidityPoolResponse,
    } as MsgDepositToPerpetualsLiquidityPoolResponse;
    return message;
  },

  toJSON(_: MsgDepositToPerpetualsLiquidityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDepositToPerpetualsLiquidityPoolResponse>
  ): MsgDepositToPerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgDepositToPerpetualsLiquidityPoolResponse,
    } as MsgDepositToPerpetualsLiquidityPoolResponse;
    return message;
  },
};

const baseMsgWithdrawFromPerpetualsLiquidityPool: object = {
  creator: "",
  perpetualsLiquidityPoolId: Long.UZERO,
  shareAmount: "",
  minReceiveAmount: "",
};

export const MsgWithdrawFromPerpetualsLiquidityPool = {
  encode(
    message: MsgWithdrawFromPerpetualsLiquidityPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.perpetualsLiquidityPoolId.isZero()) {
      writer.uint32(16).uint64(message.perpetualsLiquidityPoolId);
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
  ): MsgWithdrawFromPerpetualsLiquidityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawFromPerpetualsLiquidityPool,
    } as MsgWithdrawFromPerpetualsLiquidityPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.perpetualsLiquidityPoolId = reader.uint64() as Long;
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

  fromJSON(object: any): MsgWithdrawFromPerpetualsLiquidityPool {
    const message = {
      ...baseMsgWithdrawFromPerpetualsLiquidityPool,
    } as MsgWithdrawFromPerpetualsLiquidityPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromString(object.perpetualsLiquidityPoolId)
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

  toJSON(message: MsgWithdrawFromPerpetualsLiquidityPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = (
        message.perpetualsLiquidityPoolId || Long.UZERO
      ).toString());
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.minReceiveAmount !== undefined &&
      (obj.minReceiveAmount = message.minReceiveAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawFromPerpetualsLiquidityPool>
  ): MsgWithdrawFromPerpetualsLiquidityPool {
    const message = {
      ...baseMsgWithdrawFromPerpetualsLiquidityPool,
    } as MsgWithdrawFromPerpetualsLiquidityPool;
    message.creator = object.creator ?? "";
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromValue(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.shareAmount = object.shareAmount ?? "";
    message.minReceiveAmount = object.minReceiveAmount ?? "";
    return message;
  },
};

const baseMsgWithdrawFromPerpetualsLiquidityPoolResponse: object = {};

export const MsgWithdrawFromPerpetualsLiquidityPoolResponse = {
  encode(
    _: MsgWithdrawFromPerpetualsLiquidityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawFromPerpetualsLiquidityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawFromPerpetualsLiquidityPoolResponse,
    } as MsgWithdrawFromPerpetualsLiquidityPoolResponse;
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

  fromJSON(_: any): MsgWithdrawFromPerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgWithdrawFromPerpetualsLiquidityPoolResponse,
    } as MsgWithdrawFromPerpetualsLiquidityPoolResponse;
    return message;
  },

  toJSON(_: MsgWithdrawFromPerpetualsLiquidityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawFromPerpetualsLiquidityPoolResponse>
  ): MsgWithdrawFromPerpetualsLiquidityPoolResponse {
    const message = {
      ...baseMsgWithdrawFromPerpetualsLiquidityPoolResponse,
    } as MsgWithdrawFromPerpetualsLiquidityPoolResponse;
    return message;
  },
};

const baseMsgUpdatePLPMarketConfig: object = { creator: "", marketId: "" };

export const MsgUpdatePLPMarketConfig = {
  encode(
    message: MsgUpdatePLPMarketConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.updateMarketConfigParams !== undefined) {
      UpdatePLPMarketConfigParams.encode(
        message.updateMarketConfigParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePLPMarketConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePLPMarketConfig,
    } as MsgUpdatePLPMarketConfig;
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
          message.updateMarketConfigParams = UpdatePLPMarketConfigParams.decode(
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

  fromJSON(object: any): MsgUpdatePLPMarketConfig {
    const message = {
      ...baseMsgUpdatePLPMarketConfig,
    } as MsgUpdatePLPMarketConfig;
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
        ? UpdatePLPMarketConfigParams.fromJSON(object.updateMarketConfigParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePLPMarketConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.updateMarketConfigParams !== undefined &&
      (obj.updateMarketConfigParams = message.updateMarketConfigParams
        ? UpdatePLPMarketConfigParams.toJSON(message.updateMarketConfigParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePLPMarketConfig>
  ): MsgUpdatePLPMarketConfig {
    const message = {
      ...baseMsgUpdatePLPMarketConfig,
    } as MsgUpdatePLPMarketConfig;
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.updateMarketConfigParams =
      object.updateMarketConfigParams !== undefined &&
      object.updateMarketConfigParams !== null
        ? UpdatePLPMarketConfigParams.fromPartial(
            object.updateMarketConfigParams
          )
        : undefined;
    return message;
  },
};

const baseMsgUpdatePLPMarketConfigResponse: object = {};

export const MsgUpdatePLPMarketConfigResponse = {
  encode(
    message: MsgUpdatePLPMarketConfigResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketConfig !== undefined) {
      PLPMarketConfig.encode(
        message.marketConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePLPMarketConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePLPMarketConfigResponse,
    } as MsgUpdatePLPMarketConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketConfig = PLPMarketConfig.decode(
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

  fromJSON(object: any): MsgUpdatePLPMarketConfigResponse {
    const message = {
      ...baseMsgUpdatePLPMarketConfigResponse,
    } as MsgUpdatePLPMarketConfigResponse;
    message.marketConfig =
      object.marketConfig !== undefined && object.marketConfig !== null
        ? PLPMarketConfig.fromJSON(object.marketConfig)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePLPMarketConfigResponse): unknown {
    const obj: any = {};
    message.marketConfig !== undefined &&
      (obj.marketConfig = message.marketConfig
        ? PLPMarketConfig.toJSON(message.marketConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePLPMarketConfigResponse>
  ): MsgUpdatePLPMarketConfigResponse {
    const message = {
      ...baseMsgUpdatePLPMarketConfigResponse,
    } as MsgUpdatePLPMarketConfigResponse;
    message.marketConfig =
      object.marketConfig !== undefined && object.marketConfig !== null
        ? PLPMarketConfig.fromPartial(object.marketConfig)
        : undefined;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePerpetualsLiquidityPool(
    request: MsgCreatePerpetualsLiquidityPool
  ): Promise<MsgCreatePerpetualsLiquidityPoolResponse>;
  UpdatePerpetualsLiquidityPool(
    request: MsgUpdatePerpetualsLiquidityPool
  ): Promise<MsgUpdatePerpetualsLiquidityPoolResponse>;
  RegisterToPerpetualsLiquidityPool(
    request: MsgRegisterToPerpetualsLiquidityPool
  ): Promise<MsgRegisterToPerpetualsLiquidityPoolResponse>;
  DeregisterFromPerpetualsLiquidityPool(
    request: MsgDeregisterFromPerpetualsLiquidityPool
  ): Promise<MsgDeregisterFromPerpetualsLiquidityPoolResponse>;
  DepositToPerpetualsLiquidityPool(
    request: MsgDepositToPerpetualsLiquidityPool
  ): Promise<MsgDepositToPerpetualsLiquidityPoolResponse>;
  WithdrawFromPerpetualsLiquidityPool(
    request: MsgWithdrawFromPerpetualsLiquidityPool
  ): Promise<MsgWithdrawFromPerpetualsLiquidityPoolResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdatePLPMarketConfig(
    request: MsgUpdatePLPMarketConfig
  ): Promise<MsgUpdatePLPMarketConfigResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePerpetualsLiquidityPool =
      this.CreatePerpetualsLiquidityPool.bind(this);
    this.UpdatePerpetualsLiquidityPool =
      this.UpdatePerpetualsLiquidityPool.bind(this);
    this.RegisterToPerpetualsLiquidityPool =
      this.RegisterToPerpetualsLiquidityPool.bind(this);
    this.DeregisterFromPerpetualsLiquidityPool =
      this.DeregisterFromPerpetualsLiquidityPool.bind(this);
    this.DepositToPerpetualsLiquidityPool =
      this.DepositToPerpetualsLiquidityPool.bind(this);
    this.WithdrawFromPerpetualsLiquidityPool =
      this.WithdrawFromPerpetualsLiquidityPool.bind(this);
    this.UpdatePLPMarketConfig = this.UpdatePLPMarketConfig.bind(this);
  }
  CreatePerpetualsLiquidityPool(
    request: MsgCreatePerpetualsLiquidityPool
  ): Promise<MsgCreatePerpetualsLiquidityPoolResponse> {
    const data = MsgCreatePerpetualsLiquidityPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "CreatePerpetualsLiquidityPool",
      data
    );
    return promise.then((data) =>
      MsgCreatePerpetualsLiquidityPoolResponse.decode(new _m0.Reader(data))
    );
  }

  UpdatePerpetualsLiquidityPool(
    request: MsgUpdatePerpetualsLiquidityPool
  ): Promise<MsgUpdatePerpetualsLiquidityPoolResponse> {
    const data = MsgUpdatePerpetualsLiquidityPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "UpdatePerpetualsLiquidityPool",
      data
    );
    return promise.then((data) =>
      MsgUpdatePerpetualsLiquidityPoolResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterToPerpetualsLiquidityPool(
    request: MsgRegisterToPerpetualsLiquidityPool
  ): Promise<MsgRegisterToPerpetualsLiquidityPoolResponse> {
    const data = MsgRegisterToPerpetualsLiquidityPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "RegisterToPerpetualsLiquidityPool",
      data
    );
    return promise.then((data) =>
      MsgRegisterToPerpetualsLiquidityPoolResponse.decode(new _m0.Reader(data))
    );
  }

  DeregisterFromPerpetualsLiquidityPool(
    request: MsgDeregisterFromPerpetualsLiquidityPool
  ): Promise<MsgDeregisterFromPerpetualsLiquidityPoolResponse> {
    const data =
      MsgDeregisterFromPerpetualsLiquidityPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "DeregisterFromPerpetualsLiquidityPool",
      data
    );
    return promise.then((data) =>
      MsgDeregisterFromPerpetualsLiquidityPoolResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  DepositToPerpetualsLiquidityPool(
    request: MsgDepositToPerpetualsLiquidityPool
  ): Promise<MsgDepositToPerpetualsLiquidityPoolResponse> {
    const data = MsgDepositToPerpetualsLiquidityPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "DepositToPerpetualsLiquidityPool",
      data
    );
    return promise.then((data) =>
      MsgDepositToPerpetualsLiquidityPoolResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawFromPerpetualsLiquidityPool(
    request: MsgWithdrawFromPerpetualsLiquidityPool
  ): Promise<MsgWithdrawFromPerpetualsLiquidityPoolResponse> {
    const data =
      MsgWithdrawFromPerpetualsLiquidityPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "WithdrawFromPerpetualsLiquidityPool",
      data
    );
    return promise.then((data) =>
      MsgWithdrawFromPerpetualsLiquidityPoolResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  UpdatePLPMarketConfig(
    request: MsgUpdatePLPMarketConfig
  ): Promise<MsgUpdatePLPMarketConfigResponse> {
    const data = MsgUpdatePLPMarketConfig.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Msg",
      "UpdatePLPMarketConfig",
      data
    );
    return promise.then((data) =>
      MsgUpdatePLPMarketConfigResponse.decode(new _m0.Reader(data))
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
