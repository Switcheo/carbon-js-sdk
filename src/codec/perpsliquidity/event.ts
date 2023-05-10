/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PerpetualsLiquidityPool,
  PLPMarketConfig,
} from "./perpetuals_liquidity_pool";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

export interface SetPerpetualsLiquidityPoolEvent {
  perpetualsLiquidityPool?: PerpetualsLiquidityPool;
  type: string;
}

export interface NewPerpetualsLiquidityPoolEvent {
  perpetualsLiquidityPool?: PerpetualsLiquidityPool;
}

export interface UpdatePerpetualsLiquidityPoolEvent {
  perpetualsLiquidityPool?: PerpetualsLiquidityPool;
}

export interface RegisterToPerpetualsLiquidityPoolEvent {
  perpetualsLiquidityPoolId: Long;
  marketId: string;
}

export interface DeregisterFromPerpetualsLiquidityPoolEvent {
  perpetualsLiquidityPoolId: Long;
  marketId: string;
}

export interface SetPLPMarketConfigEvent {
  plpMarketConfig?: PLPMarketConfig;
}

export interface DepositToPerpetualsLiquidityPoolEvent {
  perpetualsLiquidityPoolId: Long;
  denom: string;
  amount: string;
  shareDenom: string;
  shareAmount: string;
  depositor: string;
}

export interface WithdrawFromPerpetualsLiquidityPoolEvent {
  perpetualsLiquidityPoolId: Long;
  denom: string;
  amount: string;
  shareDenom: string;
  shareAmount: string;
  withdrawer: string;
}

const baseSetPerpetualsLiquidityPoolEvent: object = { type: "" };

export const SetPerpetualsLiquidityPoolEvent = {
  encode(
    message: SetPerpetualsLiquidityPoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.perpetualsLiquidityPool !== undefined) {
      PerpetualsLiquidityPool.encode(
        message.perpetualsLiquidityPool,
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
  ): SetPerpetualsLiquidityPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetPerpetualsLiquidityPoolEvent,
    } as SetPerpetualsLiquidityPoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPool = PerpetualsLiquidityPool.decode(
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

  fromJSON(object: any): SetPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseSetPerpetualsLiquidityPoolEvent,
    } as SetPerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromJSON(object.perpetualsLiquidityPool)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: SetPerpetualsLiquidityPoolEvent): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPool !== undefined &&
      (obj.perpetualsLiquidityPool = message.perpetualsLiquidityPool
        ? PerpetualsLiquidityPool.toJSON(message.perpetualsLiquidityPool)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetPerpetualsLiquidityPoolEvent>
  ): SetPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseSetPerpetualsLiquidityPoolEvent,
    } as SetPerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromPartial(object.perpetualsLiquidityPool)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseNewPerpetualsLiquidityPoolEvent: object = {};

export const NewPerpetualsLiquidityPoolEvent = {
  encode(
    message: NewPerpetualsLiquidityPoolEvent,
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
  ): NewPerpetualsLiquidityPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseNewPerpetualsLiquidityPoolEvent,
    } as NewPerpetualsLiquidityPoolEvent;
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

  fromJSON(object: any): NewPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseNewPerpetualsLiquidityPoolEvent,
    } as NewPerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromJSON(object.perpetualsLiquidityPool)
        : undefined;
    return message;
  },

  toJSON(message: NewPerpetualsLiquidityPoolEvent): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPool !== undefined &&
      (obj.perpetualsLiquidityPool = message.perpetualsLiquidityPool
        ? PerpetualsLiquidityPool.toJSON(message.perpetualsLiquidityPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<NewPerpetualsLiquidityPoolEvent>
  ): NewPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseNewPerpetualsLiquidityPoolEvent,
    } as NewPerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromPartial(object.perpetualsLiquidityPool)
        : undefined;
    return message;
  },
};

const baseUpdatePerpetualsLiquidityPoolEvent: object = {};

