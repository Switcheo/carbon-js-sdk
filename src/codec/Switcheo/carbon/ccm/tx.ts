/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.ccm";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgProcessCrossChainTx {
  submitter: string;
  fromChainId: Long;
  proof: string;
  header: string;
  headerProof: string;
  currentHeader: string;
}

export interface MsgProcessCrossChainTxResponse {
}

/** MsgCreateEmitEvent was removed, but leaving this as legacy record */
export interface MsgCreateEmitEvent {
  creator: string;
  toChainId: Long;
  crossChainId: Long;
}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgProcessCrossChainTx(): MsgProcessCrossChainTx {
  return { submitter: "", fromChainId: Long.UZERO, proof: "", header: "", headerProof: "", currentHeader: "" };
}

export const MsgProcessCrossChainTx = {
  encode(message: MsgProcessCrossChainTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (!message.fromChainId.isZero()) {
      writer.uint32(16).uint64(message.fromChainId);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    if (message.header !== "") {
      writer.uint32(34).string(message.header);
    }
    if (message.headerProof !== "") {
      writer.uint32(42).string(message.headerProof);
    }
    if (message.currentHeader !== "") {
      writer.uint32(50).string(message.currentHeader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProcessCrossChainTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessCrossChainTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.submitter = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromChainId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.header = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.headerProof = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.currentHeader = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgProcessCrossChainTx {
    return {
      submitter: isSet(object.submitter) ? String(object.submitter) : "",
      fromChainId: isSet(object.fromChainId) ? Long.fromValue(object.fromChainId) : Long.UZERO,
      proof: isSet(object.proof) ? String(object.proof) : "",
      header: isSet(object.header) ? String(object.header) : "",
      headerProof: isSet(object.headerProof) ? String(object.headerProof) : "",
      currentHeader: isSet(object.currentHeader) ? String(object.currentHeader) : "",
    };
  },

  toJSON(message: MsgProcessCrossChainTx): unknown {
    const obj: any = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.fromChainId !== undefined && (obj.fromChainId = (message.fromChainId || Long.UZERO).toString());
    message.proof !== undefined && (obj.proof = message.proof);
    message.header !== undefined && (obj.header = message.header);
    message.headerProof !== undefined && (obj.headerProof = message.headerProof);
    message.currentHeader !== undefined && (obj.currentHeader = message.currentHeader);
    return obj;
  },

  create(base?: DeepPartial<MsgProcessCrossChainTx>): MsgProcessCrossChainTx {
    return MsgProcessCrossChainTx.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgProcessCrossChainTx>): MsgProcessCrossChainTx {
    const message = createBaseMsgProcessCrossChainTx();
    message.submitter = object.submitter ?? "";
    message.fromChainId = (object.fromChainId !== undefined && object.fromChainId !== null)
      ? Long.fromValue(object.fromChainId)
      : Long.UZERO;
    message.proof = object.proof ?? "";
    message.header = object.header ?? "";
    message.headerProof = object.headerProof ?? "";
    message.currentHeader = object.currentHeader ?? "";
    return message;
  },
};

function createBaseMsgProcessCrossChainTxResponse(): MsgProcessCrossChainTxResponse {
  return {};
}

export const MsgProcessCrossChainTxResponse = {
  encode(_: MsgProcessCrossChainTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProcessCrossChainTxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessCrossChainTxResponse();
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

  fromJSON(_: any): MsgProcessCrossChainTxResponse {
    return {};
  },

  toJSON(_: MsgProcessCrossChainTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgProcessCrossChainTxResponse>): MsgProcessCrossChainTxResponse {
    return MsgProcessCrossChainTxResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgProcessCrossChainTxResponse>): MsgProcessCrossChainTxResponse {
    const message = createBaseMsgProcessCrossChainTxResponse();
    return message;
  },
};

function createBaseMsgCreateEmitEvent(): MsgCreateEmitEvent {
  return { creator: "", toChainId: Long.UZERO, crossChainId: Long.UZERO };
}

export const MsgCreateEmitEvent = {
  encode(message: MsgCreateEmitEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.toChainId.isZero()) {
      writer.uint32(16).uint64(message.toChainId);
    }
    if (!message.crossChainId.isZero()) {
      writer.uint32(24).uint64(message.crossChainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEmitEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEmitEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.toChainId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.crossChainId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateEmitEvent {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      toChainId: isSet(object.toChainId) ? Long.fromValue(object.toChainId) : Long.UZERO,
      crossChainId: isSet(object.crossChainId) ? Long.fromValue(object.crossChainId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateEmitEvent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.toChainId !== undefined && (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.crossChainId !== undefined && (obj.crossChainId = (message.crossChainId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgCreateEmitEvent>): MsgCreateEmitEvent {
    return MsgCreateEmitEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateEmitEvent>): MsgCreateEmitEvent {
    const message = createBaseMsgCreateEmitEvent();
    message.creator = object.creator ?? "";
    message.toChainId = (object.toChainId !== undefined && object.toChainId !== null)
      ? Long.fromValue(object.toChainId)
      : Long.UZERO;
    message.crossChainId = (object.crossChainId !== undefined && object.crossChainId !== null)
      ? Long.fromValue(object.crossChainId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? ParamsToUpdate.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? ParamsToUpdate.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ParamsToUpdate.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Process(request: MsgProcessCrossChainTx): Promise<MsgProcessCrossChainTxResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.ccm.Msg";
    this.rpc = rpc;
    this.Process = this.Process.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  Process(request: MsgProcessCrossChainTx): Promise<MsgProcessCrossChainTxResponse> {
    const data = MsgProcessCrossChainTx.encode(request).finish();
    const promise = this.rpc.request(this.service, "Process", data);
    return promise.then((data) => MsgProcessCrossChainTxResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
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
