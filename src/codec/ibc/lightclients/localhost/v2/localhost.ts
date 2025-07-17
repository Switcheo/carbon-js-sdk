/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Height } from "../../../core/client/v1/client";

export const protobufPackage = "ibc.lightclients.localhost.v2";

/** ClientState defines the 09-localhost client state */
export interface ClientState {
  /** the latest block height */
  latestHeight?: Height;
}

function createBaseClientState(): ClientState {
  return { latestHeight: undefined };
}

export const ClientState = {
  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latestHeight !== undefined) {
      Height.encode(message.latestHeight, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.latestHeight = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientState {
    return { latestHeight: isSet(object.latestHeight) ? Height.fromJSON(object.latestHeight) : undefined };
  },

  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.latestHeight !== undefined &&
      (obj.latestHeight = message.latestHeight ? Height.toJSON(message.latestHeight) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ClientState>): ClientState {
    return ClientState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.latestHeight = (object.latestHeight !== undefined && object.latestHeight !== null)
      ? Height.fromPartial(object.latestHeight)
      : undefined;
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