export const UpdatePerpetualsLiquidityPoolEvent = {
  encode(
    message: UpdatePerpetualsLiquidityPoolEvent,
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
  ): UpdatePerpetualsLiquidityPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePerpetualsLiquidityPoolEvent,
    } as UpdatePerpetualsLiquidityPoolEvent;
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

  fromJSON(object: any): UpdatePerpetualsLiquidityPoolEvent {
    const message = {
      ...baseUpdatePerpetualsLiquidityPoolEvent,
    } as UpdatePerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromJSON(object.perpetualsLiquidityPool)
        : undefined;
    return message;
  },

  toJSON(message: UpdatePerpetualsLiquidityPoolEvent): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPool !== undefined &&
      (obj.perpetualsLiquidityPool = message.perpetualsLiquidityPool
        ? PerpetualsLiquidityPool.toJSON(message.perpetualsLiquidityPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdatePerpetualsLiquidityPoolEvent>
  ): UpdatePerpetualsLiquidityPoolEvent {
    const message = {
      ...baseUpdatePerpetualsLiquidityPoolEvent,
    } as UpdatePerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromPartial(object.perpetualsLiquidityPool)
        : undefined;
    return message;
  },
};

const baseRegisterToPerpetualsLiquidityPoolEvent: object = {
  perpetualsLiquidityPoolId: Long.UZERO,
  marketId: "",
};

