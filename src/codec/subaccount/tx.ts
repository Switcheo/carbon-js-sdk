/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.subaccount";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateSubAccount {
  creator: string;
  subAddress: string;
}

export interface MsgCreateSubAccountResponse {}

export interface MsgActivateSubAccount {
  creator: string;
  expectedMainAccount: string;
}

export interface MsgActivateSubAccountResponse {}

export interface MsgRemoveSubAccount {
  creator: string;
  subAddress: string;
}

export interface MsgRemoveSubAccountResponse {}

const baseMsgCreateSubAccount: object = { creator: "", subAddress: "" };

export const MsgCreateSubAccount = {
  encode(
    message: MsgCreateSubAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subAddress !== "") {
      writer.uint32(18).string(message.subAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSubAccount } as MsgCreateSubAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSubAccount {
    const message = { ...baseMsgCreateSubAccount } as MsgCreateSubAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.subAddress !== undefined && object.subAddress !== null) {
      message.subAddress = String(object.subAddress);
    } else {
      message.subAddress = "";
    }
    return message;
  },

  toJSON(message: MsgCreateSubAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSubAccount>): MsgCreateSubAccount {
    const message = { ...baseMsgCreateSubAccount } as MsgCreateSubAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.subAddress !== undefined && object.subAddress !== null) {
      message.subAddress = object.subAddress;
    } else {
      message.subAddress = "";
    }
    return message;
  },
};

const baseMsgCreateSubAccountResponse: object = {};

export const MsgCreateSubAccountResponse = {
  encode(
    _: MsgCreateSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSubAccountResponse,
    } as MsgCreateSubAccountResponse;
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

  fromJSON(_: any): MsgCreateSubAccountResponse {
    const message = {
      ...baseMsgCreateSubAccountResponse,
    } as MsgCreateSubAccountResponse;
    return message;
  },

  toJSON(_: MsgCreateSubAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateSubAccountResponse>
  ): MsgCreateSubAccountResponse {
    const message = {
      ...baseMsgCreateSubAccountResponse,
    } as MsgCreateSubAccountResponse;
    return message;
  },
};

const baseMsgActivateSubAccount: object = {
  creator: "",
  expectedMainAccount: "",
};

export const MsgActivateSubAccount = {
  encode(
    message: MsgActivateSubAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.expectedMainAccount !== "") {
      writer.uint32(18).string(message.expectedMainAccount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgActivateSubAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgActivateSubAccount } as MsgActivateSubAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.expectedMainAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgActivateSubAccount {
    const message = { ...baseMsgActivateSubAccount } as MsgActivateSubAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.expectedMainAccount !== undefined &&
      object.expectedMainAccount !== null
    ) {
      message.expectedMainAccount = String(object.expectedMainAccount);
    } else {
      message.expectedMainAccount = "";
    }
    return message;
  },

  toJSON(message: MsgActivateSubAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.expectedMainAccount !== undefined &&
      (obj.expectedMainAccount = message.expectedMainAccount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgActivateSubAccount>
  ): MsgActivateSubAccount {
    const message = { ...baseMsgActivateSubAccount } as MsgActivateSubAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.expectedMainAccount !== undefined &&
      object.expectedMainAccount !== null
    ) {
      message.expectedMainAccount = object.expectedMainAccount;
    } else {
      message.expectedMainAccount = "";
    }
    return message;
  },
};

const baseMsgActivateSubAccountResponse: object = {};

export const MsgActivateSubAccountResponse = {
  encode(
    _: MsgActivateSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgActivateSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgActivateSubAccountResponse,
    } as MsgActivateSubAccountResponse;
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

  fromJSON(_: any): MsgActivateSubAccountResponse {
    const message = {
      ...baseMsgActivateSubAccountResponse,
    } as MsgActivateSubAccountResponse;
    return message;
  },

  toJSON(_: MsgActivateSubAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgActivateSubAccountResponse>
  ): MsgActivateSubAccountResponse {
    const message = {
      ...baseMsgActivateSubAccountResponse,
    } as MsgActivateSubAccountResponse;
    return message;
  },
};

const baseMsgRemoveSubAccount: object = { creator: "", subAddress: "" };

export const MsgRemoveSubAccount = {
  encode(
    message: MsgRemoveSubAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subAddress !== "") {
      writer.uint32(18).string(message.subAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveSubAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveSubAccount } as MsgRemoveSubAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveSubAccount {
    const message = { ...baseMsgRemoveSubAccount } as MsgRemoveSubAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.subAddress !== undefined && object.subAddress !== null) {
      message.subAddress = String(object.subAddress);
    } else {
      message.subAddress = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveSubAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveSubAccount>): MsgRemoveSubAccount {
    const message = { ...baseMsgRemoveSubAccount } as MsgRemoveSubAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.subAddress !== undefined && object.subAddress !== null) {
      message.subAddress = object.subAddress;
    } else {
      message.subAddress = "";
    }
    return message;
  },
};

const baseMsgRemoveSubAccountResponse: object = {};

export const MsgRemoveSubAccountResponse = {
  encode(
    _: MsgRemoveSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveSubAccountResponse,
    } as MsgRemoveSubAccountResponse;
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

  fromJSON(_: any): MsgRemoveSubAccountResponse {
    const message = {
      ...baseMsgRemoveSubAccountResponse,
    } as MsgRemoveSubAccountResponse;
    return message;
  },

  toJSON(_: MsgRemoveSubAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveSubAccountResponse>
  ): MsgRemoveSubAccountResponse {
    const message = {
      ...baseMsgRemoveSubAccountResponse,
    } as MsgRemoveSubAccountResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateSubAccount(
    request: MsgCreateSubAccount
  ): Promise<MsgCreateSubAccountResponse>;
  ActivateSubAccount(
    request: MsgActivateSubAccount
  ): Promise<MsgActivateSubAccountResponse>;
  RemoveSubAccount(
    request: MsgRemoveSubAccount
  ): Promise<MsgRemoveSubAccountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateSubAccount = this.CreateSubAccount.bind(this);
    this.ActivateSubAccount = this.ActivateSubAccount.bind(this);
    this.RemoveSubAccount = this.RemoveSubAccount.bind(this);
  }
  CreateSubAccount(
    request: MsgCreateSubAccount
  ): Promise<MsgCreateSubAccountResponse> {
    const data = MsgCreateSubAccount.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Msg",
      "CreateSubAccount",
      data
    );
    return promise.then((data) =>
      MsgCreateSubAccountResponse.decode(new _m0.Reader(data))
    );
  }

  ActivateSubAccount(
    request: MsgActivateSubAccount
  ): Promise<MsgActivateSubAccountResponse> {
    const data = MsgActivateSubAccount.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Msg",
      "ActivateSubAccount",
      data
    );
    return promise.then((data) =>
      MsgActivateSubAccountResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveSubAccount(
    request: MsgRemoveSubAccount
  ): Promise<MsgRemoveSubAccountResponse> {
    const data = MsgRemoveSubAccount.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Msg",
      "RemoveSubAccount",
      data
    );
    return promise.then((data) =>
      MsgRemoveSubAccountResponse.decode(new _m0.Reader(data))
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
