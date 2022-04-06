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

const baseLockEvent: object = {
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

export const LockEvent = {
  encode(
    message: LockEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLockEvent } as LockEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.fromLockProxy = reader.string();
          break;
        case 3:
          message.fromAssetId = reader.string();
          break;
        case 4:
          message.fromAddress = reader.string();
          break;
        case 5:
          message.toChainId = reader.string();
          break;
        case 6:
          message.toLockProxy = reader.string();
          break;
        case 7:
          message.toAssetId = reader.string();
          break;
        case 8:
          message.toAddress = reader.string();
          break;
        case 9:
          message.amount = reader.string();
          break;
        case 10:
          message.feeAmount = reader.string();
          break;
        case 11:
          message.feeAddress = reader.string();
          break;
        case 12:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockEvent {
    const message = { ...baseLockEvent } as LockEvent;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.fromLockProxy =
      object.fromLockProxy !== undefined && object.fromLockProxy !== null
        ? String(object.fromLockProxy)
        : "";
    message.fromAssetId =
      object.fromAssetId !== undefined && object.fromAssetId !== null
        ? String(object.fromAssetId)
        : "";
    message.fromAddress =
      object.fromAddress !== undefined && object.fromAddress !== null
        ? String(object.fromAddress)
        : "";
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? String(object.toChainId)
        : "";
    message.toLockProxy =
      object.toLockProxy !== undefined && object.toLockProxy !== null
        ? String(object.toLockProxy)
        : "";
    message.toAssetId =
      object.toAssetId !== undefined && object.toAssetId !== null
        ? String(object.toAssetId)
        : "";
    message.toAddress =
      object.toAddress !== undefined && object.toAddress !== null
        ? String(object.toAddress)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.feeAmount =
      object.feeAmount !== undefined && object.feeAmount !== null
        ? String(object.feeAmount)
        : "";
    message.feeAddress =
      object.feeAddress !== undefined && object.feeAddress !== null
        ? String(object.feeAddress)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? String(object.nonce)
        : "";
    return message;
  },

  toJSON(message: LockEvent): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.fromLockProxy !== undefined &&
      (obj.fromLockProxy = message.fromLockProxy);
    message.fromAssetId !== undefined &&
      (obj.fromAssetId = message.fromAssetId);
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toChainId !== undefined && (obj.toChainId = message.toChainId);
    message.toLockProxy !== undefined &&
      (obj.toLockProxy = message.toLockProxy);
    message.toAssetId !== undefined && (obj.toAssetId = message.toAssetId);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(object: DeepPartial<LockEvent>): LockEvent {
    const message = { ...baseLockEvent } as LockEvent;
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

const baseUnlockEvent: object = {
  toAssetId: "",
  toAddress: "",
  amount: "",
  fromAddress: "",
  fromAssetId: "",
  feeAmount: "",
  feeAddress: "",
  nonce: "",
};

export const UnlockEvent = {
  encode(
    message: UnlockEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnlockEvent } as UnlockEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toAssetId = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.fromAddress = reader.string();
          break;
        case 5:
          message.fromAssetId = reader.string();
          break;
        case 6:
          message.feeAmount = reader.string();
          break;
        case 7:
          message.feeAddress = reader.string();
          break;
        case 8:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnlockEvent {
    const message = { ...baseUnlockEvent } as UnlockEvent;
    message.toAssetId =
      object.toAssetId !== undefined && object.toAssetId !== null
        ? String(object.toAssetId)
        : "";
    message.toAddress =
      object.toAddress !== undefined && object.toAddress !== null
        ? String(object.toAddress)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.fromAddress =
      object.fromAddress !== undefined && object.fromAddress !== null
        ? String(object.fromAddress)
        : "";
    message.fromAssetId =
      object.fromAssetId !== undefined && object.fromAssetId !== null
        ? String(object.fromAssetId)
        : "";
    message.feeAmount =
      object.feeAmount !== undefined && object.feeAmount !== null
        ? String(object.feeAmount)
        : "";
    message.feeAddress =
      object.feeAddress !== undefined && object.feeAddress !== null
        ? String(object.feeAddress)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? String(object.nonce)
        : "";
    return message;
  },

  toJSON(message: UnlockEvent): unknown {
    const obj: any = {};
    message.toAssetId !== undefined && (obj.toAssetId = message.toAssetId);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.fromAssetId !== undefined &&
      (obj.fromAssetId = message.fromAssetId);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(object: DeepPartial<UnlockEvent>): UnlockEvent {
    const message = { ...baseUnlockEvent } as UnlockEvent;
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
