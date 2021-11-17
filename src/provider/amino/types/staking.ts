import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const MsgDelegate: AminoInit = {
  aminoType: "cosmos-sdk/MsgDelegate",
  valueMap: {
    delegatorAddress: "string",
    validatorAddress: "string",
    amount: {
      amount: "string",
      denom: "string",
    },
  },
};

const MsgUndelegate: AminoInit = {
  aminoType: "cosmos-sdk/MsgUndelegate",
  valueMap: {
    delegatorAddress: "string",
    validatorAddress: "string",
    amount: {
      amount: "string",
      denom: "string",
    },
  },
};

const MsgBeginRedelegate: AminoInit = {
  aminoType: "cosmos-sdk/MsgBeginRedelegate",
  valueMap: {
    delegatorAddress: "string",
    validatorSrcAddress: "string",
    validatorDstAddress: "string",
    amount: {
      amount: "string",
      denom: "string",
    },
  },
};

const MsgWithdrawDelegatorReward: AminoInit = {
  aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
  valueMap: {
    delegatorAddress: "string",
    validatorAddress: "string",
  },
};

const StakingAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgDelegate]: generateAminoType(MsgDelegate),
  [CarbonTx.Types.MsgUndelegate]: generateAminoType(MsgUndelegate),
  [CarbonTx.Types.MsgBeginRedelegate]: generateAminoType(MsgBeginRedelegate),
  [CarbonTx.Types.MsgWithdrawDelegatorReward]: generateAminoType(MsgWithdrawDelegatorReward),
};

export default StakingAmino;
