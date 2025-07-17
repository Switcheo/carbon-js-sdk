/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.lockproxy";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreate {
  creator: string;
}

export interface MsgCreateResponse {
}

export interface MsgBind {
  creator: string;
  denom: string;
  lockProxyHash: Uint8Array;
  nativeChainId: Long;
  nativeLockProxyHash: Uint8Array;
  nativeAssetHash: Uint8Array;
}

export interface MsgBindResponse {
}

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

export interface MsgLockResponse {
}

export interface MsgSetWrapperMapping {
  creator: string;
  chainId: Long;
  fromContractAddress: string;
  toContractAddress: string;
  lockType: Long;
}

export interface MsgSetWrapperMappingResponse {
}

export interface MsgDeleteWrapperMapping {
  creator: string;
  chainId: Long;
  contractAddress: string;
}

export interface MsgDeleteWrapperMappingResponse {
}

export interface MsgAddExtension {
  creator: string;
  chainId: Long;
  lockproxyAddress: string;
  extensionAddress: string;
}

export interface MsgAddExtensionResponse {
}

export interface MsgRemoveExtension {
  creator: string;
  chainId: Long;
  lockproxyAddress: string;
  extensionAddress: string;
}

export interface MsgRemoveExtensionResponse {
}

function createBaseMsgCreate(): MsgCreate {
  return { creator: "" };
}

