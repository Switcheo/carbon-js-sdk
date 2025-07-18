/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.broker";

export interface IncomingLiquidations {
  addresses: Uint8Array[];
}

function createBaseIncomingLiquidations(): IncomingLiquidations {
  return { addresses: [] };
}

export const IncomingLiquidations = {
  encode(message: IncomingLiquidations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncomingLiquidations {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncomingLiquidations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addresses.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IncomingLiquidations {
    return { addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => bytesFromBase64(e)) : [] };
  },

  toJSON(message: IncomingLiquidations): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  create(base?: DeepPartial<IncomingLiquidations>): IncomingLiquidations {
    return IncomingLiquidations.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IncomingLiquidations>): IncomingLiquidations {
    const message = createBaseIncomingLiquidations();
    message.addresses = object.addresses?.map((e) => e) || [];
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
