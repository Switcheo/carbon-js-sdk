import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateVote: "oracle/CreateVote",
};

const MsgCreateVote: AminoInit = {
  aminoType: TxTypes.CreateVote,
  valueMap: {
    timestamp: ConvertEncType.Long,
  },
};

const OracleAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateVote]: generateAminoType(MsgCreateVote),
};

export default OracleAmino;
