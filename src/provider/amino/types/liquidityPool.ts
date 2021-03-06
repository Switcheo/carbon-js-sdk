import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoProcess, AminoValueMap, ConvertEncType, generateAminoType } from "../utils";

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
    numQuotes: ConvertEncType.Long,
    swapFee: ConvertEncType.Dec,
    tokenAWeight: ConvertEncType.Dec,
    tokenBWeight: ConvertEncType.Dec,
  },
};

const MsgCreatePoolWithLiquidity: AminoInit = {
  aminoType: TxTypes.CreatePoolWithLiquidity,
  valueMap: {
    tokenAWeight: ConvertEncType.Dec,
    tokenBWeight: ConvertEncType.Dec,
    amountA: ConvertEncType.Dec,
    amountB: ConvertEncType.Dec,
    swapFee: ConvertEncType.Dec,
    numQuotes: ConvertEncType.Long,
  },
};

const MsgAddLiquidity: AminoInit = {
  aminoType: TxTypes.AddLiquidity,
  valueMap: {
    poolId: ConvertEncType.Long,
    amountA: ConvertEncType.Dec,
    amountB: ConvertEncType.Dec,
    minShares: ConvertEncType.Dec,
  },
};

const MsgRemoveLiquidity: AminoInit = {
  aminoType: TxTypes.RemoveLiquidity,
  valueMap: {
    poolId: ConvertEncType.Long,
    shares: ConvertEncType.Dec,
  },
};

const MsgStakePoolToken: AminoInit = {
  aminoType: TxTypes.StakePoolToken,
  valueMap: {
    amount: ConvertEncType.Dec,
    duration: ConvertEncType.Long,
  },
};

const MsgUnstakePoolToken: AminoInit = {
  aminoType: TxTypes.UnstakePoolToken,
  valueMap: {
    amount: ConvertEncType.Dec,
  },
};

const MsgClaimPoolRewards: AminoInit = {
  aminoType: TxTypes.ClaimPoolRewards,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const commitTokensProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = input;
    if (input.duration.equals(0)) {
      delete newInput.duration;
    }
    return { amino, input: newInput };
  },
  fromAminoProcess: (amino: AminoValueMap, input: any) => {
    const newInput = input;
    if (!input.duration) {
      newInput.duration = "0";
    }
    return { amino, input: newInput };
  },
}

const LiquidityPoolAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreatePool]: generateAminoType(MsgCreatePool),
  [CarbonTx.Types.MsgCreatePoolWithLiquidity]: generateAminoType(MsgCreatePoolWithLiquidity),
  [CarbonTx.Types.MsgAddLiquidity]: generateAminoType(MsgAddLiquidity),
  [CarbonTx.Types.MsgRemoveLiquidity]: generateAminoType(MsgRemoveLiquidity),
  [CarbonTx.Types.MsgStakePoolToken]: generateAminoType(MsgStakePoolToken, commitTokensProcess),
  [CarbonTx.Types.MsgUnstakePoolToken]: generateAminoType(MsgUnstakePoolToken),
  [CarbonTx.Types.MsgClaimPoolRewards]: generateAminoType(MsgClaimPoolRewards),
};

export default LiquidityPoolAmino;
