/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

export interface MultiSwap {
  id: Long;
  blockHeight: Long;
  address: string;
  inputCoin?: Coin;
  outputCoin?: Coin;
  status: string;
  swapType: string;
  swapRoute: Long[];
}

export interface MultiSwapIDs {
  ids: Long[];
}

export interface MultiSwapStep {
  id: Long;
  blockHeight: Long;
  address: string;
  inputDenom: string;
  inputAmount: string;
  outputDenom: string;
  outputAmount: string;
  poolId: Long;
  status: string;
  swapType: string;
  stepNumber: Long;
}

const baseMultiSwap: object = {
  id: Long.UZERO,
  blockHeight: Long.UZERO,
  address: "",
  status: "",
  swapType: "",
  swapRoute: Long.UZERO,
};

export const MultiSwap = {
  encode(
    message: MultiSwap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.inputCoin !== undefined) {
      Coin.encode(message.inputCoin, writer.uint32(34).fork()).ldelim();
    }
    if (message.outputCoin !== undefined) {
      Coin.encode(message.outputCoin, writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.swapType !== "") {
      writer.uint32(58).string(message.swapType);
    }
    writer.uint32(66).fork();
    for (const v of message.swapRoute) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMultiSwap } as MultiSwap;
    message.swapRoute = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.blockHeight = reader.uint64() as Long;
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.inputCoin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.outputCoin = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.status = reader.string();
          break;
        case 7:
          message.swapType = reader.string();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.swapRoute.push(reader.uint64() as Long);
            }
          } else {
            message.swapRoute.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultiSwap {
    const message = { ...baseMultiSwap } as MultiSwap;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromString(object.blockHeight)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.inputCoin =
      object.inputCoin !== undefined && object.inputCoin !== null
        ? Coin.fromJSON(object.inputCoin)
        : undefined;
    message.outputCoin =
      object.outputCoin !== undefined && object.outputCoin !== null
        ? Coin.fromJSON(object.outputCoin)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.swapType =
      object.swapType !== undefined && object.swapType !== null
        ? String(object.swapType)
        : "";
    message.swapRoute = (object.swapRoute ?? []).map((e: any) =>
      Long.fromString(e)
    );
    return message;
  },

  toJSON(message: MultiSwap): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.inputCoin !== undefined &&
      (obj.inputCoin = message.inputCoin
        ? Coin.toJSON(message.inputCoin)
        : undefined);
    message.outputCoin !== undefined &&
      (obj.outputCoin = message.outputCoin
        ? Coin.toJSON(message.outputCoin)
        : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.swapType !== undefined && (obj.swapType = message.swapType);
    if (message.swapRoute) {
      obj.swapRoute = message.swapRoute.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.swapRoute = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MultiSwap>): MultiSwap {
    const message = { ...baseMultiSwap } as MultiSwap;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    message.address = object.address ?? "";
    message.inputCoin =
      object.inputCoin !== undefined && object.inputCoin !== null
        ? Coin.fromPartial(object.inputCoin)
        : undefined;
    message.outputCoin =
      object.outputCoin !== undefined && object.outputCoin !== null
        ? Coin.fromPartial(object.outputCoin)
        : undefined;
    message.status = object.status ?? "";
    message.swapType = object.swapType ?? "";
    message.swapRoute = (object.swapRoute ?? []).map((e) => Long.fromValue(e));
    return message;
  },
};

const baseMultiSwapIDs: object = { ids: Long.UZERO };

export const MultiSwapIDs = {
  encode(
    message: MultiSwapIDs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiSwapIDs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMultiSwapIDs } as MultiSwapIDs;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64() as Long);
            }
          } else {
            message.ids.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultiSwapIDs {
    const message = { ...baseMultiSwapIDs } as MultiSwapIDs;
    message.ids = (object.ids ?? []).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: MultiSwapIDs): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MultiSwapIDs>): MultiSwapIDs {
    const message = { ...baseMultiSwapIDs } as MultiSwapIDs;
    message.ids = (object.ids ?? []).map((e) => Long.fromValue(e));
    return message;
  },
};

