import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  MsgCreateRfq: "otc/MsgCreateRfq",
};

const MsgCreateRfq: AminoInit = {
  aminoType: TxTypes.SupplyAsset,
  valueMap: {},
};

const OtcAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSupplyAsset]: generateAminoType(MsgCreateRfq),
};

export default OtcAmino;
