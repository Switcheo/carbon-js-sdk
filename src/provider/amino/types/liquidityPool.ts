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
    swapFee: ConvertEncType.Dec,
    tokenAWeight: ConvertEncType.Dec,
    tokenBWeight: ConvertEncType.Dec,
    ampBps: ConvertEncType.Long,
  },
};

const MsgCreatePoolWithLiquidity: AminoInit = {
  aminoType: TxTypes.CreatePoolWithLiquidity,
  valueMap: {
    tokenAWeight: ConvertEncType.Dec,
    tokenBWeight: ConvertEncType.Dec,
    swapFee: ConvertEncType.Dec,
    ampBps: ConvertEncType.Long,
  },
};

const MsgAddLiquidity: AminoInit = {
  aminoType: TxTypes.AddLiquidity,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgRemoveLiquidity: AminoInit = {
  aminoType: TxTypes.RemoveLiquidity,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgStakePoolToken: AminoInit = {
  aminoType: TxTypes.StakePoolToken,
  valueMap: {
    duration: ConvertEncType.Long,
  },
};

const MsgUnstakePoolToken: AminoInit = {
  aminoType: TxTypes.UnstakePoolToken,
  valueMap: {},
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
};

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
