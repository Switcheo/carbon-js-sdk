import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  UpdateMarket: "market/MsgUpdateMarket",
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

const MarketAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgUpdateMarket]: generateAminoType(MsgUpdateMarket),
};

export default MarketAmino;
