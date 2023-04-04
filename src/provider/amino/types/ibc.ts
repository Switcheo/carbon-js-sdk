import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
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
    if (!newInput.timeoutHeight) {
      newInput.timeoutHeight = {};
    }
    if (newInput.timeoutTimestamp && newInput.timeoutTimestamp.gt(0)) {
      const shiftedTimestamp = new BigNumber(newInput.timeoutTimestamp.toString(10)).shiftedBy(-9)
      newInput.timeoutTimestamp = BigNumber.max(1, shiftedTimestamp);
    }
    return { amino, input: newInput };
  },
  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = input;
    if (Object.values(newInput.timeout_height)?.length === 0) {
      newInput.timeout_height = {};
    }
    if (newInput.timeout_timestamp) {
      newInput.timeout_timestamp = new BigNumber(newInput.timeout_timestamp).shiftedBy(9);
    }
    return { amino, input: newInput };
  },
};

const IbcAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgTransfer]: generateAminoType(MsgTransfer, pruneTransferProcess),
};

export default IbcAmino;
