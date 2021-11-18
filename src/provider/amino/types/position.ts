import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoTypes, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SetMargin: "position/MsgSetMargin",
};

const MsgSetMargin: AminoInit = {
  aminoType: TxTypes.SetMargin,
  valueMap: {
    margin: AminoTypes.Dec,
  },
};

const PositionAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSetMargin]: generateAminoType(MsgSetMargin),
};

export default PositionAmino;
