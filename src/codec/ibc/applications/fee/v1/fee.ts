/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PacketId } from "../../../core/channel/v1/channel";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "ibc.applications.fee.v1";

/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
  /** the packet receive fee */
  recvFee: Coin[];
  /** the packet acknowledgement fee */
  ackFee: Coin[];
  /** the packet timeout fee */
  timeoutFee: Coin[];
}

/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: Fee;
  /** the refund address for unspent fees */
  refundAddress: string;
  /** optional list of relayers permitted to receive fees */
  relayers: string[];
}

/** PacketFees contains a list of type PacketFee */
export interface PacketFees {
  /** list of packet fees */
  packetFees: PacketFee[];
}

/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFees {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId?: PacketId;
  /** list of packet fees */
  packetFees: PacketFee[];
}

const baseFee: object = {};

export const Fee = {
  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.recvFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ackFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timeoutFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFee } as Fee;
    message.recvFee = [];
    message.ackFee = [];
    message.timeoutFee = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ackFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timeoutFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fee {
    const message = { ...baseFee } as Fee;
    message.recvFee = (object.recvFee ?? []).map((e: any) => Coin.fromJSON(e));
    message.ackFee = (object.ackFee ?? []).map((e: any) => Coin.fromJSON(e));
    message.timeoutFee = (object.timeoutFee ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Fee): unknown {
    const obj: any = {};
    if (message.recvFee) {
      obj.recvFee = message.recvFee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.recvFee = [];
    }
    if (message.ackFee) {
      obj.ackFee = message.ackFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.ackFee = [];
    }
    if (message.timeoutFee) {
      obj.timeoutFee = message.timeoutFee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.timeoutFee = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Fee>): Fee {
    const message = { ...baseFee } as Fee;
    message.recvFee = (object.recvFee ?? []).map((e) => Coin.fromPartial(e));
    message.ackFee = (object.ackFee ?? []).map((e) => Coin.fromPartial(e));
    message.timeoutFee = (object.timeoutFee ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    return message;
  },
};

const basePacketFee: object = { refundAddress: "", relayers: "" };

export const PacketFee = {
  encode(
    message: PacketFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.refundAddress !== "") {
      writer.uint32(18).string(message.refundAddress);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacketFee } as PacketFee;
    message.relayers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.refundAddress = reader.string();
          break;
        case 3:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PacketFee {
    const message = { ...basePacketFee } as PacketFee;
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Fee.fromJSON(object.fee)
        : undefined;
    message.refundAddress =
      object.refundAddress !== undefined && object.refundAddress !== null
        ? String(object.refundAddress)
        : "";
    message.relayers = (object.relayers ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: PacketFee): unknown {
    const obj: any = {};
    message.fee !== undefined &&
      (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.refundAddress !== undefined &&
      (obj.refundAddress = message.refundAddress);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PacketFee>): PacketFee {
    const message = { ...basePacketFee } as PacketFee;
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Fee.fromPartial(object.fee)
        : undefined;
    message.refundAddress = object.refundAddress ?? "";
    message.relayers = (object.relayers ?? []).map((e) => e);
    return message;
  },
};

const basePacketFees: object = {};

export const PacketFees = {
  encode(
    message: PacketFees,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.packetFees) {
      PacketFee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacketFees } as PacketFees;
    message.packetFees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PacketFees {
    const message = { ...basePacketFees } as PacketFees;
    message.packetFees = (object.packetFees ?? []).map((e: any) =>
      PacketFee.fromJSON(e)
    );
    return message;
  },

  toJSON(message: PacketFees): unknown {
    const obj: any = {};
    if (message.packetFees) {
      obj.packetFees = message.packetFees.map((e) =>
        e ? PacketFee.toJSON(e) : undefined
      );
    } else {
      obj.packetFees = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PacketFees>): PacketFees {
    const message = { ...basePacketFees } as PacketFees;
    message.packetFees = (object.packetFees ?? []).map((e) =>
      PacketFee.fromPartial(e)
    );
    return message;
  },
};

const baseIdentifiedPacketFees: object = {};

export const IdentifiedPacketFees = {
  encode(
    message: IdentifiedPacketFees,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.packetFees) {
      PacketFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IdentifiedPacketFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentifiedPacketFees } as IdentifiedPacketFees;
    message.packetFees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IdentifiedPacketFees {
    const message = { ...baseIdentifiedPacketFees } as IdentifiedPacketFees;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromJSON(object.packetId)
        : undefined;
    message.packetFees = (object.packetFees ?? []).map((e: any) =>
      PacketFee.fromJSON(e)
    );
    return message;
  },

  toJSON(message: IdentifiedPacketFees): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId
        ? PacketId.toJSON(message.packetId)
        : undefined);
    if (message.packetFees) {
      obj.packetFees = message.packetFees.map((e) =>
        e ? PacketFee.toJSON(e) : undefined
      );
    } else {
      obj.packetFees = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<IdentifiedPacketFees>): IdentifiedPacketFees {
    const message = { ...baseIdentifiedPacketFees } as IdentifiedPacketFees;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromPartial(object.packetId)
        : undefined;
    message.packetFees = (object.packetFees ?? []).map((e) =>
      PacketFee.fromPartial(e)
    );
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
