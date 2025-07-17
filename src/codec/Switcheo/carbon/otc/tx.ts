/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.otc";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateRfq {
  requester: string;
  sellCoins: Coin[];
  buyDenom: string;
  expiryTime?: Date;
}

export interface MsgCreateRfqResponse {
}

export interface MsgCancelRfq {
  requester: string;
  id: string;
}

export interface MsgCancelRfqResponse {
}

export interface MsgCreateQuote {
  quoter: string;
  rfqId: string;
  quantity: string;
  expiryTime?: Date;
}

export interface MsgCreateQuoteResponse {
}

export interface MsgAcceptQuote {
  requester: string;
  id: string;
}

export interface MsgAcceptQuoteResponse {
}

export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

export interface MsgUpdateParamsResponse {
}

function createBaseMsgCreateRfq(): MsgCreateRfq {
  return { requester: "", sellCoins: [], buyDenom: "", expiryTime: undefined };
}

export const MsgCreateRfq = {
  encode(message: MsgCreateRfq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRfq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRfq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requester = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sellCoins.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.buyDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRfq {
    return {
      requester: isSet(object.requester) ? String(object.requester) : "",
      sellCoins: Array.isArray(object?.sellCoins) ? object.sellCoins.map((e: any) => Coin.fromJSON(e)) : [],
      buyDenom: isSet(object.buyDenom) ? String(object.buyDenom) : "",
      expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : undefined,
    };
  },

  toJSON(message: MsgCreateRfq): unknown {
    const obj: any = {};
    message.requester !== undefined && (obj.requester = message.requester);
    if (message.sellCoins) {
      obj.sellCoins = message.sellCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.sellCoins = [];
    }
    message.buyDenom !== undefined && (obj.buyDenom = message.buyDenom);
    message.expiryTime !== undefined && (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<MsgCreateRfq>): MsgCreateRfq {
    return MsgCreateRfq.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateRfq>): MsgCreateRfq {
    const message = createBaseMsgCreateRfq();
    message.requester = object.requester ?? "";
    message.sellCoins = object.sellCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.buyDenom = object.buyDenom ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

function createBaseMsgCreateRfqResponse(): MsgCreateRfqResponse {
  return {};
}

export const MsgCreateRfqResponse = {
  encode(_: MsgCreateRfqResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRfqResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRfqResponse();
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

  fromJSON(_: any): MsgCreateRfqResponse {
    return {};
  },

  toJSON(_: MsgCreateRfqResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateRfqResponse>): MsgCreateRfqResponse {
    return MsgCreateRfqResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreateRfqResponse>): MsgCreateRfqResponse {
    const message = createBaseMsgCreateRfqResponse();
    return message;
  },
};

function createBaseMsgCancelRfq(): MsgCancelRfq {
  return { requester: "", id: "" };
}

export const MsgCancelRfq = {
  encode(message: MsgCancelRfq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRfq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRfq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requester = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCancelRfq {
    return {
      requester: isSet(object.requester) ? String(object.requester) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgCancelRfq): unknown {
    const obj: any = {};
    message.requester !== undefined && (obj.requester = message.requester);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<MsgCancelRfq>): MsgCancelRfq {
    return MsgCancelRfq.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCancelRfq>): MsgCancelRfq {
    const message = createBaseMsgCancelRfq();
    message.requester = object.requester ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgCancelRfqResponse(): MsgCancelRfqResponse {
  return {};
}

export const MsgCancelRfqResponse = {
  encode(_: MsgCancelRfqResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRfqResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRfqResponse();
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

  fromJSON(_: any): MsgCancelRfqResponse {
    return {};
  },

  toJSON(_: MsgCancelRfqResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCancelRfqResponse>): MsgCancelRfqResponse {
    return MsgCancelRfqResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCancelRfqResponse>): MsgCancelRfqResponse {
    const message = createBaseMsgCancelRfqResponse();
    return message;
  },
};

function createBaseMsgCreateQuote(): MsgCreateQuote {
  return { quoter: "", rfqId: "", quantity: "", expiryTime: undefined };
}

export const MsgCreateQuote = {
  encode(message: MsgCreateQuote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateQuote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateQuote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quoter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rfqId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quantity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateQuote {
    return {
      quoter: isSet(object.quoter) ? String(object.quoter) : "",
      rfqId: isSet(object.rfqId) ? String(object.rfqId) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : undefined,
    };
  },

  toJSON(message: MsgCreateQuote): unknown {
    const obj: any = {};
    message.quoter !== undefined && (obj.quoter = message.quoter);
    message.rfqId !== undefined && (obj.rfqId = message.rfqId);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.expiryTime !== undefined && (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<MsgCreateQuote>): MsgCreateQuote {
    return MsgCreateQuote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateQuote>): MsgCreateQuote {
    const message = createBaseMsgCreateQuote();
    message.quoter = object.quoter ?? "";
    message.rfqId = object.rfqId ?? "";
    message.quantity = object.quantity ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

function createBaseMsgCreateQuoteResponse(): MsgCreateQuoteResponse {
  return {};
}

export const MsgCreateQuoteResponse = {
  encode(_: MsgCreateQuoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateQuoteResponse();
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

  fromJSON(_: any): MsgCreateQuoteResponse {
    return {};
  },

  toJSON(_: MsgCreateQuoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateQuoteResponse>): MsgCreateQuoteResponse {
    return MsgCreateQuoteResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreateQuoteResponse>): MsgCreateQuoteResponse {
    const message = createBaseMsgCreateQuoteResponse();
    return message;
  },
};

function createBaseMsgAcceptQuote(): MsgAcceptQuote {
  return { requester: "", id: "" };
}

export const MsgAcceptQuote = {
  encode(message: MsgAcceptQuote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptQuote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptQuote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requester = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAcceptQuote {
    return {
      requester: isSet(object.requester) ? String(object.requester) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgAcceptQuote): unknown {
    const obj: any = {};
    message.requester !== undefined && (obj.requester = message.requester);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<MsgAcceptQuote>): MsgAcceptQuote {
    return MsgAcceptQuote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAcceptQuote>): MsgAcceptQuote {
    const message = createBaseMsgAcceptQuote();
    message.requester = object.requester ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgAcceptQuoteResponse(): MsgAcceptQuoteResponse {
  return {};
}

export const MsgAcceptQuoteResponse = {
  encode(_: MsgAcceptQuoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptQuoteResponse();
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

  fromJSON(_: any): MsgAcceptQuoteResponse {
    return {};
  },

  toJSON(_: MsgAcceptQuoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAcceptQuoteResponse>): MsgAcceptQuoteResponse {
    return MsgAcceptQuoteResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAcceptQuoteResponse>): MsgAcceptQuoteResponse {
    const message = createBaseMsgAcceptQuoteResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? ParamsToUpdate.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? ParamsToUpdate.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ParamsToUpdate.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
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
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.otc.Msg";
    this.rpc = rpc;
    this.CreateRfq = this.CreateRfq.bind(this);
    this.CancelRfq = this.CancelRfq.bind(this);
    this.CreateQuote = this.CreateQuote.bind(this);
    this.AcceptQuote = this.AcceptQuote.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateRfq(request: MsgCreateRfq): Promise<MsgCreateRfqResponse> {
    const data = MsgCreateRfq.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateRfq", data);
    return promise.then((data) => MsgCreateRfqResponse.decode(_m0.Reader.create(data)));
  }

  CancelRfq(request: MsgCancelRfq): Promise<MsgCancelRfqResponse> {
    const data = MsgCancelRfq.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelRfq", data);
    return promise.then((data) => MsgCancelRfqResponse.decode(_m0.Reader.create(data)));
  }

  CreateQuote(request: MsgCreateQuote): Promise<MsgCreateQuoteResponse> {
    const data = MsgCreateQuote.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateQuote", data);
    return promise.then((data) => MsgCreateQuoteResponse.decode(_m0.Reader.create(data)));
  }

  AcceptQuote(request: MsgAcceptQuote): Promise<MsgAcceptQuoteResponse> {
    const data = MsgAcceptQuote.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcceptQuote", data);
    return promise.then((data) => MsgAcceptQuoteResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
