/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.bank";

export interface MsgBlacklistAddress {
  authority: string;
  address: string;
}

export interface MsgBlacklistAddressResponse {
}

export interface MsgUnblacklistAddress {
  authority: string;
  address: string;
}

export interface MsgUnblacklistAddressResponse {
}

function createBaseMsgBlacklistAddress(): MsgBlacklistAddress {
  return { authority: "", address: "" };
}

export const MsgBlacklistAddress = {
  encode(message: MsgBlacklistAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlacklistAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlacklistAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBlacklistAddress {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgBlacklistAddress): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<MsgBlacklistAddress>): MsgBlacklistAddress {
    return MsgBlacklistAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBlacklistAddress>): MsgBlacklistAddress {
    const message = createBaseMsgBlacklistAddress();
    message.authority = object.authority ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgBlacklistAddressResponse(): MsgBlacklistAddressResponse {
  return {};
}

export const MsgBlacklistAddressResponse = {
  encode(_: MsgBlacklistAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlacklistAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlacklistAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgBlacklistAddressResponse {
    return {};
  },

  toJSON(_: MsgBlacklistAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgBlacklistAddressResponse>): MsgBlacklistAddressResponse {
    return MsgBlacklistAddressResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgBlacklistAddressResponse>): MsgBlacklistAddressResponse {
    const message = createBaseMsgBlacklistAddressResponse();
    return message;
  },
};

function createBaseMsgUnblacklistAddress(): MsgUnblacklistAddress {
  return { authority: "", address: "" };
}

export const MsgUnblacklistAddress = {
  encode(message: MsgUnblacklistAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblacklistAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnblacklistAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUnblacklistAddress {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgUnblacklistAddress): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<MsgUnblacklistAddress>): MsgUnblacklistAddress {
    return MsgUnblacklistAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUnblacklistAddress>): MsgUnblacklistAddress {
    const message = createBaseMsgUnblacklistAddress();
    message.authority = object.authority ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgUnblacklistAddressResponse(): MsgUnblacklistAddressResponse {
  return {};
}

export const MsgUnblacklistAddressResponse = {
  encode(_: MsgUnblacklistAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblacklistAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnblacklistAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUnblacklistAddressResponse {
    return {};
  },

  toJSON(_: MsgUnblacklistAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUnblacklistAddressResponse>): MsgUnblacklistAddressResponse {
    return MsgUnblacklistAddressResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUnblacklistAddressResponse>): MsgUnblacklistAddressResponse {
    const message = createBaseMsgUnblacklistAddressResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  BlacklistAddress(request: MsgBlacklistAddress): Promise<MsgBlacklistAddressResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UnblacklistAddress(request: MsgUnblacklistAddress): Promise<MsgUnblacklistAddressResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.bank.Msg";
    this.rpc = rpc;
    this.BlacklistAddress = this.BlacklistAddress.bind(this);
    this.UnblacklistAddress = this.UnblacklistAddress.bind(this);
  }
  BlacklistAddress(request: MsgBlacklistAddress): Promise<MsgBlacklistAddressResponse> {
    const data = MsgBlacklistAddress.encode(request).finish();
    const promise = this.rpc.request(this.service, "BlacklistAddress", data);
    return promise.then((data) => MsgBlacklistAddressResponse.decode(_m0.Reader.create(data)));
  }

  UnblacklistAddress(request: MsgUnblacklistAddress): Promise<MsgUnblacklistAddressResponse> {
    const data = MsgUnblacklistAddress.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnblacklistAddress", data);
    return promise.then((data) => MsgUnblacklistAddressResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
