/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ethermint.feemarket.v1";

/** Params defines the EVM module parameters */
export interface Params {
  /** no_base_fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
  noBaseFee: boolean;
  /**
   * base_fee_change_denominator bounds the amount the base fee can change
   * between blocks.
   */
  baseFeeChangeDenominator: number;
  /**
   * elasticity_multiplier bounds the maximum gas limit an EIP-1559 block may
   * have.
   */
  elasticityMultiplier: number;
  /** enable_height defines at which block height the base fee calculation is enabled. */
  enableHeight: Long;
  /** base_fee for EIP-1559 blocks. */
  baseFee: string;
  /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
  minGasPrice: string;
  /**
   * min_gas_multiplier bounds the minimum gas used to be charged
   * to senders based on gas limit
   */
  minGasMultiplier: string;
  /**
   * Sets the max amount of gas per block for EVM tx.
   * This param is created to separate from cosmos consensus block max gas.
   */
  gasLimitPerBlock: string;
  /**
   * Sets the maximum base fee for evm.
   * Base Fee will not increase pass this value regardless how congested the network is.
   */
  maxBaseFee: string;
}

function createBaseParams(): Params {
  return {
    noBaseFee: false,
    baseFeeChangeDenominator: 0,
    elasticityMultiplier: 0,
    enableHeight: Long.ZERO,
    baseFee: "",
    minGasPrice: "",
    minGasMultiplier: "",
    gasLimitPerBlock: "",
    maxBaseFee: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noBaseFee === true) {
      writer.uint32(8).bool(message.noBaseFee);
    }
    if (message.baseFeeChangeDenominator !== 0) {
      writer.uint32(16).uint32(message.baseFeeChangeDenominator);
    }
    if (message.elasticityMultiplier !== 0) {
      writer.uint32(24).uint32(message.elasticityMultiplier);
    }
    if (!message.enableHeight.isZero()) {
      writer.uint32(40).int64(message.enableHeight);
    }
    if (message.baseFee !== "") {
      writer.uint32(50).string(message.baseFee);
    }
    if (message.minGasPrice !== "") {
      writer.uint32(58).string(message.minGasPrice);
    }
    if (message.minGasMultiplier !== "") {
      writer.uint32(66).string(message.minGasMultiplier);
    }
    if (message.gasLimitPerBlock !== "") {
      writer.uint32(74).string(message.gasLimitPerBlock);
    }
    if (message.maxBaseFee !== "") {
      writer.uint32(82).string(message.maxBaseFee);
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
          if (tag !== 8) {
            break;
          }

          message.noBaseFee = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.baseFeeChangeDenominator = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.elasticityMultiplier = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.enableHeight = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.baseFee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.minGasPrice = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.minGasMultiplier = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.gasLimitPerBlock = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.maxBaseFee = reader.string();
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
      noBaseFee: isSet(object.noBaseFee) ? Boolean(object.noBaseFee) : false,
      baseFeeChangeDenominator: isSet(object.baseFeeChangeDenominator) ? Number(object.baseFeeChangeDenominator) : 0,
      elasticityMultiplier: isSet(object.elasticityMultiplier) ? Number(object.elasticityMultiplier) : 0,
      enableHeight: isSet(object.enableHeight) ? Long.fromValue(object.enableHeight) : Long.ZERO,
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : "",
      minGasPrice: isSet(object.minGasPrice) ? String(object.minGasPrice) : "",
      minGasMultiplier: isSet(object.minGasMultiplier) ? String(object.minGasMultiplier) : "",
      gasLimitPerBlock: isSet(object.gasLimitPerBlock) ? String(object.gasLimitPerBlock) : "",
      maxBaseFee: isSet(object.maxBaseFee) ? String(object.maxBaseFee) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.noBaseFee !== undefined && (obj.noBaseFee = message.noBaseFee);
    message.baseFeeChangeDenominator !== undefined &&
      (obj.baseFeeChangeDenominator = Math.round(message.baseFeeChangeDenominator));
    message.elasticityMultiplier !== undefined && (obj.elasticityMultiplier = Math.round(message.elasticityMultiplier));
    message.enableHeight !== undefined && (obj.enableHeight = (message.enableHeight || Long.ZERO).toString());
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    message.minGasPrice !== undefined && (obj.minGasPrice = message.minGasPrice);
    message.minGasMultiplier !== undefined && (obj.minGasMultiplier = message.minGasMultiplier);
    message.gasLimitPerBlock !== undefined && (obj.gasLimitPerBlock = message.gasLimitPerBlock);
    message.maxBaseFee !== undefined && (obj.maxBaseFee = message.maxBaseFee);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.noBaseFee = object.noBaseFee ?? false;
    message.baseFeeChangeDenominator = object.baseFeeChangeDenominator ?? 0;
    message.elasticityMultiplier = object.elasticityMultiplier ?? 0;
    message.enableHeight = (object.enableHeight !== undefined && object.enableHeight !== null)
      ? Long.fromValue(object.enableHeight)
      : Long.ZERO;
    message.baseFee = object.baseFee ?? "";
    message.minGasPrice = object.minGasPrice ?? "";
    message.minGasMultiplier = object.minGasMultiplier ?? "";
    message.gasLimitPerBlock = object.gasLimitPerBlock ?? "";
    message.maxBaseFee = object.maxBaseFee ?? "";
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
