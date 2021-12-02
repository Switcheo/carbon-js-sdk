/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgFee } from "../fee/fee";

export const protobufPackage = "Switcheo.carbon.fee";

export interface MsgSetFee {
  creator: string;
  setFeeParams?: MsgFee;
}

export interface MsgSetFeeResponse {}

const baseMsgSetFee: object = { creator: "" };

export const MsgSetFee = {
  encode(
    message: MsgSetFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setFeeParams !== undefined) {
      MsgFee.encode(message.setFeeParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetFee } as MsgSetFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setFeeParams = MsgFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetFee {
    const message = { ...baseMsgSetFee } as MsgSetFee;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.setFeeParams =
      object.setFeeParams !== undefined && object.setFeeParams !== null
        ? MsgFee.fromJSON(object.setFeeParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setFeeParams !== undefined &&
      (obj.setFeeParams = message.setFeeParams
        ? MsgFee.toJSON(message.setFeeParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFee>, I>>(
    object: I
  ): MsgSetFee {
    const message = { ...baseMsgSetFee } as MsgSetFee;
    message.creator = object.creator ?? "";
    message.setFeeParams =
      object.setFeeParams !== undefined && object.setFeeParams !== null
        ? MsgFee.fromPartial(object.setFeeParams)
        : undefined;
    return message;
  },
};

const baseMsgSetFeeResponse: object = {};

export const MsgSetFeeResponse = {
  encode(
    _: MsgSetFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetFeeResponse } as MsgSetFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetFeeResponse {
    const message = { ...baseMsgSetFeeResponse } as MsgSetFeeResponse;
    return message;
  },

  toJSON(_: MsgSetFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFeeResponse>, I>>(
    _: I
  ): MsgSetFeeResponse {
    const message = { ...baseMsgSetFeeResponse } as MsgSetFeeResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetMsgFee(request: MsgSetFee): Promise<MsgSetFeeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetMsgFee = this.SetMsgFee.bind(this);
  }
  SetMsgFee(request: MsgSetFee): Promise<MsgSetFeeResponse> {
    const data = MsgSetFee.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Msg",
      "SetMsgFee",
      data
    );
    return promise.then((data) =>
      MsgSetFeeResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
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
