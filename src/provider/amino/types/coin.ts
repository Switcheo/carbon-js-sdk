import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  MintToken: "coin/MintToken",
  Withdraw: "coin/Withdraw",
};

const MsgWithdraw: AminoInit = {
  aminoType: TxTypes.Withdraw,
  valueMap: {
    amount: ConvertEncType.Dec,
    feeAmount: ConvertEncType.Dec,
  },
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
