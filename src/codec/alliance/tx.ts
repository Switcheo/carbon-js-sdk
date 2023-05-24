/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "alliance.alliance";

export interface MsgDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
}

export interface MsgDelegateResponse {}

export interface MsgUndelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
}

export interface MsgUndelegateResponse {}

export interface MsgRedelegate {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  amount?: Coin;
}

export interface MsgRedelegateResponse {}

export interface MsgClaimDelegationRewards {
  delegatorAddress: string;
  validatorAddress: string;
  denom: string;
}

export interface MsgClaimDelegationRewardsResponse {}

const baseMsgDelegate: object = { delegatorAddress: "", validatorAddress: "" };

export const MsgDelegate = {
  encode(
    message: MsgDelegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelegate } as MsgDelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegate {
    const message = { ...baseMsgDelegate } as MsgDelegate;
    message.delegatorAddress =
      object.delegatorAddress !== undefined && object.delegatorAddress !== null
        ? String(object.delegatorAddress)
        : "";
    message.validatorAddress =
      object.validatorAddress !== undefined && object.validatorAddress !== null
        ? String(object.validatorAddress)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromJSON(object.amount)
        : undefined;
    return message;
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDelegate>): MsgDelegate {
    const message = { ...baseMsgDelegate } as MsgDelegate;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

const baseMsgDelegateResponse: object = {};

export const MsgDelegateResponse = {
  encode(
    _: MsgDelegateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelegateResponse } as MsgDelegateResponse;
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

  fromJSON(_: any): MsgDelegateResponse {
    const message = { ...baseMsgDelegateResponse } as MsgDelegateResponse;
    return message;
  },

  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = { ...baseMsgDelegateResponse } as MsgDelegateResponse;
    return message;
  },
};

const baseMsgUndelegate: object = {
  delegatorAddress: "",
  validatorAddress: "",
};

export const MsgUndelegate = {
  encode(
    message: MsgUndelegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUndelegate } as MsgUndelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegate {
    const message = { ...baseMsgUndelegate } as MsgUndelegate;
    message.delegatorAddress =
      object.delegatorAddress !== undefined && object.delegatorAddress !== null
        ? String(object.delegatorAddress)
        : "";
    message.validatorAddress =
      object.validatorAddress !== undefined && object.validatorAddress !== null
        ? String(object.validatorAddress)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromJSON(object.amount)
        : undefined;
    return message;
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUndelegate>): MsgUndelegate {
    const message = { ...baseMsgUndelegate } as MsgUndelegate;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

const baseMsgUndelegateResponse: object = {};

export const MsgUndelegateResponse = {
  encode(
    _: MsgUndelegateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUndelegateResponse } as MsgUndelegateResponse;
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

  fromJSON(_: any): MsgUndelegateResponse {
    const message = { ...baseMsgUndelegateResponse } as MsgUndelegateResponse;
    return message;
  },

  toJSON(_: MsgUndelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = { ...baseMsgUndelegateResponse } as MsgUndelegateResponse;
    return message;
  },
};

const baseMsgRedelegate: object = {
  delegatorAddress: "",
  validatorSrcAddress: "",
  validatorDstAddress: "",
};

export const MsgRedelegate = {
  encode(
    message: MsgRedelegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedelegate } as MsgRedelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedelegate {
    const message = { ...baseMsgRedelegate } as MsgRedelegate;
    message.delegatorAddress =
      object.delegatorAddress !== undefined && object.delegatorAddress !== null
        ? String(object.delegatorAddress)
        : "";
    message.validatorSrcAddress =
      object.validatorSrcAddress !== undefined &&
      object.validatorSrcAddress !== null
        ? String(object.validatorSrcAddress)
        : "";
    message.validatorDstAddress =
      object.validatorDstAddress !== undefined &&
      object.validatorDstAddress !== null
        ? String(object.validatorDstAddress)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromJSON(object.amount)
        : undefined;
    return message;
  },

  toJSON(message: MsgRedelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined &&
      (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined &&
      (obj.validatorDstAddress = message.validatorDstAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedelegate>): MsgRedelegate {
    const message = { ...baseMsgRedelegate } as MsgRedelegate;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

const baseMsgRedelegateResponse: object = {};

export const MsgRedelegateResponse = {
  encode(
    _: MsgRedelegateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRedelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedelegateResponse } as MsgRedelegateResponse;
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

  fromJSON(_: any): MsgRedelegateResponse {
    const message = { ...baseMsgRedelegateResponse } as MsgRedelegateResponse;
    return message;
  },

  toJSON(_: MsgRedelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRedelegateResponse>): MsgRedelegateResponse {
    const message = { ...baseMsgRedelegateResponse } as MsgRedelegateResponse;
    return message;
  },
};

const baseMsgClaimDelegationRewards: object = {
  delegatorAddress: "",
  validatorAddress: "",
  denom: "",
};

export const MsgClaimDelegationRewards = {
  encode(
    message: MsgClaimDelegationRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimDelegationRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClaimDelegationRewards,
    } as MsgClaimDelegationRewards;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimDelegationRewards {
    const message = {
      ...baseMsgClaimDelegationRewards,
    } as MsgClaimDelegationRewards;
    message.delegatorAddress =
      object.delegatorAddress !== undefined && object.delegatorAddress !== null
        ? String(object.delegatorAddress)
        : "";
    message.validatorAddress =
      object.validatorAddress !== undefined && object.validatorAddress !== null
        ? String(object.validatorAddress)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgClaimDelegationRewards): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgClaimDelegationRewards>
  ): MsgClaimDelegationRewards {
    const message = {
      ...baseMsgClaimDelegationRewards,
    } as MsgClaimDelegationRewards;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgClaimDelegationRewardsResponse: object = {};

export const MsgClaimDelegationRewardsResponse = {
  encode(
    _: MsgClaimDelegationRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClaimDelegationRewardsResponse,
    } as MsgClaimDelegationRewardsResponse;
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

  fromJSON(_: any): MsgClaimDelegationRewardsResponse {
    const message = {
      ...baseMsgClaimDelegationRewardsResponse,
    } as MsgClaimDelegationRewardsResponse;
    return message;
  },

  toJSON(_: MsgClaimDelegationRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgClaimDelegationRewardsResponse>
  ): MsgClaimDelegationRewardsResponse {
    const message = {
      ...baseMsgClaimDelegationRewardsResponse,
    } as MsgClaimDelegationRewardsResponse;
    return message;
  },
};

export interface Msg {
  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  Redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  ClaimDelegationRewards(
    request: MsgClaimDelegationRewards
  ): Promise<MsgClaimDelegationRewardsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Delegate = this.Delegate.bind(this);
    this.Redelegate = this.Redelegate.bind(this);
    this.Undelegate = this.Undelegate.bind(this);
    this.ClaimDelegationRewards = this.ClaimDelegationRewards.bind(this);
  }
  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Msg", "Delegate", data);
    return promise.then((data) =>
      MsgDelegateResponse.decode(new _m0.Reader(data))
    );
  }

  Redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse> {
    const data = MsgRedelegate.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Msg",
      "Redelegate",
      data
    );
    return promise.then((data) =>
      MsgRedelegateResponse.decode(new _m0.Reader(data))
    );
  }

  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Msg",
      "Undelegate",
      data
    );
    return promise.then((data) =>
      MsgUndelegateResponse.decode(new _m0.Reader(data))
    );
  }

  ClaimDelegationRewards(
    request: MsgClaimDelegationRewards
  ): Promise<MsgClaimDelegationRewardsResponse> {
    const data = MsgClaimDelegationRewards.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Msg",
      "ClaimDelegationRewards",
      data
    );
    return promise.then((data) =>
      MsgClaimDelegationRewardsResponse.decode(new _m0.Reader(data))
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
