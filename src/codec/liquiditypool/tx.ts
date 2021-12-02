/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreatePool {
  creator: string;
  tokenADenom: string;
  tokenBDenom: string;
  tokenAWeight: string;
  tokenBWeight: string;
  swapFee: string;
  numQuotes: Long;
}

export interface MsgCreatePoolResponse {
  poolId: Long;
}

export interface MsgCreatePoolWithLiquidity {
  creator: string;
  tokenADenom: string;
  tokenBDenom: string;
  tokenAWeight: string;
  tokenBWeight: string;
  amountA: string;
  amountB: string;
  swapFee: string;
  numQuotes: Long;
}

export interface MsgCreatePoolWithLiquidityResponse {}

export interface MsgAddLiquidity {
  creator: string;
  poolId: Long;
  amountA: string;
  amountB: string;
  minShares: string;
}

export interface MsgAddLiquidityResponse {}

export interface MsgRemoveLiquidity {
  creator: string;
  poolId: Long;
  shares: string;
}

export interface MsgRemoveLiquidityResponse {}

export interface MsgLinkPool {
  creator: string;
  linkPoolParams?: LinkPoolParams;
}

export interface LinkPoolParams {
  poolId: Long;
  market: string;
}

export interface MsgLinkPoolResponse {}

export interface MsgUnlinkPool {
  creator: string;
  unlinkPoolParams?: UnlinkPoolParams;
}

export interface UnlinkPoolParams {
  poolId: Long;
}

export interface MsgUnlinkPoolResponse {}

export interface MsgSetRewardsWeights {
  creator: string;
  setRewardsWeightsParams?: SetRewardsWeightsParams;
}

export interface SetRewardsWeightsParams {
  weights: RewardsWeightSetter[];
}

export interface RewardsWeightSetter {
  poolId: Long;
  weight: string;
}

export interface MsgSetRewardsWeightsResponse {}

export interface MsgStakePoolToken {
  creator: string;
  denom: string;
  amount: string;
  duration: Long;
}

export interface MsgStakePoolTokenResponse {}

export interface MsgUnstakePoolToken {
  creator: string;
  denom: string;
  amount: string;
}

export interface MsgUnstakePoolTokenResponse {}

export interface MsgClaimPoolRewards {
  creator: string;
  poolId: Long;
}

export interface MsgClaimPoolRewardsResponse {}

export interface MsgSetRewardCurve {
  creator: string;
  setRewardCurveParams?: SetRewardCurveParams;
}

export interface SetRewardCurveParams {
  startTime?: Date;
  initialRewardBps: number;
  reductionMultiplierBps: number;
  reductionIntervalSeconds: Long;
  reductions: number;
  finalRewardBps: number;
}

export interface MsgSetRewardCurveResponse {}

export interface MsgChangeSwapFee {
  creator: string;
  changeSwapFeeParams?: ChangeSwapFeeParams;
}

export interface ChangeSwapFeeParams {
  poolId: Long;
  swapFee: string;
}

export interface MsgChangeSwapFeeResponse {}

export interface MsgSetCommitmentCurve {
  creator: string;
  setCommitmentCurveParams?: SetCommitmentCurveParams;
}

export interface SetCommitmentCurveParams {
  maxDuration: Long;
  maxRewardMultiplier: number;
}

export interface MsgSetCommitmentCurveResponse {}

export interface MsgChangeNumQuotes {
  creator: string;
  changeNumQuotesParams?: ChangeNumQuotesParams;
}

export interface ChangeNumQuotesParams {
  poolId: Long;
  numQuotes: Long;
}

export interface MsgChangeNumQuotesResponse {}

const baseMsgCreatePool: object = {
  creator: "",
  tokenADenom: "",
  tokenBDenom: "",
  tokenAWeight: "",
  tokenBWeight: "",
  swapFee: "",
  numQuotes: Long.ZERO,
};

