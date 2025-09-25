/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { BoolValue, StringValue, UInt64Value } from "../../../google/protobuf/wrappers";

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
  withdrawalWindow?: Duration;
  withdrawalThresholdUsd: string;
  withdrawalsPaused: boolean;
}

export interface ParamsToUpdate {
  axelarIbcChannel?: string;
  ibcTimeoutHeightOffset?: Long;
  relayWhitelistDuration?: Duration;
  maxRelayExpiryDuration?: Duration;
  refundAddress?: string;
  axelarCallDenom?: string;
  withdrawalWindow?: Duration;
  withdrawalThresholdUsd: string;
  withdrawalsPaused?: boolean;
}

function createBaseParams(): Params {
  return {
    axelarIbcChannel: "",
    ibcTimeoutHeightOffset: Long.UZERO,
    relayWhitelistDuration: undefined,
    maxRelayExpiryDuration: undefined,
    refundAddress: "",
    axelarCallDenom: "",
    withdrawalWindow: undefined,
    withdrawalThresholdUsd: "",
    withdrawalsPaused: false,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.axelarIbcChannel !== "") {
      writer.uint32(10).string(message.axelarIbcChannel);
    }
    if (!message.ibcTimeoutHeightOffset.isZero()) {
      writer.uint32(16).uint64(message.ibcTimeoutHeightOffset);
    }
    if (message.relayWhitelistDuration !== undefined) {
      Duration.encode(message.relayWhitelistDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxRelayExpiryDuration !== undefined) {
      Duration.encode(message.maxRelayExpiryDuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.refundAddress !== "") {
      writer.uint32(42).string(message.refundAddress);
    }
    if (message.axelarCallDenom !== "") {
      writer.uint32(50).string(message.axelarCallDenom);
    }
    if (message.withdrawalWindow !== undefined) {
      Duration.encode(message.withdrawalWindow, writer.uint32(58).fork()).ldelim();
    }
    if (message.withdrawalThresholdUsd !== "") {
      writer.uint32(66).string(message.withdrawalThresholdUsd);
    }
    if (message.withdrawalsPaused === true) {
      writer.uint32(72).bool(message.withdrawalsPaused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.axelarIbcChannel = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ibcTimeoutHeightOffset = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.relayWhitelistDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxRelayExpiryDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.refundAddress = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.axelarCallDenom = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.withdrawalWindow = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.withdrawalThresholdUsd = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.withdrawalsPaused = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      axelarIbcChannel: isSet(object.axelarIbcChannel) ? String(object.axelarIbcChannel) : "",
      ibcTimeoutHeightOffset: isSet(object.ibcTimeoutHeightOffset)
        ? Long.fromValue(object.ibcTimeoutHeightOffset)
        : Long.UZERO,
      relayWhitelistDuration: isSet(object.relayWhitelistDuration)
        ? Duration.fromJSON(object.relayWhitelistDuration)
        : undefined,
      maxRelayExpiryDuration: isSet(object.maxRelayExpiryDuration)
        ? Duration.fromJSON(object.maxRelayExpiryDuration)
        : undefined,
      refundAddress: isSet(object.refundAddress) ? String(object.refundAddress) : "",
      axelarCallDenom: isSet(object.axelarCallDenom) ? String(object.axelarCallDenom) : "",
      withdrawalWindow: isSet(object.withdrawalWindow) ? Duration.fromJSON(object.withdrawalWindow) : undefined,
      withdrawalThresholdUsd: isSet(object.withdrawalThresholdUsd) ? String(object.withdrawalThresholdUsd) : "",
      withdrawalsPaused: isSet(object.withdrawalsPaused) ? Boolean(object.withdrawalsPaused) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.axelarIbcChannel !== undefined && (obj.axelarIbcChannel = message.axelarIbcChannel);
    message.ibcTimeoutHeightOffset !== undefined &&
      (obj.ibcTimeoutHeightOffset = (message.ibcTimeoutHeightOffset || Long.UZERO).toString());
    message.relayWhitelistDuration !== undefined && (obj.relayWhitelistDuration = message.relayWhitelistDuration
      ? Duration.toJSON(message.relayWhitelistDuration)
      : undefined);
    message.maxRelayExpiryDuration !== undefined && (obj.maxRelayExpiryDuration = message.maxRelayExpiryDuration
      ? Duration.toJSON(message.maxRelayExpiryDuration)
      : undefined);
    message.refundAddress !== undefined && (obj.refundAddress = message.refundAddress);
    message.axelarCallDenom !== undefined && (obj.axelarCallDenom = message.axelarCallDenom);
    message.withdrawalWindow !== undefined &&
      (obj.withdrawalWindow = message.withdrawalWindow ? Duration.toJSON(message.withdrawalWindow) : undefined);
    message.withdrawalThresholdUsd !== undefined && (obj.withdrawalThresholdUsd = message.withdrawalThresholdUsd);
    message.withdrawalsPaused !== undefined && (obj.withdrawalsPaused = message.withdrawalsPaused);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.axelarIbcChannel = object.axelarIbcChannel ?? "";
    message.ibcTimeoutHeightOffset =
      (object.ibcTimeoutHeightOffset !== undefined && object.ibcTimeoutHeightOffset !== null)
        ? Long.fromValue(object.ibcTimeoutHeightOffset)
        : Long.UZERO;
    message.relayWhitelistDuration =
      (object.relayWhitelistDuration !== undefined && object.relayWhitelistDuration !== null)
        ? Duration.fromPartial(object.relayWhitelistDuration)
        : undefined;
    message.maxRelayExpiryDuration =
      (object.maxRelayExpiryDuration !== undefined && object.maxRelayExpiryDuration !== null)
        ? Duration.fromPartial(object.maxRelayExpiryDuration)
        : undefined;
    message.refundAddress = object.refundAddress ?? "";
    message.axelarCallDenom = object.axelarCallDenom ?? "";
    message.withdrawalWindow = (object.withdrawalWindow !== undefined && object.withdrawalWindow !== null)
      ? Duration.fromPartial(object.withdrawalWindow)
      : undefined;
    message.withdrawalThresholdUsd = object.withdrawalThresholdUsd ?? "";
    message.withdrawalsPaused = object.withdrawalsPaused ?? false;
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return {
    axelarIbcChannel: undefined,
    ibcTimeoutHeightOffset: undefined,
    relayWhitelistDuration: undefined,
    maxRelayExpiryDuration: undefined,
    refundAddress: undefined,
    axelarCallDenom: undefined,
    withdrawalWindow: undefined,
    withdrawalThresholdUsd: "",
    withdrawalsPaused: undefined,
  };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.axelarIbcChannel !== undefined) {
      StringValue.encode({ value: message.axelarIbcChannel! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.ibcTimeoutHeightOffset !== undefined) {
      UInt64Value.encode({ value: message.ibcTimeoutHeightOffset! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.relayWhitelistDuration !== undefined) {
      Duration.encode(message.relayWhitelistDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxRelayExpiryDuration !== undefined) {
      Duration.encode(message.maxRelayExpiryDuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.refundAddress !== undefined) {
      StringValue.encode({ value: message.refundAddress! }, writer.uint32(42).fork()).ldelim();
    }
    if (message.axelarCallDenom !== undefined) {
      StringValue.encode({ value: message.axelarCallDenom! }, writer.uint32(50).fork()).ldelim();
    }
    if (message.withdrawalWindow !== undefined) {
      Duration.encode(message.withdrawalWindow, writer.uint32(58).fork()).ldelim();
    }
    if (message.withdrawalThresholdUsd !== "") {
      writer.uint32(66).string(message.withdrawalThresholdUsd);
    }
    if (message.withdrawalsPaused !== undefined) {
      BoolValue.encode({ value: message.withdrawalsPaused! }, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsToUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.axelarIbcChannel = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ibcTimeoutHeightOffset = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.relayWhitelistDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxRelayExpiryDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.refundAddress = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.axelarCallDenom = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.withdrawalWindow = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.withdrawalThresholdUsd = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.withdrawalsPaused = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParamsToUpdate {
    return {
      axelarIbcChannel: isSet(object.axelarIbcChannel) ? String(object.axelarIbcChannel) : undefined,
      ibcTimeoutHeightOffset: isSet(object.ibcTimeoutHeightOffset)
        ? Long.fromValue(object.ibcTimeoutHeightOffset)
        : undefined,
      relayWhitelistDuration: isSet(object.relayWhitelistDuration)
        ? Duration.fromJSON(object.relayWhitelistDuration)
        : undefined,
      maxRelayExpiryDuration: isSet(object.maxRelayExpiryDuration)
        ? Duration.fromJSON(object.maxRelayExpiryDuration)
        : undefined,
      refundAddress: isSet(object.refundAddress) ? String(object.refundAddress) : undefined,
      axelarCallDenom: isSet(object.axelarCallDenom) ? String(object.axelarCallDenom) : undefined,
      withdrawalWindow: isSet(object.withdrawalWindow) ? Duration.fromJSON(object.withdrawalWindow) : undefined,
      withdrawalThresholdUsd: isSet(object.withdrawalThresholdUsd) ? String(object.withdrawalThresholdUsd) : "",
      withdrawalsPaused: isSet(object.withdrawalsPaused) ? Boolean(object.withdrawalsPaused) : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.axelarIbcChannel !== undefined && (obj.axelarIbcChannel = message.axelarIbcChannel);
    message.ibcTimeoutHeightOffset !== undefined && (obj.ibcTimeoutHeightOffset = message.ibcTimeoutHeightOffset);
    message.relayWhitelistDuration !== undefined && (obj.relayWhitelistDuration = message.relayWhitelistDuration
      ? Duration.toJSON(message.relayWhitelistDuration)
      : undefined);
    message.maxRelayExpiryDuration !== undefined && (obj.maxRelayExpiryDuration = message.maxRelayExpiryDuration
      ? Duration.toJSON(message.maxRelayExpiryDuration)
      : undefined);
    message.refundAddress !== undefined && (obj.refundAddress = message.refundAddress);
    message.axelarCallDenom !== undefined && (obj.axelarCallDenom = message.axelarCallDenom);
    message.withdrawalWindow !== undefined &&
      (obj.withdrawalWindow = message.withdrawalWindow ? Duration.toJSON(message.withdrawalWindow) : undefined);
    message.withdrawalThresholdUsd !== undefined && (obj.withdrawalThresholdUsd = message.withdrawalThresholdUsd);
    message.withdrawalsPaused !== undefined && (obj.withdrawalsPaused = message.withdrawalsPaused);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.axelarIbcChannel = object.axelarIbcChannel ?? undefined;
    message.ibcTimeoutHeightOffset =
      (object.ibcTimeoutHeightOffset !== undefined && object.ibcTimeoutHeightOffset !== null)
        ? Long.fromValue(object.ibcTimeoutHeightOffset)
        : undefined;
    message.relayWhitelistDuration =
      (object.relayWhitelistDuration !== undefined && object.relayWhitelistDuration !== null)
        ? Duration.fromPartial(object.relayWhitelistDuration)
        : undefined;
    message.maxRelayExpiryDuration =
      (object.maxRelayExpiryDuration !== undefined && object.maxRelayExpiryDuration !== null)
        ? Duration.fromPartial(object.maxRelayExpiryDuration)
        : undefined;
    message.refundAddress = object.refundAddress ?? undefined;
    message.axelarCallDenom = object.axelarCallDenom ?? undefined;
    message.withdrawalWindow = (object.withdrawalWindow !== undefined && object.withdrawalWindow !== null)
      ? Duration.fromPartial(object.withdrawalWindow)
      : undefined;
    message.withdrawalThresholdUsd = object.withdrawalThresholdUsd ?? "";
    message.withdrawalsPaused = object.withdrawalsPaused ?? undefined;
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
