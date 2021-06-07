/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.tradehubcosmos.fee";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSetFee {
  creator: string;
  msgType: string;
  fee: string;
}

export interface MsgSetFeeResponse {}

const baseMsgSetFee: object = { creator: "", msgType: "", fee: "" };

export const MsgSetFee = {
  encode(
    message: MsgSetFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.msgType !== "") {
      writer.uint32(18).string(message.msgType);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
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
          message.msgType = reader.string();
          break;
        case 3:
          message.fee = reader.string();
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.msgType !== undefined && object.msgType !== null) {
      message.msgType = String(object.msgType);
    } else {
      message.msgType = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee);
    } else {
      message.fee = "";
    }
    return message;
  },

  toJSON(message: MsgSetFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetFee>): MsgSetFee {
    const message = { ...baseMsgSetFee } as MsgSetFee;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.msgType !== undefined && object.msgType !== null) {
      message.msgType = object.msgType;
    } else {
      message.msgType = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = "";
    }
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

  fromPartial(_: DeepPartial<MsgSetFeeResponse>): MsgSetFeeResponse {
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
      "Switcheo.tradehubcosmos.fee.Msg",
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
