/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.bank";

export interface MsgBlacklistAddress {
  authority: string;
  address: string;
}

export interface MsgBlacklistAddressResponse {}

export interface MsgUnblacklistAddress {
  authority: string;
  address: string;
}

export interface MsgUnblacklistAddressResponse {}

const baseMsgBlacklistAddress: object = { authority: "", address: "" };

export const MsgBlacklistAddress = {
  encode(
    message: MsgBlacklistAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlacklistAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBlacklistAddress } as MsgBlacklistAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBlacklistAddress {
    const message = { ...baseMsgBlacklistAddress } as MsgBlacklistAddress;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: MsgBlacklistAddress): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBlacklistAddress>): MsgBlacklistAddress {
    const message = { ...baseMsgBlacklistAddress } as MsgBlacklistAddress;
    message.authority = object.authority ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

const baseMsgBlacklistAddressResponse: object = {};

export const MsgBlacklistAddressResponse = {
  encode(
    _: MsgBlacklistAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBlacklistAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgBlacklistAddressResponse,
    } as MsgBlacklistAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBlacklistAddressResponse {
    const message = {
      ...baseMsgBlacklistAddressResponse,
    } as MsgBlacklistAddressResponse;
    return message;
  },

  toJSON(_: MsgBlacklistAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgBlacklistAddressResponse>
  ): MsgBlacklistAddressResponse {
    const message = {
      ...baseMsgBlacklistAddressResponse,
    } as MsgBlacklistAddressResponse;
    return message;
  },
};

const baseMsgUnblacklistAddress: object = { authority: "", address: "" };

export const MsgUnblacklistAddress = {
  encode(
    message: MsgUnblacklistAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnblacklistAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnblacklistAddress } as MsgUnblacklistAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnblacklistAddress {
    const message = { ...baseMsgUnblacklistAddress } as MsgUnblacklistAddress;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: MsgUnblacklistAddress): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUnblacklistAddress>
  ): MsgUnblacklistAddress {
    const message = { ...baseMsgUnblacklistAddress } as MsgUnblacklistAddress;
    message.authority = object.authority ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

const baseMsgUnblacklistAddressResponse: object = {};

export const MsgUnblacklistAddressResponse = {
  encode(
    _: MsgUnblacklistAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnblacklistAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUnblacklistAddressResponse,
    } as MsgUnblacklistAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnblacklistAddressResponse {
    const message = {
      ...baseMsgUnblacklistAddressResponse,
    } as MsgUnblacklistAddressResponse;
    return message;
  },

  toJSON(_: MsgUnblacklistAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUnblacklistAddressResponse>
  ): MsgUnblacklistAddressResponse {
    const message = {
      ...baseMsgUnblacklistAddressResponse,
    } as MsgUnblacklistAddressResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  BlacklistAddress(
    request: MsgBlacklistAddress
  ): Promise<MsgBlacklistAddressResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UnblacklistAddress(
    request: MsgUnblacklistAddress
  ): Promise<MsgUnblacklistAddressResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.BlacklistAddress = this.BlacklistAddress.bind(this);
    this.UnblacklistAddress = this.UnblacklistAddress.bind(this);
  }
  BlacklistAddress(
    request: MsgBlacklistAddress
  ): Promise<MsgBlacklistAddressResponse> {
    const data = MsgBlacklistAddress.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bank.Msg",
      "BlacklistAddress",
      data
    );
    return promise.then((data) =>
      MsgBlacklistAddressResponse.decode(new _m0.Reader(data))
    );
  }

  UnblacklistAddress(
    request: MsgUnblacklistAddress
  ): Promise<MsgUnblacklistAddressResponse> {
    const data = MsgUnblacklistAddress.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bank.Msg",
      "UnblacklistAddress",
      data
    );
    return promise.then((data) =>
      MsgUnblacklistAddressResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
