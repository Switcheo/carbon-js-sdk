import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoTypes, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateVote: "oracle/MsgCreateVote",
};

const MsgCreateVote: AminoInit = {
  aminoType: TxTypes.CreateVote,
  valueMap: {
    timestamp: AminoTypes.Long,
  },
};

const OracleAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateVote]: generateAminoType(MsgCreateVote),
};

export default OracleAmino;
