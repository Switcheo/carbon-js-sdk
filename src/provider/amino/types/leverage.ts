import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SetLeverage: "leverage/SetLeverage",
  SetMarginMode: "leverage/SetMarginMode",
};

const MsgSetLeverage: AminoInit = {
  aminoType: TxTypes.SetLeverage,
  valueMap: {
    leverage: ConvertEncType.Dec,
  },
};

const MsgSetMarginMode: AminoInit = {
  aminoType: TxTypes.SetMarginMode,
  valueMap: {},
};

const LeverageAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSetLeverage]: generateAminoType(MsgSetLeverage),
  [CarbonTx.Types.MsgSetMarginMode]: generateAminoType(MsgSetMarginMode),
};

export default LeverageAmino;
