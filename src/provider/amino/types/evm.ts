import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  EthereumTx: "evm/v1/MsgEthereumTx",
};

const MsgEthereumTx: AminoInit = {
  aminoType: TxTypes.EthereumTx,
  valueMap: {},
};

const EvmAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgEthereumTx]: generateAminoType(MsgEthereumTx),
};

export default EvmAmino;
