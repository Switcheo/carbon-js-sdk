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

function createBasePeer(): Peer {
  return { index: 0, pubkey: "" };
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pubkey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Peer {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      pubkey: isSet(object.pubkey) ? String(object.pubkey) : "",
    };
  },

  toJSON(message: Peer): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    return obj;
  },

  create(base?: DeepPartial<Peer>): Peer {
    return Peer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Peer>): Peer {
    const message = createBasePeer();
    message.index = object.index ?? 0;
    message.pubkey = object.pubkey ?? "";
    return message;
  },
};

function createBaseConsensusPeers(): ConsensusPeers {
  return { chainId: Long.UZERO, height: 0, peers: {} };
}

export const ConsensusPeers = {
  encode(message: ConsensusPeers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.chainId.isZero()) {
      writer.uint32(8).uint64(message.chainId);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    Object.entries(message.peers).forEach(([key, value]) => {
      ConsensusPeers_PeersEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusPeers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusPeers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = ConsensusPeers_PeersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.peers[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConsensusPeers {
    return {
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      height: isSet(object.height) ? Number(object.height) : 0,
      peers: isObject(object.peers)
        ? Object.entries(object.peers).reduce<{ [key: string]: Peer }>((acc, [key, value]) => {
          acc[key] = Peer.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ConsensusPeers): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.height !== undefined && (obj.height = Math.round(message.height));
    obj.peers = {};
    if (message.peers) {
      Object.entries(message.peers).forEach(([k, v]) => {
        obj.peers[k] = Peer.toJSON(v);
      });
    }
    return obj;
  },

  create(base?: DeepPartial<ConsensusPeers>): ConsensusPeers {
    return ConsensusPeers.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConsensusPeers>): ConsensusPeers {
    const message = createBaseConsensusPeers();
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.height = object.height ?? 0;
    message.peers = Object.entries(object.peers ?? {}).reduce<{ [key: string]: Peer }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Peer.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseConsensusPeers_PeersEntry(): ConsensusPeers_PeersEntry {
  return { key: "", value: undefined };
}

export const ConsensusPeers_PeersEntry = {
  encode(message: ConsensusPeers_PeersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Peer.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusPeers_PeersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusPeers_PeersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Peer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConsensusPeers_PeersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Peer.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ConsensusPeers_PeersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Peer.toJSON(message.value) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ConsensusPeers_PeersEntry>): ConsensusPeers_PeersEntry {
    return ConsensusPeers_PeersEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConsensusPeers_PeersEntry>): ConsensusPeers_PeersEntry {
    const message = createBaseConsensusPeers_PeersEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Peer.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseZionConsensusPeers(): ZionConsensusPeers {
  return { chainId: Long.UZERO, epochStartHeight: 0, epochEndHeight: 0, peers: {} };
}

export const ZionConsensusPeers = {
  encode(message: ZionConsensusPeers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      ZionConsensusPeers_PeersEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZionConsensusPeers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZionConsensusPeers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.epochStartHeight = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.epochEndHeight = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = ZionConsensusPeers_PeersEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.peers[entry4.key] = entry4.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZionConsensusPeers {
    return {
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      epochStartHeight: isSet(object.epochStartHeight) ? Number(object.epochStartHeight) : 0,
      epochEndHeight: isSet(object.epochEndHeight) ? Number(object.epochEndHeight) : 0,
      peers: isObject(object.peers)
        ? Object.entries(object.peers).reduce<{ [key: string]: Peer }>((acc, [key, value]) => {
          acc[key] = Peer.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ZionConsensusPeers): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.epochStartHeight !== undefined && (obj.epochStartHeight = Math.round(message.epochStartHeight));
    message.epochEndHeight !== undefined && (obj.epochEndHeight = Math.round(message.epochEndHeight));
    obj.peers = {};
    if (message.peers) {
      Object.entries(message.peers).forEach(([k, v]) => {
        obj.peers[k] = Peer.toJSON(v);
      });
    }
    return obj;
  },

  create(base?: DeepPartial<ZionConsensusPeers>): ZionConsensusPeers {
    return ZionConsensusPeers.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ZionConsensusPeers>): ZionConsensusPeers {
    const message = createBaseZionConsensusPeers();
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.epochStartHeight = object.epochStartHeight ?? 0;
    message.epochEndHeight = object.epochEndHeight ?? 0;
    message.peers = Object.entries(object.peers ?? {}).reduce<{ [key: string]: Peer }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Peer.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseZionConsensusPeers_PeersEntry(): ZionConsensusPeers_PeersEntry {
  return { key: "", value: undefined };
}

export const ZionConsensusPeers_PeersEntry = {
  encode(message: ZionConsensusPeers_PeersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Peer.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZionConsensusPeers_PeersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZionConsensusPeers_PeersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Peer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZionConsensusPeers_PeersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Peer.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ZionConsensusPeers_PeersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Peer.toJSON(message.value) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ZionConsensusPeers_PeersEntry>): ZionConsensusPeers_PeersEntry {
    return ZionConsensusPeers_PeersEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ZionConsensusPeers_PeersEntry>): ZionConsensusPeers_PeersEntry {
    const message = createBaseZionConsensusPeers_PeersEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Peer.fromPartial(object.value) : undefined;
    return message;
  },
};

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
