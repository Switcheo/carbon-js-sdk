/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.inflation";

/** MintData represents the parameters by the inflation module. */
export interface MintData {
  firstBlockTime: Long;
  prevBlockTime: Long;
  currentSupply: string;
  inflationRate: string;
}

const baseMintData: object = {
  firstBlockTime: Long.ZERO,
  prevBlockTime: Long.ZERO,
  currentSupply: "",
  inflationRate: "",
};

export const MintData = {
  encode(
    message: MintData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.firstBlockTime.isZero()) {
      writer.uint32(8).int64(message.firstBlockTime);
    }
    if (!message.prevBlockTime.isZero()) {
      writer.uint32(16).int64(message.prevBlockTime);
    }
    if (message.currentSupply !== "") {
      writer.uint32(26).string(message.currentSupply);
    }
    if (message.inflationRate !== "") {
      writer.uint32(34).string(message.inflationRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMintData } as MintData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firstBlockTime = reader.int64() as Long;
          break;
        case 2:
          message.prevBlockTime = reader.int64() as Long;
          break;
        case 3:
          message.currentSupply = reader.string();
          break;
        case 4:
          message.inflationRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintData {
    const message = { ...baseMintData } as MintData;
    message.firstBlockTime =
      object.firstBlockTime !== undefined && object.firstBlockTime !== null
        ? Long.fromString(object.firstBlockTime)
        : Long.ZERO;
    message.prevBlockTime =
      object.prevBlockTime !== undefined && object.prevBlockTime !== null
        ? Long.fromString(object.prevBlockTime)
        : Long.ZERO;
    message.currentSupply =
      object.currentSupply !== undefined && object.currentSupply !== null
        ? String(object.currentSupply)
        : "";
    message.inflationRate =
      object.inflationRate !== undefined && object.inflationRate !== null
        ? String(object.inflationRate)
        : "";
    return message;
  },

  toJSON(message: MintData): unknown {
    const obj: any = {};
    message.firstBlockTime !== undefined &&
      (obj.firstBlockTime = (message.firstBlockTime || Long.ZERO).toString());
    message.prevBlockTime !== undefined &&
      (obj.prevBlockTime = (message.prevBlockTime || Long.ZERO).toString());
    message.currentSupply !== undefined &&
      (obj.currentSupply = message.currentSupply);
    message.inflationRate !== undefined &&
      (obj.inflationRate = message.inflationRate);
    return obj;
  },

  fromPartial(object: DeepPartial<MintData>): MintData {
    const message = { ...baseMintData } as MintData;
    message.firstBlockTime =
      object.firstBlockTime !== undefined && object.firstBlockTime !== null
        ? Long.fromValue(object.firstBlockTime)
        : Long.ZERO;
    message.prevBlockTime =
      object.prevBlockTime !== undefined && object.prevBlockTime !== null
        ? Long.fromValue(object.prevBlockTime)
        : Long.ZERO;
    message.currentSupply = object.currentSupply ?? "";
    message.inflationRate = object.inflationRate ?? "";
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
