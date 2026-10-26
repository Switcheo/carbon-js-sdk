/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { SwthHolding } from "./sunset";
import { SunsetPrice } from "./sunset_price";

export const protobufPackage = "Switcheo.carbon.admin";

/** GenesisState defines the admin module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  admin: string;
  adminRecipient: string;
  params?: Params;
  /** height at which the chain entered sunset, 0 if it has not */
  sunsetHeight: Long;
  /** the sunset step's SWTH record, one per address */
  swthHoldings: SwthHolding[];
  /** the sunset price table, one record per denom */
  sunsetPrices: SunsetPrice[];
}

function createBaseGenesisState(): GenesisState {
  return {
    admin: "",
    adminRecipient: "",
    params: undefined,
    sunsetHeight: Long.UZERO,
    swthHoldings: [],
    sunsetPrices: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.adminRecipient !== "") {
      writer.uint32(18).string(message.adminRecipient);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (!message.sunsetHeight.isZero()) {
      writer.uint32(32).uint64(message.sunsetHeight);
    }
    for (const v of message.swthHoldings) {
      SwthHolding.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.sunsetPrices) {
      SunsetPrice.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.adminRecipient = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sunsetHeight = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.swthHoldings.push(SwthHolding.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sunsetPrices.push(SunsetPrice.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      adminRecipient: isSet(object.adminRecipient) ? String(object.adminRecipient) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      sunsetHeight: isSet(object.sunsetHeight) ? Long.fromValue(object.sunsetHeight) : Long.UZERO,
      swthHoldings: Array.isArray(object?.swthHoldings)
        ? object.swthHoldings.map((e: any) => SwthHolding.fromJSON(e))
        : [],
      sunsetPrices: Array.isArray(object?.sunsetPrices)
        ? object.sunsetPrices.map((e: any) => SunsetPrice.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.adminRecipient !== undefined && (obj.adminRecipient = message.adminRecipient);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.sunsetHeight !== undefined && (obj.sunsetHeight = (message.sunsetHeight || Long.UZERO).toString());
    if (message.swthHoldings) {
      obj.swthHoldings = message.swthHoldings.map((e) => e ? SwthHolding.toJSON(e) : undefined);
    } else {
      obj.swthHoldings = [];
    }
    if (message.sunsetPrices) {
      obj.sunsetPrices = message.sunsetPrices.map((e) => e ? SunsetPrice.toJSON(e) : undefined);
    } else {
      obj.sunsetPrices = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.admin = object.admin ?? "";
    message.adminRecipient = object.adminRecipient ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.sunsetHeight = (object.sunsetHeight !== undefined && object.sunsetHeight !== null)
      ? Long.fromValue(object.sunsetHeight)
      : Long.UZERO;
    message.swthHoldings = object.swthHoldings?.map((e) => SwthHolding.fromPartial(e)) || [];
    message.sunsetPrices = object.sunsetPrices?.map((e) => SunsetPrice.fromPartial(e)) || [];
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
