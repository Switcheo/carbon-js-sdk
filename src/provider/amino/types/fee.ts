import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";
import { AminoConverter } from "@cosmjs/stargate";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SetMsgGasCostProposal: "fee/SetMsgGasCostProposal",
}

const SetMsgGasCostProposal: AminoInit = {
  aminoType: TxTypes.SetMsgGasCostProposal,
  valueMap: {
    gasCost: ConvertEncType.Dec
  }
}

const FeeAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.SetMsgGasCostProposal]: generateAminoType(SetMsgGasCostProposal),
}

export default FeeAmino;