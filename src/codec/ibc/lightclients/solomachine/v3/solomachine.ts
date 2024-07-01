/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";

export const protobufPackage = "ibc.lightclients.solomachine.v3";

/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
  /** latest sequence of the client state */
  sequence: Long;
  /** frozen sequence of the solo machine */
  isFrozen: boolean;
  consensusState?: ConsensusState;
}

/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
  /** public key of the solo machine */
  publicKey?: Any;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier: string;
  timestamp: Long;
}

/** Header defines a solo machine consensus header */
export interface Header {
  timestamp: Long;
  signature: Uint8Array;
  newPublicKey?: Any;
  newDiversifier: string;
}

/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
  sequence: Long;
  signatureOne?: SignatureAndData;
  signatureTwo?: SignatureAndData;
}

/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
  signature: Uint8Array;
  path: Uint8Array;
  data: Uint8Array;
  timestamp: Long;
}

/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
  signatureData: Uint8Array;
  timestamp: Long;
}

/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
  /** the sequence number */
  sequence: Long;
  /** the proof timestamp */
  timestamp: Long;
  /** the public key diversifier */
  diversifier: string;
  /** the standardised path bytes */
  path: Uint8Array;
  /** the marshaled data bytes */
  data: Uint8Array;
}

/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
  /** header public key */
  newPubKey?: Any;
  /** header diversifier */
  newDiversifier: string;
}

const baseClientState: object = { sequence: Long.UZERO, isFrozen: false };

export const ClientState = {
  encode(
    message: ClientState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.isFrozen === true) {
      writer.uint32(16).bool(message.isFrozen);
    }
    if (message.consensusState !== undefined) {
      ConsensusState.encode(
        message.consensusState,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClientState } as ClientState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64() as Long;
          break;
        case 2:
          message.isFrozen = reader.bool();
          break;
        case 3:
          message.consensusState = ConsensusState.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientState {
    const message = { ...baseClientState } as ClientState;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    message.isFrozen =
      object.isFrozen !== undefined && object.isFrozen !== null
        ? Boolean(object.isFrozen)
        : false;
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? ConsensusState.fromJSON(object.consensusState)
        : undefined;
    return message;
  },

  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.isFrozen !== undefined && (obj.isFrozen = message.isFrozen);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? ConsensusState.toJSON(message.consensusState)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = { ...baseClientState } as ClientState;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.isFrozen = object.isFrozen ?? false;
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? ConsensusState.fromPartial(object.consensusState)
        : undefined;
    return message;
  },
};

const baseConsensusState: object = { diversifier: "", timestamp: Long.UZERO };

export const ConsensusState = {
  encode(
    message: ConsensusState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.diversifier !== "") {
      writer.uint32(18).string(message.diversifier);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsensusState } as ConsensusState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.diversifier = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusState {
    const message = { ...baseConsensusState } as ConsensusState;
    message.publicKey =
      object.publicKey !== undefined && object.publicKey !== null
        ? Any.fromJSON(object.publicKey)
        : undefined;
    message.diversifier =
      object.diversifier !== undefined && object.diversifier !== null
        ? String(object.diversifier)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.UZERO;
    return message;
  },

  toJSON(message: ConsensusState): unknown {
    const obj: any = {};
    message.publicKey !== undefined &&
      (obj.publicKey = message.publicKey
        ? Any.toJSON(message.publicKey)
        : undefined);
    message.diversifier !== undefined &&
      (obj.diversifier = message.diversifier);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = { ...baseConsensusState } as ConsensusState;
    message.publicKey =
      object.publicKey !== undefined && object.publicKey !== null
        ? Any.fromPartial(object.publicKey)
        : undefined;
    message.diversifier = object.diversifier ?? "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.UZERO;
    return message;
  },
};

const baseHeader: object = { timestamp: Long.UZERO, newDiversifier: "" };

