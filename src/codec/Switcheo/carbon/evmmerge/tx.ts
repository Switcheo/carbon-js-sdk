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

export interface MsgMergeAccountResponse {}

const baseMsgMergeAccount: object = { creator: "", pubKey: "" };

export const MsgMergeAccount = {
  encode(
    message: MsgMergeAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }
    if (message.pubKeySig !== undefined) {
      StringValue.encode(
        { value: message.pubKeySig! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMergeAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMergeAccount } as MsgMergeAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pubKey = reader.string();
          break;
        case 4:
          message.pubKeySig = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMergeAccount {
    const message = { ...baseMsgMergeAccount } as MsgMergeAccount;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? String(object.pubKey)
        : "";
    message.pubKeySig =
      object.pubKeySig !== undefined && object.pubKeySig !== null
        ? String(object.pubKeySig)
        : undefined;
    return message;
  },

  toJSON(message: MsgMergeAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    message.pubKeySig !== undefined && (obj.pubKeySig = message.pubKeySig);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMergeAccount>): MsgMergeAccount {
    const message = { ...baseMsgMergeAccount } as MsgMergeAccount;
    message.creator = object.creator ?? "";
    message.pubKey = object.pubKey ?? "";
    message.pubKeySig = object.pubKeySig ?? undefined;
    return message;
  },
};

const baseMsgMergeAccountResponse: object = {};

export const MsgMergeAccountResponse = {
  encode(
    _: MsgMergeAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMergeAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMergeAccountResponse,
    } as MsgMergeAccountResponse;
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

  fromJSON(_: any): MsgMergeAccountResponse {
    const message = {
      ...baseMsgMergeAccountResponse,
    } as MsgMergeAccountResponse;
    return message;
  },

  toJSON(_: MsgMergeAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgMergeAccountResponse>
  ): MsgMergeAccountResponse {
    const message = {
      ...baseMsgMergeAccountResponse,
    } as MsgMergeAccountResponse;
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
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MergeAccount = this.MergeAccount.bind(this);
  }
  MergeAccount(request: MsgMergeAccount): Promise<MsgMergeAccountResponse> {
    const data = MsgMergeAccount.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmmerge.Msg",
      "MergeAccount",
      data
    );
    return promise.then((data) =>
      MsgMergeAccountResponse.decode(new _m0.Reader(data))
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
