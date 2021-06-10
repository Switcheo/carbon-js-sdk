/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreatePool {
  creator: string;
  tokenADenom: string;
  tokenBDenom: string;
  tokenAWeight: string;
  tokenBWeight: string;
  swapFee: string;
  numQuotes: Long;
}

export interface MsgCreatePoolResponse {}

const baseMsgCreatePool: object = {
  creator: "",
  tokenADenom: "",
  tokenBDenom: "",
  tokenAWeight: "",
  tokenBWeight: "",
  swapFee: "",
  numQuotes: Long.ZERO,
};

export const MsgCreatePool = {
  encode(
    message: MsgCreatePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tokenADenom !== "") {
      writer.uint32(18).string(message.tokenADenom);
    }
    if (message.tokenBDenom !== "") {
      writer.uint32(26).string(message.tokenBDenom);
    }
    if (message.tokenAWeight !== "") {
      writer.uint32(34).string(message.tokenAWeight);
    }
    if (message.tokenBWeight !== "") {
      writer.uint32(42).string(message.tokenBWeight);
    }
    if (message.swapFee !== "") {
      writer.uint32(50).string(message.swapFee);
    }
    if (!message.numQuotes.isZero()) {
      writer.uint32(56).int64(message.numQuotes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tokenADenom = reader.string();
          break;
        case 3:
          message.tokenBDenom = reader.string();
          break;
        case 4:
          message.tokenAWeight = reader.string();
          break;
        case 5:
          message.tokenBWeight = reader.string();
          break;
        case 6:
          message.swapFee = reader.string();
          break;
        case 7:
          message.numQuotes = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.tokenADenom !== undefined && object.tokenADenom !== null) {
      message.tokenADenom = String(object.tokenADenom);
    } else {
      message.tokenADenom = "";
    }
    if (object.tokenBDenom !== undefined && object.tokenBDenom !== null) {
      message.tokenBDenom = String(object.tokenBDenom);
    } else {
      message.tokenBDenom = "";
    }
    if (object.tokenAWeight !== undefined && object.tokenAWeight !== null) {
      message.tokenAWeight = String(object.tokenAWeight);
    } else {
      message.tokenAWeight = "";
    }
    if (object.tokenBWeight !== undefined && object.tokenBWeight !== null) {
      message.tokenBWeight = String(object.tokenBWeight);
    } else {
      message.tokenBWeight = "";
    }
    if (object.swapFee !== undefined && object.swapFee !== null) {
      message.swapFee = String(object.swapFee);
    } else {
      message.swapFee = "";
    }
    if (object.numQuotes !== undefined && object.numQuotes !== null) {
      message.numQuotes = Long.fromString(object.numQuotes);
    } else {
      message.numQuotes = Long.ZERO;
    }
    return message;
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenADenom !== undefined &&
      (obj.tokenADenom = message.tokenADenom);
    message.tokenBDenom !== undefined &&
      (obj.tokenBDenom = message.tokenBDenom);
    message.tokenAWeight !== undefined &&
      (obj.tokenAWeight = message.tokenAWeight);
    message.tokenBWeight !== undefined &&
      (obj.tokenBWeight = message.tokenBWeight);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.numQuotes !== undefined &&
      (obj.numQuotes = (message.numQuotes || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.tokenADenom !== undefined && object.tokenADenom !== null) {
      message.tokenADenom = object.tokenADenom;
    } else {
      message.tokenADenom = "";
    }
    if (object.tokenBDenom !== undefined && object.tokenBDenom !== null) {
      message.tokenBDenom = object.tokenBDenom;
    } else {
      message.tokenBDenom = "";
    }
    if (object.tokenAWeight !== undefined && object.tokenAWeight !== null) {
      message.tokenAWeight = object.tokenAWeight;
    } else {
      message.tokenAWeight = "";
    }
    if (object.tokenBWeight !== undefined && object.tokenBWeight !== null) {
      message.tokenBWeight = object.tokenBWeight;
    } else {
      message.tokenBWeight = "";
    }
    if (object.swapFee !== undefined && object.swapFee !== null) {
      message.swapFee = object.swapFee;
    } else {
      message.swapFee = "";
    }
    if (object.numQuotes !== undefined && object.numQuotes !== null) {
      message.numQuotes = object.numQuotes as Long;
    } else {
      message.numQuotes = Long.ZERO;
    }
    return message;
  },
};

const baseMsgCreatePoolResponse: object = {};

export const MsgCreatePoolResponse = {
  encode(
    _: MsgCreatePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
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

  fromJSON(_: any): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    return message;
  },

  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePool = this.CreatePool.bind(this);
  }
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "CreatePool",
      data
    );
    return promise.then((data) =>
      MsgCreatePoolResponse.decode(new _m0.Reader(data))
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
