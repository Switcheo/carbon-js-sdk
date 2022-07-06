import { Models } from "@carbon-sdk/index"
import { RewardHistoryRecord } from "@carbon-sdk/codec/liquiditypool/reward"
import { DecCoin } from "@carbon-sdk/codec/cosmos/base/v1beta1/coin"
import { CarbonTx, NumberUtils } from "@carbon-sdk/util"
import { BigNumber } from "bignumber.js"
import dayjs from "dayjs"
import Long from "long"
import BaseModule from "./base"

export class LiquidityPoolModule extends BaseModule {

  public async create(params: LiquidityPoolModule.CreatePoolParams) {
    const wallet = this.getWallet();

    const value = Models.MsgCreatePool.fromPartial({
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

    const value = Models.MsgCreatePoolWithLiquidity.fromPartial({
      creator: wallet.bech32Address,
      tokenADenom: params.tokenADenom,
      tokenBDenom: params.tokenBDenom,
      tokenAWeight: params.tokenAWeight.shiftedBy(18).toString(10),
      tokenBWeight: params.tokenBWeight.shiftedBy(18).toString(10),
      amountA: params.amountA.toString(10),
      amountB: params.amountB.toString(10),
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

    const value = Models.MsgAddLiquidity.fromPartial({
      creator: wallet.bech32Address,
      poolId: new Long(params.poolId),
      amountA: params.amountA.toString(10),
      amountB: params.amountB.toString(10),
      minShares: params.minShares.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgAddLiquidity,
      value,
    });
  }

  public async removeLiquidity(params: LiquidityPoolModule.RemoveLiquidityParams) {
    const wallet = this.getWallet();

    const value = Models.MsgRemoveLiquidity.fromPartial({
      creator: wallet.bech32Address,
      poolId: new Long(params.poolId),
      shares: params.shares.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRemoveLiquidity,
      value,
    });
  }

  public async stakePoolToken(params: LiquidityPoolModule.StakePoolTokenParams) {
    const wallet = this.getWallet();

    const value = Models.MsgStakePoolToken.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
      duration: new Long(params.duration)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgStakePoolToken,
      value,
    });
  }

  public async unstakePoolToken(params: LiquidityPoolModule.UnstakePoolTokenParams) {
    const wallet = this.getWallet();

    const value = Models.MsgUnstakePoolToken.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgUnstakePoolToken,
      value,
    });
  }

  public async claimPoolRewards(params: LiquidityPoolModule.ClaimPoolRewardsParams) {
    const wallet = this.getWallet();

    const value = Models.MsgClaimPoolRewards.fromPartial({
      creator: wallet.bech32Address,
      poolId: new Long(params.poolId),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgClaimPoolRewards,
      value,
    });
  }

  /**
   * Calculates weekly LP rewards (in SWTH)
   * weeklySWTHRewards = ((INITIAL_SUPPLY) * (WEEKLY_DECAY)^(weeksFromInitalRewardsStart)) / 52
   * weeklySWTHLPRewards = weeklySWTHRewards * liquidityRewardRatio
   * @returns weekly SWTH rewards allocated to liquidityProviders (BigNumber)
  */
  public async getWeeklyRewards(): Promise<BigNumber> {
    const WEEKLY_DECAY = new BigNumber(0.9835)
    const MIN_RATE = new BigNumber(0.0003)
    const INITIAL_SUPPLY = new BigNumber(1000000000)
    const SECONDS_IN_A_WEEK = new BigNumber(604800)

    const mintDataResponse: Models.QueryMintDataResponse = await this.sdkProvider.query.inflation.MintData({})
    const mintData = mintDataResponse.mintData

    const nowTime = new BigNumber(dayjs().unix())
    const firstBlockTime = mintData?.firstBlockTime.toNumber() ?? 0
    const difference = nowTime.minus(firstBlockTime)
    const currentWeek = difference.div(SECONDS_IN_A_WEEK).dp(0, BigNumber.ROUND_DOWN)

    let inflationRate = WEEKLY_DECAY.pow(currentWeek)
    if (inflationRate.lt(MIN_RATE)) {
      inflationRate = MIN_RATE
    }
    const weeklyRewards = INITIAL_SUPPLY.div(52).times(inflationRate)

    // Calculate weekly rewards earned by liquidity providers
    // Weekly LP Rewards = liquidityRewardRatio * weeklyRewards
    const distributionParams = await this.sdkProvider.query.distribution.Params({});
    const liquidityRewardRatio = NumberUtils.bnOrZero(distributionParams.params?.liquidityProviderReward).shiftedBy(-18)
    return liquidityRewardRatio.times(weeklyRewards)
  }

  public async claimMultiPoolRewards(params: LiquidityPoolModule.ClaimMultiPoolRewards) {
    const wallet = this.getWallet();

    if (!params.creator)
      params.creator = wallet.bech32Address;

    return await wallet.sendTxs(params.pools.map((poolId) => ({
      typeUrl: CarbonTx.Types.MsgClaimPoolRewards,
      value: {
        poolId: poolId,
        creator: params.creator,
      },
    })));
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

  export interface ClaimMultiPoolRewards {
    pools: string[],
    creator?: string,
  }

  export interface UnclaimedRewards {
    [key: string]: BigNumber
  }

  export interface EstimateUnclaimedRewardsMsg {
    poolId: string
    address: string
  }
};
