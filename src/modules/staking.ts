import { TxTypes } from "@carbon-sdk/codec";
import { MsgWithdrawDelegatorReward } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/tx";
import { MsgBeginRedelegate, MsgDelegate, MsgUndelegate } from "@carbon-sdk/codec/cosmos/staking/v1beta1/tx";
import BigNumber from "bignumber.js";
import { CarbonTx } from "..";
import BaseModule from "./base";

export class StakingModule extends BaseModule {
  public async delegateTokens(params: StakingModule.DelegateTokensParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgDelegate.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorAddress: params.validatorAddress,
      amount: {
        amount: params.amount.toString(10),
        denom: "swth",
      },
    });

    return wallet.sendTx(
      {
        typeUrl: TxTypes.MsgDelegate,
        value,
      },
      opts
    );
  }

  public async undelegateTokens(params: StakingModule.DelegateTokensParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgUndelegate.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorAddress: params.validatorAddress,
      amount: {
        amount: params.amount.toString(10),
        denom: "swth",
      },
    });

    return wallet.sendTx(
      {
        typeUrl: TxTypes.MsgUndelegate,
        value,
      },
      opts
    );
  }

  public async redelegateTokens(params: StakingModule.RedelegateTokensParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgBeginRedelegate.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorSrcAddress: params.validatorSrcAddress,
      validatorDstAddress: params.validatorDstAddress,
      amount: {
        amount: params.amount.toString(10),
        denom: "swth",
      },
    });

    return wallet.sendTx(
      {
        typeUrl: TxTypes.MsgBeginRedelegate,
        value,
      },
      opts
    );
  }

  public async withdrawRewards(params: StakingModule.WithdrawRewardsParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgWithdrawDelegatorReward.fromPartial({
      delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
      validatorAddress: params.validatorAddress,
    });
    return wallet.sendTx(
      {
        typeUrl: TxTypes.MsgWithdrawDelegatorReward,
        value,
      },
      opts
    );
  }

  public async withdrawAllDelegatorRewards(params: StakingModule.WithdrawAllDelegatorRewardsParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const messages = params.validatorAddresses.map((address: string) => ({
      typeUrl: TxTypes.MsgWithdrawDelegatorReward,
      value: MsgWithdrawDelegatorReward.fromPartial({
        delegatorAddress: params.delegatorAddress ?? wallet.bech32Address,
        validatorAddress: address,
      }),
    }));

    return wallet.sendTxs(messages, opts);
  }
}

export namespace StakingModule {
  export interface DelegateTokensParams {
    delegatorAddress?: string;
    validatorAddress: string;
    amount: BigNumber;
  }
  export interface UndelegateTokensParams {
    delegatorAddress?: string;
    validatorAddress: string;
    amount: BigNumber;
  }
  export interface RedelegateTokensParams {
    delegatorAddress?: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount: BigNumber;
  }
  export interface WithdrawRewardsParams {
    delegatorAddress?: string;
    validatorAddress: string;
  }
  export interface WithdrawAllDelegatorRewardsParams {
    delegatorAddress?: string;
    validatorAddresses: string[];
  }
}
