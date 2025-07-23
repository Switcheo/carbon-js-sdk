/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StringValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.evmmerge";

export interface MsgMergeAccount {
  /**
   * bech32 ETH address if coming from EIP-712, bech32 cosmos address if coming
   * from typical cosmos tx
   */
  creator: string;
  /**
   * Compressed Public key in hex eg
   * 034a1e1f95ebb49bc59b3c2d60afbb4c2fb2b77cd1f1e2322123fdacaa3d12f7a9
   */
  pubKey: string;
  /** hex representation of the pub key signature */
  pubKeySig?: string;
}

export interface MsgMergeAccountResponse {
}

function createBaseMsgMergeAccount(): MsgMergeAccount {
  return { creator: "", pubKey: "", pubKeySig: undefined };
}

export const MsgMergeAccount = {
  encode(message: MsgMergeAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }
    if (message.pubKeySig !== undefined) {
      StringValue.encode({ value: message.pubKeySig! }, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMergeAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMergeAccount();
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
          if (tag !== 18) {
            break;
          }

          message.pubKey = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pubKeySig = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMergeAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      pubKeySig: isSet(object.pubKeySig) ? String(object.pubKeySig) : undefined,
    };
  },

  toJSON(message: MsgMergeAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    message.pubKeySig !== undefined && (obj.pubKeySig = message.pubKeySig);
    return obj;
  },

  create(base?: DeepPartial<MsgMergeAccount>): MsgMergeAccount {
    return MsgMergeAccount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgMergeAccount>): MsgMergeAccount {
    const message = createBaseMsgMergeAccount();
    message.creator = object.creator ?? "";
    message.pubKey = object.pubKey ?? "";
    message.pubKeySig = object.pubKeySig ?? undefined;
    return message;
  },
};

function createBaseMsgMergeAccountResponse(): MsgMergeAccountResponse {
  return {};
}

export const MsgMergeAccountResponse = {
  encode(_: MsgMergeAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMergeAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMergeAccountResponse();
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

  fromJSON(_: any): MsgMergeAccountResponse {
    return {};
  },

  toJSON(_: MsgMergeAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgMergeAccountResponse>): MsgMergeAccountResponse {
    return MsgMergeAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgMergeAccountResponse>): MsgMergeAccountResponse {
    const message = createBaseMsgMergeAccountResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  MergeAccount(request: MsgMergeAccount): Promise<MsgMergeAccountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.evmmerge.Msg";
    this.rpc = rpc;
    this.MergeAccount = this.MergeAccount.bind(this);
  }
  MergeAccount(request: MsgMergeAccount): Promise<MsgMergeAccountResponse> {
    const data = MsgMergeAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "MergeAccount", data);
    return promise.then((data) => MsgMergeAccountResponse.decode(_m0.Reader.create(data)));
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
