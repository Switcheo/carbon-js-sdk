/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.otc";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateRfq {
  requester: string;
  sellCoins: Coin[];
  buyDenom: string;
  expiryTime?: Date;
}

export interface MsgCreateRfqResponse {}

export interface MsgCancelRfq {
  requester: string;
  id: string;
}

export interface MsgCancelRfqResponse {}

export interface MsgCreateQuote {
  quoter: string;
  rfqId: string;
  quantity: string;
  expiryTime?: Date;
}

export interface MsgCreateQuoteResponse {}

export interface MsgAcceptQuote {
  requester: string;
  id: string;
}

export interface MsgAcceptQuoteResponse {}

export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

export interface MsgUpdateParamsResponse {}

const baseMsgCreateRfq: object = { requester: "", buyDenom: "" };

export const MsgCreateRfq = {
  encode(
    message: MsgCreateRfq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    for (const v of message.sellCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.buyDenom !== "") {
      writer.uint32(26).string(message.buyDenom);
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiryTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRfq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRfq } as MsgCreateRfq;
    message.sellCoins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
          break;
        case 2:
          message.sellCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.buyDenom = reader.string();
          break;
        case 4:
          message.expiryTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRfq {
    const message = { ...baseMsgCreateRfq } as MsgCreateRfq;
    message.requester =
      object.requester !== undefined && object.requester !== null
        ? String(object.requester)
        : "";
    message.sellCoins = (object.sellCoins ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    message.buyDenom =
      object.buyDenom !== undefined && object.buyDenom !== null
        ? String(object.buyDenom)
        : "";
    message.expiryTime =
      object.expiryTime !== undefined && object.expiryTime !== null
        ? fromJsonTimestamp(object.expiryTime)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreateRfq): unknown {
    const obj: any = {};
    message.requester !== undefined && (obj.requester = message.requester);
    if (message.sellCoins) {
      obj.sellCoins = message.sellCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.sellCoins = [];
    }
    message.buyDenom !== undefined && (obj.buyDenom = message.buyDenom);
    message.expiryTime !== undefined &&
      (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRfq>): MsgCreateRfq {
    const message = { ...baseMsgCreateRfq } as MsgCreateRfq;
    message.requester = object.requester ?? "";
    message.sellCoins = (object.sellCoins ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.buyDenom = object.buyDenom ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

const baseMsgCreateRfqResponse: object = {};

export const MsgCreateRfqResponse = {
  encode(
    _: MsgCreateRfqResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateRfqResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRfqResponse } as MsgCreateRfqResponse;
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

  fromJSON(_: any): MsgCreateRfqResponse {
    const message = { ...baseMsgCreateRfqResponse } as MsgCreateRfqResponse;
    return message;
  },

  toJSON(_: MsgCreateRfqResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateRfqResponse>): MsgCreateRfqResponse {
    const message = { ...baseMsgCreateRfqResponse } as MsgCreateRfqResponse;
    return message;
  },
};

const baseMsgCancelRfq: object = { requester: "", id: "" };

export const MsgCancelRfq = {
  encode(
    message: MsgCancelRfq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRfq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelRfq } as MsgCancelRfq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelRfq {
    const message = { ...baseMsgCancelRfq } as MsgCancelRfq;
    message.requester =
      object.requester !== undefined && object.requester !== null
        ? String(object.requester)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: MsgCancelRfq): unknown {
    const obj: any = {};
    message.requester !== undefined && (obj.requester = message.requester);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelRfq>): MsgCancelRfq {
    const message = { ...baseMsgCancelRfq } as MsgCancelRfq;
    message.requester = object.requester ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

const baseMsgCancelRfqResponse: object = {};

export const MsgCancelRfqResponse = {
  encode(
    _: MsgCancelRfqResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelRfqResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelRfqResponse } as MsgCancelRfqResponse;
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

  fromJSON(_: any): MsgCancelRfqResponse {
    const message = { ...baseMsgCancelRfqResponse } as MsgCancelRfqResponse;
    return message;
  },

  toJSON(_: MsgCancelRfqResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelRfqResponse>): MsgCancelRfqResponse {
    const message = { ...baseMsgCancelRfqResponse } as MsgCancelRfqResponse;
    return message;
  },
};

const baseMsgCreateQuote: object = { quoter: "", rfqId: "", quantity: "" };

export const MsgCreateQuote = {
  encode(
    message: MsgCreateQuote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoter !== "") {
      writer.uint32(10).string(message.quoter);
    }
    if (message.rfqId !== "") {
      writer.uint32(18).string(message.rfqId);
    }
    if (message.quantity !== "") {
      writer.uint32(26).string(message.quantity);
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiryTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateQuote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateQuote } as MsgCreateQuote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoter = reader.string();
          break;
        case 2:
          message.rfqId = reader.string();
          break;
        case 3:
          message.quantity = reader.string();
          break;
        case 4:
          message.expiryTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateQuote {
    const message = { ...baseMsgCreateQuote } as MsgCreateQuote;
    message.quoter =
      object.quoter !== undefined && object.quoter !== null
        ? String(object.quoter)
        : "";
    message.rfqId =
      object.rfqId !== undefined && object.rfqId !== null
        ? String(object.rfqId)
        : "";
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? String(object.quantity)
        : "";
    message.expiryTime =
      object.expiryTime !== undefined && object.expiryTime !== null
        ? fromJsonTimestamp(object.expiryTime)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreateQuote): unknown {
    const obj: any = {};
    message.quoter !== undefined && (obj.quoter = message.quoter);
    message.rfqId !== undefined && (obj.rfqId = message.rfqId);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.expiryTime !== undefined &&
      (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateQuote>): MsgCreateQuote {
    const message = { ...baseMsgCreateQuote } as MsgCreateQuote;
    message.quoter = object.quoter ?? "";
    message.rfqId = object.rfqId ?? "";
    message.quantity = object.quantity ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

const baseMsgCreateQuoteResponse: object = {};

export const MsgCreateQuoteResponse = {
  encode(
    _: MsgCreateQuoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateQuoteResponse } as MsgCreateQuoteResponse;
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

  fromJSON(_: any): MsgCreateQuoteResponse {
    const message = { ...baseMsgCreateQuoteResponse } as MsgCreateQuoteResponse;
    return message;
  },

  toJSON(_: MsgCreateQuoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateQuoteResponse>): MsgCreateQuoteResponse {
    const message = { ...baseMsgCreateQuoteResponse } as MsgCreateQuoteResponse;
    return message;
  },
};

const baseMsgAcceptQuote: object = { requester: "", id: "" };

export const MsgAcceptQuote = {
  encode(
    message: MsgAcceptQuote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptQuote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcceptQuote } as MsgAcceptQuote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcceptQuote {
    const message = { ...baseMsgAcceptQuote } as MsgAcceptQuote;
    message.requester =
      object.requester !== undefined && object.requester !== null
        ? String(object.requester)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: MsgAcceptQuote): unknown {
    const obj: any = {};
    message.requester !== undefined && (obj.requester = message.requester);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAcceptQuote>): MsgAcceptQuote {
    const message = { ...baseMsgAcceptQuote } as MsgAcceptQuote;
    message.requester = object.requester ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

const baseMsgAcceptQuoteResponse: object = {};

export const MsgAcceptQuoteResponse = {
  encode(
    _: MsgAcceptQuoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAcceptQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcceptQuoteResponse } as MsgAcceptQuoteResponse;
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

  fromJSON(_: any): MsgAcceptQuoteResponse {
    const message = { ...baseMsgAcceptQuoteResponse } as MsgAcceptQuoteResponse;
    return message;
  },

  toJSON(_: MsgAcceptQuoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAcceptQuoteResponse>): MsgAcceptQuoteResponse {
    const message = { ...baseMsgAcceptQuoteResponse } as MsgAcceptQuoteResponse;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params
        ? ParamsToUpdate.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateRfq(request: MsgCreateRfq): Promise<MsgCreateRfqResponse>;
  CancelRfq(request: MsgCancelRfq): Promise<MsgCancelRfqResponse>;
  CreateQuote(request: MsgCreateQuote): Promise<MsgCreateQuoteResponse>;
  AcceptQuote(request: MsgAcceptQuote): Promise<MsgAcceptQuoteResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateRfq = this.CreateRfq.bind(this);
    this.CancelRfq = this.CancelRfq.bind(this);
    this.CreateQuote = this.CreateQuote.bind(this);
    this.AcceptQuote = this.AcceptQuote.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateRfq(request: MsgCreateRfq): Promise<MsgCreateRfqResponse> {
    const data = MsgCreateRfq.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.otc.Msg",
      "CreateRfq",
      data
    );
    return promise.then((data) =>
      MsgCreateRfqResponse.decode(new _m0.Reader(data))
    );
  }

  CancelRfq(request: MsgCancelRfq): Promise<MsgCancelRfqResponse> {
    const data = MsgCancelRfq.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.otc.Msg",
      "CancelRfq",
      data
    );
    return promise.then((data) =>
      MsgCancelRfqResponse.decode(new _m0.Reader(data))
    );
  }

  CreateQuote(request: MsgCreateQuote): Promise<MsgCreateQuoteResponse> {
    const data = MsgCreateQuote.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.otc.Msg",
      "CreateQuote",
      data
    );
    return promise.then((data) =>
      MsgCreateQuoteResponse.decode(new _m0.Reader(data))
    );
  }

  AcceptQuote(request: MsgAcceptQuote): Promise<MsgAcceptQuoteResponse> {
    const data = MsgAcceptQuote.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.otc.Msg",
      "AcceptQuote",
      data
    );
    return promise.then((data) =>
      MsgAcceptQuoteResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.otc.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
