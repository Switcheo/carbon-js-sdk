import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateVote: "oracle/CreateVote",
  CreateOracleProposal: "oracle/CreateOracleProposal",
};

const CreateOracleProposal: AminoInit = {
  aminoType: TxTypes.CreateOracleProposal,
  valueMap: {},
};

const OracleAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.CreateOracleProposal]: generateAminoType(CreateOracleProposal),
};

export default OracleAmino;
