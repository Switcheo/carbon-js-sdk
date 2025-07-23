/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.subaccount";

export interface SubAccountV2260 {
  mainAccount: string;
  active: boolean;
}

function createBaseSubAccountV2260(): SubAccountV2260 {
  return { mainAccount: "", active: false };
}

export const SubAccountV2260 = {
  encode(message: SubAccountV2260, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mainAccount !== "") {
      writer.uint32(10).string(message.mainAccount);
    }
    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubAccountV2260 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubAccountV2260();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mainAccount = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubAccountV2260 {
    return {
      mainAccount: isSet(object.mainAccount) ? String(object.mainAccount) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: SubAccountV2260): unknown {
    const obj: any = {};
    message.mainAccount !== undefined && (obj.mainAccount = message.mainAccount);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  create(base?: DeepPartial<SubAccountV2260>): SubAccountV2260 {
    return SubAccountV2260.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SubAccountV2260>): SubAccountV2260 {
    const message = createBaseSubAccountV2260();
    message.mainAccount = object.mainAccount ?? "";
    message.active = object.active ?? false;
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
