/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ethermint.types.v1";

/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTx {
  /** max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec */
  maxPriorityPrice: string;
}

const baseExtensionOptionDynamicFeeTx: object = { maxPriorityPrice: "" };

export const ExtensionOptionDynamicFeeTx = {
  encode(
    message: ExtensionOptionDynamicFeeTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxPriorityPrice !== "") {
      writer.uint32(10).string(message.maxPriorityPrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExtensionOptionDynamicFeeTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExtensionOptionDynamicFeeTx,
    } as ExtensionOptionDynamicFeeTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPriorityPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtensionOptionDynamicFeeTx {
    const message = {
      ...baseExtensionOptionDynamicFeeTx,
    } as ExtensionOptionDynamicFeeTx;
    message.maxPriorityPrice =
      object.maxPriorityPrice !== undefined && object.maxPriorityPrice !== null
        ? String(object.maxPriorityPrice)
        : "";
    return message;
  },

  toJSON(message: ExtensionOptionDynamicFeeTx): unknown {
    const obj: any = {};
    message.maxPriorityPrice !== undefined &&
      (obj.maxPriorityPrice = message.maxPriorityPrice);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExtensionOptionDynamicFeeTx>
  ): ExtensionOptionDynamicFeeTx {
    const message = {
      ...baseExtensionOptionDynamicFeeTx,
    } as ExtensionOptionDynamicFeeTx;
    message.maxPriorityPrice = object.maxPriorityPrice ?? "";
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
