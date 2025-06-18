/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "Switcheo.carbon.bridge";

/** Params defines the parameters for the module. */
export interface Params {
  /**
   * axelar_ibc_channel the IBC channel that currently connects to axelar
   * blockchain
   */
  axelarIbcChannel: string;
  /**
   * ibc_timeout_height_offset specifies the number of blocks to be added to the
   * current block height of the destination chain to determine the timeout
   * height for IBC messages. This offset is used to calculate the block height
   * on the destination chain at which the message will timeout if not
   * processed. For example, an offset of 200 means that the message will
   * timeout if it is not relayed and processed within 200 blocks from the
   * current height of the destination chain.
   */
  ibcTimeoutHeightOffset: Long;
  /**
   * relay_whitelist_duration specifies the number of blocks before a relay can
   * be started by any relayer. Prior to this duration, only the whitelisted
   * relayers can start the relay.
   */
  relayWhitelistDuration?: Duration;
  /**
   * max_relay_expiry_duration specifies the number of blocks after which a
   * relay that has not been started will be pruned from the store
   */
  maxRelayExpiryDuration?: Duration;
  /** refund_address for deposits that fail due to wrong receiver address */
  refundAddress: string;
  axelarCallDenom: string;
}

const baseParams: object = {
  axelarIbcChannel: "",
  ibcTimeoutHeightOffset: Long.UZERO,
  refundAddress: "",
  axelarCallDenom: "",
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
    if (message.relayWhitelistDuration !== undefined) {
      Duration.encode(
        message.relayWhitelistDuration,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.maxRelayExpiryDuration !== undefined) {
      Duration.encode(
        message.maxRelayExpiryDuration,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.refundAddress !== "") {
      writer.uint32(42).string(message.refundAddress);
    }
    if (message.axelarCallDenom !== "") {
      writer.uint32(50).string(message.axelarCallDenom);
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
        case 3:
          message.relayWhitelistDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.maxRelayExpiryDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.refundAddress = reader.string();
          break;
        case 6:
          message.axelarCallDenom = reader.string();
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
    message.relayWhitelistDuration =
      object.relayWhitelistDuration !== undefined &&
      object.relayWhitelistDuration !== null
        ? Duration.fromJSON(object.relayWhitelistDuration)
        : undefined;
    message.maxRelayExpiryDuration =
      object.maxRelayExpiryDuration !== undefined &&
      object.maxRelayExpiryDuration !== null
        ? Duration.fromJSON(object.maxRelayExpiryDuration)
        : undefined;
    message.refundAddress =
      object.refundAddress !== undefined && object.refundAddress !== null
        ? String(object.refundAddress)
        : "";
    message.axelarCallDenom =
      object.axelarCallDenom !== undefined && object.axelarCallDenom !== null
        ? String(object.axelarCallDenom)
        : "";
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
    message.relayWhitelistDuration !== undefined &&
      (obj.relayWhitelistDuration = message.relayWhitelistDuration
        ? Duration.toJSON(message.relayWhitelistDuration)
        : undefined);
    message.maxRelayExpiryDuration !== undefined &&
      (obj.maxRelayExpiryDuration = message.maxRelayExpiryDuration
        ? Duration.toJSON(message.maxRelayExpiryDuration)
        : undefined);
    message.refundAddress !== undefined &&
      (obj.refundAddress = message.refundAddress);
    message.axelarCallDenom !== undefined &&
      (obj.axelarCallDenom = message.axelarCallDenom);
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
    message.relayWhitelistDuration =
      object.relayWhitelistDuration !== undefined &&
      object.relayWhitelistDuration !== null
        ? Duration.fromPartial(object.relayWhitelistDuration)
        : undefined;
    message.maxRelayExpiryDuration =
      object.maxRelayExpiryDuration !== undefined &&
      object.maxRelayExpiryDuration !== null
        ? Duration.fromPartial(object.maxRelayExpiryDuration)
        : undefined;
    message.refundAddress = object.refundAddress ?? "";
    message.axelarCallDenom = object.axelarCallDenom ?? "";
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
