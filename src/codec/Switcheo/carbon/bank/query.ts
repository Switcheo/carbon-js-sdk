/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.bank";

export interface InternalTransfer {
  sender: string;
  receiver: string;
  transactionHash: string;
  coins: Coin[];
  transactionMemo: string;
  transactionBlockHeight: Long;
  transactionBlockTime?: Date;
  senderUsername: string;
  receiverUsername: string;
  transactionCode: number;
}

export interface Coin {
  denom: string;
  amount: string;
}

export interface QueryInternalTransfersRequest {
  address: string;
  sender: string;
  receiver: string;
  denom: string;
  pagination?: PageRequest;
}

export interface QueryInternalTransfersResponse {
  internalTransfers: InternalTransfer[];
  pagination?: PageResponse;
}

export interface QueryBlacklistRequest {
  address: string;
}

export interface QueryBlacklistResponse {
  isBlacklisted: boolean;
}

export interface QueryBlacklistAllRequest {
}

export interface QueryBlacklistAllResponse {
  address: string[];
}

function createBaseInternalTransfer(): InternalTransfer {
  return {
    sender: "",
    receiver: "",
    transactionHash: "",
    coins: [],
    transactionMemo: "",
    transactionBlockHeight: Long.UZERO,
    transactionBlockTime: undefined,
    senderUsername: "",
    receiverUsername: "",
    transactionCode: 0,
  };
}

export const InternalTransfer = {
  encode(message: InternalTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.transactionHash !== "") {
      writer.uint32(26).string(message.transactionHash);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.transactionMemo !== "") {
      writer.uint32(42).string(message.transactionMemo);
    }
    if (!message.transactionBlockHeight.isZero()) {
      writer.uint32(48).uint64(message.transactionBlockHeight);
    }
    if (message.transactionBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.transactionBlockTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.senderUsername !== "") {
      writer.uint32(66).string(message.senderUsername);
    }
    if (message.receiverUsername !== "") {
      writer.uint32(74).string(message.receiverUsername);
    }
    if (message.transactionCode !== 0) {
      writer.uint32(80).uint32(message.transactionCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalTransfer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.transactionHash = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.coins.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.transactionMemo = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.transactionBlockHeight = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.transactionBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.senderUsername = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.receiverUsername = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.transactionCode = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InternalTransfer {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      transactionHash: isSet(object.transactionHash) ? String(object.transactionHash) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      transactionMemo: isSet(object.transactionMemo) ? String(object.transactionMemo) : "",
      transactionBlockHeight: isSet(object.transactionBlockHeight)
        ? Long.fromValue(object.transactionBlockHeight)
        : Long.UZERO,
      transactionBlockTime: isSet(object.transactionBlockTime)
        ? fromJsonTimestamp(object.transactionBlockTime)
        : undefined,
      senderUsername: isSet(object.senderUsername) ? String(object.senderUsername) : "",
      receiverUsername: isSet(object.receiverUsername) ? String(object.receiverUsername) : "",
      transactionCode: isSet(object.transactionCode) ? Number(object.transactionCode) : 0,
    };
  },

  toJSON(message: InternalTransfer): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.transactionHash !== undefined && (obj.transactionHash = message.transactionHash);
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.transactionMemo !== undefined && (obj.transactionMemo = message.transactionMemo);
    message.transactionBlockHeight !== undefined &&
      (obj.transactionBlockHeight = (message.transactionBlockHeight || Long.UZERO).toString());
    message.transactionBlockTime !== undefined &&
      (obj.transactionBlockTime = message.transactionBlockTime.toISOString());
    message.senderUsername !== undefined && (obj.senderUsername = message.senderUsername);
    message.receiverUsername !== undefined && (obj.receiverUsername = message.receiverUsername);
    message.transactionCode !== undefined && (obj.transactionCode = Math.round(message.transactionCode));
    return obj;
  },

  create(base?: DeepPartial<InternalTransfer>): InternalTransfer {
    return InternalTransfer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InternalTransfer>): InternalTransfer {
    const message = createBaseInternalTransfer();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.transactionHash = object.transactionHash ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    message.transactionMemo = object.transactionMemo ?? "";
    message.transactionBlockHeight =
      (object.transactionBlockHeight !== undefined && object.transactionBlockHeight !== null)
        ? Long.fromValue(object.transactionBlockHeight)
        : Long.UZERO;
    message.transactionBlockTime = object.transactionBlockTime ?? undefined;
    message.senderUsername = object.senderUsername ?? "";
    message.receiverUsername = object.receiverUsername ?? "";
    message.transactionCode = object.transactionCode ?? 0;
    return message;
  },
};

function createBaseCoin(): Coin {
  return { denom: "", amount: "" };
}

