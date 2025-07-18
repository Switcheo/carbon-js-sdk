/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.coin";

/** TokenGroup stored in store */
export interface TokenGroup {
  /** auto-incrementing id */
  id: Long;
  /** admin/govt determined name */
  name: string;
  /** denom for the cheque token that represents a token that can be swap */
  chequeDenom: string;
  /** 1-to-1 with any underlying tokens in the vault */
  vaultAddress: string;
}

/**
 * TokenGroupDetails used for for querying. same as TokenGroup but appended with
 * registered_denoms
 */
export interface TokenGroupDetails {
  tokenGroup?: TokenGroup;
  registeredTokens: GroupedTokenConfig[];
}

/** GroupedTokenConfig config for each token in the group */
export interface GroupedTokenConfig {
  denom: string;
  isActive: boolean;
}

function createBaseTokenGroup(): TokenGroup {
  return { id: Long.UZERO, name: "", chequeDenom: "", vaultAddress: "" };
}

export const TokenGroup = {
  encode(message: TokenGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.chequeDenom !== "") {
      writer.uint32(26).string(message.chequeDenom);
    }
    if (message.vaultAddress !== "") {
      writer.uint32(34).string(message.vaultAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chequeDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vaultAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenGroup {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      chequeDenom: isSet(object.chequeDenom) ? String(object.chequeDenom) : "",
      vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
    };
  },

  toJSON(message: TokenGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.chequeDenom !== undefined && (obj.chequeDenom = message.chequeDenom);
    message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
    return obj;
  },

  create(base?: DeepPartial<TokenGroup>): TokenGroup {
    return TokenGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TokenGroup>): TokenGroup {
    const message = createBaseTokenGroup();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.chequeDenom = object.chequeDenom ?? "";
    message.vaultAddress = object.vaultAddress ?? "";
    return message;
  },
};

function createBaseTokenGroupDetails(): TokenGroupDetails {
  return { tokenGroup: undefined, registeredTokens: [] };
}

export const TokenGroupDetails = {
  encode(message: TokenGroupDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenGroup !== undefined) {
      TokenGroup.encode(message.tokenGroup, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registeredTokens) {
      GroupedTokenConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenGroupDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenGroupDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenGroup = TokenGroup.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.registeredTokens.push(GroupedTokenConfig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenGroupDetails {
    return {
      tokenGroup: isSet(object.tokenGroup) ? TokenGroup.fromJSON(object.tokenGroup) : undefined,
      registeredTokens: Array.isArray(object?.registeredTokens)
        ? object.registeredTokens.map((e: any) => GroupedTokenConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TokenGroupDetails): unknown {
    const obj: any = {};
    message.tokenGroup !== undefined &&
      (obj.tokenGroup = message.tokenGroup ? TokenGroup.toJSON(message.tokenGroup) : undefined);
    if (message.registeredTokens) {
      obj.registeredTokens = message.registeredTokens.map((e) => e ? GroupedTokenConfig.toJSON(e) : undefined);
    } else {
      obj.registeredTokens = [];
    }
    return obj;
  },

  create(base?: DeepPartial<TokenGroupDetails>): TokenGroupDetails {
    return TokenGroupDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TokenGroupDetails>): TokenGroupDetails {
    const message = createBaseTokenGroupDetails();
    message.tokenGroup = (object.tokenGroup !== undefined && object.tokenGroup !== null)
      ? TokenGroup.fromPartial(object.tokenGroup)
      : undefined;
    message.registeredTokens = object.registeredTokens?.map((e) => GroupedTokenConfig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGroupedTokenConfig(): GroupedTokenConfig {
  return { denom: "", isActive: false };
}

export const GroupedTokenConfig = {
  encode(message: GroupedTokenConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.isActive === true) {
      writer.uint32(16).bool(message.isActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupedTokenConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupedTokenConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isActive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupedTokenConfig {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
    };
  },

  toJSON(message: GroupedTokenConfig): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  create(base?: DeepPartial<GroupedTokenConfig>): GroupedTokenConfig {
    return GroupedTokenConfig.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GroupedTokenConfig>): GroupedTokenConfig {
    const message = createBaseGroupedTokenConfig();
    message.denom = object.denom ?? "";
    message.isActive = object.isActive ?? false;
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
