/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PacketId } from "../../../core/channel/v1/channel";
import { Fee, PacketFee } from "./fee";

export const protobufPackage = "ibc.applications.fee.v1";

/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}

/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {
}

/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}

/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {
}

/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: Fee;
  /** the source port unique identifier */
  sourcePortId: string;
  /** the source channel unique identifer */
  sourceChannelId: string;
  /** account address to refund fee if necessary */
  signer: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers: string[];
}

/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {
}

/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId?: PacketId;
  /** the packet fee associated with a particular IBC packet */
  packetFee?: PacketFee;
}

/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {
}

function createBaseMsgRegisterPayee(): MsgRegisterPayee {
  return { portId: "", channelId: "", relayer: "", payee: "" };
}

export const MsgRegisterPayee = {
  encode(message: MsgRegisterPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(34).string(message.payee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPayee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.portId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.relayer = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterPayee {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : "",
    };
  },

  toJSON(message: MsgRegisterPayee): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterPayee>): MsgRegisterPayee {
    return MsgRegisterPayee.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRegisterPayee>): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
};

function createBaseMsgRegisterPayeeResponse(): MsgRegisterPayeeResponse {
  return {};
}

export const MsgRegisterPayeeResponse = {
  encode(_: MsgRegisterPayeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayeeResponse();
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

  fromJSON(_: any): MsgRegisterPayeeResponse {
    return {};
  },

  toJSON(_: MsgRegisterPayeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterPayeeResponse>): MsgRegisterPayeeResponse {
    return MsgRegisterPayeeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRegisterPayeeResponse>): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
};

function createBaseMsgRegisterCounterpartyPayee(): MsgRegisterCounterpartyPayee {
  return { portId: "", channelId: "", relayer: "", counterpartyPayee: "" };
}

export const MsgRegisterCounterpartyPayee = {
  encode(message: MsgRegisterCounterpartyPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(34).string(message.counterpartyPayee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyPayee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.portId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.relayer = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.counterpartyPayee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterCounterpartyPayee {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : "",
    };
  },

  toJSON(message: MsgRegisterCounterpartyPayee): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterCounterpartyPayee>): MsgRegisterCounterpartyPayee {
    return MsgRegisterCounterpartyPayee.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRegisterCounterpartyPayee>): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
};

function createBaseMsgRegisterCounterpartyPayeeResponse(): MsgRegisterCounterpartyPayeeResponse {
  return {};
}

export const MsgRegisterCounterpartyPayeeResponse = {
  encode(_: MsgRegisterCounterpartyPayeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
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

  fromJSON(_: any): MsgRegisterCounterpartyPayeeResponse {
    return {};
  },

  toJSON(_: MsgRegisterCounterpartyPayeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterCounterpartyPayeeResponse>): MsgRegisterCounterpartyPayeeResponse {
    return MsgRegisterCounterpartyPayeeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRegisterCounterpartyPayeeResponse>): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
};

function createBaseMsgPayPacketFee(): MsgPayPacketFee {
  return { fee: undefined, sourcePortId: "", sourceChannelId: "", signer: "", relayers: [] };
}

export const MsgPayPacketFee = {
  encode(message: MsgPayPacketFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.sourcePortId !== "") {
      writer.uint32(18).string(message.sourcePortId);
    }
    if (message.sourceChannelId !== "") {
      writer.uint32(26).string(message.sourceChannelId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fee = Fee.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourcePortId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sourceChannelId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signer = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.relayers.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPayPacketFee {
    return {
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      sourcePortId: isSet(object.sourcePortId) ? String(object.sourcePortId) : "",
      sourceChannelId: isSet(object.sourceChannelId) ? String(object.sourceChannelId) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgPayPacketFee): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.sourcePortId !== undefined && (obj.sourcePortId = message.sourcePortId);
    message.sourceChannelId !== undefined && (obj.sourceChannelId = message.sourceChannelId);
    message.signer !== undefined && (obj.signer = message.signer);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgPayPacketFee>): MsgPayPacketFee {
    return MsgPayPacketFee.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgPayPacketFee>): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    message.fee = (object.fee !== undefined && object.fee !== null) ? Fee.fromPartial(object.fee) : undefined;
    message.sourcePortId = object.sourcePortId ?? "";
    message.sourceChannelId = object.sourceChannelId ?? "";
    message.signer = object.signer ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgPayPacketFeeResponse(): MsgPayPacketFeeResponse {
  return {};
}

export const MsgPayPacketFeeResponse = {
  encode(_: MsgPayPacketFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeResponse();
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

  fromJSON(_: any): MsgPayPacketFeeResponse {
    return {};
  },

  toJSON(_: MsgPayPacketFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgPayPacketFeeResponse>): MsgPayPacketFeeResponse {
    return MsgPayPacketFeeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgPayPacketFeeResponse>): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
};

function createBaseMsgPayPacketFeeAsync(): MsgPayPacketFeeAsync {
  return { packetId: undefined, packetFee: undefined };
}

export const MsgPayPacketFeeAsync = {
  encode(message: MsgPayPacketFeeAsync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetFee !== undefined) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsync {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packetId = PacketId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.packetFee = PacketFee.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPayPacketFeeAsync {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
      packetFee: isSet(object.packetFee) ? PacketFee.fromJSON(object.packetFee) : undefined,
    };
  },

  toJSON(message: MsgPayPacketFeeAsync): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    message.packetFee !== undefined &&
      (obj.packetFee = message.packetFee ? PacketFee.toJSON(message.packetFee) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgPayPacketFeeAsync>): MsgPayPacketFeeAsync {
    return MsgPayPacketFeeAsync.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgPayPacketFeeAsync>): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    message.packetId = (object.packetId !== undefined && object.packetId !== null)
      ? PacketId.fromPartial(object.packetId)
      : undefined;
    message.packetFee = (object.packetFee !== undefined && object.packetFee !== null)
      ? PacketFee.fromPartial(object.packetFee)
      : undefined;
    return message;
  },
};

function createBaseMsgPayPacketFeeAsyncResponse(): MsgPayPacketFeeAsyncResponse {
  return {};
}

export const MsgPayPacketFeeAsyncResponse = {
  encode(_: MsgPayPacketFeeAsyncResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsyncResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsyncResponse();
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

  fromJSON(_: any): MsgPayPacketFeeAsyncResponse {
    return {};
  },

  toJSON(_: MsgPayPacketFeeAsyncResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgPayPacketFeeAsyncResponse>): MsgPayPacketFeeAsyncResponse {
    return MsgPayPacketFeeAsyncResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgPayPacketFeeAsyncResponse>): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
};

/** Msg defines the ICS29 Msg service. */
export interface Msg {
  /**
   * RegisterPayee defines a rpc handler method for MsgRegisterPayee
   * RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
   * payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
   * the source chain from which packets originate as this is where fee distribution takes place. This function may be
   * called more than once by a relayer, in which case, the latest payee is always used.
   */
  RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse>;
  /**
   * RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
   * RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
   * payee address before relaying. This ensures they will be properly compensated for forward relaying since
   * the destination chain must include the registered counterparty payee address in the acknowledgement. This function
   * may be called more than once by a relayer, in which case, the latest counterparty payee address is always used.
   */
  RegisterCounterpartyPayee(request: MsgRegisterCounterpartyPayee): Promise<MsgRegisterCounterpartyPayeeResponse>;
  /**
   * PayPacketFee defines a rpc handler method for MsgPayPacketFee
   * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
   * incentivize the relaying of the packet at the next sequence
   * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
   * initiates the lifecycle of the incentivized packet
   */
  PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse>;
  /**
   * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
   * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
   * incentivize the relaying of a known packet (i.e. at a particular sequence)
   */
  PayPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ibc.applications.fee.v1.Msg";
    this.rpc = rpc;
    this.RegisterPayee = this.RegisterPayee.bind(this);
    this.RegisterCounterpartyPayee = this.RegisterCounterpartyPayee.bind(this);
    this.PayPacketFee = this.PayPacketFee.bind(this);
    this.PayPacketFeeAsync = this.PayPacketFeeAsync.bind(this);
  }
  RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse> {
    const data = MsgRegisterPayee.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterPayee", data);
    return promise.then((data) => MsgRegisterPayeeResponse.decode(_m0.Reader.create(data)));
  }

  RegisterCounterpartyPayee(request: MsgRegisterCounterpartyPayee): Promise<MsgRegisterCounterpartyPayeeResponse> {
    const data = MsgRegisterCounterpartyPayee.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterCounterpartyPayee", data);
    return promise.then((data) => MsgRegisterCounterpartyPayeeResponse.decode(_m0.Reader.create(data)));
  }

  PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse> {
    const data = MsgPayPacketFee.encode(request).finish();
    const promise = this.rpc.request(this.service, "PayPacketFee", data);
    return promise.then((data) => MsgPayPacketFeeResponse.decode(_m0.Reader.create(data)));
  }

  PayPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse> {
    const data = MsgPayPacketFeeAsync.encode(request).finish();
    const promise = this.rpc.request(this.service, "PayPacketFeeAsync", data);
    return promise.then((data) => MsgPayPacketFeeAsyncResponse.decode(_m0.Reader.create(data)));
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
