/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Duration } from "../../google/protobuf/duration";
import { RewardWeightRange } from "./alliance";

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

export interface MsgUpdateParams {
  authority: string;
  params?: Params;
}

export interface MsgUpdateParamsResponse {}

export interface MsgCreateAlliance {
  authority: string;
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.
   */
  rewardWeight: string;
  /**
   * A positive take rate is used for liquid staking derivatives. It defines an annualized reward rate that
   * will be redirected to the distribution rewards pool
   */
  takeRate: string;
  rewardChangeRate: string;
  rewardChangeInterval?: Duration;
  /** set a bound of weight range to limit how much reward weights can scale. */
  rewardWeightRange?: RewardWeightRange;
}

export interface MsgCreateAllianceResponse {}

export interface MsgUpdateAlliance {
  authority: string;
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.
   */
  rewardWeight: string;
  takeRate: string;
  rewardChangeRate: string;
  rewardChangeInterval?: Duration;
  /** set a bound of weight range to limit how much reward weights can scale. */
  rewardWeightRange?: RewardWeightRange;
}

export interface MsgUpdateAllianceResponse {}

export interface MsgDeleteAlliance {
  authority: string;
  denom: string;
}

export interface MsgDeleteAllianceResponse {}

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
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
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
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
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

const baseMsgCreateAlliance: object = {
  authority: "",
  denom: "",
  rewardWeight: "",
  takeRate: "",
  rewardChangeRate: "",
};

