/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.erc20";

/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoin {
  /**
   * coin is a Cosmos coin whose denomination is registered in a token pair. The
   * coin amount defines the amount of coins to convert.
   */
  coin?: Coin;
  /** receiver is the hex address to receive ERC20 token */
  receiver: string;
  /**
   * sender is the cosmos bech32 address from the owner of the given Cosmos
   * coins
   */
  sender: string;
}

/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {
}

/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20 {
  /**
   * contract_address of an ERC20 token contract, that is registered in a token
   * pair
   */
  contractAddress: string;
  /** amount of ERC20 tokens to convert */
  amount: string;
  /** receiver is the bech32 address to receive native Cosmos coins */
  receiver: string;
  /**
   * sender is the merged address (in bech32) of the erc20 account that contains
   * the tokens to convert
   */
  sender: string;
}

/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {
}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}

/**
 * MsgRegisterToken defines a Msg to register an existing token on the token
 * mapping and deploys a new ERC20 contract for it
 */
export interface MsgRegisterToken {
  creator: string;
  denom: string;
}

export interface MsgRegisterTokenResponse {
  /** deployed contract */
  contractAddress: string;
}

/**
 * MsgRegisterERC20 defines a Msg to register an existing erc20 contract on the
 * token mapping and creates a new cosmos token for it
 */
export interface MsgRegisterERC20 {
  creator: string;
  contractAddress: string;
}

export interface MsgRegisterERC20Response {
  /** created denom */
  denom: string;
}

/** MsgRegisterERC20 defines a Msg */
export interface MsgUpdateERC20Enabled {
  creator: string;
  isEnabled: boolean;
}

export interface MsgUpdateERC20EnabledResponse {
}

/** MsgRegisterERC20 defines a Msg */
export interface MsgUpdateEVMHookEnabled {
  creator: string;
  isEnabled: boolean;
}

export interface MsgUpdateEVMHookEnabledResponse {
}

function createBaseMsgConvertCoin(): MsgConvertCoin {
  return { coin: undefined, receiver: "", sender: "" };
}

