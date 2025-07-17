/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.headersync";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSyncGenesis {
  syncer: string;
  genesisHeader: string;
}

export interface MsgSyncGenesisResponse {
}

export interface MsgSyncHeaders {
  syncer: string;
  headers: string[];
}

export interface MsgSyncHeadersResponse {
}

function createBaseMsgSyncGenesis(): MsgSyncGenesis {
  return { syncer: "", genesisHeader: "" };
}

export const MsgSyncGenesis = {
  encode(message: MsgSyncGenesis, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syncer !== "") {
      writer.uint32(10).string(message.syncer);
    }
    if (message.genesisHeader !== "") {
      writer.uint32(18).string(message.genesisHeader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncGenesis {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSyncGenesis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.syncer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.genesisHeader = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSyncGenesis {
    return {
      syncer: isSet(object.syncer) ? String(object.syncer) : "",
      genesisHeader: isSet(object.genesisHeader) ? String(object.genesisHeader) : "",
    };
  },

  toJSON(message: MsgSyncGenesis): unknown {
    const obj: any = {};
    message.syncer !== undefined && (obj.syncer = message.syncer);
    message.genesisHeader !== undefined && (obj.genesisHeader = message.genesisHeader);
    return obj;
  },

  create(base?: DeepPartial<MsgSyncGenesis>): MsgSyncGenesis {
    return MsgSyncGenesis.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSyncGenesis>): MsgSyncGenesis {
    const message = createBaseMsgSyncGenesis();
    message.syncer = object.syncer ?? "";
    message.genesisHeader = object.genesisHeader ?? "";
    return message;
  },
};

function createBaseMsgSyncGenesisResponse(): MsgSyncGenesisResponse {
  return {};
}

export const MsgSyncGenesisResponse = {
  encode(_: MsgSyncGenesisResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncGenesisResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSyncGenesisResponse();
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

  fromJSON(_: any): MsgSyncGenesisResponse {
    return {};
  },

  toJSON(_: MsgSyncGenesisResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSyncGenesisResponse>): MsgSyncGenesisResponse {
    return MsgSyncGenesisResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSyncGenesisResponse>): MsgSyncGenesisResponse {
    const message = createBaseMsgSyncGenesisResponse();
    return message;
  },
};

function createBaseMsgSyncHeaders(): MsgSyncHeaders {
  return { syncer: "", headers: [] };
}

export const MsgSyncHeaders = {
  encode(message: MsgSyncHeaders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syncer !== "") {
      writer.uint32(10).string(message.syncer);
    }
    for (const v of message.headers) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncHeaders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSyncHeaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.syncer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.headers.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSyncHeaders {
    return {
      syncer: isSet(object.syncer) ? String(object.syncer) : "",
      headers: Array.isArray(object?.headers) ? object.headers.map((e: any) => String(e)) : [],
    };
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

  create(base?: DeepPartial<MsgSyncHeaders>): MsgSyncHeaders {
    return MsgSyncHeaders.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSyncHeaders>): MsgSyncHeaders {
    const message = createBaseMsgSyncHeaders();
    message.syncer = object.syncer ?? "";
    message.headers = object.headers?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgSyncHeadersResponse(): MsgSyncHeadersResponse {
  return {};
}

export const MsgSyncHeadersResponse = {
  encode(_: MsgSyncHeadersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncHeadersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSyncHeadersResponse();
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

  fromJSON(_: any): MsgSyncHeadersResponse {
    return {};
  },

  toJSON(_: MsgSyncHeadersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSyncHeadersResponse>): MsgSyncHeadersResponse {
    return MsgSyncHeadersResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSyncHeadersResponse>): MsgSyncHeadersResponse {
    const message = createBaseMsgSyncHeadersResponse();
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
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.headersync.Msg";
    this.rpc = rpc;
    this.SyncGenesis = this.SyncGenesis.bind(this);
    this.SyncHeaders = this.SyncHeaders.bind(this);
  }
  SyncGenesis(request: MsgSyncGenesis): Promise<MsgSyncGenesisResponse> {
    const data = MsgSyncGenesis.encode(request).finish();
    const promise = this.rpc.request(this.service, "SyncGenesis", data);
    return promise.then((data) => MsgSyncGenesisResponse.decode(_m0.Reader.create(data)));
  }

  SyncHeaders(request: MsgSyncHeaders): Promise<MsgSyncHeadersResponse> {
    const data = MsgSyncHeaders.encode(request).finish();
    const promise = this.rpc.request(this.service, "SyncHeaders", data);
    return promise.then((data) => MsgSyncHeadersResponse.decode(_m0.Reader.create(data)));
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
