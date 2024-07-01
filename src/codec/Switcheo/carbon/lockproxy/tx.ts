/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.lockproxy";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreate {
  creator: string;
}

export interface MsgCreateResponse {}

export interface MsgBind {
  creator: string;
  denom: string;
  lockProxyHash: Uint8Array;
  nativeChainId: Long;
  nativeLockProxyHash: Uint8Array;
  nativeAssetHash: Uint8Array;
}

export interface MsgBindResponse {}

export interface MsgLock {
  denom: string;
  fromLockProxy: Uint8Array;
  fromAddress: string;
  fromAssetId: Uint8Array;
  toChainId: Long;
  toLockProxy: Uint8Array;
  toAssetId: Uint8Array;
  toAddress: Uint8Array;
  amount: string;
  deductFeeInLock: boolean;
  feeAmount: string;
  feeAddress: string;
}

export interface MsgLockResponse {}

export interface MsgSetWrapperMapping {
  creator: string;
  chainId: Long;
  fromContractAddress: string;
  toContractAddress: string;
  lockType: Long;
}

export interface MsgSetWrapperMappingResponse {}

export interface MsgDeleteWrapperMapping {
  creator: string;
  chainId: Long;
  contractAddress: string;
}

export interface MsgDeleteWrapperMappingResponse {}

const baseMsgCreate: object = { creator: "" };

export const MsgCreate = {
  encode(
    message: MsgCreate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreate } as MsgCreate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    const message = { ...baseMsgCreate } as MsgCreate;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    return message;
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreate>): MsgCreate {
    const message = { ...baseMsgCreate } as MsgCreate;
    message.creator = object.creator ?? "";
    return message;
  },
};

const baseMsgCreateResponse: object = {};

