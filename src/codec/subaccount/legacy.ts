/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.subaccount";

export interface SubaccountV2260 {
  mainAccount: string;
  active: boolean;
}

const baseSubaccountV2260: object = { mainAccount: "", active: false };

export const SubaccountV2260 = {
  encode(
    message: SubaccountV2260,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mainAccount !== "") {
      writer.uint32(10).string(message.mainAccount);
    }
    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountV2260 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSubaccountV2260 } as SubaccountV2260;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainAccount = reader.string();
          break;
        case 2:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubaccountV2260 {
    const message = { ...baseSubaccountV2260 } as SubaccountV2260;
    message.mainAccount =
      object.mainAccount !== undefined && object.mainAccount !== null
        ? String(object.mainAccount)
        : "";
    message.active =
      object.active !== undefined && object.active !== null
        ? Boolean(object.active)
        : false;
    return message;
  },

  toJSON(message: SubaccountV2260): unknown {
    const obj: any = {};
    message.mainAccount !== undefined &&
      (obj.mainAccount = message.mainAccount);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: DeepPartial<SubaccountV2260>): SubaccountV2260 {
    const message = { ...baseSubaccountV2260 } as SubaccountV2260;
    message.mainAccount = object.mainAccount ?? "";
    message.active = object.active ?? false;
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
