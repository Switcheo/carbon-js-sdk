/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.broker";

export interface TradeVolume {
  volume: string;
  market: string;
  basePrecision: Long;
}

const baseTradeVolume: object = {
  volume: "",
  market: "",
  basePrecision: Long.ZERO,
};

export const TradeVolume = {
  encode(
    message: TradeVolume,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.volume !== "") {
      writer.uint32(10).string(message.volume);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (!message.basePrecision.isZero()) {
      writer.uint32(24).int64(message.basePrecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeVolume {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTradeVolume } as TradeVolume;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.basePrecision = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradeVolume {
    const message = { ...baseTradeVolume } as TradeVolume;
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = String(object.volume);
    } else {
      message.volume = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.basePrecision !== undefined && object.basePrecision !== null) {
      message.basePrecision = Long.fromString(object.basePrecision);
    } else {
      message.basePrecision = Long.ZERO;
    }
    return message;
  },

  toJSON(message: TradeVolume): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    message.market !== undefined && (obj.market = message.market);
    message.basePrecision !== undefined &&
      (obj.basePrecision = (message.basePrecision || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<TradeVolume>): TradeVolume {
    const message = { ...baseTradeVolume } as TradeVolume;
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    } else {
      message.volume = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (object.basePrecision !== undefined && object.basePrecision !== null) {
      message.basePrecision = object.basePrecision as Long;
    } else {
      message.basePrecision = Long.ZERO;
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
