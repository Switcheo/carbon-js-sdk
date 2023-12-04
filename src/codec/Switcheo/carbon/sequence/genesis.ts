/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.sequence";

/** GenesisState defines the sequence module's genesis state. */
export interface GenesisState {
  sequences: Sequence[];
}

export interface Sequence {
  key: string;
  sequenceNumber: Long;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.sequences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
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
    message.sequences = (object.sequences ?? []).map((e: any) =>
      Sequence.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) =>
        e ? Sequence.toJSON(e) : undefined
      );
    } else {
      obj.sequences = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.sequences = (object.sequences ?? []).map((e) =>
      Sequence.fromPartial(e)
    );
    return message;
  },
};

const baseSequence: object = { key: "", sequenceNumber: Long.UZERO };

export const Sequence = {
  encode(
    message: Sequence,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.sequenceNumber.isZero()) {
      writer.uint32(16).uint64(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSequence } as Sequence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.sequenceNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Sequence {
    const message = { ...baseSequence } as Sequence;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.sequenceNumber =
      object.sequenceNumber !== undefined && object.sequenceNumber !== null
        ? Long.fromString(object.sequenceNumber)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Sequence): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.sequenceNumber !== undefined &&
      (obj.sequenceNumber = (message.sequenceNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Sequence>): Sequence {
    const message = { ...baseSequence } as Sequence;
    message.key = object.key ?? "";
    message.sequenceNumber =
      object.sequenceNumber !== undefined && object.sequenceNumber !== null
        ? Long.fromValue(object.sequenceNumber)
        : Long.UZERO;
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
