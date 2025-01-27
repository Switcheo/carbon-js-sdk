import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  UpdateMarket: "market/UpdateMarket",
  DisableSpotMarket: "market/SettleSpotMarket",
  AddFeeTier: "market/AddFeeTier",
  RemoveFeeTier: "market/RemoveFeeTier",
  UpdateFeeTier: "market/UpdateFeeTier",
  SetStakeEquivalence: "market/SetStakeEquivalence",
};

const MsgUpdateMarket: AminoInit = {
  aminoType: TxTypes.UpdateMarket,
  valueMap: {
    marketParams: {
      tickSize: ConvertEncType.Dec,
      makerFee: ConvertEncType.Dec,
      takerFee: ConvertEncType.Dec,
      initialMarginBase: ConvertEncType.Dec,
      initialMarginStep: ConvertEncType.Dec,
      maintenanceMarginRatio: ConvertEncType.Dec,
      maxLiquidationOrderDuration: ConvertEncType.Duration,
      markPriceBand: ConvertEncType.NumToStr,
      lastPriceProtectedBand: ConvertEncType.NumToStr,
    },
  },
};

const MsgSettleSpotMarket: AminoInit = {
  aminoType: TxTypes.DisableSpotMarket,
  valueMap: {},
};

const MsgAddFeeTier: AminoInit = {
  aminoType: TxTypes.AddFeeTier,
  valueMap: {
    feeTier: {
      tradingFees: {
        makerFee: ConvertEncType.Dec,
        takerFee: ConvertEncType.Dec,
      },
    },
  },
};
const MsgRemoveFeeTier: AminoInit = {
  aminoType: TxTypes.RemoveFeeTier,
  valueMap: {},
};
const MsgUpdateFeeTier: AminoInit = {
  aminoType: TxTypes.UpdateFeeTier,
  valueMap: {
    makerFee: ConvertEncType.Dec,
    takerFee: ConvertEncType.Dec,
  },
};
const MsgSetStakeEquivalence: AminoInit = {
  aminoType: TxTypes.UpdateFeeTier,
  valueMap: {
    stakeEquivalence: {
      ratio: ConvertEncType.Dec,
    },
  },
};

const MarketAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgUpdateMarket]: generateAminoType(MsgUpdateMarket),
  [CarbonTx.Types.MsgSettleSpotMarket]: generateAminoType(MsgSettleSpotMarket),
  [CarbonTx.Types.MsgAddFeeTier]: generateAminoType(MsgAddFeeTier),
  [CarbonTx.Types.MsgRemoveFeeTier]: generateAminoType(MsgRemoveFeeTier),
  [CarbonTx.Types.MsgUpdateFeeTier]: generateAminoType(MsgUpdateFeeTier),
  [CarbonTx.Types.MsgSetStakeEquivalence]: generateAminoType(MsgSetStakeEquivalence),
};

export default MarketAmino;
