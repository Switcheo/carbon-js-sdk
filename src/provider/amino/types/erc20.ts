import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  ConvertERC20: "erc20/MsgConvertERC20",
  ConvertCoin: "erc20/MsgConvertCoin",
};


const MsgConvertERC20: AminoInit = {
  aminoType: TxTypes.ConvertERC20,
  valueMap: {},
};
const MsgConvertCoin: AminoInit = {
  aminoType: TxTypes.ConvertCoin,
  valueMap: {},
};


const ERC20Amino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgConvertERC20]: generateAminoType(MsgConvertERC20),
  [CarbonTx.Types.MsgConvertCoin]: generateAminoType(MsgConvertCoin),
};

export default ERC20Amino;
