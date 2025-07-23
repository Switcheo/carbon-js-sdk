/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.insurance";

/**
 * TODO: CLEAN UP IN SEPARATE PR
 * BlockHeight    int64     `json:"block_height"`
 * BlockCreatedAt time.Time `json:"block_created_at"`
 * Amount sdkmath.Int   `json:"amount"`
 * Denom  string    `json:"denom"`
 */
export interface EventDataInsuranceFundTransfer {
}

function createBaseEventDataInsuranceFundTransfer(): EventDataInsuranceFundTransfer {
  return {};
}

export const EventDataInsuranceFundTransfer = {
  encode(_: EventDataInsuranceFundTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDataInsuranceFundTransfer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDataInsuranceFundTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): EventDataInsuranceFundTransfer {
    return {};
  },

  toJSON(_: EventDataInsuranceFundTransfer): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<EventDataInsuranceFundTransfer>): EventDataInsuranceFundTransfer {
    return EventDataInsuranceFundTransfer.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<EventDataInsuranceFundTransfer>): EventDataInsuranceFundTransfer {
    const message = createBaseEventDataInsuranceFundTransfer();
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
