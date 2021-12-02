/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tendermint.version";

/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
  protocol: Long;
  software: string;
}

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
  block: Long;
  app: Long;
}

const baseApp: object = { protocol: Long.UZERO, software: "" };

export const App = {
  encode(message: App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.protocol.isZero()) {
      writer.uint32(8).uint64(message.protocol);
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): App {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApp } as App;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol = reader.uint64() as Long;
          break;
        case 2:
          message.software = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): App {
    const message = { ...baseApp } as App;
    message.protocol =
      object.protocol !== undefined && object.protocol !== null
        ? Long.fromString(object.protocol)
        : Long.UZERO;
    message.software =
      object.software !== undefined && object.software !== null
        ? String(object.software)
        : "";
    return message;
  },

  toJSON(message: App): unknown {
    const obj: any = {};
    message.protocol !== undefined &&
      (obj.protocol = (message.protocol || Long.UZERO).toString());
    message.software !== undefined && (obj.software = message.software);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<App>, I>>(object: I): App {
    const message = { ...baseApp } as App;
    message.protocol =
      object.protocol !== undefined && object.protocol !== null
        ? Long.fromValue(object.protocol)
        : Long.UZERO;
    message.software = object.software ?? "";
    return message;
  },
};

const baseConsensus: object = { block: Long.UZERO, app: Long.UZERO };

export const Consensus = {
  encode(
    message: Consensus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    if (!message.app.isZero()) {
      writer.uint32(16).uint64(message.app);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Consensus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsensus } as Consensus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64() as Long;
          break;
        case 2:
          message.app = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Consensus {
    const message = { ...baseConsensus } as Consensus;
    message.block =
      object.block !== undefined && object.block !== null
        ? Long.fromString(object.block)
        : Long.UZERO;
    message.app =
      object.app !== undefined && object.app !== null
        ? Long.fromString(object.app)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Consensus): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = (message.block || Long.UZERO).toString());
    message.app !== undefined &&
      (obj.app = (message.app || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Consensus>, I>>(
    object: I
  ): Consensus {
    const message = { ...baseConsensus } as Consensus;
    message.block =
      object.block !== undefined && object.block !== null
        ? Long.fromValue(object.block)
        : Long.UZERO;
    message.app =
      object.app !== undefined && object.app !== null
        ? Long.fromValue(object.app)
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
