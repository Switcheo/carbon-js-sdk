import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoProcess, AminoValueMap, ConvertEncType, generateAminoType } from "../utils";
import { MsgExecuteFromCarbon } from "@carbon-sdk/codec/Switcheo/carbon/bridge/tx";


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
  },
};

const withdrawAndExecuteAminoProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    const { executionBytes } = input as MsgExecuteFromCarbon;
    return {
      amino,
      input: {
        ...input,
        executionBytes: Buffer.from(executionBytes).toString('base64'),
      },
    };
  },
  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const buffer = Buffer.from(input.executionBytes, 'base64');
    return {
      amino,
      input: {
        ...input,
        executionBytes: new Uint8Array(buffer),
      },
    };
  },
};


const BridgeAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgWithdrawToken]: generateAminoType(MsgWithdrawToken),
  [CarbonTx.Types.MsgExecuteFromCarbon]: generateAminoType(MsgWithdrawAndExecuteToken, withdrawAndExecuteAminoProcess),
};

export default BridgeAmino;
