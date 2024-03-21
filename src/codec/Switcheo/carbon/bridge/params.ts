/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.bridge";

/** Params defines the parameters for the module. */
export interface Params {
  /** axelar_ibc_channel the IBC channel that currently connects to axelar blockchain */
  axelarIbcChannel: string;
  /**
   * ibc_timeout_height_offset specifies the number of blocks to be added to the current block height
   * of the destination chain to determine the timeout height for IBC messages. This offset is used
   * to calculate the block height on the destination chain at which the message will timeout if not
   * processed. For example, an offset of 200 means that the message will timeout if it is not
   * relayed and processed within 200 blocks from the current height of the destination chain.
   */
  ibcTimeoutHeightOffset: Long;
}

const baseParams: object = {
  axelarIbcChannel: "",
  ibcTimeoutHeightOffset: Long.UZERO,
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.axelarIbcChannel !== "") {
      writer.uint32(10).string(message.axelarIbcChannel);
    }
    if (!message.ibcTimeoutHeightOffset.isZero()) {
      writer.uint32(16).uint64(message.ibcTimeoutHeightOffset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.axelarIbcChannel = reader.string();
          break;
        case 2:
          message.ibcTimeoutHeightOffset = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.axelarIbcChannel =
      object.axelarIbcChannel !== undefined && object.axelarIbcChannel !== null
        ? String(object.axelarIbcChannel)
        : "";
    message.ibcTimeoutHeightOffset =
      object.ibcTimeoutHeightOffset !== undefined &&
      object.ibcTimeoutHeightOffset !== null
        ? Long.fromString(object.ibcTimeoutHeightOffset)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.axelarIbcChannel !== undefined &&
      (obj.axelarIbcChannel = message.axelarIbcChannel);
    message.ibcTimeoutHeightOffset !== undefined &&
      (obj.ibcTimeoutHeightOffset = (
        message.ibcTimeoutHeightOffset || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.axelarIbcChannel = object.axelarIbcChannel ?? "";
    message.ibcTimeoutHeightOffset =
      object.ibcTimeoutHeightOffset !== undefined &&
      object.ibcTimeoutHeightOffset !== null
        ? Long.fromValue(object.ibcTimeoutHeightOffset)
        : Long.UZERO;
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
