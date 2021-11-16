import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const MsgSetMargin: AminoInit = {
  aminoType: "position/MsgSetMargin",
  valueMap: {
    creator: "string",
    market: "string",
    margin: "dec",
  },
};

const PositionAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSetMargin]: generateAminoType(MsgSetMargin),
};

export default PositionAmino;
