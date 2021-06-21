/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  LinkPoolParams,
  UnlinkPoolParams,
  SetRewardCurveParams,
  SetCommitmentCurveParams,
  SetRewardsWeightsParams,
  ChangeSwapFeeParams,
  ChangeNumQuotesParams,
} from "../liquiditypool/tx";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

export interface LinkPoolProposal {
  title: string;
  description: string;
  linkPoolParams?: LinkPoolParams;
}

export interface UnlinkPoolProposal {
  title: string;
  description: string;
  unlinkPoolParams?: UnlinkPoolParams;
}

export interface SetRewardCurveProposal {
  title: string;
  description: string;
  setRewardCurveParams?: SetRewardCurveParams;
}

export interface SetCommitmentCurveProposal {
  title: string;
  description: string;
  setCommitmentCurveParams?: SetCommitmentCurveParams;
}

export interface SetRewardsWeightsProposal {
  title: string;
  description: string;
  setRewardsWeightsParams?: SetRewardsWeightsParams;
}

export interface ChangeSwapFeeProposal {
  title: string;
  description: string;
  changeSwapFeeParams?: ChangeSwapFeeParams;
}

export interface ChangeNumQuotesProposal {
  title: string;
  description: string;
  changeNumQuotesParams?: ChangeNumQuotesParams;
}

const baseLinkPoolProposal: object = { title: "", description: "" };

