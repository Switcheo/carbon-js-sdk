import { Any } from "@carbon-sdk/codec";
import { MsgCreateVaultType } from "@carbon-sdk/codec/cdp/tx";
import { MsgAuthorizeBridge, MsgBindToken, MsgCreateToken, MsgDeauthorizeBridge, MsgLinkToken, MsgSyncToken, MsgUnbindToken } from "@carbon-sdk/codec/coin/tx";
import { Description } from "@carbon-sdk/codec/cosmos/staking/v1beta1/staking";
import { MsgCreateValidator, MsgEditValidator } from "@carbon-sdk/codec/cosmos/staking/v1beta1/tx";
import { MsgSetFee } from "@carbon-sdk/codec/fee/tx";
import { Duration } from "@carbon-sdk/codec/google/protobuf/duration";
import { MsgChangeNumQuotes, MsgChangeSwapFee, MsgLinkPool, MsgSetCommitmentCurve, MsgSetRewardCurve, MsgSetRewardsWeights, MsgUnlinkPool } from "@carbon-sdk/codec/liquiditypool/tx";
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
        market: transformCreateMarketParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateMarket,
      value,
    });
  }

  public async createMarkets(params: AdminModule.CreateMarketParams[]) {
    const wallet = this.getWallet();

    const msgs = params.map(param => {
      const value = MsgCreateMarket.fromPartial({
          creator: wallet.bech32Address,
          market: transformCreateMarketParams(param)
      })

      return {
        typeUrl: CarbonTx.Types.MsgCreateMarket,
        value,
      }
    })

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

  public async changeSwapFee(params: AdminModule.ChangeSwapFeeParams) {
    const wallet = this.getWallet();

    const value = MsgChangeSwapFee.fromPartial({
        creator: wallet.bech32Address,
        changeSwapFeeParams: transfromChangeSwapFeeParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgChangeSwapFee,
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

  public async changeNumQuotes(params: AdminModule.ChangeNumQuotesParams) {
    const wallet = this.getWallet();

    const value = MsgChangeNumQuotes.fromPartial({
      creator: wallet.bech32Address,
      changeNumQuotesParams: transfromChangNumQuotesParams(params),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgChangeNumQuotes,
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

  public async setMsgFee(params: AdminModule.SetMsgFeeParams) {
    const wallet = this.getWallet();

    const value = MsgSetFee.fromPartial({
      creator: wallet.bech32Address,
      setFeeParams: transfromSetMsgFeeParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetFee,
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
    denom: string;
    name: string;
    symbol: string;
    decimals: number;
    chainId: number;
    bridgeId: number;
    bridgeAddress: string;
    tokenAddress: string;
    isCollateral: boolean;
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
    name: string
    displayName: string
    description: string
    marketType: string
    base: string
    quote: string
    basePrecision?: number
    quotePrecision?: number
    lotSize: BigNumber
    tickSize: BigNumber
    minQuantity: BigNumber
    makerFee: BigNumber
    takerFee: BigNumber
    createdBlockHeight?: number
    riskStepSize: BigNumber
    initialMarginBase: BigNumber
    initialMarginStep: BigNumber
    maintenanceMarginRatio: BigNumber
    maxLiquidationOrderTicket: BigNumber
    maxLiquidationOrderDuration: Duration
    impactSize: BigNumber
    markPriceBand: number
    lastPriceProtectedBand: number
    indexOracleId: string
    expiryTime: Date
    isSettled?: boolean
    isActive?: boolean
    closedBlockHeight?: number
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

  export interface ChangeSwapFeeParams {
    poolId: number
    swapFee: BigNumber
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

  export interface SetMsgFeeParams {
    msgType: string
    fee: BigNumber
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
    denom: msg.denom,
    name: msg.name,
    symbol: msg.symbol,
    decimals: new Long(msg.decimals),
    chainId: new Long(msg.chainId),
    bridgeId: new Long(msg.bridgeId),
    bridgeAddress: msg.bridgeAddress,
    tokenAddress: msg.bridgeAddress,
    isCollateral: msg.isCollateral,
  }
}

export function transfromSyncTokenParams(msg: AdminModule.SyncTokenParams, address: string) {
  return {
    syncer: address,
    denom: msg.denom,
  }
}

export function transformCreateMarketParams(msg: AdminModule.CreateMarketParams) {
  return {
    name: msg.name,
    displayName: msg.displayName,
    description: msg.description,
    marketType: msg.marketType,
    base: msg.base,
    quote: msg.quote,
    basePrecision: new Long(msg.basePrecision || 0),
    quotePrecision: new Long(msg.quotePrecision || 0),
    lotSize: msg.lotSize.toString(),
    tickSize: msg.tickSize.shiftedBy(18).toString(),
    minQuantity: msg.minQuantity.toString(),
    makerFee: msg.makerFee.shiftedBy(18).toString(),
    takerFee: msg.takerFee.shiftedBy(18).toString(),
    createdBlockHeight: new Long(msg.createdBlockHeight || 0),
    riskStepSize: msg.riskStepSize.toString(),
    initialMarginBase: msg.initialMarginBase.shiftedBy(18).toString(),
    initialMarginStep: msg.initialMarginStep.shiftedBy(18).toString(),
    maintenanceMarginRatio: msg.maintenanceMarginRatio.shiftedBy(18).toString(),
    maxLiquidationOrderTicket: msg.maxLiquidationOrderTicket.toString(),
    maxLiquidationOrderDuration: msg.maxLiquidationOrderDuration,
    impactSize: msg.impactSize.toString(),
    markPriceBand: msg.markPriceBand,
    lastPriceProtectedBand: msg.lastPriceProtectedBand,
    indexOracleId: msg.indexOracleId,
    expiryTime: msg.expiryTime,
    isSettled: !!msg.isSettled,
    isActive: !!msg.isActive,
    closedBlockHeight: new Long(msg.createdBlockHeight || 0),
  }
}

export function transfromCreateVaultTypeParams(msg: AdminModule.CreateVaultTypeParams, address: string) {
  return {
    creator: address,
    collateralDenom: msg.collateralDenom,
    debtDenom: msg.debtDenom,
    collateralizationRatio: msg.collateralizationRatio.shiftedBy(18).toString(),
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

export function transfromChangeSwapFeeParams(msg: AdminModule.ChangeSwapFeeParams) {
  return {
    poolId: new Long(msg.poolId),
    swapFee: msg.swapFee.shiftedBy(18).toString(),
  }
}

export function transfromSetRewardsWeightsParams(msg: AdminModule.SetRewardsWeightsParams[]) {  
  const weights = msg.map(param => {
    return {
      poolId: new Long(param.poolId),
      weight: param.weight.toString()
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

export function transfromChangNumQuotesParams(msg: AdminModule.ChangeNumQuotesParams) {
  return {
    poolId: new Long(msg.poolId),
    numQuotes: new Long(msg.numQuotes),
  }
}

export function transfromSetTradingFlagParams(msg: AdminModule.SetTradingFlagParams, address: string) {
  return {
    creator: address,
    isEnabled: msg.isEnabled,
    blockchain: msg.blockchain
  }
}

export function transfromSetMsgFeeParams(msg: AdminModule.SetMsgFeeParams) {
  return {
    msgType: msg.msgType,
    fee: msg.fee.toString(),
  }
}