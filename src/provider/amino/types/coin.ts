import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  MintToken: "carbon/MsgMintToken",
  Withdraw: "carbon/MsgWithdraw",
  DepositToGroup: "coin/DepositToGroup",
  WithdrawFromGroup: "coin/WithdrawFromGroup",
};

const MsgWithdraw: AminoInit = {
  aminoType: TxTypes.Withdraw,
  valueMap: {},
};

const MsgMintToken: AminoInit = {
  aminoType: TxTypes.MintToken,
  valueMap: {},
};

const MsgDepositToGroup: AminoInit = {
  aminoType: TxTypes.DepositToGroup,
  valueMap: {},
};

const MsgWithdrawFromGroup: AminoInit = {
  aminoType: TxTypes.WithdrawFromGroup,
  valueMap: {},
};

const CoinAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgWithdraw]: generateAminoType(MsgWithdraw),
  [CarbonTx.Types.MsgMintToken]: generateAminoType(MsgMintToken),
  [CarbonTx.Types.MsgDepositToGroup]: generateAminoType(MsgDepositToGroup),
  [CarbonTx.Types.MsgWithdrawFromGroup]: generateAminoType(MsgWithdrawFromGroup),
};

export default CoinAmino;