export const MsgCreatePool = {
  encode(
    message: MsgCreatePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tokenADenom !== "") {
      writer.uint32(18).string(message.tokenADenom);
    }
    if (message.tokenBDenom !== "") {
      writer.uint32(26).string(message.tokenBDenom);
    }
    if (message.tokenAWeight !== "") {
      writer.uint32(34).string(message.tokenAWeight);
    }
    if (message.tokenBWeight !== "") {
      writer.uint32(42).string(message.tokenBWeight);
    }
    if (message.swapFee !== "") {
      writer.uint32(50).string(message.swapFee);
    }
    if (!message.numQuotes.isZero()) {
      writer.uint32(56).int64(message.numQuotes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tokenADenom = reader.string();
          break;
        case 3:
          message.tokenBDenom = reader.string();
          break;
        case 4:
          message.tokenAWeight = reader.string();
          break;
        case 5:
          message.tokenBWeight = reader.string();
          break;
        case 6:
          message.swapFee = reader.string();
          break;
        case 7:
          message.numQuotes = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.tokenADenom =
      object.tokenADenom !== undefined && object.tokenADenom !== null
        ? String(object.tokenADenom)
        : "";
    message.tokenBDenom =
      object.tokenBDenom !== undefined && object.tokenBDenom !== null
        ? String(object.tokenBDenom)
        : "";
    message.tokenAWeight =
      object.tokenAWeight !== undefined && object.tokenAWeight !== null
        ? String(object.tokenAWeight)
        : "";
    message.tokenBWeight =
      object.tokenBWeight !== undefined && object.tokenBWeight !== null
        ? String(object.tokenBWeight)
        : "";
    message.swapFee =
      object.swapFee !== undefined && object.swapFee !== null
        ? String(object.swapFee)
        : "";
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromString(object.numQuotes)
        : Long.ZERO;
    return message;
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenADenom !== undefined &&
      (obj.tokenADenom = message.tokenADenom);
    message.tokenBDenom !== undefined &&
      (obj.tokenBDenom = message.tokenBDenom);
    message.tokenAWeight !== undefined &&
      (obj.tokenAWeight = message.tokenAWeight);
    message.tokenBWeight !== undefined &&
      (obj.tokenBWeight = message.tokenBWeight);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.numQuotes !== undefined &&
      (obj.numQuotes = (message.numQuotes || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePool>, I>>(
    object: I
  ): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    message.creator = object.creator ?? "";
    message.tokenADenom = object.tokenADenom ?? "";
    message.tokenBDenom = object.tokenBDenom ?? "";
    message.tokenAWeight = object.tokenAWeight ?? "";
    message.tokenBWeight = object.tokenBWeight ?? "";
    message.swapFee = object.swapFee ?? "";
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
        : Long.ZERO;
    return message;
  },
};

const baseMsgCreatePoolResponse: object = { poolId: Long.UZERO };

export const MsgCreatePoolResponse = {
  encode(
    message: MsgCreatePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolResponse>, I>>(
    object: I
  ): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    return message;
  },
};

const baseMsgCreatePoolWithLiquidity: object = {
  creator: "",
  tokenADenom: "",
  tokenBDenom: "",
  tokenAWeight: "",
  tokenBWeight: "",
  amountA: "",
  amountB: "",
  swapFee: "",
  numQuotes: Long.ZERO,
};

export const MsgCreatePoolWithLiquidity = {
  encode(
    message: MsgCreatePoolWithLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tokenADenom !== "") {
      writer.uint32(18).string(message.tokenADenom);
    }
    if (message.tokenBDenom !== "") {
      writer.uint32(26).string(message.tokenBDenom);
    }
    if (message.tokenAWeight !== "") {
      writer.uint32(34).string(message.tokenAWeight);
    }
    if (message.tokenBWeight !== "") {
      writer.uint32(42).string(message.tokenBWeight);
    }
    if (message.amountA !== "") {
      writer.uint32(50).string(message.amountA);
    }
    if (message.amountB !== "") {
      writer.uint32(58).string(message.amountB);
    }
    if (message.swapFee !== "") {
      writer.uint32(66).string(message.swapFee);
    }
    if (!message.numQuotes.isZero()) {
      writer.uint32(72).int64(message.numQuotes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePoolWithLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePoolWithLiquidity,
    } as MsgCreatePoolWithLiquidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tokenADenom = reader.string();
          break;
        case 3:
          message.tokenBDenom = reader.string();
          break;
        case 4:
          message.tokenAWeight = reader.string();
          break;
        case 5:
          message.tokenBWeight = reader.string();
          break;
        case 6:
          message.amountA = reader.string();
          break;
        case 7:
          message.amountB = reader.string();
          break;
        case 8:
          message.swapFee = reader.string();
          break;
        case 9:
          message.numQuotes = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoolWithLiquidity {
    const message = {
      ...baseMsgCreatePoolWithLiquidity,
    } as MsgCreatePoolWithLiquidity;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.tokenADenom =
      object.tokenADenom !== undefined && object.tokenADenom !== null
        ? String(object.tokenADenom)
        : "";
    message.tokenBDenom =
      object.tokenBDenom !== undefined && object.tokenBDenom !== null
        ? String(object.tokenBDenom)
        : "";
    message.tokenAWeight =
      object.tokenAWeight !== undefined && object.tokenAWeight !== null
        ? String(object.tokenAWeight)
        : "";
    message.tokenBWeight =
      object.tokenBWeight !== undefined && object.tokenBWeight !== null
        ? String(object.tokenBWeight)
        : "";
    message.amountA =
      object.amountA !== undefined && object.amountA !== null
        ? String(object.amountA)
        : "";
    message.amountB =
      object.amountB !== undefined && object.amountB !== null
        ? String(object.amountB)
        : "";
    message.swapFee =
      object.swapFee !== undefined && object.swapFee !== null
        ? String(object.swapFee)
        : "";
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromString(object.numQuotes)
        : Long.ZERO;
    return message;
  },

  toJSON(message: MsgCreatePoolWithLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenADenom !== undefined &&
      (obj.tokenADenom = message.tokenADenom);
    message.tokenBDenom !== undefined &&
      (obj.tokenBDenom = message.tokenBDenom);
    message.tokenAWeight !== undefined &&
      (obj.tokenAWeight = message.tokenAWeight);
    message.tokenBWeight !== undefined &&
      (obj.tokenBWeight = message.tokenBWeight);
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.numQuotes !== undefined &&
      (obj.numQuotes = (message.numQuotes || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolWithLiquidity>, I>>(
    object: I
  ): MsgCreatePoolWithLiquidity {
    const message = {
      ...baseMsgCreatePoolWithLiquidity,
    } as MsgCreatePoolWithLiquidity;
    message.creator = object.creator ?? "";
    message.tokenADenom = object.tokenADenom ?? "";
    message.tokenBDenom = object.tokenBDenom ?? "";
    message.tokenAWeight = object.tokenAWeight ?? "";
    message.tokenBWeight = object.tokenBWeight ?? "";
    message.amountA = object.amountA ?? "";
    message.amountB = object.amountB ?? "";
    message.swapFee = object.swapFee ?? "";
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
        : Long.ZERO;
    return message;
  },
};

const baseMsgCreatePoolWithLiquidityResponse: object = {};

export const MsgCreatePoolWithLiquidityResponse = {
  encode(
    _: MsgCreatePoolWithLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePoolWithLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePoolWithLiquidityResponse,
    } as MsgCreatePoolWithLiquidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePoolWithLiquidityResponse {
    const message = {
      ...baseMsgCreatePoolWithLiquidityResponse,
    } as MsgCreatePoolWithLiquidityResponse;
    return message;
  },

  toJSON(_: MsgCreatePoolWithLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgCreatePoolWithLiquidityResponse>, I>
  >(_: I): MsgCreatePoolWithLiquidityResponse {
    const message = {
      ...baseMsgCreatePoolWithLiquidityResponse,
    } as MsgCreatePoolWithLiquidityResponse;
    return message;
  },
};

const baseMsgAddLiquidity: object = {
  creator: "",
  poolId: Long.UZERO,
  amountA: "",
  amountB: "",
  minShares: "",
};

export const MsgAddLiquidity = {
  encode(
    message: MsgAddLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.amountA !== "") {
      writer.uint32(26).string(message.amountA);
    }
    if (message.amountB !== "") {
      writer.uint32(34).string(message.amountB);
    }
    if (message.minShares !== "") {
      writer.uint32(42).string(message.minShares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddLiquidity } as MsgAddLiquidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.amountA = reader.string();
          break;
        case 4:
          message.amountB = reader.string();
          break;
        case 5:
          message.minShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddLiquidity {
    const message = { ...baseMsgAddLiquidity } as MsgAddLiquidity;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.amountA =
      object.amountA !== undefined && object.amountA !== null
        ? String(object.amountA)
        : "";
    message.amountB =
      object.amountB !== undefined && object.amountB !== null
        ? String(object.amountB)
        : "";
    message.minShares =
      object.minShares !== undefined && object.minShares !== null
        ? String(object.minShares)
        : "";
    return message;
  },

  toJSON(message: MsgAddLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.minShares !== undefined && (obj.minShares = message.minShares);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddLiquidity>, I>>(
    object: I
  ): MsgAddLiquidity {
    const message = { ...baseMsgAddLiquidity } as MsgAddLiquidity;
    message.creator = object.creator ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.amountA = object.amountA ?? "";
    message.amountB = object.amountB ?? "";
    message.minShares = object.minShares ?? "";
    return message;
  },
};

const baseMsgAddLiquidityResponse: object = {};

export const MsgAddLiquidityResponse = {
  encode(
    _: MsgAddLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddLiquidityResponse,
    } as MsgAddLiquidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddLiquidityResponse {
    const message = {
      ...baseMsgAddLiquidityResponse,
    } as MsgAddLiquidityResponse;
    return message;
  },

  toJSON(_: MsgAddLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddLiquidityResponse>, I>>(
    _: I
  ): MsgAddLiquidityResponse {
    const message = {
      ...baseMsgAddLiquidityResponse,
    } as MsgAddLiquidityResponse;
    return message;
  },
};

const baseMsgRemoveLiquidity: object = {
  creator: "",
  poolId: Long.UZERO,
  shares: "",
};

export const MsgRemoveLiquidity = {
  encode(
    message: MsgRemoveLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveLiquidity } as MsgRemoveLiquidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveLiquidity {
    const message = { ...baseMsgRemoveLiquidity } as MsgRemoveLiquidity;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.shares =
      object.shares !== undefined && object.shares !== null
        ? String(object.shares)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveLiquidity>, I>>(
    object: I
  ): MsgRemoveLiquidity {
    const message = { ...baseMsgRemoveLiquidity } as MsgRemoveLiquidity;
    message.creator = object.creator ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.shares = object.shares ?? "";
    return message;
  },
};

const baseMsgRemoveLiquidityResponse: object = {};

export const MsgRemoveLiquidityResponse = {
  encode(
    _: MsgRemoveLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveLiquidityResponse,
    } as MsgRemoveLiquidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveLiquidityResponse {
    const message = {
      ...baseMsgRemoveLiquidityResponse,
    } as MsgRemoveLiquidityResponse;
    return message;
  },

  toJSON(_: MsgRemoveLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveLiquidityResponse>, I>>(
    _: I
  ): MsgRemoveLiquidityResponse {
    const message = {
      ...baseMsgRemoveLiquidityResponse,
    } as MsgRemoveLiquidityResponse;
    return message;
  },
};

const baseMsgLinkPool: object = { creator: "" };

export const MsgLinkPool = {
  encode(
    message: MsgLinkPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.linkPoolParams !== undefined) {
      LinkPoolParams.encode(
        message.linkPoolParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLinkPool } as MsgLinkPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.linkPoolParams = LinkPoolParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLinkPool {
    const message = { ...baseMsgLinkPool } as MsgLinkPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.linkPoolParams =
      object.linkPoolParams !== undefined && object.linkPoolParams !== null
        ? LinkPoolParams.fromJSON(object.linkPoolParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgLinkPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.linkPoolParams !== undefined &&
      (obj.linkPoolParams = message.linkPoolParams
        ? LinkPoolParams.toJSON(message.linkPoolParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLinkPool>, I>>(
    object: I
  ): MsgLinkPool {
    const message = { ...baseMsgLinkPool } as MsgLinkPool;
    message.creator = object.creator ?? "";
    message.linkPoolParams =
      object.linkPoolParams !== undefined && object.linkPoolParams !== null
        ? LinkPoolParams.fromPartial(object.linkPoolParams)
        : undefined;
    return message;
  },
};

const baseLinkPoolParams: object = { poolId: Long.UZERO, market: "" };

export const LinkPoolParams = {
  encode(
    message: LinkPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLinkPoolParams } as LinkPoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.market = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkPoolParams {
    const message = { ...baseLinkPoolParams } as LinkPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    return message;
  },

  toJSON(message: LinkPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LinkPoolParams>, I>>(
    object: I
  ): LinkPoolParams {
    const message = { ...baseLinkPoolParams } as LinkPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.market = object.market ?? "";
    return message;
  },
};

const baseMsgLinkPoolResponse: object = {};

export const MsgLinkPoolResponse = {
  encode(
    _: MsgLinkPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLinkPoolResponse } as MsgLinkPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLinkPoolResponse {
    const message = { ...baseMsgLinkPoolResponse } as MsgLinkPoolResponse;
    return message;
  },

  toJSON(_: MsgLinkPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLinkPoolResponse>, I>>(
    _: I
  ): MsgLinkPoolResponse {
    const message = { ...baseMsgLinkPoolResponse } as MsgLinkPoolResponse;
    return message;
  },
};

const baseMsgUnlinkPool: object = { creator: "" };

export const MsgUnlinkPool = {
  encode(
    message: MsgUnlinkPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.unlinkPoolParams !== undefined) {
      UnlinkPoolParams.encode(
        message.unlinkPoolParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlinkPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnlinkPool } as MsgUnlinkPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.unlinkPoolParams = UnlinkPoolParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnlinkPool {
    const message = { ...baseMsgUnlinkPool } as MsgUnlinkPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.unlinkPoolParams =
      object.unlinkPoolParams !== undefined && object.unlinkPoolParams !== null
        ? UnlinkPoolParams.fromJSON(object.unlinkPoolParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUnlinkPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.unlinkPoolParams !== undefined &&
      (obj.unlinkPoolParams = message.unlinkPoolParams
        ? UnlinkPoolParams.toJSON(message.unlinkPoolParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnlinkPool>, I>>(
    object: I
  ): MsgUnlinkPool {
    const message = { ...baseMsgUnlinkPool } as MsgUnlinkPool;
    message.creator = object.creator ?? "";
    message.unlinkPoolParams =
      object.unlinkPoolParams !== undefined && object.unlinkPoolParams !== null
        ? UnlinkPoolParams.fromPartial(object.unlinkPoolParams)
        : undefined;
    return message;
  },
};

const baseUnlinkPoolParams: object = { poolId: Long.UZERO };

export const UnlinkPoolParams = {
  encode(
    message: UnlinkPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnlinkPoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnlinkPoolParams } as UnlinkPoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnlinkPoolParams {
    const message = { ...baseUnlinkPoolParams } as UnlinkPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: UnlinkPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnlinkPoolParams>, I>>(
    object: I
  ): UnlinkPoolParams {
    const message = { ...baseUnlinkPoolParams } as UnlinkPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    return message;
  },
};

const baseMsgUnlinkPoolResponse: object = {};

export const MsgUnlinkPoolResponse = {
  encode(
    _: MsgUnlinkPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnlinkPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnlinkPoolResponse } as MsgUnlinkPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnlinkPoolResponse {
    const message = { ...baseMsgUnlinkPoolResponse } as MsgUnlinkPoolResponse;
    return message;
  },

  toJSON(_: MsgUnlinkPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnlinkPoolResponse>, I>>(
    _: I
  ): MsgUnlinkPoolResponse {
    const message = { ...baseMsgUnlinkPoolResponse } as MsgUnlinkPoolResponse;
    return message;
  },
};

const baseMsgSetRewardsWeights: object = { creator: "" };

export const MsgSetRewardsWeights = {
  encode(
    message: MsgSetRewardsWeights,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setRewardsWeightsParams !== undefined) {
      SetRewardsWeightsParams.encode(
        message.setRewardsWeightsParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRewardsWeights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRewardsWeights } as MsgSetRewardsWeights;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setRewardsWeightsParams = SetRewardsWeightsParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetRewardsWeights {
    const message = { ...baseMsgSetRewardsWeights } as MsgSetRewardsWeights;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.setRewardsWeightsParams =
      object.setRewardsWeightsParams !== undefined &&
      object.setRewardsWeightsParams !== null
        ? SetRewardsWeightsParams.fromJSON(object.setRewardsWeightsParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetRewardsWeights): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setRewardsWeightsParams !== undefined &&
      (obj.setRewardsWeightsParams = message.setRewardsWeightsParams
        ? SetRewardsWeightsParams.toJSON(message.setRewardsWeightsParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetRewardsWeights>, I>>(
    object: I
  ): MsgSetRewardsWeights {
    const message = { ...baseMsgSetRewardsWeights } as MsgSetRewardsWeights;
    message.creator = object.creator ?? "";
    message.setRewardsWeightsParams =
      object.setRewardsWeightsParams !== undefined &&
      object.setRewardsWeightsParams !== null
        ? SetRewardsWeightsParams.fromPartial(object.setRewardsWeightsParams)
        : undefined;
    return message;
  },
};

const baseSetRewardsWeightsParams: object = {};

export const SetRewardsWeightsParams = {
  encode(
    message: SetRewardsWeightsParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.weights) {
      RewardsWeightSetter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetRewardsWeightsParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetRewardsWeightsParams,
    } as SetRewardsWeightsParams;
    message.weights = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weights.push(
            RewardsWeightSetter.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetRewardsWeightsParams {
    const message = {
      ...baseSetRewardsWeightsParams,
    } as SetRewardsWeightsParams;
    message.weights = (object.weights ?? []).map((e: any) =>
      RewardsWeightSetter.fromJSON(e)
    );
    return message;
  },

  toJSON(message: SetRewardsWeightsParams): unknown {
    const obj: any = {};
    if (message.weights) {
      obj.weights = message.weights.map((e) =>
        e ? RewardsWeightSetter.toJSON(e) : undefined
      );
    } else {
      obj.weights = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetRewardsWeightsParams>, I>>(
    object: I
  ): SetRewardsWeightsParams {
    const message = {
      ...baseSetRewardsWeightsParams,
    } as SetRewardsWeightsParams;
    message.weights =
      object.weights?.map((e) => RewardsWeightSetter.fromPartial(e)) || [];
    return message;
  },
};

const baseRewardsWeightSetter: object = { poolId: Long.UZERO, weight: "" };

export const RewardsWeightSetter = {
  encode(
    message: RewardsWeightSetter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsWeightSetter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardsWeightSetter } as RewardsWeightSetter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardsWeightSetter {
    const message = { ...baseRewardsWeightSetter } as RewardsWeightSetter;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.weight =
      object.weight !== undefined && object.weight !== null
        ? String(object.weight)
        : "";
    return message;
  },

  toJSON(message: RewardsWeightSetter): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardsWeightSetter>, I>>(
    object: I
  ): RewardsWeightSetter {
    const message = { ...baseRewardsWeightSetter } as RewardsWeightSetter;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.weight = object.weight ?? "";
    return message;
  },
};

const baseMsgSetRewardsWeightsResponse: object = {};

export const MsgSetRewardsWeightsResponse = {
  encode(
    _: MsgSetRewardsWeightsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRewardsWeightsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetRewardsWeightsResponse,
    } as MsgSetRewardsWeightsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetRewardsWeightsResponse {
    const message = {
      ...baseMsgSetRewardsWeightsResponse,
    } as MsgSetRewardsWeightsResponse;
    return message;
  },

  toJSON(_: MsgSetRewardsWeightsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetRewardsWeightsResponse>, I>>(
    _: I
  ): MsgSetRewardsWeightsResponse {
    const message = {
      ...baseMsgSetRewardsWeightsResponse,
    } as MsgSetRewardsWeightsResponse;
    return message;
  },
};

const baseMsgStakePoolToken: object = {
  creator: "",
  denom: "",
  amount: "",
  duration: Long.UZERO,
};

export const MsgStakePoolToken = {
  encode(
    message: MsgStakePoolToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (!message.duration.isZero()) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakePoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStakePoolToken } as MsgStakePoolToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.duration = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStakePoolToken {
    const message = { ...baseMsgStakePoolToken } as MsgStakePoolToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Long.fromString(object.duration)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgStakePoolToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.duration !== undefined &&
      (obj.duration = (message.duration || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStakePoolToken>, I>>(
    object: I
  ): MsgStakePoolToken {
    const message = { ...baseMsgStakePoolToken } as MsgStakePoolToken;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Long.fromValue(object.duration)
        : Long.UZERO;
    return message;
  },
};

const baseMsgStakePoolTokenResponse: object = {};

export const MsgStakePoolTokenResponse = {
  encode(
    _: MsgStakePoolTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgStakePoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgStakePoolTokenResponse,
    } as MsgStakePoolTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgStakePoolTokenResponse {
    const message = {
      ...baseMsgStakePoolTokenResponse,
    } as MsgStakePoolTokenResponse;
    return message;
  },

  toJSON(_: MsgStakePoolTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStakePoolTokenResponse>, I>>(
    _: I
  ): MsgStakePoolTokenResponse {
    const message = {
      ...baseMsgStakePoolTokenResponse,
    } as MsgStakePoolTokenResponse;
    return message;
  },
};

const baseMsgUnstakePoolToken: object = { creator: "", denom: "", amount: "" };

export const MsgUnstakePoolToken = {
  encode(
    message: MsgUnstakePoolToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakePoolToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnstakePoolToken } as MsgUnstakePoolToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstakePoolToken {
    const message = { ...baseMsgUnstakePoolToken } as MsgUnstakePoolToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: MsgUnstakePoolToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstakePoolToken>, I>>(
    object: I
  ): MsgUnstakePoolToken {
    const message = { ...baseMsgUnstakePoolToken } as MsgUnstakePoolToken;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgUnstakePoolTokenResponse: object = {};

export const MsgUnstakePoolTokenResponse = {
  encode(
    _: MsgUnstakePoolTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnstakePoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUnstakePoolTokenResponse,
    } as MsgUnstakePoolTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnstakePoolTokenResponse {
    const message = {
      ...baseMsgUnstakePoolTokenResponse,
    } as MsgUnstakePoolTokenResponse;
    return message;
  },

  toJSON(_: MsgUnstakePoolTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstakePoolTokenResponse>, I>>(
    _: I
  ): MsgUnstakePoolTokenResponse {
    const message = {
      ...baseMsgUnstakePoolTokenResponse,
    } as MsgUnstakePoolTokenResponse;
    return message;
  },
};

const baseMsgClaimPoolRewards: object = { creator: "", poolId: Long.UZERO };

export const MsgClaimPoolRewards = {
  encode(
    message: MsgClaimPoolRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimPoolRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimPoolRewards } as MsgClaimPoolRewards;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimPoolRewards {
    const message = { ...baseMsgClaimPoolRewards } as MsgClaimPoolRewards;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgClaimPoolRewards): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimPoolRewards>, I>>(
    object: I
  ): MsgClaimPoolRewards {
    const message = { ...baseMsgClaimPoolRewards } as MsgClaimPoolRewards;
    message.creator = object.creator ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    return message;
  },
};

const baseMsgClaimPoolRewardsResponse: object = {};

export const MsgClaimPoolRewardsResponse = {
  encode(
    _: MsgClaimPoolRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimPoolRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClaimPoolRewardsResponse,
    } as MsgClaimPoolRewardsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgClaimPoolRewardsResponse {
    const message = {
      ...baseMsgClaimPoolRewardsResponse,
    } as MsgClaimPoolRewardsResponse;
    return message;
  },

  toJSON(_: MsgClaimPoolRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimPoolRewardsResponse>, I>>(
    _: I
  ): MsgClaimPoolRewardsResponse {
    const message = {
      ...baseMsgClaimPoolRewardsResponse,
    } as MsgClaimPoolRewardsResponse;
    return message;
  },
};

const baseMsgSetRewardCurve: object = { creator: "" };

export const MsgSetRewardCurve = {
  encode(
    message: MsgSetRewardCurve,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setRewardCurveParams !== undefined) {
      SetRewardCurveParams.encode(
        message.setRewardCurveParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRewardCurve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRewardCurve } as MsgSetRewardCurve;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setRewardCurveParams = SetRewardCurveParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetRewardCurve {
    const message = { ...baseMsgSetRewardCurve } as MsgSetRewardCurve;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.setRewardCurveParams =
      object.setRewardCurveParams !== undefined &&
      object.setRewardCurveParams !== null
        ? SetRewardCurveParams.fromJSON(object.setRewardCurveParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetRewardCurve): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setRewardCurveParams !== undefined &&
      (obj.setRewardCurveParams = message.setRewardCurveParams
        ? SetRewardCurveParams.toJSON(message.setRewardCurveParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetRewardCurve>, I>>(
    object: I
  ): MsgSetRewardCurve {
    const message = { ...baseMsgSetRewardCurve } as MsgSetRewardCurve;
    message.creator = object.creator ?? "";
    message.setRewardCurveParams =
      object.setRewardCurveParams !== undefined &&
      object.setRewardCurveParams !== null
        ? SetRewardCurveParams.fromPartial(object.setRewardCurveParams)
        : undefined;
    return message;
  },
};

const baseSetRewardCurveParams: object = {
  initialRewardBps: 0,
  reductionMultiplierBps: 0,
  reductionIntervalSeconds: Long.UZERO,
  reductions: 0,
  finalRewardBps: 0,
};

export const SetRewardCurveParams = {
  encode(
    message: SetRewardCurveParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.initialRewardBps !== 0) {
      writer.uint32(16).uint32(message.initialRewardBps);
    }
    if (message.reductionMultiplierBps !== 0) {
      writer.uint32(24).uint32(message.reductionMultiplierBps);
    }
    if (!message.reductionIntervalSeconds.isZero()) {
      writer.uint32(32).uint64(message.reductionIntervalSeconds);
    }
    if (message.reductions !== 0) {
      writer.uint32(40).uint32(message.reductions);
    }
    if (message.finalRewardBps !== 0) {
      writer.uint32(48).uint32(message.finalRewardBps);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetRewardCurveParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetRewardCurveParams } as SetRewardCurveParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.initialRewardBps = reader.uint32();
          break;
        case 3:
          message.reductionMultiplierBps = reader.uint32();
          break;
        case 4:
          message.reductionIntervalSeconds = reader.uint64() as Long;
          break;
        case 5:
          message.reductions = reader.uint32();
          break;
        case 6:
          message.finalRewardBps = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetRewardCurveParams {
    const message = { ...baseSetRewardCurveParams } as SetRewardCurveParams;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.initialRewardBps =
      object.initialRewardBps !== undefined && object.initialRewardBps !== null
        ? Number(object.initialRewardBps)
        : 0;
    message.reductionMultiplierBps =
      object.reductionMultiplierBps !== undefined &&
      object.reductionMultiplierBps !== null
        ? Number(object.reductionMultiplierBps)
        : 0;
    message.reductionIntervalSeconds =
      object.reductionIntervalSeconds !== undefined &&
      object.reductionIntervalSeconds !== null
        ? Long.fromString(object.reductionIntervalSeconds)
        : Long.UZERO;
    message.reductions =
      object.reductions !== undefined && object.reductions !== null
        ? Number(object.reductions)
        : 0;
    message.finalRewardBps =
      object.finalRewardBps !== undefined && object.finalRewardBps !== null
        ? Number(object.finalRewardBps)
        : 0;
    return message;
  },

  toJSON(message: SetRewardCurveParams): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.initialRewardBps !== undefined &&
      (obj.initialRewardBps = message.initialRewardBps);
    message.reductionMultiplierBps !== undefined &&
      (obj.reductionMultiplierBps = message.reductionMultiplierBps);
    message.reductionIntervalSeconds !== undefined &&
      (obj.reductionIntervalSeconds = (
        message.reductionIntervalSeconds || Long.UZERO
      ).toString());
    message.reductions !== undefined && (obj.reductions = message.reductions);
    message.finalRewardBps !== undefined &&
      (obj.finalRewardBps = message.finalRewardBps);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetRewardCurveParams>, I>>(
    object: I
  ): SetRewardCurveParams {
    const message = { ...baseSetRewardCurveParams } as SetRewardCurveParams;
    message.startTime = object.startTime ?? undefined;
    message.initialRewardBps = object.initialRewardBps ?? 0;
    message.reductionMultiplierBps = object.reductionMultiplierBps ?? 0;
    message.reductionIntervalSeconds =
      object.reductionIntervalSeconds !== undefined &&
      object.reductionIntervalSeconds !== null
        ? Long.fromValue(object.reductionIntervalSeconds)
        : Long.UZERO;
    message.reductions = object.reductions ?? 0;
    message.finalRewardBps = object.finalRewardBps ?? 0;
    return message;
  },
};

const baseMsgSetRewardCurveResponse: object = {};

export const MsgSetRewardCurveResponse = {
  encode(
    _: MsgSetRewardCurveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRewardCurveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetRewardCurveResponse,
    } as MsgSetRewardCurveResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetRewardCurveResponse {
    const message = {
      ...baseMsgSetRewardCurveResponse,
    } as MsgSetRewardCurveResponse;
    return message;
  },

  toJSON(_: MsgSetRewardCurveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetRewardCurveResponse>, I>>(
    _: I
  ): MsgSetRewardCurveResponse {
    const message = {
      ...baseMsgSetRewardCurveResponse,
    } as MsgSetRewardCurveResponse;
    return message;
  },
};

const baseMsgChangeSwapFee: object = { creator: "" };

export const MsgChangeSwapFee = {
  encode(
    message: MsgChangeSwapFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.changeSwapFeeParams !== undefined) {
      ChangeSwapFeeParams.encode(
        message.changeSwapFeeParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeSwapFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChangeSwapFee } as MsgChangeSwapFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.changeSwapFeeParams = ChangeSwapFeeParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeSwapFee {
    const message = { ...baseMsgChangeSwapFee } as MsgChangeSwapFee;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.changeSwapFeeParams =
      object.changeSwapFeeParams !== undefined &&
      object.changeSwapFeeParams !== null
        ? ChangeSwapFeeParams.fromJSON(object.changeSwapFeeParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgChangeSwapFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.changeSwapFeeParams !== undefined &&
      (obj.changeSwapFeeParams = message.changeSwapFeeParams
        ? ChangeSwapFeeParams.toJSON(message.changeSwapFeeParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeSwapFee>, I>>(
    object: I
  ): MsgChangeSwapFee {
    const message = { ...baseMsgChangeSwapFee } as MsgChangeSwapFee;
    message.creator = object.creator ?? "";
    message.changeSwapFeeParams =
      object.changeSwapFeeParams !== undefined &&
      object.changeSwapFeeParams !== null
        ? ChangeSwapFeeParams.fromPartial(object.changeSwapFeeParams)
        : undefined;
    return message;
  },
};

const baseChangeSwapFeeParams: object = { poolId: Long.UZERO, swapFee: "" };

export const ChangeSwapFeeParams = {
  encode(
    message: ChangeSwapFeeParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.swapFee !== "") {
      writer.uint32(18).string(message.swapFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeSwapFeeParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChangeSwapFeeParams } as ChangeSwapFeeParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.swapFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeSwapFeeParams {
    const message = { ...baseChangeSwapFeeParams } as ChangeSwapFeeParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.swapFee =
      object.swapFee !== undefined && object.swapFee !== null
        ? String(object.swapFee)
        : "";
    return message;
  },

  toJSON(message: ChangeSwapFeeParams): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChangeSwapFeeParams>, I>>(
    object: I
  ): ChangeSwapFeeParams {
    const message = { ...baseChangeSwapFeeParams } as ChangeSwapFeeParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.swapFee = object.swapFee ?? "";
    return message;
  },
};

const baseMsgChangeSwapFeeResponse: object = {};

export const MsgChangeSwapFeeResponse = {
  encode(
    _: MsgChangeSwapFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChangeSwapFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChangeSwapFeeResponse,
    } as MsgChangeSwapFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgChangeSwapFeeResponse {
    const message = {
      ...baseMsgChangeSwapFeeResponse,
    } as MsgChangeSwapFeeResponse;
    return message;
  },

  toJSON(_: MsgChangeSwapFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeSwapFeeResponse>, I>>(
    _: I
  ): MsgChangeSwapFeeResponse {
    const message = {
      ...baseMsgChangeSwapFeeResponse,
    } as MsgChangeSwapFeeResponse;
    return message;
  },
};

const baseMsgSetCommitmentCurve: object = { creator: "" };

export const MsgSetCommitmentCurve = {
  encode(
    message: MsgSetCommitmentCurve,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setCommitmentCurveParams !== undefined) {
      SetCommitmentCurveParams.encode(
        message.setCommitmentCurveParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetCommitmentCurve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetCommitmentCurve } as MsgSetCommitmentCurve;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setCommitmentCurveParams = SetCommitmentCurveParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetCommitmentCurve {
    const message = { ...baseMsgSetCommitmentCurve } as MsgSetCommitmentCurve;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.setCommitmentCurveParams =
      object.setCommitmentCurveParams !== undefined &&
      object.setCommitmentCurveParams !== null
        ? SetCommitmentCurveParams.fromJSON(object.setCommitmentCurveParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetCommitmentCurve): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setCommitmentCurveParams !== undefined &&
      (obj.setCommitmentCurveParams = message.setCommitmentCurveParams
        ? SetCommitmentCurveParams.toJSON(message.setCommitmentCurveParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetCommitmentCurve>, I>>(
    object: I
  ): MsgSetCommitmentCurve {
    const message = { ...baseMsgSetCommitmentCurve } as MsgSetCommitmentCurve;
    message.creator = object.creator ?? "";
    message.setCommitmentCurveParams =
      object.setCommitmentCurveParams !== undefined &&
      object.setCommitmentCurveParams !== null
        ? SetCommitmentCurveParams.fromPartial(object.setCommitmentCurveParams)
        : undefined;
    return message;
  },
};

const baseSetCommitmentCurveParams: object = {
  maxDuration: Long.UZERO,
  maxRewardMultiplier: 0,
};

export const SetCommitmentCurveParams = {
  encode(
    message: SetCommitmentCurveParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.maxDuration.isZero()) {
      writer.uint32(8).uint64(message.maxDuration);
    }
    if (message.maxRewardMultiplier !== 0) {
      writer.uint32(16).uint32(message.maxRewardMultiplier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetCommitmentCurveParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetCommitmentCurveParams,
    } as SetCommitmentCurveParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxDuration = reader.uint64() as Long;
          break;
        case 2:
          message.maxRewardMultiplier = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetCommitmentCurveParams {
    const message = {
      ...baseSetCommitmentCurveParams,
    } as SetCommitmentCurveParams;
    message.maxDuration =
      object.maxDuration !== undefined && object.maxDuration !== null
        ? Long.fromString(object.maxDuration)
        : Long.UZERO;
    message.maxRewardMultiplier =
      object.maxRewardMultiplier !== undefined &&
      object.maxRewardMultiplier !== null
        ? Number(object.maxRewardMultiplier)
        : 0;
    return message;
  },

  toJSON(message: SetCommitmentCurveParams): unknown {
    const obj: any = {};
    message.maxDuration !== undefined &&
      (obj.maxDuration = (message.maxDuration || Long.UZERO).toString());
    message.maxRewardMultiplier !== undefined &&
      (obj.maxRewardMultiplier = message.maxRewardMultiplier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetCommitmentCurveParams>, I>>(
    object: I
  ): SetCommitmentCurveParams {
    const message = {
      ...baseSetCommitmentCurveParams,
    } as SetCommitmentCurveParams;
    message.maxDuration =
      object.maxDuration !== undefined && object.maxDuration !== null
        ? Long.fromValue(object.maxDuration)
        : Long.UZERO;
    message.maxRewardMultiplier = object.maxRewardMultiplier ?? 0;
    return message;
  },
};

const baseMsgSetCommitmentCurveResponse: object = {};

export const MsgSetCommitmentCurveResponse = {
  encode(
    _: MsgSetCommitmentCurveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetCommitmentCurveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetCommitmentCurveResponse,
    } as MsgSetCommitmentCurveResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetCommitmentCurveResponse {
    const message = {
      ...baseMsgSetCommitmentCurveResponse,
    } as MsgSetCommitmentCurveResponse;
    return message;
  },

  toJSON(_: MsgSetCommitmentCurveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetCommitmentCurveResponse>, I>>(
    _: I
  ): MsgSetCommitmentCurveResponse {
    const message = {
      ...baseMsgSetCommitmentCurveResponse,
    } as MsgSetCommitmentCurveResponse;
    return message;
  },
};

const baseMsgChangeNumQuotes: object = { creator: "" };

export const MsgChangeNumQuotes = {
  encode(
    message: MsgChangeNumQuotes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.changeNumQuotesParams !== undefined) {
      ChangeNumQuotesParams.encode(
        message.changeNumQuotesParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeNumQuotes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChangeNumQuotes } as MsgChangeNumQuotes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.changeNumQuotesParams = ChangeNumQuotesParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeNumQuotes {
    const message = { ...baseMsgChangeNumQuotes } as MsgChangeNumQuotes;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.changeNumQuotesParams =
      object.changeNumQuotesParams !== undefined &&
      object.changeNumQuotesParams !== null
        ? ChangeNumQuotesParams.fromJSON(object.changeNumQuotesParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgChangeNumQuotes): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.changeNumQuotesParams !== undefined &&
      (obj.changeNumQuotesParams = message.changeNumQuotesParams
        ? ChangeNumQuotesParams.toJSON(message.changeNumQuotesParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeNumQuotes>, I>>(
    object: I
  ): MsgChangeNumQuotes {
    const message = { ...baseMsgChangeNumQuotes } as MsgChangeNumQuotes;
    message.creator = object.creator ?? "";
    message.changeNumQuotesParams =
      object.changeNumQuotesParams !== undefined &&
      object.changeNumQuotesParams !== null
        ? ChangeNumQuotesParams.fromPartial(object.changeNumQuotesParams)
        : undefined;
    return message;
  },
};

const baseChangeNumQuotesParams: object = {
  poolId: Long.UZERO,
  numQuotes: Long.ZERO,
};

export const ChangeNumQuotesParams = {
  encode(
    message: ChangeNumQuotesParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.numQuotes.isZero()) {
      writer.uint32(16).int64(message.numQuotes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeNumQuotesParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChangeNumQuotesParams } as ChangeNumQuotesParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.numQuotes = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeNumQuotesParams {
    const message = { ...baseChangeNumQuotesParams } as ChangeNumQuotesParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromString(object.numQuotes)
        : Long.ZERO;
    return message;
  },

  toJSON(message: ChangeNumQuotesParams): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.numQuotes !== undefined &&
      (obj.numQuotes = (message.numQuotes || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChangeNumQuotesParams>, I>>(
    object: I
  ): ChangeNumQuotesParams {
    const message = { ...baseChangeNumQuotesParams } as ChangeNumQuotesParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
        : Long.ZERO;
    return message;
  },
};

const baseMsgChangeNumQuotesResponse: object = {};

export const MsgChangeNumQuotesResponse = {
  encode(
    _: MsgChangeNumQuotesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChangeNumQuotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChangeNumQuotesResponse,
    } as MsgChangeNumQuotesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgChangeNumQuotesResponse {
    const message = {
      ...baseMsgChangeNumQuotesResponse,
    } as MsgChangeNumQuotesResponse;
    return message;
  },

  toJSON(_: MsgChangeNumQuotesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeNumQuotesResponse>, I>>(
    _: I
  ): MsgChangeNumQuotesResponse {
    const message = {
      ...baseMsgChangeNumQuotesResponse,
    } as MsgChangeNumQuotesResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  HandleCreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  HandleCreatePoolWithLiquidity(
    request: MsgCreatePoolWithLiquidity
  ): Promise<MsgCreatePoolWithLiquidityResponse>;
  HandleAddLiquidity(
    request: MsgAddLiquidity
  ): Promise<MsgAddLiquidityResponse>;
  HandleRemoveLiquidity(
    request: MsgRemoveLiquidity
  ): Promise<MsgRemoveLiquidityResponse>;
  HandleLinkPool(request: MsgLinkPool): Promise<MsgLinkPoolResponse>;
  HandleUnlinkPool(request: MsgUnlinkPool): Promise<MsgUnlinkPoolResponse>;
  HandleSetRewardsWeights(
    request: MsgSetRewardsWeights
  ): Promise<MsgSetRewardsWeightsResponse>;
  HandleStakePoolToken(
    request: MsgStakePoolToken
  ): Promise<MsgStakePoolTokenResponse>;
  HandleUnstakePoolToken(
    request: MsgUnstakePoolToken
  ): Promise<MsgUnstakePoolTokenResponse>;
  HandleClaimPoolRewards(
    request: MsgClaimPoolRewards
  ): Promise<MsgClaimPoolRewardsResponse>;
  HandleSetRewardCurve(
    request: MsgSetRewardCurve
  ): Promise<MsgSetRewardCurveResponse>;
  HandleChangeSwapFee(
    request: MsgChangeSwapFee
  ): Promise<MsgChangeSwapFeeResponse>;
  HandleSetCommitmentCurve(
    request: MsgSetCommitmentCurve
  ): Promise<MsgSetCommitmentCurveResponse>;
  HandleChangeNumQuotes(
    request: MsgChangeNumQuotes
  ): Promise<MsgChangeNumQuotesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.HandleCreatePool = this.HandleCreatePool.bind(this);
    this.HandleCreatePoolWithLiquidity =
      this.HandleCreatePoolWithLiquidity.bind(this);
    this.HandleAddLiquidity = this.HandleAddLiquidity.bind(this);
    this.HandleRemoveLiquidity = this.HandleRemoveLiquidity.bind(this);
    this.HandleLinkPool = this.HandleLinkPool.bind(this);
    this.HandleUnlinkPool = this.HandleUnlinkPool.bind(this);
    this.HandleSetRewardsWeights = this.HandleSetRewardsWeights.bind(this);
    this.HandleStakePoolToken = this.HandleStakePoolToken.bind(this);
    this.HandleUnstakePoolToken = this.HandleUnstakePoolToken.bind(this);
    this.HandleClaimPoolRewards = this.HandleClaimPoolRewards.bind(this);
    this.HandleSetRewardCurve = this.HandleSetRewardCurve.bind(this);
    this.HandleChangeSwapFee = this.HandleChangeSwapFee.bind(this);
    this.HandleSetCommitmentCurve = this.HandleSetCommitmentCurve.bind(this);
    this.HandleChangeNumQuotes = this.HandleChangeNumQuotes.bind(this);
  }
  HandleCreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleCreatePool",
      data
    );
    return promise.then((data) =>
      MsgCreatePoolResponse.decode(new _m0.Reader(data))
    );
  }

  HandleCreatePoolWithLiquidity(
    request: MsgCreatePoolWithLiquidity
  ): Promise<MsgCreatePoolWithLiquidityResponse> {
    const data = MsgCreatePoolWithLiquidity.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleCreatePoolWithLiquidity",
      data
    );
    return promise.then((data) =>
      MsgCreatePoolWithLiquidityResponse.decode(new _m0.Reader(data))
    );
  }

  HandleAddLiquidity(
    request: MsgAddLiquidity
  ): Promise<MsgAddLiquidityResponse> {
    const data = MsgAddLiquidity.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleAddLiquidity",
      data
    );
    return promise.then((data) =>
      MsgAddLiquidityResponse.decode(new _m0.Reader(data))
    );
  }

  HandleRemoveLiquidity(
    request: MsgRemoveLiquidity
  ): Promise<MsgRemoveLiquidityResponse> {
    const data = MsgRemoveLiquidity.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleRemoveLiquidity",
      data
    );
    return promise.then((data) =>
      MsgRemoveLiquidityResponse.decode(new _m0.Reader(data))
    );
  }

  HandleLinkPool(request: MsgLinkPool): Promise<MsgLinkPoolResponse> {
    const data = MsgLinkPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleLinkPool",
      data
    );
    return promise.then((data) =>
      MsgLinkPoolResponse.decode(new _m0.Reader(data))
    );
  }

  HandleUnlinkPool(request: MsgUnlinkPool): Promise<MsgUnlinkPoolResponse> {
    const data = MsgUnlinkPool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleUnlinkPool",
      data
    );
    return promise.then((data) =>
      MsgUnlinkPoolResponse.decode(new _m0.Reader(data))
    );
  }

  HandleSetRewardsWeights(
    request: MsgSetRewardsWeights
  ): Promise<MsgSetRewardsWeightsResponse> {
    const data = MsgSetRewardsWeights.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleSetRewardsWeights",
      data
    );
    return promise.then((data) =>
      MsgSetRewardsWeightsResponse.decode(new _m0.Reader(data))
    );
  }

  HandleStakePoolToken(
    request: MsgStakePoolToken
  ): Promise<MsgStakePoolTokenResponse> {
    const data = MsgStakePoolToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleStakePoolToken",
      data
    );
    return promise.then((data) =>
      MsgStakePoolTokenResponse.decode(new _m0.Reader(data))
    );
  }

  HandleUnstakePoolToken(
    request: MsgUnstakePoolToken
  ): Promise<MsgUnstakePoolTokenResponse> {
    const data = MsgUnstakePoolToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleUnstakePoolToken",
      data
    );
    return promise.then((data) =>
      MsgUnstakePoolTokenResponse.decode(new _m0.Reader(data))
    );
  }

  HandleClaimPoolRewards(
    request: MsgClaimPoolRewards
  ): Promise<MsgClaimPoolRewardsResponse> {
    const data = MsgClaimPoolRewards.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleClaimPoolRewards",
      data
    );
    return promise.then((data) =>
      MsgClaimPoolRewardsResponse.decode(new _m0.Reader(data))
    );
  }

  HandleSetRewardCurve(
    request: MsgSetRewardCurve
  ): Promise<MsgSetRewardCurveResponse> {
    const data = MsgSetRewardCurve.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleSetRewardCurve",
      data
    );
    return promise.then((data) =>
      MsgSetRewardCurveResponse.decode(new _m0.Reader(data))
    );
  }

  HandleChangeSwapFee(
    request: MsgChangeSwapFee
  ): Promise<MsgChangeSwapFeeResponse> {
    const data = MsgChangeSwapFee.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleChangeSwapFee",
      data
    );
    return promise.then((data) =>
      MsgChangeSwapFeeResponse.decode(new _m0.Reader(data))
    );
  }

  HandleSetCommitmentCurve(
    request: MsgSetCommitmentCurve
  ): Promise<MsgSetCommitmentCurveResponse> {
    const data = MsgSetCommitmentCurve.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleSetCommitmentCurve",
      data
    );
    return promise.then((data) =>
      MsgSetCommitmentCurveResponse.decode(new _m0.Reader(data))
    );
  }

  HandleChangeNumQuotes(
    request: MsgChangeNumQuotes
  ): Promise<MsgChangeNumQuotesResponse> {
    const data = MsgChangeNumQuotes.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleChangeNumQuotes",
      data
    );
    return promise.then((data) =>
      MsgChangeNumQuotesResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
