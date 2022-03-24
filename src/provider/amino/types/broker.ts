import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  InitiateLiquidation: "broker/InitiateLiquidation",
};

const MsgInitiateLiquidation: AminoInit = {
  aminoType: TxTypes.InitiateLiquidation,
  valueMap: {},
};

const BrokerAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgInitiateLiquidation]: generateAminoType(MsgInitiateLiquidation),
};

export default BrokerAmino;