export const Header = {
  encode(
    message: Header,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.newPublicKey !== undefined) {
      Any.encode(message.newPublicKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(34).string(message.newDiversifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeader } as Header;
    message.signature = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.uint64() as Long;
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        case 3:
          message.newPublicKey = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Header {
    const message = { ...baseHeader } as Header;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.UZERO;
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? bytesFromBase64(object.signature)
        : new Uint8Array();
    message.newPublicKey =
      object.newPublicKey !== undefined && object.newPublicKey !== null
        ? Any.fromJSON(object.newPublicKey)
        : undefined;
    message.newDiversifier =
      object.newDiversifier !== undefined && object.newDiversifier !== null
        ? String(object.newDiversifier)
        : "";
    return message;
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    message.newPublicKey !== undefined &&
      (obj.newPublicKey = message.newPublicKey
        ? Any.toJSON(message.newPublicKey)
        : undefined);
    message.newDiversifier !== undefined &&
      (obj.newDiversifier = message.newDiversifier);
    return obj;
  },

  fromPartial(object: DeepPartial<Header>): Header {
    const message = { ...baseHeader } as Header;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.UZERO;
    message.signature = object.signature ?? new Uint8Array();
    message.newPublicKey =
      object.newPublicKey !== undefined && object.newPublicKey !== null
        ? Any.fromPartial(object.newPublicKey)
        : undefined;
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
};

const baseMisbehaviour: object = { sequence: Long.UZERO };

export const Misbehaviour = {
  encode(
    message: Misbehaviour,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.signatureOne !== undefined) {
      SignatureAndData.encode(
        message.signatureOne,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.signatureTwo !== undefined) {
      SignatureAndData.encode(
        message.signatureTwo,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMisbehaviour } as Misbehaviour;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64() as Long;
          break;
        case 2:
          message.signatureOne = SignatureAndData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.signatureTwo = SignatureAndData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Misbehaviour {
    const message = { ...baseMisbehaviour } as Misbehaviour;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    message.signatureOne =
      object.signatureOne !== undefined && object.signatureOne !== null
        ? SignatureAndData.fromJSON(object.signatureOne)
        : undefined;
    message.signatureTwo =
      object.signatureTwo !== undefined && object.signatureTwo !== null
        ? SignatureAndData.fromJSON(object.signatureTwo)
        : undefined;
    return message;
  },

  toJSON(message: Misbehaviour): unknown {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.signatureOne !== undefined &&
      (obj.signatureOne = message.signatureOne
        ? SignatureAndData.toJSON(message.signatureOne)
        : undefined);
    message.signatureTwo !== undefined &&
      (obj.signatureTwo = message.signatureTwo
        ? SignatureAndData.toJSON(message.signatureTwo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = { ...baseMisbehaviour } as Misbehaviour;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.signatureOne =
      object.signatureOne !== undefined && object.signatureOne !== null
        ? SignatureAndData.fromPartial(object.signatureOne)
        : undefined;
    message.signatureTwo =
      object.signatureTwo !== undefined && object.signatureTwo !== null
        ? SignatureAndData.fromPartial(object.signatureTwo)
        : undefined;
    return message;
  },
};

const baseSignatureAndData: object = { timestamp: Long.UZERO };

export const SignatureAndData = {
  encode(
    message: SignatureAndData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.path.length !== 0) {
      writer.uint32(18).bytes(message.path);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureAndData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignatureAndData } as SignatureAndData;
    message.signature = new Uint8Array();
    message.path = new Uint8Array();
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.path = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.timestamp = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignatureAndData {
    const message = { ...baseSignatureAndData } as SignatureAndData;
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? bytesFromBase64(object.signature)
        : new Uint8Array();
    message.path =
      object.path !== undefined && object.path !== null
        ? bytesFromBase64(object.path)
        : new Uint8Array();
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.UZERO;
    return message;
  },

  toJSON(message: SignatureAndData): unknown {
    const obj: any = {};
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    message.path !== undefined &&
      (obj.path = base64FromBytes(
        message.path !== undefined ? message.path : new Uint8Array()
      ));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SignatureAndData>): SignatureAndData {
    const message = { ...baseSignatureAndData } as SignatureAndData;
    message.signature = object.signature ?? new Uint8Array();
    message.path = object.path ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.UZERO;
    return message;
  },
};

const baseTimestampedSignatureData: object = { timestamp: Long.UZERO };

export const TimestampedSignatureData = {
  encode(
    message: TimestampedSignatureData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TimestampedSignatureData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTimestampedSignatureData,
    } as TimestampedSignatureData;
    message.signatureData = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureData = reader.bytes();
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

  fromJSON(object: any): TimestampedSignatureData {
    const message = {
      ...baseTimestampedSignatureData,
    } as TimestampedSignatureData;
    message.signatureData =
      object.signatureData !== undefined && object.signatureData !== null
        ? bytesFromBase64(object.signatureData)
        : new Uint8Array();
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.UZERO;
    return message;
  },

  toJSON(message: TimestampedSignatureData): unknown {
    const obj: any = {};
    message.signatureData !== undefined &&
      (obj.signatureData = base64FromBytes(
        message.signatureData !== undefined
          ? message.signatureData
          : new Uint8Array()
      ));
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<TimestampedSignatureData>
  ): TimestampedSignatureData {
    const message = {
      ...baseTimestampedSignatureData,
    } as TimestampedSignatureData;
    message.signatureData = object.signatureData ?? new Uint8Array();
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.UZERO;
    return message;
  },
};

const baseSignBytes: object = {
  sequence: Long.UZERO,
  timestamp: Long.UZERO,
  diversifier: "",
};

export const SignBytes = {
  encode(
    message: SignBytes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.diversifier !== "") {
      writer.uint32(26).string(message.diversifier);
    }
    if (message.path.length !== 0) {
      writer.uint32(34).bytes(message.path);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignBytes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignBytes } as SignBytes;
    message.path = new Uint8Array();
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64() as Long;
          break;
        case 2:
          message.timestamp = reader.uint64() as Long;
          break;
        case 3:
          message.diversifier = reader.string();
          break;
        case 4:
          message.path = reader.bytes();
          break;
        case 5:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignBytes {
    const message = { ...baseSignBytes } as SignBytes;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.UZERO;
    message.diversifier =
      object.diversifier !== undefined && object.diversifier !== null
        ? String(object.diversifier)
        : "";
    message.path =
      object.path !== undefined && object.path !== null
        ? bytesFromBase64(object.path)
        : new Uint8Array();
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    return message;
  },

  toJSON(message: SignBytes): unknown {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.diversifier !== undefined &&
      (obj.diversifier = message.diversifier);
    message.path !== undefined &&
      (obj.path = base64FromBytes(
        message.path !== undefined ? message.path : new Uint8Array()
      ));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<SignBytes>): SignBytes {
    const message = { ...baseSignBytes } as SignBytes;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.UZERO;
    message.diversifier = object.diversifier ?? "";
    message.path = object.path ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

const baseHeaderData: object = { newDiversifier: "" };

export const HeaderData = {
  encode(
    message: HeaderData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.newPubKey !== undefined) {
      Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(18).string(message.newDiversifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeaderData } as HeaderData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newPubKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HeaderData {
    const message = { ...baseHeaderData } as HeaderData;
    message.newPubKey =
      object.newPubKey !== undefined && object.newPubKey !== null
        ? Any.fromJSON(object.newPubKey)
        : undefined;
    message.newDiversifier =
      object.newDiversifier !== undefined && object.newDiversifier !== null
        ? String(object.newDiversifier)
        : "";
    return message;
  },

  toJSON(message: HeaderData): unknown {
    const obj: any = {};
    message.newPubKey !== undefined &&
      (obj.newPubKey = message.newPubKey
        ? Any.toJSON(message.newPubKey)
        : undefined);
    message.newDiversifier !== undefined &&
      (obj.newDiversifier = message.newDiversifier);
    return obj;
  },

  fromPartial(object: DeepPartial<HeaderData>): HeaderData {
    const message = { ...baseHeaderData } as HeaderData;
    message.newPubKey =
      object.newPubKey !== undefined && object.newPubKey !== null
        ? Any.fromPartial(object.newPubKey)
        : undefined;
    message.newDiversifier = object.newDiversifier ?? "";
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
