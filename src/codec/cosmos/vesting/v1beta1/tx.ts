/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
import { Period } from "./vesting";

export const protobufPackage = "cosmos.vesting.v1beta1";

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  /** end of vesting as unix time (in seconds). */
  endTime: Long;
  delayed: boolean;
}

/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {}

/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}

/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountResponse {}

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccount {
  fromAddress: string;
  toAddress: string;
  /** start of vesting as unix time (in seconds). */
  startTime: Long;
  vestingPeriods: Period[];
}

/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountResponse {}

const baseMsgCreateVestingAccount: object = {
  fromAddress: "",
  toAddress: "",
  endTime: Long.ZERO,
  delayed: false,
};

export const MsgCreateVestingAccount = {
  encode(
    message: MsgCreateVestingAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateVestingAccount,
    } as MsgCreateVestingAccount;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = reader.int64() as Long;
          break;
        case 5:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVestingAccount {
    const message = {
      ...baseMsgCreateVestingAccount,
    } as MsgCreateVestingAccount;
    message.fromAddress =
      object.fromAddress !== undefined && object.fromAddress !== null
        ? String(object.fromAddress)
        : "";
    message.toAddress =
      object.toAddress !== undefined && object.toAddress !== null
        ? String(object.toAddress)
        : "";
    message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? Long.fromString(object.endTime)
        : Long.ZERO;
    message.delayed =
      object.delayed !== undefined && object.delayed !== null
        ? Boolean(object.delayed)
        : false;
    return message;
  },

  toJSON(message: MsgCreateVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.endTime !== undefined &&
      (obj.endTime = (message.endTime || Long.ZERO).toString());
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateVestingAccount>
  ): MsgCreateVestingAccount {
    const message = {
      ...baseMsgCreateVestingAccount,
    } as MsgCreateVestingAccount;
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = (object.amount ?? []).map((e) => Coin.fromPartial(e));
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? Long.fromValue(object.endTime)
        : Long.ZERO;
    message.delayed = object.delayed ?? false;
    return message;
  },
};

const baseMsgCreateVestingAccountResponse: object = {};

export const MsgCreateVestingAccountResponse = {
  encode(
    _: MsgCreateVestingAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateVestingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateVestingAccountResponse,
    } as MsgCreateVestingAccountResponse;
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

  fromJSON(_: any): MsgCreateVestingAccountResponse {
    const message = {
      ...baseMsgCreateVestingAccountResponse,
    } as MsgCreateVestingAccountResponse;
    return message;
  },

  toJSON(_: MsgCreateVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateVestingAccountResponse>
  ): MsgCreateVestingAccountResponse {
    const message = {
      ...baseMsgCreateVestingAccountResponse,
    } as MsgCreateVestingAccountResponse;
    return message;
  },
};

const baseMsgCreatePermanentLockedAccount: object = {
  fromAddress: "",
  toAddress: "",
};

