/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../../cosmos/base/v1beta1/coin";
import { RewardHistory } from "./params";

export const protobufPackage = "alliance.alliance";

export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** denom of token staked */
  denom: string;
  /** shares define the delegation shares received. */
  shares: string;
  rewardHistory: RewardHistory[];
  lastRewardClaimHeight: Long;
}

export interface Undelegation {
  delegatorAddress: string;
  validatorAddress: string;
  balance?: Coin;
}

export interface QueuedUndelegation {
  entries: Undelegation[];
}

export interface AllianceValidatorInfo {
  globalRewardHistory: RewardHistory[];
  totalDelegatorShares: DecCoin[];
  validatorShares: DecCoin[];
}

const baseDelegation: object = {
  delegatorAddress: "",
  validatorAddress: "",
  denom: "",
  shares: "",
  lastRewardClaimHeight: Long.UZERO,
};

export const Delegation = {
  encode(
    message: Delegation,
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
    if (message.shares !== "") {
      writer.uint32(34).string(message.shares);
    }
    for (const v of message.rewardHistory) {
      RewardHistory.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.lastRewardClaimHeight.isZero()) {
      writer.uint32(48).uint64(message.lastRewardClaimHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegation } as Delegation;
    message.rewardHistory = [];
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
        case 4:
          message.shares = reader.string();
          break;
        case 5:
          message.rewardHistory.push(
            RewardHistory.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.lastRewardClaimHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegation {
    const message = { ...baseDelegation } as Delegation;
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
    message.shares =
      object.shares !== undefined && object.shares !== null
        ? String(object.shares)
        : "";
    message.rewardHistory = (object.rewardHistory ?? []).map((e: any) =>
      RewardHistory.fromJSON(e)
    );
    message.lastRewardClaimHeight =
      object.lastRewardClaimHeight !== undefined &&
      object.lastRewardClaimHeight !== null
        ? Long.fromString(object.lastRewardClaimHeight)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    message.shares !== undefined && (obj.shares = message.shares);
    if (message.rewardHistory) {
      obj.rewardHistory = message.rewardHistory.map((e) =>
        e ? RewardHistory.toJSON(e) : undefined
      );
    } else {
      obj.rewardHistory = [];
    }
    message.lastRewardClaimHeight !== undefined &&
      (obj.lastRewardClaimHeight = (
        message.lastRewardClaimHeight || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = { ...baseDelegation } as Delegation;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    message.shares = object.shares ?? "";
    message.rewardHistory = (object.rewardHistory ?? []).map((e) =>
      RewardHistory.fromPartial(e)
    );
    message.lastRewardClaimHeight =
      object.lastRewardClaimHeight !== undefined &&
      object.lastRewardClaimHeight !== null
        ? Long.fromValue(object.lastRewardClaimHeight)
        : Long.UZERO;
    return message;
  },
};

const baseUndelegation: object = { delegatorAddress: "", validatorAddress: "" };

export const Undelegation = {
  encode(
    message: Undelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Undelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUndelegation } as Undelegation;
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
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Undelegation {
    const message = { ...baseUndelegation } as Undelegation;
    message.delegatorAddress =
      object.delegatorAddress !== undefined && object.delegatorAddress !== null
        ? String(object.delegatorAddress)
        : "";
    message.validatorAddress =
      object.validatorAddress !== undefined && object.validatorAddress !== null
        ? String(object.validatorAddress)
        : "";
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromJSON(object.balance)
        : undefined;
    return message;
  },

  toJSON(message: Undelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Undelegation>): Undelegation {
    const message = { ...baseUndelegation } as Undelegation;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

const baseQueuedUndelegation: object = {};

export const QueuedUndelegation = {
  encode(
    message: QueuedUndelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.entries) {
      Undelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueuedUndelegation } as QueuedUndelegation;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(Undelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueuedUndelegation {
    const message = { ...baseQueuedUndelegation } as QueuedUndelegation;
    message.entries = (object.entries ?? []).map((e: any) =>
      Undelegation.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueuedUndelegation): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? Undelegation.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueuedUndelegation>): QueuedUndelegation {
    const message = { ...baseQueuedUndelegation } as QueuedUndelegation;
    message.entries = (object.entries ?? []).map((e) =>
      Undelegation.fromPartial(e)
    );
    return message;
  },
};

const baseAllianceValidatorInfo: object = {};

export const AllianceValidatorInfo = {
  encode(
    message: AllianceValidatorInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.globalRewardHistory) {
      RewardHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalDelegatorShares) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorShares) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AllianceValidatorInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllianceValidatorInfo } as AllianceValidatorInfo;
    message.globalRewardHistory = [];
    message.totalDelegatorShares = [];
    message.validatorShares = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.globalRewardHistory.push(
            RewardHistory.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalDelegatorShares.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.validatorShares.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllianceValidatorInfo {
    const message = { ...baseAllianceValidatorInfo } as AllianceValidatorInfo;
    message.globalRewardHistory = (object.globalRewardHistory ?? []).map(
      (e: any) => RewardHistory.fromJSON(e)
    );
    message.totalDelegatorShares = (object.totalDelegatorShares ?? []).map(
      (e: any) => DecCoin.fromJSON(e)
    );
    message.validatorShares = (object.validatorShares ?? []).map((e: any) =>
      DecCoin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AllianceValidatorInfo): unknown {
    const obj: any = {};
    if (message.globalRewardHistory) {
      obj.globalRewardHistory = message.globalRewardHistory.map((e) =>
        e ? RewardHistory.toJSON(e) : undefined
      );
    } else {
      obj.globalRewardHistory = [];
    }
    if (message.totalDelegatorShares) {
      obj.totalDelegatorShares = message.totalDelegatorShares.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.totalDelegatorShares = [];
    }
    if (message.validatorShares) {
      obj.validatorShares = message.validatorShares.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.validatorShares = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<AllianceValidatorInfo>
  ): AllianceValidatorInfo {
    const message = { ...baseAllianceValidatorInfo } as AllianceValidatorInfo;
    message.globalRewardHistory = (object.globalRewardHistory ?? []).map((e) =>
      RewardHistory.fromPartial(e)
    );
    message.totalDelegatorShares = (object.totalDelegatorShares ?? []).map(
      (e) => DecCoin.fromPartial(e)
    );
    message.validatorShares = (object.validatorShares ?? []).map((e) =>
      DecCoin.fromPartial(e)
    );
    return message;
  },
};

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
