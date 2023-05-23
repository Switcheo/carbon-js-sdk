/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.bank";

export interface InternalTransfer {
  sender: string;
  receiver: string;
  transactionHash: string;
  coins: Coin[];
  transactionMemo: string;
  transactionBlockHeight: Long;
  transactionBlockTime?: Date;
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

const baseInternalTransfer: object = {
  sender: "",
  receiver: "",
  transactionHash: "",
  transactionMemo: "",
  transactionBlockHeight: Long.UZERO,
};

export const InternalTransfer = {
  encode(
    message: InternalTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.transactionHash !== "") {
      writer.uint32(42).string(message.transactionHash);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.transactionMemo !== "") {
      writer.uint32(58).string(message.transactionMemo);
    }
    if (!message.transactionBlockHeight.isZero()) {
      writer.uint32(64).uint64(message.transactionBlockHeight);
    }
    if (message.transactionBlockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.transactionBlockTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInternalTransfer } as InternalTransfer;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 5:
          message.transactionHash = reader.string();
          break;
        case 6:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.transactionMemo = reader.string();
          break;
        case 8:
          message.transactionBlockHeight = reader.uint64() as Long;
          break;
        case 9:
          message.transactionBlockTime = fromTimestamp(
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

  fromJSON(object: any): InternalTransfer {
    const message = { ...baseInternalTransfer } as InternalTransfer;
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.transactionHash =
      object.transactionHash !== undefined && object.transactionHash !== null
        ? String(object.transactionHash)
        : "";
    message.coins = (object.coins ?? []).map((e: any) => Coin.fromJSON(e));
    message.transactionMemo =
      object.transactionMemo !== undefined && object.transactionMemo !== null
        ? String(object.transactionMemo)
        : "";
    message.transactionBlockHeight =
      object.transactionBlockHeight !== undefined &&
      object.transactionBlockHeight !== null
        ? Long.fromString(object.transactionBlockHeight)
        : Long.UZERO;
    message.transactionBlockTime =
      object.transactionBlockTime !== undefined &&
      object.transactionBlockTime !== null
        ? fromJsonTimestamp(object.transactionBlockTime)
        : undefined;
    return message;
  },

  toJSON(message: InternalTransfer): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.transactionHash !== undefined &&
      (obj.transactionHash = message.transactionHash);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    message.transactionMemo !== undefined &&
      (obj.transactionMemo = message.transactionMemo);
    message.transactionBlockHeight !== undefined &&
      (obj.transactionBlockHeight = (
        message.transactionBlockHeight || Long.UZERO
      ).toString());
    message.transactionBlockTime !== undefined &&
      (obj.transactionBlockTime = message.transactionBlockTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<InternalTransfer>): InternalTransfer {
    const message = { ...baseInternalTransfer } as InternalTransfer;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.transactionHash = object.transactionHash ?? "";
    message.coins = (object.coins ?? []).map((e) => Coin.fromPartial(e));
    message.transactionMemo = object.transactionMemo ?? "";
    message.transactionBlockHeight =
      object.transactionBlockHeight !== undefined &&
      object.transactionBlockHeight !== null
        ? Long.fromValue(object.transactionBlockHeight)
        : Long.UZERO;
    message.transactionBlockTime = object.transactionBlockTime ?? undefined;
    return message;
  },
};

const baseCoin: object = { denom: "", amount: "" };

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCoin } as Coin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Coin {
    const message = { ...baseCoin } as Coin;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: Coin): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<Coin>): Coin {
    const message = { ...baseCoin } as Coin;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseQueryInternalTransfersRequest: object = {
  address: "",
  sender: "",
  receiver: "",
  denom: "",
};

export const QueryInternalTransfersRequest = {
  encode(
    message: QueryInternalTransfersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInternalTransfersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInternalTransfersRequest,
    } as QueryInternalTransfersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInternalTransfersRequest {
    const message = {
      ...baseQueryInternalTransfersRequest,
    } as QueryInternalTransfersRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryInternalTransfersRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInternalTransfersRequest>
  ): QueryInternalTransfersRequest {
    const message = {
      ...baseQueryInternalTransfersRequest,
    } as QueryInternalTransfersRequest;
    message.address = object.address ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.denom = object.denom ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryInternalTransfersResponse: object = {};

export const QueryInternalTransfersResponse = {
  encode(
    message: QueryInternalTransfersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.internalTransfers) {
      InternalTransfer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInternalTransfersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInternalTransfersResponse,
    } as QueryInternalTransfersResponse;
    message.internalTransfers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.internalTransfers.push(
            InternalTransfer.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInternalTransfersResponse {
    const message = {
      ...baseQueryInternalTransfersResponse,
    } as QueryInternalTransfersResponse;
    message.internalTransfers = (object.internalTransfers ?? []).map((e: any) =>
      InternalTransfer.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryInternalTransfersResponse): unknown {
    const obj: any = {};
    if (message.internalTransfers) {
      obj.internalTransfers = message.internalTransfers.map((e) =>
        e ? InternalTransfer.toJSON(e) : undefined
      );
    } else {
      obj.internalTransfers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInternalTransfersResponse>
  ): QueryInternalTransfersResponse {
    const message = {
      ...baseQueryInternalTransfersResponse,
    } as QueryInternalTransfersResponse;
    message.internalTransfers = (object.internalTransfers ?? []).map((e) =>
      InternalTransfer.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  InternalTransfers(
    request: QueryInternalTransfersRequest
  ): Promise<QueryInternalTransfersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InternalTransfers = this.InternalTransfers.bind(this);
  }
  InternalTransfers(
    request: QueryInternalTransfersRequest
  ): Promise<QueryInternalTransfersResponse> {
    const data = QueryInternalTransfersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bank.Query",
      "InternalTransfers",
      data
    );
    return promise.then((data) =>
      QueryInternalTransfersResponse.decode(new _m0.Reader(data))
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