export const MsgCreate = {
  encode(message: MsgCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create(base?: DeepPartial<MsgCreate>): MsgCreate {
    return MsgCreate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreate>): MsgCreate {
    const message = createBaseMsgCreate();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {};
}

export const MsgCreateResponse = {
  encode(_: MsgCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
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

  fromJSON(_: any): MsgCreateResponse {
    return {};
  },

  toJSON(_: MsgCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    return MsgCreateResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    return message;
  },
};

function createBaseMsgBind(): MsgBind {
  return {
    creator: "",
    denom: "",
    lockProxyHash: new Uint8Array(),
    nativeChainId: Long.UZERO,
    nativeLockProxyHash: new Uint8Array(),
    nativeAssetHash: new Uint8Array(),
  };
}

export const MsgBind = {
  encode(message: MsgBind, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBind();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lockProxyHash = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nativeChainId = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nativeLockProxyHash = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.nativeAssetHash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBind {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      lockProxyHash: isSet(object.lockProxyHash) ? bytesFromBase64(object.lockProxyHash) : new Uint8Array(),
      nativeChainId: isSet(object.nativeChainId) ? Long.fromValue(object.nativeChainId) : Long.UZERO,
      nativeLockProxyHash: isSet(object.nativeLockProxyHash)
        ? bytesFromBase64(object.nativeLockProxyHash)
        : new Uint8Array(),
      nativeAssetHash: isSet(object.nativeAssetHash) ? bytesFromBase64(object.nativeAssetHash) : new Uint8Array(),
    };
  },

  toJSON(message: MsgBind): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.lockProxyHash !== undefined &&
      (obj.lockProxyHash = base64FromBytes(
        message.lockProxyHash !== undefined ? message.lockProxyHash : new Uint8Array(),
      ));
    message.nativeChainId !== undefined && (obj.nativeChainId = (message.nativeChainId || Long.UZERO).toString());
    message.nativeLockProxyHash !== undefined &&
      (obj.nativeLockProxyHash = base64FromBytes(
        message.nativeLockProxyHash !== undefined ? message.nativeLockProxyHash : new Uint8Array(),
      ));
    message.nativeAssetHash !== undefined &&
      (obj.nativeAssetHash = base64FromBytes(
        message.nativeAssetHash !== undefined ? message.nativeAssetHash : new Uint8Array(),
      ));
    return obj;
  },

  create(base?: DeepPartial<MsgBind>): MsgBind {
    return MsgBind.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBind>): MsgBind {
    const message = createBaseMsgBind();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.lockProxyHash = object.lockProxyHash ?? new Uint8Array();
    message.nativeChainId = (object.nativeChainId !== undefined && object.nativeChainId !== null)
      ? Long.fromValue(object.nativeChainId)
      : Long.UZERO;
    message.nativeLockProxyHash = object.nativeLockProxyHash ?? new Uint8Array();
    message.nativeAssetHash = object.nativeAssetHash ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgBindResponse(): MsgBindResponse {
  return {};
}

export const MsgBindResponse = {
  encode(_: MsgBindResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindResponse();
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

  fromJSON(_: any): MsgBindResponse {
    return {};
  },

  toJSON(_: MsgBindResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgBindResponse>): MsgBindResponse {
    return MsgBindResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgBindResponse>): MsgBindResponse {
    const message = createBaseMsgBindResponse();
    return message;
  },
};

function createBaseMsgLock(): MsgLock {
  return {
    denom: "",
    fromLockProxy: new Uint8Array(),
    fromAddress: "",
    fromAssetId: new Uint8Array(),
    toChainId: Long.UZERO,
    toLockProxy: new Uint8Array(),
    toAssetId: new Uint8Array(),
    toAddress: new Uint8Array(),
    amount: "",
    deductFeeInLock: false,
    feeAmount: "",
    feeAddress: "",
  };
}

export const MsgLock = {
  encode(message: MsgLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLock();
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
          if (tag !== 18) {
            break;
          }

          message.fromLockProxy = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fromAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fromAssetId = reader.bytes();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.toChainId = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.toLockProxy = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.toAssetId = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.toAddress = reader.bytes();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.deductFeeInLock = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.feeAmount = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.feeAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLock {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      fromLockProxy: isSet(object.fromLockProxy) ? bytesFromBase64(object.fromLockProxy) : new Uint8Array(),
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      fromAssetId: isSet(object.fromAssetId) ? bytesFromBase64(object.fromAssetId) : new Uint8Array(),
      toChainId: isSet(object.toChainId) ? Long.fromValue(object.toChainId) : Long.UZERO,
      toLockProxy: isSet(object.toLockProxy) ? bytesFromBase64(object.toLockProxy) : new Uint8Array(),
      toAssetId: isSet(object.toAssetId) ? bytesFromBase64(object.toAssetId) : new Uint8Array(),
      toAddress: isSet(object.toAddress) ? bytesFromBase64(object.toAddress) : new Uint8Array(),
      amount: isSet(object.amount) ? String(object.amount) : "",
      deductFeeInLock: isSet(object.deductFeeInLock) ? Boolean(object.deductFeeInLock) : false,
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : "",
      feeAddress: isSet(object.feeAddress) ? String(object.feeAddress) : "",
    };
  },

  toJSON(message: MsgLock): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.fromLockProxy !== undefined &&
      (obj.fromLockProxy = base64FromBytes(
        message.fromLockProxy !== undefined ? message.fromLockProxy : new Uint8Array(),
      ));
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.fromAssetId !== undefined &&
      (obj.fromAssetId = base64FromBytes(message.fromAssetId !== undefined ? message.fromAssetId : new Uint8Array()));
    message.toChainId !== undefined && (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.toLockProxy !== undefined &&
      (obj.toLockProxy = base64FromBytes(message.toLockProxy !== undefined ? message.toLockProxy : new Uint8Array()));
    message.toAssetId !== undefined &&
      (obj.toAssetId = base64FromBytes(message.toAssetId !== undefined ? message.toAssetId : new Uint8Array()));
    message.toAddress !== undefined &&
      (obj.toAddress = base64FromBytes(message.toAddress !== undefined ? message.toAddress : new Uint8Array()));
    message.amount !== undefined && (obj.amount = message.amount);
    message.deductFeeInLock !== undefined && (obj.deductFeeInLock = message.deductFeeInLock);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgLock>): MsgLock {
    return MsgLock.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgLock>): MsgLock {
    const message = createBaseMsgLock();
    message.denom = object.denom ?? "";
    message.fromLockProxy = object.fromLockProxy ?? new Uint8Array();
    message.fromAddress = object.fromAddress ?? "";
    message.fromAssetId = object.fromAssetId ?? new Uint8Array();
    message.toChainId = (object.toChainId !== undefined && object.toChainId !== null)
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

function createBaseMsgLockResponse(): MsgLockResponse {
  return {};
}

export const MsgLockResponse = {
  encode(_: MsgLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockResponse();
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

  fromJSON(_: any): MsgLockResponse {
    return {};
  },

  toJSON(_: MsgLockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgLockResponse>): MsgLockResponse {
    return MsgLockResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgLockResponse>): MsgLockResponse {
    const message = createBaseMsgLockResponse();
    return message;
  },
};

function createBaseMsgSetWrapperMapping(): MsgSetWrapperMapping {
  return { creator: "", chainId: Long.UZERO, fromContractAddress: "", toContractAddress: "", lockType: Long.UZERO };
}

export const MsgSetWrapperMapping = {
  encode(message: MsgSetWrapperMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWrapperMapping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWrapperMapping();
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

          message.chainId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fromContractAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.toContractAddress = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lockType = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetWrapperMapping {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      fromContractAddress: isSet(object.fromContractAddress) ? String(object.fromContractAddress) : "",
      toContractAddress: isSet(object.toContractAddress) ? String(object.toContractAddress) : "",
      lockType: isSet(object.lockType) ? Long.fromValue(object.lockType) : Long.UZERO,
    };
  },

  toJSON(message: MsgSetWrapperMapping): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.fromContractAddress !== undefined && (obj.fromContractAddress = message.fromContractAddress);
    message.toContractAddress !== undefined && (obj.toContractAddress = message.toContractAddress);
    message.lockType !== undefined && (obj.lockType = (message.lockType || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgSetWrapperMapping>): MsgSetWrapperMapping {
    return MsgSetWrapperMapping.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetWrapperMapping>): MsgSetWrapperMapping {
    const message = createBaseMsgSetWrapperMapping();
    message.creator = object.creator ?? "";
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.fromContractAddress = object.fromContractAddress ?? "";
    message.toContractAddress = object.toContractAddress ?? "";
    message.lockType = (object.lockType !== undefined && object.lockType !== null)
      ? Long.fromValue(object.lockType)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgSetWrapperMappingResponse(): MsgSetWrapperMappingResponse {
  return {};
}

export const MsgSetWrapperMappingResponse = {
  encode(_: MsgSetWrapperMappingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWrapperMappingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWrapperMappingResponse();
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

  fromJSON(_: any): MsgSetWrapperMappingResponse {
    return {};
  },

  toJSON(_: MsgSetWrapperMappingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetWrapperMappingResponse>): MsgSetWrapperMappingResponse {
    return MsgSetWrapperMappingResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetWrapperMappingResponse>): MsgSetWrapperMappingResponse {
    const message = createBaseMsgSetWrapperMappingResponse();
    return message;
  },
};

function createBaseMsgDeleteWrapperMapping(): MsgDeleteWrapperMapping {
  return { creator: "", chainId: Long.UZERO, contractAddress: "" };
}

export const MsgDeleteWrapperMapping = {
  encode(message: MsgDeleteWrapperMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteWrapperMapping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteWrapperMapping();
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

          message.chainId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgDeleteWrapperMapping {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
    };
  },

  toJSON(message: MsgDeleteWrapperMapping): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgDeleteWrapperMapping>): MsgDeleteWrapperMapping {
    return MsgDeleteWrapperMapping.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeleteWrapperMapping>): MsgDeleteWrapperMapping {
    const message = createBaseMsgDeleteWrapperMapping();
    message.creator = object.creator ?? "";
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

function createBaseMsgDeleteWrapperMappingResponse(): MsgDeleteWrapperMappingResponse {
  return {};
}

export const MsgDeleteWrapperMappingResponse = {
  encode(_: MsgDeleteWrapperMappingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteWrapperMappingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteWrapperMappingResponse();
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

  fromJSON(_: any): MsgDeleteWrapperMappingResponse {
    return {};
  },

  toJSON(_: MsgDeleteWrapperMappingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeleteWrapperMappingResponse>): MsgDeleteWrapperMappingResponse {
    return MsgDeleteWrapperMappingResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeleteWrapperMappingResponse>): MsgDeleteWrapperMappingResponse {
    const message = createBaseMsgDeleteWrapperMappingResponse();
    return message;
  },
};

function createBaseMsgAddExtension(): MsgAddExtension {
  return { creator: "", chainId: Long.UZERO, lockproxyAddress: "", extensionAddress: "" };
}

export const MsgAddExtension = {
  encode(message: MsgAddExtension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(16).uint64(message.chainId);
    }
    if (message.lockproxyAddress !== "") {
      writer.uint32(26).string(message.lockproxyAddress);
    }
    if (message.extensionAddress !== "") {
      writer.uint32(34).string(message.extensionAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddExtension {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddExtension();
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

          message.chainId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lockproxyAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.extensionAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddExtension {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      lockproxyAddress: isSet(object.lockproxyAddress) ? String(object.lockproxyAddress) : "",
      extensionAddress: isSet(object.extensionAddress) ? String(object.extensionAddress) : "",
    };
  },

  toJSON(message: MsgAddExtension): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.lockproxyAddress !== undefined && (obj.lockproxyAddress = message.lockproxyAddress);
    message.extensionAddress !== undefined && (obj.extensionAddress = message.extensionAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgAddExtension>): MsgAddExtension {
    return MsgAddExtension.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddExtension>): MsgAddExtension {
    const message = createBaseMsgAddExtension();
    message.creator = object.creator ?? "";
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.lockproxyAddress = object.lockproxyAddress ?? "";
    message.extensionAddress = object.extensionAddress ?? "";
    return message;
  },
};

function createBaseMsgAddExtensionResponse(): MsgAddExtensionResponse {
  return {};
}

export const MsgAddExtensionResponse = {
  encode(_: MsgAddExtensionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddExtensionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddExtensionResponse();
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

  fromJSON(_: any): MsgAddExtensionResponse {
    return {};
  },

  toJSON(_: MsgAddExtensionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddExtensionResponse>): MsgAddExtensionResponse {
    return MsgAddExtensionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAddExtensionResponse>): MsgAddExtensionResponse {
    const message = createBaseMsgAddExtensionResponse();
    return message;
  },
};

function createBaseMsgRemoveExtension(): MsgRemoveExtension {
  return { creator: "", chainId: Long.UZERO, lockproxyAddress: "", extensionAddress: "" };
}

export const MsgRemoveExtension = {
  encode(message: MsgRemoveExtension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(16).uint64(message.chainId);
    }
    if (message.lockproxyAddress !== "") {
      writer.uint32(26).string(message.lockproxyAddress);
    }
    if (message.extensionAddress !== "") {
      writer.uint32(34).string(message.extensionAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveExtension {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveExtension();
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

          message.chainId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lockproxyAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.extensionAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveExtension {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      lockproxyAddress: isSet(object.lockproxyAddress) ? String(object.lockproxyAddress) : "",
      extensionAddress: isSet(object.extensionAddress) ? String(object.extensionAddress) : "",
    };
  },

  toJSON(message: MsgRemoveExtension): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.lockproxyAddress !== undefined && (obj.lockproxyAddress = message.lockproxyAddress);
    message.extensionAddress !== undefined && (obj.extensionAddress = message.extensionAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveExtension>): MsgRemoveExtension {
    return MsgRemoveExtension.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveExtension>): MsgRemoveExtension {
    const message = createBaseMsgRemoveExtension();
    message.creator = object.creator ?? "";
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.lockproxyAddress = object.lockproxyAddress ?? "";
    message.extensionAddress = object.extensionAddress ?? "";
    return message;
  },
};

function createBaseMsgRemoveExtensionResponse(): MsgRemoveExtensionResponse {
  return {};
}

export const MsgRemoveExtensionResponse = {
  encode(_: MsgRemoveExtensionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveExtensionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveExtensionResponse();
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

  fromJSON(_: any): MsgRemoveExtensionResponse {
    return {};
  },

  toJSON(_: MsgRemoveExtensionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveExtensionResponse>): MsgRemoveExtensionResponse {
    return MsgRemoveExtensionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveExtensionResponse>): MsgRemoveExtensionResponse {
    const message = createBaseMsgRemoveExtensionResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Create(request: MsgCreate): Promise<MsgCreateResponse>;
  Bind(request: MsgBind): Promise<MsgBindResponse>;
  Lock(request: MsgLock): Promise<MsgLockResponse>;
  SetWrapperMapping(request: MsgSetWrapperMapping): Promise<MsgSetWrapperMappingResponse>;
  DeleteWrapperMapping(request: MsgDeleteWrapperMapping): Promise<MsgDeleteWrapperMappingResponse>;
  AddExtension(request: MsgAddExtension): Promise<MsgAddExtensionResponse>;
  RemoveExtension(request: MsgRemoveExtension): Promise<MsgRemoveExtensionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.lockproxy.Msg";
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Bind = this.Bind.bind(this);
    this.Lock = this.Lock.bind(this);
    this.SetWrapperMapping = this.SetWrapperMapping.bind(this);
    this.DeleteWrapperMapping = this.DeleteWrapperMapping.bind(this);
    this.AddExtension = this.AddExtension.bind(this);
    this.RemoveExtension = this.RemoveExtension.bind(this);
  }
  Create(request: MsgCreate): Promise<MsgCreateResponse> {
    const data = MsgCreate.encode(request).finish();
    const promise = this.rpc.request(this.service, "Create", data);
    return promise.then((data) => MsgCreateResponse.decode(_m0.Reader.create(data)));
  }

  Bind(request: MsgBind): Promise<MsgBindResponse> {
    const data = MsgBind.encode(request).finish();
    const promise = this.rpc.request(this.service, "Bind", data);
    return promise.then((data) => MsgBindResponse.decode(_m0.Reader.create(data)));
  }

  Lock(request: MsgLock): Promise<MsgLockResponse> {
    const data = MsgLock.encode(request).finish();
    const promise = this.rpc.request(this.service, "Lock", data);
    return promise.then((data) => MsgLockResponse.decode(_m0.Reader.create(data)));
  }

  SetWrapperMapping(request: MsgSetWrapperMapping): Promise<MsgSetWrapperMappingResponse> {
    const data = MsgSetWrapperMapping.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetWrapperMapping", data);
    return promise.then((data) => MsgSetWrapperMappingResponse.decode(_m0.Reader.create(data)));
  }

  DeleteWrapperMapping(request: MsgDeleteWrapperMapping): Promise<MsgDeleteWrapperMappingResponse> {
    const data = MsgDeleteWrapperMapping.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteWrapperMapping", data);
    return promise.then((data) => MsgDeleteWrapperMappingResponse.decode(_m0.Reader.create(data)));
  }

  AddExtension(request: MsgAddExtension): Promise<MsgAddExtensionResponse> {
    const data = MsgAddExtension.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddExtension", data);
    return promise.then((data) => MsgAddExtensionResponse.decode(_m0.Reader.create(data)));
  }

  RemoveExtension(request: MsgRemoveExtension): Promise<MsgRemoveExtensionResponse> {
    const data = MsgRemoveExtension.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveExtension", data);
    return promise.then((data) => MsgRemoveExtensionResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
