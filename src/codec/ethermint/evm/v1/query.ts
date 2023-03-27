/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, TraceConfig, Log } from "./evm";
import { MsgEthereumTx, MsgEthereumTxResponse } from "./tx";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "ethermint.evm.v1";

/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}

/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
  /** code_hash is the hex-formatted code bytes from the EOA. */
  codeHash: string;
  /** nonce is the account's sequence number. */
  nonce: Long;
}

/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}

/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponse {
  /** cosmos_address is the cosmos address of the account. */
  cosmosAddress: string;
  /** sequence is the account's sequence number. */
  sequence: Long;
  /** account_number is the account number */
  accountNumber: Long;
}

/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequest {
  /** cons_address is the validator cons address to query the account for. */
  consAddress: string;
}

/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponse {
  /** account_address is the cosmos address of the account in bech32 format. */
  accountAddress: string;
  /** sequence is the account's sequence number. */
  sequence: Long;
  /** account_number is the account number */
  accountNumber: Long;
}

/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** address is the ethereum hex address to query the balance for. */
  address: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
}

/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
  /** address is the ethereum hex address to query the storage state for. */
  address: string;
  /** key defines the key of the storage state */
  key: string;
}

/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
  /** value defines the storage state value hash associated with the given key. */
  value: string;
}

/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
  /** address is the ethereum hex address to query the code for. */
  address: string;
}

/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
  /** code represents the code bytes from an ethereum address. */
  code: Uint8Array;
}

/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
  /** hash is the ethereum transaction hex hash to query the logs for. */
  hash: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
  /** logs represents the ethereum logs generated from the given transaction. */
  logs: Log[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {}

/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
  /** params define the evm module parameters. */
  params?: Params;
}

/** EthCallRequest defines EthCall request */
export interface EthCallRequest {
  /** args uses the same json format as the json rpc api. */
  args: Uint8Array;
  /** gas_cap defines the default gas cap to be used */
  gasCap: Long;
  /** proposer_address of the requested block in hex format */
  proposerAddress: Uint8Array;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chainId: Long;
}

/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponse {
  /** gas returns the estimated gas */
  gas: Long;
}

/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequest {
  /** msg is the MsgEthereumTx for the requested transaction */
  msg?: MsgEthereumTx;
  /** trace_config holds extra parameters to trace functions. */
  traceConfig?: TraceConfig;
  /**
   * predecessors is an array of transactions included in the same block
   * need to be replayed first to get correct context for tracing.
   */
  predecessors: MsgEthereumTx[];
  /** block_number of requested transaction */
  blockNumber: Long;
  /** block_hash of requested transaction */
  blockHash: string;
  /** block_time of requested transaction */
  blockTime?: Date;
  /** proposer_address is the proposer of the requested block */
  proposerAddress: Uint8Array;
  /** chain_id is the the eip155 chain id parsed from the requested block header */
  chainId: Long;
}

/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponse {
  /** data is the response serialized in bytes */
  data: Uint8Array;
}

/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequest {
  /** txs is an array of messages in the block */
  txs: MsgEthereumTx[];
  /** trace_config holds extra parameters to trace functions. */
  traceConfig?: TraceConfig;
  /** block_number of the traced block */
  blockNumber: Long;
  /** block_hash (hex) of the traced block */
  blockHash: string;
  /** block_time of the traced block */
  blockTime?: Date;
  /** proposer_address is the address of the requested block */
  proposerAddress: Uint8Array;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chainId: Long;
}

/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponse {
  /** data is the response serialized in bytes */
  data: Uint8Array;
}

/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {}

/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
  /** base_fee is the EIP1559 base fee */
  baseFee: string;
}

const baseQueryAccountRequest: object = { address: "" };

