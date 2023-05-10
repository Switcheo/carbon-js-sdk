import { Models } from "@carbon-sdk/index";
import { CarbonTx, NumberUtils } from "@carbon-sdk/util";
import { BigNumber } from "bignumber.js";
import dayjs from "dayjs";
import Long from "long";
import BaseModule from "./base";

export class LiquidityPoolModule extends BaseModule {
  public async create(params: LiquidityPoolModule.CreatePoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgCreatePool.fromPartial({
      creator: wallet.bech32Address,
      tokenADenom: params.tokenADenom,
      tokenBDenom: params.tokenBDenom,
      tokenAWeight: params.tokenAWeight.shiftedBy(18).toString(10),
      tokenBWeight: params.tokenBWeight.shiftedBy(18).toString(10),
      swapFee: params.swapFee.shiftedBy(18).toString(10),
      ampBps: params.ampBps,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreatePool,
        value,
      },
      opts
    );
  }

  public async createWithLiquidity(params: LiquidityPoolModule.CreatePoolWithLiquidityParams, opts?: CarbonTx.SignTxOpts) {
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
      ampBps: params.ampBps,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreatePoolWithLiquidity,
        value,
      },
      opts
    );
  }

  public async addLiquidity(params: LiquidityPoolModule.AddLiquidityParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgAddLiquidity.fromPartial({
      creator: wallet.bech32Address,
      poolId: new Long(params.poolId),
      amountA: params.amountA.toString(10),
      amountB: params.amountB.toString(10),
      minShares: params.minShares.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgAddLiquidity,
        value,
      },
      opts
    );
  }

  public async removeLiquidity(params: LiquidityPoolModule.RemoveLiquidityParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgRemoveLiquidity.fromPartial({
      creator: wallet.bech32Address,
      poolId: new Long(params.poolId),
      shares: params.shares.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRemoveLiquidity,
        value,
      },
      opts
    );
  }

  public async stakePoolToken(params: LiquidityPoolModule.StakePoolTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgStakePoolToken.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
      duration: new Long(params.duration),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgStakePoolToken,
        value,
      },
      opts
    );
  }

  public async unstakePoolToken(params: LiquidityPoolModule.UnstakePoolTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgUnstakePoolToken.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUnstakePoolToken,
        value,
      },
      opts
    );
  }

  public async claimPoolRewards(params: LiquidityPoolModule.ClaimPoolRewardsParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgClaimPoolRewards.fromPartial({
      creator: wallet.bech32Address,
      poolId: new Long(params.poolId),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgClaimPoolRewards,
        value,
      },
      opts
    );
  }

  /**
   * Calculates weekly LP rewards (in SWTH)
   * weeklySWTHRewards = ((INITIAL_SUPPLY) * (WEEKLY_DECAY)^(weeksFromInitalRewardsStart)) / 52
   * weeklySWTHLPRewards = weeklySWTHRewards * liquidityRewardRatio
   * @returns weekly SWTH rewards allocated to liquidityProviders (BigNumber)
   */
  public async getWeeklyRewards(): Promise<BigNumber> {
    const WEEKLY_DECAY = new BigNumber(0.9835);
    const MIN_RATE = new BigNumber(0.0003);
    const INITIAL_SUPPLY = new BigNumber(1000000000);
    const SECONDS_IN_A_WEEK = new BigNumber(604800);

    const mintDataResponse: Models.QueryMintDataResponse = await this.sdkProvider.query.inflation.MintData({});
    const mintData = mintDataResponse.mintData;

    const nowTime = new BigNumber(dayjs().unix());
    const firstBlockTime = mintData?.firstBlockTime.toNumber() ?? 0;
    const difference = nowTime.minus(firstBlockTime);
    const currentWeek = difference.div(SECONDS_IN_A_WEEK).dp(0, BigNumber.ROUND_DOWN);

    let inflationRate = WEEKLY_DECAY.pow(currentWeek);
    if (inflationRate.lt(MIN_RATE)) {
      inflationRate = MIN_RATE;
    }
    const weeklyRewards = INITIAL_SUPPLY.div(52).times(inflationRate);

    // Calculate weekly rewards earned by liquidity providers
    // Weekly LP Rewards = liquidityRewardRatio * weeklyRewards
    const distributionParams = await this.sdkProvider.query.distribution.Params({});
    const liquidityRewardRatio = NumberUtils.bnOrZero(distributionParams.params?.liquidityProviderReward).shiftedBy(-18);
    return liquidityRewardRatio.times(weeklyRewards);
  }

  public async claimMultiPoolRewards(params: LiquidityPoolModule.ClaimMultiPoolRewards, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    if (!params.creator) params.creator = wallet.bech32Address;

    return await wallet.sendTxs(
      params.pools.map((poolId) => ({
        typeUrl: CarbonTx.Types.MsgClaimPoolRewards,
        value: {
          poolId: poolId,
          creator: params.creator,
        },
      })),
      opts
    );
  }

  public async createPerpertualsPool(params: LiquidityPoolModule.CreatePerpetualPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgCreatePerpetualsLiquidityPool.fromPartial({
      creator: params.creator,
      name: params.name,
      depositDenom: params.depositDenom,
      shareTokenSymbol: params.shareTokenSymbol,
      supplyCap: params.supplyCap,
      depositFeeBps: params.depositFeeBps,
      withdrawalFeeBps: params.withdrawalFeeBps,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreatePerpetualsLiquidityPool,
        value,
      },
      opts
    );
  }

  public async depositToPerpetualsPool(params: LiquidityPoolModule.DepositToPerpetualsPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    
    const value = Models.MsgDepositToPerpetualsLiquidityPool.fromPartial({
      creator: params.creator,
      perpetualsLiquidityPoolId: params.perpetualsLiquidityPoolId,
      depositAmount: params.depositAmount,
      minShareAmount: params.minShareAmount,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDepositToPerpetualsLiquidityPool,
        value,
      },
      opts
    );
  }

  public async WithdrawFromPerpetualsLiquidityPoolEvent(params: LiquidityPoolModule.WithdrawFromPerpetualsPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    
    const value = Models.MsgWithdrawFromPerpetualsLiquidityPool.fromPartial({
      creator: params.creator,
      perpetualsLiquidityPoolId: params.perpetualsLiquidityPoolId,
      shareAmount: params.shareAmount,
      minReceiveAmount: params.minReceiveAmount,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDepositToPerpetualsLiquidityPool,
        value,
      },
      opts
    );
  }
}

