/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Token } from "./token";
import { TokenGroup, GroupedTokenConfig } from "./group";

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

const baseNewTokenEvent: object = { type: "" };

export const NewTokenEvent = {
  encode(
    message: NewTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewTokenEvent } as NewTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewTokenEvent {
    const message = { ...baseNewTokenEvent } as NewTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromJSON(object.token)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: NewTokenEvent): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<NewTokenEvent>): NewTokenEvent {
    const message = { ...baseNewTokenEvent } as NewTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromPartial(object.token)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseSyncTokenEvent: object = {};

export const SyncTokenEvent = {
  encode(
    message: SyncTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSyncTokenEvent } as SyncTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SyncTokenEvent {
    const message = { ...baseSyncTokenEvent } as SyncTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromJSON(object.token)
        : undefined;
    return message;
  },

  toJSON(message: SyncTokenEvent): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SyncTokenEvent>): SyncTokenEvent {
    const message = { ...baseSyncTokenEvent } as SyncTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromPartial(object.token)
        : undefined;
    return message;
  },
};

const baseBindTokenEvent: object = { sourceDenom: "", wrappedDenom: "" };

export const BindTokenEvent = {
  encode(
    message: BindTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourceDenom !== "") {
      writer.uint32(10).string(message.sourceDenom);
    }
    if (message.wrappedDenom !== "") {
      writer.uint32(18).string(message.wrappedDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BindTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBindTokenEvent } as BindTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceDenom = reader.string();
          break;
        case 2:
          message.wrappedDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BindTokenEvent {
    const message = { ...baseBindTokenEvent } as BindTokenEvent;
    message.sourceDenom =
      object.sourceDenom !== undefined && object.sourceDenom !== null
        ? String(object.sourceDenom)
        : "";
    message.wrappedDenom =
      object.wrappedDenom !== undefined && object.wrappedDenom !== null
        ? String(object.wrappedDenom)
        : "";
    return message;
  },

  toJSON(message: BindTokenEvent): unknown {
    const obj: any = {};
    message.sourceDenom !== undefined &&
      (obj.sourceDenom = message.sourceDenom);
    message.wrappedDenom !== undefined &&
      (obj.wrappedDenom = message.wrappedDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<BindTokenEvent>): BindTokenEvent {
    const message = { ...baseBindTokenEvent } as BindTokenEvent;
    message.sourceDenom = object.sourceDenom ?? "";
    message.wrappedDenom = object.wrappedDenom ?? "";
    return message;
  },
};

const baseUnbindTokenEvent: object = { wrappedDenom: "" };

export const UnbindTokenEvent = {
  encode(
    message: UnbindTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wrappedDenom !== "") {
      writer.uint32(10).string(message.wrappedDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbindTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnbindTokenEvent } as UnbindTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrappedDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbindTokenEvent {
    const message = { ...baseUnbindTokenEvent } as UnbindTokenEvent;
    message.wrappedDenom =
      object.wrappedDenom !== undefined && object.wrappedDenom !== null
        ? String(object.wrappedDenom)
        : "";
    return message;
  },

  toJSON(message: UnbindTokenEvent): unknown {
    const obj: any = {};
    message.wrappedDenom !== undefined &&
      (obj.wrappedDenom = message.wrappedDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<UnbindTokenEvent>): UnbindTokenEvent {
    const message = { ...baseUnbindTokenEvent } as UnbindTokenEvent;
    message.wrappedDenom = object.wrappedDenom ?? "";
    return message;
  },
};

const baseLinkTokenEvent: object = { type: "" };

export const LinkTokenEvent = {
  encode(
    message: LinkTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLinkTokenEvent } as LinkTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkTokenEvent {
    const message = { ...baseLinkTokenEvent } as LinkTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromJSON(object.token)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: LinkTokenEvent): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<LinkTokenEvent>): LinkTokenEvent {
    const message = { ...baseLinkTokenEvent } as LinkTokenEvent;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromPartial(object.token)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseNewGroupEvent: object = {};

export const NewGroupEvent = {
  encode(
    message: NewGroupEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenGroup !== undefined) {
      TokenGroup.encode(message.tokenGroup, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewGroupEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewGroupEvent } as NewGroupEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenGroup = TokenGroup.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewGroupEvent {
    const message = { ...baseNewGroupEvent } as NewGroupEvent;
    message.tokenGroup =
      object.tokenGroup !== undefined && object.tokenGroup !== null
        ? TokenGroup.fromJSON(object.tokenGroup)
        : undefined;
    return message;
  },

  toJSON(message: NewGroupEvent): unknown {
    const obj: any = {};
    message.tokenGroup !== undefined &&
      (obj.tokenGroup = message.tokenGroup
        ? TokenGroup.toJSON(message.tokenGroup)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<NewGroupEvent>): NewGroupEvent {
    const message = { ...baseNewGroupEvent } as NewGroupEvent;
    message.tokenGroup =
      object.tokenGroup !== undefined && object.tokenGroup !== null
        ? TokenGroup.fromPartial(object.tokenGroup)
        : undefined;
    return message;
  },
};

const baseUpdateGroupEvent: object = {};

export const UpdateGroupEvent = {
  encode(
    message: UpdateGroupEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenGroup !== undefined) {
      TokenGroup.encode(message.tokenGroup, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateGroupEvent } as UpdateGroupEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenGroup = TokenGroup.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupEvent {
    const message = { ...baseUpdateGroupEvent } as UpdateGroupEvent;
    message.tokenGroup =
      object.tokenGroup !== undefined && object.tokenGroup !== null
        ? TokenGroup.fromJSON(object.tokenGroup)
        : undefined;
    return message;
  },

  toJSON(message: UpdateGroupEvent): unknown {
    const obj: any = {};
    message.tokenGroup !== undefined &&
      (obj.tokenGroup = message.tokenGroup
        ? TokenGroup.toJSON(message.tokenGroup)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateGroupEvent>): UpdateGroupEvent {
    const message = { ...baseUpdateGroupEvent } as UpdateGroupEvent;
    message.tokenGroup =
      object.tokenGroup !== undefined && object.tokenGroup !== null
        ? TokenGroup.fromPartial(object.tokenGroup)
        : undefined;
    return message;
  },
};

const baseRegisterToGroupEvent: object = { groupId: Long.UZERO, denom: "" };

export const RegisterToGroupEvent = {
  encode(
    message: RegisterToGroupEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterToGroupEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterToGroupEvent } as RegisterToGroupEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
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

  fromJSON(object: any): RegisterToGroupEvent {
    const message = { ...baseRegisterToGroupEvent } as RegisterToGroupEvent;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromString(object.groupId)
        : Long.UZERO;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: RegisterToGroupEvent): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterToGroupEvent>): RegisterToGroupEvent {
    const message = { ...baseRegisterToGroupEvent } as RegisterToGroupEvent;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseDeregisterFromGroupEvent: object = { groupId: Long.UZERO, denom: "" };

export const DeregisterFromGroupEvent = {
  encode(
    message: DeregisterFromGroupEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeregisterFromGroupEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeregisterFromGroupEvent,
    } as DeregisterFromGroupEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
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

  fromJSON(object: any): DeregisterFromGroupEvent {
    const message = {
      ...baseDeregisterFromGroupEvent,
    } as DeregisterFromGroupEvent;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromString(object.groupId)
        : Long.UZERO;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: DeregisterFromGroupEvent): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeregisterFromGroupEvent>
  ): DeregisterFromGroupEvent {
    const message = {
      ...baseDeregisterFromGroupEvent,
    } as DeregisterFromGroupEvent;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseSetGroupedTokenConfigEvent: object = {};

export const SetGroupedTokenConfigEvent = {
  encode(
    message: SetGroupedTokenConfigEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupedTokenConfig !== undefined) {
      GroupedTokenConfig.encode(
        message.groupedTokenConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupedTokenConfigEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetGroupedTokenConfigEvent,
    } as SetGroupedTokenConfigEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupedTokenConfig = GroupedTokenConfig.decode(
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

  fromJSON(object: any): SetGroupedTokenConfigEvent {
    const message = {
      ...baseSetGroupedTokenConfigEvent,
    } as SetGroupedTokenConfigEvent;
    message.groupedTokenConfig =
      object.groupedTokenConfig !== undefined &&
      object.groupedTokenConfig !== null
        ? GroupedTokenConfig.fromJSON(object.groupedTokenConfig)
        : undefined;
    return message;
  },

  toJSON(message: SetGroupedTokenConfigEvent): unknown {
    const obj: any = {};
    message.groupedTokenConfig !== undefined &&
      (obj.groupedTokenConfig = message.groupedTokenConfig
        ? GroupedTokenConfig.toJSON(message.groupedTokenConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetGroupedTokenConfigEvent>
  ): SetGroupedTokenConfigEvent {
    const message = {
      ...baseSetGroupedTokenConfigEvent,
    } as SetGroupedTokenConfigEvent;
    message.groupedTokenConfig =
      object.groupedTokenConfig !== undefined &&
      object.groupedTokenConfig !== null
        ? GroupedTokenConfig.fromPartial(object.groupedTokenConfig)
        : undefined;
    return message;
  },
};

const baseDepositToGroupEvent: object = {
  groupId: Long.UZERO,
  denom: "",
  amount: "",
  chequeDenom: "",
  chequeAmount: "",
};

export const DepositToGroupEvent = {
  encode(
    message: DepositToGroupEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositToGroupEvent } as DepositToGroupEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.chequeDenom = reader.string();
          break;
        case 5:
          message.chequeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositToGroupEvent {
    const message = { ...baseDepositToGroupEvent } as DepositToGroupEvent;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromString(object.groupId)
        : Long.UZERO;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.chequeDenom =
      object.chequeDenom !== undefined && object.chequeDenom !== null
        ? String(object.chequeDenom)
        : "";
    message.chequeAmount =
      object.chequeAmount !== undefined && object.chequeAmount !== null
        ? String(object.chequeAmount)
        : "";
    return message;
  },

  toJSON(message: DepositToGroupEvent): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.chequeDenom !== undefined &&
      (obj.chequeDenom = message.chequeDenom);
    message.chequeAmount !== undefined &&
      (obj.chequeAmount = message.chequeAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<DepositToGroupEvent>): DepositToGroupEvent {
    const message = { ...baseDepositToGroupEvent } as DepositToGroupEvent;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.chequeDenom = object.chequeDenom ?? "";
    message.chequeAmount = object.chequeAmount ?? "";
    return message;
  },
};

const baseWithdrawFromGroupEvent: object = {
  groupId: Long.UZERO,
  denom: "",
  amount: "",
  chequeDenom: "",
  chequeAmount: "",
};

export const WithdrawFromGroupEvent = {
  encode(
    message: WithdrawFromGroupEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WithdrawFromGroupEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawFromGroupEvent } as WithdrawFromGroupEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.chequeDenom = reader.string();
          break;
        case 5:
          message.chequeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawFromGroupEvent {
    const message = { ...baseWithdrawFromGroupEvent } as WithdrawFromGroupEvent;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromString(object.groupId)
        : Long.UZERO;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.chequeDenom =
      object.chequeDenom !== undefined && object.chequeDenom !== null
        ? String(object.chequeDenom)
        : "";
    message.chequeAmount =
      object.chequeAmount !== undefined && object.chequeAmount !== null
        ? String(object.chequeAmount)
        : "";
    return message;
  },

  toJSON(message: WithdrawFromGroupEvent): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.chequeDenom !== undefined &&
      (obj.chequeDenom = message.chequeDenom);
    message.chequeAmount !== undefined &&
      (obj.chequeAmount = message.chequeAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawFromGroupEvent>
  ): WithdrawFromGroupEvent {
    const message = { ...baseWithdrawFromGroupEvent } as WithdrawFromGroupEvent;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.chequeDenom = object.chequeDenom ?? "";
    message.chequeAmount = object.chequeAmount ?? "";
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
