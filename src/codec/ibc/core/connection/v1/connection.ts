/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MerklePrefix } from "../../../../ibc/core/commitment/v1/commitment";

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
    default:
      return "UNKNOWN";
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
   * delay period that must pass before a consensus state can be used for packet-verification
   * NOTE: delay period logic is only implemented by some clients.
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

const baseConnectionEnd: object = {
  clientId: "",
  state: 0,
  delayPeriod: Long.UZERO,
};

export const ConnectionEnd = {
  encode(
    message: ConnectionEnd,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Counterparty.encode(
        message.counterparty,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionEnd {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnectionEnd } as ConnectionEnd;
    message.versions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 3:
          message.state = reader.int32() as any;
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectionEnd {
    const message = { ...baseConnectionEnd } as ConnectionEnd;
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.versions = (object.versions ?? []).map((e: any) =>
      Version.fromJSON(e)
    );
    message.state =
      object.state !== undefined && object.state !== null
        ? stateFromJSON(object.state)
        : 0;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromJSON(object.counterparty)
        : undefined;
    message.delayPeriod =
      object.delayPeriod !== undefined && object.delayPeriod !== null
        ? Long.fromString(object.delayPeriod)
        : Long.UZERO;
    return message;
  },

  toJSON(message: ConnectionEnd): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.versions) {
      obj.versions = message.versions.map((e) =>
        e ? Version.toJSON(e) : undefined
      );
    } else {
      obj.versions = [];
    }
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty
        ? Counterparty.toJSON(message.counterparty)
        : undefined);
    message.delayPeriod !== undefined &&
      (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectionEnd>, I>>(
    object: I
  ): ConnectionEnd {
    const message = { ...baseConnectionEnd } as ConnectionEnd;
    message.clientId = object.clientId ?? "";
    message.versions =
      object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromPartial(object.counterparty)
        : undefined;
    message.delayPeriod =
      object.delayPeriod !== undefined && object.delayPeriod !== null
        ? Long.fromValue(object.delayPeriod)
        : Long.UZERO;
    return message;
  },
};

const baseIdentifiedConnection: object = {
  id: "",
  clientId: "",
  state: 0,
  delayPeriod: Long.UZERO,
};

export const IdentifiedConnection = {
  encode(
    message: IdentifiedConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Counterparty.encode(
        message.counterparty,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(48).uint64(message.delayPeriod);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IdentifiedConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentifiedConnection } as IdentifiedConnection;
    message.versions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 6:
          message.delayPeriod = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IdentifiedConnection {
    const message = { ...baseIdentifiedConnection } as IdentifiedConnection;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.versions = (object.versions ?? []).map((e: any) =>
      Version.fromJSON(e)
    );
    message.state =
      object.state !== undefined && object.state !== null
        ? stateFromJSON(object.state)
        : 0;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromJSON(object.counterparty)
        : undefined;
    message.delayPeriod =
      object.delayPeriod !== undefined && object.delayPeriod !== null
        ? Long.fromString(object.delayPeriod)
        : Long.UZERO;
    return message;
  },

  toJSON(message: IdentifiedConnection): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.versions) {
      obj.versions = message.versions.map((e) =>
        e ? Version.toJSON(e) : undefined
      );
    } else {
      obj.versions = [];
    }
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty
        ? Counterparty.toJSON(message.counterparty)
        : undefined);
    message.delayPeriod !== undefined &&
      (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IdentifiedConnection>, I>>(
    object: I
  ): IdentifiedConnection {
    const message = { ...baseIdentifiedConnection } as IdentifiedConnection;
    message.id = object.id ?? "";
    message.clientId = object.clientId ?? "";
    message.versions =
      object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromPartial(object.counterparty)
        : undefined;
    message.delayPeriod =
      object.delayPeriod !== undefined && object.delayPeriod !== null
        ? Long.fromValue(object.delayPeriod)
        : Long.UZERO;
    return message;
  },
};

const baseCounterparty: object = { clientId: "", connectionId: "" };

export const Counterparty = {
  encode(
    message: Counterparty,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCounterparty } as Counterparty;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.prefix = MerklePrefix.decode(reader, reader.uint32());
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
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.prefix =
      object.prefix !== undefined && object.prefix !== null
        ? MerklePrefix.fromJSON(object.prefix)
        : undefined;
    return message;
  },

  toJSON(message: Counterparty): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.prefix !== undefined &&
      (obj.prefix = message.prefix
        ? MerklePrefix.toJSON(message.prefix)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Counterparty>, I>>(
    object: I
  ): Counterparty {
    const message = { ...baseCounterparty } as Counterparty;
    message.clientId = object.clientId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.prefix =
      object.prefix !== undefined && object.prefix !== null
        ? MerklePrefix.fromPartial(object.prefix)
        : undefined;
    return message;
  },
};

const baseClientPaths: object = { paths: "" };

export const ClientPaths = {
  encode(
    message: ClientPaths,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientPaths {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClientPaths } as ClientPaths;
    message.paths = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientPaths {
    const message = { ...baseClientPaths } as ClientPaths;
    message.paths = (object.paths ?? []).map((e: any) => String(e));
    return message;
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

  fromPartial<I extends Exact<DeepPartial<ClientPaths>, I>>(
    object: I
  ): ClientPaths {
    const message = { ...baseClientPaths } as ClientPaths;
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
};

const baseConnectionPaths: object = { clientId: "", paths: "" };

export const ConnectionPaths = {
  encode(
    message: ConnectionPaths,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPaths {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnectionPaths } as ConnectionPaths;
    message.paths = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectionPaths {
    const message = { ...baseConnectionPaths } as ConnectionPaths;
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.paths = (object.paths ?? []).map((e: any) => String(e));
    return message;
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

  fromPartial<I extends Exact<DeepPartial<ConnectionPaths>, I>>(
    object: I
  ): ConnectionPaths {
    const message = { ...baseConnectionPaths } as ConnectionPaths;
    message.clientId = object.clientId ?? "";
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
};

const baseVersion: object = { identifier: "", features: "" };

export const Version = {
  encode(
    message: Version,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    for (const v of message.features) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVersion } as Version;
    message.features = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.features.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Version {
    const message = { ...baseVersion } as Version;
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? String(object.identifier)
        : "";
    message.features = (object.features ?? []).map((e: any) => String(e));
    return message;
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

  fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
    const message = { ...baseVersion } as Version;
    message.identifier = object.identifier ?? "";
    message.features = object.features?.map((e) => e) || [];
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