export const MsgCreateResponse = {
  encode(
    _: MsgCreateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
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

  fromJSON(_: any): MsgCreateResponse {
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    return message;
  },

  toJSON(_: MsgCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    return message;
  },
};

const baseMsgBind: object = {
  creator: "",
  denom: "",
  nativeChainId: Long.UZERO,
};

export const MsgBind = {
  encode(
    message: MsgBind,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.lockProxyHash.length !== 0) {
      writer.uint32(26).bytes(message.lockProxyHash);
    }
    if (!message.nativeChainId.isZero()) {
      writer.uint32(32).uint64(message.nativeChainId);
    }
    if (message.nativeLockProxyHash.length !== 0) {
      writer.uint32(42).bytes(message.nativeLockProxyHash);
    }
    if (message.nativeAssetHash.length !== 0) {
      writer.uint32(50).bytes(message.nativeAssetHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBind {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBind } as MsgBind;
    message.lockProxyHash = new Uint8Array();
    message.nativeLockProxyHash = new Uint8Array();
    message.nativeAssetHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.lockProxyHash = reader.bytes();
          break;
        case 4:
          message.nativeChainId = reader.uint64() as Long;
          break;
        case 5:
          message.nativeLockProxyHash = reader.bytes();
          break;
        case 6:
          message.nativeAssetHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBind {
    const message = { ...baseMsgBind } as MsgBind;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.lockProxyHash =
      object.lockProxyHash !== undefined && object.lockProxyHash !== null
        ? bytesFromBase64(object.lockProxyHash)
        : new Uint8Array();
    message.nativeChainId =
      object.nativeChainId !== undefined && object.nativeChainId !== null
        ? Long.fromString(object.nativeChainId)
        : Long.UZERO;
    message.nativeLockProxyHash =
      object.nativeLockProxyHash !== undefined &&
      object.nativeLockProxyHash !== null
        ? bytesFromBase64(object.nativeLockProxyHash)
        : new Uint8Array();
    message.nativeAssetHash =
      object.nativeAssetHash !== undefined && object.nativeAssetHash !== null
        ? bytesFromBase64(object.nativeAssetHash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: MsgBind): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.lockProxyHash !== undefined &&
      (obj.lockProxyHash = base64FromBytes(
        message.lockProxyHash !== undefined
          ? message.lockProxyHash
          : new Uint8Array()
      ));
    message.nativeChainId !== undefined &&
      (obj.nativeChainId = (message.nativeChainId || Long.UZERO).toString());
    message.nativeLockProxyHash !== undefined &&
      (obj.nativeLockProxyHash = base64FromBytes(
        message.nativeLockProxyHash !== undefined
          ? message.nativeLockProxyHash
          : new Uint8Array()
      ));
    message.nativeAssetHash !== undefined &&
      (obj.nativeAssetHash = base64FromBytes(
        message.nativeAssetHash !== undefined
          ? message.nativeAssetHash
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBind>): MsgBind {
    const message = { ...baseMsgBind } as MsgBind;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.lockProxyHash = object.lockProxyHash ?? new Uint8Array();
    message.nativeChainId =
      object.nativeChainId !== undefined && object.nativeChainId !== null
        ? Long.fromValue(object.nativeChainId)
        : Long.UZERO;
    message.nativeLockProxyHash =
      object.nativeLockProxyHash ?? new Uint8Array();
    message.nativeAssetHash = object.nativeAssetHash ?? new Uint8Array();
    return message;
  },
};

const baseMsgBindResponse: object = {};

export const MsgBindResponse = {
  encode(
    _: MsgBindResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBindResponse } as MsgBindResponse;
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

  fromJSON(_: any): MsgBindResponse {
    const message = { ...baseMsgBindResponse } as MsgBindResponse;
    return message;
  },

  toJSON(_: MsgBindResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBindResponse>): MsgBindResponse {
    const message = { ...baseMsgBindResponse } as MsgBindResponse;
    return message;
  },
};

const baseMsgLock: object = {
  denom: "",
  fromAddress: "",
  toChainId: Long.UZERO,
  amount: "",
  deductFeeInLock: false,
  feeAmount: "",
  feeAddress: "",
};

export const MsgLock = {
  encode(
    message: MsgLock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.fromLockProxy.length !== 0) {
      writer.uint32(18).bytes(message.fromLockProxy);
    }
    if (message.fromAddress !== "") {
      writer.uint32(26).string(message.fromAddress);
    }
    if (message.fromAssetId.length !== 0) {
      writer.uint32(34).bytes(message.fromAssetId);
    }
    if (!message.toChainId.isZero()) {
      writer.uint32(40).uint64(message.toChainId);
    }
    if (message.toLockProxy.length !== 0) {
      writer.uint32(50).bytes(message.toLockProxy);
    }
    if (message.toAssetId.length !== 0) {
      writer.uint32(58).bytes(message.toAssetId);
    }
    if (message.toAddress.length !== 0) {
      writer.uint32(66).bytes(message.toAddress);
    }
    if (message.amount !== "") {
      writer.uint32(74).string(message.amount);
    }
    if (message.deductFeeInLock === true) {
      writer.uint32(80).bool(message.deductFeeInLock);
    }
    if (message.feeAmount !== "") {
      writer.uint32(90).string(message.feeAmount);
    }
    if (message.feeAddress !== "") {
      writer.uint32(98).string(message.feeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLock } as MsgLock;
    message.fromLockProxy = new Uint8Array();
    message.fromAssetId = new Uint8Array();
    message.toLockProxy = new Uint8Array();
    message.toAssetId = new Uint8Array();
    message.toAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.fromLockProxy = reader.bytes();
          break;
        case 3:
          message.fromAddress = reader.string();
          break;
        case 4:
          message.fromAssetId = reader.bytes();
          break;
        case 5:
          message.toChainId = reader.uint64() as Long;
          break;
        case 6:
          message.toLockProxy = reader.bytes();
          break;
        case 7:
          message.toAssetId = reader.bytes();
          break;
        case 8:
          message.toAddress = reader.bytes();
          break;
        case 9:
          message.amount = reader.string();
          break;
        case 10:
          message.deductFeeInLock = reader.bool();
          break;
        case 11:
          message.feeAmount = reader.string();
          break;
        case 12:
          message.feeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLock {
    const message = { ...baseMsgLock } as MsgLock;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.fromLockProxy =
      object.fromLockProxy !== undefined && object.fromLockProxy !== null
        ? bytesFromBase64(object.fromLockProxy)
        : new Uint8Array();
    message.fromAddress =
      object.fromAddress !== undefined && object.fromAddress !== null
        ? String(object.fromAddress)
        : "";
    message.fromAssetId =
      object.fromAssetId !== undefined && object.fromAssetId !== null
        ? bytesFromBase64(object.fromAssetId)
        : new Uint8Array();
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromString(object.toChainId)
        : Long.UZERO;
    message.toLockProxy =
      object.toLockProxy !== undefined && object.toLockProxy !== null
        ? bytesFromBase64(object.toLockProxy)
        : new Uint8Array();
    message.toAssetId =
      object.toAssetId !== undefined && object.toAssetId !== null
        ? bytesFromBase64(object.toAssetId)
        : new Uint8Array();
    message.toAddress =
      object.toAddress !== undefined && object.toAddress !== null
        ? bytesFromBase64(object.toAddress)
        : new Uint8Array();
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.deductFeeInLock =
      object.deductFeeInLock !== undefined && object.deductFeeInLock !== null
        ? Boolean(object.deductFeeInLock)
        : false;
    message.feeAmount =
      object.feeAmount !== undefined && object.feeAmount !== null
        ? String(object.feeAmount)
        : "";
    message.feeAddress =
      object.feeAddress !== undefined && object.feeAddress !== null
        ? String(object.feeAddress)
        : "";
    return message;
  },

  toJSON(message: MsgLock): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.fromLockProxy !== undefined &&
      (obj.fromLockProxy = base64FromBytes(
        message.fromLockProxy !== undefined
          ? message.fromLockProxy
          : new Uint8Array()
      ));
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.fromAssetId !== undefined &&
      (obj.fromAssetId = base64FromBytes(
        message.fromAssetId !== undefined
          ? message.fromAssetId
          : new Uint8Array()
      ));
    message.toChainId !== undefined &&
      (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.toLockProxy !== undefined &&
      (obj.toLockProxy = base64FromBytes(
        message.toLockProxy !== undefined
          ? message.toLockProxy
          : new Uint8Array()
      ));
    message.toAssetId !== undefined &&
      (obj.toAssetId = base64FromBytes(
        message.toAssetId !== undefined ? message.toAssetId : new Uint8Array()
      ));
    message.toAddress !== undefined &&
      (obj.toAddress = base64FromBytes(
        message.toAddress !== undefined ? message.toAddress : new Uint8Array()
      ));
    message.amount !== undefined && (obj.amount = message.amount);
    message.deductFeeInLock !== undefined &&
      (obj.deductFeeInLock = message.deductFeeInLock);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLock>): MsgLock {
    const message = { ...baseMsgLock } as MsgLock;
    message.denom = object.denom ?? "";
    message.fromLockProxy = object.fromLockProxy ?? new Uint8Array();
    message.fromAddress = object.fromAddress ?? "";
    message.fromAssetId = object.fromAssetId ?? new Uint8Array();
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromValue(object.toChainId)
        : Long.UZERO;
    message.toLockProxy = object.toLockProxy ?? new Uint8Array();
    message.toAssetId = object.toAssetId ?? new Uint8Array();
    message.toAddress = object.toAddress ?? new Uint8Array();
    message.amount = object.amount ?? "";
    message.deductFeeInLock = object.deductFeeInLock ?? false;
    message.feeAmount = object.feeAmount ?? "";
    message.feeAddress = object.feeAddress ?? "";
    return message;
  },
};

const baseMsgLockResponse: object = {};

export const MsgLockResponse = {
  encode(
    _: MsgLockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLockResponse } as MsgLockResponse;
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

  fromJSON(_: any): MsgLockResponse {
    const message = { ...baseMsgLockResponse } as MsgLockResponse;
    return message;
  },

  toJSON(_: MsgLockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgLockResponse>): MsgLockResponse {
    const message = { ...baseMsgLockResponse } as MsgLockResponse;
    return message;
  },
};

const baseMsgSetWrapperMapping: object = {
  creator: "",
  chainId: Long.UZERO,
  fromContractAddress: "",
  toContractAddress: "",
  lockType: Long.UZERO,
};

export const MsgSetWrapperMapping = {
  encode(
    message: MsgSetWrapperMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(16).uint64(message.chainId);
    }
    if (message.fromContractAddress !== "") {
      writer.uint32(26).string(message.fromContractAddress);
    }
    if (message.toContractAddress !== "") {
      writer.uint32(34).string(message.toContractAddress);
    }
    if (!message.lockType.isZero()) {
      writer.uint32(40).uint64(message.lockType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetWrapperMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetWrapperMapping } as MsgSetWrapperMapping;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.uint64() as Long;
          break;
        case 3:
          message.fromContractAddress = reader.string();
          break;
        case 4:
          message.toContractAddress = reader.string();
          break;
        case 5:
          message.lockType = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetWrapperMapping {
    const message = { ...baseMsgSetWrapperMapping } as MsgSetWrapperMapping;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    message.fromContractAddress =
      object.fromContractAddress !== undefined &&
      object.fromContractAddress !== null
        ? String(object.fromContractAddress)
        : "";
    message.toContractAddress =
      object.toContractAddress !== undefined &&
      object.toContractAddress !== null
        ? String(object.toContractAddress)
        : "";
    message.lockType =
      object.lockType !== undefined && object.lockType !== null
        ? Long.fromString(object.lockType)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgSetWrapperMapping): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.fromContractAddress !== undefined &&
      (obj.fromContractAddress = message.fromContractAddress);
    message.toContractAddress !== undefined &&
      (obj.toContractAddress = message.toContractAddress);
    message.lockType !== undefined &&
      (obj.lockType = (message.lockType || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetWrapperMapping>): MsgSetWrapperMapping {
    const message = { ...baseMsgSetWrapperMapping } as MsgSetWrapperMapping;
    message.creator = object.creator ?? "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    message.fromContractAddress = object.fromContractAddress ?? "";
    message.toContractAddress = object.toContractAddress ?? "";
    message.lockType =
      object.lockType !== undefined && object.lockType !== null
        ? Long.fromValue(object.lockType)
        : Long.UZERO;
    return message;
  },
};

const baseMsgSetWrapperMappingResponse: object = {};

export const MsgSetWrapperMappingResponse = {
  encode(
    _: MsgSetWrapperMappingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetWrapperMappingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetWrapperMappingResponse,
    } as MsgSetWrapperMappingResponse;
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

  fromJSON(_: any): MsgSetWrapperMappingResponse {
    const message = {
      ...baseMsgSetWrapperMappingResponse,
    } as MsgSetWrapperMappingResponse;
    return message;
  },

  toJSON(_: MsgSetWrapperMappingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetWrapperMappingResponse>
  ): MsgSetWrapperMappingResponse {
    const message = {
      ...baseMsgSetWrapperMappingResponse,
    } as MsgSetWrapperMappingResponse;
    return message;
  },
};

const baseMsgDeleteWrapperMapping: object = {
  creator: "",
  chainId: Long.UZERO,
  contractAddress: "",
};

export const MsgDeleteWrapperMapping = {
  encode(
    message: MsgDeleteWrapperMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(16).uint64(message.chainId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteWrapperMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteWrapperMapping,
    } as MsgDeleteWrapperMapping;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.uint64() as Long;
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteWrapperMapping {
    const message = {
      ...baseMsgDeleteWrapperMapping,
    } as MsgDeleteWrapperMapping;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    return message;
  },

  toJSON(message: MsgDeleteWrapperMapping): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteWrapperMapping>
  ): MsgDeleteWrapperMapping {
    const message = {
      ...baseMsgDeleteWrapperMapping,
    } as MsgDeleteWrapperMapping;
    message.creator = object.creator ?? "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

const baseMsgDeleteWrapperMappingResponse: object = {};

export const MsgDeleteWrapperMappingResponse = {
  encode(
    _: MsgDeleteWrapperMappingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteWrapperMappingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteWrapperMappingResponse,
    } as MsgDeleteWrapperMappingResponse;
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

  fromJSON(_: any): MsgDeleteWrapperMappingResponse {
    const message = {
      ...baseMsgDeleteWrapperMappingResponse,
    } as MsgDeleteWrapperMappingResponse;
    return message;
  },

  toJSON(_: MsgDeleteWrapperMappingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteWrapperMappingResponse>
  ): MsgDeleteWrapperMappingResponse {
    const message = {
      ...baseMsgDeleteWrapperMappingResponse,
    } as MsgDeleteWrapperMappingResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Create(request: MsgCreate): Promise<MsgCreateResponse>;
  Bind(request: MsgBind): Promise<MsgBindResponse>;
  Lock(request: MsgLock): Promise<MsgLockResponse>;
  SetWrapperMapping(
    request: MsgSetWrapperMapping
  ): Promise<MsgSetWrapperMappingResponse>;
  DeleteWrapperMapping(
    request: MsgDeleteWrapperMapping
  ): Promise<MsgDeleteWrapperMappingResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Bind = this.Bind.bind(this);
    this.Lock = this.Lock.bind(this);
    this.SetWrapperMapping = this.SetWrapperMapping.bind(this);
    this.DeleteWrapperMapping = this.DeleteWrapperMapping.bind(this);
  }
  Create(request: MsgCreate): Promise<MsgCreateResponse> {
    const data = MsgCreate.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.lockproxy.Msg",
      "Create",
      data
    );
    return promise.then((data) =>
      MsgCreateResponse.decode(new _m0.Reader(data))
    );
  }

  Bind(request: MsgBind): Promise<MsgBindResponse> {
    const data = MsgBind.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.lockproxy.Msg",
      "Bind",
      data
    );
    return promise.then((data) => MsgBindResponse.decode(new _m0.Reader(data)));
  }

  Lock(request: MsgLock): Promise<MsgLockResponse> {
    const data = MsgLock.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.lockproxy.Msg",
      "Lock",
      data
    );
    return promise.then((data) => MsgLockResponse.decode(new _m0.Reader(data)));
  }

  SetWrapperMapping(
    request: MsgSetWrapperMapping
  ): Promise<MsgSetWrapperMappingResponse> {
    const data = MsgSetWrapperMapping.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.lockproxy.Msg",
      "SetWrapperMapping",
      data
    );
    return promise.then((data) =>
      MsgSetWrapperMappingResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteWrapperMapping(
    request: MsgDeleteWrapperMapping
  ): Promise<MsgDeleteWrapperMappingResponse> {
    const data = MsgDeleteWrapperMapping.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.lockproxy.Msg",
      "DeleteWrapperMapping",
      data
    );
    return promise.then((data) =>
      MsgDeleteWrapperMappingResponse.decode(new _m0.Reader(data))
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
