import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";


const TxTypes: TypeUtils.SimpleMap<string> = {
  WithdrawTokenTx: "bridge/MsgWithdrawToken",
};

const MsgWithdrawToken: AminoInit = {
  aminoType: TxTypes.WithdrawTokenTx,
  valueMap: {
    expiryDuration: ConvertEncType.Duration,
  },
};


const BridgeAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgWithdrawToken]: generateAminoType(MsgWithdrawToken),
};

export default BridgeAmino;
