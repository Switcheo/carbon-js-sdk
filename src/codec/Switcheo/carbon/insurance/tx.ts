/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.insurance";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgTopUpInsurance {
  creator: string;
  market: string;
  amount: string;
  denom: string;
}

export interface MsgTopUpInsuranceResponse {}

const baseMsgTopUpInsurance: object = {
  creator: "",
  market: "",
  amount: "",
  denom: "",
};

export const MsgTopUpInsurance = {
  encode(
    message: MsgTopUpInsurance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTopUpInsurance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTopUpInsurance } as MsgTopUpInsurance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTopUpInsurance {
    const message = { ...baseMsgTopUpInsurance } as MsgTopUpInsurance;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgTopUpInsurance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.market !== undefined && (obj.market = message.market);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTopUpInsurance>): MsgTopUpInsurance {
    const message = { ...baseMsgTopUpInsurance } as MsgTopUpInsurance;
    message.creator = object.creator ?? "";
    message.market = object.market ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgTopUpInsuranceResponse: object = {};

export const MsgTopUpInsuranceResponse = {
  encode(
    _: MsgTopUpInsuranceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTopUpInsuranceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTopUpInsuranceResponse,
    } as MsgTopUpInsuranceResponse;
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

  fromJSON(_: any): MsgTopUpInsuranceResponse {
    const message = {
      ...baseMsgTopUpInsuranceResponse,
    } as MsgTopUpInsuranceResponse;
    return message;
  },

  toJSON(_: MsgTopUpInsuranceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgTopUpInsuranceResponse>
  ): MsgTopUpInsuranceResponse {
    const message = {
      ...baseMsgTopUpInsuranceResponse,
    } as MsgTopUpInsuranceResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  TopUpInsurance(
    request: MsgTopUpInsurance
  ): Promise<MsgTopUpInsuranceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TopUpInsurance = this.TopUpInsurance.bind(this);
  }
  TopUpInsurance(
    request: MsgTopUpInsurance
  ): Promise<MsgTopUpInsuranceResponse> {
    const data = MsgTopUpInsurance.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.insurance.Msg",
      "TopUpInsurance",
      data
    );
    return promise.then((data) =>
      MsgTopUpInsuranceResponse.decode(new _m0.Reader(data))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
