import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  UpdateParams: "ethermint/MsgUpdateParams",
  EthereumTx: "evm/v1/MsgEthereumTx"
};

const MsgEthereumTx: AminoInit = {
  aminoType: TxTypes.EthereumTx,
  valueMap: {},
};

const MsgUpdateParams: AminoInit = {
  aminoType: TxTypes.UpdateParams,
  valueMap: {},
};


const EvmAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgEthereumTx]: generateAminoType(MsgEthereumTx),
  [CarbonTx.Types.MsgEvmUpdateParams]: generateAminoType(MsgUpdateParams),
};

export default EvmAmino;
