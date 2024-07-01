/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Height } from "../../client/v1/client";

export const protobufPackage = "ibc.core.channel.v1";

/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN, FLUSHING, FLUSHCOMPLETE or UNINITIALIZED.
 */
export enum State {
  /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  /** STATE_INIT - A channel has just started the opening handshake. */
  STATE_INIT = 1,
  /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
  STATE_TRYOPEN = 2,
  /**
   * STATE_OPEN - A channel has completed the handshake. Open channels are
   * ready to send and receive packets.
   */
  STATE_OPEN = 3,
  /**
   * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
   * packets.
   */
  STATE_CLOSED = 4,
  /** STATE_FLUSHING - A channel has just accepted the upgrade handshake attempt and is flushing in-flight packets. */
  STATE_FLUSHING = 5,
  /** STATE_FLUSHCOMPLETE - A channel has just completed flushing any in-flight packets. */
  STATE_FLUSHCOMPLETE = 6,
  UNRECOGNIZED = -1,
}

export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;
    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;
    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;
    case 4:
    case "STATE_CLOSED":
      return State.STATE_CLOSED;
    case 5:
    case "STATE_FLUSHING":
      return State.STATE_FLUSHING;
    case 6:
    case "STATE_FLUSHCOMPLETE":
      return State.STATE_FLUSHCOMPLETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}

export function stateToJSON(object: State): string {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case State.STATE_INIT:
      return "STATE_INIT";
    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";
    case State.STATE_OPEN:
      return "STATE_OPEN";
    case State.STATE_CLOSED:
      return "STATE_CLOSED";
    case State.STATE_FLUSHING:
      return "STATE_FLUSHING";
    case State.STATE_FLUSHCOMPLETE:
      return "STATE_FLUSHCOMPLETE";
    default:
      return "UNKNOWN";
  }
}

/** Order defines if a channel is ORDERED or UNORDERED */
export enum Order {
  /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
  ORDER_NONE_UNSPECIFIED = 0,
  /**
   * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
   * which they were sent.
   */
  ORDER_UNORDERED = 1,
  /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
  ORDER_ORDERED = 2,
  UNRECOGNIZED = -1,
}

export function orderFromJSON(object: any): Order {
  switch (object) {
    case 0:
    case "ORDER_NONE_UNSPECIFIED":
      return Order.ORDER_NONE_UNSPECIFIED;
    case 1:
    case "ORDER_UNORDERED":
      return Order.ORDER_UNORDERED;
    case 2:
    case "ORDER_ORDERED":
      return Order.ORDER_ORDERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order.UNRECOGNIZED;
  }
}

export function orderToJSON(object: Order): string {
  switch (object) {
    case Order.ORDER_NONE_UNSPECIFIED:
      return "ORDER_NONE_UNSPECIFIED";
    case Order.ORDER_UNORDERED:
      return "ORDER_UNORDERED";
    case Order.ORDER_ORDERED:
      return "ORDER_ORDERED";
    default:
      return "UNKNOWN";
  }
}

/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */
export interface Channel {
  /** current state of the channel end */
  state: State;
  /** whether the channel is ordered or unordered */
  ordering: Order;
  /** counterparty channel end */
  counterparty?: Counterparty;
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connectionHops: string[];
  /** opaque channel version, which is agreed upon during the handshake */
  version: string;
  /**
   * upgrade sequence indicates the latest upgrade attempt performed by this channel
   * the value of 0 indicates the channel has never been upgraded
   */
  upgradeSequence: Long;
}

/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 */
export interface IdentifiedChannel {
  /** current state of the channel end */
  state: State;
  /** whether the channel is ordered or unordered */
  ordering: Order;
  /** counterparty channel end */
  counterparty?: Counterparty;
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connectionHops: string[];
  /** opaque channel version, which is agreed upon during the handshake */
  version: string;
  /** port identifier */
  portId: string;
  /** channel identifier */
  channelId: string;
  /**
   * upgrade sequence indicates the latest upgrade attempt performed by this channel
   * the value of 0 indicates the channel has never been upgraded
   */
  upgradeSequence: Long;
}

/** Counterparty defines a channel end counterparty */
export interface Counterparty {
  /** port on the counterparty chain which owns the other end of the channel. */
  portId: string;
  /** channel end on the counterparty chain */
  channelId: string;
}

