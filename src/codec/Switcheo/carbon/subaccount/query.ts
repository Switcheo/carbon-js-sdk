/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Duration } from "../../../google/protobuf/duration";
import { StringValue } from "../../../google/protobuf/wrappers";
import { Params } from "./params";
import { MainAccount, SubAccount } from "./subaccount";

export const protobufPackage = "Switcheo.carbon.subaccount";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetSubAccountRequest {
  address: string;
}

export interface QueryGetPendingSubAccountRequest {
  mainAddress: string;
  subAddress: string;
  role: string;
}

export interface QueryGetSubAccountResponse {
  subaccount: SubAccount[];
}

export interface QueryGetPendingSubAccountResponse {
  subaccount?: SubAccount;
}

export interface QueryAllSubAccountRequest {
  pagination?: PageRequest;
  mainAddress: string;
  role?: string;
}

export interface QueryAllSubAccountResponse {
  subaccounts: SubAccount[];
  pagination?: PageResponse;
}

export interface QueryAllPendingSubAccountRequest {
  pagination?: PageRequest;
  mainAddress: string;
  role: string;
  subAddress: string;
}

export interface QueryAllPendingSubAccountResponse {
  subaccounts: SubAccount[];
  pagination?: PageResponse;
}

export interface QuerySubAccountPowerRequest {
  address: string;
}

export interface QuerySubAccountPowerResponse {
  power: string;
}

export interface QueryMainAccountGivenSubAccountRequest {
  subAddress: string;
}

export interface QueryMainAccountAllRequest {
  pagination?: PageRequest;
}

export interface QueryMainAccountAllResponse {
  mainAccounts: MainAccount[];
  pagination?: PageResponse;
}

export interface QueryMainAccountRequest {
  mainAddress: string;
}

export interface QueryMainAccountResponse {
  mainAccount: MainAccount[];
}

export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryCreationCooldownRequest {
  address: string;
  role: string;
}

export interface QueryCreationCooldownResponse {
  cooldownDuration?: Duration;
}

function createBaseQueryGetSubAccountRequest(): QueryGetSubAccountRequest {
  return { address: "" };
}

