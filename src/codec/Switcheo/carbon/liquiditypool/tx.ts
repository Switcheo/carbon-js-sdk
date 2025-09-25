/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { ParamsToUpdate } from "./params";
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

export interface MsgCreatePoolWithLiquidityResponse {
}

export interface MsgAddLiquidity {
  creator: string;
  poolId: Long;
  amountA: string;
  amountB: string;
  minShares: string;
}

export interface MsgAddLiquidityResponse {
}

export interface MsgRemoveLiquidity {
  creator: string;
  poolId: Long;
  shares: string;
}

export interface MsgRemoveLiquidityResponse {
}

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

export interface MsgSetRewardsWeightsResponse {
}

export interface MsgStakePoolToken {
  creator: string;
  denom: string;
  amount: string;
  duration: Long;
}

export interface MsgStakePoolTokenResponse {
}

export interface MsgUnstakePoolToken {
  creator: string;
  denom: string;
  amount: string;
}

export interface MsgUnstakePoolTokenResponse {
}

export interface MsgClaimPoolRewards {
  creator: string;
  poolId: Long;
}

export interface MsgClaimPoolRewardsResponse {
}

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

export interface MsgSetRewardCurveResponse {
}

export interface MsgSetCommitmentCurve {
  creator: string;
  setCommitmentCurveParams?: SetCommitmentCurveParams;
}

export interface SetCommitmentCurveParams {
  maxDuration: Long;
  maxRewardMultiplier: number;
}

export interface MsgSetCommitmentCurveResponse {
}

export interface MsgUpdatePool {
  creator: string;
  updatePoolParams?: UpdatePoolParams;
}

export interface UpdatePoolParams {
  poolId: Long;
  swapFee: string;
  numQuotes: Long;
}

export interface MsgUpdatePoolResponse {
}

export interface MsgDeprecatePool {
  creator: string;
  poolId: Long;
}

export interface MsgDeprecatePoolResponse {
}

export interface MsgCreatePoolRoute {
  creator: string;
  createPoolRouteParams?: CreatePoolRouteParams;
}

export interface MsgCreatePoolRouteResponse {
}

export interface CreatePoolRouteParams {
  marketId: string;
  poolIds: Long[];
  numQuotes: Long;
}

export interface MsgRemovePoolRoute {
  creator: string;
  removePoolRouteParams?: RemovePoolRouteParams;
}

export interface MsgRemovePoolRouteResponse {
}

export interface RemovePoolRouteParams {
  marketId: string;
  poolIds: Long[];
}

export interface MsgUpdatePoolRoute {
  creator: string;
  updatePoolRouteParams?: UpdatePoolRouteParams;
}

export interface MsgUpdatePoolRouteResponse {
}

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
export interface MsgUpdateParamsResponse {
}

