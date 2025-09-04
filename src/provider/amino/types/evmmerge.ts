import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  MergeAccount: "evmmerge/MsgMergeAccount",
};

const MsgMergeAccount: AminoInit = {
  aminoType: TxTypes.MergeAccount,
  valueMap: {},
};

const EvmMergeAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgMergeAccount]: generateAminoType(MsgMergeAccount),
};

export default EvmMergeAmino;