export const MsgCreateAlliance = {
  encode(
    message: MsgCreateAlliance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(26).string(message.rewardWeight);
    }
    if (message.takeRate !== "") {
      writer.uint32(34).string(message.takeRate);
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(42).string(message.rewardChangeRate);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(
        message.rewardChangeInterval,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(
        message.rewardWeightRange,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAlliance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAlliance } as MsgCreateAlliance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.rewardWeight = reader.string();
          break;
        case 4:
          message.takeRate = reader.string();
          break;
        case 5:
          message.rewardChangeRate = reader.string();
          break;
        case 6:
          message.rewardChangeInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.rewardWeightRange = RewardWeightRange.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAlliance {
    const message = { ...baseMsgCreateAlliance } as MsgCreateAlliance;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.rewardWeight =
      object.rewardWeight !== undefined && object.rewardWeight !== null
        ? String(object.rewardWeight)
        : "";
    message.takeRate =
      object.takeRate !== undefined && object.takeRate !== null
        ? String(object.takeRate)
        : "";
    message.rewardChangeRate =
      object.rewardChangeRate !== undefined && object.rewardChangeRate !== null
        ? String(object.rewardChangeRate)
        : "";
    message.rewardChangeInterval =
      object.rewardChangeInterval !== undefined &&
      object.rewardChangeInterval !== null
        ? Duration.fromJSON(object.rewardChangeInterval)
        : undefined;
    message.rewardWeightRange =
      object.rewardWeightRange !== undefined &&
      object.rewardWeightRange !== null
        ? RewardWeightRange.fromJSON(object.rewardWeightRange)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreateAlliance): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined &&
      (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.rewardChangeRate !== undefined &&
      (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined &&
      (obj.rewardChangeInterval = message.rewardChangeInterval
        ? Duration.toJSON(message.rewardChangeInterval)
        : undefined);
    message.rewardWeightRange !== undefined &&
      (obj.rewardWeightRange = message.rewardWeightRange
        ? RewardWeightRange.toJSON(message.rewardWeightRange)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAlliance>): MsgCreateAlliance {
    const message = { ...baseMsgCreateAlliance } as MsgCreateAlliance;
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.takeRate = object.takeRate ?? "";
    message.rewardChangeRate = object.rewardChangeRate ?? "";
    message.rewardChangeInterval =
      object.rewardChangeInterval !== undefined &&
      object.rewardChangeInterval !== null
        ? Duration.fromPartial(object.rewardChangeInterval)
        : undefined;
    message.rewardWeightRange =
      object.rewardWeightRange !== undefined &&
      object.rewardWeightRange !== null
        ? RewardWeightRange.fromPartial(object.rewardWeightRange)
        : undefined;
    return message;
  },
};

const baseMsgCreateAllianceResponse: object = {};

export const MsgCreateAllianceResponse = {
  encode(
    _: MsgCreateAllianceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateAllianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAllianceResponse,
    } as MsgCreateAllianceResponse;
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

  fromJSON(_: any): MsgCreateAllianceResponse {
    const message = {
      ...baseMsgCreateAllianceResponse,
    } as MsgCreateAllianceResponse;
    return message;
  },

  toJSON(_: MsgCreateAllianceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateAllianceResponse>
  ): MsgCreateAllianceResponse {
    const message = {
      ...baseMsgCreateAllianceResponse,
    } as MsgCreateAllianceResponse;
    return message;
  },
};

const baseMsgUpdateAlliance: object = {
  authority: "",
  denom: "",
  rewardWeight: "",
  takeRate: "",
  rewardChangeRate: "",
};

export const MsgUpdateAlliance = {
  encode(
    message: MsgUpdateAlliance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(26).string(message.rewardWeight);
    }
    if (message.takeRate !== "") {
      writer.uint32(34).string(message.takeRate);
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(42).string(message.rewardChangeRate);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(
        message.rewardChangeInterval,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(
        message.rewardWeightRange,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAlliance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAlliance } as MsgUpdateAlliance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.rewardWeight = reader.string();
          break;
        case 4:
          message.takeRate = reader.string();
          break;
        case 5:
          message.rewardChangeRate = reader.string();
          break;
        case 6:
          message.rewardChangeInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.rewardWeightRange = RewardWeightRange.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAlliance {
    const message = { ...baseMsgUpdateAlliance } as MsgUpdateAlliance;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.rewardWeight =
      object.rewardWeight !== undefined && object.rewardWeight !== null
        ? String(object.rewardWeight)
        : "";
    message.takeRate =
      object.takeRate !== undefined && object.takeRate !== null
        ? String(object.takeRate)
        : "";
    message.rewardChangeRate =
      object.rewardChangeRate !== undefined && object.rewardChangeRate !== null
        ? String(object.rewardChangeRate)
        : "";
    message.rewardChangeInterval =
      object.rewardChangeInterval !== undefined &&
      object.rewardChangeInterval !== null
        ? Duration.fromJSON(object.rewardChangeInterval)
        : undefined;
    message.rewardWeightRange =
      object.rewardWeightRange !== undefined &&
      object.rewardWeightRange !== null
        ? RewardWeightRange.fromJSON(object.rewardWeightRange)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateAlliance): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined &&
      (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.rewardChangeRate !== undefined &&
      (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined &&
      (obj.rewardChangeInterval = message.rewardChangeInterval
        ? Duration.toJSON(message.rewardChangeInterval)
        : undefined);
    message.rewardWeightRange !== undefined &&
      (obj.rewardWeightRange = message.rewardWeightRange
        ? RewardWeightRange.toJSON(message.rewardWeightRange)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAlliance>): MsgUpdateAlliance {
    const message = { ...baseMsgUpdateAlliance } as MsgUpdateAlliance;
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.takeRate = object.takeRate ?? "";
    message.rewardChangeRate = object.rewardChangeRate ?? "";
    message.rewardChangeInterval =
      object.rewardChangeInterval !== undefined &&
      object.rewardChangeInterval !== null
        ? Duration.fromPartial(object.rewardChangeInterval)
        : undefined;
    message.rewardWeightRange =
      object.rewardWeightRange !== undefined &&
      object.rewardWeightRange !== null
        ? RewardWeightRange.fromPartial(object.rewardWeightRange)
        : undefined;
    return message;
  },
};

const baseMsgUpdateAllianceResponse: object = {};

export const MsgUpdateAllianceResponse = {
  encode(
    _: MsgUpdateAllianceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAllianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAllianceResponse,
    } as MsgUpdateAllianceResponse;
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

  fromJSON(_: any): MsgUpdateAllianceResponse {
    const message = {
      ...baseMsgUpdateAllianceResponse,
    } as MsgUpdateAllianceResponse;
    return message;
  },

  toJSON(_: MsgUpdateAllianceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateAllianceResponse>
  ): MsgUpdateAllianceResponse {
    const message = {
      ...baseMsgUpdateAllianceResponse,
    } as MsgUpdateAllianceResponse;
    return message;
  },
};

const baseMsgDeleteAlliance: object = { authority: "", denom: "" };

export const MsgDeleteAlliance = {
  encode(
    message: MsgDeleteAlliance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAlliance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAlliance } as MsgDeleteAlliance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAlliance {
    const message = { ...baseMsgDeleteAlliance } as MsgDeleteAlliance;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgDeleteAlliance): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteAlliance>): MsgDeleteAlliance {
    const message = { ...baseMsgDeleteAlliance } as MsgDeleteAlliance;
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgDeleteAllianceResponse: object = {};

export const MsgDeleteAllianceResponse = {
  encode(
    _: MsgDeleteAllianceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteAllianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAllianceResponse,
    } as MsgDeleteAllianceResponse;
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

  fromJSON(_: any): MsgDeleteAllianceResponse {
    const message = {
      ...baseMsgDeleteAllianceResponse,
    } as MsgDeleteAllianceResponse;
    return message;
  },

  toJSON(_: MsgDeleteAllianceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteAllianceResponse>
  ): MsgDeleteAllianceResponse {
    const message = {
      ...baseMsgDeleteAllianceResponse,
    } as MsgDeleteAllianceResponse;
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
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateAlliance(
    request: MsgCreateAlliance
  ): Promise<MsgCreateAllianceResponse>;
  UpdateAlliance(
    request: MsgUpdateAlliance
  ): Promise<MsgUpdateAllianceResponse>;
  DeleteAlliance(
    request: MsgDeleteAlliance
  ): Promise<MsgDeleteAllianceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Delegate = this.Delegate.bind(this);
    this.Redelegate = this.Redelegate.bind(this);
    this.Undelegate = this.Undelegate.bind(this);
    this.ClaimDelegationRewards = this.ClaimDelegationRewards.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateAlliance = this.CreateAlliance.bind(this);
    this.UpdateAlliance = this.UpdateAlliance.bind(this);
    this.DeleteAlliance = this.DeleteAlliance.bind(this);
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

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
    );
  }

  CreateAlliance(
    request: MsgCreateAlliance
  ): Promise<MsgCreateAllianceResponse> {
    const data = MsgCreateAlliance.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Msg",
      "CreateAlliance",
      data
    );
    return promise.then((data) =>
      MsgCreateAllianceResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateAlliance(
    request: MsgUpdateAlliance
  ): Promise<MsgUpdateAllianceResponse> {
    const data = MsgUpdateAlliance.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Msg",
      "UpdateAlliance",
      data
    );
    return promise.then((data) =>
      MsgUpdateAllianceResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteAlliance(
    request: MsgDeleteAlliance
  ): Promise<MsgDeleteAllianceResponse> {
    const data = MsgDeleteAlliance.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Msg",
      "DeleteAlliance",
      data
    );
    return promise.then((data) =>
      MsgDeleteAllianceResponse.decode(new _m0.Reader(data))
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
