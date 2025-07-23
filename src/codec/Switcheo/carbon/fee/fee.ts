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

function createBaseMsgFee(): MsgFee {
  return { msgType: "", fee: "" };
}

export const MsgFee = {
  encode(message: MsgFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.fee !== "") {
      writer.uint32(18).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msgType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgFee {
    return {
      msgType: isSet(object.msgType) ? String(object.msgType) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
    };
  },

  toJSON(message: MsgFee): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  create(base?: DeepPartial<MsgFee>): MsgFee {
    return MsgFee.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgFee>): MsgFee {
    const message = createBaseMsgFee();
    message.msgType = object.msgType ?? "";
    message.fee = object.fee ?? "";
    return message;
  },
};

function createBaseMsgGasCost(): MsgGasCost {
  return { msgType: "", gasCost: "" };
}

export const MsgGasCost = {
  encode(message: MsgGasCost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.gasCost !== "") {
      writer.uint32(18).string(message.gasCost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGasCost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGasCost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msgType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gasCost = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGasCost {
    return {
      msgType: isSet(object.msgType) ? String(object.msgType) : "",
      gasCost: isSet(object.gasCost) ? String(object.gasCost) : "",
    };
  },

  toJSON(message: MsgGasCost): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.gasCost !== undefined && (obj.gasCost = message.gasCost);
    return obj;
  },

  create(base?: DeepPartial<MsgGasCost>): MsgGasCost {
    return MsgGasCost.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgGasCost>): MsgGasCost {
    const message = createBaseMsgGasCost();
    message.msgType = object.msgType ?? "";
    message.gasCost = object.gasCost ?? "";
    return message;
  },
};

function createBaseMinGasPrice(): MinGasPrice {
  return { gasPrice: "", denom: "" };
}

export const MinGasPrice = {
  encode(message: MinGasPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gasPrice !== "") {
      writer.uint32(10).string(message.gasPrice);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinGasPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinGasPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gasPrice = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MinGasPrice {
    return {
      gasPrice: isSet(object.gasPrice) ? String(object.gasPrice) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MinGasPrice): unknown {
    const obj: any = {};
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MinGasPrice>): MinGasPrice {
    return MinGasPrice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MinGasPrice>): MinGasPrice {
    const message = createBaseMinGasPrice();
    message.gasPrice = object.gasPrice ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

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
