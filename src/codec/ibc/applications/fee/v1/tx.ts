/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Fee, PacketFee } from "./fee";
import { PacketId } from "../../../core/channel/v1/channel";

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
export interface MsgRegisterPayeeResponse {}

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
export interface MsgRegisterCounterpartyPayeeResponse {}

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
export interface MsgPayPacketFeeResponse {}

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
export interface MsgPayPacketFeeAsyncResponse {}

const baseMsgRegisterPayee: object = {
  portId: "",
  channelId: "",
  relayer: "",
  payee: "",
};

export const MsgRegisterPayee = {
  encode(
    message: MsgRegisterPayee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterPayee } as MsgRegisterPayee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterPayee {
    const message = { ...baseMsgRegisterPayee } as MsgRegisterPayee;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.relayer =
      object.relayer !== undefined && object.relayer !== null
        ? String(object.relayer)
        : "";
    message.payee =
      object.payee !== undefined && object.payee !== null
        ? String(object.payee)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterPayee): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterPayee>): MsgRegisterPayee {
    const message = { ...baseMsgRegisterPayee } as MsgRegisterPayee;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
};

const baseMsgRegisterPayeeResponse: object = {};

export const MsgRegisterPayeeResponse = {
  encode(
    _: MsgRegisterPayeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterPayeeResponse,
    } as MsgRegisterPayeeResponse;
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

  fromJSON(_: any): MsgRegisterPayeeResponse {
    const message = {
      ...baseMsgRegisterPayeeResponse,
    } as MsgRegisterPayeeResponse;
    return message;
  },

  toJSON(_: MsgRegisterPayeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterPayeeResponse>
  ): MsgRegisterPayeeResponse {
    const message = {
      ...baseMsgRegisterPayeeResponse,
    } as MsgRegisterPayeeResponse;
    return message;
  },
};

const baseMsgRegisterCounterpartyPayee: object = {
  portId: "",
  channelId: "",
  relayer: "",
  counterpartyPayee: "",
};

