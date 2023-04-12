import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  UpdateMarket: "market/UpdateMarket",
  DisableSpotMarket: "market/DisableSpotMarket",
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

const MsgDisableSpotMarket: AminoInit = {
  aminoType: TxTypes.DisableSpotMarket,
  valueMap: {},
};

const MarketAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgUpdateMarket]: generateAminoType(MsgUpdateMarket),
  [CarbonTx.Types.MsgDisableSpotMarket]: generateAminoType(MsgDisableSpotMarket),
};

export default MarketAmino;
