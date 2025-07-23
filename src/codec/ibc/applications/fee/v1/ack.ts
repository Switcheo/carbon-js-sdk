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

function createBaseIncentivizedAcknowledgement(): IncentivizedAcknowledgement {
  return { appAcknowledgement: new Uint8Array(), forwardRelayerAddress: "", underlyingAppSuccess: false };
}

export const IncentivizedAcknowledgement = {
  encode(message: IncentivizedAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appAcknowledgement = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.forwardRelayerAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.underlyingAppSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IncentivizedAcknowledgement {
    return {
      appAcknowledgement: isSet(object.appAcknowledgement)
        ? bytesFromBase64(object.appAcknowledgement)
        : new Uint8Array(),
      forwardRelayerAddress: isSet(object.forwardRelayerAddress) ? String(object.forwardRelayerAddress) : "",
      underlyingAppSuccess: isSet(object.underlyingAppSuccess) ? Boolean(object.underlyingAppSuccess) : false,
    };
  },

  toJSON(message: IncentivizedAcknowledgement): unknown {
    const obj: any = {};
    message.appAcknowledgement !== undefined &&
      (obj.appAcknowledgement = base64FromBytes(
        message.appAcknowledgement !== undefined ? message.appAcknowledgement : new Uint8Array(),
      ));
    message.forwardRelayerAddress !== undefined && (obj.forwardRelayerAddress = message.forwardRelayerAddress);
    message.underlyingAppSuccess !== undefined && (obj.underlyingAppSuccess = message.underlyingAppSuccess);
    return obj;
  },

  create(base?: DeepPartial<IncentivizedAcknowledgement>): IncentivizedAcknowledgement {
    return IncentivizedAcknowledgement.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IncentivizedAcknowledgement>): IncentivizedAcknowledgement {
    const message = createBaseIncentivizedAcknowledgement();
    message.appAcknowledgement = object.appAcknowledgement ?? new Uint8Array();
    message.forwardRelayerAddress = object.forwardRelayerAddress ?? "";
    message.underlyingAppSuccess = object.underlyingAppSuccess ?? false;
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
