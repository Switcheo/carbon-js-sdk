import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
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
  [CarbonTx.Types.MsgBankSend]: generateAminoType(MsgSend),
};

export default BankAmino;
