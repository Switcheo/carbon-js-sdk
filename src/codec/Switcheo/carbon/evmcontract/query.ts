/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EVMContract, ModuleEVMAddress } from "./evm_hooks";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

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

const baseQueryContractRequest: object = {
  moduleName: "",
  contractAddress: "",
};

export const QueryContractRequest = {
  encode(
    message: QueryContractRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryContractRequest } as QueryContractRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractRequest {
    const message = { ...baseQueryContractRequest } as QueryContractRequest;
    message.moduleName =
      object.moduleName !== undefined && object.moduleName !== null
        ? String(object.moduleName)
        : "";
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    return message;
  },

  toJSON(message: QueryContractRequest): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractRequest>): QueryContractRequest {
    const message = { ...baseQueryContractRequest } as QueryContractRequest;
    message.moduleName = object.moduleName ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

const baseQueryContractResponse: object = {};

export const QueryContractResponse = {
  encode(
    message: QueryContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contract !== undefined) {
      EVMContract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryContractResponse } as QueryContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = EVMContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractResponse {
    const message = { ...baseQueryContractResponse } as QueryContractResponse;
    message.contract =
      object.contract !== undefined && object.contract !== null
        ? EVMContract.fromJSON(object.contract)
        : undefined;
    return message;
  },

  toJSON(message: QueryContractResponse): unknown {
    const obj: any = {};
    message.contract !== undefined &&
      (obj.contract = message.contract
        ? EVMContract.toJSON(message.contract)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractResponse>
  ): QueryContractResponse {
    const message = { ...baseQueryContractResponse } as QueryContractResponse;
    message.contract =
      object.contract !== undefined && object.contract !== null
        ? EVMContract.fromPartial(object.contract)
        : undefined;
    return message;
  },
};

const baseQueryContractAllByModuleRequest: object = { moduleName: "" };

export const QueryContractAllByModuleRequest = {
  encode(
    message: QueryContractAllByModuleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContractAllByModuleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractAllByModuleRequest,
    } as QueryContractAllByModuleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractAllByModuleRequest {
    const message = {
      ...baseQueryContractAllByModuleRequest,
    } as QueryContractAllByModuleRequest;
    message.moduleName =
      object.moduleName !== undefined && object.moduleName !== null
        ? String(object.moduleName)
        : "";
    return message;
  },

  toJSON(message: QueryContractAllByModuleRequest): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractAllByModuleRequest>
  ): QueryContractAllByModuleRequest {
    const message = {
      ...baseQueryContractAllByModuleRequest,
    } as QueryContractAllByModuleRequest;
    message.moduleName = object.moduleName ?? "";
    return message;
  },
};

const baseQueryContractAllByModuleResponse: object = {};

export const QueryContractAllByModuleResponse = {
  encode(
    message: QueryContractAllByModuleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.contracts) {
      EVMContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContractAllByModuleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractAllByModuleResponse,
    } as QueryContractAllByModuleResponse;
    message.contracts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(EVMContract.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractAllByModuleResponse {
    const message = {
      ...baseQueryContractAllByModuleResponse,
    } as QueryContractAllByModuleResponse;
    message.contracts = (object.contracts ?? []).map((e: any) =>
      EVMContract.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryContractAllByModuleResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) =>
        e ? EVMContract.toJSON(e) : undefined
      );
    } else {
      obj.contracts = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractAllByModuleResponse>
  ): QueryContractAllByModuleResponse {
    const message = {
      ...baseQueryContractAllByModuleResponse,
    } as QueryContractAllByModuleResponse;
    message.contracts = (object.contracts ?? []).map((e) =>
      EVMContract.fromPartial(e)
    );
    return message;
  },
};

const baseQueryContractAllRequest: object = {};

export const QueryContractAllRequest = {
  encode(
    message: QueryContractAllRequest,
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
  ): QueryContractAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractAllRequest,
    } as QueryContractAllRequest;
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

  fromJSON(object: any): QueryContractAllRequest {
    const message = {
      ...baseQueryContractAllRequest,
    } as QueryContractAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryContractAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractAllRequest>
  ): QueryContractAllRequest {
    const message = {
      ...baseQueryContractAllRequest,
    } as QueryContractAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryContractAllResponse: object = {};

export const QueryContractAllResponse = {
  encode(
    message: QueryContractAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.contracts) {
      EVMContract.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryContractAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractAllResponse,
    } as QueryContractAllResponse;
    message.contracts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(EVMContract.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryContractAllResponse {
    const message = {
      ...baseQueryContractAllResponse,
    } as QueryContractAllResponse;
    message.contracts = (object.contracts ?? []).map((e: any) =>
      EVMContract.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryContractAllResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) =>
        e ? EVMContract.toJSON(e) : undefined
      );
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractAllResponse>
  ): QueryContractAllResponse {
    const message = {
      ...baseQueryContractAllResponse,
    } as QueryContractAllResponse;
    message.contracts = (object.contracts ?? []).map((e) =>
      EVMContract.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllAddressEVMRequest: object = {};

export const QueryAllAddressEVMRequest = {
  encode(
    message: QueryAllAddressEVMRequest,
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
  ): QueryAllAddressEVMRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAddressEVMRequest,
    } as QueryAllAddressEVMRequest;
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

  fromJSON(object: any): QueryAllAddressEVMRequest {
    const message = {
      ...baseQueryAllAddressEVMRequest,
    } as QueryAllAddressEVMRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllAddressEVMRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAddressEVMRequest>
  ): QueryAllAddressEVMRequest {
    const message = {
      ...baseQueryAllAddressEVMRequest,
    } as QueryAllAddressEVMRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllAddressEVMResponse: object = {};

export const QueryAllAddressEVMResponse = {
  encode(
    message: QueryAllAddressEVMResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.modules) {
      ModuleEVMAddress.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllAddressEVMResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAddressEVMResponse,
    } as QueryAllAddressEVMResponse;
    message.modules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modules.push(
            ModuleEVMAddress.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllAddressEVMResponse {
    const message = {
      ...baseQueryAllAddressEVMResponse,
    } as QueryAllAddressEVMResponse;
    message.modules = (object.modules ?? []).map((e: any) =>
      ModuleEVMAddress.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllAddressEVMResponse): unknown {
    const obj: any = {};
    if (message.modules) {
      obj.modules = message.modules.map((e) =>
        e ? ModuleEVMAddress.toJSON(e) : undefined
      );
    } else {
      obj.modules = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAddressEVMResponse>
  ): QueryAllAddressEVMResponse {
    const message = {
      ...baseQueryAllAddressEVMResponse,
    } as QueryAllAddressEVMResponse;
    message.modules = (object.modules ?? []).map((e) =>
      ModuleEVMAddress.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAddressEVMRequest: object = { name: "" };

export const QueryAddressEVMRequest = {
  encode(
    message: QueryAddressEVMRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAddressEVMRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAddressEVMRequest } as QueryAddressEVMRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAddressEVMRequest {
    const message = { ...baseQueryAddressEVMRequest } as QueryAddressEVMRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: QueryAddressEVMRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAddressEVMRequest>
  ): QueryAddressEVMRequest {
    const message = { ...baseQueryAddressEVMRequest } as QueryAddressEVMRequest;
    message.name = object.name ?? "";
    return message;
  },
};

const baseQueryAddressEVMResponse: object = { address: "" };

export const QueryAddressEVMResponse = {
  encode(
    message: QueryAddressEVMResponse,
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
  ): QueryAddressEVMResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAddressEVMResponse,
    } as QueryAddressEVMResponse;
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

  fromJSON(object: any): QueryAddressEVMResponse {
    const message = {
      ...baseQueryAddressEVMResponse,
    } as QueryAddressEVMResponse;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAddressEVMResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAddressEVMResponse>
  ): QueryAddressEVMResponse {
    const message = {
      ...baseQueryAddressEVMResponse,
    } as QueryAddressEVMResponse;
    message.address = object.address ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get contract version and isActive from contract address */
  Contract(request: QueryContractRequest): Promise<QueryContractResponse>;
  /** Get contract version and isActive all deployed contracts in a module */
  ContractAllByModule(
    request: QueryContractAllByModuleRequest
  ): Promise<QueryContractAllByModuleResponse>;
  /** Get version and isActive from all deployed contracts */
  ContractAll(
    request: QueryContractAllRequest
  ): Promise<QueryContractAllResponse>;
  /** Get the module's evm address */
  ModuleEVMAddress(
    request: QueryAddressEVMRequest
  ): Promise<QueryAddressEVMResponse>;
  /** Get evm addresses of all modules with EVM */
  AllModuleEVMAddress(
    request: QueryAllAddressEVMRequest
  ): Promise<QueryAllAddressEVMResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Contract = this.Contract.bind(this);
    this.ContractAllByModule = this.ContractAllByModule.bind(this);
    this.ContractAll = this.ContractAll.bind(this);
    this.ModuleEVMAddress = this.ModuleEVMAddress.bind(this);
    this.AllModuleEVMAddress = this.AllModuleEVMAddress.bind(this);
  }
  Contract(request: QueryContractRequest): Promise<QueryContractResponse> {
    const data = QueryContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmcontract.Query",
      "Contract",
      data
    );
    return promise.then((data) =>
      QueryContractResponse.decode(new _m0.Reader(data))
    );
  }

  ContractAllByModule(
    request: QueryContractAllByModuleRequest
  ): Promise<QueryContractAllByModuleResponse> {
    const data = QueryContractAllByModuleRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmcontract.Query",
      "ContractAllByModule",
      data
    );
    return promise.then((data) =>
      QueryContractAllByModuleResponse.decode(new _m0.Reader(data))
    );
  }

  ContractAll(
    request: QueryContractAllRequest
  ): Promise<QueryContractAllResponse> {
    const data = QueryContractAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmcontract.Query",
      "ContractAll",
      data
    );
    return promise.then((data) =>
      QueryContractAllResponse.decode(new _m0.Reader(data))
    );
  }

  ModuleEVMAddress(
    request: QueryAddressEVMRequest
  ): Promise<QueryAddressEVMResponse> {
    const data = QueryAddressEVMRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmcontract.Query",
      "ModuleEVMAddress",
      data
    );
    return promise.then((data) =>
      QueryAddressEVMResponse.decode(new _m0.Reader(data))
    );
  }

  AllModuleEVMAddress(
    request: QueryAllAddressEVMRequest
  ): Promise<QueryAllAddressEVMResponse> {
    const data = QueryAllAddressEVMRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmcontract.Query",
      "AllModuleEVMAddress",
      data
    );
    return promise.then((data) =>
      QueryAllAddressEVMResponse.decode(new _m0.Reader(data))
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
