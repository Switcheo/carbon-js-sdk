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

const IbcAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgTransfer]: generateAminoType(MsgTransfer),
};

export default IbcAmino;
