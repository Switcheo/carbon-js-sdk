/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.fee";

/** MsgFee was removed, but leaving this as legacy record */
export interface MsgFee {
  msgType: string;
  fee: string;
}

export interface MsgGasCost {
  msgType: string;
  gasCost: string;
}

export interface MinGasPrice {
  gasPrice: string;
  denom: string;
}

const baseMsgFee: object = { msgType: "", fee: "" };

export const MsgFee = {
  encode(
    message: MsgFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.fee !== "") {
      writer.uint32(18).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFee } as MsgFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        case 2:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFee {
    const message = { ...baseMsgFee } as MsgFee;
    message.msgType =
      object.msgType !== undefined && object.msgType !== null
        ? String(object.msgType)
        : "";
    message.fee =
      object.fee !== undefined && object.fee !== null ? String(object.fee) : "";
    return message;
  },

  toJSON(message: MsgFee): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFee>): MsgFee {
    const message = { ...baseMsgFee } as MsgFee;
    message.msgType = object.msgType ?? "";
    message.fee = object.fee ?? "";
    return message;
  },
};

const baseMsgGasCost: object = { msgType: "", gasCost: "" };

export const MsgGasCost = {
  encode(
    message: MsgGasCost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.gasCost !== "") {
      writer.uint32(18).string(message.gasCost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGasCost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgGasCost } as MsgGasCost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        case 2:
          message.gasCost = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGasCost {
    const message = { ...baseMsgGasCost } as MsgGasCost;
    message.msgType =
      object.msgType !== undefined && object.msgType !== null
        ? String(object.msgType)
        : "";
    message.gasCost =
      object.gasCost !== undefined && object.gasCost !== null
        ? String(object.gasCost)
        : "";
    return message;
  },

  toJSON(message: MsgGasCost): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.gasCost !== undefined && (obj.gasCost = message.gasCost);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgGasCost>): MsgGasCost {
    const message = { ...baseMsgGasCost } as MsgGasCost;
    message.msgType = object.msgType ?? "";
    message.gasCost = object.gasCost ?? "";
    return message;
  },
};

const baseMinGasPrice: object = { gasPrice: "", denom: "" };

export const MinGasPrice = {
  encode(
    message: MinGasPrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gasPrice !== "") {
      writer.uint32(10).string(message.gasPrice);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinGasPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMinGasPrice } as MinGasPrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasPrice = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MinGasPrice {
    const message = { ...baseMinGasPrice } as MinGasPrice;
    message.gasPrice =
      object.gasPrice !== undefined && object.gasPrice !== null
        ? String(object.gasPrice)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MinGasPrice): unknown {
    const obj: any = {};
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MinGasPrice>): MinGasPrice {
    const message = { ...baseMinGasPrice } as MinGasPrice;
    message.gasPrice = object.gasPrice ?? "";
    message.denom = object.denom ?? "";
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
