import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoConvertTypes, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  UpdateMarket: "market/MsgUpdateMarket",
};

const MsgUpdateMarket: AminoInit = {
  aminoType: TxTypes.UpdateMarket,
  valueMap: {
    marketParams: {
      tickSize: AminoConvertTypes.Dec,
      makerFee: AminoConvertTypes.Dec,
      takerFee: AminoConvertTypes.Dec,
      initialMarginBase: AminoConvertTypes.Dec,
      initialMarginStep: AminoConvertTypes.Dec,
      maintenanceMarginRatio: AminoConvertTypes.Dec,
      maxLiquidationOrderDuration: AminoConvertTypes.Duration,
      markPriceBand: AminoConvertTypes.NumToStr,
      lastPriceProtectedBand: AminoConvertTypes.NumToStr,
    },
  },
};

const MarketAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgUpdateMarket]: generateAminoType(MsgUpdateMarket),
};

export default MarketAmino;
