import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import Long from "long";
import { AminoInit, AminoProcess, AminoValueMap, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  Transfer: "cosmos-sdk/MsgTransfer",
};

const MsgTransfer: AminoInit = {
  aminoType: TxTypes.Transfer,
  valueMap: {
    timeoutHeight: {
      revisionHeight: ConvertEncType.Long,
      revisionNumber: ConvertEncType.Long,
    },
    timeoutTimestamp: ConvertEncType.Long,
  },
};

const pruneTransferProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = input;
    if (Long.isLong(input.timeoutTimestamp) && new Long(0).eq(input.timeoutTimestamp)) {
      delete newInput.timeoutTimestamp;
    }
    return { amino, input: newInput };
  },
  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = input;
    return { amino, input: newInput };
  },
};

const IbcAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgTransfer]: generateAminoType(MsgTransfer, pruneTransferProcess),
};

export default IbcAmino;
