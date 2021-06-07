/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SubAccount } from "../subaccount/subaccount";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.tradehubcosmos.subaccount";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetSubAccountRequest {
  subAccount: string;
}

export interface QueryGetSubAccountResponse {
  SubAccount?: SubAccount;
}

export interface QueryAllSubAccountRequest {
  pagination?: PageRequest;
}

export interface QueryAllSubAccountResponse {
  SubAccount: SubAccount[];
  pagination?: PageResponse;
}

const baseQueryGetSubAccountRequest: object = { subAccount: "" };

export const QueryGetSubAccountRequest = {
  encode(
    message: QueryGetSubAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subAccount !== "") {
      writer.uint32(10).string(message.subAccount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetSubAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSubAccountRequest,
    } as QueryGetSubAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSubAccountRequest {
    const message = {
      ...baseQueryGetSubAccountRequest,
    } as QueryGetSubAccountRequest;
    if (object.subAccount !== undefined && object.subAccount !== null) {
      message.subAccount = String(object.subAccount);
    } else {
      message.subAccount = "";
    }
    return message;
  },

  toJSON(message: QueryGetSubAccountRequest): unknown {
    const obj: any = {};
    message.subAccount !== undefined && (obj.subAccount = message.subAccount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSubAccountRequest>
  ): QueryGetSubAccountRequest {
    const message = {
      ...baseQueryGetSubAccountRequest,
    } as QueryGetSubAccountRequest;
    if (object.subAccount !== undefined && object.subAccount !== null) {
      message.subAccount = object.subAccount;
    } else {
      message.subAccount = "";
    }
    return message;
  },
};

const baseQueryGetSubAccountResponse: object = {};

export const QueryGetSubAccountResponse = {
  encode(
    message: QueryGetSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.SubAccount !== undefined) {
      SubAccount.encode(message.SubAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSubAccountResponse,
    } as QueryGetSubAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SubAccount = SubAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSubAccountResponse {
    const message = {
      ...baseQueryGetSubAccountResponse,
    } as QueryGetSubAccountResponse;
    if (object.SubAccount !== undefined && object.SubAccount !== null) {
      message.SubAccount = SubAccount.fromJSON(object.SubAccount);
    } else {
      message.SubAccount = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSubAccountResponse): unknown {
    const obj: any = {};
    message.SubAccount !== undefined &&
      (obj.SubAccount = message.SubAccount
        ? SubAccount.toJSON(message.SubAccount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSubAccountResponse>
  ): QueryGetSubAccountResponse {
    const message = {
      ...baseQueryGetSubAccountResponse,
    } as QueryGetSubAccountResponse;
    if (object.SubAccount !== undefined && object.SubAccount !== null) {
      message.SubAccount = SubAccount.fromPartial(object.SubAccount);
    } else {
      message.SubAccount = undefined;
    }
    return message;
  },
};

const baseQueryAllSubAccountRequest: object = {};

export const QueryAllSubAccountRequest = {
  encode(
    message: QueryAllSubAccountRequest,
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
  ): QueryAllSubAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSubAccountRequest,
    } as QueryAllSubAccountRequest;
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

  fromJSON(object: any): QueryAllSubAccountRequest {
    const message = {
      ...baseQueryAllSubAccountRequest,
    } as QueryAllSubAccountRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSubAccountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSubAccountRequest>
  ): QueryAllSubAccountRequest {
    const message = {
      ...baseQueryAllSubAccountRequest,
    } as QueryAllSubAccountRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSubAccountResponse: object = {};

export const QueryAllSubAccountResponse = {
  encode(
    message: QueryAllSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.SubAccount) {
      SubAccount.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSubAccountResponse,
    } as QueryAllSubAccountResponse;
    message.SubAccount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SubAccount.push(SubAccount.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllSubAccountResponse {
    const message = {
      ...baseQueryAllSubAccountResponse,
    } as QueryAllSubAccountResponse;
    message.SubAccount = [];
    if (object.SubAccount !== undefined && object.SubAccount !== null) {
      for (const e of object.SubAccount) {
        message.SubAccount.push(SubAccount.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSubAccountResponse): unknown {
    const obj: any = {};
    if (message.SubAccount) {
      obj.SubAccount = message.SubAccount.map((e) =>
        e ? SubAccount.toJSON(e) : undefined
      );
    } else {
      obj.SubAccount = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSubAccountResponse>
  ): QueryAllSubAccountResponse {
    const message = {
      ...baseQueryAllSubAccountResponse,
    } as QueryAllSubAccountResponse;
    message.SubAccount = [];
    if (object.SubAccount !== undefined && object.SubAccount !== null) {
      for (const e of object.SubAccount) {
        message.SubAccount.push(SubAccount.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  SubAccount(
    request: QueryGetSubAccountRequest
  ): Promise<QueryGetSubAccountResponse>;
  SubAccountAll(
    request: QueryAllSubAccountRequest
  ): Promise<QueryAllSubAccountResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubAccount = this.SubAccount.bind(this);
    this.SubAccountAll = this.SubAccountAll.bind(this);
  }
  SubAccount(
    request: QueryGetSubAccountRequest
  ): Promise<QueryGetSubAccountResponse> {
    const data = QueryGetSubAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.tradehubcosmos.subaccount.Query",
      "SubAccount",
      data
    );
    return promise.then((data) =>
      QueryGetSubAccountResponse.decode(new _m0.Reader(data))
    );
  }

  SubAccountAll(
    request: QueryAllSubAccountRequest
  ): Promise<QueryAllSubAccountResponse> {
    const data = QueryAllSubAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.tradehubcosmos.subaccount.Query",
      "SubAccountAll",
      data
    );
    return promise.then((data) =>
      QueryAllSubAccountResponse.decode(new _m0.Reader(data))
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
