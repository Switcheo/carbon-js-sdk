/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ethermint.types.v1";

/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3Tx {
  /**
   * typed_data_chain_id is used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typedDataChainId: Long;
  /**
   * fee_payer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */
  feePayer: string;
  /**
   * fee_payer_sig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */
  feePayerSig: Uint8Array;
}

const baseExtensionOptionsWeb3Tx: object = {
  typedDataChainId: Long.UZERO,
  feePayer: "",
};

export const ExtensionOptionsWeb3Tx = {
  encode(
    message: ExtensionOptionsWeb3Tx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.typedDataChainId.isZero()) {
      writer.uint32(8).uint64(message.typedDataChainId);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.feePayerSig.length !== 0) {
      writer.uint32(26).bytes(message.feePayerSig);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExtensionOptionsWeb3Tx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtensionOptionsWeb3Tx } as ExtensionOptionsWeb3Tx;
    message.feePayerSig = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typedDataChainId = reader.uint64() as Long;
          break;
        case 2:
          message.feePayer = reader.string();
          break;
        case 3:
          message.feePayerSig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtensionOptionsWeb3Tx {
    const message = { ...baseExtensionOptionsWeb3Tx } as ExtensionOptionsWeb3Tx;
    message.typedDataChainId =
      object.typedDataChainId !== undefined && object.typedDataChainId !== null
        ? Long.fromString(object.typedDataChainId)
        : Long.UZERO;
    message.feePayer =
      object.feePayer !== undefined && object.feePayer !== null
        ? String(object.feePayer)
        : "";
    message.feePayerSig =
      object.feePayerSig !== undefined && object.feePayerSig !== null
        ? bytesFromBase64(object.feePayerSig)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ExtensionOptionsWeb3Tx): unknown {
    const obj: any = {};
    message.typedDataChainId !== undefined &&
      (obj.typedDataChainId = (
        message.typedDataChainId || Long.UZERO
      ).toString());
    message.feePayer !== undefined && (obj.feePayer = message.feePayer);
    message.feePayerSig !== undefined &&
      (obj.feePayerSig = base64FromBytes(
        message.feePayerSig !== undefined
          ? message.feePayerSig
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExtensionOptionsWeb3Tx>
  ): ExtensionOptionsWeb3Tx {
    const message = { ...baseExtensionOptionsWeb3Tx } as ExtensionOptionsWeb3Tx;
    message.typedDataChainId =
      object.typedDataChainId !== undefined && object.typedDataChainId !== null
        ? Long.fromValue(object.typedDataChainId)
        : Long.UZERO;
    message.feePayer = object.feePayer ?? "";
    message.feePayerSig = object.feePayerSig ?? new Uint8Array();
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
