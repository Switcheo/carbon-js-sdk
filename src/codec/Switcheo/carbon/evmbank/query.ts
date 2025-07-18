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

function createBaseQueryAccountBalanceRequest(): QueryAccountBalanceRequest {
  return { address: "" };
}

export const QueryAccountBalanceRequest = {
  encode(message: QueryAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountBalanceRequest();
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

  fromJSON(object: any): QueryAccountBalanceRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAccountBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountBalanceRequest>): QueryAccountBalanceRequest {
    return QueryAccountBalanceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountBalanceRequest>): QueryAccountBalanceRequest {
    const message = createBaseQueryAccountBalanceRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountBalanceResponse(): QueryAccountBalanceResponse {
  return { balance: "" };
}

export const QueryAccountBalanceResponse = {
  encode(message: QueryAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.balance = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountBalanceResponse {
    return { balance: isSet(object.balance) ? String(object.balance) : "" };
  },

  toJSON(message: QueryAccountBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountBalanceResponse>): QueryAccountBalanceResponse {
    return QueryAccountBalanceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountBalanceResponse>): QueryAccountBalanceResponse {
    const message = createBaseQueryAccountBalanceResponse();
    message.balance = object.balance ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Balance(request: QueryAccountBalanceRequest): Promise<QueryAccountBalanceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.evmbank.Query";
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
  }
  Balance(request: QueryAccountBalanceRequest): Promise<QueryAccountBalanceResponse> {
    const data = QueryAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Balance", data);
    return promise.then((data) => QueryAccountBalanceResponse.decode(_m0.Reader.create(data)));
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
