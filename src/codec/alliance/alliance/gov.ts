/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { RewardWeightRange } from "./alliance";

export const protobufPackage = "alliance.alliance";

export interface MsgCreateAllianceProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
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

export interface MsgUpdateAllianceProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
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

export interface MsgDeleteAllianceProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  denom: string;
}

const baseMsgCreateAllianceProposal: object = {
  title: "",
  description: "",
  denom: "",
  rewardWeight: "",
  takeRate: "",
  rewardChangeRate: "",
};

export const MsgCreateAllianceProposal = {
  encode(
    message: MsgCreateAllianceProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(34).string(message.rewardWeight);
    }
    if (message.takeRate !== "") {
      writer.uint32(42).string(message.takeRate);
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(50).string(message.rewardChangeRate);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(
        message.rewardChangeInterval,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(
        message.rewardWeightRange,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateAllianceProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAllianceProposal,
    } as MsgCreateAllianceProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.rewardWeight = reader.string();
          break;
        case 5:
          message.takeRate = reader.string();
          break;
        case 6:
          message.rewardChangeRate = reader.string();
          break;
        case 7:
          message.rewardChangeInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
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

  fromJSON(object: any): MsgCreateAllianceProposal {
    const message = {
      ...baseMsgCreateAllianceProposal,
    } as MsgCreateAllianceProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
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

  toJSON(message: MsgCreateAllianceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
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

  fromPartial(
    object: DeepPartial<MsgCreateAllianceProposal>
  ): MsgCreateAllianceProposal {
    const message = {
      ...baseMsgCreateAllianceProposal,
    } as MsgCreateAllianceProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
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

const baseMsgUpdateAllianceProposal: object = {
  title: "",
  description: "",
  denom: "",
  rewardWeight: "",
  takeRate: "",
  rewardChangeRate: "",
};

export const MsgUpdateAllianceProposal = {
  encode(
    message: MsgUpdateAllianceProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(34).string(message.rewardWeight);
    }
    if (message.takeRate !== "") {
      writer.uint32(42).string(message.takeRate);
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(50).string(message.rewardChangeRate);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(
        message.rewardChangeInterval,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(
        message.rewardWeightRange,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAllianceProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAllianceProposal,
    } as MsgUpdateAllianceProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.rewardWeight = reader.string();
          break;
        case 5:
          message.takeRate = reader.string();
          break;
        case 6:
          message.rewardChangeRate = reader.string();
          break;
        case 7:
          message.rewardChangeInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
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

  fromJSON(object: any): MsgUpdateAllianceProposal {
    const message = {
      ...baseMsgUpdateAllianceProposal,
    } as MsgUpdateAllianceProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
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

  toJSON(message: MsgUpdateAllianceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
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

  fromPartial(
    object: DeepPartial<MsgUpdateAllianceProposal>
  ): MsgUpdateAllianceProposal {
    const message = {
      ...baseMsgUpdateAllianceProposal,
    } as MsgUpdateAllianceProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
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

const baseMsgDeleteAllianceProposal: object = {
  title: "",
  description: "",
  denom: "",
};

export const MsgDeleteAllianceProposal = {
  encode(
    message: MsgDeleteAllianceProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteAllianceProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAllianceProposal,
    } as MsgDeleteAllianceProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
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

  fromJSON(object: any): MsgDeleteAllianceProposal {
    const message = {
      ...baseMsgDeleteAllianceProposal,
    } as MsgDeleteAllianceProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgDeleteAllianceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteAllianceProposal>
  ): MsgDeleteAllianceProposal {
    const message = {
      ...baseMsgDeleteAllianceProposal,
    } as MsgDeleteAllianceProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
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
