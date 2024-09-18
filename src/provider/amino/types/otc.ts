import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  MsgCreateRfq: "otc/CreateRfq",
  MsgCancelRfq: "otc/CancelRfq",
  MsgAcceptQuote: "otc/AcceptQuote",
};

const MsgCreateRfq: AminoInit = {
  aminoType: TxTypes.MsgCreateRfq,
  valueMap: {
    expiryTime: ConvertEncType.Date,
  },
};

const MsgCancelRfq: AminoInit = {
  aminoType: TxTypes.MsgCancelRfq,
  valueMap: {},
};

const MsgAcceptQuote: AminoInit = {
  aminoType: TxTypes.MsgAcceptQuote,
  valueMap: {},
};

const OtcAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateRfq]: generateAminoType(MsgCreateRfq),
  [CarbonTx.Types.MsgCancelRfq]: generateAminoType(MsgCancelRfq),
  [CarbonTx.Types.MsgAcceptQuote]: generateAminoType(MsgAcceptQuote),
};

export default OtcAmino;
