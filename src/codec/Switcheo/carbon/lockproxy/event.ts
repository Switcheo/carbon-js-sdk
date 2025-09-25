/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.lockproxy";

export interface LockEvent {
  denom: string;
  fromLockProxy: string;
  fromAssetId: string;
  fromAddress: string;
  toChainId: string;
  toLockProxy: string;
  toAssetId: string;
  toAddress: string;
  amount: string;
  feeAmount: string;
  feeAddress: string;
  nonce: string;
}

export interface UnlockEvent {
  toAssetId: string;
  toAddress: string;
  amount: string;
  fromAddress: string;
  fromAssetId: string;
  feeAmount: string;
  feeAddress: string;
  nonce: string;
}

function createBaseLockEvent(): LockEvent {
  return {
    denom: "",
    fromLockProxy: "",
    fromAssetId: "",
    fromAddress: "",
    toChainId: "",
    toLockProxy: "",
    toAssetId: "",
    toAddress: "",
    amount: "",
    feeAmount: "",
    feeAddress: "",
    nonce: "",
  };
}

export const LockEvent = {
  encode(message: LockEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.fromLockProxy !== "") {
      writer.uint32(18).string(message.fromLockProxy);
    }
    if (message.fromAssetId !== "") {
      writer.uint32(26).string(message.fromAssetId);
    }
    if (message.fromAddress !== "") {
      writer.uint32(34).string(message.fromAddress);
    }
    if (message.toChainId !== "") {
      writer.uint32(42).string(message.toChainId);
    }
    if (message.toLockProxy !== "") {
      writer.uint32(50).string(message.toLockProxy);
    }
    if (message.toAssetId !== "") {
      writer.uint32(58).string(message.toAssetId);
    }
    if (message.toAddress !== "") {
      writer.uint32(66).string(message.toAddress);
    }
    if (message.amount !== "") {
      writer.uint32(74).string(message.amount);
    }
    if (message.feeAmount !== "") {
      writer.uint32(82).string(message.feeAmount);
    }
    if (message.feeAddress !== "") {
      writer.uint32(90).string(message.feeAddress);
    }
    if (message.nonce !== "") {
      writer.uint32(98).string(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockEvent();
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

          message.fromLockProxy = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fromAssetId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fromAddress = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.toChainId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.toLockProxy = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.toAssetId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.toAddress = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.feeAmount = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.feeAddress = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.nonce = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LockEvent {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      fromLockProxy: isSet(object.fromLockProxy) ? String(object.fromLockProxy) : "",
      fromAssetId: isSet(object.fromAssetId) ? String(object.fromAssetId) : "",
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toChainId: isSet(object.toChainId) ? String(object.toChainId) : "",
      toLockProxy: isSet(object.toLockProxy) ? String(object.toLockProxy) : "",
      toAssetId: isSet(object.toAssetId) ? String(object.toAssetId) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : "",
      feeAddress: isSet(object.feeAddress) ? String(object.feeAddress) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: LockEvent): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.fromLockProxy !== undefined && (obj.fromLockProxy = message.fromLockProxy);
    message.fromAssetId !== undefined && (obj.fromAssetId = message.fromAssetId);
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toChainId !== undefined && (obj.toChainId = message.toChainId);
    message.toLockProxy !== undefined && (obj.toLockProxy = message.toLockProxy);
    message.toAssetId !== undefined && (obj.toAssetId = message.toAssetId);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  create(base?: DeepPartial<LockEvent>): LockEvent {
    return LockEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LockEvent>): LockEvent {
    const message = createBaseLockEvent();
    message.denom = object.denom ?? "";
    message.fromLockProxy = object.fromLockProxy ?? "";
    message.fromAssetId = object.fromAssetId ?? "";
    message.fromAddress = object.fromAddress ?? "";
    message.toChainId = object.toChainId ?? "";
    message.toLockProxy = object.toLockProxy ?? "";
    message.toAssetId = object.toAssetId ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount ?? "";
    message.feeAmount = object.feeAmount ?? "";
    message.feeAddress = object.feeAddress ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};

function createBaseUnlockEvent(): UnlockEvent {
  return {
    toAssetId: "",
    toAddress: "",
    amount: "",
    fromAddress: "",
    fromAssetId: "",
    feeAmount: "",
    feeAddress: "",
    nonce: "",
  };
}

export const UnlockEvent = {
  encode(message: UnlockEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toAssetId !== "") {
      writer.uint32(10).string(message.toAssetId);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.fromAddress !== "") {
      writer.uint32(34).string(message.fromAddress);
    }
    if (message.fromAssetId !== "") {
      writer.uint32(42).string(message.fromAssetId);
    }
    if (message.feeAmount !== "") {
      writer.uint32(50).string(message.feeAmount);
    }
    if (message.feeAddress !== "") {
      writer.uint32(58).string(message.feeAddress);
    }
    if (message.nonce !== "") {
      writer.uint32(66).string(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnlockEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlockEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.toAssetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toAddress = reader.string();
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

          message.fromAddress = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fromAssetId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.feeAmount = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.feeAddress = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.nonce = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnlockEvent {
    return {
      toAssetId: isSet(object.toAssetId) ? String(object.toAssetId) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      fromAssetId: isSet(object.fromAssetId) ? String(object.fromAssetId) : "",
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : "",
      feeAddress: isSet(object.feeAddress) ? String(object.feeAddress) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: UnlockEvent): unknown {
    const obj: any = {};
    message.toAssetId !== undefined && (obj.toAssetId = message.toAssetId);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.fromAssetId !== undefined && (obj.fromAssetId = message.fromAssetId);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  create(base?: DeepPartial<UnlockEvent>): UnlockEvent {
    return UnlockEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnlockEvent>): UnlockEvent {
    const message = createBaseUnlockEvent();
    message.toAssetId = object.toAssetId ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount ?? "";
    message.fromAddress = object.fromAddress ?? "";
    message.fromAssetId = object.fromAssetId ?? "";
    message.feeAmount = object.feeAmount ?? "";
    message.feeAddress = object.feeAddress ?? "";
    message.nonce = object.nonce ?? "";
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
