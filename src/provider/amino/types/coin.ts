import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  MintToken: "carbon/MsgMintToken",
  Withdraw: "carbon/MsgWithdraw",
};

const MsgWithdraw: AminoInit = {
  aminoType: TxTypes.Withdraw,
  valueMap: {},
};

const MsgMintToken: AminoInit = {
  aminoType: TxTypes.MintToken,
  valueMap: {},
}

const CoinAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgWithdraw]: generateAminoType(MsgWithdraw),
  [CarbonTx.Types.MsgMintToken]: generateAminoType(MsgMintToken),
};

export default CoinAmino;