export const QueryGetSubAccountRequest = {
  encode(message: QueryGetSubAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSubAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSubAccountRequest();
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

  fromJSON(object: any): QueryGetSubAccountRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetSubAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryGetSubAccountRequest>): QueryGetSubAccountRequest {
    return QueryGetSubAccountRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetSubAccountRequest>): QueryGetSubAccountRequest {
    const message = createBaseQueryGetSubAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetPendingSubAccountRequest(): QueryGetPendingSubAccountRequest {
  return { mainAddress: "", subAddress: "", role: "" };
}

export const QueryGetPendingSubAccountRequest = {
  encode(message: QueryGetPendingSubAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mainAddress !== "") {
      writer.uint32(10).string(message.mainAddress);
    }
    if (message.subAddress !== "") {
      writer.uint32(18).string(message.subAddress);
    }
    if (message.role !== "") {
      writer.uint32(26).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingSubAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingSubAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mainAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.role = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPendingSubAccountRequest {
    return {
      mainAddress: isSet(object.mainAddress) ? String(object.mainAddress) : "",
      subAddress: isSet(object.subAddress) ? String(object.subAddress) : "",
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: QueryGetPendingSubAccountRequest): unknown {
    const obj: any = {};
    message.mainAddress !== undefined && (obj.mainAddress = message.mainAddress);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create(base?: DeepPartial<QueryGetPendingSubAccountRequest>): QueryGetPendingSubAccountRequest {
    return QueryGetPendingSubAccountRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetPendingSubAccountRequest>): QueryGetPendingSubAccountRequest {
    const message = createBaseQueryGetPendingSubAccountRequest();
    message.mainAddress = object.mainAddress ?? "";
    message.subAddress = object.subAddress ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseQueryGetSubAccountResponse(): QueryGetSubAccountResponse {
  return { subaccount: [] };
}

export const QueryGetSubAccountResponse = {
  encode(message: QueryGetSubAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subaccount) {
      SubAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSubAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subaccount.push(SubAccount.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSubAccountResponse {
    return {
      subaccount: Array.isArray(object?.subaccount) ? object.subaccount.map((e: any) => SubAccount.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryGetSubAccountResponse): unknown {
    const obj: any = {};
    if (message.subaccount) {
      obj.subaccount = message.subaccount.map((e) => e ? SubAccount.toJSON(e) : undefined);
    } else {
      obj.subaccount = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetSubAccountResponse>): QueryGetSubAccountResponse {
    return QueryGetSubAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetSubAccountResponse>): QueryGetSubAccountResponse {
    const message = createBaseQueryGetSubAccountResponse();
    message.subaccount = object.subaccount?.map((e) => SubAccount.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryGetPendingSubAccountResponse(): QueryGetPendingSubAccountResponse {
  return { subaccount: undefined };
}

export const QueryGetPendingSubAccountResponse = {
  encode(message: QueryGetPendingSubAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccount !== undefined) {
      SubAccount.encode(message.subaccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingSubAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subaccount = SubAccount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPendingSubAccountResponse {
    return { subaccount: isSet(object.subaccount) ? SubAccount.fromJSON(object.subaccount) : undefined };
  },

  toJSON(message: QueryGetPendingSubAccountResponse): unknown {
    const obj: any = {};
    message.subaccount !== undefined &&
      (obj.subaccount = message.subaccount ? SubAccount.toJSON(message.subaccount) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetPendingSubAccountResponse>): QueryGetPendingSubAccountResponse {
    return QueryGetPendingSubAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetPendingSubAccountResponse>): QueryGetPendingSubAccountResponse {
    const message = createBaseQueryGetPendingSubAccountResponse();
    message.subaccount = (object.subaccount !== undefined && object.subaccount !== null)
      ? SubAccount.fromPartial(object.subaccount)
      : undefined;
    return message;
  },
};

function createBaseQueryAllSubAccountRequest(): QueryAllSubAccountRequest {
  return { pagination: undefined, mainAddress: "", role: undefined };
}

export const QueryAllSubAccountRequest = {
  encode(message: QueryAllSubAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.mainAddress !== "") {
      writer.uint32(18).string(message.mainAddress);
    }
    if (message.role !== undefined) {
      StringValue.encode({ value: message.role! }, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSubAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSubAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mainAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.role = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllSubAccountRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      mainAddress: isSet(object.mainAddress) ? String(object.mainAddress) : "",
      role: isSet(object.role) ? String(object.role) : undefined,
    };
  },

  toJSON(message: QueryAllSubAccountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.mainAddress !== undefined && (obj.mainAddress = message.mainAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create(base?: DeepPartial<QueryAllSubAccountRequest>): QueryAllSubAccountRequest {
    return QueryAllSubAccountRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllSubAccountRequest>): QueryAllSubAccountRequest {
    const message = createBaseQueryAllSubAccountRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.mainAddress = object.mainAddress ?? "";
    message.role = object.role ?? undefined;
    return message;
  },
};

function createBaseQueryAllSubAccountResponse(): QueryAllSubAccountResponse {
  return { subaccounts: [], pagination: undefined };
}

export const QueryAllSubAccountResponse = {
  encode(message: QueryAllSubAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subaccounts) {
      SubAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSubAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subaccounts.push(SubAccount.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllSubAccountResponse {
    return {
      subaccounts: Array.isArray(object?.subaccounts) ? object.subaccounts.map((e: any) => SubAccount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllSubAccountResponse): unknown {
    const obj: any = {};
    if (message.subaccounts) {
      obj.subaccounts = message.subaccounts.map((e) => e ? SubAccount.toJSON(e) : undefined);
    } else {
      obj.subaccounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllSubAccountResponse>): QueryAllSubAccountResponse {
    return QueryAllSubAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllSubAccountResponse>): QueryAllSubAccountResponse {
    const message = createBaseQueryAllSubAccountResponse();
    message.subaccounts = object.subaccounts?.map((e) => SubAccount.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPendingSubAccountRequest(): QueryAllPendingSubAccountRequest {
  return { pagination: undefined, mainAddress: "", role: "", subAddress: "" };
}

export const QueryAllPendingSubAccountRequest = {
  encode(message: QueryAllPendingSubAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.mainAddress !== "") {
      writer.uint32(18).string(message.mainAddress);
    }
    if (message.role !== "") {
      writer.uint32(26).string(message.role);
    }
    if (message.subAddress !== "") {
      writer.uint32(34).string(message.subAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingSubAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingSubAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mainAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.role = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPendingSubAccountRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      mainAddress: isSet(object.mainAddress) ? String(object.mainAddress) : "",
      role: isSet(object.role) ? String(object.role) : "",
      subAddress: isSet(object.subAddress) ? String(object.subAddress) : "",
    };
  },

  toJSON(message: QueryAllPendingSubAccountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.mainAddress !== undefined && (obj.mainAddress = message.mainAddress);
    message.role !== undefined && (obj.role = message.role);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPendingSubAccountRequest>): QueryAllPendingSubAccountRequest {
    return QueryAllPendingSubAccountRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPendingSubAccountRequest>): QueryAllPendingSubAccountRequest {
    const message = createBaseQueryAllPendingSubAccountRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.mainAddress = object.mainAddress ?? "";
    message.role = object.role ?? "";
    message.subAddress = object.subAddress ?? "";
    return message;
  },
};

function createBaseQueryAllPendingSubAccountResponse(): QueryAllPendingSubAccountResponse {
  return { subaccounts: [], pagination: undefined };
}

export const QueryAllPendingSubAccountResponse = {
  encode(message: QueryAllPendingSubAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subaccounts) {
      SubAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingSubAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subaccounts.push(SubAccount.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPendingSubAccountResponse {
    return {
      subaccounts: Array.isArray(object?.subaccounts) ? object.subaccounts.map((e: any) => SubAccount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPendingSubAccountResponse): unknown {
    const obj: any = {};
    if (message.subaccounts) {
      obj.subaccounts = message.subaccounts.map((e) => e ? SubAccount.toJSON(e) : undefined);
    } else {
      obj.subaccounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPendingSubAccountResponse>): QueryAllPendingSubAccountResponse {
    return QueryAllPendingSubAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPendingSubAccountResponse>): QueryAllPendingSubAccountResponse {
    const message = createBaseQueryAllPendingSubAccountResponse();
    message.subaccounts = object.subaccounts?.map((e) => SubAccount.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySubAccountPowerRequest(): QuerySubAccountPowerRequest {
  return { address: "" };
}

export const QuerySubAccountPowerRequest = {
  encode(message: QuerySubAccountPowerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubAccountPowerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubAccountPowerRequest();
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

  fromJSON(object: any): QuerySubAccountPowerRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QuerySubAccountPowerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QuerySubAccountPowerRequest>): QuerySubAccountPowerRequest {
    return QuerySubAccountPowerRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySubAccountPowerRequest>): QuerySubAccountPowerRequest {
    const message = createBaseQuerySubAccountPowerRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQuerySubAccountPowerResponse(): QuerySubAccountPowerResponse {
  return { power: "" };
}

export const QuerySubAccountPowerResponse = {
  encode(message: QuerySubAccountPowerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.power !== "") {
      writer.uint32(10).string(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubAccountPowerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubAccountPowerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.power = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySubAccountPowerResponse {
    return { power: isSet(object.power) ? String(object.power) : "" };
  },

  toJSON(message: QuerySubAccountPowerResponse): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = message.power);
    return obj;
  },

  create(base?: DeepPartial<QuerySubAccountPowerResponse>): QuerySubAccountPowerResponse {
    return QuerySubAccountPowerResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySubAccountPowerResponse>): QuerySubAccountPowerResponse {
    const message = createBaseQuerySubAccountPowerResponse();
    message.power = object.power ?? "";
    return message;
  },
};

function createBaseQueryMainAccountGivenSubAccountRequest(): QueryMainAccountGivenSubAccountRequest {
  return { subAddress: "" };
}

export const QueryMainAccountGivenSubAccountRequest = {
  encode(message: QueryMainAccountGivenSubAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subAddress !== "") {
      writer.uint32(10).string(message.subAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMainAccountGivenSubAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMainAccountGivenSubAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryMainAccountGivenSubAccountRequest {
    return { subAddress: isSet(object.subAddress) ? String(object.subAddress) : "" };
  },

  toJSON(message: QueryMainAccountGivenSubAccountRequest): unknown {
    const obj: any = {};
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryMainAccountGivenSubAccountRequest>): QueryMainAccountGivenSubAccountRequest {
    return QueryMainAccountGivenSubAccountRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryMainAccountGivenSubAccountRequest>): QueryMainAccountGivenSubAccountRequest {
    const message = createBaseQueryMainAccountGivenSubAccountRequest();
    message.subAddress = object.subAddress ?? "";
    return message;
  },
};

function createBaseQueryMainAccountAllRequest(): QueryMainAccountAllRequest {
  return { pagination: undefined };
}

export const QueryMainAccountAllRequest = {
  encode(message: QueryMainAccountAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMainAccountAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMainAccountAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryMainAccountAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryMainAccountAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryMainAccountAllRequest>): QueryMainAccountAllRequest {
    return QueryMainAccountAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryMainAccountAllRequest>): QueryMainAccountAllRequest {
    const message = createBaseQueryMainAccountAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryMainAccountAllResponse(): QueryMainAccountAllResponse {
  return { mainAccounts: [], pagination: undefined };
}

export const QueryMainAccountAllResponse = {
  encode(message: QueryMainAccountAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mainAccounts) {
      MainAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMainAccountAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMainAccountAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mainAccounts.push(MainAccount.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryMainAccountAllResponse {
    return {
      mainAccounts: Array.isArray(object?.mainAccounts)
        ? object.mainAccounts.map((e: any) => MainAccount.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryMainAccountAllResponse): unknown {
    const obj: any = {};
    if (message.mainAccounts) {
      obj.mainAccounts = message.mainAccounts.map((e) => e ? MainAccount.toJSON(e) : undefined);
    } else {
      obj.mainAccounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryMainAccountAllResponse>): QueryMainAccountAllResponse {
    return QueryMainAccountAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryMainAccountAllResponse>): QueryMainAccountAllResponse {
    const message = createBaseQueryMainAccountAllResponse();
    message.mainAccounts = object.mainAccounts?.map((e) => MainAccount.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryMainAccountRequest(): QueryMainAccountRequest {
  return { mainAddress: "" };
}

export const QueryMainAccountRequest = {
  encode(message: QueryMainAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mainAddress !== "") {
      writer.uint32(10).string(message.mainAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMainAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMainAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mainAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryMainAccountRequest {
    return { mainAddress: isSet(object.mainAddress) ? String(object.mainAddress) : "" };
  },

  toJSON(message: QueryMainAccountRequest): unknown {
    const obj: any = {};
    message.mainAddress !== undefined && (obj.mainAddress = message.mainAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryMainAccountRequest>): QueryMainAccountRequest {
    return QueryMainAccountRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryMainAccountRequest>): QueryMainAccountRequest {
    const message = createBaseQueryMainAccountRequest();
    message.mainAddress = object.mainAddress ?? "";
    return message;
  },
};

function createBaseQueryMainAccountResponse(): QueryMainAccountResponse {
  return { mainAccount: [] };
}

export const QueryMainAccountResponse = {
  encode(message: QueryMainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mainAccount) {
      MainAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mainAccount.push(MainAccount.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryMainAccountResponse {
    return {
      mainAccount: Array.isArray(object?.mainAccount)
        ? object.mainAccount.map((e: any) => MainAccount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryMainAccountResponse): unknown {
    const obj: any = {};
    if (message.mainAccount) {
      obj.mainAccount = message.mainAccount.map((e) => e ? MainAccount.toJSON(e) : undefined);
    } else {
      obj.mainAccount = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryMainAccountResponse>): QueryMainAccountResponse {
    return QueryMainAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryMainAccountResponse>): QueryMainAccountResponse {
    const message = createBaseQueryMainAccountResponse();
    message.mainAccount = object.mainAccount?.map((e) => MainAccount.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryCreationCooldownRequest(): QueryCreationCooldownRequest {
  return { address: "", role: "" };
}

export const QueryCreationCooldownRequest = {
  encode(message: QueryCreationCooldownRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreationCooldownRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreationCooldownRequest();
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

          message.role = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCreationCooldownRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: QueryCreationCooldownRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create(base?: DeepPartial<QueryCreationCooldownRequest>): QueryCreationCooldownRequest {
    return QueryCreationCooldownRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCreationCooldownRequest>): QueryCreationCooldownRequest {
    const message = createBaseQueryCreationCooldownRequest();
    message.address = object.address ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseQueryCreationCooldownResponse(): QueryCreationCooldownResponse {
  return { cooldownDuration: undefined };
}

export const QueryCreationCooldownResponse = {
  encode(message: QueryCreationCooldownResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cooldownDuration !== undefined) {
      Duration.encode(message.cooldownDuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreationCooldownResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreationCooldownResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cooldownDuration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCreationCooldownResponse {
    return {
      cooldownDuration: isSet(object.cooldownDuration) ? Duration.fromJSON(object.cooldownDuration) : undefined,
    };
  },

  toJSON(message: QueryCreationCooldownResponse): unknown {
    const obj: any = {};
    message.cooldownDuration !== undefined &&
      (obj.cooldownDuration = message.cooldownDuration ? Duration.toJSON(message.cooldownDuration) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryCreationCooldownResponse>): QueryCreationCooldownResponse {
    return QueryCreationCooldownResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCreationCooldownResponse>): QueryCreationCooldownResponse {
    const message = createBaseQueryCreationCooldownResponse();
    message.cooldownDuration = (object.cooldownDuration !== undefined && object.cooldownDuration !== null)
      ? Duration.fromPartial(object.cooldownDuration)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get subaccount details */
  SubAccount(request: QueryGetSubAccountRequest): Promise<QueryGetSubAccountResponse>;
  /** Get pending subaccount details */
  PendingSubAccount(request: QueryGetPendingSubAccountRequest): Promise<QueryGetPendingSubAccountResponse>;
  /** Get all subaccount details */
  SubAccountAll(request: QueryAllSubAccountRequest): Promise<QueryAllSubAccountResponse>;
  /** Get pending subaccounts */
  PendingSubAccountAll(request: QueryAllPendingSubAccountRequest): Promise<QueryAllPendingSubAccountResponse>;
  /** Get voting power for a subaccount address */
  SubAccountPower(request: QuerySubAccountPowerRequest): Promise<QuerySubAccountPowerResponse>;
  /** Get all main accounts */
  MainAccountAll(request: QueryMainAccountAllRequest): Promise<QueryMainAccountAllResponse>;
  /** Get all main accounts based on subaccount */
  MainAccountGivenSubAccount(request: QueryMainAccountGivenSubAccountRequest): Promise<QueryMainAccountAllResponse>;
  /** Get main account based on main account address */
  MainAccount(request: QueryMainAccountRequest): Promise<QueryMainAccountResponse>;
  /** Parameters queries the subaccount parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Cooldown queries the subaccount cooldown duration. */
  Cooldown(request: QueryCreationCooldownRequest): Promise<QueryCreationCooldownResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.subaccount.Query";
    this.rpc = rpc;
    this.SubAccount = this.SubAccount.bind(this);
    this.PendingSubAccount = this.PendingSubAccount.bind(this);
    this.SubAccountAll = this.SubAccountAll.bind(this);
    this.PendingSubAccountAll = this.PendingSubAccountAll.bind(this);
    this.SubAccountPower = this.SubAccountPower.bind(this);
    this.MainAccountAll = this.MainAccountAll.bind(this);
    this.MainAccountGivenSubAccount = this.MainAccountGivenSubAccount.bind(this);
    this.MainAccount = this.MainAccount.bind(this);
    this.Params = this.Params.bind(this);
    this.Cooldown = this.Cooldown.bind(this);
  }
  SubAccount(request: QueryGetSubAccountRequest): Promise<QueryGetSubAccountResponse> {
    const data = QueryGetSubAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubAccount", data);
    return promise.then((data) => QueryGetSubAccountResponse.decode(_m0.Reader.create(data)));
  }

  PendingSubAccount(request: QueryGetPendingSubAccountRequest): Promise<QueryGetPendingSubAccountResponse> {
    const data = QueryGetPendingSubAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingSubAccount", data);
    return promise.then((data) => QueryGetPendingSubAccountResponse.decode(_m0.Reader.create(data)));
  }

  SubAccountAll(request: QueryAllSubAccountRequest): Promise<QueryAllSubAccountResponse> {
    const data = QueryAllSubAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubAccountAll", data);
    return promise.then((data) => QueryAllSubAccountResponse.decode(_m0.Reader.create(data)));
  }

  PendingSubAccountAll(request: QueryAllPendingSubAccountRequest): Promise<QueryAllPendingSubAccountResponse> {
    const data = QueryAllPendingSubAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingSubAccountAll", data);
    return promise.then((data) => QueryAllPendingSubAccountResponse.decode(_m0.Reader.create(data)));
  }

  SubAccountPower(request: QuerySubAccountPowerRequest): Promise<QuerySubAccountPowerResponse> {
    const data = QuerySubAccountPowerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubAccountPower", data);
    return promise.then((data) => QuerySubAccountPowerResponse.decode(_m0.Reader.create(data)));
  }

  MainAccountAll(request: QueryMainAccountAllRequest): Promise<QueryMainAccountAllResponse> {
    const data = QueryMainAccountAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MainAccountAll", data);
    return promise.then((data) => QueryMainAccountAllResponse.decode(_m0.Reader.create(data)));
  }

  MainAccountGivenSubAccount(request: QueryMainAccountGivenSubAccountRequest): Promise<QueryMainAccountAllResponse> {
    const data = QueryMainAccountGivenSubAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MainAccountGivenSubAccount", data);
    return promise.then((data) => QueryMainAccountAllResponse.decode(_m0.Reader.create(data)));
  }

  MainAccount(request: QueryMainAccountRequest): Promise<QueryMainAccountResponse> {
    const data = QueryMainAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MainAccount", data);
    return promise.then((data) => QueryMainAccountResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Cooldown(request: QueryCreationCooldownRequest): Promise<QueryCreationCooldownResponse> {
    const data = QueryCreationCooldownRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Cooldown", data);
    return promise.then((data) => QueryCreationCooldownResponse.decode(_m0.Reader.create(data)));
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
