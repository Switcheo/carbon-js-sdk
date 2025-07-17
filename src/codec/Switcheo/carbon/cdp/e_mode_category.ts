/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface EModeCategory {
  name: string;
  denoms: string[];
  loanToValue: string;
  liquidationThreshold: string;
  liquidationDiscount: string;
  isActive: boolean;
}

function createBaseEModeCategory(): EModeCategory {
  return { name: "", denoms: [], loanToValue: "", liquidationThreshold: "", liquidationDiscount: "", isActive: false };
}

export const EModeCategory = {
  encode(message: EModeCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.denoms) {
      writer.uint32(18).string(v!);
    }
    if (message.loanToValue !== "") {
      writer.uint32(26).string(message.loanToValue);
    }
    if (message.liquidationThreshold !== "") {
      writer.uint32(34).string(message.liquidationThreshold);
    }
    if (message.liquidationDiscount !== "") {
      writer.uint32(42).string(message.liquidationDiscount);
    }
    if (message.isActive === true) {
      writer.uint32(48).bool(message.isActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EModeCategory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEModeCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denoms.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loanToValue = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.liquidationThreshold = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.liquidationDiscount = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isActive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EModeCategory {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => String(e)) : [],
      loanToValue: isSet(object.loanToValue) ? String(object.loanToValue) : "",
      liquidationThreshold: isSet(object.liquidationThreshold) ? String(object.liquidationThreshold) : "",
      liquidationDiscount: isSet(object.liquidationDiscount) ? String(object.liquidationDiscount) : "",
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
    };
  },

  toJSON(message: EModeCategory): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    message.loanToValue !== undefined && (obj.loanToValue = message.loanToValue);
    message.liquidationThreshold !== undefined && (obj.liquidationThreshold = message.liquidationThreshold);
    message.liquidationDiscount !== undefined && (obj.liquidationDiscount = message.liquidationDiscount);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  create(base?: DeepPartial<EModeCategory>): EModeCategory {
    return EModeCategory.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EModeCategory>): EModeCategory {
    const message = createBaseEModeCategory();
    message.name = object.name ?? "";
    message.denoms = object.denoms?.map((e) => e) || [];
    message.loanToValue = object.loanToValue ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.liquidationDiscount = object.liquidationDiscount ?? "";
    message.isActive = object.isActive ?? false;
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
