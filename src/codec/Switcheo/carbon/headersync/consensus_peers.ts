/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.headersync";

export interface Peer {
  index: number;
  pubkey: string;
}

export interface ConsensusPeers {
  chainId: Long;
  height: number;
  peers: { [key: string]: Peer };
}

export interface ConsensusPeers_PeersEntry {
  key: string;
  value?: Peer;
}

/** Deprecated: Used for genesis import and export */
export interface ZionConsensusPeers {
  chainId: Long;
  epochStartHeight: number;
  epochEndHeight: number;
  peers: { [key: string]: Peer };
}

export interface ZionConsensusPeers_PeersEntry {
  key: string;
  value?: Peer;
}

const basePeer: object = { index: 0, pubkey: "" };

export const Peer = {
  encode(message: Peer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.pubkey !== "") {
      writer.uint32(18).string(message.pubkey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Peer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePeer } as Peer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.pubkey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Peer {
    const message = { ...basePeer } as Peer;
    message.index =
      object.index !== undefined && object.index !== null
        ? Number(object.index)
        : 0;
    message.pubkey =
      object.pubkey !== undefined && object.pubkey !== null
        ? String(object.pubkey)
        : "";
    return message;
  },

  toJSON(message: Peer): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    return obj;
  },

  fromPartial(object: DeepPartial<Peer>): Peer {
    const message = { ...basePeer } as Peer;
    message.index = object.index ?? 0;
    message.pubkey = object.pubkey ?? "";
    return message;
  },
};

const baseConsensusPeers: object = { chainId: Long.UZERO, height: 0 };

export const ConsensusPeers = {
  encode(
    message: ConsensusPeers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.chainId.isZero()) {
      writer.uint32(8).uint64(message.chainId);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    Object.entries(message.peers).forEach(([key, value]) => {
      ConsensusPeers_PeersEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusPeers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsensusPeers } as ConsensusPeers;
    message.peers = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint64() as Long;
          break;
        case 2:
          message.height = reader.uint32();
          break;
        case 3:
          const entry3 = ConsensusPeers_PeersEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.peers[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusPeers {
    const message = { ...baseConsensusPeers } as ConsensusPeers;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    message.height =
      object.height !== undefined && object.height !== null
        ? Number(object.height)
        : 0;
    message.peers = Object.entries(object.peers ?? {}).reduce<{
      [key: string]: Peer;
    }>((acc, [key, value]) => {
      acc[key] = Peer.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: ConsensusPeers): unknown {
    const obj: any = {};
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.height !== undefined && (obj.height = message.height);
    obj.peers = {};
    if (message.peers) {
      Object.entries(message.peers).forEach(([k, v]) => {
        obj.peers[k] = Peer.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ConsensusPeers>): ConsensusPeers {
    const message = { ...baseConsensusPeers } as ConsensusPeers;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    message.height = object.height ?? 0;
    message.peers = Object.entries(object.peers ?? {}).reduce<{
      [key: string]: Peer;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Peer.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

const baseConsensusPeers_PeersEntry: object = { key: "" };

export const ConsensusPeers_PeersEntry = {
  encode(
    message: ConsensusPeers_PeersEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Peer.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConsensusPeers_PeersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConsensusPeers_PeersEntry,
    } as ConsensusPeers_PeersEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Peer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusPeers_PeersEntry {
    const message = {
      ...baseConsensusPeers_PeersEntry,
    } as ConsensusPeers_PeersEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Peer.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: ConsensusPeers_PeersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Peer.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ConsensusPeers_PeersEntry>
  ): ConsensusPeers_PeersEntry {
    const message = {
      ...baseConsensusPeers_PeersEntry,
    } as ConsensusPeers_PeersEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Peer.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseZionConsensusPeers: object = {
  chainId: Long.UZERO,
  epochStartHeight: 0,
  epochEndHeight: 0,
};

export const ZionConsensusPeers = {
  encode(
    message: ZionConsensusPeers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.chainId.isZero()) {
      writer.uint32(8).uint64(message.chainId);
    }
    if (message.epochStartHeight !== 0) {
      writer.uint32(16).uint32(message.epochStartHeight);
    }
    if (message.epochEndHeight !== 0) {
      writer.uint32(24).uint32(message.epochEndHeight);
    }
    Object.entries(message.peers).forEach(([key, value]) => {
      ZionConsensusPeers_PeersEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZionConsensusPeers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseZionConsensusPeers } as ZionConsensusPeers;
    message.peers = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint64() as Long;
          break;
        case 2:
          message.epochStartHeight = reader.uint32();
          break;
        case 3:
          message.epochEndHeight = reader.uint32();
          break;
        case 4:
          const entry4 = ZionConsensusPeers_PeersEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.peers[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ZionConsensusPeers {
    const message = { ...baseZionConsensusPeers } as ZionConsensusPeers;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    message.epochStartHeight =
      object.epochStartHeight !== undefined && object.epochStartHeight !== null
        ? Number(object.epochStartHeight)
        : 0;
    message.epochEndHeight =
      object.epochEndHeight !== undefined && object.epochEndHeight !== null
        ? Number(object.epochEndHeight)
        : 0;
    message.peers = Object.entries(object.peers ?? {}).reduce<{
      [key: string]: Peer;
    }>((acc, [key, value]) => {
      acc[key] = Peer.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: ZionConsensusPeers): unknown {
    const obj: any = {};
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.epochStartHeight !== undefined &&
      (obj.epochStartHeight = message.epochStartHeight);
    message.epochEndHeight !== undefined &&
      (obj.epochEndHeight = message.epochEndHeight);
    obj.peers = {};
    if (message.peers) {
      Object.entries(message.peers).forEach(([k, v]) => {
        obj.peers[k] = Peer.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ZionConsensusPeers>): ZionConsensusPeers {
    const message = { ...baseZionConsensusPeers } as ZionConsensusPeers;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    message.epochStartHeight = object.epochStartHeight ?? 0;
    message.epochEndHeight = object.epochEndHeight ?? 0;
    message.peers = Object.entries(object.peers ?? {}).reduce<{
      [key: string]: Peer;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Peer.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

const baseZionConsensusPeers_PeersEntry: object = { key: "" };

export const ZionConsensusPeers_PeersEntry = {
  encode(
    message: ZionConsensusPeers_PeersEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Peer.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ZionConsensusPeers_PeersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseZionConsensusPeers_PeersEntry,
    } as ZionConsensusPeers_PeersEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Peer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ZionConsensusPeers_PeersEntry {
    const message = {
      ...baseZionConsensusPeers_PeersEntry,
    } as ZionConsensusPeers_PeersEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Peer.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: ZionConsensusPeers_PeersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Peer.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ZionConsensusPeers_PeersEntry>
  ): ZionConsensusPeers_PeersEntry {
    const message = {
      ...baseZionConsensusPeers_PeersEntry,
    } as ZionConsensusPeers_PeersEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Peer.fromPartial(object.value)
        : undefined;
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
