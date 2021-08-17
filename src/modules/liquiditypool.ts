import { MsgAddLiquidity, MsgClaimPoolRewards, MsgCreatePool, MsgCreatePoolWithLiquidity, MsgRemoveLiquidity, MsgStakePoolToken, MsgUnstakePoolToken } from "@carbon-sdk/codec/liquiditypool/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";
import Long from "long";

export class LiquidityPoolModule extends BaseModule {

  public async create(params: LiquidityPoolModule.CreatePoolParams) {
    const wallet = this.getWallet();

    const value = MsgCreatePool.fromPartial({
      creator: wallet.bech32Address,
      tokenADenom: params.tokenADenom,
      tokenBDenom: params.tokenBDenom,
      tokenAWeight: params.tokenAWeight.shiftedBy(18).toString(10),
      tokenBWeight: params.tokenBWeight.shiftedBy(18).toString(10),
      swapFee: params.swapFee.shiftedBy(18).toString(10),
      numQuotes: new Long(params.numQuotes),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreatePool,
      value,
    });
  }

  public async createWithLiquidity(params: LiquidityPoolModule.CreatePoolWithLiquidityParams) {
    const wallet = this.getWallet();

    const value = MsgCreatePoolWithLiquidity.fromPartial({
      creator: wallet.bech32Address,
      tokenADenom: params.tokenADenom,
      tokenBDenom: params.tokenBDenom,
      tokenAWeight: params.tokenAWeight.shiftedBy(18).toString(10),
      tokenBWeight: params.tokenBWeight.shiftedBy(18).toString(10),
      amountA: params.amountA.shiftedBy(18).toString(10),
      amountB: params.amountB.shiftedBy(18).toString(10),
      swapFee: params.swapFee.shiftedBy(18).toString(10),
      numQuotes: new Long(params.numQuotes),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreatePoolWithLiquidity,
      value,
    });
  }

  public async addLiquidity(params: LiquidityPoolModule.AddLiquidityParams) {
    const wallet = this.getWallet();

    const value = MsgAddLiquidity.fromPartial({
      creator: wallet.bech32Address,
      poolId: new Long(params.poolId),
      amountA: params.amountA.shiftedBy(18).toString(10),
      amountB: params.amountB.shiftedBy(18).toString(10),
      minShares: params.minShares.shiftedBy(18).toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgAddLiquidity,
      value,
    });
  }

  public async removeLiquidity(params: LiquidityPoolModule.RemoveLiquidityParams) {
    const wallet = this.getWallet();

    const value = MsgRemoveLiquidity.fromPartial({
      creator: wallet.bech32Address,
      poolId: new Long(params.poolId),
      shares: params.shares.shiftedBy(18).toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRemoveLiquidity,
      value,
    });
  }

  public async stakePoolToken(params: LiquidityPoolModule.StakePoolTokenParams) {
    const wallet = this.getWallet();

    const value = MsgStakePoolToken.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.shiftedBy(18).toString(10),
      duration: new Long(params.duration)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgStakePoolToken,
      value,
    });
  }

  public async unstakePoolToken(params: LiquidityPoolModule.UnstakePoolTokenParams) {
    const wallet = this.getWallet();

    const value = MsgUnstakePoolToken.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.shiftedBy(18).toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgUnstakePoolToken,
      value,
    });
  }

  public async claimPoolRewards(params: LiquidityPoolModule.ClaimPoolRewardsParams) {
    const wallet = this.getWallet();

    const value = MsgClaimPoolRewards.fromPartial({
      creator: wallet.bech32Address,
      poolId: new Long(params.poolId),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgClaimPoolRewards,
      value,
    });
  }
}

export namespace LiquidityPoolModule {
  export interface CreatePoolParams {
    tokenADenom: string
    tokenBDenom: string
    tokenAWeight: BigNumber
    tokenBWeight: BigNumber
    swapFee: BigNumber
    numQuotes: number
  }

  export interface CreatePoolWithLiquidityParams {
    tokenADenom: string
    tokenBDenom: string
    tokenAWeight: BigNumber
    tokenBWeight: BigNumber
    amountA: BigNumber
    amountB: BigNumber
    swapFee: BigNumber
    numQuotes: number
  }

  export interface AddLiquidityParams {
    poolId: number
    amountA: BigNumber
    amountB: BigNumber
    minShares: BigNumber
  }

  export interface RemoveLiquidityParams {
    poolId: number
    shares: BigNumber
  }

  export interface StakePoolTokenParams {
    denom: string
    amount: BigNumber
    duration: number
  }

  export interface UnstakePoolTokenParams {
    denom: string
    amount: BigNumber
  }

  export interface ClaimPoolRewardsParams {
    poolId: number
  }
};
