import { Any, SettlementPriceParams } from "@carbon-sdk/codec";
import { MsgCreateVaultType } from "@carbon-sdk/codec/cdp/tx";
import { MsgAuthorizeBridge, MsgBindToken, MsgCreateToken, MsgDeauthorizeBridge, MsgLinkToken, MsgSyncToken, MsgUnbindToken } from "@carbon-sdk/codec/coin/tx";
import { Coin } from "@carbon-sdk/codec/cosmos/base/v1beta1/coin";
import { Description } from "@carbon-sdk/codec/cosmos/staking/v1beta1/staking";
import { MsgCreateValidator, MsgEditValidator } from "@carbon-sdk/codec/cosmos/staking/v1beta1/tx";
import { MsgSetGasCost, MsgSetMinGasPrice, MsgRemoveGasCost, MsgRemoveMinGasPrice } from "@carbon-sdk/codec/fee/tx";
import { MsgLinkPool, MsgSetCommitmentCurve, MsgSetRewardCurve, MsgSetRewardsWeights, MsgUnlinkPool, MsgUpdatePool } from "@carbon-sdk/codec/liquiditypool/tx";
import { MsgCreateMarket } from "@carbon-sdk/codec/market/tx";
import { MsgCreateOracle } from "@carbon-sdk/codec/oracle/tx";
import { MsgSetTradingFlag } from "@carbon-sdk/codec/order/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import Long from "long";
import BaseModule from "./base";

export class AdminModule extends BaseModule {

  public async createOracle(params: AdminModule.CreateOracleParams) {
    const wallet = this.getWallet();

    const value = MsgCreateOracle.fromPartial({
      creator: wallet.bech32Address,
      createOracleParams: transfromCreateOracleParams(params, wallet.bech32Address),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateOracle,
      value,
    });
  }

  public async createToken(params: AdminModule.CreateTokenParams) {
    const wallet = this.getWallet();

    const value = MsgCreateToken.fromPartial({
      creator: wallet.bech32Address,
      createTokenParams: transfromCreateTokenParams(params, wallet.bech32Address),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateToken,
      value,
    });
  }

  public async createTokens(params: AdminModule.CreateTokenParams[]) {
    const wallet = this.getWallet();

    const msgs = params.map(param => {
      const value = MsgCreateToken.fromPartial({
        creator: wallet.bech32Address,
        createTokenParams: transfromCreateTokenParams(param, wallet.bech32Address),
      })

      return {
        typeUrl: CarbonTx.Types.MsgCreateToken,
        value,
      }
    })

    return await wallet.sendTxs(msgs, CarbonTx.DEFAULT_SIGN_OPTS);
  }

