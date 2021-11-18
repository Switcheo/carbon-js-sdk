import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoTypes, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  UpdateMarket: "market/MsgUpdateMarket",
};

const MsgUpdateMarket: AminoInit = {
  aminoType: TxTypes.UpdateMarket,
  valueMap: {
    marketParams: {
      tickSize: AminoTypes.Dec,
      makerFee: AminoTypes.Dec,
      takerFee: AminoTypes.Dec,
      initialMarginBase: AminoTypes.Dec,
      initialMarginStep: AminoTypes.Dec,
      maintenanceMarginRatio: AminoTypes.Dec,
      maxLiquidationOrderDuration: AminoTypes.Duration,
      markPriceBand: AminoTypes.NumToStr,
      lastPriceProtectedBand: AminoTypes.NumToStr,
    },
  },
};

const MarketAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgUpdateMarket]: generateAminoType(MsgUpdateMarket),
};

export default MarketAmino;

