import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoTypes, generateAminoType } from "../utils";

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
  ChangeNumQuotes: "liquiditypool/ChangeNumQuotes",
  SetTradingFlag: "order/MsgSetTradingFlag",
  SetMsgFee: "fee/SetMsgFee",
}

const MsgCreateOracle: AminoInit = {
  aminoType: TxTypes.CreateOracle,
  valueMap: {
    createOracleParams: {
      minTurnoutPercentage: AminoTypes.Long,
      maxResultAge: AminoTypes.Long,
      resolution: AminoTypes.Long,
    },
  },
};

const MsgCreateToken: AminoInit = {
  aminoType: TxTypes.CreateToken,
  valueMap: {
    createTokenParams: {
      decimals: AminoTypes.Long,
      chainId: AminoTypes.Long,
      bridgeId: AminoTypes.Long,
    },
  },
};

const MsgSyncToken: AminoInit = {
  aminoType: TxTypes.SyncToken,
  valueMap: {},
};

const MsgCreateMarket: AminoInit = {
  aminoType: TxTypes.CreateMarket,
  valueMap: {
    market: {
      basePrecision: AminoTypes.Long,
      quotePrecision: AminoTypes.Long,
      tickSize: AminoTypes.Dec,
      makerFee: AminoTypes.Dec,
      takerFee: AminoTypes.Dec,
      createdBlockHeight: AminoTypes.Long,
      initialMarginBase: AminoTypes.Dec,
      initialMarginStep: AminoTypes.Dec,
      maintenanceMarginRatio: AminoTypes.Dec,
      maxLiquidationOrderDuration: AminoTypes.Duration,
      expiryTime: AminoTypes.Date,
      closedBlockHeight: AminoTypes.Long,
    },
  },
};

const MsgCreateVaultType: AminoInit = {
  aminoType: TxTypes.CreateVaultType,
  valueMap: {
    collateralizationRatio: AminoTypes.Dec,
  },
};

const MsgLinkPool: AminoInit = {
  aminoType: TxTypes.LinkPool,
  valueMap: {
    linkPoolParams: {
      poolId: AminoTypes.Long,
    },
  },
};

const MsgUnlinkPool: AminoInit = {
  aminoType: TxTypes.UnlinkPool,
  valueMap: {
    unlinkPoolParams: {
      poolId: AminoTypes.Long,
    },
  },
};

const MsgChangeSwapFee: AminoInit = {
  aminoType: TxTypes.ChangeSwapFee,
  valueMap: {
    changeSwapFeeParams: {
      poolId: AminoTypes.Long,
      swapFee: AminoTypes.Dec,
    },
  },
};

const MsgSetRewardsWeights: AminoInit = {
  aminoType: TxTypes.SetRewardsWeights,
  valueMap: {
    setRewardsWeightsParams: {
      poolId: AminoTypes.Long,
    },
  },
};

const MsgSetRewardCurve: AminoInit = {
  aminoType: TxTypes.SetRewardCurve,
  valueMap: {
    setRewardCurveParams: {
      startTime: AminoTypes.DateToNum,
      reductionIntervalSeconds: AminoTypes.LongToNum,
    },
  },
};

const MsgSetCommitmentCurve: AminoInit = {
  aminoType: TxTypes.SetCommitmentCurve,
  valueMap: {
    setCommitmentCurveParams: {
      maxDuration: AminoTypes.LongToNum,
    },
  },
};

const MsgChangeNumQuotes: AminoInit = {
  aminoType: TxTypes.ChangeNumQuotes,
  valueMap: {
    changeNumQuotesParams: {
      poolId: AminoTypes.Long,
      numQuotes: AminoTypes.Long,
    },
  },
};

const MsgSetTradingFlag: AminoInit = {
  aminoType: TxTypes.SetTradingFlag,
  valueMap: {},
};

const MsgSetFee: AminoInit = {
  aminoType: TxTypes.SetFee,
  valueMap: {},
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
