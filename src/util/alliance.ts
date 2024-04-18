import { Carbon, TxTypes } from "@carbon-sdk/codec";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";

export const getRewardWithdrawalMsg = (walletAddress: string, denom: string, validatorAddress: string, delegatorAddress?: string): EncodeObject => {
  if (denom === "swth") {
    return {
      typeUrl: TxTypes.MsgWithdrawDelegatorReward,
      value: MsgWithdrawDelegatorReward.fromPartial({
        delegatorAddress: delegatorAddress ?? walletAddress,
        validatorAddress: validatorAddress,
      }),
    };
  } else {
    return {
      typeUrl: TxTypes.MsgAllianceClaimDelegationRewards,
      value: Carbon.Alliance.MsgClaimDelegationRewards.fromPartial({
        delegatorAddress: delegatorAddress ?? walletAddress,
        validatorAddress: validatorAddress,
        denom: denom,
      }),
    };
  }
}
