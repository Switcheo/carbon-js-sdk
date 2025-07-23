/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GroupedTokenConfig, TokenGroup } from "./group";
import { Token } from "./token";

export const protobufPackage = "Switcheo.carbon.coin";

export interface NewTokenEvent {
  token?: Token;
  type: string;
}

export interface SyncTokenEvent {
  token?: Token;
}

export interface BindTokenEvent {
  sourceDenom: string;
  wrappedDenom: string;
}

export interface UnbindTokenEvent {
  wrappedDenom: string;
}

export interface LinkTokenEvent {
  token?: Token;
  type: string;
}

export interface NewGroupEvent {
  tokenGroup?: TokenGroup;
}

export interface UpdateGroupEvent {
  tokenGroup?: TokenGroup;
}

export interface RegisterToGroupEvent {
  groupId: Long;
  denom: string;
}

export interface DeregisterFromGroupEvent {
  groupId: Long;
  denom: string;
}

export interface SetGroupedTokenConfigEvent {
  groupedTokenConfig?: GroupedTokenConfig;
}

export interface DepositToGroupEvent {
  groupId: Long;
  denom: string;
  amount: string;
  chequeDenom: string;
  chequeAmount: string;
}

export interface WithdrawFromGroupEvent {
  groupId: Long;
  denom: string;
  amount: string;
  chequeDenom: string;
  chequeAmount: string;
}

function createBaseNewTokenEvent(): NewTokenEvent {
  return { token: undefined, type: "" };
}

