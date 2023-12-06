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

const baseEModeCategory: object = {
  name: "",
  denoms: "",
  loanToValue: "",
  liquidationThreshold: "",
  liquidationDiscount: "",
  isActive: false,
};

export const EModeCategory = {
  encode(
    message: EModeCategory,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEModeCategory } as EModeCategory;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.denoms.push(reader.string());
          break;
        case 3:
          message.loanToValue = reader.string();
          break;
        case 4:
          message.liquidationThreshold = reader.string();
          break;
        case 5:
          message.liquidationDiscount = reader.string();
          break;
        case 6:
          message.isActive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EModeCategory {
    const message = { ...baseEModeCategory } as EModeCategory;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.denoms = (object.denoms ?? []).map((e: any) => String(e));
    message.loanToValue =
      object.loanToValue !== undefined && object.loanToValue !== null
        ? String(object.loanToValue)
        : "";
    message.liquidationThreshold =
      object.liquidationThreshold !== undefined &&
      object.liquidationThreshold !== null
        ? String(object.liquidationThreshold)
        : "";
    message.liquidationDiscount =
      object.liquidationDiscount !== undefined &&
      object.liquidationDiscount !== null
        ? String(object.liquidationDiscount)
        : "";
    message.isActive =
      object.isActive !== undefined && object.isActive !== null
        ? Boolean(object.isActive)
        : false;
    return message;
  },

  toJSON(message: EModeCategory): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    message.loanToValue !== undefined &&
      (obj.loanToValue = message.loanToValue);
    message.liquidationThreshold !== undefined &&
      (obj.liquidationThreshold = message.liquidationThreshold);
    message.liquidationDiscount !== undefined &&
      (obj.liquidationDiscount = message.liquidationDiscount);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  fromPartial(object: DeepPartial<EModeCategory>): EModeCategory {
    const message = { ...baseEModeCategory } as EModeCategory;
    message.name = object.name ?? "";
    message.denoms = (object.denoms ?? []).map((e) => e);
    message.loanToValue = object.loanToValue ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.liquidationDiscount = object.liquidationDiscount ?? "";
    message.isActive = object.isActive ?? false;
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
