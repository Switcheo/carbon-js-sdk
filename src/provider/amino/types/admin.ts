import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateOracle: "oracle/CreateOracle",
  BindToken: "carbon/MsgBindToken",
  CreateToken: "carbon/MsgCreateToken",
  LinkToken: "carbon/MsgLinkToken",
  SyncToken: "carbon/MsgSyncToken",
  CreateMarket: "market/CreateMarket",
  CreateVaultType: "cdp/CreateVaultType",
  LinkPool: "liquiditypool/LinkPool",
  UnlinkPool: "liquiditypool/UnlinkPool",
  ChangeSwapFee: "liquiditypool/ChangeSwapFee",
  SetRewardsWeights: "liquiditypool/SetRewardsWeights",
  SetRewardCurve: "liquiditypool/SetRewardCurve",
  SetCommitmentCurve: "liquiditypool/SetCommitmentCurve",
  UpdatePool: "liquiditypool/UpdatePool",
  SetTradingFlag: "order/SetTradingFlag",
  SetMsgGasCost: "fee/SetMsgGasCost",
  SetMinGasPrice: "fee/SetMinGasPrice",
  RemoveMsgGasCost: "fee/RemoveMsgGasCost",
  RemoveMinGasPrice: "fee/RemoveMinGasPrice",
  CreateValidator: "cosmos-sdk/MsgCreateValidator",
  EditValidator: "cosmos-sdk/MsgEditValidator",
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

const MsgBindToken: AminoInit = {
  aminoType: TxTypes.BindToken,
  valueMap: {},
}

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

const MsgLinkToken: AminoInit = {
  aminoType: TxTypes.LinkToken,
  valueMap: {},
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

const MsgUpdatePool: AminoInit = {
  aminoType: TxTypes.ChangeSwapFee,
  valueMap: {
    updatePoolParams: {
      poolId: ConvertEncType.Long,
      swapFee: ConvertEncType.Dec,
      numQuotes: ConvertEncType.Long,
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

const MsgSetTradingFlag: AminoInit = {
  aminoType: TxTypes.SetTradingFlag,
  valueMap: {},
};

const MsgSetGasCost: AminoInit = {
  aminoType: TxTypes.SetMsgGasCost,
  valueMap: {},
};

const MsgSetMinGasPrice: AminoInit = {
  aminoType: TxTypes.SetMinGasPrice,
  valueMap: {},
};

const MsgRemoveGasCost: AminoInit = {
  aminoType: TxTypes.RemoveMsgGasCost,
  valueMap: {},
};

const MsgRemoveMinGasPrice: AminoInit = {
  aminoType: TxTypes.RemoveMinGasPrice,
  valueMap: {},
};

const MsgCreateValidator: AminoInit = {
  aminoType: TxTypes.CreateValidator,
  valueMap: {
    commission: {
      rate: ConvertEncType.Dec,
      maxRate: ConvertEncType.Dec,
      maxChangeRate: ConvertEncType.Dec,
    },
  },
};

const MsgEditValidator: AminoInit = {
  aminoType: TxTypes.EditValidator,
  valueMap: {
    commissionRate: ConvertEncType.Dec,
  },
};

const AdminAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateOracle]: generateAminoType(MsgCreateOracle),
  [CarbonTx.Types.MsgBindToken]: generateAminoType(MsgBindToken),
  [CarbonTx.Types.MsgCreateToken]: generateAminoType(MsgCreateToken),
  [CarbonTx.Types.MsgLinkToken]: generateAminoType(MsgLinkToken),
  [CarbonTx.Types.MsgSyncToken]: generateAminoType(MsgSyncToken),
  [CarbonTx.Types.MsgCreateMarket]: generateAminoType(MsgCreateMarket),
  [CarbonTx.Types.MsgCreateVaultType]: generateAminoType(MsgCreateVaultType),
  [CarbonTx.Types.MsgLinkPool]: generateAminoType(MsgLinkPool),
  [CarbonTx.Types.MsgUnlinkPool]: generateAminoType(MsgUnlinkPool),
  [CarbonTx.Types.MsgUpdatePool]: generateAminoType(MsgUpdatePool),
  [CarbonTx.Types.MsgSetRewardsWeights]: generateAminoType(MsgSetRewardsWeights),
  [CarbonTx.Types.MsgSetRewardCurve]: generateAminoType(MsgSetRewardCurve),
  [CarbonTx.Types.MsgSetCommitmentCurve]: generateAminoType(MsgSetCommitmentCurve),
  [CarbonTx.Types.MsgSetTradingFlag]: generateAminoType(MsgSetTradingFlag),
  [CarbonTx.Types.MsgSetGasCost]: generateAminoType(MsgSetGasCost),
  [CarbonTx.Types.MsgSetMinGasPrice]: generateAminoType(MsgSetMinGasPrice),
  [CarbonTx.Types.MsgRemoveGasCost]: generateAminoType(MsgRemoveGasCost),
  [CarbonTx.Types.MsgRemoveMinGasPrice]: generateAminoType(MsgRemoveMinGasPrice),
  [CarbonTx.Types.MsgCreateValidator]: generateAminoType(MsgCreateValidator),
  [CarbonTx.Types.MsgEditValidator]: generateAminoType(MsgEditValidator),
};

export default AdminAmino;