  public async syncToken(params: AdminModule.SyncTokenParams) {
    const wallet = this.getWallet();

    const value = MsgSyncToken.fromPartial(transfromSyncTokenParams(params, wallet.bech32Address))

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSyncToken,
      value,
    });
  }

  public async bindToken(params: AdminModule.BindTokenParams) {
    const wallet = this.getWallet();

    const value = MsgBindToken.fromPartial({
      creator: wallet.bech32Address,
      sourceDenom: params.sourceDenom,
      wrappedDenom: params.wrappedDenom,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgBindToken,
      value,
    });
  }

  public async unbindToken(params: AdminModule.UnbindTokenParams) {
    const wallet = this.getWallet();

    const value = MsgUnbindToken.fromPartial({
      creator: wallet.bech32Address,
      wrappedDenom: params.wrappedDenom,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgUnbindToken,
      value,
    });
  }

  public async linkToken(params: AdminModule.LinkTokenParams) {
    const wallet = this.getWallet();

    const value = MsgLinkToken.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      bridgeAddress: params.bridgeAddress,
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgLinkToken,
      value,
    });
  }

  public async createMarket(params: AdminModule.CreateMarketParams) {
    const wallet = this.getWallet();

    const value = MsgCreateMarket.fromPartial({
      creator: wallet.bech32Address,
      marketType: params.marketType,
      base: params.base,
      quote: params.quote,
      currentBasePriceUsd: params.currentBasePriceUsd.shiftedBy(18).toString(10), // types.Dec
      currentQuotePriceUsd: params.currentQuotePriceUsd.shiftedBy(18).toString(10), // types.Dec
      indexOracleId: params.indexOracleId ?? "",
      expiryTime: params.expiryTime ?? new Date(0),
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateMarket,
      value,
    });
  }

  public async createMarkets(params: AdminModule.CreateMarketParams[]) {
    const wallet = this.getWallet();

    const msgs = params.map((param: AdminModule.CreateMarketParams) => {
      const value = MsgCreateMarket.fromPartial({
        creator: wallet.bech32Address,
        marketType: param.marketType,
        base: param.base,
        quote: param.quote,
        currentBasePriceUsd: param.currentBasePriceUsd.toString(10),
        currentQuotePriceUsd: param.currentQuotePriceUsd.toString(10),
        indexOracleId: param.indexOracleId ?? "",
        ...param.expiryTime && { expiryTime: param.expiryTime },
      });

      return {
        typeUrl: CarbonTx.Types.MsgCreateMarket,
        value,
      };
    });

    return await wallet.sendTxs(msgs, CarbonTx.DEFAULT_SIGN_OPTS);
  }

  public async createVaultType(params: AdminModule.CreateVaultTypeParams) {
    const wallet = this.getWallet();

    const value = MsgCreateVaultType.fromPartial(transfromCreateVaultTypeParams(params, wallet.bech32Address))

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateVaultType,
      value,
    });
  }

  public async linkPool(params: AdminModule.LinkPoolParams) {
    const wallet = this.getWallet();

    const value = MsgLinkPool.fromPartial({
        creator: wallet.bech32Address,
        linkPoolParams: transfromLinkPoolParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgLinkPool,
      value,
    });
  }

  public async unlinkPool(params: AdminModule.UnlinkPoolParams) {
    const wallet = this.getWallet();

    const value = MsgUnlinkPool.fromPartial({
        creator: wallet.bech32Address,
        unlinkPoolParams: transfromUnlinkPoolParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgUnlinkPool,
      value,
    });
  }

  public async setRewardsWeights(params: AdminModule.SetRewardsWeightsParams[]) {
    const wallet = this.getWallet();

    const value = MsgSetRewardsWeights.fromPartial({
        creator: wallet.bech32Address,
        setRewardsWeightsParams: transfromSetRewardsWeightsParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetRewardsWeights,
      value,
    });
  }

  public async setRewardCurve(params: AdminModule.SetRewardCurveParams) {
    const wallet = this.getWallet();

    const value = MsgSetRewardCurve.fromPartial({
        creator: wallet.bech32Address,
        setRewardCurveParams: transfromSetRewardCurveParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetRewardCurve,
      value,
    });
  }

  public async setCommitmentCurve(params: AdminModule.SetCommitmentCurveParams) {
    const wallet = this.getWallet();

    const value = MsgSetCommitmentCurve.fromPartial({
        creator: wallet.bech32Address,
        setCommitmentCurveParams: transfromSetCommitmentCurveParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetCommitmentCurve,
      value,
    });
  }

  public async updatePool(params: AdminModule.UpdatePoolParams) {
    const wallet = this.getWallet();

    const value = MsgUpdatePool.fromPartial({
      creator: wallet.bech32Address,
      updatePoolParams: transfromUpdatePoolParams(params),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgUpdatePool,
      value,
    });
  }

  public async setTradingFlag(params: AdminModule.SetTradingFlagParams) {
    const wallet = this.getWallet();

    const value = MsgSetTradingFlag.fromPartial(transfromSetTradingFlagParams(params, wallet.bech32Address))

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetTradingFlag,
      value,
    });
  }

  public async setMsgGasCost(params: AdminModule.SetMsgGasCostParams) {
    const wallet = this.getWallet();

    const value = MsgSetGasCost.fromPartial({
      creator: wallet.bech32Address,
      setGasCostParams: transfromSetMsgGasCostParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetGasCost,
      value,
    });
  }

  public async setMinGasPrice(params: AdminModule.SetMinGasPriceParams) {
    const wallet = this.getWallet();

    const value = MsgSetMinGasPrice.fromPartial({
      creator: wallet.bech32Address,
      setMinGasPriceParams: transfromSetMinGasPriceParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetMinGasPrice,
      value,
    });
  }

  public async removeMsgGasCost(params: AdminModule.RemoveMsgGasCostParams) {
    const wallet = this.getWallet();

    const value = MsgRemoveGasCost.fromPartial({
      creator: wallet.bech32Address,
      msgType: params.msgType,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRemoveGasCost,
      value,
    });
  }

  public async removeMinGasPrice(params: AdminModule.RemoveMinGasPriceParams) {
    const wallet = this.getWallet();

    const value = MsgRemoveMinGasPrice.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRemoveMinGasPrice,
      value,
    });
  }

  public async createValidator(params: AdminModule.CreateValidatorParams) {
    const wallet = this.getWallet();

    const value = MsgCreateValidator.fromPartial({
      delegatorAddress: params.delegatorAddress,
      validatorAddress: params.validatorAddress,
      minSelfDelegation: params.minSelfDelegation.toString(10),
      description: params.description,
      pubkey: params.pubkey,
      ...params.commission && {
        commission: {
          rate: params.commission.rate.shiftedBy(18).toString(10),
          maxRate: params.commission.maxRate.shiftedBy(18).toString(10),
          maxChangeRate: params.commission.maxChangeRate.shiftedBy(18).toString(10),
        },
      },
      ...params.value && {
        value: {
          denom: params.value.denom,
          amount: params.value.amount.toString(10),
        },
      },
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateValidator,
      value,
    });
  }

  public async editValidator(params: AdminModule.EditValidatorParams) {
    const wallet = this.getWallet();

    const value = MsgEditValidator.fromPartial({
      description: params.description,
      validatorAddress: params.validatorAddress,
      commissionRate: params.commissionRate.shiftedBy(18).toString(10),
      minSelfDelegation: params.minSelfDelegation.toString(10),
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgEditValidator,
      value,
    });
  }

  public async authorizeBridge(params: AdminModule.AuthorizeBridgeParams) {
    const wallet = this.getWallet();

    const value = MsgAuthorizeBridge.fromPartial({
      creator: wallet.bech32Address,
      bridgeId: new Long(params.bridgeId),
      chainId: new Long(params.chainId),
      chainName: params.chainName,
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgAuthorizeBridge,
      value,
    });
  }

  public async deauthorizeBridge(params: AdminModule.DeauthorizeBridgeParams) {
    const wallet = this.getWallet();

    const value = MsgDeauthorizeBridge.fromPartial({
      initiator: wallet.bech32Address,
      bridgeId: new Long(params.bridgeId),
      chainId: new Long(params.chainId),
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgDeauthorizeBridge,
      value,
    });
  }
}