export const RegisterToPerpetualsLiquidityPoolEvent = {
  encode(
    message: RegisterToPerpetualsLiquidityPoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.perpetualsLiquidityPoolId.isZero()) {
      writer.uint32(8).uint64(message.perpetualsLiquidityPoolId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterToPerpetualsLiquidityPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterToPerpetualsLiquidityPoolEvent,
    } as RegisterToPerpetualsLiquidityPoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPoolId = reader.uint64() as Long;
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

  fromJSON(object: any): RegisterToPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseRegisterToPerpetualsLiquidityPoolEvent,
    } as RegisterToPerpetualsLiquidityPoolEvent;
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

  toJSON(message: RegisterToPerpetualsLiquidityPoolEvent): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = (
        message.perpetualsLiquidityPoolId || Long.UZERO
      ).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterToPerpetualsLiquidityPoolEvent>
  ): RegisterToPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseRegisterToPerpetualsLiquidityPoolEvent,
    } as RegisterToPerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromValue(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseDeregisterFromPerpetualsLiquidityPoolEvent: object = {
  perpetualsLiquidityPoolId: Long.UZERO,
  marketId: "",
};

export const DeregisterFromPerpetualsLiquidityPoolEvent = {
  encode(
    message: DeregisterFromPerpetualsLiquidityPoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.perpetualsLiquidityPoolId.isZero()) {
      writer.uint32(8).uint64(message.perpetualsLiquidityPoolId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeregisterFromPerpetualsLiquidityPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeregisterFromPerpetualsLiquidityPoolEvent,
    } as DeregisterFromPerpetualsLiquidityPoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPoolId = reader.uint64() as Long;
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

  fromJSON(object: any): DeregisterFromPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseDeregisterFromPerpetualsLiquidityPoolEvent,
    } as DeregisterFromPerpetualsLiquidityPoolEvent;
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

  toJSON(message: DeregisterFromPerpetualsLiquidityPoolEvent): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = (
        message.perpetualsLiquidityPoolId || Long.UZERO
      ).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeregisterFromPerpetualsLiquidityPoolEvent>
  ): DeregisterFromPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseDeregisterFromPerpetualsLiquidityPoolEvent,
    } as DeregisterFromPerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromValue(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseSetPLPMarketConfigEvent: object = {};

export const SetPLPMarketConfigEvent = {
  encode(
    message: SetPLPMarketConfigEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.plpMarketConfig !== undefined) {
      PLPMarketConfig.encode(
        message.plpMarketConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetPLPMarketConfigEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetPLPMarketConfigEvent,
    } as SetPLPMarketConfigEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plpMarketConfig = PLPMarketConfig.decode(
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

  fromJSON(object: any): SetPLPMarketConfigEvent {
    const message = {
      ...baseSetPLPMarketConfigEvent,
    } as SetPLPMarketConfigEvent;
    message.plpMarketConfig =
      object.plpMarketConfig !== undefined && object.plpMarketConfig !== null
        ? PLPMarketConfig.fromJSON(object.plpMarketConfig)
        : undefined;
    return message;
  },

  toJSON(message: SetPLPMarketConfigEvent): unknown {
    const obj: any = {};
    message.plpMarketConfig !== undefined &&
      (obj.plpMarketConfig = message.plpMarketConfig
        ? PLPMarketConfig.toJSON(message.plpMarketConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetPLPMarketConfigEvent>
  ): SetPLPMarketConfigEvent {
    const message = {
      ...baseSetPLPMarketConfigEvent,
    } as SetPLPMarketConfigEvent;
    message.plpMarketConfig =
      object.plpMarketConfig !== undefined && object.plpMarketConfig !== null
        ? PLPMarketConfig.fromPartial(object.plpMarketConfig)
        : undefined;
    return message;
  },
};

const baseDepositToPerpetualsLiquidityPoolEvent: object = {
  perpetualsLiquidityPoolId: Long.UZERO,
  denom: "",
  amount: "",
  shareDenom: "",
  shareAmount: "",
  depositor: "",
};

export const DepositToPerpetualsLiquidityPoolEvent = {
  encode(
    message: DepositToPerpetualsLiquidityPoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.perpetualsLiquidityPoolId.isZero()) {
      writer.uint32(8).uint64(message.perpetualsLiquidityPoolId);
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
    if (message.depositor !== "") {
      writer.uint32(50).string(message.depositor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DepositToPerpetualsLiquidityPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDepositToPerpetualsLiquidityPoolEvent,
    } as DepositToPerpetualsLiquidityPoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPoolId = reader.uint64() as Long;
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
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositToPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseDepositToPerpetualsLiquidityPoolEvent,
    } as DepositToPerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromString(object.perpetualsLiquidityPoolId)
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
    message.depositor =
      object.depositor !== undefined && object.depositor !== null
        ? String(object.depositor)
        : "";
    return message;
  },

  toJSON(message: DepositToPerpetualsLiquidityPoolEvent): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = (
        message.perpetualsLiquidityPoolId || Long.UZERO
      ).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DepositToPerpetualsLiquidityPoolEvent>
  ): DepositToPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseDepositToPerpetualsLiquidityPoolEvent,
    } as DepositToPerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromValue(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.depositor = object.depositor ?? "";
    return message;
  },
};

const baseWithdrawFromPerpetualsLiquidityPoolEvent: object = {
  perpetualsLiquidityPoolId: Long.UZERO,
  denom: "",
  amount: "",
  shareDenom: "",
  shareAmount: "",
  withdrawer: "",
};

export const WithdrawFromPerpetualsLiquidityPoolEvent = {
  encode(
    message: WithdrawFromPerpetualsLiquidityPoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.perpetualsLiquidityPoolId.isZero()) {
      writer.uint32(8).uint64(message.perpetualsLiquidityPoolId);
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
  ): WithdrawFromPerpetualsLiquidityPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWithdrawFromPerpetualsLiquidityPoolEvent,
    } as WithdrawFromPerpetualsLiquidityPoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPoolId = reader.uint64() as Long;
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

  fromJSON(object: any): WithdrawFromPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseWithdrawFromPerpetualsLiquidityPoolEvent,
    } as WithdrawFromPerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromString(object.perpetualsLiquidityPoolId)
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

  toJSON(message: WithdrawFromPerpetualsLiquidityPoolEvent): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = (
        message.perpetualsLiquidityPoolId || Long.UZERO
      ).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawFromPerpetualsLiquidityPoolEvent>
  ): WithdrawFromPerpetualsLiquidityPoolEvent {
    const message = {
      ...baseWithdrawFromPerpetualsLiquidityPoolEvent,
    } as WithdrawFromPerpetualsLiquidityPoolEvent;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromValue(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.withdrawer = object.withdrawer ?? "";
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
