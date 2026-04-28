/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.adl";

export interface MsgPayBadDebt {
  creator: string;
  marketId: string;
  amount: string;
}

export interface MsgPayBadDebtResponse {
}

function createBaseMsgPayBadDebt(): MsgPayBadDebt {
  return { creator: "", marketId: "", amount: "" };
}

export const MsgPayBadDebt = {
  encode(message: MsgPayBadDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayBadDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayBadDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPayBadDebt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgPayBadDebt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<MsgPayBadDebt>): MsgPayBadDebt {
    return MsgPayBadDebt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgPayBadDebt>): MsgPayBadDebt {
    const message = createBaseMsgPayBadDebt();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgPayBadDebtResponse(): MsgPayBadDebtResponse {
  return {};
}

export const MsgPayBadDebtResponse = {
  encode(_: MsgPayBadDebtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayBadDebtResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayBadDebtResponse();
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

  fromJSON(_: any): MsgPayBadDebtResponse {
    return {};
  },

  toJSON(_: MsgPayBadDebtResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgPayBadDebtResponse>): MsgPayBadDebtResponse {
    return MsgPayBadDebtResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgPayBadDebtResponse>): MsgPayBadDebtResponse {
    const message = createBaseMsgPayBadDebtResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  PayBadDebt(request: MsgPayBadDebt): Promise<MsgPayBadDebtResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.adl.Msg";
    this.rpc = rpc;
    this.PayBadDebt = this.PayBadDebt.bind(this);
  }
  PayBadDebt(request: MsgPayBadDebt): Promise<MsgPayBadDebtResponse> {
    const data = MsgPayBadDebt.encode(request).finish();
    const promise = this.rpc.request(this.service, "PayBadDebt", data);
    return promise.then((data) => MsgPayBadDebtResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
