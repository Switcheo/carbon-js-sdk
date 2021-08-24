import { TxTypes } from "@carbon-sdk/codec";
import { MsgWithdrawDelegatorReward } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/tx";
import { MsgDelegate, MsgUndelegate } from "@carbon-sdk/codec/cosmos/staking/v1beta1/tx";
import BigNumber from "bignumber.js";
import BaseModule from "./base";

export class StakingModule extends BaseModule {

  public async delegateTokens(params: StakingModule.DelegateTokensParams) {
    const wallet = this.getWallet();
    const value = MsgDelegate.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorAddress: params.validatorAddress,
      amount: {
        amount: params.amount.toString(10),
        denom: "swth",
      },
    });

    return wallet.sendTx({
      typeUrl: TxTypes.MsgDelegate,
      value,
    });
  }

  public async undelegateTokens(params: StakingModule.DelegateTokensParams) {
    const wallet = this.getWallet();
    const value = MsgUndelegate.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorAddress: params.validatorAddress,
      amount: {
        amount: params.amount.toString(10),
        denom: "swth",
      },
    });

    return wallet.sendTx({
      typeUrl: TxTypes.MsgUndelegate,
      value,
    });
  }

  public async withdrawRewards(params: StakingModule.WithdrawRewardsParams) {
    const wallet = this.getWallet();
    const value = MsgWithdrawDelegatorReward.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorAddress: params.validatorAddress,
    });
    return wallet.sendTx({
      typeUrl: TxTypes.MsgWithdrawDelegatorReward,
      value,
    });
  }
}

export namespace StakingModule {
  export interface DelegateTokensParams {
    delegatorAddress?: string,
    validatorAddress: string,
    amount: BigNumber,
  }
  export interface UndelegateTokensParams {
    delegatorAddress?: string,
    validatorAddress: string,
    amount: BigNumber,
  }
  export interface WithdrawRewardsParams {
    delegatorAddress?: string,
    validatorAddress: string,
  }
};