export const Coin = {
  encode(message: Coin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): Coin {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: Coin): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<Coin>): Coin {
    return Coin.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Coin>): Coin {
    const message = createBaseCoin();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseQueryInternalTransfersRequest(): QueryInternalTransfersRequest {
  return { address: "", sender: "", receiver: "", denom: "", pagination: undefined };
}

export const QueryInternalTransfersRequest = {
  encode(message: QueryInternalTransfersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInternalTransfersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInternalTransfersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryInternalTransfersRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryInternalTransfersRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryInternalTransfersRequest>): QueryInternalTransfersRequest {
    return QueryInternalTransfersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryInternalTransfersRequest>): QueryInternalTransfersRequest {
    const message = createBaseQueryInternalTransfersRequest();
    message.address = object.address ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.denom = object.denom ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryInternalTransfersResponse(): QueryInternalTransfersResponse {
  return { internalTransfers: [], pagination: undefined };
}

export const QueryInternalTransfersResponse = {
  encode(message: QueryInternalTransfersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.internalTransfers) {
      InternalTransfer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInternalTransfersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInternalTransfersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.internalTransfers.push(InternalTransfer.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryInternalTransfersResponse {
    return {
      internalTransfers: Array.isArray(object?.internalTransfers)
        ? object.internalTransfers.map((e: any) => InternalTransfer.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryInternalTransfersResponse): unknown {
    const obj: any = {};
    if (message.internalTransfers) {
      obj.internalTransfers = message.internalTransfers.map((e) => e ? InternalTransfer.toJSON(e) : undefined);
    } else {
      obj.internalTransfers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryInternalTransfersResponse>): QueryInternalTransfersResponse {
    return QueryInternalTransfersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryInternalTransfersResponse>): QueryInternalTransfersResponse {
    const message = createBaseQueryInternalTransfersResponse();
    message.internalTransfers = object.internalTransfers?.map((e) => InternalTransfer.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryBlacklistRequest(): QueryBlacklistRequest {
  return { address: "" };
}

export const QueryBlacklistRequest = {
  encode(message: QueryBlacklistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlacklistRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlacklistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBlacklistRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryBlacklistRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryBlacklistRequest>): QueryBlacklistRequest {
    return QueryBlacklistRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryBlacklistRequest>): QueryBlacklistRequest {
    const message = createBaseQueryBlacklistRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryBlacklistResponse(): QueryBlacklistResponse {
  return { isBlacklisted: false };
}

export const QueryBlacklistResponse = {
  encode(message: QueryBlacklistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isBlacklisted === true) {
      writer.uint32(8).bool(message.isBlacklisted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlacklistResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlacklistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isBlacklisted = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBlacklistResponse {
    return { isBlacklisted: isSet(object.isBlacklisted) ? Boolean(object.isBlacklisted) : false };
  },

  toJSON(message: QueryBlacklistResponse): unknown {
    const obj: any = {};
    message.isBlacklisted !== undefined && (obj.isBlacklisted = message.isBlacklisted);
    return obj;
  },

  create(base?: DeepPartial<QueryBlacklistResponse>): QueryBlacklistResponse {
    return QueryBlacklistResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryBlacklistResponse>): QueryBlacklistResponse {
    const message = createBaseQueryBlacklistResponse();
    message.isBlacklisted = object.isBlacklisted ?? false;
    return message;
  },
};

function createBaseQueryBlacklistAllRequest(): QueryBlacklistAllRequest {
  return {};
}

export const QueryBlacklistAllRequest = {
  encode(_: QueryBlacklistAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlacklistAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlacklistAllRequest();
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

  fromJSON(_: any): QueryBlacklistAllRequest {
    return {};
  },

  toJSON(_: QueryBlacklistAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryBlacklistAllRequest>): QueryBlacklistAllRequest {
    return QueryBlacklistAllRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryBlacklistAllRequest>): QueryBlacklistAllRequest {
    const message = createBaseQueryBlacklistAllRequest();
    return message;
  },
};

function createBaseQueryBlacklistAllResponse(): QueryBlacklistAllResponse {
  return { address: [] };
}

export const QueryBlacklistAllResponse = {
  encode(message: QueryBlacklistAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.address) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlacklistAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlacklistAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBlacklistAllResponse {
    return { address: Array.isArray(object?.address) ? object.address.map((e: any) => String(e)) : [] };
  },

  toJSON(message: QueryBlacklistAllResponse): unknown {
    const obj: any = {};
    if (message.address) {
      obj.address = message.address.map((e) => e);
    } else {
      obj.address = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryBlacklistAllResponse>): QueryBlacklistAllResponse {
    return QueryBlacklistAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryBlacklistAllResponse>): QueryBlacklistAllResponse {
    const message = createBaseQueryBlacklistAllResponse();
    message.address = object.address?.map((e) => e) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  InternalTransfers(request: QueryInternalTransfersRequest): Promise<QueryInternalTransfersResponse>;
  /** Get whether a specific address is blacklisted. */
  Blacklist(request: QueryBlacklistRequest): Promise<QueryBlacklistResponse>;
  /** Queries a list of blacklist items. */
  BlacklistAll(request: QueryBlacklistAllRequest): Promise<QueryBlacklistAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.bank.Query";
    this.rpc = rpc;
    this.InternalTransfers = this.InternalTransfers.bind(this);
    this.Blacklist = this.Blacklist.bind(this);
    this.BlacklistAll = this.BlacklistAll.bind(this);
  }
  InternalTransfers(request: QueryInternalTransfersRequest): Promise<QueryInternalTransfersResponse> {
    const data = QueryInternalTransfersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InternalTransfers", data);
    return promise.then((data) => QueryInternalTransfersResponse.decode(_m0.Reader.create(data)));
  }

  Blacklist(request: QueryBlacklistRequest): Promise<QueryBlacklistResponse> {
    const data = QueryBlacklistRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Blacklist", data);
    return promise.then((data) => QueryBlacklistResponse.decode(_m0.Reader.create(data)));
  }

  BlacklistAll(request: QueryBlacklistAllRequest): Promise<QueryBlacklistAllResponse> {
    const data = QueryBlacklistAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BlacklistAll", data);
    return promise.then((data) => QueryBlacklistAllResponse.decode(_m0.Reader.create(data)));
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
