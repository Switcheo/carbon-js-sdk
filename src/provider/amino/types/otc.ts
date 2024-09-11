import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  MsgCreateRfq: "otc/MsgCreateRfq",
  MsgCancelRfq: "otc/MsgCancelRfq",
  MsgAcceptQuote: "otc/MsgAcceptQuote",
};

const MsgCreateRfq: AminoInit = {
  aminoType: TxTypes.MsgCreateRfq,
  valueMap: {},
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
