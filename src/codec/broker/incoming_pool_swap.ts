/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.tradehubcosmos.broker";

export interface IncomingPoolSwap {
  poolId: Long;
  market: string;
  tokenATotalInput: string;
  tokenATotalExpectedOutput: string;
  tokenBTotalInput: string;
  tokenBTotalExpectedOutput: string;
}

const baseIncomingPoolSwap: object = {
  poolId: Long.UZERO,
  market: "",
  tokenATotalInput: "",
  tokenATotalExpectedOutput: "",
  tokenBTotalInput: "",
  tokenBTotalExpectedOutput: "",
};

export const IncomingPoolSwap = {
  encode(
    message: IncomingPoolSwap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (message.tokenATotalInput !== "") {
      writer.uint32(26).string(message.tokenATotalInput);
    }
    if (message.tokenATotalExpectedOutput !== "") {
      writer.uint32(34).string(message.tokenATotalExpectedOutput);
    }
    if (message.tokenBTotalInput !== "") {
      writer.uint32(42).string(message.tokenBTotalInput);
    }
    if (message.tokenBTotalExpectedOutput !== "") {
      writer.uint32(50).string(message.tokenBTotalExpectedOutput);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncomingPoolSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIncomingPoolSwap } as IncomingPoolSwap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.tokenATotalInput = reader.string();
          break;
        case 4:
          message.tokenATotalExpectedOutput = reader.string();
          break;
        case 5:
          message.tokenBTotalInput = reader.string();
          break;
        case 6:
          message.tokenBTotalExpectedOutput = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IncomingPoolSwap {
    const message = { ...baseIncomingPoolSwap } as IncomingPoolSwap;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (
      object.tokenATotalInput !== undefined &&
      object.tokenATotalInput !== null
    ) {
      message.tokenATotalInput = String(object.tokenATotalInput);
    } else {
      message.tokenATotalInput = "";
    }
    if (
      object.tokenATotalExpectedOutput !== undefined &&
      object.tokenATotalExpectedOutput !== null
    ) {
      message.tokenATotalExpectedOutput = String(
        object.tokenATotalExpectedOutput
      );
    } else {
      message.tokenATotalExpectedOutput = "";
    }
    if (
      object.tokenBTotalInput !== undefined &&
      object.tokenBTotalInput !== null
    ) {
      message.tokenBTotalInput = String(object.tokenBTotalInput);
    } else {
      message.tokenBTotalInput = "";
    }
    if (
      object.tokenBTotalExpectedOutput !== undefined &&
      object.tokenBTotalExpectedOutput !== null
    ) {
      message.tokenBTotalExpectedOutput = String(
        object.tokenBTotalExpectedOutput
      );
    } else {
      message.tokenBTotalExpectedOutput = "";
    }
    return message;
  },

  toJSON(message: IncomingPoolSwap): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.market !== undefined && (obj.market = message.market);
    message.tokenATotalInput !== undefined &&
      (obj.tokenATotalInput = message.tokenATotalInput);
    message.tokenATotalExpectedOutput !== undefined &&
      (obj.tokenATotalExpectedOutput = message.tokenATotalExpectedOutput);
    message.tokenBTotalInput !== undefined &&
      (obj.tokenBTotalInput = message.tokenBTotalInput);
    message.tokenBTotalExpectedOutput !== undefined &&
      (obj.tokenBTotalExpectedOutput = message.tokenBTotalExpectedOutput);
    return obj;
  },

  fromPartial(object: DeepPartial<IncomingPoolSwap>): IncomingPoolSwap {
    const message = { ...baseIncomingPoolSwap } as IncomingPoolSwap;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (
      object.tokenATotalInput !== undefined &&
      object.tokenATotalInput !== null
    ) {
      message.tokenATotalInput = object.tokenATotalInput;
    } else {
      message.tokenATotalInput = "";
    }
    if (
      object.tokenATotalExpectedOutput !== undefined &&
      object.tokenATotalExpectedOutput !== null
    ) {
      message.tokenATotalExpectedOutput = object.tokenATotalExpectedOutput;
    } else {
      message.tokenATotalExpectedOutput = "";
    }
    if (
      object.tokenBTotalInput !== undefined &&
      object.tokenBTotalInput !== null
    ) {
      message.tokenBTotalInput = object.tokenBTotalInput;
    } else {
      message.tokenBTotalInput = "";
    }
    if (
      object.tokenBTotalExpectedOutput !== undefined &&
      object.tokenBTotalExpectedOutput !== null
    ) {
      message.tokenBTotalExpectedOutput = object.tokenBTotalExpectedOutput;
    } else {
      message.tokenBTotalExpectedOutput = "";
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
