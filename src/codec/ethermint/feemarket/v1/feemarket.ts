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

const baseParams: object = {
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

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noBaseFee = reader.bool();
          break;
        case 2:
          message.baseFeeChangeDenominator = reader.uint32();
          break;
        case 3:
          message.elasticityMultiplier = reader.uint32();
          break;
        case 5:
          message.enableHeight = reader.int64() as Long;
          break;
        case 6:
          message.baseFee = reader.string();
          break;
        case 7:
          message.minGasPrice = reader.string();
          break;
        case 8:
          message.minGasMultiplier = reader.string();
          break;
        case 9:
          message.gasLimitPerBlock = reader.string();
          break;
        case 10:
          message.maxBaseFee = reader.string();
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
    message.noBaseFee =
      object.noBaseFee !== undefined && object.noBaseFee !== null
        ? Boolean(object.noBaseFee)
        : false;
    message.baseFeeChangeDenominator =
      object.baseFeeChangeDenominator !== undefined &&
      object.baseFeeChangeDenominator !== null
        ? Number(object.baseFeeChangeDenominator)
        : 0;
    message.elasticityMultiplier =
      object.elasticityMultiplier !== undefined &&
      object.elasticityMultiplier !== null
        ? Number(object.elasticityMultiplier)
        : 0;
    message.enableHeight =
      object.enableHeight !== undefined && object.enableHeight !== null
        ? Long.fromString(object.enableHeight)
        : Long.ZERO;
    message.baseFee =
      object.baseFee !== undefined && object.baseFee !== null
        ? String(object.baseFee)
        : "";
    message.minGasPrice =
      object.minGasPrice !== undefined && object.minGasPrice !== null
        ? String(object.minGasPrice)
        : "";
    message.minGasMultiplier =
      object.minGasMultiplier !== undefined && object.minGasMultiplier !== null
        ? String(object.minGasMultiplier)
        : "";
    message.gasLimitPerBlock =
      object.gasLimitPerBlock !== undefined && object.gasLimitPerBlock !== null
        ? String(object.gasLimitPerBlock)
        : "";
    message.maxBaseFee =
      object.maxBaseFee !== undefined && object.maxBaseFee !== null
        ? String(object.maxBaseFee)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.noBaseFee !== undefined && (obj.noBaseFee = message.noBaseFee);
    message.baseFeeChangeDenominator !== undefined &&
      (obj.baseFeeChangeDenominator = message.baseFeeChangeDenominator);
    message.elasticityMultiplier !== undefined &&
      (obj.elasticityMultiplier = message.elasticityMultiplier);
    message.enableHeight !== undefined &&
      (obj.enableHeight = (message.enableHeight || Long.ZERO).toString());
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    message.minGasPrice !== undefined &&
      (obj.minGasPrice = message.minGasPrice);
    message.minGasMultiplier !== undefined &&
      (obj.minGasMultiplier = message.minGasMultiplier);
    message.gasLimitPerBlock !== undefined &&
      (obj.gasLimitPerBlock = message.gasLimitPerBlock);
    message.maxBaseFee !== undefined && (obj.maxBaseFee = message.maxBaseFee);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.noBaseFee = object.noBaseFee ?? false;
    message.baseFeeChangeDenominator = object.baseFeeChangeDenominator ?? 0;
    message.elasticityMultiplier = object.elasticityMultiplier ?? 0;
    message.enableHeight =
      object.enableHeight !== undefined && object.enableHeight !== null
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