export const LinkPoolProposal = {
  encode(
    message: LinkPoolProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.linkPoolParams !== undefined) {
      LinkPoolParams.encode(
        message.linkPoolParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLinkPoolProposal } as LinkPoolProposal;
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
          message.linkPoolParams = LinkPoolParams.decode(
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

  fromJSON(object: any): LinkPoolProposal {
    const message = { ...baseLinkPoolProposal } as LinkPoolProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.linkPoolParams !== undefined && object.linkPoolParams !== null) {
      message.linkPoolParams = LinkPoolParams.fromJSON(object.linkPoolParams);
    } else {
      message.linkPoolParams = undefined;
    }
    return message;
  },

  toJSON(message: LinkPoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.linkPoolParams !== undefined &&
      (obj.linkPoolParams = message.linkPoolParams
        ? LinkPoolParams.toJSON(message.linkPoolParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LinkPoolProposal>): LinkPoolProposal {
    const message = { ...baseLinkPoolProposal } as LinkPoolProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.linkPoolParams !== undefined && object.linkPoolParams !== null) {
      message.linkPoolParams = LinkPoolParams.fromPartial(
        object.linkPoolParams
      );
    } else {
      message.linkPoolParams = undefined;
    }
    return message;
  },
};

const baseUnlinkPoolProposal: object = { title: "", description: "" };

export const UnlinkPoolProposal = {
  encode(
    message: UnlinkPoolProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.unlinkPoolParams !== undefined) {
      UnlinkPoolParams.encode(
        message.unlinkPoolParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnlinkPoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnlinkPoolProposal } as UnlinkPoolProposal;
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
          message.unlinkPoolParams = UnlinkPoolParams.decode(
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

  fromJSON(object: any): UnlinkPoolProposal {
    const message = { ...baseUnlinkPoolProposal } as UnlinkPoolProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.unlinkPoolParams !== undefined &&
      object.unlinkPoolParams !== null
    ) {
      message.unlinkPoolParams = UnlinkPoolParams.fromJSON(
        object.unlinkPoolParams
      );
    } else {
      message.unlinkPoolParams = undefined;
    }
    return message;
  },

  toJSON(message: UnlinkPoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.unlinkPoolParams !== undefined &&
      (obj.unlinkPoolParams = message.unlinkPoolParams
        ? UnlinkPoolParams.toJSON(message.unlinkPoolParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UnlinkPoolProposal>): UnlinkPoolProposal {
    const message = { ...baseUnlinkPoolProposal } as UnlinkPoolProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.unlinkPoolParams !== undefined &&
      object.unlinkPoolParams !== null
    ) {
      message.unlinkPoolParams = UnlinkPoolParams.fromPartial(
        object.unlinkPoolParams
      );
    } else {
      message.unlinkPoolParams = undefined;
    }
    return message;
  },
};

const baseSetRewardCurveProposal: object = { title: "", description: "" };

export const SetRewardCurveProposal = {
  encode(
    message: SetRewardCurveProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.setRewardCurveParams !== undefined) {
      SetRewardCurveParams.encode(
        message.setRewardCurveParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetRewardCurveProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetRewardCurveProposal } as SetRewardCurveProposal;
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
          message.setRewardCurveParams = SetRewardCurveParams.decode(
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

  fromJSON(object: any): SetRewardCurveProposal {
    const message = { ...baseSetRewardCurveProposal } as SetRewardCurveProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.setRewardCurveParams !== undefined &&
      object.setRewardCurveParams !== null
    ) {
      message.setRewardCurveParams = SetRewardCurveParams.fromJSON(
        object.setRewardCurveParams
      );
    } else {
      message.setRewardCurveParams = undefined;
    }
    return message;
  },

  toJSON(message: SetRewardCurveProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.setRewardCurveParams !== undefined &&
      (obj.setRewardCurveParams = message.setRewardCurveParams
        ? SetRewardCurveParams.toJSON(message.setRewardCurveParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetRewardCurveProposal>
  ): SetRewardCurveProposal {
    const message = { ...baseSetRewardCurveProposal } as SetRewardCurveProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.setRewardCurveParams !== undefined &&
      object.setRewardCurveParams !== null
    ) {
      message.setRewardCurveParams = SetRewardCurveParams.fromPartial(
        object.setRewardCurveParams
      );
    } else {
      message.setRewardCurveParams = undefined;
    }
    return message;
  },
};

const baseSetCommitmentCurveProposal: object = { title: "", description: "" };

export const SetCommitmentCurveProposal = {
  encode(
    message: SetCommitmentCurveProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.setCommitmentCurveParams !== undefined) {
      SetCommitmentCurveParams.encode(
        message.setCommitmentCurveParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetCommitmentCurveProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetCommitmentCurveProposal,
    } as SetCommitmentCurveProposal;
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
          message.setCommitmentCurveParams = SetCommitmentCurveParams.decode(
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

  fromJSON(object: any): SetCommitmentCurveProposal {
    const message = {
      ...baseSetCommitmentCurveProposal,
    } as SetCommitmentCurveProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.setCommitmentCurveParams !== undefined &&
      object.setCommitmentCurveParams !== null
    ) {
      message.setCommitmentCurveParams = SetCommitmentCurveParams.fromJSON(
        object.setCommitmentCurveParams
      );
    } else {
      message.setCommitmentCurveParams = undefined;
    }
    return message;
  },

  toJSON(message: SetCommitmentCurveProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.setCommitmentCurveParams !== undefined &&
      (obj.setCommitmentCurveParams = message.setCommitmentCurveParams
        ? SetCommitmentCurveParams.toJSON(message.setCommitmentCurveParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetCommitmentCurveProposal>
  ): SetCommitmentCurveProposal {
    const message = {
      ...baseSetCommitmentCurveProposal,
    } as SetCommitmentCurveProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.setCommitmentCurveParams !== undefined &&
      object.setCommitmentCurveParams !== null
    ) {
      message.setCommitmentCurveParams = SetCommitmentCurveParams.fromPartial(
        object.setCommitmentCurveParams
      );
    } else {
      message.setCommitmentCurveParams = undefined;
    }
    return message;
  },
};

const baseSetRewardsWeightsProposal: object = { title: "", description: "" };

export const SetRewardsWeightsProposal = {
  encode(
    message: SetRewardsWeightsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.setRewardsWeightsParams !== undefined) {
      SetRewardsWeightsParams.encode(
        message.setRewardsWeightsParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetRewardsWeightsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetRewardsWeightsProposal,
    } as SetRewardsWeightsProposal;
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
          message.setRewardsWeightsParams = SetRewardsWeightsParams.decode(
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

  fromJSON(object: any): SetRewardsWeightsProposal {
    const message = {
      ...baseSetRewardsWeightsProposal,
    } as SetRewardsWeightsProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.setRewardsWeightsParams !== undefined &&
      object.setRewardsWeightsParams !== null
    ) {
      message.setRewardsWeightsParams = SetRewardsWeightsParams.fromJSON(
        object.setRewardsWeightsParams
      );
    } else {
      message.setRewardsWeightsParams = undefined;
    }
    return message;
  },

  toJSON(message: SetRewardsWeightsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.setRewardsWeightsParams !== undefined &&
      (obj.setRewardsWeightsParams = message.setRewardsWeightsParams
        ? SetRewardsWeightsParams.toJSON(message.setRewardsWeightsParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetRewardsWeightsProposal>
  ): SetRewardsWeightsProposal {
    const message = {
      ...baseSetRewardsWeightsProposal,
    } as SetRewardsWeightsProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.setRewardsWeightsParams !== undefined &&
      object.setRewardsWeightsParams !== null
    ) {
      message.setRewardsWeightsParams = SetRewardsWeightsParams.fromPartial(
        object.setRewardsWeightsParams
      );
    } else {
      message.setRewardsWeightsParams = undefined;
    }
    return message;
  },
};

const baseChangeSwapFeeProposal: object = { title: "", description: "" };

export const ChangeSwapFeeProposal = {
  encode(
    message: ChangeSwapFeeProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.changeSwapFeeParams !== undefined) {
      ChangeSwapFeeParams.encode(
        message.changeSwapFeeParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeSwapFeeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChangeSwapFeeProposal } as ChangeSwapFeeProposal;
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
          message.changeSwapFeeParams = ChangeSwapFeeParams.decode(
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

  fromJSON(object: any): ChangeSwapFeeProposal {
    const message = { ...baseChangeSwapFeeProposal } as ChangeSwapFeeProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.changeSwapFeeParams !== undefined &&
      object.changeSwapFeeParams !== null
    ) {
      message.changeSwapFeeParams = ChangeSwapFeeParams.fromJSON(
        object.changeSwapFeeParams
      );
    } else {
      message.changeSwapFeeParams = undefined;
    }
    return message;
  },

  toJSON(message: ChangeSwapFeeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.changeSwapFeeParams !== undefined &&
      (obj.changeSwapFeeParams = message.changeSwapFeeParams
        ? ChangeSwapFeeParams.toJSON(message.changeSwapFeeParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeSwapFeeProposal>
  ): ChangeSwapFeeProposal {
    const message = { ...baseChangeSwapFeeProposal } as ChangeSwapFeeProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.changeSwapFeeParams !== undefined &&
      object.changeSwapFeeParams !== null
    ) {
      message.changeSwapFeeParams = ChangeSwapFeeParams.fromPartial(
        object.changeSwapFeeParams
      );
    } else {
      message.changeSwapFeeParams = undefined;
    }
    return message;
  },
};

const baseChangeNumQuotesProposal: object = { title: "", description: "" };

export const ChangeNumQuotesProposal = {
  encode(
    message: ChangeNumQuotesProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.changeNumQuotesParams !== undefined) {
      ChangeNumQuotesParams.encode(
        message.changeNumQuotesParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeNumQuotesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChangeNumQuotesProposal,
    } as ChangeNumQuotesProposal;
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
          message.changeNumQuotesParams = ChangeNumQuotesParams.decode(
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

  fromJSON(object: any): ChangeNumQuotesProposal {
    const message = {
      ...baseChangeNumQuotesProposal,
    } as ChangeNumQuotesProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.changeNumQuotesParams !== undefined &&
      object.changeNumQuotesParams !== null
    ) {
      message.changeNumQuotesParams = ChangeNumQuotesParams.fromJSON(
        object.changeNumQuotesParams
      );
    } else {
      message.changeNumQuotesParams = undefined;
    }
    return message;
  },

  toJSON(message: ChangeNumQuotesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.changeNumQuotesParams !== undefined &&
      (obj.changeNumQuotesParams = message.changeNumQuotesParams
        ? ChangeNumQuotesParams.toJSON(message.changeNumQuotesParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeNumQuotesProposal>
  ): ChangeNumQuotesProposal {
    const message = {
      ...baseChangeNumQuotesProposal,
    } as ChangeNumQuotesProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.changeNumQuotesParams !== undefined &&
      object.changeNumQuotesParams !== null
    ) {
      message.changeNumQuotesParams = ChangeNumQuotesParams.fromPartial(
        object.changeNumQuotesParams
      );
    } else {
      message.changeNumQuotesParams = undefined;
    }
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
