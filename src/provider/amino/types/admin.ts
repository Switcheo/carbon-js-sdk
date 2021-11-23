import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoConvertTypes, generateAminoType } from "../utils";

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
      minTurnoutPercentage: AminoConvertTypes.Long,
      maxResultAge: AminoConvertTypes.Long,
      resolution: AminoConvertTypes.Long,
    },
  },
};

const MsgCreateToken: AminoInit = {
  aminoType: TxTypes.CreateToken,
  valueMap: {
    createTokenParams: {
      decimals: AminoConvertTypes.Long,
      chainId: AminoConvertTypes.Long,
      bridgeId: AminoConvertTypes.Long,
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
      basePrecision: AminoConvertTypes.Long,
      quotePrecision: AminoConvertTypes.Long,
      tickSize: AminoConvertTypes.Dec,
      makerFee: AminoConvertTypes.Dec,
      takerFee: AminoConvertTypes.Dec,
      createdBlockHeight: AminoConvertTypes.Long,
      initialMarginBase: AminoConvertTypes.Dec,
      initialMarginStep: AminoConvertTypes.Dec,
      maintenanceMarginRatio: AminoConvertTypes.Dec,
      maxLiquidationOrderDuration: AminoConvertTypes.Duration,
      expiryTime: AminoConvertTypes.Date,
      closedBlockHeight: AminoConvertTypes.Long,
    },
  },
};

const MsgCreateVaultType: AminoInit = {
  aminoType: TxTypes.CreateVaultType,
  valueMap: {
    collateralizationRatio: AminoConvertTypes.Dec,
  },
};

const MsgLinkPool: AminoInit = {
  aminoType: TxTypes.LinkPool,
  valueMap: {
    linkPoolParams: {
      poolId: AminoConvertTypes.Long,
    },
  },
};

const MsgUnlinkPool: AminoInit = {
  aminoType: TxTypes.UnlinkPool,
  valueMap: {
    unlinkPoolParams: {
      poolId: AminoConvertTypes.Long,
    },
  },
};

const MsgChangeSwapFee: AminoInit = {
  aminoType: TxTypes.ChangeSwapFee,
  valueMap: {
    changeSwapFeeParams: {
      poolId: AminoConvertTypes.Long,
      swapFee: AminoConvertTypes.Dec,
    },
  },
};

const MsgSetRewardsWeights: AminoInit = {
  aminoType: TxTypes.SetRewardsWeights,
  valueMap: {
    setRewardsWeightsParams: {
      poolId: AminoConvertTypes.Long,
    },
  },
};

const MsgSetRewardCurve: AminoInit = {
  aminoType: TxTypes.SetRewardCurve,
  valueMap: {
    setRewardCurveParams: {
      startTime: AminoConvertTypes.Date,
      reductionIntervalSeconds: AminoConvertTypes.Long,
    },
  },
};

const MsgSetCommitmentCurve: AminoInit = {
  aminoType: TxTypes.SetCommitmentCurve,
  valueMap: {
    setCommitmentCurveParams: {
      maxDuration: AminoConvertTypes.Long,
    },
  },
};

const MsgChangeNumQuotes: AminoInit = {
  aminoType: TxTypes.ChangeNumQuotes,
  valueMap: {
    changeNumQuotesParams: {
      poolId: AminoConvertTypes.Long,
      numQuotes: AminoConvertTypes.Long,
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
