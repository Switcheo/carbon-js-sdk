/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";

export const protobufPackage = "cosmos.crypto.keyring.v1";

/** Since: cosmos-sdk 0.46 */

/** Record is used for representing a key in the keyring. */
export interface Record {
  /** name represents a name of Record */
  name: string;
  /** pub_key represents a public key in any format */
  pubKey?: Any;
  /** local stores the private key locally. */
  local?:
    | Record_Local
    | undefined;
  /** ledger stores the information about a Ledger key. */
  ledger?:
    | Record_Ledger
    | undefined;
  /** Multi does not store any other information. */
  multi?:
    | Record_Multi
    | undefined;
  /** Offline does not store any other information. */
  offline?: Record_Offline | undefined;
}

/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
  privKey?: Any;
}

/** Ledger item */
export interface Record_Ledger {
  path?: BIP44Params;
}

/** Multi item */
export interface Record_Multi {
}

/** Offline item */
export interface Record_Offline {
}

function createBaseRecord(): Record {
  return { name: "", pubKey: undefined, local: undefined, ledger: undefined, multi: undefined, offline: undefined };
}

export const Record = {
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.local !== undefined) {
      Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
    }
    if (message.ledger !== undefined) {
      Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
    }
    if (message.offline !== undefined) {
      Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pubKey = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.local = Record_Local.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ledger = Record_Ledger.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.multi = Record_Multi.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.offline = Record_Offline.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Record {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      local: isSet(object.local) ? Record_Local.fromJSON(object.local) : undefined,
      ledger: isSet(object.ledger) ? Record_Ledger.fromJSON(object.ledger) : undefined,
      multi: isSet(object.multi) ? Record_Multi.fromJSON(object.multi) : undefined,
      offline: isSet(object.offline) ? Record_Offline.fromJSON(object.offline) : undefined,
    };
  },

  toJSON(message: Record): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.local !== undefined && (obj.local = message.local ? Record_Local.toJSON(message.local) : undefined);
    message.ledger !== undefined && (obj.ledger = message.ledger ? Record_Ledger.toJSON(message.ledger) : undefined);
    message.multi !== undefined && (obj.multi = message.multi ? Record_Multi.toJSON(message.multi) : undefined);
    message.offline !== undefined &&
      (obj.offline = message.offline ? Record_Offline.toJSON(message.offline) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Record>): Record {
    return Record.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Record>): Record {
    const message = createBaseRecord();
    message.name = object.name ?? "";
    message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
      ? Any.fromPartial(object.pubKey)
      : undefined;
    message.local = (object.local !== undefined && object.local !== null)
      ? Record_Local.fromPartial(object.local)
      : undefined;
    message.ledger = (object.ledger !== undefined && object.ledger !== null)
      ? Record_Ledger.fromPartial(object.ledger)
      : undefined;
    message.multi = (object.multi !== undefined && object.multi !== null)
      ? Record_Multi.fromPartial(object.multi)
      : undefined;
    message.offline = (object.offline !== undefined && object.offline !== null)
      ? Record_Offline.fromPartial(object.offline)
      : undefined;
    return message;
  },
};

function createBaseRecord_Local(): Record_Local {
  return { privKey: undefined };
}

export const Record_Local = {
  encode(message: Record_Local, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privKey !== undefined) {
      Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record_Local {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Local();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.privKey = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Record_Local {
    return { privKey: isSet(object.privKey) ? Any.fromJSON(object.privKey) : undefined };
  },

  toJSON(message: Record_Local): unknown {
    const obj: any = {};
    message.privKey !== undefined && (obj.privKey = message.privKey ? Any.toJSON(message.privKey) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Record_Local>): Record_Local {
    return Record_Local.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Record_Local>): Record_Local {
    const message = createBaseRecord_Local();
    message.privKey = (object.privKey !== undefined && object.privKey !== null)
      ? Any.fromPartial(object.privKey)
      : undefined;
    return message;
  },
};

function createBaseRecord_Ledger(): Record_Ledger {
  return { path: undefined };
}

export const Record_Ledger = {
  encode(message: Record_Ledger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== undefined) {
      BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record_Ledger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Ledger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = BIP44Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Record_Ledger {
    return { path: isSet(object.path) ? BIP44Params.fromJSON(object.path) : undefined };
  },

  toJSON(message: Record_Ledger): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path ? BIP44Params.toJSON(message.path) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Record_Ledger>): Record_Ledger {
    return Record_Ledger.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Record_Ledger>): Record_Ledger {
    const message = createBaseRecord_Ledger();
    message.path = (object.path !== undefined && object.path !== null)
      ? BIP44Params.fromPartial(object.path)
      : undefined;
    return message;
  },
};

function createBaseRecord_Multi(): Record_Multi {
  return {};
}

export const Record_Multi = {
  encode(_: Record_Multi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record_Multi {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Multi();
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

  fromJSON(_: any): Record_Multi {
    return {};
  },

  toJSON(_: Record_Multi): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Record_Multi>): Record_Multi {
    return Record_Multi.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<Record_Multi>): Record_Multi {
    const message = createBaseRecord_Multi();
    return message;
  },
};

function createBaseRecord_Offline(): Record_Offline {
  return {};
}

export const Record_Offline = {
  encode(_: Record_Offline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record_Offline {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Offline();
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

  fromJSON(_: any): Record_Offline {
    return {};
  },

  toJSON(_: Record_Offline): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Record_Offline>): Record_Offline {
    return Record_Offline.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<Record_Offline>): Record_Offline {
    const message = createBaseRecord_Offline();
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
