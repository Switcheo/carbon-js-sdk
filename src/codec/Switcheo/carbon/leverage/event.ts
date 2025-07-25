/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.leverage";

export interface LeverageEvent {
  leverage: string;
  type: string;
  marketId: string;
  address: string;
  isCross: boolean;
}

function createBaseLeverageEvent(): LeverageEvent {
  return { leverage: "", type: "", marketId: "", address: "" };
}

export const LeverageEvent = {
  encode(message: LeverageEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leverage !== "") {
      writer.uint32(10).string(message.leverage);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.isCross === true) {
      writer.uint32(40).bool(message.isCross);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeverageEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeverageEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leverage = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LeverageEvent {
    return {
      leverage: isSet(object.leverage) ? String(object.leverage) : "",
      type: isSet(object.type) ? String(object.type) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: LeverageEvent): unknown {
    const obj: any = {};
    message.leverage !== undefined && (obj.leverage = message.leverage);
    message.type !== undefined && (obj.type = message.type);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.address !== undefined && (obj.address = message.address);
    message.isCross !== undefined && (obj.isCross = message.isCross);
    return obj;
  },

  create(base?: DeepPartial<LeverageEvent>): LeverageEvent {
    return LeverageEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LeverageEvent>): LeverageEvent {
    const message = createBaseLeverageEvent();
    message.leverage = object.leverage ?? "";
    message.type = object.type ?? "";
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    message.isCross = object.isCross ?? false;
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
