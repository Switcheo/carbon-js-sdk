import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  WithdrawTokenTx: "bridge/MsgWithdrawToken",
  WithdrawAndExecuteTokenTx: "bridge/MsgExecuteFromCarbon",
};

const MsgWithdrawToken: AminoInit = {
  aminoType: TxTypes.WithdrawTokenTx,
  valueMap: {
    expiryDuration: ConvertEncType.Duration,
  },
};
const MsgWithdrawAndExecuteToken: AminoInit = {
  aminoType: TxTypes.WithdrawAndExecuteTokenTx,
  valueMap: {
    expiryDuration: ConvertEncType.Duration,
    executionBytes: ConvertEncType.Uint8Array,
  },
};

const BridgeAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgWithdrawToken]: generateAminoType(MsgWithdrawToken),
  [CarbonTx.Types.MsgExecuteFromCarbon]: generateAminoType(MsgWithdrawAndExecuteToken),
};

export default BridgeAmino;
