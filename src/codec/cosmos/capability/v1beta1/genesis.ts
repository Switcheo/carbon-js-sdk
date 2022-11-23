/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CapabilityOwners } from "./capability";

export const protobufPackage = "cosmos.capability.v1beta1";

/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
  /** index is the index of the capability owner. */
  index: Long;
  /** index_owners are the owners at the given index. */
  indexOwners?: CapabilityOwners;
}

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** index is the capability global index. */
  index: Long;
  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners: GenesisOwners[];
}

const baseGenesisOwners: object = { index: Long.UZERO };

export const GenesisOwners = {
  encode(
    message: GenesisOwners,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.indexOwners !== undefined) {
      CapabilityOwners.encode(
        message.indexOwners,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisOwners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisOwners } as GenesisOwners;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64() as Long;
          break;
        case 2:
          message.indexOwners = CapabilityOwners.decode(
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

  fromJSON(object: any): GenesisOwners {
    const message = { ...baseGenesisOwners } as GenesisOwners;
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromString(object.index)
        : Long.UZERO;
    message.indexOwners =
      object.indexOwners !== undefined && object.indexOwners !== null
        ? CapabilityOwners.fromJSON(object.indexOwners)
        : undefined;
    return message;
  },

  toJSON(message: GenesisOwners): unknown {
    const obj: any = {};
    message.index !== undefined &&
      (obj.index = (message.index || Long.UZERO).toString());
    message.indexOwners !== undefined &&
      (obj.indexOwners = message.indexOwners
        ? CapabilityOwners.toJSON(message.indexOwners)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisOwners>): GenesisOwners {
    const message = { ...baseGenesisOwners } as GenesisOwners;
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.UZERO;
    message.indexOwners =
      object.indexOwners !== undefined && object.indexOwners !== null
        ? CapabilityOwners.fromPartial(object.indexOwners)
        : undefined;
    return message;
  },
};

const baseGenesisState: object = { index: Long.UZERO };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.owners = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64() as Long;
          break;
        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromString(object.index)
        : Long.UZERO;
    message.owners = (object.owners ?? []).map((e: any) =>
      GenesisOwners.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.index !== undefined &&
      (obj.index = (message.index || Long.UZERO).toString());
    if (message.owners) {
      obj.owners = message.owners.map((e) =>
        e ? GenesisOwners.toJSON(e) : undefined
      );
    } else {
      obj.owners = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.UZERO;
    message.owners = (object.owners ?? []).map((e) =>
      GenesisOwners.fromPartial(e)
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
