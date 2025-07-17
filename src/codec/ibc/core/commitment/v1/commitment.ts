/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CommitmentProof } from "../../../../cosmos/ics23/v1/proofs";

export const protobufPackage = "ibc.core.commitment.v1";

/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
  hash: Uint8Array;
}

/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
  keyPrefix: Uint8Array;
}

/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
  keyPath: string[];
}

/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
  proofs: CommitmentProof[];
}

function createBaseMerkleRoot(): MerkleRoot {
  return { hash: new Uint8Array() };
}

export const MerkleRoot = {
  encode(message: MerkleRoot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MerkleRoot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MerkleRoot {
    return { hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array() };
  },

  toJSON(message: MerkleRoot): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<MerkleRoot>): MerkleRoot {
    return MerkleRoot.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MerkleRoot>): MerkleRoot {
    const message = createBaseMerkleRoot();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};

function createBaseMerklePrefix(): MerklePrefix {
  return { keyPrefix: new Uint8Array() };
}

export const MerklePrefix = {
  encode(message: MerklePrefix, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyPrefix.length !== 0) {
      writer.uint32(10).bytes(message.keyPrefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MerklePrefix {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePrefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyPrefix = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MerklePrefix {
    return { keyPrefix: isSet(object.keyPrefix) ? bytesFromBase64(object.keyPrefix) : new Uint8Array() };
  },

  toJSON(message: MerklePrefix): unknown {
    const obj: any = {};
    message.keyPrefix !== undefined &&
      (obj.keyPrefix = base64FromBytes(message.keyPrefix !== undefined ? message.keyPrefix : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<MerklePrefix>): MerklePrefix {
    return MerklePrefix.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MerklePrefix>): MerklePrefix {
    const message = createBaseMerklePrefix();
    message.keyPrefix = object.keyPrefix ?? new Uint8Array();
    return message;
  },
};

function createBaseMerklePath(): MerklePath {
  return { keyPath: [] };
}

export const MerklePath = {
  encode(message: MerklePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keyPath) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MerklePath {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyPath.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MerklePath {
    return { keyPath: Array.isArray(object?.keyPath) ? object.keyPath.map((e: any) => String(e)) : [] };
  },

  toJSON(message: MerklePath): unknown {
    const obj: any = {};
    if (message.keyPath) {
      obj.keyPath = message.keyPath.map((e) => e);
    } else {
      obj.keyPath = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MerklePath>): MerklePath {
    return MerklePath.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MerklePath>): MerklePath {
    const message = createBaseMerklePath();
    message.keyPath = object.keyPath?.map((e) => e) || [];
    return message;
  },
};

function createBaseMerkleProof(): MerkleProof {
  return { proofs: [] };
}

export const MerkleProof = {
  encode(message: MerkleProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proofs) {
      CommitmentProof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MerkleProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proofs.push(CommitmentProof.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MerkleProof {
    return { proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => CommitmentProof.fromJSON(e)) : [] };
  },

  toJSON(message: MerkleProof): unknown {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map((e) => e ? CommitmentProof.toJSON(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MerkleProof>): MerkleProof {
    return MerkleProof.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MerkleProof>): MerkleProof {
    const message = createBaseMerkleProof();
    message.proofs = object.proofs?.map((e) => CommitmentProof.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
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
