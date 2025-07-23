/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { EVMContract, ModuleEVMAddress } from "./evm_hooks";

export const protobufPackage = "Switcheo.carbon.evmcontract";

/** this line is used by starport scaffolding # 3 */
export interface QueryContractRequest {
  moduleName: string;
  contractAddress: string;
}

export interface QueryContractResponse {
  contract?: EVMContract;
}

export interface QueryContractAllByModuleRequest {
  moduleName: string;
}

export interface QueryContractAllByModuleResponse {
  contracts: EVMContract[];
}

export interface QueryContractAllRequest {
  pagination?: PageRequest;
}

export interface QueryContractAllResponse {
  contracts: EVMContract[];
  pagination?: PageResponse;
}

export interface QueryAllAddressEVMRequest {
  pagination?: PageRequest;
}

export interface QueryAllAddressEVMResponse {
  modules: ModuleEVMAddress[];
  pagination?: PageResponse;
}

export interface QueryAddressEVMRequest {
  name: string;
}

export interface QueryAddressEVMResponse {
  address: string;
}

function createBaseQueryContractRequest(): QueryContractRequest {
  return { moduleName: "", contractAddress: "" };
}

export const QueryContractRequest = {
  encode(message: QueryContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.moduleName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryContractRequest {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
    };
  },

  toJSON(message: QueryContractRequest): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryContractRequest>): QueryContractRequest {
    return QueryContractRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractRequest>): QueryContractRequest {
    const message = createBaseQueryContractRequest();
    message.moduleName = object.moduleName ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

function createBaseQueryContractResponse(): QueryContractResponse {
  return { contract: undefined };
}

export const QueryContractResponse = {
  encode(message: QueryContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== undefined) {
      EVMContract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contract = EVMContract.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryContractResponse {
    return { contract: isSet(object.contract) ? EVMContract.fromJSON(object.contract) : undefined };
  },

  toJSON(message: QueryContractResponse): unknown {
    const obj: any = {};
    message.contract !== undefined &&
      (obj.contract = message.contract ? EVMContract.toJSON(message.contract) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryContractResponse>): QueryContractResponse {
    return QueryContractResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractResponse>): QueryContractResponse {
    const message = createBaseQueryContractResponse();
    message.contract = (object.contract !== undefined && object.contract !== null)
      ? EVMContract.fromPartial(object.contract)
      : undefined;
    return message;
  },
};

function createBaseQueryContractAllByModuleRequest(): QueryContractAllByModuleRequest {
  return { moduleName: "" };
}

export const QueryContractAllByModuleRequest = {
  encode(message: QueryContractAllByModuleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAllByModuleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAllByModuleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.moduleName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryContractAllByModuleRequest {
    return { moduleName: isSet(object.moduleName) ? String(object.moduleName) : "" };
  },

  toJSON(message: QueryContractAllByModuleRequest): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    return obj;
  },

  create(base?: DeepPartial<QueryContractAllByModuleRequest>): QueryContractAllByModuleRequest {
    return QueryContractAllByModuleRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractAllByModuleRequest>): QueryContractAllByModuleRequest {
    const message = createBaseQueryContractAllByModuleRequest();
    message.moduleName = object.moduleName ?? "";
    return message;
  },
};

function createBaseQueryContractAllByModuleResponse(): QueryContractAllByModuleResponse {
  return { contracts: [] };
}

export const QueryContractAllByModuleResponse = {
  encode(message: QueryContractAllByModuleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      EVMContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAllByModuleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAllByModuleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contracts.push(EVMContract.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryContractAllByModuleResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => EVMContract.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryContractAllByModuleResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e ? EVMContract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryContractAllByModuleResponse>): QueryContractAllByModuleResponse {
    return QueryContractAllByModuleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractAllByModuleResponse>): QueryContractAllByModuleResponse {
    const message = createBaseQueryContractAllByModuleResponse();
    message.contracts = object.contracts?.map((e) => EVMContract.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryContractAllRequest(): QueryContractAllRequest {
  return { pagination: undefined };
}

export const QueryContractAllRequest = {
  encode(message: QueryContractAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAllRequest();
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

  fromJSON(object: any): QueryContractAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryContractAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryContractAllRequest>): QueryContractAllRequest {
    return QueryContractAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractAllRequest>): QueryContractAllRequest {
    const message = createBaseQueryContractAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryContractAllResponse(): QueryContractAllResponse {
  return { contracts: [], pagination: undefined };
}

export const QueryContractAllResponse = {
  encode(message: QueryContractAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      EVMContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contracts.push(EVMContract.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryContractAllResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => EVMContract.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryContractAllResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e ? EVMContract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryContractAllResponse>): QueryContractAllResponse {
    return QueryContractAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractAllResponse>): QueryContractAllResponse {
    const message = createBaseQueryContractAllResponse();
    message.contracts = object.contracts?.map((e) => EVMContract.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAddressEVMRequest(): QueryAllAddressEVMRequest {
  return { pagination: undefined };
}

export const QueryAllAddressEVMRequest = {
  encode(message: QueryAllAddressEVMRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAddressEVMRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAddressEVMRequest();
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

  fromJSON(object: any): QueryAllAddressEVMRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAddressEVMRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllAddressEVMRequest>): QueryAllAddressEVMRequest {
    return QueryAllAddressEVMRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllAddressEVMRequest>): QueryAllAddressEVMRequest {
    const message = createBaseQueryAllAddressEVMRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAddressEVMResponse(): QueryAllAddressEVMResponse {
  return { modules: [], pagination: undefined };
}

export const QueryAllAddressEVMResponse = {
  encode(message: QueryAllAddressEVMResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.modules) {
      ModuleEVMAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAddressEVMResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAddressEVMResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modules.push(ModuleEVMAddress.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllAddressEVMResponse {
    return {
      modules: Array.isArray(object?.modules) ? object.modules.map((e: any) => ModuleEVMAddress.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAddressEVMResponse): unknown {
    const obj: any = {};
    if (message.modules) {
      obj.modules = message.modules.map((e) => e ? ModuleEVMAddress.toJSON(e) : undefined);
    } else {
      obj.modules = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllAddressEVMResponse>): QueryAllAddressEVMResponse {
    return QueryAllAddressEVMResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllAddressEVMResponse>): QueryAllAddressEVMResponse {
    const message = createBaseQueryAllAddressEVMResponse();
    message.modules = object.modules?.map((e) => ModuleEVMAddress.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAddressEVMRequest(): QueryAddressEVMRequest {
  return { name: "" };
}

export const QueryAddressEVMRequest = {
  encode(message: QueryAddressEVMRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAddressEVMRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressEVMRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAddressEVMRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryAddressEVMRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<QueryAddressEVMRequest>): QueryAddressEVMRequest {
    return QueryAddressEVMRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAddressEVMRequest>): QueryAddressEVMRequest {
    const message = createBaseQueryAddressEVMRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryAddressEVMResponse(): QueryAddressEVMResponse {
  return { address: "" };
}

export const QueryAddressEVMResponse = {
  encode(message: QueryAddressEVMResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAddressEVMResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressEVMResponse();
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

  fromJSON(object: any): QueryAddressEVMResponse {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAddressEVMResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAddressEVMResponse>): QueryAddressEVMResponse {
    return QueryAddressEVMResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAddressEVMResponse>): QueryAddressEVMResponse {
    const message = createBaseQueryAddressEVMResponse();
    message.address = object.address ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get contract version and isActive from contract address */
  Contract(request: QueryContractRequest): Promise<QueryContractResponse>;
  /** Get contract version and isActive all deployed contracts in a module */
  ContractAllByModule(request: QueryContractAllByModuleRequest): Promise<QueryContractAllByModuleResponse>;
  /** Get version and isActive from all deployed contracts */
  ContractAll(request: QueryContractAllRequest): Promise<QueryContractAllResponse>;
  /** Get the module's evm address */
  ModuleEVMAddress(request: QueryAddressEVMRequest): Promise<QueryAddressEVMResponse>;
  /** Get evm addresses of all modules with EVM */
  AllModuleEVMAddress(request: QueryAllAddressEVMRequest): Promise<QueryAllAddressEVMResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.evmcontract.Query";
    this.rpc = rpc;
    this.Contract = this.Contract.bind(this);
    this.ContractAllByModule = this.ContractAllByModule.bind(this);
    this.ContractAll = this.ContractAll.bind(this);
    this.ModuleEVMAddress = this.ModuleEVMAddress.bind(this);
    this.AllModuleEVMAddress = this.AllModuleEVMAddress.bind(this);
  }
  Contract(request: QueryContractRequest): Promise<QueryContractResponse> {
    const data = QueryContractRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Contract", data);
    return promise.then((data) => QueryContractResponse.decode(_m0.Reader.create(data)));
  }

  ContractAllByModule(request: QueryContractAllByModuleRequest): Promise<QueryContractAllByModuleResponse> {
    const data = QueryContractAllByModuleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ContractAllByModule", data);
    return promise.then((data) => QueryContractAllByModuleResponse.decode(_m0.Reader.create(data)));
  }

  ContractAll(request: QueryContractAllRequest): Promise<QueryContractAllResponse> {
    const data = QueryContractAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ContractAll", data);
    return promise.then((data) => QueryContractAllResponse.decode(_m0.Reader.create(data)));
  }

  ModuleEVMAddress(request: QueryAddressEVMRequest): Promise<QueryAddressEVMResponse> {
    const data = QueryAddressEVMRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ModuleEVMAddress", data);
    return promise.then((data) => QueryAddressEVMResponse.decode(_m0.Reader.create(data)));
  }

  AllModuleEVMAddress(request: QueryAllAddressEVMRequest): Promise<QueryAllAddressEVMResponse> {
    const data = QueryAllAddressEVMRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllModuleEVMAddress", data);
    return promise.then((data) => QueryAllAddressEVMResponse.decode(_m0.Reader.create(data)));
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
