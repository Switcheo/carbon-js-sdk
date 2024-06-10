/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { RewardWeight } from "./reward";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreatePool {
  creator: string;
  tokenADenom: string;
  tokenBDenom: string;
  tokenAWeight: string;
  tokenBWeight: string;
  swapFee: string;
  ampBps: Long;
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
  ampBps: Long;
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

export interface LinkPoolParams {
  poolId: Long;
  marketId: string;
}

export interface UnlinkPoolParams {
  poolId: Long;
}

export interface MsgSetRewardsWeights {
  creator: string;
  setRewardsWeightsParams?: SetRewardsWeightsParams;
}

export interface SetRewardsWeightsParams {
  weights: RewardWeight[];
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

export interface MsgSetCommitmentCurve {
  creator: string;
  setCommitmentCurveParams?: SetCommitmentCurveParams;
}

export interface SetCommitmentCurveParams {
  maxDuration: Long;
  maxRewardMultiplier: number;
}

export interface MsgSetCommitmentCurveResponse {}

export interface MsgUpdatePool {
  creator: string;
  updatePoolParams?: UpdatePoolParams;
}

export interface UpdatePoolParams {
  poolId: Long;
  swapFee: string;
  numQuotes: Long;
}

export interface MsgUpdatePoolResponse {}

export interface MsgCreatePoolRoute {
  creator: string;
  createPoolRouteParams?: CreatePoolRouteParams;
}

export interface MsgCreatePoolRouteResponse {}

export interface CreatePoolRouteParams {
  marketId: string;
  poolIds: Long[];
  numQuotes: Long;
}

export interface MsgRemovePoolRoute {
  creator: string;
  removePoolRouteParams?: RemovePoolRouteParams;
}

export interface MsgRemovePoolRouteResponse {}

export interface RemovePoolRouteParams {
  marketId: string;
  poolIds: Long[];
}

export interface MsgUpdatePoolRoute {
  creator: string;
  updatePoolRouteParams?: UpdatePoolRouteParams;
}

export interface MsgUpdatePoolRouteResponse {}

export interface UpdatePoolRouteParams {
  marketId: string;
  poolIds: Long[];
  numQuotes: Long;
}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}

const baseMsgCreatePool: object = {
  creator: "",
  tokenADenom: "",
  tokenBDenom: "",
  tokenAWeight: "",
  tokenBWeight: "",
  swapFee: "",
  ampBps: Long.UZERO,
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
    if (!message.ampBps.isZero()) {
      writer.uint32(56).uint64(message.ampBps);
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
          message.ampBps = reader.uint64() as Long;
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
    message.ampBps =
      object.ampBps !== undefined && object.ampBps !== null
        ? Long.fromString(object.ampBps)
        : Long.UZERO;
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
    message.ampBps !== undefined &&
      (obj.ampBps = (message.ampBps || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    message.creator = object.creator ?? "";
    message.tokenADenom = object.tokenADenom ?? "";
    message.tokenBDenom = object.tokenBDenom ?? "";
    message.tokenAWeight = object.tokenAWeight ?? "";
    message.tokenBWeight = object.tokenBWeight ?? "";
    message.swapFee = object.swapFee ?? "";
    message.ampBps =
      object.ampBps !== undefined && object.ampBps !== null
        ? Long.fromValue(object.ampBps)
        : Long.UZERO;
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

  fromPartial(
    object: DeepPartial<MsgCreatePoolResponse>
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
  ampBps: Long.UZERO,
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
    if (!message.ampBps.isZero()) {
      writer.uint32(72).uint64(message.ampBps);
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
          message.ampBps = reader.uint64() as Long;
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
    message.ampBps =
      object.ampBps !== undefined && object.ampBps !== null
        ? Long.fromString(object.ampBps)
        : Long.UZERO;
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
    message.ampBps !== undefined &&
      (obj.ampBps = (message.ampBps || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePoolWithLiquidity>
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
    message.ampBps =
      object.ampBps !== undefined && object.ampBps !== null
        ? Long.fromValue(object.ampBps)
        : Long.UZERO;
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

  fromPartial(
    _: DeepPartial<MsgCreatePoolWithLiquidityResponse>
  ): MsgCreatePoolWithLiquidityResponse {
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

  fromPartial(object: DeepPartial<MsgAddLiquidity>): MsgAddLiquidity {
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

  fromPartial(
    _: DeepPartial<MsgAddLiquidityResponse>
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

  fromPartial(object: DeepPartial<MsgRemoveLiquidity>): MsgRemoveLiquidity {
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

  fromPartial(
    _: DeepPartial<MsgRemoveLiquidityResponse>
  ): MsgRemoveLiquidityResponse {
    const message = {
      ...baseMsgRemoveLiquidityResponse,
    } as MsgRemoveLiquidityResponse;
    return message;
  },
};

const baseLinkPoolParams: object = { poolId: Long.UZERO, marketId: "" };

export const LinkPoolParams = {
  encode(
    message: LinkPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
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
          message.marketId = reader.string();
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
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: LinkPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(object: DeepPartial<LinkPoolParams>): LinkPoolParams {
    const message = { ...baseLinkPoolParams } as LinkPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.marketId = object.marketId ?? "";
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

  fromPartial(object: DeepPartial<UnlinkPoolParams>): UnlinkPoolParams {
    const message = { ...baseUnlinkPoolParams } as UnlinkPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
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

  fromPartial(object: DeepPartial<MsgSetRewardsWeights>): MsgSetRewardsWeights {
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
      RewardWeight.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.weights.push(RewardWeight.decode(reader, reader.uint32()));
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
      RewardWeight.fromJSON(e)
    );
    return message;
  },

  toJSON(message: SetRewardsWeightsParams): unknown {
    const obj: any = {};
    if (message.weights) {
      obj.weights = message.weights.map((e) =>
        e ? RewardWeight.toJSON(e) : undefined
      );
    } else {
      obj.weights = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetRewardsWeightsParams>
  ): SetRewardsWeightsParams {
    const message = {
      ...baseSetRewardsWeightsParams,
    } as SetRewardsWeightsParams;
    message.weights = (object.weights ?? []).map((e) =>
      RewardWeight.fromPartial(e)
    );
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

  fromPartial(
    _: DeepPartial<MsgSetRewardsWeightsResponse>
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

  fromPartial(object: DeepPartial<MsgStakePoolToken>): MsgStakePoolToken {
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

  fromPartial(
    _: DeepPartial<MsgStakePoolTokenResponse>
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

  fromPartial(object: DeepPartial<MsgUnstakePoolToken>): MsgUnstakePoolToken {
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

  fromPartial(
    _: DeepPartial<MsgUnstakePoolTokenResponse>
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

  fromPartial(object: DeepPartial<MsgClaimPoolRewards>): MsgClaimPoolRewards {
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

  fromPartial(
    _: DeepPartial<MsgClaimPoolRewardsResponse>
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

  fromPartial(object: DeepPartial<MsgSetRewardCurve>): MsgSetRewardCurve {
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

  fromPartial(object: DeepPartial<SetRewardCurveParams>): SetRewardCurveParams {
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

  fromPartial(
    _: DeepPartial<MsgSetRewardCurveResponse>
  ): MsgSetRewardCurveResponse {
    const message = {
      ...baseMsgSetRewardCurveResponse,
    } as MsgSetRewardCurveResponse;
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

  fromPartial(
    object: DeepPartial<MsgSetCommitmentCurve>
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

  fromPartial(
    object: DeepPartial<SetCommitmentCurveParams>
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

  fromPartial(
    _: DeepPartial<MsgSetCommitmentCurveResponse>
  ): MsgSetCommitmentCurveResponse {
    const message = {
      ...baseMsgSetCommitmentCurveResponse,
    } as MsgSetCommitmentCurveResponse;
    return message;
  },
};

const baseMsgUpdatePool: object = { creator: "" };

export const MsgUpdatePool = {
  encode(
    message: MsgUpdatePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.updatePoolParams !== undefined) {
      UpdatePoolParams.encode(
        message.updatePoolParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.updatePoolParams = UpdatePoolParams.decode(
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

  fromJSON(object: any): MsgUpdatePool {
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.updatePoolParams =
      object.updatePoolParams !== undefined && object.updatePoolParams !== null
        ? UpdatePoolParams.fromJSON(object.updatePoolParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.updatePoolParams !== undefined &&
      (obj.updatePoolParams = message.updatePoolParams
        ? UpdatePoolParams.toJSON(message.updatePoolParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePool>): MsgUpdatePool {
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
    message.creator = object.creator ?? "";
    message.updatePoolParams =
      object.updatePoolParams !== undefined && object.updatePoolParams !== null
        ? UpdatePoolParams.fromPartial(object.updatePoolParams)
        : undefined;
    return message;
  },
};

const baseUpdatePoolParams: object = {
  poolId: Long.UZERO,
  swapFee: "",
  numQuotes: Long.UZERO,
};

export const UpdatePoolParams = {
  encode(
    message: UpdatePoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.swapFee !== "") {
      writer.uint32(18).string(message.swapFee);
    }
    if (!message.numQuotes.isZero()) {
      writer.uint32(24).uint64(message.numQuotes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePoolParams } as UpdatePoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.swapFee = reader.string();
          break;
        case 3:
          message.numQuotes = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolParams {
    const message = { ...baseUpdatePoolParams } as UpdatePoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.swapFee =
      object.swapFee !== undefined && object.swapFee !== null
        ? String(object.swapFee)
        : "";
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromString(object.numQuotes)
        : Long.UZERO;
    return message;
  },

  toJSON(message: UpdatePoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.numQuotes !== undefined &&
      (obj.numQuotes = (message.numQuotes || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<UpdatePoolParams>): UpdatePoolParams {
    const message = { ...baseUpdatePoolParams } as UpdatePoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.swapFee = object.swapFee ?? "";
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
        : Long.UZERO;
    return message;
  },
};

const baseMsgUpdatePoolResponse: object = {};

export const MsgUpdatePoolResponse = {
  encode(
    _: MsgUpdatePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
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

  fromJSON(_: any): MsgUpdatePoolResponse {
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
    return message;
  },

  toJSON(_: MsgUpdatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
    return message;
  },
};

const baseMsgCreatePoolRoute: object = { creator: "" };

export const MsgCreatePoolRoute = {
  encode(
    message: MsgCreatePoolRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createPoolRouteParams !== undefined) {
      CreatePoolRouteParams.encode(
        message.createPoolRouteParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePoolRoute } as MsgCreatePoolRoute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.createPoolRouteParams = CreatePoolRouteParams.decode(
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

  fromJSON(object: any): MsgCreatePoolRoute {
    const message = { ...baseMsgCreatePoolRoute } as MsgCreatePoolRoute;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.createPoolRouteParams =
      object.createPoolRouteParams !== undefined &&
      object.createPoolRouteParams !== null
        ? CreatePoolRouteParams.fromJSON(object.createPoolRouteParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreatePoolRoute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createPoolRouteParams !== undefined &&
      (obj.createPoolRouteParams = message.createPoolRouteParams
        ? CreatePoolRouteParams.toJSON(message.createPoolRouteParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePoolRoute>): MsgCreatePoolRoute {
    const message = { ...baseMsgCreatePoolRoute } as MsgCreatePoolRoute;
    message.creator = object.creator ?? "";
    message.createPoolRouteParams =
      object.createPoolRouteParams !== undefined &&
      object.createPoolRouteParams !== null
        ? CreatePoolRouteParams.fromPartial(object.createPoolRouteParams)
        : undefined;
    return message;
  },
};

const baseMsgCreatePoolRouteResponse: object = {};

export const MsgCreatePoolRouteResponse = {
  encode(
    _: MsgCreatePoolRouteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePoolRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePoolRouteResponse,
    } as MsgCreatePoolRouteResponse;
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

  fromJSON(_: any): MsgCreatePoolRouteResponse {
    const message = {
      ...baseMsgCreatePoolRouteResponse,
    } as MsgCreatePoolRouteResponse;
    return message;
  },

  toJSON(_: MsgCreatePoolRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePoolRouteResponse>
  ): MsgCreatePoolRouteResponse {
    const message = {
      ...baseMsgCreatePoolRouteResponse,
    } as MsgCreatePoolRouteResponse;
    return message;
  },
};

const baseCreatePoolRouteParams: object = {
  marketId: "",
  poolIds: Long.UZERO,
  numQuotes: Long.UZERO,
};

export const CreatePoolRouteParams = {
  encode(
    message: CreatePoolRouteParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    writer.uint32(18).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.numQuotes.isZero()) {
      writer.uint32(24).uint64(message.numQuotes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreatePoolRouteParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreatePoolRouteParams } as CreatePoolRouteParams;
    message.poolIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64() as Long);
            }
          } else {
            message.poolIds.push(reader.uint64() as Long);
          }
          break;
        case 3:
          message.numQuotes = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePoolRouteParams {
    const message = { ...baseCreatePoolRouteParams } as CreatePoolRouteParams;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.poolIds = (object.poolIds ?? []).map((e: any) =>
      Long.fromString(e)
    );
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromString(object.numQuotes)
        : Long.UZERO;
    return message;
  },

  toJSON(message: CreatePoolRouteParams): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.poolIds = [];
    }
    message.numQuotes !== undefined &&
      (obj.numQuotes = (message.numQuotes || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreatePoolRouteParams>
  ): CreatePoolRouteParams {
    const message = { ...baseCreatePoolRouteParams } as CreatePoolRouteParams;
    message.marketId = object.marketId ?? "";
    message.poolIds = (object.poolIds ?? []).map((e) => Long.fromValue(e));
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
        : Long.UZERO;
    return message;
  },
};

const baseMsgRemovePoolRoute: object = { creator: "" };

export const MsgRemovePoolRoute = {
  encode(
    message: MsgRemovePoolRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.removePoolRouteParams !== undefined) {
      RemovePoolRouteParams.encode(
        message.removePoolRouteParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemovePoolRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemovePoolRoute } as MsgRemovePoolRoute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.removePoolRouteParams = RemovePoolRouteParams.decode(
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

  fromJSON(object: any): MsgRemovePoolRoute {
    const message = { ...baseMsgRemovePoolRoute } as MsgRemovePoolRoute;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.removePoolRouteParams =
      object.removePoolRouteParams !== undefined &&
      object.removePoolRouteParams !== null
        ? RemovePoolRouteParams.fromJSON(object.removePoolRouteParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgRemovePoolRoute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.removePoolRouteParams !== undefined &&
      (obj.removePoolRouteParams = message.removePoolRouteParams
        ? RemovePoolRouteParams.toJSON(message.removePoolRouteParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemovePoolRoute>): MsgRemovePoolRoute {
    const message = { ...baseMsgRemovePoolRoute } as MsgRemovePoolRoute;
    message.creator = object.creator ?? "";
    message.removePoolRouteParams =
      object.removePoolRouteParams !== undefined &&
      object.removePoolRouteParams !== null
        ? RemovePoolRouteParams.fromPartial(object.removePoolRouteParams)
        : undefined;
    return message;
  },
};

const baseMsgRemovePoolRouteResponse: object = {};

export const MsgRemovePoolRouteResponse = {
  encode(
    _: MsgRemovePoolRouteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemovePoolRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemovePoolRouteResponse,
    } as MsgRemovePoolRouteResponse;
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

  fromJSON(_: any): MsgRemovePoolRouteResponse {
    const message = {
      ...baseMsgRemovePoolRouteResponse,
    } as MsgRemovePoolRouteResponse;
    return message;
  },

  toJSON(_: MsgRemovePoolRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemovePoolRouteResponse>
  ): MsgRemovePoolRouteResponse {
    const message = {
      ...baseMsgRemovePoolRouteResponse,
    } as MsgRemovePoolRouteResponse;
    return message;
  },
};

const baseRemovePoolRouteParams: object = { marketId: "", poolIds: Long.UZERO };

export const RemovePoolRouteParams = {
  encode(
    message: RemovePoolRouteParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    writer.uint32(18).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemovePoolRouteParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemovePoolRouteParams } as RemovePoolRouteParams;
    message.poolIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64() as Long);
            }
          } else {
            message.poolIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemovePoolRouteParams {
    const message = { ...baseRemovePoolRouteParams } as RemovePoolRouteParams;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.poolIds = (object.poolIds ?? []).map((e: any) =>
      Long.fromString(e)
    );
    return message;
  },

  toJSON(message: RemovePoolRouteParams): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.poolIds = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemovePoolRouteParams>
  ): RemovePoolRouteParams {
    const message = { ...baseRemovePoolRouteParams } as RemovePoolRouteParams;
    message.marketId = object.marketId ?? "";
    message.poolIds = (object.poolIds ?? []).map((e) => Long.fromValue(e));
    return message;
  },
};

const baseMsgUpdatePoolRoute: object = { creator: "" };

export const MsgUpdatePoolRoute = {
  encode(
    message: MsgUpdatePoolRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.updatePoolRouteParams !== undefined) {
      UpdatePoolRouteParams.encode(
        message.updatePoolRouteParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePoolRoute } as MsgUpdatePoolRoute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.updatePoolRouteParams = UpdatePoolRouteParams.decode(
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

  fromJSON(object: any): MsgUpdatePoolRoute {
    const message = { ...baseMsgUpdatePoolRoute } as MsgUpdatePoolRoute;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.updatePoolRouteParams =
      object.updatePoolRouteParams !== undefined &&
      object.updatePoolRouteParams !== null
        ? UpdatePoolRouteParams.fromJSON(object.updatePoolRouteParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePoolRoute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.updatePoolRouteParams !== undefined &&
      (obj.updatePoolRouteParams = message.updatePoolRouteParams
        ? UpdatePoolRouteParams.toJSON(message.updatePoolRouteParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePoolRoute>): MsgUpdatePoolRoute {
    const message = { ...baseMsgUpdatePoolRoute } as MsgUpdatePoolRoute;
    message.creator = object.creator ?? "";
    message.updatePoolRouteParams =
      object.updatePoolRouteParams !== undefined &&
      object.updatePoolRouteParams !== null
        ? UpdatePoolRouteParams.fromPartial(object.updatePoolRouteParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdatePoolRouteResponse: object = {};

export const MsgUpdatePoolRouteResponse = {
  encode(
    _: MsgUpdatePoolRouteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePoolRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePoolRouteResponse,
    } as MsgUpdatePoolRouteResponse;
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

  fromJSON(_: any): MsgUpdatePoolRouteResponse {
    const message = {
      ...baseMsgUpdatePoolRouteResponse,
    } as MsgUpdatePoolRouteResponse;
    return message;
  },

  toJSON(_: MsgUpdatePoolRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePoolRouteResponse>
  ): MsgUpdatePoolRouteResponse {
    const message = {
      ...baseMsgUpdatePoolRouteResponse,
    } as MsgUpdatePoolRouteResponse;
    return message;
  },
};

const baseUpdatePoolRouteParams: object = {
  marketId: "",
  poolIds: Long.UZERO,
  numQuotes: Long.UZERO,
};

export const UpdatePoolRouteParams = {
  encode(
    message: UpdatePoolRouteParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    writer.uint32(18).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.numQuotes.isZero()) {
      writer.uint32(24).uint64(message.numQuotes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePoolRouteParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePoolRouteParams } as UpdatePoolRouteParams;
    message.poolIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64() as Long);
            }
          } else {
            message.poolIds.push(reader.uint64() as Long);
          }
          break;
        case 3:
          message.numQuotes = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolRouteParams {
    const message = { ...baseUpdatePoolRouteParams } as UpdatePoolRouteParams;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.poolIds = (object.poolIds ?? []).map((e: any) =>
      Long.fromString(e)
    );
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromString(object.numQuotes)
        : Long.UZERO;
    return message;
  },

  toJSON(message: UpdatePoolRouteParams): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.poolIds = [];
    }
    message.numQuotes !== undefined &&
      (obj.numQuotes = (message.numQuotes || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdatePoolRouteParams>
  ): UpdatePoolRouteParams {
    const message = { ...baseUpdatePoolRouteParams } as UpdatePoolRouteParams;
    message.marketId = object.marketId ?? "";
    message.poolIds = (object.poolIds ?? []).map((e) => Long.fromValue(e));
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
        : Long.UZERO;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params
        ? ParamsToUpdate.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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
  HandleSetCommitmentCurve(
    request: MsgSetCommitmentCurve
  ): Promise<MsgSetCommitmentCurveResponse>;
  HandleUpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
  HandleCreatePoolRoute(
    request: MsgCreatePoolRoute
  ): Promise<MsgCreatePoolRouteResponse>;
  HandleRemovePoolRoute(
    request: MsgRemovePoolRoute
  ): Promise<MsgRemovePoolRouteResponse>;
  HandleUpdatePoolRoute(
    request: MsgUpdatePoolRoute
  ): Promise<MsgUpdatePoolRouteResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
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
    this.HandleSetRewardsWeights = this.HandleSetRewardsWeights.bind(this);
    this.HandleStakePoolToken = this.HandleStakePoolToken.bind(this);
    this.HandleUnstakePoolToken = this.HandleUnstakePoolToken.bind(this);
    this.HandleClaimPoolRewards = this.HandleClaimPoolRewards.bind(this);
    this.HandleSetRewardCurve = this.HandleSetRewardCurve.bind(this);
    this.HandleSetCommitmentCurve = this.HandleSetCommitmentCurve.bind(this);
    this.HandleUpdatePool = this.HandleUpdatePool.bind(this);
    this.HandleCreatePoolRoute = this.HandleCreatePoolRoute.bind(this);
    this.HandleRemovePoolRoute = this.HandleRemovePoolRoute.bind(this);
    this.HandleUpdatePoolRoute = this.HandleUpdatePoolRoute.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
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

  HandleUpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleUpdatePool",
      data
    );
    return promise.then((data) =>
      MsgUpdatePoolResponse.decode(new _m0.Reader(data))
    );
  }

  HandleCreatePoolRoute(
    request: MsgCreatePoolRoute
  ): Promise<MsgCreatePoolRouteResponse> {
    const data = MsgCreatePoolRoute.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleCreatePoolRoute",
      data
    );
    return promise.then((data) =>
      MsgCreatePoolRouteResponse.decode(new _m0.Reader(data))
    );
  }

  HandleRemovePoolRoute(
    request: MsgRemovePoolRoute
  ): Promise<MsgRemovePoolRouteResponse> {
    const data = MsgRemovePoolRoute.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleRemovePoolRoute",
      data
    );
    return promise.then((data) =>
      MsgRemovePoolRouteResponse.decode(new _m0.Reader(data))
    );
  }

  HandleUpdatePoolRoute(
    request: MsgUpdatePoolRoute
  ): Promise<MsgUpdatePoolRouteResponse> {
    const data = MsgUpdatePoolRoute.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "HandleUpdatePoolRoute",
      data
    );
    return promise.then((data) =>
      MsgUpdatePoolRouteResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
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
