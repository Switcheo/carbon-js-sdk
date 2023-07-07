import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoInit, generateAminoType } from "../utils";
import { AminoConverter } from "@cosmjs/stargate";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SettlementPriceProposal: "pricing/SettlementPriceProposal",
}

const SettlementPriceProposal: AminoInit = {
  aminoType: TxTypes.SettlementPriceProposal,
  valueMap: {}
}

const PricingAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.SettlementPriceProposal]: generateAminoType(SettlementPriceProposal),
}

export default PricingAmino;