export namespace AdminModule {
  export interface AuthorizeBridgeParams {
    bridgeId: number;
    chainId: number;
    chainName: string;
  }

  export interface DeauthorizeBridgeParams {
    initiator: string;
    bridgeId: number;
    chainId: number;
  }

  export interface CreateOracleParams {
    id: string
    description: string
    minTurnoutPercentage: number
    maxResultAge: number
    securityType: string
    resultStrategy: string
    resolution: number
    spec: string
  }

  export interface CreateTokenParams {
    creator: string;
    name: string;
    symbol: string;
    decimals: number;
    chainId: number;
    bridgeId: number;
    bridgeAddress: string;
    tokenAddress: string;
  }

  export interface SyncTokenParams {
    denom: string
  }

  export interface BindTokenParams {
    sourceDenom: string;
    wrappedDenom: string;
  }

  export interface LinkTokenParams {
    denom: string;
    bridgeAddress: string;
  }

  export interface UnbindTokenParams {
    wrappedDenom: string;
  }

  export interface CreateMarketParams {
    marketType: string;
    base: string;
    quote: string;
    currentBasePriceUsd: BigNumber;
    currentQuotePriceUsd: BigNumber;

    /** futures only */
    indexOracleId?: string;
    expiryTime?: Date;
  }

  export interface CreateVaultTypeParams {
    collateralDenom: string
    debtDenom: string
    collateralizationRatio: BigNumber
  }

  export interface LinkPoolParams {
    poolId: number
    market: string
  }
  
  export interface UnlinkPoolParams {
    poolId: number
  }

  export interface UpdatePoolParams {
    poolId: number
    swapFee: BigNumber
    numQuotes: number
  }

  export interface SetRewardsWeightsParams {
    poolId: number
    weight: number
  }

  export interface SetRewardCurveParams {
    startTime: Date
    initialRewardBps: number
    reductionMultiplierBps: number
    reductionIntervalSeconds: number
    reductions: number
    finalRewardBps: number
  }

  export interface SetCommitmentCurveParams {
    maxDuration: number
    maxRewardMultiplier: number
  }

  export interface ChangeNumQuotesParams {
    poolId: number
    numQuotes: number
  }

  export interface SetTradingFlagParams {
    isEnabled: boolean
    blockchain: string
  }

  export interface SetMsgGasCostParams {
    msgType: string
    gasCost: BigNumber
  }

  export interface SetMinGasPriceParams {
    denom: string
    gasPrice: BigNumber
  }

  export interface RemoveMsgGasCostParams {
    msgType: string
  }
  export interface RemoveMinGasPriceParams {
    denom: string
  }

