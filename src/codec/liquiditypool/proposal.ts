/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  LinkPoolParams,
  UnlinkPoolParams,
  SetRewardCurveParams,
  SetCommitmentCurveParams,
  SetRewardsWeightsParams,
  UpdatePoolParams,
  CreatePoolRouteParams,
  RemovePoolRouteParams,
  UpdatePoolRouteParams,
} from "./tx";

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

export interface UpdatePoolProposal {
  title: string;
  description: string;
  msg?: UpdatePoolParams;
}

export interface CreatePoolRouteProposal {
  title: string;
  description: string;
  msg?: CreatePoolRouteParams;
}

export interface RemovePoolRouteProposal {
  title: string;
  description: string;
  msg?: RemovePoolRouteParams;
}

export interface UpdatePoolRouteProposal {
  title: string;
  description: string;
  msg?: UpdatePoolRouteParams;
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
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? LinkPoolParams.fromJSON(object.msg)
        : undefined;
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
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? LinkPoolParams.fromPartial(object.msg)
        : undefined;
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
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? UnlinkPoolParams.fromJSON(object.msg)
        : undefined;
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
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? UnlinkPoolParams.fromPartial(object.msg)
        : undefined;
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
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? SetRewardCurveParams.fromJSON(object.msg)
        : undefined;
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
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? SetRewardCurveParams.fromPartial(object.msg)
        : undefined;
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
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? SetCommitmentCurveParams.fromJSON(object.msg)
        : undefined;
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
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? SetCommitmentCurveParams.fromPartial(object.msg)
        : undefined;
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
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? SetRewardsWeightsParams.fromJSON(object.msg)
        : undefined;
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
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? SetRewardsWeightsParams.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

const baseUpdatePoolProposal: object = { title: "", description: "" };

export const UpdatePoolProposal = {
  encode(
    message: UpdatePoolProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      UpdatePoolParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePoolProposal } as UpdatePoolProposal;
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
          message.msg = UpdatePoolParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolProposal {
    const message = { ...baseUpdatePoolProposal } as UpdatePoolProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? UpdatePoolParams.fromJSON(object.msg)
        : undefined;
    return message;
  },

  toJSON(message: UpdatePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? UpdatePoolParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdatePoolProposal>): UpdatePoolProposal {
    const message = { ...baseUpdatePoolProposal } as UpdatePoolProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? UpdatePoolParams.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

const baseCreatePoolRouteProposal: object = { title: "", description: "" };

export const CreatePoolRouteProposal = {
  encode(
    message: CreatePoolRouteProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      CreatePoolRouteParams.encode(
        message.msg,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreatePoolRouteProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreatePoolRouteProposal,
    } as CreatePoolRouteProposal;
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
          message.msg = CreatePoolRouteParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePoolRouteProposal {
    const message = {
      ...baseCreatePoolRouteProposal,
    } as CreatePoolRouteProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? CreatePoolRouteParams.fromJSON(object.msg)
        : undefined;
    return message;
  },

  toJSON(message: CreatePoolRouteProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? CreatePoolRouteParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreatePoolRouteProposal>
  ): CreatePoolRouteProposal {
    const message = {
      ...baseCreatePoolRouteProposal,
    } as CreatePoolRouteProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? CreatePoolRouteParams.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

const baseRemovePoolRouteProposal: object = { title: "", description: "" };

export const RemovePoolRouteProposal = {
  encode(
    message: RemovePoolRouteProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      RemovePoolRouteParams.encode(
        message.msg,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemovePoolRouteProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemovePoolRouteProposal,
    } as RemovePoolRouteProposal;
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
          message.msg = RemovePoolRouteParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemovePoolRouteProposal {
    const message = {
      ...baseRemovePoolRouteProposal,
    } as RemovePoolRouteProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? RemovePoolRouteParams.fromJSON(object.msg)
        : undefined;
    return message;
  },

  toJSON(message: RemovePoolRouteProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? RemovePoolRouteParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemovePoolRouteProposal>
  ): RemovePoolRouteProposal {
    const message = {
      ...baseRemovePoolRouteProposal,
    } as RemovePoolRouteProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? RemovePoolRouteParams.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

const baseUpdatePoolRouteProposal: object = { title: "", description: "" };

export const UpdatePoolRouteProposal = {
  encode(
    message: UpdatePoolRouteProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      UpdatePoolRouteParams.encode(
        message.msg,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePoolRouteProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePoolRouteProposal,
    } as UpdatePoolRouteProposal;
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
          message.msg = UpdatePoolRouteParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolRouteProposal {
    const message = {
      ...baseUpdatePoolRouteProposal,
    } as UpdatePoolRouteProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? UpdatePoolRouteParams.fromJSON(object.msg)
        : undefined;
    return message;
  },

  toJSON(message: UpdatePoolRouteProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? UpdatePoolRouteParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdatePoolRouteProposal>
  ): UpdatePoolRouteProposal {
    const message = {
      ...baseUpdatePoolRouteProposal,
    } as UpdatePoolRouteProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? UpdatePoolRouteParams.fromPartial(object.msg)
        : undefined;
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
