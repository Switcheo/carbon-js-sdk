/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Process(
    request: MsgProcessCrossChainTx
  ): Promise<MsgProcessCrossChainTxResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Process = this.Process.bind(this);
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
