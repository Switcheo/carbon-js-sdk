import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateVote: "oracle/CreateVote",
  CreateOracleProposal: "oracle/CreateOracleProposal"
};

const MsgCreateVote: AminoInit = {
  aminoType: TxTypes.CreateVote,
  valueMap: {
    timestamp: ConvertEncType.Long,
  },
};
const CreateOracleProposal: AminoInit = {
  aminoType: TxTypes.CreateOracleProposal,
  valueMap: {},
};

const OracleAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateVote]: generateAminoType(MsgCreateVote),
  [CarbonTx.Types.CreateOracleProposal]: generateAminoType(CreateOracleProposal),
};

export default OracleAmino;