  export interface CreateValidatorParams {
    description?: Description;
    commission?: {
      rate: BigNumber;
      maxRate: BigNumber;
      maxChangeRate: BigNumber;
    };
    minSelfDelegation: BigNumber;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey?: Any;
    value?: {
      denom: string;
      amount: BigNumber;
    };
  }

  export interface EditValidatorParams {
    description?: Description;
    validatorAddress: string;
    commissionRate: BigNumber;
    minSelfDelegation: BigNumber;
  }
};

export function transfromCreateOracleParams(msg: AdminModule.CreateOracleParams, address: string) {
  return {
    creator: address,
    id: msg.id,
    description: msg.description,
    minTurnoutPercentage: new Long(msg.minTurnoutPercentage),
    maxResultAge: new Long(msg.maxResultAge),
    securityType: msg.securityType,
    resultStrategy: msg.resultStrategy,
    resolution: new Long(msg.resolution),
    spec: msg.spec,
  }
}

export function transfromCreateTokenParams(msg: AdminModule.CreateTokenParams, address: string) {
  return {
    creator: address,
    name: msg.name,
    symbol: msg.symbol,
    decimals: new Long(msg.decimals),
    chainId: new Long(msg.chainId),
    bridgeId: new Long(msg.bridgeId),
    bridgeAddress: msg.bridgeAddress,
    tokenAddress: msg.tokenAddress,
  }
}

export function transfromSyncTokenParams(msg: AdminModule.SyncTokenParams, address: string) {
  return {
    syncer: address,
    denom: msg.denom,
  }
}

export function transfromCreateVaultTypeParams(msg: AdminModule.CreateVaultTypeParams, address: string) {
  return {
    creator: address,
    collateralDenom: msg.collateralDenom,
    debtDenom: msg.debtDenom,
    collateralizationRatio: msg.collateralizationRatio.shiftedBy(18).toString(10),
  }
}

export function transfromLinkPoolParams(msg: AdminModule.LinkPoolParams) {
  return {
    poolId: new Long(msg.poolId),
    market: msg.market,
  }
}

export function transfromUnlinkPoolParams(msg: AdminModule.UnlinkPoolParams) {
  return {
    poolId: new Long(msg.poolId),
  }
}

export function transfromSetRewardsWeightsParams(msg: AdminModule.SetRewardsWeightsParams[]) {  
  const weights = msg.map(param => {
    return {
      poolId: new Long(param.poolId),
      weight: param.weight.toString(10)
    }
  })

  return {
    weights: weights
  }
}

export function transfromSetRewardCurveParams(msg: AdminModule.SetRewardCurveParams) {
  return {
    startTime: msg.startTime,
    initialRewardBps: msg.initialRewardBps,
    reductionMultiplierBps: msg.reductionMultiplierBps,
    reductionIntervalSeconds: new Long(msg.reductionIntervalSeconds),
    reductions: msg.reductions,
    finalRewardBps: msg.finalRewardBps,
  }
}

export function transfromSetCommitmentCurveParams(msg: AdminModule.SetCommitmentCurveParams) {
  return {
    maxDuration: new Long(msg.maxDuration),
    maxRewardMultiplier: msg.maxRewardMultiplier,
  }
}

export function transfromUpdatePoolParams(msg: AdminModule.UpdatePoolParams) {
  return {
    poolId: new Long(msg.poolId),
    numQuotes: new Long(msg.numQuotes),
    swapFee: msg.swapFee.shiftedBy(18).toString(10),
  }
}

export function transfromSetTradingFlagParams(msg: AdminModule.SetTradingFlagParams, address: string) {
  return {
    creator: address,
    isEnabled: msg.isEnabled,
    blockchain: msg.blockchain
  }
}

export function transfromSetMsgGasCostParams(msg: AdminModule.SetMsgGasCostParams) {
  return {
    msgType: msg.msgType,
    gasCost: msg.gasCost.toString(10),
  }
}

export function transfromSetMinGasPriceParams(msg: AdminModule.SetMinGasPriceParams) {
  return {
    denom: msg.denom,
    gasPrice: new BigNumber(msg.gasPrice).shiftedBy(18).toString(10),
  }
}

export function transformSetSettlementPriceParams(msg: SettlementPriceParams) {
  return {
    market: msg.market,
    settlementPrice: new BigNumber(msg.settlementPrice).shiftedBy(18).toString(10),
  }
}

export function transformCommunityPoolSpendAmount(amount: Coin[]) {
  const amounts = amount.map(param => {
    return {
      denom: param.denom,
      amount: new BigNumber(param.amount).toString(10)
    } as Coin
  })
  return amounts
}
