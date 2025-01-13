/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { RelayDetails } from "./bridge";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Int64Value, StringValue } from "../../../google/protobuf/wrappers";

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

const basePendingRegisterToken: object = {
  connectionId: "",
  tokenExternalAddress: "",
  tokenName: "",
  isCarbonOwned: false,
};

export const PendingRegisterToken = {
  encode(
    message: PendingRegisterToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.tokenExternalAddress !== "") {
      writer.uint32(18).string(message.tokenExternalAddress);
    }
    if (message.decimals !== undefined) {
      Int64Value.encode(
        { value: message.decimals! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.tokenName !== "") {
      writer.uint32(34).string(message.tokenName);
    }
    if (message.isCarbonOwned === true) {
      writer.uint32(40).bool(message.isCarbonOwned);
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(
        message.relayDetails,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.tokenSymbol !== undefined) {
      StringValue.encode(
        { value: message.tokenSymbol! },
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PendingRegisterToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePendingRegisterToken } as PendingRegisterToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.tokenExternalAddress = reader.string();
          break;
        case 3:
          message.decimals = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.tokenName = reader.string();
          break;
        case 5:
          message.isCarbonOwned = reader.bool();
          break;
        case 6:
          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          break;
        case 7:
          message.tokenSymbol = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingRegisterToken {
    const message = { ...basePendingRegisterToken } as PendingRegisterToken;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.tokenExternalAddress =
      object.tokenExternalAddress !== undefined &&
      object.tokenExternalAddress !== null
        ? String(object.tokenExternalAddress)
        : "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromValue(object.decimals)
        : undefined;
    message.tokenName =
      object.tokenName !== undefined && object.tokenName !== null
        ? String(object.tokenName)
        : "";
    message.isCarbonOwned =
      object.isCarbonOwned !== undefined && object.isCarbonOwned !== null
        ? Boolean(object.isCarbonOwned)
        : false;
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromJSON(object.relayDetails)
        : undefined;
    message.tokenSymbol =
      object.tokenSymbol !== undefined && object.tokenSymbol !== null
        ? String(object.tokenSymbol)
        : undefined;
    return message;
  },

  toJSON(message: PendingRegisterToken): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.tokenExternalAddress !== undefined &&
      (obj.tokenExternalAddress = message.tokenExternalAddress);
    message.decimals !== undefined && (obj.decimals = message.decimals);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.isCarbonOwned !== undefined &&
      (obj.isCarbonOwned = message.isCarbonOwned);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails
        ? RelayDetails.toJSON(message.relayDetails)
        : undefined);
    message.tokenSymbol !== undefined &&
      (obj.tokenSymbol = message.tokenSymbol);
    return obj;
  },

  fromPartial(object: DeepPartial<PendingRegisterToken>): PendingRegisterToken {
    const message = { ...basePendingRegisterToken } as PendingRegisterToken;
    message.connectionId = object.connectionId ?? "";
    message.tokenExternalAddress = object.tokenExternalAddress ?? "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromValue(object.decimals)
        : undefined;
    message.tokenName = object.tokenName ?? "";
    message.isCarbonOwned = object.isCarbonOwned ?? false;
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromPartial(object.relayDetails)
        : undefined;
    message.tokenSymbol = object.tokenSymbol ?? undefined;
    return message;
  },
};

const basePendingDeregisterToken: object = { connectionId: "", denom: "" };

export const PendingDeregisterToken = {
  encode(
    message: PendingDeregisterToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(
        message.relayDetails,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PendingDeregisterToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePendingDeregisterToken } as PendingDeregisterToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingDeregisterToken {
    const message = { ...basePendingDeregisterToken } as PendingDeregisterToken;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromJSON(object.relayDetails)
        : undefined;
    return message;
  },

  toJSON(message: PendingDeregisterToken): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails
        ? RelayDetails.toJSON(message.relayDetails)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PendingDeregisterToken>
  ): PendingDeregisterToken {
    const message = { ...basePendingDeregisterToken } as PendingDeregisterToken;
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromPartial(object.relayDetails)
        : undefined;
    return message;
  },
};

const basePendingDeployNativeToken: object = {
  connectionId: "",
  denom: "",
  symbol: "",
  decimals: Long.ZERO,
};

export const PendingDeployNativeToken = {
  encode(
    message: PendingDeployNativeToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      RelayDetails.encode(
        message.relayDetails,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PendingDeployNativeToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePendingDeployNativeToken,
    } as PendingDeployNativeToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.decimals = reader.int64() as Long;
          break;
        case 5:
          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingDeployNativeToken {
    const message = {
      ...basePendingDeployNativeToken,
    } as PendingDeployNativeToken;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.symbol =
      object.symbol !== undefined && object.symbol !== null
        ? String(object.symbol)
        : "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromString(object.decimals)
        : Long.ZERO;
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromJSON(object.relayDetails)
        : undefined;
    return message;
  },

  toJSON(message: PendingDeployNativeToken): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined &&
      (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails
        ? RelayDetails.toJSON(message.relayDetails)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PendingDeployNativeToken>
  ): PendingDeployNativeToken {
    const message = {
      ...basePendingDeployNativeToken,
    } as PendingDeployNativeToken;
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromValue(object.decimals)
        : Long.ZERO;
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromPartial(object.relayDetails)
        : undefined;
    return message;
  },
};

const basePendingWithdraw: object = {
  connectionId: "",
  sender: "",
  receiver: "",
};

export const PendingWithdraw = {
  encode(
    message: PendingWithdraw,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      RelayDetails.encode(
        message.relayDetails,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePendingWithdraw } as PendingWithdraw;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingWithdraw {
    const message = { ...basePendingWithdraw } as PendingWithdraw;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromJSON(object.coin)
        : undefined;
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromJSON(object.relayDetails)
        : undefined;
    return message;
  },

  toJSON(message: PendingWithdraw): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails
        ? RelayDetails.toJSON(message.relayDetails)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PendingWithdraw>): PendingWithdraw {
    const message = { ...basePendingWithdraw } as PendingWithdraw;
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromPartial(object.relayDetails)
        : undefined;
    return message;
  },
};

const basePendingExecute: object = {
  connectionId: "",
  executionContract: "",
  method: "",
};

export const PendingExecute = {
  encode(
    message: PendingExecute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      RelayDetails.encode(
        message.relayDetails,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingExecute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePendingExecute } as PendingExecute;
    message.executionBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.executionContract = reader.string();
          break;
        case 3:
          message.method = reader.string();
          break;
        case 4:
          message.executionBytes = reader.bytes();
          break;
        case 5:
          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingExecute {
    const message = { ...basePendingExecute } as PendingExecute;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.executionContract =
      object.executionContract !== undefined &&
      object.executionContract !== null
        ? String(object.executionContract)
        : "";
    message.method =
      object.method !== undefined && object.method !== null
        ? String(object.method)
        : "";
    message.executionBytes =
      object.executionBytes !== undefined && object.executionBytes !== null
        ? bytesFromBase64(object.executionBytes)
        : new Uint8Array();
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromJSON(object.relayDetails)
        : undefined;
    return message;
  },

  toJSON(message: PendingExecute): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.executionContract !== undefined &&
      (obj.executionContract = message.executionContract);
    message.method !== undefined && (obj.method = message.method);
    message.executionBytes !== undefined &&
      (obj.executionBytes = base64FromBytes(
        message.executionBytes !== undefined
          ? message.executionBytes
          : new Uint8Array()
      ));
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails
        ? RelayDetails.toJSON(message.relayDetails)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PendingExecute>): PendingExecute {
    const message = { ...basePendingExecute } as PendingExecute;
    message.connectionId = object.connectionId ?? "";
    message.executionContract = object.executionContract ?? "";
    message.method = object.method ?? "";
    message.executionBytes = object.executionBytes ?? new Uint8Array();
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromPartial(object.relayDetails)
        : undefined;
    return message;
  },
};

const basePendingWithdrawAndExecute: object = {
  connectionId: "",
  sender: "",
  executionContract: "",
  method: "",
};

export const PendingWithdrawAndExecute = {
  encode(
    message: PendingWithdrawAndExecute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      RelayDetails.encode(
        message.relayDetails,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.method !== "") {
      writer.uint32(58).string(message.method);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PendingWithdrawAndExecute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePendingWithdrawAndExecute,
    } as PendingWithdrawAndExecute;
    message.executionBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.executionContract = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.executionBytes = reader.bytes();
          break;
        case 6:
          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          break;
        case 7:
          message.method = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingWithdrawAndExecute {
    const message = {
      ...basePendingWithdrawAndExecute,
    } as PendingWithdrawAndExecute;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.executionContract =
      object.executionContract !== undefined &&
      object.executionContract !== null
        ? String(object.executionContract)
        : "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromJSON(object.coin)
        : undefined;
    message.executionBytes =
      object.executionBytes !== undefined && object.executionBytes !== null
        ? bytesFromBase64(object.executionBytes)
        : new Uint8Array();
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromJSON(object.relayDetails)
        : undefined;
    message.method =
      object.method !== undefined && object.method !== null
        ? String(object.method)
        : "";
    return message;
  },

  toJSON(message: PendingWithdrawAndExecute): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.executionContract !== undefined &&
      (obj.executionContract = message.executionContract);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.executionBytes !== undefined &&
      (obj.executionBytes = base64FromBytes(
        message.executionBytes !== undefined
          ? message.executionBytes
          : new Uint8Array()
      ));
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails
        ? RelayDetails.toJSON(message.relayDetails)
        : undefined);
    message.method !== undefined && (obj.method = message.method);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PendingWithdrawAndExecute>
  ): PendingWithdrawAndExecute {
    const message = {
      ...basePendingWithdrawAndExecute,
    } as PendingWithdrawAndExecute;
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.executionContract = object.executionContract ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.executionBytes = object.executionBytes ?? new Uint8Array();
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromPartial(object.relayDetails)
        : undefined;
    message.method = object.method ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