export const MsgRegisterCounterpartyPayee = {
  encode(
    message: MsgRegisterCounterpartyPayee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterCounterpartyPayee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterCounterpartyPayee,
    } as MsgRegisterCounterpartyPayee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterCounterpartyPayee {
    const message = {
      ...baseMsgRegisterCounterpartyPayee,
    } as MsgRegisterCounterpartyPayee;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.relayer =
      object.relayer !== undefined && object.relayer !== null
        ? String(object.relayer)
        : "";
    message.counterpartyPayee =
      object.counterpartyPayee !== undefined &&
      object.counterpartyPayee !== null
        ? String(object.counterpartyPayee)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterCounterpartyPayee): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined &&
      (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterCounterpartyPayee>
  ): MsgRegisterCounterpartyPayee {
    const message = {
      ...baseMsgRegisterCounterpartyPayee,
    } as MsgRegisterCounterpartyPayee;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
};

const baseMsgRegisterCounterpartyPayeeResponse: object = {};

export const MsgRegisterCounterpartyPayeeResponse = {
  encode(
    _: MsgRegisterCounterpartyPayeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterCounterpartyPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterCounterpartyPayeeResponse,
    } as MsgRegisterCounterpartyPayeeResponse;
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

  fromJSON(_: any): MsgRegisterCounterpartyPayeeResponse {
    const message = {
      ...baseMsgRegisterCounterpartyPayeeResponse,
    } as MsgRegisterCounterpartyPayeeResponse;
    return message;
  },

  toJSON(_: MsgRegisterCounterpartyPayeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterCounterpartyPayeeResponse>
  ): MsgRegisterCounterpartyPayeeResponse {
    const message = {
      ...baseMsgRegisterCounterpartyPayeeResponse,
    } as MsgRegisterCounterpartyPayeeResponse;
    return message;
  },
};

const baseMsgPayPacketFee: object = {
  sourcePortId: "",
  sourceChannelId: "",
  signer: "",
  relayers: "",
};

export const MsgPayPacketFee = {
  encode(
    message: MsgPayPacketFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPayPacketFee } as MsgPayPacketFee;
    message.relayers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.sourcePortId = reader.string();
          break;
        case 3:
          message.sourceChannelId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPayPacketFee {
    const message = { ...baseMsgPayPacketFee } as MsgPayPacketFee;
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Fee.fromJSON(object.fee)
        : undefined;
    message.sourcePortId =
      object.sourcePortId !== undefined && object.sourcePortId !== null
        ? String(object.sourcePortId)
        : "";
    message.sourceChannelId =
      object.sourceChannelId !== undefined && object.sourceChannelId !== null
        ? String(object.sourceChannelId)
        : "";
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    message.relayers = (object.relayers ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgPayPacketFee): unknown {
    const obj: any = {};
    message.fee !== undefined &&
      (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.sourcePortId !== undefined &&
      (obj.sourcePortId = message.sourcePortId);
    message.sourceChannelId !== undefined &&
      (obj.sourceChannelId = message.sourceChannelId);
    message.signer !== undefined && (obj.signer = message.signer);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPayPacketFee>): MsgPayPacketFee {
    const message = { ...baseMsgPayPacketFee } as MsgPayPacketFee;
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Fee.fromPartial(object.fee)
        : undefined;
    message.sourcePortId = object.sourcePortId ?? "";
    message.sourceChannelId = object.sourceChannelId ?? "";
    message.signer = object.signer ?? "";
    message.relayers = (object.relayers ?? []).map((e) => e);
    return message;
  },
};

const baseMsgPayPacketFeeResponse: object = {};

export const MsgPayPacketFeeResponse = {
  encode(
    _: MsgPayPacketFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPayPacketFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPayPacketFeeResponse,
    } as MsgPayPacketFeeResponse;
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

  fromJSON(_: any): MsgPayPacketFeeResponse {
    const message = {
      ...baseMsgPayPacketFeeResponse,
    } as MsgPayPacketFeeResponse;
    return message;
  },

  toJSON(_: MsgPayPacketFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgPayPacketFeeResponse>
  ): MsgPayPacketFeeResponse {
    const message = {
      ...baseMsgPayPacketFeeResponse,
    } as MsgPayPacketFeeResponse;
    return message;
  },
};

const baseMsgPayPacketFeeAsync: object = {};

export const MsgPayPacketFeeAsync = {
  encode(
    message: MsgPayPacketFeeAsync,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetFee !== undefined) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPayPacketFeeAsync {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPayPacketFeeAsync } as MsgPayPacketFeeAsync;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFee = PacketFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPayPacketFeeAsync {
    const message = { ...baseMsgPayPacketFeeAsync } as MsgPayPacketFeeAsync;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromJSON(object.packetId)
        : undefined;
    message.packetFee =
      object.packetFee !== undefined && object.packetFee !== null
        ? PacketFee.fromJSON(object.packetFee)
        : undefined;
    return message;
  },

  toJSON(message: MsgPayPacketFeeAsync): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId
        ? PacketId.toJSON(message.packetId)
        : undefined);
    message.packetFee !== undefined &&
      (obj.packetFee = message.packetFee
        ? PacketFee.toJSON(message.packetFee)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPayPacketFeeAsync>): MsgPayPacketFeeAsync {
    const message = { ...baseMsgPayPacketFeeAsync } as MsgPayPacketFeeAsync;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromPartial(object.packetId)
        : undefined;
    message.packetFee =
      object.packetFee !== undefined && object.packetFee !== null
        ? PacketFee.fromPartial(object.packetFee)
        : undefined;
    return message;
  },
};

const baseMsgPayPacketFeeAsyncResponse: object = {};

export const MsgPayPacketFeeAsyncResponse = {
  encode(
    _: MsgPayPacketFeeAsyncResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPayPacketFeeAsyncResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPayPacketFeeAsyncResponse,
    } as MsgPayPacketFeeAsyncResponse;
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

  fromJSON(_: any): MsgPayPacketFeeAsyncResponse {
    const message = {
      ...baseMsgPayPacketFeeAsyncResponse,
    } as MsgPayPacketFeeAsyncResponse;
    return message;
  },

  toJSON(_: MsgPayPacketFeeAsyncResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgPayPacketFeeAsyncResponse>
  ): MsgPayPacketFeeAsyncResponse {
    const message = {
      ...baseMsgPayPacketFeeAsyncResponse,
    } as MsgPayPacketFeeAsyncResponse;
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
  RegisterCounterpartyPayee(
    request: MsgRegisterCounterpartyPayee
  ): Promise<MsgRegisterCounterpartyPayeeResponse>;
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
  PayPacketFeeAsync(
    request: MsgPayPacketFeeAsync
  ): Promise<MsgPayPacketFeeAsyncResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterPayee = this.RegisterPayee.bind(this);
    this.RegisterCounterpartyPayee = this.RegisterCounterpartyPayee.bind(this);
    this.PayPacketFee = this.PayPacketFee.bind(this);
    this.PayPacketFeeAsync = this.PayPacketFeeAsync.bind(this);
  }
  RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse> {
    const data = MsgRegisterPayee.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Msg",
      "RegisterPayee",
      data
    );
    return promise.then((data) =>
      MsgRegisterPayeeResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterCounterpartyPayee(
    request: MsgRegisterCounterpartyPayee
  ): Promise<MsgRegisterCounterpartyPayeeResponse> {
    const data = MsgRegisterCounterpartyPayee.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Msg",
      "RegisterCounterpartyPayee",
      data
    );
    return promise.then((data) =>
      MsgRegisterCounterpartyPayeeResponse.decode(new _m0.Reader(data))
    );
  }

  PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse> {
    const data = MsgPayPacketFee.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Msg",
      "PayPacketFee",
      data
    );
    return promise.then((data) =>
      MsgPayPacketFeeResponse.decode(new _m0.Reader(data))
    );
  }

  PayPacketFeeAsync(
    request: MsgPayPacketFeeAsync
  ): Promise<MsgPayPacketFeeAsyncResponse> {
    const data = MsgPayPacketFeeAsync.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Msg",
      "PayPacketFeeAsync",
      data
    );
    return promise.then((data) =>
      MsgPayPacketFeeAsyncResponse.decode(new _m0.Reader(data))
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
