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

export interface MsgProcessCrossChainTxResponse {}

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
export interface MsgUpdateParamsResponse {}

const baseMsgProcessCrossChainTx: object = {
  submitter: "",
  fromChainId: Long.UZERO,
  proof: "",
  header: "",
  headerProof: "",
  currentHeader: "",
};

export const MsgProcessCrossChainTx = {
  encode(
    message: MsgProcessCrossChainTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgProcessCrossChainTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgProcessCrossChainTx } as MsgProcessCrossChainTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.fromChainId = reader.uint64() as Long;
          break;
        case 3:
          message.proof = reader.string();
          break;
        case 4:
          message.header = reader.string();
          break;
        case 5:
          message.headerProof = reader.string();
          break;
        case 6:
          message.currentHeader = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgProcessCrossChainTx {
    const message = { ...baseMsgProcessCrossChainTx } as MsgProcessCrossChainTx;
    message.submitter =
      object.submitter !== undefined && object.submitter !== null
        ? String(object.submitter)
        : "";
    message.fromChainId =
      object.fromChainId !== undefined && object.fromChainId !== null
        ? Long.fromString(object.fromChainId)
        : Long.UZERO;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? String(object.proof)
        : "";
    message.header =
      object.header !== undefined && object.header !== null
        ? String(object.header)
        : "";
    message.headerProof =
      object.headerProof !== undefined && object.headerProof !== null
        ? String(object.headerProof)
        : "";
    message.currentHeader =
      object.currentHeader !== undefined && object.currentHeader !== null
        ? String(object.currentHeader)
        : "";
    return message;
  },

  toJSON(message: MsgProcessCrossChainTx): unknown {
    const obj: any = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.fromChainId !== undefined &&
      (obj.fromChainId = (message.fromChainId || Long.UZERO).toString());
    message.proof !== undefined && (obj.proof = message.proof);
    message.header !== undefined && (obj.header = message.header);
    message.headerProof !== undefined &&
      (obj.headerProof = message.headerProof);
    message.currentHeader !== undefined &&
      (obj.currentHeader = message.currentHeader);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgProcessCrossChainTx>
  ): MsgProcessCrossChainTx {
    const message = { ...baseMsgProcessCrossChainTx } as MsgProcessCrossChainTx;
    message.submitter = object.submitter ?? "";
    message.fromChainId =
      object.fromChainId !== undefined && object.fromChainId !== null
        ? Long.fromValue(object.fromChainId)
        : Long.UZERO;
    message.proof = object.proof ?? "";
    message.header = object.header ?? "";
    message.headerProof = object.headerProof ?? "";
    message.currentHeader = object.currentHeader ?? "";
    return message;
  },
};

const baseMsgProcessCrossChainTxResponse: object = {};

export const MsgProcessCrossChainTxResponse = {
  encode(
    _: MsgProcessCrossChainTxResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgProcessCrossChainTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgProcessCrossChainTxResponse,
    } as MsgProcessCrossChainTxResponse;
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

  fromJSON(_: any): MsgProcessCrossChainTxResponse {
    const message = {
      ...baseMsgProcessCrossChainTxResponse,
    } as MsgProcessCrossChainTxResponse;
    return message;
  },

  toJSON(_: MsgProcessCrossChainTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgProcessCrossChainTxResponse>
  ): MsgProcessCrossChainTxResponse {
    const message = {
      ...baseMsgProcessCrossChainTxResponse,
    } as MsgProcessCrossChainTxResponse;
    return message;
  },
};

const baseMsgCreateEmitEvent: object = {
  creator: "",
  toChainId: Long.UZERO,
  crossChainId: Long.UZERO,
};

export const MsgCreateEmitEvent = {
  encode(
    message: MsgCreateEmitEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateEmitEvent } as MsgCreateEmitEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.toChainId = reader.uint64() as Long;
          break;
        case 3:
          message.crossChainId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateEmitEvent {
    const message = { ...baseMsgCreateEmitEvent } as MsgCreateEmitEvent;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromString(object.toChainId)
        : Long.UZERO;
    message.crossChainId =
      object.crossChainId !== undefined && object.crossChainId !== null
        ? Long.fromString(object.crossChainId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgCreateEmitEvent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.toChainId !== undefined &&
      (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.crossChainId !== undefined &&
      (obj.crossChainId = (message.crossChainId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateEmitEvent>): MsgCreateEmitEvent {
    const message = { ...baseMsgCreateEmitEvent } as MsgCreateEmitEvent;
    message.creator = object.creator ?? "";
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromValue(object.toChainId)
        : Long.UZERO;
    message.crossChainId =
      object.crossChainId !== undefined && object.crossChainId !== null
        ? Long.fromValue(object.crossChainId)
        : Long.UZERO;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params
        ? ParamsToUpdate.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Process(
    request: MsgProcessCrossChainTx
  ): Promise<MsgProcessCrossChainTxResponse>;
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
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Process = this.Process.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  Process(
    request: MsgProcessCrossChainTx
  ): Promise<MsgProcessCrossChainTxResponse> {
    const data = MsgProcessCrossChainTx.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.ccm.Msg",
      "Process",
      data
    );
    return promise.then((data) =>
      MsgProcessCrossChainTxResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.ccm.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
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
