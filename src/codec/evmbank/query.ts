/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.evmbank";

export interface QueryAccountBalanceRequest {
  address: string;
}

export interface QueryAccountBalanceResponse {
  balance: string;
}

const baseQueryAccountBalanceRequest: object = { address: "" };

export const QueryAccountBalanceRequest = {
  encode(
    message: QueryAccountBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountBalanceRequest,
    } as QueryAccountBalanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountBalanceRequest {
    const message = {
      ...baseQueryAccountBalanceRequest,
    } as QueryAccountBalanceRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAccountBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountBalanceRequest>
  ): QueryAccountBalanceRequest {
    const message = {
      ...baseQueryAccountBalanceRequest,
    } as QueryAccountBalanceRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryAccountBalanceResponse: object = { balance: "" };

export const QueryAccountBalanceResponse = {
  encode(
    message: QueryAccountBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountBalanceResponse,
    } as QueryAccountBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountBalanceResponse {
    const message = {
      ...baseQueryAccountBalanceResponse,
    } as QueryAccountBalanceResponse;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? String(object.balance)
        : "";
    return message;
  },

  toJSON(message: QueryAccountBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountBalanceResponse>
  ): QueryAccountBalanceResponse {
    const message = {
      ...baseQueryAccountBalanceResponse,
    } as QueryAccountBalanceResponse;
    message.balance = object.balance ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Balance(
    request: QueryAccountBalanceRequest
  ): Promise<QueryAccountBalanceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
  }
  Balance(
    request: QueryAccountBalanceRequest
  ): Promise<QueryAccountBalanceResponse> {
    const data = QueryAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmbank.Query",
      "Balance",
      data
    );
    return promise.then((data) =>
      QueryAccountBalanceResponse.decode(new _m0.Reader(data))
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
