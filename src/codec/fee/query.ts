/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgFee } from "../fee/fee";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.fee";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetMsgFeeRequest {
  msgType: string;
}

export interface QueryGetMsgFeeResponse {
  MsgFee?: MsgFee;
}

export interface QueryAllMsgFeeRequest {
  pagination?: PageRequest;
}

export interface QueryAllMsgFeeResponse {
  msgFees: MsgFee[];
  pagination?: PageResponse;
}

const baseQueryGetMsgFeeRequest: object = { msgType: "" };

export const QueryGetMsgFeeRequest = {
  encode(
    message: QueryGetMsgFeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMsgFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMsgFeeRequest } as QueryGetMsgFeeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMsgFeeRequest {
    const message = { ...baseQueryGetMsgFeeRequest } as QueryGetMsgFeeRequest;
    message.msgType =
      object.msgType !== undefined && object.msgType !== null
        ? String(object.msgType)
        : "";
    return message;
  },

  toJSON(message: QueryGetMsgFeeRequest): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMsgFeeRequest>, I>>(
    object: I
  ): QueryGetMsgFeeRequest {
    const message = { ...baseQueryGetMsgFeeRequest } as QueryGetMsgFeeRequest;
    message.msgType = object.msgType ?? "";
    return message;
  },
};

const baseQueryGetMsgFeeResponse: object = {};

export const QueryGetMsgFeeResponse = {
  encode(
    message: QueryGetMsgFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.MsgFee !== undefined) {
      MsgFee.encode(message.MsgFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMsgFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMsgFeeResponse } as QueryGetMsgFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MsgFee = MsgFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMsgFeeResponse {
    const message = { ...baseQueryGetMsgFeeResponse } as QueryGetMsgFeeResponse;
    message.MsgFee =
      object.MsgFee !== undefined && object.MsgFee !== null
        ? MsgFee.fromJSON(object.MsgFee)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetMsgFeeResponse): unknown {
    const obj: any = {};
    message.MsgFee !== undefined &&
      (obj.MsgFee = message.MsgFee ? MsgFee.toJSON(message.MsgFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMsgFeeResponse>, I>>(
    object: I
  ): QueryGetMsgFeeResponse {
    const message = { ...baseQueryGetMsgFeeResponse } as QueryGetMsgFeeResponse;
    message.MsgFee =
      object.MsgFee !== undefined && object.MsgFee !== null
        ? MsgFee.fromPartial(object.MsgFee)
        : undefined;
    return message;
  },
};

const baseQueryAllMsgFeeRequest: object = {};

export const QueryAllMsgFeeRequest = {
  encode(
    message: QueryAllMsgFeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMsgFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMsgFeeRequest } as QueryAllMsgFeeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMsgFeeRequest {
    const message = { ...baseQueryAllMsgFeeRequest } as QueryAllMsgFeeRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllMsgFeeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMsgFeeRequest>, I>>(
    object: I
  ): QueryAllMsgFeeRequest {
    const message = { ...baseQueryAllMsgFeeRequest } as QueryAllMsgFeeRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllMsgFeeResponse: object = {};

export const QueryAllMsgFeeResponse = {
  encode(
    message: QueryAllMsgFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.msgFees) {
      MsgFee.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMsgFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMsgFeeResponse } as QueryAllMsgFeeResponse;
    message.msgFees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgFees.push(MsgFee.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMsgFeeResponse {
    const message = { ...baseQueryAllMsgFeeResponse } as QueryAllMsgFeeResponse;
    message.msgFees = (object.msgFees ?? []).map((e: any) =>
      MsgFee.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllMsgFeeResponse): unknown {
    const obj: any = {};
    if (message.msgFees) {
      obj.msgFees = message.msgFees.map((e) =>
        e ? MsgFee.toJSON(e) : undefined
      );
    } else {
      obj.msgFees = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMsgFeeResponse>, I>>(
    object: I
  ): QueryAllMsgFeeResponse {
    const message = { ...baseQueryAllMsgFeeResponse } as QueryAllMsgFeeResponse;
    message.msgFees = object.msgFees?.map((e) => MsgFee.fromPartial(e)) || [];
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
  MsgFee(request: QueryGetMsgFeeRequest): Promise<QueryGetMsgFeeResponse>;
  MsgFeeAll(request: QueryAllMsgFeeRequest): Promise<QueryAllMsgFeeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MsgFee = this.MsgFee.bind(this);
    this.MsgFeeAll = this.MsgFeeAll.bind(this);
  }
  MsgFee(request: QueryGetMsgFeeRequest): Promise<QueryGetMsgFeeResponse> {
    const data = QueryGetMsgFeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Query",
      "MsgFee",
      data
    );
    return promise.then((data) =>
      QueryGetMsgFeeResponse.decode(new _m0.Reader(data))
    );
  }

  MsgFeeAll(request: QueryAllMsgFeeRequest): Promise<QueryAllMsgFeeResponse> {
    const data = QueryAllMsgFeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Query",
      "MsgFeeAll",
      data
    );
    return promise.then((data) =>
      QueryAllMsgFeeResponse.decode(new _m0.Reader(data))
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
