/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block } from "../../../../tendermint/types/block";
import { Block as Block1 } from "./types";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";

export const protobufPackage = "cosmos.base.tendermint.v1beta1";

/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
  height: Long;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}

/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
  blockHeight: Long;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}

/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
  blockHeight: Long;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

/** Validator is the type for the validator-set. */
export interface Validator {
  address: string;
  pubKey?: Any;
  votingPower: Long;
  proposerPriority: Long;
}

/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
  height: Long;
}

/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
  blockId?: BlockID;
  /** Deprecated: please use `sdk_block` instead */
  block?: Block;
  /** Since: cosmos-sdk 0.47 */
  sdkBlock?: Block1;
}

/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {}

/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
  blockId?: BlockID;
  /** Deprecated: please use `sdk_block` instead */
  block?: Block;
  /** Since: cosmos-sdk 0.47 */
  sdkBlock?: Block1;
}

/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {}

/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
  syncing: boolean;
}

/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {}

/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
  defaultNodeInfo?: DefaultNodeInfo;
  applicationVersion?: VersionInfo;
}

/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
  name: string;
  appName: string;
  version: string;
  gitCommit: string;
  buildTags: string;
  goVersion: string;
  buildDeps: Module[];
  /** Since: cosmos-sdk 0.43 */
  cosmosSdkVersion: string;
}

/** Module is the type for VersionInfo */
export interface Module {
  /** module path */
  path: string;
  /** module version */
  version: string;
  /** checksum */
  sum: string;
}

/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequest {
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}

/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponse {
  code: number;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: Long;
  codespace: string;
}

/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 */
export interface ProofOp {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}

/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 */
export interface ProofOps {
  ops: ProofOp[];
}

const baseGetValidatorSetByHeightRequest: object = { height: Long.ZERO };

