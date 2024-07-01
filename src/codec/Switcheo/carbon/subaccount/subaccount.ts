/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.subaccount";

export interface SubAccount {
  mainAddress: string;
  role: string;
  expectedAuthorizer: string;
  subAddress: string;
}

export interface GenesisSubAccount {
  mainAddress: string;
  subAddress: string;
  role: string;
}

export interface MainAccount {
  subAddresses: string[];
  tradingFeeDelegateLastUpdate?: Date;
  mainAddress: string;
  subRole: string;
}

const baseSubAccount: object = {
  mainAddress: "",
  role: "",
  expectedAuthorizer: "",
  subAddress: "",
};

export const SubAccount = {
  encode(
    message: SubAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mainAddress !== "") {
      writer.uint32(10).string(message.mainAddress);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    if (message.expectedAuthorizer !== "") {
      writer.uint32(26).string(message.expectedAuthorizer);
    }
    if (message.subAddress !== "") {
      writer.uint32(34).string(message.subAddress);
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
          message.mainAddress = reader.string();
          break;
        case 2:
          message.role = reader.string();
          break;
        case 3:
          message.expectedAuthorizer = reader.string();
          break;
        case 4:
          message.subAddress = reader.string();
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
    message.mainAddress =
      object.mainAddress !== undefined && object.mainAddress !== null
        ? String(object.mainAddress)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    message.expectedAuthorizer =
      object.expectedAuthorizer !== undefined &&
      object.expectedAuthorizer !== null
        ? String(object.expectedAuthorizer)
        : "";
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    return message;
  },

  toJSON(message: SubAccount): unknown {
    const obj: any = {};
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.role !== undefined && (obj.role = message.role);
    message.expectedAuthorizer !== undefined &&
      (obj.expectedAuthorizer = message.expectedAuthorizer);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<SubAccount>): SubAccount {
    const message = { ...baseSubAccount } as SubAccount;
    message.mainAddress = object.mainAddress ?? "";
    message.role = object.role ?? "";
    message.expectedAuthorizer = object.expectedAuthorizer ?? "";
    message.subAddress = object.subAddress ?? "";
    return message;
  },
};

const baseGenesisSubAccount: object = {
  mainAddress: "",
  subAddress: "",
  role: "",
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
    if (message.role !== "") {
      writer.uint32(26).string(message.role);
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
          message.role = reader.string();
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
    message.mainAddress =
      object.mainAddress !== undefined && object.mainAddress !== null
        ? String(object.mainAddress)
        : "";
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    return message;
  },

  toJSON(message: GenesisSubAccount): unknown {
    const obj: any = {};
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisSubAccount>): GenesisSubAccount {
    const message = { ...baseGenesisSubAccount } as GenesisSubAccount;
    message.mainAddress = object.mainAddress ?? "";
    message.subAddress = object.subAddress ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

const baseMainAccount: object = {
  subAddresses: "",
  mainAddress: "",
  subRole: "",
};

export const MainAccount = {
  encode(
    message: MainAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.tradingFeeDelegateLastUpdate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.tradingFeeDelegateLastUpdate),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.mainAddress !== "") {
      writer.uint32(26).string(message.mainAddress);
    }
    if (message.subRole !== "") {
      writer.uint32(34).string(message.subRole);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMainAccount } as MainAccount;
    message.subAddresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subAddresses.push(reader.string());
          break;
        case 2:
          message.tradingFeeDelegateLastUpdate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.mainAddress = reader.string();
          break;
        case 4:
          message.subRole = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MainAccount {
    const message = { ...baseMainAccount } as MainAccount;
    message.subAddresses = (object.subAddresses ?? []).map((e: any) =>
      String(e)
    );
    message.tradingFeeDelegateLastUpdate =
      object.tradingFeeDelegateLastUpdate !== undefined &&
      object.tradingFeeDelegateLastUpdate !== null
        ? fromJsonTimestamp(object.tradingFeeDelegateLastUpdate)
        : undefined;
    message.mainAddress =
      object.mainAddress !== undefined && object.mainAddress !== null
        ? String(object.mainAddress)
        : "";
    message.subRole =
      object.subRole !== undefined && object.subRole !== null
        ? String(object.subRole)
        : "";
    return message;
  },

  toJSON(message: MainAccount): unknown {
    const obj: any = {};
    if (message.subAddresses) {
      obj.subAddresses = message.subAddresses.map((e) => e);
    } else {
      obj.subAddresses = [];
    }
    message.tradingFeeDelegateLastUpdate !== undefined &&
      (obj.tradingFeeDelegateLastUpdate =
        message.tradingFeeDelegateLastUpdate.toISOString());
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.subRole !== undefined && (obj.subRole = message.subRole);
    return obj;
  },

  fromPartial(object: DeepPartial<MainAccount>): MainAccount {
    const message = { ...baseMainAccount } as MainAccount;
    message.subAddresses = (object.subAddresses ?? []).map((e) => e);
    message.tradingFeeDelegateLastUpdate =
      object.tradingFeeDelegateLastUpdate ?? undefined;
    message.mainAddress = object.mainAddress ?? "";
    message.subRole = object.subRole ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
