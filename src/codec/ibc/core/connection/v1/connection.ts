/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MerklePrefix } from "../../commitment/v1/commitment";

export const protobufPackage = "ibc.core.connection.v1";

/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export enum State {
  /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  /** STATE_INIT - A connection end has just started the opening handshake. */
  STATE_INIT = 1,
  /**
   * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
   * chain.
   */
  STATE_TRYOPEN = 2,
  /** STATE_OPEN - A connection end has completed the handshake. */
  STATE_OPEN = 3,
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
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */
export interface ConnectionEnd {
  /** client associated with this connection. */
  clientId: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection.
   */
  versions: Version[];
  /** current state of the connection end. */
  state: State;
  /** counterparty chain associated with this connection. */
  counterparty?: Counterparty;
  /**
   * delay period that must pass before a consensus state can be used for
   * packet-verification NOTE: delay period logic is only implemented by some
   * clients.
   */
  delayPeriod: Long;
}

/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IdentifiedConnection {
  /** connection identifier. */
  id: string;
  /** client associated with this connection. */
  clientId: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection
   */
  versions: Version[];
  /** current state of the connection end. */
  state: State;
  /** counterparty chain associated with this connection. */
  counterparty?: Counterparty;
  /** delay period associated with this connection. */
  delayPeriod: Long;
}

/** Counterparty defines the counterparty chain associated with a connection end. */
export interface Counterparty {
  /**
   * identifies the client on the counterparty chain associated with a given
   * connection.
   */
  clientId: string;
  /**
   * identifies the connection end on the counterparty chain associated with a
   * given connection.
   */
  connectionId: string;
  /** commitment merkle prefix of the counterparty chain. */
  prefix?: MerklePrefix;
}

/** ClientPaths define all the connection paths for a client state. */
export interface ClientPaths {
  /** list of connection paths */
  paths: string[];
}

/** ConnectionPaths define all the connection paths for a given client state. */
export interface ConnectionPaths {
  /** client state unique identifier */
  clientId: string;
  /** list of connection paths */
  paths: string[];
}

/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface Version {
  /** unique version identifier */
  identifier: string;
  /** list of features compatible with the specified identifier */
  features: string[];
}

/** Params defines the set of Connection parameters. */
export interface Params {
  /**
   * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
   * largest amount of time that the chain might reasonably take to produce the next block under normal operating
   * conditions. A safe choice is 3-5x the expected time per block.
   */
  maxExpectedTimePerBlock: Long;
}

function createBaseConnectionEnd(): ConnectionEnd {
  return { clientId: "", versions: [], state: 0, counterparty: undefined, delayPeriod: Long.UZERO };
}

export const ConnectionEnd = {
  encode(message: ConnectionEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.versions.push(Version.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.counterparty = Counterparty.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.delayPeriod = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionEnd {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      versions: Array.isArray(object?.versions) ? object.versions.map((e: any) => Version.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delayPeriod: isSet(object.delayPeriod) ? Long.fromValue(object.delayPeriod) : Long.UZERO,
    };
  },

  toJSON(message: ConnectionEnd): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.versions) {
      obj.versions = message.versions.map((e) => e ? Version.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<ConnectionEnd>): ConnectionEnd {
    return ConnectionEnd.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConnectionEnd>): ConnectionEnd {
    const message = createBaseConnectionEnd();
    message.clientId = object.clientId ?? "";
    message.versions = object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.counterparty = (object.counterparty !== undefined && object.counterparty !== null)
      ? Counterparty.fromPartial(object.counterparty)
      : undefined;
    message.delayPeriod = (object.delayPeriod !== undefined && object.delayPeriod !== null)
      ? Long.fromValue(object.delayPeriod)
      : Long.UZERO;
    return message;
  },
};

function createBaseIdentifiedConnection(): IdentifiedConnection {
  return { id: "", clientId: "", versions: [], state: 0, counterparty: undefined, delayPeriod: Long.UZERO };
}

export const IdentifiedConnection = {
  encode(message: IdentifiedConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(48).uint64(message.delayPeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.versions.push(Version.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.counterparty = Counterparty.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.delayPeriod = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IdentifiedConnection {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      versions: Array.isArray(object?.versions) ? object.versions.map((e: any) => Version.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delayPeriod: isSet(object.delayPeriod) ? Long.fromValue(object.delayPeriod) : Long.UZERO,
    };
  },

  toJSON(message: IdentifiedConnection): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.versions) {
      obj.versions = message.versions.map((e) => e ? Version.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<IdentifiedConnection>): IdentifiedConnection {
    return IdentifiedConnection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IdentifiedConnection>): IdentifiedConnection {
    const message = createBaseIdentifiedConnection();
    message.id = object.id ?? "";
    message.clientId = object.clientId ?? "";
    message.versions = object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.counterparty = (object.counterparty !== undefined && object.counterparty !== null)
      ? Counterparty.fromPartial(object.counterparty)
      : undefined;
    message.delayPeriod = (object.delayPeriod !== undefined && object.delayPeriod !== null)
      ? Long.fromValue(object.delayPeriod)
      : Long.UZERO;
    return message;
  },
};

function createBaseCounterparty(): Counterparty {
  return { clientId: "", connectionId: "", prefix: undefined };
}

export const Counterparty = {
  encode(message: Counterparty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.prefix !== undefined) {
      MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Counterparty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prefix = MerklePrefix.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Counterparty {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      prefix: isSet(object.prefix) ? MerklePrefix.fromJSON(object.prefix) : undefined,
    };
  },

  toJSON(message: Counterparty): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.prefix !== undefined && (obj.prefix = message.prefix ? MerklePrefix.toJSON(message.prefix) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Counterparty>): Counterparty {
    return Counterparty.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Counterparty>): Counterparty {
    const message = createBaseCounterparty();
    message.clientId = object.clientId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.prefix = (object.prefix !== undefined && object.prefix !== null)
      ? MerklePrefix.fromPartial(object.prefix)
      : undefined;
    return message;
  },
};

function createBaseClientPaths(): ClientPaths {
  return { paths: [] };
}

export const ClientPaths = {
  encode(message: ClientPaths, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientPaths {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paths.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientPaths {
    return { paths: Array.isArray(object?.paths) ? object.paths.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ClientPaths): unknown {
    const obj: any = {};
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ClientPaths>): ClientPaths {
    return ClientPaths.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ClientPaths>): ClientPaths {
    const message = createBaseClientPaths();
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
};

function createBaseConnectionPaths(): ConnectionPaths {
  return { clientId: "", paths: [] };
}

export const ConnectionPaths = {
  encode(message: ConnectionPaths, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPaths {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.paths.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionPaths {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      paths: Array.isArray(object?.paths) ? object.paths.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ConnectionPaths): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectionPaths>): ConnectionPaths {
    return ConnectionPaths.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConnectionPaths>): ConnectionPaths {
    const message = createBaseConnectionPaths();
    message.clientId = object.clientId ?? "";
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
};

function createBaseVersion(): Version {
  return { identifier: "", features: [] };
}

export const Version = {
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    for (const v of message.features) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.features.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      features: Array.isArray(object?.features) ? object.features.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    if (message.features) {
      obj.features = message.features.map((e) => e);
    } else {
      obj.features = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Version>): Version {
    return Version.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.identifier = object.identifier ?? "";
    message.features = object.features?.map((e) => e) || [];
    return message;
  },
};

function createBaseParams(): Params {
  return { maxExpectedTimePerBlock: Long.UZERO };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxExpectedTimePerBlock.isZero()) {
      writer.uint32(8).uint64(message.maxExpectedTimePerBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxExpectedTimePerBlock = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      maxExpectedTimePerBlock: isSet(object.maxExpectedTimePerBlock)
        ? Long.fromValue(object.maxExpectedTimePerBlock)
        : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxExpectedTimePerBlock !== undefined &&
      (obj.maxExpectedTimePerBlock = (message.maxExpectedTimePerBlock || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.maxExpectedTimePerBlock =
      (object.maxExpectedTimePerBlock !== undefined && object.maxExpectedTimePerBlock !== null)
        ? Long.fromValue(object.maxExpectedTimePerBlock)
        : Long.UZERO;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