export const NewTokenEvent = {
  encode(message: NewTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewTokenEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = Token.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewTokenEvent {
    return {
      token: isSet(object.token) ? Token.fromJSON(object.token) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: NewTokenEvent): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<NewTokenEvent>): NewTokenEvent {
    return NewTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NewTokenEvent>): NewTokenEvent {
    const message = createBaseNewTokenEvent();
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSyncTokenEvent(): SyncTokenEvent {
  return { token: undefined };
}

export const SyncTokenEvent = {
  encode(message: SyncTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncTokenEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = Token.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SyncTokenEvent {
    return { token: isSet(object.token) ? Token.fromJSON(object.token) : undefined };
  },

  toJSON(message: SyncTokenEvent): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SyncTokenEvent>): SyncTokenEvent {
    return SyncTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SyncTokenEvent>): SyncTokenEvent {
    const message = createBaseSyncTokenEvent();
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    return message;
  },
};

function createBaseBindTokenEvent(): BindTokenEvent {
  return { sourceDenom: "", wrappedDenom: "" };
}

export const BindTokenEvent = {
  encode(message: BindTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceDenom !== "") {
      writer.uint32(10).string(message.sourceDenom);
    }
    if (message.wrappedDenom !== "") {
      writer.uint32(18).string(message.wrappedDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BindTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindTokenEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceDenom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.wrappedDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BindTokenEvent {
    return {
      sourceDenom: isSet(object.sourceDenom) ? String(object.sourceDenom) : "",
      wrappedDenom: isSet(object.wrappedDenom) ? String(object.wrappedDenom) : "",
    };
  },

  toJSON(message: BindTokenEvent): unknown {
    const obj: any = {};
    message.sourceDenom !== undefined && (obj.sourceDenom = message.sourceDenom);
    message.wrappedDenom !== undefined && (obj.wrappedDenom = message.wrappedDenom);
    return obj;
  },

  create(base?: DeepPartial<BindTokenEvent>): BindTokenEvent {
    return BindTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BindTokenEvent>): BindTokenEvent {
    const message = createBaseBindTokenEvent();
    message.sourceDenom = object.sourceDenom ?? "";
    message.wrappedDenom = object.wrappedDenom ?? "";
    return message;
  },
};

function createBaseUnbindTokenEvent(): UnbindTokenEvent {
  return { wrappedDenom: "" };
}

export const UnbindTokenEvent = {
  encode(message: UnbindTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wrappedDenom !== "") {
      writer.uint32(10).string(message.wrappedDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbindTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbindTokenEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wrappedDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnbindTokenEvent {
    return { wrappedDenom: isSet(object.wrappedDenom) ? String(object.wrappedDenom) : "" };
  },

  toJSON(message: UnbindTokenEvent): unknown {
    const obj: any = {};
    message.wrappedDenom !== undefined && (obj.wrappedDenom = message.wrappedDenom);
    return obj;
  },

  create(base?: DeepPartial<UnbindTokenEvent>): UnbindTokenEvent {
    return UnbindTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnbindTokenEvent>): UnbindTokenEvent {
    const message = createBaseUnbindTokenEvent();
    message.wrappedDenom = object.wrappedDenom ?? "";
    return message;
  },
};

function createBaseLinkTokenEvent(): LinkTokenEvent {
  return { token: undefined, type: "" };
}

export const LinkTokenEvent = {
  encode(message: LinkTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkTokenEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = Token.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkTokenEvent {
    return {
      token: isSet(object.token) ? Token.fromJSON(object.token) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: LinkTokenEvent): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<LinkTokenEvent>): LinkTokenEvent {
    return LinkTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LinkTokenEvent>): LinkTokenEvent {
    const message = createBaseLinkTokenEvent();
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseNewGroupEvent(): NewGroupEvent {
  return { tokenGroup: undefined };
}

export const NewGroupEvent = {
  encode(message: NewGroupEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenGroup !== undefined) {
      TokenGroup.encode(message.tokenGroup, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewGroupEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewGroupEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenGroup = TokenGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewGroupEvent {
    return { tokenGroup: isSet(object.tokenGroup) ? TokenGroup.fromJSON(object.tokenGroup) : undefined };
  },

  toJSON(message: NewGroupEvent): unknown {
    const obj: any = {};
    message.tokenGroup !== undefined &&
      (obj.tokenGroup = message.tokenGroup ? TokenGroup.toJSON(message.tokenGroup) : undefined);
    return obj;
  },

  create(base?: DeepPartial<NewGroupEvent>): NewGroupEvent {
    return NewGroupEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NewGroupEvent>): NewGroupEvent {
    const message = createBaseNewGroupEvent();
    message.tokenGroup = (object.tokenGroup !== undefined && object.tokenGroup !== null)
      ? TokenGroup.fromPartial(object.tokenGroup)
      : undefined;
    return message;
  },
};

function createBaseUpdateGroupEvent(): UpdateGroupEvent {
  return { tokenGroup: undefined };
}

export const UpdateGroupEvent = {
  encode(message: UpdateGroupEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenGroup !== undefined) {
      TokenGroup.encode(message.tokenGroup, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenGroup = TokenGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupEvent {
    return { tokenGroup: isSet(object.tokenGroup) ? TokenGroup.fromJSON(object.tokenGroup) : undefined };
  },

  toJSON(message: UpdateGroupEvent): unknown {
    const obj: any = {};
    message.tokenGroup !== undefined &&
      (obj.tokenGroup = message.tokenGroup ? TokenGroup.toJSON(message.tokenGroup) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdateGroupEvent>): UpdateGroupEvent {
    return UpdateGroupEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateGroupEvent>): UpdateGroupEvent {
    const message = createBaseUpdateGroupEvent();
    message.tokenGroup = (object.tokenGroup !== undefined && object.tokenGroup !== null)
      ? TokenGroup.fromPartial(object.tokenGroup)
      : undefined;
    return message;
  },
};

function createBaseRegisterToGroupEvent(): RegisterToGroupEvent {
  return { groupId: Long.UZERO, denom: "" };
}

export const RegisterToGroupEvent = {
  encode(message: RegisterToGroupEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterToGroupEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterToGroupEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.groupId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterToGroupEvent {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: RegisterToGroupEvent): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<RegisterToGroupEvent>): RegisterToGroupEvent {
    return RegisterToGroupEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterToGroupEvent>): RegisterToGroupEvent {
    const message = createBaseRegisterToGroupEvent();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseDeregisterFromGroupEvent(): DeregisterFromGroupEvent {
  return { groupId: Long.UZERO, denom: "" };
}

export const DeregisterFromGroupEvent = {
  encode(message: DeregisterFromGroupEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterFromGroupEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeregisterFromGroupEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.groupId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeregisterFromGroupEvent {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: DeregisterFromGroupEvent): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<DeregisterFromGroupEvent>): DeregisterFromGroupEvent {
    return DeregisterFromGroupEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeregisterFromGroupEvent>): DeregisterFromGroupEvent {
    const message = createBaseDeregisterFromGroupEvent();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseSetGroupedTokenConfigEvent(): SetGroupedTokenConfigEvent {
  return { groupedTokenConfig: undefined };
}

export const SetGroupedTokenConfigEvent = {
  encode(message: SetGroupedTokenConfigEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupedTokenConfig !== undefined) {
      GroupedTokenConfig.encode(message.groupedTokenConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupedTokenConfigEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupedTokenConfigEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupedTokenConfig = GroupedTokenConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetGroupedTokenConfigEvent {
    return {
      groupedTokenConfig: isSet(object.groupedTokenConfig)
        ? GroupedTokenConfig.fromJSON(object.groupedTokenConfig)
        : undefined,
    };
  },

  toJSON(message: SetGroupedTokenConfigEvent): unknown {
    const obj: any = {};
    message.groupedTokenConfig !== undefined && (obj.groupedTokenConfig = message.groupedTokenConfig
      ? GroupedTokenConfig.toJSON(message.groupedTokenConfig)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<SetGroupedTokenConfigEvent>): SetGroupedTokenConfigEvent {
    return SetGroupedTokenConfigEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetGroupedTokenConfigEvent>): SetGroupedTokenConfigEvent {
    const message = createBaseSetGroupedTokenConfigEvent();
    message.groupedTokenConfig = (object.groupedTokenConfig !== undefined && object.groupedTokenConfig !== null)
      ? GroupedTokenConfig.fromPartial(object.groupedTokenConfig)
      : undefined;
    return message;
  },
};

function createBaseDepositToGroupEvent(): DepositToGroupEvent {
  return { groupId: Long.UZERO, denom: "", amount: "", chequeDenom: "", chequeAmount: "" };
}

export const DepositToGroupEvent = {
  encode(message: DepositToGroupEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.chequeDenom !== "") {
      writer.uint32(34).string(message.chequeDenom);
    }
    if (message.chequeAmount !== "") {
      writer.uint32(42).string(message.chequeAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositToGroupEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositToGroupEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.groupId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chequeDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chequeAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DepositToGroupEvent {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      chequeDenom: isSet(object.chequeDenom) ? String(object.chequeDenom) : "",
      chequeAmount: isSet(object.chequeAmount) ? String(object.chequeAmount) : "",
    };
  },

  toJSON(message: DepositToGroupEvent): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.chequeDenom !== undefined && (obj.chequeDenom = message.chequeDenom);
    message.chequeAmount !== undefined && (obj.chequeAmount = message.chequeAmount);
    return obj;
  },

  create(base?: DeepPartial<DepositToGroupEvent>): DepositToGroupEvent {
    return DepositToGroupEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DepositToGroupEvent>): DepositToGroupEvent {
    const message = createBaseDepositToGroupEvent();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.chequeDenom = object.chequeDenom ?? "";
    message.chequeAmount = object.chequeAmount ?? "";
    return message;
  },
};

function createBaseWithdrawFromGroupEvent(): WithdrawFromGroupEvent {
  return { groupId: Long.UZERO, denom: "", amount: "", chequeDenom: "", chequeAmount: "" };
}

export const WithdrawFromGroupEvent = {
  encode(message: WithdrawFromGroupEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.chequeDenom !== "") {
      writer.uint32(34).string(message.chequeDenom);
    }
    if (message.chequeAmount !== "") {
      writer.uint32(42).string(message.chequeAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawFromGroupEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawFromGroupEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.groupId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chequeDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chequeAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithdrawFromGroupEvent {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      chequeDenom: isSet(object.chequeDenom) ? String(object.chequeDenom) : "",
      chequeAmount: isSet(object.chequeAmount) ? String(object.chequeAmount) : "",
    };
  },

  toJSON(message: WithdrawFromGroupEvent): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.chequeDenom !== undefined && (obj.chequeDenom = message.chequeDenom);
    message.chequeAmount !== undefined && (obj.chequeAmount = message.chequeAmount);
    return obj;
  },

  create(base?: DeepPartial<WithdrawFromGroupEvent>): WithdrawFromGroupEvent {
    return WithdrawFromGroupEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WithdrawFromGroupEvent>): WithdrawFromGroupEvent {
    const message = createBaseWithdrawFromGroupEvent();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.chequeDenom = object.chequeDenom ?? "";
    message.chequeAmount = object.chequeAmount ?? "";
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
