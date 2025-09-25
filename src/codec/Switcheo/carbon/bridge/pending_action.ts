/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Int64Value, StringValue } from "../../../google/protobuf/wrappers";
import { RelayDetails } from "./bridge";

export const protobufPackage = "Switcheo.carbon.bridge";

export interface PendingRegisterToken {
  connectionId: string;
  tokenExternalAddress: string;
  decimals?: Long;
  tokenName: string;
  isCarbonOwned: boolean;
  relayDetails?: RelayDetails;
  tokenSymbol?: string;
}

export interface PendingDeregisterToken {
  connectionId: string;
  denom: string;
  relayDetails?: RelayDetails;
}

export interface PendingDeployNativeToken {
  connectionId: string;
  denom: string;
  symbol: string;
  decimals: Long;
  relayDetails?: RelayDetails;
}

export interface PendingWithdraw {
  connectionId: string;
  sender: string;
  receiver: string;
  coin?: Coin;
  relayDetails?: RelayDetails;
}

export interface PendingExecute {
  connectionId: string;
  executionContract: string;
  method: string;
  executionBytes: Uint8Array;
  relayDetails?: RelayDetails;
}

export interface PendingWithdrawAndExecute {
  connectionId: string;
  sender: string;
  executionContract: string;
  coin?: Coin;
  executionBytes: Uint8Array;
  relayDetails?: RelayDetails;
  method: string;
}

function createBasePendingRegisterToken(): PendingRegisterToken {
  return {
    connectionId: "",
    tokenExternalAddress: "",
    decimals: undefined,
    tokenName: "",
    isCarbonOwned: false,
    relayDetails: undefined,
    tokenSymbol: undefined,
  };
}