const baseMultiSwapStep: object = {
  id: Long.UZERO,
  blockHeight: Long.UZERO,
  address: "",
  inputDenom: "",
  inputAmount: "",
  outputDenom: "",
  outputAmount: "",
  poolId: Long.UZERO,
  status: "",
  swapType: "",
  stepNumber: Long.UZERO,
};

export const MultiSwapStep = {
  encode(
    message: MultiSwapStep,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.inputDenom !== "") {
      writer.uint32(34).string(message.inputDenom);
    }
    if (message.inputAmount !== "") {
      writer.uint32(42).string(message.inputAmount);
    }
    if (message.outputDenom !== "") {
      writer.uint32(50).string(message.outputDenom);
    }
    if (message.outputAmount !== "") {
      writer.uint32(58).string(message.outputAmount);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(64).uint64(message.poolId);
    }
    if (message.status !== "") {
      writer.uint32(74).string(message.status);
    }
    if (message.swapType !== "") {
      writer.uint32(82).string(message.swapType);
    }
    if (!message.stepNumber.isZero()) {
      writer.uint32(88).uint64(message.stepNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiSwapStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMultiSwapStep } as MultiSwapStep;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.blockHeight = reader.uint64() as Long;
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.inputDenom = reader.string();
          break;
        case 5:
          message.inputAmount = reader.string();
          break;
        case 6:
          message.outputDenom = reader.string();
          break;
        case 7:
          message.outputAmount = reader.string();
          break;
        case 8:
          message.poolId = reader.uint64() as Long;
          break;
        case 9:
          message.status = reader.string();
          break;
        case 10:
          message.swapType = reader.string();
          break;
        case 11:
          message.stepNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultiSwapStep {
    const message = { ...baseMultiSwapStep } as MultiSwapStep;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromString(object.blockHeight)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.inputDenom =
      object.inputDenom !== undefined && object.inputDenom !== null
        ? String(object.inputDenom)
        : "";
    message.inputAmount =
      object.inputAmount !== undefined && object.inputAmount !== null
        ? String(object.inputAmount)
        : "";
    message.outputDenom =
      object.outputDenom !== undefined && object.outputDenom !== null
        ? String(object.outputDenom)
        : "";
    message.outputAmount =
      object.outputAmount !== undefined && object.outputAmount !== null
        ? String(object.outputAmount)
        : "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.swapType =
      object.swapType !== undefined && object.swapType !== null
        ? String(object.swapType)
        : "";
    message.stepNumber =
      object.stepNumber !== undefined && object.stepNumber !== null
        ? Long.fromString(object.stepNumber)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MultiSwapStep): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.inputDenom !== undefined && (obj.inputDenom = message.inputDenom);
    message.inputAmount !== undefined &&
      (obj.inputAmount = message.inputAmount);
    message.outputDenom !== undefined &&
      (obj.outputDenom = message.outputDenom);
    message.outputAmount !== undefined &&
      (obj.outputAmount = message.outputAmount);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.status !== undefined && (obj.status = message.status);
    message.swapType !== undefined && (obj.swapType = message.swapType);
    message.stepNumber !== undefined &&
      (obj.stepNumber = (message.stepNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MultiSwapStep>): MultiSwapStep {
    const message = { ...baseMultiSwapStep } as MultiSwapStep;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    message.address = object.address ?? "";
    message.inputDenom = object.inputDenom ?? "";
    message.inputAmount = object.inputAmount ?? "";
    message.outputDenom = object.outputDenom ?? "";
    message.outputAmount = object.outputAmount ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.status = object.status ?? "";
    message.swapType = object.swapType ?? "";
    message.stepNumber =
      object.stepNumber !== undefined && object.stepNumber !== null
        ? Long.fromValue(object.stepNumber)
        : Long.UZERO;
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
