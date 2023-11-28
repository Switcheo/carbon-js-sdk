/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ibc.applications.fee.v1";

/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgement {
  /** the underlying app acknowledgement bytes */
  appAcknowledgement: Uint8Array;
  /** the relayer address which submits the recv packet message */
  forwardRelayerAddress: string;
  /** success flag of the base application callback */
  underlyingAppSuccess: boolean;
}

const baseIncentivizedAcknowledgement: object = {
  forwardRelayerAddress: "",
  underlyingAppSuccess: false,
};

export const IncentivizedAcknowledgement = {
  encode(
    message: IncentivizedAcknowledgement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.appAcknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.appAcknowledgement);
    }
    if (message.forwardRelayerAddress !== "") {
      writer.uint32(18).string(message.forwardRelayerAddress);
    }
    if (message.underlyingAppSuccess === true) {
      writer.uint32(24).bool(message.underlyingAppSuccess);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IncentivizedAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIncentivizedAcknowledgement,
    } as IncentivizedAcknowledgement;
    message.appAcknowledgement = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAcknowledgement = reader.bytes();
          break;
        case 2:
          message.forwardRelayerAddress = reader.string();
          break;
        case 3:
          message.underlyingAppSuccess = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IncentivizedAcknowledgement {
    const message = {
      ...baseIncentivizedAcknowledgement,
    } as IncentivizedAcknowledgement;
    message.appAcknowledgement =
      object.appAcknowledgement !== undefined &&
      object.appAcknowledgement !== null
        ? bytesFromBase64(object.appAcknowledgement)
        : new Uint8Array();
    message.forwardRelayerAddress =
      object.forwardRelayerAddress !== undefined &&
      object.forwardRelayerAddress !== null
        ? String(object.forwardRelayerAddress)
        : "";
    message.underlyingAppSuccess =
      object.underlyingAppSuccess !== undefined &&
      object.underlyingAppSuccess !== null
        ? Boolean(object.underlyingAppSuccess)
        : false;
    return message;
  },

  toJSON(message: IncentivizedAcknowledgement): unknown {
    const obj: any = {};
    message.appAcknowledgement !== undefined &&
      (obj.appAcknowledgement = base64FromBytes(
        message.appAcknowledgement !== undefined
          ? message.appAcknowledgement
          : new Uint8Array()
      ));
    message.forwardRelayerAddress !== undefined &&
      (obj.forwardRelayerAddress = message.forwardRelayerAddress);
    message.underlyingAppSuccess !== undefined &&
      (obj.underlyingAppSuccess = message.underlyingAppSuccess);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IncentivizedAcknowledgement>
  ): IncentivizedAcknowledgement {
    const message = {
      ...baseIncentivizedAcknowledgement,
    } as IncentivizedAcknowledgement;
    message.appAcknowledgement = object.appAcknowledgement ?? new Uint8Array();
    message.forwardRelayerAddress = object.forwardRelayerAddress ?? "";
    message.underlyingAppSuccess = object.underlyingAppSuccess ?? false;
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