/** Packet defines a type that carries data across different chains through IBC */
export interface Packet {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence: Long;
  /** identifies the port on the sending chain. */
  sourcePort: string;
  /** identifies the channel end on the sending chain. */
  sourceChannel: string;
  /** identifies the port on the receiving chain. */
  destinationPort: string;
  /** identifies the channel end on the receiving chain. */
  destinationChannel: string;
  /** actual opaque bytes transferred directly to the application module */
  data: Uint8Array;
  /** block height after which the packet times out */
  timeoutHeight?: Height;
  /** block timestamp (in nanoseconds) after which the packet times out */
  timeoutTimestamp: Long;
}

/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketState {
  /** channel port identifier. */
  portId: string;
  /** channel unique identifier. */
  channelId: string;
  /** packet sequence. */
  sequence: Long;
  /** embedded data that represents packet state. */
  data: Uint8Array;
}

/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 */
export interface PacketId {
  /** channel port identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** packet sequence */
  sequence: Long;
}

/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 */
export interface Acknowledgement {
  result: Uint8Array | undefined;
  error: string | undefined;
}

/**
 * Timeout defines an execution deadline structure for 04-channel handlers.
 * This includes packet lifecycle handlers as well as the upgrade handshake handlers.
 * A valid Timeout contains either one or both of a timestamp and block height (sequence).
 */
export interface Timeout {
  /** block height after which the packet or upgrade times out */
  height?: Height;
  /** block timestamp (in nanoseconds) after which the packet or upgrade times out */
  timestamp: Long;
}

/** Params defines the set of IBC channel parameters. */
export interface Params {
  /** the relative timeout after which channel upgrades will time out. */
  upgradeTimeout?: Timeout;
}

const baseChannel: object = {
  state: 0,
  ordering: 0,
  connectionHops: "",
  version: "",
  upgradeSequence: Long.UZERO,
};

