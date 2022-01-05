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

    const value = Models.MsgAddLiquidity.fromPartial({
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

    const value = Models.MsgRemoveLiquidity.fromPartial({
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

    const value = Models.MsgStakePoolToken.fromPartial({
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

    const value = Models.MsgUnstakePoolToken.fromPartial({
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

    const value = Models.MsgClaimPoolRewards.fromPartial({
      creator: wallet.bech32Address,
      poolId: new Long(params.poolId),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgClaimPoolRewards,
      value,
    });
  }


  public async getWeeklyRewards(): Promise<BigNumber> {
    const mintDataResponse = await this.getInflationMintData()
    const mintData = mintDataResponse.mintData
    const WEEKLY_DECAY = new BigNumber(0.9835)
    const MIN_RATE = new BigNumber(0.0003)
    const INITIAL_SUPPLY = new BigNumber(1000000000)
    const SECONDS_IN_A_WEEK = new BigNumber(604800)

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

  public async getInflationMintData(): Promise<Models.QueryMintDataResponse> {
    // const request = this.apiManager.path('staking/get_inflation_start_time') // TODO: Remove when tested
    const response: Models.QueryMintDataResponse = await this.sdkProvider.query.inflation.MintData({})
    return response
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

  public async estimateUnclaimedRewards(params: LiquidityPoolModule.EstimateUnclaimedRewardsMsg): Promise<LiquidityPoolModule.UnclaimedRewards> {
    const sdk = this.sdkProvider;

    const accruedRewards: LiquidityPoolModule.UnclaimedRewards = {};
    const lastClaimed = await sdk.query.liquiditypool.LastClaim(params);
    let lastHeight = lastClaimed.lastClaim;

    const allocation = await sdk.query.liquiditypool.RewardHistory({
      poolId: params.poolId,
      startBlockHeight: new BigNumber(lastClaimed.lastClaim.toString() || '0').plus(1).toString()
    });

    // get current share
    const shares = await sdk.query.liquiditypool.Commitment({
      poolId: params.poolId,
      address: params.address,
    });

    const commitmentPower = new BigNumber(shares.commitment?.commitmentPower || '0');

    // calculate accrued rewards based on history
    if (!commitmentPower.isZero() && allocation && allocation.rewardHistories) {
      allocation.rewardHistories.forEach((period: RewardHistoryRecord) => {
        lastHeight = period.height;
        const totalCommit = NumberUtils.bnOrZero(period.rewardHistory?.totalCommitment);
        const ratio = commitmentPower.div(totalCommit);

        const rewardsArr = period.rewardHistory?.rewards ?? []
        rewardsArr.forEach((reward: DecCoin) => {
          // reward amount is ridiculously big, so had to shift
          const rewardAmt = new BigNumber(reward.amount).shiftedBy(-18)
          const rewardCut = new BigNumber(rewardAmt).times(ratio).integerValue(BigNumber.ROUND_DOWN);
          if (reward.denom in accruedRewards) {
            accruedRewards[reward.denom] = accruedRewards[reward.denom].plus(rewardCut);
          } else {
            accruedRewards[reward.denom] = rewardCut;
          }
        });
      });
    }
    // Estimate rewards from last allocated rewards
    // the current logic will under estimate the rewards as the current weekly reward rate is used across the full period
    // instead of deriving the reward rate for each week since the last reward allocation

    if (!commitmentPower.isZero()) {
      const weeklyRewards = await this.getWeeklyRewards();
      const pools = await sdk.query.liquiditypool.PoolAll({});
      const pool = pools.pools.find((pool: Models.ExtendedPool) => pool.pool?.id.toString() === params.poolId);
      if (!pool) {
        return {};
      }

      const totalCommitment = await sdk.query.liquiditypool.TotalCommitment({
        poolId: pool.pool?.id ?? Long.UZERO,
      })
      const totalCommitBN = new BigNumber(totalCommitment.totalCommitment ?? '0')
      const poolWeight = new BigNumber(pool?.rewardsWeight || '0');
      let totalWeight = NumberUtils.BN_ZERO;
      pools.pools.forEach((pool: Models.ExtendedPool) => {
        const rewardWght = pool?.rewardsWeight || '0'
        totalWeight = totalWeight.plus(rewardWght);
      });
      const poolWeekRewards = poolWeight.dividedBy(totalWeight).times(weeklyRewards);

      // get time from last height
      const blockInfo = await sdk.query.chain.getBlock(lastHeight.toNumber());

      const estimatedStart = dayjs(blockInfo.header.time);

      const now = dayjs();
      const WEEKS_IN_SECONDS = 604800;
      const diff = now.diff(estimatedStart, 'second');

      const estimatedRewards = totalCommitBN.isZero()
        ? NumberUtils.BN_ZERO
        : new BigNumber(diff / WEEKS_IN_SECONDS).times(poolWeekRewards)
          .times(commitmentPower).div(totalCommitBN)
          .shiftedBy(8).integerValue(BigNumber.ROUND_DOWN);

      if ('swth' in accruedRewards) {
        accruedRewards['swth'] = accruedRewards['swth'].plus(estimatedRewards);
      } else {
        accruedRewards['swth'] = estimatedRewards;
      }
    }
    return accruedRewards;
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
