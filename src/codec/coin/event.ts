/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Token } from "../coin/token";

export const protobufPackage = "Switcheo.carbon.coin";

export interface NewTokenEvent {
  token?: Token;
  type: string;
}

export interface SyncTokenEvent {
  token?: Token;
}

export interface BindTokenEvent {
  sourceDenom: string;
  wrappedDenom: string;
}

export interface UnbindTokenEvent {
  wrappedDenom: string;
}

export interface LinkTokenEvent {
  token?: Token;
  type: string;
}

const baseNewTokenEvent: object = { type: "" };

export const NewTokenEvent = {
  encode(
    message: NewTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewTokenEvent } as NewTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewTokenEvent {
    const message = { ...baseNewTokenEvent } as NewTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromJSON(object.token)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: NewTokenEvent): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewTokenEvent>, I>>(
    object: I
  ): NewTokenEvent {
    const message = { ...baseNewTokenEvent } as NewTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromPartial(object.token)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseSyncTokenEvent: object = {};

export const SyncTokenEvent = {
  encode(
    message: SyncTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSyncTokenEvent } as SyncTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SyncTokenEvent {
    const message = { ...baseSyncTokenEvent } as SyncTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromJSON(object.token)
        : undefined;
    return message;
  },

  toJSON(message: SyncTokenEvent): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SyncTokenEvent>, I>>(
    object: I
  ): SyncTokenEvent {
    const message = { ...baseSyncTokenEvent } as SyncTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromPartial(object.token)
        : undefined;
    return message;
  },
};

const baseBindTokenEvent: object = { sourceDenom: "", wrappedDenom: "" };

export const BindTokenEvent = {
  encode(
    message: BindTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourceDenom !== "") {
      writer.uint32(10).string(message.sourceDenom);
    }
    if (message.wrappedDenom !== "") {
      writer.uint32(18).string(message.wrappedDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BindTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBindTokenEvent } as BindTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceDenom = reader.string();
          break;
        case 2:
          message.wrappedDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BindTokenEvent {
    const message = { ...baseBindTokenEvent } as BindTokenEvent;
    message.sourceDenom =
      object.sourceDenom !== undefined && object.sourceDenom !== null
        ? String(object.sourceDenom)
        : "";
    message.wrappedDenom =
      object.wrappedDenom !== undefined && object.wrappedDenom !== null
        ? String(object.wrappedDenom)
        : "";
    return message;
  },

  toJSON(message: BindTokenEvent): unknown {
    const obj: any = {};
    message.sourceDenom !== undefined &&
      (obj.sourceDenom = message.sourceDenom);
    message.wrappedDenom !== undefined &&
      (obj.wrappedDenom = message.wrappedDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BindTokenEvent>, I>>(
    object: I
  ): BindTokenEvent {
    const message = { ...baseBindTokenEvent } as BindTokenEvent;
    message.sourceDenom = object.sourceDenom ?? "";
    message.wrappedDenom = object.wrappedDenom ?? "";
    return message;
  },
};

const baseUnbindTokenEvent: object = { wrappedDenom: "" };

export const UnbindTokenEvent = {
  encode(
    message: UnbindTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wrappedDenom !== "") {
      writer.uint32(10).string(message.wrappedDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbindTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnbindTokenEvent } as UnbindTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrappedDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbindTokenEvent {
    const message = { ...baseUnbindTokenEvent } as UnbindTokenEvent;
    message.wrappedDenom =
      object.wrappedDenom !== undefined && object.wrappedDenom !== null
        ? String(object.wrappedDenom)
        : "";
    return message;
  },

  toJSON(message: UnbindTokenEvent): unknown {
    const obj: any = {};
    message.wrappedDenom !== undefined &&
      (obj.wrappedDenom = message.wrappedDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbindTokenEvent>, I>>(
    object: I
  ): UnbindTokenEvent {
    const message = { ...baseUnbindTokenEvent } as UnbindTokenEvent;
    message.wrappedDenom = object.wrappedDenom ?? "";
    return message;
  },
};

const baseLinkTokenEvent: object = { type: "" };

export const LinkTokenEvent = {
  encode(
    message: LinkTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLinkTokenEvent } as LinkTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkTokenEvent {
    const message = { ...baseLinkTokenEvent } as LinkTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromJSON(object.token)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: LinkTokenEvent): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LinkTokenEvent>, I>>(
    object: I
  ): LinkTokenEvent {
    const message = { ...baseLinkTokenEvent } as LinkTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromPartial(object.token)
        : undefined;
    message.type = object.type ?? "";
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
