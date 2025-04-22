import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SetLeverage: "leverage/SetLeverage",
  ToggleMarginMode: "leverage/ToggleMarginMode",
};

const MsgSetLeverage: AminoInit = {
  aminoType: TxTypes.SetLeverage,
  valueMap: {
    leverage: ConvertEncType.Dec,
  },
};

const MsgToggleMarginMode: AminoInit = {
  aminoType: TxTypes.ToggleMarginMode,
  valueMap: {},
};

const LeverageAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSetLeverage]: generateAminoType(MsgSetLeverage),
  [CarbonTx.Types.MsgToggleMarginMode]: generateAminoType(MsgToggleMarginMode),
};

export default LeverageAmino;