export namespace LiquidityPoolModule {
  export interface CreatePoolParams {
    tokenADenom: string;
    tokenBDenom: string;
    tokenAWeight: BigNumber;
    tokenBWeight: BigNumber;
    swapFee: BigNumber;
    ampBps: Long;
  }

  export interface CreatePoolWithLiquidityParams {
    tokenADenom: string;
    tokenBDenom: string;
    tokenAWeight: BigNumber;
    tokenBWeight: BigNumber;
    amountA: BigNumber;
    amountB: BigNumber;
    swapFee: BigNumber;
    ampBps: Long;
  }

  export interface AddLiquidityParams {
    poolId: number;
    amountA: BigNumber;
    amountB: BigNumber;
    minShares: BigNumber;
  }

  export interface RemoveLiquidityParams {
    poolId: number;
    shares: BigNumber;
  }

  export interface StakePoolTokenParams {
    denom: string;
    amount: BigNumber;
    duration: number;
  }

  export interface UnstakePoolTokenParams {
    denom: string;
    amount: BigNumber;
  }

  export interface ClaimPoolRewardsParams {
    poolId: number;
  }

  export interface ClaimMultiPoolRewards {
    pools: string[];
    creator?: string;
  }

  export interface UnclaimedRewards {
    [key: string]: BigNumber;
  }

  export interface EstimateUnclaimedRewardsMsg {
    poolId: string;
    address: string;
  }

  export interface CreatePoolRouteParams {
    marketName: string;
    poolIds: Long[];
    numQuotes: Long;
  }

  export interface RemovePoolRouteParams {
    marketName: string;
    poolIds: Long[];
  }

  export interface CreatePerpetualPoolParams {
    creator: string;
    name: string;
    depositDenom: string;
    shareTokenSymbol: string;
    supplyCap: string;
    depositFeeBps: string;
    withdrawalFeeBps: string;
  }

  export interface DepositToPerpetualsPoolParams {
    creator: string;
    perpetualsLiquidityPoolId: Long;
    depositAmount: string;
    minShareAmount: string;
  }

  export interface WithdrawFromPerpetualsPoolParams {
    creator: string;
    perpetualsLiquidityPoolId: Long;
    shareAmount: string;
    minReceiveAmount: string;
  }
}
