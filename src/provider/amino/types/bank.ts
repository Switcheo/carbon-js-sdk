import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  Send: "cosmos-sdk/MsgSend",
};

const MsgSend: AminoInit = {
  aminoType: TxTypes.Send,
  valueMap: {},
};

const BankAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSend]: generateAminoType(MsgSend),
};

export default BankAmino;
