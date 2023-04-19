import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SupplyAsset: "cdp/SupplyAsset",
  WithdrawAsset: "cdp/WithdrawAsset",
  LockCollateral: "cdp/LockCollateral",
  UnlockCollateral: "cdp/UnlockCollateral",
  BorrowAsset: "cdp/BorrowAsset",
  RepayAsset: "cdp/RepayAsset",
  SupplyAssetAndLockCollateral: "cdp/SupplyAssetAndLockCollateral",
  UnlockCollateralAndWithdrawAsset: "cdp/UnlockCollateralAndWithdrawAsset",
  LiquidateCollateral: "cdp/LiquidateCollateral",
  RepayAssetWithCdpTokens: "cdp/RepayAssetWithCdpTokens",
  RepayAssetWithCollateral: "cdp/RepayAssetWithCollateral",
  MintStablecoin: "cdp/MintStablecoin",
  ReturnStablecoin: "cdp/ReturnStablecoin",
  LiquidateCollateralWithCdpTokens: "cdp/LiquidateCollateralWithCdpTokens",
  LiquidateCollateralWithCollateral: "cdp/LiquidateCollateralWithCollateral",
  LiquidateCollateralWithStablecoin: "cdp/LiquidateCollateralWithStablecoin",
  CreateRewardScheme: "cdp/CreateRewardScheme",
  UpdateRewardScheme: "cdp/UpdateRewardScheme",
  SetStablecoinMintCap: "cdp/SetStablecoinMintCap",
  SetStalePriceGracePeriod: "cdp/SetStalePriceGracePeriod",
  SetCdpPaused: "cdp/SetCdpPaused",
  ClaimRewards: "cdp/ClaimRewards",
  AddEModeCategory: "cdp/AddEModeCategory",
  UpdateEModeCategory: "cdp/UpdateEModeCategory",
  ChangeAccountEMode: "cdp/ChangeAccountEMode",
};

const MsgSupplyAsset: AminoInit = {
  aminoType: TxTypes.SupplyAsset,
  valueMap: {},
};

const MsgWithdrawAsset: AminoInit = {
  aminoType: TxTypes.WithdrawAsset,
  valueMap: {},
};

const MsgLockCollateral: AminoInit = {
  aminoType: TxTypes.LockCollateral,
  valueMap: {},
};

const MsgUnlockCollateral: AminoInit = {
  aminoType: TxTypes.UnlockCollateral,
  valueMap: {},
};

const MsgBorrowAsset: AminoInit = {
  aminoType: TxTypes.BorrowAsset,
  valueMap: {},
};

const MsgRepayAsset: AminoInit = {
  aminoType: TxTypes.RepayAsset,
  valueMap: {},
};

const MsgSupplyAssetAndLockCollateral: AminoInit = {
  aminoType: TxTypes.SupplyAssetAndLockCollateral,
  valueMap: {},
};

const MsgUnlockCollateralAndWithdrawAsset: AminoInit = {
  aminoType: TxTypes.UnlockCollateralAndWithdrawAsset,
  valueMap: {},
};

const MsgLiquidateCollateral: AminoInit = {
  aminoType: TxTypes.LiquidateCollateral,
  valueMap: {},
};

const MsgRepayAssetWithCdpTokens: AminoInit = {
  aminoType: TxTypes.RepayAssetWithCdpTokens,
  valueMap: {},
};

const MsgRepayAssetWithCollateral: AminoInit = {
  aminoType: TxTypes.RepayAssetWithCollateral,
  valueMap: {},
};

const MsgMintStablecoin: AminoInit = {
  aminoType: TxTypes.MintStablecoin,
  valueMap: {},
};

const MsgReturnStablecoin: AminoInit = {
  aminoType: TxTypes.ReturnStablecoin,
  valueMap: {},
};

const MsgLiquidateCollateralWithCdpTokens: AminoInit = {
  aminoType: TxTypes.LiquidateCollateralWithCdpTokens,
  valueMap: {},
};

const MsgLiquidateCollateralWithCollateral: AminoInit = {
  aminoType: TxTypes.LiquidateCollateralWithCollateral,
  valueMap: {},
};

const MsgLiquidateCollateralWithStablecoin: AminoInit = {
  aminoType: TxTypes.LiquidateCollateralWithStablecoin,
  valueMap: {},
};

const MsgCreateRewardScheme: AminoInit = {
  aminoType: TxTypes.CreateRewardScheme,
  valueMap: {
    createRewardSchemeParams: {
      startTime: ConvertEncType.Date,
      endTime: ConvertEncType.Date,
    },
  },
};