export const QueryAccountRequest = {
  encode(
    message: QueryAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
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

  fromJSON(object: any): QueryAccountRequest {
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryAccountResponse: object = {
  balance: "",
  codeHash: "",
  nonce: Long.UZERO,
};

export const QueryAccountResponse = {
  encode(
    message: QueryAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    if (message.codeHash !== "") {
      writer.uint32(18).string(message.codeHash);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        case 2:
          message.codeHash = reader.string();
          break;
        case 3:
          message.nonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? String(object.balance)
        : "";
    message.codeHash =
      object.codeHash !== undefined && object.codeHash !== null
        ? String(object.codeHash)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    message.codeHash !== undefined && (obj.codeHash = message.codeHash);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    message.balance = object.balance ?? "";
    message.codeHash = object.codeHash ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    return message;
  },
};

const baseQueryCosmosAccountRequest: object = { address: "" };

export const QueryCosmosAccountRequest = {
  encode(
    message: QueryCosmosAccountRequest,
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
  ): QueryCosmosAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCosmosAccountRequest,
    } as QueryCosmosAccountRequest;
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

  fromJSON(object: any): QueryCosmosAccountRequest {
    const message = {
      ...baseQueryCosmosAccountRequest,
    } as QueryCosmosAccountRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryCosmosAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCosmosAccountRequest>
  ): QueryCosmosAccountRequest {
    const message = {
      ...baseQueryCosmosAccountRequest,
    } as QueryCosmosAccountRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryCosmosAccountResponse: object = {
  cosmosAddress: "",
  sequence: Long.UZERO,
  accountNumber: Long.UZERO,
};

export const QueryCosmosAccountResponse = {
  encode(
    message: QueryCosmosAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cosmosAddress !== "") {
      writer.uint32(10).string(message.cosmosAddress);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCosmosAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCosmosAccountResponse,
    } as QueryCosmosAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosAddress = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64() as Long;
          break;
        case 3:
          message.accountNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCosmosAccountResponse {
    const message = {
      ...baseQueryCosmosAccountResponse,
    } as QueryCosmosAccountResponse;
    message.cosmosAddress =
      object.cosmosAddress !== undefined && object.cosmosAddress !== null
        ? String(object.cosmosAddress)
        : "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    message.accountNumber =
      object.accountNumber !== undefined && object.accountNumber !== null
        ? Long.fromString(object.accountNumber)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryCosmosAccountResponse): unknown {
    const obj: any = {};
    message.cosmosAddress !== undefined &&
      (obj.cosmosAddress = message.cosmosAddress);
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.accountNumber !== undefined &&
      (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCosmosAccountResponse>
  ): QueryCosmosAccountResponse {
    const message = {
      ...baseQueryCosmosAccountResponse,
    } as QueryCosmosAccountResponse;
    message.cosmosAddress = object.cosmosAddress ?? "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.accountNumber =
      object.accountNumber !== undefined && object.accountNumber !== null
        ? Long.fromValue(object.accountNumber)
        : Long.UZERO;
    return message;
  },
};

const baseQueryValidatorAccountRequest: object = { consAddress: "" };

export const QueryValidatorAccountRequest = {
  encode(
    message: QueryValidatorAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorAccountRequest,
    } as QueryValidatorAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorAccountRequest {
    const message = {
      ...baseQueryValidatorAccountRequest,
    } as QueryValidatorAccountRequest;
    message.consAddress =
      object.consAddress !== undefined && object.consAddress !== null
        ? String(object.consAddress)
        : "";
    return message;
  },

  toJSON(message: QueryValidatorAccountRequest): unknown {
    const obj: any = {};
    message.consAddress !== undefined &&
      (obj.consAddress = message.consAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorAccountRequest>
  ): QueryValidatorAccountRequest {
    const message = {
      ...baseQueryValidatorAccountRequest,
    } as QueryValidatorAccountRequest;
    message.consAddress = object.consAddress ?? "";
    return message;
  },
};

const baseQueryValidatorAccountResponse: object = {
  accountAddress: "",
  sequence: Long.UZERO,
  accountNumber: Long.UZERO,
};

export const QueryValidatorAccountResponse = {
  encode(
    message: QueryValidatorAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorAccountResponse,
    } as QueryValidatorAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64() as Long;
          break;
        case 3:
          message.accountNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorAccountResponse {
    const message = {
      ...baseQueryValidatorAccountResponse,
    } as QueryValidatorAccountResponse;
    message.accountAddress =
      object.accountAddress !== undefined && object.accountAddress !== null
        ? String(object.accountAddress)
        : "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    message.accountNumber =
      object.accountNumber !== undefined && object.accountNumber !== null
        ? Long.fromString(object.accountNumber)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryValidatorAccountResponse): unknown {
    const obj: any = {};
    message.accountAddress !== undefined &&
      (obj.accountAddress = message.accountAddress);
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.accountNumber !== undefined &&
      (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorAccountResponse>
  ): QueryValidatorAccountResponse {
    const message = {
      ...baseQueryValidatorAccountResponse,
    } as QueryValidatorAccountResponse;
    message.accountAddress = object.accountAddress ?? "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.accountNumber =
      object.accountNumber !== undefined && object.accountNumber !== null
        ? Long.fromValue(object.accountNumber)
        : Long.UZERO;
    return message;
  },
};

const baseQueryBalanceRequest: object = { address: "" };

export const QueryBalanceRequest = {
  encode(
    message: QueryBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
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

  fromJSON(object: any): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryBalanceResponse: object = { balance: "" };

export const QueryBalanceResponse = {
  encode(
    message: QueryBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? String(object.balance)
        : "";
    return message;
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    message.balance = object.balance ?? "";
    return message;
  },
};

const baseQueryStorageRequest: object = { address: "", key: "" };

export const QueryStorageRequest = {
  encode(
    message: QueryStorageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStorageRequest } as QueryStorageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStorageRequest {
    const message = { ...baseQueryStorageRequest } as QueryStorageRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    return message;
  },

  toJSON(message: QueryStorageRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStorageRequest>): QueryStorageRequest {
    const message = { ...baseQueryStorageRequest } as QueryStorageRequest;
    message.address = object.address ?? "";
    message.key = object.key ?? "";
    return message;
  },
};

const baseQueryStorageResponse: object = { value: "" };

export const QueryStorageResponse = {
  encode(
    message: QueryStorageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStorageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStorageResponse } as QueryStorageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStorageResponse {
    const message = { ...baseQueryStorageResponse } as QueryStorageResponse;
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: QueryStorageResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStorageResponse>): QueryStorageResponse {
    const message = { ...baseQueryStorageResponse } as QueryStorageResponse;
    message.value = object.value ?? "";
    return message;
  },
};

const baseQueryCodeRequest: object = { address: "" };

export const QueryCodeRequest = {
  encode(
    message: QueryCodeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCodeRequest } as QueryCodeRequest;
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

  fromJSON(object: any): QueryCodeRequest {
    const message = { ...baseQueryCodeRequest } as QueryCodeRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest {
    const message = { ...baseQueryCodeRequest } as QueryCodeRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryCodeResponse: object = {};

export const QueryCodeResponse = {
  encode(
    message: QueryCodeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code.length !== 0) {
      writer.uint32(10).bytes(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCodeResponse } as QueryCodeResponse;
    message.code = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCodeResponse {
    const message = { ...baseQueryCodeResponse } as QueryCodeResponse;
    message.code =
      object.code !== undefined && object.code !== null
        ? bytesFromBase64(object.code)
        : new Uint8Array();
    return message;
  },

  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    message.code !== undefined &&
      (obj.code = base64FromBytes(
        message.code !== undefined ? message.code : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse {
    const message = { ...baseQueryCodeResponse } as QueryCodeResponse;
    message.code = object.code ?? new Uint8Array();
    return message;
  },
};

const baseQueryTxLogsRequest: object = { hash: "" };

export const QueryTxLogsRequest = {
  encode(
    message: QueryTxLogsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxLogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTxLogsRequest } as QueryTxLogsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTxLogsRequest {
    const message = { ...baseQueryTxLogsRequest } as QueryTxLogsRequest;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? String(object.hash)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryTxLogsRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTxLogsRequest>): QueryTxLogsRequest {
    const message = { ...baseQueryTxLogsRequest } as QueryTxLogsRequest;
    message.hash = object.hash ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryTxLogsResponse: object = {};

export const QueryTxLogsResponse = {
  encode(
    message: QueryTxLogsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxLogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTxLogsResponse } as QueryTxLogsResponse;
    message.logs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logs.push(Log.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTxLogsResponse {
    const message = { ...baseQueryTxLogsResponse } as QueryTxLogsResponse;
    message.logs = (object.logs ?? []).map((e: any) => Log.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryTxLogsResponse): unknown {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTxLogsResponse>): QueryTxLogsResponse {
    const message = { ...baseQueryTxLogsResponse } as QueryTxLogsResponse;
    message.logs = (object.logs ?? []).map((e) => Log.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
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

const baseEthCallRequest: object = { gasCap: Long.UZERO, chainId: Long.ZERO };

export const EthCallRequest = {
  encode(
    message: EthCallRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.args.length !== 0) {
      writer.uint32(10).bytes(message.args);
    }
    if (!message.gasCap.isZero()) {
      writer.uint32(16).uint64(message.gasCap);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(26).bytes(message.proposerAddress);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(32).int64(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EthCallRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEthCallRequest } as EthCallRequest;
    message.args = new Uint8Array();
    message.proposerAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args = reader.bytes();
          break;
        case 2:
          message.gasCap = reader.uint64() as Long;
          break;
        case 3:
          message.proposerAddress = reader.bytes();
          break;
        case 4:
          message.chainId = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EthCallRequest {
    const message = { ...baseEthCallRequest } as EthCallRequest;
    message.args =
      object.args !== undefined && object.args !== null
        ? bytesFromBase64(object.args)
        : new Uint8Array();
    message.gasCap =
      object.gasCap !== undefined && object.gasCap !== null
        ? Long.fromString(object.gasCap)
        : Long.UZERO;
    message.proposerAddress =
      object.proposerAddress !== undefined && object.proposerAddress !== null
        ? bytesFromBase64(object.proposerAddress)
        : new Uint8Array();
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.ZERO;
    return message;
  },

  toJSON(message: EthCallRequest): unknown {
    const obj: any = {};
    message.args !== undefined &&
      (obj.args = base64FromBytes(
        message.args !== undefined ? message.args : new Uint8Array()
      ));
    message.gasCap !== undefined &&
      (obj.gasCap = (message.gasCap || Long.UZERO).toString());
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined
          ? message.proposerAddress
          : new Uint8Array()
      ));
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EthCallRequest>): EthCallRequest {
    const message = { ...baseEthCallRequest } as EthCallRequest;
    message.args = object.args ?? new Uint8Array();
    message.gasCap =
      object.gasCap !== undefined && object.gasCap !== null
        ? Long.fromValue(object.gasCap)
        : Long.UZERO;
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.ZERO;
    return message;
  },
};

const baseEstimateGasResponse: object = { gas: Long.UZERO };

export const EstimateGasResponse = {
  encode(
    message: EstimateGasResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.gas.isZero()) {
      writer.uint32(8).uint64(message.gas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateGasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEstimateGasResponse } as EstimateGasResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateGasResponse {
    const message = { ...baseEstimateGasResponse } as EstimateGasResponse;
    message.gas =
      object.gas !== undefined && object.gas !== null
        ? Long.fromString(object.gas)
        : Long.UZERO;
    return message;
  },

  toJSON(message: EstimateGasResponse): unknown {
    const obj: any = {};
    message.gas !== undefined &&
      (obj.gas = (message.gas || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EstimateGasResponse>): EstimateGasResponse {
    const message = { ...baseEstimateGasResponse } as EstimateGasResponse;
    message.gas =
      object.gas !== undefined && object.gas !== null
        ? Long.fromValue(object.gas)
        : Long.UZERO;
    return message;
  },
};

const baseQueryTraceTxRequest: object = {
  blockNumber: Long.ZERO,
  blockHash: "",
  chainId: Long.ZERO,
};

export const QueryTraceTxRequest = {
  encode(
    message: QueryTraceTxRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msg !== undefined) {
      MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(
        message.traceConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.predecessors) {
      MsgEthereumTx.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.blockHash !== "") {
      writer.uint32(50).string(message.blockHash);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(72).int64(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTraceTxRequest } as QueryTraceTxRequest;
    message.predecessors = [];
    message.proposerAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgEthereumTx.decode(reader, reader.uint32());
          break;
        case 3:
          message.traceConfig = TraceConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.predecessors.push(
            MsgEthereumTx.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.blockNumber = reader.int64() as Long;
          break;
        case 6:
          message.blockHash = reader.string();
          break;
        case 7:
          message.blockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        case 9:
          message.chainId = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTraceTxRequest {
    const message = { ...baseQueryTraceTxRequest } as QueryTraceTxRequest;
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? MsgEthereumTx.fromJSON(object.msg)
        : undefined;
    message.traceConfig =
      object.traceConfig !== undefined && object.traceConfig !== null
        ? TraceConfig.fromJSON(object.traceConfig)
        : undefined;
    message.predecessors = (object.predecessors ?? []).map((e: any) =>
      MsgEthereumTx.fromJSON(e)
    );
    message.blockNumber =
      object.blockNumber !== undefined && object.blockNumber !== null
        ? Long.fromString(object.blockNumber)
        : Long.ZERO;
    message.blockHash =
      object.blockHash !== undefined && object.blockHash !== null
        ? String(object.blockHash)
        : "";
    message.blockTime =
      object.blockTime !== undefined && object.blockTime !== null
        ? fromJsonTimestamp(object.blockTime)
        : undefined;
    message.proposerAddress =
      object.proposerAddress !== undefined && object.proposerAddress !== null
        ? bytesFromBase64(object.proposerAddress)
        : new Uint8Array();
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.ZERO;
    return message;
  },

  toJSON(message: QueryTraceTxRequest): unknown {
    const obj: any = {};
    message.msg !== undefined &&
      (obj.msg = message.msg ? MsgEthereumTx.toJSON(message.msg) : undefined);
    message.traceConfig !== undefined &&
      (obj.traceConfig = message.traceConfig
        ? TraceConfig.toJSON(message.traceConfig)
        : undefined);
    if (message.predecessors) {
      obj.predecessors = message.predecessors.map((e) =>
        e ? MsgEthereumTx.toJSON(e) : undefined
      );
    } else {
      obj.predecessors = [];
    }
    message.blockNumber !== undefined &&
      (obj.blockNumber = (message.blockNumber || Long.ZERO).toString());
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.blockTime !== undefined &&
      (obj.blockTime = message.blockTime.toISOString());
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined
          ? message.proposerAddress
          : new Uint8Array()
      ));
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTraceTxRequest>): QueryTraceTxRequest {
    const message = { ...baseQueryTraceTxRequest } as QueryTraceTxRequest;
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? MsgEthereumTx.fromPartial(object.msg)
        : undefined;
    message.traceConfig =
      object.traceConfig !== undefined && object.traceConfig !== null
        ? TraceConfig.fromPartial(object.traceConfig)
        : undefined;
    message.predecessors = (object.predecessors ?? []).map((e) =>
      MsgEthereumTx.fromPartial(e)
    );
    message.blockNumber =
      object.blockNumber !== undefined && object.blockNumber !== null
        ? Long.fromValue(object.blockNumber)
        : Long.ZERO;
    message.blockHash = object.blockHash ?? "";
    message.blockTime = object.blockTime ?? undefined;
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.ZERO;
    return message;
  },
};

const baseQueryTraceTxResponse: object = {};

export const QueryTraceTxResponse = {
  encode(
    message: QueryTraceTxResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTraceTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTraceTxResponse } as QueryTraceTxResponse;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTraceTxResponse {
    const message = { ...baseQueryTraceTxResponse } as QueryTraceTxResponse;
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    return message;
  },

  toJSON(message: QueryTraceTxResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTraceTxResponse>): QueryTraceTxResponse {
    const message = { ...baseQueryTraceTxResponse } as QueryTraceTxResponse;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

const baseQueryTraceBlockRequest: object = {
  blockNumber: Long.ZERO,
  blockHash: "",
  chainId: Long.ZERO,
};

export const QueryTraceBlockRequest = {
  encode(
    message: QueryTraceBlockRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.txs) {
      MsgEthereumTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(
        message.traceConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.blockHash !== "") {
      writer.uint32(50).string(message.blockHash);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(72).int64(message.chainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTraceBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTraceBlockRequest } as QueryTraceBlockRequest;
    message.txs = [];
    message.proposerAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(MsgEthereumTx.decode(reader, reader.uint32()));
          break;
        case 3:
          message.traceConfig = TraceConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.blockNumber = reader.int64() as Long;
          break;
        case 6:
          message.blockHash = reader.string();
          break;
        case 7:
          message.blockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        case 9:
          message.chainId = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTraceBlockRequest {
    const message = { ...baseQueryTraceBlockRequest } as QueryTraceBlockRequest;
    message.txs = (object.txs ?? []).map((e: any) => MsgEthereumTx.fromJSON(e));
    message.traceConfig =
      object.traceConfig !== undefined && object.traceConfig !== null
        ? TraceConfig.fromJSON(object.traceConfig)
        : undefined;
    message.blockNumber =
      object.blockNumber !== undefined && object.blockNumber !== null
        ? Long.fromString(object.blockNumber)
        : Long.ZERO;
    message.blockHash =
      object.blockHash !== undefined && object.blockHash !== null
        ? String(object.blockHash)
        : "";
    message.blockTime =
      object.blockTime !== undefined && object.blockTime !== null
        ? fromJsonTimestamp(object.blockTime)
        : undefined;
    message.proposerAddress =
      object.proposerAddress !== undefined && object.proposerAddress !== null
        ? bytesFromBase64(object.proposerAddress)
        : new Uint8Array();
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.ZERO;
    return message;
  },

  toJSON(message: QueryTraceBlockRequest): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) =>
        e ? MsgEthereumTx.toJSON(e) : undefined
      );
    } else {
      obj.txs = [];
    }
    message.traceConfig !== undefined &&
      (obj.traceConfig = message.traceConfig
        ? TraceConfig.toJSON(message.traceConfig)
        : undefined);
    message.blockNumber !== undefined &&
      (obj.blockNumber = (message.blockNumber || Long.ZERO).toString());
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.blockTime !== undefined &&
      (obj.blockTime = message.blockTime.toISOString());
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined
          ? message.proposerAddress
          : new Uint8Array()
      ));
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.ZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTraceBlockRequest>
  ): QueryTraceBlockRequest {
    const message = { ...baseQueryTraceBlockRequest } as QueryTraceBlockRequest;
    message.txs = (object.txs ?? []).map((e) => MsgEthereumTx.fromPartial(e));
    message.traceConfig =
      object.traceConfig !== undefined && object.traceConfig !== null
        ? TraceConfig.fromPartial(object.traceConfig)
        : undefined;
    message.blockNumber =
      object.blockNumber !== undefined && object.blockNumber !== null
        ? Long.fromValue(object.blockNumber)
        : Long.ZERO;
    message.blockHash = object.blockHash ?? "";
    message.blockTime = object.blockTime ?? undefined;
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.ZERO;
    return message;
  },
};

const baseQueryTraceBlockResponse: object = {};

export const QueryTraceBlockResponse = {
  encode(
    message: QueryTraceBlockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTraceBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTraceBlockResponse,
    } as QueryTraceBlockResponse;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTraceBlockResponse {
    const message = {
      ...baseQueryTraceBlockResponse,
    } as QueryTraceBlockResponse;
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    return message;
  },

  toJSON(message: QueryTraceBlockResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTraceBlockResponse>
  ): QueryTraceBlockResponse {
    const message = {
      ...baseQueryTraceBlockResponse,
    } as QueryTraceBlockResponse;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

const baseQueryBaseFeeRequest: object = {};

export const QueryBaseFeeRequest = {
  encode(
    _: QueryBaseFeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBaseFeeRequest } as QueryBaseFeeRequest;
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

  fromJSON(_: any): QueryBaseFeeRequest {
    const message = { ...baseQueryBaseFeeRequest } as QueryBaseFeeRequest;
    return message;
  },

  toJSON(_: QueryBaseFeeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBaseFeeRequest>): QueryBaseFeeRequest {
    const message = { ...baseQueryBaseFeeRequest } as QueryBaseFeeRequest;
    return message;
  },
};

const baseQueryBaseFeeResponse: object = { baseFee: "" };

export const QueryBaseFeeResponse = {
  encode(
    message: QueryBaseFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.baseFee !== "") {
      writer.uint32(10).string(message.baseFee);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBaseFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBaseFeeResponse } as QueryBaseFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBaseFeeResponse {
    const message = { ...baseQueryBaseFeeResponse } as QueryBaseFeeResponse;
    message.baseFee =
      object.baseFee !== undefined && object.baseFee !== null
        ? String(object.baseFee)
        : "";
    return message;
  },

  toJSON(message: QueryBaseFeeResponse): unknown {
    const obj: any = {};
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBaseFeeResponse>): QueryBaseFeeResponse {
    const message = { ...baseQueryBaseFeeResponse } as QueryBaseFeeResponse;
    message.baseFee = object.baseFee ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Account queries an Ethereum account. */
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /** CosmosAccount queries an Ethereum account's Cosmos Address. */
  CosmosAccount(
    request: QueryCosmosAccountRequest
  ): Promise<QueryCosmosAccountResponse>;
  /**
   * ValidatorAccount queries an Ethereum account's from a validator consensus
   * Address.
   */
  ValidatorAccount(
    request: QueryValidatorAccountRequest
  ): Promise<QueryValidatorAccountResponse>;
  /**
   * Balance queries the balance of a the EVM denomination for a single
   * EthAccount.
   */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Storage queries the balance of all coins for a single account. */
  Storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
  /** Code queries the balance of all coins for a single account. */
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** Params queries the parameters of x/evm module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EthCall implements the `eth_call` rpc api */
  EthCall(request: EthCallRequest): Promise<MsgEthereumTxResponse>;
  /** EstimateGas implements the `eth_estimateGas` rpc api */
  EstimateGas(request: EthCallRequest): Promise<EstimateGasResponse>;
  /** TraceTx implements the `debug_traceTransaction` rpc api */
  TraceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse>;
  /** TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api */
  TraceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse>;
  /**
   * BaseFee queries the base fee of the parent block of the current block,
   * it's similar to feemarket module's method, but also checks london hardfork status.
   */
  BaseFee(request: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Account = this.Account.bind(this);
    this.CosmosAccount = this.CosmosAccount.bind(this);
    this.ValidatorAccount = this.ValidatorAccount.bind(this);
    this.Balance = this.Balance.bind(this);
    this.Storage = this.Storage.bind(this);
    this.Code = this.Code.bind(this);
    this.Params = this.Params.bind(this);
    this.EthCall = this.EthCall.bind(this);
    this.EstimateGas = this.EstimateGas.bind(this);
    this.TraceTx = this.TraceTx.bind(this);
    this.TraceBlock = this.TraceBlock.bind(this);
    this.BaseFee = this.BaseFee.bind(this);
  }
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Account", data);
    return promise.then((data) =>
      QueryAccountResponse.decode(new _m0.Reader(data))
    );
  }

  CosmosAccount(
    request: QueryCosmosAccountRequest
  ): Promise<QueryCosmosAccountResponse> {
    const data = QueryCosmosAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Query",
      "CosmosAccount",
      data
    );
    return promise.then((data) =>
      QueryCosmosAccountResponse.decode(new _m0.Reader(data))
    );
  }

  ValidatorAccount(
    request: QueryValidatorAccountRequest
  ): Promise<QueryValidatorAccountResponse> {
    const data = QueryValidatorAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Query",
      "ValidatorAccount",
      data
    );
    return promise.then((data) =>
      QueryValidatorAccountResponse.decode(new _m0.Reader(data))
    );
  }

  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Balance", data);
    return promise.then((data) =>
      QueryBalanceResponse.decode(new _m0.Reader(data))
    );
  }

  Storage(request: QueryStorageRequest): Promise<QueryStorageResponse> {
    const data = QueryStorageRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Storage", data);
    return promise.then((data) =>
      QueryStorageResponse.decode(new _m0.Reader(data))
    );
  }

  Code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Code", data);
    return promise.then((data) =>
      QueryCodeResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  EthCall(request: EthCallRequest): Promise<MsgEthereumTxResponse> {
    const data = EthCallRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "EthCall", data);
    return promise.then((data) =>
      MsgEthereumTxResponse.decode(new _m0.Reader(data))
    );
  }

  EstimateGas(request: EthCallRequest): Promise<EstimateGasResponse> {
    const data = EthCallRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Query",
      "EstimateGas",
      data
    );
    return promise.then((data) =>
      EstimateGasResponse.decode(new _m0.Reader(data))
    );
  }

  TraceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse> {
    const data = QueryTraceTxRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceTx", data);
    return promise.then((data) =>
      QueryTraceTxResponse.decode(new _m0.Reader(data))
    );
  }

  TraceBlock(
    request: QueryTraceBlockRequest
  ): Promise<QueryTraceBlockResponse> {
    const data = QueryTraceBlockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1.Query",
      "TraceBlock",
      data
    );
    return promise.then((data) =>
      QueryTraceBlockResponse.decode(new _m0.Reader(data))
    );
  }

  BaseFee(request: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse> {
    const data = QueryBaseFeeRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "BaseFee", data);
    return promise.then((data) =>
      QueryBaseFeeResponse.decode(new _m0.Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
