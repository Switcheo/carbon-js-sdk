import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

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
}

const MsgLiquidateCollateralWithCdpTokens: AminoInit = {
  aminoType: TxTypes.LiquidateCollateralWithCdpTokens,
  valueMap: {},
}

const MsgLiquidateCollateralWithCollateral: AminoInit = {
  aminoType: TxTypes.LiquidateCollateralWithCollateral,
  valueMap: {},
}

const MsgLiquidateCollateralWithStablecoin: AminoInit = {
  aminoType: TxTypes.LiquidateCollateralWithStablecoin,
  valueMap: {},
}

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
};

export default CdpAmino;
