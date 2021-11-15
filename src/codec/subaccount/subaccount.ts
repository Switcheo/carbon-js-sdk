/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.subaccount";

export interface SubAccount {
  mainAccount: string;
  active: boolean;
}

export interface GenesisSubAccount {
  mainAddress: string;
  subAddress: string;
  active: boolean;
}

const baseSubAccount: object = { mainAccount: "", active: false };

export const SubAccount = {
  encode(
    message: SubAccount,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SubAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSubAccount } as SubAccount;
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

  fromJSON(object: any): SubAccount {
    const message = { ...baseSubAccount } as SubAccount;
    if (object.mainAccount !== undefined && object.mainAccount !== null) {
      message.mainAccount = String(object.mainAccount);
    } else {
      message.mainAccount = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    return message;
  },

  toJSON(message: SubAccount): unknown {
    const obj: any = {};
    message.mainAccount !== undefined &&
      (obj.mainAccount = message.mainAccount);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: DeepPartial<SubAccount>): SubAccount {
    const message = { ...baseSubAccount } as SubAccount;
    message.mainAccount = object.mainAccount ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

const baseGenesisSubAccount: object = {
  mainAddress: "",
  subAddress: "",
  active: false,
};

export const GenesisSubAccount = {
  encode(
    message: GenesisSubAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mainAddress !== "") {
      writer.uint32(10).string(message.mainAddress);
    }
    if (message.subAddress !== "") {
      writer.uint32(18).string(message.subAddress);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisSubAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisSubAccount } as GenesisSubAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainAddress = reader.string();
          break;
        case 2:
          message.subAddress = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisSubAccount {
    const message = { ...baseGenesisSubAccount } as GenesisSubAccount;
    if (object.mainAddress !== undefined && object.mainAddress !== null) {
      message.mainAddress = String(object.mainAddress);
    } else {
      message.mainAddress = "";
    }
    if (object.subAddress !== undefined && object.subAddress !== null) {
      message.subAddress = String(object.subAddress);
    } else {
      message.subAddress = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    return message;
  },

  toJSON(message: GenesisSubAccount): unknown {
    const obj: any = {};
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisSubAccount>): GenesisSubAccount {
    const message = { ...baseGenesisSubAccount } as GenesisSubAccount;
    message.mainAddress = object.mainAddress ?? "";
    message.subAddress = object.subAddress ?? "";
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
