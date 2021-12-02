/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SubAccount, GenesisSubAccount } from "../subaccount/subaccount";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.subaccount";

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
  subAccounts: GenesisSubAccount[];
  pagination?: PageResponse;
}

export interface QuerySubAccountStatusRequest {
  mainAddress: string;
  subAddress: string;
}

export interface QuerySubAccountStatusResponse {
  status: string;
}

export interface QuerySubAccountPowerRequest {
  subAddress: string;
}

export interface QuerySubAccountPowerResponse {
  power: string;
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
    message.subAccount =
      object.subAccount !== undefined && object.subAccount !== null
        ? String(object.subAccount)
        : "";
    return message;
  },

  toJSON(message: QueryGetSubAccountRequest): unknown {
    const obj: any = {};
    message.subAccount !== undefined && (obj.subAccount = message.subAccount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSubAccountRequest>, I>>(
    object: I
  ): QueryGetSubAccountRequest {
    const message = {
      ...baseQueryGetSubAccountRequest,
    } as QueryGetSubAccountRequest;
    message.subAccount = object.subAccount ?? "";
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
    message.SubAccount =
      object.SubAccount !== undefined && object.SubAccount !== null
        ? SubAccount.fromJSON(object.SubAccount)
        : undefined;
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

  fromPartial<I extends Exact<DeepPartial<QueryGetSubAccountResponse>, I>>(
    object: I
  ): QueryGetSubAccountResponse {
    const message = {
      ...baseQueryGetSubAccountResponse,
    } as QueryGetSubAccountResponse;
    message.SubAccount =
      object.SubAccount !== undefined && object.SubAccount !== null
        ? SubAccount.fromPartial(object.SubAccount)
        : undefined;
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
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

  fromPartial<I extends Exact<DeepPartial<QueryAllSubAccountRequest>, I>>(
    object: I
  ): QueryAllSubAccountRequest {
    const message = {
      ...baseQueryAllSubAccountRequest,
    } as QueryAllSubAccountRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllSubAccountResponse: object = {};

export const QueryAllSubAccountResponse = {
  encode(
    message: QueryAllSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subAccounts) {
      GenesisSubAccount.encode(v!, writer.uint32(10).fork()).ldelim();
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
    message.subAccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subAccounts.push(
            GenesisSubAccount.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllSubAccountResponse {
    const message = {
      ...baseQueryAllSubAccountResponse,
    } as QueryAllSubAccountResponse;
    message.subAccounts = (object.subAccounts ?? []).map((e: any) =>
      GenesisSubAccount.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllSubAccountResponse): unknown {
    const obj: any = {};
    if (message.subAccounts) {
      obj.subAccounts = message.subAccounts.map((e) =>
        e ? GenesisSubAccount.toJSON(e) : undefined
      );
    } else {
      obj.subAccounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllSubAccountResponse>, I>>(
    object: I
  ): QueryAllSubAccountResponse {
    const message = {
      ...baseQueryAllSubAccountResponse,
    } as QueryAllSubAccountResponse;
    message.subAccounts =
      object.subAccounts?.map((e) => GenesisSubAccount.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQuerySubAccountStatusRequest: object = {
  mainAddress: "",
  subAddress: "",
};

export const QuerySubAccountStatusRequest = {
  encode(
    message: QuerySubAccountStatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mainAddress !== "") {
      writer.uint32(10).string(message.mainAddress);
    }
    if (message.subAddress !== "") {
      writer.uint32(18).string(message.subAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubAccountStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySubAccountStatusRequest,
    } as QuerySubAccountStatusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainAddress = reader.string();
          break;
        case 2:
          message.subAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubAccountStatusRequest {
    const message = {
      ...baseQuerySubAccountStatusRequest,
    } as QuerySubAccountStatusRequest;
    message.mainAddress =
      object.mainAddress !== undefined && object.mainAddress !== null
        ? String(object.mainAddress)
        : "";
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    return message;
  },

  toJSON(message: QuerySubAccountStatusRequest): unknown {
    const obj: any = {};
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubAccountStatusRequest>, I>>(
    object: I
  ): QuerySubAccountStatusRequest {
    const message = {
      ...baseQuerySubAccountStatusRequest,
    } as QuerySubAccountStatusRequest;
    message.mainAddress = object.mainAddress ?? "";
    message.subAddress = object.subAddress ?? "";
    return message;
  },
};

const baseQuerySubAccountStatusResponse: object = { status: "" };

export const QuerySubAccountStatusResponse = {
  encode(
    message: QuerySubAccountStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubAccountStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySubAccountStatusResponse,
    } as QuerySubAccountStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubAccountStatusResponse {
    const message = {
      ...baseQuerySubAccountStatusResponse,
    } as QuerySubAccountStatusResponse;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    return message;
  },

  toJSON(message: QuerySubAccountStatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubAccountStatusResponse>, I>>(
    object: I
  ): QuerySubAccountStatusResponse {
    const message = {
      ...baseQuerySubAccountStatusResponse,
    } as QuerySubAccountStatusResponse;
    message.status = object.status ?? "";
    return message;
  },
};

const baseQuerySubAccountPowerRequest: object = { subAddress: "" };

export const QuerySubAccountPowerRequest = {
  encode(
    message: QuerySubAccountPowerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subAddress !== "") {
      writer.uint32(10).string(message.subAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubAccountPowerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySubAccountPowerRequest,
    } as QuerySubAccountPowerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubAccountPowerRequest {
    const message = {
      ...baseQuerySubAccountPowerRequest,
    } as QuerySubAccountPowerRequest;
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    return message;
  },

  toJSON(message: QuerySubAccountPowerRequest): unknown {
    const obj: any = {};
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubAccountPowerRequest>, I>>(
    object: I
  ): QuerySubAccountPowerRequest {
    const message = {
      ...baseQuerySubAccountPowerRequest,
    } as QuerySubAccountPowerRequest;
    message.subAddress = object.subAddress ?? "";
    return message;
  },
};

const baseQuerySubAccountPowerResponse: object = { power: "" };

export const QuerySubAccountPowerResponse = {
  encode(
    message: QuerySubAccountPowerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.power !== "") {
      writer.uint32(10).string(message.power);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubAccountPowerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySubAccountPowerResponse,
    } as QuerySubAccountPowerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubAccountPowerResponse {
    const message = {
      ...baseQuerySubAccountPowerResponse,
    } as QuerySubAccountPowerResponse;
    message.power =
      object.power !== undefined && object.power !== null
        ? String(object.power)
        : "";
    return message;
  },

  toJSON(message: QuerySubAccountPowerResponse): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = message.power);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubAccountPowerResponse>, I>>(
    object: I
  ): QuerySubAccountPowerResponse {
    const message = {
      ...baseQuerySubAccountPowerResponse,
    } as QuerySubAccountPowerResponse;
    message.power = object.power ?? "";
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
  SubAccountStatus(
    request: QuerySubAccountStatusRequest
  ): Promise<QuerySubAccountStatusResponse>;
  SubAccountPower(
    request: QuerySubAccountPowerRequest
  ): Promise<QuerySubAccountPowerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubAccount = this.SubAccount.bind(this);
    this.SubAccountAll = this.SubAccountAll.bind(this);
    this.SubAccountStatus = this.SubAccountStatus.bind(this);
    this.SubAccountPower = this.SubAccountPower.bind(this);
  }
  SubAccount(
    request: QueryGetSubAccountRequest
  ): Promise<QueryGetSubAccountResponse> {
    const data = QueryGetSubAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Query",
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
      "Switcheo.carbon.subaccount.Query",
      "SubAccountAll",
      data
    );
    return promise.then((data) =>
      QueryAllSubAccountResponse.decode(new _m0.Reader(data))
    );
  }

  SubAccountStatus(
    request: QuerySubAccountStatusRequest
  ): Promise<QuerySubAccountStatusResponse> {
    const data = QuerySubAccountStatusRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Query",
      "SubAccountStatus",
      data
    );
    return promise.then((data) =>
      QuerySubAccountStatusResponse.decode(new _m0.Reader(data))
    );
  }

  SubAccountPower(
    request: QuerySubAccountPowerRequest
  ): Promise<QuerySubAccountPowerResponse> {
    const data = QuerySubAccountPowerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Query",
      "SubAccountPower",
      data
    );
    return promise.then((data) =>
      QuerySubAccountPowerResponse.decode(new _m0.Reader(data))
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
