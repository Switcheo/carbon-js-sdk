/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.headersync";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSyncGenesis {
  syncer: string;
  genesisHeader: string;
}

export interface MsgSyncGenesisResponse {}

export interface MsgSyncHeaders {
  syncer: string;
  headers: string[];
}

export interface MsgSyncHeadersResponse {}

const baseMsgSyncGenesis: object = { syncer: "", genesisHeader: "" };

export const MsgSyncGenesis = {
  encode(
    message: MsgSyncGenesis,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.syncer !== "") {
      writer.uint32(10).string(message.syncer);
    }
    if (message.genesisHeader !== "") {
      writer.uint32(18).string(message.genesisHeader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncGenesis {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSyncGenesis } as MsgSyncGenesis;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncer = reader.string();
          break;
        case 2:
          message.genesisHeader = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSyncGenesis {
    const message = { ...baseMsgSyncGenesis } as MsgSyncGenesis;
    message.syncer =
      object.syncer !== undefined && object.syncer !== null
        ? String(object.syncer)
        : "";
    message.genesisHeader =
      object.genesisHeader !== undefined && object.genesisHeader !== null
        ? String(object.genesisHeader)
        : "";
    return message;
  },

  toJSON(message: MsgSyncGenesis): unknown {
    const obj: any = {};
    message.syncer !== undefined && (obj.syncer = message.syncer);
    message.genesisHeader !== undefined &&
      (obj.genesisHeader = message.genesisHeader);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSyncGenesis>): MsgSyncGenesis {
    const message = { ...baseMsgSyncGenesis } as MsgSyncGenesis;
    message.syncer = object.syncer ?? "";
    message.genesisHeader = object.genesisHeader ?? "";
    return message;
  },
};

const baseMsgSyncGenesisResponse: object = {};

export const MsgSyncGenesisResponse = {
  encode(
    _: MsgSyncGenesisResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSyncGenesisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSyncGenesisResponse } as MsgSyncGenesisResponse;
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

  fromJSON(_: any): MsgSyncGenesisResponse {
    const message = { ...baseMsgSyncGenesisResponse } as MsgSyncGenesisResponse;
    return message;
  },

  toJSON(_: MsgSyncGenesisResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSyncGenesisResponse>): MsgSyncGenesisResponse {
    const message = { ...baseMsgSyncGenesisResponse } as MsgSyncGenesisResponse;
    return message;
  },
};

const baseMsgSyncHeaders: object = { syncer: "", headers: "" };

export const MsgSyncHeaders = {
  encode(
    message: MsgSyncHeaders,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.syncer !== "") {
      writer.uint32(10).string(message.syncer);
    }
    for (const v of message.headers) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncHeaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSyncHeaders } as MsgSyncHeaders;
    message.headers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncer = reader.string();
          break;
        case 2:
          message.headers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSyncHeaders {
    const message = { ...baseMsgSyncHeaders } as MsgSyncHeaders;
    message.syncer =
      object.syncer !== undefined && object.syncer !== null
        ? String(object.syncer)
        : "";
    message.headers = (object.headers ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgSyncHeaders): unknown {
    const obj: any = {};
    message.syncer !== undefined && (obj.syncer = message.syncer);
    if (message.headers) {
      obj.headers = message.headers.map((e) => e);
    } else {
      obj.headers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSyncHeaders>): MsgSyncHeaders {
    const message = { ...baseMsgSyncHeaders } as MsgSyncHeaders;
    message.syncer = object.syncer ?? "";
    message.headers = (object.headers ?? []).map((e) => e);
    return message;
  },
};

const baseMsgSyncHeadersResponse: object = {};

export const MsgSyncHeadersResponse = {
  encode(
    _: MsgSyncHeadersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSyncHeadersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSyncHeadersResponse } as MsgSyncHeadersResponse;
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

  fromJSON(_: any): MsgSyncHeadersResponse {
    const message = { ...baseMsgSyncHeadersResponse } as MsgSyncHeadersResponse;
    return message;
  },

  toJSON(_: MsgSyncHeadersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSyncHeadersResponse>): MsgSyncHeadersResponse {
    const message = { ...baseMsgSyncHeadersResponse } as MsgSyncHeadersResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SyncGenesis(request: MsgSyncGenesis): Promise<MsgSyncGenesisResponse>;
  SyncHeaders(request: MsgSyncHeaders): Promise<MsgSyncHeadersResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SyncGenesis = this.SyncGenesis.bind(this);
    this.SyncHeaders = this.SyncHeaders.bind(this);
  }
  SyncGenesis(request: MsgSyncGenesis): Promise<MsgSyncGenesisResponse> {
    const data = MsgSyncGenesis.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.headersync.Msg",
      "SyncGenesis",
      data
    );
    return promise.then((data) =>
      MsgSyncGenesisResponse.decode(new _m0.Reader(data))
    );
  }

  SyncHeaders(request: MsgSyncHeaders): Promise<MsgSyncHeadersResponse> {
    const data = MsgSyncHeaders.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.headersync.Msg",
      "SyncHeaders",
      data
    );
    return promise.then((data) =>
      MsgSyncHeadersResponse.decode(new _m0.Reader(data))
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