function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    creator: "",
    tokenADenom: "",
    tokenBDenom: "",
    tokenAWeight: "",
    tokenBWeight: "",
    swapFee: "",
    ampBps: Long.UZERO,
  };
}

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokenADenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokenBDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tokenAWeight = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tokenBWeight = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.swapFee = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.ampBps = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tokenADenom: isSet(object.tokenADenom) ? String(object.tokenADenom) : "",
      tokenBDenom: isSet(object.tokenBDenom) ? String(object.tokenBDenom) : "",
      tokenAWeight: isSet(object.tokenAWeight) ? String(object.tokenAWeight) : "",
      tokenBWeight: isSet(object.tokenBWeight) ? String(object.tokenBWeight) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      ampBps: isSet(object.ampBps) ? Long.fromValue(object.ampBps) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenADenom !== undefined && (obj.tokenADenom = message.tokenADenom);
    message.tokenBDenom !== undefined && (obj.tokenBDenom = message.tokenBDenom);
    message.tokenAWeight !== undefined && (obj.tokenAWeight = message.tokenAWeight);
    message.tokenBWeight !== undefined && (obj.tokenBWeight = message.tokenBWeight);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.ampBps !== undefined && (obj.ampBps = (message.ampBps || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePool>): MsgCreatePool {
    return MsgCreatePool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.creator = object.creator ?? "";
    message.tokenADenom = object.tokenADenom ?? "";
    message.tokenBDenom = object.tokenBDenom ?? "";
    message.tokenAWeight = object.tokenAWeight ?? "";
    message.tokenBWeight = object.tokenBWeight ?? "";
    message.swapFee = object.swapFee ?? "";
    message.ampBps = (object.ampBps !== undefined && object.ampBps !== null)
      ? Long.fromValue(object.ampBps)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return { poolId: Long.UZERO };
}

export const MsgCreatePoolResponse = {
  encode(message: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoolResponse {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreatePoolWithLiquidity(): MsgCreatePoolWithLiquidity {
  return {
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
}

export const MsgCreatePoolWithLiquidity = {
  encode(message: MsgCreatePoolWithLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolWithLiquidity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolWithLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokenADenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokenBDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tokenAWeight = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tokenBWeight = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.amountA = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.amountB = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.swapFee = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.ampBps = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoolWithLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tokenADenom: isSet(object.tokenADenom) ? String(object.tokenADenom) : "",
      tokenBDenom: isSet(object.tokenBDenom) ? String(object.tokenBDenom) : "",
      tokenAWeight: isSet(object.tokenAWeight) ? String(object.tokenAWeight) : "",
      tokenBWeight: isSet(object.tokenBWeight) ? String(object.tokenBWeight) : "",
      amountA: isSet(object.amountA) ? String(object.amountA) : "",
      amountB: isSet(object.amountB) ? String(object.amountB) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      ampBps: isSet(object.ampBps) ? Long.fromValue(object.ampBps) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreatePoolWithLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenADenom !== undefined && (obj.tokenADenom = message.tokenADenom);
    message.tokenBDenom !== undefined && (obj.tokenBDenom = message.tokenBDenom);
    message.tokenAWeight !== undefined && (obj.tokenAWeight = message.tokenAWeight);
    message.tokenBWeight !== undefined && (obj.tokenBWeight = message.tokenBWeight);
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.ampBps !== undefined && (obj.ampBps = (message.ampBps || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePoolWithLiquidity>): MsgCreatePoolWithLiquidity {
    return MsgCreatePoolWithLiquidity.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreatePoolWithLiquidity>): MsgCreatePoolWithLiquidity {
    const message = createBaseMsgCreatePoolWithLiquidity();
    message.creator = object.creator ?? "";
    message.tokenADenom = object.tokenADenom ?? "";
    message.tokenBDenom = object.tokenBDenom ?? "";
    message.tokenAWeight = object.tokenAWeight ?? "";
    message.tokenBWeight = object.tokenBWeight ?? "";
    message.amountA = object.amountA ?? "";
    message.amountB = object.amountB ?? "";
    message.swapFee = object.swapFee ?? "";
    message.ampBps = (object.ampBps !== undefined && object.ampBps !== null)
      ? Long.fromValue(object.ampBps)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreatePoolWithLiquidityResponse(): MsgCreatePoolWithLiquidityResponse {
  return {};
}

export const MsgCreatePoolWithLiquidityResponse = {
  encode(_: MsgCreatePoolWithLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolWithLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolWithLiquidityResponse();
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

  fromJSON(_: any): MsgCreatePoolWithLiquidityResponse {
    return {};
  },

  toJSON(_: MsgCreatePoolWithLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePoolWithLiquidityResponse>): MsgCreatePoolWithLiquidityResponse {
    return MsgCreatePoolWithLiquidityResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreatePoolWithLiquidityResponse>): MsgCreatePoolWithLiquidityResponse {
    const message = createBaseMsgCreatePoolWithLiquidityResponse();
    return message;
  },
};

function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return { creator: "", poolId: Long.UZERO, amountA: "", amountB: "", minShares: "" };
}

export const MsgAddLiquidity = {
  encode(message: MsgAddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountA = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amountB = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.minShares = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      amountA: isSet(object.amountA) ? String(object.amountA) : "",
      amountB: isSet(object.amountB) ? String(object.amountB) : "",
      minShares: isSet(object.minShares) ? String(object.minShares) : "",
    };
  },

  toJSON(message: MsgAddLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.minShares !== undefined && (obj.minShares = message.minShares);
    return obj;
  },

  create(base?: DeepPartial<MsgAddLiquidity>): MsgAddLiquidity {
    return MsgAddLiquidity.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddLiquidity>): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.creator = object.creator ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.amountA = object.amountA ?? "";
    message.amountB = object.amountB ?? "";
    message.minShares = object.minShares ?? "";
    return message;
  },
};

function createBaseMsgAddLiquidityResponse(): MsgAddLiquidityResponse {
  return {};
}

export const MsgAddLiquidityResponse = {
  encode(_: MsgAddLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidityResponse();
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

  fromJSON(_: any): MsgAddLiquidityResponse {
    return {};
  },

  toJSON(_: MsgAddLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse {
    return MsgAddLiquidityResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    return message;
  },
};

function createBaseMsgRemoveLiquidity(): MsgRemoveLiquidity {
  return { creator: "", poolId: Long.UZERO, shares: "" };
}

export const MsgRemoveLiquidity = {
  encode(message: MsgRemoveLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.shares = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      shares: isSet(object.shares) ? String(object.shares) : "",
    };
  },

  toJSON(message: MsgRemoveLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveLiquidity>): MsgRemoveLiquidity {
    return MsgRemoveLiquidity.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveLiquidity>): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    message.creator = object.creator ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.shares = object.shares ?? "";
    return message;
  },
};

function createBaseMsgRemoveLiquidityResponse(): MsgRemoveLiquidityResponse {
  return {};
}

export const MsgRemoveLiquidityResponse = {
  encode(_: MsgRemoveLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidityResponse();
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

  fromJSON(_: any): MsgRemoveLiquidityResponse {
    return {};
  },

  toJSON(_: MsgRemoveLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse {
    return MsgRemoveLiquidityResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    return message;
  },
};

function createBaseLinkPoolParams(): LinkPoolParams {
  return { poolId: Long.UZERO, marketId: "" };
}

export const LinkPoolParams = {
  encode(message: LinkPoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPoolParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPoolParams {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: LinkPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<LinkPoolParams>): LinkPoolParams {
    return LinkPoolParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LinkPoolParams>): LinkPoolParams {
    const message = createBaseLinkPoolParams();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseUnlinkPoolParams(): UnlinkPoolParams {
  return { poolId: Long.UZERO };
}

export const UnlinkPoolParams = {
  encode(message: UnlinkPoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnlinkPoolParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlinkPoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnlinkPoolParams {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: UnlinkPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<UnlinkPoolParams>): UnlinkPoolParams {
    return UnlinkPoolParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnlinkPoolParams>): UnlinkPoolParams {
    const message = createBaseUnlinkPoolParams();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgSetRewardsWeights(): MsgSetRewardsWeights {
  return { creator: "", setRewardsWeightsParams: undefined };
}

export const MsgSetRewardsWeights = {
  encode(message: MsgSetRewardsWeights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setRewardsWeightsParams !== undefined) {
      SetRewardsWeightsParams.encode(message.setRewardsWeightsParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRewardsWeights {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRewardsWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.setRewardsWeightsParams = SetRewardsWeightsParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetRewardsWeights {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setRewardsWeightsParams: isSet(object.setRewardsWeightsParams)
        ? SetRewardsWeightsParams.fromJSON(object.setRewardsWeightsParams)
        : undefined,
    };
  },

  toJSON(message: MsgSetRewardsWeights): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setRewardsWeightsParams !== undefined && (obj.setRewardsWeightsParams = message.setRewardsWeightsParams
      ? SetRewardsWeightsParams.toJSON(message.setRewardsWeightsParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgSetRewardsWeights>): MsgSetRewardsWeights {
    return MsgSetRewardsWeights.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetRewardsWeights>): MsgSetRewardsWeights {
    const message = createBaseMsgSetRewardsWeights();
    message.creator = object.creator ?? "";
    message.setRewardsWeightsParams =
      (object.setRewardsWeightsParams !== undefined && object.setRewardsWeightsParams !== null)
        ? SetRewardsWeightsParams.fromPartial(object.setRewardsWeightsParams)
        : undefined;
    return message;
  },
};

function createBaseSetRewardsWeightsParams(): SetRewardsWeightsParams {
  return { weights: [] };
}

export const SetRewardsWeightsParams = {
  encode(message: SetRewardsWeightsParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.weights) {
      RewardWeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRewardsWeightsParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRewardsWeightsParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.weights.push(RewardWeight.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetRewardsWeightsParams {
    return { weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => RewardWeight.fromJSON(e)) : [] };
  },

  toJSON(message: SetRewardsWeightsParams): unknown {
    const obj: any = {};
    if (message.weights) {
      obj.weights = message.weights.map((e) => e ? RewardWeight.toJSON(e) : undefined);
    } else {
      obj.weights = [];
    }
    return obj;
  },

  create(base?: DeepPartial<SetRewardsWeightsParams>): SetRewardsWeightsParams {
    return SetRewardsWeightsParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetRewardsWeightsParams>): SetRewardsWeightsParams {
    const message = createBaseSetRewardsWeightsParams();
    message.weights = object.weights?.map((e) => RewardWeight.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSetRewardsWeightsResponse(): MsgSetRewardsWeightsResponse {
  return {};
}

export const MsgSetRewardsWeightsResponse = {
  encode(_: MsgSetRewardsWeightsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRewardsWeightsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRewardsWeightsResponse();
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

  fromJSON(_: any): MsgSetRewardsWeightsResponse {
    return {};
  },

  toJSON(_: MsgSetRewardsWeightsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetRewardsWeightsResponse>): MsgSetRewardsWeightsResponse {
    return MsgSetRewardsWeightsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetRewardsWeightsResponse>): MsgSetRewardsWeightsResponse {
    const message = createBaseMsgSetRewardsWeightsResponse();
    return message;
  },
};

function createBaseMsgStakePoolToken(): MsgStakePoolToken {
  return { creator: "", denom: "", amount: "", duration: Long.UZERO };
}

export const MsgStakePoolToken = {
  encode(message: MsgStakePoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakePoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.duration = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStakePoolToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO,
    };
  },

  toJSON(message: MsgStakePoolToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.duration !== undefined && (obj.duration = (message.duration || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgStakePoolToken>): MsgStakePoolToken {
    return MsgStakePoolToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgStakePoolToken>): MsgStakePoolToken {
    const message = createBaseMsgStakePoolToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Long.fromValue(object.duration)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgStakePoolTokenResponse(): MsgStakePoolTokenResponse {
  return {};
}

export const MsgStakePoolTokenResponse = {
  encode(_: MsgStakePoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakePoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakePoolTokenResponse();
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

  fromJSON(_: any): MsgStakePoolTokenResponse {
    return {};
  },

  toJSON(_: MsgStakePoolTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgStakePoolTokenResponse>): MsgStakePoolTokenResponse {
    return MsgStakePoolTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgStakePoolTokenResponse>): MsgStakePoolTokenResponse {
    const message = createBaseMsgStakePoolTokenResponse();
    return message;
  },
};

function createBaseMsgUnstakePoolToken(): MsgUnstakePoolToken {
  return { creator: "", denom: "", amount: "" };
}

export const MsgUnstakePoolToken = {
  encode(message: MsgUnstakePoolToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakePoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUnstakePoolToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgUnstakePoolToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<MsgUnstakePoolToken>): MsgUnstakePoolToken {
    return MsgUnstakePoolToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUnstakePoolToken>): MsgUnstakePoolToken {
    const message = createBaseMsgUnstakePoolToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgUnstakePoolTokenResponse(): MsgUnstakePoolTokenResponse {
  return {};
}

export const MsgUnstakePoolTokenResponse = {
  encode(_: MsgUnstakePoolTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakePoolTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakePoolTokenResponse();
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

  fromJSON(_: any): MsgUnstakePoolTokenResponse {
    return {};
  },

  toJSON(_: MsgUnstakePoolTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUnstakePoolTokenResponse>): MsgUnstakePoolTokenResponse {
    return MsgUnstakePoolTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUnstakePoolTokenResponse>): MsgUnstakePoolTokenResponse {
    const message = createBaseMsgUnstakePoolTokenResponse();
    return message;
  },
};

function createBaseMsgClaimPoolRewards(): MsgClaimPoolRewards {
  return { creator: "", poolId: Long.UZERO };
}

export const MsgClaimPoolRewards = {
  encode(message: MsgClaimPoolRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimPoolRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimPoolRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgClaimPoolRewards {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    };
  },

  toJSON(message: MsgClaimPoolRewards): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgClaimPoolRewards>): MsgClaimPoolRewards {
    return MsgClaimPoolRewards.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgClaimPoolRewards>): MsgClaimPoolRewards {
    const message = createBaseMsgClaimPoolRewards();
    message.creator = object.creator ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgClaimPoolRewardsResponse(): MsgClaimPoolRewardsResponse {
  return {};
}

export const MsgClaimPoolRewardsResponse = {
  encode(_: MsgClaimPoolRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimPoolRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimPoolRewardsResponse();
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

  fromJSON(_: any): MsgClaimPoolRewardsResponse {
    return {};
  },

  toJSON(_: MsgClaimPoolRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgClaimPoolRewardsResponse>): MsgClaimPoolRewardsResponse {
    return MsgClaimPoolRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgClaimPoolRewardsResponse>): MsgClaimPoolRewardsResponse {
    const message = createBaseMsgClaimPoolRewardsResponse();
    return message;
  },
};

function createBaseMsgSetRewardCurve(): MsgSetRewardCurve {
  return { creator: "", setRewardCurveParams: undefined };
}

export const MsgSetRewardCurve = {
  encode(message: MsgSetRewardCurve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setRewardCurveParams !== undefined) {
      SetRewardCurveParams.encode(message.setRewardCurveParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRewardCurve {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRewardCurve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.setRewardCurveParams = SetRewardCurveParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetRewardCurve {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setRewardCurveParams: isSet(object.setRewardCurveParams)
        ? SetRewardCurveParams.fromJSON(object.setRewardCurveParams)
        : undefined,
    };
  },

  toJSON(message: MsgSetRewardCurve): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setRewardCurveParams !== undefined && (obj.setRewardCurveParams = message.setRewardCurveParams
      ? SetRewardCurveParams.toJSON(message.setRewardCurveParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgSetRewardCurve>): MsgSetRewardCurve {
    return MsgSetRewardCurve.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetRewardCurve>): MsgSetRewardCurve {
    const message = createBaseMsgSetRewardCurve();
    message.creator = object.creator ?? "";
    message.setRewardCurveParams = (object.setRewardCurveParams !== undefined && object.setRewardCurveParams !== null)
      ? SetRewardCurveParams.fromPartial(object.setRewardCurveParams)
      : undefined;
    return message;
  },
};

function createBaseSetRewardCurveParams(): SetRewardCurveParams {
  return {
    startTime: undefined,
    initialRewardBps: 0,
    reductionMultiplierBps: 0,
    reductionIntervalSeconds: Long.UZERO,
    reductions: 0,
    finalRewardBps: 0,
  };
}

export const SetRewardCurveParams = {
  encode(message: SetRewardCurveParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRewardCurveParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRewardCurveParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.initialRewardBps = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.reductionMultiplierBps = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.reductionIntervalSeconds = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.reductions = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.finalRewardBps = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetRewardCurveParams {
    return {
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      initialRewardBps: isSet(object.initialRewardBps) ? Number(object.initialRewardBps) : 0,
      reductionMultiplierBps: isSet(object.reductionMultiplierBps) ? Number(object.reductionMultiplierBps) : 0,
      reductionIntervalSeconds: isSet(object.reductionIntervalSeconds)
        ? Long.fromValue(object.reductionIntervalSeconds)
        : Long.UZERO,
      reductions: isSet(object.reductions) ? Number(object.reductions) : 0,
      finalRewardBps: isSet(object.finalRewardBps) ? Number(object.finalRewardBps) : 0,
    };
  },

  toJSON(message: SetRewardCurveParams): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.initialRewardBps !== undefined && (obj.initialRewardBps = Math.round(message.initialRewardBps));
    message.reductionMultiplierBps !== undefined &&
      (obj.reductionMultiplierBps = Math.round(message.reductionMultiplierBps));
    message.reductionIntervalSeconds !== undefined &&
      (obj.reductionIntervalSeconds = (message.reductionIntervalSeconds || Long.UZERO).toString());
    message.reductions !== undefined && (obj.reductions = Math.round(message.reductions));
    message.finalRewardBps !== undefined && (obj.finalRewardBps = Math.round(message.finalRewardBps));
    return obj;
  },

  create(base?: DeepPartial<SetRewardCurveParams>): SetRewardCurveParams {
    return SetRewardCurveParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetRewardCurveParams>): SetRewardCurveParams {
    const message = createBaseSetRewardCurveParams();
    message.startTime = object.startTime ?? undefined;
    message.initialRewardBps = object.initialRewardBps ?? 0;
    message.reductionMultiplierBps = object.reductionMultiplierBps ?? 0;
    message.reductionIntervalSeconds =
      (object.reductionIntervalSeconds !== undefined && object.reductionIntervalSeconds !== null)
        ? Long.fromValue(object.reductionIntervalSeconds)
        : Long.UZERO;
    message.reductions = object.reductions ?? 0;
    message.finalRewardBps = object.finalRewardBps ?? 0;
    return message;
  },
};

function createBaseMsgSetRewardCurveResponse(): MsgSetRewardCurveResponse {
  return {};
}

export const MsgSetRewardCurveResponse = {
  encode(_: MsgSetRewardCurveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRewardCurveResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRewardCurveResponse();
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

  fromJSON(_: any): MsgSetRewardCurveResponse {
    return {};
  },

  toJSON(_: MsgSetRewardCurveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetRewardCurveResponse>): MsgSetRewardCurveResponse {
    return MsgSetRewardCurveResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetRewardCurveResponse>): MsgSetRewardCurveResponse {
    const message = createBaseMsgSetRewardCurveResponse();
    return message;
  },
};

function createBaseMsgSetCommitmentCurve(): MsgSetCommitmentCurve {
  return { creator: "", setCommitmentCurveParams: undefined };
}

export const MsgSetCommitmentCurve = {
  encode(message: MsgSetCommitmentCurve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setCommitmentCurveParams !== undefined) {
      SetCommitmentCurveParams.encode(message.setCommitmentCurveParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCommitmentCurve {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCommitmentCurve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.setCommitmentCurveParams = SetCommitmentCurveParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetCommitmentCurve {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      setCommitmentCurveParams: isSet(object.setCommitmentCurveParams)
        ? SetCommitmentCurveParams.fromJSON(object.setCommitmentCurveParams)
        : undefined,
    };
  },

  toJSON(message: MsgSetCommitmentCurve): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.setCommitmentCurveParams !== undefined && (obj.setCommitmentCurveParams = message.setCommitmentCurveParams
      ? SetCommitmentCurveParams.toJSON(message.setCommitmentCurveParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgSetCommitmentCurve>): MsgSetCommitmentCurve {
    return MsgSetCommitmentCurve.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetCommitmentCurve>): MsgSetCommitmentCurve {
    const message = createBaseMsgSetCommitmentCurve();
    message.creator = object.creator ?? "";
    message.setCommitmentCurveParams =
      (object.setCommitmentCurveParams !== undefined && object.setCommitmentCurveParams !== null)
        ? SetCommitmentCurveParams.fromPartial(object.setCommitmentCurveParams)
        : undefined;
    return message;
  },
};

function createBaseSetCommitmentCurveParams(): SetCommitmentCurveParams {
  return { maxDuration: Long.UZERO, maxRewardMultiplier: 0 };
}

export const SetCommitmentCurveParams = {
  encode(message: SetCommitmentCurveParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxDuration.isZero()) {
      writer.uint32(8).uint64(message.maxDuration);
    }
    if (message.maxRewardMultiplier !== 0) {
      writer.uint32(16).uint32(message.maxRewardMultiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCommitmentCurveParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCommitmentCurveParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxDuration = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxRewardMultiplier = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetCommitmentCurveParams {
    return {
      maxDuration: isSet(object.maxDuration) ? Long.fromValue(object.maxDuration) : Long.UZERO,
      maxRewardMultiplier: isSet(object.maxRewardMultiplier) ? Number(object.maxRewardMultiplier) : 0,
    };
  },

  toJSON(message: SetCommitmentCurveParams): unknown {
    const obj: any = {};
    message.maxDuration !== undefined && (obj.maxDuration = (message.maxDuration || Long.UZERO).toString());
    message.maxRewardMultiplier !== undefined && (obj.maxRewardMultiplier = Math.round(message.maxRewardMultiplier));
    return obj;
  },

  create(base?: DeepPartial<SetCommitmentCurveParams>): SetCommitmentCurveParams {
    return SetCommitmentCurveParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetCommitmentCurveParams>): SetCommitmentCurveParams {
    const message = createBaseSetCommitmentCurveParams();
    message.maxDuration = (object.maxDuration !== undefined && object.maxDuration !== null)
      ? Long.fromValue(object.maxDuration)
      : Long.UZERO;
    message.maxRewardMultiplier = object.maxRewardMultiplier ?? 0;
    return message;
  },
};

function createBaseMsgSetCommitmentCurveResponse(): MsgSetCommitmentCurveResponse {
  return {};
}

export const MsgSetCommitmentCurveResponse = {
  encode(_: MsgSetCommitmentCurveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCommitmentCurveResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCommitmentCurveResponse();
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

  fromJSON(_: any): MsgSetCommitmentCurveResponse {
    return {};
  },

  toJSON(_: MsgSetCommitmentCurveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetCommitmentCurveResponse>): MsgSetCommitmentCurveResponse {
    return MsgSetCommitmentCurveResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetCommitmentCurveResponse>): MsgSetCommitmentCurveResponse {
    const message = createBaseMsgSetCommitmentCurveResponse();
    return message;
  },
};

function createBaseMsgUpdatePool(): MsgUpdatePool {
  return { creator: "", updatePoolParams: undefined };
}

export const MsgUpdatePool = {
  encode(message: MsgUpdatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.updatePoolParams !== undefined) {
      UpdatePoolParams.encode(message.updatePoolParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updatePoolParams = UpdatePoolParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      updatePoolParams: isSet(object.updatePoolParams) ? UpdatePoolParams.fromJSON(object.updatePoolParams) : undefined,
    };
  },

  toJSON(message: MsgUpdatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.updatePoolParams !== undefined &&
      (obj.updatePoolParams = message.updatePoolParams ? UpdatePoolParams.toJSON(message.updatePoolParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdatePool>): MsgUpdatePool {
    return MsgUpdatePool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdatePool>): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    message.creator = object.creator ?? "";
    message.updatePoolParams = (object.updatePoolParams !== undefined && object.updatePoolParams !== null)
      ? UpdatePoolParams.fromPartial(object.updatePoolParams)
      : undefined;
    return message;
  },
};

function createBaseUpdatePoolParams(): UpdatePoolParams {
  return { poolId: Long.UZERO, swapFee: "", numQuotes: Long.UZERO };
}

export const UpdatePoolParams = {
  encode(message: UpdatePoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.swapFee = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.numQuotes = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolParams {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      numQuotes: isSet(object.numQuotes) ? Long.fromValue(object.numQuotes) : Long.UZERO,
    };
  },

  toJSON(message: UpdatePoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.numQuotes !== undefined && (obj.numQuotes = (message.numQuotes || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<UpdatePoolParams>): UpdatePoolParams {
    return UpdatePoolParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdatePoolParams>): UpdatePoolParams {
    const message = createBaseUpdatePoolParams();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.swapFee = object.swapFee ?? "";
    message.numQuotes = (object.numQuotes !== undefined && object.numQuotes !== null)
      ? Long.fromValue(object.numQuotes)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
  return {};
}

export const MsgUpdatePoolResponse = {
  encode(_: MsgUpdatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolResponse();
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

  fromJSON(_: any): MsgUpdatePoolResponse {
    return {};
  },

  toJSON(_: MsgUpdatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  },
};

function createBaseMsgDeprecatePool(): MsgDeprecatePool {
  return { creator: "", poolId: Long.UZERO };
}

export const MsgDeprecatePool = {
  encode(message: MsgDeprecatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeprecatePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeprecatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeprecatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    };
  },

  toJSON(message: MsgDeprecatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgDeprecatePool>): MsgDeprecatePool {
    return MsgDeprecatePool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeprecatePool>): MsgDeprecatePool {
    const message = createBaseMsgDeprecatePool();
    message.creator = object.creator ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgDeprecatePoolResponse(): MsgDeprecatePoolResponse {
  return {};
}

export const MsgDeprecatePoolResponse = {
  encode(_: MsgDeprecatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeprecatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeprecatePoolResponse();
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

  fromJSON(_: any): MsgDeprecatePoolResponse {
    return {};
  },

  toJSON(_: MsgDeprecatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeprecatePoolResponse>): MsgDeprecatePoolResponse {
    return MsgDeprecatePoolResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeprecatePoolResponse>): MsgDeprecatePoolResponse {
    const message = createBaseMsgDeprecatePoolResponse();
    return message;
  },
};

function createBaseMsgCreatePoolRoute(): MsgCreatePoolRoute {
  return { creator: "", createPoolRouteParams: undefined };
}

export const MsgCreatePoolRoute = {
  encode(message: MsgCreatePoolRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createPoolRouteParams !== undefined) {
      CreatePoolRouteParams.encode(message.createPoolRouteParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolRoute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createPoolRouteParams = CreatePoolRouteParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoolRoute {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      createPoolRouteParams: isSet(object.createPoolRouteParams)
        ? CreatePoolRouteParams.fromJSON(object.createPoolRouteParams)
        : undefined,
    };
  },

  toJSON(message: MsgCreatePoolRoute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createPoolRouteParams !== undefined && (obj.createPoolRouteParams = message.createPoolRouteParams
      ? CreatePoolRouteParams.toJSON(message.createPoolRouteParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePoolRoute>): MsgCreatePoolRoute {
    return MsgCreatePoolRoute.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreatePoolRoute>): MsgCreatePoolRoute {
    const message = createBaseMsgCreatePoolRoute();
    message.creator = object.creator ?? "";
    message.createPoolRouteParams =
      (object.createPoolRouteParams !== undefined && object.createPoolRouteParams !== null)
        ? CreatePoolRouteParams.fromPartial(object.createPoolRouteParams)
        : undefined;
    return message;
  },
};

function createBaseMsgCreatePoolRouteResponse(): MsgCreatePoolRouteResponse {
  return {};
}

export const MsgCreatePoolRouteResponse = {
  encode(_: MsgCreatePoolRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolRouteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolRouteResponse();
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

  fromJSON(_: any): MsgCreatePoolRouteResponse {
    return {};
  },

  toJSON(_: MsgCreatePoolRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePoolRouteResponse>): MsgCreatePoolRouteResponse {
    return MsgCreatePoolRouteResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreatePoolRouteResponse>): MsgCreatePoolRouteResponse {
    const message = createBaseMsgCreatePoolRouteResponse();
    return message;
  },
};

function createBaseCreatePoolRouteParams(): CreatePoolRouteParams {
  return { marketId: "", poolIds: [], numQuotes: Long.UZERO };
}

export const CreatePoolRouteParams = {
  encode(message: CreatePoolRouteParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePoolRouteParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePoolRouteParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.poolIds.push(reader.uint64() as Long);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64() as Long);
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.numQuotes = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePoolRouteParams {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      poolIds: Array.isArray(object?.poolIds) ? object.poolIds.map((e: any) => Long.fromValue(e)) : [],
      numQuotes: isSet(object.numQuotes) ? Long.fromValue(object.numQuotes) : Long.UZERO,
    };
  },

  toJSON(message: CreatePoolRouteParams): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.poolIds = [];
    }
    message.numQuotes !== undefined && (obj.numQuotes = (message.numQuotes || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<CreatePoolRouteParams>): CreatePoolRouteParams {
    return CreatePoolRouteParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreatePoolRouteParams>): CreatePoolRouteParams {
    const message = createBaseCreatePoolRouteParams();
    message.marketId = object.marketId ?? "";
    message.poolIds = object.poolIds?.map((e) => Long.fromValue(e)) || [];
    message.numQuotes = (object.numQuotes !== undefined && object.numQuotes !== null)
      ? Long.fromValue(object.numQuotes)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgRemovePoolRoute(): MsgRemovePoolRoute {
  return { creator: "", removePoolRouteParams: undefined };
}

export const MsgRemovePoolRoute = {
  encode(message: MsgRemovePoolRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.removePoolRouteParams !== undefined) {
      RemovePoolRouteParams.encode(message.removePoolRouteParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemovePoolRoute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePoolRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.removePoolRouteParams = RemovePoolRouteParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemovePoolRoute {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      removePoolRouteParams: isSet(object.removePoolRouteParams)
        ? RemovePoolRouteParams.fromJSON(object.removePoolRouteParams)
        : undefined,
    };
  },

  toJSON(message: MsgRemovePoolRoute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.removePoolRouteParams !== undefined && (obj.removePoolRouteParams = message.removePoolRouteParams
      ? RemovePoolRouteParams.toJSON(message.removePoolRouteParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgRemovePoolRoute>): MsgRemovePoolRoute {
    return MsgRemovePoolRoute.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemovePoolRoute>): MsgRemovePoolRoute {
    const message = createBaseMsgRemovePoolRoute();
    message.creator = object.creator ?? "";
    message.removePoolRouteParams =
      (object.removePoolRouteParams !== undefined && object.removePoolRouteParams !== null)
        ? RemovePoolRouteParams.fromPartial(object.removePoolRouteParams)
        : undefined;
    return message;
  },
};

function createBaseMsgRemovePoolRouteResponse(): MsgRemovePoolRouteResponse {
  return {};
}

export const MsgRemovePoolRouteResponse = {
  encode(_: MsgRemovePoolRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemovePoolRouteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePoolRouteResponse();
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

  fromJSON(_: any): MsgRemovePoolRouteResponse {
    return {};
  },

  toJSON(_: MsgRemovePoolRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemovePoolRouteResponse>): MsgRemovePoolRouteResponse {
    return MsgRemovePoolRouteResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemovePoolRouteResponse>): MsgRemovePoolRouteResponse {
    const message = createBaseMsgRemovePoolRouteResponse();
    return message;
  },
};

function createBaseRemovePoolRouteParams(): RemovePoolRouteParams {
  return { marketId: "", poolIds: [] };
}

export const RemovePoolRouteParams = {
  encode(message: RemovePoolRouteParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RemovePoolRouteParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemovePoolRouteParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.poolIds.push(reader.uint64() as Long);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64() as Long);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemovePoolRouteParams {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      poolIds: Array.isArray(object?.poolIds) ? object.poolIds.map((e: any) => Long.fromValue(e)) : [],
    };
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

  create(base?: DeepPartial<RemovePoolRouteParams>): RemovePoolRouteParams {
    return RemovePoolRouteParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RemovePoolRouteParams>): RemovePoolRouteParams {
    const message = createBaseRemovePoolRouteParams();
    message.marketId = object.marketId ?? "";
    message.poolIds = object.poolIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseMsgUpdatePoolRoute(): MsgUpdatePoolRoute {
  return { creator: "", updatePoolRouteParams: undefined };
}

export const MsgUpdatePoolRoute = {
  encode(message: MsgUpdatePoolRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.updatePoolRouteParams !== undefined) {
      UpdatePoolRouteParams.encode(message.updatePoolRouteParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolRoute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updatePoolRouteParams = UpdatePoolRouteParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePoolRoute {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      updatePoolRouteParams: isSet(object.updatePoolRouteParams)
        ? UpdatePoolRouteParams.fromJSON(object.updatePoolRouteParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdatePoolRoute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.updatePoolRouteParams !== undefined && (obj.updatePoolRouteParams = message.updatePoolRouteParams
      ? UpdatePoolRouteParams.toJSON(message.updatePoolRouteParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdatePoolRoute>): MsgUpdatePoolRoute {
    return MsgUpdatePoolRoute.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdatePoolRoute>): MsgUpdatePoolRoute {
    const message = createBaseMsgUpdatePoolRoute();
    message.creator = object.creator ?? "";
    message.updatePoolRouteParams =
      (object.updatePoolRouteParams !== undefined && object.updatePoolRouteParams !== null)
        ? UpdatePoolRouteParams.fromPartial(object.updatePoolRouteParams)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdatePoolRouteResponse(): MsgUpdatePoolRouteResponse {
  return {};
}

export const MsgUpdatePoolRouteResponse = {
  encode(_: MsgUpdatePoolRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolRouteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolRouteResponse();
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

  fromJSON(_: any): MsgUpdatePoolRouteResponse {
    return {};
  },

  toJSON(_: MsgUpdatePoolRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdatePoolRouteResponse>): MsgUpdatePoolRouteResponse {
    return MsgUpdatePoolRouteResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdatePoolRouteResponse>): MsgUpdatePoolRouteResponse {
    const message = createBaseMsgUpdatePoolRouteResponse();
    return message;
  },
};

function createBaseUpdatePoolRouteParams(): UpdatePoolRouteParams {
  return { marketId: "", poolIds: [], numQuotes: Long.UZERO };
}

export const UpdatePoolRouteParams = {
  encode(message: UpdatePoolRouteParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolRouteParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoolRouteParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.poolIds.push(reader.uint64() as Long);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64() as Long);
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.numQuotes = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolRouteParams {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      poolIds: Array.isArray(object?.poolIds) ? object.poolIds.map((e: any) => Long.fromValue(e)) : [],
      numQuotes: isSet(object.numQuotes) ? Long.fromValue(object.numQuotes) : Long.UZERO,
    };
  },

  toJSON(message: UpdatePoolRouteParams): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.poolIds = [];
    }
    message.numQuotes !== undefined && (obj.numQuotes = (message.numQuotes || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<UpdatePoolRouteParams>): UpdatePoolRouteParams {
    return UpdatePoolRouteParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdatePoolRouteParams>): UpdatePoolRouteParams {
    const message = createBaseUpdatePoolRouteParams();
    message.marketId = object.marketId ?? "";
    message.poolIds = object.poolIds?.map((e) => Long.fromValue(e)) || [];
    message.numQuotes = (object.numQuotes !== undefined && object.numQuotes !== null)
      ? Long.fromValue(object.numQuotes)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? ParamsToUpdate.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? ParamsToUpdate.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ParamsToUpdate.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  HandleCreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  HandleCreatePoolWithLiquidity(request: MsgCreatePoolWithLiquidity): Promise<MsgCreatePoolWithLiquidityResponse>;
  HandleAddLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse>;
  HandleRemoveLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse>;
  HandleSetRewardsWeights(request: MsgSetRewardsWeights): Promise<MsgSetRewardsWeightsResponse>;
  HandleStakePoolToken(request: MsgStakePoolToken): Promise<MsgStakePoolTokenResponse>;
  HandleUnstakePoolToken(request: MsgUnstakePoolToken): Promise<MsgUnstakePoolTokenResponse>;
  HandleClaimPoolRewards(request: MsgClaimPoolRewards): Promise<MsgClaimPoolRewardsResponse>;
  HandleSetRewardCurve(request: MsgSetRewardCurve): Promise<MsgSetRewardCurveResponse>;
  HandleSetCommitmentCurve(request: MsgSetCommitmentCurve): Promise<MsgSetCommitmentCurveResponse>;
  HandleUpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
  HandleDeprecatePool(request: MsgDeprecatePool): Promise<MsgDeprecatePoolResponse>;
  HandleCreatePoolRoute(request: MsgCreatePoolRoute): Promise<MsgCreatePoolRouteResponse>;
  HandleRemovePoolRoute(request: MsgRemovePoolRoute): Promise<MsgRemovePoolRouteResponse>;
  HandleUpdatePoolRoute(request: MsgUpdatePoolRoute): Promise<MsgUpdatePoolRouteResponse>;
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
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.liquiditypool.Msg";
    this.rpc = rpc;
    this.HandleCreatePool = this.HandleCreatePool.bind(this);
    this.HandleCreatePoolWithLiquidity = this.HandleCreatePoolWithLiquidity.bind(this);
    this.HandleAddLiquidity = this.HandleAddLiquidity.bind(this);
    this.HandleRemoveLiquidity = this.HandleRemoveLiquidity.bind(this);
    this.HandleSetRewardsWeights = this.HandleSetRewardsWeights.bind(this);
    this.HandleStakePoolToken = this.HandleStakePoolToken.bind(this);
    this.HandleUnstakePoolToken = this.HandleUnstakePoolToken.bind(this);
    this.HandleClaimPoolRewards = this.HandleClaimPoolRewards.bind(this);
    this.HandleSetRewardCurve = this.HandleSetRewardCurve.bind(this);
    this.HandleSetCommitmentCurve = this.HandleSetCommitmentCurve.bind(this);
    this.HandleUpdatePool = this.HandleUpdatePool.bind(this);
    this.HandleDeprecatePool = this.HandleDeprecatePool.bind(this);
    this.HandleCreatePoolRoute = this.HandleCreatePoolRoute.bind(this);
    this.HandleRemovePoolRoute = this.HandleRemovePoolRoute.bind(this);
    this.HandleUpdatePoolRoute = this.HandleUpdatePoolRoute.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  HandleCreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleCreatePool", data);
    return promise.then((data) => MsgCreatePoolResponse.decode(_m0.Reader.create(data)));
  }

  HandleCreatePoolWithLiquidity(request: MsgCreatePoolWithLiquidity): Promise<MsgCreatePoolWithLiquidityResponse> {
    const data = MsgCreatePoolWithLiquidity.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleCreatePoolWithLiquidity", data);
    return promise.then((data) => MsgCreatePoolWithLiquidityResponse.decode(_m0.Reader.create(data)));
  }

  HandleAddLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse> {
    const data = MsgAddLiquidity.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleAddLiquidity", data);
    return promise.then((data) => MsgAddLiquidityResponse.decode(_m0.Reader.create(data)));
  }

  HandleRemoveLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse> {
    const data = MsgRemoveLiquidity.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleRemoveLiquidity", data);
    return promise.then((data) => MsgRemoveLiquidityResponse.decode(_m0.Reader.create(data)));
  }

  HandleSetRewardsWeights(request: MsgSetRewardsWeights): Promise<MsgSetRewardsWeightsResponse> {
    const data = MsgSetRewardsWeights.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleSetRewardsWeights", data);
    return promise.then((data) => MsgSetRewardsWeightsResponse.decode(_m0.Reader.create(data)));
  }

  HandleStakePoolToken(request: MsgStakePoolToken): Promise<MsgStakePoolTokenResponse> {
    const data = MsgStakePoolToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleStakePoolToken", data);
    return promise.then((data) => MsgStakePoolTokenResponse.decode(_m0.Reader.create(data)));
  }

  HandleUnstakePoolToken(request: MsgUnstakePoolToken): Promise<MsgUnstakePoolTokenResponse> {
    const data = MsgUnstakePoolToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleUnstakePoolToken", data);
    return promise.then((data) => MsgUnstakePoolTokenResponse.decode(_m0.Reader.create(data)));
  }

  HandleClaimPoolRewards(request: MsgClaimPoolRewards): Promise<MsgClaimPoolRewardsResponse> {
    const data = MsgClaimPoolRewards.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleClaimPoolRewards", data);
    return promise.then((data) => MsgClaimPoolRewardsResponse.decode(_m0.Reader.create(data)));
  }

  HandleSetRewardCurve(request: MsgSetRewardCurve): Promise<MsgSetRewardCurveResponse> {
    const data = MsgSetRewardCurve.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleSetRewardCurve", data);
    return promise.then((data) => MsgSetRewardCurveResponse.decode(_m0.Reader.create(data)));
  }

  HandleSetCommitmentCurve(request: MsgSetCommitmentCurve): Promise<MsgSetCommitmentCurveResponse> {
    const data = MsgSetCommitmentCurve.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleSetCommitmentCurve", data);
    return promise.then((data) => MsgSetCommitmentCurveResponse.decode(_m0.Reader.create(data)));
  }

  HandleUpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleUpdatePool", data);
    return promise.then((data) => MsgUpdatePoolResponse.decode(_m0.Reader.create(data)));
  }

  HandleDeprecatePool(request: MsgDeprecatePool): Promise<MsgDeprecatePoolResponse> {
    const data = MsgDeprecatePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleDeprecatePool", data);
    return promise.then((data) => MsgDeprecatePoolResponse.decode(_m0.Reader.create(data)));
  }

  HandleCreatePoolRoute(request: MsgCreatePoolRoute): Promise<MsgCreatePoolRouteResponse> {
    const data = MsgCreatePoolRoute.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleCreatePoolRoute", data);
    return promise.then((data) => MsgCreatePoolRouteResponse.decode(_m0.Reader.create(data)));
  }

  HandleRemovePoolRoute(request: MsgRemovePoolRoute): Promise<MsgRemovePoolRouteResponse> {
    const data = MsgRemovePoolRoute.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleRemovePoolRoute", data);
    return promise.then((data) => MsgRemovePoolRouteResponse.decode(_m0.Reader.create(data)));
  }

  HandleUpdatePoolRoute(request: MsgUpdatePoolRoute): Promise<MsgUpdatePoolRouteResponse> {
    const data = MsgUpdatePoolRoute.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleUpdatePoolRoute", data);
    return promise.then((data) => MsgUpdatePoolRouteResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
