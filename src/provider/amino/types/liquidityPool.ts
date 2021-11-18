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

const MsgCreatePoolWithLiquidity: AminoInit = {
  aminoType: "liquiditypool/CreatePoolWithLiquidity",
  valueMap: {
    creator: "string",
    tokenADenom: "string",
    tokenBDenom: "string",
    tokenAWeight: "dec",
    tokenBWeight: "dec",
    amountA: "dec",
    amountB: "dec",
    swapFee: "dec",
    numQuotes: "long",
  },
};

const MsgAddLiquidity: AminoInit = {
  aminoType: "liquiditypool/AddLiquidity",
  valueMap: {
    creator: "string",
    poolId: "long",
    amountA: "dec",
    amountB: "dec",
    minShares: "dec",
  },
};

const MsgRemoveLiquidity: AminoInit = {
  aminoType: "liquiditypool/RemoveLiquidity",
  valueMap: {
    creator: "string",
    poolId: "long",
    shares: "dec",
  },
};

const MsgStakePoolToken: AminoInit = {
  aminoType: "liquiditypool/StakePoolToken",
  valueMap: {
    creator: "string",
    denom: "string",
    amount: "dec",
    duration: "long",
  },
};

const MsgUnstakePoolToken: AminoInit = {
  aminoType: "liquiditypool/UnstakePoolToken",
  valueMap: {
    creator: "string",
    denom: "string",
    amount: "dec",
  },
};

const MsgClaimPoolRewards: AminoInit = {
  aminoType: "liquiditypool/ClaimPoolRewards",
  valueMap: {
    creator: "string",
    poolId: "long",
  },
};

const LiquidityPoolAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreatePool]: generateAminoType(MsgCreatePool),
  [CarbonTx.Types.MsgCreatePoolWithLiquidity]: generateAminoType(MsgCreatePoolWithLiquidity),
  [CarbonTx.Types.MsgAddLiquidity]: generateAminoType(MsgAddLiquidity),
  [CarbonTx.Types.MsgRemoveLiquidity]: generateAminoType(MsgRemoveLiquidity),
  [CarbonTx.Types.MsgStakePoolToken]: generateAminoType(MsgStakePoolToken),
  [CarbonTx.Types.MsgUnstakePoolToken]: generateAminoType(MsgUnstakePoolToken),
  [CarbonTx.Types.MsgClaimPoolRewards]: generateAminoType(MsgClaimPoolRewards),
};

export default LiquidityPoolAmino;