export const PendingRegisterToken = {
  encode(message: PendingRegisterToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.tokenExternalAddress !== "") {
      writer.uint32(18).string(message.tokenExternalAddress);
    }
    if (message.decimals !== undefined) {
      Int64Value.encode({ value: message.decimals! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenName !== "") {
      writer.uint32(34).string(message.tokenName);
    }
    if (message.isCarbonOwned === true) {
      writer.uint32(40).bool(message.isCarbonOwned);
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(message.relayDetails, writer.uint32(50).fork()).ldelim();
    }
    if (message.tokenSymbol !== undefined) {
      StringValue.encode({ value: message.tokenSymbol! }, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingRegisterToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingRegisterToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokenExternalAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.decimals = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tokenName = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isCarbonOwned = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tokenSymbol = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingRegisterToken {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      tokenExternalAddress: isSet(object.tokenExternalAddress) ? String(object.tokenExternalAddress) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : undefined,
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      isCarbonOwned: isSet(object.isCarbonOwned) ? Boolean(object.isCarbonOwned) : false,
      relayDetails: isSet(object.relayDetails) ? RelayDetails.fromJSON(object.relayDetails) : undefined,
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : undefined,
    };
  },

  toJSON(message: PendingRegisterToken): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.tokenExternalAddress !== undefined && (obj.tokenExternalAddress = message.tokenExternalAddress);
    message.decimals !== undefined && (obj.decimals = message.decimals);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.isCarbonOwned !== undefined && (obj.isCarbonOwned = message.isCarbonOwned);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails ? RelayDetails.toJSON(message.relayDetails) : undefined);
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    return obj;
  },

  create(base?: DeepPartial<PendingRegisterToken>): PendingRegisterToken {
    return PendingRegisterToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PendingRegisterToken>): PendingRegisterToken {
    const message = createBasePendingRegisterToken();
    message.connectionId = object.connectionId ?? "";
    message.tokenExternalAddress = object.tokenExternalAddress ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : undefined;
    message.tokenName = object.tokenName ?? "";
    message.isCarbonOwned = object.isCarbonOwned ?? false;
    message.relayDetails = (object.relayDetails !== undefined && object.relayDetails !== null)
      ? RelayDetails.fromPartial(object.relayDetails)
      : undefined;
    message.tokenSymbol = object.tokenSymbol ?? undefined;
    return message;
  },
};

function createBasePendingDeregisterToken(): PendingDeregisterToken {
  return { connectionId: "", denom: "", relayDetails: undefined };
}

export const PendingDeregisterToken = {
  encode(message: PendingDeregisterToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(message.relayDetails, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingDeregisterToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingDeregisterToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
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

          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingDeregisterToken {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      relayDetails: isSet(object.relayDetails) ? RelayDetails.fromJSON(object.relayDetails) : undefined,
    };
  },

  toJSON(message: PendingDeregisterToken): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails ? RelayDetails.toJSON(message.relayDetails) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PendingDeregisterToken>): PendingDeregisterToken {
    return PendingDeregisterToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PendingDeregisterToken>): PendingDeregisterToken {
    const message = createBasePendingDeregisterToken();
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    message.relayDetails = (object.relayDetails !== undefined && object.relayDetails !== null)
      ? RelayDetails.fromPartial(object.relayDetails)
      : undefined;
    return message;
  },
};

function createBasePendingDeployNativeToken(): PendingDeployNativeToken {
  return { connectionId: "", denom: "", symbol: "", decimals: Long.ZERO, relayDetails: undefined };
}

export const PendingDeployNativeToken = {
  encode(message: PendingDeployNativeToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(32).int64(message.decimals);
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(message.relayDetails, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingDeployNativeToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingDeployNativeToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
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

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingDeployNativeToken {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      relayDetails: isSet(object.relayDetails) ? RelayDetails.fromJSON(object.relayDetails) : undefined,
    };
  },

  toJSON(message: PendingDeployNativeToken): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails ? RelayDetails.toJSON(message.relayDetails) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PendingDeployNativeToken>): PendingDeployNativeToken {
    return PendingDeployNativeToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PendingDeployNativeToken>): PendingDeployNativeToken {
    const message = createBasePendingDeployNativeToken();
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.relayDetails = (object.relayDetails !== undefined && object.relayDetails !== null)
      ? RelayDetails.fromPartial(object.relayDetails)
      : undefined;
    return message;
  },
};

function createBasePendingWithdraw(): PendingWithdraw {
  return { connectionId: "", sender: "", receiver: "", coin: undefined, relayDetails: undefined };
}

export const PendingWithdraw = {
  encode(message: PendingWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(message.relayDetails, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingWithdraw {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sender = reader.string();
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

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingWithdraw {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      relayDetails: isSet(object.relayDetails) ? RelayDetails.fromJSON(object.relayDetails) : undefined,
    };
  },

  toJSON(message: PendingWithdraw): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails ? RelayDetails.toJSON(message.relayDetails) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PendingWithdraw>): PendingWithdraw {
    return PendingWithdraw.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PendingWithdraw>): PendingWithdraw {
    const message = createBasePendingWithdraw();
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.relayDetails = (object.relayDetails !== undefined && object.relayDetails !== null)
      ? RelayDetails.fromPartial(object.relayDetails)
      : undefined;
    return message;
  },
};

function createBasePendingExecute(): PendingExecute {
  return {
    connectionId: "",
    executionContract: "",
    method: "",
    executionBytes: new Uint8Array(),
    relayDetails: undefined,
  };
}

export const PendingExecute = {
  encode(message: PendingExecute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.executionContract !== "") {
      writer.uint32(18).string(message.executionContract);
    }
    if (message.method !== "") {
      writer.uint32(26).string(message.method);
    }
    if (message.executionBytes.length !== 0) {
      writer.uint32(34).bytes(message.executionBytes);
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(message.relayDetails, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingExecute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingExecute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.executionContract = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.method = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.executionBytes = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingExecute {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      executionContract: isSet(object.executionContract) ? String(object.executionContract) : "",
      method: isSet(object.method) ? String(object.method) : "",
      executionBytes: isSet(object.executionBytes) ? bytesFromBase64(object.executionBytes) : new Uint8Array(),
      relayDetails: isSet(object.relayDetails) ? RelayDetails.fromJSON(object.relayDetails) : undefined,
    };
  },

  toJSON(message: PendingExecute): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.executionContract !== undefined && (obj.executionContract = message.executionContract);
    message.method !== undefined && (obj.method = message.method);
    message.executionBytes !== undefined &&
      (obj.executionBytes = base64FromBytes(
        message.executionBytes !== undefined ? message.executionBytes : new Uint8Array(),
      ));
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails ? RelayDetails.toJSON(message.relayDetails) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PendingExecute>): PendingExecute {
    return PendingExecute.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PendingExecute>): PendingExecute {
    const message = createBasePendingExecute();
    message.connectionId = object.connectionId ?? "";
    message.executionContract = object.executionContract ?? "";
    message.method = object.method ?? "";
    message.executionBytes = object.executionBytes ?? new Uint8Array();
    message.relayDetails = (object.relayDetails !== undefined && object.relayDetails !== null)
      ? RelayDetails.fromPartial(object.relayDetails)
      : undefined;
    return message;
  },
};

function createBasePendingWithdrawAndExecute(): PendingWithdrawAndExecute {
  return {
    connectionId: "",
    sender: "",
    executionContract: "",
    coin: undefined,
    executionBytes: new Uint8Array(),
    relayDetails: undefined,
    method: "",
  };
}

export const PendingWithdrawAndExecute = {
  encode(message: PendingWithdrawAndExecute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.executionContract !== "") {
      writer.uint32(26).string(message.executionContract);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    if (message.executionBytes.length !== 0) {
      writer.uint32(42).bytes(message.executionBytes);
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(message.relayDetails, writer.uint32(50).fork()).ldelim();
    }
    if (message.method !== "") {
      writer.uint32(58).string(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingWithdrawAndExecute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingWithdrawAndExecute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.executionContract = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.executionBytes = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.method = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingWithdrawAndExecute {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      executionContract: isSet(object.executionContract) ? String(object.executionContract) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      executionBytes: isSet(object.executionBytes) ? bytesFromBase64(object.executionBytes) : new Uint8Array(),
      relayDetails: isSet(object.relayDetails) ? RelayDetails.fromJSON(object.relayDetails) : undefined,
      method: isSet(object.method) ? String(object.method) : "",
    };
  },

  toJSON(message: PendingWithdrawAndExecute): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.executionContract !== undefined && (obj.executionContract = message.executionContract);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.executionBytes !== undefined &&
      (obj.executionBytes = base64FromBytes(
        message.executionBytes !== undefined ? message.executionBytes : new Uint8Array(),
      ));
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails ? RelayDetails.toJSON(message.relayDetails) : undefined);
    message.method !== undefined && (obj.method = message.method);
    return obj;
  },

  create(base?: DeepPartial<PendingWithdrawAndExecute>): PendingWithdrawAndExecute {
    return PendingWithdrawAndExecute.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PendingWithdrawAndExecute>): PendingWithdrawAndExecute {
    const message = createBasePendingWithdrawAndExecute();
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.executionContract = object.executionContract ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.executionBytes = object.executionBytes ?? new Uint8Array();
    message.relayDetails = (object.relayDetails !== undefined && object.relayDetails !== null)
      ? RelayDetails.fromPartial(object.relayDetails)
      : undefined;
    message.method = object.method ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
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
