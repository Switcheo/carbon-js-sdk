import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  UpdateMarket: "market/UpdateMarket",
  DisableSpotMarket: "market/DisableSpotMarket",
  AddFeeTier: "market/AddFeeTier",
  RemoveFeeTier: "market/RemoveFeeTier",
  UpdateFeeTier: "market/UpdateFeeTier",
  SetStakeEquivalence: "market/SetStakeEquivalence",
  UpdateMarketProposal: "market/UpdateMarketProposal",
};

const UpdateMarketProposal: AminoInit = {
  aminoType: TxTypes.UpdateMarketProposal,
  valueMap: {
    lotSize: ConvertEncType.Dec,
    minQuantity: ConvertEncType.Dec,
    tickSize: ConvertEncType.Dec,
    takerFee: ConvertEncType.Dec,
    makerFee: ConvertEncType.Dec,
  }
}

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

const MsgDisableSpotMarket: AminoInit = {
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
      }
    }
  },
}
const MsgRemoveFeeTier: AminoInit = {
  aminoType: TxTypes.RemoveFeeTier,
  valueMap: {},
}
const MsgUpdateFeeTier: AminoInit = {
  aminoType: TxTypes.UpdateFeeTier,
  valueMap: {
    makerFee: ConvertEncType.Dec,
    takerFee: ConvertEncType.Dec,
  },
}
const MsgSetStakeEquivalence: AminoInit = {
  aminoType: TxTypes.UpdateFeeTier,
  valueMap: {
    stakeEquivalence: {
      ratio: ConvertEncType.Dec,
    }
  },
}


const MarketAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgUpdateMarket]: generateAminoType(MsgUpdateMarket),
  [CarbonTx.Types.MsgDisableSpotMarket]: generateAminoType(MsgDisableSpotMarket),
  [CarbonTx.Types.MsgAddFeeTier]: generateAminoType(MsgAddFeeTier),
  [CarbonTx.Types.MsgRemoveFeeTier]: generateAminoType(MsgRemoveFeeTier),
  [CarbonTx.Types.MsgUpdateFeeTier]: generateAminoType(MsgUpdateFeeTier),
  [CarbonTx.Types.MsgSetStakeEquivalence]: generateAminoType(MsgSetStakeEquivalence),
  [CarbonTx.Types.UpdateMarketProposal]: generateAminoType(UpdateMarketProposal),
};

export default MarketAmino;
