import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SetLeverage: "leverage/SetLeverage",
};

const MsgSetLeverage: AminoInit = {
  aminoType: TxTypes.SetLeverage,
  valueMap: {
    leverage: ConvertEncType.Dec,
  },
};

const LeverageAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSetLeverage]: generateAminoType(MsgSetLeverage),
};

export default LeverageAmino;
