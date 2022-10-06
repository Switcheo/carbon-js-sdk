/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.cdp";

/** Params defines the parameters for the module. */
export interface Params {
  interestFee: string;
  liquidationFee: string;
  stablecoinInterestRate: string;
}

const baseParams: object = {
  interestFee: "",
  liquidationFee: "",
  stablecoinInterestRate: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.interestFee !== "") {
      writer.uint32(10).string(message.interestFee);
    }
    if (message.liquidationFee !== "") {
      writer.uint32(18).string(message.liquidationFee);
    }
    if (message.stablecoinInterestRate !== "") {
      writer.uint32(26).string(message.stablecoinInterestRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interestFee = reader.string();
          break;
        case 2:
          message.liquidationFee = reader.string();
          break;
        case 3:
          message.stablecoinInterestRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.interestFee =
      object.interestFee !== undefined && object.interestFee !== null
        ? String(object.interestFee)
        : "";
    message.liquidationFee =
      object.liquidationFee !== undefined && object.liquidationFee !== null
        ? String(object.liquidationFee)
        : "";
    message.stablecoinInterestRate =
      object.stablecoinInterestRate !== undefined &&
      object.stablecoinInterestRate !== null
        ? String(object.stablecoinInterestRate)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.interestFee !== undefined &&
      (obj.interestFee = message.interestFee);
    message.liquidationFee !== undefined &&
      (obj.liquidationFee = message.liquidationFee);
    message.stablecoinInterestRate !== undefined &&
      (obj.stablecoinInterestRate = message.stablecoinInterestRate);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.interestFee = object.interestFee ?? "";
    message.liquidationFee = object.liquidationFee ?? "";
    message.stablecoinInterestRate = object.stablecoinInterestRate ?? "";
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
