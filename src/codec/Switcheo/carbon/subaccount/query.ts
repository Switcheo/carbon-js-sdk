/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SubAccount, MainAccount } from "./subaccount";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Duration } from "../../../google/protobuf/duration";
import { StringValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.subaccount";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetSubAccountRequest {
  address: string;
  role: string;
}

export interface QueryGetPendingSubAccountRequest {
  mainAddress: string;
  subAddress: string;
  role: string;
}

export interface QueryGetSubAccountResponse {
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

export interface QueryMainAccountAllRequest {
  subAddress: string;
}

export interface QueryMainAccountAllResponse {
  mainAccounts: MainAccount[];
}

export interface QueryMainAccountRequest {
  subAddress: string;
  role: string;
}

export interface QueryMainAccountResponse {
  mainAccount?: MainAccount;
}

export interface QueryParamsRequest {}

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

const baseQueryGetSubAccountRequest: object = { address: "", role: "" };

export const QueryGetSubAccountRequest = {
  encode(
    message: QueryGetSubAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
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
          message.address = reader.string();
          break;
        case 2:
          message.role = reader.string();
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
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    return message;
  },

  toJSON(message: QueryGetSubAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSubAccountRequest>
  ): QueryGetSubAccountRequest {
    const message = {
      ...baseQueryGetSubAccountRequest,
    } as QueryGetSubAccountRequest;
    message.address = object.address ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

const baseQueryGetPendingSubAccountRequest: object = {
  mainAddress: "",
  subAddress: "",
  role: "",
};

export const QueryGetPendingSubAccountRequest = {
  encode(
    message: QueryGetPendingSubAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPendingSubAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPendingSubAccountRequest,
    } as QueryGetPendingSubAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainAddress = reader.string();
          break;
        case 2:
          message.subAddress = reader.string();
          break;
        case 3:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPendingSubAccountRequest {
    const message = {
      ...baseQueryGetPendingSubAccountRequest,
    } as QueryGetPendingSubAccountRequest;
    message.mainAddress =
      object.mainAddress !== undefined && object.mainAddress !== null
        ? String(object.mainAddress)
        : "";
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    return message;
  },

  toJSON(message: QueryGetPendingSubAccountRequest): unknown {
    const obj: any = {};
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPendingSubAccountRequest>
  ): QueryGetPendingSubAccountRequest {
    const message = {
      ...baseQueryGetPendingSubAccountRequest,
    } as QueryGetPendingSubAccountRequest;
    message.mainAddress = object.mainAddress ?? "";
    message.subAddress = object.subAddress ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

const baseQueryGetSubAccountResponse: object = {};

export const QueryGetSubAccountResponse = {
  encode(
    message: QueryGetSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subaccount !== undefined) {
      SubAccount.encode(message.subaccount, writer.uint32(10).fork()).ldelim();
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
          message.subaccount = SubAccount.decode(reader, reader.uint32());
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
    message.subaccount =
      object.subaccount !== undefined && object.subaccount !== null
        ? SubAccount.fromJSON(object.subaccount)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetSubAccountResponse): unknown {
    const obj: any = {};
    message.subaccount !== undefined &&
      (obj.subaccount = message.subaccount
        ? SubAccount.toJSON(message.subaccount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSubAccountResponse>
  ): QueryGetSubAccountResponse {
    const message = {
      ...baseQueryGetSubAccountResponse,
    } as QueryGetSubAccountResponse;
    message.subaccount =
      object.subaccount !== undefined && object.subaccount !== null
        ? SubAccount.fromPartial(object.subaccount)
        : undefined;
    return message;
  },
};

const baseQueryAllSubAccountRequest: object = { mainAddress: "" };

export const QueryAllSubAccountRequest = {
  encode(
    message: QueryAllSubAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.mainAddress !== "") {
      writer.uint32(18).string(message.mainAddress);
    }
    if (message.role !== undefined) {
      StringValue.encode(
        { value: message.role! },
        writer.uint32(26).fork()
      ).ldelim();
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
        case 2:
          message.mainAddress = reader.string();
          break;
        case 3:
          message.role = StringValue.decode(reader, reader.uint32()).value;
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
    message.mainAddress =
      object.mainAddress !== undefined && object.mainAddress !== null
        ? String(object.mainAddress)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllSubAccountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSubAccountRequest>
  ): QueryAllSubAccountRequest {
    const message = {
      ...baseQueryAllSubAccountRequest,
    } as QueryAllSubAccountRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.mainAddress = object.mainAddress ?? "";
    message.role = object.role ?? undefined;
    return message;
  },
};

const baseQueryAllSubAccountResponse: object = {};

export const QueryAllSubAccountResponse = {
  encode(
    message: QueryAllSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subaccounts) {
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
    message.subaccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccounts.push(SubAccount.decode(reader, reader.uint32()));
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
    message.subaccounts = (object.subaccounts ?? []).map((e: any) =>
      SubAccount.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllSubAccountResponse): unknown {
    const obj: any = {};
    if (message.subaccounts) {
      obj.subaccounts = message.subaccounts.map((e) =>
        e ? SubAccount.toJSON(e) : undefined
      );
    } else {
      obj.subaccounts = [];
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
    message.subaccounts = (object.subaccounts ?? []).map((e) =>
      SubAccount.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPendingSubAccountRequest: object = {
  mainAddress: "",
  role: "",
  subAddress: "",
};

export const QueryAllPendingSubAccountRequest = {
  encode(
    message: QueryAllPendingSubAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPendingSubAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPendingSubAccountRequest,
    } as QueryAllPendingSubAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.mainAddress = reader.string();
          break;
        case 3:
          message.role = reader.string();
          break;
        case 4:
          message.subAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPendingSubAccountRequest {
    const message = {
      ...baseQueryAllPendingSubAccountRequest,
    } as QueryAllPendingSubAccountRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    message.mainAddress =
      object.mainAddress !== undefined && object.mainAddress !== null
        ? String(object.mainAddress)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    return message;
  },

  toJSON(message: QueryAllPendingSubAccountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.role !== undefined && (obj.role = message.role);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPendingSubAccountRequest>
  ): QueryAllPendingSubAccountRequest {
    const message = {
      ...baseQueryAllPendingSubAccountRequest,
    } as QueryAllPendingSubAccountRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.mainAddress = object.mainAddress ?? "";
    message.role = object.role ?? "";
    message.subAddress = object.subAddress ?? "";
    return message;
  },
};

const baseQueryAllPendingSubAccountResponse: object = {};

export const QueryAllPendingSubAccountResponse = {
  encode(
    message: QueryAllPendingSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subaccounts) {
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
  ): QueryAllPendingSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPendingSubAccountResponse,
    } as QueryAllPendingSubAccountResponse;
    message.subaccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccounts.push(SubAccount.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPendingSubAccountResponse {
    const message = {
      ...baseQueryAllPendingSubAccountResponse,
    } as QueryAllPendingSubAccountResponse;
    message.subaccounts = (object.subaccounts ?? []).map((e: any) =>
      SubAccount.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPendingSubAccountResponse): unknown {
    const obj: any = {};
    if (message.subaccounts) {
      obj.subaccounts = message.subaccounts.map((e) =>
        e ? SubAccount.toJSON(e) : undefined
      );
    } else {
      obj.subaccounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPendingSubAccountResponse>
  ): QueryAllPendingSubAccountResponse {
    const message = {
      ...baseQueryAllPendingSubAccountResponse,
    } as QueryAllPendingSubAccountResponse;
    message.subaccounts = (object.subaccounts ?? []).map((e) =>
      SubAccount.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQuerySubAccountPowerRequest: object = { address: "" };

export const QuerySubAccountPowerRequest = {
  encode(
    message: QuerySubAccountPowerRequest,
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
          message.address = reader.string();
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
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QuerySubAccountPowerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySubAccountPowerRequest>
  ): QuerySubAccountPowerRequest {
    const message = {
      ...baseQuerySubAccountPowerRequest,
    } as QuerySubAccountPowerRequest;
    message.address = object.address ?? "";
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

  fromPartial(
    object: DeepPartial<QuerySubAccountPowerResponse>
  ): QuerySubAccountPowerResponse {
    const message = {
      ...baseQuerySubAccountPowerResponse,
    } as QuerySubAccountPowerResponse;
    message.power = object.power ?? "";
    return message;
  },
};

const baseQueryMainAccountAllRequest: object = { subAddress: "" };

export const QueryMainAccountAllRequest = {
  encode(
    message: QueryMainAccountAllRequest,
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
  ): QueryMainAccountAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMainAccountAllRequest,
    } as QueryMainAccountAllRequest;
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

  fromJSON(object: any): QueryMainAccountAllRequest {
    const message = {
      ...baseQueryMainAccountAllRequest,
    } as QueryMainAccountAllRequest;
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    return message;
  },

  toJSON(message: QueryMainAccountAllRequest): unknown {
    const obj: any = {};
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMainAccountAllRequest>
  ): QueryMainAccountAllRequest {
    const message = {
      ...baseQueryMainAccountAllRequest,
    } as QueryMainAccountAllRequest;
    message.subAddress = object.subAddress ?? "";
    return message;
  },
};

const baseQueryMainAccountAllResponse: object = {};

export const QueryMainAccountAllResponse = {
  encode(
    message: QueryMainAccountAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mainAccounts) {
      MainAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMainAccountAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMainAccountAllResponse,
    } as QueryMainAccountAllResponse;
    message.mainAccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainAccounts.push(
            MainAccount.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMainAccountAllResponse {
    const message = {
      ...baseQueryMainAccountAllResponse,
    } as QueryMainAccountAllResponse;
    message.mainAccounts = (object.mainAccounts ?? []).map((e: any) =>
      MainAccount.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryMainAccountAllResponse): unknown {
    const obj: any = {};
    if (message.mainAccounts) {
      obj.mainAccounts = message.mainAccounts.map((e) =>
        e ? MainAccount.toJSON(e) : undefined
      );
    } else {
      obj.mainAccounts = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMainAccountAllResponse>
  ): QueryMainAccountAllResponse {
    const message = {
      ...baseQueryMainAccountAllResponse,
    } as QueryMainAccountAllResponse;
    message.mainAccounts = (object.mainAccounts ?? []).map((e) =>
      MainAccount.fromPartial(e)
    );
    return message;
  },
};

const baseQueryMainAccountRequest: object = { subAddress: "", role: "" };

export const QueryMainAccountRequest = {
  encode(
    message: QueryMainAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subAddress !== "") {
      writer.uint32(10).string(message.subAddress);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMainAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMainAccountRequest,
    } as QueryMainAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subAddress = reader.string();
          break;
        case 2:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMainAccountRequest {
    const message = {
      ...baseQueryMainAccountRequest,
    } as QueryMainAccountRequest;
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    return message;
  },

  toJSON(message: QueryMainAccountRequest): unknown {
    const obj: any = {};
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMainAccountRequest>
  ): QueryMainAccountRequest {
    const message = {
      ...baseQueryMainAccountRequest,
    } as QueryMainAccountRequest;
    message.subAddress = object.subAddress ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

const baseQueryMainAccountResponse: object = {};

export const QueryMainAccountResponse = {
  encode(
    message: QueryMainAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mainAccount !== undefined) {
      MainAccount.encode(
        message.mainAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMainAccountResponse,
    } as QueryMainAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainAccount = MainAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMainAccountResponse {
    const message = {
      ...baseQueryMainAccountResponse,
    } as QueryMainAccountResponse;
    message.mainAccount =
      object.mainAccount !== undefined && object.mainAccount !== null
        ? MainAccount.fromJSON(object.mainAccount)
        : undefined;
    return message;
  },

  toJSON(message: QueryMainAccountResponse): unknown {
    const obj: any = {};
    message.mainAccount !== undefined &&
      (obj.mainAccount = message.mainAccount
        ? MainAccount.toJSON(message.mainAccount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMainAccountResponse>
  ): QueryMainAccountResponse {
    const message = {
      ...baseQueryMainAccountResponse,
    } as QueryMainAccountResponse;
    message.mainAccount =
      object.mainAccount !== undefined && object.mainAccount !== null
        ? MainAccount.fromPartial(object.mainAccount)
        : undefined;
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseQueryCreationCooldownRequest: object = { address: "", role: "" };

export const QueryCreationCooldownRequest = {
  encode(
    message: QueryCreationCooldownRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCreationCooldownRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCreationCooldownRequest,
    } as QueryCreationCooldownRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCreationCooldownRequest {
    const message = {
      ...baseQueryCreationCooldownRequest,
    } as QueryCreationCooldownRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    return message;
  },

  toJSON(message: QueryCreationCooldownRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCreationCooldownRequest>
  ): QueryCreationCooldownRequest {
    const message = {
      ...baseQueryCreationCooldownRequest,
    } as QueryCreationCooldownRequest;
    message.address = object.address ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

const baseQueryCreationCooldownResponse: object = {};

export const QueryCreationCooldownResponse = {
  encode(
    message: QueryCreationCooldownResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cooldownDuration !== undefined) {
      Duration.encode(
        message.cooldownDuration,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCreationCooldownResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCreationCooldownResponse,
    } as QueryCreationCooldownResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cooldownDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCreationCooldownResponse {
    const message = {
      ...baseQueryCreationCooldownResponse,
    } as QueryCreationCooldownResponse;
    message.cooldownDuration =
      object.cooldownDuration !== undefined && object.cooldownDuration !== null
        ? Duration.fromJSON(object.cooldownDuration)
        : undefined;
    return message;
  },

  toJSON(message: QueryCreationCooldownResponse): unknown {
    const obj: any = {};
    message.cooldownDuration !== undefined &&
      (obj.cooldownDuration = message.cooldownDuration
        ? Duration.toJSON(message.cooldownDuration)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCreationCooldownResponse>
  ): QueryCreationCooldownResponse {
    const message = {
      ...baseQueryCreationCooldownResponse,
    } as QueryCreationCooldownResponse;
    message.cooldownDuration =
      object.cooldownDuration !== undefined && object.cooldownDuration !== null
        ? Duration.fromPartial(object.cooldownDuration)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get subaccount details */
  SubAccount(
    request: QueryGetSubAccountRequest
  ): Promise<QueryGetSubAccountResponse>;
  /** Get pending subaccount details */
  PendingSubAccount(
    request: QueryGetPendingSubAccountRequest
  ): Promise<QueryGetSubAccountResponse>;
  /** Get all subaccount details */
  SubAccountAll(
    request: QueryAllSubAccountRequest
  ): Promise<QueryAllSubAccountResponse>;
  /** Get pending subaccounts */
  PendingSubAccountAll(
    request: QueryAllPendingSubAccountRequest
  ): Promise<QueryAllPendingSubAccountResponse>;
  /** Get voting power for a subaccount address */
  SubAccountPower(
    request: QuerySubAccountPowerRequest
  ): Promise<QuerySubAccountPowerResponse>;
  /** Get all main accounts based on sub account */
  MainAccountAll(
    request: QueryMainAccountAllRequest
  ): Promise<QueryMainAccountAllResponse>;
  /** Get main account based on sub account and role */
  MainAccount(
    request: QueryMainAccountRequest
  ): Promise<QueryMainAccountResponse>;
  /** Parameters queries the subaccount parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Cooldown queries the subaccount cooldown duration. */
  Cooldown(
    request: QueryCreationCooldownRequest
  ): Promise<QueryCreationCooldownResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubAccount = this.SubAccount.bind(this);
    this.PendingSubAccount = this.PendingSubAccount.bind(this);
    this.SubAccountAll = this.SubAccountAll.bind(this);
    this.PendingSubAccountAll = this.PendingSubAccountAll.bind(this);
    this.SubAccountPower = this.SubAccountPower.bind(this);
    this.MainAccountAll = this.MainAccountAll.bind(this);
    this.MainAccount = this.MainAccount.bind(this);
    this.Params = this.Params.bind(this);
    this.Cooldown = this.Cooldown.bind(this);
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

  PendingSubAccount(
    request: QueryGetPendingSubAccountRequest
  ): Promise<QueryGetSubAccountResponse> {
    const data = QueryGetPendingSubAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Query",
      "PendingSubAccount",
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

  PendingSubAccountAll(
    request: QueryAllPendingSubAccountRequest
  ): Promise<QueryAllPendingSubAccountResponse> {
    const data = QueryAllPendingSubAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Query",
      "PendingSubAccountAll",
      data
    );
    return promise.then((data) =>
      QueryAllPendingSubAccountResponse.decode(new _m0.Reader(data))
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

  MainAccountAll(
    request: QueryMainAccountAllRequest
  ): Promise<QueryMainAccountAllResponse> {
    const data = QueryMainAccountAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Query",
      "MainAccountAll",
      data
    );
    return promise.then((data) =>
      QueryMainAccountAllResponse.decode(new _m0.Reader(data))
    );
  }

  MainAccount(
    request: QueryMainAccountRequest
  ): Promise<QueryMainAccountResponse> {
    const data = QueryMainAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Query",
      "MainAccount",
      data
    );
    return promise.then((data) =>
      QueryMainAccountResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Cooldown(
    request: QueryCreationCooldownRequest
  ): Promise<QueryCreationCooldownResponse> {
    const data = QueryCreationCooldownRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Query",
      "Cooldown",
      data
    );
    return promise.then((data) =>
      QueryCreationCooldownResponse.decode(new _m0.Reader(data))
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
