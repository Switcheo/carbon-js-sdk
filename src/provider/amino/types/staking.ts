import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  Delegate: "cosmos-sdk/MsgDelegate",
  Undelegate: "cosmos-sdk/MsgUndelegate",
  BeginRedelegate: "cosmos-sdk/MsgBeginRedelegate",
  WithdrawDelegationReward: "cosmos-sdk/MsgWithdrawDelegationReward",
};

const MsgDelegate: AminoInit = {
  aminoType: TxTypes.Delegate,
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
  aminoType: TxTypes.Undelegate,
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
  aminoType: TxTypes.BeginRedelegate,
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
  aminoType: TxTypes.WithdrawDelegationReward,
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
