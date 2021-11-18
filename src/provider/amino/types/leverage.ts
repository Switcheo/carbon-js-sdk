import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoTypes, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SetLeverage: "leverage/MsgSetLeverage",
};

const MsgSetLeverage: AminoInit = {
  aminoType: TxTypes.SetLeverage,
  valueMap: {
    leverage: AminoTypes.Dec,
  },
};

const LeverageAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSetLeverage]: generateAminoType(MsgSetLeverage),
};

export default LeverageAmino;
