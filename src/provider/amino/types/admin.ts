import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

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
      minTurnoutPercentage: ConvertEncType.Long,
      maxResultAge: ConvertEncType.Long,
      resolution: ConvertEncType.Long,
    },
  },
};

const MsgCreateToken: AminoInit = {
  aminoType: TxTypes.CreateToken,
  valueMap: {
    createTokenParams: {
      decimals: ConvertEncType.Long,
      chainId: ConvertEncType.Long,
      bridgeId: ConvertEncType.Long,
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
      basePrecision: ConvertEncType.Long,
      quotePrecision: ConvertEncType.Long,
      tickSize: ConvertEncType.Dec,
      makerFee: ConvertEncType.Dec,
      takerFee: ConvertEncType.Dec,
      createdBlockHeight: ConvertEncType.Long,
      initialMarginBase: ConvertEncType.Dec,
      initialMarginStep: ConvertEncType.Dec,
      maintenanceMarginRatio: ConvertEncType.Dec,
      maxLiquidationOrderDuration: ConvertEncType.Duration,
      expiryTime: ConvertEncType.Date,
      closedBlockHeight: ConvertEncType.Long,
    },
  },
};

const MsgCreateVaultType: AminoInit = {
  aminoType: TxTypes.CreateVaultType,
  valueMap: {
    collateralizationRatio: ConvertEncType.Dec,
  },
};

const MsgLinkPool: AminoInit = {
  aminoType: TxTypes.LinkPool,
  valueMap: {
    linkPoolParams: {
      poolId: ConvertEncType.Long,
    },
  },
};

const MsgUnlinkPool: AminoInit = {
  aminoType: TxTypes.UnlinkPool,
  valueMap: {
    unlinkPoolParams: {
      poolId: ConvertEncType.Long,
    },
  },
};

const MsgChangeSwapFee: AminoInit = {
  aminoType: TxTypes.ChangeSwapFee,
  valueMap: {
    changeSwapFeeParams: {
      poolId: ConvertEncType.Long,
      swapFee: ConvertEncType.Dec,
    },
  },
};

const MsgSetRewardsWeights: AminoInit = {
  aminoType: TxTypes.SetRewardsWeights,
  valueMap: {
    setRewardsWeightsParams: {
      poolId: ConvertEncType.Long,
    },
  },
};

const MsgSetRewardCurve: AminoInit = {
  aminoType: TxTypes.SetRewardCurve,
  valueMap: {
    setRewardCurveParams: {
      startTime: ConvertEncType.Date,
      reductionIntervalSeconds: ConvertEncType.Long,
    },
  },
};

const MsgSetCommitmentCurve: AminoInit = {
  aminoType: TxTypes.SetCommitmentCurve,
  valueMap: {
    setCommitmentCurveParams: {
      maxDuration: ConvertEncType.Long,
    },
  },
};

const MsgChangeNumQuotes: AminoInit = {
  aminoType: TxTypes.ChangeNumQuotes,
  valueMap: {
    changeNumQuotesParams: {
      poolId: ConvertEncType.Long,
      numQuotes: ConvertEncType.Long,
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
