import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  UpdateParams: "ethermint/feemarket/MsgUpdateParams",
};

const MsgUpdateParams: AminoInit = {
  aminoType: TxTypes.UpdateParams,
  valueMap: {},
};

const FeeMarketAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgUpdateParams]: generateAminoType(MsgUpdateParams),
};

export default FeeMarketAmino;
