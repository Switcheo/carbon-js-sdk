/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Vault, VaultType } from "../cdp/vault";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.cdp";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetVaultRequest {
  address: string;
  vaultTypeId: Long;
}

export interface QueryGetVaultResponse {
  Vault?: Vault;
}

export interface QueryAllVaultRequest {
  pagination?: PageRequest;
}

export interface QueryAllVaultResponse {
  vaults: Vault[];
  pagination?: PageResponse;
}

export interface QueryGetVaultTypeRequest {
  vaultTypeId: Long;
}

export interface QueryGetVaultTypeResponse {
  VaultType?: VaultType;
}

export interface QueryAllVaultTypeRequest {
  pagination?: PageRequest;
}

export interface QueryAllVaultTypeResponse {
  vaultTypes: VaultType[];
  pagination?: PageResponse;
}

const baseQueryGetVaultRequest: object = {
  address: "",
  vaultTypeId: Long.UZERO,
};

export const QueryGetVaultRequest = {
  encode(
    message: QueryGetVaultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.vaultTypeId.isZero()) {
      writer.uint32(16).uint64(message.vaultTypeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVaultRequest } as QueryGetVaultRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.vaultTypeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVaultRequest {
    const message = { ...baseQueryGetVaultRequest } as QueryGetVaultRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = Long.fromString(object.vaultTypeId);
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryGetVaultRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.vaultTypeId !== undefined &&
      (obj.vaultTypeId = (message.vaultTypeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVaultRequest>): QueryGetVaultRequest {
    const message = { ...baseQueryGetVaultRequest } as QueryGetVaultRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = object.vaultTypeId as Long;
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    return message;
  },
};

const baseQueryGetVaultResponse: object = {};

export const QueryGetVaultResponse = {
  encode(
    message: QueryGetVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Vault !== undefined) {
      Vault.encode(message.Vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVaultResponse } as QueryGetVaultResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Vault = Vault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVaultResponse {
    const message = { ...baseQueryGetVaultResponse } as QueryGetVaultResponse;
    if (object.Vault !== undefined && object.Vault !== null) {
      message.Vault = Vault.fromJSON(object.Vault);
    } else {
      message.Vault = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVaultResponse): unknown {
    const obj: any = {};
    message.Vault !== undefined &&
      (obj.Vault = message.Vault ? Vault.toJSON(message.Vault) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVaultResponse>
  ): QueryGetVaultResponse {
    const message = { ...baseQueryGetVaultResponse } as QueryGetVaultResponse;
    if (object.Vault !== undefined && object.Vault !== null) {
      message.Vault = Vault.fromPartial(object.Vault);
    } else {
      message.Vault = undefined;
    }
    return message;
  },
};

const baseQueryAllVaultRequest: object = {};

export const QueryAllVaultRequest = {
  encode(
    message: QueryAllVaultRequest,
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
  ): QueryAllVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVaultRequest } as QueryAllVaultRequest;
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

  fromJSON(object: any): QueryAllVaultRequest {
    const message = { ...baseQueryAllVaultRequest } as QueryAllVaultRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVaultRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVaultRequest>): QueryAllVaultRequest {
    const message = { ...baseQueryAllVaultRequest } as QueryAllVaultRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVaultResponse: object = {};

export const QueryAllVaultResponse = {
  encode(
    message: QueryAllVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vaults) {
      Vault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVaultResponse } as QueryAllVaultResponse;
    message.vaults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaults.push(Vault.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllVaultResponse {
    const message = { ...baseQueryAllVaultResponse } as QueryAllVaultResponse;
    message.vaults = [];
    if (object.vaults !== undefined && object.vaults !== null) {
      for (const e of object.vaults) {
        message.vaults.push(Vault.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVaultResponse): unknown {
    const obj: any = {};
    if (message.vaults) {
      obj.vaults = message.vaults.map((e) => (e ? Vault.toJSON(e) : undefined));
    } else {
      obj.vaults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVaultResponse>
  ): QueryAllVaultResponse {
    const message = { ...baseQueryAllVaultResponse } as QueryAllVaultResponse;
    message.vaults = [];
    if (object.vaults !== undefined && object.vaults !== null) {
      for (const e of object.vaults) {
        message.vaults.push(Vault.fromPartial(e));
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

const baseQueryGetVaultTypeRequest: object = { vaultTypeId: Long.UZERO };

export const QueryGetVaultTypeRequest = {
  encode(
    message: QueryGetVaultTypeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.vaultTypeId.isZero()) {
      writer.uint32(8).uint64(message.vaultTypeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetVaultTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetVaultTypeRequest,
    } as QueryGetVaultTypeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultTypeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVaultTypeRequest {
    const message = {
      ...baseQueryGetVaultTypeRequest,
    } as QueryGetVaultTypeRequest;
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = Long.fromString(object.vaultTypeId);
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryGetVaultTypeRequest): unknown {
    const obj: any = {};
    message.vaultTypeId !== undefined &&
      (obj.vaultTypeId = (message.vaultTypeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVaultTypeRequest>
  ): QueryGetVaultTypeRequest {
    const message = {
      ...baseQueryGetVaultTypeRequest,
    } as QueryGetVaultTypeRequest;
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = object.vaultTypeId as Long;
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    return message;
  },
};

const baseQueryGetVaultTypeResponse: object = {};

export const QueryGetVaultTypeResponse = {
  encode(
    message: QueryGetVaultTypeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.VaultType !== undefined) {
      VaultType.encode(message.VaultType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetVaultTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetVaultTypeResponse,
    } as QueryGetVaultTypeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.VaultType = VaultType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVaultTypeResponse {
    const message = {
      ...baseQueryGetVaultTypeResponse,
    } as QueryGetVaultTypeResponse;
    if (object.VaultType !== undefined && object.VaultType !== null) {
      message.VaultType = VaultType.fromJSON(object.VaultType);
    } else {
      message.VaultType = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVaultTypeResponse): unknown {
    const obj: any = {};
    message.VaultType !== undefined &&
      (obj.VaultType = message.VaultType
        ? VaultType.toJSON(message.VaultType)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVaultTypeResponse>
  ): QueryGetVaultTypeResponse {
    const message = {
      ...baseQueryGetVaultTypeResponse,
    } as QueryGetVaultTypeResponse;
    if (object.VaultType !== undefined && object.VaultType !== null) {
      message.VaultType = VaultType.fromPartial(object.VaultType);
    } else {
      message.VaultType = undefined;
    }
    return message;
  },
};

const baseQueryAllVaultTypeRequest: object = {};

export const QueryAllVaultTypeRequest = {
  encode(
    message: QueryAllVaultTypeRequest,
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
  ): QueryAllVaultTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllVaultTypeRequest,
    } as QueryAllVaultTypeRequest;
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

  fromJSON(object: any): QueryAllVaultTypeRequest {
    const message = {
      ...baseQueryAllVaultTypeRequest,
    } as QueryAllVaultTypeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVaultTypeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVaultTypeRequest>
  ): QueryAllVaultTypeRequest {
    const message = {
      ...baseQueryAllVaultTypeRequest,
    } as QueryAllVaultTypeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVaultTypeResponse: object = {};

export const QueryAllVaultTypeResponse = {
  encode(
    message: QueryAllVaultTypeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vaultTypes) {
      VaultType.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllVaultTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllVaultTypeResponse,
    } as QueryAllVaultTypeResponse;
    message.vaultTypes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultTypes.push(VaultType.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllVaultTypeResponse {
    const message = {
      ...baseQueryAllVaultTypeResponse,
    } as QueryAllVaultTypeResponse;
    message.vaultTypes = [];
    if (object.vaultTypes !== undefined && object.vaultTypes !== null) {
      for (const e of object.vaultTypes) {
        message.vaultTypes.push(VaultType.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVaultTypeResponse): unknown {
    const obj: any = {};
    if (message.vaultTypes) {
      obj.vaultTypes = message.vaultTypes.map((e) =>
        e ? VaultType.toJSON(e) : undefined
      );
    } else {
      obj.vaultTypes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVaultTypeResponse>
  ): QueryAllVaultTypeResponse {
    const message = {
      ...baseQueryAllVaultTypeResponse,
    } as QueryAllVaultTypeResponse;
    message.vaultTypes = [];
    if (object.vaultTypes !== undefined && object.vaultTypes !== null) {
      for (const e of object.vaultTypes) {
        message.vaultTypes.push(VaultType.fromPartial(e));
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
  Vault(request: QueryGetVaultRequest): Promise<QueryGetVaultResponse>;
  VaultAll(request: QueryAllVaultRequest): Promise<QueryAllVaultResponse>;
  VaultType(
    request: QueryGetVaultTypeRequest
  ): Promise<QueryGetVaultTypeResponse>;
  VaultTypeAll(
    request: QueryAllVaultTypeRequest
  ): Promise<QueryAllVaultTypeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Vault = this.Vault.bind(this);
    this.VaultAll = this.VaultAll.bind(this);
    this.VaultType = this.VaultType.bind(this);
    this.VaultTypeAll = this.VaultTypeAll.bind(this);
  }
  Vault(request: QueryGetVaultRequest): Promise<QueryGetVaultResponse> {
    const data = QueryGetVaultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "Vault",
      data
    );
    return promise.then((data) =>
      QueryGetVaultResponse.decode(new _m0.Reader(data))
    );
  }

  VaultAll(request: QueryAllVaultRequest): Promise<QueryAllVaultResponse> {
    const data = QueryAllVaultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "VaultAll",
      data
    );
    return promise.then((data) =>
      QueryAllVaultResponse.decode(new _m0.Reader(data))
    );
  }

  VaultType(
    request: QueryGetVaultTypeRequest
  ): Promise<QueryGetVaultTypeResponse> {
    const data = QueryGetVaultTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "VaultType",
      data
    );
    return promise.then((data) =>
      QueryGetVaultTypeResponse.decode(new _m0.Reader(data))
    );
  }

  VaultTypeAll(
    request: QueryAllVaultTypeRequest
  ): Promise<QueryAllVaultTypeResponse> {
    const data = QueryAllVaultTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "VaultTypeAll",
      data
    );
    return promise.then((data) =>
      QueryAllVaultTypeResponse.decode(new _m0.Reader(data))
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
