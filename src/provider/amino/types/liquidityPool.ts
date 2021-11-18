import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoTypes, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreatePool: "liquiditypool/CreatePool",
  CreatePoolWithLiquidity: "liquiditypool/CreatePoolWithLiquidity",
  AddLiquidity: "liquiditypool/AddLiquidity",
  RemoveLiquidity: "liquiditypool/RemoveLiquidity",
  StakePoolToken: "liquiditypool/StakePoolToken",
  UnstakePoolToken: "liquiditypool/UnstakePoolToken",
  ClaimPoolRewards: "liquiditypool/ClaimPoolRewards",
};

const MsgCreatePool: AminoInit = {
  aminoType: TxTypes.CreatePool,
  valueMap: {
    numQuotes: AminoTypes.Long,
    swapFee: AminoTypes.Dec,
    tokenAWeight: AminoTypes.Dec,
    tokenBWeight: AminoTypes.Dec,
  },
};

const MsgCreatePoolWithLiquidity: AminoInit = {
  aminoType: TxTypes.CreatePoolWithLiquidity,
  valueMap: {
    tokenAWeight: AminoTypes.Dec,
    tokenBWeight: AminoTypes.Dec,
    amountA: AminoTypes.Dec,
    amountB: AminoTypes.Dec,
    swapFee: AminoTypes.Dec,
    numQuotes: AminoTypes.Long,
  },
};

const MsgAddLiquidity: AminoInit = {
  aminoType: TxTypes.AddLiquidity,
  valueMap: {
    poolId: AminoTypes.Long,
    amountA: AminoTypes.Dec,
    amountB: AminoTypes.Dec,
    minShares: AminoTypes.Dec,
  },
};

const MsgRemoveLiquidity: AminoInit = {
  aminoType: TxTypes.RemoveLiquidity,
  valueMap: {
    poolId: AminoTypes.Long,
    shares: AminoTypes.Dec,
  },
};

const MsgStakePoolToken: AminoInit = {
  aminoType: TxTypes.StakePoolToken,
  valueMap: {
    amount: AminoTypes.Dec,
    duration: AminoTypes.Long,
  },
};

const MsgUnstakePoolToken: AminoInit = {
  aminoType: TxTypes.UnstakePoolToken,
  valueMap: {
    amount: AminoTypes.Dec,
  },
};

const MsgClaimPoolRewards: AminoInit = {
  aminoType: TxTypes.ClaimPoolRewards,
  valueMap: {
    poolId: AminoTypes.Long,
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