export const Channel = {
  encode(
    message: Channel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(
        message.counterparty,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.connectionHops) {
      writer.uint32(34).string(v!);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (!message.upgradeSequence.isZero()) {
      writer.uint32(48).uint64(message.upgradeSequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Channel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChannel } as Channel;
    message.connectionHops = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.ordering = reader.int32() as any;
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connectionHops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.upgradeSequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Channel {
    const message = { ...baseChannel } as Channel;
    message.state =
      object.state !== undefined && object.state !== null
        ? stateFromJSON(object.state)
        : 0;
    message.ordering =
      object.ordering !== undefined && object.ordering !== null
        ? orderFromJSON(object.ordering)
        : 0;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromJSON(object.counterparty)
        : undefined;
    message.connectionHops = (object.connectionHops ?? []).map((e: any) =>
      String(e)
    );
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.upgradeSequence =
      object.upgradeSequence !== undefined && object.upgradeSequence !== null
        ? Long.fromString(object.upgradeSequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Channel): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.ordering !== undefined &&
      (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty
        ? Counterparty.toJSON(message.counterparty)
        : undefined);
    if (message.connectionHops) {
      obj.connectionHops = message.connectionHops.map((e) => e);
    } else {
      obj.connectionHops = [];
    }
    message.version !== undefined && (obj.version = message.version);
    message.upgradeSequence !== undefined &&
      (obj.upgradeSequence = (
        message.upgradeSequence || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Channel>): Channel {
    const message = { ...baseChannel } as Channel;
    message.state = object.state ?? 0;
    message.ordering = object.ordering ?? 0;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromPartial(object.counterparty)
        : undefined;
    message.connectionHops = (object.connectionHops ?? []).map((e) => e);
    message.version = object.version ?? "";
    message.upgradeSequence =
      object.upgradeSequence !== undefined && object.upgradeSequence !== null
        ? Long.fromValue(object.upgradeSequence)
        : Long.UZERO;
    return message;
  },
};

const baseIdentifiedChannel: object = {
  state: 0,
  ordering: 0,
  connectionHops: "",
  version: "",
  portId: "",
  channelId: "",
  upgradeSequence: Long.UZERO,
};

export const IdentifiedChannel = {
  encode(
    message: IdentifiedChannel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(
        message.counterparty,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.connectionHops) {
      writer.uint32(34).string(v!);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.portId !== "") {
      writer.uint32(50).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(58).string(message.channelId);
    }
    if (!message.upgradeSequence.isZero()) {
      writer.uint32(64).uint64(message.upgradeSequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentifiedChannel } as IdentifiedChannel;
    message.connectionHops = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.ordering = reader.int32() as any;
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connectionHops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.portId = reader.string();
          break;
        case 7:
          message.channelId = reader.string();
          break;
        case 8:
          message.upgradeSequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IdentifiedChannel {
    const message = { ...baseIdentifiedChannel } as IdentifiedChannel;
    message.state =
      object.state !== undefined && object.state !== null
        ? stateFromJSON(object.state)
        : 0;
    message.ordering =
      object.ordering !== undefined && object.ordering !== null
        ? orderFromJSON(object.ordering)
        : 0;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromJSON(object.counterparty)
        : undefined;
    message.connectionHops = (object.connectionHops ?? []).map((e: any) =>
      String(e)
    );
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.upgradeSequence =
      object.upgradeSequence !== undefined && object.upgradeSequence !== null
        ? Long.fromString(object.upgradeSequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: IdentifiedChannel): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.ordering !== undefined &&
      (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty
        ? Counterparty.toJSON(message.counterparty)
        : undefined);
    if (message.connectionHops) {
      obj.connectionHops = message.connectionHops.map((e) => e);
    } else {
      obj.connectionHops = [];
    }
    message.version !== undefined && (obj.version = message.version);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.upgradeSequence !== undefined &&
      (obj.upgradeSequence = (
        message.upgradeSequence || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<IdentifiedChannel>): IdentifiedChannel {
    const message = { ...baseIdentifiedChannel } as IdentifiedChannel;
    message.state = object.state ?? 0;
    message.ordering = object.ordering ?? 0;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromPartial(object.counterparty)
        : undefined;
    message.connectionHops = (object.connectionHops ?? []).map((e) => e);
    message.version = object.version ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.upgradeSequence =
      object.upgradeSequence !== undefined && object.upgradeSequence !== null
        ? Long.fromValue(object.upgradeSequence)
        : Long.UZERO;
    return message;
  },
};

const baseCounterparty: object = { portId: "", channelId: "" };

export const Counterparty = {
  encode(
    message: Counterparty,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Counterparty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCounterparty } as Counterparty;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Counterparty {
    const message = { ...baseCounterparty } as Counterparty;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    return message;
  },

  toJSON(message: Counterparty): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<Counterparty>): Counterparty {
    const message = { ...baseCounterparty } as Counterparty;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

const basePacket: object = {
  sequence: Long.UZERO,
  sourcePort: "",
  sourceChannel: "",
  destinationPort: "",
  destinationChannel: "",
  timeoutTimestamp: Long.UZERO,
};

export const Packet = {
  encode(
    message: Packet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.sourcePort !== "") {
      writer.uint32(18).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }
    if (message.destinationPort !== "") {
      writer.uint32(34).string(message.destinationPort);
    }
    if (message.destinationChannel !== "") {
      writer.uint32(42).string(message.destinationChannel);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(58).fork()).ldelim();
    }
    if (!message.timeoutTimestamp.isZero()) {
      writer.uint32(64).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacket } as Packet;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64() as Long;
          break;
        case 2:
          message.sourcePort = reader.string();
          break;
        case 3:
          message.sourceChannel = reader.string();
          break;
        case 4:
          message.destinationPort = reader.string();
          break;
        case 5:
          message.destinationChannel = reader.string();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        case 7:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.timeoutTimestamp = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet {
    const message = { ...basePacket } as Packet;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    message.sourcePort =
      object.sourcePort !== undefined && object.sourcePort !== null
        ? String(object.sourcePort)
        : "";
    message.sourceChannel =
      object.sourceChannel !== undefined && object.sourceChannel !== null
        ? String(object.sourceChannel)
        : "";
    message.destinationPort =
      object.destinationPort !== undefined && object.destinationPort !== null
        ? String(object.destinationPort)
        : "";
    message.destinationChannel =
      object.destinationChannel !== undefined &&
      object.destinationChannel !== null
        ? String(object.destinationChannel)
        : "";
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    message.timeoutHeight =
      object.timeoutHeight !== undefined && object.timeoutHeight !== null
        ? Height.fromJSON(object.timeoutHeight)
        : undefined;
    message.timeoutTimestamp =
      object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null
        ? Long.fromString(object.timeoutTimestamp)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Packet): unknown {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined &&
      (obj.sourceChannel = message.sourceChannel);
    message.destinationPort !== undefined &&
      (obj.destinationPort = message.destinationPort);
    message.destinationChannel !== undefined &&
      (obj.destinationChannel = message.destinationChannel);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.timeoutHeight !== undefined &&
      (obj.timeoutHeight = message.timeoutHeight
        ? Height.toJSON(message.timeoutHeight)
        : undefined);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = (
        message.timeoutTimestamp || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Packet>): Packet {
    const message = { ...basePacket } as Packet;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.destinationPort = object.destinationPort ?? "";
    message.destinationChannel = object.destinationChannel ?? "";
    message.data = object.data ?? new Uint8Array();
    message.timeoutHeight =
      object.timeoutHeight !== undefined && object.timeoutHeight !== null
        ? Height.fromPartial(object.timeoutHeight)
        : undefined;
    message.timeoutTimestamp =
      object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null
        ? Long.fromValue(object.timeoutTimestamp)
        : Long.UZERO;
    return message;
  },
};

const basePacketState: object = {
  portId: "",
  channelId: "",
  sequence: Long.UZERO,
};

export const PacketState = {
  encode(
    message: PacketState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacketState } as PacketState;
    message.data = new Uint8Array();
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
          message.sequence = reader.uint64() as Long;
          break;
        case 4:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PacketState {
    const message = { ...basePacketState } as PacketState;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    return message;
  },

  toJSON(message: PacketState): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<PacketState>): PacketState {
    const message = { ...basePacketState } as PacketState;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

const basePacketId: object = {
  portId: "",
  channelId: "",
  sequence: Long.UZERO,
};

export const PacketId = {
  encode(
    message: PacketId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacketId } as PacketId;
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
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PacketId {
    const message = { ...basePacketId } as PacketId;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: PacketId): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<PacketId>): PacketId {
    const message = { ...basePacketId } as PacketId;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    return message;
  },
};

const baseAcknowledgement: object = {};

export const Acknowledgement = {
  encode(
    message: Acknowledgement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== undefined) {
      writer.uint32(170).bytes(message.result);
    }
    if (message.error !== undefined) {
      writer.uint32(178).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Acknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAcknowledgement } as Acknowledgement;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;
        case 22:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Acknowledgement {
    const message = { ...baseAcknowledgement } as Acknowledgement;
    message.result =
      object.result !== undefined && object.result !== null
        ? bytesFromBase64(object.result)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? String(object.error)
        : undefined;
    return message;
  },

  toJSON(message: Acknowledgement): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result =
        message.result !== undefined
          ? base64FromBytes(message.result)
          : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<Acknowledgement>): Acknowledgement {
    const message = { ...baseAcknowledgement } as Acknowledgement;
    message.result = object.result ?? undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

const baseTimeout: object = { timestamp: Long.UZERO };

export const Timeout = {
  encode(
    message: Timeout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimeout } as Timeout;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.timestamp = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Timeout {
    const message = { ...baseTimeout } as Timeout;
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromJSON(object.height)
        : undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Timeout): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Timeout>): Timeout {
    const message = { ...baseTimeout } as Timeout;
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromPartial(object.height)
        : undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.UZERO;
    return message;
  },
};

const baseParams: object = {};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.upgradeTimeout !== undefined) {
      Timeout.encode(message.upgradeTimeout, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradeTimeout = Timeout.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.upgradeTimeout =
      object.upgradeTimeout !== undefined && object.upgradeTimeout !== null
        ? Timeout.fromJSON(object.upgradeTimeout)
        : undefined;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.upgradeTimeout !== undefined &&
      (obj.upgradeTimeout = message.upgradeTimeout
        ? Timeout.toJSON(message.upgradeTimeout)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.upgradeTimeout =
      object.upgradeTimeout !== undefined && object.upgradeTimeout !== null
        ? Timeout.fromPartial(object.upgradeTimeout)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
