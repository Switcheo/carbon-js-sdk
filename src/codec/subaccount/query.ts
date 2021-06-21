/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SubAccount } from "../subaccount/subaccount";
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
  SubAccount: SubAccount[];
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
    if (object.mainAddress !== undefined && object.mainAddress !== null) {
      message.mainAddress = String(object.mainAddress);
    } else {
      message.mainAddress = "";
    }
    if (object.subAddress !== undefined && object.subAddress !== null) {
      message.subAddress = String(object.subAddress);
    } else {
      message.subAddress = "";
    }
    return message;
  },

  toJSON(message: QuerySubAccountStatusRequest): unknown {
    const obj: any = {};
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySubAccountStatusRequest>
  ): QuerySubAccountStatusRequest {
    const message = {
      ...baseQuerySubAccountStatusRequest,
    } as QuerySubAccountStatusRequest;
    if (object.mainAddress !== undefined && object.mainAddress !== null) {
      message.mainAddress = object.mainAddress;
    } else {
      message.mainAddress = "";
    }
    if (object.subAddress !== undefined && object.subAddress !== null) {
      message.subAddress = object.subAddress;
    } else {
      message.subAddress = "";
    }
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
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: QuerySubAccountStatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySubAccountStatusResponse>
  ): QuerySubAccountStatusResponse {
    const message = {
      ...baseQuerySubAccountStatusResponse,
    } as QuerySubAccountStatusResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
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
    if (object.subAddress !== undefined && object.subAddress !== null) {
      message.subAddress = String(object.subAddress);
    } else {
      message.subAddress = "";
    }
    return message;
  },

  toJSON(message: QuerySubAccountPowerRequest): unknown {
    const obj: any = {};
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySubAccountPowerRequest>
  ): QuerySubAccountPowerRequest {
    const message = {
      ...baseQuerySubAccountPowerRequest,
    } as QuerySubAccountPowerRequest;
    if (object.subAddress !== undefined && object.subAddress !== null) {
      message.subAddress = object.subAddress;
    } else {
      message.subAddress = "";
    }
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
    if (object.power !== undefined && object.power !== null) {
      message.power = String(object.power);
    } else {
      message.power = "";
    }
    return message;
  },

  toJSON(message: QuerySubAccountPowerResponse): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = message.power);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySubAccountPowerResponse>
  ): QuerySubAccountPowerResponse {
    const message = {
      ...baseQuerySubAccountPowerResponse,
    } as QuerySubAccountPowerResponse;
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    } else {
      message.power = "";
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
