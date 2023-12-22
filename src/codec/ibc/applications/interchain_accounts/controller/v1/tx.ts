/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { InterchainAccountPacketData } from "../../v1/packet";

export const protobufPackage =
  "ibc.applications.interchain_accounts.controller.v1";

/** MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccount {
  owner: string;
  connectionId: string;
  version: string;
}

/** MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountResponse {
  channelId: string;
  portId: string;
}

/** MsgSendTx defines the payload for Msg/SendTx */
export interface MsgSendTx {
  owner: string;
  connectionId: string;
  packetData?: InterchainAccountPacketData;
  /**
   * Relative timeout timestamp provided will be added to the current block time during transaction execution.
   * The timeout timestamp must be non-zero.
   */
  relativeTimeout: Long;
}

/** MsgSendTxResponse defines the response for MsgSendTx */
export interface MsgSendTxResponse {
  sequence: Long;
}

const baseMsgRegisterInterchainAccount: object = {
  owner: "",
  connectionId: "",
  version: "",
};

export const MsgRegisterInterchainAccount = {
  encode(
    message: MsgRegisterInterchainAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterInterchainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterInterchainAccount,
    } as MsgRegisterInterchainAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterInterchainAccount {
    const message = {
      ...baseMsgRegisterInterchainAccount,
    } as MsgRegisterInterchainAccount;
    message.owner =
      object.owner !== undefined && object.owner !== null
        ? String(object.owner)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterInterchainAccount): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterInterchainAccount>
  ): MsgRegisterInterchainAccount {
    const message = {
      ...baseMsgRegisterInterchainAccount,
    } as MsgRegisterInterchainAccount;
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.version = object.version ?? "";
    return message;
  },
};

const baseMsgRegisterInterchainAccountResponse: object = {
  channelId: "",
  portId: "",
};

export const MsgRegisterInterchainAccountResponse = {
  encode(
    message: MsgRegisterInterchainAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterInterchainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterInterchainAccountResponse,
    } as MsgRegisterInterchainAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterInterchainAccountResponse {
    const message = {
      ...baseMsgRegisterInterchainAccountResponse,
    } as MsgRegisterInterchainAccountResponse;
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterInterchainAccountResponse): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.portId !== undefined && (obj.portId = message.portId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterInterchainAccountResponse>
  ): MsgRegisterInterchainAccountResponse {
    const message = {
      ...baseMsgRegisterInterchainAccountResponse,
    } as MsgRegisterInterchainAccountResponse;
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    return message;
  },
};

const baseMsgSendTx: object = {
  owner: "",
  connectionId: "",
  relativeTimeout: Long.UZERO,
};

export const MsgSendTx = {
  encode(
    message: MsgSendTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.packetData !== undefined) {
      InterchainAccountPacketData.encode(
        message.packetData,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (!message.relativeTimeout.isZero()) {
      writer.uint32(32).uint64(message.relativeTimeout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendTx } as MsgSendTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.packetData = InterchainAccountPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.relativeTimeout = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendTx {
    const message = { ...baseMsgSendTx } as MsgSendTx;
    message.owner =
      object.owner !== undefined && object.owner !== null
        ? String(object.owner)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.packetData =
      object.packetData !== undefined && object.packetData !== null
        ? InterchainAccountPacketData.fromJSON(object.packetData)
        : undefined;
    message.relativeTimeout =
      object.relativeTimeout !== undefined && object.relativeTimeout !== null
        ? Long.fromString(object.relativeTimeout)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgSendTx): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.packetData !== undefined &&
      (obj.packetData = message.packetData
        ? InterchainAccountPacketData.toJSON(message.packetData)
        : undefined);
    message.relativeTimeout !== undefined &&
      (obj.relativeTimeout = (
        message.relativeTimeout || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendTx>): MsgSendTx {
    const message = { ...baseMsgSendTx } as MsgSendTx;
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.packetData =
      object.packetData !== undefined && object.packetData !== null
        ? InterchainAccountPacketData.fromPartial(object.packetData)
        : undefined;
    message.relativeTimeout =
      object.relativeTimeout !== undefined && object.relativeTimeout !== null
        ? Long.fromValue(object.relativeTimeout)
        : Long.UZERO;
    return message;
  },
};

const baseMsgSendTxResponse: object = { sequence: Long.UZERO };

export const MsgSendTxResponse = {
  encode(
    message: MsgSendTxResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendTxResponse } as MsgSendTxResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendTxResponse {
    const message = { ...baseMsgSendTxResponse } as MsgSendTxResponse;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgSendTxResponse): unknown {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendTxResponse>): MsgSendTxResponse {
    const message = { ...baseMsgSendTxResponse } as MsgSendTxResponse;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    return message;
  },
};

/** Msg defines the 27-interchain-accounts/controller Msg service. */
export interface Msg {
  /** RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. */
  RegisterInterchainAccount(
    request: MsgRegisterInterchainAccount
  ): Promise<MsgRegisterInterchainAccountResponse>;
  /** SendTx defines a rpc handler for MsgSendTx. */
  SendTx(request: MsgSendTx): Promise<MsgSendTxResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterInterchainAccount = this.RegisterInterchainAccount.bind(this);
    this.SendTx = this.SendTx.bind(this);
  }
  RegisterInterchainAccount(
    request: MsgRegisterInterchainAccount
  ): Promise<MsgRegisterInterchainAccountResponse> {
    const data = MsgRegisterInterchainAccount.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.interchain_accounts.controller.v1.Msg",
      "RegisterInterchainAccount",
      data
    );
    return promise.then((data) =>
      MsgRegisterInterchainAccountResponse.decode(new _m0.Reader(data))
    );
  }

  SendTx(request: MsgSendTx): Promise<MsgSendTxResponse> {
    const data = MsgSendTx.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.interchain_accounts.controller.v1.Msg",
      "SendTx",
      data
    );
    return promise.then((data) =>
      MsgSendTxResponse.decode(new _m0.Reader(data))
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
