/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CreatePoolRouteParams,
  LinkPoolParams,
  RemovePoolRouteParams,
  SetCommitmentCurveParams,
  SetRewardCurveParams,
  SetRewardsWeightsParams,
  UnlinkPoolParams,
  UpdatePoolParams,
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

function createBaseLinkPoolProposal(): LinkPoolProposal {
  return { title: "", description: "", msg: undefined };
}

export const LinkPoolProposal = {
  encode(message: LinkPoolProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = LinkPoolParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? LinkPoolParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: LinkPoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? LinkPoolParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<LinkPoolProposal>): LinkPoolProposal {
    return LinkPoolProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LinkPoolProposal>): LinkPoolProposal {
    const message = createBaseLinkPoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? LinkPoolParams.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

function createBaseUnlinkPoolProposal(): UnlinkPoolProposal {
  return { title: "", description: "", msg: undefined };
}

export const UnlinkPoolProposal = {
  encode(message: UnlinkPoolProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlinkPoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = UnlinkPoolParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnlinkPoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? UnlinkPoolParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: UnlinkPoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? UnlinkPoolParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UnlinkPoolProposal>): UnlinkPoolProposal {
    return UnlinkPoolProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnlinkPoolProposal>): UnlinkPoolProposal {
    const message = createBaseUnlinkPoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? UnlinkPoolParams.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

function createBaseSetRewardCurveProposal(): SetRewardCurveProposal {
  return { title: "", description: "", msg: undefined };
}

export const SetRewardCurveProposal = {
  encode(message: SetRewardCurveProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      SetRewardCurveParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRewardCurveProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRewardCurveProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = SetRewardCurveParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetRewardCurveProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? SetRewardCurveParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: SetRewardCurveProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? SetRewardCurveParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SetRewardCurveProposal>): SetRewardCurveProposal {
    return SetRewardCurveProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetRewardCurveProposal>): SetRewardCurveProposal {
    const message = createBaseSetRewardCurveProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? SetRewardCurveParams.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

function createBaseSetCommitmentCurveProposal(): SetCommitmentCurveProposal {
  return { title: "", description: "", msg: undefined };
}

export const SetCommitmentCurveProposal = {
  encode(message: SetCommitmentCurveProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      SetCommitmentCurveParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCommitmentCurveProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCommitmentCurveProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = SetCommitmentCurveParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetCommitmentCurveProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? SetCommitmentCurveParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: SetCommitmentCurveProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? SetCommitmentCurveParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SetCommitmentCurveProposal>): SetCommitmentCurveProposal {
    return SetCommitmentCurveProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetCommitmentCurveProposal>): SetCommitmentCurveProposal {
    const message = createBaseSetCommitmentCurveProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? SetCommitmentCurveParams.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

function createBaseSetRewardsWeightsProposal(): SetRewardsWeightsProposal {
  return { title: "", description: "", msg: undefined };
}

export const SetRewardsWeightsProposal = {
  encode(message: SetRewardsWeightsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      SetRewardsWeightsParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRewardsWeightsProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRewardsWeightsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = SetRewardsWeightsParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetRewardsWeightsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? SetRewardsWeightsParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: SetRewardsWeightsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? SetRewardsWeightsParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SetRewardsWeightsProposal>): SetRewardsWeightsProposal {
    return SetRewardsWeightsProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetRewardsWeightsProposal>): SetRewardsWeightsProposal {
    const message = createBaseSetRewardsWeightsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? SetRewardsWeightsParams.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

function createBaseUpdatePoolProposal(): UpdatePoolProposal {
  return { title: "", description: "", msg: undefined };
}

export const UpdatePoolProposal = {
  encode(message: UpdatePoolProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = UpdatePoolParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? UpdatePoolParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: UpdatePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? UpdatePoolParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdatePoolProposal>): UpdatePoolProposal {
    return UpdatePoolProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdatePoolProposal>): UpdatePoolProposal {
    const message = createBaseUpdatePoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? UpdatePoolParams.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

function createBaseCreatePoolRouteProposal(): CreatePoolRouteProposal {
  return { title: "", description: "", msg: undefined };
}

export const CreatePoolRouteProposal = {
  encode(message: CreatePoolRouteProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      CreatePoolRouteParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePoolRouteProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePoolRouteProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = CreatePoolRouteParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePoolRouteProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? CreatePoolRouteParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: CreatePoolRouteProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? CreatePoolRouteParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreatePoolRouteProposal>): CreatePoolRouteProposal {
    return CreatePoolRouteProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreatePoolRouteProposal>): CreatePoolRouteProposal {
    const message = createBaseCreatePoolRouteProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? CreatePoolRouteParams.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

function createBaseRemovePoolRouteProposal(): RemovePoolRouteProposal {
  return { title: "", description: "", msg: undefined };
}

export const RemovePoolRouteProposal = {
  encode(message: RemovePoolRouteProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      RemovePoolRouteParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemovePoolRouteProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemovePoolRouteProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = RemovePoolRouteParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemovePoolRouteProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? RemovePoolRouteParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: RemovePoolRouteProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? RemovePoolRouteParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RemovePoolRouteProposal>): RemovePoolRouteProposal {
    return RemovePoolRouteProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RemovePoolRouteProposal>): RemovePoolRouteProposal {
    const message = createBaseRemovePoolRouteProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? RemovePoolRouteParams.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

function createBaseUpdatePoolRouteProposal(): UpdatePoolRouteProposal {
  return { title: "", description: "", msg: undefined };
}

export const UpdatePoolRouteProposal = {
  encode(message: UpdatePoolRouteProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      UpdatePoolRouteParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolRouteProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoolRouteProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = UpdatePoolRouteParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolRouteProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? UpdatePoolRouteParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: UpdatePoolRouteProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? UpdatePoolRouteParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdatePoolRouteProposal>): UpdatePoolRouteProposal {
    return UpdatePoolRouteProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdatePoolRouteProposal>): UpdatePoolRouteProposal {
    const message = createBaseUpdatePoolRouteProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? UpdatePoolRouteParams.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
