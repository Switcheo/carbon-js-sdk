import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const MsgCreatePool: AminoInit = {
  aminoType: "liquiditypool/CreatePool",
  valueMap: {
    creator: "string",
    numQuotes: "long",
    swapFee: "dec",
    tokenADenom: "string",
    tokenAWeight: "dec",
    tokenBDenom: "string",
    tokenBWeight: "dec",
  },
};

const LiquidityPoolAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreatePool]: generateAminoType(MsgCreatePool),
};

export default LiquidityPoolAmino;