export const GetValidatorSetByHeightRequest = {
  encode(
    message: GetValidatorSetByHeightRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetValidatorSetByHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetValidatorSetByHeightRequest,
    } as GetValidatorSetByHeightRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
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

  fromJSON(object: any): GetValidatorSetByHeightRequest {
    const message = {
      ...baseGetValidatorSetByHeightRequest,
    } as GetValidatorSetByHeightRequest;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: GetValidatorSetByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetValidatorSetByHeightRequest>
  ): GetValidatorSetByHeightRequest {
    const message = {
      ...baseGetValidatorSetByHeightRequest,
    } as GetValidatorSetByHeightRequest;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseGetValidatorSetByHeightResponse: object = { blockHeight: Long.ZERO };

export const GetValidatorSetByHeightResponse = {
  encode(
    message: GetValidatorSetByHeightResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetValidatorSetByHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetValidatorSetByHeightResponse,
    } as GetValidatorSetByHeightResponse;
    message.validators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64() as Long;
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetValidatorSetByHeightResponse {
    const message = {
      ...baseGetValidatorSetByHeightResponse,
    } as GetValidatorSetByHeightResponse;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromString(object.blockHeight)
        : Long.ZERO;
    message.validators = (object.validators ?? []).map((e: any) =>
      Validator.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: GetValidatorSetByHeightResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetValidatorSetByHeightResponse>
  ): GetValidatorSetByHeightResponse {
    const message = {
      ...baseGetValidatorSetByHeightResponse,
    } as GetValidatorSetByHeightResponse;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO;
    message.validators = (object.validators ?? []).map((e) =>
      Validator.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseGetLatestValidatorSetRequest: object = {};

export const GetLatestValidatorSetRequest = {
  encode(
    message: GetLatestValidatorSetRequest,
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
  ): GetLatestValidatorSetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetLatestValidatorSetRequest,
    } as GetLatestValidatorSetRequest;
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

  fromJSON(object: any): GetLatestValidatorSetRequest {
    const message = {
      ...baseGetLatestValidatorSetRequest,
    } as GetLatestValidatorSetRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: GetLatestValidatorSetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetLatestValidatorSetRequest>
  ): GetLatestValidatorSetRequest {
    const message = {
      ...baseGetLatestValidatorSetRequest,
    } as GetLatestValidatorSetRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseGetLatestValidatorSetResponse: object = { blockHeight: Long.ZERO };

export const GetLatestValidatorSetResponse = {
  encode(
    message: GetLatestValidatorSetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLatestValidatorSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetLatestValidatorSetResponse,
    } as GetLatestValidatorSetResponse;
    message.validators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64() as Long;
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLatestValidatorSetResponse {
    const message = {
      ...baseGetLatestValidatorSetResponse,
    } as GetLatestValidatorSetResponse;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromString(object.blockHeight)
        : Long.ZERO;
    message.validators = (object.validators ?? []).map((e: any) =>
      Validator.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: GetLatestValidatorSetResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetLatestValidatorSetResponse>
  ): GetLatestValidatorSetResponse {
    const message = {
      ...baseGetLatestValidatorSetResponse,
    } as GetLatestValidatorSetResponse;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO;
    message.validators = (object.validators ?? []).map((e) =>
      Validator.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseValidator: object = {
  address: "",
  votingPower: Long.ZERO,
  proposerPriority: Long.ZERO,
};

export const Validator = {
  encode(
    message: Validator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.votingPower.isZero()) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (!message.proposerPriority.isZero()) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidator } as Validator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64() as Long;
          break;
        case 4:
          message.proposerPriority = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    const message = { ...baseValidator } as Validator;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? Any.fromJSON(object.pubKey)
        : undefined;
    message.votingPower =
      object.votingPower !== undefined && object.votingPower !== null
        ? Long.fromString(object.votingPower)
        : Long.ZERO;
    message.proposerPriority =
      object.proposerPriority !== undefined && object.proposerPriority !== null
        ? Long.fromString(object.proposerPriority)
        : Long.ZERO;
    return message;
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined &&
      (obj.votingPower = (message.votingPower || Long.ZERO).toString());
    message.proposerPriority !== undefined &&
      (obj.proposerPriority = (
        message.proposerPriority || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = { ...baseValidator } as Validator;
    message.address = object.address ?? "";
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? Any.fromPartial(object.pubKey)
        : undefined;
    message.votingPower =
      object.votingPower !== undefined && object.votingPower !== null
        ? Long.fromValue(object.votingPower)
        : Long.ZERO;
    message.proposerPriority =
      object.proposerPriority !== undefined && object.proposerPriority !== null
        ? Long.fromValue(object.proposerPriority)
        : Long.ZERO;
    return message;
  },
};

const baseGetBlockByHeightRequest: object = { height: Long.ZERO };

export const GetBlockByHeightRequest = {
  encode(
    message: GetBlockByHeightRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBlockByHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetBlockByHeightRequest,
    } as GetBlockByHeightRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockByHeightRequest {
    const message = {
      ...baseGetBlockByHeightRequest,
    } as GetBlockByHeightRequest;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    return message;
  },

  toJSON(message: GetBlockByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBlockByHeightRequest>
  ): GetBlockByHeightRequest {
    const message = {
      ...baseGetBlockByHeightRequest,
    } as GetBlockByHeightRequest;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    return message;
  },
};

const baseGetBlockByHeightResponse: object = {};

export const GetBlockByHeightResponse = {
  encode(
    message: GetBlockByHeightResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== undefined) {
      Block1.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBlockByHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetBlockByHeightResponse,
    } as GetBlockByHeightResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = Block1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockByHeightResponse {
    const message = {
      ...baseGetBlockByHeightResponse,
    } as GetBlockByHeightResponse;
    message.blockId =
      object.blockId !== undefined && object.blockId !== null
        ? BlockID.fromJSON(object.blockId)
        : undefined;
    message.block =
      object.block !== undefined && object.block !== null
        ? Block.fromJSON(object.block)
        : undefined;
    message.sdkBlock =
      object.sdkBlock !== undefined && object.sdkBlock !== null
        ? Block1.fromJSON(object.sdkBlock)
        : undefined;
    return message;
  },

  toJSON(message: GetBlockByHeightResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined &&
      (obj.blockId = message.blockId
        ? BlockID.toJSON(message.blockId)
        : undefined);
    message.block !== undefined &&
      (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    message.sdkBlock !== undefined &&
      (obj.sdkBlock = message.sdkBlock
        ? Block1.toJSON(message.sdkBlock)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBlockByHeightResponse>
  ): GetBlockByHeightResponse {
    const message = {
      ...baseGetBlockByHeightResponse,
    } as GetBlockByHeightResponse;
    message.blockId =
      object.blockId !== undefined && object.blockId !== null
        ? BlockID.fromPartial(object.blockId)
        : undefined;
    message.block =
      object.block !== undefined && object.block !== null
        ? Block.fromPartial(object.block)
        : undefined;
    message.sdkBlock =
      object.sdkBlock !== undefined && object.sdkBlock !== null
        ? Block1.fromPartial(object.sdkBlock)
        : undefined;
    return message;
  },
};

const baseGetLatestBlockRequest: object = {};

export const GetLatestBlockRequest = {
  encode(
    _: GetLatestBlockRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLatestBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLatestBlockRequest } as GetLatestBlockRequest;
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

  fromJSON(_: any): GetLatestBlockRequest {
    const message = { ...baseGetLatestBlockRequest } as GetLatestBlockRequest;
    return message;
  },

  toJSON(_: GetLatestBlockRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetLatestBlockRequest>): GetLatestBlockRequest {
    const message = { ...baseGetLatestBlockRequest } as GetLatestBlockRequest;
    return message;
  },
};

const baseGetLatestBlockResponse: object = {};

export const GetLatestBlockResponse = {
  encode(
    message: GetLatestBlockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== undefined) {
      Block1.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLatestBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLatestBlockResponse } as GetLatestBlockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = Block1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLatestBlockResponse {
    const message = { ...baseGetLatestBlockResponse } as GetLatestBlockResponse;
    message.blockId =
      object.blockId !== undefined && object.blockId !== null
        ? BlockID.fromJSON(object.blockId)
        : undefined;
    message.block =
      object.block !== undefined && object.block !== null
        ? Block.fromJSON(object.block)
        : undefined;
    message.sdkBlock =
      object.sdkBlock !== undefined && object.sdkBlock !== null
        ? Block1.fromJSON(object.sdkBlock)
        : undefined;
    return message;
  },

  toJSON(message: GetLatestBlockResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined &&
      (obj.blockId = message.blockId
        ? BlockID.toJSON(message.blockId)
        : undefined);
    message.block !== undefined &&
      (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    message.sdkBlock !== undefined &&
      (obj.sdkBlock = message.sdkBlock
        ? Block1.toJSON(message.sdkBlock)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetLatestBlockResponse>
  ): GetLatestBlockResponse {
    const message = { ...baseGetLatestBlockResponse } as GetLatestBlockResponse;
    message.blockId =
      object.blockId !== undefined && object.blockId !== null
        ? BlockID.fromPartial(object.blockId)
        : undefined;
    message.block =
      object.block !== undefined && object.block !== null
        ? Block.fromPartial(object.block)
        : undefined;
    message.sdkBlock =
      object.sdkBlock !== undefined && object.sdkBlock !== null
        ? Block1.fromPartial(object.sdkBlock)
        : undefined;
    return message;
  },
};

const baseGetSyncingRequest: object = {};

export const GetSyncingRequest = {
  encode(
    _: GetSyncingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSyncingRequest } as GetSyncingRequest;
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

  fromJSON(_: any): GetSyncingRequest {
    const message = { ...baseGetSyncingRequest } as GetSyncingRequest;
    return message;
  },

  toJSON(_: GetSyncingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetSyncingRequest>): GetSyncingRequest {
    const message = { ...baseGetSyncingRequest } as GetSyncingRequest;
    return message;
  },
};

const baseGetSyncingResponse: object = { syncing: false };

export const GetSyncingResponse = {
  encode(
    message: GetSyncingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSyncingResponse } as GetSyncingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSyncingResponse {
    const message = { ...baseGetSyncingResponse } as GetSyncingResponse;
    message.syncing =
      object.syncing !== undefined && object.syncing !== null
        ? Boolean(object.syncing)
        : false;
    return message;
  },

  toJSON(message: GetSyncingResponse): unknown {
    const obj: any = {};
    message.syncing !== undefined && (obj.syncing = message.syncing);
    return obj;
  },

  fromPartial(object: DeepPartial<GetSyncingResponse>): GetSyncingResponse {
    const message = { ...baseGetSyncingResponse } as GetSyncingResponse;
    message.syncing = object.syncing ?? false;
    return message;
  },
};

const baseGetNodeInfoRequest: object = {};

export const GetNodeInfoRequest = {
  encode(
    _: GetNodeInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetNodeInfoRequest } as GetNodeInfoRequest;
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

  fromJSON(_: any): GetNodeInfoRequest {
    const message = { ...baseGetNodeInfoRequest } as GetNodeInfoRequest;
    return message;
  },

  toJSON(_: GetNodeInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetNodeInfoRequest>): GetNodeInfoRequest {
    const message = { ...baseGetNodeInfoRequest } as GetNodeInfoRequest;
    return message;
  },
};

const baseGetNodeInfoResponse: object = {};

export const GetNodeInfoResponse = {
  encode(
    message: GetNodeInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.defaultNodeInfo !== undefined) {
      DefaultNodeInfo.encode(
        message.defaultNodeInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.applicationVersion !== undefined) {
      VersionInfo.encode(
        message.applicationVersion,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetNodeInfoResponse } as GetNodeInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultNodeInfo = DefaultNodeInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNodeInfoResponse {
    const message = { ...baseGetNodeInfoResponse } as GetNodeInfoResponse;
    message.defaultNodeInfo =
      object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null
        ? DefaultNodeInfo.fromJSON(object.defaultNodeInfo)
        : undefined;
    message.applicationVersion =
      object.applicationVersion !== undefined &&
      object.applicationVersion !== null
        ? VersionInfo.fromJSON(object.applicationVersion)
        : undefined;
    return message;
  },

  toJSON(message: GetNodeInfoResponse): unknown {
    const obj: any = {};
    message.defaultNodeInfo !== undefined &&
      (obj.defaultNodeInfo = message.defaultNodeInfo
        ? DefaultNodeInfo.toJSON(message.defaultNodeInfo)
        : undefined);
    message.applicationVersion !== undefined &&
      (obj.applicationVersion = message.applicationVersion
        ? VersionInfo.toJSON(message.applicationVersion)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetNodeInfoResponse>): GetNodeInfoResponse {
    const message = { ...baseGetNodeInfoResponse } as GetNodeInfoResponse;
    message.defaultNodeInfo =
      object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null
        ? DefaultNodeInfo.fromPartial(object.defaultNodeInfo)
        : undefined;
    message.applicationVersion =
      object.applicationVersion !== undefined &&
      object.applicationVersion !== null
        ? VersionInfo.fromPartial(object.applicationVersion)
        : undefined;
    return message;
  },
};

const baseVersionInfo: object = {
  name: "",
  appName: "",
  version: "",
  gitCommit: "",
  buildTags: "",
  goVersion: "",
  cosmosSdkVersion: "",
};

export const VersionInfo = {
  encode(
    message: VersionInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    for (const v of message.buildDeps) {
      Module.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVersionInfo } as VersionInfo;
    message.buildDeps = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VersionInfo {
    const message = { ...baseVersionInfo } as VersionInfo;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.appName =
      object.appName !== undefined && object.appName !== null
        ? String(object.appName)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.gitCommit =
      object.gitCommit !== undefined && object.gitCommit !== null
        ? String(object.gitCommit)
        : "";
    message.buildTags =
      object.buildTags !== undefined && object.buildTags !== null
        ? String(object.buildTags)
        : "";
    message.goVersion =
      object.goVersion !== undefined && object.goVersion !== null
        ? String(object.goVersion)
        : "";
    message.buildDeps = (object.buildDeps ?? []).map((e: any) =>
      Module.fromJSON(e)
    );
    message.cosmosSdkVersion =
      object.cosmosSdkVersion !== undefined && object.cosmosSdkVersion !== null
        ? String(object.cosmosSdkVersion)
        : "";
    return message;
  },

  toJSON(message: VersionInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.appName !== undefined && (obj.appName = message.appName);
    message.version !== undefined && (obj.version = message.version);
    message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
    message.buildTags !== undefined && (obj.buildTags = message.buildTags);
    message.goVersion !== undefined && (obj.goVersion = message.goVersion);
    if (message.buildDeps) {
      obj.buildDeps = message.buildDeps.map((e) =>
        e ? Module.toJSON(e) : undefined
      );
    } else {
      obj.buildDeps = [];
    }
    message.cosmosSdkVersion !== undefined &&
      (obj.cosmosSdkVersion = message.cosmosSdkVersion);
    return obj;
  },

  fromPartial(object: DeepPartial<VersionInfo>): VersionInfo {
    const message = { ...baseVersionInfo } as VersionInfo;
    message.name = object.name ?? "";
    message.appName = object.appName ?? "";
    message.version = object.version ?? "";
    message.gitCommit = object.gitCommit ?? "";
    message.buildTags = object.buildTags ?? "";
    message.goVersion = object.goVersion ?? "";
    message.buildDeps = (object.buildDeps ?? []).map((e) =>
      Module.fromPartial(e)
    );
    message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
    return message;
  },
};

const baseModule: object = { path: "", version: "", sum: "" };

export const Module = {
  encode(
    message: Module,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModule } as Module;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Module {
    const message = { ...baseModule } as Module;
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.sum =
      object.sum !== undefined && object.sum !== null ? String(object.sum) : "";
    return message;
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.version !== undefined && (obj.version = message.version);
    message.sum !== undefined && (obj.sum = message.sum);
    return obj;
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = { ...baseModule } as Module;
    message.path = object.path ?? "";
    message.version = object.version ?? "";
    message.sum = object.sum ?? "";
    return message;
  },
};

const baseABCIQueryRequest: object = {
  path: "",
  height: Long.ZERO,
  prove: false,
};

export const ABCIQueryRequest = {
  encode(
    message: ABCIQueryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseABCIQueryRequest } as ABCIQueryRequest;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64() as Long;
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ABCIQueryRequest {
    const message = { ...baseABCIQueryRequest } as ABCIQueryRequest;
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.prove =
      object.prove !== undefined && object.prove !== null
        ? Boolean(object.prove)
        : false;
    return message;
  },

  toJSON(message: ABCIQueryRequest): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.path !== undefined && (obj.path = message.path);
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.prove !== undefined && (obj.prove = message.prove);
    return obj;
  },

  fromPartial(object: DeepPartial<ABCIQueryRequest>): ABCIQueryRequest {
    const message = { ...baseABCIQueryRequest } as ABCIQueryRequest;
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.prove = object.prove ?? false;
    return message;
  },
};

const baseABCIQueryResponse: object = {
  code: 0,
  log: "",
  info: "",
  index: Long.ZERO,
  height: Long.ZERO,
  codespace: "",
};

export const ABCIQueryResponse = {
  encode(
    message: ABCIQueryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseABCIQueryResponse } as ABCIQueryResponse;
    message.key = new Uint8Array();
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64() as Long;
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64() as Long;
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ABCIQueryResponse {
    const message = { ...baseABCIQueryResponse } as ABCIQueryResponse;
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    message.log =
      object.log !== undefined && object.log !== null ? String(object.log) : "";
    message.info =
      object.info !== undefined && object.info !== null
        ? String(object.info)
        : "";
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromString(object.index)
        : Long.ZERO;
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    message.proofOps =
      object.proofOps !== undefined && object.proofOps !== null
        ? ProofOps.fromJSON(object.proofOps)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.codespace =
      object.codespace !== undefined && object.codespace !== null
        ? String(object.codespace)
        : "";
    return message;
  },

  toJSON(message: ABCIQueryResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.index !== undefined &&
      (obj.index = (message.index || Long.ZERO).toString());
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    message.proofOps !== undefined &&
      (obj.proofOps = message.proofOps
        ? ProofOps.toJSON(message.proofOps)
        : undefined);
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },

  fromPartial(object: DeepPartial<ABCIQueryResponse>): ABCIQueryResponse {
    const message = { ...baseABCIQueryResponse } as ABCIQueryResponse;
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.ZERO;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps =
      object.proofOps !== undefined && object.proofOps !== null
        ? ProofOps.fromPartial(object.proofOps)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.codespace = object.codespace ?? "";
    return message;
  },
};

const baseProofOp: object = { type: "" };

export const ProofOp = {
  encode(
    message: ProofOp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofOp } as ProofOp;
    message.key = new Uint8Array();
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofOp {
    const message = { ...baseProofOp } as ProofOp;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ProofOp): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ProofOp>): ProofOp {
    const message = { ...baseProofOp } as ProofOp;
    message.type = object.type ?? "";
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

const baseProofOps: object = {};

export const ProofOps = {
  encode(
    message: ProofOps,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ops) {
      ProofOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofOps } as ProofOps;
    message.ops = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofOps {
    const message = { ...baseProofOps } as ProofOps;
    message.ops = (object.ops ?? []).map((e: any) => ProofOp.fromJSON(e));
    return message;
  },

  toJSON(message: ProofOps): unknown {
    const obj: any = {};
    if (message.ops) {
      obj.ops = message.ops.map((e) => (e ? ProofOp.toJSON(e) : undefined));
    } else {
      obj.ops = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProofOps>): ProofOps {
    const message = { ...baseProofOps } as ProofOps;
    message.ops = (object.ops ?? []).map((e) => ProofOp.fromPartial(e));
    return message;
  },
};

/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
  /** GetNodeInfo queries the current node info. */
  GetNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
  /** GetSyncing queries node syncing. */
  GetSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>;
  /** GetLatestBlock returns the latest block. */
  GetLatestBlock(
    request: GetLatestBlockRequest
  ): Promise<GetLatestBlockResponse>;
  /** GetBlockByHeight queries block for given height. */
  GetBlockByHeight(
    request: GetBlockByHeightRequest
  ): Promise<GetBlockByHeightResponse>;
  /** GetLatestValidatorSet queries latest validator-set. */
  GetLatestValidatorSet(
    request: GetLatestValidatorSetRequest
  ): Promise<GetLatestValidatorSetResponse>;
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  GetValidatorSetByHeight(
    request: GetValidatorSetByHeightRequest
  ): Promise<GetValidatorSetByHeightResponse>;
  /**
   * ABCIQuery defines a query handler that supports ABCI queries directly to the
   * application, bypassing Tendermint completely. The ABCI query must contain
   * a valid and supported path, including app, custom, p2p, and store.
   *
   * Since: cosmos-sdk 0.46
   */
  ABCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse>;
}

export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetNodeInfo = this.GetNodeInfo.bind(this);
    this.GetSyncing = this.GetSyncing.bind(this);
    this.GetLatestBlock = this.GetLatestBlock.bind(this);
    this.GetBlockByHeight = this.GetBlockByHeight.bind(this);
    this.GetLatestValidatorSet = this.GetLatestValidatorSet.bind(this);
    this.GetValidatorSetByHeight = this.GetValidatorSetByHeight.bind(this);
    this.ABCIQuery = this.ABCIQuery.bind(this);
  }
  GetNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse> {
    const data = GetNodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetNodeInfo",
      data
    );
    return promise.then((data) =>
      GetNodeInfoResponse.decode(new _m0.Reader(data))
    );
  }

  GetSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse> {
    const data = GetSyncingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetSyncing",
      data
    );
    return promise.then((data) =>
      GetSyncingResponse.decode(new _m0.Reader(data))
    );
  }

  GetLatestBlock(
    request: GetLatestBlockRequest
  ): Promise<GetLatestBlockResponse> {
    const data = GetLatestBlockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetLatestBlock",
      data
    );
    return promise.then((data) =>
      GetLatestBlockResponse.decode(new _m0.Reader(data))
    );
  }

  GetBlockByHeight(
    request: GetBlockByHeightRequest
  ): Promise<GetBlockByHeightResponse> {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetBlockByHeight",
      data
    );
    return promise.then((data) =>
      GetBlockByHeightResponse.decode(new _m0.Reader(data))
    );
  }

  GetLatestValidatorSet(
    request: GetLatestValidatorSetRequest
  ): Promise<GetLatestValidatorSetResponse> {
    const data = GetLatestValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetLatestValidatorSet",
      data
    );
    return promise.then((data) =>
      GetLatestValidatorSetResponse.decode(new _m0.Reader(data))
    );
  }

  GetValidatorSetByHeight(
    request: GetValidatorSetByHeightRequest
  ): Promise<GetValidatorSetByHeightResponse> {
    const data = GetValidatorSetByHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetValidatorSetByHeight",
      data
    );
    return promise.then((data) =>
      GetValidatorSetByHeightResponse.decode(new _m0.Reader(data))
    );
  }

  ABCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse> {
    const data = ABCIQueryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "ABCIQuery",
      data
    );
    return promise.then((data) =>
      ABCIQueryResponse.decode(new _m0.Reader(data))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
