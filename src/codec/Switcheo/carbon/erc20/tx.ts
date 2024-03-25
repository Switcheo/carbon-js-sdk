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
export interface MsgConvertCoinResponse {}

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
export interface MsgConvertERC20Response {}

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
export interface MsgUpdateParamsResponse {}

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

export interface MsgUpdateERC20EnabledResponse {}

/** MsgRegisterERC20 defines a Msg */
export interface MsgUpdateEVMHookEnabled {
  creator: string;
  isEnabled: boolean;
}

export interface MsgUpdateEVMHookEnabledResponse {}

const baseMsgConvertCoin: object = { receiver: "", sender: "" };

export const MsgConvertCoin = {
  encode(
    message: MsgConvertCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConvertCoin } as MsgConvertCoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConvertCoin {
    const message = { ...baseMsgConvertCoin } as MsgConvertCoin;
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromJSON(object.coin)
        : undefined;
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    return message;
  },

  toJSON(message: MsgConvertCoin): unknown {
    const obj: any = {};
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConvertCoin>): MsgConvertCoin {
    const message = { ...baseMsgConvertCoin } as MsgConvertCoin;
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

const baseMsgConvertCoinResponse: object = {};

export const MsgConvertCoinResponse = {
  encode(
    _: MsgConvertCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConvertCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConvertCoinResponse } as MsgConvertCoinResponse;
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

  fromJSON(_: any): MsgConvertCoinResponse {
    const message = { ...baseMsgConvertCoinResponse } as MsgConvertCoinResponse;
    return message;
  },

  toJSON(_: MsgConvertCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgConvertCoinResponse>): MsgConvertCoinResponse {
    const message = { ...baseMsgConvertCoinResponse } as MsgConvertCoinResponse;
    return message;
  },
};

const baseMsgConvertERC20: object = {
  contractAddress: "",
  amount: "",
  receiver: "",
  sender: "",
};

export const MsgConvertERC20 = {
  encode(
    message: MsgConvertERC20,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConvertERC20 } as MsgConvertERC20;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConvertERC20 {
    const message = { ...baseMsgConvertERC20 } as MsgConvertERC20;
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    return message;
  },

  toJSON(message: MsgConvertERC20): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConvertERC20>): MsgConvertERC20 {
    const message = { ...baseMsgConvertERC20 } as MsgConvertERC20;
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

const baseMsgConvertERC20Response: object = {};

export const MsgConvertERC20Response = {
  encode(
    _: MsgConvertERC20Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConvertERC20Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConvertERC20Response,
    } as MsgConvertERC20Response;
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

  fromJSON(_: any): MsgConvertERC20Response {
    const message = {
      ...baseMsgConvertERC20Response,
    } as MsgConvertERC20Response;
    return message;
  },

  toJSON(_: MsgConvertERC20Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConvertERC20Response>
  ): MsgConvertERC20Response {
    const message = {
      ...baseMsgConvertERC20Response,
    } as MsgConvertERC20Response;
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
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.params = ParamsToUpdate.decode(reader, reader.uint32());
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
        ? ParamsToUpdate.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params
        ? ParamsToUpdate.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromPartial(object.params)
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

const baseMsgRegisterToken: object = { creator: "", denom: "" };

export const MsgRegisterToken = {
  encode(
    message: MsgRegisterToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterToken } as MsgRegisterToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

  fromJSON(object: any): MsgRegisterToken {
    const message = { ...baseMsgRegisterToken } as MsgRegisterToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterToken>): MsgRegisterToken {
    const message = { ...baseMsgRegisterToken } as MsgRegisterToken;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgRegisterTokenResponse: object = { contractAddress: "" };

export const MsgRegisterTokenResponse = {
  encode(
    message: MsgRegisterTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterTokenResponse,
    } as MsgRegisterTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterTokenResponse {
    const message = {
      ...baseMsgRegisterTokenResponse,
    } as MsgRegisterTokenResponse;
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterTokenResponse): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterTokenResponse>
  ): MsgRegisterTokenResponse {
    const message = {
      ...baseMsgRegisterTokenResponse,
    } as MsgRegisterTokenResponse;
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

const baseMsgRegisterERC20: object = { creator: "", contractAddress: "" };

export const MsgRegisterERC20 = {
  encode(
    message: MsgRegisterERC20,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterERC20 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterERC20 } as MsgRegisterERC20;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterERC20 {
    const message = { ...baseMsgRegisterERC20 } as MsgRegisterERC20;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterERC20): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterERC20>): MsgRegisterERC20 {
    const message = { ...baseMsgRegisterERC20 } as MsgRegisterERC20;
    message.creator = object.creator ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

const baseMsgRegisterERC20Response: object = { denom: "" };

export const MsgRegisterERC20Response = {
  encode(
    message: MsgRegisterERC20Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterERC20Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterERC20Response,
    } as MsgRegisterERC20Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterERC20Response {
    const message = {
      ...baseMsgRegisterERC20Response,
    } as MsgRegisterERC20Response;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterERC20Response): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterERC20Response>
  ): MsgRegisterERC20Response {
    const message = {
      ...baseMsgRegisterERC20Response,
    } as MsgRegisterERC20Response;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgUpdateERC20Enabled: object = { creator: "", isEnabled: false };

export const MsgUpdateERC20Enabled = {
  encode(
    message: MsgUpdateERC20Enabled,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.isEnabled === true) {
      writer.uint32(16).bool(message.isEnabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateERC20Enabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateERC20Enabled } as MsgUpdateERC20Enabled;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.isEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateERC20Enabled {
    const message = { ...baseMsgUpdateERC20Enabled } as MsgUpdateERC20Enabled;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : false;
    return message;
  },

  toJSON(message: MsgUpdateERC20Enabled): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateERC20Enabled>
  ): MsgUpdateERC20Enabled {
    const message = { ...baseMsgUpdateERC20Enabled } as MsgUpdateERC20Enabled;
    message.creator = object.creator ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

const baseMsgUpdateERC20EnabledResponse: object = {};

export const MsgUpdateERC20EnabledResponse = {
  encode(
    _: MsgUpdateERC20EnabledResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateERC20EnabledResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateERC20EnabledResponse,
    } as MsgUpdateERC20EnabledResponse;
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

  fromJSON(_: any): MsgUpdateERC20EnabledResponse {
    const message = {
      ...baseMsgUpdateERC20EnabledResponse,
    } as MsgUpdateERC20EnabledResponse;
    return message;
  },

  toJSON(_: MsgUpdateERC20EnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateERC20EnabledResponse>
  ): MsgUpdateERC20EnabledResponse {
    const message = {
      ...baseMsgUpdateERC20EnabledResponse,
    } as MsgUpdateERC20EnabledResponse;
    return message;
  },
};

const baseMsgUpdateEVMHookEnabled: object = { creator: "", isEnabled: false };

export const MsgUpdateEVMHookEnabled = {
  encode(
    message: MsgUpdateEVMHookEnabled,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.isEnabled === true) {
      writer.uint32(16).bool(message.isEnabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateEVMHookEnabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateEVMHookEnabled,
    } as MsgUpdateEVMHookEnabled;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.isEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateEVMHookEnabled {
    const message = {
      ...baseMsgUpdateEVMHookEnabled,
    } as MsgUpdateEVMHookEnabled;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : false;
    return message;
  },

  toJSON(message: MsgUpdateEVMHookEnabled): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateEVMHookEnabled>
  ): MsgUpdateEVMHookEnabled {
    const message = {
      ...baseMsgUpdateEVMHookEnabled,
    } as MsgUpdateEVMHookEnabled;
    message.creator = object.creator ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

const baseMsgUpdateEVMHookEnabledResponse: object = {};

export const MsgUpdateEVMHookEnabledResponse = {
  encode(
    _: MsgUpdateEVMHookEnabledResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateEVMHookEnabledResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateEVMHookEnabledResponse,
    } as MsgUpdateEVMHookEnabledResponse;
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

  fromJSON(_: any): MsgUpdateEVMHookEnabledResponse {
    const message = {
      ...baseMsgUpdateEVMHookEnabledResponse,
    } as MsgUpdateEVMHookEnabledResponse;
    return message;
  },

  toJSON(_: MsgUpdateEVMHookEnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateEVMHookEnabledResponse>
  ): MsgUpdateEVMHookEnabledResponse {
    const message = {
      ...baseMsgUpdateEVMHookEnabledResponse,
    } as MsgUpdateEVMHookEnabledResponse;
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
  UpdateERC20Enabled(
    request: MsgUpdateERC20Enabled
  ): Promise<MsgUpdateERC20EnabledResponse>;
  /** UpdateEVMHookEnabled updates whether erc20 module functions are enabled */
  UpdateEVMHookEnabled(
    request: MsgUpdateEVMHookEnabled
  ): Promise<MsgUpdateEVMHookEnabledResponse>;
  /**
   * UpdateParams defined a governance operation for updating the x/erc20 module
   * parameters. The authority is hard-coded to the Cosmos SDK x/gov module
   * account
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
    const promise = this.rpc.request(
      "Switcheo.carbon.erc20.Msg",
      "RegisterToken",
      data
    );
    return promise.then((data) =>
      MsgRegisterTokenResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterERC20(request: MsgRegisterERC20): Promise<MsgRegisterERC20Response> {
    const data = MsgRegisterERC20.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.erc20.Msg",
      "RegisterERC20",
      data
    );
    return promise.then((data) =>
      MsgRegisterERC20Response.decode(new _m0.Reader(data))
    );
  }

  ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse> {
    const data = MsgConvertCoin.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.erc20.Msg",
      "ConvertCoin",
      data
    );
    return promise.then((data) =>
      MsgConvertCoinResponse.decode(new _m0.Reader(data))
    );
  }

  ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response> {
    const data = MsgConvertERC20.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.erc20.Msg",
      "ConvertERC20",
      data
    );
    return promise.then((data) =>
      MsgConvertERC20Response.decode(new _m0.Reader(data))
    );
  }

  UpdateERC20Enabled(
    request: MsgUpdateERC20Enabled
  ): Promise<MsgUpdateERC20EnabledResponse> {
    const data = MsgUpdateERC20Enabled.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.erc20.Msg",
      "UpdateERC20Enabled",
      data
    );
    return promise.then((data) =>
      MsgUpdateERC20EnabledResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateEVMHookEnabled(
    request: MsgUpdateEVMHookEnabled
  ): Promise<MsgUpdateEVMHookEnabledResponse> {
    const data = MsgUpdateEVMHookEnabled.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.erc20.Msg",
      "UpdateEVMHookEnabled",
      data
    );
    return promise.then((data) =>
      MsgUpdateEVMHookEnabledResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.erc20.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
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