export const MsgConvertCoin = {
  encode(message: MsgConvertCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConvertCoin {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgConvertCoin): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create(base?: DeepPartial<MsgConvertCoin>): MsgConvertCoin {
    return MsgConvertCoin.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgConvertCoin>): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgConvertCoinResponse(): MsgConvertCoinResponse {
  return {};
}

export const MsgConvertCoinResponse = {
  encode(_: MsgConvertCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgConvertCoinResponse {
    return {};
  },

  toJSON(_: MsgConvertCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgConvertCoinResponse>): MsgConvertCoinResponse {
    return MsgConvertCoinResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgConvertCoinResponse>): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
};

function createBaseMsgConvertERC20(): MsgConvertERC20 {
  return { contractAddress: "", amount: "", receiver: "", sender: "" };
}

export const MsgConvertERC20 = {
  encode(message: MsgConvertERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConvertERC20 {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgConvertERC20): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create(base?: DeepPartial<MsgConvertERC20>): MsgConvertERC20 {
    return MsgConvertERC20.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgConvertERC20>): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgConvertERC20Response(): MsgConvertERC20Response {
  return {};
}

export const MsgConvertERC20Response = {
  encode(_: MsgConvertERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgConvertERC20Response {
    return {};
  },

  toJSON(_: MsgConvertERC20Response): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgConvertERC20Response>): MsgConvertERC20Response {
    return MsgConvertERC20Response.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgConvertERC20Response>): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? ParamsToUpdate.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? ParamsToUpdate.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ParamsToUpdate.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgRegisterToken(): MsgRegisterToken {
  return { creator: "", denom: "" };
}

export const MsgRegisterToken = {
  encode(message: MsgRegisterToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

  fromJSON(object: any): MsgRegisterToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgRegisterToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterToken>): MsgRegisterToken {
    return MsgRegisterToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRegisterToken>): MsgRegisterToken {
    const message = createBaseMsgRegisterToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgRegisterTokenResponse(): MsgRegisterTokenResponse {
  return { contractAddress: "" };
}

export const MsgRegisterTokenResponse = {
  encode(message: MsgRegisterTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterTokenResponse {
    return { contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "" };
  },

  toJSON(message: MsgRegisterTokenResponse): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterTokenResponse>): MsgRegisterTokenResponse {
    return MsgRegisterTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRegisterTokenResponse>): MsgRegisterTokenResponse {
    const message = createBaseMsgRegisterTokenResponse();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

function createBaseMsgRegisterERC20(): MsgRegisterERC20 {
  return { creator: "", contractAddress: "" };
}

export const MsgRegisterERC20 = {
  encode(message: MsgRegisterERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterERC20 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterERC20 {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
    };
  },

  toJSON(message: MsgRegisterERC20): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterERC20>): MsgRegisterERC20 {
    return MsgRegisterERC20.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRegisterERC20>): MsgRegisterERC20 {
    const message = createBaseMsgRegisterERC20();
    message.creator = object.creator ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

function createBaseMsgRegisterERC20Response(): MsgRegisterERC20Response {
  return { denom: "" };
}

export const MsgRegisterERC20Response = {
  encode(message: MsgRegisterERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterERC20Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterERC20Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): MsgRegisterERC20Response {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: MsgRegisterERC20Response): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterERC20Response>): MsgRegisterERC20Response {
    return MsgRegisterERC20Response.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRegisterERC20Response>): MsgRegisterERC20Response {
    const message = createBaseMsgRegisterERC20Response();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgUpdateERC20Enabled(): MsgUpdateERC20Enabled {
  return { creator: "", isEnabled: false };
}

export const MsgUpdateERC20Enabled = {
  encode(message: MsgUpdateERC20Enabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.isEnabled === true) {
      writer.uint32(16).bool(message.isEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateERC20Enabled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateERC20Enabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateERC20Enabled {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
    };
  },

  toJSON(message: MsgUpdateERC20Enabled): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateERC20Enabled>): MsgUpdateERC20Enabled {
    return MsgUpdateERC20Enabled.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateERC20Enabled>): MsgUpdateERC20Enabled {
    const message = createBaseMsgUpdateERC20Enabled();
    message.creator = object.creator ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

function createBaseMsgUpdateERC20EnabledResponse(): MsgUpdateERC20EnabledResponse {
  return {};
}

export const MsgUpdateERC20EnabledResponse = {
  encode(_: MsgUpdateERC20EnabledResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateERC20EnabledResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateERC20EnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateERC20EnabledResponse {
    return {};
  },

  toJSON(_: MsgUpdateERC20EnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateERC20EnabledResponse>): MsgUpdateERC20EnabledResponse {
    return MsgUpdateERC20EnabledResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateERC20EnabledResponse>): MsgUpdateERC20EnabledResponse {
    const message = createBaseMsgUpdateERC20EnabledResponse();
    return message;
  },
};

function createBaseMsgUpdateEVMHookEnabled(): MsgUpdateEVMHookEnabled {
  return { creator: "", isEnabled: false };
}

export const MsgUpdateEVMHookEnabled = {
  encode(message: MsgUpdateEVMHookEnabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.isEnabled === true) {
      writer.uint32(16).bool(message.isEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEVMHookEnabled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEVMHookEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateEVMHookEnabled {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
    };
  },

  toJSON(message: MsgUpdateEVMHookEnabled): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateEVMHookEnabled>): MsgUpdateEVMHookEnabled {
    return MsgUpdateEVMHookEnabled.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateEVMHookEnabled>): MsgUpdateEVMHookEnabled {
    const message = createBaseMsgUpdateEVMHookEnabled();
    message.creator = object.creator ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

function createBaseMsgUpdateEVMHookEnabledResponse(): MsgUpdateEVMHookEnabledResponse {
  return {};
}

export const MsgUpdateEVMHookEnabledResponse = {
  encode(_: MsgUpdateEVMHookEnabledResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEVMHookEnabledResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEVMHookEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateEVMHookEnabledResponse {
    return {};
  },

  toJSON(_: MsgUpdateEVMHookEnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateEVMHookEnabledResponse>): MsgUpdateEVMHookEnabledResponse {
    return MsgUpdateEVMHookEnabledResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateEVMHookEnabledResponse>): MsgUpdateEVMHookEnabledResponse {
    const message = createBaseMsgUpdateEVMHookEnabledResponse();
    return message;
  },
};

/** Msg defines the erc20 Msg service. */
export interface Msg {
  /**
   * RegisterToken registers an existing token on the token mapping and deploys
   * a new ERC20 contract for it
   */
  RegisterToken(request: MsgRegisterToken): Promise<MsgRegisterTokenResponse>;
  /**
   * RegisterERC20 registers an existing erc20 contract on the token mapping and
   * creates a new cosmos token for it
   */
  RegisterERC20(request: MsgRegisterERC20): Promise<MsgRegisterERC20Response>;
  /**
   * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
   * that is registered on the token mapping.
   */
  ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse>;
  /**
   * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
   * contract that is registered on the token mapping.
   */
  ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response>;
  /** UpdateERC20Enabled updates whether erc20 module functions are enabled */
  UpdateERC20Enabled(request: MsgUpdateERC20Enabled): Promise<MsgUpdateERC20EnabledResponse>;
  /** UpdateEVMHookEnabled updates whether erc20 module functions are enabled */
  UpdateEVMHookEnabled(request: MsgUpdateEVMHookEnabled): Promise<MsgUpdateEVMHookEnabledResponse>;
  /**
   * UpdateParams defined a governance operation for updating the x/erc20 module
   * parameters. The authority is hard-coded to the Cosmos SDK x/gov module
   * account
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.erc20.Msg";
    this.rpc = rpc;
    this.RegisterToken = this.RegisterToken.bind(this);
    this.RegisterERC20 = this.RegisterERC20.bind(this);
    this.ConvertCoin = this.ConvertCoin.bind(this);
    this.ConvertERC20 = this.ConvertERC20.bind(this);
    this.UpdateERC20Enabled = this.UpdateERC20Enabled.bind(this);
    this.UpdateEVMHookEnabled = this.UpdateEVMHookEnabled.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  RegisterToken(request: MsgRegisterToken): Promise<MsgRegisterTokenResponse> {
    const data = MsgRegisterToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterToken", data);
    return promise.then((data) => MsgRegisterTokenResponse.decode(_m0.Reader.create(data)));
  }

  RegisterERC20(request: MsgRegisterERC20): Promise<MsgRegisterERC20Response> {
    const data = MsgRegisterERC20.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterERC20", data);
    return promise.then((data) => MsgRegisterERC20Response.decode(_m0.Reader.create(data)));
  }

  ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse> {
    const data = MsgConvertCoin.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConvertCoin", data);
    return promise.then((data) => MsgConvertCoinResponse.decode(_m0.Reader.create(data)));
  }

  ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response> {
    const data = MsgConvertERC20.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConvertERC20", data);
    return promise.then((data) => MsgConvertERC20Response.decode(_m0.Reader.create(data)));
  }

  UpdateERC20Enabled(request: MsgUpdateERC20Enabled): Promise<MsgUpdateERC20EnabledResponse> {
    const data = MsgUpdateERC20Enabled.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateERC20Enabled", data);
    return promise.then((data) => MsgUpdateERC20EnabledResponse.decode(_m0.Reader.create(data)));
  }

  UpdateEVMHookEnabled(request: MsgUpdateEVMHookEnabled): Promise<MsgUpdateEVMHookEnabledResponse> {
    const data = MsgUpdateEVMHookEnabled.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateEVMHookEnabled", data);
    return promise.then((data) => MsgUpdateEVMHookEnabledResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
