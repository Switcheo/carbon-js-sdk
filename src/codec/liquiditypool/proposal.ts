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
  msg?: LinkPoolParams;
}

export interface UnlinkPoolProposal {
  title: string;
  description: string;
  msg?: UnlinkPoolParams;
}

export interface SetRewardCurveProposal {
  title: string;
  description: string;
  msg?: SetRewardCurveParams;
}

export interface SetCommitmentCurveProposal {
  title: string;
  description: string;
  msg?: SetCommitmentCurveParams;
}

export interface SetRewardsWeightsProposal {
  title: string;
  description: string;
  msg?: SetRewardsWeightsParams;
}

export interface ChangeSwapFeeProposal {
  title: string;
  description: string;
  msg?: ChangeSwapFeeParams;
}

export interface ChangeNumQuotesProposal {
  title: string;
  description: string;
  msg?: ChangeNumQuotesParams;
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
    if (message.msg !== undefined) {
      LinkPoolParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
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
          message.msg = LinkPoolParams.decode(reader, reader.uint32());
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
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = LinkPoolParams.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: LinkPoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg ? LinkPoolParams.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LinkPoolProposal>): LinkPoolProposal {
    const message = { ...baseLinkPoolProposal } as LinkPoolProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = LinkPoolParams.fromPartial(object.msg);
    } else {
      message.msg = undefined;
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
    if (message.msg !== undefined) {
      UnlinkPoolParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
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
          message.msg = UnlinkPoolParams.decode(reader, reader.uint32());
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
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = UnlinkPoolParams.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: UnlinkPoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? UnlinkPoolParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UnlinkPoolProposal>): UnlinkPoolProposal {
    const message = { ...baseUnlinkPoolProposal } as UnlinkPoolProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = UnlinkPoolParams.fromPartial(object.msg);
    } else {
      message.msg = undefined;
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
    if (message.msg !== undefined) {
      SetRewardCurveParams.encode(
        message.msg,
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
          message.msg = SetRewardCurveParams.decode(reader, reader.uint32());
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
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = SetRewardCurveParams.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: SetRewardCurveProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? SetRewardCurveParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetRewardCurveProposal>
  ): SetRewardCurveProposal {
    const message = { ...baseSetRewardCurveProposal } as SetRewardCurveProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = SetRewardCurveParams.fromPartial(object.msg);
    } else {
      message.msg = undefined;
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
    if (message.msg !== undefined) {
      SetCommitmentCurveParams.encode(
        message.msg,
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
          message.msg = SetCommitmentCurveParams.decode(
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
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = SetCommitmentCurveParams.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: SetCommitmentCurveProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? SetCommitmentCurveParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetCommitmentCurveProposal>
  ): SetCommitmentCurveProposal {
    const message = {
      ...baseSetCommitmentCurveProposal,
    } as SetCommitmentCurveProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = SetCommitmentCurveParams.fromPartial(object.msg);
    } else {
      message.msg = undefined;
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
    if (message.msg !== undefined) {
      SetRewardsWeightsParams.encode(
        message.msg,
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
          message.msg = SetRewardsWeightsParams.decode(reader, reader.uint32());
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
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = SetRewardsWeightsParams.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: SetRewardsWeightsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? SetRewardsWeightsParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetRewardsWeightsProposal>
  ): SetRewardsWeightsProposal {
    const message = {
      ...baseSetRewardsWeightsProposal,
    } as SetRewardsWeightsProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = SetRewardsWeightsParams.fromPartial(object.msg);
    } else {
      message.msg = undefined;
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
    if (message.msg !== undefined) {
      ChangeSwapFeeParams.encode(
        message.msg,
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
          message.msg = ChangeSwapFeeParams.decode(reader, reader.uint32());
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
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = ChangeSwapFeeParams.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: ChangeSwapFeeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? ChangeSwapFeeParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeSwapFeeProposal>
  ): ChangeSwapFeeProposal {
    const message = { ...baseChangeSwapFeeProposal } as ChangeSwapFeeProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = ChangeSwapFeeParams.fromPartial(object.msg);
    } else {
      message.msg = undefined;
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
    if (message.msg !== undefined) {
      ChangeNumQuotesParams.encode(
        message.msg,
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
          message.msg = ChangeNumQuotesParams.decode(reader, reader.uint32());
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
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = ChangeNumQuotesParams.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: ChangeNumQuotesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? ChangeNumQuotesParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeNumQuotesProposal>
  ): ChangeNumQuotesProposal {
    const message = {
      ...baseChangeNumQuotesProposal,
    } as ChangeNumQuotesProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = ChangeNumQuotesParams.fromPartial(object.msg);
    } else {
      message.msg = undefined;
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