const MsgUpdateRewardScheme: AminoInit = {
  aminoType: TxTypes.UpdateRewardScheme,
  valueMap: {
    updateRewardSchemeParams: {
      rewardSchemeId: ConvertEncType.Long,
      startTime: ConvertEncType.Date,
      endTime: ConvertEncType.Date,
    },
  },
};

const MsgClaimRewards: AminoInit = {
  aminoType: TxTypes.ClaimRewards,
  valueMap: {},
};

const MsgSetStablecoinMintCap: AminoInit = {
  aminoType: TxTypes.SetStablecoinMintCap,
  valueMap: {},
};

const MsgSetStalePriceGracePeriod: AminoInit = {
  aminoType: TxTypes.SetStalePriceGracePeriod,
  valueMap: {},
};

const MsgSetCdpPaused: AminoInit = {
  aminoType: TxTypes.SetCdpPaused,
  valueMap: {},
};

const MsgAddEModeCategory: AminoInit = {
  aminoType: TxTypes.AddEModeCategory,
  valueMap: {},
};

const MsgUpdateEModeCategory: AminoInit = {
  aminoType: TxTypes.UpdateEModeCategory,
  valueMap: {
    updateEModeCategoryParams: {
      loanToValue: ConvertEncType.Long,
      liquidationThreshold: ConvertEncType.Long,
      liquidationDiscount: ConvertEncType.Long,
    }
  },
};

const MsgChangeAccountEMode: AminoInit = {
  aminoType: TxTypes.ChangeAccountEMode,
  valueMap: {},
};

const CdpAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSupplyAsset]: generateAminoType(MsgSupplyAsset),
  [CarbonTx.Types.MsgWithdrawAsset]: generateAminoType(MsgWithdrawAsset),
  [CarbonTx.Types.MsgLockCollateral]: generateAminoType(MsgLockCollateral),
  [CarbonTx.Types.MsgUnlockCollateral]: generateAminoType(MsgUnlockCollateral),
  [CarbonTx.Types.MsgBorrowAsset]: generateAminoType(MsgBorrowAsset),
  [CarbonTx.Types.MsgRepayAsset]: generateAminoType(MsgRepayAsset),
  [CarbonTx.Types.MsgSupplyAssetAndLockCollateral]: generateAminoType(MsgSupplyAssetAndLockCollateral),
  [CarbonTx.Types.MsgUnlockCollateralAndWithdrawAsset]: generateAminoType(MsgUnlockCollateralAndWithdrawAsset),
  [CarbonTx.Types.MsgLiquidateCollateral]: generateAminoType(MsgLiquidateCollateral),
  [CarbonTx.Types.MsgRepayAssetWithCdpTokens]: generateAminoType(MsgRepayAssetWithCdpTokens),
  [CarbonTx.Types.MsgRepayAssetWithCollateral]: generateAminoType(MsgRepayAssetWithCollateral),
  [CarbonTx.Types.MsgMintStablecoin]: generateAminoType(MsgMintStablecoin),
  [CarbonTx.Types.MsgReturnStablecoin]: generateAminoType(MsgReturnStablecoin),
  [CarbonTx.Types.MsgLiquidateCollateralWithCdpTokens]: generateAminoType(MsgLiquidateCollateralWithCdpTokens),
  [CarbonTx.Types.MsgLiquidateCollateralWithCollateral]: generateAminoType(MsgLiquidateCollateralWithCollateral),
  [CarbonTx.Types.MsgLiquidateCollateralWithStablecoin]: generateAminoType(MsgLiquidateCollateralWithStablecoin),
  [CarbonTx.Types.MsgCreateRewardScheme]: generateAminoType(MsgCreateRewardScheme),
  [CarbonTx.Types.MsgUpdateRewardScheme]: generateAminoType(MsgUpdateRewardScheme),
  [CarbonTx.Types.MsgClaimRewards]: generateAminoType(MsgClaimRewards),
  [CarbonTx.Types.MsgSetStablecoinMintCap]: generateAminoType(MsgSetStablecoinMintCap),
  [CarbonTx.Types.MsgSetStalePriceGracePeriod]: generateAminoType(MsgSetStalePriceGracePeriod),
  [CarbonTx.Types.MsgSetCdpPaused]: generateAminoType(MsgSetCdpPaused),
  [CarbonTx.Types.MsgAddEModeCategory]: generateAminoType(MsgAddEModeCategory),
  [CarbonTx.Types.MsgUpdateEModeCategory]: generateAminoType(MsgUpdateEModeCategory),
  [CarbonTx.Types.MsgChangeAccountEMode]: generateAminoType(MsgChangeAccountEMode),
};

export default CdpAmino;