export const MsgCreatePermanentLockedAccount = {
  encode(
    message: MsgCreatePermanentLockedAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePermanentLockedAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePermanentLockedAccount,
    } as MsgCreatePermanentLockedAccount;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePermanentLockedAccount {
    const message = {
      ...baseMsgCreatePermanentLockedAccount,
    } as MsgCreatePermanentLockedAccount;
    message.fromAddress =
      object.fromAddress !== undefined && object.fromAddress !== null
        ? String(object.fromAddress)
        : "";
    message.toAddress =
      object.toAddress !== undefined && object.toAddress !== null
        ? String(object.toAddress)
        : "";
    message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: MsgCreatePermanentLockedAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePermanentLockedAccount>
  ): MsgCreatePermanentLockedAccount {
    const message = {
      ...baseMsgCreatePermanentLockedAccount,
    } as MsgCreatePermanentLockedAccount;
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = (object.amount ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseMsgCreatePermanentLockedAccountResponse: object = {};

export const MsgCreatePermanentLockedAccountResponse = {
  encode(
    _: MsgCreatePermanentLockedAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePermanentLockedAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePermanentLockedAccountResponse,
    } as MsgCreatePermanentLockedAccountResponse;
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

  fromJSON(_: any): MsgCreatePermanentLockedAccountResponse {
    const message = {
      ...baseMsgCreatePermanentLockedAccountResponse,
    } as MsgCreatePermanentLockedAccountResponse;
    return message;
  },

  toJSON(_: MsgCreatePermanentLockedAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePermanentLockedAccountResponse>
  ): MsgCreatePermanentLockedAccountResponse {
    const message = {
      ...baseMsgCreatePermanentLockedAccountResponse,
    } as MsgCreatePermanentLockedAccountResponse;
    return message;
  },
};

const baseMsgCreatePeriodicVestingAccount: object = {
  fromAddress: "",
  toAddress: "",
  startTime: Long.ZERO,
};

export const MsgCreatePeriodicVestingAccount = {
  encode(
    message: MsgCreatePeriodicVestingAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (!message.startTime.isZero()) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePeriodicVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePeriodicVestingAccount,
    } as MsgCreatePeriodicVestingAccount;
    message.vestingPeriods = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.startTime = reader.int64() as Long;
          break;
        case 4:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePeriodicVestingAccount {
    const message = {
      ...baseMsgCreatePeriodicVestingAccount,
    } as MsgCreatePeriodicVestingAccount;
    message.fromAddress =
      object.fromAddress !== undefined && object.fromAddress !== null
        ? String(object.fromAddress)
        : "";
    message.toAddress =
      object.toAddress !== undefined && object.toAddress !== null
        ? String(object.toAddress)
        : "";
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? Long.fromString(object.startTime)
        : Long.ZERO;
    message.vestingPeriods = (object.vestingPeriods ?? []).map((e: any) =>
      Period.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgCreatePeriodicVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.startTime !== undefined &&
      (obj.startTime = (message.startTime || Long.ZERO).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map((e) =>
        e ? Period.toJSON(e) : undefined
      );
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePeriodicVestingAccount>
  ): MsgCreatePeriodicVestingAccount {
    const message = {
      ...baseMsgCreatePeriodicVestingAccount,
    } as MsgCreatePeriodicVestingAccount;
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? Long.fromValue(object.startTime)
        : Long.ZERO;
    message.vestingPeriods = (object.vestingPeriods ?? []).map((e) =>
      Period.fromPartial(e)
    );
    return message;
  },
};

const baseMsgCreatePeriodicVestingAccountResponse: object = {};

export const MsgCreatePeriodicVestingAccountResponse = {
  encode(
    _: MsgCreatePeriodicVestingAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePeriodicVestingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePeriodicVestingAccountResponse,
    } as MsgCreatePeriodicVestingAccountResponse;
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

  fromJSON(_: any): MsgCreatePeriodicVestingAccountResponse {
    const message = {
      ...baseMsgCreatePeriodicVestingAccountResponse,
    } as MsgCreatePeriodicVestingAccountResponse;
    return message;
  },

  toJSON(_: MsgCreatePeriodicVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePeriodicVestingAccountResponse>
  ): MsgCreatePeriodicVestingAccountResponse {
    const message = {
      ...baseMsgCreatePeriodicVestingAccountResponse,
    } as MsgCreatePeriodicVestingAccountResponse;
    return message;
  },
};

/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  CreateVestingAccount(
    request: MsgCreateVestingAccount
  ): Promise<MsgCreateVestingAccountResponse>;
  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   *
   * Since: cosmos-sdk 0.46
   */
  CreatePermanentLockedAccount(
    request: MsgCreatePermanentLockedAccount
  ): Promise<MsgCreatePermanentLockedAccountResponse>;
  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   *
   * Since: cosmos-sdk 0.46
   */
  CreatePeriodicVestingAccount(
    request: MsgCreatePeriodicVestingAccount
  ): Promise<MsgCreatePeriodicVestingAccountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateVestingAccount = this.CreateVestingAccount.bind(this);
    this.CreatePermanentLockedAccount =
      this.CreatePermanentLockedAccount.bind(this);
    this.CreatePeriodicVestingAccount =
      this.CreatePeriodicVestingAccount.bind(this);
  }
  CreateVestingAccount(
    request: MsgCreateVestingAccount
  ): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.vesting.v1beta1.Msg",
      "CreateVestingAccount",
      data
    );
    return promise.then((data) =>
      MsgCreateVestingAccountResponse.decode(new _m0.Reader(data))
    );
  }

  CreatePermanentLockedAccount(
    request: MsgCreatePermanentLockedAccount
  ): Promise<MsgCreatePermanentLockedAccountResponse> {
    const data = MsgCreatePermanentLockedAccount.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.vesting.v1beta1.Msg",
      "CreatePermanentLockedAccount",
      data
    );
    return promise.then((data) =>
      MsgCreatePermanentLockedAccountResponse.decode(new _m0.Reader(data))
    );
  }

  CreatePeriodicVestingAccount(
    request: MsgCreatePeriodicVestingAccount
  ): Promise<MsgCreatePeriodicVestingAccountResponse> {
    const data = MsgCreatePeriodicVestingAccount.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.vesting.v1beta1.Msg",
      "CreatePeriodicVestingAccount",
      data
    );
    return promise.then((data) =>
      MsgCreatePeriodicVestingAccountResponse.decode(new _m0.Reader(data))
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
