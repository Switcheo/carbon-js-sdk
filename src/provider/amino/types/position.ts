import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SetMargin: "position/SetMargin",
};

const MsgSetMargin: AminoInit = {
  aminoType: TxTypes.SetMargin,
  valueMap: {},
};

const PositionAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSetMargin]: generateAminoType(MsgSetMargin),
};

export default PositionAmino;
