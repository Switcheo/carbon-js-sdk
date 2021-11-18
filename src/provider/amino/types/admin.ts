import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateOracle: "oracle/MsgCreateOracle",
  CreateToken: "coin/MsgCreateToken",
  SyncToken: "coin/MsgSyncToken",
  CreateMarket: "market/MsgCreateMarket",
  CreateVaultType: "collateralizeddebtposition/CreateVaultType",
  LinkPool: "liquiditypool/LinkPool",
  UnlinkPool: "liquiditypool/UnlinkPool",
  ChangeSwapFee: "liquiditypool/ChangeSwapFee",
  SetRewardsWeights: "liquiditypool/SetRewardsWeights",
  SetRewardCurve: "liquiditypool/SetRewardCurve",
  SetCommitmentCurve: "liquiditypool/SetCommitmentCurve",
  ChangeNumQuotes: "liquiditypool/ChangeNumQuotesProposal",
  SetTradingFlag: "order/MsgSetTradingFlag",
  SetMsgFee: "fee/SetMsgFee",
}

const MsgCreateOracle: AminoInit = {
  aminoType: TxTypes.CreateOracle,
  valueMap: {
    creator: "string",
    createOracleParams: {
      creator: "string",
      id: "string",
      description: "string",
      minTurnoutPercentage: "long",
      maxResultAge: "long",
      securityType: "string",
      resultStrategy: "string",
      resolution: "long",
      spec: "string",
    },
  },
};

const MsgCreateToken: AminoInit = {
  aminoType: TxTypes.CreateToken,
  valueMap: {
    creator: "string",
    createTokenParams: {
      creator: "string",
      denom: "string",
      name: "string",
      symbol: "string",
      decimals: "long",
      chainId: "long",
      bridgeId: "long",
      bridgeAddress: "string",
      tokenAddress: "string",
    },
  },
};

const MsgSyncToken: AminoInit = {
  aminoType: TxTypes.SyncToken,
  valueMap: {
    syncer: "string",
    denom: "string",
  },
};

const MsgCreateMarket: AminoInit = {
  aminoType: TxTypes.CreateMarket,
  valueMap: {
    creator: "string",
    market: {
      name: "string",
      displayName: "string",
      description: "string",
      marketType: "string",
      base: "string",
      quote: "string",
      basePrecision: "long",
      quotePrecision: "long",
      lotSize: "bignumber",
      tickSize: "dec",
      minQuantity: "bignumber",
      makerFee: "dec",
      takerFee: "dec",
      createdBlockHeight: "long",
      riskStepSize: "bignumber",
      initialMarginBase: "dec",
      initialMarginStep: "dec",
      maintenanceMarginRatio: "dec",
      maxLiquidationOrderTicket: "bignumber",
      maxLiquidationOrderDuration: "duration",
      impactSize: "bignumber",
      markPriceBand: "number",
      lastPriceProtectedBand: "number",
      indexOracleId: "string",
      expiryTime: "date",
      isActive: "boolean",
      isSettled: "boolean",
      closedBlockHeight: "long",
    },
  },
};

const MsgCreateVaultType: AminoInit = {
  aminoType: TxTypes.CreateVaultType,
  valueMap: {
    creator: "string",
    collateralDenom: "string",
    debtDenom: "string",
    collateralizationRatio: "dec",
  },
};

const MsgLinkPool: AminoInit = {
  aminoType: TxTypes.LinkPool,
  valueMap: {
    creator: "string",
    linkPoolParams: {
      poolId: "long",
      market: "string",
    },
  },
};

const MsgUnlinkPool: AminoInit = {
  aminoType: TxTypes.UnlinkPool,
  valueMap: {
    creator: "string",
    unlinkPoolParams: {
      poolId: "long",
    },
  },
};

const MsgChangeSwapFee: AminoInit = {
  aminoType: TxTypes.ChangeSwapFee,
  valueMap: {
    creator: "string",
    changeSwapFeeParams: {
      poolId: "long",
      swapFee: "dec",
    },
  },
};

const MsgSetRewardsWeights: AminoInit = {
  aminoType: TxTypes.SetRewardsWeights,
  valueMap: {
    creator: "string",
    setRewardsWeightsParams: {
      poolId: "long",
      weight: "number-str",
    },
  },
};

const MsgSetRewardCurve: AminoInit = {
  aminoType: TxTypes.SetRewardCurve,
  valueMap: {
    creator: "string",
    setRewardCurveParams: {
      startTime: "date-number",
      initialRewardBps: "number",
      reductionMultiplierBps: "number",
      reductionIntervalSeconds: "long-number",
      reductions: "number",
      finalRewardBps: "number",
    },
  },
};

const MsgSetCommitmentCurve: AminoInit = {
  aminoType: TxTypes.SetCommitmentCurve,
  valueMap: {
    creator: "string",
    setCommitmentCurveParams: {
      maxDuration: "long-number",
      maxRewardMultiplier: "number",
    },
  },
};

const MsgChangeNumQuotes: AminoInit = {
  aminoType: TxTypes.ChangeNumQuotes,
  valueMap: {
    creator: "string",
    changeNumQuotesParams: {
      poolId: "long",
      numQuotes: "long",
    },
  },
};

const MsgSetTradingFlag: AminoInit = {
  aminoType: TxTypes.SetTradingFlag,
  valueMap: {
    creator: "string",
    isEnabled: "boolean",
    blockchain: "string",
  },
};

const MsgSetFee: AminoInit = {
  aminoType: TxTypes.SetFee,
  valueMap: {
    creator: "string",
    setFeeParams: {
      msgType: "string",
      fee: "bignumber",
    },
  },
};

const AdminAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateOracle]: generateAminoType(MsgCreateOracle),
  [CarbonTx.Types.MsgCreateToken]: generateAminoType(MsgCreateToken),
  [CarbonTx.Types.MsgSyncToken]: generateAminoType(MsgSyncToken),
  [CarbonTx.Types.MsgCreateMarket]: generateAminoType(MsgCreateMarket),
  [CarbonTx.Types.MsgCreateVaultType]: generateAminoType(MsgCreateVaultType),
  [CarbonTx.Types.MsgLinkPool]: generateAminoType(MsgLinkPool),
  [CarbonTx.Types.MsgUnlinkPool]: generateAminoType(MsgUnlinkPool),
  [CarbonTx.Types.MsgChangeSwapFee]: generateAminoType(MsgChangeSwapFee),
  [CarbonTx.Types.MsgSetRewardsWeights]: generateAminoType(MsgSetRewardsWeights),
  [CarbonTx.Types.MsgSetRewardCurve]: generateAminoType(MsgSetRewardCurve),
  [CarbonTx.Types.MsgSetCommitmentCurve]: generateAminoType(MsgSetCommitmentCurve),
  [CarbonTx.Types.MsgChangeNumQuotes]: generateAminoType(MsgChangeNumQuotes),
  [CarbonTx.Types.MsgSetTradingFlag]: generateAminoType(MsgSetTradingFlag),
  [CarbonTx.Types.MsgSetFee]: generateAminoType(MsgSetFee),
};

export default AdminAmino;
